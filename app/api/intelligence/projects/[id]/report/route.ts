import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { APIResponse, CompiledProjectReport } from '@/types/intelligence';
import { compileProjectReport } from '@/lib/intelligence/report-generator';

async function verifyOwnership(projectId: string, userId: string): Promise<boolean> {
  const admin = getSupabaseAdmin();
  const { data } = await admin
    .from('intel_projects')
    .select('id, intel_organizations!inner(owner_id)')
    .eq('id', projectId)
    .single();

  return !!(data && (data as any).intel_organizations?.owner_id === userId);
}

// ─── GET /api/intelligence/projects/[id]/report ──────────────────────────────
export async function GET(
  _request: NextRequest,
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

    const isOwner = await verifyOwnership(id, user.id);
    if (!isOwner) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'Acceso denegado' },
        { status: 403 }
      );
    }

    const report = await compileProjectReport(id);
    if (!report) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'Proyecto no encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json<APIResponse<{ report: CompiledProjectReport }>>({
      success: true,
      data: { report },
    });
  } catch (err: unknown) {
    console.error('[GET /api/intelligence/projects/[id]/report]', err);
    return NextResponse.json<APIResponse<never>>(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
