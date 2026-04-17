import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { promises as fs } from 'fs';
import path from 'path';
import ChecklistClient from '@/components/ui/checklist-client';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Lock, Zap } from 'lucide-react';

export const metadata = {
  title: 'Checklist Shopify CRO PRO | WebUnica',
  description: 'Auditoría interactiva avanzada de conversión para tiendas Shopify.'
};

export default async function ChecklistProPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Route protected by middleware

  // Simulación de acceso PRO: En producción se debe verificar en base de datos si el usuario tiene una suscripción/compra activa
  const isPaid = searchParams?.token === 'acceso-pro';

  if (!isPaid) {
    return (
      <>
        <Header />
        <div className="bg-slate-50 min-h-screen pt-40 pb-20 flex items-center justify-center px-4">
          <div className="max-w-2xl w-full bg-white rounded-3xl p-10 md:p-14 text-center shadow-2xl border border-amber-100">
            <div className="w-20 h-20 bg-amber-100 text-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner rotate-3">
              <Lock className="w-10 h-10" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">
              Auditoría CRO <span className="text-amber-500">PRO</span>
            </h1>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed text-pretty">
              Accede a la lista de verificación más rigurosa para optimizar tus conversiones. Descubre fugas avanzadas de rentabilidad, evalúa retención, embudos de carrito y microconversiones para escalar tu tienda Shopify al siguiente nivel.
            </p>
            
            <form action="/api/flow/checkout" method="POST">
              <button className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20 inline-flex items-center justify-center gap-3">
                <Zap className="w-5 h-5" />
                Desbloquear por $10.000
              </button>
            </form>
            <p className="text-xs text-slate-400 mt-6 font-medium uppercase tracking-widest flex items-center justify-center gap-2">
              Pago 100% Seguro vía Flow (Webpay)
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Si pagó, muestra la checklist completa
  const filePath = path.join(process.cwd(), 'public', 'listas-de-verificacion-shopify-cro-pro.txt');
  let rawText = '';
  try {
    rawText = await fs.readFile(filePath, 'utf8');
  } catch (e) {
    rawText = 'Error cargando la lista. Verifica que el archivo exista en public.';
  }

  return (
    <>
      <Header />
      <div className="bg-slate-50 min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6 mb-8 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-bold text-xs uppercase tracking-widest mb-4">
                <Zap className="w-4 h-4" /> Acceso PRO Desbloqueado
            </span>
        </div>
        <ChecklistClient 
          title="Auditoría CRO Avanzada (PRO)"
          description="Evalúa más de 120 puntos críticos comerciales y técnicos de tu tienda. Completa cada paso y lleva tus ventas al máximo."
          rawText={rawText}
          storageKey="checklist-cro-pro-webunica"
        />
      </div>
      <Footer />
    </>
  );
}
