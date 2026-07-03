'use server';

import { createClient } from '@/lib/supabase/server';
import { supabase } from '@/lib/supabase/client';
import { revalidatePath } from 'next/cache';

export interface ServiceEvaluation {
  id?: string;
  lead_id: string;
  client_name: string;
  client_role: string;
  answers: Record<string, number>;
  average_score: number;
  summary_quote: string;
  is_published?: boolean;
  created_at?: string;
}

export async function submitEvaluation(data: ServiceEvaluation) {
  // Use client to hit the RPC since this is unauthenticated submission
  if (!supabase) return { success: false, error: 'DB no disponible' };

  const { error } = await supabase.rpc('insert_service_evaluation', {
    p_lead_id: data.lead_id,
    p_client_name: data.client_name,
    p_client_role: data.client_role,
    p_answers: data.answers,
    p_average_score: data.average_score,
    p_summary_quote: data.summary_quote
  });

  if (error) {
    console.error('[submitEvaluation] Error:', error);
    return { success: false, error: error.message };
  }

  // Revalidate public pages where reviews might show
  revalidatePath('/');
  revalidatePath('/admin/leads');
  
  return { success: true };
}

export async function getPublishedEvaluations() {
  const supabaseServer = await createClient();
  
  const { data, error } = await supabaseServer
    .from('service_evaluations')
    .select('*')
    .eq('is_published', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching evaluations:', error);
    return { success: false, error: error.message, evaluations: [] };
  }

  return { success: true, evaluations: data };
}

export async function getAllEvaluationsAdmin() {
  const supabaseServer = await createClient();
  
  // Requires authentication as admin (handled by RLS policy)
  const { data, error } = await supabaseServer
    .from('service_evaluations')
    .select('*, leads(name, project_type)')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching all evaluations:', error);
    return { success: false, error: error.message, evaluations: [] };
  }

  return { success: true, evaluations: data };
}

export async function toggleEvaluationPublish(id: string, is_published: boolean) {
  const supabaseServer = await createClient();
  
  const { error } = await supabaseServer
    .from('service_evaluations')
    .update({ is_published })
    .eq('id', id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath('/');
  revalidatePath('/admin/leads');
  return { success: true };
}
