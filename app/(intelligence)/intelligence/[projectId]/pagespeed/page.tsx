import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronRight,
  Zap,
  Gauge,
  Smartphone,
  Monitor,
  AlertTriangle,
  Globe,
} from 'lucide-react';
import { IntelPageSpeedAudit } from '@/types/intelligence';
import AnalyzePageSpeedButton from './analyze-pagespeed-button';
import PageSpeedClient from './pagespeed-client';

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
  const mobile = typed.find((a) => a.strategy === 'mobile');
  const desktop = typed.find((a) => a.strategy === 'desktop');

  const { intel_organizations: _, ...cleanProject } = project as any;

  return {
    project: cleanProject,
    mobile,
    desktop,
    hasAudits: typed.length > 0,
  };
}

export default async function PageSpeedPage({ params, searchParams }: PageProps) {
  const { projectId } = await params;
  const { strategy: queryStrategy } = await searchParams;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect('/login?next=/intelligence/projects');

  const data = await getPageSpeedData(projectId, user.id);
  if (!data) notFound();

  const { project, mobile, desktop, hasAudits } = data;
  const activeStrategy = queryStrategy === 'desktop' ? 'desktop' : 'mobile';
  const currentAudit = activeStrategy === 'desktop' ? desktop : mobile;

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
          <Link
            href={`/intelligence/${projectId}`}
            className="text-zinc-400 hover:text-white text-sm transition-colors truncate max-w-[160px]"
          >
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
            <p className="text-zinc-400 text-sm mt-1">
              Medición oficial basada en Google Lighthouse API (v5)
            </p>
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
              Ejecuta el análisis para medir el rendimiento móvil y de escritorio con las métricas oficiales de Google.
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
                  Medición estimada por fallback local. Para resultados exactos con la API oficial de Google, configura{' '}
                  <code className="text-amber-300 font-mono">PAGESPEED_API_KEY</code>.
                </span>
              </div>
            )}

            <PageSpeedClient audit={currentAudit} />

            {/* Back link */}
            <div className="flex justify-start mt-10">
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
