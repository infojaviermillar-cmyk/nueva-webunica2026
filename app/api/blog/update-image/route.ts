import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');
  const imageUrl = searchParams.get('image');

  if (!slug || !imageUrl) {
    return NextResponse.json({ error: 'Faltan parámetros slug o image' }, { status: 400 });
  }

  try {
    const supabaseAdmin = getSupabaseAdmin();
    
    // Actualizar la fila en Supabase
    const { data, error } = await supabaseAdmin
      .from('webunica_blog_posts')
      .update({ cover_image: imageUrl })
      .eq('slug', slug)
      .select();

    if (error) {
      throw error;
    }

    return NextResponse.json({ success: true, updated: data });
  } catch (err: any) {
    console.error('[update-image] Error:', err);
    return NextResponse.json({ error: err.message || 'Error interno del servidor' }, { status: 500 });
  }
}
