-- ==========================================
-- WEBUNICA - SISTEMA DE SEGUIMIENTO DE PROYECTOS
-- Ejecutar en Supabase SQL Editor
-- ==========================================

-- 1. Agregar columnas a client_projects
ALTER TABLE public.client_projects
  ADD COLUMN IF NOT EXISTS platform TEXT DEFAULT 'shopify',
  ADD COLUMN IF NOT EXISTS client_name TEXT,
  ADD COLUMN IF NOT EXISTS client_email TEXT,
  ADD COLUMN IF NOT EXISTS start_date DATE,
  ADD COLUMN IF NOT EXISTS deadline DATE,
  ADD COLUMN IF NOT EXISTS progress INT DEFAULT 0,
  ADD COLUMN IF NOT EXISTS description TEXT,
  ADD COLUMN IF NOT EXISTS staging_url TEXT,
  ADD COLUMN IF NOT EXISTS production_url TEXT;

-- 2. Tabla de fases/semanas del proyecto
CREATE TABLE IF NOT EXISTS public.project_phases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES public.client_projects(id) ON DELETE CASCADE,
  phase_number INT NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  status TEXT DEFAULT 'pendiente',
  badge TEXT DEFAULT 'normal',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Tabla de tareas dentro de cada fase
CREATE TABLE IF NOT EXISTS public.project_tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  phase_id UUID REFERENCES public.project_phases(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'pendiente',
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. RLS
ALTER TABLE public.project_phases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_tasks ENABLE ROW LEVEL SECURITY;

-- El cliente puede leer sus propias fases
CREATE POLICY "client_read_phases" ON public.project_phases
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.client_projects cp
      WHERE cp.id = project_phases.project_id
      AND cp.user_id = auth.uid()
    )
  );

-- El cliente puede leer sus propias tareas
CREATE POLICY "client_read_tasks" ON public.project_tasks
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.project_phases ph
      JOIN public.client_projects cp ON cp.id = ph.project_id
      WHERE ph.id = project_tasks.phase_id
      AND cp.user_id = auth.uid()
    )
  );

-- Service role (admin) tiene bypass por defecto en Supabase
