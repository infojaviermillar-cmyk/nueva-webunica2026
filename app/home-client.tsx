"use client";

import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import FeaturedBlogSection from '@/components/sections/featured-blog';
import { useContactModal } from '@/context/contact-modal-context';
import LeadButton from '@/components/ui/lead-button';
import FunnelAnimation from '@/components/ui/funnel-animation';

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
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Webunica - Agencia de Marketing Performance & Desarrollo Web",
    "url": "https://webunica.cl/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://webunica.cl/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Webunica",
    "url": "https://webunica.cl/",
    "logo": "https://webunica.cl/logo-webunica.png.webp",
    "sameAs": [
      "https://www.instagram.com/webunica.cl/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Santiago",
      "addressCountry": "CL"
    }
  };

  const homeFaqs = [
    {
      question: "¿Qué es un embudo de ventas y por qué lo necesito?",
      answer: "Un embudo de ventas (Sales Funnel) es un sistema diseñado para guiar al usuario desde el interés inicial hasta la conversión final (venta o lead). A diferencia de una web estática, un embudo maximiza el ROI al eliminar distracciones y enfocar al usuario en una sola acción comercial."
    },
    {
      question: "¿Por qué Webunica usa Next.js para sus proyectos?",
      answer: "Next.js es la tecnología web más rápida y potente de la actualidad. Nos permite ofrecer carga instantánea, SEO técnico superior y una experiencia móvil fluida, factores críticos para que Google te posicione y tus clientes te compren."
    },
    {
      question: "¿Integran los embudos con pasarelas de pago chilenas?",
      answer: "Sí, todos nuestros sistemas de e-commerce y embudos de pago están 100% integrados con Webpay, Flow, Mercado Pago y Ventipay para operar sin fricción en el mercado chileno."
    },
    {
      question: "¿Cómo garantizan la captación de leads de calidad?",
      answer: "Implementamos formularios inteligentes, cuestionarios de calificación y tracking avanzado de conversiones para asegurar que solo los prospectos que realmente encajan con tu negocio lleguen a tu equipo comercial."
    }
  ];

  const funnelPlans = [
    {
      name: "Embudo BASE",
      price: "$480.000",
      highlight: "Para campañas de captación rápida",
      features: [
        "1 Landing Page de alta conversión",
        "Copywriting persuasivo para ventas",
        "Formulario inteligente integrado",
        "Página de Gracias estratégica",
        "Integración WhatsApp Business",
        "Tracking de visitas y conversiones",
        "Desarrollo High-Performance Next.js",
        "Carga ultra rápida < 1s",
        "Soporte técnico 1 mes"
      ],
      time: "2 semanas",
      cta: "Comenzar mi Embudo"
    },
    {
      name: "Embudo PRO",
      price: "$880.000",
      highlight: "Para escalar inversión en Ads",
      features: [
        "Todo lo del Embudo Base, más:",
        "Lead Magnet (Recurso descargable)",
        "Automatización de Email Marketing",
        "Instalación de API de Conversiones",
        "Conexión con CRM (Hubspot/Pipedrive)",
        "Dashboard de resultados en vivo",
        "Optimización SEO Técnica",
        "Cuestionario de Calificación de Leads",
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
        "Multipágina / Sistema Completo",
        "Segmentación avanzada por servicio",
        "Formularios condicionales dinámicos",
        "Automatizaciones Email/SMS Pro",
        "A/B Testing de elementos clave",
        "Reporting mensual detallado",
        "Integración comercial full stack",
        "Estrategia de Remarketing activa",
        "Consultoría estratégica 6 meses"
      ],
      time: "6 a 8 semanas",
      cta: "Construir Sistema Escalable"
    }
  ];

  const dropshippingPlans = [
    {
      name: "Dropi Básico",
      price: "$580.000",
      originalPrice: "$650.000",
      highlight: "Inicia sin stock propio",
      features: [
        "Desarrollo Tienda Shopify + Dropi",
        "Carga de 70 productos ganadores",
        "Sincronización automática de stock",
        "Pago Contra Entrega configurado",
        "Diseño High-Performance 2026",
        "Soporte 3 meses (3 cambios)"
      ],
      time: "4 semanas",
      cta: "Iniciar Dropi Básico"
    },
    {
      name: "Dropi Avanzado",
      price: "$780.000",
      originalPrice: "$980.000",
      highlight: "Escalado y Conversión Máxima",
      features: [
        "Todo lo del Plan Básico, más:",
        "Carga de 250 productos iniciales",
        "Optimización de Conversión (CRO)",
        "SEO avanzado de categorías",
        "Estrategia de recuperación de pedidos",
        "Soporte Prioritario Preferente"
      ],
      time: "5 semanas",
      recommended: true,
      cta: "Lanzar Dropi Avanzado"
    }
  ];

  return (
    <main className="min-h-screen font-sans antialiased text-zinc-900 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      
      {/* Hero Section - Funnel Focus */}
      <section className="relative pt-36 pb-36 lg:pt-[210px] lg:pb-[210px] bg-white overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <Image 
            src="/bg-01.jpg" 
            alt="Background Texture - Webunica Marketing" 
            fill 
            className="object-cover object-center" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pointer-events-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 pointer-events-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 mb-8">
                <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest text-violet-700">Agencia de Marketing Performance 2026</span>
              </div>
              <h1 className="text-[2.5rem] xs:text-5xl lg:text-[85px] font-black tracking-tighter leading-[0.85] mb-10 text-zinc-950 uppercase break-words">
                Convertimos <br/>Tráfico en <span className="text-violet-600 italic font-serif lowercase font-light">Clientes</span>
              </h1>
              <p className="text-xl text-zinc-500 mb-12 max-w-xl leading-relaxed text-pretty font-light">
                Construimos <strong className="text-zinc-900">Embudos de Venta</strong> y ecosistemas digitales con <strong className="text-zinc-900">Next.js</strong> diseñados para captar leads, agendar reuniones y cerrar ventas automáticamente.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mt-8 relative z-20">
                <button 
                  onClick={() => openModal()}
                  className="px-8 sm:px-12 py-6 bg-violet-600 text-white rounded-[2rem] font-black uppercase tracking-[0.15em] text-[10px] flex items-center justify-center gap-3 hover:bg-violet-700 transition-all shadow-2xl shadow-violet-600/30 scale-100 hover:scale-105 active:scale-95 group/btn"
                >
                  Agendar Consultoría con 10% Dto
                </button>
                <Link 
                  href="/portafolio" 
                  className="px-6 sm:px-12 py-6 bg-zinc-50 text-zinc-900 border border-zinc-200 rounded-[2rem] font-black uppercase tracking-[0.15em] text-[10px] flex items-center justify-center hover:bg-white transition-all active:scale-95"
                >
                  Ver Casos de Éxito
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 relative w-full pointer-events-auto min-h-[400px] flex items-center justify-center">
              <FunnelAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-900/20 via-transparent to-rose-900/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                ⚠️ Alerta de Rendimiento
              </div>
              <h2 className="text-3xl xs:text-4xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-8 break-words">
                Tu web de <span className="text-rose-500 italic font-serif lowercase font-light">5 años atrás</span> ya no funciona
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-xl lg:text-2xl text-zinc-400 font-light leading-relaxed mb-10">
                El mundo digital ha cambiado. Una web estática es un agujero negro para tu presupuesto. Necesitas un sistema que cargue en <strong className="text-white">milisegundos</strong> y convierta visitas en ingresos recurrentes.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-white mb-2 tracking-tighter">7.4s</span>
                  <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest leading-tight">Carga web <br/>tradicional</span>
                </div>
                <div className="w-px h-12 bg-zinc-800 hidden sm:block mt-2" />
                <div className="flex flex-col">
                  <span className="text-4xl font-black text-violet-500 mb-2 tracking-tighter">0.6s</span>
                  <span className="text-[10px] font-black text-violet-400/60 uppercase tracking-widest leading-tight">Carga con <br/>Next.js 2026</span>
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
            <h2 className="text-4xl lg:text-7xl font-black tracking-tighter uppercase mb-10 text-zinc-950">Planes de Embudos</h2>
            <p className="text-xl text-zinc-500 max-w-3xl mx-auto font-light leading-relaxed">Infraestructura comercial digital diseñada para convertir visitas en ingresos constantes.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {funnelPlans.map((plan, i) => (
              <div key={i} className={`relative bg-white rounded-[4rem] p-10 lg:p-14 border-2 transition-all duration-500 hover:translate-y-[-10px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(124,58,237,0.1)] ${plan.recommended ? 'border-violet-500' : 'border-zinc-100'}`}>
                <div className="absolute top-8 right-8 bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-full animate-pulse z-20">
                  10% OFF
                </div>
                <div className="mb-10">
                  <h3 className="text-2xl font-black text-zinc-900 mb-2 uppercase">{plan.name}</h3>
                  <p className="text-xs font-bold text-violet-500 uppercase tracking-wider mb-6">{plan.highlight}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black tracking-tight">{plan.price}</span>
                    <span className="text-zinc-400 font-bold ml-1">+ IVA</span>
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

                <LeadButton className={`w-full py-5 rounded-2xl font-bold text-center transition-all ${plan.recommended ? 'bg-violet-600 text-white shadow-xl shadow-violet-600/20 hover:bg-violet-700' : 'bg-zinc-950 text-white hover:bg-zinc-800'}`}>
                  {plan.cta}
                </LeadButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={homeFaqs}
        title="Preguntas sobre Embudos de Venta"
        description="Todo lo que necesitas saber para transformar tu presencia web en una máquina de captación de leads."
        ctaTitle="¿Agendamos una reunión técnica?"
        ctaDescription="Déjanos entender tu modelo de negocio y diseñaremos un mapa de conversión exclusivo para tu marca."
        ctaLabel="Agendar Consultoría Gratuita"
      />

      <LeadResourceModal 
        isOpen={resourceModal.isOpen} 
        onClose={() => setResourceModal({ ...resourceModal, isOpen: false })}
        resourceName={resourceModal.name}
        resourceSlug={resourceModal.slug}
      />
    </main>
  );
}
