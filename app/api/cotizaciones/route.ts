import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/client';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!supabase) {
      return NextResponse.json({ success: true, localOnly: true });
    }

    const { error } = await supabase.from('cotizaciones').upsert(
      {
        id: body.id,
        quote_number: body.quoteNumber,
        client_name: body.clientInfo?.name || '',
        client_email: body.clientInfo?.email || '',
        client_company: body.clientInfo?.company || '',
        client_rut: body.clientInfo?.rut || '',
        client_phone: body.clientInfo?.phone || '',
        total_neto: body.subtotal || 0,
        total_iva: body.tax || 0,
        total_final: body.total || 0,
        data: body,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'quote_number' }
    );

    if (error) {
      console.warn('[cotizaciones API] Supabase note:', error.message);
      return NextResponse.json({ success: true, localOnly: true, warning: error.message });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: true, localOnly: true });
  }
}
