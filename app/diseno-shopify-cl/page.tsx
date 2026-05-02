import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import { Star, Palette, Layers, Code, Zap, Heart, ShieldCheck, ShoppingBag, ArrowRight, Layout, PencilRuler, CheckCircle2, MonitorSmartphone, Settings } from 'lucide-react';

export const metadata = {
  title: 'Diseño para Tiendas Shopify en Chile | Themes & Expertos Liquid 2026',
  description: 'Expertos en diseño para tiendas Shopify en Chile. Especialistas en mejorar diseño Shopify, personalización de Themes y programación Liquid avanzada. ¡Aumenta tus ventas hoy!',
  keywords: 'diseño para tiendas shopify en chile, Themes para Shopify, Mejorar diseño Shopify, Programacion Liquid Shopify, diseño ecommerce chile, shopify partners chile, experto shopify chile, diseño web shopify santiago',
  alternates: {
    canonical: 'https://diseñoshopify.cl/',
  }
};

export default function DisenoShopifyLandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Diseño y Personalización de Tiendas Shopify",
    "description": "Servicios profesionales de diseño UX/UI, implementación de Themes y programación Liquid para el mercado de Shopify en Chile.",
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
    "serviceType": "E-commerce Design"
  };


  const designServices = [
    {
      title: "Diseño para tiendas Shopify en Chile",
      desc: "Creamos experiencias visuales que conectan con el consumidor chileno. Un diseño estético, rápido y optimizado para la confianza del comprador local.",
      icon: <Palette className="w-8 h-8 text-pink-500" />,
      tag: "UX/UI Local"
    },
    {
      title: "Themes para Shopify Premium",
      desc: "Implementamos y personalizamos los mejores temas del mercado (Online Store 2.0). Optimizamos la estructura para máxima velocidad y SEO.",
      icon: <Layers className="w-8 h-8 text-blue-500" />,
      tag: "Estructura 2.0"
    },
    {
      title: "Mejorar diseño Shopify (Audit)",
      desc: "¿Tu tienda no convierte? Realizamos auditorías CRO para identificar puntos de fuga y rediseñamos tu embudo de ventas para maximizar beneficios.",
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      tag: "Optimización CRO"
    },
    {
      title: "Programación Liquid Shopify",
      desc: "Desarrollo de funcionalidades nativas mediante código Liquid. Menos aplicaciones, más velocidad y control total sobre tu tienda online.",
      icon: <Code className="w-8 h-8 text-emerald-500" />,
      tag: "Custom Code"
    }
  ];

  const faqs = [
    {
      question: "¿Por qué es importante la Programación Liquid?",
      answer: "Al programar directamente en Liquid, evitamos el uso excesivo de aplicaciones de terceros que ralentizan tu tienda. Esto mejora el SEO y la experiencia de usuario radicalmente."
    },
    {
      question: "¿Pueden mejorar el diseño de mi tienda actual sin empezar de cero?",
      answer: "Totalmente. Realizamos mejoras iterativas en tu tema actual: optimizamos la ficha de producto, el carrito y la home para mejorar la percepción de marca y las ventas."
    },
    {
      question: "¿Qué incluye un proyecto de diseño Shopify profesional?",
      answer: "Incluye análisis de marca, diseño de prototipos, implementación técnica, optimización SEO de imágenes, configuración de navegación y capacitación para que seas autónomo."
    }
  ];

  const portafolio = [
    {
      title: "Kinelawen",
      description: "Tienda Shopify con identidad limpia y navegación moderna optimizada para salud.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.kinelawen.com%2F?w=1200",
      link: "https://www.kinelawen.com/",
      tags: ["Salud", "Wellness"]
    },
    {
      title: "SpinMedical",
      description: "Estructura profesional de catálogo técnico con visual de alta confianza.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fspinmedical.cl%2F?w=1200",
      link: "https://spinmedical.cl/",
      tags: ["B2B / B2C"]
    },
    {
      title: "Librería Bazarte",
      description: "Exploración por colecciones dinámica y diseño retail moderno.",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Flibreriabazarte.cl%2F?w=1200",
      link: "https://libreriabazarte.cl/",
      tags: ["Retail", "Diseño"]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white font-sans antialiased text-zinc-900 overflow-x-hidden">
        <main className="pt-[22vh] lg:pt-[12vh]">
          {/* Hero Section */}
          <section id="inicio" className="relative pt-0 pb-32 lg:pt-0 lg:pb-40">
            <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-pink-600/5 blur-[120px] rounded-full -z-10 translate-x-1/4 -translate-y-1/4" />
            
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left">
                <header>
                  <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-zinc-50 border border-zinc-100 rounded-full">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                    </span>
                    <span className="text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase">Expertos en Diseño Shopify Chile</span>
                  </div>
                  
                  <h1 className="text-[2.4rem] xs:text-5xl lg:text-[75px] font-black tracking-tighter leading-[0.9] mb-8 uppercase text-zinc-950 break-words">
                    Diseño para Tiendas <span className="text-pink-600 italic font-serif lowercase font-light">Shopify</span>
                  </h1>
                </header>
                
                <p className="text-lg lg:text-xl text-zinc-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                  Transformamos tu negocio con los mejores <strong className="text-zinc-900">Themes para Shopify</strong>, <strong className="text-zinc-900">Programación Liquid</strong> nativa y estrategias de <strong className="text-zinc-900">Conversión (CRO)</strong> para liderar el ecommerce en Chile.
                </p>
                
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                  <LeadButton className="px-8 py-4 bg-pink-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-pink-700 transition-all shadow-xl shadow-pink-600/20 active:scale-95 text-center flex items-center justify-center gap-2">
                    Cotizar mi Diseño
                  </LeadButton>
                  <WhatsAppButton className="px-8 py-4 bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95 text-center flex items-center justify-center gap-2">
                    Hablar con un Experto
                  </WhatsAppButton>
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl border border-zinc-100 overflow-hidden group">
                  <Image
                    src="/tecno.png"
                    alt="Agencia de Diseño Shopify en Chile - Portafolio Webunica"
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
                  Diseño & <span className="text-pink-600">Themes Shopify</span>
                </h2>
                <p className="text-xl text-zinc-500 font-light max-w-2xl mx-auto">
                  Dominamos la <strong className="text-zinc-900">Programación Liquid</strong> para crear tiendas rápidas, estéticas y enfocadas en resultados.
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
                    Custom Liquid Expert
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-pink-600 mb-4 block">Desarrollo a Medida</span>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-6 text-zinc-950">
                  Programación Liquid <br/><span className="text-pink-600 italic">Nativa</span>
                </h2>
                <p className="text-lg text-zinc-500 font-light mb-8 leading-relaxed">
                  Creamos funcionalidades únicas sin depender de aplicaciones externas pesadas. Nuestra <strong className="text-zinc-900">Programación Liquid</strong> nativa mantiene tu tienda optimizada para <strong className="text-zinc-900">Core Web Vitals</strong>.
                </p>
                <ul className="space-y-4">
                  {[
                    "Personalización profunda de Themes oficiales.",
                    "Secciones dinámicas exclusivas para tu marca.",
                    "Optimización de carga eliminando apps lentas.",
                    "Diseño de fichas de producto de alta conversión.",
                    "Integraciones de código personalizadas para Chile."
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

          {/* Portafolio Section */}
          <section id="portafolio" className="py-32 bg-zinc-50 relative">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <span className="text-[10px] font-black uppercase tracking-widest text-pink-600 mb-4 block">Resultados Reales</span>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-6 text-zinc-950">
                  Nuestro Portafolio
                </h2>
                <p className="text-lg text-zinc-500 font-light max-w-2xl mx-auto">
                  Tiendas Shopify diseñadas para marcas que exigen excelencia visual y técnica en el mercado nacional.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portafolio.map((project, index) => (
                  <Link
                    key={index}
                    href={project.link}
                    target="_blank"
                    className="group flex flex-col h-full bg-white rounded-[3rem] overflow-hidden border border-zinc-100 hover:border-pink-200 transition-all hover:shadow-2xl"
                  >
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <Image
                        src={project.image}
                        alt={`Diseño Shopify para ${project.title} - Webunica`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100"
                      />
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
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-32">
            <FAQSection 
              faqs={faqs} 
              title="Dudas sobre Diseño Shopify"
              description="Todo lo que necesitas saber sobre Themes, Liquid y cómo mejorar tu presencia digital en Google."
            />
          </section>

          {/* Final CTA */}
          <section id="cta" className="py-32 bg-white relative">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-4xl lg:text-7xl font-black tracking-tighter uppercase mb-10 text-zinc-950">
                ¿Aumentamos tus <br/><span className="text-pink-600">ventas hoy</span>?
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
