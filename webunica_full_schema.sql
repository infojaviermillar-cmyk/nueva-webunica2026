-- ==========================================
-- WEBUNICA PLATFORM - REINICIO TOTAL DE BD
-- Ejecuta este código en el SQL Editor de Supabase
-- para limpiar y crear todas las tablas necesarias.
-- ==========================================

-- 0. LIMPIEZA (DROP) - ¡CUIDADO: Borra datos existentes!
DROP TABLE IF EXISTS public.webunica_blog_posts CASCADE;
DROP TABLE IF EXISTS public.webunica_blog_categories CASCADE;
DROP TABLE IF EXISTS public.leads CASCADE;
DROP TABLE IF EXISTS public.testimonials CASCADE;

-- 1. TABLA DE CATEGORÍAS (Usando webunica_ para coherencia con el código)
CREATE TABLE public.webunica_blog_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. TABLA DE POSTS
CREATE TABLE public.webunica_blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    cover_image TEXT,
    cover_image_alt TEXT,
    category_id UUID REFERENCES public.webunica_blog_categories(id) ON DELETE SET NULL,
    status TEXT DEFAULT 'draft', -- 'draft' o 'published'
    published_at TIMESTAMPTZ,
    seo_title TEXT,
    seo_description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. TABLA DE LEADS (Captura de Clientes)
CREATE TABLE public.leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    service_interest TEXT,
    message TEXT,
    city TEXT,
    source_url TEXT,
    status TEXT DEFAULT 'nuevo', 
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. TABLA DE TESTIMONIOS (Social Proof)
CREATE TABLE public.testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    quote TEXT NOT NULL,
    author TEXT NOT NULL,
    stars INTEGER DEFAULT 5,
    active BOOLEAN DEFAULT FALSE,
    user_id UUID, 
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. SEGURIDAD (RLS - Row Level Security)
-- Activar RLS para permitir lectura pública y proteger escritura
ALTER TABLE public.webunica_blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.webunica_blog_posts ENABLE ROW LEVEL SECURITY;

-- Políticas de lectura (Públicas)
CREATE POLICY "Lectura pública de categorías" ON public.webunica_blog_categories FOR SELECT USING (true);
CREATE POLICY "Lectura pública de posts publicados" ON public.webunica_blog_posts FOR SELECT USING (status = 'published' OR auth.role() = 'service_role');

-- Políticas de inserción (Para que el cotizador/formulario funcione)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Cualquiera puede enviar leads" ON public.leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Lectura de leads para admin" ON public.leads FOR SELECT USING (auth.role() = 'service_role');

-- 6. ÍNDICES DE PERFORMANCE
CREATE INDEX idx_blog_sh_slug ON public.webunica_blog_posts(slug);
CREATE INDEX idx_leads_sh_created ON public.leads(created_at);

-- 7. SEMILLAS (Precarga con IDs específicos para compatibilidad)
INSERT INTO public.webunica_blog_categories (id, name, slug) VALUES 
('c5c45ea3-b239-45a8-a017-8f98195b9ce2', 'Desarrollo Web', 'desarrollo-web'),
('e8439594-13ae-4c4c-abd5-0cf37997d6e7', 'Diseño Web', 'diseno-web'),
('a789bcba-60c7-4c36-a852-947239548471', 'E-commerce Shopify', 'ecommerce-shopify');

INSERT INTO public.webunica_blog_categories (name, slug) VALUES 
('SEO y Marketing', 'seo-marketing'),
('Web con IA', 'web-ia');
