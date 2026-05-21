import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';

export async function POST(req: NextRequest) {
  // 1. Verify admin session
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const isAdmin = user?.email === 'javiermillarv@gmail.com' || user?.email?.endsWith('@webunica.cl');
  if (!user || !isAdmin) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
  }

  // 2. Parse payload
  try {
    const body = await req.json();
    const { name, email, phone, city, service_interest, source, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: 'Nombre y Email son campos obligatorios.' }, { status: 400 });
    }

    const admin = getSupabaseAdmin();
    
    // We insert status as 'new' and build the new lead payload
    const newLead = {
      name,
      email,
      phone: phone || null,
      city: city || null,
      service_interest: service_interest || 'Consulta General',
      source_url: source || 'Otro',
      message: message || '',
      status: 'new',
    };

    const { data, error } = await admin
      .from('leads')
      .insert([newLead])
      .select('*')
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, lead: data });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Error de servidor' }, { status: 500 });
  }
}
