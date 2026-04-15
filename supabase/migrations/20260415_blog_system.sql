-- =============================================
-- Blog System - Webunica.cl
-- =============================================

-- 1. Crear tabla de categorías
CREATE TABLE IF NOT EXISTS public.webunica_blog_categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Crear tabla de posts
CREATE TABLE IF NOT EXISTS public.webunica_blog_posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    content TEXT NOT NULL,
    excerpt TEXT,
    cover_image TEXT,
    cover_image_alt TEXT,
    category_id UUID REFERENCES public.webunica_blog_categories(id) ON DELETE SET NULL,
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
    published_at TIMESTAMP WITH TIME ZONE,
    seo_title TEXT,
    seo_description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Activar RLS
ALTER TABLE public.webunica_blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.webunica_blog_posts ENABLE ROW LEVEL SECURITY;

-- 4. Políticas de webunica_blog_categories
DROP POLICY IF EXISTS "Categories public read" ON public.webunica_blog_categories;
CREATE POLICY "Categories public read" 
ON public.webunica_blog_categories FOR SELECT USING (true);

-- 5. Políticas de webunica_blog_posts
DROP POLICY IF EXISTS "Posts public read" ON public.webunica_blog_posts;
CREATE POLICY "Posts public read"
ON public.webunica_blog_posts FOR SELECT USING (status = 'published' OR auth.role() = 'service_role');

DROP POLICY IF EXISTS "Posts anon insert" ON public.webunica_blog_posts;
CREATE POLICY "Posts anon insert"
ON public.webunica_blog_posts FOR INSERT WITH CHECK (true);

-- 6. Trigger para updated_at
CREATE OR REPLACE FUNCTION public.handle_webunica_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE 'plpgsql';

DROP TRIGGER IF EXISTS webunica_blog_posts_updated_at ON public.webunica_blog_posts;
CREATE TRIGGER webunica_blog_posts_updated_at
    BEFORE UPDATE ON public.webunica_blog_posts
    FOR EACH ROW EXECUTE PROCEDURE public.handle_webunica_updated_at();

-- 7. Categorías iniciales de Webunica
INSERT INTO public.webunica_blog_categories (name, slug, description) VALUES
('Shopify Chile', 'shopify-chile', 'Guías para crear y optimizar tiendas Shopify en Chile'),
('Tiendas en Línea', 'tiendas-en-linea', 'Estrategias de ecommerce para vender por internet en Chile'),
('Desarrollo Web', 'desarrollo-web', 'Artículos técnicos sobre Next.js, SaaS y arquitectura web'),
('Diseño Web', 'diseno-web', 'Tendencias y buenas prácticas de diseño web profesional'),
('Páginas Web', 'paginas-web', 'Todo sobre sitios web para empresas chilenas'),
('Web con IA', 'web-ia', 'Inteligencia artificial aplicada al desarrollo y diseño web')
ON CONFLICT (slug) DO NOTHING;
