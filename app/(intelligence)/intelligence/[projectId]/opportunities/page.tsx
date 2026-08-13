import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Lightbulb, ArrowLeft, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

interface PageProps {
  params: Promise<{ projectId: string }>;
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
    <span className={`inline-block px-2.5 py-0.5 rounded-full border text-xs font-medium ${styles[priority] || styles.low}`}>
      {labels[priority] || priority}
    </span>
  );
}

export default async function ProjectOpportunitiesDetail({ params }: PageProps) {
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

  // Fetch recommendations
  const { data: recs } = await admin
    .from('intel_recommendations')
    .select('*')
    .eq('project_id', projectId)
    .order('priority', { ascending: true });

  const recommendations = recs || [];

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
          <span className="text-white text-sm font-medium">Plan de Oportunidades</span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-400" />
              Plan de Oportunidades y Recomendaciones ({recommendations.length})
            </h1>
            <p className="text-zinc-400 text-sm mt-1">Recomendaciones técnicas y estratégicas organizadas por impacto y prioridad.</p>
          </div>
        </div>

        {recommendations.length === 0 ? (
          <div className="border border-dashed border-zinc-800 rounded-2xl p-12 text-center text-zinc-500">
            No hay recomendaciones generadas aún. Ejecuta un análisis primero.
          </div>
        ) : (
          <div className="space-y-4">
            {recommendations.map((rec) => (
              <div key={rec.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-zinc-700 transition-colors">
                <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <PriorityBadge priority={rec.priority} />
                    <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 text-xs capitalize">
                      {rec.category}
                    </span>
                    {rec.data_source === 'AI_INFERRED' && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">
                        <Sparkles className="w-3 h-3" /> Insight IA
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-zinc-500 font-mono">
                    <span>Impacto: <strong className="text-zinc-300">{rec.impact}</strong></span>
                    <span>Esfuerzo: <strong className="text-zinc-300">{rec.effort}</strong></span>
                  </div>
                </div>

                <h3 className="text-white font-semibold text-base mb-2">{rec.title}</h3>
                <p className="text-zinc-400 text-sm mb-3 leading-relaxed">{rec.problem}</p>
                <div className="p-3 bg-zinc-950/60 rounded-xl border border-zinc-800/80 text-xs text-zinc-300">
                  <strong className="text-violet-400 block mb-1 font-mono uppercase tracking-wider text-[10px]">Recomendación:</strong>
                  {rec.recommendation}
                </div>

                {rec.affected_urls && rec.affected_urls.length > 0 && (
                  <div className="mt-3 text-xs text-zinc-500">
                    <span className="font-mono">URLs afectadas ({rec.affected_urls.length}): </span>
                    <span className="font-mono text-zinc-400 truncate inline-block max-w-full align-bottom">
                      {rec.affected_urls.slice(0, 3).join(', ')}
                      {rec.affected_urls.length > 3 ? '...' : ''}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
