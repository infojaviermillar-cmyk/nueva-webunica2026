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
    category_id UUID REFERENCES public.webunica_blog_categories(id),
    status TEXT DEFAULT 'draft', -- 'draft' o 'published'
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

-- 5. SEMILLAS (Categorías Base)
INSERT INTO public.webunica_blog_categories (name, slug) VALUES 
('Desarrollo Web', 'desarrollo-web'),
('E-commerce Shopify', 'ecommerce-shopify'),
('SEO y Marketing', 'seo-marketing')
ON CONFLICT (slug) DO NOTHING;
