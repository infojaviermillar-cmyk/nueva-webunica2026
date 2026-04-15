'use server';

import { supabase } from '@/lib/supabase/client';
import { revalidatePath } from 'next/cache';

export async function saveBlogPost(postData: {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  seo_title: string;
  seo_description: string;
  cover_image?: string;
  cover_image_alt?: string;
  category_id?: string;
  status?: 'draft' | 'published';
}) {
  if (!supabase) throw new Error('Base de datos no disponible. Configura las variables NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY.');

  // Verificar slug duplicado
  const { data: existing } = await supabase
    .from('blog_posts')
    .select('id')
    .eq('slug', postData.slug)
    .maybeSingle();

  if (existing) {
    postData.slug = `${postData.slug}-${Date.now().toString().slice(-4)}`;
  }

  const { data, error } = await supabase
    .from('blog_posts')
    .insert([
      {
        ...postData,
        status: postData.status || 'published',
        published_at: new Date().toISOString(),
      },
    ])
    .select()
    .single();

  if (error) throw new Error(`Error al guardar: ${error.message}`);

  revalidatePath('/blog');
  revalidatePath(`/blog/${data.slug}`);

  return { success: true, post: data };
}
