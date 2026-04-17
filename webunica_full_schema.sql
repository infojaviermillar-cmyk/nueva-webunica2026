-- ==========================================
-- WEBUNICA PLATFORM - REINICIO Y CARGA TOTAL
-- Este script recrea la BD y carga los datos de:
-- Categorías, Posts y Testimonios.
-- ==========================================

-- 0. LIMPIEZA TOTAL
DROP TABLE IF EXISTS public.webunica_blog_posts CASCADE;
DROP TABLE IF EXISTS public.webunica_blog_categories CASCADE;
DROP TABLE IF EXISTS public.leads CASCADE;
DROP TABLE IF EXISTS public.testimonials CASCADE;

-- 1. ESTRUCTURA: CATEGORÍAS
CREATE TABLE public.webunica_blog_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. ESTRUCTURA: POSTS
CREATE TABLE public.webunica_blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    cover_image TEXT,
    cover_image_alt TEXT,
    category_id UUID REFERENCES public.webunica_blog_categories(id) ON DELETE SET NULL,
    status TEXT DEFAULT 'draft',
    published_at TIMESTAMPTZ,
    seo_title TEXT,
    seo_description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. ESTRUCTURA: LEADS
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

-- 4. ESTRUCTURA: TESTIMONIOS
CREATE TABLE public.testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    quote TEXT NOT NULL,
    author TEXT NOT NULL,
    stars INTEGER DEFAULT 5,
    active BOOLEAN DEFAULT FALSE,
    user_id UUID, 
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. SEGURIDAD Y RLS
ALTER TABLE public.webunica_blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.webunica_blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Lectura pública de categorías" ON public.webunica_blog_categories FOR SELECT USING (true);
CREATE POLICY "Lectura pública de posts" ON public.webunica_blog_posts FOR SELECT USING (status = 'published' OR auth.role() = 'service_role');
CREATE POLICY "Inserción pública de leads" ON public.leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Lectura pública de testimonios" ON public.testimonials FOR SELECT USING (active = true);

-- 6. DATOS: CATEGORÍAS
INSERT INTO "public"."webunica_blog_categories" ("id", "name", "slug", "description", "created_at") VALUES 
('8bcd8ab2-5996-4805-b10d-e582f858b479', 'Tiendas en Línea', 'tiendas-en-linea', 'Estrategias de ecommerce para vender por internet en Chile', '2026-04-16 20:40:56.729698+00'), 
('a789bcba-60c7-4c36-a852-947239548471', 'Shopify Chile', 'shopify-chile', 'Guías para crear y optimizar tiendas Shopify en Chile', '2026-04-16 20:40:56.729698+00'), 
('bdb644a9-ed4d-4bbe-94a7-5f075249f43b', 'Web con IA', 'web-ia', 'Inteligencia artificial aplicada al desarrollo y diseño web', '2026-04-16 20:40:56.729698+00'), 
('bf9234a4-775f-4579-b6d5-02ee5d8e60fa', 'Páginas Web', 'paginas-web', 'Todo sobre sitios web para empresas chilenas', '2026-04-16 20:40:56.729698+00'), 
('c5c45ea3-b239-45a8-a017-8f98195b9ce2', 'Desarrollo Web', 'desarrollo-web', 'Artículos técnicos sobre Next.js, SaaS y arquitectura web', '2026-04-16 20:40:56.729698+00'), 
('e8439594-13ae-4c4c-abd5-0cf37997d6e7', 'Diseño Web', 'diseno-web', 'Tendencias y buenas prácticas de diseño web profesional', '2026-04-16 20:40:56.729698+00');

-- 7. DATOS: TESTIMONIOS
INSERT INTO "public"."testimonials" ("id", "quote", "author", "stars", "active", "created_at", "user_id") VALUES 
('2c385c67-8cd8-4e93-95e6-706ff4d08e9a', 'Muy satisfecha con el trabajo de la agencia, serios y responsables. La implementación de nuestra tienda Shopify fue impecable.', 'Ana Maria - altavistachile.cl', 5, true, '2026-04-17 13:57:20.609881+00', null);

-- 8. DATOS: POSTS
-- Debido al tamaño de los posts, ejecuta el archivo 'bd/webunica_blog_posts_rows.sql' 
-- después de este script para cargar todos los artículos completos.
