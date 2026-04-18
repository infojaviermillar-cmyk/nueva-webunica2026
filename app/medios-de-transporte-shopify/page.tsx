import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Medios de Transporte y Logística para Shopify Chile',
  description: 'Conecta Starken, Chilexpress, BlueExpress y Correos de Chile a tu tienda Shopify con integradores logísticos.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-[20vh] pb-24 overflow-hidden">
      <section className="max-w-5xl mx-auto px-6 mb-24 text-center">
        <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
          Envíos y <span className="text-amber-500 italic font-serif lowercase font-light">Logística</span> Shopify Chile
        </h1>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
          La logística es el cuello de botella del e-commerce. Deja que el sistema calcule el peso, asigne el Courier más barato (Starken o BlueExpress) y envíe el tracking al cliente de forma automática.
        </p>
        <LeadButton className="px-12 py-6 bg-amber-600 text-white rounded-full font-black uppercase tracking-[0.15em] text-[11px]">
          Automatizar mi Logística
        </LeadButton>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-zinc-400 font-light leading-relaxed space-y-6">
        <h2 className="text-2xl font-bold text-white uppercase tracking-wider mb-4 mt-12">No copies y pegues números de seguimiento</h2>
        <p>Uno de los mayores errores de principiantes es ir personalmente a la sucursal de correos e ingresar tracking a mano. Utilizando sistemas de integración, tus guías de despacho se imprimen en tu oficina con el código de barras listo para escanear y enviar el cobro automático al usuario según su comuna.</p>
      </section>
    </main>
  );
}
