import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Users, AlertTriangle } from 'lucide-react';
import LeadsTable from './leads-table';

export default async function LeadsPage() {
  // 1. Verificar sesión de admin
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const isAllowedAdmin =
    user?.email === 'javiermillarv@gmail.com' || user?.email?.endsWith('@webunica.cl');
  if (!user || !isAllowedAdmin) {
    redirect('/mi-cuenta');
  }

  // 2. Leer leads con el cliente Admin (bypasea RLS) — capturamos errores para no crashear
  let leads: any[] = [];
  let fetchError: string | null = null;

  try {
    const { getSupabaseAdmin } = await import('@/lib/supabase/admin');
    const supabaseAdmin = getSupabaseAdmin();
    const { data, error } = await supabaseAdmin
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(200);

    if (error) {
      fetchError = error.message;
    } else {
      leads = data || [];
    }
  } catch (err: any) {
    fetchError = err?.message || 'Error al conectar con la base de datos. Verifica que SUPABASE_SERVICE_ROLE_KEY esté configurada en Vercel.';
  }

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

        {/* Error de configuración */}
        {fetchError && (
          <div className="bg-amber-50 border border-amber-300 rounded-2xl p-6 mb-8 flex items-start gap-4">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-black text-amber-800 text-sm uppercase tracking-widest mb-1">
                Error al cargar leads
              </p>
              <p className="text-amber-700 text-sm font-medium">{fetchError}</p>
              <p className="text-amber-600 text-xs mt-2 font-medium">
                Asegúrate de que <code className="bg-amber-100 px-1 rounded">SUPABASE_SERVICE_ROLE_KEY</code> esté configurada en las variables de entorno de Vercel.
              </p>
            </div>
          </div>
        )}

        {/* Stats card */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/40 mb-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <div className="text-3xl font-black text-slate-900">{leads.length}</div>
              <div className="text-xs font-black uppercase tracking-widest text-slate-400">
                Total Leads
              </div>
            </div>
          </div>
          <div className="text-sm font-medium text-slate-500 max-w-md text-right hidden md:block">
            Escribe <strong>3 o más letras</strong> para filtrar y ver sugerencias en tiempo real.
            Haz clic en <strong>Cotizar</strong> para abrir el cotizador con los datos precargados.
          </div>
        </div>

        {/* Tabla client-side con buscador y estados */}
        <LeadsTable leads={leads} />

      </div>
    </div>
  );
}
