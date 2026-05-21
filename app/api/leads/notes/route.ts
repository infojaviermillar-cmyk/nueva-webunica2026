import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';

export async function PATCH(req: NextRequest) {
  // 1. Verify admin session
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const isAdmin = user?.email === 'javiermillarv@gmail.com' || user?.email?.endsWith('@webunica.cl');
  if (!user || !isAdmin) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  // 2. Parse payload
  const { leadId, notes } = await req.json();
  if (!leadId) {
    return NextResponse.json({ error: 'Falta leadId' }, { status: 400 });
  }

  try {
    const admin = getSupabaseAdmin();
    const { error } = await admin
      .from('leads')
      .update({ notes })
      .eq('id', leadId);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Error de servidor' }, { status: 500 });
  }
}
