'use server';

import { supabase } from '@/lib/supabase/client';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { revalidatePath } from 'next/cache';

export async function getCategoriesAction() {
  if (!supabase) return [];
  const { data } = await supabase.from('webunica_blog_categories').select('*').order('name');
  return data || [];
}

export async function saveBlogPost(postData: {
  id?: string;
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
  const adminClient = getSupabaseAdmin();
  if (!adminClient) {
    return { success: false, error: 'DB no disponible (Admin SDK).' };
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

  if (postData.id) {
    // Actualizar post existente
    const { data, error } = await adminClient
      .from('webunica_blog_posts')
      .update(insertData)
      .eq('id', postData.id)
      .select()
      .single();

    if (error) {
      console.error('[saveBlogPost] Error Supabase al actualizar:', error);
      return { success: false, error: `Error DB: ${error.message}` };
    }

    try {
      revalidatePath('/blog');
      revalidatePath(`/blog/${data.slug}`);
      revalidatePath('/admin/blog');
    } catch (e) {
      console.warn('Error en revalidatePath', e);
    }

    return { success: true, post: data };
  }

  // Verificar si el slug ya existe
  const { data: existing, error: existError } = await adminClient
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

  const { data, error } = await adminClient
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
    revalidatePath('/admin/blog');
  } catch (e) {
    console.warn('Error en revalidatePath', e);
  }

  return { success: true, post: data };
}

export async function getBlogPostBySlug(slug: string) {
  if (!supabase) return { success: false, error: 'DB no disponible' };
  const { data, error } = await supabase
    .from('webunica_blog_posts')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (error) return { success: false, error: error.message };
  return { success: true, post: data };
}

export async function getAdminPosts() {
  if (!supabase) return { success: false, error: 'DB no disponible' };
  
  const { data, error } = await supabase
    .from('webunica_blog_posts')
    .select('*, category:webunica_blog_categories(name, slug)')
    .order('created_at', { ascending: false });

  if (error) return { success: false, error: error.message };
  return { success: true, posts: data };
}

export async function deleteBlogPost(id: string) {
  const adminClient = getSupabaseAdmin();
  const { error } = await adminClient
    .from('webunica_blog_posts')
    .delete()
    .eq('id', id);

  if (error) return { success: false, error: error.message };
  
  revalidatePath('/blog');
  revalidatePath('/admin/blog');
  return { success: true };
}

export async function uploadCoverImage(formData: FormData) {
  const file = formData.get('file') as File | null;
  const slug = formData.get('slug') as string | null;

  if (!file || !slug) {
    return { success: false, error: 'Faltan archivo o slug.' };
  }

  // Validar tipo de archivo
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
  if (!allowedTypes.includes(file.type)) {
    return { success: false, error: 'Solo se permiten imágenes JPG, PNG, WEBP o GIF.' };
  }

  // Validar tamaño (máx 5MB)
  if (file.size > 5 * 1024 * 1024) {
    return { success: false, error: 'La imagen no puede superar los 5 MB.' };
  }

  try {
    const adminClient = getSupabaseAdmin();
    const ext = file.type.split('/')[1].replace('jpeg', 'jpg');
    const fileName = `${slug.substring(0, 40)}-cover-${Date.now()}.${ext}`;
    const arrayBuffer = await file.arrayBuffer();

    const { error: uploadError } = await adminClient.storage
      .from('blog')
      .upload(fileName, Buffer.from(arrayBuffer), { contentType: file.type, upsert: true });

    if (uploadError) {
      if (uploadError.message.toLowerCase().includes('not found')) {
        await adminClient.storage.createBucket('blog', { public: true });
        await adminClient.storage
          .from('blog')
          .upload(fileName, Buffer.from(arrayBuffer), { contentType: file.type, upsert: true });
      } else {
        throw uploadError;
      }
    }

    const { data: pubData } = adminClient.storage.from('blog').getPublicUrl(fileName);
    return { success: true, url: pubData.publicUrl };
  } catch (err: any) {
    console.error('[uploadCoverImage] Error:', err);
    return { success: false, error: err.message || 'Error al subir la imagen.' };
  }
}
