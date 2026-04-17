"use client";

import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import FeaturedBlogSection from '@/components/sections/featured-blog';
import { useContactModal } from '@/context/contact-modal-context';
import LeadButton from '@/components/ui/lead-button';

import { BlogPost } from '@/lib/blog';

import TestimonialsSection from '@/components/sections/testimonials';
import LeadResourceModal from '@/components/modals/lead-resource-modal';
import { useState } from 'react';

export default function HomeClient({ posts }: { posts: BlogPost[] }) {
  const { openModal } = useContactModal();
  const [resourceModal, setResourceModal] = useState({ isOpen: false, name: '', slug: '' });
  
  const openResourceModal = (name: string, slug: string) => {
    setResourceModal({ isOpen: true, name, slug });
  };
  
  const homeFaqs = [
    {
      question: "¿Por qué un embudo de venta es mejor que una web tradicional?",
      answer: "Una web tradicional suele ser estática e informativa. Un embudo de venta está diseñado con un solo objetivo: la conversión. Guía al usuario paso a paso hacia la acción (cotizar, agendar o comprar) eliminando distracciones y maximizando tu retorno de inversión."
    },
    {
      question: "¿Qué rol juega Next.js en mis embudos?",
      answer: "La velocidad es el factor #1 de conversión. Cada segundo de demora reduce tus ventas un 7%. Usamos Next.js para que tus embudos carguen de forma instantánea, ofreciendo la mejor experiencia móvil y el SEO técnico más sólido del mercado."
    },
    {
      question: "¿Pueden integrar el embudo con mi CRM actual?",
      answer: "Totalmente. Conectamos tus formularios inteligentes con CRM como Salesforce, HubSpot, Pipedrive o incluso soluciones personalizadas. Tus leads llegarán directamente a tu equipo comercial en tiempo real."
    },
    {
      question: "¿Cómo miden el éxito de un embudo?",
      answer: "Implementamos tracking avanzado de conversiones. Sabrás exactamente cuántas visitas recibes, cuántos leads generas y cuál es el costo por adquisición de cada cliente, permitiéndote escalar con datos reales, no con suposiciones."
    }
  ];

  const funnelPlans = [
    {
      name: "Embudo BASE",
      price: "$480.000",
      highlight: "Para campañas de captación rápida",
      features: [
        "1 Landing Page de alta conversión",
        "Copy estructurado para ventas",
        "Formulario inteligente conectado",
        "Página de Gracias estratégica",
        "Integración WhatsApp / Agenda",
        "Tracking básico de visitas",
        "Diseño High-Performance Next.js",
        "Carga instantánea < 1s",
        "Soporte técnico 1 mes"
      ],
      time: "2 semanas",
      cta: "Comenzar mi Embudo"
    },
    {
      name: "Embudo PRO",
      price: "$880.000",
      highlight: "Para escalar inversión en anuncios",
      features: [
        "Todo lo del Embudo Base, más:",
        "Lead Magnet o Recurso descargable",
        "Automatización de Email Inicial",
        "Instalación de Pixeles y Conversiones",
        "Conexión con CRM (Hubspot/Pipedrive)",
        "Dashboard básico de resultados",
        "SEO Técnico avanzado",
        "Calificación de Leads (Cuestionario)",
        "Soporte prioritario 3 meses"
      ],
      recommended: true,
      time: "4 semanas",
      cta: "Lanzar Embudo PRO"
    },
    {
      name: "Embudo ESCALABLE",
      price: "$1.400.000",
      highlight: "Para negocios con múltiples ofertas",
      features: [
        "Multipágina / Varias Landing Pages",
        "Segmentación avanzada por servicio",
        "Formularios condicionales complejos",
        "Automatizaciones avanzadas (Email/SMS)",
        "A/B Testing de elementos clave",
        "Reporting mensual detallado",
        "Integración comercial full",
        "Estrategia de Remarketing activa",
        "Consultoría estratégica 6 meses"
      ],
      time: "6 a 8 semanas",
      cta: "Construir Sistema Escalable"
    }
  ];

  return (
    <main className="min-h-screen font-sans antialiased text-zinc-900 overflow-x-hidden">
      {/* Hero Section - Funnel Focus */}
      <section className="relative pt-36 pb-36 lg:pt-[210px] lg:pb-[210px] bg-white overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <Image 
            src="/bg-01.jpg" 
            alt="Background Texture" 
            fill 
            className="object-cover object-center" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 mb-8">
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest text-violet-700 font-black">Performance Marketing Agency 2026</span>
              </div>
              <h1 className="text-5xl lg:text-[85px] font-black tracking-tighter leading-[0.85] mb-10 text-zinc-950 uppercase">
                CONVERTIMOS <br/>TRÁFICO EN <span className="text-violet-600 font-serif italic lowercase font-light">Clientes</span>
              </h1>
              <p className="text-xl text-zinc-500 mb-12 max-w-xl leading-relaxed text-pretty font-light">
                No te vendemos una página web. Construimos un <span className="text-violet-600 font-bold">Sistema de Captación de Leads</span> de alto rendimiento diseñado para captar contactos, agendar reuniones y cerrar ventas automáticamente.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mt-8 relative z-20">
                <button 
                  onClick={() => openModal()}
                  className="px-12 py-6 bg-violet-600 text-white rounded-[2rem] font-black uppercase tracking-[0.15em] text-[10px] flex items-center justify-center gap-3 hover:bg-violet-700 transition-all shadow-2xl shadow-violet-600/30 scale-100 hover:scale-105 active:scale-95 group/btn"
                >
                  Agendar Consultoría de Ventas
                </button>
                <Link 
                  href="/portafolio" 
                  className="px-12 py-6 bg-zinc-50 text-zinc-900 border border-zinc-200 rounded-[2rem] font-black uppercase tracking-[0.15em] text-[10px] flex items-center justify-center hover:bg-white transition-all active:scale-95"
                >
                  Casos de Éxito
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="bg-violet-50 rounded-[3rem] p-10 lg:p-14 relative group overflow-hidden border-2 border-violet-100 shadow-2xl shadow-violet-600/5 transition-all hover:scale-[1.02]">
                <div className="flex justify-between items-center mb-10">
                  <div className="text-4xl text-violet-600">📈</div>
                  <div className="text-[10px] font-black text-violet-600 bg-white border border-violet-100 px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">High Performance Funnel</div>
                </div>
                <h2 className="text-3xl font-black mb-6 text-zinc-950 leading-tight tracking-tighter uppercase">Donde la velocidad impulsa tu facturación</h2>
                <p className="text-zinc-500 font-light leading-relaxed mb-8">
                  Deja de pagar por páginas que solo informan. Construye un ecosistema diseñado para convertir cada visita en una oportunidad real de negocio.
                </p>
                <div className="space-y-4">
                  <div className="h-1.5 w-full bg-zinc-200 rounded-full overflow-hidden">
                    <div className="h-full bg-violet-600 w-[98%] animate-grow shadow-[0_0_15px_rgba(139,92,246,0.6)]" />
                  </div>
                  <div className="flex justify-between text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                    <span>Funnel Conversion Rate</span>
                    <span className="text-violet-600">98% SCORE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof: Testimonials */}
      <TestimonialsSection />

      {/* Pricing Section - Funnels Packs */}
      <section id="pricing" className="py-32 bg-[#fcfcfc] border-y border-zinc-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-xs font-black tracking-[0.3em] text-violet-600 uppercase mb-4 block">Sistemas de Venta</span>
            <h2 className="text-4xl lg:text-7xl font-black tracking-tighter uppercase mb-10 text-zinc-950">Planes de Embudos 2026</h2>
            <p className="text-xl text-zinc-500 max-w-3xl mx-auto font-light leading-relaxed">Infraestructura comercial digital diseñada para convertir visitas en ingresos recurrentes.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {funnelPlans.map((plan, i) => (
              <div key={i} className={`relative bg-white rounded-[4rem] p-10 lg:p-14 border-2 transition-all duration-500 hover:translate-y-[-10px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(124,58,237,0.1)] ${plan.recommended ? 'border-violet-500' : 'border-zinc-100 hover:border-violet-200'}`}>
                {plan.recommended && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    Impulso Máximo
                  </div>
                )}
                <div className="mb-10">
                  <h3 className="text-2xl font-black text-zinc-900 mb-2 uppercase">{plan.name}</h3>
                  <p className="text-xs font-bold text-violet-500 uppercase tracking-wider mb-6">{plan.highlight}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black tracking-tight">{plan.price}</span>
                    <span className="text-zinc-400 font-bold">+ IVA</span>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-zinc-500 text-sm font-medium">
                    <span className="text-lg">💰</span> Recuperación de inversión acelerada
                  </div>
                </div>

                <ul className="space-y-4 mb-12">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm text-zinc-600 font-light">
                      <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto space-y-4">
                  <LeadButton className={`w-full py-5 rounded-2xl font-bold text-center transition-all ${plan.recommended ? 'bg-violet-600 text-white shadow-xl shadow-violet-600/20 hover:bg-violet-700' : 'bg-zinc-950 text-white hover:bg-zinc-800'}`}>
                    {plan.cta}
                  </LeadButton>
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-center pt-4">
                    Entrega estimada: {plan.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="bg-zinc-950 py-32 rounded-[4rem] mx-4 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.9]">
            Tu sitio actual es un gasto. <br/><span className="text-violet-400 italic font-serif lowercase font-light">Un embudo es una inversión</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-14 max-w-2xl mx-auto font-light leading-relaxed text-pretty">
            La mayoría de las agencias venden "diseño". Nosotros vendemos resultados comerciales utilizando la tecnología web más rápida del mundo. Menos fuga de prospectos, más reuniones cerradas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { t: 'Captación Proactiva', d: 'Guía al cliente paso a paso sin distracciones.' },
              { t: 'Automatización Seguimiento', d: 'Tus leads calificados llegan directo al CRM.' },
              { t: 'Velocidad Insuperable', d: 'Next.js garantiza carga de milisegundos.' }
            ].map((v, i) => (
              <div key={i} className="text-left p-8 bg-white/5 border border-white/10 rounded-3xl">
                <span className="text-violet-400 font-black mb-4 block">0{i+1}.</span>
                <h3 className="text-lg font-bold text-white mb-2 uppercase">{v.t}</h3>
                <p className="text-zinc-500 text-sm font-light leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recurso: Listas de Verificación CRO */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-bold text-xs uppercase tracking-widest mb-4">
              Recursos de E-commerce
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 mb-6">
              Auditorías CRO Listas para Usar
            </h2>
            <p className="text-lg text-zinc-500 max-w-2xl mx-auto font-medium">
              Utiliza nuestras plantillas interactivas de evaluación para descubrir por qué tu tienda Shopify está perdiendo ventas y cómo solucionarlo rápidamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Básica */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 flex flex-col items-center text-center transition-all hover:shadow-lg">
              <h3 className="text-2xl font-black text-slate-900 mb-2">Checklist CRO Básica</h3>
              <p className="text-slate-500 mb-6 font-medium">Detecta errores comunes de usabilidad, confianza y experiencia de usuario.</p>
              <div className="text-3xl font-black text-slate-900 mb-8">
                Gratis <span className="text-[11px] text-slate-400 font-bold uppercase tracking-widest block mt-2">Requiere Registro Gratuito</span>
              </div>
              <button 
                onClick={() => openResourceModal('Checklist CRO Básica', '/listas-de-verificacion-shopify-cro-basica')}
                className="w-full py-4 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
              >
                Descargar Lista Básica
              </button>
            </div>

            {/* Pro */}
            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-10 flex flex-col items-center text-center transition-all hover:shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-bl-xl">Pro Version</div>
              <h3 className="text-2xl font-black text-amber-900 mb-2">Auditoría CRO PRO</h3>
              <p className="text-amber-700/80 mb-6 font-medium">El marco avanzado completo de Webunica con más de 120 puntos de conversión.</p>
              <div className="text-3xl font-black text-amber-900 mb-8">
                $10.000 <span className="text-[11px] text-amber-900/60 font-bold uppercase tracking-widest block mt-2">CLP (Impuestos Incluidos)</span>
              </div>
              <Link href="/listas-de-verificacion-shopify-cro-pro" className="w-full py-4 rounded-xl font-bold text-white bg-amber-500 hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/25">
                Desbloquear Acceso PRO
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (Repositioned as Secondary) */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-950 uppercase leading-none mb-6">
              Ecosistemas de <br/><span className="text-zinc-400">Ingeniería Web</span>
            </h2>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed">Aunque los embudos son nuestra prioridad, construimos infraestructuras web robustas para cualquier necesidad comercial.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/desarrollo-tiendas-shopify-chile" className="p-10 bg-white border border-zinc-100 rounded-[3rem] hover:border-violet-300 transition-all group shadow-sm hover:shadow-2xl hover:shadow-violet-600/5">
              <div className="w-16 h-16 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">🛍️</div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Shopify Expertise</h3>
              <p className="text-zinc-500 font-light leading-relaxed text-sm">Escalamos marcas de e-commerce sobre el ecosistema más potente del mundo.</p>
            </Link>
            
            <Link href="/desarrollo-web-nextjs-saas-custom" className="p-10 bg-white border border-zinc-100 rounded-[3rem] hover:border-violet-300 transition-all group shadow-sm hover:shadow-2xl hover:shadow-violet-600/5">
              <div className="w-16 h-16 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">⚡</div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">Plataformas SaaS</h3>
              <p className="text-zinc-500 font-light leading-relaxed text-sm">Software a medida para automatizar procesos complejos con Next.js y Supabase.</p>
            </Link>

            <Link href="/servicios-seo-posicionamiento-google" className="p-10 bg-white border border-zinc-100 rounded-[3rem] hover:border-violet-300 transition-all group shadow-sm hover:shadow-2xl hover:shadow-violet-600/5">
              <div className="w-16 h-16 bg-violet-50 text-violet-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">🚀</div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">SEO de Resultados</h3>
              <p className="text-zinc-500 font-light leading-relaxed text-sm">Estrategias técnicas avanzadas para captar tráfico orgánico calificado y rentable.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Blog */}
      <FeaturedBlogSection posts={posts} />

      {/* FAQ Section */}
      <FAQSection 
        faqs={homeFaqs}
        title="Preguntas frecuentes sobre Embudos"
        description="Lo que necesitas saber para transformar tu presencia web en una máquina de captación."
        ctaTitle="¿Agendamos una reunión técnica?"
        ctaDescription="Déjanos entender tu modelo de negocio y diseñaremos un mapa de conversión exclusivo para tu marca."
        ctaLabel="Agendar Consultoría Gratuita"
      />

      {/* Lead Magnet CTA */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto bg-zinc-950 rounded-[5rem] p-12 lg:p-24 text-center text-white relative overflow-hidden group">
          <h2 className="text-4xl lg:text-7xl font-black mb-10 tracking-tighter uppercase leading-[0.9]">
            Tu embudo <br/><span className="text-violet-400 italic font-serif lowercase font-light">empieza</span> ahora
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-lg mx-auto font-light leading-relaxed">
            Obtén un <span className="text-violet-400 font-bold">10% de DESCUENTO</span> en tu primer embudo al cotizar hoy. No pierdas más leads.
          </p>
          <LeadButton 
            className="inline-block px-12 py-6 bg-violet-600 text-white font-black uppercase tracking-widest text-[11px] rounded-[2.5rem] hover:bg-violet-700 transition-all shadow-2xl shadow-violet-600/40 hover:scale-105 active:scale-95"
          >
            Reclamar mi 10% de Descuento
          </LeadButton>
        </div>
      </section>
      <LeadResourceModal 
        isOpen={resourceModal.isOpen} 
        onClose={() => setResourceModal({ ...resourceModal, isOpen: false })}
        resourceName={resourceModal.name}
        resourceSlug={resourceModal.slug}
      />
    </main>
  );
}
