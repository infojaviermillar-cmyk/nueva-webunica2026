import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { sendLeadNotification } from '@/lib/mail-service';

export async function POST(req: NextRequest) {
  // Verify admin session
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const isAdmin = user?.email === 'javiermillarv@gmail.com' || user?.email?.endsWith('@webunica.cl');
  if (!user || !isAdmin) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const { leadId } = await req.json();
  if (!leadId) {
    return NextResponse.json({ error: 'Falta leadId' }, { status: 400 });
  }

  // Fetch the lead
  const admin = getSupabaseAdmin();
  const { data: lead, error: fetchError } = await admin
    .from('leads')
    .select('*')
    .eq('id', leadId)
    .single();

  if (fetchError || !lead) {
    return NextResponse.json({ error: 'Lead no encontrado' }, { status: 404 });
  }

  // Resend the welcome email
  const result = await sendLeadNotification({
    name: lead.name,
    email: lead.email,
    service: lead.service_interest || lead.project_type || 'Servicios Web',
    phone: lead.phone || '',
  });

  if (!result.success) {
    return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 });
  }

  // Mark welcome email as sent (update a flag column if it exists, ignore error if column doesn't exist)
  await admin
    .from('leads')
    .update({ welcome_email_sent: true, welcome_email_sent_at: new Date().toISOString() })
    .eq('id', leadId);

  return NextResponse.json({ success: true });
}
