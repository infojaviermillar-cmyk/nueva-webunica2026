/**
 * WEBUNICA INTELLIGENCE — AI Interpreter (Etapa 1)
 *
 * PRINCIPIO FUNDAMENTAL: La IA solo INTERPRETA datos reales.
 * NUNCA inventa métricas, scores, volúmenes ni rankings.
 * Toda salida está marcada como AI_INFERRED.
 */

import { OpenAI } from 'openai';
import { AIAnalysisResult, CrawledPageData } from '@/types/intelligence';
import { ExtractedKeyword } from './keyword-extractor';
import { ScoreOutput } from './score-engine';

// Lazy init — mismo patrón que lib/openai.ts existente
let openaiInstance: OpenAI | null = null;
function getOpenAI(): OpenAI {
  if (!openaiInstance) {
    openaiInstance = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || 'dummy_key_for_build',
    });
  }
  return openaiInstance;
}

// ─── Main Interpreter ─────────────────────────────────────────────────────────
export interface InterpretInput {
  domain: string;
  pages: CrawledPageData[];
  keywords: ExtractedKeyword[];
  score: ScoreOutput;
  industry?: string;
  objective?: string;
  country?: string;
}

export async function interpretAnalysis(input: InterpretInput): Promise<AIAnalysisResult> {
  const { domain, pages, keywords, score, industry, objective, country } = input;

  // Build a structured summary of REAL data to send to the AI
  // The AI receives only facts, not opinions
  const dataSummary = buildDataSummary(input);

  const systemPrompt = `Eres un analista SEO y estratega digital senior especializado en el mercado chileno.
Tu rol es INTERPRETAR datos reales de análisis web y generar insights estratégicos accionables.

REGLAS CRÍTICAS (NO NEGOCIABLES):
1. Solo puedes interpretar los datos que te entrego. NUNCA inventes métricas, volúmenes de búsqueda, dificultades de keyword ni posiciones.
2. Si un dato no está disponible, dilo explícitamente.
3. Tus recomendaciones deben ser específicas para el dominio analizado, no genéricas.
4. Usa español chileno profesional. No uses jerga técnica innecesaria.
5. Sé directo y accionable. El cliente quiere saber QUÉ hacer, no solo QUÉ está mal.
6. Tu análisis SIEMPRE es marcado como AI_INFERRED en el sistema.`;

  const userPrompt = `Analiza los siguientes datos reales del sitio ${domain} y genera un informe estratégico.

${dataSummary}

Responde ÚNICAMENTE con JSON válido con esta estructura exacta:
{
  "executive_summary": "Resumen ejecutivo de 2-3 párrafos. Estado actual del sitio, principales hallazgos y posición estratégica.",
  "main_strengths": ["Fortaleza 1 específica basada en datos", "Fortaleza 2", "Fortaleza 3"],
  "main_problems": ["Problema crítico 1 con contexto específico", "Problema 2", "Problema 3"],
  "opportunities": ["Oportunidad concreta 1", "Oportunidad 2", "Oportunidad 3"],
  "recommended_pages": [
    {"title": "Título de página recomendada", "reason": "Por qué crear esta página basado en los datos"}
  ],
  "recommended_content": [
    {"topic": "Tema de contenido", "intent": "commercial", "reason": "Justificación basada en keywords detectadas"}
  ],
  "priorities": ["Acción prioritaria 1 (impacto alto, esfuerzo bajo)", "Acción 2", "Acción 3", "Acción 4", "Acción 5"]
}`;

  const openai = getOpenAI();
  const startTime = Date.now();

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ],
    response_format: { type: 'json_object' },
    temperature: 0.4,  // Lower temp for more consistent, factual analysis
    max_tokens: 2000,
  });

  const elapsed = Date.now() - startTime;
  const content = response.choices[0].message.content;
  if (!content) throw new Error('OpenAI returned empty response');

  let parsed: Omit<AIAnalysisResult, 'source' | 'model' | 'generated_at' | 'tokens_used' | 'estimated_cost_usd'>;
  try {
    parsed = JSON.parse(content);
  } catch {
    throw new Error('OpenAI returned invalid JSON');
  }

  const inputTokens = response.usage?.prompt_tokens ?? 0;
  const outputTokens = response.usage?.completion_tokens ?? 0;
  // gpt-4o pricing: $2.50/1M input, $10.00/1M output
  const estimatedCost = (inputTokens * 0.0000025) + (outputTokens * 0.00001);

  return {
    source: 'AI_INFERRED',
    model: 'gpt-4o',
    generated_at: new Date().toISOString(),
    executive_summary: parsed.executive_summary || '',
    main_strengths: parsed.main_strengths || [],
    main_problems: parsed.main_problems || [],
    opportunities: parsed.opportunities || [],
    recommended_pages: parsed.recommended_pages || [],
    recommended_content: parsed.recommended_content || [],
    priorities: parsed.priorities || [],
    tokens_used: inputTokens + outputTokens,
    estimated_cost_usd: estimatedCost,
  };
}

// ─── Build structured data summary for the AI ─────────────────────────────────
function buildDataSummary(input: InterpretInput): string {
  const { domain, pages, keywords, score, industry, objective, country } = input;

  const indexablePages = pages.filter(p => p.is_indexable !== false);
  const errorPages = pages.filter(p => p.status_code && p.status_code >= 400);
  const slowPages = pages.filter(p => (p.response_time_ms ?? 0) > 3000);
  const pagesWithoutTitle = pages.filter(p => !p.title);
  const pagesWithoutH1 = pages.filter(p => !p.h1 || p.h1.length === 0);
  const thinPages = pages.filter(p => (p.word_count ?? 0) < 300 && p.page_type !== 'contact');

  const topKeywordsByFreq = keywords.slice(0, 20);
  const commercialKw = keywords.filter(k => k.intent === 'commercial' || k.intent === 'transactional').slice(0, 10);
  const localKw = keywords.filter(k => k.intent === 'local').slice(0, 5);

  const avgWordCount = pages.length > 0
    ? Math.round(pages.reduce((s, p) => s + (p.word_count ?? 0), 0) / pages.length)
    : 0;

  const pageTypes = pages.reduce((acc: Record<string, number>, p) => {
    const t = p.page_type || 'other';
    acc[t] = (acc[t] || 0) + 1;
    return acc;
  }, {});

  return `
## DATOS DEL PROYECTO
- Dominio: ${domain}
- Industria: ${industry || 'No especificada'}
- Objetivo principal: ${objective || 'No especificado'}
- País objetivo: ${country || 'CL'}

## INTELLIGENCE SCORE (v1, CALCULATED)
- Score Global: ${score.score}/100
- SEO Técnico: ${score.score_technical_seo}/100 (peso: 30%)
- On-Page: ${score.score_on_page}/100 (peso: 25%)
- Contenido: ${score.score_content}/100 (peso: 20%)
- Arquitectura: ${score.score_architecture}/100 (peso: 15%)
- Oportunidades: ${score.score_opportunity}/100 (peso: 10%)
- Issues críticos: ${score.issues_critical}
- Issues de advertencia: ${score.issues_warning}

## DATOS DE CRAWL (MEDIDOS)
- Total páginas analizadas: ${pages.length}
- Páginas indexables: ${indexablePages.length} (${Math.round(indexablePages.length/pages.length*100)}%)
- Páginas con errores HTTP: ${errorPages.length}
- Páginas lentas (>3s): ${slowPages.length}
- Promedio tiempo respuesta: ${Math.round(pages.reduce((s,p)=>s+(p.response_time_ms??0),0)/pages.length)}ms
- Promedio palabras por página: ${avgWordCount}

## PROBLEMAS SEO ON-PAGE (MEDIDOS)
- Páginas sin title: ${pagesWithoutTitle.length}
- Páginas sin H1: ${pagesWithoutH1.length}
- Páginas con contenido escaso (<300 palabras): ${thinPages.length}
- Errores HTTP: ${errorPages.map(p => `${p.url} (${p.status_code})`).slice(0,5).join(', ')}

## DISTRIBUCIÓN DE TIPOS DE PÁGINA
${Object.entries(pageTypes).map(([type, count]) => `- ${type}: ${count} páginas`).join('\n')}

## KEYWORDS DETECTADAS (EXTRAÍDAS DEL CONTENIDO REAL)
Total keywords únicas: ${keywords.length}
Top 20 por frecuencia: ${topKeywordsByFreq.map(k => `"${k.keyword}" (freq:${k.frequency})`).join(', ')}
Keywords comerciales/transaccionales: ${commercialKw.map(k => `"${k.keyword}"`).join(', ')}
Keywords locales: ${localKw.map(k => `"${k.keyword}"`).join(', ')}

NOTA: Los volúmenes de búsqueda, dificultad y CPC NO están disponibles en esta etapa. No los inventes.

## PÁGINAS CON MEJOR SCORE SEO
${pages.filter(p => p.seo_score !== undefined).sort((a,b)=>(b.seo_score??0)-(a.seo_score??0)).slice(0,5).map(p=>`- ${p.url}: ${p.seo_score}/100`).join('\n')}

## PÁGINAS CON PEOR SCORE SEO
${pages.filter(p => p.seo_score !== undefined).sort((a,b)=>(a.seo_score??100)-(b.seo_score??100)).slice(0,5).map(p=>`- ${p.url}: ${p.seo_score}/100 — Issues: ${p.seo_issues ? (p.seo_issues as any[]).map((i:any)=>i.code).join(', ') : 'N/A'}`).join('\n')}
`.trim();
}

// ─── Generate recommendations from AI insights + deterministic data ───────────
export interface RecommendationInput {
  aiResult: AIAnalysisResult;
  score: ScoreOutput;
  pages: CrawledPageData[];
}

export function generateRecommendations(input: RecommendationInput) {
  const { aiResult, score, pages } = input;
  const recs: Array<{
    category: string;
    priority: string;
    title: string;
    problem: string;
    recommendation: string;
    impact: string;
    effort: string;
    data_source: string;
    ai_explanation?: string;
    affected_urls?: string[];
  }> = [];

  // ─── Deterministic recommendations from measured data ───────────────────────
  const pagesWithoutTitle = pages.filter(p => !p.title);
  if (pagesWithoutTitle.length > 0) {
    recs.push({
      category: 'on_page',
      priority: 'critical',
      title: `${pagesWithoutTitle.length} página(s) sin etiqueta Title`,
      problem: `Se detectaron ${pagesWithoutTitle.length} páginas sin title, lo que impide el posicionamiento en buscadores.`,
      recommendation: 'Agregar un title único y descriptivo de 30-60 caracteres a cada página, incluyendo la keyword principal.',
      impact: 'Alto',
      effort: 'Bajo',
      data_source: 'MEASURED',
      affected_urls: pagesWithoutTitle.map(p => p.url).slice(0, 20),
    });
  }

  const pagesWithoutH1 = pages.filter(p => !p.h1 || p.h1.length === 0);
  if (pagesWithoutH1.length > 0) {
    recs.push({
      category: 'on_page',
      priority: 'critical',
      title: `${pagesWithoutH1.length} página(s) sin H1`,
      problem: 'Las páginas sin H1 no comunican claramente el tema principal a los buscadores.',
      recommendation: 'Agregar un único H1 por página con la keyword principal.',
      impact: 'Alto',
      effort: 'Bajo',
      data_source: 'MEASURED',
      affected_urls: pagesWithoutH1.map(p => p.url).slice(0, 20),
    });
  }

  const errorPages = pages.filter(p => p.status_code && p.status_code >= 400);
  if (errorPages.length > 0) {
    recs.push({
      category: 'technical_seo',
      priority: 'critical',
      title: `${errorPages.length} página(s) con errores HTTP`,
      problem: `Se detectaron errores ${[...new Set(errorPages.map(p=>p.status_code))].join(', ')} que dañan el crawl budget y la experiencia del usuario.`,
      recommendation: 'Redirigir o corregir las URLs con error 4xx/5xx. Implementar redirecciones 301 cuando corresponda.',
      impact: 'Alto',
      effort: 'Medio',
      data_source: 'MEASURED',
      affected_urls: errorPages.map(p => p.url).slice(0, 10),
    });
  }

  const thinPages = pages.filter(p => (p.word_count ?? 0) < 300 && p.page_type !== 'contact' && p.is_indexable !== false);
  if (thinPages.length > 0) {
    recs.push({
      category: 'content',
      priority: 'high',
      title: `${thinPages.length} página(s) con contenido escaso`,
      problem: `${thinPages.length} páginas indexables tienen menos de 300 palabras, lo que reduce su competitividad en búsquedas.`,
      recommendation: 'Enriquecer el contenido con información relevante, FAQs y detalles del servicio/producto.',
      impact: 'Alto',
      effort: 'Alto',
      data_source: 'CALCULATED',
      affected_urls: thinPages.map(p => p.url).slice(0, 10),
    });
  }

  // ─── AI-based recommendations ────────────────────────────────────────────────
  for (const opportunity of aiResult.opportunities.slice(0, 4)) {
    // Extract a natural title up to 90 characters on word boundary
    const trimmedOpp = opportunity.trim();
    let title = trimmedOpp;
    if (title.length > 80) {
      const match = title.slice(0, 80).match(/^(.*)\s+[^\s]*$/);
      title = match ? match[1] : title.slice(0, 75);
    }

    recs.push({
      category: 'opportunity',
      priority: 'medium',
      title,
      problem: 'Oportunidad identificada mediante análisis de datos e interpretación estratégica de mercado.',
      recommendation: trimmedOpp,
      impact: 'Medio',
      effort: 'Medio',
      data_source: 'AI_INFERRED',
      ai_explanation: `Generado por IA (gpt-4o) interpretando ${aiResult.tokens_used} tokens de datos reales del sitio.`,
    });
  }

  for (const priority of aiResult.priorities.slice(0, 4)) {
    const trimmedPrio = priority.trim();
    let title = trimmedPrio;
    if (title.length > 80) {
      const match = title.slice(0, 80).match(/^(.*)\s+[^\s]*$/);
      title = match ? match[1] : title.slice(0, 75);
    }

    recs.push({
      category: 'on_page',
      priority: 'high',
      title,
      problem: 'Prioridad estratégica identificada mediante análisis de inteligencia SEO.',
      recommendation: trimmedPrio,
      impact: 'Alto',
      effort: 'Medio',
      data_source: 'AI_INFERRED',
      ai_explanation: `Generado por IA (gpt-4o) con base en Intelligence Score ${score.score}/100.`,
    });
  }

  return recs;
}
