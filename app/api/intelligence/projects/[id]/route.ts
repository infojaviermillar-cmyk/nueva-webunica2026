import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { APIResponse, IntelProject } from '@/types/intelligence';

// ─── GET /api/intelligence/projects/[id] ─────────────────────────────────────
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
        { success: false, error: 'No autenticado', code: 'UNAUTHORIZED' },
        { status: 401 }
      );
    }

    const admin = getSupabaseAdmin();

    // Get project — verify ownership via org
    const { data: project, error: projError } = await admin
      .from('intel_projects')
      .select('*, intel_organizations!inner(owner_id)')
      .eq('id', id)
      .single();

    if (projError || !project) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'Proyecto no encontrado', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    // Ownership check
    if ((project as any).intel_organizations?.owner_id !== user.id) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'Acceso denegado', code: 'FORBIDDEN' },
        { status: 403 }
      );
    }

    // Get latest job
    const { data: latestJob } = await admin
      .from('intel_analysis_jobs')
      .select('*')
      .eq('project_id', id)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    // Get latest score
    const { data: latestScore } = await admin
      .from('intel_scores')
      .select('*')
      .eq('project_id', id)
      .order('calculated_at', { ascending: false })
      .limit(1)
      .single();

    // Get score history (last 10)
    const { data: scoreHistory } = await admin
      .from('intel_scores')
      .select('score, calculated_at')
      .eq('project_id', id)
      .order('calculated_at', { ascending: false })
      .limit(10);

    // Get recommendations summary
    const { data: recs } = await admin
      .from('intel_recommendations')
      .select('priority, status, category')
      .eq('project_id', id)
      .eq('status', 'detected');

    const recsSummary = {
      critical: recs?.filter(r => r.priority === 'critical').length || 0,
      high:     recs?.filter(r => r.priority === 'high').length || 0,
      medium:   recs?.filter(r => r.priority === 'medium').length || 0,
      low:      recs?.filter(r => r.priority === 'low').length || 0,
    };

    // Get pages summary (if there's a completed job)
    let pagesSummary = { total: 0, indexable: 0, with_issues: 0, avg_response_ms: undefined as number | undefined };
    if (latestJob?.id) {
      const { data: pagesStats } = await admin
        .from('intel_crawl_pages')
        .select('is_indexable, seo_score, response_time_ms')
        .eq('job_id', latestJob.id);

      if (pagesStats && pagesStats.length > 0) {
        pagesSummary = {
          total: pagesStats.length,
          indexable: pagesStats.filter(p => p.is_indexable !== false).length,
          with_issues: pagesStats.filter(p => (p.seo_score ?? 100) < 70).length,
          avg_response_ms: Math.round(
            pagesStats.reduce((s, p) => s + (p.response_time_ms || 0), 0) / pagesStats.length
          ),
        };
      }
    }

    // Keyword summary
    let keywordsSummary = { total: 0 };
    if (latestJob?.id) {
      const { count } = await admin
        .from('intel_keywords')
        .select('id', { count: 'exact', head: true })
        .eq('job_id', latestJob.id);
      keywordsSummary = { total: count || 0 };
    }

    // Remove internal join data
    const { intel_organizations: _, ...cleanProject } = project as any;

    return NextResponse.json<APIResponse<{
      project: IntelProject;
      latest_job: typeof latestJob;
      latest_score: typeof latestScore;
      score_history: typeof scoreHistory;
      recommendations_summary: typeof recsSummary;
      pages_summary: typeof pagesSummary;
      keywords_summary: typeof keywordsSummary;
    }>>({
      success: true,
      data: {
        project: cleanProject as IntelProject,
        latest_job: latestJob || null,
        latest_score: latestScore || null,
        score_history: scoreHistory || [],
        recommendations_summary: recsSummary,
        pages_summary: pagesSummary,
        keywords_summary: keywordsSummary,
      },
    });
  } catch (err: unknown) {
    console.error('[GET /api/intelligence/projects/[id]]', err);
    return NextResponse.json<APIResponse<never>>(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// ─── DELETE /api/intelligence/projects/[id] ───────────────────────────────────
export async function DELETE(
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
    
    // Verificar propiedad del proyecto antes de borrar
    const { data: project } = await admin
      .from('intel_projects')
      .select('id, intel_organizations!inner(owner_id)')
      .eq('id', id)
      .single();

    if (!project || (project as any).intel_organizations?.owner_id !== user.id) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'Proyecto no encontrado o acceso denegado' },
        { status: 404 }
      );
    }

    // Hard Delete: La restricción ON DELETE CASCADE borrará automáticamente jobs, crawler pages, keywords, scores, etc.
    const { error } = await admin
      .from('intel_projects')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json<APIResponse<{ deleted: true }>>({
      success: true,
      data: { deleted: true },
    });
  } catch (err: unknown) {
    console.error('[DELETE /api/intelligence/projects/[id]]', err);
    return NextResponse.json<APIResponse<never>>(
      { success: false, error: 'Error interno del servidor al eliminar proyecto' },
      { status: 500 }
    );
  }
}
