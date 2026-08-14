/**
 * WEBUNICA INTELLIGENCE — Keyword Extractor (Etapa 1)
 * Extrae keywords reales desde contenido crawleado.
 * Fuente: MEASURED (texto real del sitio) + AI_INFERRED (clasificación de intento)
 */

import { CrawledPageData, KeywordIntent } from '@/types/intelligence';

// ─── Stop words en español y términos de interfaz ─────────────────────────────
const STOP_WORDS_ES = new Set([
  'a', 'al', 'algo', 'algunas', 'algunos', 'ante', 'antes', 'como', 'con',
  'contra', 'cual', 'cuando', 'de', 'del', 'desde', 'donde', 'durante', 'e',
  'el', 'ella', 'ellas', 'ellos', 'en', 'entre', 'era', 'es', 'esa', 'ese',
  'eso', 'esta', 'estas', 'este', 'esto', 'estos', 'fue', 'han', 'has', 'hay',
  'hasta', 'la', 'las', 'le', 'les', 'lo', 'los', 'mas', 'me', 'mi', 'más',
  'muy', 'ni', 'no', 'nos', 'o', 'otro', 'para', 'pero', 'por', 'que', 'qué',
  'se', 'ser', 'si', 'sin', 'sobre', 'son', 'su', 'sus', 'también', 'te',
  'tengo', 'ti', 'tiene', 'tienen', 'toda', 'todas', 'todo', 'todos', 'tu',
  'tú', 'un', 'una', 'unas', 'uno', 'unos', 'usted', 'va', 'vamos', 'van',
  'voy', 'y', 'ya', 'yo', 'él', 'mí', 'nuestro', 'nuestra', 'nuestros',
  'nuestras', 'https', 'http', 'www', 'com', 'cl', 'net', 'org', 'htm', 'html',
  // HTML entities residuals
  'ndash', 'mdash', 'nbsp', 'amp', 'quot', 'apos', 'middot', 'bull', 'hellip',
  'copy', 'reg', 'trade', 'times', 'divide',
  // Boilerplate UI navigation / eCommerce terms that are not strategic keywords
  'carrito', 'carrito vacío', 'vacío', 'despacho', 'región', 'país', 'país región',
  'copyright', 'derechos reservados', 'todos los derechos', 'términos y condiciones',
  'política de privacidad', 'iniciar sesión', 'cerrar sesión', 'mi cuenta',
  'menú', 'menu', 'buscar', 'filtros', 'ver más', 'ver mas', 'siguiente', 'anterior',
]);

// ─── Intent signal words ──────────────────────────────────────────────────────
const INTENT_SIGNALS: Record<KeywordIntent, string[]> = {
  transactional: [
    'comprar', 'precio', 'precios', 'cotizar', 'cotización', 'contratar', 'solicitar',
    'pedir', 'oferta', 'descuento', 'tienda', 'venta', 'vender', 'stock', 'envío',
    'despacho', 'shop', 'buy', 'order', 'checkout', 'carrito',
  ],
  commercial: [
    'mejor', 'mejores', 'comparar', 'comparación', 'reseña', 'review', 'opinión',
    'opiniones', 'alternativa', 'alternativas', 'vs', 'versus', 'pros', 'contras',
    'recomendado', 'top', 'ranking', 'calidad', 'garantía',
  ],
  informational: [
    'qué', 'que', 'cómo', 'como', 'cuánto', 'cuanto', 'por qué', 'porque',
    'cuando', 'cuándo', 'dónde', 'donde', 'guía', 'tutorial', 'aprende',
    'aprender', 'beneficios', 'ventajas', 'desventajas', 'diferencia', 'tipos',
    'características', 'info', 'información',
  ],
  navigational: [
    'sitio', 'web', 'página', 'pagina', 'contacto', 'nosotros', 'empresa',
    'oficina', 'login', 'acceso', 'cuenta', 'perfil',
  ],
  local: [
    'chile', 'santiago', 'temuco', 'valparaíso', 'concepción', 'antofagasta',
    'la serena', 'iquique', 'rancagua', 'talca', 'arica', 'chileno', 'chilena',
    'región', 'comuna', 'barrio', 'cerca', 'local', 'domicilio',
  ],
};

// ─── Main Extractor ───────────────────────────────────────────────────────────
export interface ExtractedKeyword {
  keyword: string;
  keyword_normalized: string;
  frequency: number;
  pages_count: number;
  found_in: string[];
  intent?: KeywordIntent;
  intent_source: 'AI_INFERRED';  // always — intent classification is inferred
  pages: string[];
  cluster?: string;
}

export function extractKeywords(pages: CrawledPageData[]): ExtractedKeyword[] {
  // keyword_normalized → aggregated data
  const keywordMap = new Map<string, {
    keyword: string;
    frequency: number;
    found_in: Set<string>;
    pages: Set<string>;
  }>();

  for (const page of pages) {
    if (!page.is_indexable && page.is_indexable !== undefined) continue;

    // Extract from different zones with different weights
    const zones: Array<{ text: string | string[] | undefined; source: string; weight: number }> = [
      { text: page.title,    source: 'title',   weight: 3 },
      { text: page.h1,       source: 'h1',      weight: 3 },
      { text: page.h2,       source: 'h2',      weight: 2 },
      { text: page.h3,       source: 'h3',      weight: 1 },
      { text: extractPathKeywords(page.url), source: 'url', weight: 2 },
    ];

    for (const zone of zones) {
      if (!zone.text) continue;
      const texts = Array.isArray(zone.text) ? zone.text : [zone.text];

      for (const text of texts) {
        const tokens = tokenize(text);
        const ngrams = [...tokens, ...extractNgrams(tokens, 2), ...extractNgrams(tokens, 3)];

        for (const token of ngrams) {
          if (!isValidKeyword(token)) continue;
          const norm = token.toLowerCase().trim();

          if (!keywordMap.has(norm)) {
            keywordMap.set(norm, {
              keyword: token,
              frequency: 0,
              found_in: new Set(),
              pages: new Set(),
            });
          }
          const entry = keywordMap.get(norm)!;
          entry.frequency += zone.weight;
          entry.found_in.add(zone.source);
          entry.pages.add(page.url);
        }
      }
    }
  }

  // Convert to array, classify intent, filter noise
  const results: ExtractedKeyword[] = [];
  for (const [norm, data] of keywordMap.entries()) {
    if (data.frequency < 2) continue; // skip hapax

    const intent = classifyIntent(norm);
    results.push({
      keyword: data.keyword,
      keyword_normalized: norm,
      frequency: data.frequency,
      pages_count: data.pages.size,
      found_in: Array.from(data.found_in),
      intent,
      intent_source: 'AI_INFERRED',
      pages: Array.from(data.pages),
    });
  }

  // Sort: most frequent & most pages first
  results.sort((a, b) => {
    const score = (kw: ExtractedKeyword) => kw.frequency * 2 + kw.pages_count;
    return score(b) - score(a);
  });

  // Return top 150 keywords
  return results.slice(0, 150);
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function tokenize(text: string): string[] {
  return text
    .normalize('NFC')
    .replace(/[^\wáéíóúñüÁÉÍÓÚÑÜ\s]/g, ' ')
    .split(/\s+/)
    .map(t => t.toLowerCase().trim())
    .filter(t => t.length >= 3 && !STOP_WORDS_ES.has(t) && !/^\d+$/.test(t));
}

function extractNgrams(tokens: string[], n: number): string[] {
  const ngrams: string[] = [];
  for (let i = 0; i <= tokens.length - n; i++) {
    const gram = tokens.slice(i, i + n);
    // Skip ngrams that start or end with stopwords
    if (STOP_WORDS_ES.has(gram[0]) || STOP_WORDS_ES.has(gram[gram.length - 1])) continue;
    ngrams.push(gram.join(' '));
  }
  return ngrams;
}

function extractPathKeywords(url: string): string {
  try {
    const path = new URL(url).pathname;
    return path.replace(/[/-]/g, ' ').replace(/\.[a-z]+$/, '');
  } catch {
    return '';
  }
}

function isValidKeyword(token: string): boolean {
  if (token.length < 3 || token.length > 60) return false;
  if (STOP_WORDS_ES.has(token)) return false;
  if (/^\d+$/.test(token)) return false;
  if (/^[^a-záéíóúñü]+$/i.test(token)) return false;
  return true;
}

function classifyIntent(keyword: string): KeywordIntent | undefined {
  const k = keyword.toLowerCase();

  // Check each intent in priority order
  const priorities: KeywordIntent[] = ['transactional', 'local', 'commercial', 'navigational', 'informational'];

  for (const intent of priorities) {
    for (const signal of INTENT_SIGNALS[intent]) {
      if (k.includes(signal)) return intent;
    }
  }
  return undefined;
}

// ─── Cluster keywords by theme ────────────────────────────────────────────────
export function clusterKeywords(
  keywords: ExtractedKeyword[]
): ExtractedKeyword[] {
  // Simple prefix-based clustering
  const assigned = new Map<string, string>();

  // Find potential cluster heads (multi-word, high frequency)
  const heads = keywords
    .filter(k => k.keyword.includes(' ') && k.pages_count >= 2)
    .slice(0, 30);

  for (const kw of keywords) {
    for (const head of heads) {
      if (kw.keyword_normalized !== head.keyword_normalized &&
          (kw.keyword_normalized.includes(head.keyword_normalized) ||
           head.keyword_normalized.includes(kw.keyword_normalized.split(' ')[0]))) {
        assigned.set(kw.keyword_normalized, head.keyword);
        break;
      }
    }
  }

  return keywords.map(kw => ({
    ...kw,
    cluster: assigned.get(kw.keyword_normalized),
  }));
}
