import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';

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

  const plans = [
    {
      name: "MVP SaaS NEXT.JS",
      price: "$2.400.000",
      highlight: "Lanza tu producto al mercado rápido",
      features: [
        "Arquitectura Next.js 16 + App Router",
        "Base de Datos Supabase (PostgreSQL)",
        "Autenticación (Email, Google, Github)",
        "Panel de Usuario y Dashboard básico",
        "Integración de Pagos (Stripe o Webpay)",
        "Despliegue automático en Vercel",
        "SEO Técnico Optimizado",
        "Certificado SSL y Dominio configurado",
        "Soporte post-lanzamiento 1 mes"
      ],
      time: "4 a 6 semanas",
      cta: "Iniciar mi MVP"
    },
    {
      name: "CUSTOM SaaS SUITE",
      price: "$4.800.000",
      highlight: "Escalabilidad y Lógica Compleja",
      features: [
        "Todo lo del Plan MVP, más:",
        "Roles de Usuario avanzados (Admin, Editor, Contribuyente)",
        "Multitenancy (Múltiples organizaciones)",
        "Panel de Analítica personalizado con gráficos",
        "Integraciones API vía Webhooks (Zapier, CRM)",
        "Automatización de Emails transaccionales (Resend/Postmark)",
        "Optimización de Performance Extrema",
        "Diseño UX/UI Boutique a medida",
        "Capacitación técnica de arquitectura",
        "Soporte prioritario 3 meses"
      ],
      recommended: true,
      time: "8 a 12 semanas",
      cta: "Construir mi Plataforma"
    },
    {
      name: "SaaS ENTERPRISE",
      price: "Consultar",
      highlight: "Ecosistemas Digitales de Gran Escala",
      features: [
        "Desarrollo de Software de Misión Crítica",
        "Microservicios y Arquitectura Distribuida",
        "Seguridad de Nivel Bancario",
        "Integración con Sistemas Legados",
        "SLA de Disponibilidad Garantizada",
        "Auditoría técnica y de seguridad completa",
        "Equipo de desarrollo dedicado",
        "Diseño de marca y manual de identidad",
        "Estrategia de crecimiento y escalado infra",
        "Contrato de Mantenimiento Preferente"
      ],
      time: "Proyecto a medida",
      cta: "Solicitar Evaluación Presencial"
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
    <div className="min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="pt-[20vh]">
        {/* Futuristic Hero Section */}
        <section className="relative max-w-7xl mx-auto px-6 py-20 lg:py-40 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/20 blur-[150px] rounded-full -z-10 animate-pulse" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">Next.js 16 + Supabase + Vercel Stack</span>
              </div>
              <h1 className="text-5xl lg:text-[90px] font-black tracking-tighter leading-[0.85] mb-10 text-white uppercase">
                TRANSFORMAMOS <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-500 to-emerald-400 font-serif italic lowercase font-light">Código en Negocio</span>
              </h1>
              <p className="text-xl text-zinc-400 mb-12 max-w-xl leading-relaxed text-pretty font-light">
                Desarrollo de software y plataformas SaaS a medida bajo estándares de ingeniería de élite. Velocidad extrema, arquitectura escalable y lógica de negocio compleja.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <LeadButton 
                  className="inline-block px-12 py-6 bg-white text-black font-bold text-lg rounded-2xl hover:bg-zinc-200 transition-all shadow-2xl shadow-white/5 scale-100 hover:scale-105 active:scale-95"
                >
                  Agendar Consultoría Técnica
                </LeadButton>
                <a href="#pricing" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-bold text-center hover:bg-white/10 transition-all">
                  Ver Inversión
                </a>
              </div>
            </div>
            <div className="relative" data-aos="zoom-in">
              <div className="absolute -inset-10 bg-violet-500/20 rounded-full blur-[100px] -z-10" />
              <div className="bg-zinc-900 border border-white/10 rounded-[3rem] p-4 md:p-8 shadow-2xl relative overflow-hidden group transform rotate-1 hover:rotate-0 transition-transform duration-700">
                 <Image 
                    src="/saas_hero_new.png"
                    alt="Next.js SaaS Dashboard Architecture"
                    width={1000}
                    height={1000}
                    priority
                    quality={90}
                    className="rounded-[2rem] transform group-hover:scale-105 transition-transform duration-1000 w-full h-auto"
                 />
              </div>
            </div>
          </div>
        </section>

        {/* Lead Magnet Section */}
        <section className="py-24 bg-white mx-4 rounded-[4rem] relative overflow-hidden group">
           <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
              <h2 className="text-4xl lg:text-5xl font-black text-zinc-950 mb-8 tracking-tighter uppercase">
                ¿Tu idea merece escala global?
              </h2>
              <p className="text-xl text-zinc-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed text-pretty">
                Obtén un <span className="text-violet-600 font-bold">10% de DESCUENTO</span> en el desarrollo de tu MVP al contactarnos hoy. Hagamos que tu software sea imparable.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                 <LeadButton className="px-12 py-6 bg-zinc-950 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl shadow-zinc-950/20 hover:scale-105 active:scale-95 transition-all">
                    Reclamar Descuento VIP
                 </LeadButton>
              </div>
           </div>
        </section>

        {/* Success Case: SoloCasasChile */}
        <section className="bg-zinc-900 text-white py-32 rounded-[4rem] lg:rounded-[6rem] mx-4 my-10 relative overflow-hidden border border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
             <div className="flex flex-col lg:flex-row gap-20 items-center">
                <div className="lg:w-1/2" data-aos="fade-right">
                   <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-violet-400 mb-6 font-bold">Featured Case Study</h2>
                   <h3 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 text-white uppercase leading-[0.9]">SoloCasasChile.com</h3>
                   <div className="space-y-6 text-xl text-zinc-400 leading-relaxed mb-10 font-light text-pretty">
                      <p>Un marketplace PropTech líder en su industria, desarrollado íntegramente bajo la metodología Webunica.</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {[
                            'Filtrado dinámico ultra-rápido',
                            'Arquitectura SEO Avanzada',
                            'Panel Admin personalizado',
                            'Seguridad Supabase RLS',
                            '100% Speed Score Vercel'
                         ].map((item, i) => (
                            <li key={i} className="flex gap-4 items-center text-sm">
                               <span className="w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center text-white text-[10px]">✓</span>
                               {item}
                            </li>
                         ))}
                      </ul>
                   </div>
                   <a 
                    href="https://solocasaschile.com" 
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-3 text-2xl font-bold border-b-4 border-violet-500 hover:text-violet-300 transition-colors pb-2"
                   >
                    Explorar el Proyecto
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                   </a>
                </div>
             </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
           <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-violet-600/5 blur-[150px] rounded-full" />
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-24">
                 <span className="text-xs font-black tracking-[0.3em] text-violet-400 uppercase mb-4 block">Engineered Solutions</span>
                 <h2 className="text-4xl lg:text-7xl font-black tracking-tighter uppercase mb-10 text-white">Inversión en Ingeniería</h2>
                 <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed">No es un gasto, es la construcción de un activo digital propio, escalable y eterno.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                 {plans.map((plan, i) => (
                    <div key={i} className={`relative bg-zinc-900 rounded-[4rem] p-10 lg:p-14 border-2 transition-all duration-500 hover:translate-y-[-10px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_40px_80px_rgba(124,58,237,0.2)] ${plan.recommended ? 'border-violet-500' : 'border-white/5 hover:border-violet-500/30'}`}>
                       {/* Descuento Badge */}
                       <div className="absolute top-8 right-8 bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-full animate-pulse">
                         10% OFF
                       </div>
                       {plan.recommended && (
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                          Más Estratégico
                        </div>
                      )}
                      <div className="mb-10">
                        <h3 className="text-2xl font-black text-white mb-2 uppercase">{plan.name}</h3>
                        <p className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-6">{plan.highlight}</p>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-black tracking-tight">{plan.price}</span>
                            <span className="text-zinc-500 font-bold text-sm">+ IVA</span>
                          </div>
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-zinc-500 text-sm font-medium">
                           <span className="text-lg">💳</span> Opción de pago por hitos / Facilidades
                        </div>
                      </div>

                      <ul className="space-y-4 mb-12">
                         {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-sm text-zinc-400 font-light">
                               <div className="w-5 h-5 rounded-full bg-violet-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                 <svg className="w-3 h-3 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                               </div>
                               {feature}
                            </li>
                         ))}
                      </ul>

                      <div className="mt-auto space-y-4">
                         <LeadButton className={`w-full py-5 rounded-2xl font-bold text-center transition-all ${plan.recommended ? 'bg-violet-600 text-white shadow-xl shadow-violet-600/20 hover:bg-violet-700' : 'bg-white text-black hover:bg-zinc-200'}`}>
                            Obtener 10% Dto
                         </LeadButton>
                         <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest pt-4">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            {plan.time}
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Global CTA Section / Meetings */}
        <section className="py-32 max-w-7xl mx-auto px-6">
           <div className="bg-white rounded-[5rem] p-12 lg:p-24 text-center relative overflow-hidden group border border-zinc-200">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />
              <div className="relative z-10 max-w-4xl mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-black text-zinc-950 mb-10 tracking-tighter uppercase leading-[0.9]">
                    ¿Construimos el <br/><span className="text-violet-600 italic font-serif lowercase font-light">Futuro de tu empresa?</span>
                 </h2>
                 <p className="text-xl text-zinc-500 mb-14 max-w-2xl mx-auto font-light leading-relaxed">
                    Agenda una consultoría técnica inicial para analizar la viabilidad de tu SaaS o software a medida.
                 </p>
                 <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <LeadButton className="px-12 py-6 bg-zinc-950 text-white font-black uppercase tracking-widest text-[11px] rounded-[2rem] hover:scale-105 active:scale-95 transition-all w-full md:w-auto">
                       Solicitar Auditoría de Proyecto
                    </LeadButton>
                    <WhatsAppButton className="px-12 py-6 bg-[#25d366] text-white font-black uppercase tracking-widest text-[11px] rounded-[2rem] hover:scale-105 active:scale-95 transition-all w-full md:w-auto flex items-center justify-center gap-3 shadow-2xl shadow-[#25d366]/20">
                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.552.92 3.14 1.403 4.887 1.403 5.421 0 9.832-4.412 9.835-9.835.002-2.628-1.023-5.1-2.885-6.963-1.862-1.861-4.331-2.884-6.953-2.885-5.424 0-9.837 4.412-9.839 9.835-.001 1.83.524 3.614 1.517 5.176l-1.008 3.682 3.773-.99zm10.749-6.354c-.287-.144-1.701-.84-1.967-.936-.267-.096-.462-.144-.657.144-.195.288-.753.936-.922 1.129-.169.193-.338.216-.625.072-.287-.144-1.21-.447-2.305-1.423-.852-.76-1.427-1.7-1.593-1.987-.167-.287-.018-.443.126-.586.129-.129.287-.336.43-.504.144-.168.191-.288.287-.48.096-.192.048-.36-.024-.504-.072-.144-.657-1.585-.9-2.16-.234-.56-.475-.483-.655-.492-.17-.008-.364-.009-.558-.009s-.51.072-.776.36c-.267.288-1.018 1.008-1.018 2.459 0 1.45 1.056 2.855 1.203 3.048.147.193 2.078 3.174 5.035 4.453.703.305 1.252.487 1.68.623.709.226 1.354.194 1.864.118.57-.085 1.701-.696 1.944-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.193-.554-.337z" /></svg>
                       Consultar por WhatsApp
                    </WhatsAppButton>
                    <a 
                       href="https://calendly.com/javiermillar/reunion-webunica" 
                       target="_blank" 
                       className="px-12 py-6 bg-violet-600 text-white font-black uppercase tracking-widest text-[11px] rounded-[2rem] hover:scale-105 active:scale-95 transition-all w-full md:w-auto flex items-center justify-center gap-3 shadow-2xl shadow-violet-600/40"
                    >
                       <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                       Agendar Sesión Técnica
                    </a>
                 </div>
              </div>
           </div>
        </section>

        {/* FAQ Section */}
        <div className="pb-32">
          <FAQSection 
            faqs={saasFaqs}
            title="Dudas sobre SaaS & Next.js"
            description="Preguntas técnicas comunes que resolvemos al iniciar un proyecto de desarrollo a medida."
            ctaTitle="¿Ingeniería en tu marca?"
            ctaDescription="Hablemos sobre tu visión y cómo la tecnología puede impulsarla de forma real."
            ctaLabel="Agendar Consultoría Gratuita"
          />
        </div>
      </main>
    </div>
  );
}
