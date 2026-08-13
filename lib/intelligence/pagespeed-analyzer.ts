/**
 * WEBUNICA INTELLIGENCE — PageSpeed & Core Web Vitals Engine (Etapa 4)
 *
 * Realiza medición oficial utilizando la API de Google PageSpeed Insights (v5).
 * Si la API falla o alcanza límites de cuota, genera una estimación determinista
 * basada en datos del crawler HTTP (`ESTIMATED`).
 *
 * Mide:
 * - Performance, Accesibilidad, Buenas Prácticas, SEO Score (0-100)
 * - LCP (Largest Contentful Paint)
 * - INP (Interaction to Next Paint) / FID
 * - CLS (Cumulative Layout Shift)
 * - FCP (First Contentful Paint)
 * - TBT (Total Blocking Time)
 * - Diagnósticos y Oportunidades de Optimización
 */

import {
  IntelPageSpeedAudit,
  PageSpeedStrategy,
  PageSpeedDiagnosticItem,
  CrawledPageData,
} from '@/types/intelligence';

export interface PageSpeedAnalysisOptions {
  projectId: string;
  url: string;
  strategy: PageSpeedStrategy;
  apiKey?: string;
  pageData?: CrawledPageData;  // Para fallback determinista si falla la API
}

export async function runPageSpeedAnalysis(
  options: PageSpeedAnalysisOptions
): Promise<IntelPageSpeedAudit> {
  const { projectId, url, strategy, apiKey, pageData } = options;
  const now = new Date().toISOString();

  try {
    const apiResult = await fetchGooglePageSpeedApi(url, strategy, apiKey);
    if (apiResult) {
      return {
        id: `${projectId}-${strategy}-${encodeURIComponent(url)}`,
        project_id: projectId,
        url,
        strategy,
        performance_score: Math.round(apiResult.scores.performance * 100),
        accessibility_score: Math.round(apiResult.scores.accessibility * 100),
        best_practices_score: Math.round(apiResult.scores.bestPractices * 100),
        seo_score: Math.round(apiResult.scores.seo * 100),
        lcp_ms: apiResult.vitals.lcp,
        inp_ms: apiResult.vitals.inp,
        cls: apiResult.vitals.cls,
        fcp_ms: apiResult.vitals.fcp,
        tbt_ms: apiResult.vitals.tbt,
        diagnostics: apiResult.diagnostics,
        data_source: 'MEASURED',
        audited_at: now,
        created_at: now,
      };
    }
  } catch (err) {
    console.warn('[PageSpeed] API Error, falling back to estimation:', err);
  }

  // Fallback determinista
  return estimatePageSpeedFromCrawl(projectId, url, strategy, pageData, now);
}

// ─── Fetch Google PageSpeed API ───────────────────────────────────────────────

interface ParsedPageSpeedApi {
  scores: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  vitals: {
    lcp?: number;
    inp?: number;
    cls?: number;
    fcp?: number;
    tbt?: number;
  };
  diagnostics: PageSpeedDiagnosticItem[];
}

async function fetchGooglePageSpeedApi(
  url: string,
  strategy: PageSpeedStrategy,
  apiKey?: string
): Promise<ParsedPageSpeedApi | null> {
  const endpoint = new URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed');
  endpoint.searchParams.append('url', url);
  endpoint.searchParams.append('strategy', strategy);
  endpoint.searchParams.append('category', 'PERFORMANCE');
  endpoint.searchParams.append('category', 'ACCESSIBILITY');
  endpoint.searchParams.append('category', 'BEST_PRACTICES');
  endpoint.searchParams.append('category', 'SEO');

  if (apiKey) {
    endpoint.searchParams.append('key', apiKey);
  }

  const response = await fetch(endpoint.toString(), {
    headers: { Accept: 'application/json' },
    signal: AbortSignal.timeout(30000), // 30s timeout
  });

  if (!response.ok) {
    throw new Error(`PageSpeed API returned status ${response.status}`);
  }

  const json = await response.json();
  const lighthouse = json.lighthouseResult;

  if (!lighthouse) return null;

  const categories = lighthouse.categories || {};
  const audits = lighthouse.audits || {};

  const scores = {
    performance: categories['performance']?.score ?? 0.5,
    accessibility: categories['accessibility']?.score ?? 0.7,
    bestPractices: categories['best-practices']?.score ?? 0.8,
    seo: categories['seo']?.score ?? 0.8,
  };

  const vitals = {
    lcp: Math.round(audits['largest-contentful-paint']?.numericValue ?? 2500),
    inp: Math.round(audits['max-potential-fid']?.numericValue ?? audits['interactive']?.numericValue ?? 150),
    cls: parseFloat((audits['cumulative-layout-shift']?.numericValue ?? 0.05).toFixed(3)),
    fcp: Math.round(audits['first-contentful-paint']?.numericValue ?? 1200),
    tbt: Math.round(audits['total-blocking-time']?.numericValue ?? 200),
  };

  const diagnostics: PageSpeedDiagnosticItem[] = [];

  for (const [key, audit] of Object.entries<any>(audits)) {
    if (audit.details?.type === 'opportunity' && audit.score !== null && audit.score < 0.9) {
      diagnostics.push({
        id: key,
        title: audit.title || key,
        description: audit.description || '',
        score: audit.score ?? 0,
        displayValue: audit.displayValue,
        savings_bytes: audit.details?.overallSavingsBytes,
        savings_ms: audit.details?.overallSavingsMs,
      });
    }
  }

  // Sort opportunities by highest ms/bytes savings
  diagnostics.sort((a, b) => (b.savings_ms || 0) - (a.savings_ms || 0));

  return { scores, vitals, diagnostics };
}

// ─── Fallback Determinista ───────────────────────────────────────────────────

function estimatePageSpeedFromCrawl(
  projectId: string,
  url: string,
  strategy: PageSpeedStrategy,
  pageData?: CrawledPageData,
  timestamp?: string
): IntelPageSpeedAudit {
  const now = timestamp ?? new Date().toISOString();
  const responseMs = pageData?.response_time_ms ?? 600;
  const isMobile = strategy === 'mobile';

  // Multiplicador móvil (los dispositivos móviles suelen sufrir más latencia y CPU)
  const multiplier = isMobile ? 1.4 : 1.0;
  const estimatedLcp = Math.round(responseMs * 2.5 * multiplier);
  const estimatedFcp = Math.round(responseMs * 1.2 * multiplier);
  const estimatedTbt = Math.round(responseMs * 0.4 * multiplier);
  const estimatedCls = parseFloat((0.02 * multiplier).toFixed(3));
  const estimatedInp = Math.round(120 * multiplier);

  // Score de performance basado en LCP estimado
  let perfScore = 90;
  if (estimatedLcp > 4000) perfScore = 35;
  else if (estimatedLcp > 2500) perfScore = 65;
  else if (estimatedLcp > 1500) perfScore = 80;

  const diagnostics: PageSpeedDiagnosticItem[] = [];

  if (pageData?.images_missing_alt && pageData.images_missing_alt > 0) {
    diagnostics.push({
      id: 'image-alt',
      title: 'Añadir atributos ALT a las imágenes',
      description: `${pageData.images_missing_alt} imágenes no tienen texto alternativo alt.`,
      score: 0.5,
    });
  }

  if (estimatedLcp > 2500) {
    diagnostics.push({
      id: 'render-blocking-resources',
      title: 'Eliminar recursos que bloquean el renderizado',
      description: 'Detección de scripts y estilos CSS en el head que retrasan el FCP/LCP.',
      score: 0.4,
      savings_ms: Math.round(estimatedLcp - 1800),
    });
  }

  return {
    id: `${projectId}-${strategy}-${encodeURIComponent(url)}`,
    project_id: projectId,
    url,
    strategy,
    performance_score: perfScore,
    accessibility_score: pageData?.seo_score ?? 75,
    best_practices_score: 85,
    seo_score: pageData?.seo_score ?? 80,
    lcp_ms: estimatedLcp,
    inp_ms: estimatedInp,
    cls: estimatedCls,
    fcp_ms: estimatedFcp,
    tbt_ms: estimatedTbt,
    diagnostics,
    data_source: 'ESTIMATED',
    audited_at: now,
    created_at: now,
  };
}
