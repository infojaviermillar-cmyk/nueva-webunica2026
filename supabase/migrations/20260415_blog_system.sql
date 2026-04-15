-- Create Categories table
CREATE TABLE IF NOT EXISTS public.blog_categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create Posts table
CREATE TABLE IF NOT EXISTS public.blog_posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    content TEXT NOT NULL,
    excerpt TEXT,
    cover_image TEXT,
    category_id UUID REFERENCES public.blog_categories(id),
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
    published_at TIMESTAMP WITH TIME ZONE,
    seo_title TEXT,
    seo_description TEXT,
    author_id UUID REFERENCES auth.users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Policies for Categories
CREATE POLICY "Categories are viewable by everyone" 
ON public.blog_categories FOR SELECT USING (true);

CREATE POLICY "Only admins can modify categories" 
ON public.blog_categories 
FOR ALL USING (auth.role() = 'service_role' OR auth.uid() IN (SELECT id FROM auth.users WHERE email = 'info@webunica.cl'));

-- Policies for Posts
CREATE POLICY "Published posts are viewable by everyone" 
ON public.blog_posts FOR SELECT USING (status = 'published');

CREATE POLICY "Only admins can modify posts" 
ON public.blog_posts 
FOR ALL USING (auth.role() = 'service_role' OR auth.uid() IN (SELECT id FROM auth.users WHERE email = 'info@webunica.cl'));

-- Trigger for update timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER blog_posts_updated_at
    BEFORE UPDATE ON public.blog_posts
    FOR EACH ROW
    EXECUTE PROCEDURE public.handle_updated_at();

-- Sample Categories
INSERT INTO public.blog_categories (name, slug, description) VALUES
('Next.js', 'nextjs', 'Artículos sobre desarrollo web moderno con Next.js'),
('Shopify', 'shopify', 'Guías y consejos para optimizar tu tienda Shopify'),
('Ecommerce', 'ecommerce', 'Estrategias de venta en línea'),
('SEO', 'seo', 'Posicionamiento en buscadores para empresas');
