import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Desarrollo de Tiendas Shopify en Chile | Agencia Webunica',
  description: 'Agencia experta en desarrollo, diseño y migración de tiendas Shopify en Chile. Construimos E-commerce de alto rendimiento orientados a vender más.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-[20vh] pb-24 overflow-hidden">
      <section className="max-w-5xl mx-auto px-6 mb-24 text-center">
        <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
          Desarrollo de <span className="text-emerald-500 italic font-serif lowercase font-light">Tiendas Shopify</span> en Chile
        </h1>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
          No somos creadores de plantillas. Construimos infraestructuras de ventas ultra rápidas. Implementamos tu tienda en menos de 3 semanas con pasarelas locales y envíos integrados.
        </p>
        <LeadButton className="px-12 py-6 bg-emerald-600 text-white rounded-full font-black uppercase tracking-[0.15em] text-[11px] shadow-[0_0_40px_rgba(16,185,129,0.3)]">
          Cotizar mi Proyecto Shopify
        </LeadButton>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-10 bg-zinc-900 rounded-[3rem] border border-zinc-800">
          <span className="text-4xl mb-4 block">⚡</span>
          <h3 className="text-white font-bold mb-4 uppercase">Alto Rendimiento</h3>
          <p className="text-zinc-400 font-light text-sm">Tiendas optimizadas para Core Web Vitals. Menor tiempo de carga significa mayor tasa de conversión.</p>
        </div>
        <div className="p-10 bg-zinc-900 rounded-[3rem] border border-zinc-800">
          <span className="text-4xl mb-4 block">💳</span>
          <h3 className="text-white font-bold mb-4 uppercase">Integración Local</h3>
          <p className="text-zinc-400 font-light text-sm">Conectamos Mercado Pago, Flow, Shipit y Starken para que tu operación en Chile sea automática.</p>
        </div>
        <div className="p-10 bg-zinc-900 rounded-[3rem] border border-zinc-800">
          <span className="text-4xl mb-4 block">📈</span>
          <h3 className="text-white font-bold mb-4 uppercase">Diseño CRO</h3>
          <p className="text-zinc-400 font-light text-sm">Aplicamos técnicas de Optimización de Tasa de Conversión (CRO) para que el tráfico realmente compre.</p>
        </div>
      </section>
    </main>
  );
}
