-- =====================================================================
-- WEBUNICA INTELLIGENCE v4 — Migration (Core Web Vitals & PageSpeed)
-- Tabla: intel_pagespeed_audits
-- Data Source: MEASURED (Google PageSpeed Insights API) / ESTIMATED (Fallback)
-- =====================================================================

CREATE TABLE IF NOT EXISTS public.intel_pagespeed_audits (
  id                    UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id            UUID NOT NULL REFERENCES public.intel_projects(id) ON DELETE CASCADE,
  url                   TEXT NOT NULL,
  strategy              TEXT NOT NULL CHECK (strategy IN ('mobile', 'desktop')),
  
  -- Lighthouse Category Scores (0-100)
  performance_score     INTEGER NOT NULL CHECK (performance_score >= 0 AND performance_score <= 100),
  accessibility_score   INTEGER CHECK (accessibility_score >= 0 AND accessibility_score <= 100),
  best_practices_score INTEGER CHECK (best_practices_score >= 0 AND best_practices_score <= 100),
  seo_score             INTEGER CHECK (seo_score >= 0 AND seo_score <= 100),
  
  -- Core Web Vitals (Métricas Oficiales de Google)
  lcp_ms                NUMERIC,  -- Largest Contentful Paint (ms)
  inp_ms                NUMERIC,  -- Interaction to Next Paint / FID (ms)
  cls                   NUMERIC,  -- Cumulative Layout Shift (unitless, e.g. 0.05)
  fcp_ms                NUMERIC,  -- First Contentful Paint (ms)
  tbt_ms                NUMERIC,  -- Total Blocking Time (ms)
  
  -- Diagnósticos y Oportunidades: [{ id, title, description, score, displayValue, savings_bytes, savings_ms }]
  diagnostics           JSONB NOT NULL DEFAULT '[]',
  
  data_source           TEXT NOT NULL DEFAULT 'MEASURED'
                          CHECK (data_source IN ('MEASURED', 'ESTIMATED')),
                          
  audited_at            TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  created_at            TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Unique index por proyecto + url + estrategia para upserts limpios
CREATE UNIQUE INDEX IF NOT EXISTS idx_intel_pagespeed_unique
  ON public.intel_pagespeed_audits(project_id, url, strategy);

CREATE INDEX IF NOT EXISTS idx_intel_pagespeed_project  ON public.intel_pagespeed_audits(project_id);
CREATE INDEX IF NOT EXISTS idx_intel_pagespeed_score    ON public.intel_pagespeed_audits(performance_score DESC);

ALTER TABLE public.intel_pagespeed_audits ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "intel_pagespeed_audits_rls" ON public.intel_pagespeed_audits;
CREATE POLICY "intel_pagespeed_audits_rls" ON public.intel_pagespeed_audits
  USING (project_id IN (
    SELECT p.id FROM public.intel_projects p
    JOIN public.intel_organizations o ON o.id = p.org_id
    WHERE o.owner_id = auth.uid()
  ));
