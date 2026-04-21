'use server';

import { supabase } from '@/lib/supabase/client';
import { sendLeadNotification } from './mail-service';

export async function createLead(leadData: {
  name: string;
  email: string;
  phone: string;
  city: string;
  project_type: string;
  source?: string;
}) {
  if (!supabase) {
    return { success: false, error: 'DB no disponible' };
  }

  // Usamos RPC para evitar el bug de schema cache de PostgREST (PGRST204)
  const { error } = await supabase.rpc('insert_lead', {
    p_name: leadData.name,
    p_email: leadData.email,
    p_phone: leadData.phone,
    p_city: leadData.city,
    p_project_type: leadData.project_type,
    p_source: leadData.source || 'Modal de Contacto',
  });

  if (error) {
    console.error('[createLead] Error:', error);
    return { success: false, error: error.message };
  }

  // Notificación automática si hay correo
  if (leadData.email) {
    await sendLeadNotification({
      name: leadData.name,
      email: leadData.email,
      service: leadData.project_type,
      phone: leadData.phone
    });
  }

  return { success: true };
}
