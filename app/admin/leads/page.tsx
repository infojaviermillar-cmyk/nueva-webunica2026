import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import { ArrowLeft, Users, Calendar, Mail, Phone, Calculator, Search } from 'lucide-react';
import SearchLeads from './search-leads';

export default async function LeadsPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const isAllowedAdmin = user?.email === 'javiermillarv@gmail.com' || user?.email?.endsWith('@webunica.cl');
  if (!user || !isAllowedAdmin) {
    redirect('/mi-cuenta');
  }

  const { q } = await searchParams;

  // Fetch leads with optional search filter
  let query = supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(100);

  if (q) {
    query = query.or(`name.ilike.%${q}%,email.ilike.%${q}%,phone.ilike.%${q}%,service_interest.ilike.%${q}%`);
  }

  const { data: leads, error } = await query;

  return (
    <div className="min-h-screen bg-slate-50 pt-[22vh] lg:pt-48 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div>
            <Link href="/admin" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-violet-600 uppercase tracking-widest mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Volver al Panel
            </Link>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-4">
              Leads <span className="text-blue-600 italic font-serif lowercase font-light">Capturados</span>
            </h1>
            <p className="text-slate-500 font-medium max-w-xl">
              Listado de prospectos generados a través de los formularios y modales de la web.
              {q && <span className="ml-2 px-2 py-0.5 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">Filtrado: "{q}"</span>}
            </p>
          </div>
          
          <Suspense fallback={<div className="w-48 h-12 bg-slate-100 rounded-full animate-pulse" />}>
            <SearchLeads />
          </Suspense>
        </div>

        {/* Status Card */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/40 mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <div className="text-3xl font-black text-slate-900">{leads?.length || 0}</div>
              <div className="text-xs font-black uppercase tracking-widest text-slate-400">
                {q ? 'Resultados encontrados' : 'Total Leads'}
              </div>
            </div>
          </div>
          <div className="text-sm font-medium text-slate-500 max-w-md text-right hidden md:block">
            Al hacer clic en <strong>Cotizar</strong>, los datos del lead se transfieren automáticamente al cotizador interno.
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm">
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
                {error ? (
                  <tr>
                    <td colSpan={6} className="p-10 text-center text-slate-500">
                      Error al cargar leads: {error.message}
                    </td>
                  </tr>
                ) : !leads || leads.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-10 text-center text-slate-500 font-medium">
                      {q ? `No se encontraron leads que coincidan con "${q}".` : 'No hay leads registrados aún.'}
                    </td>
                  </tr>
                ) : (
                  leads.map((lead: any) => (
                    <tr key={lead.id} className="hover:bg-slate-50 transition-colors group">
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
                        <div className="font-bold text-slate-900 mb-1">{lead.name}</div>
                        <div className="text-xs text-slate-500 font-medium">{lead.city || '—'}</div>
                        {lead.source && (
                          <div className="mt-1 inline-block px-2 py-0.5 bg-slate-100 text-slate-400 rounded text-[9px] font-bold uppercase tracking-widest">
                            {lead.source}
                          </div>
                        )}
                      </td>
                      <td className="p-6 align-top space-y-2">
                        <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                          <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                          <a href={`mailto:${lead.email}`} className="hover:text-blue-600 transition-colors">{lead.email}</a>
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
                          className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-violet-600 hover:scale-105 active:scale-95 transition-all shadow-lg whitespace-nowrap"
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

      </div>
    </div>
  );
}
