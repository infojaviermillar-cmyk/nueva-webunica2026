import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Guía: Dropshipping en Chile con Shopify y Dropi (2026)',
  description: 'Cómo iniciar un negocio de Dropshipping Local en Chile usando Shopify, pago contra entrega y aplicaciones como Dropi.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-24 overflow-hidden">
      <section className="max-w-5xl mx-auto px-6 mb-24 text-center">
        <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
          Dropshipping con <span className="text-rose-500 italic font-serif lowercase font-light">Dropi</span> y Shopify
        </h1>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
          Olvídate de importar meses desde China. El negocio en 2026 es el Dropshipping Local con pago contra entrega. Descubre cómo integrar Dropi en tu Shopify.
        </p>
        <LeadButton className="px-12 py-6 bg-rose-600 text-white rounded-full font-black uppercase tracking-[0.15em] text-[11px]">
          Asesoría en Tiendas de Dropshipping
        </LeadButton>
      </section>

      <section className="max-w-3xl mx-auto px-6 text-zinc-400 font-light leading-relaxed space-y-6">
        <h2 className="text-2xl font-bold text-white uppercase tracking-wider mb-4 mt-12">¿Qué es Dropi?</h2>
        <p>Dropi es una plataforma que conecta proveedores locales chilenos con tu tienda Shopify. Esto permite tiempos de envío de 24 a 48 horas en lugar de semanas, reduciendo radicalmente las devoluciones de clientes.</p>
        
        <h2 className="text-2xl font-bold text-white uppercase tracking-wider mb-4 mt-12">El poder del Pago Contra Entrega (COD)</h2>
        <p>En el mercado chileno de e-commerce impulsivo, ofrecer la opción de pagar al recibir el producto aumenta las conversiones hasta en un 300%. Configuramos Shopify para gestionar esto a la perfección.</p>
      </section>
    </main>
  );
}