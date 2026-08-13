import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { APIResponse } from '@/types/intelligence';

// ─── GET /api/intelligence/projects/[id]/competitors ─────────────────────────
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'No autenticado' },
        { status: 401 }
      );
    }

    const admin = getSupabaseAdmin();

    const { data: competitors, error } = await admin
      .from('intel_competitors')
      .select('*')
      .eq('project_id', id)
      .order('created_at', { ascending: false });

    if (error) throw error;

    const { data: gaps } = await admin
      .from('intel_keyword_gaps')
      .select('*')
      .eq('project_id', id)
      .order('opportunity_score', { ascending: false })
      .limit(100);

    return NextResponse.json<APIResponse<{ competitors: typeof competitors; gaps: typeof gaps }>>({
      success: true,
      data: { competitors: competitors || [], gaps: gaps || [] },
    });
  } catch (err: unknown) {
    console.error('[GET competitors]', err);
    return NextResponse.json<APIResponse<never>>(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// ─── POST /api/intelligence/projects/[id]/competitors ────────────────────────
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'No autenticado' },
        { status: 401 }
      );
    }

    const body = await request.json() as { domain?: string; name?: string };
    if (!body.domain?.trim()) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'El dominio del competidor es requerido' },
        { status: 400 }
      );
    }

    const domain = body.domain.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0].toLowerCase();
    const admin = getSupabaseAdmin();

    const { data: competitor, error } = await admin
      .from('intel_competitors')
      .insert({
        project_id: id,
        domain,
        name: body.name?.trim() || domain,
        is_direct: true,
      })
      .select()
      .single();

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json<APIResponse<never>>(
          { success: false, error: 'Este competidor ya fue agregado al proyecto' },
          { status: 409 }
        );
      }
      throw error;
    }

    return NextResponse.json<APIResponse<{ competitor: typeof competitor }>>(
      { success: true, data: { competitor } },
      { status: 201 }
    );
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : JSON.stringify(err);
    console.error('[POST competitors] ERROR:', msg, err);
    return NextResponse.json<APIResponse<never>>(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
