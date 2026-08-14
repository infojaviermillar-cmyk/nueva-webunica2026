'use client';

import { useState } from 'react';
import {
  ChevronDown,
  Sparkles,
  Globe,
  Code2,
  FileText,
  Link2,
  LayoutGrid,
  Zap,
  TrendingUp,
  Shield,
  Search,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

/* ── Types ───────────────────────────────────────────────────── */
export interface Recommendation {
  id: string;
  priority: string;
  category: string;
  title: string;
  problem: string;
  recommendation: string;
  impact: string;
  effort: string;
  data_source: string;
  affected_urls?: string[];
  status: string;
}

/* ── Category metadata ───────────────────────────────────────── */
const CATEGORY_META: Record<
  string,
  { icon: React.ElementType; label: string; color: string; bg: string; border: string }
> = {
  technical_seo: {
    icon: Code2,
    label: 'SEO Técnico',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
  },
  on_page: {
    icon: FileText,
    label: 'On-Page',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
  },
  content: {
    icon: LayoutGrid,
    label: 'Contenido',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  link_building: {
    icon: Link2,
    label: 'Link Building',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  performance: {
    icon: Zap,
    label: 'Performance',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
  },
  architecture: {
    icon: Globe,
    label: 'Arquitectura',
    color: 'text-teal-400',
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/20',
  },
  security: {
    icon: Shield,
    label: 'Seguridad',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
  },
  opportunity: {
    icon: TrendingUp,
    label: 'Oportunidad',
    color: 'text-lime-400',
    bg: 'bg-lime-500/10',
    border: 'border-lime-500/20',
  },
};

const DEFAULT_CATEGORY = {
  icon: Search,
  label: 'General',
  color: 'text-zinc-400',
  bg: 'bg-zinc-800',
  border: 'border-zinc-700',
};

/* ── Priority metadata ───────────────────────────────────────── */
const PRIORITY_META: Record<
  string,
  { label: string; dot: string; badge: string; bar: string; order: number }
> = {
  critical: {
    label: 'Crítico',
    dot: 'bg-red-500',
    badge: 'bg-red-500/10 border-red-500/30 text-red-400',
    bar: 'bg-red-500',
    order: 0,
  },
  high: {
    label: 'Alto',
    dot: 'bg-orange-500',
    badge: 'bg-orange-500/10 border-orange-500/30 text-orange-400',
    bar: 'bg-orange-500',
    order: 1,
  },
  medium: {
    label: 'Medio',
    dot: 'bg-amber-500',
    badge: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    bar: 'bg-amber-500',
    order: 2,
  },
  low: {
    label: 'Bajo',
    dot: 'bg-zinc-500',
    badge: 'bg-zinc-800 border-zinc-700 text-zinc-400',
    bar: 'bg-zinc-500',
    order: 3,
  },
};

/* ── Impact / Effort width mappings ──────────────────────────── */
const IMPACT_WIDTH: Record<string, string> = {
  Alto: 'w-4/5',
  Medio: 'w-1/2',
  Bajo: 'w-1/4',
  High: 'w-4/5',
  Medium: 'w-1/2',
  Low: 'w-1/4',
};

const EFFORT_WIDTH: Record<string, string> = {
  Alto: 'w-4/5',
  Medio: 'w-1/2',
  Bajo: 'w-1/4',
  High: 'w-4/5',
  Medium: 'w-1/2',
  Low: 'w-1/4',
};

/** Sanitizes truncated legacy titles that ended abruptly mid-word or were sliced at 80 chars */
function sanitizeTitle(title: string, recommendation?: string): string {
  if (!title) return recommendation || 'Oportunidad de optimización';
  
  const trimmed = title.trim();
  // Check if title is sliced mid-word (ends in a 1-2 char orphan word or truncated word prefix)
  const isSuspiciousTruncation =
    trimmed.length >= 75 &&
    recommendation &&
    recommendation.startsWith(trimmed.slice(0, 60)) &&
    recommendation.length > trimmed.length;

  if (isSuspiciousTruncation) {
    // Return the first full sentence or complete thought from recommendation
    const firstSentence = recommendation.split(/[.!?]/)[0];
    if (firstSentence && firstSentence.length > 20 && firstSentence.length <= 120) {
      return firstSentence;
    }
    return recommendation;
  }

  // Remove trailing orphan words like "su r", "un", "qu" if at the very end of a 78+ char string
  if (trimmed.length >= 78) {
    const cleaned = trimmed.replace(/\s+[a-zA-Z]{1,2}$/, '');
    return cleaned;
  }

  return trimmed;
}

/* ── Summary header ──────────────────────────────────────────── */
function SummaryBar({
  recs,
  selectedPriority,
  onSelectPriority,
}: {
  recs: Recommendation[];
  selectedPriority: string | null;
  onSelectPriority: (p: string | null) => void;
}) {
  const counts = recs.reduce<Record<string, number>>((acc, r) => {
    acc[r.priority] = (acc[r.priority] || 0) + 1;
    return acc;
  }, {});

  const items = [
    { key: 'critical', ...PRIORITY_META.critical },
    { key: 'high', ...PRIORITY_META.high },
    { key: 'medium', ...PRIORITY_META.medium },
    { key: 'low', ...PRIORITY_META.low },
  ].filter((i) => (counts[i.key] || 0) > 0);

  return (
    <div className="flex flex-wrap items-center gap-2.5 mb-8">
      <button
        onClick={() => onSelectPriority(null)}
        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs font-medium transition-all ${
          selectedPriority === null
            ? 'bg-zinc-700/60 border-zinc-500 text-white shadow-sm'
            : 'border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
        }`}
      >
        <span>Todos</span>
        <span className="font-mono font-bold">{recs.length}</span>
      </button>

      {items.map((item) => {
        const isSelected = selectedPriority === item.key;
        return (
          <button
            key={item.key}
            onClick={() => onSelectPriority(isSelected ? null : item.key)}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs font-medium transition-all ${
              item.badge
            } ${
              isSelected ? 'ring-2 ring-offset-2 ring-offset-zinc-950 ring-violet-500/50 scale-[1.02]' : 'opacity-85 hover:opacity-100'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${item.dot}`} />
            <span>{item.label}</span>
            <span className="font-mono font-bold">{counts[item.key]}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ── Single accordion card ───────────────────────────────────── */
function OpportunityCard({
  rec,
  index,
}: {
  rec: Recommendation;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  const priority = PRIORITY_META[rec.priority] || PRIORITY_META.low;
  const catKey = rec.category?.toLowerCase().replace(/[^a-z_]/g, '_');
  const cat = CATEGORY_META[catKey] || DEFAULT_CATEGORY;
  const CatIcon = cat.icon;
  const displayTitle = sanitizeTitle(rec.title, rec.recommendation);

  return (
    <div
      className={`group relative bg-zinc-900 border ${
        open ? 'border-zinc-700 bg-zinc-900/90 shadow-xl' : 'border-zinc-800 hover:border-zinc-700'
      } rounded-2xl overflow-hidden transition-all duration-300`}
      style={{ animationDelay: `${index * 40}ms` }}
    >
      {/* Left accent bar */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${priority.bar} opacity-75`} />

      {/* Header button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-5 py-4 flex items-start gap-4"
        aria-expanded={open}
      >
        {/* Category icon */}
        <div
          className={`w-10 h-10 rounded-xl ${cat.bg} border ${cat.border} flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-105`}
        >
          <CatIcon className={`w-5 h-5 ${cat.color}`} />
        </div>

        <div className="flex-1 min-w-0">
          {/* Badges row */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-semibold uppercase tracking-wider ${priority.badge}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${priority.dot}`} />
              {priority.label}
            </span>
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-[11px] font-medium ${cat.bg} ${cat.border} ${cat.color}`}
            >
              {cat.label}
            </span>
            {rec.data_source === 'AI_INFERRED' && (
              <span className="inline-flex items-center gap-1 text-[11px] text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded-full border border-violet-500/20">
                <Sparkles className="w-3 h-3" />
                Insight IA
              </span>
            )}
            {rec.data_source === 'MEASURED' && (
              <span className="inline-flex items-center gap-1 text-[11px] text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full border border-sky-500/20 font-mono">
                Medido
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-white font-semibold text-base leading-snug pr-4 mb-3">
            {displayTitle}
          </h3>

          {/* Impact / Effort bars */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono w-12">
                Impacto
              </span>
              <div className="w-20 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    rec.impact === 'Alto' || rec.impact === 'High'
                      ? 'bg-emerald-500'
                      : rec.impact === 'Medio' || rec.impact === 'Medium'
                      ? 'bg-amber-500'
                      : 'bg-zinc-500'
                  } ${IMPACT_WIDTH[rec.impact] || 'w-1/2'} transition-all duration-500`}
                />
              </div>
              <span className="text-xs text-zinc-300 font-medium">{rec.impact}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono w-12">
                Esfuerzo
              </span>
              <div className="w-20 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    rec.effort === 'Alto' || rec.effort === 'High'
                      ? 'bg-red-500'
                      : rec.effort === 'Medio' || rec.effort === 'Medium'
                      ? 'bg-amber-500'
                      : 'bg-emerald-500'
                  } ${EFFORT_WIDTH[rec.effort] || 'w-1/2'} transition-all duration-500`}
                />
              </div>
              <span className="text-xs text-zinc-300 font-medium">{rec.effort}</span>
            </div>
          </div>
        </div>

        {/* Chevron toggle */}
        <div className="mt-1 p-1 rounded-lg bg-zinc-800/40 border border-zinc-700/40 text-zinc-400 group-hover:text-white transition-colors">
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              open ? 'rotate-180 text-violet-400' : ''
            }`}
          />
        </div>
      </button>

      {/* Expandable body */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5 pt-0 border-t border-zinc-800/70">
          {/* Problem description */}
          {rec.problem && (
            <div className="mt-4 mb-4">
              <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest font-semibold mb-1">
                Diagnóstico & Contexto
              </p>
              <p className="text-zinc-300 text-sm leading-relaxed">{rec.problem}</p>
            </div>
          )}

          {/* Recommendation box */}
          <div className="p-4 bg-zinc-950/80 rounded-xl border border-zinc-800/90 mb-4">
            <p className="text-[10px] text-violet-400 font-mono uppercase tracking-widest font-semibold mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-violet-400" />
              Recomendación de Acción
            </p>
            <p className="text-zinc-200 text-sm leading-relaxed font-normal">
              {rec.recommendation}
            </p>
          </div>

          {/* Affected URLs as interactive pills */}
          {rec.affected_urls && rec.affected_urls.length > 0 && (
            <div>
              <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mb-2 font-semibold">
                URLs Afectadas ({rec.affected_urls.length})
              </p>
              <div className="flex flex-wrap gap-2">
                {rec.affected_urls.slice(0, 10).map((url, i) => {
                  const path = url.replace(/^https?:\/\/[^/]+/, '') || '/';
                  return (
                    <a
                      key={i}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800/80 border border-zinc-700/80 text-zinc-300 text-xs font-mono hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-200 transition-all max-w-[320px] truncate group/link"
                      title={url}
                    >
                      <ExternalLink className="w-3 h-3 flex-shrink-0 text-zinc-500 group-hover/link:text-violet-400" />
                      <span className="truncate">{path}</span>
                    </a>
                  );
                })}
                {rec.affected_urls.length > 10 && (
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-zinc-800/40 border border-zinc-700/40 text-zinc-500 text-xs font-mono">
                    +{rec.affected_urls.length - 10} más
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Main export ─────────────────────────────────────────────── */
export default function OpportunityCards({
  recommendations,
}: {
  recommendations: Recommendation[];
}) {
  const [priorityFilter, setPriorityFilter] = useState<string | null>(null);

  const filteredRecs = priorityFilter
    ? recommendations.filter((r) => r.priority === priorityFilter)
    : recommendations;

  return (
    <div>
      <SummaryBar
        recs={recommendations}
        selectedPriority={priorityFilter}
        onSelectPriority={setPriorityFilter}
      />
      {filteredRecs.length === 0 ? (
        <div className="border border-dashed border-zinc-800 rounded-2xl p-8 text-center text-zinc-500 text-sm">
          No hay recomendaciones en la categoría seleccionada.
        </div>
      ) : (
        <div className="space-y-3.5">
          {filteredRecs.map((rec, i) => (
            <OpportunityCard key={rec.id} rec={rec} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
