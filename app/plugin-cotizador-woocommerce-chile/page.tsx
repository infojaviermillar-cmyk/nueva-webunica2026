import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Cotizador B2B para WooCommerce en Chile',
  description: 'Desarrollamos o integramos plugins de "Quotation" en WooCommerce. Oculta precios a clientes no registrados y permite negociaciones de volumen.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-[20vh] pb-24 overflow-hidden">
      <section className="max-w-5xl mx-auto px-6 mb-24 text-center">
        <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
          Sistemas <span className="text-indigo-500 italic font-serif lowercase font-light px-2">Cotizadores</span> B2B en WooCommerce
        </h1>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
          En el mercado B2B (empresas vendiendo a empresas), las transacciones no siempre son "añadir al carrito y pagar". Tus clientes requieren presupuestos formales, precios de acuerdo a su volumen comercial y validación técnica.
        </p>
        <LeadButton className="px-12 py-6 bg-indigo-600 text-white rounded-full font-black uppercase tracking-[0.15em] text-[11px] shadow-[0_0_40px_rgba(99,102,241,0.3)]">
          Instalar un Cotizador Web
        </LeadButton>
      </section>

      <section className="max-w-3xl mx-auto px-6 text-zinc-400 font-light leading-relaxed space-y-6">
        <h2 className="text-2xl font-bold text-white uppercase tracking-wider mb-4 mt-12">Cómo funciona el flujo</h2>
        <p>Al implementar esta solución, el botón de "Comprar" se puede transformar (o acompañar) con un botón de "Añadir a presupuesto". El cliente navega por tu catálogo, selecciona los productos, cantidades e ingresa sus datos (RUT empresa, Razón Social). Posteriormente, el sistema le genera un PDF con la cotización formal o lo envía al panel para que tu ejecutivo de ventas decida el margen de descuento final.</p>
      </section>
    </main>
  );
}
