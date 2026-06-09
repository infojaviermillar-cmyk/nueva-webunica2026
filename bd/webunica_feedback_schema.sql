-- ==========================================
-- WEBUNICA PLATFORM - MODULO DE FEEDBACK DE DISEÑO
-- ==========================================

-- 1. ESTRUCTURA: PROYECTOS DE CLIENTES
CREATE TABLE IF NOT EXISTS public.client_projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    title TEXT NOT NULL,
    status TEXT DEFAULT 'en_revision', -- 'en_revision', 'aprobado'
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. ESTRUCTURA: DISEÑOS DEL PROYECTO
CREATE TABLE IF NOT EXISTS public.project_designs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID REFERENCES public.client_projects(id) ON DELETE CASCADE NOT NULL,
    image_url TEXT NOT NULL,
    version TEXT DEFAULT 'v1',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. ESTRUCTURA: PINES DE DISEÑO (MARCADORES)
CREATE TABLE IF NOT EXISTS public.design_pins (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    design_id UUID REFERENCES public.project_designs(id) ON DELETE CASCADE NOT NULL,
    x_percent DECIMAL NOT NULL,
    y_percent DECIMAL NOT NULL,
    marker_number INTEGER NOT NULL,
    status TEXT DEFAULT 'abierto', -- 'abierto', 'resuelto'
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. ESTRUCTURA: COMENTARIOS DEL PIN
CREATE TABLE IF NOT EXISTS public.pin_comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    pin_id UUID REFERENCES public.design_pins(id) ON DELETE CASCADE NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    content TEXT NOT NULL,
    attachment_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. SEGURIDAD Y RLS (Row Level Security)
ALTER TABLE public.client_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_designs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.design_pins ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pin_comments ENABLE ROW LEVEL SECURITY;

-- Políticas para client_projects
CREATE POLICY "Clientes pueden ver sus propios proyectos" 
ON public.client_projects FOR SELECT 
USING (auth.uid() = user_id);

-- Políticas para project_designs
CREATE POLICY "Clientes pueden ver los diseños de sus proyectos" 
ON public.project_designs FOR SELECT 
USING (
    EXISTS (
        SELECT 1 FROM public.client_projects cp 
        WHERE cp.id = project_designs.project_id AND cp.user_id = auth.uid()
    )
);

-- Políticas para design_pins
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

CREATE POLICY "Clientes pueden actualizar sus pines (ej. marcar resuelto)" 
ON public.design_pins FOR UPDATE 
USING (
    EXISTS (
        SELECT 1 FROM public.project_designs pd
        JOIN public.client_projects cp ON cp.id = pd.project_id
        WHERE pd.id = design_pins.design_id AND cp.user_id = auth.uid()
    )
);

-- Políticas para pin_comments
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
