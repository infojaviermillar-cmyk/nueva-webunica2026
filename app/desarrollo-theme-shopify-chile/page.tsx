import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Desarrollo de Themes Locales para Shopify en Chile',
  description: 'Creamos Themes de Shopify 100% a medida desde cero o adaptamos plantillas Premium para darle a tu marca una identidad única.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-24 overflow-hidden">
      <section className="max-w-5xl mx-auto px-6 mb-24 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">Liquid & React</div>
        <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
          Desarrollo de <span className="text-violet-500 italic font-serif lowercase font-light">Themes</span> a Medida
        </h1>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
          Las tiendas genéricas no venden productos Premium. Programamos interfaces de Shopify usando código Liquid limpio, integraciones con React y animaciones fluidas para destacar sobre tu competencia.
        </p>
        <LeadButton className="px-12 py-6 bg-violet-600 text-white rounded-full font-black uppercase tracking-[0.15em] text-[11px]">
          Ver Portafolio E-commerce
        </LeadButton>
      </section>
    </main>
  );
}
