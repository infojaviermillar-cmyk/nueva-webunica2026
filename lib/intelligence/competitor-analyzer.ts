/**
 * WEBUNICA INTELLIGENCE — Competitor & Content Gap Analyzer (Etapa 2)
 *
 * Fuente: CALCULATED (basado en datos MEASURED del crawling de ambos sitios)
 * NO usa LLM para inventar keywords ni métricas.
 */

import { ExtractedKeyword } from './keyword-extractor';
import { IntelKeywordGap } from '@/types/intelligence';

export interface GapAnalysisInput {
  projectId: string;
  projectKeywords: ExtractedKeyword[];
  competitorDomain: string;
  competitorKeywords: ExtractedKeyword[];
}

const NOISE_WORDS = new Set([
  'ndash', 'mdash', 'nbsp', 'amp', 'quot', 'apos', 'middot', 'bull', 'hellip',
  'carrito', 'carrito vacío', 'vacío', 'despacho', 'región', 'país', 'país región',
  'copyright', 'derechos reservados', 'todos los derechos', 'iniciar sesión', 'cerrar sesión',
  'mi cuenta', 'menú', 'menu', 'buscar', 'filtros', 'ver más', 'ver mas',
]);

export function analyzeContentGap(input: GapAnalysisInput): IntelKeywordGap[] {
  const { projectId, projectKeywords, competitorDomain, competitorKeywords } = input;

  const projectMap = new Map<string, ExtractedKeyword>();
  for (const kw of projectKeywords) {
    if (!NOISE_WORDS.has(kw.keyword_normalized)) {
      projectMap.set(kw.keyword_normalized, kw);
    }
  }

  const competitorMap = new Map<string, ExtractedKeyword>();
  for (const kw of competitorKeywords) {
    if (!NOISE_WORDS.has(kw.keyword_normalized)) {
      competitorMap.set(kw.keyword_normalized, kw);
    }
  }

  const gaps: IntelKeywordGap[] = [];
  const allNorms = new Set([...projectMap.keys(), ...competitorMap.keys()]);

  for (const norm of allNorms) {
    if (NOISE_WORDS.has(norm)) continue;

    const projKw = projectMap.get(norm);
    const compKw = competitorMap.get(norm);

    const projFreq = projKw?.frequency ?? 0;
    const compFreq = compKw?.frequency ?? 0;
    const kwText = compKw?.keyword || projKw?.keyword || norm;
    const intent = compKw?.intent || projKw?.intent;

    let gapType: IntelKeywordGap['gap_type'];

    if (projFreq === 0 && compFreq > 0) {
      gapType = 'missing';
    } else if (projFreq > 0 && compFreq > projFreq * 1.5) {
      gapType = 'weak';
    } else if (projFreq > compFreq * 1.5) {
      gapType = 'strong';
    } else {
      gapType = 'shared';
    }

    // Opportunity Score (0-100)
    const oppScore = calculateOpportunityScore(gapType, compFreq, projFreq, intent, kwText);

    gaps.push({
      id: `${projectId}-${competitorDomain}-${norm}`,
      project_id: projectId,
      keyword: kwText,
      keyword_normalized: norm,
      intent,
      project_frequency: projFreq,
      competitor_domain: competitorDomain,
      competitor_frequency: compFreq,
      gap_type: gapType,
      opportunity_score: oppScore,
      created_at: new Date().toISOString(),
    });
  }

  // Sort by opportunity score descending
  gaps.sort((a, b) => b.opportunity_score - a.opportunity_score);

  return gaps;
}

function calculateOpportunityScore(
  gapType: IntelKeywordGap['gap_type'],
  compFreq: number,
  projFreq: number,
  intent?: string,
  keyword?: string
): number {
  let base = 40;

  if (gapType === 'missing') base = 65;
  else if (gapType === 'weak') base = 50;
  else if (gapType === 'shared') base = 35;
  else if (gapType === 'strong') base = 20;

  // Commercial / Transactional intent boost
  if (intent === 'transactional') {
    base += 18;
  } else if (intent === 'commercial') {
    base += 15;
  } else if (intent === 'local') {
    base += 12;
  } else if (intent === 'informational') {
    base += 8;
  }

  // Competitor frequency weight (scaled logarithmically / smoothly)
  if (compFreq >= 20) base += 12;
  else if (compFreq >= 10) base += 9;
  else if (compFreq >= 5) base += 6;
  else if (compFreq >= 2) base += 3;

  // Multi-word specificity boost
  if (keyword && keyword.includes(' ')) {
    base += 5;
  }

  return Math.max(10, Math.min(99, Math.round(base)));
}
