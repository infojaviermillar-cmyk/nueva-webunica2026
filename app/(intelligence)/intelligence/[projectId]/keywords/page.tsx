import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Key, ArrowLeft } from 'lucide-react';

interface PageProps {
  params: Promise<{ projectId: string }>;
}

export default async function ProjectKeywordsDetail({ params }: PageProps) {
  const { projectId } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login?next=/intelligence');

  const admin = getSupabaseAdmin();

  // Verify project ownership
  const { data: project } = await admin
    .from('intel_projects')
    .select('id, name, domain, intel_organizations!inner(owner_id)')
    .eq('id', projectId)
    .single();

  if (!project || (project as any).intel_organizations?.owner_id !== user.id) notFound();

  // Fetch latest job & keywords
  const { data: latestJob } = await admin
    .from('intel_analysis_jobs')
    .select('id')
    .eq('project_id', projectId)
    .eq('status', 'completed')
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  const keywords = latestJob?.id
    ? (await admin
        .from('intel_keywords')
        .select('*')
        .eq('job_id', latestJob.id)
        .order('frequency', { ascending: false })).data || []
    : [];

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Nav */}
      <nav className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link href={`/intelligence/${projectId}`} className="text-zinc-500 hover:text-white transition-colors flex items-center gap-1.5 text-sm">
            <ArrowLeft className="w-4 h-4" />
            {project.name}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-700" />
          <span className="text-white text-sm font-medium">Keywords detectadas</span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <Key className="w-5 h-5 text-violet-400" />
              Keywords detectadas ({keywords.length})
            </h1>
            <p className="text-zinc-400 text-sm mt-1">Extraídas directamente del contenido del sitio (títulos, encabezaos y URLs).</p>
          </div>
        </div>

        {keywords.length === 0 ? (
          <div className="border border-dashed border-zinc-800 rounded-2xl p-12 text-center text-zinc-500">
            No se han extraído keywords aún. Ejecuta un análisis primero.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {keywords.map((kw) => (
              <div key={kw.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-white font-medium text-sm">{kw.keyword}</span>
                    <span className="text-zinc-500 text-xs font-mono bg-zinc-800 px-2 py-0.5 rounded">
                      freq: {kw.frequency}
                    </span>
                  </div>
                  {kw.cluster && (
                    <span className="inline-block text-[11px] text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20 mb-2">
                      Cluster: {kw.cluster}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-zinc-800 text-xs text-zinc-500">
                  <span>Intent: <strong className="text-zinc-300 capitalize">{kw.intent || 'Desconocido'}</strong></span>
                  <span>{kw.pages_count} página(s)</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
