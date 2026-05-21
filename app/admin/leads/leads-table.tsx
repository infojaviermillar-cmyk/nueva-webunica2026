"use client";

import { useState, useMemo, Fragment } from 'react';
import Link from 'next/link';
import {
  Calendar, Mail, Phone, Calculator, Search, X,
  CheckCircle2, Clock, MessageSquare, XCircle, Send, Loader2, ChevronDown,
  AlertTriangle, Plus
} from 'lucide-react';

import { Lead, LeadStatus } from '@/types/lead';
import CRMNotesPanel from '@/components/admin/crm-notes-panel';

// ── Status helpers (NO JSX at module level) ───────────────
const STATUS_META: Record<LeadStatus, { label: string; colorClass: string; bgClass: string }> = {
  new:       { label: 'Nuevo',       colorClass: 'text-blue-700',    bgClass: 'bg-blue-50 border-blue-200' },
  contacted: { label: 'En Contacto', colorClass: 'text-amber-700',   bgClass: 'bg-amber-50 border-amber-200' },
  quoted:    { label: 'Cotizado',    colorClass: 'text-violet-700',  bgClass: 'bg-violet-50 border-violet-200' },
  closed:    { label: 'Cerrado ✓',   colorClass: 'text-emerald-700', bgClass: 'bg-emerald-50 border-emerald-200' },
  lost:      { label: 'Perdido',     colorClass: 'text-slate-500',   bgClass: 'bg-slate-100 border-slate-200' },
};

const STATUS_ORDER: LeadStatus[] = ['new', 'contacted', 'quoted', 'closed', 'lost'];

function normalizeStatus(s?: string): LeadStatus {
  if (s && STATUS_ORDER.includes(s as LeadStatus)) return s as LeadStatus;
  return 'new';
}

function StatusIcon({ status }: { status: LeadStatus }) {
  const cls = 'w-3 h-3';
  if (status === 'new')       return <Clock className={cls} />;
  if (status === 'contacted') return <MessageSquare className={cls} />;
  if (status === 'quoted')    return <CheckCircle2 className={cls} />;
  if (status === 'closed')    return <CheckCircle2 className={cls} />;
  return <XCircle className={cls} />;
}

// ── StatusBadge ───────────────────────────────────────────
function StatusBadge({
  lead,
  onStatusChange,
}: {
  lead: Lead;
  onStatusChange: (id: string, status: LeadStatus) => void;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const current = normalizeStatus(lead.status);
  const meta = STATUS_META[current];

  const handleChange = async (status: LeadStatus) => {
    setOpen(false);
    setLoading(true);
    try {
      const res = await fetch('/api/leads/status', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leadId: lead.id, status }),
      });
      if (res.ok) onStatusChange(lead.id, status);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        disabled={loading}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all hover:shadow-sm ${meta.bgClass} ${meta.colorClass} ${loading ? 'opacity-50' : ''}`}
      >
        {loading ? <Loader2 className="w-3 h-3 animate-spin" /> : <StatusIcon status={current} />}
        {meta.label}
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute top-full mt-1 left-0 z-50 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden min-w-[160px]">
            {STATUS_ORDER.map(s => {
              const m = STATUS_META[s];
              return (
                <button
                  key={s}
                  onClick={() => handleChange(s)}
                  className={`w-full flex items-center gap-2 px-4 py-2.5 text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-colors text-left border-b border-slate-100 last:border-0 ${m.colorClass}`}
                >
                  <StatusIcon status={s} />
                  {m.label}
                  {current === s && <CheckCircle2 className="w-3 h-3 ml-auto text-emerald-500" />}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

// ── EmailStatus ───────────────────────────────────────────
function EmailStatus({
  lead,
  onEmailSent,
}: {
  lead: Lead;
  onEmailSent: (id: string) => void;
}) {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState('');

  const handleSend = async () => {
    setSending(true);
    setErr('');
    try {
      const res = await fetch('/api/leads/send-welcome', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leadId: lead.id }),
      });
      if (res.ok) {
        setSent(true);
        onEmailSent(lead.id);
      } else {
        const d = await res.json();
        setErr(d.error || 'Error al enviar');
      }
    } catch {
      setErr('Error de red');
    } finally {
      setSending(false);
    }
  };

  const emailSent = lead.welcome_email_sent || sent;

  if (emailSent) {
    return (
      <div className="space-y-1">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-full text-[9px] font-black uppercase tracking-widest">
          <CheckCircle2 className="w-3 h-3" />
          Enviado
        </span>
        {lead.welcome_email_sent_at && (
          <p className="text-[9px] text-slate-400 font-medium pl-1">
            {new Date(lead.welcome_email_sent_at).toLocaleDateString('es-CL')}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-1.5">
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-50 border border-red-200 text-red-600 rounded-full text-[9px] font-black uppercase tracking-widest">
        <XCircle className="w-3 h-3" />
        Sin email
      </span>
      <button
        onClick={handleSend}
        disabled={sending}
        className="flex items-center gap-1.5 px-3 py-1.5 bg-violet-600 text-white rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-violet-700 transition-all active:scale-95 disabled:opacity-50 shadow-sm"
      >
        {sending ? <Loader2 className="w-3 h-3 animate-spin" /> : <Send className="w-3 h-3" />}
        {sending ? 'Enviando...' : 'Enviar ahora'}
      </button>
      {err && <p className="text-[9px] text-red-500 font-medium">{err}</p>}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────
export default function LeadsTable({ leads: initialLeads }: { leads: Lead[] }) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<LeadStatus | 'all'>('all');
  const [expandedLeadId, setExpandedLeadId] = useState<string | null>(null);

  // Manual lead creation states
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);
  const [newLeadForm, setNewLeadForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    service_interest: 'Shopify - Tienda Completa',
    source: 'WhatsApp',
    message: '',
  });

  const handleCreateLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadForm.name || !newLeadForm.email) {
      setCreateError('Nombre y Email son campos obligatorios.');
      return;
    }
    setCreateLoading(true);
    setCreateError(null);
    try {
      const res = await fetch('/api/leads/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLeadForm),
      });
      const data = await res.json();
      if (!res.ok) {
        setCreateError(data.error || 'Error al guardar el lead');
        return;
      }
      setLeads(prev => [data.lead, ...prev]);
      setNewLeadForm({
        name: '',
        email: '',
        phone: '',
        city: '',
        service_interest: 'Shopify - Tienda Completa',
        source: 'WhatsApp',
        message: '',
      });
      setShowCreateModal(false);
    } catch (err: any) {
      setCreateError(err.message || 'Error de conexión');
    } finally {
      setCreateLoading(false);
    }
  };

  const handleStatusChange = (id: string, status: LeadStatus) => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l));
  };

  const handleEmailSent = (id: string) => {
    setLeads(prev => prev.map(l =>
      l.id === id
        ? { ...l, welcome_email_sent: true, welcome_email_sent_at: new Date().toISOString() }
        : l
    ));
  };

  const q = query.toLowerCase();

  const matchesQuery = (l: Lead) =>
    l.name?.toLowerCase().includes(q) ||
    l.email?.toLowerCase().includes(q) ||
    (l.phone ?? '').toLowerCase().includes(q) ||
    (l.service_interest ?? '').toLowerCase().includes(q) ||
    (l.project_type ?? '').toLowerCase().includes(q);

  const suggestions = useMemo(() => {
    if (query.length < 3) return [];
    return leads.filter(matchesQuery).slice(0, 8);
  }, [query, leads]);

  const visibleLeads = useMemo(() => {
    let result = leads;
    if (query.length >= 3) result = result.filter(matchesQuery);
    if (filterStatus !== 'all') result = result.filter(l => normalizeStatus(l.status) === filterStatus);
    return result;
  }, [query, leads, filterStatus]);

  // Counts by status
  const counts = useMemo(() => {
    const c: Record<string, number> = { all: leads.length };
    STATUS_ORDER.forEach(s => { c[s] = leads.filter(l => normalizeStatus(l.status) === s).length; });
    return c;
  }, [leads]);

  const handleSelect = (lead: Lead) => {
    setQuery(lead.name);
    setSelectedId(lead.id);
    setShowDropdown(false);
  };

  return (
    <>
      {/* ── Filter bar ── */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6 flex-wrap">

        {/* Status pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${filterStatus === 'all' ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'}`}
          >
            Todos ({counts.all})
          </button>
          {STATUS_ORDER.map(s => {
            const m = STATUS_META[s];
            return (
              <button
                key={s}
                onClick={() => setFilterStatus(s)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${filterStatus === s ? `${m.bgClass} ${m.colorClass} shadow-sm` : 'bg-white text-slate-400 border-slate-200 hover:border-slate-300'}`}
              >
                <StatusIcon status={s} />
                {m.label} ({counts[s] ?? 0})
              </button>
            );
          })}
        </div>

        {/* Search and Action */}
        <div className="flex items-center gap-3 w-full sm:w-auto flex-wrap sm:flex-nowrap">
          {/* Add Manual Lead */}
          <button
            onClick={() => setShowCreateModal(true)}
            className="inline-flex items-center gap-2 px-5 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-[1.03] active:scale-95 transition-all shadow-md shadow-violet-200/50 cursor-pointer whitespace-nowrap justify-center"
          >
            <Plus className="w-4 h-4" />
            Agregar Lead
          </button>

          {/* Search */}
          <div className="relative">
            <div className={`flex items-center gap-3 bg-white border-2 rounded-2xl px-4 py-3 transition-all shadow-sm ${showDropdown && suggestions.length > 0 ? 'border-violet-500' : 'border-slate-200'}`}>
              <Search className="w-4 h-4 text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="Buscar... (mín. 3 letras)"
                value={query}
                onChange={e => { setQuery(e.target.value); setSelectedId(null); setShowDropdown(true); }}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
                className="bg-transparent outline-none text-sm font-medium text-slate-700 placeholder:text-slate-300 w-48"
              />
              {query && (
                <button onClick={() => { setQuery(''); setSelectedId(null); }} className="text-slate-300 hover:text-slate-500 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

          {/* Dropdown */}
          {showDropdown && query.length >= 3 && suggestions.length > 0 && (
            <div className="absolute top-full mt-2 right-0 bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 overflow-hidden min-w-[320px]">
              {suggestions.map(lead => {
                const s = normalizeStatus(lead.status);
                const m = STATUS_META[s];
                return (
                  <button
                    key={lead.id}
                    onMouseDown={() => handleSelect(lead)}
                    className="w-full flex items-start gap-3 px-4 py-3.5 hover:bg-violet-50 transition-colors text-left border-b border-slate-100 last:border-0 group"
                  >
                    <div className="w-9 h-9 bg-violet-100 text-violet-700 rounded-xl flex items-center justify-center font-black text-sm shrink-0 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                      {(lead.name ?? '?').charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-slate-900 text-sm truncate">{lead.name}</span>
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-black border ${m.bgClass} ${m.colorClass}`}>
                          <StatusIcon status={s} />{m.label}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 truncate">{lead.email}</p>
                      <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        {lead.phone && lead.phone !== 'EMPTY' && (
                          <span className="text-xs text-slate-400">{lead.phone}</span>
                        )}
                        {(lead.service_interest ?? lead.project_type) && (
                          <span className="px-1.5 py-0.5 bg-violet-50 text-violet-600 rounded text-[9px] font-bold">
                            {lead.service_interest ?? lead.project_type}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {showDropdown && query.length >= 3 && suggestions.length === 0 && (
            <div className="absolute top-full mt-2 right-0 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 px-5 py-4 text-sm text-slate-400 font-medium text-center min-w-[240px]">
              Sin resultados para &quot;{query}&quot;
            </div>
          )}
        </div>
      </div>
    </div>

      {query.length >= 3 && (
        <p className="text-xs text-slate-500 font-medium mb-4">
          {visibleLeads.length} resultado{visibleLeads.length !== 1 ? 's' : ''} para <strong>&quot;{query}&quot;</strong>
        </p>
      )}

      {/* ── Table ── */}
      <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <th className="p-5">Fecha</th>
                <th className="p-5">Lead</th>
                <th className="p-5">Contacto</th>
                <th className="p-5">Servicio</th>
                <th className="p-5">Estado</th>
                <th className="p-5">Bienvenida</th>
                <th className="p-5 text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {visibleLeads.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-10 text-center text-slate-400 font-medium italic text-sm">
                    {query.length >= 3
                      ? `Sin resultados para "${query}".`
                      : filterStatus !== 'all'
                        ? `No hay leads con estado "${STATUS_META[filterStatus].label}".`
                        : 'No hay leads registrados aún.'}
                  </td>
                </tr>
              ) : (
                visibleLeads.map(lead => {
                  const isExpanded = expandedLeadId === lead.id;
                  return (
                    <Fragment key={lead.id}>
                      <tr
                        className={`hover:bg-slate-50/80 transition-colors ${selectedId === lead.id || isExpanded ? 'bg-violet-50/20' : ''}`}
                      >
                        {/* Fecha */}
                        <td className="p-5 align-top whitespace-nowrap">
                          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                            <Calendar className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                            {new Date(lead.created_at).toLocaleDateString('es-CL')}
                          </div>
                          <div className="text-[10px] text-slate-400 mt-0.5 ml-5">
                            {new Date(lead.created_at).toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </td>

                        {/* Lead */}
                        <td className="p-5 align-top">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center font-black text-sm shrink-0">
                              {(lead.name ?? '?').charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <div className="font-bold text-slate-900 text-sm">{lead.name}</div>
                              <div className="text-xs text-slate-400 font-medium">{lead.city ?? '—'}</div>
                              {(lead.source || (lead as any).source_url) && (
                                <span className="mt-1 inline-block px-2 py-0.5 bg-slate-100 text-slate-400 rounded text-[9px] font-bold uppercase tracking-widest">
                                  {lead.source || (lead as any).source_url}
                                </span>
                              )}
                            </div>
                          </div>
                        </td>

                        {/* Contacto */}
                        <td className="p-5 align-top space-y-1.5">
                          <div className="flex items-center gap-2">
                            <Mail className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                            <a href={`mailto:${lead.email}`} className="text-xs text-slate-600 font-medium hover:text-blue-600 transition-colors truncate max-w-[150px]">
                              {lead.email}
                            </a>
                          </div>
                          {lead.phone && lead.phone !== 'EMPTY' && (
                            <div className="flex items-center gap-2">
                              <Phone className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                              <a
                                href={`https://wa.me/${(lead.phone ?? '').replace(/[^0-9]/g, '')}`}
                                target="_blank" rel="noreferrer"
                                className="text-xs text-slate-600 font-medium hover:text-emerald-600 transition-colors"
                              >
                                {lead.phone}
                              </a>
                            </div>
                          )}
                        </td>

                        {/* Servicio */}
                        <td className="p-5 align-top max-w-[160px]">
                          {(lead.service_interest ?? lead.project_type) && (
                            <span className="inline-block px-3 py-1 bg-violet-50 text-violet-700 rounded-full text-[10px] font-black border border-violet-100">
                              {lead.service_interest ?? lead.project_type}
                            </span>
                          )}
                          {lead.message && (
                            <p className="text-[10px] text-slate-400 font-medium mt-2 line-clamp-2">{lead.message}</p>
                          )}
                        </td>

                        {/* Estado */}
                        <td className="p-5 align-top">
                          <StatusBadge lead={lead} onStatusChange={handleStatusChange} />
                        </td>

                        {/* Bienvenida */}
                        <td className="p-5 align-top">
                          <EmailStatus lead={lead} onEmailSent={handleEmailSent} />
                        </td>

                        {/* Acciones */}
                        <td className="p-5 align-top text-right">
                          <div className="flex items-center justify-end gap-2 flex-wrap">
                            <button
                              onClick={() => setExpandedLeadId(isExpanded ? null : lead.id)}
                              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${isExpanded ? 'bg-violet-600 text-white border-violet-600 shadow-sm' : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'}`}
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                              Notas
                            </button>
                            <Link
                              href={`/admin/cotizador?leadId=${lead.id}&name=${encodeURIComponent(lead.name ?? '')}&email=${encodeURIComponent(lead.email ?? '')}&phone=${encodeURIComponent(lead.phone && lead.phone !== 'EMPTY' ? lead.phone : '')}&service=${encodeURIComponent(lead.service_interest ?? lead.project_type ?? '')}`}
                              className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-violet-600 hover:scale-105 active:scale-95 transition-all shadow-lg whitespace-nowrap"
                            >
                              Cotizar
                              <Calculator className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      {isExpanded && (
                        <tr>
                          <td colSpan={7} className="bg-slate-50/50 p-6 border-b border-slate-100">
                            <CRMNotesPanel
                              lead={lead}
                              onUpdateLead={(updatedLead) => {
                                setLeads(prev => prev.map(l => l.id === updatedLead.id ? updatedLead : l));
                              }}
                            />
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── CREATE LEAD MODAL ── */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-[2rem] w-full max-w-lg border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="bg-zinc-950 px-8 py-6 text-white flex justify-between items-center shrink-0">
              <div>
                <h2 className="text-xl font-black tracking-tight flex items-center gap-2">
                  <Plus className="w-5 h-5 text-violet-400" />
                  Agregar Lead Manual
                </h2>
                <p className="text-xs text-zinc-400 font-medium mt-1">
                  Registra leads recibidos por WhatsApp, llamadas o recomendación.
                </p>
              </div>
              <button
                onClick={() => setShowCreateModal(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleCreateLead} className="flex-1 overflow-y-auto p-8 space-y-5">
              {createError && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 p-4 rounded-xl text-xs font-semibold flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0" />
                  {createError}
                </div>
              )}

              {/* Nombre & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Nombre Completo <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez"
                    value={newLeadForm.name}
                    onChange={e => setNewLeadForm({ ...newLeadForm, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200/50 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="juan@correo.com"
                    value={newLeadForm.email}
                    onChange={e => setNewLeadForm({ ...newLeadForm, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200/50 transition-all"
                  />
                </div>
              </div>

              {/* Teléfono & Ciudad */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Teléfono
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. +56 9 1234 5678"
                    value={newLeadForm.phone}
                    onChange={e => setNewLeadForm({ ...newLeadForm, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200/50 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Ciudad / Comuna
                  </label>
                  <input
                    type="text"
                    placeholder="Ej. Santiago"
                    value={newLeadForm.city}
                    onChange={e => setNewLeadForm({ ...newLeadForm, city: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200/50 transition-all"
                  />
                </div>
              </div>

              {/* Servicio de Interés */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Servicio de Interés
                </label>
                <select
                  value={newLeadForm.service_interest}
                  onChange={e => setNewLeadForm({ ...newLeadForm, service_interest: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200/50 transition-all"
                >
                  <option value="Shopify - Tienda Completa">Shopify - Tienda Completa</option>
                  <option value="WooCommerce - E-commerce Pymes">WooCommerce - E-commerce Pymes</option>
                  <option value="Next.js / SaaS Custom">Next.js / SaaS Custom</option>
                  <option value="Diseño Web Odontología">Diseño Web Odontología</option>
                  <option value="Diseño Web Inmobiliaria">Diseño Web Inmobiliaria</option>
                  <option value="E-learning Tutor LMS Pro">E-learning Tutor LMS Pro</option>
                  <option value="Capacitación Sence Pro">Capacitación Sence Pro</option>
                  <option value="Diseño Web & SEO Corporativo">Diseño Web & SEO Corporativo</option>
                  <option value="Consulta General / Otro">Consulta General / Otro</option>
                </select>
              </div>

              {/* Origen / Medio de Contacto */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Origen / Medio de Contacto
                </label>
                <select
                  value={newLeadForm.source}
                  onChange={e => setNewLeadForm({ ...newLeadForm, source: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-800 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200/50 transition-all"
                >
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Llamada Telefónica">Llamada Telefónica</option>
                  <option value="Recomendado">Recomendado</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Correo Directo">Correo Directo</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              {/* Mensaje / Requerimiento */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Mensaje / Detalles del Proyecto
                </label>
                <textarea
                  rows={3}
                  placeholder="Detalles sobre los requerimientos, presupuesto conversado o plazos..."
                  value={newLeadForm.message}
                  onChange={e => setNewLeadForm({ ...newLeadForm, message: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200/50 transition-all resize-none"
                />
              </div>

              {/* Form Actions */}
              <div className="pt-4 flex items-center justify-end gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  disabled={createLoading}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-black uppercase tracking-widest transition-colors disabled:opacity-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={createLoading}
                  className="flex items-center gap-2 px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-black uppercase tracking-widest shadow-md shadow-violet-200 transition-all disabled:opacity-50"
                >
                  {createLoading ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Guardando...
                    </>
                  ) : (
                    <>
                      Guardar Lead
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
