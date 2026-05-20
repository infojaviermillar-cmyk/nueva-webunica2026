import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Users } from 'lucide-react';
import LeadsTable from './leads-table';

export default async function LeadsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const isAllowedAdmin =
    user?.email === 'javiermillarv@gmail.com' || user?.email?.endsWith('@webunica.cl');
  if (!user || !isAllowedAdmin) {
    redirect('/mi-cuenta');
  }

  // Usamos el cliente Admin (service role) para bypassear el RLS y leer todos los leads
  const supabaseAdmin = getSupabaseAdmin();
  const { data: leads, error } = await supabaseAdmin
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(200);

  return (
    <div className="min-h-screen bg-slate-50 pt-[22vh] lg:pt-48 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header */}
        <div className="mb-12">
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-violet-600 uppercase tracking-widest mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Panel
          </Link>
          <h1 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-4">
            Leads{' '}
            <span className="text-blue-600 italic font-serif lowercase font-light">
              Capturados
            </span>
          </h1>
          <p className="text-slate-500 font-medium max-w-xl">
            Listado de prospectos generados a través de los formularios y modales de la web.
          </p>
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
                Total Leads
              </div>
            </div>
          </div>
          <div className="text-sm font-medium text-slate-500 max-w-md text-right hidden md:block">
            Escribe <strong>3 o más letras</strong> en el buscador para filtrar y ver sugerencias en tiempo real. Haz clic en <strong>Cotizar</strong> para transferir los datos al cotizador.
          </div>
        </div>

        {/* Error state */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-2xl p-6 mb-8 font-medium text-sm">
            Error al cargar leads: {error.message}
          </div>
        )}

        {/* Client-side table with live search */}
        <LeadsTable leads={leads || []} />

      </div>
    </div>
  );
}
