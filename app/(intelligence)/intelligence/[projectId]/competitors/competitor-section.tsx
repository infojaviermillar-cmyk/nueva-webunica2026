'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Loader2, Globe, Play, Filter, AlertCircle, CheckCircle2, TrendingUp, Key } from 'lucide-react';
import { IntelCompetitor, IntelKeywordGap } from '@/types/intelligence';

interface Props {
  projectId: string;
  initialCompetitors: IntelCompetitor[];
  initialGaps: IntelKeywordGap[];
}

export default function CompetitorSection({ projectId, initialCompetitors, initialGaps }: Props) {
  const router = useRouter();
  const [competitors, setCompetitors] = useState<IntelCompetitor[]>(initialCompetitors);
  const [gaps, setGaps] = useState<IntelKeywordGap[]>(initialGaps);
  const [newDomain, setNewDomain] = useState('');
  const [adding, setAdding] = useState(false);
  const [analyzingDomain, setAnalyzingDomain] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'missing' | 'weak' | 'strong' | 'shared'>('all');
  const [error, setError] = useState('');

  async function handleAddCompetitor() {
    if (!newDomain.trim()) return;
    setAdding(true);
    setError('');

    try {
      const res = await fetch(`/api/intelligence/projects/${projectId}/competitors`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain: newDomain }),
      });

      const data = await res.json();
      if (!data.success) {
        setError(data.error || 'Error al agregar competidor');
        return;
      }

      setCompetitors(prev => [data.data.competitor, ...prev]);
      setNewDomain('');
    } catch {
      setError('Error de conexión');
    } finally {
      setAdding(false);
    }
  }

  async function handleAnalyze(domain: string) {
    setAnalyzingDomain(domain);
    setError('');

    try {
      const res = await fetch(`/api/intelligence/projects/${projectId}/competitors/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ competitor_domain: domain }),
      });

      const data = await res.json();
      if (!data.success) {
        setError(data.error || 'Error al analizar competidor');
        return;
      }

      router.refresh();
    } catch {
      setError('Error de conexión durante el análisis');
    } finally {
      setAnalyzingDomain(null);
    }
  }

  const filteredGaps = gaps.filter(g => filter === 'all' ? true : g.gap_type === filter);

  const missingCount = gaps.filter(g => g.gap_type === 'missing').length;
  const weakCount = gaps.filter(g => g.gap_type === 'weak').length;
  const sharedCount = gaps.filter(g => g.gap_type === 'shared').length;

  return (
    <div className="space-y-8">
      {/* Add Competitor Bar */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
        <h2 className="text-white font-semibold text-sm mb-3">Agregar Competidor</h2>
        <div className="flex gap-2">
          <input
            type="text"
            value={newDomain}
            onChange={e => setNewDomain(e.target.value)}
            placeholder="ej. competidor.cl"
            className="flex-1 bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-2.5 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 font-mono text-sm"
          />
          <button
            onClick={handleAddCompetitor}
            disabled={adding || !newDomain.trim()}
            className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-sm transition-colors flex items-center gap-2"
          >
            {adding ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
            Agregar
          </button>
        </div>
        {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
      </div>

      {/* Competitors List */}
      {competitors.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {competitors.map((comp) => {
            const isAnalyzing = analyzingDomain === comp.domain;
            return (
              <div key={comp.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-4 h-4 text-zinc-500" />
                  <span className="text-white font-medium text-sm font-mono truncate">{comp.domain}</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-zinc-800 text-xs">
                  <span className="text-zinc-500">
                    {comp.last_analyzed_at ? `Analizado` : 'Sin analizar'}
                  </span>
                  <button
                    onClick={() => handleAnalyze(comp.domain)}
                    disabled={isAnalyzing}
                    className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white font-medium transition-colors flex items-center gap-1.5"
                  >
                    {isAnalyzing ? (
                      <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Crawleando...</>
                    ) : (
                      <><Play className="w-3 h-3 fill-current" /> Analizar gap</>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Content Gap Results */}
      <div>
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <div>
            <h2 className="text-white font-semibold text-base">Oportunidades de Palabras Clave (Content Gap)</h2>
            <p className="text-zinc-500 text-xs mt-0.5">{gaps.length} keywords comparadas</p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 p-1 rounded-xl text-xs">
            {[
              { key: 'all', label: `Todas (${gaps.length})` },
              { key: 'missing', label: `Missing (${missingCount})` },
              { key: 'weak', label: `Weak (${weakCount})` },
              { key: 'shared', label: `Shared (${sharedCount})` },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key as any)}
                className={`px-3 py-1 rounded-lg transition-colors ${
                  filter === key
                    ? 'bg-violet-600 text-white font-medium'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {gaps.length === 0 ? (
          <div className="border border-dashed border-zinc-800 rounded-2xl p-12 text-center text-zinc-500 text-sm">
            Agrega un competidor y haz clic en &quot;Analizar gap&quot; para comparar contenidos.
          </div>
        ) : (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-950 text-zinc-400 uppercase font-mono tracking-wider border-b border-zinc-800">
                  <tr>
                    <th className="p-4">Oportunidad</th>
                    <th className="p-4">Keyword</th>
                    <th className="p-4">Tipo de Gap</th>
                    <th className="p-4">Intención</th>
                    <th className="p-4">Tu sitio</th>
                    <th className="p-4">Competidor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                  {filteredGaps.map((gap) => {
                    const score = gap.opportunity_score;
                    const scoreColor = score >= 75 ? 'text-emerald-400 bg-emerald-400/10' : score >= 50 ? 'text-amber-400 bg-amber-400/10' : 'text-zinc-400 bg-zinc-800';

                    const gapBadge = gap.gap_type === 'missing' ? 'bg-red-500/10 text-red-400 border-red-500/20'
                      : gap.gap_type === 'weak' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                      : gap.gap_type === 'strong' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      : 'bg-zinc-800 text-zinc-400 border-zinc-700';

                    return (
                      <tr key={gap.id} className="hover:bg-zinc-800/40 transition-colors">
                        <td className="p-4 font-mono font-bold">
                          <span className={`px-2.5 py-1 rounded-full ${scoreColor}`}>
                            {score}
                          </span>
                        </td>
                        <td className="p-4 font-medium text-white">{gap.keyword}</td>
                        <td className="p-4">
                          <span className={`px-2 py-0.5 rounded border text-[11px] font-mono capitalize ${gapBadge}`}>
                            {gap.gap_type}
                          </span>
                        </td>
                        <td className="p-4 text-zinc-400 capitalize">{gap.intent || '—'}</td>
                        <td className="p-4 font-mono">{gap.project_frequency} freq</td>
                        <td className="p-4 font-mono text-zinc-400">{gap.competitor_frequency} freq ({gap.competitor_domain})</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
