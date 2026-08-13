-- =====================================================================
-- WEBUNICA INTELLIGENCE v2 — Migration (Competitors & Content Gap)
-- Tablas: intel_competitors, intel_keyword_gaps
-- =====================================================================

-- 1. COMPETITORS
CREATE TABLE IF NOT EXISTS public.intel_competitors (
  id               UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id       UUID NOT NULL REFERENCES public.intel_projects(id) ON DELETE CASCADE,
  domain           TEXT NOT NULL,
  name             TEXT,
  is_direct        BOOLEAN NOT NULL DEFAULT true,
  score            INTEGER,
  pages_analyzed   INTEGER NOT NULL DEFAULT 0,
  last_analyzed_at TIMESTAMP WITH TIME ZONE,
  created_at       TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(project_id, domain)
);

CREATE INDEX IF NOT EXISTS idx_intel_competitors_project ON public.intel_competitors(project_id);

ALTER TABLE public.intel_competitors ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "intel_competitors_rls" ON public.intel_competitors;
CREATE POLICY "intel_competitors_rls" ON public.intel_competitors
  USING (project_id IN (
    SELECT p.id FROM public.intel_projects p
    JOIN public.intel_organizations o ON o.id = p.org_id
    WHERE o.owner_id = auth.uid()
  ));

-- 2. KEYWORD GAPS
CREATE TABLE IF NOT EXISTS public.intel_keyword_gaps (
  id                   UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id           UUID NOT NULL REFERENCES public.intel_projects(id) ON DELETE CASCADE,
  keyword              TEXT NOT NULL,
  keyword_normalized   TEXT NOT NULL,
  intent               TEXT,
  project_frequency    INTEGER NOT NULL DEFAULT 0,
  competitor_domain    TEXT NOT NULL,
  competitor_frequency INTEGER NOT NULL DEFAULT 0,
  gap_type             TEXT NOT NULL CHECK (gap_type IN ('missing', 'weak', 'strong', 'shared')),
  opportunity_score    INTEGER NOT NULL DEFAULT 50,
  created_at           TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(project_id, competitor_domain, keyword_normalized)
);

CREATE INDEX IF NOT EXISTS idx_intel_gaps_project ON public.intel_keyword_gaps(project_id);
CREATE INDEX IF NOT EXISTS idx_intel_gaps_type    ON public.intel_keyword_gaps(gap_type);
CREATE INDEX IF NOT EXISTS idx_intel_gaps_score   ON public.intel_keyword_gaps(opportunity_score DESC);

ALTER TABLE public.intel_keyword_gaps ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "intel_gaps_rls" ON public.intel_keyword_gaps;
CREATE POLICY "intel_gaps_rls" ON public.intel_keyword_gaps
  USING (project_id IN (
    SELECT p.id FROM public.intel_projects p
    JOIN public.intel_organizations o ON o.id = p.org_id
    WHERE o.owner_id = auth.uid()
  ));
