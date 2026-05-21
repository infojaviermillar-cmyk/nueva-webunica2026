"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Calendar, Mail, Phone, Calculator, Search, X,
  CheckCircle2, Clock, MessageSquare, XCircle, Send, Loader2, ChevronDown
} from 'lucide-react';

// ── Types ───────────────────────────────────────────────
type LeadStatus = 'new' | 'contacted' | 'quoted' | 'closed' | 'lost';

interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  city?: string;
  service_interest?: string;
  project_type?: string;
  source?: string;
  message?: string;
  status?: LeadStatus;
  welcome_email_sent?: boolean;
  welcome_email_sent_at?: string;
  created_at: string;
}

// ── Status Config ────────────────────────────────────────
const STATUS_CONFIG: Record<LeadStatus, { label: string; color: string; bg: string; icon: React.ReactNode }> = {
  new:       { label: 'Nuevo',        color: 'text-blue-700',   bg: 'bg-blue-50 border-blue-200',   icon: <Clock className="w-3 h-3" /> },
  contacted: { label: 'En Contacto',  color: 'text-amber-700',  bg: 'bg-amber-50 border-amber-200', icon: <MessageSquare className="w-3 h-3" /> },
  quoted:    { label: 'Cotizado',     color: 'text-violet-700', bg: 'bg-violet-50 border-violet-200',icon: <CheckCircle2 className="w-3 h-3" /> },
  closed:    { label: 'Cerrado ✓',    color: 'text-emerald-700',bg: 'bg-emerald-50 border-emerald-200',icon: <CheckCircle2 className="w-3 h-3" /> },
  lost:      { label: 'Perdido',      color: 'text-slate-500',  bg: 'bg-slate-100 border-slate-200', icon: <XCircle className="w-3 h-3" /> },
};

const STATUS_ORDER: LeadStatus[] = ['new', 'contacted', 'quoted', 'closed', 'lost'];

// ── StatusBadge Component ────────────────────────────────
function StatusBadge({ lead, onStatusChange }: { lead: Lead; onStatusChange: (id: string, status: LeadStatus) => void }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const current = STATUS_CONFIG[(lead.status as LeadStatus) || 'new'];

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
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        disabled={loading}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all hover:shadow-sm ${current.bg} ${current.color} ${loading ? 'opacity-50' : ''}`}
      >
        {loading ? <Loader2 className="w-3 h-3 animate-spin" /> : current.icon}
        {current.label}
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute top-full mt-1 left-0 z-50 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden min-w-[160px]">
            {STATUS_ORDER.map(s => {
              const cfg = STATUS_CONFIG[s];
              return (
                <button
                  key={s}
                  onClick={() => handleChange(s)}
                  className={`w-full flex items-center gap-2 px-4 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-colors text-left border-b border-slate-100 last:border-0 ${cfg.color}`}
                >
                  {cfg.icon}
                  {cfg.label}
                  {lead.status === s && <CheckCircle2 className="w-3 h-3 ml-auto text-emerald-500" />}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

// ── EmailStatus Component ────────────────────────────────
function EmailStatus({ lead, onEmailSent }: { lead: Lead; onEmailSent: (id: string) => void }) {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSend = async () => {
    setSending(true);
    setError('');
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
        const data = await res.json();
        setError(data.error || 'Error al enviar');
      }
    } catch {
      setError('Error de red');
    } finally {
      setSending(false);
    }
  };

  const emailSent = lead.welcome_email_sent || sent;

  if (emailSent) {
    return (
      <div className="flex items-center gap-1.5">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-full text-[9px] font-black uppercase tracking-widest">
          <CheckCircle2 className="w-3 h-3" />
          Email enviado
        </span>
        {lead.welcome_email_sent_at && (
          <span className="text-[9px] text-slate-400 font-medium">
            {new Date(lead.welcome_email_sent_at).toLocaleDateString('es-CL')}
          </span>
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
      <div>
        <button
          onClick={handleSend}
          disabled={sending}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-600 text-white rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-violet-700 transition-all active:scale-95 disabled:opacity-50 shadow-sm shadow-violet-200"
        >
          {sending ? <Loader2 className="w-3 h-3 animate-spin" /> : <Send className="w-3 h-3" />}
          {sending ? 'Enviando...' : 'Enviar ahora'}
        </button>
        {error && <p className="text-[9px] text-red-500 font-medium mt-1">{error}</p>}
      </div>
    </div>
  );
}

// ── Main LeadsTable Component ─────────────────────────────
export default function LeadsTable({ leads: initialLeads }: { leads: Lead[] }) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<LeadStatus | 'all'>('all');

  const handleStatusChange = (id: string, status: LeadStatus) => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l));
  };

  const handleEmailSent = (id: string) => {
    setLeads(prev => prev.map(l => l.id === id
      ? { ...l, welcome_email_sent: true, welcome_email_sent_at: new Date().toISOString() }
      : l
    ));
  };

  const suggestions = useMemo(() => {
    if (query.length < 3) return [];
    const q = query.toLowerCase();
    return leads.filter(l =>
      l.name?.toLowerCase().includes(q) ||
      l.email?.toLowerCase().includes(q) ||
      l.phone?.toLowerCase().includes(q) ||
      l.service_interest?.toLowerCase().includes(q) ||
      l.project_type?.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query, leads]);

  const visibleLeads = useMemo(() => {
    let result = leads;
    if (query.length >= 3) {
      const q = query.toLowerCase();
      result = result.filter(l =>
        l.name?.toLowerCase().includes(q) ||
        l.email?.toLowerCase().includes(q) ||
        l.phone?.toLowerCase().includes(q) ||
        l.service_interest?.toLowerCase().includes(q) ||
        l.project_type?.toLowerCase().includes(q)
      );
    }
    if (filterStatus !== 'all') {
      result = result.filter(l => (l.status || 'new') === filterStatus);
    }
    return result;
  }, [query, leads, filterStatus]);

  const handleSelect = (lead: Lead) => {
    setQuery(lead.name);
    setSelectedId(lead.id);
    setShowDropdown(false);
  };

  const handleClear = () => {
    setQuery('');
    setSelectedId(null);
    setShowDropdown(false);
  };

  // Counts by status
  const counts = useMemo(() => {
    const c: Record<string, number> = { all: leads.length };
    STATUS_ORDER.forEach(s => { c[s] = leads.filter(l => (l.status || 'new') === s).length; });
    return c;
  }, [leads]);

  return (
    <>
      {/* ── Filters Bar ── */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-6">
        
        {/* Status Filter Pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${filterStatus === 'all' ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'}`}
          >
            Todos ({counts.all})
          </button>
          {STATUS_ORDER.map(s => {
            const cfg = STATUS_CONFIG[s];
            return (
              <button
                key={s}
                onClick={() => setFilterStatus(s)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${filterStatus === s ? `${cfg.bg} ${cfg.color} shadow-sm` : 'bg-white text-slate-400 border-slate-200 hover:border-slate-300'}`}
              >
                {cfg.icon}{cfg.label} ({counts[s] || 0})
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="relative">
          <div className={`flex items-center gap-3 bg-white border-2 rounded-2xl px-4 py-3 transition-all shadow-sm ${showDropdown && suggestions.length > 0 ? 'border-violet-500' : 'border-slate-200'}`}>
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Buscar lead... (mín. 3 letras)"
              value={query}
              onChange={e => { setQuery(e.target.value); setSelectedId(null); setShowDropdown(true); }}
              onFocus={() => setShowDropdown(true)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
              className="bg-transparent outline-none text-sm font-medium text-slate-700 placeholder:text-slate-300 w-52"
            />
            {query && (
              <button onClick={handleClear} className="text-slate-300 hover:text-slate-500 transition-colors">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Autocomplete Dropdown */}
          {showDropdown && query.length >= 3 && suggestions.length > 0 && (
            <div className="absolute top-full mt-2 left-0 right-0 bg-white border border-slate-200 rounded-2xl shadow-2xl z-50 overflow-hidden min-w-[320px]">
              {suggestions.map(lead => {
                const statusCfg = STATUS_CONFIG[(lead.status as LeadStatus) || 'new'];
                return (
                  <button
                    key={lead.id}
                    onMouseDown={() => handleSelect(lead)}
                    className="w-full flex items-start gap-3 px-4 py-3.5 hover:bg-violet-50 transition-colors text-left border-b border-slate-100 last:border-0 group"
                  >
                    <div className="w-9 h-9 bg-violet-100 text-violet-700 rounded-xl flex items-center justify-center font-black text-sm shrink-0 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                      {lead.name?.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-slate-900 text-sm truncate">{lead.name}</span>
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-black border ${statusCfg.bg} ${statusCfg.color}`}>
                          {statusCfg.icon}{statusCfg.label}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 truncate mt-0.5">{lead.email}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        {lead.phone && lead.phone !== 'EMPTY' && (
                          <span className="text-xs text-slate-400">{lead.phone}</span>
                        )}
                        {(lead.service_interest || lead.project_type) && (
                          <span className="px-1.5 py-0.5 bg-violet-50 text-violet-600 rounded text-[9px] font-bold">
                            {lead.service_interest || lead.project_type}
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
            <div className="absolute top-full mt-2 left-0 right-0 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 px-5 py-4 text-sm text-slate-400 font-medium text-center min-w-[280px]">
              Sin resultados para "{query}"
            </div>
          )}
        </div>
      </div>

      {query.length >= 3 && (
        <p className="text-xs text-slate-500 font-medium mb-4">
          {visibleLeads.length} resultado{visibleLeads.length !== 1 ? 's' : ''} para <strong>"{query}"</strong>
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
                        ? `No hay leads con estado "${STATUS_CONFIG[filterStatus].label}".`
                        : 'No hay leads registrados aún.'}
                  </td>
                </tr>
              ) : (
                visibleLeads.map(lead => (
                  <tr
                    key={lead.id}
                    className={`hover:bg-slate-50/80 transition-colors ${selectedId === lead.id ? 'bg-violet-50/60 ring-1 ring-inset ring-violet-200' : ''}`}
                  >
                    {/* Fecha */}
                    <td className="p-5 align-top">
                      <div className="flex items-center gap-2 text-sm text-slate-500 font-medium whitespace-nowrap">
                        <Calendar className="w-4 h-4 text-slate-300 shrink-0" />
                        {new Date(lead.created_at).toLocaleDateString('es-CL')}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5 ml-6">
                        {new Date(lead.created_at).toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </td>

                    {/* Lead */}
                    <td className="p-5 align-top">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center font-black text-sm shrink-0">
                          {lead.name?.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-sm">{lead.name}</div>
                          <div className="text-xs text-slate-400 font-medium">{lead.city || '—'}</div>
                          {lead.source && (
                            <div className="mt-1 inline-block px-2 py-0.5 bg-slate-100 text-slate-400 rounded text-[9px] font-bold uppercase tracking-widest">
                              {lead.source}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Contacto */}
                    <td className="p-5 align-top space-y-1.5">
                      <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                        <Mail className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                        <a href={`mailto:${lead.email}`} className="hover:text-blue-600 transition-colors truncate max-w-[160px] text-xs">
                          {lead.email}
                        </a>
                      </div>
                      {lead.phone && lead.phone !== 'EMPTY' && (
                        <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                          <Phone className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                          <a
                            href={`https://wa.me/${lead.phone?.replace(/[^0-9]/g, '')}`}
                            target="_blank" rel="noreferrer"
                            className="hover:text-emerald-600 transition-colors text-xs"
                          >
                            {lead.phone}
                          </a>
                        </div>
                      )}
                    </td>

                    {/* Servicio */}
                    <td className="p-5 align-top">
                      {(lead.service_interest || lead.project_type) && (
                        <div className="inline-block px-3 py-1 bg-violet-50 text-violet-700 rounded-full text-[10px] font-black border border-violet-100">
                          {lead.service_interest || lead.project_type}
                        </div>
                      )}
                      {lead.message && (
                        <p className="text-[10px] text-slate-400 font-medium mt-2 max-w-[140px] line-clamp-2">{lead.message}</p>
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

                    {/* Acción */}
                    <td className="p-5 align-top text-right">
                      <Link
                        href={`/admin/cotizador?leadId=${lead.id}&name=${encodeURIComponent(lead.name || '')}&email=${encodeURIComponent(lead.email || '')}&phone=${encodeURIComponent(lead.phone && lead.phone !== 'EMPTY' ? lead.phone : '')}&service=${encodeURIComponent(lead.service_interest || lead.project_type || '')}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-violet-600 hover:scale-105 active:scale-95 transition-all shadow-lg whitespace-nowrap"
                      >
                        Cotizar
                        <Calculator className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
