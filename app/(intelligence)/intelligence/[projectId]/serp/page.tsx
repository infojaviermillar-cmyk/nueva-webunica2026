import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { redirect, notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronRight, Zap, Search, TrendingUp, TrendingDown,
  Minus, Star, MapPin, HelpCircle, ShoppingBag, Image,
  Globe, AlertTriangle, CheckCircle2, XCircle, Code2,
  ArrowUpRight, Info,
} from 'lucide-react';
import { IntelSerpRanking, IntelSchemaAudit, SerpFeature } from '@/types/intelligence';
import CheckSerpButton from './check-serp-button';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ projectId: string }>;
}

// ─── Data fetching ────────────────────────────────────────────────────────────

async function getSerpData(projectId: string, userId: string) {
  const admin = getSupabaseAdmin();

  const { data: project } = await admin
    .from('intel_projects')
    .select('*, intel_organizations!inner(owner_id)')
    .eq('id', projectId)
    .single();

  if (!project || (project as any).intel_organizations?.owner_id !== userId) return null;

  const { data: rankings } = await admin
    .from('intel_serp_rankings')
    .select('*')
    .eq('project_id', projectId)
    .order('position', { ascending: true, nullsFirst: false });

  const { data: schemaAudits } = await admin
    .from('intel_schema_audits')
    .select('*')
    .eq('project_id', projectId)
    .order('score', { ascending: false })
    .limit(30);

  const { intel_organizations: _, ...cleanProject } = project as any;
  const r = (rankings as IntelSerpRanking[] | null) ?? [];
  const s = (schemaAudits as IntelSchemaAudit[] | null) ?? [];

  const positioned = r.filter(x => x.position !== null && x.position !== undefined);
  const positionBands = {
    top3:         positioned.filter(x => (x.position ?? 99) <= 3).length,
    top10:        positioned.filter(x => (x.position ?? 99) > 3 && (x.position ?? 99) <= 10).length,
    top30:        positioned.filter(x => (x.position ?? 99) > 10 && (x.position ?? 99) <= 30).length,
    out_of_range: positioned.filter(x => (x.position ?? 99) > 30).length,
    not_found:    r.filter(x => x.position === null || x.position === undefined).length,
  };

  const withSchemas = s.filter(a => a.schemas_found.length > 0);
  const schemaSummary = {
    pages_with_schemas: withSchemas.length,
    has_local_business: s.filter(a => a.has_local_business).length,
    has_faq_page:       s.filter(a => a.has_faq_page).length,
    has_product:        s.filter(a => a.has_product).length,
    avg_score:          withSchemas.length > 0
      ? Math.round(withSchemas.reduce((acc, a) => acc + a.score, 0) / withSchemas.length)
      : 0,
  };

  const lastChecked = r[0]?.checked_at;

  return {
    project: cleanProject,
    rankings: r,
    schemaAudits: s,
    positionBands,
    schemaSummary,
    lastChecked,
    hasData: r.length > 0,
  };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function PositionDelta({ current, previous }: { current?: number; previous?: number }) {
  if (!current || !previous || current === previous) {
    return <Minus className="w-3.5 h-3.5 text-zinc-600" />;
  }
  const improved = current < previous; // posición menor = mejor
  const delta    = Math.abs(previous - current);
  return (
    <span className={`flex items-center gap-0.5 text-xs font-mono font-bold ${improved ? 'text-emerald-400' : 'text-red-400'}`}>
      {improved
        ? <TrendingUp className="w-3 h-3" />
        : <TrendingDown className="w-3 h-3" />
      }
      {delta}
    </span>
  );
}

function PositionBadge({ position }: { position?: number | null }) {
  if (!position) {
    return (
      <span className="inline-flex items-center justify-center w-12 h-6 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-500 text-xs font-mono">
        —
      </span>
    );
  }
  const color = position <= 3
    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
    : position <= 10
    ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
    : position <= 30
    ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
    : 'bg-zinc-800 border-zinc-700 text-zinc-500';

  return (
    <span className={`inline-flex items-center justify-center w-12 h-6 rounded-full border text-xs font-mono font-bold ${color}`}>
      #{position}
    </span>
  );
}

const FEATURE_CONFIG: Record<SerpFeature, { label: string; icon: React.ElementType; color: string }> = {
  featured_snippet: { label: 'Featured',    icon: Star,        color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
  people_also_ask:  { label: 'PAA',          icon: HelpCircle,  color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
  local_pack:       { label: 'Maps Pack',    icon: MapPin,      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
  shopping:         { label: 'Shopping',     icon: ShoppingBag, color: 'text-orange-400 bg-orange-500/10 border-orange-500/20' },
  image_pack:       { label: 'Images',       icon: Image,       color: 'text-pink-400 bg-pink-500/10 border-pink-500/20' },
  knowledge_panel:  { label: 'Knowledge',    icon: Info,        color: 'text-violet-400 bg-violet-500/10 border-violet-500/20' },
  video_results:    { label: 'Videos',       icon: ArrowUpRight,color: 'text-red-400 bg-red-500/10 border-red-500/20' },
  top_stories:      { label: 'Top Stories',  icon: Globe,       color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
  site_links:       { label: 'Sitelinks',    icon: Globe,       color: 'text-zinc-400 bg-zinc-800 border-zinc-700' },
};

function SerpFeatureBadge({ feature }: { feature: SerpFeature }) {
  const config = FEATURE_CONFIG[feature];
  if (!config) return null;
  const Icon = config.icon;
  return (
    <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded border text-xs ${config.color}`}>
      <Icon className="w-2.5 h-2.5" />
      {config.label}
    </span>
  );
}

function SchemaScoreBadge({ score }: { score: number }) {
  const color = score >= 70
    ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    : score >= 40
    ? 'text-amber-400 bg-amber-500/10 border-amber-500/20'
    : 'text-red-400 bg-red-500/10 border-red-500/20';
  return (
    <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl border font-mono font-bold text-sm ${color}`}>
      {score}
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function SerpPage({ params }: PageProps) {
  const { projectId } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/login?next=/intelligence/projects');

  const data = await getSerpData(projectId, user.id);
  if (!data) notFound();

  const { project, rankings, schemaAudits, positionBands, schemaSummary, lastChecked, hasData } = data;

  const rankedKeywords   = rankings.filter(r => r.position !== null && r.position !== undefined);
  const unrankedKeywords = rankings.filter(r => r.position === null || r.position === undefined);

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
            <Search className="w-3.5 h-3.5 text-violet-400" />
            <span className="text-white text-sm font-medium">SERP & Visibilidad</span>
          </div>
          <div className="ml-auto flex items-center gap-3">
            {lastChecked && (
              <span className="text-zinc-600 text-xs font-mono hidden sm:block">
                Actualizado: {new Date(lastChecked).toLocaleDateString('es-CL')}
              </span>
            )}
            <CheckSerpButton projectId={projectId} />
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* ── Header ── */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <Globe className="w-4 h-4 text-zinc-500" />
            <span className="text-zinc-400 text-sm font-mono">{project.domain}</span>
          </div>
          <h1 className="text-2xl font-bold text-white">SERP Ranking & Visibilidad Local</h1>
          <p className="text-zinc-500 text-sm mt-1">Posicionamiento en Google Chile (google.cl · es-CL)</p>

          {/* Disclaimer de datos estimados */}
          <div className="mt-3 flex items-start gap-2.5 p-3 rounded-xl bg-amber-500/5 border border-amber-500/15">
            <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
            <p className="text-amber-200/70 text-xs leading-relaxed">
              <strong className="text-amber-300">Datos estimados</strong> — Las posiciones se calculan determinísticamente
              a partir del análisis de contenido crawleado (<code className="text-amber-400/80 font-mono">ESTIMATED</code>).
              Para posiciones reales, conecta una API SERP (SerpApi / DataForSEO) desde la configuración del proyecto.
            </p>
          </div>
        </div>

        {/* ── Sin datos ── */}
        {!hasData && (
          <div className="border border-dashed border-zinc-800 rounded-2xl p-12 text-center">
            <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-4">
              <Search className="w-7 h-7 text-zinc-600" />
            </div>
            <h2 className="text-white font-semibold text-lg mb-2">Sin datos SERP todavía</h2>
            <p className="text-zinc-400 text-sm max-w-sm mx-auto mb-6">
              Presiona &ldquo;Actualizar posiciones SERP&rdquo; para estimar el posicionamiento de tus keywords.
              Asegúrate de haber ejecutado un análisis completo primero.
            </p>
            <CheckSerpButton projectId={projectId} />
          </div>
        )}

        {/* ── Con datos ── */}
        {hasData && (
          <>
            {/* ── Distribución de posiciones ── */}
            <section className="mb-8">
              <h2 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-violet-400" />
                Distribución de posiciones
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {[
                  {
                    label: 'Top 3',
                    value: positionBands.top3,
                    sublabel: 'Posiciones 1–3',
                    color: 'border-emerald-500/30 bg-emerald-500/5',
                    textColor: 'text-emerald-400',
                    icon: '🥇',
                  },
                  {
                    label: 'Top 10',
                    value: positionBands.top10,
                    sublabel: 'Posiciones 4–10',
                    color: 'border-blue-500/30 bg-blue-500/5',
                    textColor: 'text-blue-400',
                    icon: '📄',
                  },
                  {
                    label: 'Top 30',
                    value: positionBands.top30,
                    sublabel: 'Posiciones 11–30',
                    color: 'border-amber-500/30 bg-amber-500/5',
                    textColor: 'text-amber-400',
                    icon: '📊',
                  },
                  {
                    label: 'Fuera de rango',
                    value: positionBands.out_of_range,
                    sublabel: 'Posición > 30',
                    color: 'border-zinc-700 bg-zinc-900',
                    textColor: 'text-zinc-400',
                    icon: '📉',
                  },
                  {
                    label: 'Sin posición',
                    value: positionBands.not_found,
                    sublabel: 'No detectadas',
                    color: 'border-zinc-800 bg-zinc-900/50',
                    textColor: 'text-zinc-500',
                    icon: '❓',
                  },
                ].map(({ label, value, sublabel, color, textColor, icon }) => (
                  <div
                    key={label}
                    className={`border ${color} rounded-2xl p-4 flex flex-col gap-2`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg">{icon}</span>
                      <span className={`font-mono font-bold text-2xl ${textColor}`}>{value}</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{label}</p>
                      <p className="text-zinc-500 text-xs">{sublabel}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Tabla de posiciones ── */}
            {rankedKeywords.length > 0 && (
              <section className="mb-8">
                <h2 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                  <Search className="w-4 h-4 text-violet-400" />
                  Posiciones por keyword
                  <span className="text-zinc-600 font-normal">({rankedKeywords.length} keywords rankeando)</span>
                </h2>
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-zinc-800">
                          <th className="text-left text-zinc-500 text-xs uppercase tracking-widest font-medium px-4 py-3">Keyword</th>
                          <th className="text-center text-zinc-500 text-xs uppercase tracking-widest font-medium px-4 py-3 w-24">Posición</th>
                          <th className="text-center text-zinc-500 text-xs uppercase tracking-widest font-medium px-4 py-3 w-20">Delta</th>
                          <th className="text-left text-zinc-500 text-xs uppercase tracking-widest font-medium px-4 py-3">SERP Features</th>
                          <th className="text-left text-zinc-500 text-xs uppercase tracking-widest font-medium px-4 py-3 hidden md:table-cell">URL</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-800/50">
                        {rankedKeywords.map((ranking) => (
                          <tr key={ranking.id} className="hover:bg-zinc-800/30 transition-colors">
                            <td className="px-4 py-3">
                              <span className="text-zinc-200 font-medium">{ranking.keyword}</span>
                            </td>
                            <td className="px-4 py-3 text-center">
                              <PositionBadge position={ranking.position} />
                            </td>
                            <td className="px-4 py-3 text-center">
                              <div className="flex justify-center">
                                <PositionDelta
                                  current={ranking.position ?? undefined}
                                  previous={ranking.previous_position ?? undefined}
                                />
                              </div>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex flex-wrap gap-1">
                                {ranking.serp_features.length > 0
                                  ? ranking.serp_features.slice(0, 3).map(f => (
                                      <SerpFeatureBadge key={f} feature={f} />
                                    ))
                                  : <span className="text-zinc-700 text-xs">—</span>
                                }
                              </div>
                            </td>
                            <td className="px-4 py-3 hidden md:table-cell">
                              {ranking.url ? (
                                <a
                                  href={ranking.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-zinc-500 hover:text-violet-400 text-xs font-mono truncate max-w-[200px] block transition-colors"
                                >
                                  {ranking.url.replace(/^https?:\/\/[^/]+/, '')}
                                </a>
                              ) : (
                                <span className="text-zinc-700 text-xs">—</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Keywords sin ranking */}
                  {unrankedKeywords.length > 0 && (
                    <div className="border-t border-zinc-800 px-4 py-3 flex items-center gap-2 text-zinc-500 text-xs">
                      <XCircle className="w-3.5 h-3.5" />
                      {unrankedKeywords.length} keywords sin posición estimada
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* ── Auditoría Schema.org ── */}
            <section className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-white font-semibold text-sm flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-violet-400" />
                  Auditoría Schema.org
                </h2>
              </div>

              {/* Schema Summary Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {[
                  { label: 'Con schemas', value: schemaSummary.pages_with_schemas, icon: CheckCircle2, color: 'text-emerald-400' },
                  { label: 'LocalBusiness', value: schemaSummary.has_local_business, icon: MapPin, color: 'text-blue-400' },
                  { label: 'FAQPage', value: schemaSummary.has_faq_page, icon: HelpCircle, color: 'text-amber-400' },
                  { label: 'Score promedio', value: schemaSummary.avg_score, icon: Star, color: 'text-violet-400' },
                ].map(({ label, value, icon: Icon, color }) => (
                  <div key={label} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className={`w-4 h-4 ${color}`} />
                      <span className="text-zinc-500 text-xs">{label}</span>
                    </div>
                    <span className="text-white font-bold text-2xl font-mono">
                      {label === 'Score promedio' ? `${value}/100` : value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Schema Audits List */}
              {schemaAudits.length === 0 ? (
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center">
                  <Code2 className="w-8 h-8 text-zinc-600 mx-auto mb-3" />
                  <p className="text-zinc-400 text-sm">No hay datos de auditoría Schema.org.</p>
                  <p className="text-zinc-600 text-xs mt-1">Ejecuta el chequeo SERP para auditar.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {schemaAudits.slice(0, 15).map((audit) => {
                    const criticals = audit.issues.filter(i => i.severity === 'critical').length;
                    const warnings  = audit.issues.filter(i => i.severity === 'warning').length;
                    const urlPath   = audit.url.replace(/^https?:\/\/[^/]+/, '') || '/';

                    return (
                      <div
                        key={audit.id}
                        className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-xl p-4 transition-colors"
                      >
                        <div className="flex items-start gap-4">
                          <SchemaScoreBadge score={audit.score} />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <span className="text-zinc-300 text-sm font-medium font-mono truncate">
                                {urlPath}
                              </span>
                              {audit.schemas_found.length === 0 && (
                                <span className="text-xs text-zinc-600 bg-zinc-800 px-2 py-0.5 rounded">Sin schemas</span>
                              )}
                            </div>
                            {/* Schemas detectados */}
                            {audit.schemas_found.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 mb-2">
                                {audit.schemas_found.map(schema => {
                                  const schemaIcons: Record<string, { icon: React.ElementType; color: string }> = {
                                    LocalBusiness: { icon: MapPin,      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
                                    Organization:  { icon: Globe,       color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
                                    Product:       { icon: ShoppingBag, color: 'text-orange-400 bg-orange-500/10 border-orange-500/20' },
                                    FAQPage:       { icon: HelpCircle,  color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
                                    BreadcrumbList:{ icon: ChevronRight, color: 'text-zinc-400 bg-zinc-800 border-zinc-700' },
                                    WebSite:       { icon: Globe,       color: 'text-violet-400 bg-violet-500/10 border-violet-500/20' },
                                  };
                                  const cfg = schemaIcons[schema] ?? { icon: Code2, color: 'text-zinc-400 bg-zinc-800 border-zinc-700' };
                                  const Icon = cfg.icon;
                                  return (
                                    <span key={schema} className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border text-xs ${cfg.color}`}>
                                      <Icon className="w-2.5 h-2.5" />
                                      {schema}
                                    </span>
                                  );
                                })}
                              </div>
                            )}
                            {/* Issues */}
                            {audit.issues.length > 0 && (
                              <div className="space-y-1">
                                {audit.issues.slice(0, 3).map((issue, i) => (
                                  <div key={i} className="flex items-center gap-2 text-xs">
                                    {issue.severity === 'critical'
                                      ? <XCircle className="w-3 h-3 text-red-400 flex-shrink-0" />
                                      : <AlertTriangle className="w-3 h-3 text-amber-400 flex-shrink-0" />
                                    }
                                    <span className="text-zinc-400">{issue.message}</span>
                                  </div>
                                ))}
                                {audit.issues.length > 3 && (
                                  <p className="text-zinc-600 text-xs">+{audit.issues.length - 3} issues más</p>
                                )}
                              </div>
                            )}
                            {audit.issues.length === 0 && audit.schemas_found.length > 0 && (
                              <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                                <CheckCircle2 className="w-3 h-3" />
                                Sin issues detectados
                              </div>
                            )}
                          </div>
                          {/* Stats rápidos */}
                          <div className="flex flex-col items-end gap-1 flex-shrink-0">
                            {criticals > 0 && (
                              <span className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded-full">
                                {criticals} crítico{criticals !== 1 ? 's' : ''}
                              </span>
                            )}
                            {warnings > 0 && (
                              <span className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
                                {warnings} aviso{warnings !== 1 ? 's' : ''}
                              </span>
                            )}
                            {criticals === 0 && warnings === 0 && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>

            {/* ── Back to Dashboard ── */}
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
