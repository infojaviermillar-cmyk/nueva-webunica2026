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

/**
 * Obtiene todos los posts publicados. Retorna [] si DB no está disponible.
 */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  if (!supabase) return [];
  try {
    const { data, error } = await supabase
      .from('webunica_blog_posts')
      .select('*, category:webunica_blog_categories(name, slug)')
      .eq('status', 'published')
      .order('published_at', { ascending: false });

    if (error) throw error;
    return (data as BlogPost[]) || [];
  } catch (e) {
    console.error('[blog] getPublishedPosts:', e);
    return [];
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
  if (!supabase) return [];
  try {
    const { data, error } = await supabase
      .from('webunica_blog_categories')
      .select('*')
      .order('name', { ascending: true });

    if (error) throw error;
    return (data as BlogCategory[]) || [];
  } catch (e) {
    console.error('[blog] getCategories:', e);
    return [];
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
