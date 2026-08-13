import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { APIResponse } from '@/types/intelligence';
import { crawlDomain, DEFAULT_CRAWLER_CONFIG } from '@/lib/intelligence/crawler';
import { extractKeywords, clusterKeywords } from '@/lib/intelligence/keyword-extractor';
import { analyzeContentGap } from '@/lib/intelligence/competitor-analyzer';

export const maxDuration = 60;

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: projectId } = await params;
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'No autenticado' },
        { status: 401 }
      );
    }

    const body = await request.json() as { competitor_domain?: string };
    if (!body.competitor_domain?.trim()) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'competitor_domain es requerido' },
        { status: 400 }
      );
    }

    const competitorDomain = body.competitor_domain.trim().toLowerCase();
    const admin = getSupabaseAdmin();

    // Fetch existing project keywords (from latest job)
    const { data: latestJob } = await admin
      .from('intel_analysis_jobs')
      .select('id')
      .eq('project_id', projectId)
      .eq('status', 'completed')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    if (!latestJob) {
      return NextResponse.json<APIResponse<never>>(
        { success: false, error: 'Primero debes ejecutar un análisis del proyecto principal' },
        { status: 400 }
      );
    }

    const { data: projKeywordsData } = await admin
      .from('intel_keywords')
      .select('*')
      .eq('job_id', latestJob.id);

    const projectKeywords = (projKeywordsData || []).map(k => ({
      keyword: k.keyword,
      keyword_normalized: k.keyword_normalized,
      frequency: k.frequency,
      pages_count: k.pages_count,
      found_in: k.found_in || [],
      intent: k.intent || undefined,
      intent_source: 'AI_INFERRED' as const,
      pages: [],
      cluster: k.cluster || undefined,
    }));

    // Crawl competitor domain (light crawl: max 25 pages)
    const crawlResult = await crawlDomain(competitorDomain, {
      ...DEFAULT_CRAWLER_CONFIG,
      max_pages: 25,
    });

    // Extract competitor keywords
    const compRawKeywords = extractKeywords(crawlResult.pages);
    const compKeywords = clusterKeywords(compRawKeywords);

    // Perform Content Gap analysis
    const gaps = analyzeContentGap({
      projectId,
      projectKeywords,
      competitorDomain,
      competitorKeywords: compKeywords,
    });

    // Store gaps in DB
    const gapInserts = gaps.map(g => ({
      project_id: projectId,
      keyword: g.keyword,
      keyword_normalized: g.keyword_normalized,
      intent: g.intent || null,
      project_frequency: g.project_frequency,
      competitor_domain: competitorDomain,
      competitor_frequency: g.competitor_frequency,
      gap_type: g.gap_type,
      opportunity_score: g.opportunity_score,
    }));

    for (let i = 0; i < gapInserts.length; i += 50) {
      const batch = gapInserts.slice(i, i + 50);
      await admin.from('intel_keyword_gaps').insert(batch);
    }

    // Update competitor last_analyzed_at and pages_analyzed
    await admin
      .from('intel_competitors')
      .update({
        pages_analyzed: crawlResult.pages.length,
        last_analyzed_at: new Date().toISOString(),
      })
      .eq('project_id', projectId)
      .eq('domain', competitorDomain);

    const missingCount = gaps.filter(g => g.gap_type === 'missing').length;
    const weakCount = gaps.filter(g => g.gap_type === 'weak').length;

    return NextResponse.json<APIResponse<{
      gaps_found: number;
      missing_keywords: number;
      weak_keywords: number;
      competitor_pages: number;
    }>>({
      success: true,
      data: {
        gaps_found: gaps.length,
        missing_keywords: missingCount,
        weak_keywords: weakCount,
        competitor_pages: crawlResult.pages.length,
      },
    });
  } catch (err: unknown) {
    console.error('[POST competitors/analyze]', err);
    return NextResponse.json<APIResponse<never>>(
      { success: false, error: err instanceof Error ? err.message : 'Error al analizar competidor' },
      { status: 500 }
    );
  }
}
