import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import { Metadata } from 'next';
import { 
  Monitor, 
  Search, 
  Smartphone, 
  Code2, 
  Layout, 
  Settings, 
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Globe,
  Zap,
  ShieldCheck,
  MessageSquare,
  Flame,
  DollarSign,
  Award,
  Sparkles,
  Cpu
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Diseño y Desarrollo de Páginas Web para PYMES en Chile | Webunica',
  description: 'Desarrollamos páginas web profesionales y sitios corporativos para PYMES en Chile. Diseño responsivo, carga ultra rápida y posicionamiento SEO optimizado en Google.',
  keywords: [
    'diseño paginas web pymes chile',
    'desarrollo paginas web chile',
    'diseño sitio web pyme',
    'desarrollo sitio web corporativo',
    'crear pagina web chile',
    'paginas web para pymes santiago',
    'seo paginas web chile',
    'agencia diseño web chile',
    'desarrollo web wordpress pymes'
  ].join(', '),
  alternates: {
    canonical: 'https://webunica.cl/desarrollo-paginas-web-pymes-chile',
  },
  openGraph: {
    title: 'Diseño y Desarrollo de Páginas Web para PYMES en Chile | Webunica',
    description: 'Convierte visitas en clientes reales. Creamos tu página web profesional con velocidad extrema, botones de WhatsApp e integración SEO para Google Chile.',
    url: 'https://webunica.cl/desarrollo-paginas-web-pymes-chile',
    siteName: 'Webunica',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: 'https://webunica.cl/pymes_hero_new.png',
        width: 1200,
        height: 630,
        alt: 'Diseño y Desarrollo de Páginas Web para PYMES Chile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diseño y Desarrollo de Páginas Web para PYMES en Chile',
    description: 'Páginas web optimizadas para vender más en el mercado chileno. 100% autogestionables y responsivas.',
    images: ['https://webunica.cl/pymes_hero_new.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

export default function PymesPage() {
  const pymesFaqs = [
    {
      question: "¿Qué incluye el servicio de desarrollo web para PYMES en Chile?",
      answer: "Incluye el diseño personalizado de tu sitio web (Home, Servicios, Nosotros, Galería, Contacto), optimización para celulares, botones directos de WhatsApp, correos corporativos profesionalizados (@tuempresa.cl), certificado de seguridad SSL y estructura SEO inicial para posicionar en Google."
    },
    {
      question: "¿En cuánto tiempo estará terminada mi nueva página web?",
      answer: "Sabemos que el tiempo es vital para una PYME. Una vez recopilada la información básica (textos y logotipo), entregamos sitios web operativos en plazos de 5 a 15 días hábiles, dependiendo del nivel de complejidad del plan seleccionado."
    },
    {
      question: "¿La página web se verá bien en teléfonos celulares y tablets?",
      answer: "Sí, aplicamos un diseño 100% responsivo Mobile-First. Dado que más del 85% de las búsquedas en Chile provienen de smartphones, aseguramos que la navegación sea fluida y rápida en cualquier pantalla."
    },
    {
      question: "¿Podré actualizar los textos y contenidos por mi cuenta?",
      answer: "Por supuesto. Entregamos plataformas autogestionables e intuitivas (WordPress o paneles a medida) acompañadas de un video de capacitación guiado para que puedas cambiar productos, fotos y servicios de forma independiente."
    },
    {
      question: "¿Cómo funciona el posicionamiento SEO para que me encuentren en Google?",
      answer: "Optimizamos el código fuente, la velocidad de carga, la estructura de encabezados (H1, H2, H3) y las meta etiquetas con las palabras clave más buscadas de tu rubro en Chile para que los clientes te encuentren cuando necesiten tus servicios."
    },
    {
      question: "¿Cuáles son los métodos y facilidades de pago?",
      answer: "Ofrecemos modalidades de pago flexibles: puedes abonar el 50% al inicio y 50% al finalizar la entrega conforme, o utilizar tu tarjeta de crédito para pagar en 6 cuotas sin interés mediante pasarela segura."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://webunica.cl/desarrollo-paginas-web-pymes-chile/#service",
        "name": "Diseño y Desarrollo de Páginas Web para PYMES",
        "serviceType": "Web Design & Small Business SEO Development",
        "description": "Desarrollo profesional de páginas web y sitios corporativos optimizados para PYMES en Chile con SEO para Google.",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Webunica",
          "url": "https://webunica.cl",
          "image": "https://webunica.cl/logo-webunica.png.webp",
          "telephone": "+56991089527",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Santiago",
            "addressRegion": "Región Metropolitana",
            "addressCountry": "CL"
          }
        },
        "areaServed": "CL"
      },
      {
        "@type": "FAQPage",
        "@id": "https://webunica.cl/desarrollo-paginas-web-pymes-chile/#faq",
        "mainEntity": pymesFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  const plans = [
    {
      name: "Landing Express SEO",
      price: "$340.000",
      original: "$390.000",
      highlight: "Ideal para campañas y servicios únicos",
      desc: "Estructura de una sola página (One Page) optimizada para conversión inmediata y anuncios en Google Ads.",
      features: [
        "Diseño de sitio web de 1 sección fluida (One Page)",
        "Optimización SEO avanzada con palabras clave",
        "Configuración Google Analytics 4 & Meta Pixel",
        "Análisis inicial de Keywords de búsqueda en Chile",
        "Contenido estructurado y optimizado con IA",
        "4 Fotografías HD publicitarias seleccionadas",
        "Botón directo de WhatsApp y Formulario de Contacto",
        "Pago en 6 cuotas sin interés con tarjeta",
        "Entrega rápida en 5 días hábiles"
      ],
      time: "Entrega: 5 días hábiles"
    },
    {
      name: "Web Corporativa SEO",
      price: "$360.000",
      original: "$420.000",
      highlight: "La opción más elegida por PYMES",
      desc: "Sitio web corporativo completo de hasta 5 secciones internas para mostrar la propuesta de valor de tu negocio.",
      features: [
        "Hasta 5 secciones internas (Home, Servicios, Nosotros, etc.)",
        "Diseño de sitio web 100% a medida y profesional",
        "Google Analytics 4 & Meta Pixel PRO configurados",
        "Optimización SEO en cada página y sección",
        "Estructura de contenidos optimizada para Google",
        "8 Fotografías HD publicitarias integradas",
        "Configuración de correos corporativos (@tuempresa.cl)",
        "Pago en 6 cuotas sin interés con tarjeta",
        "Entrega en 10 a 15 días hábiles"
      ],
      recommended: true,
      time: "Entrega: 10 a 15 días hábiles"
    },
    {
      name: "Pyme WordPress Pro SEO",
      price: "$580.000",
      original: "$680.000",
      highlight: "Autogestionable & Dominio Orgánico",
      desc: "Plataforma WordPress avanzada con panel de control amigable y arquitectura SEO Full para dominar tu nicho.",
      features: [
        "Plataforma WordPress 100% autogestionable",
        "Estrategia SEO Full (Arquitectura & Contenido clave)",
        "Configuración GA4, Meta Pixel & API Conversiones",
        "Módulo de Blog integrado para artículos de SEO",
        "15 Fotografías HD publicitarias y banners",
        "Capacitación en video para actualización de contenidos",
        "Pago en 6 cuotas sin interés con tarjeta",
        "Soporte técnico prioritario y garantía extendida"
      ],
      time: "Entrega: 15 a 20 días hábiles"
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans antialiased overflow-x-hidden selection:bg-blue-400 selection:text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-[20vh] lg:pt-40 pb-20">
        
        {/* ========================================================= */}
        {/* ZONA 1: HERO CYBERPUNK DARK BLUE PYMES CHILE               */}
        {/* ========================================================= */}
        <section className="relative px-6 py-12 lg:py-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[170px] rounded-full pointer-events-none -z-10" />
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-7 text-center lg:text-left">
              
              {/* Badges Pill Row */}
              <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow-lg font-black text-[11px] uppercase tracking-wider">
                  <Flame className="w-4 h-4 fill-white" />
                  <span>Desarrollo Web PYMES Chile 2026</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-300 text-[11px] font-mono">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100/100 Speed Score</span>
                </div>
              </div>
              
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[72px] font-black tracking-tighter leading-[0.92] mb-8 uppercase font-heading text-white">
                Diseño & Desarrollo de <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
                  Páginas Web para PYMES
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                No necesitas solo una web, necesitas una herramienta que venda. Somos especialistas en <strong className="text-white font-bold">desarrollo de páginas web profesionales en Chile</strong> con velocidad extrema, botones de WhatsApp y posicionamiento SEO avanzado para Google.
              </p>
              
              {/* Pitch Feature Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto lg:mx-0 mb-10 text-left">
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <Smartphone className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-200">Mobile First</span>
                </div>
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <Search className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">SEO Google</span>
                </div>
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">WhatsApp 1-Click</span>
                </div>
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">Carga &lt; 1s</span>
                </div>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                 <LeadButton className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-600/20 uppercase tracking-widest text-xs w-full sm:w-auto text-center cursor-pointer">
                    Cotizar Sitio Web PYME <ArrowRight className="inline w-4 h-4 ml-2" />
                 </LeadButton>
                 <a 
                   href="#pilares" 
                   className="px-8 py-5 border border-zinc-800 text-zinc-300 font-bold rounded-2xl hover:bg-zinc-900 hover:text-white transition-all uppercase tracking-widest text-xs text-center w-full sm:w-auto"
                 >
                    Ver Modelo 5 Pilares
                 </a>
              </div>

            </div>
            
            {/* Right Interactive PYME Performance Dashboard Mockup */}
            <div className="lg:col-span-5 relative group">
               <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-emerald-500/10 rounded-[3.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               
               <div className="relative bg-zinc-900 border border-zinc-800 rounded-[3rem] p-6 shadow-2xl overflow-hidden">
                  
                  {/* Top Bar Simulated Performance Status */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800">
                      PYME PERFORMANCE LIVE CHILE
                    </span>
                  </div>

                  {/* Card Simulation Speed & Leads */}
                  <div className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 p-5 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-black text-zinc-950 bg-blue-400 px-2.5 py-1 rounded-md uppercase">
                        SITIO PRO 100% OPERATIVO
                      </span>
                      <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded flex items-center gap-1">
                        <Zap className="w-3 h-3 text-emerald-400" /> 0.8s Carga Móvil
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-white uppercase mb-1 font-heading">
                      +140 Leads Mensuales
                    </h4>
                    <p className="text-xs text-zinc-400 mb-4 font-light italic">
                      Formularios & Botón WhatsApp Convertidos en Ventas
                    </p>

                    {/* Progress Bar Simulation */}
                    <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 mb-4 text-xs text-zinc-300">
                      <div className="flex items-center justify-between mb-1.5 text-blue-400 font-bold font-mono">
                        <span className="flex items-center gap-1.5"><TrendingUp className="w-3.5 h-3.5" /> Posicionamiento Google Chile:</span>
                        <span className="text-emerald-400 font-black">Top 3 Orgánico</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="w-[98%] h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-zinc-300">
                      <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800 text-center">
                        <span className="text-zinc-500 block">Adaptación Móvil:</span>
                        <strong className="text-white text-xs font-bold">100% Responsive</strong>
                      </div>
                      <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800 text-center">
                        <span className="text-zinc-500 block">Gestión Contenidos:</span>
                        <strong className="text-emerald-400 text-xs font-bold">Autogestionable</strong>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge Row */}
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between p-2.5 bg-zinc-950/60 rounded-xl border border-zinc-800">
                      <span className="flex items-center gap-2 text-zinc-300">
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                        Atención Comercial Inmediata
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded">WHATSAPP</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 bg-zinc-950/60 rounded-xl border border-zinc-800">
                      <span className="flex items-center gap-2 text-zinc-300">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                        Certificado SSL & Dominio .cl
                      </span>
                      <span className="text-[10px] text-blue-400 font-bold bg-blue-950/60 px-2 py-0.5 rounded">INCLUIDO</span>
                    </div>
                  </div>

               </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 2: LOS 5 PILARES DEL DESARROLLO WEB PARA PYMES       */}
        {/* ========================================================= */}
        <section id="pilares" className="py-24 bg-white text-zinc-950 rounded-[3.5rem] mx-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-100 text-zinc-950 rounded-full font-mono font-bold text-xs uppercase mb-4">
                <Cpu className="w-4 h-4 text-blue-800" />
                <span>Metodología Digital Orientada a Resultados</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tighter text-zinc-950 font-heading">
                5 Pilares para una Web de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600">Alto Rendimiento</span>
              </h2>
              <p className="text-zinc-600 text-base sm:text-lg font-light mt-4 leading-relaxed">
                Combinamos diseño moderno, código optimizado y posicionamiento orgánico para transformar tu sitio web en una fuente continua de cotizaciones.
              </p>
            </div>

            {/* PILAR 1: DISEÑO MOBILE FIRST */}
            <div className="mb-20 bg-zinc-50 border border-zinc-200/80 rounded-[3rem] p-8 lg:p-14 shadow-sm relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-200/80">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-md">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-800 uppercase tracking-widest">Pilar 01</span>
                    <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                      1. Diseño 100% Responsivo Mobile-First
                    </h3>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-blue-100 text-blue-900 rounded-full text-xs font-mono font-black uppercase">
                  Mobile Optimized
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    t: "Adaptación Celulares & Tablets",
                    d: "Navegación perfecta adaptada a pantallas móviles donde se genera más del 85% de las búsquedas en Chile."
                  },
                  {
                    t: "Interacción Táctil Intuitiva",
                    d: "Menús limpios, botones grandes y lectura cómoda para evitar el abandono de usuarios."
                  },
                  {
                    t: "Compatibilidad Multi-Navegador",
                    d: "Pruebas de visualización consistentes en Chrome, Safari, Edge y Firefox sin distorsiones."
                  },
                  {
                    t: "Experiencia UI/UX de Élite",
                    d: "Diseño profesional que transmite solidez y confianza inmediata desde el primer segundo."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs hover:border-blue-500 transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 bg-blue-50 text-blue-800 rounded-xl flex items-center justify-center font-mono font-bold text-xs mb-4">
                        0{idx + 1}
                      </div>
                      <h4 className="text-base font-black uppercase text-zinc-950 mb-2 font-heading">{item.t}</h4>
                      <p className="text-xs text-zinc-600 font-normal leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PILAR 2: VELOCIDAD Y SEO GOOGLE CHILE */}
            <div className="mb-20 bg-zinc-950 text-white rounded-[3rem] p-8 lg:p-14 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-800 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-400 rounded-2xl flex items-center justify-center text-zinc-950 shadow-md">
                    <Search className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">Pilar 02</span>
                    <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-white font-heading">
                      2. Posicionamiento SEO & Carga Ultrarrápida
                    </h3>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-emerald-400 text-zinc-950 rounded-full text-xs font-mono font-black uppercase">
                  Google Top Ranking
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                
                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-emerald-400/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-emerald-400/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6">
                      <Search className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">
                      Indexación Preferente en Google
                    </h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                      Optimizamos meta títulos, descripciones y palabras clave estratégicas para destacar cuando tus clientes busquen tus servicios.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Google Search Console activado</span>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-blue-500/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">
                      Carga en Menos de 1 Segundo
                    </h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                      Compresión avanzada de imágenes WebP y código limpio para superar los test de rendimiento de Google Lighthouse.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Sin tiempos muertos de espera</span>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-cyan-500/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">
                      Estructura Schema.org Local
                    </h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                      Marcado estructurado que ayuda a los buscadores a entender tu ubicación, horarios de atención y propuesta de valor en Chile.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Rich Snippets destacados</span>
                  </div>
                </div>

              </div>
            </div>

            {/* PILAR 3: WHATSAPP 1-CLICK & EMBUDO DE VENTAS */}
            <div className="mb-20 bg-blue-950/20 border border-blue-200/80 rounded-[3rem] p-8 lg:p-14 shadow-sm relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-blue-200/80">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-md">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-blue-800 uppercase tracking-widest">Pilar 03</span>
                    <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                      3. Integración Directa con WhatsApp & Formularios
                    </h3>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-xs font-mono font-black uppercase">
                  Conversión Inmediata
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-sm flex items-start gap-5">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase text-zinc-950 mb-2 font-heading">
                      Botón de WhatsApp Flotante Inteligente
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                      Permite a los clientes hacer clic e iniciar una conversación directa con un mensaje personalizado de consulta.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-sm flex items-start gap-5">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                    <Layout className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase text-zinc-950 mb-2 font-heading">
                      Formularios de Cotización Seguros
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                      Captura de prospectos enviada directamente a tu correo corporativo con todos los datos necesarios para cotizar.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* PILAR 4 & 5: AUTOGESTIÓN & CORREOS CORPORATIVOS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* PILAR 4: AUTOGESTIÓN */}
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-[3rem] p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-zinc-950 text-blue-400 rounded-xl flex items-center justify-center">
                    <Settings className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                    4. Plataforma 100% Autogestionable
                  </h3>
                </div>

                <ul className="space-y-4">
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Panel de Control Intuitivo (WordPress / Admin)</strong>
                    <p className="text-xs text-zinc-600 font-normal">Modifica servicios, agrega fotos o cambia datos de contacto de forma sencilla.</p>
                  </li>
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Capacitación en Video Paso a Paso</strong>
                    <p className="text-xs text-zinc-600 font-normal">Te entregamos un video tutorial personalizado explicando cómo administrar tu nuevo sitio.</p>
                  </li>
                </ul>
              </div>

              {/* PILAR 5: SEGURIDAD & CORREOS CORPORATIVOS */}
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-[3rem] p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-zinc-950 text-emerald-400 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                    5. Correos Corporativos & Certificado SSL
                  </h3>
                </div>

                <ul className="space-y-4">
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Emails Profesionales (@tuempresa.cl)</strong>
                    <p className="text-xs text-zinc-600 font-normal">Proyecta máxima seriedad con direcciones corporativas configuradas en tu móvil u Outlook.</p>
                  </li>
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Certificado SSL & Dominio Conectado</strong>
                    <p className="text-xs text-zinc-600 font-normal">Candado de navegación segura HTTPS que protege los datos de tus usuarios.</p>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 3: PLANES DE DESARROLLO WEB PARA PYMES CHILE          */}
        {/* ========================================================= */}
        <section id="precios" className="py-24 max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-blue-400 mb-3 block">
              Inversión Transparente • Pago en 6 Cuotas Sin Interés
            </span>
            <h2 className="text-4xl lg:text-7xl font-black mb-4 uppercase tracking-tighter text-white font-heading">
              Planes de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">Páginas Web PYMES</span>
            </h2>
            <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto">
              Soluciones diseñadas para impulsar las ventas de pequeñas y medianas empresas en Chile.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`rounded-[3rem] p-8 lg:p-10 flex flex-col justify-between relative transition-all duration-300 ${
                  plan.recommended 
                    ? 'bg-zinc-900 border-2 border-blue-500 shadow-2xl shadow-blue-500/10' 
                    : 'bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {/* 10% OFF Badge */}
                <div className="absolute top-6 right-6 bg-emerald-500 text-white text-[10px] font-mono font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                  10% OFF VIP
                </div>

                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-mono font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                    MÁS ELEGIDO POR PYMES
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <span className="px-3.5 py-1 bg-zinc-950 border border-zinc-800 text-blue-400 text-[11px] font-mono font-bold rounded-full uppercase tracking-wider">
                      {plan.highlight}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white uppercase mb-2 font-heading">
                    {plan.name}
                  </h3>
                  
                  <p className="text-xs text-zinc-400 font-light mb-8 leading-relaxed min-h-[40px]">
                    {plan.desc}
                  </p>

                  <div className="mb-8 p-6 bg-zinc-950 border border-zinc-800/80 rounded-2xl">
                    <div className="text-xs line-through text-zinc-500 font-mono font-bold mb-1">
                      {plan.original} + IVA
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-blue-400 font-heading">{plan.price}</span>
                      <span className="text-xs text-zinc-400 font-bold uppercase">+ IVA</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 border-t border-zinc-800 pt-6">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 font-normal">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto space-y-3">
                  <LeadButton className={`w-full py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-widest text-center transition-all cursor-pointer ${
                    plan.recommended 
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20' 
                      : 'bg-zinc-950 hover:bg-zinc-800 text-white border border-zinc-800'
                  }`}>
                    Reclamar 10% Descuento
                  </LeadButton>
                  <div className="text-center text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
                    {plan.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 4: PREGUNTAS FRECUENTES SOBRE WEBS PARA PYMES        */}
        {/* ========================================================= */}
        <div id="faq" className="rounded-[4rem] bg-white text-zinc-950 mx-4 overflow-hidden mt-20">
          <FAQSection 
            faqs={pymesFaqs}
            title="Preguntas Frecuentes sobre Páginas Web PYMES"
            description="Todo lo que necesitas saber antes de lanzar la web de tu empresa."
            ctaTitle="¿Listo para acelerar tus ventas en Google?"
            ctaDescription="Solicita una cotización rápida y recibe un 10% de descuento inmediato en tu plan."
            ctaLabel="Solicitar Cotización Web"
          />
        </div>

        {/* ========================================================= */}
        {/* ZONA 5: CTA FINAL IMPACTANTE                              */}
        {/* ========================================================= */}
        <section className="py-32 text-center px-6">
           <h2 className="text-5xl lg:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.85] text-white font-heading">
              HAZ QUE TU PYME <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">
                destaque en Chile.
              </span>
           </h2>
           <p className="text-zinc-400 text-xl mb-14 max-w-2xl mx-auto font-light leading-relaxed">
              No dejes que tu competencia capture a tus clientes. Construye una página web profesional, rápida y enfocada en generar ventas.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <LeadButton className="px-16 py-7 bg-blue-600 text-white font-black rounded-full hover:bg-blue-500 transition-all shadow-2xl uppercase tracking-[0.2em] text-xs cursor-pointer">
                Cotizar Desarrollo Web PYME
             </LeadButton>
             <WhatsAppButton className="px-12 py-7 bg-[#25d366] text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-emerald-500 transition-all shadow-2xl flex items-center justify-center gap-3">
                Consultar por WhatsApp
             </WhatsAppButton>
           </div>
        </section>

      </div>
    </main>
  );
}
