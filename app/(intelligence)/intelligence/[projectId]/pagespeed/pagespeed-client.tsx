'use client';

import { useState } from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ChevronDown,
  Zap,
  Eye,
  MousePointerClick,
  LayoutDashboard,
  Activity,
  Sparkles,
  Clock,
} from 'lucide-react';
import { IntelPageSpeedAudit, PageSpeedDiagnosticItem } from '@/types/intelligence';

/* ══════════════════════════════════════════════════════
   SCORE GAUGE — SVG arc ring
══════════════════════════════════════════════════════ */
interface ScoreGaugeProps {
  score: number;
  title: string;
  subtitle?: string;
}

function scoreColor(score: number) {
  if (score >= 90) return { stroke: '#10b981', text: 'text-emerald-400', ring: '#10b981', badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' };
  if (score >= 50) return { stroke: '#f59e0b', text: 'text-amber-400', ring: '#f59e0b', badge: 'bg-amber-500/10 border-amber-500/20 text-amber-400' };
  return { stroke: '#ef4444', text: 'text-red-400', ring: '#ef4444', badge: 'bg-red-500/10 border-red-500/20 text-red-400' };
}

function ScoreGauge({ score, title, subtitle }: ScoreGaugeProps) {
  const r = 36;
  const circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  const { stroke, text, badge } = scoreColor(score);

  const label =
    score >= 90 ? 'Excelente' : score >= 50 ? 'Mejorable' : 'Deficiente';

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:border-zinc-700 transition-colors">
      {/* Arc ring */}
      <div className="relative w-20 h-20">
        <svg className="w-20 h-20 -rotate-90" viewBox="0 0 88 88">
          <circle cx="44" cy="44" r={r} fill="none" stroke="#27272a" strokeWidth="8" />
          <circle
            cx="44" cy="44" r={r} fill="none"
            stroke={stroke} strokeWidth="8"
            strokeDasharray={circ}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(.4,0,.2,1)' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={`font-mono font-bold text-xl leading-none ${text}`}>{score}</span>
        </div>
      </div>
      <div>
        <p className="text-white font-semibold text-sm">{title}</p>
        {subtitle && <p className="text-zinc-500 text-[11px] mt-0.5">{subtitle}</p>}
        <span className={`inline-block mt-1.5 px-2 py-0.5 rounded-full border text-[10px] font-semibold uppercase tracking-wider ${badge}`}>
          {label}
        </span>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   VITAL CARD — horizontal metric with status bar
══════════════════════════════════════════════════════ */
interface VitalCardProps {
  name: string;
  code: string;
  valueStr: string;
  unit: string;
  status: 'good' | 'needs-improvement' | 'poor';
  goodThreshold: string;
  description: string;
  icon: React.ElementType;
  /** 0–100 fill % for progress bar */
  fillPercent: number;
}

const STATUS_STYLES = {
  good: {
    badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    bar: 'bg-emerald-500',
    label: 'Bueno',
    Icon: CheckCircle2,
    glow: 'shadow-emerald-500/20',
  },
  'needs-improvement': {
    badge: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
    bar: 'bg-amber-500',
    label: 'Mejorable',
    Icon: AlertTriangle,
    glow: 'shadow-amber-500/20',
  },
  poor: {
    badge: 'bg-red-500/10 border-red-500/20 text-red-400',
    bar: 'bg-red-500',
    label: 'Deficiente',
    Icon: XCircle,
    glow: 'shadow-red-500/20',
  },
};

function VitalCard({
  name, code, valueStr, unit, status, goodThreshold, description, icon: MetricIcon, fillPercent,
}: VitalCardProps) {
  const s = STATUS_STYLES[status];
  const StatusIcon = s.Icon;

  return (
    <div className={`bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between gap-4 hover:border-zinc-700 transition-colors shadow-lg ${s.glow}`}>
      {/* Top row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${s.badge} border`}>
            <MetricIcon className="w-4 h-4" />
          </div>
          <div>
            <span className="text-zinc-400 font-mono text-[11px] uppercase tracking-widest block">{code}</span>
            <h3 className="text-white text-[13px] font-semibold leading-tight">{name}</h3>
          </div>
        </div>
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px] font-semibold ${s.badge} flex-shrink-0`}>
          <StatusIcon className="w-3 h-3" />
          {s.label}
        </span>
      </div>

      {/* Value */}
      <div>
        <div className="flex items-baseline gap-1.5 mb-2">
          <span className="text-white font-mono text-3xl font-bold tracking-tight">{valueStr}</span>
          <span className="text-zinc-500 text-xs">{unit}</span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden mb-1">
          <div
            className={`h-full rounded-full ${s.bar} transition-all duration-1000`}
            style={{ width: `${Math.min(fillPercent, 100)}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-zinc-600 font-mono">
          <span>0</span>
          <span className="text-zinc-500">Objetivo: {goodThreshold}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-zinc-500 text-[11px] leading-relaxed">{description}</p>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   DIAGNOSTIC ITEM — accordion row
══════════════════════════════════════════════════════ */
function DiagnosticItem({ item, index }: { item: PageSpeedDiagnosticItem; index: number }) {
  const [open, setOpen] = useState(false);

  const hasSavings = Boolean(item.savings_ms || item.savings_bytes);
  const scoreColor =
    item.score <= 0.3 ? 'bg-red-500/10 border-red-500/20 text-red-400'
    : item.score <= 0.7 ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'
    : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400';

  return (
    <div
      className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full text-left px-4 py-3.5 flex items-center gap-3"
        aria-expanded={open}
      >
        {/* Score dot */}
        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 font-mono text-xs font-bold ${scoreColor}`}>
          {item.score <= 0.3 ? '✕' : item.score <= 0.7 ? '!' : '✓'}
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="text-white text-sm font-medium truncate pr-2">{item.title}</h4>
          {item.displayValue && (
            <span className="text-zinc-500 text-xs font-mono">{item.displayValue}</span>
          )}
        </div>

        {/* Savings badge */}
        {hasSavings && (
          <div className="flex-shrink-0 text-right">
            {item.savings_ms && (
              <span className="text-amber-400 font-mono font-bold text-sm">
                -{(item.savings_ms / 1000).toFixed(1)}s
              </span>
            )}
            {item.savings_bytes && !item.savings_ms && (
              <span className="text-sky-400 font-mono font-bold text-sm">
                -{(item.savings_bytes / 1024).toFixed(0)} KB
              </span>
            )}
            <p className="text-zinc-600 text-[10px]">ahorro est.</p>
          </div>
        )}

        <ChevronDown
          className={`w-4 h-4 text-zinc-600 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Expandable description */}
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pb-4 pt-0 border-t border-zinc-800/70">
          <p className="text-zinc-400 text-xs leading-relaxed mt-3">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════════════ */
function lcpFill(ms?: number) {
  if (!ms) return 95;
  // good ≤ 2500, poor > 4000 → map to 0–100 inversely
  return Math.max(5, Math.min(100, Math.round(100 - ((ms - 500) / 4500) * 100)));
}
function inpFill(ms?: number) {
  if (!ms) return 95;
  return Math.max(5, Math.min(100, Math.round(100 - ((ms - 50) / 950) * 100)));
}
function clsFill(cls?: number) {
  if (cls === undefined) return 95;
  return Math.max(5, Math.min(100, Math.round(100 - (cls / 0.4) * 100)));
}

/* ══════════════════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════════════════ */
export default function PageSpeedClient({ audit }: { audit: IntelPageSpeedAudit }) {
  const lcpStatus: 'good' | 'needs-improvement' | 'poor' =
    !audit.lcp_ms ? 'good' : audit.lcp_ms <= 2500 ? 'good' : audit.lcp_ms <= 4000 ? 'needs-improvement' : 'poor';
  const inpStatus: 'good' | 'needs-improvement' | 'poor' =
    !audit.inp_ms ? 'good' : audit.inp_ms <= 200 ? 'good' : audit.inp_ms <= 500 ? 'needs-improvement' : 'poor';
  const clsStatus: 'good' | 'needs-improvement' | 'poor' =
    audit.cls === undefined ? 'good' : audit.cls <= 0.1 ? 'good' : audit.cls <= 0.25 ? 'needs-improvement' : 'poor';

  return (
    <div className="space-y-10">
      {/* ── Lighthouse Scores ── */}
      <section>
        <h2 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
          <Activity className="w-4 h-4 text-violet-400" />
          Puntuaciones Lighthouse
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <ScoreGauge score={audit.performance_score} title="Rendimiento" subtitle="Performance" />
          <ScoreGauge score={audit.accessibility_score ?? 80} title="Accesibilidad" subtitle="Accessibility" />
          <ScoreGauge score={audit.best_practices_score ?? 85} title="Buenas Prácticas" subtitle="Best Practices" />
          <ScoreGauge score={audit.seo_score ?? 90} title="SEO Técnico" subtitle="SEO" />
        </div>
      </section>

      {/* ── Core Web Vitals ── */}
      <section>
        <h2 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
          <Zap className="w-4 h-4 text-violet-400" />
          Core Web Vitals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <VitalCard
            name="Largest Contentful Paint"
            code="LCP"
            valueStr={audit.lcp_ms ? (audit.lcp_ms / 1000).toFixed(2) : '—'}
            unit="segundos"
            status={lcpStatus}
            goodThreshold="≤ 2.5s"
            description="Tiempo de carga del contenido visual principal de la página."
            icon={Eye}
            fillPercent={lcpFill(audit.lcp_ms)}
          />
          <VitalCard
            name="Interaction to Next Paint"
            code="INP"
            valueStr={audit.inp_ms ? audit.inp_ms.toString() : '—'}
            unit="ms"
            status={inpStatus}
            goodThreshold="≤ 200ms"
            description="Capacidad de respuesta a interacciones del usuario (clics, toques)."
            icon={MousePointerClick}
            fillPercent={inpFill(audit.inp_ms)}
          />
          <VitalCard
            name="Cumulative Layout Shift"
            code="CLS"
            valueStr={audit.cls !== undefined ? audit.cls.toFixed(3) : '—'}
            unit="puntos"
            status={clsStatus}
            goodThreshold="≤ 0.10"
            description="Estabilidad visual y cambios de diseño inesperados durante la carga."
            icon={LayoutDashboard}
            fillPercent={clsFill(audit.cls)}
          />
        </div>

        {/* Additional vitals row */}
        {(audit.fcp_ms || audit.tbt_ms) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {audit.fcp_ms && (
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 flex items-center justify-between hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[11px] font-mono uppercase tracking-wider block">FCP</span>
                    <span className="text-white text-sm font-semibold">First Contentful Paint</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-white font-mono font-bold text-lg">{(audit.fcp_ms / 1000).toFixed(2)}</span>
                  <span className="text-zinc-500 text-xs ml-1">s</span>
                  <p className="text-zinc-600 text-[10px] font-mono">Obj: ≤ 1.8s</p>
                </div>
              </div>
            )}
            {audit.tbt_ms !== undefined && (
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 flex items-center justify-between hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    <Activity className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <span className="text-zinc-500 text-[11px] font-mono uppercase tracking-wider block">TBT</span>
                    <span className="text-white text-sm font-semibold">Total Blocking Time</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-white font-mono font-bold text-lg">{audit.tbt_ms}</span>
                  <span className="text-zinc-500 text-xs ml-1">ms</span>
                  <p className="text-zinc-600 text-[10px] font-mono">Obj: ≤ 200ms</p>
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* ── Diagnostics ── */}
      <section>
        <h2 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-violet-400" />
          Oportunidades de optimización
          {audit.diagnostics.length > 0 && (
            <span className="ml-1 px-2 py-0.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 text-[11px] font-mono">
              {audit.diagnostics.length}
            </span>
          )}
        </h2>

        {audit.diagnostics.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center text-emerald-400 text-sm flex flex-col items-center gap-2">
            <CheckCircle2 className="w-8 h-8 opacity-80" />
            <span>No se detectaron problemas graves de rendimiento.</span>
          </div>
        ) : (
          <div className="space-y-2">
            {audit.diagnostics.map((item, i) => (
              <DiagnosticItem key={item.id || i} item={item} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
