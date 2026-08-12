"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Plus, 
  Search, 
  Filter, 
  FileText, 
  ExternalLink, 
  Edit3, 
  Copy, 
  Check, 
  Sparkles, 
  Layers, 
  Clock, 
  Trash2,
  ChevronRight,
  Shield,
  ArrowUpRight
} from 'lucide-react';
import { getAllBriefs, createEmptyBrief, saveBrief } from '@/lib/brief';
import { BriefProject, BriefStatus } from '@/types/brief';

const STATUS_BADGES: Record<BriefStatus, { bg: string; text: string }> = {
  'Borrador': { bg: 'bg-zinc-100 border-zinc-200', text: 'text-zinc-700' },
  'Cliente completando': { bg: 'bg-amber-50 border-amber-200', text: 'text-amber-900' },
  'Revisión Webunica': { bg: 'bg-purple-50 border-purple-200', text: 'text-purple-900' },
  'Aprobado': { bg: 'bg-emerald-50 border-emerald-200', text: 'text-emerald-900' },
  'En diseño': { bg: 'bg-blue-50 border-blue-200', text: 'text-blue-900' },
  'Cerrado': { bg: 'bg-slate-100 border-slate-300', text: 'text-slate-600' },
};

export default function BriefsDashboardPage() {
  const router = useRouter();
  const [briefs, setBriefs] = useState<BriefProject[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('Todos');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newCompanyName, setNewCompanyName] = useState('');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      const data = await getAllBriefs();
      setBriefs(data);
    }
    loadData();
  }, []);

  const handleCreateNew = async () => {
    if (!newCompanyName.trim()) return;
    const slugToken = newCompanyName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `brief-${Date.now()}`;
    const newBrief = createEmptyBrief(newCompanyName, slugToken);
    await saveBrief(newBrief);
    setShowCreateModal(false);
    setNewCompanyName('');
    setBriefs(prev => [newBrief, ...prev]);
    router.push(`/brief/${newBrief.token}`);
  };

  const handleStatusChange = async (brief: BriefProject, newStatus: BriefStatus) => {
    const updated = { ...brief, status: newStatus };
    await saveBrief(updated);
    setBriefs(prev => prev.map(b => b.id === brief.id ? updated : b));
  };

  const handleCopyLink = (token: string) => {
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}/brief/${token}`;
      navigator.clipboard.writeText(url);
      setCopiedToken(token);
      setTimeout(() => setCopiedToken(null), 2000);
    }
  };

  const filteredBriefs = briefs.filter(b => {
    const matchesSearch = 
      (b.projectInfo?.companyName || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (b.token || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (b.projectInfo?.projectLeadName || '').toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = selectedStatus === 'Todos' || b.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-950 font-sans antialiased pb-20">
      {/* Dashboard Top Header */}
      <header className="bg-slate-950 text-white py-6 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 bg-brand-purple text-white text-[10px] font-black uppercase tracking-wider rounded-md">
                Panel Interno Webunica
              </span>
              <span className="text-purple-300 font-mono text-xs">Gestión de Descubrimiento & Briefs UX/UI</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Briefs UX/UI Ecommerce
            </h1>
          </div>

          <button
            onClick={() => setShowCreateModal(true)}
            className="px-5 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 cursor-pointer transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Crear Nuevo Brief</span>
          </button>
        </div>
      </header>

      {/* Main Panel Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Search & Filter Bar */}
        <div className="p-4 bg-white border border-zinc-200 rounded-3xl shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar proyecto, empresa o responsable..."
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-medium focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            <Filter className="w-4 h-4 text-zinc-400 shrink-0" />
            <span className="text-xs font-mono text-zinc-500 shrink-0">Filtrar:</span>
            {['Todos', 'Borrador', 'Cliente completando', 'Revisión Webunica', 'Aprobado', 'En diseño', 'Cerrado'].map(st => (
              <button
                key={st}
                onClick={() => setSelectedStatus(st)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold shrink-0 transition-all cursor-pointer ${
                  selectedStatus === st
                    ? 'bg-zinc-950 text-white shadow-xs'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Briefs Grid / Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredBriefs.length === 0 ? (
            <div className="col-span-full p-12 bg-white border border-zinc-200 rounded-3xl text-center space-y-3">
              <FileText className="w-10 h-10 text-zinc-300 mx-auto" />
              <h3 className="text-base font-bold text-zinc-900">No se encontraron briefs</h3>
              <p className="text-xs text-zinc-500">Crea un nuevo proyecto brief o cambia el filtro de búsqueda.</p>
            </div>
          ) : (
            filteredBriefs.map((brief) => {
              const badgeStyle = STATUS_BADGES[brief.status] || STATUS_BADGES['Borrador'];
              const company = brief.projectInfo?.companyName || 'Proyecto Sin Nombre';
              const lead = brief.projectInfo?.projectLeadName || 'Sin asignar';
              const type = brief.projectInfo?.projectType || 'Shopify';

              return (
                <div
                  key={brief.id}
                  className="bg-white border border-zinc-200 rounded-3xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`px-2.5 py-1 text-[10px] font-mono font-bold border rounded-lg ${badgeStyle.bg} ${badgeStyle.text}`}>
                        {brief.status}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400">
                        {new Date(brief.updatedAt).toLocaleDateString('es-CL')}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-zinc-950 tracking-tight group-hover:text-purple-700 transition-colors">
                        {company}
                      </h3>
                      <p className="text-xs text-zinc-500 font-mono">
                        Token: <code className="text-zinc-800 bg-zinc-100 px-1.5 py-0.5 rounded">{brief.token}</code>
                      </p>
                    </div>

                    <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-100 text-xs space-y-1">
                      <div className="flex justify-between text-zinc-600">
                        <span>Contacto:</span>
                        <strong className="text-zinc-900">{lead}</strong>
                      </div>
                      <div className="flex justify-between text-zinc-600">
                        <span>Tipo:</span>
                        <strong className="text-purple-700">{type}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-3 border-t border-zinc-100 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-zinc-400 text-[11px]">Cambiar Estado:</span>
                      <select
                        value={brief.status}
                        onChange={(e) => handleStatusChange(brief, e.target.value as BriefStatus)}
                        className="px-2 py-1 bg-zinc-100 border border-zinc-200 rounded-lg font-mono font-bold text-[11px] text-zinc-800 cursor-pointer"
                      >
                        <option value="Borrador">Borrador</option>
                        <option value="Cliente completando">Cliente completando</option>
                        <option value="Revisión Webunica">Revisión Webunica</option>
                        <option value="Aprobado">Aprobado</option>
                        <option value="En diseño">En diseño</option>
                        <option value="Cerrado">Cerrado</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-1">
                      <Link
                        href={`/brief/${brief.token}`}
                        className="px-2.5 py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl font-bold text-[11px] text-center flex items-center justify-center gap-1"
                      >
                        <Edit3 className="w-3.5 h-3.5 text-purple-400" />
                        <span>Editar</span>
                      </Link>

                      <Link
                        href={`/brief/${brief.token}/document`}
                        className="px-2.5 py-2 bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200 rounded-xl font-bold text-[11px] text-center flex items-center justify-center gap-1"
                      >
                        <FileText className="w-3.5 h-3.5 text-purple-600" />
                        <span>Brief</span>
                      </Link>

                      <button
                        onClick={() => handleCopyLink(brief.token)}
                        className="px-2.5 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 rounded-xl font-bold text-[11px] flex items-center justify-center gap-1 cursor-pointer"
                        title="Copiar enlace para el cliente"
                      >
                        {copiedToken === brief.token ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-zinc-500" />}
                        <span>Link</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </main>

      {/* Modal para Crear Nuevo Brief */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in duration-200">
            <h3 className="text-xl font-black text-zinc-950 tracking-tight">
              Crear Nuevo Brief UX/UI
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Ingresa el nombre de la empresa para generar un brief y su enlace de acceso único.
            </p>

            <div>
              <label className="block text-xs font-bold text-zinc-700 mb-1">Nombre de la Empresa *</label>
              <input
                type="text"
                autoFocus
                value={newCompanyName}
                onChange={(e) => setNewCompanyName(e.target.value)}
                placeholder="Ej: Calzados Gerolamo"
                className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-medium"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2.5 border border-zinc-200 text-zinc-600 font-bold text-xs rounded-xl hover:bg-zinc-50 cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleCreateNew}
                className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md cursor-pointer"
              >
                Crear & Abrir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
