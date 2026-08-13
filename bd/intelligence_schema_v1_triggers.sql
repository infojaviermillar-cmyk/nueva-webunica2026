-- =====================================================================
-- WEBUNICA INTELLIGENCE — Schema v1 — PARTE 2: FUNCIÓN + TRIGGERS
-- Ejecutar DESPUÉS de la Parte 1 en un nuevo query en SQL Editor
-- =====================================================================

CREATE OR REPLACE FUNCTION public.intel_set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE TRIGGER intel_orgs_updated_at
  BEFORE UPDATE ON public.intel_organizations
  FOR EACH ROW EXECUTE FUNCTION public.intel_set_updated_at();

CREATE TRIGGER intel_projects_updated_at
  BEFORE UPDATE ON public.intel_projects
  FOR EACH ROW EXECUTE FUNCTION public.intel_set_updated_at();

CREATE TRIGGER intel_jobs_updated_at
  BEFORE UPDATE ON public.intel_analysis_jobs
  FOR EACH ROW EXECUTE FUNCTION public.intel_set_updated_at();

CREATE TRIGGER intel_recs_updated_at
  BEFORE UPDATE ON public.intel_recommendations
  FOR EACH ROW EXECUTE FUNCTION public.intel_set_updated_at();
