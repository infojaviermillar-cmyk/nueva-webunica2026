import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Plus, BarChart3, Globe, Clock, TrendingUp, AlertCircle, ChevronRight, Zap } from 'lucide-react';
import DeleteProjectButton from './delete-project-button';

export const dynamic = 'force-dynamic';

interface ProjectWithMeta {
  id: string;
  name: string;
  domain: string;
  industry?: string;
  project_type: string;
  status: string;
  created_at: string;
  latest_job?: { status: string; progress: number; created_at: string } | null;
  latest_score?: { score: number; calculated_at: string } | null;
}

async function getProjects(userId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/intelligence/projects`, {
    headers: { Cookie: '' }, // Server component — can't pass cookies this way
    cache: 'no-store',
  }).catch(() => null);

  // Fallback: direct DB query for RSC
  const { getSupabaseAdmin } = await import('@/lib/supabase/admin');
  const admin = getSupabaseAdmin();

  const { data: orgs } = await admin
    .from('intel_organizations')
    .select('id')
    .eq('owner_id', userId)
    .limit(1)
    .single();

  if (!orgs) return { projects: [], org: null };

  const { data: projects } = await admin
    .from('intel_projects')
    .select('*')
    .eq('org_id', orgs.id)
    .neq('status', 'archived')
    .order('created_at', { ascending: false });

  const enriched = await Promise.all((projects || []).map(async (p) => {
    const { data: job } = await admin
      .from('intel_analysis_jobs')
      .select('status, progress, created_at')
      .eq('project_id', p.id)
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    const { data: score } = await admin
      .from('intel_scores')
      .select('score, calculated_at')
      .eq('project_id', p.id)
      .order('calculated_at', { ascending: false })
      .limit(1)
      .single();

    return { ...p, latest_job: job || null, latest_score: score || null };
  }));

  return { projects: enriched as ProjectWithMeta[], org: orgs };
}

function ScoreBadge({ score }: { score: number }) {
  const color = score >= 70 ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
    : score >= 40 ? 'text-amber-400 bg-amber-400/10 border-amber-400/20'
    : 'text-red-400 bg-red-400/10 border-red-400/20';
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-mono font-bold ${color}`}>
      <BarChart3 className="w-3 h-3" />
      {score}
    </span>
  );
}

function JobStatusBadge({ status, progress }: { status: string; progress: number }) {
  if (status === 'completed') return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Completado
    </span>
  );
  if (status === 'running' || status === 'pending') return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-violet-400/10 border border-violet-400/20 text-violet-400 text-xs">
      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" /> Analizando {progress}%
    </span>
  );
  if (status === 'failed') return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-400/10 border border-red-400/20 text-red-400 text-xs">
      <AlertCircle className="w-3 h-3" /> Error
    </span>
  );
  return null;
}

export default async function IntelligenceProjectsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login?next=/intelligence/projects');

  const { projects, org } = await getProjects(user.id);

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* ── Top Nav ── */}
      <nav className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white text-sm">Webunica Intelligence</span>
            <span className="text-zinc-600 text-xs ml-1">Beta</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-zinc-500 text-xs hidden sm:block">{user.email}</span>
            <Link
              href="/"
              className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              ← webunica.cl
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* ── Header ── */}
        <div className="flex items-start justify-between mb-8 gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold text-white">Proyectos</h1>
            <p className="text-zinc-400 text-sm mt-1">
              {projects.length === 0
                ? 'Crea tu primer proyecto para analizar un dominio'
                : `${projects.length} proyecto${projects.length !== 1 ? 's' : ''} activo${projects.length !== 1 ? 's' : ''}`}
            </p>
          </div>
          <Link
            href="/intelligence/projects/new"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors"
          >
            <Plus className="w-4 h-4" />
            Nuevo Proyecto
          </Link>
        </div>

        {/* ── Empty State ── */}
        {projects.length === 0 && (
          <div className="border border-dashed border-zinc-800 rounded-2xl p-12 text-center">
            <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-4">
              <Globe className="w-7 h-7 text-zinc-600" />
            </div>
            <h2 className="text-white font-semibold text-lg mb-2">Sin proyectos aún</h2>
            <p className="text-zinc-400 text-sm mb-6 max-w-sm mx-auto">
              Crea tu primer proyecto ingresando un dominio para obtener el Intelligence Score completo.
            </p>
            <Link
              href="/intelligence/projects/new"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors"
            >
              <Plus className="w-4 h-4" />
              Crear primer proyecto
            </Link>
          </div>
        )}

        {/* ── Projects Grid ── */}
        {projects.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/intelligence/${project.id}`}
                className="group block bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-violet-500/40 hover:bg-zinc-900/80 transition-all"
              >

                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-3.5 h-3.5 text-zinc-400" />
                      </div>
                      <span className="text-white font-medium text-sm truncate">{project.name}</span>
                    </div>
                    <p className="text-zinc-500 text-xs font-mono truncate">{project.domain}</p>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <DeleteProjectButton projectId={project.id} projectName={project.name} />
                    <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-violet-400 transition-colors mt-0.5" />
                  </div>
                </div>

                {/* Industry tag */}
                {project.industry && (
                  <span className="inline-block px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs mb-3">
                    {project.industry}
                  </span>
                )}

                {/* Score & Status */}
                <div className="flex items-center gap-2 flex-wrap">
                  {project.latest_score ? (
                    <ScoreBadge score={project.latest_score.score} />
                  ) : (
                    <span className="text-zinc-600 text-xs">Sin análisis</span>
                  )}
                  {project.latest_job && (
                    <JobStatusBadge
                      status={project.latest_job.status}
                      progress={project.latest_job.progress}
                    />
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center gap-1 mt-3 pt-3 border-t border-zinc-800">
                  <Clock className="w-3 h-3 text-zinc-600" />
                  <span className="text-zinc-600 text-xs">
                    {project.latest_score
                      ? `Analizado ${formatRelativeDate(project.latest_score.calculated_at)}`
                      : `Creado ${formatRelativeDate(project.created_at)}`}
                  </span>
                </div>
              </Link>
            ))}

            {/* Add project card */}
            <Link
              href="/intelligence/projects/new"
              className="group flex flex-col items-center justify-center border border-dashed border-zinc-800 rounded-2xl p-5 hover:border-violet-500/40 transition-all min-h-[160px]"
            >
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-violet-500/40 flex items-center justify-center mb-2 transition-colors">
                <Plus className="w-5 h-5 text-zinc-600 group-hover:text-violet-400 transition-colors" />
              </div>
              <span className="text-zinc-600 group-hover:text-zinc-400 text-sm transition-colors">Nuevo proyecto</span>
            </Link>
          </div>
        )}

        {/* ── Stats strip ── */}
        {projects.length > 0 && (
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Proyectos', value: projects.length, icon: Globe },
              { label: 'Analizados', value: projects.filter(p => p.latest_score).length, icon: BarChart3 },
              { label: 'Score promedio', value: projects.filter(p => p.latest_score).length > 0 ? Math.round(projects.reduce((s, p) => s + (p.latest_score?.score || 0), 0) / projects.filter(p => p.latest_score).length) : '—', icon: TrendingUp },
              { label: 'En análisis', value: projects.filter(p => p.latest_job?.status === 'running').length, icon: Zap },
            ].map(({ label, value, icon: Icon }) => (
              <div key={label} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-4 h-4 text-violet-400" />
                  <span className="text-zinc-500 text-xs">{label}</span>
                </div>
                <span className="text-white font-bold text-xl font-mono">{value}</span>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function formatRelativeDate(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return 'hoy';
  if (diffDays === 1) return 'ayer';
  if (diffDays < 7) return `hace ${diffDays} días`;
  if (diffDays < 30) return `hace ${Math.floor(diffDays / 7)} semanas`;
  return date.toLocaleDateString('es-CL', { day: 'numeric', month: 'short' });
}
