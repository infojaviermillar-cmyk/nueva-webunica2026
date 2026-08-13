-- =====================================================================
-- WEBUNICA INTELLIGENCE v3 — Migration (SERP Rankings & Schema Audits)
-- Tablas: intel_serp_rankings, intel_schema_audits
-- Data Source: ESTIMATED (simulación determinista) — nunca marcar como MEASURED
-- =====================================================================

-- ─── 1. SERP RANKINGS ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.intel_serp_rankings (
  id                  UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id          UUID NOT NULL REFERENCES public.intel_projects(id) ON DELETE CASCADE,
  keyword             TEXT NOT NULL,
  keyword_normalized  TEXT NOT NULL,
  url                 TEXT,                         -- URL del proyecto rankeando
  position            INTEGER,                      -- 1–100, NULL = no rankeando
  previous_position   INTEGER,                      -- posición anterior (para delta ▲/▼)
  serp_features       JSONB NOT NULL DEFAULT '[]',  -- ['featured_snippet','local_pack',...]
  search_engine       TEXT NOT NULL DEFAULT 'google.cl',
  locale              TEXT NOT NULL DEFAULT 'es-CL',
  data_source         TEXT NOT NULL DEFAULT 'ESTIMATED'
                        CHECK (data_source IN ('ESTIMATED', 'IMPORTED', 'MEASURED')),
  relevance_score     INTEGER,                      -- 0-100, score interno de relevancia
  checked_at          TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  created_at          TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_intel_serp_project      ON public.intel_serp_rankings(project_id);
CREATE INDEX IF NOT EXISTS idx_intel_serp_keyword      ON public.intel_serp_rankings(keyword_normalized);
CREATE INDEX IF NOT EXISTS idx_intel_serp_position     ON public.intel_serp_rankings(position);
CREATE INDEX IF NOT EXISTS idx_intel_serp_checked_at   ON public.intel_serp_rankings(checked_at DESC);

-- Unique: solo un registro activo por proyecto + keyword (upsert por checked_at)
CREATE UNIQUE INDEX IF NOT EXISTS idx_intel_serp_unique
  ON public.intel_serp_rankings(project_id, keyword_normalized);

ALTER TABLE public.intel_serp_rankings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "intel_serp_rankings_rls" ON public.intel_serp_rankings;
CREATE POLICY "intel_serp_rankings_rls" ON public.intel_serp_rankings
  USING (project_id IN (
    SELECT p.id FROM public.intel_projects p
    JOIN public.intel_organizations o ON o.id = p.org_id
    WHERE o.owner_id = auth.uid()
  ));

-- ─── 2. SCHEMA AUDITS ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.intel_schema_audits (
  id                  UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id          UUID NOT NULL REFERENCES public.intel_projects(id) ON DELETE CASCADE,
  url                 TEXT NOT NULL,
  -- Schemas detectados como JSON array de tipos: ["LocalBusiness","FAQPage",...]
  schemas_found       JSONB NOT NULL DEFAULT '[]',
  -- Flags rápidos para queries eficientes
  has_local_business  BOOLEAN NOT NULL DEFAULT false,
  has_organization    BOOLEAN NOT NULL DEFAULT false,
  has_product         BOOLEAN NOT NULL DEFAULT false,
  has_faq_page        BOOLEAN NOT NULL DEFAULT false,
  has_breadcrumb      BOOLEAN NOT NULL DEFAULT false,
  has_website         BOOLEAN NOT NULL DEFAULT false,
  -- Issues detectados: [{ code, severity, message, field }]
  issues              JSONB NOT NULL DEFAULT '[]',
  -- Score de implementación 0-100 (CALCULATED)
  score               INTEGER NOT NULL DEFAULT 0
                        CHECK (score >= 0 AND score <= 100),
  audited_at          TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  created_at          TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_intel_schema_unique
  ON public.intel_schema_audits(project_id, url);

CREATE INDEX IF NOT EXISTS idx_intel_schema_project    ON public.intel_schema_audits(project_id);
CREATE INDEX IF NOT EXISTS idx_intel_schema_local_biz  ON public.intel_schema_audits(has_local_business)
  WHERE has_local_business = true;
CREATE INDEX IF NOT EXISTS idx_intel_schema_score      ON public.intel_schema_audits(score DESC);

ALTER TABLE public.intel_schema_audits ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "intel_schema_audits_rls" ON public.intel_schema_audits;
CREATE POLICY "intel_schema_audits_rls" ON public.intel_schema_audits
  USING (project_id IN (
    SELECT p.id FROM public.intel_projects p
    JOIN public.intel_organizations o ON o.id = p.org_id
    WHERE o.owner_id = auth.uid()
  ));
