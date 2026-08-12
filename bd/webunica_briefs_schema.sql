-- =========================================================
-- ESTRUCTURA SQL PARA BRIEF UX/UI ECOMMERCE (WEBUNICA.CL)
-- =========================================================

CREATE TABLE IF NOT EXISTS public.webunica_briefs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    token TEXT UNIQUE NOT NULL,
    company_name TEXT NOT NULL,
    status TEXT DEFAULT 'Borrador',
    project_info JSONB DEFAULT '{}'::jsonb,
    brand_identity JSONB DEFAULT '{}'::jsonb,
    brand_personality JSONB DEFAULT '{}'::jsonb,
    target_audience JSONB DEFAULT '{}'::jsonb,
    value_proposition JSONB DEFAULT '{}'::jsonb,
    visual_direction JSONB DEFAULT '{}'::jsonb,
    references_data JSONB DEFAULT '{}'::jsonb,
    homepage_priorities JSONB DEFAULT '{}'::jsonb,
    hero_preferences JSONB DEFAULT '{}'::jsonb,
    categories_and_brands JSONB DEFAULT '{}'::jsonb,
    product_page_priorities JSONB DEFAULT '{}'::jsonb,
    client_doubts JSONB DEFAULT '{}'::jsonb,
    content_and_scope JSONB DEFAULT '{}'::jsonb,
    ai_analysis JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE public.webunica_briefs ENABLE ROW LEVEL SECURITY;

-- Políticas de lectura e inserción
CREATE POLICY "Acceso público lectura brief por token" ON public.webunica_briefs 
    FOR SELECT USING (true);

CREATE POLICY "Acceso público edición brief" ON public.webunica_briefs 
    FOR UPDATE USING (true);

CREATE POLICY "Acceso público inserción brief" ON public.webunica_briefs 
    FOR INSERT WITH CHECK (true);
