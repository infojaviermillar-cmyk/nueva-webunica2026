import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import {
  BarChart3, Globe, ChevronRight, TrendingUp, AlertCircle,
  CheckCircle2, Clock, Zap, Play, FileSearch, Key, Lightbulb, ArrowRight, Users, Search, Gauge, FileText
} from 'lucide-react';
import StartAnalysisButton from './start-analysis-button';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ projectId: string }>;
}

async function getProjectDashboard(projectId: string, userId: string) {
  const admin = getSupabaseAdmin();

  const { data: project } = await admin
    .from('intel_projects')
    .select('*, intel_organizations!inner(owner_id)')
    .eq('id', projectId)
    .single();

  if (!project || (project as any).intel_organizations?.owner_id !== userId) return null;

  const { data: latestJob } = await admin
    .from('intel_analysis_jobs')
    .select('*')
    .eq('project_id', projectId)
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  const { data: latestScore } = await admin
    .from('intel_scores')
    .select('*')
    .eq('project_id', projectId)
    .order('calculated_at', { ascending: false })
    .limit(1)
    .single();

  const { data: scoreHistory } = await admin
    .from('intel_scores')
    .select('score, calculated_at')
    .eq('project_id', projectId)
    .order('calculated_at', { ascending: false })
    .limit(6);

  const { data: recs } = await admin
    .from('intel_recommendations')
    .select('id, priority, category, title, status, data_source')
    .eq('project_id', projectId)
    .eq('status', 'detected')
    .order('priority', { ascending: true })
    .limit(6);

  const { data: topPages } = await admin
    .from('intel_crawl_pages')
    .select('url, seo_score, title, page_type, status_code')
    .eq('project_id', projectId)
    .eq('job_id', latestJob?.id || '')
    .order('seo_score', { ascending: true })
    .limit(5);

  const { count: kwCount } = await admin
    .from('intel_keywords')
    .select('id', { count: 'exact', head: true })
    .eq('project_id', projectId);

  const { data: jobLogs } = await admin
    .from('intel_job_logs')
    .select('level, message, created_at')
    .eq('job_id', latestJob?.id || '')
    .order('created_at', { ascending: false })
    .limit(8);

  const { intel_organizations: _, ...cleanProject } = project as any;

  return {
    project: cleanProject,
    latestJob: latestJob || null,
    latestScore: latestScore || null,
    scoreHistory: scoreHistory || [],
    recommendations: recs || [],
    topPages: topPages || [],
    keywordsCount: kwCount || 0,
    jobLogs: jobLogs || [],
  };
}

function ScoreRing({ score }: { score: number }) {
  const color = score >= 70 ? '#10b981' : score >= 40 ? '#f59e0b' : '#ef4444';
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score / 100) * circumference;
  return (
    <div className="relative w-32 h-32">
      <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="54" fill="none" stroke="#27272a" strokeWidth="10" />
        <circle
          cx="60" cy="60" r="54" fill="none"
          stroke={color} strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s ease' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-white font-mono">{score}</span>
        <span className="text-zinc-500 text-xs">/100</span>
      </div>
    </div>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  const styles: Record<string, string> = {
    critical: 'bg-red-500/10 border-red-500/20 text-red-400',
    high: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
    medium: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
    low: 'bg-zinc-800 border-zinc-700 text-zinc-400',
  };
  const labels: Record<string, string> = { critical: 'Crítico', high: 'Alto', medium: 'Medio', low: 'Bajo' };
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full border text-xs font-medium ${styles[priority] || styles.low}`}>
      {labels[priority] || priority}
    </span>
  );
}

export default async function ProjectDashboardPage({ params }: PageProps) {
  const { projectId } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login?next=/intelligence/projects');

  const dashboard = await getProjectDashboard(projectId, user.id);
  if (!dashboard) notFound();

  const { project, latestJob, latestScore, scoreHistory, recommendations, topPages, keywordsCount, jobLogs } = dashboard;
  const isRunning = latestJob?.status === 'running' || latestJob?.status === 'pending';
  const hasAnalysis = latestScore !== null;

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
          <span className="text-zinc-400 text-sm">Proyectos</span>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-700" />
          <span className="text-white text-sm font-medium truncate">{project.name}</span>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-zinc-600 text-xs font-mono hidden sm:block">{project.domain}</span>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* ── Header ── */}
        <div className="flex items-start justify-between gap-4 mb-8 flex-wrap">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Globe className="w-4 h-4 text-zinc-500" />
              <span className="text-zinc-400 text-sm font-mono">{project.domain}</span>
              {project.industry && (
                <span className="px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs">{project.industry}</span>
              )}
            </div>
            <h1 className="text-2xl font-bold text-white">{project.name}</h1>
            {project.objective && (
              <p className="text-zinc-500 text-sm mt-1">Objetivo: {project.objective}</p>
            )}
          </div>
          <StartAnalysisButton
            projectId={projectId}
            isRunning={isRunning}
            hasAnalysis={hasAnalysis}
          />
        </div>

        {/* ── No analysis yet ── */}
        {!hasAnalysis && !isRunning && (
          <div className="border border-dashed border-zinc-800 rounded-2xl p-12 text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-7 h-7 text-zinc-600" />
            </div>
            <h2 className="text-white font-semibold text-lg mb-2">Sin análisis todavía</h2>
            <p className="text-zinc-400 text-sm max-w-sm mx-auto mb-6">
              Inicia el primer análisis para obtener el Intelligence Score, keywords detectadas y recomendaciones de optimización.
            </p>
            <StartAnalysisButton projectId={projectId} isRunning={false} hasAnalysis={false} variant="primary" />
          </div>
        )}

        {/* ── Running Job ── */}
        {isRunning && latestJob && (
          <div className="bg-violet-500/5 border border-violet-500/20 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-violet-300 font-medium">Análisis en progreso — {latestJob.progress}%</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-1.5 mb-4">
              <div
                className="bg-violet-500 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${latestJob.progress}%` }}
              />
            </div>
            <div className="space-y-1">
              {jobLogs.slice(0, 4).map((log, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <span className={`w-1.5 h-1.5 rounded-full ${log.level === 'error' ? 'bg-red-400' : log.level === 'warn' ? 'bg-amber-400' : 'bg-emerald-400'}`} />
                  <span className="text-zinc-400">{log.message}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Dashboard Grid (when analysis exists) ── */}
        {hasAnalysis && latestScore && (
          <>
            {/* Score + Components */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
              {/* Score Card */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center justify-center">
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-4 font-mono">Intelligence Score</p>
                <ScoreRing score={latestScore.score} />
                <p className="text-zinc-500 text-xs mt-4">
                  {latestScore.score >= 70 ? '✓ Buen estado general' : latestScore.score >= 40 ? '⚠ Requiere atención' : '✕ Acción urgente'}
                </p>
                <p className="text-zinc-700 text-xs mt-1 font-mono">v{latestScore.score_version}</p>
              </div>

              {/* Score Components */}
              <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-4 font-mono">Componentes del Score</p>
                <div className="space-y-3">
                  {[
                    { label: 'SEO Técnico', value: latestScore.score_technical_seo, weight: '30%' },
                    { label: 'On-Page', value: latestScore.score_on_page, weight: '25%' },
                    { label: 'Contenido', value: latestScore.score_content, weight: '20%' },
                    { label: 'Arquitectura', value: latestScore.score_architecture, weight: '15%' },
                    { label: 'Oportunidades', value: latestScore.score_opportunity, weight: '10%' },
                  ].map(({ label, value, weight }) => {
                    const v = value ?? 0;
                    const color = v >= 70 ? 'bg-emerald-500' : v >= 40 ? 'bg-amber-500' : 'bg-red-500';
                    return (
                      <div key={label} className="flex items-center gap-3">
                        <div className="w-28 text-xs text-zinc-400 text-right flex-shrink-0">{label}</div>
                        <div className="flex-1 bg-zinc-800 rounded-full h-1.5">
                          <div className={`${color} h-1.5 rounded-full transition-all`} style={{ width: `${v}%` }} />
                        </div>
                        <div className="w-10 text-right">
                          <span className="text-white text-xs font-mono font-bold">{v}</span>
                        </div>
                        <div className="w-8 text-zinc-600 text-xs text-right">{weight}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                { label: 'Páginas analizadas', value: latestScore.pages_analyzed, icon: FileSearch, color: 'text-blue-400' },
                { label: 'Issues críticos', value: latestScore.issues_critical, icon: AlertCircle, color: 'text-red-400' },
                { label: 'Keywords detectadas', value: keywordsCount, icon: Key, color: 'text-violet-400' },
                { label: 'Oportunidades', value: latestScore.opportunities_count, icon: Lightbulb, color: 'text-amber-400' },
              ].map(({ label, value, icon: Icon, color }) => (
                <div key={label} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className={`w-4 h-4 ${color}`} />
                    <span className="text-zinc-500 text-xs">{label}</span>
                  </div>
                  <span className="text-white font-bold text-2xl font-mono">{value}</span>
                </div>
              ))}
            </div>

            {/* Recommendations + Pages */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
              {/* Top Recommendations */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-white font-medium text-sm">Recomendaciones prioritarias</p>
                  <Link
                    href={`/intelligence/${projectId}/opportunities`}
                    className="text-violet-400 hover:text-violet-300 text-xs flex items-center gap-1 transition-colors"
                  >
                    Ver todas <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                {recommendations.length === 0 ? (
                  <div className="flex items-center gap-2 text-emerald-400 text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Sin issues críticos detectados
                  </div>
                ) : (
                  <div className="space-y-2">
                    {recommendations.slice(0, 5).map((rec) => (
                      <div key={rec.id} className="flex items-start gap-3 p-3 rounded-xl bg-zinc-800/50 border border-zinc-800">
                        <PriorityBadge priority={rec.priority} />
                        <p className="text-zinc-300 text-xs flex-1 leading-relaxed">{rec.title}</p>
                        {rec.data_source === 'AI_INFERRED' && (
                          <span className="text-zinc-600 text-xs flex-shrink-0">IA</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Worst pages */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-white font-medium text-sm">Páginas a mejorar</p>
                  <Link
                    href={`/intelligence/${projectId}/pages`}
                    className="text-violet-400 hover:text-violet-300 text-xs flex items-center gap-1 transition-colors"
                  >
                    Ver todas <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                {topPages.length === 0 ? (
                  <p className="text-zinc-600 text-sm">Sin datos de páginas</p>
                ) : (
                  <div className="space-y-2">
                    {topPages.map((page, i) => {
                      const score = page.seo_score ?? 0;
                      const color = score >= 70 ? 'text-emerald-400' : score >= 40 ? 'text-amber-400' : 'text-red-400';
                      return (
                        <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-zinc-800/50 border border-zinc-800">
                          <span className={`font-mono font-bold text-sm w-8 text-right ${color}`}>{score}</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-zinc-300 text-xs truncate">{page.title || page.url}</p>
                            <p className="text-zinc-600 text-xs truncate font-mono">{page.url}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Nav to sections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {[
                { href: `/intelligence/${projectId}/pages`, icon: FileSearch, label: 'Páginas crawleadas', desc: `${latestScore.pages_analyzed} páginas analizadas` },
                { href: `/intelligence/${projectId}/keywords`, icon: Key, label: 'Keywords detectadas', desc: `${keywordsCount} keywords extraídas` },
                { href: `/intelligence/${projectId}/serp`, icon: Search, label: 'SERP & Visibilidad', desc: 'Posicionamiento google.cl' },
                { href: `/intelligence/${projectId}/pagespeed`, icon: Gauge, label: 'PageSpeed & Speed', desc: 'Core Web Vitals & Lighthouse' },
                { href: `/intelligence/${projectId}/competitors`, icon: Users, label: 'Content Gap', desc: 'Análisis de competidores' },
                { href: `/intelligence/${projectId}/opportunities`, icon: TrendingUp, label: 'Plan de oportunidades', desc: `${latestScore.opportunities_count} oportunidades` },
                { href: `/intelligence/${projectId}/report`, icon: FileText, label: 'Informe PDF Marca Blanca', desc: 'Exportación ejecutiva en PDF' },
              ].map(({ href, icon: Icon, label, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="group bg-zinc-900 border border-zinc-800 hover:border-violet-500/30 rounded-xl p-4 flex items-center gap-3 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 group-hover:bg-violet-500/10 border border-zinc-700 group-hover:border-violet-500/20 flex items-center justify-center flex-shrink-0 transition-all">
                    <Icon className="w-4.5 h-4.5 text-zinc-500 group-hover:text-violet-400 transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium">{label}</p>
                    <p className="text-zinc-500 text-xs truncate">{desc}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-zinc-700 group-hover:text-violet-400 transition-colors" />
                </Link>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
