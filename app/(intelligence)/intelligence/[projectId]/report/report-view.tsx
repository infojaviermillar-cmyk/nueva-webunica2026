'use client';

import { useState } from 'react';
import { CompiledProjectReport } from '@/types/intelligence';
import ReportControls from './report-controls';
import {
  Zap, Globe, Calendar, FileSearch, Key, Search, Users,
  TrendingUp, CheckCircle2, AlertCircle, AlertTriangle, Gauge, Award, Code2, MapPin
} from 'lucide-react';
import Link from 'next/link';

interface ReportViewProps {
  report: CompiledProjectReport;
}

export default function ReportView({ report }: ReportViewProps) {
  const [config, setConfig] = useState({
    agencyName: 'Webunica Intelligence',
    clientName: '',
    hideBranding: false,
  });

  const { project, score, recommendations, keywords, competitor_gaps, serp_rankings, schema_audits, pagespeed_mobile, summary_stats } = report;

  return (
    <div className="min-h-screen bg-zinc-950 text-white print:bg-white print:text-black">
      {/* ── Nav (Oculto en Impresión) ── */}
      <nav className="print:hidden border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href={`/intelligence/${project.id}`} className="text-zinc-500 hover:text-white transition-colors">
              <Zap className="w-4 h-4 text-violet-400" />
            </Link>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400 text-sm">{project.name}</span>
            <span className="text-zinc-600">/</span>
            <span className="text-white text-sm font-medium">Informe Ejecutivo PDF</span>
          </div>

          <Link
            href={`/intelligence/${project.id}`}
            className="text-xs text-zinc-400 hover:text-white transition-colors"
          >
            Volver al proyecto
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 print:p-0 print:max-w-none">
        {/* Controles de Marca Blanca e Impresión */}
        <ReportControls onConfigChange={setConfig} />

        {/* ── INFORME IMPRIMIBLE (DOCUMENTO PRINCIPAL) ── */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 print:p-6 print:bg-white print:text-black print:border-none print:shadow-none">
          {/* Header del Reporte */}
          <header className="border-b border-zinc-800 print:border-gray-300 pb-6 mb-8 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {!config.hideBranding && (
                  <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white font-bold text-xs">
                    WI
                  </div>
                )}
                <span className="text-violet-400 print:text-violet-700 font-bold text-lg">
                  {config.agencyName || 'Webunica Intelligence'}
                </span>
              </div>
              <h1 className="text-2xl print:text-xl font-bold text-white print:text-black">
                Informe de Auditoría Digital & SEO
              </h1>
              <p className="text-zinc-400 print:text-gray-600 text-sm mt-1">
                Dominio: <span className="font-mono font-semibold text-zinc-200 print:text-black">{project.domain}</span>
              </p>
            </div>

            <div className="text-right text-xs text-zinc-400 print:text-gray-600 space-y-1">
              {config.clientName && (
                <p className="font-semibold text-zinc-200 print:text-black text-sm mb-1">
                  Cliente: {config.clientName}
                </p>
              )}
              <p className="flex items-center justify-end gap-1">
                <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                {new Date(report.generated_at).toLocaleDateString('es-CL', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
              <p className="text-zinc-600 print:text-gray-500 font-mono">ID: {project.id.slice(0, 8)}</p>
            </div>
          </header>

          {/* ── Resumen Ejecutivo (Score & Stats) ── */}
          <section className="mb-10 page-break-inside-avoid">
            <h2 className="text-xs uppercase tracking-widest font-mono text-zinc-500 print:text-gray-500 mb-4">
              1. Resumen Ejecutivo & Intelligence Score
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Score Box */}
              <div className="bg-zinc-950/60 print:bg-gray-50 border border-zinc-800 print:border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                <span className="text-zinc-400 print:text-gray-600 text-xs font-mono mb-2">INTELLIGENCE SCORE GLOBAL</span>
                <div className="text-5xl font-bold font-mono text-emerald-400 print:text-emerald-700 mb-1">
                  {score?.score ?? '—'}<span className="text-zinc-600 print:text-gray-400 text-xl font-normal">/100</span>
                </div>
                <span className="text-xs text-zinc-400 print:text-gray-600 mt-2">
                  {score && score.score >= 70 ? '✓ Estado óptimo' : '⚠ Requiere optimización'}
                </span>
              </div>

              {/* Summary Stats Grid */}
              <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { label: 'Páginas Analizadas', value: summary_stats.total_pages, icon: FileSearch, color: 'text-blue-400' },
                  { label: 'Issues Críticos', value: summary_stats.issues_critical, icon: AlertCircle, color: 'text-red-400' },
                  { label: 'Keywords Relevantes', value: summary_stats.keywords_count, icon: Key, color: 'text-violet-400' },
                  { label: 'Rankings Top 10', value: summary_stats.serp_top10_count, icon: Search, color: 'text-emerald-400' },
                  { label: 'Schemas Detectados', value: summary_stats.schemas_count, icon: Code2, color: 'text-amber-400' },
                  { label: 'Performance Mobile', value: pagespeed_mobile?.performance_score ? `${pagespeed_mobile.performance_score}/100` : '—', icon: Gauge, color: 'text-cyan-400' },
                ].map(({ label, value, icon: Icon, color }) => (
                  <div key={label} className="bg-zinc-950/60 print:bg-gray-50 border border-zinc-800 print:border-gray-200 rounded-xl p-3.5">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Icon className={`w-3.5 h-3.5 ${color}`} />
                      <span className="text-zinc-400 print:text-gray-600 text-xs truncate">{label}</span>
                    </div>
                    <span className="text-white print:text-black font-bold font-mono text-xl">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 2. Desglose de Componentes del Score ── */}
          {score?.score_components && (
            <section className="mb-10 page-break-inside-avoid">
              <h2 className="text-xs uppercase tracking-widest font-mono text-zinc-500 print:text-gray-500 mb-4">
                2. Puntuación por Pilares Técnicos
              </h2>
              <div className="space-y-3">
                {[
                  { label: 'SEO Técnico', value: score.score_technical_seo, weight: '30%' },
                  { label: 'SEO On-Page', value: score.score_on_page, weight: '25%' },
                  { label: 'Calidad de Contenido', value: score.score_content, weight: '20%' },
                  { label: 'Arquitectura Web', value: score.score_architecture, weight: '15%' },
                  { label: 'Oportunidades de Crecimiento', value: score.score_opportunity, weight: '10%' },
                ].map(({ label, value, weight }) => {
                  const v = value ?? 0;
                  const colorClass = v >= 70 ? 'bg-emerald-500' : v >= 40 ? 'bg-amber-500' : 'bg-red-500';
                  return (
                    <div key={label} className="flex items-center gap-4 bg-zinc-950/40 print:bg-gray-50 p-3 rounded-xl border border-zinc-800/60 print:border-gray-200">
                      <span className="w-44 text-xs font-medium text-zinc-300 print:text-gray-800 flex-shrink-0">{label}</span>
                      <div className="flex-1 bg-zinc-800 print:bg-gray-200 rounded-full h-2">
                        <div className={`${colorClass} h-2 rounded-full`} style={{ width: `${v}%` }} />
                      </div>
                      <span className="w-12 text-right font-mono font-bold text-sm text-white print:text-black">{v}</span>
                      <span className="w-10 text-right text-xs text-zinc-500 print:text-gray-400">{weight}</span>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* ── 3. Recomendaciones y Plan de Acción ── */}
          <section className="mb-10 page-break-inside-avoid">
            <h2 className="text-xs uppercase tracking-widest font-mono text-zinc-500 print:text-gray-500 mb-4">
              3. Matriz de Recomendaciones Prioritarias
            </h2>
            {recommendations.length === 0 ? (
              <p className="text-zinc-500 text-sm italic">Sin recomendaciones críticas pendientes.</p>
            ) : (
              <div className="space-y-2.5">
                {recommendations.slice(0, 8).map((rec) => (
                  <div key={rec.id} className="p-3.5 rounded-xl bg-zinc-950/60 print:bg-gray-50 border border-zinc-800 print:border-gray-200 flex items-start gap-3">
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold uppercase font-mono ${
                      rec.priority === 'critical' ? 'bg-red-500/20 text-red-400 print:text-red-700' : 'bg-amber-500/20 text-amber-400 print:text-amber-700'
                    }`}>
                      {rec.priority}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-white print:text-black mb-0.5">{rec.title}</h4>
                      <p className="text-xs text-zinc-400 print:text-gray-600 leading-relaxed">{rec.recommendation}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* ── 4. Posicionamiento SERP & Schemas ── */}
          <section className="mb-10 page-break-inside-avoid">
            <h2 className="text-xs uppercase tracking-widest font-mono text-zinc-500 print:text-gray-500 mb-4">
              4. Visibilidad SERP en Chile & Datos Estructurados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Top Keywords SERP */}
              <div>
                <h3 className="text-xs font-semibold text-zinc-400 print:text-gray-700 uppercase mb-3">Top Keywords Rankeadas</h3>
                <div className="bg-zinc-950/60 print:bg-gray-50 border border-zinc-800 print:border-gray-200 rounded-2xl overflow-hidden">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-zinc-800 print:border-gray-300 text-zinc-500 print:text-gray-500">
                        <th className="text-left p-2.5">Keyword</th>
                        <th className="text-center p-2.5">Posición</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/40 print:divide-gray-200">
                      {serp_rankings.slice(0, 6).map((item) => (
                        <tr key={item.id}>
                          <td className="p-2.5 text-zinc-300 print:text-gray-800 font-medium">{item.keyword}</td>
                          <td className="p-2.5 text-center font-mono font-bold text-emerald-400 print:text-emerald-700">
                            #{item.position ?? '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Content Gap Oportunidades */}
              <div>
                <h3 className="text-xs font-semibold text-zinc-400 print:text-gray-700 uppercase mb-3">Oportunidades Content Gap</h3>
                <div className="bg-zinc-950/60 print:bg-gray-50 border border-zinc-800 print:border-gray-200 rounded-2xl overflow-hidden">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-zinc-800 print:border-gray-300 text-zinc-500 print:text-gray-500">
                        <th className="text-left p-2.5">Keyword Faltante</th>
                        <th className="text-right p-2.5">Opportunity Score</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/40 print:divide-gray-200">
                      {competitor_gaps.slice(0, 6).map((gap) => (
                        <tr key={gap.id}>
                          <td className="p-2.5 text-zinc-300 print:text-gray-800">{gap.keyword}</td>
                          <td className="p-2.5 text-right font-mono font-bold text-violet-400 print:text-violet-700">
                            {gap.opportunity_score}/100
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Footer del Reporte */}
          <footer className="pt-6 border-t border-zinc-800 print:border-gray-300 flex items-center justify-between text-xs text-zinc-500 print:text-gray-500">
            <span>
              Generado por {config.agencyName || 'Webunica Intelligence'}
            </span>
            <span className="font-mono">
              Página 1 de 1
            </span>
          </footer>
        </div>
      </main>
    </div>
  );
}
