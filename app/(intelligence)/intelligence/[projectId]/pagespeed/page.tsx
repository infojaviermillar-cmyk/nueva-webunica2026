import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronRight, Zap, Gauge, Smartphone, Monitor,
  ZapOff, CheckCircle2, AlertTriangle, XCircle, Globe, ArrowRight, Activity, ShieldCheck, Sparkles, SearchCheck
} from 'lucide-react';
import { IntelPageSpeedAudit } from '@/types/intelligence';
import AnalyzePageSpeedButton from './analyze-pagespeed-button';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ projectId: string }>;
  searchParams: Promise<{ strategy?: string }>;
}

async function getPageSpeedData(projectId: string, userId: string) {
  const admin = getSupabaseAdmin();

  const { data: project } = await admin
    .from('intel_projects')
    .select('*, intel_organizations!inner(owner_id)')
    .eq('id', projectId)
    .single();

  if (!project || (project as any).intel_organizations?.owner_id !== userId) return null;

  const { data: audits } = await admin
    .from('intel_pagespeed_audits')
    .select('*')
    .eq('project_id', projectId);

  const typed = (audits as IntelPageSpeedAudit[] | null) ?? [];
  const mobile = typed.find(a => a.strategy === 'mobile');
  const desktop = typed.find(a => a.strategy === 'desktop');

  const { intel_organizations: _, ...cleanProject } = project as any;

  return {
    project: cleanProject,
    mobile,
    desktop,
    hasAudits: typed.length > 0,
  };
}

function ScoreGauge({ score, title }: { score: number; title: string }) {
  const color = score >= 90 ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
    : score >= 50 ? 'text-amber-400 border-amber-500/30 bg-amber-500/10'
    : 'text-red-400 border-red-500/30 bg-red-500/10';

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex flex-col items-center justify-center text-center">
      <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center font-mono font-bold text-xl mb-2 ${color}`}>
        {score}
      </div>
      <span className="text-zinc-300 text-sm font-medium">{title}</span>
    </div>
  );
}

function VitalCard({
  name,
  code,
  valueStr,
  status,
  unit,
  goodThreshold,
  description,
}: {
  name: string;
  code: string;
  valueStr: string;
  status: 'good' | 'needs-improvement' | 'poor';
  unit: string;
  goodThreshold: string;
  description: string;
}) {
  const statusStyles = {
    good: {
      bg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
      badge: 'Bueno',
      icon: CheckCircle2,
    },
    'needs-improvement': {
      bg: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
      badge: 'Mejorable',
      icon: AlertTriangle,
    },
    poor: {
      bg: 'bg-red-500/10 border-red-500/20 text-red-400',
      badge: 'Deficiente',
      icon: XCircle,
    },
  };

  const style = statusStyles[status];
  const Icon = style.icon;

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-zinc-400 font-mono text-xs uppercase tracking-wider">{code}</span>
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-medium ${style.bg}`}>
            <Icon className="w-3 h-3" />
            {style.badge}
          </span>
        </div>
        <h3 className="text-white text-base font-semibold mb-1">{name}</h3>
        <p className="text-zinc-500 text-xs leading-relaxed mb-4">{description}</p>
      </div>

      <div className="pt-3 border-t border-zinc-800 flex items-baseline justify-between">
        <div>
          <span className="text-white font-mono text-2xl font-bold">{valueStr}</span>
          <span className="text-zinc-500 text-xs ml-1">{unit}</span>
        </div>
        <span className="text-zinc-600 text-xs">Objetivo: {goodThreshold}</span>
      </div>
    </div>
  );
}

export default async function PageSpeedPage({ params, searchParams }: PageProps) {
  const { projectId } = await params;
  const { strategy: queryStrategy } = await searchParams;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/login?next=/intelligence/projects');

  const data = await getPageSpeedData(projectId, user.id);
  if (!data) notFound();

  const { project, mobile, desktop, hasAudits } = data;
  const activeStrategy = queryStrategy === 'desktop' ? 'desktop' : 'mobile';
  const currentAudit = activeStrategy === 'desktop' ? desktop : mobile;

  // Calculadores de estado Core Web Vitals
  const lcpStatus = (ms?: number) => (!ms ? 'good' : ms <= 2500 ? 'good' : ms <= 4000 ? 'needs-improvement' : 'poor');
  const inpStatus = (ms?: number) => (!ms ? 'good' : ms <= 200 ? 'good' : ms <= 500 ? 'needs-improvement' : 'poor');
  const clsStatus = (cls?: number) => (cls === undefined ? 'good' : cls <= 0.1 ? 'good' : cls <= 0.25 ? 'needs-improvement' : 'poor');

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* ── Nav ── */}
      <nav className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href="/intelligence/projects" className="text-zinc-500 hover:text-white transition-colors">
            <div className="w-6 h-6 rounded bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-violet-400" />
            </div>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-700" />
          <Link href={`/intelligence/${projectId}`} className="text-zinc-400 hover:text-white text-sm transition-colors truncate max-w-[160px]">
            {project.name}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-700" />
          <div className="flex items-center gap-1.5">
            <Gauge className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-white text-sm font-medium">PageSpeed & Core Web Vitals</span>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <AnalyzePageSpeedButton projectId={projectId} />
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* ── Header ── */}
        <div className="mb-8 flex items-start justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Globe className="w-4 h-4 text-zinc-500" />
              <span className="text-zinc-400 text-sm font-mono">{project.domain}</span>
            </div>
            <h1 className="text-2xl font-bold text-white">Rendimiento & Core Web Vitals</h1>
            <p className="text-zinc-500 text-sm mt-1">Medición oficial basada en Google Lighthouse API</p>
          </div>

          {/* Toggle Strategy Mobile / Desktop */}
          {hasAudits && (
            <div className="flex items-center p-1 bg-zinc-900 border border-zinc-800 rounded-xl">
              <Link
                href={`/intelligence/${projectId}/pagespeed?strategy=mobile`}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeStrategy === 'mobile'
                    ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                Mobile
              </Link>
              <Link
                href={`/intelligence/${projectId}/pagespeed?strategy=desktop`}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeStrategy === 'desktop'
                    ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Monitor className="w-4 h-4" />
                Desktop
              </Link>
            </div>
          )}
        </div>

        {/* ── Sin datos ── */}
        {!hasAudits && (
          <div className="border border-dashed border-zinc-800 rounded-2xl p-12 text-center">
            <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-4">
              <Gauge className="w-7 h-7 text-zinc-600" />
            </div>
            <h2 className="text-white font-semibold text-lg mb-2">Sin auditoría PageSpeed todavía</h2>
            <p className="text-zinc-400 text-sm max-w-sm mx-auto mb-6">
              Ejecuta el análisis para medir el rendimiento móvil y de escritorio con las métricas oficial de Google.
            </p>
            <AnalyzePageSpeedButton projectId={projectId} />
          </div>
        )}

        {/* ── Con datos ── */}
        {hasAudits && currentAudit && (
          <>
            {/* Disclaimer data source */}
            {currentAudit.data_source === 'ESTIMATED' && (
              <div className="mb-6 p-3 rounded-xl bg-amber-500/5 border border-amber-500/15 flex items-center gap-2 text-amber-200/70 text-xs">
                <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>
                  Medición estimada por fallback local. Para resultados exactos con la API oficial de Google, configura <code className="text-amber-300 font-mono">PAGESPEED_API_KEY</code>.
                </span>
              </div>
            )}

            {/* ── 1. Lighthouse Categories Scores ── */}
            <section className="mb-8">
              <h2 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                <Activity className="w-4 h-4 text-violet-400" />
                Puntuaciones Lighthouse ({activeStrategy === 'mobile' ? 'Móvil' : 'Escritorio'})
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <ScoreGauge score={currentAudit.performance_score} title="Rendimiento" />
                <ScoreGauge score={currentAudit.accessibility_score ?? 80} title="Accesibilidad" />
                <ScoreGauge score={currentAudit.best_practices_score ?? 85} title="Buenas Prácticas" />
                <ScoreGauge score={currentAudit.seo_score ?? 90} title="SEO Técnico" />
              </div>
            </section>

            {/* ── 2. Core Web Vitals ── */}
            <section className="mb-8">
              <h2 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-violet-400" />
                Métricas Core Web Vitals
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <VitalCard
                  name="Largest Contentful Paint"
                  code="LCP"
                  valueStr={currentAudit.lcp_ms ? (currentAudit.lcp_ms / 1000).toFixed(2) : '—'}
                  unit="segundos"
                  status={lcpStatus(currentAudit.lcp_ms)}
                  goodThreshold="≤ 2.5s"
                  description="Mide el tiempo de carga del contenido visual principal de la página."
                />

                <VitalCard
                  name="Interaction to Next Paint"
                  code="INP"
                  valueStr={currentAudit.inp_ms ? currentAudit.inp_ms.toString() : '—'}
                  unit="ms"
                  status={inpStatus(currentAudit.inp_ms)}
                  goodThreshold="≤ 200ms"
                  description="Mide la capacidad de respuesta a interacciones del usuario (clics, toques)."
                />

                <VitalCard
                  name="Cumulative Layout Shift"
                  code="CLS"
                  valueStr={currentAudit.cls !== undefined ? currentAudit.cls.toFixed(3) : '—'}
                  unit="puntos"
                  status={clsStatus(currentAudit.cls)}
                  goodThreshold="≤ 0.10"
                  description="Mide la estabilidad visual y cambios de diseño inesperados durante la carga."
                />
              </div>
            </section>

            {/* ── 3. Diagnósticos y Oportunidades ── */}
            <section className="mb-8">
              <h2 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-violet-400" />
                Oportunidades de optimización detectadas
              </h2>

              {currentAudit.diagnostics.length === 0 ? (
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center text-emerald-400 text-sm flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  No se detectaron problemas graves de rendimiento.
                </div>
              ) : (
                <div className="space-y-3">
                  {currentAudit.diagnostics.map((item, index) => (
                    <div
                      key={item.id || index}
                      className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 text-amber-400 font-mono font-bold text-xs">
                        !
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-medium text-sm mb-1">{item.title}</h4>
                        <p className="text-zinc-400 text-xs leading-relaxed">{item.description}</p>
                      </div>

                      {item.savings_ms && (
                        <div className="text-right flex-shrink-0">
                          <span className="text-amber-400 font-mono font-bold text-sm">
                            -{(item.savings_ms / 1000).toFixed(1)}s
                          </span>
                          <p className="text-zinc-600 text-xs">ahorro est.</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Back link */}
            <div className="flex justify-start">
              <Link
                href={`/intelligence/${projectId}`}
                className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-sm transition-colors"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                Volver al dashboard del proyecto
              </Link>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
