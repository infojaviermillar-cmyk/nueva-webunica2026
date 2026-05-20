"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Calendar, Mail, Phone, Calculator, Search, X } from 'lucide-react';

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
  created_at: string;
}

export default function LeadsTable({ leads }: { leads: Lead[] }) {
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState<Lead | null>(null);

  // Filtra leads para el dropdown (mínimo 3 letras)
  const suggestions = useMemo(() => {
    if (query.length < 3) return [];
    const q = query.toLowerCase();
    return leads.filter(
      l =>
        l.name?.toLowerCase().includes(q) ||
        l.email?.toLowerCase().includes(q) ||
        l.phone?.toLowerCase().includes(q) ||
        l.service_interest?.toLowerCase().includes(q) ||
        l.project_type?.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query, leads]);

  // Leads que se muestran en la tabla principal
  const visibleLeads = useMemo(() => {
    if (!query || query.length < 3) return leads;
    const q = query.toLowerCase();
    return leads.filter(
      l =>
        l.name?.toLowerCase().includes(q) ||
        l.email?.toLowerCase().includes(q) ||
        l.phone?.toLowerCase().includes(q) ||
        l.service_interest?.toLowerCase().includes(q) ||
        l.project_type?.toLowerCase().includes(q)
    );
  }, [query, leads]);

  const handleSelect = (lead: Lead) => {
    setQuery(lead.name);
    setSelected(lead);
    setShowDropdown(false);
  };

  const handleClear = () => {
    setQuery('');
    setSelected(null);
    setShowDropdown(false);
  };

  return (
    <>
      {/* ── Buscador con Autocomplete ── */}
      <div className="relative w-full max-w-sm">
        <div className={`flex items-center gap-3 bg-white border-2 rounded-2xl px-4 py-3 transition-all shadow-sm ${showDropdown && query.length >= 3 && suggestions.length > 0 ? 'border-violet-500 shadow-violet-100' : 'border-slate-200'}`}>
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            type="text"
            placeholder="Buscar lead... (min. 3 letras)"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelected(null);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
            className="bg-transparent outline-none text-sm font-medium text-slate-700 placeholder:text-slate-300 flex-1 min-w-0"
          />
          {query && (
            <button onClick={handleClear} className="text-slate-300 hover:text-slate-500 transition-colors shrink-0">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Dropdown Autocomplete */}
        {showDropdown && query.length >= 3 && suggestions.length > 0 && (
          <div className="absolute top-full mt-2 left-0 right-0 bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-slate-200/80 z-50 overflow-hidden">
            {suggestions.map(lead => (
              <button
                key={lead.id}
                onMouseDown={() => handleSelect(lead)}
                className="w-full flex items-start gap-4 px-5 py-4 hover:bg-violet-50 transition-colors text-left border-b border-slate-100 last:border-0 group"
              >
                {/* Avatar inicial */}
                <div className="w-9 h-9 bg-violet-100 text-violet-700 rounded-xl flex items-center justify-center font-black text-sm shrink-0 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                  {lead.name?.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-slate-900 text-sm truncate">{lead.name}</span>
                    <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">
                      {new Date(lead.created_at).toLocaleDateString('es-CL')}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-0.5">
                    <span className="text-xs text-slate-500 truncate">{lead.email}</span>
                    {lead.phone && lead.phone !== 'EMPTY' && (
                      <span className="text-xs text-slate-400 shrink-0">{lead.phone}</span>
                    )}
                  </div>
                  {(lead.service_interest || lead.project_type) && (
                    <span className="inline-block mt-1 px-2 py-0.5 bg-violet-50 text-violet-600 rounded-full text-[10px] font-bold">
                      {lead.service_interest || lead.project_type}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Sin resultados */}
        {showDropdown && query.length >= 3 && suggestions.length === 0 && (
          <div className="absolute top-full mt-2 left-0 right-0 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 px-5 py-4 text-sm text-slate-400 font-medium text-center">
            Sin resultados para "{query}"
          </div>
        )}
      </div>

      {/* ── Contador de resultados ── */}
      {query.length >= 3 && (
        <div className="mt-2 text-xs text-slate-500 font-medium px-1">
          {visibleLeads.length} resultado{visibleLeads.length !== 1 ? 's' : ''} para <strong>"{query}"</strong>
        </div>
      )}

      {/* ── Tabla de Leads ── */}
      <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm mt-8">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <th className="p-6">Fecha</th>
                <th className="p-6">Lead</th>
                <th className="p-6">Contacto</th>
                <th className="p-6">Servicio</th>
                <th className="p-6">Mensaje</th>
                <th className="p-6 text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {visibleLeads.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-10 text-center text-slate-400 font-medium italic text-sm">
                    No se encontraron leads para "{query}".
                  </td>
                </tr>
              ) : (
                visibleLeads.map((lead) => (
                  <tr
                    key={lead.id}
                    className={`hover:bg-slate-50 transition-colors group ${selected?.id === lead.id ? 'bg-violet-50 ring-1 ring-inset ring-violet-200' : ''}`}
                  >
                    <td className="p-6 align-top">
                      <div className="flex items-center gap-2 text-sm text-slate-500 font-medium whitespace-nowrap">
                        <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                        {new Date(lead.created_at).toLocaleDateString('es-CL')}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1 ml-6">
                        {new Date(lead.created_at).toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </td>
                    <td className="p-6 align-top">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center font-black text-sm shrink-0">
                          {lead.name?.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">{lead.name}</div>
                          <div className="text-xs text-slate-500 font-medium">{lead.city || '—'}</div>
                          {lead.source && (
                            <div className="mt-1 inline-block px-2 py-0.5 bg-slate-100 text-slate-400 rounded text-[9px] font-bold uppercase tracking-widest">
                              {lead.source}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="p-6 align-top space-y-2">
                      <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                        <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                        <a href={`mailto:${lead.email}`} className="hover:text-blue-600 transition-colors truncate max-w-[180px]">
                          {lead.email}
                        </a>
                      </div>
                      {lead.phone && lead.phone !== 'EMPTY' && (
                        <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                          <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                          <a
                            href={`https://wa.me/${lead.phone?.replace(/[^0-9]/g, '')}`}
                            target="_blank" rel="noreferrer"
                            className="hover:text-emerald-600 transition-colors"
                          >
                            {lead.phone}
                          </a>
                        </div>
                      )}
                    </td>
                    <td className="p-6 align-top">
                      {(lead.service_interest || lead.project_type) && (
                        <div className="inline-block px-3 py-1 bg-violet-50 text-violet-700 rounded-full text-xs font-bold">
                          {lead.service_interest || lead.project_type}
                        </div>
                      )}
                    </td>
                    <td className="p-6 align-top max-w-[200px]">
                      {lead.message ? (
                        <p className="text-xs text-slate-500 font-medium line-clamp-2">{lead.message}</p>
                      ) : (
                        <span className="text-xs text-slate-300 font-medium italic">Sin mensaje</span>
                      )}
                    </td>
                    <td className="p-6 align-top text-right">
                      <Link
                        href={`/admin/cotizador?leadId=${lead.id}&name=${encodeURIComponent(lead.name || '')}&email=${encodeURIComponent(lead.email || '')}&phone=${encodeURIComponent(lead.phone && lead.phone !== 'EMPTY' ? lead.phone : '')}&service=${encodeURIComponent(lead.service_interest || lead.project_type || '')}`}
                        className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-violet-600 hover:scale-105 active:scale-95 transition-all shadow-lg whitespace-nowrap"
                      >
                        Cotizar
                        <Calculator className="w-4 h-4" />
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
