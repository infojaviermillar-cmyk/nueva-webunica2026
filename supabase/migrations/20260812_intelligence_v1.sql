-- =====================================================================
-- WEBUNICA INTELLIGENCE v1 — Migration
-- Tablas: intel_organizations, intel_projects, intel_analysis_jobs,
--         intel_job_logs, intel_crawl_pages, intel_keywords,
--         intel_scores, intel_recommendations
-- =====================================================================

-- 1. ORGANIZATIONS
CREATE TABLE IF NOT EXISTS public.intel_organizations (
  id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  owner_id   UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name       TEXT NOT NULL,
  slug       TEXT NOT NULL UNIQUE,
  plan       TEXT NOT NULL DEFAULT 'free',
  settings   JSONB NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_intel_orgs_owner ON public.intel_organizations(owner_id);

ALTER TABLE public.intel_organizations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "intel_orgs_owner_all" ON public.intel_organizations;
CREATE POLICY "intel_orgs_owner_all" ON public.intel_organizations
  USING (owner_id = auth.uid())
  WITH CHECK (owner_id = auth.uid());

-- 2. PROJECTS
CREATE TABLE IF NOT EXISTS public.intel_projects (
  id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  org_id       UUID NOT NULL REFERENCES public.intel_organizations(id) ON DELETE CASCADE,
  name         TEXT NOT NULL,
  domain       TEXT NOT NULL,
  industry     TEXT,
  country      TEXT NOT NULL DEFAULT 'CL',
  language     TEXT NOT NULL DEFAULT 'es',
  description  TEXT,
  objective    TEXT,
  project_type TEXT NOT NULL DEFAULT 'website',
  status       TEXT NOT NULL DEFAULT 'active',
  settings     JSONB NOT NULL DEFAULT '{}',
  created_at   TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at   TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_intel_projects_org    ON public.intel_projects(org_id);
CREATE INDEX IF NOT EXISTS idx_intel_projects_domain ON public.intel_projects(domain);

ALTER TABLE public.intel_projects ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "intel_projects_org_owner" ON public.intel_projects;
CREATE POLICY "intel_projects_org_owner" ON public.intel_projects
  USING (org_id IN (SELECT id FROM public.intel_organizations WHERE owner_id = auth.uid()))
  WITH CHECK (org_id IN (SELECT id FROM public.intel_organizations WHERE owner_id = auth.uid()));

-- 3. ANALYSIS JOBS
CREATE TABLE IF NOT EXISTS public.intel_analysis_jobs (
  id                 UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id         UUID NOT NULL REFERENCES public.intel_projects(id) ON DELETE CASCADE,
  org_id             UUID NOT NULL REFERENCES public.intel_organizations(id) ON DELETE CASCADE,
  job_type           TEXT NOT NULL DEFAULT 'full_analysis',
  status             TEXT NOT NULL DEFAULT 'pending',
  progress           INTEGER NOT NULL DEFAULT 0,
  pages_found        INTEGER,
  pages_crawled      INTEGER,
  started_at         TIMESTAMP WITH TIME ZONE,
  completed_at       TIMESTAMP WITH TIME ZONE,
  error_message      TEXT,
  metadata           JSONB NOT NULL DEFAULT '{}',
  result             JSONB,
  estimated_cost_usd NUMERIC(10,6),
  created_at         TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at         TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_intel_jobs_project ON public.intel_analysis_jobs(project_id);
CREATE INDEX IF NOT EXISTS idx_intel_jobs_status  ON public.intel_analysis_jobs(status);
CREATE INDEX IF NOT EXISTS idx_intel_jobs_created ON public.intel_analysis_jobs(created_at DESC);

ALTER TABLE public.intel_analysis_jobs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "intel_jobs_org_owner" ON public.intel_analysis_jobs;
CREATE POLICY "intel_jobs_org_owner" ON public.intel_analysis_jobs
  USING (org_id IN (SELECT id FROM public.intel_organizations WHERE owner_id = auth.uid()));

-- 4. JOB LOGS
CREATE TABLE IF NOT EXISTS public.intel_job_logs (
  id         UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id     UUID NOT NULL REFERENCES public.intel_analysis_jobs(id) ON DELETE CASCADE,
  level      TEXT NOT NULL DEFAULT 'info',
  message    TEXT NOT NULL,
  data       JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_intel_logs_job     ON public.intel_job_logs(job_id);
CREATE INDEX IF NOT EXISTS idx_intel_logs_created ON public.intel_job_logs(created_at DESC);

ALTER TABLE public.intel_job_logs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "intel_logs_via_job" ON public.intel_job_logs;
CREATE POLICY "intel_logs_via_job" ON public.intel_job_logs
  USING (job_id IN (
    SELECT j.id FROM public.intel_analysis_jobs j
    JOIN public.intel_organizations o ON o.id = j.org_id
    WHERE o.owner_id = auth.uid()
  ));

-- 5. CRAWL PAGES
CREATE TABLE IF NOT EXISTS public.intel_crawl_pages (
  id                 UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id             UUID NOT NULL REFERENCES public.intel_analysis_jobs(id) ON DELETE CASCADE,
  project_id         UUID NOT NULL REFERENCES public.intel_projects(id) ON DELETE CASCADE,
  url                TEXT NOT NULL,
  url_normalized     TEXT NOT NULL,
  status_code        INTEGER,
  redirect_url       TEXT,
  depth              INTEGER NOT NULL DEFAULT 0,
  response_time_ms   INTEGER,
  word_count         INTEGER,
  is_indexable       BOOLEAN,
  canonical_url      TEXT,
  robots_directive   TEXT,
  page_type          TEXT,
  crawled_at         TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  title              TEXT,
  title_length       INTEGER,
  meta_description   TEXT,
  meta_desc_length   INTEGER,
  h1                 TEXT[],
  h2                 TEXT[],
  h3                 TEXT[],
  images_total       INTEGER,
  images_missing_alt INTEGER,
  links_internal     INTEGER,
  links_external     INTEGER,
  links_broken       INTEGER,
  seo_score          INTEGER,
  seo_issues         JSONB NOT NULL DEFAULT '[]',
  raw_data_source    TEXT NOT NULL DEFAULT 'crawler',
  UNIQUE(job_id, url_normalized)
);

CREATE INDEX IF NOT EXISTS idx_intel_pages_job       ON public.intel_crawl_pages(job_id);
CREATE INDEX IF NOT EXISTS idx_intel_pages_project   ON public.intel_crawl_pages(project_id);
CREATE INDEX IF NOT EXISTS idx_intel_pages_status    ON public.intel_crawl_pages(status_code);
CREATE INDEX IF NOT EXISTS idx_intel_pages_seo_score ON public.intel_crawl_pages(seo_score);

ALTER TABLE public.intel_crawl_pages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "intel_pages_org_owner" ON public.intel_crawl_pages;
CREATE POLICY "intel_pages_org_owner" ON public.intel_crawl_pages
  USING (project_id IN (
    SELECT p.id FROM public.intel_projects p
    JOIN public.intel_organizations o ON o.id = p.org_id
    WHERE o.owner_id = auth.uid()
  ));

-- 6. KEYWORDS
CREATE TABLE IF NOT EXISTS public.intel_keywords (
  id                  UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id          UUID NOT NULL REFERENCES public.intel_projects(id) ON DELETE CASCADE,
  job_id              UUID NOT NULL REFERENCES public.intel_analysis_jobs(id) ON DELETE CASCADE,
  keyword             TEXT NOT NULL,
  keyword_normalized  TEXT NOT NULL,
  intent              TEXT,
  intent_source       TEXT NOT NULL DEFAULT 'AI_INFERRED',
  frequency           INTEGER NOT NULL DEFAULT 1,
  pages_count         INTEGER NOT NULL DEFAULT 1,
  found_in            TEXT[] NOT NULL DEFAULT '{}',
  cluster             TEXT,
  volume              INTEGER,
  volume_source       TEXT,
  volume_retrieved_at TIMESTAMP WITH TIME ZONE,
  difficulty          NUMERIC(5,2),
  cpc                 NUMERIC(8,2),
  created_at          TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(job_id, keyword_normalized)
);

CREATE INDEX IF NOT EXISTS idx_intel_kw_project ON public.intel_keywords(project_id);
CREATE INDEX IF NOT EXISTS idx_intel_kw_job     ON public.intel_keywords(job_id);
CREATE INDEX IF NOT EXISTS idx_intel_kw_intent  ON public.intel_keywords(intent);
CREATE INDEX IF NOT EXISTS idx_intel_kw_freq    ON public.intel_keywords(frequency DESC);

ALTER TABLE public.intel_keywords ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "intel_keywords_org_owner" ON public.intel_keywords;
CREATE POLICY "intel_keywords_org_owner" ON public.intel_keywords
  USING (project_id IN (
    SELECT p.id FROM public.intel_projects p
    JOIN public.intel_organizations o ON o.id = p.org_id
    WHERE o.owner_id = auth.uid()
  ));

-- 7. INTELLIGENCE SCORES
CREATE TABLE IF NOT EXISTS public.intel_scores (
  id                  UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id          UUID NOT NULL REFERENCES public.intel_projects(id) ON DELETE CASCADE,
  job_id              UUID NOT NULL REFERENCES public.intel_analysis_jobs(id) ON DELETE CASCADE,
  score               INTEGER NOT NULL,
  score_version       TEXT NOT NULL DEFAULT 'v1',
  score_technical_seo INTEGER,
  score_content       INTEGER,
  score_on_page       INTEGER,
  score_architecture  INTEGER,
  score_opportunity   INTEGER,
  score_components    JSONB NOT NULL DEFAULT '{}',
  pages_analyzed      INTEGER NOT NULL DEFAULT 0,
  issues_critical     INTEGER NOT NULL DEFAULT 0,
  issues_warning      INTEGER NOT NULL DEFAULT 0,
  keywords_found      INTEGER NOT NULL DEFAULT 0,
  opportunities_count INTEGER NOT NULL DEFAULT 0,
  calculated_at       TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_intel_scores_project    ON public.intel_scores(project_id);
CREATE INDEX IF NOT EXISTS idx_intel_scores_calculated ON public.intel_scores(calculated_at DESC);

ALTER TABLE public.intel_scores ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "intel_scores_org_owner" ON public.intel_scores;
CREATE POLICY "intel_scores_org_owner" ON public.intel_scores
  USING (project_id IN (
    SELECT p.id FROM public.intel_projects p
    JOIN public.intel_organizations o ON o.id = p.org_id
    WHERE o.owner_id = auth.uid()
  ));

-- 8. RECOMMENDATIONS
CREATE TABLE IF NOT EXISTS public.intel_recommendations (
  id             UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id     UUID NOT NULL REFERENCES public.intel_projects(id) ON DELETE CASCADE,
  job_id         UUID NOT NULL REFERENCES public.intel_analysis_jobs(id) ON DELETE CASCADE,
  category       TEXT NOT NULL,
  priority       TEXT NOT NULL,
  status         TEXT NOT NULL DEFAULT 'detected',
  title          TEXT NOT NULL,
  problem        TEXT NOT NULL,
  recommendation TEXT NOT NULL,
  impact         TEXT NOT NULL,
  effort         TEXT NOT NULL,
  affected_url   TEXT,
  affected_urls  TEXT[],
  data_source    TEXT NOT NULL DEFAULT 'CALCULATED',
  ai_explanation TEXT,
  created_at     TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at     TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_intel_recs_project  ON public.intel_recommendations(project_id);
CREATE INDEX IF NOT EXISTS idx_intel_recs_priority ON public.intel_recommendations(priority);
CREATE INDEX IF NOT EXISTS idx_intel_recs_status   ON public.intel_recommendations(status);
CREATE INDEX IF NOT EXISTS idx_intel_recs_category ON public.intel_recommendations(category);

ALTER TABLE public.intel_recommendations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "intel_recs_select" ON public.intel_recommendations;
CREATE POLICY "intel_recs_select" ON public.intel_recommendations
  FOR SELECT USING (project_id IN (
    SELECT p.id FROM public.intel_projects p
    JOIN public.intel_organizations o ON o.id = p.org_id
    WHERE o.owner_id = auth.uid()
  ));

DROP POLICY IF EXISTS "intel_recs_insert" ON public.intel_recommendations;
CREATE POLICY "intel_recs_insert" ON public.intel_recommendations
  FOR INSERT WITH CHECK (project_id IN (
    SELECT p.id FROM public.intel_projects p
    JOIN public.intel_organizations o ON o.id = p.org_id
    WHERE o.owner_id = auth.uid()
  ));

DROP POLICY IF EXISTS "intel_recs_update" ON public.intel_recommendations;
CREATE POLICY "intel_recs_update" ON public.intel_recommendations
  FOR UPDATE USING (project_id IN (
    SELECT p.id FROM public.intel_projects p
    JOIN public.intel_organizations o ON o.id = p.org_id
    WHERE o.owner_id = auth.uid()
  ));

-- 9. TRIGGER FUNCTION + TRIGGERS
CREATE OR REPLACE FUNCTION public.intel_set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $func$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$func$;

DROP TRIGGER IF EXISTS intel_orgs_updated_at ON public.intel_organizations;
CREATE TRIGGER intel_orgs_updated_at
  BEFORE UPDATE ON public.intel_organizations
  FOR EACH ROW EXECUTE PROCEDURE public.intel_set_updated_at();

DROP TRIGGER IF EXISTS intel_projects_updated_at ON public.intel_projects;
CREATE TRIGGER intel_projects_updated_at
  BEFORE UPDATE ON public.intel_projects
  FOR EACH ROW EXECUTE PROCEDURE public.intel_set_updated_at();

DROP TRIGGER IF EXISTS intel_jobs_updated_at ON public.intel_analysis_jobs;
CREATE TRIGGER intel_jobs_updated_at
  BEFORE UPDATE ON public.intel_analysis_jobs
  FOR EACH ROW EXECUTE PROCEDURE public.intel_set_updated_at();

DROP TRIGGER IF EXISTS intel_recs_updated_at ON public.intel_recommendations;
CREATE TRIGGER intel_recs_updated_at
  BEFORE UPDATE ON public.intel_recommendations
  FOR EACH ROW EXECUTE PROCEDURE public.intel_set_updated_at();
