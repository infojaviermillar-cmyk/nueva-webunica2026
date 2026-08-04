import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';

export async function GET(req: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const isAdmin = user?.email === 'javiermillarv@gmail.com' || user?.email?.endsWith('@webunica.cl');
  if (!user || !isAdmin) return NextResponse.json({ error: 'No autorizado' }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const year = searchParams.get('year');
  const month = searchParams.get('month');

  const admin = getSupabaseAdmin();
  let query = admin.from('ingresos').select('*').order('fecha', { ascending: false });

  if (year && month) {
    const startDate = `${year}-${month.padStart(2, '0')}-01`;
    const endDate = new Date(parseInt(year), parseInt(month), 0);
    const endDateStr = `${year}-${month.padStart(2, '0')}-${endDate.getDate()}`;
    query = query.gte('fecha', startDate).lte('fecha', endDateStr);
  } else if (year) {
    query = query.gte('fecha', `${year}-01-01`).lte('fecha', `${year}-12-31`);
  }

  const { data, error } = await query.limit(500);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ingresos: data });
}

export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const isAdmin = user?.email === 'javiermillarv@gmail.com' || user?.email?.endsWith('@webunica.cl');
  if (!user || !isAdmin) return NextResponse.json({ error: 'No autorizado' }, { status: 401 });

  const body = await req.json();
  const { fecha, descripcion, categoria, monto, cliente, tipo_pago, referencia, notas } = body;

  if (!fecha || !descripcion || !categoria || monto === undefined) {
    return NextResponse.json({ error: 'Faltan campos obligatorios: fecha, descripcion, categoria, monto' }, { status: 400 });
  }

  const admin = getSupabaseAdmin();
  const { data, error } = await admin.from('ingresos').insert([{
    fecha,
    descripcion: descripcion.trim(),
    categoria,
    monto: parseInt(String(monto).replace(/\D/g, ''), 10),
    cliente: cliente?.trim() || null,
    tipo_pago: tipo_pago || 'transferencia',
    referencia: referencia?.trim() || null,
    notas: notas?.trim() || null,
  }]).select('*').single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true, ingreso: data });
}
