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

export function analyzeContentGap(input: GapAnalysisInput): IntelKeywordGap[] {
  const { projectId, projectKeywords, competitorDomain, competitorKeywords } = input;

  const projectMap = new Map<string, ExtractedKeyword>();
  for (const kw of projectKeywords) {
    projectMap.set(kw.keyword_normalized, kw);
  }

  const competitorMap = new Map<string, ExtractedKeyword>();
  for (const kw of competitorKeywords) {
    competitorMap.set(kw.keyword_normalized, kw);
  }

  const gaps: IntelKeywordGap[] = [];
  const allNorms = new Set([...projectMap.keys(), ...competitorMap.keys()]);

  for (const norm of allNorms) {
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
    const oppScore = calculateOpportunityScore(gapType, compFreq, projFreq, intent);

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
  intent?: string
): number {
  let base = 50;

  if (gapType === 'missing') base = 75;
  else if (gapType === 'weak') base = 60;
  else if (gapType === 'shared') base = 40;
  else if (gapType === 'strong') base = 20;

  // Commercial / Transactional intent boost
  if (intent === 'transactional' || intent === 'commercial') {
    base += 15;
  } else if (intent === 'local') {
    base += 10;
  }

  // Competitor frequency weight
  base += Math.min(15, compFreq * 2);

  return Math.max(0, Math.min(100, Math.round(base)));
}
