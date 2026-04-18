import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';

export const metadata = {
  title: 'Agencia de SEO Técnico y Posicionamiento Google Chile | Webunica',
  description: 'Especialistas en SEO técnico impulsado por Next.js. Auditorías Core Web Vitals, estrategia de contenidos y posicionamiento orgánico orientado al ROI.',
  keywords: 'agencia seo chile, posicionamiento google santiago, experto seo tecnico, auditoria seo gratis, seo para ecommerce shopify',
};

export default function SeoServicePage() {
  const seoFaqs = [
    {
      question: "¿Cuánto tiempo tarda en verse el resultado del SEO?",
      answer: "El SEO es una estrategia de mediano a largo plazo. Normalmente, los primeros cambios significativos en el ranking y tráfico comienzan a verse entre los 3 y 6 meses. Sin embargo, las optimizaciones técnicas en Next.js suelen dar un impulso de indexación mucho más rápido que en otras plataformas."
    },
    {
      question: "¿Qué es el SEO Técnico y por qué es importante?",
      answer: "Es la base de tu éxito. Se encarga de que Google pueda leer, indexar y entender tu sitio sin errores. Incluye la optimización de Core Web Vitals (velocidad), arquitectura de datos (JSON-LD) y adaptabilidad móvil. Un sitio técnicamente perfecto rankea mejor con menos esfuerzo."
    },
    {
      question: "¿Hacen SEO para tiendas Shopify?",
      answer: "Sí. Somos especialistas en optimizar tiendas Shopify, configurando de forma avanzada los metadatos, optimizando la estructura de colecciones y mejorando la velocidad de los temas Liquid para que tus productos aparezcan en Google Shopping de forma orgánica."
    },
    {
      question: "¿Qué incluye la Auditoría SEO Express Gratuita?",
      answer: "Analizamos tu sitio actual en tiempo real para identificar los 3 bloqueos principales que impiden que subas en Google. Te entregamos un reporte técnico accionable durante una llamada de 15 minutos."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Servicios de SEO Técnico y Posicionamiento Orgánico",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Webunica"
    },
    "description": "Optimización avanzada de sitios web para motores de búsqueda, enfocada en performance técnica y tráfico de alta conversión.",
    "areaServed": "CL"
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="pt-[20vh] pb-20">
        {/* Tech Header Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Data-Driven Growth</span>
              </div>
              <h1 className="text-4xl lg:text-[70px] font-black tracking-tighter leading-[0.9] mb-10">
                DOMINA <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 uppercase">Google</span>
              </h1>
              <p className="text-xl text-zinc-400 mb-12 max-w-xl leading-relaxed font-light">
                No arriesgues tu inversión con tácticas de ayer. Implementamos <span className="text-violet-500 font-bold">SEO de Ingeniería</span> para asegurar que tu marca sea la primera respuesta de tus clientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                 <LeadButton 
                  className="px-12 py-5 bg-emerald-500 text-zinc-950 font-bold rounded-2xl hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 text-center"
                 >
                    Auditoría SEO Express (Gratis)
                 </LeadButton>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-10 bg-emerald-500/10 rounded-full blur-[100px] -z-10" />
              <div className="rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-zinc-900 p-2">
                <Image 
                  src="/seo_performance_dashboard_premium_1776268863414.png"
                  alt="SEO Performance Dashboard"
                  width={800}
                  height={800}
                  className="w-full h-auto rounded-[2.5rem] transform group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pillars of SEO */}
        <section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
           <div className="text-center mb-24">
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">Ciencia aplicada al Tráfico</h2>
              <p className="text-zinc-500 text-xl max-w-2xl mx-auto">No adivinamos. Medimos, optimizamos y ganamos.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-zinc-900/50 p-12 rounded-[3.5rem] border border-white/5 hover:border-emerald-500/30 transition-all">
                 <div className="text-4xl mb-8">🛠️</div>
                 <h3 className="text-3xl font-bold mb-6">SEO Técnico Avanzado</h3>
                 <p className="text-zinc-400 leading-relaxed font-light mb-8">
                    Optimizamos el motor de tu sitio. Core Web Vitals, indexación semántica y arquitectura de datos JSON-LD para que Google ame tu estructura tanto como tus usuarios.
                 </p>
                 <ul className="space-y-4 text-sm text-emerald-400 font-bold uppercase tracking-wider">
                    <li>✓ Performance 100 en Lighthouse</li>
                    <li>✓ Estructura de Silos SEO</li>
                    <li>✓ Optimización de Crawl Budget</li>
                 </ul>
              </div>

              <div className="bg-zinc-900/50 p-12 rounded-[3.5rem] border border-white/5 hover:border-cyan-500/30 transition-all">
                 <div className="text-4xl mb-8">✍️</div>
                 <h3 className="text-3xl font-bold mb-6">SEO de Contenidos</h3>
                 <p className="text-zinc-400 leading-relaxed font-light mb-8">
                    No escribimos para rellenar; escribimos para convencer y rankear. Analizamos la intención de búsqueda para captar usuarios en el momento exacto de su decisión.
                 </p>
                 <ul className="space-y-4 text-sm text-cyan-400 font-bold uppercase tracking-wider">
                    <li>✓ Análisis de Intención de Búsqueda</li>
                    <li>✓ Estrategia de Topic Clusters</li>
                    <li>✓ Optimización de EEAT (Autoridad)</li>
                 </ul>
              </div>
           </div>
        </section>

        {/* Case Study Feature */}
        <section className="bg-white text-zinc-950 py-32 rounded-[4rem] mx-4 mb-32">
           <div className="max-w-7xl mx-auto px-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 block">Success Story</span>
                    <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">SoloCasasChile: <br/>Dominio Orgánico</h2>
                    <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
                       Implementamos un sistema de <span className="text-violet-600 font-bold">Silos SEO e indexación instantánea</span> que permitió a SoloCasasChile capturar más de 10.000 búsquedas mensuales sin invertir un peso en publicidad pagada.
                    </p>
                    <div className="flex gap-12">
                       <div>
                          <div className="text-4xl font-black text-black">+240%</div>
                          <div className="text-xs text-zinc-400 uppercase font-bold tracking-widest">Tráfico Orgánico</div>
                       </div>
                       <div>
                          <div className="text-4xl font-black text-black">Top 3</div>
                          <div className="text-xs text-zinc-400 uppercase font-bold tracking-widest">Keywords Clave</div>
                       </div>
                    </div>
                 </div>
                 <div className="bg-zinc-50 rounded-[3rem] p-4 border border-zinc-200 aspect-video flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://solocasaschile.com/wp-content/uploads/2023/11/Screenshot-2023-11-20-at-12.01.53.png" 
                      alt="SoloCasasChile Performance" 
                      className="w-full h-full object-cover rounded-2xl grayscale"
                    />
                 </div>
              </div>
           </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          faqs={seoFaqs}
          title="Dudas sobre SEO"
          description="Resolvemos los mitos y realidades sobre cómo rankear en el Google de hoy."
          ctaTitle="¿Auditamos tu sitio hoy mismo?"
          ctaDescription="Agenda tu Auditoría SEO Express gratuita para conocer tu estado actual y potencial de crecimiento."
          ctaLabel="Agendar Auditoría Gratuita"
        />

        {/* Final CTA */}
        <section className="py-32 text-center px-6">
           <h2 className="text-5xl font-black mb-10 uppercase tracking-tighter leading-none">Tu éxito en Google <br/>empieza con una <span className="text-emerald-500 italic font-serif lowercase font-light">Decisión</span></h2>
           <p className="text-xl text-zinc-500 mb-12 italic font-serif">Deja de ser invisible. Empieza a ser la primera opción.</p>
           <LeadButton 
            className="inline-block px-12 py-6 bg-white text-zinc-950 font-bold text-lg rounded-2xl hover:scale-105 transition-all shadow-2xl"
           >
              Solicitar Plan de Posicionamiento
           </LeadButton>
        </section>
      </main>
    </div>
  );
}
