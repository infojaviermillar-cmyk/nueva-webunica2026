import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { APIResponse, IntelPageSpeedAudit } from '@/types/intelligence';
import { runPageSpeedAnalysis } from '@/lib/intelligence/pagespeed-analyzer';

async function verifyOwnership(projectId: string, userId: string): Promise<boolean> {
  const admin = getSupabaseAdmin();
  const { data } = await admin
    .from('intel_projects')
    .select('id, intel_organizations!inner(owner_id)')
    .eq('id', projectId)
    .single();

  return !!(data && (data as any).intel_organizations?.owner_id === userId);
}

// ─── POST /api/intelligence/projects/[id]/pagespeed ──────────────────────────
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
        { success: false, error: 'No autenticado', code: 'UNAUTHORIZED' },
        { status: 401 }
      );
    }

    const isOwner = await verifyOwnership(id, user.id);
    if (!isOwner) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'Acceso denegado', code: 'FORBIDDEN' },
        { status: 403 }
      );
    }

    const admin = getSupabaseAdmin();
    const { data: project } = await admin
      .from('intel_projects')
      .select('domain')
      .eq('id', id)
      .single();

    if (!project) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'Proyecto no encontrado' },
        { status: 404 }
      );
    }

    const targetUrl = project.domain.startsWith('http')
      ? project.domain
      : `https://${project.domain}`;

    // Obtener datos del último job si existen para mejorar la estimación fallback
    const { data: latestPage } = await admin
      .from('intel_crawl_pages')
      .select('*')
      .eq('project_id', id)
      .eq('depth', 0)
      .limit(1)
      .single();

    // Ejecutar análisis móvil y escritorio
    const [mobileAudit, desktopAudit] = await Promise.all([
      runPageSpeedAnalysis({
        projectId: id,
        url: targetUrl,
        strategy: 'mobile',
        apiKey: process.env.PAGESPEED_API_KEY,
        pageData: latestPage || undefined,
      }),
      runPageSpeedAnalysis({
        projectId: id,
        url: targetUrl,
        strategy: 'desktop',
        apiKey: process.env.PAGESPEED_API_KEY,
        pageData: latestPage || undefined,
      }),
    ]);

    // Upsert audits
    const auditsToUpsert = [mobileAudit, desktopAudit].map(a => ({
      project_id: a.project_id,
      url: a.url,
      strategy: a.strategy,
      performance_score: a.performance_score,
      accessibility_score: a.accessibility_score ?? null,
      best_practices_score: a.best_practices_score ?? null,
      seo_score: a.seo_score ?? null,
      lcp_ms: a.lcp_ms ?? null,
      inp_ms: a.inp_ms ?? null,
      cls: a.cls ?? null,
      fcp_ms: a.fcp_ms ?? null,
      tbt_ms: a.tbt_ms ?? null,
      diagnostics: a.diagnostics,
      data_source: a.data_source,
      audited_at: a.audited_at,
    }));

    const { error: upsertErr } = await admin
      .from('intel_pagespeed_audits')
      .upsert(auditsToUpsert, { onConflict: 'project_id,url,strategy' });

    if (upsertErr) throw upsertErr;

    return NextResponse.json<APIResponse<{ mobile: IntelPageSpeedAudit; desktop: IntelPageSpeedAudit }>>({
      success: true,
      data: { mobile: mobileAudit, desktop: desktopAudit },
    });
  } catch (err: unknown) {
    console.error('[POST /pagespeed]', err);
    return NextResponse.json<APIResponse<never>>(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// ─── GET /api/intelligence/projects/[id]/pagespeed ───────────────────────────
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

    const admin = getSupabaseAdmin();
    const { data: audits } = await admin
      .from('intel_pagespeed_audits')
      .select('*')
      .eq('project_id', id);

    const typedAudits = (audits as IntelPageSpeedAudit[] | null) ?? [];
    const mobile = typedAudits.find(a => a.strategy === 'mobile');
    const desktop = typedAudits.find(a => a.strategy === 'desktop');

    return NextResponse.json<APIResponse<{ mobile?: IntelPageSpeedAudit; desktop?: IntelPageSpeedAudit }>>({
      success: true,
      data: { mobile, desktop },
    });
  } catch (err: unknown) {
    console.error('[GET /pagespeed]', err);
    return NextResponse.json<APIResponse<never>>(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
