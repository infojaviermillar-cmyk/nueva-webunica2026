import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import { Metadata } from 'next';
import { 
  Search, 
  Zap, 
  BarChart3, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Globe,
  Bot,
  Sparkles,
  Cpu,
  Award,
  TrendingUp,
  Target,
  LineChart,
  FileText,
  Check,
  Flame,
  Building2,
  Smartphone,
  MapPin
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Servicios de SEO & Posicionamiento Google Chile | SEO Técnico & GEO AI',
  description: 'Agencia de SEO Técnico y posicionamiento web en Chile. Garantizamos velocidad Core Web Vitals 100/100, datos estructurados Schema.org y visibilidad en Inteligencia Artificial (ChatGPT, Perplexity, Gemini).',
  keywords: [
    'servicios seo chile',
    'posicionamiento web google chile',
    'experto seo tecnico santiago',
    'auditoria seo gratis chile',
    'geo ai visibility',
    'seo para shopify chile',
    'posicionamiento organico pymes',
    'seo local google maps chile',
    'agencia de posicionamiento web',
    'core web vitals nextjs'
  ].join(', '),
  alternates: {
    canonical: 'https://webunica.cl/servicios-seo-posicionamiento-google',
  },
  openGraph: {
    title: 'Servicios SEO & Posicionamiento Google Chile | Webunica',
    description: 'Aumenta tus ventas con SEO Técnico avanzado de alta velocidad y posicionamiento en buscadores tradicionales e Inteligencia Artificial (GEO AI).',
    url: 'https://webunica.cl/servicios-seo-posicionamiento-google',
    siteName: 'Webunica',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: 'https://webunica.cl/seo_performance_dashboard_premium_1776268863414.png',
        width: 1200,
        height: 630,
        alt: 'Dashboard de Rendimiento SEO y Posicionamiento Google Chile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios de SEO Técnico & GEO AI Visibility en Chile',
    description: 'Lidera la primera página de Google y los recomendadores de IA con ingeniería SEO de alto rendimiento.',
    images: ['https://webunica.cl/seo_performance_dashboard_premium_1776268863414.png'],
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

export default function SeoServicePage() {
  const seoFaqs = [
    {
      question: "¿Cuánto tiempo tarda en verse el resultado del posicionamiento SEO en Chile?",
      answer: "El SEO es una inversión progresiva. Las mejoras técnicas de velocidad y Schema.org en Next.js se reflejan en pocas semanas en Google Search Console, mientras que la dominación de palabras clave altamente competitivas suele consolidarse entre los 2 y 4 meses."
    },
    {
      question: "¿Qué es la visibilidad GEO AI (Generative Engine Optimization)?",
      answer: "GEO AI es la evolución del SEO para la era de la Inteligencia Artificial. Optimiza la estructura semántica de tu sitio para que motores generativos como ChatGPT, Perplexity y Google Gemini citen tu empresa como la respuesta recomendada cuando los usuarios realizan consultas comerciales."
    },
    {
      question: "¿Qué diferencia al SEO Técnico del SEO de contenido tradicional?",
      answer: "El SEO Técnico optimiza la arquitectura subyacente de la página: velocidad de carga (Core Web Vitals 100/100), renderizado SSR en servidores de borde, marcado JSON-LD y crawl budget. Sin una base técnica perfecta, el contenido excelente jamás alcanza la primera posición."
    },
    {
      question: "¿Realizan SEO específico para tiendas Shopify en Chile?",
      answer: "Sí. Poseemos una metodología especializada en e-commerce Shopify: optimización de colecciones, compresión de imágenes sin pérdida, metadatos Liquid avanzados y estructuración de productos para destacar en Google Shopping."
    },
    {
      question: "¿Cómo funciona el SEO Local para Google Maps?",
      answer: "Optimizamos tu Perfil de Negocio en Google (GMB), la geolocalización de tus sucursales y las palabras clave de tu comuna o región (ej: 'diseño web en Providencia', 'servicios en Santiago'), asegurando que aparezcas en el paquete de mapas destacado."
    },
    {
      question: "¿Qué incluye la Auditoría SEO Express Gratuita?",
      answer: "Realizamos un diagnóstico completo sin costo de la salud técnica de tu sitio: evaluación de velocidad Core Web Vitals, detección de errores 404, fallos de indexación, oportunidades de keywords y recomendaciones inmediatas de optimización."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://webunica.cl/servicios-seo-posicionamiento-google/#service",
        "name": "Servicios de SEO Técnico & Posicionamiento en Google Chile",
        "serviceType": "Search Engine Optimization & GEO AI Visibility",
        "description": "Optimización avanzada de sitios web para motores de búsqueda y buscadores de IA. Incluye auditoría Core Web Vitals, SEO local y marcado de datos Schema.org.",
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
        "@id": "https://webunica.cl/servicios-seo-posicionamiento-google/#faq",
        "mainEntity": seoFaqs.map((faq) => ({
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

  const seoPlans = [
    {
      name: "Plan SEO Pymes & Local",
      price: "$480.000",
      original: "$580.000",
      highlight: "Captación Local & Google Maps",
      desc: "Ideal para empresas locales que buscan dominar las búsquedas en su comuna o ciudad y destacar en Google Maps.",
      features: [
        "Auditoría Técnica Inicial & Limpieza de Errores",
        "Optimización SEO On-Page (Title, Meta, H1, H2)",
        "Configuración y Optimización Google Business Profile",
        "Investigación de 15 Palabras Clave de Alta Conversión",
        "Implementación de Datos Estructurados JSON-LD",
        "Reporte mensual de posiciones y tráfico orgánico",
        "Soporte por 3 meses"
      ]
    },
    {
      name: "Plan SEO Pro & GEO AI",
      price: "$780.000",
      original: "$950.000",
      highlight: "SEO Técnico & Motores IA",
      desc: "Estrategia integral para pymes y e-commerce que buscan rankear #1 en Google y ser citados en ChatGPT y Perplexity.",
      features: [
        "Todo lo del Plan Pymes +",
        "Optimización Core Web Vitals (Carga en < 1 segundo)",
        "Estrategia GEO AI (Visibilidad en ChatGPT & Gemini)",
        "Creación de 3 Topic Clusters & Silos de Contenido",
        "SEO para E-Commerce (Shopify o WooCommerce)",
        "Linkbuilding seguro de alta autoridad en Chile",
        "Informe mensual con métricas de ROI y Conversiones",
        "Soporte prioritario y reunión mensual de avance"
      ],
      recommended: true
    },
    {
      name: "Plan SEO Dominancia 360",
      price: "$1.450.000",
      original: "$1.750.000",
      highlight: "Ecosistema SEO & CRO de Alto Nivel",
      desc: "Programa intensivo para empresas consolidadas que requieren capturar cuota de mercado en nichos ultra competitivos.",
      features: [
        "Estrategia de Inteligencia Competitiva 360°",
        "Arquitectura Next.js / Serverless de rendimiento extremo",
        "Optimizaciones avanzadas de CRO (Conversión por Clic)",
        "Generación y optimización masiva de contenidos por IA",
        "Estrategia de autoría EEAT para nichos YMYL",
        "Monitoreo diario de posicionamiento y alertas SERP",
        "Acceso directo a Ingeniero SEO dedicado",
        "Garantía técnica y soporte continuo de 6 meses"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans antialiased overflow-x-hidden selection:bg-emerald-400 selection:text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-[20vh] lg:pt-40 pb-20">
        
        {/* ========================================================= */}
        {/* ZONA 1: HERO NEON EMERALD & CYAN CYBERPUNK TECH            */}
        {/* ========================================================= */}
        <section className="relative px-6 py-12 lg:py-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/10 blur-[170px] rounded-full pointer-events-none -z-10" />
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-7 text-center lg:text-left">
              
              {/* Badges Pill Row */}
              <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-400 text-zinc-950 rounded-full shadow-lg font-black text-[11px] uppercase tracking-wider">
                  <Flame className="w-4 h-4 fill-zinc-950" />
                  <span>Ingeniería SEO & GEO AI 2026</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-300 text-[11px] font-mono">
                  <Search className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Google & Motores de IA</span>
                </div>
              </div>
              
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[72px] font-black tracking-tighter leading-[0.92] mb-8 uppercase font-heading text-white">
                Domina <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  Google & La Era de IA
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Potenciamos la visibilidad de tu marca con <strong className="text-white font-bold">SEO Técnico de Alta Velocidad</strong> en Next.js, optimización Core Web Vitals 100/100 y posicionamiento estratégico en los nuevos recomendadores de Inteligencia Artificial (ChatGPT, Perplexity, Gemini).
              </p>
              
              {/* Pitch Feature Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto lg:mx-0 mb-10 text-left">
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-200">100 Lighthouse</span>
                </div>
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <Bot className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">GEO AI Ready</span>
                </div>
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">SEO Maps</span>
                </div>
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <LineChart className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">ROI Orientado</span>
                </div>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                 <LeadButton className="px-10 py-5 bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-black rounded-2xl transition-all shadow-xl shadow-emerald-400/10 uppercase tracking-widest text-xs w-full sm:w-auto text-center cursor-pointer">
                    Auditoría SEO Gratuita <ArrowRight className="inline w-4 h-4 ml-2" />
                 </LeadButton>
                 <a 
                   href="#pilares" 
                   className="px-8 py-5 border border-zinc-800 text-zinc-300 font-bold rounded-2xl hover:bg-zinc-900 hover:text-white transition-all uppercase tracking-widest text-xs text-center w-full sm:w-auto"
                 >
                    Ver Estrategia 5 Pilares
                 </a>
              </div>

            </div>
            
            {/* Right Interactive Mockup Container */}
            <div className="lg:col-span-5 relative group">
               <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/10 rounded-[3.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               
               <div className="relative bg-zinc-900 border border-zinc-800 rounded-[3rem] p-6 shadow-2xl overflow-hidden">
                  
                  {/* Top Bar Simulated Search Console */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
                      RANK #1 EN GOOGLE CHILE
                    </span>
                  </div>

                  {/* Card Simulation Metrics Header */}
                  <div className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 p-5 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-black text-zinc-950 bg-emerald-400 px-2.5 py-1 rounded-md uppercase">
                        AUDITORÍA LIVE
                      </span>
                      <span className="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-950/80 border border-cyan-800 px-2 py-0.5 rounded flex items-center gap-1">
                        <Zap className="w-3 h-3 fill-cyan-400" /> 100/100 Core Web Vitals
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-white uppercase mb-1 font-heading">
                      Crecimiento Orgánico +340%
                    </h4>
                    <p className="text-xs text-zinc-400 mb-4 font-light italic">
                      Indexación Semántica & Schema.org en Tiempo Real
                    </p>

                    {/* Progress Bar Simulation */}
                    <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 mb-4 text-xs text-zinc-300">
                      <div className="flex items-center justify-between mb-1.5 text-emerald-400 font-bold font-mono">
                        <span className="flex items-center gap-1.5"><TrendingUp className="w-3.5 h-3.5" /> Google SERP Impression Rate:</span>
                        <span>98.4%</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="w-[98%] h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-zinc-300">
                      <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800 text-center">
                        <span className="text-zinc-500 block">CTR Promedio:</span>
                        <strong className="text-emerald-400 text-xs font-bold">14.8% (Top 3)</strong>
                      </div>
                      <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800 text-center">
                        <span className="text-zinc-500 block">Citas ChatGPT:</span>
                        <strong className="text-cyan-400 text-xs font-bold">Activo (GEO AI)</strong>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge Row */}
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between p-2.5 bg-zinc-950/60 rounded-xl border border-zinc-800">
                      <span className="flex items-center gap-2 text-zinc-300">
                        <Bot className="w-3.5 h-3.5 text-cyan-400" />
                        Indexación en Motores IA
                      </span>
                      <span className="text-[10px] text-cyan-400 font-bold bg-cyan-950/60 px-2 py-0.5 rounded">VERIFICADO</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 bg-zinc-950/60 rounded-xl border border-zinc-800">
                      <span className="flex items-center gap-2 text-zinc-300">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        Schema.org JSON-LD Validado
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded">100% OK</span>
                    </div>
                  </div>

               </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 2: LOS 5 PILARES DEL SEO DE ALTO RENDIMIENTO         */}
        {/* ========================================================= */}
        <section id="pilares" className="py-24 bg-white text-zinc-950 rounded-[3.5rem] mx-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-100 text-zinc-950 rounded-full font-mono font-bold text-xs uppercase mb-4">
                <Cpu className="w-4 h-4 text-emerald-800" />
                <span>Ciencia de Datos & Posicionamiento Estratégico</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tighter text-zinc-950 font-heading">
                5 Pilares de Ingeniería <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600">SEO & GEO AI</span>
              </h2>
              <p className="text-zinc-600 text-base sm:text-lg font-light mt-4 leading-relaxed">
                Superamos a la competencia combinando infraestructura ultrarrápida, intenciones de búsqueda de alta conversión y presencia en los recomendadores de Inteligencia Artificial.
              </p>
            </div>

            {/* PILAR 1: SEO TÉCNICO & CORE WEB VITALS 100/100 */}
            <div className="mb-20 bg-zinc-50 border border-zinc-200/80 rounded-[3rem] p-8 lg:p-14 shadow-sm relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-200/80">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-400 rounded-2xl flex items-center justify-center text-zinc-950 shadow-md">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-widest">Pilar 01</span>
                    <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                      1. SEO Técnico & Core Web Vitals 100/100
                    </h3>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-emerald-100 text-emerald-900 rounded-full text-xs font-mono font-black uppercase">
                  Infraestructura Next.js
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    t: "Carga en < 1 Segundo",
                    d: "Optimizamos el LCP y CLS con Server-Side Rendering (SSR) en servidores Edge de última generación."
                  },
                  {
                    t: "Crawl Budget Optimizado",
                    d: "Estructura de arquitectura sitemap y robots.txt sin bucles ni contenido duplicado para facilitar el rastreo."
                  },
                  {
                    t: "Schema.org Avanzado",
                    d: "Inyección de esquemas JSON-LD ricos (LocalBusiness, Product, AggregateOffer, FAQPage) para destacar en Google."
                  },
                  {
                    t: "Compresión WebP/AVIF",
                    d: "Transformación automática de imágenes de alta resolución sin degradar la calidad visual de tu sitio."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs hover:border-emerald-400 transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 bg-emerald-50 text-emerald-800 rounded-xl flex items-center justify-center font-mono font-bold text-xs mb-4">
                        0{idx + 1}
                      </div>
                      <h4 className="text-base font-black uppercase text-zinc-950 mb-2 font-heading">{item.t}</h4>
                      <p className="text-xs text-zinc-600 font-normal leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PILAR 2: GEO AI VISIBILITY (CHATGPT, PERPLEXITY & GEMINI) */}
            <div className="mb-20 bg-zinc-950 text-white rounded-[3rem] p-8 lg:p-14 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-800 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-400 rounded-2xl flex items-center justify-center text-zinc-950 shadow-md">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">Pilar 02</span>
                    <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-white font-heading">
                      2. Visibilidad GEO AI en Motores Generativos
                    </h3>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-cyan-400 text-zinc-950 rounded-full text-xs font-mono font-black uppercase">
                  Generative Engine Optimization
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                
                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-cyan-400/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-cyan-400/20 text-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                      <Bot className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">
                      Recomendaciones en ChatGPT & Perplexity
                    </h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                      Estructuramos la información corporativa para ser fuente citada de preferencia en recomendaciones de IA.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Presencia en respuestas generativas de IA</span>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">
                      AI Overviews de Google (SGE)
                    </h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                      Optimización orientada a la caja de resumen de Inteligencia Artificial que encabeza las búsquedas de Google.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Captura de atención en el módulo cero</span>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-amber-500/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mb-6">
                      <Award className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">
                      Autoridad EEAT Verificada
                    </h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                      Fortalecimiento de señales de Experiencia, Pericia, Autoridad y Confiabilidad requeridas por los modelos de lenguaje.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Credibilidad institucional de alto nivel</span>
                  </div>
                </div>

              </div>
            </div>

            {/* PILAR 3: SEARCH INTENT & TOPIC CLUSTERS */}
            <div className="mb-20 bg-emerald-950/20 border border-emerald-200/80 rounded-[3rem] p-8 lg:p-14 shadow-sm relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-emerald-200/80">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 text-zinc-950 rounded-2xl flex items-center justify-center shadow-md">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-widest">Pilar 03</span>
                    <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                      3. SEO de Contenido & Silos Semánticos
                    </h3>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-emerald-500 text-zinc-950 rounded-full text-xs font-mono font-black uppercase">
                  Search Intent & CRO
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm flex items-start gap-5">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                    <Search className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase text-zinc-950 mb-2 font-heading">
                      Investigación de Intención Transaccional
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                      Identificamos los términos de búsqueda con intención de compra o contratación explícita en Chile para atraer tráfico de alta conversión.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm flex items-start gap-5">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase text-zinc-950 mb-2 font-heading">
                      Estructuración de Topic Clusters
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                      Organización jerárquica de contenidos interconectados que demuestran a Google el dominio completo de tu temática comercial.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* PILAR 4 & 5: SEO LOCAL & TRAZABILIDAD ROI */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* PILAR 4: SEO LOCAL */}
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-[3rem] p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-zinc-950 text-emerald-400 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                    4. SEO Local Dominante & Google Maps
                  </h3>
                </div>

                <ul className="space-y-4">
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Optimización Google Business Profile</strong>
                    <p className="text-xs text-zinc-600 font-normal">Posicionamiento en el paquete de 3 mapas destacados para búsquedas "cerca de mí".</p>
                  </li>
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Geolocalización Comunal en Chile</strong>
                    <p className="text-xs text-zinc-600 font-normal">Páginas de aterrizaje optimizadas para comunas clave (Providencia, Las Condes, Santiago, Concepción, etc.).</p>
                  </li>
                </ul>
              </div>

              {/* PILAR 5: TRAZABILIDAD ROI */}
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-[3rem] p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-zinc-950 text-emerald-400 rounded-xl flex items-center justify-center">
                    <LineChart className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                    5. Trazabilidad de Métricas & ROI
                  </h3>
                </div>

                <ul className="space-y-4">
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Google Search Console & GA4</strong>
                    <p className="text-xs text-zinc-600 font-normal">Informes transparentes de clics reales, impresiones, palabras clave ganadas y embudo de conversión.</p>
                  </li>
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Monitoreo de Conversiones Monetarias</strong>
                    <p className="text-xs text-zinc-600 font-normal">Medición exacta de cuántos formularios, llamadas y ventas de e-commerce provienen del SEO orgánico.</p>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 3: PLANES DE POSICIONAMIENTO SEO EN CHILE             */}
        {/* ========================================================= */}
        <section id="planes" className="py-24 max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-emerald-400 mb-3 block">
              Inversión Transparente • Resultados Medibles
            </span>
            <h2 className="text-4xl lg:text-7xl font-black mb-4 uppercase tracking-tighter text-white font-heading">
              Planes de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Posicionamiento SEO</span>
            </h2>
            <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto">
              Soluciones estratégicas a medida para escalar el tráfico orgánico de tu negocio en Chile.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {seoPlans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`rounded-[3rem] p-8 lg:p-10 flex flex-col justify-between relative transition-all duration-300 ${
                  plan.recommended 
                    ? 'bg-zinc-900 border-2 border-emerald-400 shadow-2xl shadow-emerald-400/10' 
                    : 'bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-400 text-zinc-950 text-[10px] font-mono font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                    RECOMENDADO PARA CRECIMIENTO
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <span className="px-3.5 py-1 bg-zinc-950 border border-zinc-800 text-emerald-400 text-[11px] font-mono font-bold rounded-full uppercase tracking-wider">
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
                      <span className="text-4xl font-black text-emerald-400 font-heading">{plan.price}</span>
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

                <LeadButton className={`w-full py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-widest text-center transition-all cursor-pointer ${
                  plan.recommended 
                    ? 'bg-emerald-400 hover:bg-emerald-300 text-zinc-950 shadow-lg' 
                    : 'bg-zinc-950 hover:bg-zinc-800 text-white border border-zinc-800'
                }`}>
                  Solicitar {plan.name}
                </LeadButton>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 4: PREGUNTAS FRECUENTES SOBRE SEO EN CHILE           */}
        {/* ========================================================= */}
        <div id="faq" className="rounded-[4rem] bg-white text-zinc-950 mx-4 overflow-hidden mt-20">
          <FAQSection 
            faqs={seoFaqs}
            title="Dudas sobre Posicionamiento SEO & GEO AI"
            description="Información transparente sobre cómo rankear en el Google de hoy."
            ctaTitle="¿Auditamos tu sitio web hoy mismo?"
            ctaDescription="Solicita tu Auditoría SEO Express gratuita para conocer tu estado actual y potencial."
            ctaLabel="Solicitar Auditoría SEO Gratuita"
          />
        </div>

        {/* ========================================================= */}
        {/* ZONA 5: CTA FINAL IMPACTANTE                              */}
        {/* ========================================================= */}
        <section className="py-32 text-center px-6">
           <h2 className="text-5xl lg:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.85] text-white font-heading">
              CONVIERTE TU WEB EN <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                tu mejor vendedor.
              </span>
           </h2>
           <p className="text-zinc-400 text-xl mb-14 max-w-2xl mx-auto font-light leading-relaxed">
              Deja de ser invisible para tus clientes potenciales en Chile. Domina las búsquedas orgánicas en Google y la Inteligencia Artificial.
           </p>
           <LeadButton className="px-16 py-7 bg-emerald-400 text-zinc-950 font-black rounded-full hover:bg-emerald-300 transition-all shadow-2xl uppercase tracking-[0.2em] text-xs cursor-pointer">
              Solicitar Plan de Posicionamiento SEO
           </LeadButton>
        </section>

      </div>
    </main>
  );
}

