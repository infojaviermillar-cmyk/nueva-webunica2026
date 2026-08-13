/**
 * WEBUNICA INTELLIGENCE — Web Crawler (Etapa 1)
 *
 * Crawler responsable: respeta robots.txt, rate limiting, timeouts.
 * Protección anti-SSRF: bloquea IPs privadas, localhost, metadata endpoints.
 * Fuente de datos: MEASURED (HTTP real)
 */

import { CrawlerConfig, CrawledPageData, PageType } from '@/types/intelligence';

// ─── SSRF Protection ─────────────────────────────────────────────────────────
const BLOCKED_HOSTS = [
  'localhost',
  '127.0.0.1',
  '0.0.0.0',
  '::1',
  'metadata.google.internal',
  '169.254.169.254',  // AWS/GCP metadata
  'metadata.azure.com',
];

const BLOCKED_IP_PATTERNS = [
  /^127\./,           // loopback
  /^10\./,            // private class A
  /^172\.(1[6-9]|2\d|3[01])\./,  // private class B
  /^192\.168\./,      // private class C
  /^169\.254\./,      // link-local
  /^fc00:/,           // IPv6 private
  /^fe80:/,           // IPv6 link-local
];

function isBlockedHost(hostname: string): boolean {
  const lower = hostname.toLowerCase();
  if (BLOCKED_HOSTS.includes(lower)) return true;
  for (const pattern of BLOCKED_IP_PATTERNS) {
    if (pattern.test(lower)) return true;
  }
  return false;
}

function validateAndNormalizeUrl(rawUrl: string, baseOrigin: string): string | null {
  try {
    const url = new URL(rawUrl, baseOrigin);
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    if (isBlockedHost(url.hostname)) return null;
    // Remove fragment
    url.hash = '';
    return url.href;
  } catch {
    return null;
  }
}

function normalizeUrl(href: string): string {
  try {
    const u = new URL(href);
    u.hash = '';
    // Sort search params for canonical form
    u.searchParams.sort();
    return u.href.toLowerCase().replace(/\/$/, '') || u.href;
  } catch {
    return href.toLowerCase();
  }
}

// ─── Default Config ───────────────────────────────────────────────────────────
export const DEFAULT_CRAWLER_CONFIG: CrawlerConfig = {
  max_pages: 50,
  max_depth: 4,
  timeout_ms: parseInt(process.env.INTELLIGENCE_CRAWLER_TIMEOUT_MS || '10000'),
  rate_limit_ms: parseInt(process.env.INTELLIGENCE_CRAWLER_RATE_LIMIT_MS || '600'),
  follow_redirects: true,
  max_redirects: 5,
  respect_robots: true,
  user_agent: 'WebunicaBot/1.0 (intelligence.webunica.cl; educational crawler)',
};

// ─── Robots.txt Parser ────────────────────────────────────────────────────────
interface RobotsRules {
  disallow: RegExp[];
  allow: RegExp[];
  crawl_delay?: number;
}

async function fetchRobotsTxt(origin: string, config: CrawlerConfig): Promise<RobotsRules> {
  const rules: RobotsRules = { disallow: [], allow: [] };
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(`${origin}/robots.txt`, {
      signal: controller.signal,
      headers: { 'User-Agent': config.user_agent },
    });
    clearTimeout(timer);
    if (!res.ok) return rules;
    const text = await res.text();
    let isOurAgent = false;
    for (const rawLine of text.split('\n')) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#')) continue;
      if (line.toLowerCase().startsWith('user-agent:')) {
        const agent = line.split(':')[1]?.trim() || '';
        isOurAgent = agent === '*' || agent.toLowerCase().includes('webunicabot');
      } else if (isOurAgent) {
        if (line.toLowerCase().startsWith('disallow:')) {
          const path = line.split(':')[1]?.trim();
          if (path) rules.disallow.push(pathToRegex(path));
        } else if (line.toLowerCase().startsWith('allow:')) {
          const path = line.split(':')[1]?.trim();
          if (path) rules.allow.push(pathToRegex(path));
        } else if (line.toLowerCase().startsWith('crawl-delay:')) {
          rules.crawl_delay = parseInt(line.split(':')[1]?.trim() || '0');
        }
      }
    }
  } catch {
    // robots.txt unavailable — proceed with no restrictions
  }
  return rules;
}

function pathToRegex(path: string): RegExp {
  const escaped = path
    .replace(/[.+?^${}()|[\]\\]/g, '\\$&')
    .replace(/\*/g, '.*');
  return new RegExp('^' + escaped);
}

function isAllowedByRobots(pathname: string, rules: RobotsRules): boolean {
  for (const allow of rules.allow) {
    if (allow.test(pathname)) return true;
  }
  for (const disallow of rules.disallow) {
    if (disallow.test(pathname)) return false;
  }
  return true;
}

// ─── HTML Parser ─────────────────────────────────────────────────────────────
function extractFromHTML(html: string, url: string, baseOrigin: string): Partial<CrawledPageData> {
  // Minimal regex-based extraction (no external parsers needed)
  const get = (regex: RegExp) => {
    const m = html.match(regex);
    return m ? m[1]?.trim() : undefined;
  };
  const getAll = (regex: RegExp): string[] => {
    const results: string[] = [];
    let m: RegExpExecArray | null;
    const r = new RegExp(regex.source, regex.flags.includes('g') ? regex.flags : 'g' + regex.flags);
    while ((m = r.exec(html)) !== null) results.push(m[1]?.trim() || '');
    return results.filter(Boolean);
  };

  const title = get(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const metaDesc = get(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i)
    || get(/<meta\s+content=["']([^"']+)["']\s+name=["']description["']/i);
  const canonical = get(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i)
    || get(/<link\s+href=["']([^"']+)["']\s+rel=["']canonical["']/i);
  const robotsMeta = get(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i);

  const h1s = getAll(/<h1[^>]*>([\s\S]*?)<\/h1>/i).map(stripTags);
  const h2s = getAll(/<h2[^>]*>([\s\S]*?)<\/h2>/i).map(stripTags);
  const h3s = getAll(/<h3[^>]*>([\s\S]*?)<\/h3>/i).map(stripTags);

  // Images
  const imgs = html.match(/<img[^>]+>/gi) || [];
  const imgsWithoutAlt = imgs.filter(img => !/alt=["'][^"']+["']/.test(img));

  // Links — collect internal & external
  const linkMatches = getAll(/<a\s[^>]*href=["']([^"'#?][^"']+)["']/i);
  const internalLinks: string[] = [];
  const externalLinks: string[] = [];

  for (const href of linkMatches) {
    try {
      const absUrl = new URL(href, url);
      if (isBlockedHost(absUrl.hostname)) continue;
      if (absUrl.origin === baseOrigin) {
        internalLinks.push(absUrl.href);
      } else {
        externalLinks.push(absUrl.href);
      }
    } catch { /* skip malformed */ }
  }

  // Word count — strip tags, count words
  const textContent = stripTags(html.replace(/<(script|style|noscript)[^>]*>[\s\S]*?<\/\1>/gi, ' '));
  const wordCount = textContent.split(/\s+/).filter(w => w.length > 2).length;

  // Indexability
  const robotsDir = robotsMeta?.toLowerCase() || '';
  const isIndexable = !robotsDir.includes('noindex');

  // Page type detection
  const urlPath = (() => { try { return new URL(url).pathname; } catch { return '/'; } })();
  const pageType = detectPageType(urlPath, title);

  return {
    title,
    title_length: title?.length ?? 0,
    meta_description: metaDesc,
    meta_desc_length: metaDesc?.length ?? 0,
    canonical_url: canonical,
    robots_directive: robotsMeta,
    h1: h1s,
    h2: h2s,
    h3: h3s,
    images_total: imgs.length,
    images_missing_alt: imgsWithoutAlt.length,
    links_internal: internalLinks,
    links_external: externalLinks,
    word_count: wordCount,
    is_indexable: isIndexable,
    page_type: pageType,
  };
}

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim();
}

function detectPageType(pathname: string, title?: string): PageType {
  const p = pathname.toLowerCase();
  if (p === '/' || p === '') return 'homepage';
  if (/\/(blog|articulo|post|news|noticias)/.test(p)) return 'blog_post';
  if (/\/(contacto|contactanos|contact)/.test(p)) return 'contact';
  if (/\/(nosotros|about|quienes-somos|empresa)/.test(p)) return 'about';
  if (/\/(categoria|category|coleccion|collection)/.test(p)) return 'category';
  if (/\/(producto|product|item|p\/)/.test(p)) return 'product';
  if (/\/(legal|terminos|privacidad|condiciones)/.test(p)) return 'legal';
  return 'other';
}

// ─── Main Crawler ─────────────────────────────────────────────────────────────
export interface CrawlResult {
  pages: CrawledPageData[];
  pages_attempted: number;
  errors: string[];
  robots_blocked: number;
  duration_ms: number;
}

export async function crawlDomain(
  domain: string,
  config: Partial<CrawlerConfig> = {}
): Promise<CrawlResult> {
  const cfg: CrawlerConfig = { ...DEFAULT_CRAWLER_CONFIG, ...config };
  const startTime = Date.now();

  // Normalize and validate domain
  const origin = domain.startsWith('http') ? domain : `https://${domain}`;
  const parsedOrigin = (() => { try { return new URL(origin); } catch { return null; } })();
  if (!parsedOrigin) throw new Error(`Dominio inválido: ${domain}`);
  if (isBlockedHost(parsedOrigin.hostname)) throw new Error(`Dominio bloqueado por seguridad: ${domain}`);

  const baseOrigin = parsedOrigin.origin;
  const errors: string[] = [];
  let robots_blocked = 0;

  // Fetch robots.txt
  const robots = cfg.respect_robots ? await fetchRobotsTxt(baseOrigin, cfg) : { disallow: [], allow: [] };
  const effectiveDelay = Math.max(cfg.rate_limit_ms, (robots.crawl_delay || 0) * 1000);

  const visited = new Set<string>();
  const queue: Array<{ url: string; depth: number }> = [{ url: baseOrigin + '/', depth: 0 }];
  const pages: CrawledPageData[] = [];
  let pages_attempted = 0;

  while (queue.length > 0 && pages.length < cfg.max_pages) {
    const { url, depth } = queue.shift()!;
    const normalized = normalizeUrl(url);
    if (visited.has(normalized)) continue;
    visited.add(normalized);

    // Check robots
    const urlPath = (() => { try { return new URL(url).pathname; } catch { return '/'; } })();
    if (!isAllowedByRobots(urlPath, robots)) {
      robots_blocked++;
      continue;
    }

    pages_attempted++;

    // Rate limiting
    if (pages_attempted > 1) {
      await new Promise(resolve => setTimeout(resolve, effectiveDelay));
    }

    const pageData = await fetchPage(url, normalized, depth, cfg, baseOrigin);
    pages.push(pageData);

    if (pageData.error) {
      errors.push(`${url}: ${pageData.error}`);
    }

    // Queue new internal links (within depth limit)
    if (depth < cfg.max_depth && !pageData.error && pageData.links_internal) {
      for (const link of pageData.links_internal) {
        const validLink = validateAndNormalizeUrl(link, baseOrigin);
        if (!validLink) continue;
        const normLink = normalizeUrl(validLink);
        if (!visited.has(normLink) && pages.length + queue.length < cfg.max_pages * 2) {
          queue.push({ url: validLink, depth: depth + 1 });
        }
      }
    }
  }

  return {
    pages,
    pages_attempted,
    errors,
    robots_blocked,
    duration_ms: Date.now() - startTime,
  };
}

async function fetchPage(
  url: string,
  url_normalized: string,
  depth: number,
  cfg: CrawlerConfig,
  baseOrigin: string
): Promise<CrawledPageData> {
  const base: CrawledPageData = {
    url,
    url_normalized,
    status_code: 0,
    depth,
    response_time_ms: 0,
    word_count: 0,
    is_indexable: false,
    title_length: 0,
    meta_desc_length: 0,
    h1: [],
    h2: [],
    h3: [],
    images_total: 0,
    images_missing_alt: 0,
    links_internal: [],
    links_external: [],
    page_type: 'other',
  };

  const t0 = Date.now();
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), cfg.timeout_ms);

    const res = await fetch(url, {
      signal: controller.signal,
      redirect: cfg.follow_redirects ? 'follow' : 'manual',
      headers: {
        'User-Agent': cfg.user_agent,
        'Accept': 'text/html,application/xhtml+xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'es-CL,es;q=0.9,en;q=0.5',
      },
    });
    clearTimeout(timer);

    base.status_code = res.status;
    base.response_time_ms = Date.now() - t0;

    if (res.redirected) base.redirect_url = res.url;

    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('text/html')) {
      return { ...base, error: `Non-HTML content-type: ${contentType}` };
    }

    // Limit response size to 2MB
    const reader = res.body?.getReader();
    if (!reader) return base;
    const chunks: Uint8Array[] = [];
    let totalBytes = 0;
    const MAX_BYTES = 2 * 1024 * 1024;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (value) {
        chunks.push(value);
        totalBytes += value.length;
        if (totalBytes > MAX_BYTES) { reader.cancel(); break; }
      }
    }
    const html = new TextDecoder().decode(
      new Uint8Array(chunks.reduce((a, b) => [...a, ...b], [] as number[]))
    );

    const extracted = extractFromHTML(html, url, baseOrigin);
    return { ...base, ...extracted };

  } catch (err: unknown) {
    base.response_time_ms = Date.now() - t0;
    base.error = err instanceof Error ? err.message : String(err);
    return base;
  }
}
