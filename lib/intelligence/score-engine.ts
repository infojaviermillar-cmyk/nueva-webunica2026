/**
 * WEBUNICA INTELLIGENCE — Score Engine V1 (Etapa 1)
 * Algoritmo determinista y explicable. Versión: v1
 *
 * Fuente: CALCULATED (basado en datos MEASURED + análisis determinista)
 * NO usa LLM para generar el score global.
 */

import { CrawledPageData, ScoreComponents, IntelScore } from '@/types/intelligence';
import { analyzePage, analyzeSite } from './seo-analyzer';
import { ExtractedKeyword } from './keyword-extractor';

// ─── Score Version ────────────────────────────────────────────────────────────
export const SCORE_VERSION = 'v1';

// ─── Component Weights (must sum to 1.0) ─────────────────────────────────────
const WEIGHTS = {
  technical_seo: 0.30,
  on_page:       0.25,
  content:       0.20,
  architecture:  0.15,
  opportunity:   0.10,
} as const;

// ─── Main Score Calculator ────────────────────────────────────────────────────
export interface ScoreInput {
  pages: CrawledPageData[];
  keywords: ExtractedKeyword[];
  domain: string;
}

export interface ScoreOutput {
  score: number;
  score_version: string;
  score_technical_seo: number;
  score_content: number;
  score_on_page: number;
  score_architecture: number;
  score_opportunity: number;
  score_components: ScoreComponents;
  issues_critical: number;
  issues_warning: number;
  pages_analyzed: number;
  keywords_found: number;
  opportunities_count: number;
}

export function calculateIntelligenceScore(input: ScoreInput): ScoreOutput {
  const { pages, keywords } = input;

  if (pages.length === 0) {
    return zeroScore();
  }

  const siteAnalysis = analyzeSite(pages);
  const pageScores = pages.map(p => analyzePage(p));

  // ─── 1. Technical SEO (30%) ─────────────────────────────────────────────
  const technicalSEO = scoreTechnicalSEO(pages, siteAnalysis);

  // ─── 2. On-Page (25%) ───────────────────────────────────────────────────
  const onPage = scoreOnPage(pages, pageScores, siteAnalysis);

  // ─── 3. Content (20%) ───────────────────────────────────────────────────
  const content = scoreContent(pages);

  // ─── 4. Architecture (15%) ──────────────────────────────────────────────
  const architecture = scoreArchitecture(pages, siteAnalysis);

  // ─── 5. Opportunity Coverage (10%) ──────────────────────────────────────
  const opportunity = scoreOpportunity(keywords);

  // ─── Global Score ────────────────────────────────────────────────────────
  const globalScore = Math.round(
    technicalSEO.score * WEIGHTS.technical_seo +
    onPage.score       * WEIGHTS.on_page       +
    content.score      * WEIGHTS.content       +
    architecture.score * WEIGHTS.architecture  +
    opportunity.score  * WEIGHTS.opportunity
  );

  const components: ScoreComponents = {
    technical_seo: { ...technicalSEO, weight: WEIGHTS.technical_seo },
    on_page:       { ...onPage,       weight: WEIGHTS.on_page },
    content:       { ...content,      weight: WEIGHTS.content },
    architecture:  { ...architecture, weight: WEIGHTS.architecture },
    opportunity:   { ...opportunity,  weight: WEIGHTS.opportunity },
  };

  // Count total issues
  let criticalTotal = 0;
  let warningTotal = 0;
  for (const { issues } of pageScores) {
    for (const issue of issues) {
      if (issue.severity === 'critical') criticalTotal++;
      if (issue.severity === 'warning') warningTotal++;
    }
  }

  // Opportunity = critical + high recommendations
  const opportunitiesCount = criticalTotal + Math.ceil(warningTotal / 2);

  return {
    score: Math.max(0, Math.min(100, globalScore)),
    score_version: SCORE_VERSION,
    score_technical_seo: technicalSEO.score,
    score_content: content.score,
    score_on_page: onPage.score,
    score_architecture: architecture.score,
    score_opportunity: opportunity.score,
    score_components: components,
    issues_critical: criticalTotal,
    issues_warning: warningTotal,
    pages_analyzed: pages.length,
    keywords_found: keywords.length,
    opportunities_count: opportunitiesCount,
  };
}

// ─── Component Scorers ────────────────────────────────────────────────────────
interface ComponentResult {
  score: number;
  issues: string[];
  positives: string[];
  explanation: string;
}

function scoreTechnicalSEO(pages: CrawledPageData[], siteAnalysis: ReturnType<typeof analyzeSite>): ComponentResult {
  const issues: string[] = [];
  const positives: string[] = [];
  let score = 100;

  // Indexable ratio
  const indexableRatio = siteAnalysis.total_pages > 0
    ? siteAnalysis.indexable_pages / siteAnalysis.total_pages
    : 1;

  if (indexableRatio < 0.7) {
    score -= 30;
    issues.push(`Solo ${Math.round(indexableRatio * 100)}% de las páginas son indexables`);
  } else if (indexableRatio < 0.9) {
    score -= 15;
    issues.push(`${Math.round((1 - indexableRatio) * siteAnalysis.total_pages)} páginas no son indexables`);
  } else {
    positives.push('Alta tasa de indexabilidad');
  }

  // HTTP errors
  const errorPages = pages.filter(p => p.status_code && p.status_code >= 400).length;
  if (errorPages > 0) {
    score -= Math.min(40, errorPages * 8);
    issues.push(`${errorPages} página(s) con errores HTTP`);
  } else {
    positives.push('Sin páginas con errores HTTP');
  }

  // Response times
  const slowPages = siteAnalysis.slow_pages.length;
  if (slowPages > 0) {
    score -= Math.min(20, slowPages * 4);
    issues.push(`${slowPages} página(s) con tiempo de respuesta lento`);
  }

  // Canonical coverage
  const withCanonical = pages.filter(p => p.canonical_url).length;
  const canonicalRatio = pages.length > 0 ? withCanonical / pages.length : 0;
  if (canonicalRatio < 0.5) {
    score -= 10;
    issues.push('Bajo uso de etiquetas canonical');
  }

  return {
    score: Math.max(0, Math.min(100, score)),
    issues,
    positives,
    explanation: `Evaluación técnica basada en ${pages.length} páginas analizadas. Índice de indexabilidad: ${Math.round(indexableRatio * 100)}%.`,
  };
}

function scoreOnPage(
  pages: CrawledPageData[],
  pageScores: Array<{ issues: ReturnType<typeof analyzePage>['issues']; score: number }>,
  siteAnalysis: ReturnType<typeof analyzeSite>
): ComponentResult {
  const issues: string[] = [];
  const positives: string[] = [];

  // Average page score
  const avgScore = pageScores.length > 0
    ? pageScores.reduce((s, p) => s + p.score, 0) / pageScores.length
    : 0;

  // Duplicate titles
  if (siteAnalysis.duplicate_titles.length > 0) {
    issues.push(`${siteAnalysis.duplicate_titles.length} grupo(s) de títulos duplicados`);
  } else {
    positives.push('Sin títulos duplicados detectados');
  }

  // Missing H1s
  if (siteAnalysis.pages_without_h1.length > 0) {
    issues.push(`${siteAnalysis.pages_without_h1.length} página(s) sin H1`);
  } else {
    positives.push('Todas las páginas tienen H1');
  }

  // Duplicate H1s
  if (siteAnalysis.duplicate_h1.length > 0) {
    issues.push(`${siteAnalysis.duplicate_h1.length} grupo(s) de H1 duplicados`);
  }

  return {
    score: Math.max(0, Math.min(100, Math.round(avgScore))),
    issues,
    positives,
    explanation: `Score promedio on-page de ${pages.length} páginas: ${Math.round(avgScore)}/100.`,
  };
}

function scoreContent(pages: CrawledPageData[]): ComponentResult {
  const issues: string[] = [];
  const positives: string[] = [];
  let score = 100;

  const indexablePages = pages.filter(p => p.is_indexable !== false);
  if (indexablePages.length === 0) return { score: 0, issues: ['Sin páginas indexables'], positives: [], explanation: 'Sin datos.' };

  // Thin content ratio
  const thinPages = indexablePages.filter(p => (p.word_count ?? 0) < 300 && p.page_type !== 'contact').length;
  const thinRatio = thinPages / indexablePages.length;
  if (thinRatio > 0.5) {
    score -= 35;
    issues.push(`${thinPages} páginas con contenido escaso (<300 palabras)`);
  } else if (thinRatio > 0.25) {
    score -= 20;
    issues.push(`${thinPages} páginas con contenido escaso`);
  } else if (thinRatio < 0.1) {
    positives.push('Contenido sustancial en la mayoría de páginas');
  }

  // Average word count
  const avgWords = indexablePages.reduce((s, p) => s + (p.word_count ?? 0), 0) / indexablePages.length;
  if (avgWords >= 500) {
    positives.push(`Promedio de ${Math.round(avgWords)} palabras por página`);
  } else if (avgWords < 200) {
    score -= 15;
    issues.push(`Promedio de ${Math.round(avgWords)} palabras por página (bajo)`);
  }

  // H2 coverage (content structure)
  const pagesWithH2 = indexablePages.filter(p => (p.h2?.length ?? 0) > 0).length;
  const h2Ratio = pagesWithH2 / indexablePages.length;
  if (h2Ratio < 0.5) {
    score -= 10;
    issues.push('Bajo uso de subtítulos H2 para estructurar contenido');
  }

  return {
    score: Math.max(0, Math.min(100, score)),
    issues,
    positives,
    explanation: `Análisis de contenido de ${indexablePages.length} páginas indexables. Promedio: ${Math.round(avgWords)} palabras.`,
  };
}

function scoreArchitecture(pages: CrawledPageData[], siteAnalysis: ReturnType<typeof analyzeSite>): ComponentResult {
  const issues: string[] = [];
  const positives: string[] = [];
  let score = 100;

  // Deep pages (depth > 3)
  const deepPages = pages.filter(p => p.depth > 3).length;
  if (deepPages > pages.length * 0.3) {
    score -= 15;
    issues.push(`${deepPages} páginas en profundidad > 3 clics`);
  } else {
    positives.push('Buena profundidad de navegación');
  }

  // Internal linking
  const avgInternalLinks = pages.length > 0
    ? pages.reduce((s, p) => s + (p.links_internal?.length ?? 0), 0) / pages.length
    : 0;
  if (avgInternalLinks < 3) {
    score -= 20;
    issues.push(`Promedio de ${Math.round(avgInternalLinks)} enlaces internos por página (muy bajo)`);
  } else if (avgInternalLinks >= 5) {
    positives.push('Buen enlazado interno');
  }

  // Page types variety
  const pageTypes = new Set(pages.map(p => p.page_type));
  if (pageTypes.size >= 3) {
    positives.push('Buena variedad de tipos de páginas');
  }

  // Redirect ratio
  const redirectPages = pages.filter(p => p.redirect_url).length;
  if (redirectPages > pages.length * 0.2) {
    score -= 10;
    issues.push(`${redirectPages} páginas con redirección`);
  }

  return {
    score: Math.max(0, Math.min(100, score)),
    issues,
    positives,
    explanation: `Análisis de arquitectura de ${pages.length} URLs. Promedio de enlaces internos: ${Math.round(avgInternalLinks)}.`,
  };
}

function scoreOpportunity(keywords: ExtractedKeyword[]): ComponentResult {
  const issues: string[] = [];
  const positives: string[] = [];
  let score = 50; // base neutral

  if (keywords.length === 0) {
    return { score: 30, issues: ['No se detectaron keywords'], positives: [], explanation: 'Sin keywords extraídas.' };
  }

  // Commercial + transactional intent
  const commercialKw = keywords.filter(k => k.intent === 'commercial' || k.intent === 'transactional').length;
  const infoKw = keywords.filter(k => k.intent === 'informational').length;
  const localKw = keywords.filter(k => k.intent === 'local').length;

  if (commercialKw >= 5) {
    score += 20;
    positives.push(`${commercialKw} keywords con intención comercial/transaccional`);
  } else {
    score -= 10;
    issues.push('Pocas keywords con intención comercial detectadas');
  }

  if (localKw >= 3) {
    score += 15;
    positives.push(`${localKw} keywords con intención local (SEO local)`);
  }

  if (infoKw >= 10) {
    score += 10;
    positives.push(`${infoKw} keywords informacionales para top of funnel`);
  }

  // Total keyword diversity
  if (keywords.length >= 50) {
    score += 5;
    positives.push('Alta densidad de keywords detectadas');
  }

  return {
    score: Math.max(0, Math.min(100, score)),
    issues,
    positives,
    explanation: `${keywords.length} keywords extraídas. ${commercialKw} comerciales, ${localKw} locales, ${infoKw} informacionales.`,
  };
}

function zeroScore(): ScoreOutput {
  const emptyComponent = {
    score: 0, weight: 0, issues: [], positives: [], explanation: 'Sin datos suficientes.'
  };
  return {
    score: 0,
    score_version: SCORE_VERSION,
    score_technical_seo: 0,
    score_content: 0,
    score_on_page: 0,
    score_architecture: 0,
    score_opportunity: 0,
    score_components: {
      technical_seo: { ...emptyComponent, weight: WEIGHTS.technical_seo },
      on_page:       { ...emptyComponent, weight: WEIGHTS.on_page },
      content:       { ...emptyComponent, weight: WEIGHTS.content },
      architecture:  { ...emptyComponent, weight: WEIGHTS.architecture },
      opportunity:   { ...emptyComponent, weight: WEIGHTS.opportunity },
    },
    issues_critical: 0,
    issues_warning: 0,
    pages_analyzed: 0,
    keywords_found: 0,
    opportunities_count: 0,
  };
}
