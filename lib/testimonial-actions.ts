'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export interface Testimonial {
  id?: string;
  quote: string;
  author: string;
  role?: string;
  stars: number;
  active: boolean;
  user_id?: string;
  created_at?: string;
}

export async function getTestimonials() {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return { success: false, error: error.message };
  return { success: true, testimonials: data };
}

export async function getUserTestimonials() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) return { success: false, error: 'No autenticado' };

  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (error) return { success: false, error: error.message };
  return { success: true, testimonials: data };
}

export async function createTestimonial(testimonial: Testimonial) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const insertData = {
    ...testimonial,
    user_id: user?.id || null,
    // If user is not admin, default active to false until approved?
    // User requested "donde puedan acceder agregar su testimonio", so let's allow it.
    active: user?.email === 'javiermillarv@gmail.com' ? testimonial.active : false
  };

  const { data, error } = await supabase
    .from('testimonials')
    .insert([insertData])
    .select()
    .single();

  if (error) return { success: false, error: error.message };
  
  revalidatePath('/');
  return { success: true, testimonial: data };
}

export async function updateTestimonial(id: string, updates: Partial<Testimonial>) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('testimonials')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) return { success: false, error: error.message };
  
  revalidatePath('/');
  return { success: true, testimonial: data };
}

export async function deleteTestimonial(id: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from('testimonials')
    .delete()
    .eq('id', id);

  if (error) return { success: false, error: error.message };
  
  revalidatePath('/');
  return { success: true };
}
