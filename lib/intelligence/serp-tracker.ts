/**
 * WEBUNICA INTELLIGENCE — SERP Ranking Engine (Etapa 3)
 *
 * ⚠️  AVISO DE DATOS: Este motor usa estimación determinista basada en análisis
 * de contenido crawleado. NO consulta Google ni ninguna API externa.
 * Todos los resultados se marcan como data_source: 'ESTIMATED'.
 *
 * Para posiciones reales, integrar SerpApi / DataForSEO en una versión futura.
 *
 * Algoritmo de estimación:
 * 1. Normaliza la keyword
 * 2. Calcula relevancia por presencia en: título (35pt), H1 (25pt),
 *    meta-description (15pt), H2s (10pt), body (15pt)
 * 3. Pondera por SEO score de la página
 * 4. Convierte relevancia (0-100) a posición estimada (1-30 o null)
 * 5. Detecta SERP features probables según tipo de página y contenido
 */

import { CrawledPageData, IntelSerpRanking, SerpFeature, SerpDataSource } from '@/types/intelligence';

// ─── Types internos ───────────────────────────────────────────────────────────

export interface SerpCheckInput {
  projectId: string;
  domain: string;
  keywords: Array<{ keyword: string; keyword_normalized: string; intent?: string }>;
  pages: CrawledPageData[];
}

export interface SerpCheckResult {
  rankings: IntelSerpRanking[];
  summary: {
    keywords_checked: number;
    top3: number;
    top10: number;
    top30: number;
    out_of_range: number;
    not_ranked: number;
  };
}

// ─── Constants ────────────────────────────────────────────────────────────────

const RELEVANCE_THRESHOLDS = {
  top3:  85,   // ≥85 relevance → pos 1–3
  top10: 65,   // ≥65 relevance → pos 4–10
  top30: 40,   // ≥40 relevance → pos 11–30
};

const FIELD_WEIGHTS = {
  title:            35,
  h1:               25,
  meta_description: 15,
  h2:               10,
  body:             15,
};

// ─── Main: checkSerpPositions ─────────────────────────────────────────────────

export function checkSerpPositions(input: SerpCheckInput): SerpCheckResult {
  const { projectId, keywords, pages } = input;
  const now = new Date().toISOString();
  const rankings: IntelSerpRanking[] = [];

  // Solo indexar páginas indexables
  const indexablePages = pages.filter(p => p.is_indexable && p.status_code === 200);

  for (const kw of keywords) {
    // Encontrar la página más relevante para esta keyword
    const bestMatch = findBestPageMatch(kw.keyword_normalized, indexablePages);

    const position = bestMatch
      ? relevanceToPosition(bestMatch.relevance, bestMatch.seoScore)
      : undefined;

    const serpFeatures = bestMatch
      ? detectSerpFeatures(bestMatch.page, kw.keyword_normalized)
      : [];

    rankings.push({
      id:                 `${projectId}-${kw.keyword_normalized}`,
      project_id:         projectId,
      keyword:            kw.keyword,
      keyword_normalized: kw.keyword_normalized,
      url:                bestMatch?.page.url,
      position,
      previous_position:  undefined,    // Se actualiza en el upsert desde la BD
      serp_features:      serpFeatures,
      search_engine:      'google.cl',
      locale:             'es-CL',
      data_source:        'ESTIMATED' as SerpDataSource,
      relevance_score:    bestMatch?.relevance,
      checked_at:         now,
      created_at:         now,
    });
  }

  // Calcular summary
  const positioned = rankings.filter(r => r.position !== undefined);
  const summary = {
    keywords_checked: rankings.length,
    top3:         positioned.filter(r => (r.position ?? 99) <= 3).length,
    top10:        positioned.filter(r => (r.position ?? 99) > 3 && (r.position ?? 99) <= 10).length,
    top30:        positioned.filter(r => (r.position ?? 99) > 10 && (r.position ?? 99) <= 30).length,
    out_of_range: positioned.filter(r => (r.position ?? 99) > 30).length,
    not_ranked:   rankings.filter(r => r.position === undefined).length,
  };

  return { rankings, summary };
}

// ─── findBestPageMatch ────────────────────────────────────────────────────────

interface PageMatch {
  page: CrawledPageData;
  relevance: number;   // 0-100
  seoScore: number;
}

function findBestPageMatch(
  keywordNormalized: string,
  pages: CrawledPageData[]
): PageMatch | null {
  let best: PageMatch | null = null;

  const tokens = keywordNormalized.toLowerCase().split(/\s+/).filter(t => t.length > 2);
  if (tokens.length === 0) return null;

  for (const page of pages) {
    const relevance = calculatePageRelevance(tokens, page);
    const seoScore = page.seo_score ?? 50;

    if (relevance > 0 && (!best || relevance > best.relevance)) {
      best = { page, relevance, seoScore };
    }
  }

  return best;
}

// ─── calculatePageRelevance ───────────────────────────────────────────────────

function calculatePageRelevance(tokens: string[], page: CrawledPageData): number {
  let score = 0;

  const title = (page.title ?? '').toLowerCase();
  const h1    = (page.h1 ?? []).join(' ').toLowerCase();
  const meta  = (page.meta_description ?? '').toLowerCase();
  const h2s   = (page.h2 ?? []).join(' ').toLowerCase();
  // Construir cuerpo representativo (sin HTML — usamos los campos estructurados)
  const body  = [title, h1, meta, h2s, (page.h3 ?? []).join(' ')].join(' ');

  const countMatches = (text: string, toks: string[]): number => {
    if (!text) return 0;
    let hits = 0;
    for (const tok of toks) {
      if (text.includes(tok)) hits++;
    }
    return hits / toks.length;  // ratio 0–1
  };

  score += FIELD_WEIGHTS.title            * countMatches(title, tokens);
  score += FIELD_WEIGHTS.h1               * countMatches(h1, tokens);
  score += FIELD_WEIGHTS.meta_description * countMatches(meta, tokens);
  score += FIELD_WEIGHTS.h2               * countMatches(h2s, tokens);
  score += FIELD_WEIGHTS.body             * countMatches(body, tokens);

  return Math.min(100, Math.round(score));
}

// ─── relevanceToPosition ──────────────────────────────────────────────────────

function relevanceToPosition(relevance: number, seoScore: number): number | undefined {
  // Combinar relevance con seoScore (70/30)
  const combined = relevance * 0.7 + seoScore * 0.3;

  if (combined >= RELEVANCE_THRESHOLDS.top3) {
    // Top 3: posición 1, 2 o 3 según combined
    return combined >= 95 ? 1 : combined >= 90 ? 2 : 3;
  }
  if (combined >= RELEVANCE_THRESHOLDS.top10) {
    // Top 10: posición 4–10
    const range = RELEVANCE_THRESHOLDS.top10;
    const max   = RELEVANCE_THRESHOLDS.top3;
    const ratio = (combined - range) / (max - range);
    return Math.round(10 - ratio * 6);   // 4–10
  }
  if (combined >= RELEVANCE_THRESHOLDS.top30) {
    // Top 30: posición 11–30
    const range = RELEVANCE_THRESHOLDS.top30;
    const max   = RELEVANCE_THRESHOLDS.top10;
    const ratio = (combined - range) / (max - range);
    return Math.round(30 - ratio * 19);  // 11–30
  }

  // Sin ranking detectable
  return undefined;
}

// ─── detectSerpFeatures ───────────────────────────────────────────────────────

export function detectSerpFeatures(
  page: CrawledPageData,
  keywordNormalized: string
): SerpFeature[] {
  const features: SerpFeature[] = [];
  const kw   = keywordNormalized.toLowerCase();
  const h1   = (page.h1 ?? []).join(' ').toLowerCase();
  const h2s  = (page.h2 ?? []).join(' ').toLowerCase();
  const meta = (page.meta_description ?? '').toLowerCase();
  const url  = page.url.toLowerCase();

  // FAQPage / People Also Ask
  if (
    h2s.includes('pregunta') ||
    h2s.includes('¿') ||
    h2s.includes('faq') ||
    url.includes('faq') ||
    url.includes('preguntas')
  ) {
    features.push('people_also_ask');
  }

  // Featured Snippet: respuestas directas, definiciones, listas
  if (
    meta.includes('cómo') ||
    meta.includes('qué es') ||
    meta.includes('guía') ||
    h1.includes('cómo') ||
    h1.includes('qué es')
  ) {
    features.push('featured_snippet');
  }

  // Local Pack: keywords con intención local
  const localIndicators = ['en chile', 'temuco', 'santiago', 'cerca', 'local', 'servicio'];
  if (localIndicators.some(ind => kw.includes(ind)) || page.page_type === 'contact') {
    features.push('local_pack');
  }

  // Shopping: páginas de producto o tienda
  if (page.page_type === 'product' || url.includes('/producto') || url.includes('/shop')) {
    features.push('shopping');
  }

  // Image Pack: catálogos, portfolios, diseño
  if (
    url.includes('galeria') ||
    url.includes('portafolio') ||
    url.includes('diseno') ||
    (page.images_total ?? 0) > 10
  ) {
    features.push('image_pack');
  }

  // Sitelinks: solo para homepage o brand keyword
  if (page.depth === 0 || page.page_type === 'homepage') {
    features.push('site_links');
  }

  return [...new Set(features)]; // deduplicar
}

// ─── Utility: normalizeKeyword (para uso externo) ─────────────────────────────

export function normalizeKeywordForSerp(keyword: string): string {
  return keyword
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')  // quitar acentos
    .replace(/[^\w\s]/g, '')           // quitar puntuación
    .replace(/\s+/g, ' ')
    .trim();
}
