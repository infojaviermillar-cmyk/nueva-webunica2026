import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Users, Calendar, Mail, Phone, Calculator, Search } from 'lucide-react';

export default async function LeadsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const isAllowedAdmin = user?.email === 'javiermillarv@gmail.com' || user?.email?.endsWith('@webunica.cl');
  if (!user || !isAllowedAdmin) {
    redirect('/mi-cuenta');
  }

  // Fetch leads
  const { data: leads, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(50);

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
            </p>
          </div>
          
          <div className="flex items-center gap-4 bg-white p-2 rounded-full border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full">
              <Search className="w-4 h-4 text-slate-400" />
              <input type="text" placeholder="Buscar..." className="bg-transparent border-none outline-none text-sm font-medium w-32" />
            </div>
          </div>
        </div>

        {/* Status Card */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/40 mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <div className="text-3xl font-black text-slate-900">{leads?.length || 0}</div>
              <div className="text-xs font-black uppercase tracking-widest text-slate-400">Total Leads</div>
            </div>
          </div>
          <div className="text-sm font-medium text-slate-500 max-w-md text-right hidden md:block">
            Estos datos provienen de Supabase. Al hacer clic en Cotizar, pasarás los datos del lead a la herramienta de cotización.
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
                  <th className="p-6">Servicio / Origen</th>
                  <th className="p-6 text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {error ? (
                  <tr>
                    <td colSpan={5} className="p-10 text-center text-slate-500">
                      Error al cargar leads: {error.message}. Verifica que la tabla "leads" existe.
                    </td>
                  </tr>
                ) : !leads || leads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-10 text-center text-slate-500 font-medium">
                      No hay leads registrados aún.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead: any) => (
                    <tr key={lead.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="p-6 align-top">
                        <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                          <Calendar className="w-4 h-4 text-slate-400" />
                          {new Date(lead.created_at).toLocaleDateString('es-CL')}
                        </div>
                      </td>
                      <td className="p-6 align-top">
                        <div className="font-bold text-slate-900 mb-1">{lead.name}</div>
                        <div className="text-xs text-slate-500 font-medium">{lead.city || 'Sin ciudad'}</div>
                      </td>
                      <td className="p-6 align-top space-y-2">
                        <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                          <Mail className="w-4 h-4 text-slate-400" />
                          <a href={`mailto:${lead.email}`} className="hover:text-blue-600">{lead.email}</a>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                          <Phone className="w-4 h-4 text-slate-400" />
                          <a href={`https://wa.me/${lead.phone?.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="hover:text-emerald-600">{lead.phone}</a>
                        </div>
                      </td>
                      <td className="p-6 align-top">
                        <div className="inline-block px-3 py-1 bg-violet-50 text-violet-700 rounded-full text-xs font-bold mb-2">
                          {lead.service_interest || lead.project_type || 'Sin servicio especificado'}
                        </div>
                      </td>
                      <td className="p-6 align-top text-right">
                        <Link 
                          href={`/admin/cotizador?leadId=${lead.id}&name=${encodeURIComponent(lead.name)}&email=${encodeURIComponent(lead.email)}&phone=${encodeURIComponent(lead.phone || '')}`}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-violet-600 hover:scale-105 active:scale-95 transition-all shadow-lg"
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
