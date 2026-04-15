import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';

export default function Home() {
  const homeFaqs = [
    {
      question: "¿Por qué trabajar con Webunica en lugar de otras agencias?",
      answer: "En Webunica no solo entregamos sitios web; entregamos activos comerciales de alta ingeniería. Utilizamos el stack tecnológico más avanzado del mundo (Next.js + Supabase) para garantizar que tu sitio sea más rápido, más seguro y posicione mejor en Google que cualquier competidor."
    },
    {
      question: "¿Cómo es el proceso de desarrollo de un proyecto?",
      answer: "Trabajamos en fases: 1. Análisis estratégico y UX. 2. Diseño prototipado en Adobe XD. 3. Desarrollo Full-stack. 4. Optimización SEO y Lanzamiento. Siempre tienes visibilidad total del avance y participación en las decisiones clave."
    },
    {
      question: "¿Qué garantía ofrecen sobre la velocidad del sitio?",
      answer: "Garantizamos puntuaciones de 90+ en Google PageSpeed Insights. La velocidad no es un lujo, es una necesidad para retener clientes y rankear en los primeros lugares de Google."
    },
    {
      question: "¿También se encargan del mantenimiento y actualizaciones?",
      answer: "Sí. Ofrecemos planes de soporte continuo para que no tengas que preocuparte por nada técnico. Nos encargamos de la seguridad, las actualizaciones y las optimizaciones periódicas para que tu negocio nunca se detenga."
    }
  ];

  return (
    <main className="min-h-screen font-sans antialiased text-zinc-900">
      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-violet-600/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 mb-8">
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-violet-700">Digital Agency 2026</span>
              </div>
              <h1 className="text-6xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.85] mb-10 text-zinc-950 uppercase">
                INGENIERÍA <br/>DE <span className="text-violet-600 font-serif italic lowercase font-light">Crecimiento</span>
              </h1>
              <p className="text-xl text-zinc-500 mb-12 max-w-xl leading-relaxed font-light text-pretty">
                Llevamos tu presencia digital al estándar de las grandes ligas. Desarrollo Full-stack impulsado por **Next.js**, diseño boutique y estrategias SEO de alto impacto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link 
                  href="/cotizador-en-linea-desarrollo-web" 
                  className="px-10 py-6 bg-violet-600 text-white rounded-[2rem] font-black uppercase tracking-[0.15em] text-[10px] flex items-center justify-center gap-3 hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/25 active:scale-95 group/btn"
                >
                  <svg className="w-5 h-5 transition-transform group-hover/btn:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Calcular Presupuesto
                </Link>
                <Link 
                  href="/portafolio" 
                  className="px-10 py-6 bg-zinc-50 text-zinc-900 border border-zinc-200 rounded-[2rem] font-black uppercase tracking-[0.15em] text-[10px] flex items-center justify-center hover:bg-white hover:shadow-lg transition-all active:scale-95"
                >
                  Ver Portafolio
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="bg-violet-50 rounded-[3rem] p-10 lg:p-14 relative group overflow-hidden">
                <div className="flex justify-between items-center mb-10">
                  <div className="text-4xl">🚀</div>
                  <div className="text-xs font-bold text-violet-600 bg-violet-200/50 px-4 py-1.5 rounded-full uppercase tracking-widest">High Performance</div>
                </div>
                <h3 className="text-3xl font-bold mb-6 text-zinc-900 leading-tight tracking-tight uppercase">Donde la velocidad se cruza con el negocio</h3>
                <p className="text-zinc-500 font-light leading-relaxed mb-8">
                  No hacemos sitios web informativos. Construimos activos digitales escalables que cargan en menos de 1 segundo.
                </p>
                <div className="h-1.5 w-full bg-zinc-200 rounded-full overflow-hidden">
                   <div className="h-full bg-violet-600 w-[98%] group-hover:w-full transition-all duration-1000 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                </div>
                <div className="flex justify-between mt-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                   <span>Performance</span>
                   <span>98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with new structure and visual icons */}
      <section className="bg-zinc-50 py-32 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-950 uppercase leading-none">
              Soluciones <br/>de <span className="text-zinc-400">Élite</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/desarrollo-tiendas-shopify-chile" className="p-10 bg-white border border-zinc-100 rounded-[2.5rem] hover:border-violet-300 transition-all group shadow-sm hover:shadow-xl">
              <div className="w-16 h-16 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform shadow-inner">🛍️</div>
              <h3 className="text-2xl font-bold mb-4">Experto Shopify</h3>
              <p className="text-zinc-500 font-light leading-relaxed">Diseño y optimización de e-commerce sobre la plataforma más potente del mundo.</p>
            </Link>
            
            <Link href="/desarrollo-web-nextjs-saas-custom" className="p-10 bg-white border border-zinc-100 rounded-[2.5rem] hover:border-violet-300 transition-all group shadow-sm hover:shadow-xl">
               <div className="w-16 h-16 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform shadow-inner">⚡</div>
               <h3 className="text-2xl font-bold mb-4">Next.js & SaaS</h3>
               <p className="text-zinc-500 font-light leading-relaxed">Software a medida y plataformas escalables con arquitectura Next.js Full-stack.</p>
            </Link>

            <Link href="/diseno-themes-shopify-personalizados-adobe-xd" className="p-10 bg-white border border-zinc-100 rounded-[2.5rem] hover:border-violet-300 transition-all group shadow-sm hover:shadow-xl">
               <div className="w-16 h-16 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform shadow-inner">🎨</div>
               <h3 className="text-2xl font-bold mb-4">Themes Shopify XD</h3>
               <p className="text-zinc-500 font-light leading-relaxed">Diseño boutique en Adobe XD transformado en temas Liquid 100% propietarios.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section Integrated */}
      <FAQSection 
        faqs={homeFaqs}
        title="¿Por qué Webunica?"
        description="Entiende por qué somos la opción preferida de las marcas que buscan dominio digital."
        ctaTitle="¿Escalamos tu negocio?"
        ctaDescription="Agenda una reunión conmigo para conocer tu proyecto y trazar el mapa de éxito digital."
        ctaLabel="Agendar mi Reunión Inicial"
      />

      {/* Professional Call to Action */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-zinc-950 rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 blur-[100px] rounded-full" />
          <h2 className="text-4xl lg:text-7xl font-bold mb-10 tracking-tighter uppercase leading-[0.9]">
            Es hora de <br/><span className="text-zinc-400 italic font-serif lowercase font-light">Dominar</span> Google
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-lg mx-auto font-light leading-relaxed">
            No pierdas más tiempo con sitios que nadie ve. Construyamos tu activo digital hoy.
          </p>
          <a 
            href="https://calendly.com/javiermillar/reunion-webunica" 
            target="_blank"
            className="inline-block px-12 py-6 bg-violet-600 text-white font-bold text-lg rounded-2xl hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/30"
          >
            Iniciar mi Transformación Digital
          </a>
        </div>
      </section>
    </main>
  );
}
