import { createClient } from '@/lib/supabase/server';
import { getSupabaseAdmin } from '@/lib/supabase/admin';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import FinanzasClient from './finanzas-client';

export default async function FinanzasPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const isAdmin = user?.email === 'javiermillarv@gmail.com' || user?.email?.endsWith('@webunica.cl');
  if (!user || !isAdmin) redirect('/mi-cuenta');

  // Fetch initial data: current year gastos and ingresos
  const now = new Date();
  const year = now.getFullYear();
  const admin = getSupabaseAdmin();

  const [gastosRes, ingresosRes] = await Promise.all([
    admin.from('gastos').select('*').gte('fecha', `${year}-01-01`).lte('fecha', `${year}-12-31`).order('fecha', { ascending: false }).limit(500),
    admin.from('ingresos').select('*').gte('fecha', `${year}-01-01`).lte('fecha', `${year}-12-31`).order('fecha', { ascending: false }).limit(500),
  ]);

  const gastos = gastosRes.data ?? [];
  const ingresos = ingresosRes.data ?? [];
  const fetchError = gastosRes.error?.message || ingresosRes.error?.message || null;

  return (
    <div className="min-h-screen bg-slate-50 pt-[22vh] lg:pt-48 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Back */}
        <Link href="/admin" className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors mb-10 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver al Panel
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full text-green-700 text-[10px] font-black uppercase tracking-widest mb-6 w-fit">
            💰 Módulo Financiero
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-4">
            Gastos &{' '}
            <span className="text-green-600 italic font-serif lowercase font-light">ingresos</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl font-medium">
            Registra y analiza los movimientos financieros de Webunica. Balance mensual, historial completo y KPIs del negocio.
          </p>
        </div>

        {fetchError && (
          <div className="mb-8 p-6 bg-amber-50 border border-amber-300 rounded-2xl text-amber-800 text-sm font-medium">
            ⚠️ Error al cargar datos: {fetchError}. Verifica que las tablas <code className="font-mono bg-amber-100 px-1 rounded">gastos</code> e <code className="font-mono bg-amber-100 px-1 rounded">ingresos</code> existan en Supabase.
          </div>
        )}

        <FinanzasClient
          initialGastos={gastos}
          initialIngresos={ingresos}
          currentYear={year}
        />
      </div>
    </div>
  );
}
