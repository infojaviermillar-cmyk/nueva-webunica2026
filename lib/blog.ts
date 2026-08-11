import { supabase } from '@/lib/supabase/client';

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  cover_image: string | null;
  cover_image_alt: string | null;
  category_id: string;
  category?: {
    name: string;
    slug: string;
  };
  status: 'draft' | 'published';
  published_at: string | null;
  seo_title: string | null;
  seo_description: string | null;
  created_at: string;
  updated_at: string;
};

export type BlogCategory = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
};

const FALLBACK_POSTS: BlogPost[] = [
  {
    id: 'e01e4cf8-401c-4ab4-bf9c-fa4b504d9039',
    title: 'Por qué Shopify + Dropi no Garantizan Ventas: La Guía Estratégica para Crear un Ecommerce Rentable en Chile',
    slug: 'shopify-dropi-chile-estrategia-ecommerce-rentable',
    content: '',
    excerpt: 'Descubre por qué la tecnología es solo infraestructura y aprende la ecuación estratégica real (Producto × Oferta × Creatividad × Tráfico × CRO) para tener un ecommerce exitoso con Shopify y Dropi en Chile.',
    cover_image: '/shopify-dropi-chile.jpg',
    cover_image_alt: 'Estrategia de Ecommerce, Shopify y Dropi en Chile',
    category_id: 'a789bcba-60c7-4c36-a852-947239548471',
    category: {
      name: 'Shopify Chile',
      slug: 'shopify-chile'
    },
    status: 'published',
    published_at: '2026-08-11T10:00:00.000Z',
    seo_title: 'Shopify y Dropi Chile: Por qué Tu Tienda No Vende y Cómo Solucionarlo',
    seo_description: '¿Tienes una tienda Shopify con Dropi en Chile y no vendes? Descubre la estrategia real de marketing, CRO y productos para crear un ecommerce rentable.',
    created_at: '2026-08-11T10:00:00.000Z',
    updated_at: '2026-08-11T10:00:00.000Z'
  }
];

const FALLBACK_CATEGORIES: BlogCategory[] = [
  { id: '8bcd8ab2-5996-4805-b10d-e582f858b479', name: 'Tiendas en Línea', slug: 'tiendas-en-linea', description: 'Estrategias de ecommerce' },
  { id: 'a789bcba-60c7-4c36-a852-947239548471', name: 'Shopify Chile', slug: 'shopify-chile', description: 'Guías para Shopify' },
  { id: 'bdb644a9-ed4d-4bbe-94a7-5f075249f43b', name: 'Web con IA', slug: 'web-ia', description: 'IA aplicada al diseño web' },
  { id: 'bf9234a4-775f-4579-b6d5-02ee5d8e60fa', name: 'Páginas Web', slug: 'paginas-web', description: 'Sitios web para empresas' },
  { id: 'c5c45ea3-b239-45a8-a017-8f98195b9ce2', name: 'Desarrollo Web', slug: 'desarrollo-web', description: 'Next.js y arquitectura' },
  { id: 'e8439594-13ae-4c4c-abd5-0cf37997d6e7', name: 'Diseño Web', slug: 'diseno-web', description: 'Tendencias de diseño' }
];

/**
 * Obtiene todos los posts publicados. Retorna los fallback si la DB está vacía.
 */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  if (!supabase) return FALLBACK_POSTS;
  try {
    const { data, error } = await supabase
      .from('webunica_blog_posts')
      .select('*, category:webunica_blog_categories(name, slug)')
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    if (error) throw error;
    const posts = (data as BlogPost[]) || [];
    
    // Merge fallback posts if not present in DB
    const existingSlugs = new Set(posts.map(p => p.slug));
    const missingFallbacks = FALLBACK_POSTS.filter(fp => !existingSlugs.has(fp.slug));
    
    return [...posts, ...missingFallbacks];
  } catch (e) {
    console.error('[blog] getPublishedPosts:', e);
    return FALLBACK_POSTS;
  }
}

/**
 * Obtiene un post por su slug. Retorna null si no existe o DB no disponible.
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!supabase) return null;
  try {
    const { data, error } = await supabase
      .from('webunica_blog_posts')
      .select('*, category:webunica_blog_categories(name, slug)')
      .eq('slug', slug)
      .maybeSingle();

    if (error) throw error;
    return data as BlogPost | null;
  } catch (e) {
    console.error('[blog] getPostBySlug:', e);
    return null;
  }
}

/**
 * Obtiene todas las categorías. Retorna [] si DB no disponible.
 */
export async function getCategories(): Promise<BlogCategory[]> {
  if (!supabase) return FALLBACK_CATEGORIES;
  try {
    const { data, error } = await supabase
      .from('webunica_blog_categories')
      .select('*')
      .order('name', { ascending: true });

    if (error) throw error;
    const cats = (data as BlogCategory[]) || [];
    return cats.length > 0 ? cats : FALLBACK_CATEGORIES;
  } catch (e) {
    console.error('[blog] getCategories:', e);
    return FALLBACK_CATEGORIES;
  }
}

/**
 * Obtiene posts por categoría.
 */
export async function getPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  if (!supabase) return [];
  try {
    const { data, error } = await supabase
      .from('webunica_blog_posts')
      .select('*, category:webunica_blog_categories(name, slug)')
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    if (error) throw error;
    const all = (data as BlogPost[]) || [];
    return all.filter(p => p.category?.slug === categorySlug);
  } catch (e) {
    console.error('[blog] getPostsByCategory:', e);
    return [];
  }
}
