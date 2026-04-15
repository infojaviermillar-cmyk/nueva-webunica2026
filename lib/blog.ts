import { createClient } from '@/lib/supabase/server';
import { cache } from 'react';

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  cover_image: string | null;
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
 * Obtiene todos los posts publicados
 */
export const getPublishedPosts = cache(async () => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*, category:blog_categories(name, slug)')
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }

  return data as BlogPost[];
});

/**
 * Obtiene un post por su slug
 */
export const getPostBySlug = cache(async (slug: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*, category:blog_categories(name, slug)')
    .eq('slug', slug)
    .maybeSingle();

  if (error) {
    console.error('Error fetching post:', error);
    return null;
  }

  return data as BlogPost;
});

/**
 * Obtiene todas las categorías
 */
export const getCategories = cache(async () => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('blog_categories')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  return data as BlogCategory[];
});

/**
 * Obtiene posts por categoría
 */
export const getPostsByCategory = cache(async (categorySlug: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*, category:blog_categories(name, slug)')
    .eq('status', 'published')
    .eq('category.slug', categorySlug)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }

  return data as BlogPost[];
});
