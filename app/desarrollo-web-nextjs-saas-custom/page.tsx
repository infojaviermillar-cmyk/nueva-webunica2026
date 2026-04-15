import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';

export const metadata = {
  title: 'Desarrollo Full-Stack Next.js & SaaS a Medida en Chile | Webunica',
  description: 'Llevamos tu idea de negocio al siguiente nivel con aplicaciones web SaaS robustas, rápidas y escalables creadas con Next.js y Supabase.',
  keywords: 'desarrollo nextjs chile, creación saas chile, software a medida, desarrollo web fullstack, programacion plataformas escalables',
};

export default function SaaSPage() {
  const saasFaqs = [
    {
      question: "¿Por qué Next.js es la mejor opción para mi SaaS?",
      answer: "Next.js permite un renderizado híbrido (SSR e ISR) que garantiza una velocidad de carga instantánea y una indexación perfecta en Google. Para un SaaS, esto significa mejor SEO y una experiencia de usuario fluida que reduce la tasa de abandono."
    },
    {
      question: "¿Qué tan segura es la arquitectura con Supabase?",
      answer: "Utilizamos Supabase con seguridad a nivel de fila (Row Level Security) y autenticación robusta. Tus datos y los de tus clientes están protegidos bajo estándares de nivel empresarial sobre PostgreSQL."
    },
    {
      question: "¿El software será de mi propiedad?",
      answer: "Sí, el 100% del código fuente te pertenece. Al desarrollar a medida, no dependes de suscripciones a plataformas cerradas, lo que aumenta el valor real de tu activo digital."
    },
    {
      question: "¿Pueden integrar sistemas de pago locales?",
      answer: "Totalmente. Integramos pasarelas como Webpay, Flow o Mercado Pago para el mercado chileno, así como Stripe para clientes internacionales, permitiendo cobros únicos o recurrentes (suscripciones)."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Desarrollo Web Next.js & SaaS a Medida",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Webunica"
    },
    "description": "Desarrollo de software y plataformas SaaS de alto rendimiento con arquitectura Next.js.",
    "areaServed": "CL"
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="pt-32">
        {/* Futuristic Hero Section */}
        <section className="relative max-w-7xl mx-auto px-6 py-20 lg:py-40 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full -z-10" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">Next.js + Supabase + Vercel Stack</span>
              </div>
              <h1 className="text-4xl lg:text-[70px] font-black tracking-tighter leading-[0.9] mb-10 text-white uppercase">
                TRANSFORMAMOS <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">CÓDIGO EN NEGOCIO</span>
              </h1>
              <p className="text-xl text-zinc-400 mb-12 max-w-xl leading-relaxed text-pretty">
                Desarrollo de software y plataformas SaaS a medida bajo estándares de ingeniería de élite. Velocidad extrema, arquitectura escalable y lógica de negocio compleja.
              </p>
              <a 
                href="https://calendly.com/javiermillar/reunion-webunica" 
                target="_blank"
                className="inline-block px-12 py-6 bg-white text-black font-bold text-lg rounded-2xl hover:bg-zinc-200 transition-all shadow-2xl shadow-white/5"
              >
                Agendar Consultoría Técnica
              </a>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
              <div className="bg-zinc-900 border border-white/10 rounded-[3rem] p-4 md:p-8 shadow-2xl relative overflow-hidden group">
                 <Image 
                    src="/saas_nextjs_dashboard_tech_1776266427364.png"
                    alt="Next.js SaaS Dashboard Architecture"
                    width={800}
                    height={800}
                    className="rounded-[2rem] transform group-hover:scale-105 transition-transform duration-1000 w-full h-auto"
                 />
              </div>
            </div>
          </div>
        </section>

        {/* Success Case: SoloCasasChile */}
        <section className="bg-white text-zinc-950 py-32 rounded-[4rem] lg:rounded-[6rem] mx-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
             <div className="flex flex-col lg:flex-row gap-20 items-center">
                <div className="lg:w-1/2">
                   <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-400 mb-6 font-bold">Featured Case Study</h2>
                   <h3 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 text-black">SoloCasasChile.com</h3>
                   <div className="space-y-6 text-xl text-zinc-600 leading-relaxed mb-10">
                      <p>Un marketplace PropTech líder en su industria, desarrollado íntegramente bajo la metodología Webunica.</p>
                      <ul className="space-y-4">
                         {[
                            'Lógica de filtrado dinámico ultra-rápida.',
                            'Arquitectura SEO optimizada para millones de impresiones.',
                            'Panel de administración personalizado para constructoras.',
                            'Sistema de verificación de confianza integrado.',
                            '100% Speed Score en Core Web Vitals.'
                         ].map((item, i) => (
                           <li key={i} className="flex gap-4 items-center">
                              <span className="w-6 h-6 rounded-full bg-zinc-900 flex items-center justify-center text-white text-xs">✓</span>
                              {item}
                           </li>
                         ))}
                      </ul>
                   </div>
                   <a 
                    href="https://solocasaschile.com" 
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-3 text-2xl font-bold border-b-4 border-zinc-900 hover:text-zinc-600 transition-colors pb-2"
                   >
                    Explorar el Proyecto
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                   </a>
                </div>
                <div className="lg:w-1/2 h-[500px] w-full bg-zinc-50 rounded-[3rem] border border-zinc-200 flex items-center justify-center relative overflow-hidden shadow-inner">
                   {/* Placeholder visual for the PropTech App */}
                   <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-white" />
                   <div className="relative z-10 text-center p-12 text-black">
                      <div className="text-6xl mb-6">🏘️</div>
                      <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Ingeniería Web de Alto Nivel</h4>
                      <p className="text-zinc-500 max-w-sm mx-auto">Gestionando miles de propiedades y usuarios en tiempo real sin latencia.</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Tech Stack Columns */}
        <section className="py-32 max-w-7xl mx-auto px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-10 bg-zinc-900 border border-white/5 rounded-3xl hover:bg-zinc-800 transition-colors">
                 <h4 className="text-2xl font-bold mb-6 text-green-400">SaaS Ready</h4>
                 <p className="text-zinc-400 leading-relaxed font-light">Implementamos sistemas de suscripciones, roles de usuario avanzados y paneles de analítica para convertir tu idea en un producto digital monetizable.</p>
              </div>
              <div className="p-10 bg-zinc-900 border border-white/5 rounded-3xl hover:bg-zinc-800 transition-colors">
                 <h4 className="text-2xl font-bold mb-6 text-blue-400">Full Server-Side</h4>
                 <p className="text-zinc-400 leading-relaxed font-light">Aprovechamos Next.js App Router para entregar contenido renderizado en el servidor, garantizando que cada bit de información sea indexable por Google.</p>
              </div>
              <div className="p-10 bg-zinc-900 border border-white/5 rounded-3xl hover:bg-zinc-800 transition-colors">
                 <h4 className="text-2xl font-bold mb-6 text-purple-400">Bases de Datos Real-time</h4>
                 <p className="text-zinc-400 leading-relaxed font-light">Uso extensivo de Supabase para gestión de datos relacionales, almacenamiento de archivos y actualizaciones en tiempo real bajo demanda.</p>
              </div>
           </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          faqs={saasFaqs}
          title="Dudas sobre SaaS & Next.js"
          description="Preguntas técnicas comunes que resolvemos al iniciar un proyecto de desarrollo a medida."
        />

        {/* CTA Banner */}
        <section className="relative py-32 px-6">
           <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-10 text-white">¿Tu proyecto requiere <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 uppercase tracking-tighter">Ingeniería Pro?</span></h2>
              <a 
                href="https://calendly.com/javiermillar/reunion-webunica" 
                target="_blank"
                className="inline-block px-12 py-6 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold text-xl rounded-2xl hover:scale-105 transition-all shadow-3xl shadow-blue-500/20"
              >
                Agendar Evaluación de Proyecto
              </a>
           </div>
        </section>
      </main>
    </div>
  );
}
