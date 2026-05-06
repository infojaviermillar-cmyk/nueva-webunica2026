import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Agencia de Desarrollo Web y E-commerce en Chile | Webunica',
  description: 'Agencia experta en desarrollo web de alto rendimiento. Construimos e-commerce Shopify, aplicaciones Next.js y portales SaaS desde Chile para el mundo.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-[20vh] pb-24 overflow-hidden relative">
      {/* Abstract Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />
      
      <section className="max-w-6xl mx-auto px-6 mb-24 text-center relative z-10">
        <h1 className="text-5xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.85]">
          Construimos <br/>la Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-500 italic font-serif lowercase font-light">del futuro</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
          No delegues tu negocio en herramientas limitadas. Somos el aliado tecnológico estratégico para empresas que van en serio en Internet.
        </p>
        <LeadButton className="px-14 py-7 bg-white text-black rounded-full font-black uppercase tracking-[0.2em] text-[12px] hover:scale-105 transition-all duration-300">
          Iniciar Proyecto con Webunica
        </LeadButton>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        <Link href="/desarrollo-web-nextjs-saas-custom" className="group p-12 bg-zinc-900 border border-white/5 rounded-[3rem] hover:border-violet-500/30 transition-all duration-500">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-4">Ingeniería Frontend<br/>(React & Next.js)</h2>
          <p className="text-zinc-400 font-light text-lg mb-8">Desarrollo a medida para corporativos, startups o plataformas (SaaS) que requieren velocidad instantánea y seguridad nivel Enterprise.</p>
          <span className="text-violet-400 text-xs font-bold uppercase tracking-widest group-hover:underline">Leer más &rarr;</span>
        </Link>
        <Link href="/desarrollo-tiendas-shopify-chile" className="group p-12 bg-zinc-900 border border-white/5 rounded-[3rem] hover:border-emerald-500/30 transition-all duration-500">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-4">E-commerce Nativo<br/>(Shopify)</h2>
          <p className="text-zinc-400 font-light text-lg mb-8">Para marcas y tiendas que necesitan vender productos físicos a alta escala, soportar miles de visitas y gestionar logística de forma automática.</p>
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest group-hover:underline">Leer más &rarr;</span>
        </Link>
      </section>
    </div>
  );
}
