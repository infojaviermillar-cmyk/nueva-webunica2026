import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { APIResponse, IntelSerpRanking, IntelSchemaAudit, CrawledPageData } from '@/types/intelligence';
import { checkSerpPositions, SerpCheckInput } from '@/lib/intelligence/serp-tracker';
import { auditAllSchemas, PageForAudit } from '@/lib/intelligence/local-seo';

// ─── Helper: verificar ownership del proyecto ─────────────────────────────────

async function verifyProjectOwnership(
  projectId: string,
  userId: string
): Promise<boolean> {
  const admin = getSupabaseAdmin();
  const { data: project } = await admin
    .from('intel_projects')
    .select('id, intel_organizations!inner(owner_id)')
    .eq('id', projectId)
    .single();

  return !!(project && (project as any).intel_organizations?.owner_id === userId);
}

// ─── POST /api/intelligence/projects/[id]/serp ────────────────────────────────
// Ejecuta el chequeo SERP y auditoría Schema.org para el proyecto

export async function POST(
  _request: NextRequest,
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

    const isOwner = await verifyProjectOwnership(id, user.id);
    if (!isOwner) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'Acceso denegado', code: 'FORBIDDEN' },
        { status: 403 }
      );
    }

    const admin = getSupabaseAdmin();

    // ── Recuperar proyecto ────────────────────────────────────────────
    const { data: project } = await admin
      .from('intel_projects')
      .select('domain')
      .eq('id', id)
      .single();

    if (!project) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'Proyecto no encontrado', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }

    // ── Recuperar keywords del proyecto (top 50) ──────────────────────
    const { data: keywords } = await admin
      .from('intel_keywords')
      .select('keyword, keyword_normalized, intent')
      .eq('project_id', id)
      .order('frequency', { ascending: false })
      .limit(50);

    if (!keywords || keywords.length === 0) {
      return NextResponse.json<APIResponse<never>>(
        {
          success: false,
          error: 'El proyecto no tiene keywords. Ejecuta un análisis completo primero.',
          code: 'NO_KEYWORDS'
        },
        { status: 422 }
      );
    }

    // ── Recuperar páginas crawleadas del último job ───────────────────
    const { data: latestJob } = await admin
      .from('intel_analysis_jobs')
      .select('id')
      .eq('project_id', id)
      .eq('status', 'completed')
      .order('completed_at', { ascending: false })
      .limit(1)
      .single();

    if (!latestJob) {
      return NextResponse.json<APIResponse<never>>(
        {
          success: false,
          error: 'No hay análisis completado. Ejecuta un análisis completo primero.',
          code: 'NO_COMPLETED_JOB'
        },
        { status: 422 }
      );
    }

    const { data: rawPages } = await admin
      .from('intel_crawl_pages')
      .select(`
        url, url_normalized, status_code, depth, response_time_ms,
        word_count, is_indexable, canonical_url, robots_directive, page_type,
        title, title_length, meta_description, meta_desc_length,
        h1, h2, h3, images_total, images_missing_alt,
        links_internal, links_external, seo_score, crawled_at
      `)
      .eq('project_id', id)
      .eq('job_id', latestJob.id)
      .eq('is_indexable', true)
      .limit(100);

    const pages: CrawledPageData[] = (rawPages ?? []).map(p => ({
      url:                p.url,
      url_normalized:     p.url_normalized,
      status_code:        p.status_code ?? 200,
      depth:              p.depth ?? 0,
      response_time_ms:   p.response_time_ms ?? 0,
      word_count:         p.word_count ?? 0,
      is_indexable:       p.is_indexable ?? true,
      canonical_url:      p.canonical_url,
      robots_directive:   p.robots_directive,
      page_type:          p.page_type ?? 'other',
      title:              p.title,
      title_length:       p.title_length ?? 0,
      meta_description:   p.meta_description,
      meta_desc_length:   p.meta_desc_length ?? 0,
      h1:                 (p.h1 as string[] | null) ?? [],
      h2:                 (p.h2 as string[] | null) ?? [],
      h3:                 (p.h3 as string[] | null) ?? [],
      images_total:       p.images_total ?? 0,
      images_missing_alt: p.images_missing_alt ?? 0,
      links_internal:     (p.links_internal as string[] | null) ?? [],
      links_external:     (p.links_external as string[] | null) ?? [],
      seo_score:          p.seo_score ?? 50,
    }));

    // ── SERP Check ────────────────────────────────────────────────────
    const serpInput: SerpCheckInput = {
      projectId: id,
      domain:    project.domain,
      keywords:  keywords.map(k => ({
        keyword:            k.keyword,
        keyword_normalized: k.keyword_normalized,
        intent:             k.intent ?? undefined,
      })),
      pages,
    };

    const { rankings, summary: serpSummary } = checkSerpPositions(serpInput);

    // ── Recuperar posiciones anteriores para calcular delta ───────────
    const { data: previousRankings } = await admin
      .from('intel_serp_rankings')
      .select('keyword_normalized, position')
      .eq('project_id', id);

    const prevMap = new Map<string, number | null>();
    for (const prev of previousRankings ?? []) {
      prevMap.set(prev.keyword_normalized, prev.position ?? null);
    }

    // Inyectar previous_position en los rankings nuevos
    const rankingsWithDelta: IntelSerpRanking[] = rankings.map(r => ({
      ...r,
      previous_position: prevMap.get(r.keyword_normalized) ?? undefined,
    }));

    // ── Upsert rankings en BD ─────────────────────────────────────────
    const rankingsToUpsert = rankingsWithDelta.map(r => ({
      project_id:          r.project_id,
      keyword:             r.keyword,
      keyword_normalized:  r.keyword_normalized,
      url:                 r.url ?? null,
      position:            r.position ?? null,
      previous_position:   r.previous_position ?? null,
      serp_features:       r.serp_features,
      search_engine:       r.search_engine,
      locale:              r.locale,
      data_source:         r.data_source,
      relevance_score:     r.relevance_score ?? null,
      checked_at:          r.checked_at,
    }));

    const { error: upsertSerpError } = await admin
      .from('intel_serp_rankings')
      .upsert(rankingsToUpsert, {
        onConflict: 'project_id,keyword_normalized',
        ignoreDuplicates: false,
      });

    if (upsertSerpError) {
      console.error('[POST /serp] upsert serp_rankings error:', upsertSerpError);
    }

    // ── Schema Audit ──────────────────────────────────────────────────
    // Solo auditar páginas que tienen HTML en la BD
    // (el HTML se extrae del campo raw en páginas que lo tienen)
    const pagesForAudit: PageForAudit[] = pages.map(p => ({
      url:       p.url,
      html:      undefined,   // HTML no se persiste en BD por espacio — audit básico por campos
      title:     p.title,
      page_type: p.page_type,
    }));

    // Nota: sin HTML completo, el audit usa heurísticas de tipo de página
    const { audits: schemaAudits, summary: schemaSummary } = auditAllSchemas(id, pagesForAudit);

    // Upsert schema audits
    if (schemaAudits.length > 0) {
      const schemaToUpsert = schemaAudits.map(a => ({
        project_id:         a.project_id,
        url:                a.url,
        schemas_found:      a.schemas_found,
        has_local_business: a.has_local_business,
        has_organization:   a.has_organization,
        has_product:        a.has_product,
        has_faq_page:       a.has_faq_page,
        has_breadcrumb:     a.has_breadcrumb,
        has_website:        a.has_website,
        issues:             a.issues,
        score:              a.score,
        audited_at:         a.audited_at,
      }));

      const { error: upsertSchemaError } = await admin
        .from('intel_schema_audits')
        .upsert(schemaToUpsert, {
          onConflict: 'project_id,url',
          ignoreDuplicates: false,
        });

      if (upsertSchemaError) {
        console.error('[POST /serp] upsert schema_audits error:', upsertSchemaError);
      }
    }

    return NextResponse.json<APIResponse<{
      serp:   typeof serpSummary;
      schema: typeof schemaSummary;
    }>>({
      success: true,
      data: {
        serp:   serpSummary,
        schema: schemaSummary,
      },
    });

  } catch (err: unknown) {
    console.error('[POST /api/intelligence/projects/[id]/serp]', err);
    return NextResponse.json<APIResponse<never>>(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// ─── GET /api/intelligence/projects/[id]/serp ─────────────────────────────────
// Retorna rankings y auditorías actuales del proyecto

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
        { success: false, error: 'No autenticado', code: 'UNAUTHORIZED' },
        { status: 401 }
      );
    }

    const isOwner = await verifyProjectOwnership(id, user.id);
    if (!isOwner) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'Acceso denegado', code: 'FORBIDDEN' },
        { status: 403 }
      );
    }

    const admin = getSupabaseAdmin();

    const { data: rankings } = await admin
      .from('intel_serp_rankings')
      .select('*')
      .eq('project_id', id)
      .order('position', { ascending: true, nullsFirst: false });

    const { data: schemaAudits } = await admin
      .from('intel_schema_audits')
      .select('*')
      .eq('project_id', id)
      .order('score', { ascending: false });

    const r = (rankings as IntelSerpRanking[] | null) ?? [];
    const positioned = r.filter(x => x.position !== undefined && x.position !== null);

    const positionBands = {
      top3:         positioned.filter(x => (x.position ?? 99) <= 3).length,
      top10:        positioned.filter(x => (x.position ?? 99) > 3 && (x.position ?? 99) <= 10).length,
      top30:        positioned.filter(x => (x.position ?? 99) > 10 && (x.position ?? 99) <= 30).length,
      out_of_range: positioned.filter(x => (x.position ?? 99) > 30).length,
      not_found:    r.filter(x => x.position === undefined || x.position === null).length,
    };

    const audits = (schemaAudits as IntelSchemaAudit[] | null) ?? [];
    const withSchemas = audits.filter(a => a.schemas_found.length > 0);
    const schemaSummary = {
      pages_with_schemas: withSchemas.length,
      has_local_business: audits.filter(a => a.has_local_business).length,
      has_faq_page:       audits.filter(a => a.has_faq_page).length,
      has_product:        audits.filter(a => a.has_product).length,
      avg_schema_score:   withSchemas.length > 0
        ? Math.round(withSchemas.reduce((s, a) => s + a.score, 0) / withSchemas.length)
        : 0,
    };

    const lastChecked = r[0]?.checked_at;

    return NextResponse.json<APIResponse<{
      rankings:        IntelSerpRanking[];
      position_bands:  typeof positionBands;
      schema_audits:   IntelSchemaAudit[];
      schema_summary:  typeof schemaSummary;
      last_checked_at: string | undefined;
    }>>({
      success: true,
      data: {
        rankings:        r,
        position_bands:  positionBands,
        schema_audits:   audits,
        schema_summary:  schemaSummary,
        last_checked_at: lastChecked,
      },
    });

  } catch (err: unknown) {
    console.error('[GET /api/intelligence/projects/[id]/serp]', err);
    return NextResponse.json<APIResponse<never>>(
      { success: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
