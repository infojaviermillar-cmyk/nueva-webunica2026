import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Programa de Partners para Agencias | Marca Blanca | Webunica',
  description: 'Asóciate con Webunica. Ofrecemos desarrollo web avanzado y e-commerce en modalidad marca blanca para agencias de marketing y consultoras en Chile.',
  openGraph: {
    title: 'Programa de Partners y Marca Blanca - Webunica',
    description: 'Conviértenos en tu equipo de desarrollo técnico. Alianzas B2B, comisiones y desarrollo web escalable.',
    url: 'https://webunica.cl/programa-partners-agencias',
    type: 'website',
  }
};

export default function PartnersPage() {
  const benefits = [
    {
      title: "Desarrollo en Marca Blanca",
      icon: "👻",
      description: "Ejecutamos proyectos bajo el nombre de tu agencia. Nosotros ponemos el código, tú mantienes la relación comercial y el crédito ante tu cliente."
    },
    {
      title: "Comisiones por Referidos",
      icon: "💸",
      description: "Si prefieres simplemente derivarnos un cliente, te pagamos un fee de comisión directo sobre el valor del proyecto cerrado (10% a 15%)."
    },
    {
      title: "Respaldo Técnico Avanzado",
      icon: "🛡️",
      description: "Asume proyectos más grandes. Si tu cliente te pide integraciones de ERP complejas o aplicaciones en Next.js, ahora puedes decir que sí."
    },
    {
      title: "Sin Costos Fijos",
      icon: "📉",
      description: "Evita tener programadores en nómina ociosa. Facturamos por proyecto. Escalas tus costos técnicos solo cuando entra trabajo real."
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 pt-[22vh] lg:pt-[12vh] pb-24 font-sans">
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
          Alianzas Estratégicas B2B
        </div>
        <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8">
          Conviértenos en tu <br/>
          <span className="text-blue-500 italic font-serif lowercase font-light text-5xl lg:text-8xl">Brazo Técnico</span>
        </h1>
        <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Diseñado para <strong>Agencias de Marketing, Consultores y Diseñadores</strong> que necesitan entregar proyectos web de alta complejidad (Shopify, Next.js, ERP) sin tener que contratar desarrolladores fijos.
        </p>
        <LeadButton className="px-10 py-5 bg-blue-600 text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/20 active:scale-95">
          Agendar Reunión de Alianza
        </LeadButton>
      </section>

      {/* Target Audience */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 border-t border-blue-500/30 bg-white/5">
            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-widest">Para Agencias de Marketing</h3>
            <p className="text-zinc-500 font-light text-sm leading-relaxed">
              Vendes la web, pero el desarrollo te trae dolores de cabeza. Déjanos programar y céntrate en la estrategia y Ads.
            </p>
          </div>
          <div className="p-8 border-t border-blue-500/30 bg-white/5">
            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-widest">Para Diseñadores UI/UX</h3>
            <p className="text-zinc-500 font-light text-sm leading-relaxed">
              Diseñas en Figma pero no sabes cómo pasarlo a código. Nosotros creamos el frontend pixel-perfect de tus ideas.
            </p>
          </div>
          <div className="p-8 border-t border-blue-500/30 bg-white/5">
            <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-widest">Para Consultores de Negocio</h3>
            <p className="text-zinc-500 font-light text-sm leading-relaxed">
              Detectas que tu cliente necesita migrar a Shopify o integrar Bsale. Nos traes al cliente y ganas comisión.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">¿Por qué asociarse con Webunica?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-10 rounded-[2.5rem] bg-zinc-900/50 border border-white/5 hover:border-blue-500/30 transition-colors group">
              <div className="text-5xl mb-6">{benefit.icon}</div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight">{benefit.title}</h3>
              <p className="text-zinc-400 leading-relaxed font-light">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-black text-white text-center mb-12 uppercase tracking-tight">Modalidades de Trabajo</h2>
        <div className="space-y-6">
          <div className="flex gap-6 items-start p-8 rounded-3xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-xl shrink-0">1</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Partner Oculto (Marca Blanca)</h3>
              <p className="text-zinc-400 font-light leading-relaxed">Tú nos subcontratas. Nosotros usamos cuentas de email con tu dominio (ej: devs@tuagencia.com) y asistimos a reuniones técnicas presentándonos como parte de tu equipo. Cotizamos con tarifa preferencial para que apliques tu margen.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start p-8 rounded-3xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-xl shrink-0">2</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Referido Transparente (Comisionista)</h3>
              <p className="text-zinc-400 font-light leading-relaxed">Presentas a Webunica como tu partner tecnológico especialista. Nosotros tomamos el control del proyecto, facturamos directamente al cliente y te pagamos una comisión por derivar el negocio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <div className="p-12 md:p-20 bg-zinc-900 border border-zinc-800 rounded-[3rem]">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">Crezcamos Juntos</h2>
          <p className="text-zinc-400 mb-10 max-w-xl mx-auto font-light leading-relaxed">
            Hablemos para entender tus necesidades. Firmamos un acuerdo NDA (No Divulgación) para proteger a tus clientes y comenzamos a colaborar.
          </p>
          <LeadButton className="px-10 py-5 bg-white text-zinc-950 rounded-full font-black uppercase tracking-widest text-[11px] hover:scale-105 transition-transform">
            Quiero Ser Partner
          </LeadButton>
        </div>
      </section>

    </main>
  );
}
