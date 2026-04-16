'use server';

import { supabase } from '@/lib/supabase/client';
import { revalidatePath } from 'next/cache';

export async function getCategoriesAction() {
  if (!supabase) return [];
  const { data } = await supabase.from('webunica_blog_categories').select('*').order('name');
  return data || [];
}

export async function saveBlogPost(postData: {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  seo_title?: string;
  seo_description?: string;
  cover_image?: string;
  cover_image_alt?: string;
  cover_image_prompt?: string;
  category_id?: string;
  status?: 'draft' | 'published';
}) {
  if (!supabase) {
    return { success: false, error: 'DB no disponible. Configura NEXT_PUBLIC_SUPABASE_URL y ANNON_KEY.' };
  }

  // Sólo los campos que existen en la tabla blog_posts
  const insertData = {
    title: postData.title,
    slug: postData.slug,
    content: postData.content,
    excerpt: postData.excerpt || null,
    seo_title: postData.seo_title || null,
    seo_description: postData.seo_description || null,
    cover_image: postData.cover_image || null,
    cover_image_alt: postData.cover_image_alt || null,
    category_id: postData.category_id || null,
    status: postData.status || 'published',
    published_at: new Date().toISOString(),
  };

  // Verificar si el slug ya existe
  const { data: existing, error: existError } = await supabase
    .from('webunica_blog_posts')
    .select('id')
    .eq('slug', insertData.slug)
    .maybeSingle();

  if (existError) {
    console.error('Error verificando slug:', existError);
  }

  if (existing) {
    insertData.slug = `${insertData.slug}-${Date.now().toString().slice(-4)}`;
  }

  const { data, error } = await supabase
    .from('webunica_blog_posts')
    .insert([insertData])
    .select()
    .single();

  if (error) {
    console.error('[saveBlogPost] Error Supabase:', error);
    return { success: false, error: `Error DB: ${error.message}` };
  }

  try {
    revalidatePath('/blog');
    revalidatePath(`/blog/${data.slug}`);
  } catch (e) {
    console.warn('Error en revalidatePath', e);
  }

  return { success: true, post: data };
}
