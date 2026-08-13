import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, FileSearch, ArrowLeft, ExternalLink, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ projectId: string }>;
}

export default async function ProjectPagesDetail({ params }: PageProps) {
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

  // Fetch latest job & crawled pages
  const { data: latestJob } = await admin
    .from('intel_analysis_jobs')
    .select('id, completed_at')
    .eq('project_id', projectId)
    .eq('status', 'completed')
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  const pages = latestJob?.id
    ? (await admin
        .from('intel_crawl_pages')
        .select('*')
        .eq('job_id', latestJob.id)
        .order('seo_score', { ascending: true })).data || []
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
          <span className="text-white text-sm font-medium">Páginas crawleadas</span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <FileSearch className="w-5 h-5 text-blue-400" />
              Páginas analizadas ({pages.length})
            </h1>
            <p className="text-zinc-400 text-sm mt-1">Ordenadas por score SEO de menor a mayor.</p>
          </div>
        </div>

        {pages.length === 0 ? (
          <div className="border border-dashed border-zinc-800 rounded-2xl p-12 text-center text-zinc-500">
            No hay datos de páginas disponibles aún. Ejecuta un análisis primero.
          </div>
        ) : (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-950 text-zinc-400 uppercase font-mono tracking-wider border-b border-zinc-800">
                  <tr>
                    <th className="p-4">Score</th>
                    <th className="p-4">URL & Título</th>
                    <th className="p-4">Tipo</th>
                    <th className="p-4">Palabras</th>
                    <th className="p-4">Respuesta</th>
                    <th className="p-4">Issues</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                  {pages.map((p) => {
                    const score = p.seo_score ?? 0;
                    const scoreColor = score >= 70 ? 'text-emerald-400 bg-emerald-400/10' : score >= 40 ? 'text-amber-400 bg-amber-400/10' : 'text-red-400 bg-red-400/10';
                    const issues = (p.seo_issues as any[]) || [];

                    return (
                      <tr key={p.id} className="hover:bg-zinc-800/40 transition-colors">
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full font-mono font-bold ${scoreColor}`}>
                            {score}
                          </span>
                        </td>
                        <td className="p-4 max-w-md">
                          <div className="font-medium text-white truncate">{p.title || 'Sin título'}</div>
                          <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-violet-400 font-mono text-[11px] truncate flex items-center gap-1 mt-0.5">
                            {p.url}
                            <ExternalLink className="w-3 h-3 flex-shrink-0" />
                          </a>
                        </td>
                        <td className="p-4">
                          <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                            {p.page_type || 'general'}
                          </span>
                        </td>
                        <td className="p-4 font-mono">{p.word_count ?? 0}</td>
                        <td className="p-4 font-mono text-zinc-400">{p.response_time_ms ? `${p.response_time_ms}ms` : '—'}</td>
                        <td className="p-4">
                          {issues.length > 0 ? (
                            <span className="text-amber-400 flex items-center gap-1 font-mono">
                              <AlertTriangle className="w-3.5 h-3.5" />
                              {issues.length}
                            </span>
                          ) : (
                            <span className="text-emerald-400 flex items-center gap-1 font-mono">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              0
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
