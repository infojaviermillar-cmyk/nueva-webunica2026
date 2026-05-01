import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import { Star, Palette, Layers, Code, Zap, Heart, ShieldCheck, ShoppingBag, ArrowRight, Layout, PencilRuler, CheckCircle2, MonitorSmartphone, Settings } from 'lucide-react';

export const metadata = {
  title: 'Diseño para Tiendas Shopify en Chile | Themes & Liquid Shopify',
  description: 'Expertos en diseño para tiendas Shopify en Chile. Especialistas en mejorar diseño Shopify, personalización de Themes y programación Liquid avanzada. ¡10% OFF hoy!',
  keywords: 'diseño para tiendas shopify en chile, Themes para Shopify, Mejorar diseño Shopify, Programacion Liquid Shopify, diseño ecommerce chile, shopify partners chile, experto shopify chile',
  alternates: {
    canonical: 'https://diseñoshopify.cl/',
  }
};

export default function DisenoShopifyLandingPage() {
  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Diseño para Tiendas Shopify en Chile",
    "description": "Servicios profesionales de diseño, mejora y programación Liquid para tiendas Shopify en Chile.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Webunica",
      "image": "https://webunica.cl/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "CL"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "Chile"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Shopify",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diseño para tiendas Shopify"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Programación Liquid Shopify"
          }
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
        "name": "¿Qué es la programación Liquid en Shopify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Liquid es el lenguaje de plantillas de Shopify. Permite crear funciones únicas y personalizadas directamente en el código de tu tienda."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo mejorar el diseño de una tienda Shopify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mejoramos el diseño optimizando la experiencia de usuario (UX), la velocidad de carga y la jerarquía visual para aumentar las ventas."
        }
      }
    ]
  };
  const designServices = [
    {
      title: "Diseño para tiendas Shopify en Chile",
      desc: "Creamos experiencias visuales adaptadas al mercado local. Un diseño que no solo es bonito, sino que entiende cómo compra el usuario chileno.",
      icon: <Palette className="w-8 h-8 text-pink-500" />,
      tag: "UX/UI Local"
    },
    {
      title: "Themes para Shopify",
      desc: "Selección e implementación de los mejores themes oficiales y premium (Envato). Optimizamos la estructura para máxima velocidad y conversión.",
      icon: <Layers className="w-8 h-8 text-blue-500" />,
      tag: "Premium Themes"
    },
    {
      title: "Mejorar diseño Shopify",
      desc: "¿Ya tienes una tienda pero no vende? Auditamos y mejoramos tu diseño actual para eliminar fricciones y aumentar tu tasa de conversión (CRO).",
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      tag: "Optimización CRO"
    },
    {
      title: "Programación Liquid Shopify",
      desc: "Desarrollo de funciones a medida mediante código Liquid. Modificamos el núcleo de tu theme para lograr funcionalidades únicas sin depender de apps lentas.",
      icon: <Code className="w-8 h-8 text-emerald-500" />,
      tag: "Custom Liquid"
    }
  ];

  const faqs = [
    {
      question: "¿Qué es la programación Liquid en Shopify?",
      answer: "Liquid es el lenguaje de plantillas de Shopify. Al usar Programación Liquid Shopify, podemos crear secciones personalizadas, modificar comportamientos del carrito y añadir funciones únicas que las plantillas estándar no permiten."
    },
    {
      question: "¿Cómo pueden mejorar el diseño de mi tienda Shopify actual?",
      answer: "Realizamos una auditoría visual y de experiencia de usuario. Luego, procedemos a mejorar diseño Shopify optimizando el checkout, las fichas de producto y la navegación mobile para asegurar que sea intuitiva y rápida."
    },
    {
      question: "¿Ofrecen themes para Shopify incluidos en sus planes?",
      answer: "Sí, en la mayoría de nuestros planes incluimos licencias de themes premium o configuramos themes oficiales de Shopify según la necesidad de rendimiento y estética de tu marca."
    }
  ];

  const portafolio = [
    {
      title: "Kinelawen",
      description: "Tienda Shopify con identidad limpia, navegación moderna y foco en experiencia.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.kinelawen.com%2F?w=1200",
      link: "https://www.kinelawen.com/",
      tags: ["Salud", "Branding"]
    },
    {
      title: "SpinMedical",
      description: "Proyecto ecommerce con estructura profesional, catálogo claro y visual de confianza.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fspinmedical.cl%2F?w=1200",
      link: "https://spinmedical.cl/",
      tags: ["B2B / B2C"]
    },
    {
      title: "Librería Bazarte",
      description: "Ecommerce atractivo, preparado para exhibir productos y exploración por colecciones.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Flibreriabazarte.cl%2F?w=1200",
      link: "https://libreriabazarte.cl/",
      tags: ["Retail", "Diseño"]
    },
    {
      title: "Recovery Zone",
      description: "Proyecto Shopify con diseño orientado a conversión y fichas de producto optimizadas.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Frecoveryzone.cl%2F?w=1200",
      link: "https://recoveryzone.cl/",
      tags: ["Deportes"]
    },
    {
      title: "Only Jeep",
      description: "Tienda de nicho, buena jerarquía de colecciones y estética del rubro automotor.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.onlyjeep.cl%2F?w=1200",
      link: "https://www.onlyjeep.cl/",
      tags: ["Automotriz"]
    },
    {
      title: "Divan Tienda",
      description: "Proyecto con estilo comercial elegante, pensado para destacar productos.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fdivantienda.cl%2F?w=1200",
      link: "https://divantienda.cl/",
      tags: ["Muebles", "Interiorismo"]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="min-h-screen bg-white font-sans antialiased text-zinc-900 overflow-x-hidden">
        <main className="pt-32">
          {/* Hero Section */}
          <section id="inicio" className="relative pt-20 pb-32 lg:pt-32 lg:pb-40">
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-pink-600/5 blur-[120px] rounded-full -z-10 translate-x-1/4 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10 -translate-x-1/4 translate-y-1/4" />
            
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left">
                <header>
                  <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-zinc-100 border border-zinc-200 rounded-full">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                    </span>
                    <span className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase">Expertos en Diseño Shopify Chile</span>
                  </div>
                  
                  <h1 className="text-[2.4rem] xs:text-5xl lg:text-[75px] font-black tracking-tighter leading-[0.9] mb-8 uppercase text-zinc-950 break-words">
                    Diseño para tiendas <span className="text-pink-600 italic font-serif lowercase font-light">Shopify</span> en Chile
                  </h1>
                </header>
                
                <p className="text-lg lg:text-xl text-zinc-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                  Elevamos tu ecommerce con los mejores <strong className="text-zinc-900">Themes para Shopify</strong>, <strong className="text-zinc-900">Programación Liquid</strong> profesional y estrategias probadas para <strong className="text-zinc-900">mejorar diseño Shopify</strong> y aumentar tus ventas en el mercado chileno.
                </p>
                
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                  <LeadButton className="px-8 py-4 bg-pink-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-pink-700 transition-all shadow-xl shadow-pink-600/20 active:scale-95 text-center flex items-center justify-center gap-2">
                    Cotizar mi Diseño
                  </LeadButton>
                  <WhatsAppButton className="px-8 py-4 bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95 text-center flex items-center justify-center gap-2">
                    Hablar con un Experto
                  </WhatsAppButton>
                </div>

                <div className="mt-12 flex items-center gap-6 justify-center lg:justify-start grayscale opacity-60">
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Trusted Partner:</span>
                  <div className="flex gap-4">
                    <span className="text-sm font-bold text-zinc-900">SHOPIFY</span>
                    <span className="text-sm font-bold text-zinc-900">ENVATO</span>
                    <span className="text-sm font-bold text-zinc-900">WEBUNICA</span>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl border border-zinc-100 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <Image
                    src="/tecno.png"
                    alt="Servicios de diseño para tiendas Shopify Chile"
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-700"
                    priority
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-white shadow-xl px-6 py-4 rounded-3xl border border-zinc-100 flex items-center gap-4 animate-bounce-slow">
                   <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                     <CheckCircle2 className="w-6 h-6" />
                   </div>
                   <div>
                     <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block leading-tight">Ventas</span>
                     <span className="text-sm font-bold text-zinc-900">+45% Conversión</span>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section id="servicios" className="py-32 bg-zinc-50">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-24">
                <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-6 text-zinc-950">
                  Servicios de <span className="text-pink-600">Diseño & Themes Shopify</span>
                </h2>
                <p className="text-xl text-zinc-500 font-light max-w-2xl mx-auto">
                  Dominamos la <strong className="text-zinc-900">Programación Liquid Shopify</strong> y el diseño UX/UI para crear tiendas de alto rendimiento.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {designServices.map((service, i) => (
                  <article key={i} className="bg-white p-10 rounded-[3rem] border border-zinc-100 hover:border-pink-200 hover:shadow-2xl transition-all duration-500 group">
                    <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-pink-50 group-hover:scale-110 transition-all">
                      {service.icon}
                    </div>
                    <div className="text-[10px] font-black text-pink-600 uppercase tracking-widest mb-4">{service.tag}</div>
                    <h3 className="text-xl font-black mb-4 text-zinc-900 group-hover:text-pink-600 transition-colors uppercase tracking-tight leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-500 font-light leading-relaxed">
                      {service.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Liquid Programming Section */}
          <section id="liquid" className="py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-zinc-900 rounded-[3rem] p-10 shadow-2xl relative">
                  <div className="absolute top-4 left-6 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <pre className="mt-8 text-pink-400 font-mono text-sm leading-relaxed overflow-x-auto">
                    <code>{`
{% if product.available %}
  <div class="custom-badge">
    {{ 'products.product.in_stock' | t }}
  </div>
  {% render 'liquid-programming-chi' %}
{% else %}
  <p class="sold-out">Agotado en Chile</p>
{% endif %}
                    `}</code>
                  </pre>
                  <div className="absolute -bottom-6 -right-6 bg-pink-600 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl">
                    Custom Liquid Code
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-pink-600 mb-4 block">Desarrollo Avanzado</span>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-6 text-zinc-950">
                  Programación Liquid <br/><span className="text-pink-600 italic">Sin Límites</span>
                </h2>
                <p className="text-lg text-zinc-500 font-light mb-8 leading-relaxed">
                  No usamos "parches" con aplicaciones pesadas. Nuestra <strong className="text-zinc-900">Programación Liquid Shopify</strong> permite crear funcionalidades nativas que mantienen tu tienda rápida y SEO-friendly.
                </p>
                <ul className="space-y-4">
                  {[
                    "Modificación de Themes para Shopify existentes.",
                    "Creación de secciones dinámicas personalizadas.",
                    "Optimización de velocidad eliminando apps innecesarias.",
                    "Lógica de negocio compleja en el carrito y checkout.",
                    "Integraciones de datos personalizadas."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-3 text-sm text-zinc-600 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-pink-600 shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="beneficios" className="py-32 bg-zinc-950 text-white rounded-[4rem] mx-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(219,39,119,0.1),transparent)] pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-16">
                ¿Por qué somos tu mejor <br/><span className="text-pink-500 underline decoration-pink-500/30">opción en Chile</span>?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <article className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-pink-500 mb-6 border border-white/10 group-hover:bg-pink-600 group-hover:text-white transition-all">
                    <MonitorSmartphone className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Diseño Mobile-First</h3>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed">
                    Más del 80% de las compras en Chile son desde celulares. Tu diseño estará 100% optimizado para smartphones.
                  </p>
                </article>
                
                <article className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-pink-500 mb-6 border border-white/10">
                    <Settings className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Control Total</h3>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed">
                    Te entregamos una tienda fácil de administrar. <strong className="text-white">Mejorar diseño Shopify</strong> significa darte autonomía.
                  </p>
                </article>
                
                <article className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-pink-500 mb-6 border border-white/10">
                    <ShieldCheck className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Seguridad & Confianza</h3>
                  <p className="text-zinc-400 font-light text-sm leading-relaxed">
                    Diseños que transmiten profesionalismo y seguridad, reduciendo el abandono en el checkout.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* Portafolio Section */}
          <section id="portafolio" className="py-32 bg-zinc-50 relative">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <span className="text-[10px] font-black uppercase tracking-widest text-pink-600 mb-4 block">Resultados</span>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-6 text-zinc-950">
                  Nuestro Portafolio
                </h2>
                <p className="text-lg text-zinc-500 font-light max-w-2xl mx-auto">
                  Explora algunas de las tiendas Shopify que hemos diseñado y optimizado para el mercado chileno.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portafolio.map((project, index) => (
                  <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col h-full bg-white rounded-[3rem] overflow-hidden border border-zinc-100 hover:border-pink-200 transition-all hover:shadow-2xl"
                  >
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent" />
                    </div>

                    <div className="p-8 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags?.map(tag => (
                            <span key={tag} className="text-[9px] font-bold uppercase tracking-wider text-pink-600 bg-pink-50 border border-pink-100 px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="font-black tracking-tighter leading-none mb-3 uppercase text-2xl text-zinc-900 group-hover:text-pink-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-zinc-500 font-light text-sm leading-relaxed mb-6">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-32">
            <FAQSection 
              faqs={faqs} 
              title="Preguntas sobre Diseño Shopify"
              description="Todo lo que necesitas saber sobre Themes, Liquid y cómo mejorar tu presencia digital."
            />
          </section>

          {/* Final CTA */}
          <section id="cta" className="py-32 bg-white relative">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-4xl lg:text-7xl font-black tracking-tighter uppercase mb-10 text-zinc-950">
                ¿Hablamos de tu <br/><span className="text-pink-600">próxima tienda</span>?
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                 <LeadButton className="px-12 py-6 bg-pink-600 text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-pink-700 transition-all shadow-2xl shadow-pink-600/30 active:scale-95">
                   Obtener Presupuesto Gratis
                 </LeadButton>
                 <WhatsAppButton className="px-12 py-6 bg-emerald-500 text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all shadow-2xl shadow-emerald-500/30 active:scale-95">
                   Consultar por WhatsApp
                 </WhatsAppButton>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
