import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';

export const metadata = {
  title: 'Agencia de SEO Técnico Chile | Posicionamiento Web Google 2026',
  description: 'Especialistas en SEO técnico impulsado por Next.js y React. Auditorías de Core Web Vitals, estrategia de contenidos y posicionamiento orgánico orientado al ROI.',
  keywords: 'agencia seo chile, posicionamiento google santiago, experto seo tecnico, auditoria seo gratis, seo para ecommerce shopify, posicionamiento web chile, consultoria seo profesional',
};

export default function SeoServicePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Servicios de SEO Técnico y Posicionamiento Orgánico",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Webunica",
      "image": "https://webunica.cl/logo-webunica.png.webp",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Santiago",
        "addressCountry": "CL"
      }
    },
    "description": "Optimización avanzada de sitios web para motores de búsqueda, enfocada en performance técnica, Core Web Vitals y tráfico de alta conversión.",
    "areaServed": "CL",
    "serviceType": "Search Engine Optimization"
  };


  const seoFaqs = [
    {
      question: "¿Cuánto tiempo tarda en verse el resultado del SEO en Chile?",
      answer: "El SEO es una estrategia de mediano plazo. Los cambios técnicos en Next.js pueden mostrar mejoras en semanas, pero el dominio total de palabras clave competitivas suele tomar entre 3 y 6 meses."
    },
    {
      question: "¿Qué diferencia al SEO Técnico del SEO tradicional?",
      answer: "El SEO Técnico se enfoca en la infraestructura: velocidad de carga (Core Web Vitals), renderizado, seguridad SSL y esquemas de datos. Es la base necesaria para que el contenido sea efectivo."
    },
    {
      question: "¿Hacen SEO específico para tiendas Shopify?",
      answer: "Sí. Optimizamos la estructura de colecciones de Shopify, metadatos Liquid y velocidad del theme para maximizar la visibilidad en Google Shopping y búsquedas orgánicas."
    },
    {
      question: "¿Cómo miden el éxito de una campaña SEO?",
      answer: "No solo miramos rankings. Medimos el crecimiento en tráfico orgánico, la mejora en la tasa de clics (CTR) y, lo más importante, el aumento en conversiones y leads generados."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      
      <main className="pt-[22vh] lg:pt-48">
        {/* Hero Section */}
        <section className="relative pt-0 pb-32 lg:pt-0 lg:pb-40 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
          
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">SEO de Ingeniería</span>
              </div>
              <h1 className="text-[2.2rem] xs:text-5xl lg:text-[75px] font-black tracking-tighter leading-[0.9] mb-8 uppercase text-zinc-950 break-words">
                Domina <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">Google Chile</span>
              </h1>
              <p className="text-lg lg:text-xl text-zinc-600 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Implementamos <span className="text-violet-600 font-bold uppercase">SEO Técnico Avanzado</span> para que tu marca sea la primera respuesta de tus clientes. No usamos trucos, usamos ciencia de datos y performance.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                 <LeadButton 
                  className="px-12 py-5 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 text-center uppercase tracking-widest text-xs"
                 >
                    Auditoría SEO Express (Gratis)
                 </LeadButton>
              </div>
            </div>
            <div className="relative group hidden lg:block">
              <div className="absolute -inset-10 bg-emerald-500/5 rounded-full blur-[100px] -z-10" />
              <div className="rounded-[3rem] overflow-hidden border border-zinc-200 shadow-2xl bg-white p-2">
                <Image 
                  src="/seo_performance_dashboard_premium_1776268863414.png"
                  alt="Dashboard de Rendimiento SEO - Agencia Webunica Chile"
                  width={800}
                  height={800}
                  className="w-full h-auto rounded-[2.5rem] transform group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pillars of SEO */}
        <section className="max-w-7xl mx-auto px-6 py-32 border-t border-zinc-100">
           <div className="text-center mb-24">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 uppercase tracking-tighter text-zinc-900">Ciencia aplicada al <span className="text-emerald-600">Tráfico</span></h2>
              <p className="text-zinc-500 text-xl max-w-2xl mx-auto font-light">Estrategias de posicionamiento diseñadas para el algoritmo de hoy, no el de ayer.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <article className="bg-zinc-50 p-12 rounded-[3.5rem] border border-zinc-100 hover:border-emerald-500/30 transition-all group shadow-sm">
                 <div className="text-4xl mb-8 group-hover:scale-110 transition-transform">🛠️</div>
                 <h3 className="text-3xl font-bold mb-6 uppercase text-zinc-900">SEO Técnico & Performance</h3>
                 <p className="text-zinc-600 leading-relaxed font-light mb-8 text-lg">
                    Optimizamos la infraestructura de tu sitio. Core Web Vitals, renderizado SSR con <strong className="text-zinc-900">Next.js</strong> y arquitectura de datos JSON-LD para una indexación perfecta.
                 </p>
                 <ul className="space-y-4 text-sm text-emerald-600 font-bold uppercase tracking-wider">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"/> Performance 100 en Lighthouse</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"/> Estructura de Silos Semánticos</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"/> Optimización de Crawl Budget</li>
                 </ul>
              </article>

              <article className="bg-zinc-50 p-12 rounded-[3.5rem] border border-zinc-100 hover:border-cyan-500/30 transition-all group shadow-sm">
                 <div className="text-4xl mb-8 group-hover:scale-110 transition-transform">✍️</div>
                 <h3 className="text-3xl font-bold mb-6 uppercase text-zinc-900">SEO de Contenidos & EEAT</h3>
                 <p className="text-zinc-600 leading-relaxed font-light mb-8 text-lg">
                    Contenido escrito para humanos, optimizado para máquinas. Analizamos la <strong className="text-zinc-900">Intención de Búsqueda</strong> para captar usuarios en el momento exacto de su decisión.
                 </p>
                 <ul className="space-y-4 text-sm text-cyan-600 font-bold uppercase tracking-wider">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"/> Análisis de Search Intent</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"/> Estrategia de Topic Clusters</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"/> Optimización de Autoridad (EEAT)</li>
                 </ul>
              </article>
           </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          faqs={seoFaqs}
          title="Preguntas sobre Posicionamiento Web"
          description="Resolvemos los mitos y realidades sobre cómo rankear en el Google de hoy."
          ctaTitle="¿Auditamos tu sitio hoy mismo?"
          ctaDescription="Agenda tu Auditoría SEO Express gratuita para conocer tu estado actual y potencial de crecimiento."
          ctaLabel="Agendar Auditoría Gratuita"
        />

        {/* Final CTA */}
        <section className="py-32 text-center px-6">
           <h2 className="text-5xl font-black mb-10 uppercase tracking-tighter leading-none text-zinc-900">Tu éxito en Google <br/>empieza con una <span className="text-emerald-600 italic font-serif lowercase font-light">Decisión</span></h2>
           <p className="text-xl text-zinc-500 mb-12 italic font-serif max-w-2xl mx-auto">Deja de ser invisible para tus clientes potenciales. Convierte tu sitio web en tu mejor vendedor las 24 horas del día.</p>
           <LeadButton 
            className="inline-block px-12 py-6 bg-zinc-950 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:scale-105 transition-all shadow-2xl"
           >
              Solicitar Plan de Posicionamiento
           </LeadButton>
        </section>
      </main>
    </div>

  );
}
