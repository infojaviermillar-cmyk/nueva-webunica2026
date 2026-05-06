import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Top Aplicaciones Esenciales para Shopify en Chile',
  description: 'Lista de apps recomendadas para potenciar tu tienda Shopify localmente, desde facturación automática (Bsale) hasta logística (Starken).',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-[20vh] pb-24 overflow-hidden">
      <section className="max-w-5xl mx-auto px-6 mb-24 text-center">
        <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
          <span className="text-blue-500 italic font-serif lowercase font-light">Apps</span> Esenciales para Shopify
        </h1>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
          Transforma tu Shopify de una simple tienda a un verdadero sistema corporativo automatizado con nuestro stack de tecnologías chilenas.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 border border-white/10 rounded-3xl bg-zinc-900">
          <h3 className="text-white font-bold mb-2 uppercase tracking-wide">📦 Logística Local</h3>
          <p className="text-zinc-400 text-sm font-light mb-4 text-pretty">Shipit o Enviame para sincronizar guías de despacho, calcular tarifas de Starken/Chilexpress en tiempo real en el checkout y mejorar conversión.</p>
        </div>
        <div className="p-8 border border-white/10 rounded-3xl bg-zinc-900">
          <h3 className="text-white font-bold mb-2 uppercase tracking-wide">🧾 Facturación Electrónica (SII)</h3>
          <p className="text-zinc-400 text-sm font-light mb-4 text-pretty">Integraciones con Bsale, Facto o Nubox para emitir boletas y facturas de manera automática cada vez que entra un pedido.</p>
        </div>
        <div className="p-8 border border-white/10 rounded-3xl bg-zinc-900">
          <h3 className="text-white font-bold mb-2 uppercase tracking-wide">⭐️ Social Proof & Reviews</h3>
          <p className="text-zinc-400 text-sm font-light mb-4 text-pretty">Loox o Yotpo para enviar correos automáticos solicitando reviews con fotografías a cambio de descuentos futuros.</p>
        </div>
        <div className="p-8 border border-white/10 rounded-3xl bg-zinc-900">
          <h3 className="text-white font-bold mb-2 uppercase tracking-wide">✉️ Email Marketing (Klaviyo)</h3>
          <p className="text-zinc-400 text-sm font-light mb-4 text-pretty">Flujos para recuperar carritos abandonados. Klaviyo es el estándar de oro dentro del ecosistema Shopify.</p>
        </div>
      </section>
      
      <div className="text-center mt-20">
        <LeadButton className="px-12 py-6 bg-blue-600 text-white rounded-full font-black uppercase tracking-[0.15em] text-[11px]">
          Auditar mis Apps de Shopify
        </LeadButton>
      </div>
    </div>
  );
}
