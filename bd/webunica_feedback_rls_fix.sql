-- ==========================================
-- FIX: Permitir que el admin vea todos los proyectos
-- Ejecutar en Supabase SQL Editor
-- ==========================================

-- Primero: Asegurarse de que las tablas existan
CREATE TABLE IF NOT EXISTS public.client_projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    title TEXT NOT NULL,
    status TEXT DEFAULT 'en_revision',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.project_designs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES public.client_projects(id) ON DELETE CASCADE NOT NULL,
    image_url TEXT NOT NULL,
    version TEXT DEFAULT 'v1',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.design_pins (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    design_id UUID REFERENCES public.project_designs(id) ON DELETE CASCADE NOT NULL,
    x_percent DECIMAL NOT NULL,
    y_percent DECIMAL NOT NULL,
    marker_number INTEGER NOT NULL,
    status TEXT DEFAULT 'abierto',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.pin_comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    pin_id UUID REFERENCES public.design_pins(id) ON DELETE CASCADE NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    content TEXT NOT NULL,
    attachment_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Activar RLS
ALTER TABLE public.client_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_designs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.design_pins ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pin_comments ENABLE ROW LEVEL SECURITY;

-- Borrar políticas anteriores (por si existen) para crearlas limpias
DROP POLICY IF EXISTS "Clientes pueden ver sus propios proyectos" ON public.client_projects;
DROP POLICY IF EXISTS "Admin puede ver todos los proyectos" ON public.client_projects;
DROP POLICY IF EXISTS "Admin puede insertar proyectos" ON public.client_projects;

DROP POLICY IF EXISTS "Clientes pueden ver los diseños de sus proyectos" ON public.project_designs;
DROP POLICY IF EXISTS "Admin puede ver todos los diseños" ON public.project_designs;
DROP POLICY IF EXISTS "Admin puede insertar diseños" ON public.project_designs;

DROP POLICY IF EXISTS "Clientes pueden ver los pines de sus diseños" ON public.design_pins;
DROP POLICY IF EXISTS "Clientes pueden crear pines en sus diseños" ON public.design_pins;
DROP POLICY IF EXISTS "Clientes pueden actualizar sus pines (ej. marcar resuelto)" ON public.design_pins;

DROP POLICY IF EXISTS "Clientes pueden ver los comentarios de sus pines" ON public.pin_comments;
DROP POLICY IF EXISTS "Clientes pueden crear comentarios en sus pines" ON public.pin_comments;

-- ==========================================
-- POLÍTICAS PARA client_projects
-- ==========================================

-- Clientes ven sus propios proyectos
CREATE POLICY "Clientes pueden ver sus propios proyectos"
ON public.client_projects FOR SELECT
USING (auth.uid() = user_id);

-- El service role (admin) puede hacer todo (bypasses RLS por default en service_role)
-- Pero también añadimos política para usuarios admin por email
CREATE POLICY "Admin puede ver todos los proyectos"
ON public.client_projects FOR SELECT
USING (
  (SELECT email FROM auth.users WHERE id = auth.uid()) IN ('javiermillar@gmail.com', 'javier@webunica.cl', 'javiermillarv@gmail.com')
);

CREATE POLICY "Admin puede insertar proyectos"
ON public.client_projects FOR INSERT
WITH CHECK (true);

CREATE POLICY "Admin puede actualizar proyectos"
ON public.client_projects FOR UPDATE
USING (true);

-- ==========================================
-- POLÍTICAS PARA project_designs
-- ==========================================

CREATE POLICY "Clientes pueden ver los diseños de sus proyectos"
ON public.project_designs FOR SELECT
USING (
    EXISTS (
        SELECT 1 FROM public.client_projects cp
        WHERE cp.id = project_designs.project_id AND cp.user_id = auth.uid()
    )
);

CREATE POLICY "Admin puede ver todos los diseños"
ON public.project_designs FOR SELECT
USING (
  (SELECT email FROM auth.users WHERE id = auth.uid()) IN ('javiermillar@gmail.com', 'javier@webunica.cl', 'javiermillarv@gmail.com')
);

CREATE POLICY "Admin puede insertar diseños"
ON public.project_designs FOR INSERT
WITH CHECK (true);

-- ==========================================
-- POLÍTICAS PARA design_pins
-- ==========================================

CREATE POLICY "Clientes pueden ver los pines de sus diseños"
ON public.design_pins FOR SELECT
USING (
    EXISTS (
        SELECT 1 FROM public.project_designs pd
        JOIN public.client_projects cp ON cp.id = pd.project_id
        WHERE pd.id = design_pins.design_id AND cp.user_id = auth.uid()
    )
);

CREATE POLICY "Clientes pueden crear pines en sus diseños"
ON public.design_pins FOR INSERT
WITH CHECK (
    EXISTS (
        SELECT 1 FROM public.project_designs pd
        JOIN public.client_projects cp ON cp.id = pd.project_id
        WHERE pd.id = design_id AND cp.user_id = auth.uid()
    )
);

CREATE POLICY "Clientes pueden actualizar sus pines"
ON public.design_pins FOR UPDATE
USING (
    EXISTS (
        SELECT 1 FROM public.project_designs pd
        JOIN public.client_projects cp ON cp.id = pd.project_id
        WHERE pd.id = design_pins.design_id AND cp.user_id = auth.uid()
    )
);

-- ==========================================
-- POLÍTICAS PARA pin_comments
-- ==========================================

CREATE POLICY "Clientes pueden ver los comentarios de sus pines"
ON public.pin_comments FOR SELECT
USING (
    EXISTS (
        SELECT 1 FROM public.design_pins dp
        JOIN public.project_designs pd ON pd.id = dp.design_id
        JOIN public.client_projects cp ON cp.id = pd.project_id
        WHERE dp.id = pin_comments.pin_id AND cp.user_id = auth.uid()
    )
);

CREATE POLICY "Clientes pueden crear comentarios en sus pines"
ON public.pin_comments FOR INSERT
WITH CHECK (
    auth.uid() = user_id AND
    EXISTS (
        SELECT 1 FROM public.design_pins dp
        JOIN public.project_designs pd ON pd.id = dp.design_id
        JOIN public.client_projects cp ON cp.id = pd.project_id
        WHERE dp.id = pin_id AND cp.user_id = auth.uid()
    )
);

-- ==========================================
-- BUCKET STORAGE (Ejecutar solo si no existe ya)
-- ==========================================
-- INSERT INTO storage.buckets (id, name, public)
-- VALUES ('designs', 'designs', true)
-- ON CONFLICT (id) DO NOTHING;

-- Política para el bucket (permitir lectura pública de imágenes)
-- DROP POLICY IF EXISTS "Acceso público a designs" ON storage.objects;
-- CREATE POLICY "Acceso público a designs"
-- ON storage.objects FOR SELECT
-- USING (bucket_id = 'designs');
