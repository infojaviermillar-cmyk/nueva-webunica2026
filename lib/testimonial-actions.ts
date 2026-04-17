'use server';

import { supabase } from '@/lib/supabase/client';
import { revalidatePath } from 'next/cache';

export interface Testimonial {
  id?: string;
  quote: string;
  author: string;
  stars: number;
  active: boolean;
  created_at?: string;
}

export async function getTestimonials() {
  if (!supabase) return { success: false, error: 'DB no disponible' };
  
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) return { success: false, error: error.message };
  return { success: true, testimonials: data };
}

export async function createTestimonial(testimonial: Testimonial) {
  if (!supabase) return { success: false, error: 'DB no disponible' };

  const { data, error } = await supabase
    .from('testimonials')
    .insert([testimonial])
    .select()
    .single();

  if (error) return { success: false, error: error.message };
  
  revalidatePath('/');
  return { success: true, testimonial: data };
}

export async function updateTestimonial(id: string, updates: Partial<Testimonial>) {
  if (!supabase) return { success: false, error: 'DB no disponible' };

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
  if (!supabase) return { success: false, error: 'DB no disponible' };

  const { error } = await supabase
    .from('testimonials')
    .delete()
    .eq('id', id);

  if (error) return { success: false, error: error.message };
  
  revalidatePath('/');
  return { success: true };
}
