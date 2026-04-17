-- ==========================================
-- WEBUNICA PLATFORM - FULL DATABASE SCHEMA
-- Compatible con PostgreSQL 14+
-- ==========================================

-- 1. EXTENSIONES (Opcionales dependiendo del hosting)
-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. TABLAS DE BLOG
CREATE TABLE IF NOT EXISTS public.webunica_blog_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
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
    author TEXT DEFAULT 'Webunica Team',
    category_id UUID REFERENCES public.webunica_blog_categories(id),
    published BOOLEAN DEFAULT FALSE,
    seo_title TEXT,
    seo_description TEXT,
    keywords TEXT[],
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. TABLA DE LEADS (Captura de Clientes)
CREATE TABLE IF NOT EXISTS public.webunica_leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    service_interest TEXT,
    message TEXT,
    city TEXT,
    source_url TEXT,
    status TEXT DEFAULT 'nuevo', -- nuevo, contactado, cerrado, perdido
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. TABLA DE TESTIMONIOS (Social Proof)
CREATE TABLE IF NOT EXISTS public.webunica_testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    quote TEXT NOT NULL,
    author TEXT NOT NULL,
    stars INTEGER DEFAULT 5,
    active BOOLEAN DEFAULT FALSE,
    user_id UUID, -- Referencia opcional al auth.users de Supabase
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. ÍNDICES DE PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON public.webunica_blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON public.webunica_blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.webunica_leads(created_at);
CREATE INDEX IF NOT EXISTS idx_testimonials_active ON public.webunica_testimonials(active);

-- 6. POLÍTICAS DE SEGURIDAD (RLS)
-- Nota: Estas políticas asumen que usas el sistema de roles de Postgres/Supabase.
-- Si mueves a un server plano sin RLS, estas líneas son opcionales.

ALTER TABLE public.webunica_blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.webunica_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.webunica_testimonials ENABLE ROW LEVEL SECURITY;

-- Lectura pública para Blog y Testimonios activos
CREATE POLICY "Public read blog" ON public.webunica_blog_posts FOR SELECT USING (published = true);
CREATE POLICY "Public read testimonials" ON public.webunica_testimonials FOR SELECT USING (active = true);

-- Inserción pública para Leads (Formularios de contacto)
CREATE POLICY "Public insert leads" ON public.webunica_leads FOR INSERT WITH CHECK (true);

-- Inserción para usuarios autenticados (Testimonios)
CREATE POLICY "Auth insert testimonials" ON public.webunica_testimonials FOR INSERT WITH CHECK (true);

-- Permisos totales para el Admin (Ajustar segun el UID de tu usuario admin)
-- CREATE POLICY "Admin full access" ON public.webunica_blog_posts ALL USING (auth.uid() = 'TU-UID-AQUI');

-- 7. DATOS INICIALES (SEMILLAS)
INSERT INTO public.webunica_blog_categories (name, slug) VALUES 
('Desarrollo Web', 'desarrollo-web'),
('E-commerce Shopify', 'ecommerce-shopify'),
('SEO y Marketing', 'seo-marketing'),
('Inteligencia Artificial', 'ia-negocios')
ON CONFLICT (slug) DO NOTHING;
