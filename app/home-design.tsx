import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Smartphone, Code2, Rocket, Zap, Gauge, ShieldCheck, Activity } from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';
import { BlogPost } from '@/lib/blog';
import FeaturedBlogSection from '@/components/sections/featured-blog';
import TestimonialsSection from '@/components/sections/testimonials';
import HeroCarousel from '@/components/sections/hero-carousel';
import MobileCarousel from '@/components/sections/mobile-carousel';
import HomeFAQ from '@/components/sections/home-faq';
import PricingPlans from '@/components/sections/pricing-plans';
import ServicesTabs from '@/components/sections/services-tabs';
import WorkProcess from '@/components/sections/work-process';

export default function HomeDesign({ posts }: { posts: BlogPost[] }) {
  const projects = [
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
    "name": "Webunica - Diseño & Desarrollo Web de Élite",
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
      
      {/* Premium Hero Section */}
      <section className="relative pt-[22vh] lg:pt-32 pb-24 lg:pb-32 overflow-hidden flex items-start lg:items-center min-h-[100vh] lg:min-h-[95vh]">
        {/* Background Texture */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <Image 
            src="/bg-01.jpg" 
            alt="Agencia de Diseño y Desarrollo Web en Chile - Webunica" 
            fill 
            className="object-cover object-center" 
            priority
            fetchPriority="high"
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 bg-white/80 backdrop-blur-sm border border-zinc-100 rounded-full">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-[0.25em] text-zinc-500 uppercase">Ingeniería Web de Élite Chile 2026</span>
              </div>
              
              <h1 className="text-[2.4rem] xs:text-5xl sm:text-5xl md:text-6xl lg:text-[85px] font-black tracking-tighter leading-[0.85] mb-12 uppercase text-zinc-950 break-words">
                Diseño & <br/>
                <span className="text-violet-600 font-black">Desarrollo</span> <br/>
                Sitios Web.
              </h1>
              
              <p className="text-lg lg:text-xl text-zinc-500 max-w-xl mx-auto lg:mx-0 mb-16 font-light leading-relaxed">
                Expertos en <strong className="text-zinc-950 font-bold">Next.js</strong> y <strong className="text-zinc-950 font-bold">Shopify Chile</strong>. Construimos ecosistemas digitales de alto rendimiento enfocados en velocidad, SEO y conversión.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start">
                <LeadButton className="px-8 sm:px-14 py-7 bg-zinc-950 text-white font-black rounded-3xl hover:bg-zinc-800 transition-all shadow-2xl uppercase tracking-widest text-xs flex items-center gap-3 scale-100 hover:scale-105 active:scale-95 group w-full sm:w-auto justify-center">
                  Cotizar mi Proyecto <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </LeadButton>
                <Link href="/portafolio" className="px-8 sm:px-14 py-7 border border-zinc-200 text-zinc-950 font-black rounded-3xl hover:bg-zinc-50 transition-all uppercase tracking-widest text-xs w-full sm:w-auto text-center">
                  Ver Portafolio
                </Link>
              </div>

              <MobileCarousel projects={projects} />
            </div>

            <HeroCarousel projects={projects} />
          </div>
        </div>
      </section>

      <section className="py-32 bg-zinc-50 rounded-[4rem] mx-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-100 text-violet-600 text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
              <Activity className="w-3 h-3" />
              Alta Ingeniería de Rendimiento
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-zinc-950 tracking-tighter uppercase">Tecnología que <br/> <span className="text-violet-600 italic font-serif lowercase font-light">impulsa</span> tu negocio</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Main Performance Card */}
            <div className="md:col-span-8 bg-zinc-950 rounded-[4rem] p-12 lg:p-16 text-white relative overflow-hidden group border border-white/5 shadow-2xl hover:border-violet-500/30 transition-all duration-700">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-violet-600/20 transition-colors" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <Zap className="w-12 h-12 text-violet-500 animate-pulse" />
                    <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-3">
                      <Gauge className="w-5 h-5 text-emerald-400" />
                      <span className="text-xl font-black text-emerald-400 font-mono tracking-tighter">100/100</span>
                    </div>
                  </div>
                  
                  <h3 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-6 leading-[0.9]">Performance <br/>de Élite</h3>
                  <p className="text-zinc-400 text-lg font-light max-w-lg leading-relaxed mb-8">
                    Eliminamos la latencia. Cada milisegundo cuenta para tu conversión. Arquitectura <span className="text-white font-bold italic">server-side</span> con Next.js para una velocidad de carga instantánea que Google ama.
                  </p>
                </div>
                
                <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                  <div className="group/item">
                    <div className="text-3xl font-black text-white mb-2 uppercase italic tracking-tighter group-hover/item:text-violet-400 transition-colors">SEO Técnico</div>
                    <div className="text-[12px] font-black text-zinc-500 uppercase tracking-widest leading-none">Indexación Semántica Avanzada</div>
                  </div>
                  <div className="group/item">
                    <div className="text-3xl font-black text-white mb-2 uppercase italic tracking-tighter group-hover/item:text-violet-400 transition-colors">99.99%</div>
                    <div className="text-[12px] font-black text-zinc-500 uppercase tracking-widest leading-none">Escalabilidad Garantizada</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile First Card */}
            <div className="md:col-span-4 group h-full">
              <div className="bg-violet-600 rounded-[4rem] p-12 border border-violet-500/50 flex flex-col justify-end h-full relative overflow-hidden min-h-[550px] shadow-2xl hover:shadow-violet-600/40 hover:-translate-y-2 transition-all duration-700">
                <div className="absolute inset-0 z-0">
                  <Image 
                    src="/mobile-mockup.png" 
                    alt="Diseño Web Mobile-First Chile" 
                    fill 
                    className="object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-50 transition-all duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-950 via-violet-900/40 to-transparent"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center mb-10">
                    <Smartphone className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none mb-6">Experiencia <br/>Impecable</h3>
                  <p className="text-violet-100 text-lg font-light leading-snug">
                    Diseño centrado en el pulgar. El <span className="text-white font-bold">85%</span> de tu tráfico es móvil; nos aseguramos que cada tap sea una <span className="italic font-serif">conversión</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesTabs />
      <WorkProcess />
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
