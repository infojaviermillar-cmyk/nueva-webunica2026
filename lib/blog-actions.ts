'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function saveBlogPost(postData: {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  seo_title: string;
  seo_description: string;
  category_id?: string;
  status?: 'draft' | 'published';
  cover_image?: string;
}) {
  const supabase = await createClient();

  // 1. Verificar si el slug ya existe
  const { data: existing } = await supabase
    .from('blog_posts')
    .select('id')
    .eq('slug', postData.slug)
    .maybeSingle();

  if (existing) {
    // Si existe, le agregamos un timestamp para que sea único
    postData.slug = `${postData.slug}-${Date.now().toString().slice(-4)}`;
  }

  // 2. Insertar el post
  const { data, error } = await supabase
    .from('blog_posts')
    .insert([
      {
        ...postData,
        status: postData.status || 'published', // Por defecto publicado si viene de la IA
        published_at: postData.status === 'published' || !postData.status ? new Date().toISOString() : null,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error('Error saving post:', error);
    throw new Error(`Error al guardar: ${error.message}`);
  }

  revalidatePath('/blog');
  revalidatePath(`/blog/${data.slug}`);
  
  return { success: true, post: data };
}
