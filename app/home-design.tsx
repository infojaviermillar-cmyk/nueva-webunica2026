import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Smartphone, Code2, Rocket, Zap } from 'lucide-react';
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

  // Schema.org LocalBusiness structured data
  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Webunica",
    "image": "https://webunica.cl/logo.png",
    "@id": "https://webunica.cl",
    "url": "https://webunica.cl",
    "telephone": "+56912345678",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Providencia",
      "addressLocality": "Santiago",
      "addressRegion": "RM",
      "postalCode": "7500000",
      "addressCountry": "CL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.4372,
      "longitude": -70.6506
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/webunica.cl"
    ]
  };

  return (
    <main className="min-h-screen bg-white text-zinc-950 font-sans antialiased overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      
      {/* Premium Hero Section */}
      <section className="relative pt-[22vh] lg:pt-[10vh] pb-24 lg:pb-32 overflow-hidden flex items-start lg:items-center min-h-[100vh] lg:min-h-[95vh]">
        {/* Background Texture - OPTIMIZED */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <Image 
            src="/bg-01.jpg" 
            alt="Agencia de Diseño Web Chile - Fondo Abstracto" 
            fill 
            className="object-cover object-center" 
            priority
            quality={60}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white"></div>
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-violet-50/50 blur-[150px] rounded-full -z-10 pointer-events-none translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Content - NOW SERVER RENDERED */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 bg-white/80 backdrop-blur-sm border border-zinc-100 rounded-full">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-[0.25em] text-zinc-500 uppercase">Ingeniería Web de Élite 2026</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-[85px] font-black tracking-tighter leading-[0.8] mb-12 uppercase text-zinc-950">
                DISEÑO & <br/>
                <span className="text-violet-600 font-black">DESARROLLO</span> <br/>
                SITIOS WEB.
              </h1>
              
              <p className="text-lg lg:text-xl text-zinc-500 max-w-xl mx-auto lg:mx-0 mb-16 font-light leading-relaxed">
                No creamos páginas estáticas. Construimos ecosistemas digitales de alto rendimiento con <strong className="text-zinc-950 font-bold">Next.js</strong> y <strong className="text-zinc-950 font-bold">Shopify</strong> para marcas que exigen velocidad y resultados.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start">
                <LeadButton className="px-14 py-7 bg-zinc-950 text-white font-black rounded-3xl hover:bg-zinc-800 transition-all shadow-2xl uppercase tracking-widest text-xs flex items-center gap-3 scale-100 hover:scale-105 active:scale-95 group w-full sm:w-auto">
                  Cotizar mi Proyecto <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </LeadButton>
                <Link href="/portafolio" className="px-14 py-7 border border-zinc-200 text-zinc-950 font-black rounded-3xl hover:bg-zinc-50 transition-all uppercase tracking-widest text-xs w-full sm:w-auto text-center">
                  Portafolio
                </Link>
              </div>

              {/* Mobile Project Carousel (Horizontal Client Component) */}
              <MobileCarousel projects={projects} />
            </div>

            {/* Right: Vertical Scrolling Carousel (Desktop Client Component) */}
            <HeroCarousel projects={projects} />
          </div>
        </div>
      </section>

      {/* Feature Bento Grid - SERVER RENDERED */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Focus Card */}
          <div className="md:col-span-8 bg-zinc-950 rounded-[4rem] p-12 lg:p-16 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/20 blur-[100px] rounded-full -z-0 pointer-events-none" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <Zap className="w-12 h-12 text-violet-500 mb-8" />
                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-6 leading-none">Velocidad <br/>Insuperable</h2>
                <p className="text-zinc-400 text-lg font-light max-w-md leading-relaxed">
                  Utilizamos <span className="text-white font-bold">Next.js 16</span> para que tu sitio cargue en menos de 1 segundo. En 2026, si tu web demora, tu cliente se va.
                </p>
              </div>
              <div className="mt-12 flex gap-8 border-t border-white/10 pt-8">
                <div>
                  <div className="text-3xl font-black text-white mb-1 uppercase italic tracking-tighter">Élite</div>
                  <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Core Web Vitals</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1 uppercase italic tracking-tighter">Instant</div>
                  <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Engine Speed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Focus Cards */}
          <div className="md:col-span-4 space-y-8">
            <div className="bg-violet-600 rounded-[3.5rem] p-10 border border-violet-500 flex flex-col justify-end h-full group hover:bg-violet-700 transition-all relative overflow-hidden min-h-[450px]">
               <div className="absolute inset-0 z-0 opacity-40 group-hover:scale-110 transition-transform duration-700">
                  <Image src="/mobile-mockup.png" alt="Mobile Design Mockup" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-900 via-violet-900/40 to-transparent"></div>
               </div>
               <div className="relative z-10">
                  <Smartphone className="w-10 h-10 text-white mb-8" />
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-none mb-4">Diseño <br/>Mobile-First</h3>
                  <p className="text-violet-100 text-sm font-medium leading-relaxed">
                    El 90% de tu tráfico viene del móvil. Diseñamos experiencias fluidas e interactivas para smartphones.
                  </p>
               </div>
            </div>
          </div>

          <div className="md:col-span-4 bg-zinc-50 rounded-[3.5rem] p-10 border border-zinc-100 flex flex-col justify-between h-full group hover:border-violet-200 transition-all">
            <Code2 className="w-10 h-10 text-zinc-400 mb-8 group-hover:text-violet-600 transition-colors" />
            <h3 className="text-2xl font-black text-zinc-900 uppercase tracking-tight leading-none mb-4">Arquitectura <br/>SEO de Élite</h3>
            <p className="text-zinc-500 text-sm font-light leading-relaxed">
              No solo "colocamos" palabras clave. Estructuramos tu código para que Google te ponga en primer lugar.
            </p>
          </div>

          <div className="md:col-span-8 bg-zinc-50 rounded-[4rem] p-12 lg:p-16 border border-zinc-100 relative overflow-hidden group">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Rocket className="w-12 h-12 text-violet-600 mb-8" />
                <h3 className="text-4xl font-black text-zinc-950 uppercase tracking-tighter leading-none mb-6">Convertimos Visitas <br/>en Facturación</h3>
                <p className="text-zinc-500 text-lg font-light leading-relaxed">
                  Aplicamos psicología de ventas y embudos de conversión en cada página web que desarrollamos.
                </p>
                <Link href="/agencia-de-embudos-de-venta-chile" className="inline-flex items-center gap-2 mt-8 text-violet-600 font-black uppercase text-xs tracking-widest hover:translate-x-2 transition-transform">
                  Ver Embudos de Venta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image src="/clientes/publi-solocasas.png" alt="Portfolio Preview" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Services Section */}
      <ServicesTabs />

      {/* Work Process Section */}
      <WorkProcess />

      {/* Pricing Plans Section */}
      <PricingPlans />

      {/* FAQ Strategic Section */}
      <HomeFAQ />

      <TestimonialsSection />
      <FeaturedBlogSection posts={posts} />

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-violet-600 to-indigo-700 rounded-[5rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-3xl">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
          <div className="relative z-10">
            <h2 className="text-5xl lg:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.85]">
              Hagamos que tu marca <br/>sea <span className="italic font-serif lowercase font-light text-violet-100">Inolvidable.</span>
            </h2>
            <p className="text-xl text-violet-100 mb-14 max-w-2xl mx-auto font-light leading-relaxed">
              Agenda una consultoría técnica gratuita y descubre por qué somos la agencia elegida por los negocios que quieren escalar de verdad.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <LeadButton className="px-14 py-7 bg-white text-violet-600 rounded-3xl font-black uppercase tracking-widest text-xs shadow-2xl hover:scale-105 transition-all">
                Cotizar mi Sitio Web
              </LeadButton>
              <Link href="/contacto" className="px-14 py-7 border border-white/30 text-white rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                Hablar con un Consultor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
