import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Smartphone, Code2, Rocket, Zap, Gauge, ShieldCheck, Activity, ShoppingBag, TrendingUp, CheckCircle2, Sparkles, Check } from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';
import { BlogPost } from '@/lib/blog';
import FeaturedBlogSection from '@/components/sections/featured-blog';
import TestimonialsSection from '@/components/sections/testimonials';
import HeroCarousel from '@/components/sections/hero-carousel';
import MobileCarousel from '@/components/sections/mobile-carousel';
import HomeHeroSection from '@/components/sections/home-hero-section';
import HomeFAQ from '@/components/sections/home-faq';
import PricingPlans from '@/components/sections/pricing-plans';
import ServicesTabs from '@/components/sections/services-tabs';
import WorkProcess from '@/components/sections/work-process';
import ViccaTransformationShowcase from '@/components/sections/vicca-transformation-showcase';
import ScrollRevealText from '@/components/ui/scroll-reveal-text';

export default function HomeDesign({ posts }: { posts: BlogPost[] }) {
  const projects = [
    { 
      title: "Oh My Skin", 
      category: "Shopify",
      tags: ["Skincare", "Cosmética"],
      description: "Tienda online de cuidado de la piel y cosmética profesional con navegación fluida.",
      image: "/clientes-2/ohmyskinchile.cl.png",
      link: "https://www.ohmyskinchile.cl/"
    },
    { 
      title: "Tecno-Mobile", 
      category: "Shopify",
      tags: ["Tecnología", "Gadgets"],
      description: "Catálogo tecnológico con look comercial claro y navegación rápida.",
      image: "/clientes/Tecno-Mobile.png",
      link: "https://tecno-mobile.cl/"
    },
    { 
      title: "Tuupos", 
      category: "Shopify",
      tags: ["General Store", "Dropshipping"],
      description: "Proyecto Shopify con identidad propia y bloques modernos.",
      image: "/clientes/tuupos.png",
      link: "https://tuupos.cl/"
    },
    { 
      title: "Terra Andes", 
      category: "Shopify",
      tags: ["Alimentos", "Exportación"],
      description: "Proyecto con estética corporativa y vitrina visual enfocada en credibilidad.",
      image: "/clientes/terranandes.png",
      link: "https://terraandesplus.com/"
    },
    { 
      title: "Chiletronics", 
      category: "Shopify",
      tags: ["Electrónica", "Retail"],
      description: "Tienda tecnológica con estructura orientada a variedad de productos.",
      image: "/clientes/Chiletronics.png",
      link: "https://chiletronics.cl/"
    },
    { 
      title: "Canine Fight", 
      category: "Shopify",
      tags: ["Deportes", "Equipamiento"],
      description: "Tienda de alto rendimiento para artículos de artes marciales.",
      image: "/clientes/https___caninefight.jfif",
      link: "https://caninefight.cl/"
    },
    { 
      title: "SoloCasasChile", 
      category: "SaaS",
      tags: ["Next.js", "PropTech"],
      description: "Plataforma de gestión inmobiliaria con seguimiento en tiempo real.",
      image: "/clientes/publi-solocasas.png",
      link: "https://solocasaschile.com"
    },
    { 
      title: "SpinMedical", 
      category: "Shopify",
      tags: ["Salud", "B2B"],
      description: "Proyecto ecommerce con estructura profesional y catálogo claro.",
      image: "/clientes/Spinmedical.png",
      link: "https://spinmedical.cl/"
    },
    { 
      title: "Altavista Chile", 
      category: "Shopify",
      tags: ["Outdoor", "Retail"],
      description: "Tienda de look robusto con enfoque en navegación eficiente.",
      image: "/clientes/altavista.png",
      link: "https://altavistachile.cl/"
    },
    { 
      title: "Kinelawen", 
      category: "Shopify",
      tags: ["Salud", "Branding"],
      description: "Tienda Shopify con identidad limpia y navegación moderna.",
      image: "/clientes/kinelawen.png",
      link: "https://www.kinelawen.com/"
    },
    { 
      title: "Librería Bazarte", 
      category: "Shopify",
      tags: ["Retail", "Diseño"],
      description: "Ecommerce visualmente atractivo para productos de diseño.",
      image: "/clientes/libreria bazarte.png",
      link: "https://libreriabazarte.cl/"
    },
    { 
      title: "Recovery Zone", 
      category: "Shopify",
      tags: ["Deportes", "Conversión"],
      description: "Proyecto orientado a conversión y lectura visual clara.",
      image: "/clientes/recoveyzone.png",
      link: "https://recoveryzone.cl/"
    },
    { 
      title: "Only Jeep", 
      category: "Shopify",
      tags: ["Automotriz", "Repuestos"],
      description: "Tienda con carácter de nicho y estética automotriz.",
      image: "/clientes/onlyjeep.png",
      link: "https://www.onlyjeep.cl/"
    },
    { 
      title: "AntarctiCare", 
      category: "Shopify",
      tags: ["Premium", "Skincare"],
      description: "Ecommerce con branding refinado y visual pulido.",
      image: "/clientes/antarticare.png",
      link: "https://antarcticare.cl/"
    },
    { 
      title: "Divan Tienda", 
      category: "Shopify",
      tags: ["Muebles", "Interiorismo"],
      description: "Estilo comercial elegante para destacar productos de hogar.",
      image: "/clientes/divan.png",
      link: "https://divantienda.cl/"
    },
    { 
      title: "PHY Waters", 
      category: "Shopify",
      tags: ["Bienestar", "Ventas"],
      description: "Marca con enfoque visual fuerte y experiencia simple.",
      image: "/clientes/PHY Waters.png",
      link: "https://phywaters.com/"
    },
    { 
      title: "Anteros", 
      category: "Shopify",
      tags: ["Branding", "Ventas"],
      description: "Tienda enfocada en visual limpio y presencia de marca.",
      image: "/clientes/anteros.png",
      link: "https://tienda.anteros.cl/"
    },
    { 
      title: "Serch", 
      category: "Shopify",
      tags: ["Moda", "Accesorios"],
      description: "Diseño actual y estructura sólida para catálogo online.",
      image: "/clientes/serch.png",
      link: "https://www.serch.cl/"
    },
    { 
      title: "Sonnda", 
      category: "Shopify",
      tags: ["Técnico", "B2B"],
      description: "Enfoque comercial y categorías claras para productos técnicos.",
      image: "/clientes/sonnda.png",
      link: "https://sonnda.cl/"
    },
    { 
      title: "Pymee", 
      category: "SaaS",
      tags: ["SaaS", "Gestión"],
      description: "Plataforma de gestión empresarial para PYMES.",
      image: "/clientes/https___pymee.jfif",
      link: "https://pymee.org/"
    },
  ];

  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Webunica - Expertos en E-commerce y Desarrollo Digital",
    "image": "https://webunica.cl/logo-webunica.png.webp",
    "url": "https://webunica.cl",
    "telephone": "+56912345678",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Providencia",
      "addressLocality": "Santiago",
      "addressRegion": "RM",
      "addressCountry": "CL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.4372,
      "longitude": -70.6506
    }
  };

  return (
    <main className="min-h-screen bg-white text-zinc-950 font-sans antialiased overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      
      {/* Premium Hero Section with Dynamic Dark Mode Transition on Scroll */}
      <HomeHeroSection projects={projects} />

      <section className="py-24 bg-zinc-50 rounded-[3.5rem] mx-4 relative overflow-hidden border border-zinc-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Header de Sección Manteniendo Alta Ingeniería & Tecnología */}
          <div className="mb-14 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-50 border border-purple-200/80 text-[#7850FA] text-[11px] font-mono font-bold uppercase tracking-widest rounded-full mb-4 shadow-xs">
              <Activity className="w-3.5 h-3.5 text-[#7850FA]" />
              Alta Ingeniería de Rendimiento
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-950 tracking-tighter uppercase font-heading mb-4">
              Tecnología que <span className="text-[#7850FA]">impulsa tu negocio</span>
            </h2>
            <ScrollRevealText 
              text="Portafolio de soluciones especializadas para vender, automatizar e integrar tu empresa en Chile. En el entorno digital actual, tu sitio web tiene menos de 3 segundos para capturar la atención, proyectar máxima autoridad y comunicar tu propuesta de valor antes de perder una oportunidad. Desarrollamos sitios web y e-commerce de alto rendimiento diseñados estratégicamente para causar un impacto inmediato en esa primera impresión crucial y convertir visitas en clientes reales."
              className="text-base sm:text-lg md:text-xl text-zinc-800 font-normal leading-relaxed max-w-4xl mx-auto"
            />
          </div>

          {/* Lista Ordenada de Servicios Especializados */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            
            {/* SERVICIO 1: Tiendas Shopify */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-zinc-200/90 shadow-lg hover:shadow-xl hover:border-violet-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-600 group-hover:bg-violet-600 group-hover:text-white transition-all">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest text-violet-700 bg-violet-50 px-3 py-1 rounded-full border border-violet-200/50">
                    E-commerce • Partner
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase text-zinc-950 mb-3 font-heading group-hover:text-violet-600 transition-colors">
                  Desarrollo & Rediseño Shopify
                </h3>
                <p className="text-sm text-zinc-600 font-normal leading-relaxed mb-6">
                  Creación de tiendas online listas para vender en Chile con pasarelas locales, despacho, facturación SII y diseño Mobile-First.
                </p>

                <ul className="space-y-2.5 mb-8 border-t border-zinc-100 pt-6">
                  {[
                    "Integración Webpay / Mercado Pago / Flow",
                    "Despacho automatizado (Shipit / Starken)",
                    "Boleta Electrónica SII automática",
                    "Optimización CRO en Ficha de Producto"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-zinc-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="/desarrollo-tiendas-shopify-en-chile" 
                className="w-full py-3.5 px-5 bg-zinc-950 hover:bg-violet-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-between transition-all"
              >
                <span>Ver Tiendas Shopify</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* SERVICIO 2: Next.js & SaaS */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-zinc-200/90 shadow-lg hover:shadow-xl hover:border-violet-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/50">
                    Alto Rendimiento
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase text-zinc-950 mb-3 font-heading group-hover:text-blue-600 transition-colors">
                  Next.js & Software SaaS a Medida
                </h3>
                <p className="text-sm text-zinc-600 font-normal leading-relaxed mb-6">
                  Desarrollo de aplicaciones web ultra-rápidas con arquitectura Server-Side Rendering (SSR) y velocidad 100/100 en Google.
                </p>

                <ul className="space-y-2.5 mb-8 border-t border-zinc-100 pt-6">
                  {[
                    "Carga ultra-rápida y latencia mínima",
                    "Plataformas SaaS & Portales Corporativos",
                    "APIs & Microservicios escalables",
                    "Indexación semántica avanzada"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-zinc-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="/desarrollo-web-nextjs-saas-custom" 
                className="w-full py-3.5 px-5 bg-zinc-950 hover:bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-between transition-all"
              >
                <span>Ver Next.js & SaaS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* SERVICIO 3: SEO Avanzado & GEO AI */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-zinc-200/90 shadow-lg hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/50">
                    IA & Posicionamiento
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase text-zinc-950 mb-3 font-heading group-hover:text-emerald-600 transition-colors">
                  SEO Avanzado & GEO AI Visibility
                </h3>
                <p className="text-sm text-zinc-600 font-normal leading-relaxed mb-6">
                  Estrategias para dominar Google y asegurar que tu marca aparezca en las respuestas de la Inteligencia Artificial.
                </p>

                <ul className="space-y-2.5 mb-8 border-t border-zinc-100 pt-6">
                  {[
                    "Auditoría SEO Técnico de Carga & Estructura",
                    "Optimización para ChatGPT, Perplexity y Gemini",
                    "Palabras clave comerciales de alta conversión",
                    "Generación de contenido optimizado"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-zinc-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="/geo-ai-visibility" 
                className="w-full py-3.5 px-5 bg-zinc-950 hover:bg-emerald-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-between transition-all"
              >
                <span>Ver SEO & GEO AI</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* SERVICIO 4: WooCommerce & Dropshipping */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-zinc-200/90 shadow-lg hover:shadow-xl hover:border-pink-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-all">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest text-pink-700 bg-pink-50 px-3 py-1 rounded-full border border-pink-200/50">
                    Catálogos & B2B
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase text-zinc-950 mb-3 font-heading group-hover:text-pink-600 transition-colors">
                  WooCommerce & Dropshipping Shopi+Dropi
                </h3>
                <p className="text-sm text-zinc-600 font-normal leading-relaxed mb-6">
                  Desarrollo de tiendas e-commerce con catálogos extensos, reglas mayoristas B2B o modelos automatizados de Dropshipping.
                </p>

                <ul className="space-y-2.5 mb-8 border-t border-zinc-100 pt-6">
                  {[
                    "Venta mayorista B2B & Precios segmentados",
                    "Integración directa con plataformas Dropi",
                    "Optimización de velocidad WooCommerce",
                    "Pasarelas de pago locales múltiples"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-zinc-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="/desarrollo-tienda-en-linea-woocommerce" 
                className="w-full py-3.5 px-5 bg-zinc-950 hover:bg-pink-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-between transition-all"
              >
                <span>Ver WooCommerce & B2B</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* SERVICIO 5: Integración ERP & SII */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-zinc-200/90 shadow-lg hover:shadow-xl hover:border-amber-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/50">
                    Automatización Local
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase text-zinc-950 mb-3 font-heading group-hover:text-amber-600 transition-colors">
                  Integración ERP & Boletas SII Automáticas
                </h3>
                <p className="text-sm text-zinc-600 font-normal leading-relaxed mb-6">
                  Conexión directa de tu e-commerce con Bsale, Obuma, Defontana y sistemas DTE para emisión automática de facturas y stock.
                </p>

                <ul className="space-y-2.5 mb-8 border-t border-zinc-100 pt-6">
                  {[
                    "Sincronización de Stock en tiempo real",
                    "Emisión automática de Boletas SII",
                    "Conexión con Bsale, Obuma y Defontana",
                    "Integración de Fintoc & transferencias"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-zinc-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="/integracion-erp-shopify-chile" 
                className="w-full py-3.5 px-5 bg-zinc-950 hover:bg-amber-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-between transition-all"
              >
                <span>Ver ERP & SII</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* SERVICIO 6: Academias Tutor LMS */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-zinc-200/90 shadow-lg hover:shadow-xl hover:border-orange-300 transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-black uppercase tracking-widest text-orange-800 bg-orange-50 px-3 py-1 rounded-full border border-orange-200/50">
                    E-Learning & Sence
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase text-zinc-950 mb-3 font-heading group-hover:text-orange-600 transition-colors">
                  Academias Tutor LMS & Plugin Sence Pro
                </h3>
                <p className="text-sm text-zinc-600 font-normal leading-relaxed mb-6">
                  Implementación de aulas virtuales profesionales para la venta de cursos online y cumplimiento de normativas Sence Chile.
                </p>

                <ul className="space-y-2.5 mb-8 border-t border-zinc-100 pt-6">
                  {[
                    "Aulas virtuales con Tutor LMS Pro",
                    "Cumplimiento y reportes Sence Chile",
                    "Venta automatizada de suscripciones",
                    "Certificados digitales & evaluaciones"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-zinc-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="/desarrollo-diseno-elearning-tutor-lms" 
                className="w-full py-3.5 px-5 bg-zinc-950 hover:bg-orange-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-between transition-all"
              >
                <span>Ver Academias LMS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      <ServicesTabs />
      <WorkProcess />
      <ViccaTransformationShowcase />
      <PricingPlans />
      <HomeFAQ />
      <TestimonialsSection />
      <FeaturedBlogSection posts={posts} />

      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-violet-600 to-indigo-700 rounded-[5rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-3xl">
          <div className="relative z-10">
            <h2 className="text-5xl lg:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.85]">
              Tu éxito digital <br/><span className="italic font-serif lowercase font-light text-violet-100">comienza aquí.</span>
            </h2>
            <p className="text-xl text-violet-100 mb-14 max-w-2xl mx-auto font-light leading-relaxed">
              Expertos en <strong className="text-white">Posicionamiento Web</strong> y <strong className="text-white">Desarrollo Shopify</strong>. Agenda tu consultoría gratuita hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <LeadButton className="px-14 py-7 bg-white text-violet-600 rounded-3xl font-black uppercase tracking-widest text-xs shadow-2xl hover:scale-105 transition-all">
                Cotizar Proyecto Web
              </LeadButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
