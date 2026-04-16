"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import FeaturedBlogSection from '@/components/sections/featured-blog';
import ContactModal from '@/components/ui/contact-modal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Webunica",
    "url": "https://webunica.cl",
    "logo": "https://webunica.cl/wp-content/uploads/2024/01/logo-webunica.png.webp",
    "description": "Agencia de ingeniería web y expertos en Shopify en Chile. Especialistas en Next.js, SaaS y SEO Técnico.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CL"
    },
    "sameAs": [
      // Añadir redes sociales si las tienes
    ]
  };

  return (
    <main className="min-h-screen font-sans antialiased text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 mb-8">
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-violet-700">Digital Agency 2026</span>
              </div>
              <h1 className="text-4xl lg:text-[70px] font-black tracking-tighter leading-[0.9] mb-10 text-zinc-950 uppercase">
                INGENIERÍA <br/>DE <span className="text-violet-600 font-serif italic lowercase font-light">Crecimiento</span>
              </h1>
              <p className="text-xl text-zinc-500 mb-12 max-w-xl leading-relaxed font-light text-pretty">
                Llevamos tu presencia digital al estándar de las grandes ligas. Desarrollo Full-stack impulsado por **Next.js**, diseño boutique y estrategias SEO de alto impacto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-10 py-6 bg-violet-600 text-white rounded-[2rem] font-black uppercase tracking-[0.15em] text-[10px] flex items-center justify-center gap-3 hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/25 active:scale-95 group/btn"
                >
                  <svg className="w-5 h-5 transition-transform group-hover/btn:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Calcular Presupuesto
                </button>
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
                  <div className="text-xs font-bold text-violet-600 bg-violet-200/50 px-4 py-1.5 rounded-full uppercase tracking-widest">SEO Técnico Avanzado</div>
                </div>
                <h2 className="text-2xl font-black mb-6 text-zinc-900 leading-tight tracking-tight uppercase">Donde la velocidad impulsa los resultados</h2>
                <p className="text-zinc-500 font-light leading-relaxed mb-8">
                  No hacemos sitios web informativos. Construimos activos digitales escalables que cargan en menos de 1 segundo para un posicionamiento imbatible.
                </p>
                <div className="h-1.5 w-full bg-zinc-200 rounded-full overflow-hidden">
                   <div className="h-full bg-violet-600 w-[98%] group-hover:w-full transition-all duration-1000 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                </div>
                <div className="flex justify-between mt-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                   <span>Performance Lighthouse</span>
                   <span>98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-32 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-950 uppercase leading-none">
              Ingeniería <br/>Estratégica <span className="text-zinc-400">Full-Stack</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/desarrollo-tiendas-shopify-chile" className="p-10 bg-white border border-zinc-100 rounded-[2.5rem] hover:border-violet-300 transition-all group shadow-sm hover:shadow-xl">
              <div className="w-16 h-16 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform shadow-inner">🛍️</div>
              <h3 className="text-2xl font-bold mb-4">Experto Shopify Chile</h3>
              <p className="text-zinc-500 font-light leading-relaxed">Diseño y optimización de e-commerce sobre la plataforma más potente del mundo para marcas que escalan.</p>
            </Link>
            
            <Link href="/desarrollo-web-nextjs-saas-custom" className="p-10 bg-white border border-zinc-100 rounded-[2.5rem] hover:border-violet-300 transition-all group shadow-sm hover:shadow-xl">
               <div className="w-16 h-16 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform shadow-inner">⚡</div>
               <h3 className="text-2xl font-bold mb-4">Plataformas SaaS</h3>
               <p className="text-zinc-500 font-light leading-relaxed">Software a medida y plataformas escalables con arquitectura Next.js y Supabase para alto tráfico.</p>
            </Link>

            <Link href="/diseno-themes-shopify-personalizados-adobe-xd" className="p-10 bg-white border border-zinc-100 rounded-[2.5rem] hover:border-violet-300 transition-all group shadow-sm hover:shadow-xl">
               <div className="w-16 h-16 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform shadow-inner">🎨</div>
               <h3 className="text-2xl font-bold mb-4">Diseño Web Boutique</h3>
               <p className="text-zinc-500 font-light leading-relaxed">Interfaces diseñadas en Adobe XD transformadas en activos digitales 100% propietarios y veloces.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-zinc-950 uppercase mb-4">
              Presencia <span className="text-violet-600">Nacional</span>
            </h2>
            <p className="text-zinc-500 font-light max-w-2xl mx-auto">
              Ingeniería web de élite disponible desde Arica hasta Punta Arenas. Encuentra tu solución local.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { n: 'Santiago', s: 'santiago' },
              { n: 'Concepción', s: 'concepcion' },
              { n: 'Temuco', s: 'temuco' },
              { n: 'Valdivia', s: 'valdivia' },
              { n: 'Puerto Montt', s: 'puerto-montt' },
              { n: 'Antofagasta', s: 'antofagasta' },
              { n: 'Iquique', s: 'iquique' },
              { n: 'La Serena', s: 'la-serena' },
              { n: 'Rancagua', s: 'rancagua' },
              { n: 'Osorno', s: 'osorno' },
              { n: 'Ancud', s: 'ancud' },
              { n: 'Punta Arenas', s: 'punta-arenas' },
            ].map((c) => (
              <Link 
                key={c.s} 
                href={`/diseno-paginas-web/${c.s}`}
                className="p-4 border border-zinc-100 rounded-2xl text-center hover:border-violet-200 hover:bg-violet-50/50 transition-all group"
              >
                <span className="text-[10px] font-bold text-zinc-400 group-hover:text-violet-600 uppercase tracking-widest block mb-1">Diseño Web</span>
                <span className="text-sm font-bold text-zinc-900">{c.n}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Carousel */}
      <FeaturedBlogSection />

      {/* FAQ Section Integrated */}
      <FAQSection 
        faqs={homeFaqs}
        title="Ingeniería Web de Clase Mundial"
        description="Entiende por qué somos la opción preferida de las marcas que buscan dominio digital y performance extrema."
        ctaTitle="¿Escalamos tu negocio?"
        ctaDescription="Agenda una reunión técnica para conocer tu proyecto y trazar el mapa de éxito digital de tu marca."
        ctaLabel="Agendar Consultoría Gratuita"
      />

      {/* Professional Call to Action */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-zinc-950 rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 blur-[100px] rounded-full" />
          <h2 className="text-4xl lg:text-7xl font-bold mb-10 tracking-tighter uppercase leading-[0.9]">
            Tu éxito en Google <br/><span className="text-zinc-400 italic font-serif lowercase font-light">empieza</span> ahora
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-lg mx-auto font-light leading-relaxed">
            Deja de perder tiempo con sitios que nadie ve. Construyamos tu activo digital hoy y domina tu industria.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-block px-12 py-6 bg-violet-600 text-white font-bold text-lg rounded-2xl hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/30"
          >
            Iniciar mi Transformación Digital
          </button>
        </div>
      </section>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  );
}
