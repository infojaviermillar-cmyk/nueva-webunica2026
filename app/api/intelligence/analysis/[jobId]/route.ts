import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { APIResponse, IntelAnalysisJob } from '@/types/intelligence';

// ─── GET /api/intelligence/analysis/[jobId] ───────────────────────────────────
// Polling endpoint — returns current job status, progress, and logs
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ jobId: string }> }
) {
  try {
    const { jobId } = await params;
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'No autenticado', code: 'UNAUTHORIZED' },
        { status: 401 }
      );
    }

    const admin = getSupabaseAdmin();

    const { data: job, error: jobError } = await admin
      .from('intel_analysis_jobs')
      .select('*, intel_organizations!inner(owner_id)')
      .eq('id', jobId)
      .single();

    if (jobError || !job) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'Job no encontrado', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    if ((job as any).intel_organizations?.owner_id !== user.id) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'Acceso denegado', code: 'FORBIDDEN' },
        { status: 403 }
      );
    }

    // Get recent logs
    const { data: logs } = await admin
      .from('intel_job_logs')
      .select('level, message, created_at')
      .eq('job_id', jobId)
      .order('created_at', { ascending: false })
      .limit(20);

    const { intel_organizations: _, ...cleanJob } = job as any;

    return NextResponse.json<APIResponse<{
      job: IntelAnalysisJob;
      logs: typeof logs;
    }>>({
      success: true,
      data: {
        job: cleanJob as IntelAnalysisJob,
        logs: logs || [],
      },
    });
  } catch (err: unknown) {
    console.error('[GET /api/intelligence/analysis/[jobId]]', err);
    return NextResponse.json<APIResponse<never>>(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
