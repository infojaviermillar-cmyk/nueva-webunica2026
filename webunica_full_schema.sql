-- ==========================================
-- WEBUNICA PLATFORM - FULL DATABASE SCHEMA
-- Compatible con PostgreSQL 14+
-- ==========================================

-- 1. TABLAS DE BLOG
CREATE TABLE IF NOT EXISTS public.webunica_blog_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.webunica_blog_posts (
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

-- 2. TABLA DE LEADS (Captura de Clientes)
CREATE TABLE IF NOT EXISTS public.leads (
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

-- 3. TABLA DE TESTIMONIOS (Social Proof)
CREATE TABLE IF NOT EXISTS public.testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    quote TEXT NOT NULL,
    author TEXT NOT NULL,
    stars INTEGER DEFAULT 5,
    active BOOLEAN DEFAULT FALSE,
    user_id UUID, 
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. ÍNDICES DE PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_blog_sh_slug ON public.webunica_blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_leads_sh_created ON public.leads(created_at);
CREATE INDEX IF NOT EXISTS idx_testimonials_sh_active ON public.testimonials(active);

-- 5. SEMILLAS CON UUIDS ESPECÍFICOS (Para evitar errores de FK)
INSERT INTO public.webunica_blog_categories (id, name, slug) VALUES 
('c5c45ea3-b239-45a8-a017-8f98195b9ce2', 'Desarrollo Web', 'desarrollo-web'),
('e8439594-13ae-4c4c-abd5-0cf37997d6e7', 'Diseño Web', 'diseno-web'),
('a789bcba-60c7-4c36-a852-947239548471', 'E-commerce Shopify', 'ecommerce-shopify')
ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, slug = EXCLUDED.slug;

-- Categorías adicionales
INSERT INTO public.webunica_blog_categories (name, slug) VALUES 
('SEO y Marketing', 'seo-marketing'),
('Web con IA', 'web-ia')
ON CONFLICT (slug) DO NOTHING;
