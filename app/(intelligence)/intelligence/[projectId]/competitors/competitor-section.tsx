'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
  Plus,
  Loader2,
  Globe,
  Play,
  Filter,
  AlertCircle,
  CheckCircle2,
  TrendingUp,
  Key,
  Search,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Target,
  Sparkles,
  Zap,
} from 'lucide-react';
import { IntelCompetitor, IntelKeywordGap } from '@/types/intelligence';

interface Props {
  projectId: string;
  initialCompetitors: IntelCompetitor[];
  initialGaps: IntelKeywordGap[];
}

const NOISE_WORDS = new Set([
  'ndash', 'mdash', 'nbsp', 'amp', 'quot', 'apos', 'middot', 'bull', 'hellip',
  'carrito', 'carrito vacío', 'vacío', 'despacho', 'región', 'país', 'país región',
  'copyright', 'derechos reservados', 'todos los derechos', 'iniciar sesión', 'cerrar sesión',
  'mi cuenta', 'menú', 'menu', 'buscar', 'filtros', 'ver más', 'ver mas',
]);

const INTENT_STYLES: Record<string, { label: string; bg: string; text: string; border: string }> = {
  transactional: {
    label: 'Transaccional',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    border: 'border-emerald-500/20',
  },
  commercial: {
    label: 'Comercial',
    bg: 'bg-violet-500/10',
    text: 'text-violet-400',
    border: 'border-violet-500/20',
  },
  informational: {
    label: 'Informativa',
    bg: 'bg-sky-500/10',
    text: 'text-sky-400',
    border: 'border-sky-500/20',
  },
  local: {
    label: 'Local',
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    border: 'border-amber-500/20',
  },
  navigational: {
    label: 'Navegacional',
    bg: 'bg-zinc-500/10',
    text: 'text-zinc-400',
    border: 'border-zinc-500/20',
  },
};

const GAP_STYLES: Record<string, { label: string; bg: string; text: string; border: string }> = {
  missing: {
    label: 'Missing (Oportunidad)',
    bg: 'bg-red-500/10',
    text: 'text-red-400',
    border: 'border-red-500/25',
  },
  weak: {
    label: 'Weak (Mejorable)',
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    border: 'border-amber-500/25',
  },
  strong: {
    label: 'Strong (Liderazgo)',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    border: 'border-emerald-500/25',
  },
  shared: {
    label: 'Shared (Competido)',
    bg: 'bg-zinc-800',
    text: 'text-zinc-400',
    border: 'border-zinc-700',
  },
};

export default function CompetitorSection({ projectId, initialCompetitors, initialGaps }: Props) {
  const router = useRouter();
  const [competitors, setCompetitors] = useState<IntelCompetitor[]>(initialCompetitors);
  const [gaps, setGaps] = useState<IntelKeywordGap[]>(initialGaps);
  const [newDomain, setNewDomain] = useState('');
  const [adding, setAdding] = useState(false);
  const [analyzingDomain, setAnalyzingDomain] = useState<string | null>(null);
  const [filterGap, setFilterGap] = useState<'all' | 'missing' | 'weak' | 'strong' | 'shared'>('all');
  const [filterIntent, setFilterIntent] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [analyzeError, setAnalyzeError] = useState('');

  const pageSize = 15;

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

      setCompetitors((prev) => [data.data.competitor, ...prev]);
      setNewDomain('');
    } catch {
      setError('Error de conexión');
    } finally {
      setAdding(false);
    }
  }

  async function handleAnalyze(domain: string) {
    setAnalyzingDomain(domain);
    setAnalyzeError('');

    try {
      const res = await fetch(`/api/intelligence/projects/${projectId}/competitors/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ competitor_domain: domain }),
      });

      const data = await res.json();
      if (!data.success) {
        setAnalyzeError(data.error || 'Error al analizar competidor');
        return;
      }

      router.refresh();
    } catch {
      setAnalyzeError('Error de conexión durante el análisis');
    } finally {
      setAnalyzingDomain(null);
    }
  }

  function handleCopy(text: string, id: string) {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }

  // Filter clean gaps (remove noise terms like ndash or cart boilerplate)
  const cleanGaps = useMemo(() => {
    return gaps.filter((g) => {
      const norm = (g.keyword_normalized || g.keyword || '').toLowerCase().trim();
      return !NOISE_WORDS.has(norm);
    });
  }, [gaps]);

  // Apply filters and search
  const filteredGaps = useMemo(() => {
    return cleanGaps.filter((g) => {
      if (filterGap !== 'all' && g.gap_type !== filterGap) return false;
      if (filterIntent !== 'all' && (g.intent || '').toLowerCase() !== filterIntent.toLowerCase()) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesKw = (g.keyword || '').toLowerCase().includes(query);
        const matchesComp = (g.competitor_domain || '').toLowerCase().includes(query);
        if (!matchesKw && !matchesComp) return false;
      }
      return true;
    });
  }, [cleanGaps, filterGap, filterIntent, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredGaps.length / pageSize) || 1;
  const paginatedGaps = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredGaps.slice(start, start + pageSize);
  }, [filteredGaps, currentPage, pageSize]);

  // Counts for KPI bar
  const missingCount = cleanGaps.filter((g) => g.gap_type === 'missing').length;
  const weakCount = cleanGaps.filter((g) => g.gap_type === 'weak').length;
  const sharedCount = cleanGaps.filter((g) => g.gap_type === 'shared').length;
  const avgOpportunity =
    cleanGaps.length > 0
      ? Math.round(cleanGaps.reduce((acc, g) => acc + g.opportunity_score, 0) / cleanGaps.length)
      : 0;

  return (
    <div className="space-y-8">
      {/* ── Add Competitor Section ── */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg">
        <h2 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
          <Globe className="w-4 h-4 text-violet-400" />
          Agregar Competidor Directo
        </h2>
        <div className="flex gap-2.5">
          <input
            type="text"
            value={newDomain}
            onChange={(e) => setNewDomain(e.target.value)}
            placeholder="ej. competidor.cl o tienda.com"
            className="flex-1 bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-2.5 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 font-mono text-sm transition-colors"
          />
          <button
            onClick={handleAddCompetitor}
            disabled={adding || !newDomain.trim()}
            className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-sm transition-colors flex items-center gap-2 shadow-md shadow-violet-600/20"
          >
            {adding ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
            Agregar
          </button>
        </div>
        {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
      </div>

      {/* ── Competitors Cards ── */}
      {competitors.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {competitors.map((comp) => {
            const isAnalyzing = analyzingDomain === comp.domain;
            return (
              <div
                key={comp.id}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col justify-between hover:border-zinc-700 transition-colors shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <Globe className="w-4 h-4 text-zinc-500 flex-shrink-0" />
                    <span className="text-white font-medium text-sm font-mono truncate">{comp.domain}</span>
                  </div>
                  {comp.last_analyzed_at && (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                      Listo
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-zinc-800 text-xs">
                  <span className="text-zinc-500 font-mono text-[11px]">
                    {comp.last_analyzed_at
                      ? `Analizado ${new Date(comp.last_analyzed_at).toLocaleDateString()}`
                      : 'Sin analizar'}
                  </span>
                  <button
                    onClick={() => handleAnalyze(comp.domain)}
                    disabled={isAnalyzing}
                    className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-violet-600 hover:text-white text-zinc-300 font-medium transition-all flex items-center gap-1.5 disabled:opacity-50"
                  >
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" /> Analizando...
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 fill-current" /> Analizar gap
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── Error Banner ── */}
      {analyzeError && (
        <div className="flex items-start gap-2 bg-red-950/40 border border-red-800/50 rounded-xl p-3 text-red-400 text-sm">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{analyzeError}</span>
        </div>
      )}

      {/* ── KPI Summary Cards ── */}
      {cleanGaps.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <Target className="w-4 h-4 text-red-400" />
              <span className="text-zinc-400 text-xs font-medium">Missing (No atacadas)</span>
            </div>
            <span className="text-2xl font-mono font-bold text-white">{missingCount}</span>
            <p className="text-[11px] text-zinc-500 mt-1">Keywords exclusivas del competidor</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4 text-amber-400" />
              <span className="text-zinc-400 text-xs font-medium">Weak (Superables)</span>
            </div>
            <span className="text-2xl font-mono font-bold text-white">{weakCount}</span>
            <p className="text-[11px] text-zinc-500 mt-1">Menor frecuencia que tu rival</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-zinc-400 text-xs font-medium">Shared (Compartidas)</span>
            </div>
            <span className="text-2xl font-mono font-bold text-white">{sharedCount}</span>
            <p className="text-[11px] text-zinc-500 mt-1">Presencia en ambos sitios</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-zinc-400 text-xs font-medium">Score Promedio</span>
            </div>
            <span className="text-2xl font-mono font-bold text-violet-300">{avgOpportunity}/100</span>
            <p className="text-[11px] text-zinc-500 mt-1">Potencial de oportunidad</p>
          </div>
        </div>
      )}

      {/* ── Content Gap Table ── */}
      <div>
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <div>
            <h2 className="text-white font-semibold text-base flex items-center gap-2">
              <Key className="w-4 h-4 text-violet-400" />
              Oportunidades de Palabras Clave (Content Gap)
            </h2>
            <p className="text-zinc-400 text-xs mt-0.5">
              Comparativa semántica de términos indexables entre tu dominio y competidores
            </p>
          </div>

          {/* Search bar */}
          <div className="relative min-w-[240px]">
            <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Buscar keyword..."
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 font-mono transition-colors"
            />
          </div>
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          {/* Gap type filters */}
          <div className="flex flex-wrap items-center gap-1.5 bg-zinc-900/80 border border-zinc-800 p-1 rounded-xl text-xs">
            {[
              { key: 'all', label: `Todas (${cleanGaps.length})` },
              { key: 'missing', label: `Missing (${missingCount})` },
              { key: 'weak', label: `Weak (${weakCount})` },
              { key: 'shared', label: `Shared (${sharedCount})` },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => {
                  setFilterGap(key as any);
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 rounded-lg transition-all text-xs ${
                  filterGap === key
                    ? 'bg-violet-600 text-white font-medium shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Intent filter */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-zinc-500 font-mono text-[11px]">Intención:</span>
            <select
              value={filterIntent}
              onChange={(e) => {
                setFilterIntent(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-lg px-2.5 py-1 text-xs focus:outline-none focus:border-violet-500 font-mono"
            >
              <option value="all">Todas las intenciones</option>
              <option value="transactional">Transaccional</option>
              <option value="commercial">Comercial</option>
              <option value="informational">Informativa</option>
              <option value="local">Local</option>
              <option value="navigational">Navegacional</option>
            </select>
          </div>
        </div>

        {cleanGaps.length === 0 ? (
          <div className="border border-dashed border-zinc-800 rounded-2xl p-12 text-center text-zinc-500 text-sm">
            Agrega un competidor y haz clic en &quot;Analizar gap&quot; para comparar contenidos.
          </div>
        ) : filteredGaps.length === 0 ? (
          <div className="border border-dashed border-zinc-800 rounded-2xl p-8 text-center text-zinc-500 text-sm">
            No se encontraron keywords con los filtros seleccionados.
          </div>
        ) : (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-950 text-zinc-400 uppercase font-mono tracking-wider border-b border-zinc-800">
                  <tr>
                    <th className="p-4 w-28">Oportunidad</th>
                    <th className="p-4">Keyword</th>
                    <th className="p-4">Tipo de Gap</th>
                    <th className="p-4">Intención</th>
                    <th className="p-4 w-60">Frecuencia Comparada</th>
                    <th className="p-4 text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
                  {paginatedGaps.map((gap) => {
                    const score = gap.opportunity_score;
                    const scoreBadge =
                      score >= 80
                        ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                        : score >= 60
                        ? 'text-amber-400 bg-amber-500/10 border-amber-500/20'
                        : 'text-zinc-400 bg-zinc-800/50 border-zinc-700';

                    const gapBadge = GAP_STYLES[gap.gap_type] || GAP_STYLES.shared;
                    const intentMeta = (gap.intent && INTENT_STYLES[gap.intent]) || {
                      label: gap.intent || 'General',
                      bg: 'bg-zinc-800',
                      text: 'text-zinc-400',
                      border: 'border-zinc-700',
                    };

                    const maxFreq = Math.max(gap.project_frequency, gap.competitor_frequency, 1);
                    const projPercent = Math.round((gap.project_frequency / maxFreq) * 100);
                    const compPercent = Math.round((gap.competitor_frequency / maxFreq) * 100);

                    return (
                      <tr key={gap.id} className="hover:bg-zinc-800/40 transition-colors group">
                        {/* Opportunity Score */}
                        <td className="p-4 font-mono font-bold">
                          <span
                            className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full border text-xs font-mono font-bold ${scoreBadge}`}
                          >
                            {score}
                          </span>
                        </td>

                        {/* Keyword */}
                        <td className="p-4">
                          <span className="font-semibold text-white text-sm block leading-snug">{gap.keyword}</span>
                        </td>

                        {/* Gap Type */}
                        <td className="p-4">
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded-full border text-[11px] font-mono font-medium ${gapBadge.bg} ${gapBadge.border} ${gapBadge.text}`}
                          >
                            {gapBadge.label}
                          </span>
                        </td>

                        {/* Intent */}
                        <td className="p-4">
                          <span
                            className={`inline-block px-2.5 py-0.5 rounded-full border text-[11px] font-medium ${intentMeta.bg} ${intentMeta.border} ${intentMeta.text}`}
                          >
                            {intentMeta.label}
                          </span>
                        </td>

                        {/* Compared Frequency Bars */}
                        <td className="p-4">
                          <div className="space-y-1.5 text-[11px] font-mono">
                            {/* Tu Sitio */}
                            <div className="flex items-center gap-2">
                              <span className="w-16 text-zinc-500 text-[10px]">Tu Sitio:</span>
                              <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-violet-500 rounded-full transition-all duration-500"
                                  style={{ width: `${Math.max(projPercent, 4)}%` }}
                                />
                              </div>
                              <span className="w-8 text-right text-zinc-300 font-semibold">
                                {gap.project_frequency}
                              </span>
                            </div>

                            {/* Competidor */}
                            <div className="flex items-center gap-2">
                              <span className="w-16 text-zinc-500 text-[10px] truncate" title={gap.competitor_domain}>
                                {gap.competitor_domain.split('.')[0]}:
                              </span>
                              <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-sky-500 rounded-full transition-all duration-500"
                                  style={{ width: `${Math.max(compPercent, 4)}%` }}
                                />
                              </div>
                              <span className="w-8 text-right text-sky-400 font-semibold">
                                {gap.competitor_frequency}
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* Copy Action */}
                        <td className="p-4 text-right">
                          <button
                            onClick={() => handleCopy(gap.keyword, gap.id)}
                            className="p-1.5 rounded-lg bg-zinc-800/60 hover:bg-zinc-700 border border-zinc-700/50 text-zinc-400 hover:text-white transition-colors"
                            title="Copiar keyword"
                          >
                            {copiedId === gap.id ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="p-4 bg-zinc-950/60 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>
                  Mostrando {(currentPage - 1) * pageSize + 1}–
                  {Math.min(currentPage * pageSize, filteredGaps.length)} de {filteredGaps.length}
                </span>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-white font-bold">
                    {currentPage} / {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, Math.min(totalPages, p + 1)))}
                    disabled={currentPage === totalPages}
                    className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
