import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Users, ArrowLeft, Target, TrendingUp, AlertCircle, Plus } from 'lucide-react';
import CompetitorSection from './competitor-section';

interface PageProps {
  params: Promise<{ projectId: string }>;
}

export default async function ProjectCompetitorsPage({ params }: PageProps) {
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

  // Fetch competitors
  const { data: competitors } = await admin
    .from('intel_competitors')
    .select('*')
    .eq('project_id', projectId)
    .order('created_at', { ascending: false });

  // Fetch keyword gaps
  const { data: gaps } = await admin
    .from('intel_keyword_gaps')
    .select('*')
    .eq('project_id', projectId)
    .order('opportunity_score', { ascending: false })
    .limit(100);

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
          <span className="text-white text-sm font-medium">Análisis de Competidores & Content Gap</span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-400" />
              Competidores & Brecha de Contenidos (Content Gap)
            </h1>
            <p className="text-zinc-400 text-sm mt-1">Compara las keywords de tu sitio contra competidores reales para detectar faltantes y oportunidades.</p>
          </div>
        </div>

        <CompetitorSection
          projectId={projectId}
          initialCompetitors={competitors || []}
          initialGaps={gaps || []}
        />
      </main>
    </div>
  );
}
