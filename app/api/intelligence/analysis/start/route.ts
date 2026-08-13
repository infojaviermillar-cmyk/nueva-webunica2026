/**
 * POST /api/intelligence/analysis/start
 * Inicia un job de análisis completo para un proyecto.
 * El análisis es síncrono en Vercel (serverless) — limitado a 60s en plan Pro, 10s en Hobby.
 * Para dominios grandes, usa paginación de crawl.
 */

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { APIResponse, IntelAnalysisJob, CrawledPageData } from '@/types/intelligence';
import { crawlDomain, DEFAULT_CRAWLER_CONFIG } from '@/lib/intelligence/crawler';
import { analyzePage } from '@/lib/intelligence/seo-analyzer';
import { extractKeywords, clusterKeywords } from '@/lib/intelligence/keyword-extractor';
import { calculateIntelligenceScore } from '@/lib/intelligence/score-engine';
import { interpretAnalysis, generateRecommendations } from '@/lib/intelligence/ai-interpreter';

export const maxDuration = 60; // seconds — requires Vercel Pro or above

export async function POST(request: NextRequest) {
  const admin = getSupabaseAdmin();
  let jobId: string | null = null;

  try {
    // ─── 1. Auth ─────────────────────────────────────────────────────────────
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'No autenticado', code: 'UNAUTHORIZED' },
        { status: 401 }
      );
    }

    // ─── 2. Validate input ───────────────────────────────────────────────────
    const body = await request.json() as { project_id?: string; max_pages?: number };
    if (!body.project_id) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'project_id es requerido', code: 'VALIDATION_ERROR' },
        { status: 400 }
      );
    }

    // ─── 3. Verify project ownership ─────────────────────────────────────────
    const { data: project, error: projError } = await admin
      .from('intel_projects')
      .select('*, intel_organizations!inner(owner_id, id)')
      .eq('id', body.project_id)
      .single();

    if (projError || !project) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'Proyecto no encontrado', code: 'NOT_FOUND' },
        { status: 404 }
      );
    }
    if ((project as any).intel_organizations?.owner_id !== user.id) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'Acceso denegado', code: 'FORBIDDEN' },
        { status: 403 }
      );
    }

    // ─── 4. Check for existing running job ───────────────────────────────────
    const { data: runningJob } = await admin
      .from('intel_analysis_jobs')
      .select('id, status')
      .eq('project_id', body.project_id)
      .in('status', ['pending', 'running'])
      .limit(1)
      .single();

    if (runningJob) {
      return NextResponse.json<APIResponse<{ job: typeof runningJob }>>(
        { success: false, error: 'Ya hay un análisis en progreso para este proyecto', code: 'JOB_RUNNING' },
        { status: 409 }
      );
    }

    const orgId = (project as any).intel_organizations?.id;

    // ─── 5. Create job ───────────────────────────────────────────────────────
    const maxPages = Math.min(body.max_pages || 50, 100); // cap at 100
    const { data: job, error: jobError } = await admin
      .from('intel_analysis_jobs')
      .insert({
        project_id: body.project_id,
        org_id: orgId,
        job_type: 'full_analysis',
        status: 'running',
        progress: 0,
        started_at: new Date().toISOString(),
        metadata: { max_pages: maxPages, triggered_by: user.id },
      })
      .select()
      .single();

    if (jobError || !job) throw jobError || new Error('Failed to create job');
    jobId = job.id;

    await log(jobId, 'info', `Iniciando análisis de ${project.domain} (max ${maxPages} páginas)`);

    // ─── 6. Crawl ────────────────────────────────────────────────────────────
    await updateJobProgress(jobId, 5, { status: 'running' });
    await log(jobId, 'info', 'Fase 1/5: Crawling del dominio...');

    const crawlResult = await crawlDomain(project.domain, {
      ...DEFAULT_CRAWLER_CONFIG,
      max_pages: maxPages,
    });

    await updateJobProgress(jobId, 30, {
      pages_found: crawlResult.pages.length,
      pages_crawled: crawlResult.pages_attempted,
    });
    await log(jobId, 'info', `Crawling completado: ${crawlResult.pages.length} páginas en ${crawlResult.duration_ms}ms`);

    if (crawlResult.errors.length > 0) {
      await log(jobId, 'warn', `${crawlResult.errors.length} errores durante crawling`, { errors: crawlResult.errors.slice(0, 10) });
    }

    // ─── 7. SEO Analysis ─────────────────────────────────────────────────────
    await log(jobId, 'info', 'Fase 2/5: Análisis SEO on-page...');
    const analyzedPages: CrawledPageData[] = crawlResult.pages.map(page => {
      const { issues, score } = analyzePage(page);
      return { ...page, seo_issues: issues, seo_score: score } as CrawledPageData;
    });
    await updateJobProgress(jobId, 50);

    // ─── 8. Persist pages ────────────────────────────────────────────────────
    await log(jobId, 'info', 'Guardando páginas en base de datos...');
    const pageInserts = analyzedPages.map(page => ({
      job_id: jobId!,
      project_id: body.project_id,
      url: page.url,
      url_normalized: page.url_normalized,
      status_code: page.status_code,
      redirect_url: page.redirect_url || null,
      depth: page.depth,
      response_time_ms: page.response_time_ms,
      word_count: page.word_count,
      is_indexable: page.is_indexable,
      canonical_url: page.canonical_url || null,
      robots_directive: page.robots_directive || null,
      page_type: page.page_type,
      title: page.title || null,
      title_length: page.title_length,
      meta_description: page.meta_description || null,
      meta_desc_length: page.meta_desc_length,
      h1: page.h1 || [],
      h2: page.h2 || [],
      h3: page.h3 || [],
      images_total: page.images_total,
      images_missing_alt: page.images_missing_alt,
      links_internal: (page.links_internal as unknown as string[])?.length || 0,
      links_external: (page.links_external as unknown as string[])?.length || 0,
      links_broken: 0,
      seo_score: page.seo_score,
      seo_issues: (page as any).seo_issues || [],
      raw_data_source: 'crawler',
    }));

    // Insert in batches of 20
    for (let i = 0; i < pageInserts.length; i += 20) {
      const batch = pageInserts.slice(i, i + 20);
      const { error: insertError } = await admin.from('intel_crawl_pages').insert(batch);
      if (insertError) {
        await log(jobId, 'warn', `Error guardando batch de páginas: ${insertError.message}`);
      }
    }

    // ─── 9. Keyword Extraction ───────────────────────────────────────────────
    await log(jobId, 'info', 'Fase 3/5: Extracción de keywords...');
    const rawKeywords = extractKeywords(crawlResult.pages);
    const clusteredKeywords = clusterKeywords(rawKeywords);
    await updateJobProgress(jobId, 65);

    // Persist keywords
    const keywordInserts = clusteredKeywords.map(kw => ({
      project_id: body.project_id,
      job_id: jobId!,
      keyword: kw.keyword,
      keyword_normalized: kw.keyword_normalized,
      intent: kw.intent || null,
      intent_source: 'AI_INFERRED',
      frequency: kw.frequency,
      pages_count: kw.pages_count,
      found_in: kw.found_in,
      cluster: kw.cluster || null,
    }));

    for (let i = 0; i < keywordInserts.length; i += 50) {
      const batch = keywordInserts.slice(i, i + 50);
      await admin.from('intel_keywords').insert(batch);
    }
    await log(jobId, 'info', `${clusteredKeywords.length} keywords extraídas y guardadas`);

    // ─── 10. Score Calculation ───────────────────────────────────────────────
    await log(jobId, 'info', 'Fase 4/5: Calculando Intelligence Score...');
    const scoreOutput = calculateIntelligenceScore({
      pages: analyzedPages,
      keywords: clusteredKeywords,
      domain: project.domain,
    });
    await updateJobProgress(jobId, 80);

    const currentJobId = jobId!;

    const { error: scoreError } = await admin.from('intel_scores').insert({
      project_id: body.project_id,
      job_id: currentJobId,
      score: scoreOutput.score,
      score_version: scoreOutput.score_version,
      score_technical_seo: scoreOutput.score_technical_seo,
      score_content: scoreOutput.score_content,
      score_on_page: scoreOutput.score_on_page,
      score_architecture: scoreOutput.score_architecture,
      score_opportunity: scoreOutput.score_opportunity,
      score_components: scoreOutput.score_components,
      pages_analyzed: scoreOutput.pages_analyzed,
      issues_critical: scoreOutput.issues_critical,
      issues_warning: scoreOutput.issues_warning,
      keywords_found: scoreOutput.keywords_found,
      opportunities_count: scoreOutput.opportunities_count,
    });
    if (scoreError) await log(jobId, 'warn', `Error guardando score: ${scoreError.message}`);

    // ─── 11. AI Interpretation ───────────────────────────────────────────────
    await log(jobId, 'info', 'Fase 5/5: Interpretación con IA (gpt-4o)...');
    let aiResult = null;
    let totalCost = 0;

    try {
      aiResult = await interpretAnalysis({
        domain: project.domain,
        pages: analyzedPages,
        keywords: clusteredKeywords,
        score: scoreOutput,
        industry: project.industry || undefined,
        objective: project.objective || undefined,
        country: project.country,
      });
      totalCost = aiResult.estimated_cost_usd;
      await log(jobId, 'info', `IA completada. Tokens: ${aiResult.tokens_used}, Costo estimado: $${totalCost.toFixed(4)}`);
    } catch (aiErr: unknown) {
      await log(jobId, 'warn', `Error en interpretación IA: ${aiErr instanceof Error ? aiErr.message : String(aiErr)}`);
    }

    // ─── 12. Generate & persist recommendations ───────────────────────────────
    if (aiResult) {
      const recs = generateRecommendations({ aiResult, score: scoreOutput, pages: analyzedPages });
      const recInserts = recs.map(r => ({
        project_id: body.project_id!,
        job_id: currentJobId,
        ...r,
        affected_urls: r.affected_urls || [],
      }));
      if (recInserts.length > 0) {
        await admin.from('intel_recommendations').insert(recInserts);
      }
      await log(jobId, 'info', `${recs.length} recomendaciones generadas`);
    }

    // ─── 13. Complete job ─────────────────────────────────────────────────────
    const jobResult = {
      score: scoreOutput.score,
      pages_analyzed: scoreOutput.pages_analyzed,
      issues_critical: scoreOutput.issues_critical,
      issues_warning: scoreOutput.issues_warning,
      keywords_found: scoreOutput.keywords_found,
      opportunities_count: scoreOutput.opportunities_count,
      summary: aiResult?.executive_summary?.slice(0, 500) || null,
    };

    await admin.from('intel_analysis_jobs').update({
      status: 'completed',
      progress: 100,
      completed_at: new Date().toISOString(),
      result: jobResult,
      estimated_cost_usd: totalCost,
    }).eq('id', currentJobId);

    return NextResponse.json<APIResponse<{ job: IntelAnalysisJob; score: number }>>({
      success: true,
      data: {
        job: { ...job, status: 'completed', progress: 100, result: jobResult } as IntelAnalysisJob,
        score: scoreOutput.score,
      },
    });

  } catch (err: unknown) {
    console.error('[POST /api/intelligence/analysis/start]', err);

    // Mark job as failed if it was created
    if (jobId) {
      await getSupabaseAdmin().from('intel_analysis_jobs').update({
        status: 'failed',
        completed_at: new Date().toISOString(),
        error_message: err instanceof Error ? err.message : String(err),
      }).eq('id', jobId);

      await log(jobId, 'error', `Job fallido: ${err instanceof Error ? err.message : String(err)}`);
    }

    return NextResponse.json<APIResponse<never>>(
      { success: false, error: err instanceof Error ? err.message : 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
async function updateJobProgress(
  jobId: string | null,
  progress: number,
  extra: Record<string, unknown> = {}
) {
  if (!jobId) return;
  await getSupabaseAdmin()
    .from('intel_analysis_jobs')
    .update({ progress, ...extra })
    .eq('id', jobId);
}

async function log(
  jobId: string | null,
  level: 'info' | 'warn' | 'error' | 'debug',
  message: string,
  data?: Record<string, unknown>
) {
  if (!jobId) return;
  await getSupabaseAdmin()
    .from('intel_job_logs')
    .insert({ job_id: jobId, level, message, data: data || null });
}
