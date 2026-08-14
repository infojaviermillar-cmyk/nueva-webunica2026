import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, TrendingUp, ArrowLeft } from 'lucide-react';
import OpportunityCards from './opportunity-cards';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ projectId: string }>;
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

  // Fetch latest completed job
  const { data: latestJob } = await admin
    .from('intel_analysis_jobs')
    .select('id')
    .eq('project_id', projectId)
    .eq('status', 'completed')
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  // Fetch recommendations (prefer latest job if exists)
  let query = admin
    .from('intel_recommendations')
    .select('*')
    .eq('project_id', projectId);

  if (latestJob?.id) {
    query = query.eq('job_id', latestJob.id);
  }

  const { data: recs } = await query.order('priority', { ascending: true });

  // Deduplicate in memory by title or normalized title
  const rawList = recs || [];
  const seenTitles = new Set<string>();
  const recommendations = rawList.filter((r) => {
    const key = (r.title || r.recommendation || '').toLowerCase().trim();
    if (seenTitles.has(key)) return false;
    seenTitles.add(key);
    return true;
  });

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Nav */}
      <nav className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center gap-3">
          <Link
            href={`/intelligence/${projectId}`}
            className="text-zinc-500 hover:text-white transition-colors flex items-center gap-1.5 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {project.name}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-700" />
          <span className="text-white text-sm font-medium">Plan de Oportunidades</span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl font-bold text-white flex items-center gap-2 mb-1">
            <TrendingUp className="w-5 h-5 text-amber-400" />
            Plan de Oportunidades y Recomendaciones
          </h1>
          <p className="text-zinc-400 text-sm">
            Recomendaciones técnicas y estratégicas organizadas por impacto y prioridad.
          </p>
        </div>

        {recommendations.length === 0 ? (
          <div className="border border-dashed border-zinc-800 rounded-2xl p-12 text-center text-zinc-500">
            No hay recomendaciones generadas aún. Ejecuta un análisis primero.
          </div>
        ) : (
          <OpportunityCards recommendations={recommendations} />
        )}
      </main>
    </div>
  );
}
