import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import { CheckCircle2, ShoppingBag, Zap, ShieldCheck, Globe, Smartphone, Code } from 'lucide-react';

export const metadata = {
  title: 'Planes de Desarrollo Shopify en Chile | Precios & Servicios 2026',
  description: 'Descubre los planes de desarrollo Shopify más completos de Chile. Especialistas en Tiendas Emprendedor, Pro y Enterprise con integración Webpay y SII.',
  keywords: 'planes desarrollo shopify chile, precios shopify chile, cuanto cuesta una tienda shopify, partner shopify chile, experto shopify santiago, crear tienda online chile',
};

export default function PlanesShopifyChilePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Planes de Desarrollo Shopify en Chile",
    "description": "Servicios integrales de diseño, configuración y optimización de tiendas Shopify para el mercado chileno.",
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
    "areaServed": "CL",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Catálogo de Planes Shopify",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Shopify Emprendedor"
          },
          "price": "480000",
          "priceCurrency": "CLP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Plan Shopify Profesional"
          },
          "price": "880000",
          "priceCurrency": "CLP"
        }
      ]
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta crear una tienda Shopify en Chile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los planes profesionales comienzan desde los $480.000 + IVA. El costo final depende de la complejidad del diseño, integraciones y volumen de productos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Incluyen integración con Webpay y Facturación SII?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, todos nuestros planes están preparados para integrarse con pasarelas de pago chilenas y sistemas de facturación automática compatibles con el SII."
        }
      }
    ]
  };

  const plans = [
    {
      name: "PLAN EMPRENDEDOR",
      price: "$480.000",
      highlight: "Ideal para iniciar en el E-commerce",
      icon: <ShoppingBag className="w-8 h-8 text-emerald-500" />,
      features: [
        "Configuración Completa Shopify",
        "Diseño con Tema Oficial Optimizado",
        "Carga de hasta 50 Productos",
        "Integración Webpay / Flow / Mercado Pago",
        "Configuración de Envíos (Starken/Chilepost)",
        "Optimización SEO Básica",
        "Capacitación de Uso (1 hora)",
        "Soporte por 30 días"
      ],
      cta: "Empezar Plan Emprendedor",
      recommended: false
    },
    {
      name: "PLAN PROFESIONAL",
      price: "$880.000",
      highlight: "Para marcas que buscan escalar",
      icon: <Zap className="w-8 h-8 text-violet-500" />,
      features: [
        "Todo lo del Plan Emprendedor, más:",
        "Diseño Personalizado (Theme Premium)",
        "Carga de hasta 200 Productos",
        "Integración con Facturación SII",
        "Configuración de App de Reseñas",
        "SEO Técnico & Core Web Vitals",
        "Estrategia de Recuperación de Carritos",
        "Soporte Prioritario por 90 días"
      ],
      cta: "Elegir Plan Profesional",
      recommended: true
    },
    {
      name: "PLAN ENTERPRISE",
      price: "CONSULTAR",
      highlight: "Soluciones a medida y escalables",
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      features: [
        "Desarrollo Shopify Plus / Headless",
        "Programación Liquid Avanzada",
        "Integración con ERP / CRM Externos",
        "Migración de Datos desde WooCommerce/PrestaShop",
        "Consultoría Estratégica Mensual",
        "Auditoría CRO Ilimitada",
        "Infraestructura para Alto Tráfico",
        "Soporte 24/7 Dedicado"
      ],
      cta: "Contactar para Enterprise",
      recommended: false
    }
  ];

  const shopifyFaqs = [
    {
      question: "¿Cuánto tiempo demora el desarrollo de la tienda?",
      answer: "Un Plan Emprendedor suele estar listo en 10-15 días hábiles. Los proyectos Pro y Enterprise pueden tomar entre 4 y 8 semanas dependiendo de las integraciones requeridas."
    },
    {
      question: "¿Debo pagar mensualidades a Shopify?",
      answer: "Sí, Shopify es una plataforma SaaS que cobra una mensualidad (desde $25 USD aprox). Nuestros planes cubren el desarrollo, diseño y configuración inicial, pero la suscripción de la plataforma es externa."
    },
    {
      question: "¿Puedo administrar mi tienda yo mismo?",
      answer: "Absolutamente. Shopify es famoso por su facilidad de uso. Te entregamos capacitación y guías para que gestiones pedidos, stock y precios sin depender de nosotros."
    },
    {
      question: "¿Qué pasa si ya tengo una tienda en otra plataforma?",
      answer: "Realizamos migraciones seguras desde WooCommerce, Wix, PrestaShop o Jumpseller a Shopify, manteniendo tu historial de clientes y optimizando tus URLs para no perder SEO."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="pt-[20vh] pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 text-center py-20 lg:py-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Precios Transparentes 2026</span>
          </div>
          <h1 className="text-[2.5rem] xs:text-5xl lg:text-[80px] font-black tracking-tighter leading-[0.85] mb-10 uppercase break-words">
            Planes de Desarrollo <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Shopify Chile</span>
          </h1>
          <p className="text-xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Escoge la infraestructura adecuada para tu nivel de negocio. Desde el lanzamiento de tu primera marca hasta la expansión global de tu ecommerce.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <LeadButton className="px-12 py-6 bg-emerald-500 text-zinc-950 font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20">
              Ver Comparativa de Planes
            </LeadButton>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {plans.map((plan, i) => (
              <div 
                key={i} 
                className={`relative p-10 lg:p-14 bg-zinc-900 rounded-[4rem] border-2 transition-all duration-500 hover:translate-y-[-10px] flex flex-col h-full ${plan.recommended ? 'border-emerald-500 shadow-2xl shadow-emerald-500/10' : 'border-white/5'}`}
              >
                {plan.recommended && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-emerald-500 text-zinc-950 text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest">
                    Más Solicitado
                  </div>
                )}
                
                <div className="mb-10">
                  <div className="mb-6">{plan.icon}</div>
                  <h3 className="text-2xl font-black mb-2 uppercase text-white">{plan.name}</h3>
                  <p className="text-xs font-bold text-emerald-400 uppercase mb-8">{plan.highlight}</p>
                  <div className="text-5xl font-black text-white">
                    {plan.price}
                    {plan.price !== 'CONSULTAR' && <span className="text-sm text-zinc-500 font-light ml-2">+ IVA</span>}
                  </div>
                </div>

                <ul className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="text-sm text-zinc-400 flex gap-3 font-light items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>

                <LeadButton className={`w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-[10px] transition-all ${plan.recommended ? 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400' : 'bg-white text-zinc-950 hover:bg-zinc-200'}`}>
                  {plan.cta}
                </LeadButton>
              </div>
            ))}
          </div>
        </section>

        {/* Value Proposition */}
        <section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-black mb-10 uppercase tracking-tighter leading-[0.9]">
                Tecnología que <br/><span className="text-emerald-500">Impulsa Ventas</span>
              </h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center shrink-0 border border-white/5">
                    <ShieldCheck className="w-7 h-7 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 uppercase">Seguridad Total</h3>
                    <p className="text-zinc-500 font-light leading-relaxed">Infraestructura certificada Level 1 PCI DSS para que tus clientes compren con total confianza en Chile.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center shrink-0 border border-white/5">
                    <Smartphone className="w-7 h-7 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 uppercase">Mobile commerce Nativo</h3>
                    <p className="text-zinc-500 font-light leading-relaxed">Tu tienda se verá increíble y cargará al instante en cualquier smartphone, optimizada para compras rápidas.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center shrink-0 border border-white/5">
                    <Code className="w-7 h-7 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 uppercase">Código Optimizado</h3>
                    <p className="text-zinc-500 font-light leading-relaxed">Eliminamos el exceso de apps lentas con programación Liquid eficiente para un SEO impecable.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-10 bg-emerald-500/10 rounded-full blur-[100px] -z-10" />
              <div className="rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl bg-zinc-900 p-2">
                <Image 
                  src="/planes_shopify_chile_dashboard_premium.png"
                  alt="Gestión de Planes Shopify Chile - Webunica Partner"
                  width={800}
                  height={800}
                  className="w-full h-auto rounded-[3.5rem] transform group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          faqs={shopifyFaqs}
          title="Dudas sobre los Planes"
          description="Transparencia total sobre los costos, tiempos y beneficios de Shopify en Chile."
          ctaTitle="¿Necesitas un plan a la medida?"
          ctaDescription="Agenda una breve consultoría para analizar tu modelo de negocio y ofrecerte el mejor camino al éxito."
          ctaLabel="Agendar Consultoría Gratuita"
        />

        {/* Final CTA */}
        <section className="py-32 text-center px-6">
           <h2 className="text-5xl lg:text-7xl font-black mb-10 uppercase tracking-tighter leading-none">Tu tienda Shopify <br/>está a un <span className="text-emerald-500 italic font-serif lowercase font-light">Clic</span> de distancia</h2>
           <p className="text-xl text-zinc-500 mb-12 italic font-serif max-w-2xl mx-auto">Deja de postergar tu digitalización. Empieza hoy con el respaldo de expertos certificados.</p>
           <LeadButton 
            className="inline-block px-12 py-6 bg-white text-zinc-950 font-black uppercase tracking-widest text-xs rounded-2xl hover:scale-105 transition-all shadow-2xl"
           >
              Cotizar mi Desarrollo Ahora
           </LeadButton>
        </section>
      </main>
    </div>
  );
}