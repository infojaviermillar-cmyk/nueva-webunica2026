/**
 * WEBUNICA INTELLIGENCE — Executive Report Generator (Etapa 5)
 *
 * Compila y sintetiza en una sola estructura optimizada todos los módulos:
 * - Score V1 y Desglose por componentes
 * - SEO On-Page e Issues Críticos
 * - Top Keywords detectadas
 * - Content Gap vs Competidores
 * - SERP Rankings (google.cl) & Schema.org
 * - PageSpeed & Core Web Vitals (Mobile/Desktop)
 * - Matriz de Oportunidades Priorizadas
 */

import { getSupabaseAdmin } from '@/lib/supabase/admin';
import {
  CompiledProjectReport,
  IntelProject,
  IntelScore,
  IntelRecommendation,
  IntelKeyword,
  IntelKeywordGap,
  IntelSerpRanking,
  IntelSchemaAudit,
  IntelPageSpeedAudit,
} from '@/types/intelligence';

export async function compileProjectReport(
  projectId: string
): Promise<CompiledProjectReport | null> {
  const admin = getSupabaseAdmin();

  // 1. Proyecto
  const { data: project } = await admin
    .from('intel_projects')
    .select('*')
    .eq('id', projectId)
    .single();

  if (!project) return null;

  // 2. Score más reciente
  const { data: latestScore } = await admin
    .from('intel_scores')
    .select('*')
    .eq('project_id', projectId)
    .order('calculated_at', { ascending: false })
    .limit(1)
    .single();

  // 3. Recomendaciones prioritarias (máx 15)
  const { data: recs } = await admin
    .from('intel_recommendations')
    .select('*')
    .eq('project_id', projectId)
    .order('priority', { ascending: true })
    .limit(15);

  // 4. Keywords (máx 20 principales por frecuencia)
  const { data: keywords } = await admin
    .from('intel_keywords')
    .select('*')
    .eq('project_id', projectId)
    .order('frequency', { ascending: false })
    .limit(20);

  // 5. Keyword Gaps (máx 15 mejores oportunidades)
  const { data: gaps } = await admin
    .from('intel_keyword_gaps')
    .select('*')
    .eq('project_id', projectId)
    .order('opportunity_score', { ascending: false })
    .limit(15);

  // 6. SERP Rankings
  const { data: serp } = await admin
    .from('intel_serp_rankings')
    .select('*')
    .eq('project_id', projectId)
    .order('position', { ascending: true, nullsFirst: false })
    .limit(30);

  // 7. Schema Audits
  const { data: schemas } = await admin
    .from('intel_schema_audits')
    .select('*')
    .eq('project_id', projectId)
    .order('score', { ascending: false })
    .limit(20);

  // 8. PageSpeed Audits
  const { data: psAudits } = await admin
    .from('intel_pagespeed_audits')
    .select('*')
    .eq('project_id', projectId);

  const typedPs = (psAudits as IntelPageSpeedAudit[] | null) ?? [];
  const mobilePs = typedPs.find(a => a.strategy === 'mobile');
  const desktopPs = typedPs.find(a => a.strategy === 'desktop');

  // Stats agregadas
  const typedSerp = (serp as IntelSerpRanking[] | null) ?? [];
  const typedSchemas = (schemas as IntelSchemaAudit[] | null) ?? [];
  const typedRecs = (recs as IntelRecommendation[] | null) ?? [];

  const summaryStats = {
    total_pages: latestScore?.pages_analyzed ?? 0,
    issues_critical: latestScore?.issues_critical ?? typedRecs.filter(r => r.priority === 'critical').length,
    issues_warning: latestScore?.issues_warning ?? typedRecs.filter(r => r.priority === 'high').length,
    keywords_count: (keywords ?? []).length,
    serp_top10_count: typedSerp.filter(s => s.position !== null && s.position !== undefined && s.position <= 10).length,
    schemas_count: typedSchemas.filter(s => s.schemas_found.length > 0).length,
  };

  return {
    project: project as IntelProject,
    score: (latestScore as IntelScore | null) ?? undefined,
    recommendations: typedRecs,
    keywords: (keywords as IntelKeyword[] | null) ?? [],
    competitor_gaps: (gaps as IntelKeywordGap[] | null) ?? [],
    serp_rankings: typedSerp,
    schema_audits: typedSchemas,
    pagespeed_mobile: mobilePs,
    pagespeed_desktop: desktopPs,
    summary_stats: summaryStats,
    generated_at: new Date().toISOString(),
  };
}
