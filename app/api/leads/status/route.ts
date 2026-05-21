import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';

export async function PATCH(req: NextRequest) {
  // Verify admin session
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const isAdmin = user?.email === 'javiermillarv@gmail.com' || user?.email?.endsWith('@webunica.cl');
  if (!user || !isAdmin) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  const { leadId, status } = await req.json();
  if (!leadId || !status) {
    return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 });
  }

  const admin = getSupabaseAdmin();
  const { error } = await admin
    .from('leads')
    .update({ status })
    .eq('id', leadId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
