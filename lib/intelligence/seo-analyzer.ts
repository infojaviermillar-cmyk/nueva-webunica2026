/**
 * WEBUNICA INTELLIGENCE — SEO Analyzer (Etapa 1)
 * Detecta issues SEO on-page de forma determinista.
 * Fuente: CALCULATED (basado en datos MEASURED del crawler)
 */

import { CrawledPageData, SEOIssue } from '@/types/intelligence';

// ─── Issue Codes ──────────────────────────────────────────────────────────────
export const SEO_ISSUES = {
  MISSING_TITLE:        { code: 'MISSING_TITLE',        severity: 'critical' as const },
  TITLE_TOO_SHORT:      { code: 'TITLE_TOO_SHORT',      severity: 'warning'  as const },
  TITLE_TOO_LONG:       { code: 'TITLE_TOO_LONG',       severity: 'warning'  as const },
  MISSING_META_DESC:    { code: 'MISSING_META_DESC',    severity: 'warning'  as const },
  META_DESC_TOO_SHORT:  { code: 'META_DESC_TOO_SHORT',  severity: 'warning'  as const },
  META_DESC_TOO_LONG:   { code: 'META_DESC_TOO_LONG',   severity: 'warning'  as const },
  MISSING_H1:           { code: 'MISSING_H1',           severity: 'critical' as const },
  MULTIPLE_H1:          { code: 'MULTIPLE_H1',          severity: 'warning'  as const },
  THIN_CONTENT:         { code: 'THIN_CONTENT',         severity: 'warning'  as const },
  IMAGES_WITHOUT_ALT:   { code: 'IMAGES_WITHOUT_ALT',   severity: 'warning'  as const },
  NOT_INDEXABLE:        { code: 'NOT_INDEXABLE',        severity: 'critical' as const },
  SLOW_RESPONSE:        { code: 'SLOW_RESPONSE',        severity: 'warning'  as const },
  HTTP_ERROR:           { code: 'HTTP_ERROR',           severity: 'critical' as const },
  REDIRECT_CHAIN:       { code: 'REDIRECT_CHAIN',       severity: 'warning'  as const },
  MISSING_CANONICAL:    { code: 'MISSING_CANONICAL',    severity: 'warning'  as const },
  NO_H2:                { code: 'NO_H2',               severity: 'info'     as const },
};

// ─── Thresholds ───────────────────────────────────────────────────────────────
const THRESHOLDS = {
  TITLE_MIN: 30,
  TITLE_MAX: 60,
  META_DESC_MIN: 70,
  META_DESC_MAX: 160,
  THIN_CONTENT_WORDS: 300,
  SLOW_RESPONSE_MS: 3000,
};

// ─── Analyze a single page ────────────────────────────────────────────────────
export function analyzePage(page: CrawledPageData): {
  issues: SEOIssue[];
  score: number;
} {
  const issues: SEOIssue[] = [];

  // HTTP errors
  if (page.status_code && page.status_code >= 400) {
    issues.push({
      code: SEO_ISSUES.HTTP_ERROR.code,
      severity: 'critical',
      message: `Página retorna error HTTP ${page.status_code}`,
      recommendation: 'Corregir el error del servidor o redirigir a una URL válida.',
      data_source: 'MEASURED',
    });
    return { issues, score: 0 };
  }

  // Redirect chain
  if (page.redirect_url) {
    issues.push({
      code: SEO_ISSUES.REDIRECT_CHAIN.code,
      severity: 'warning',
      message: `La URL redirige a ${page.redirect_url}`,
      recommendation: 'Actualizar los enlaces internos para apuntar directamente a la URL final.',
      data_source: 'MEASURED',
    });
  }

  // Indexability
  if (page.is_indexable === false) {
    issues.push({
      code: SEO_ISSUES.NOT_INDEXABLE.code,
      severity: 'critical',
      message: 'La página tiene directiva noindex y no será indexada por Google.',
      recommendation: 'Verificar si la directiva noindex es intencional. Si la página debe aparecer en buscadores, eliminar el tag robots noindex.',
      data_source: 'MEASURED',
    });
  }

  // Title analysis
  if (!page.title || page.title_length === 0) {
    issues.push({
      code: SEO_ISSUES.MISSING_TITLE.code,
      severity: 'critical',
      message: 'La página no tiene etiqueta <title>.',
      recommendation: 'Agregar un title descriptivo de entre 30-60 caracteres con la keyword principal.',
      data_source: 'MEASURED',
    });
  } else if (page.title_length < THRESHOLDS.TITLE_MIN) {
    issues.push({
      code: SEO_ISSUES.TITLE_TOO_SHORT.code,
      severity: 'warning',
      message: `El title tiene solo ${page.title_length} caracteres (mínimo recomendado: ${THRESHOLDS.TITLE_MIN}).`,
      recommendation: 'Ampliar el title incluyendo la keyword principal y el nombre de la marca.',
      data_source: 'CALCULATED',
    });
  } else if (page.title_length > THRESHOLDS.TITLE_MAX) {
    issues.push({
      code: SEO_ISSUES.TITLE_TOO_LONG.code,
      severity: 'warning',
      message: `El title tiene ${page.title_length} caracteres (máximo recomendado: ${THRESHOLDS.TITLE_MAX}). Google lo truncará.`,
      recommendation: 'Reducir el title a máximo 60 caracteres priorizando la keyword principal al inicio.',
      data_source: 'CALCULATED',
    });
  }

  // Meta description analysis
  if (!page.meta_description || page.meta_desc_length === 0) {
    issues.push({
      code: SEO_ISSUES.MISSING_META_DESC.code,
      severity: 'warning',
      message: 'La página no tiene meta description.',
      recommendation: 'Agregar una meta description de 70-160 caracteres que describa el contenido e incluya un CTA.',
      data_source: 'MEASURED',
    });
  } else if (page.meta_desc_length < THRESHOLDS.META_DESC_MIN) {
    issues.push({
      code: SEO_ISSUES.META_DESC_TOO_SHORT.code,
      severity: 'warning',
      message: `La meta description tiene solo ${page.meta_desc_length} caracteres.`,
      recommendation: 'Ampliar la descripción incluyendo los beneficios principales y una llamada a la acción.',
      data_source: 'CALCULATED',
    });
  } else if (page.meta_desc_length > THRESHOLDS.META_DESC_MAX) {
    issues.push({
      code: SEO_ISSUES.META_DESC_TOO_LONG.code,
      severity: 'warning',
      message: `La meta description tiene ${page.meta_desc_length} caracteres. Google la truncará a 160.`,
      recommendation: 'Reducir la descripción a máximo 160 caracteres priorizando el mensaje más relevante.',
      data_source: 'CALCULATED',
    });
  }

  // H1 analysis
  const h1Count = page.h1?.length ?? 0;
  if (h1Count === 0) {
    issues.push({
      code: SEO_ISSUES.MISSING_H1.code,
      severity: 'critical',
      message: 'La página no tiene etiqueta H1.',
      recommendation: 'Agregar un único H1 con la keyword principal de la página.',
      data_source: 'MEASURED',
    });
  } else if (h1Count > 1) {
    issues.push({
      code: SEO_ISSUES.MULTIPLE_H1.code,
      severity: 'warning',
      message: `La página tiene ${h1Count} etiquetas H1. Solo debe tener una.`,
      recommendation: 'Conservar únicamente el H1 principal y convertir los demás en H2 o H3.',
      data_source: 'MEASURED',
    });
  }

  // H2 presence
  const h2Count = page.h2?.length ?? 0;
  if (h2Count === 0 && page.page_type !== 'contact' && page.page_type !== 'legal') {
    issues.push({
      code: SEO_ISSUES.NO_H2.code,
      severity: 'info',
      message: 'La página no tiene subtítulos H2 para estructurar el contenido.',
      recommendation: 'Organizar el contenido con H2 que incluyan variaciones de la keyword principal.',
      data_source: 'MEASURED',
    });
  }

  // Thin content
  if ((page.word_count ?? 0) < THRESHOLDS.THIN_CONTENT_WORDS && page.page_type !== 'contact') {
    issues.push({
      code: SEO_ISSUES.THIN_CONTENT.code,
      severity: 'warning',
      message: `La página tiene solo ${page.word_count ?? 0} palabras. El contenido escaso perjudica el posicionamiento.`,
      recommendation: 'Ampliar el contenido a mínimo 300 palabras con información relevante y de valor para el usuario.',
      data_source: 'CALCULATED',
    });
  }

  // Images without ALT
  if ((page.images_missing_alt ?? 0) > 0) {
    issues.push({
      code: SEO_ISSUES.IMAGES_WITHOUT_ALT.code,
      severity: 'warning',
      message: `${page.images_missing_alt} imagen(es) sin atributo ALT.`,
      recommendation: 'Agregar descripciones ALT a todas las imágenes incluyendo la keyword cuando sea relevante.',
      data_source: 'MEASURED',
    });
  }

  // Slow response
  if ((page.response_time_ms ?? 0) > THRESHOLDS.SLOW_RESPONSE_MS) {
    issues.push({
      code: SEO_ISSUES.SLOW_RESPONSE.code,
      severity: 'warning',
      message: `Tiempo de respuesta del servidor: ${page.response_time_ms}ms (recomendado: <${THRESHOLDS.SLOW_RESPONSE_MS}ms).`,
      recommendation: 'Optimizar el servidor, implementar caché y usar CDN para mejorar el tiempo de carga.',
      data_source: 'MEASURED',
    });
  }

  // Missing canonical
  if (!page.canonical_url) {
    issues.push({
      code: SEO_ISSUES.MISSING_CANONICAL.code,
      severity: 'warning',
      message: 'La página no especifica URL canónica.',
      recommendation: 'Agregar <link rel="canonical"> para evitar contenido duplicado.',
      data_source: 'MEASURED',
    });
  }

  // ─── Score Calculation (CALCULATED) ──────────────────────────────────────
  const score = calculatePageScore(issues, page);
  return { issues, score };
}

function calculatePageScore(issues: SEOIssue[], page: CrawledPageData): number {
  // Base 100, penalize per issue
  const PENALTIES: Record<string, number> = {
    HTTP_ERROR:          100,
    MISSING_TITLE:       25,
    MISSING_H1:          20,
    NOT_INDEXABLE:       15,
    THIN_CONTENT:        15,
    MISSING_META_DESC:   12,
    TITLE_TOO_LONG:       8,
    TITLE_TOO_SHORT:      8,
    META_DESC_TOO_SHORT:  6,
    META_DESC_TOO_LONG:   6,
    MULTIPLE_H1:          8,
    IMAGES_WITHOUT_ALT:   5,
    SLOW_RESPONSE:        8,
    REDIRECT_CHAIN:       5,
    MISSING_CANONICAL:    4,
    NO_H2:                3,
  };

  let score = 100;
  for (const issue of issues) {
    score -= PENALTIES[issue.code] ?? 5;
  }
  return Math.max(0, Math.min(100, Math.round(score)));
}

// ─── Site-level aggregated analysis ──────────────────────────────────────────
export interface SiteAnalysis {
  total_pages: number;
  indexable_pages: number;
  pages_with_issues: number;
  critical_issues_count: number;
  warning_issues_count: number;
  avg_seo_score: number;
  top_issues: Array<{ code: string; count: number; severity: string }>;
  duplicate_titles: string[][];    // grupos de páginas con mismo title
  duplicate_h1: string[][];
  pages_without_h1: string[];
  slow_pages: string[];            // URLs con response_time > threshold
}

export function analyzeSite(pages: CrawledPageData[]): SiteAnalysis {
  const titleGroups: Record<string, string[]> = {};
  const h1Groups: Record<string, string[]> = {};
  const issueCounts: Record<string, { count: number; severity: string }> = {};
  const pagesWithoutH1: string[] = [];
  const slowPages: string[] = [];
  let totalScore = 0;
  let criticalCount = 0;
  let warningCount = 0;
  let pagesWithIssues = 0;

  for (const page of pages) {
    const { issues, score } = analyzePage(page);
    totalScore += score;

    if (issues.length > 0) pagesWithIssues++;

    for (const issue of issues) {
      if (!issueCounts[issue.code]) {
        issueCounts[issue.code] = { count: 0, severity: issue.severity };
      }
      issueCounts[issue.code].count++;
      if (issue.severity === 'critical') criticalCount++;
      if (issue.severity === 'warning') warningCount++;
    }

    // Track duplicate titles
    if (page.title) {
      const normTitle = page.title.toLowerCase().trim();
      titleGroups[normTitle] = titleGroups[normTitle] || [];
      titleGroups[normTitle].push(page.url);
    }

    // Track duplicate H1s
    if (page.h1 && page.h1.length > 0) {
      const normH1 = page.h1[0].toLowerCase().trim();
      h1Groups[normH1] = h1Groups[normH1] || [];
      h1Groups[normH1].push(page.url);
    } else {
      pagesWithoutH1.push(page.url);
    }

    // Slow pages
    if ((page.response_time_ms ?? 0) > THRESHOLDS.SLOW_RESPONSE_MS) {
      slowPages.push(page.url);
    }
  }

  const topIssues = Object.entries(issueCounts)
    .map(([code, { count, severity }]) => ({ code, count, severity }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  const duplicateTitles = Object.values(titleGroups).filter(group => group.length > 1);
  const duplicateH1 = Object.values(h1Groups).filter(group => group.length > 1);

  return {
    total_pages: pages.length,
    indexable_pages: pages.filter(p => p.is_indexable !== false).length,
    pages_with_issues: pagesWithIssues,
    critical_issues_count: criticalCount,
    warning_issues_count: warningCount,
    avg_seo_score: pages.length > 0 ? Math.round(totalScore / pages.length) : 0,
    top_issues: topIssues,
    duplicate_titles: duplicateTitles,
    duplicate_h1: duplicateH1,
    pages_without_h1: pagesWithoutH1,
    slow_pages: slowPages,
  };
}
