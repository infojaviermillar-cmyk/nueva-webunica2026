/**
 * WEBUNICA INTELLIGENCE — Local SEO & Schema.org Auditor (Etapa 3)
 *
 * Fuente de datos: MEASURED (extrae JSON-LD directamente del HTML crawleado)
 * Audita implementación de Schema.org para:
 *   - LocalBusiness (negocio local chileno)
 *   - Organization
 *   - Product (tienda/ecommerce)
 *   - FAQPage
 *   - BreadcrumbList
 *   - WebSite
 *
 * Reglas de validación basadas en Google Structured Data Guidelines:
 * https://developers.google.com/search/docs/appearance/structured-data
 */

import {
  IntelSchemaAudit,
  SchemaIssue,
  SchemaType,
  DetectedSchema,
} from '@/types/intelligence';

// ─── Types internos ───────────────────────────────────────────────────────────

export interface PageForAudit {
  url: string;
  html?: string;   // HTML completo (si disponible del crawl)
  title?: string;
  page_type?: string;
}

export interface SchemaAuditResult {
  audits: IntelSchemaAudit[];
  summary: {
    pages_audited: number;
    pages_with_schemas: number;
    has_local_business: number;
    has_faq_page: number;
    has_product: number;
    avg_score: number;
    total_issues_critical: number;
    total_issues_warning: number;
  };
}

// ─── Required fields per Schema type ─────────────────────────────────────────

const REQUIRED_FIELDS: Record<string, { field: string; message: string }[]> = {
  LocalBusiness: [
    { field: 'name',      message: 'Falta el nombre del negocio' },
    { field: 'address',   message: 'Falta la dirección (requerida para Local Pack)' },
    { field: 'telephone', message: 'Falta el teléfono de contacto' },
  ],
  Organization: [
    { field: 'name',  message: 'Falta el nombre de la organización' },
    { field: 'url',   message: 'Falta la URL de la organización' },
    { field: 'logo',  message: 'Falta el logo (mejora Knowledge Panel)' },
  ],
  Product: [
    { field: 'name',        message: 'Falta el nombre del producto' },
    { field: 'description', message: 'Falta la descripción del producto' },
    { field: 'offers',      message: 'Falta el precio/oferta (requerido para Shopping)' },
  ],
  FAQPage: [
    { field: 'mainEntity', message: 'Falta el array de preguntas (mainEntity)' },
  ],
  BreadcrumbList: [
    { field: 'itemListElement', message: 'Falta la lista de items del breadcrumb' },
  ],
  WebSite: [
    { field: 'name',        message: 'Falta el nombre del sitio web' },
    { field: 'url',         message: 'Falta la URL del sitio web' },
    { field: 'potentialAction', message: 'Falta potentialAction (habilita Sitelinks Searchbox)' },
  ],
};

// Campos que suman puntos extra si están presentes
const BONUS_FIELDS: Record<string, string[]> = {
  LocalBusiness: ['openingHours', 'geo', 'priceRange', 'image', 'sameAs', 'areaServed'],
  Organization:  ['contactPoint', 'sameAs', 'foundingDate', 'numberOfEmployees'],
  Product:       ['image', 'brand', 'sku', 'aggregateRating', 'review'],
  FAQPage:       [],
  BreadcrumbList: [],
  WebSite:       ['description'],
};

// ─── Main: auditAllSchemas ────────────────────────────────────────────────────

export function auditAllSchemas(
  projectId: string,
  pages: PageForAudit[]
): SchemaAuditResult {
  const audits: IntelSchemaAudit[] = [];
  const now = new Date().toISOString();

  for (const page of pages) {
    if (!page.html) continue;  // Solo auditar páginas con HTML disponible

    const audit = auditPageSchemas(projectId, page, now);
    audits.push(audit);
  }

  // Summary
  const withSchemas = audits.filter(a => a.schemas_found.length > 0);
  const allScores   = withSchemas.map(a => a.score);
  const avgScore    = allScores.length > 0
    ? Math.round(allScores.reduce((s, v) => s + v, 0) / allScores.length)
    : 0;

  const allIssues = audits.flatMap(a => a.issues);

  return {
    audits,
    summary: {
      pages_audited:         audits.length,
      pages_with_schemas:    withSchemas.length,
      has_local_business:    audits.filter(a => a.has_local_business).length,
      has_faq_page:          audits.filter(a => a.has_faq_page).length,
      has_product:           audits.filter(a => a.has_product).length,
      avg_score:             avgScore,
      total_issues_critical: allIssues.filter(i => i.severity === 'critical').length,
      total_issues_warning:  allIssues.filter(i => i.severity === 'warning').length,
    },
  };
}

// ─── auditPageSchemas ─────────────────────────────────────────────────────────

export function auditPageSchemas(
  projectId: string,
  page: PageForAudit,
  timestamp?: string
): IntelSchemaAudit {
  const now = timestamp ?? new Date().toISOString();
  const extractedSchemas = extractJsonLd(page.html ?? '');
  const issues: SchemaIssue[] = [];
  const detectedSchemas: DetectedSchema[] = [];
  const schemasFound: SchemaType[] = [];

  for (const raw of extractedSchemas) {
    const schemaType = getSchemaType(raw);
    if (!schemaType) continue;

    schemasFound.push(schemaType);

    const { validFields, missingRequired, schemaIssues } = validateSchema(schemaType, raw);
    issues.push(...schemaIssues);

    detectedSchemas.push({
      type:             schemaType,
      raw,
      valid_fields:     validFields,
      missing_required: missingRequired,
    });
  }

  // Detectar ausencia de schemas importantes por tipo de página
  const missingSchemaIssues = detectMissingSchemas(page, schemasFound);
  issues.push(...missingSchemaIssues);

  const score = calculateSchemaScore(schemasFound, detectedSchemas, issues);

  return {
    id:                  `${projectId}-${encodeURIComponent(page.url)}`,
    project_id:          projectId,
    url:                 page.url,
    schemas_found:       schemasFound,
    detected_schemas:    detectedSchemas,
    has_local_business:  schemasFound.some(s => s === 'LocalBusiness'),
    has_organization:    schemasFound.some(s => s === 'Organization'),
    has_product:         schemasFound.some(s => s === 'Product'),
    has_faq_page:        schemasFound.some(s => s === 'FAQPage'),
    has_breadcrumb:      schemasFound.some(s => s === 'BreadcrumbList'),
    has_website:         schemasFound.some(s => s === 'WebSite'),
    issues,
    score,
    audited_at:  now,
    created_at:  now,
  };
}

// ─── extractJsonLd ────────────────────────────────────────────────────────────

function extractJsonLd(html: string): Record<string, unknown>[] {
  const results: Record<string, unknown>[] = [];

  // Regex para extraer bloques <script type="application/ld+json">...</script>
  const pattern = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(match[1].trim());
      // Puede ser un objeto único o un array (@graph)
      if (Array.isArray(parsed)) {
        results.push(...parsed);
      } else if (parsed?.['@graph']) {
        results.push(...(parsed['@graph'] as Record<string, unknown>[]));
      } else if (parsed?.['@type']) {
        results.push(parsed);
      }
    } catch {
      // JSON malformado — ignorar silenciosamente
    }
  }

  return results;
}

// ─── getSchemaType ────────────────────────────────────────────────────────────

function getSchemaType(raw: Record<string, unknown>): SchemaType | null {
  const rawType = raw?.['@type'];
  if (!rawType) return null;

  // @type puede ser string o array
  const types = Array.isArray(rawType) ? rawType : [rawType];
  const knownTypes: SchemaType[] = [
    'LocalBusiness', 'Organization', 'Product', 'FAQPage',
    'BreadcrumbList', 'WebSite', 'Article', 'Review', 'Event',
  ];

  for (const t of types) {
    const found = knownTypes.find(k => k === t || t?.includes(k));
    if (found) return found;
  }

  // Retornar el tipo desconocido como string genérico
  return typeof types[0] === 'string' ? types[0] : null;
}

// ─── validateSchema ───────────────────────────────────────────────────────────

function validateSchema(
  schemaType: SchemaType,
  raw: Record<string, unknown>
): {
  validFields:     string[];
  missingRequired: string[];
  schemaIssues:    SchemaIssue[];
} {
  const validFields:     string[] = [];
  const missingRequired: string[] = [];
  const schemaIssues:    SchemaIssue[] = [];

  const required = REQUIRED_FIELDS[schemaType] ?? [];
  const bonus    = BONUS_FIELDS[schemaType]    ?? [];

  // Validar campos requeridos
  for (const req of required) {
    const fieldValue = raw[req.field];
    if (fieldValue !== undefined && fieldValue !== null && fieldValue !== '') {
      validFields.push(req.field);
    } else {
      missingRequired.push(req.field);
      schemaIssues.push({
        code:        `MISSING_${req.field.toUpperCase()}`,
        severity:    req.field === 'address' || req.field === 'offers' ? 'critical' : 'warning',
        message:     req.message,
        field:       req.field,
        schema_type: schemaType,
      });
    }
  }

  // Contar campos bonus presentes
  for (const b of bonus) {
    if (raw[b] !== undefined) validFields.push(b);
  }

  // Validaciones específicas por tipo
  if (schemaType === 'FAQPage') {
    const mainEntity = raw['mainEntity'] as unknown[];
    if (Array.isArray(mainEntity) && mainEntity.length === 0) {
      schemaIssues.push({
        code:        'EMPTY_FAQ_LIST',
        severity:    'warning',
        message:     'mainEntity está vacío — agrega al menos una pregunta',
        field:       'mainEntity',
        schema_type: schemaType,
      });
    }
  }

  if (schemaType === 'Product') {
    const offers = raw['offers'] as Record<string, unknown>;
    if (offers && !offers['price'] && !offers['priceRange']) {
      schemaIssues.push({
        code:        'MISSING_PRICE',
        severity:    'critical',
        message:     'El objeto offers no tiene price ni priceRange',
        field:       'offers.price',
        schema_type: schemaType,
      });
    }
  }

  if (schemaType === 'LocalBusiness') {
    const address = raw['address'] as Record<string, unknown>;
    if (address && !address['addressCountry']) {
      schemaIssues.push({
        code:        'MISSING_COUNTRY',
        severity:    'warning',
        message:     'La dirección no incluye addressCountry (recomendado: "CL")',
        field:       'address.addressCountry',
        schema_type: schemaType,
      });
    }
  }

  return { validFields, missingRequired, schemaIssues };
}

// ─── detectMissingSchemas ─────────────────────────────────────────────────────

function detectMissingSchemas(
  page: PageForAudit,
  found: SchemaType[]
): SchemaIssue[] {
  const issues: SchemaIssue[] = [];
  const pageType = page.page_type ?? 'other';
  const url      = page.url.toLowerCase();

  // Homepage sin WebSite ni Organization
  if ((pageType === 'homepage' || url.endsWith('/') || page.url.split('/').length <= 4)) {
    if (!found.includes('WebSite') && !found.includes('Organization')) {
      issues.push({
        code:        'MISSING_WEBSITE_SCHEMA',
        severity:    'warning',
        message:     'La página principal no tiene Schema WebSite ni Organization',
        schema_type: 'WebSite',
      });
    }
  }

  // Página de contacto sin LocalBusiness
  if (
    pageType === 'contact' ||
    url.includes('/contacto') ||
    url.includes('/contact')
  ) {
    if (!found.includes('LocalBusiness')) {
      issues.push({
        code:        'MISSING_LOCAL_BUSINESS',
        severity:    'warning',
        message:     'Página de contacto sin Schema LocalBusiness — pierde visibilidad en Maps',
        schema_type: 'LocalBusiness',
      });
    }
  }

  // Página de producto sin Product
  if (pageType === 'product' || url.includes('/producto') || url.includes('/product')) {
    if (!found.includes('Product')) {
      issues.push({
        code:        'MISSING_PRODUCT_SCHEMA',
        severity:    'critical',
        message:     'Página de producto sin Schema Product — pierde eligibilidad en Google Shopping',
        schema_type: 'Product',
      });
    }
  }

  return issues;
}

// ─── calculateSchemaScore ─────────────────────────────────────────────────────

function calculateSchemaScore(
  schemasFound: SchemaType[],
  detected: DetectedSchema[],
  issues: SchemaIssue[]
): number {
  if (schemasFound.length === 0) return 0;

  let score = 40; // Base por tener al menos un schema

  // +15 puntos por cada schema relevante
  const relevantSchemas: SchemaType[] = ['LocalBusiness', 'Organization', 'Product', 'FAQPage'];
  score += Math.min(40, relevantSchemas.filter(s => schemasFound.includes(s)).length * 15);

  // +10 si tiene breadcrumb
  if (schemasFound.includes('BreadcrumbList')) score += 10;

  // Restar por issues
  const criticals = issues.filter(i => i.severity === 'critical').length;
  const warnings  = issues.filter(i => i.severity === 'warning').length;
  score -= criticals * 15;
  score -= warnings  * 5;

  // Bonus por completitud: validFields / totalRequired ratio
  for (const d of detected) {
    const requiredFields = REQUIRED_FIELDS[d.type] ?? [];
    if (requiredFields.length > 0) {
      const completeness = d.valid_fields.filter(f =>
        requiredFields.some(r => r.field === f)
      ).length / requiredFields.length;
      score += Math.round(completeness * 10);
    }
  }

  return Math.max(0, Math.min(100, score));
}
