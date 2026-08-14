import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import { Metadata } from 'next';
import { 
  Zap, 
  Target, 
  BarChart3, 
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Globe,
  Bot,
  Sparkles,
  Cpu,
  Award,
  TrendingUp,
  ArrowRight,
  Flame,
  Layers,
  Smartphone,
  Check,
  Minus,
  MapPin,
  Building2,
  PhoneCall,
  Search,
  MessageSquare,
  FileSpreadsheet,
  MousePointerClick,
  Code2,
  Database,
  LineChart,
  Network,
  Users,
  Compass,
  LayoutGrid,
  ShieldAlert,
  Sliders,
  CheckSquare
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Desarrollo Web para Empresas en Chile | Webunica',
  description: 'Desarrollo de sitios web corporativos profesionales desde $1.100.000 + IVA. Diseño UX/UI, SEO, CRO, analítica y tecnología moderna para empresas.',
  keywords: [
    'desarrollo web profesional',
    'desarrollo web para empresas',
    'diseño web corporativo',
    'páginas web para empresas',
    'desarrollo de sitios web',
    'diseño web profesional',
    'empresa de desarrollo web',
    'desarrollo web Chile',
    'páginas web corporativas',
    'sitio web empresarial',
    'desarrollo web SEO',
    'diseño web orientado a conversión'
  ].join(', '),
  alternates: {
    canonical: 'https://webunica.cl/desarrollo-web-corporativo',
  },
  openGraph: {
    title: 'Desarrollo Web Corporativo de Alto Rendimiento | Webunica',
    description: 'Sitios web profesionales diseñados para posicionar, captar clientes y convertir visitas en oportunidades comerciales en Chile. Proyectos desde $1.100.000 + IVA.',
    url: 'https://webunica.cl/desarrollo-web-corporativo',
    siteName: 'Webunica',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: 'https://webunica.cl/pymes_hero_new.png',
        width: 1200,
        height: 630,
        alt: 'Desarrollo Web Corporativo de Alto Rendimiento en Chile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desarrollo Web Corporativo de Alto Rendimiento | Webunica',
    description: 'Diseñamos y desarrollamos sitios web empresariales preparados para posicionar, captar y convertir en Chile.',
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

export default function CorporateWebPage() {
  const corporateFaqs = [
    {
      question: "¿Cuánto cuesta desarrollar un sitio web corporativo?",
      answer: "En Webunica disponemos de dos niveles de desarrollo profesional transparente: el Plan Web Corporativa Profesional desde $1.100.000 + IVA, orientado a construir una presencia institucional sólida y optimizada, y el Plan Web Corporativa Performance por $1.450.000 + IVA, que incorpora arquitectura SEO avanzada, SEO Local, optimización CRO y seguimiento de conversiones."
    },
    {
      question: "¿Cuál es la diferencia entre el Plan Profesional y Performance?",
      answer: "El Plan Profesional cubre todas las necesidades de diseño UX/UI a medida, desarrollo responsive, SEO técnico inicial y analítica básica. El Plan Performance agrega una estrategia activa de captación: arquitectura de páginas comerciales por servicio y ubicación (SEO Local), marcado Schema.org avanzado, optimización para tasa de conversión (CRO), tracking granular de llamadas y formularios, y preparación para campañas pagadas."
    },
    {
      question: "¿El sitio web queda optimizado para posicionar en Google?",
      answer: "Sí, ambos planes consideran SEO técnico inicial con código limpio, jerarquía de encabezados (H1-H6), marcado semántico, metadatos, sitemap XML y optimización Core Web Vitals. El Plan Performance profundiza con investigación de oportunidades de búsqueda, interlinking estratégico y páginas geolocalizadas. No prometemos posiciones mágicas ni garantizamos el #1 absoluto, ya que el algoritmo de Google evalúa múltiples factores continuos."
    },
    {
      question: "¿Pueden desarrollar páginas y localizadores para empresas con múltiples sucursales?",
      answer: "Sí. Dentro del alcance del Plan Performance para modelos de negocio que lo justifiquen, estructuramos directorios de sucursales, integración con Google Maps, horarios, teléfonos específicos por sede y marcado estructurado Schema LocalBusiness para maximizar la relevancia en búsquedas geolocalizadas."
    },
    {
      question: "¿Google Ads está incluido en el precio del desarrollo web?",
      answer: "No. El desarrollo web es un pago único por proyecto. Si tu empresa requiere generar tráfico pagado inmediato desde el primer día, ofrecemos de manera complementaria y opcional la Campaña de Tráfico con Google Ads por $350.000 / mes (honorarios de gestión y optimización estratégica)."
    },
    {
      question: "¿La inversión publicitaria en Google está incluida en los $350.000 mensuales?",
      answer: "No. Los $350.000 mensuales corresponden exclusivamente a los honorarios de gestión, estructuración, optimización continua e informes de rendimiento. El presupuesto destinado directamente a los clics de Google Ads se define en conjunto según tus objetivos, mercado y cobertura, y se paga de manera transparente y directa a Google."
    },
    {
      question: "¿Cuánto tiempo tarda el desarrollo de una web corporativa?",
      answer: "El plazo habitual fluctúa entre 4 a 6 semanas para el Plan Profesional y de 6 a 8 semanas para el Plan Performance, dependiendo del tiempo de entrega de contenidos por parte de la empresa, la cantidad de secciones requeridas y el alcance de integraciones específicas."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://webunica.cl/desarrollo-web-corporativo/#service",
        "name": "Desarrollo Web Corporativo de Alto Rendimiento",
        "serviceType": "Corporate Web Development, UX/UI Design & Technical SEO",
        "description": "Sitios web profesionales diseñados para posicionar empresas en Google, generar confianza y transformar visitas en oportunidades comerciales reales.",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Webunica",
          "url": "https://webunica.cl",
          "image": "https://webunica.cl/logo-webunica.png.webp",
          "telephone": "+56984410379",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Santiago",
            "addressRegion": "Región Metropolitana",
            "addressCountry": "CL"
          }
        },
        "areaServed": "CL",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Planes de Desarrollo Web Corporativo",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Corporativa Profesional"
              },
              "price": "1100000",
              "priceCurrency": "CLP"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Web Corporativa Performance"
              },
              "price": "1450000",
              "priceCurrency": "CLP"
            }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://webunica.cl/desarrollo-web-corporativo/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Inicio",
            "item": "https://webunica.cl"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Servicios",
            "item": "https://webunica.cl/#servicios"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Desarrollo Web Corporativo",
            "item": "https://webunica.cl/desarrollo-web-corporativo"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://webunica.cl/desarrollo-web-corporativo/#faq",
        "mainEntity": corporateFaqs.map((faq) => ({
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

  const comparisonFeatures = [
    { name: "Diseño UX/UI personalizado a medida", pro: true, perf: true, note: "Sin plantillas prefabricadas genéricas" },
    { name: "Desarrollo responsive mobile-first", pro: true, perf: true, note: "Adaptado a todos los dispositivos" },
    { name: "SEO técnico inicial (Metas, Sitemap, Robots, H1-H6)", pro: true, perf: true, note: "Indexación limpia en Google" },
    { name: "Formularios de contacto de bajo roce", pro: true, perf: true, note: "Captación directa con validación" },
    { name: "Integración con WhatsApp y redes sociales", pro: true, perf: true, note: "Canal directo de consultas" },
    { name: "Google Analytics 4 + Google Tag Manager", pro: true, perf: true, note: "Medición estándar de visitas" },
    { name: "Certificado de seguridad SSL + Hosting setup", pro: true, perf: true, note: "Conexión encriptada HTTPS" },
    { name: "Optimización inicial Core Web Vitals", pro: true, perf: true, note: "Carga rápida y fluida" },
    { name: "Arquitectura SEO avanzada y keyword research comercial", pro: false, perf: true, note: "Estrategia profunda de intenciones de búsqueda" },
    { name: "Páginas específicas por servicio y por ubicación (SEO Local)", pro: false, perf: true, note: "Estructuras geolocalizadas según modelo" },
    { name: "Schema JSON-LD avanzado (LocalBusiness, FAQPage, Breadcrumb)", pro: false, perf: true, note: "Resultados enriquecidos en Google SERP" },
    { name: "Optimización de Tasa de Conversión (CRO avanzado)", pro: false, perf: true, note: "Diseño estratégico de llamadas a la acción" },
    { name: "Tracking avanzado de conversiones (Forms, WhatsApp, Teléfono)", pro: false, perf: true, note: "Trazabilidad de cada lead generado" },
    { name: "Landing pages estratégicas de alta conversión", pro: false, perf: true, note: "Preparadas para campañas publicitarias" },
    { name: "Localizador de sucursales interactivo", pro: "Según alcance", perf: true, note: "Directorio geográfico cuando aplique" },
    { name: "Estrategia de interlinking interno y Search Console PRO", pro: false, perf: true, note: "Flujo de autoridad y monitoreo SERP" },
  ];

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900 font-sans antialiased overflow-x-hidden selection:bg-purple-200 selection:text-purple-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Script helper para DataLayer Analytics events */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: 'view_corporate_web_service',
              page_name: 'Desarrollo Web Corporativo de Alto Rendimiento',
              page_path: '/desarrollo-web-corporativo'
            });
          `
        }}
      />

      <div className="pt-[20vh] lg:pt-40 pb-20">
        
        {/* ========================================================= */}
        {/* ZONA 1: HERO PRINCIPAL                                    */}
        {/* ========================================================= */}
        <section className="relative px-6 py-12 lg:py-24 overflow-hidden bg-gradient-to-b from-purple-50/80 via-white to-[#fafafa]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-300/15 blur-[170px] rounded-full pointer-events-none -z-10" />
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-7 text-center lg:text-left">
              
              {/* Badges Pill Row */}
              <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full shadow-md font-black text-[11px] uppercase tracking-wider">
                  <Flame className="w-4 h-4 fill-white" />
                  <span>Desarrollo Web para Empresas en Chile</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-purple-200 rounded-full text-purple-900 text-[11px] font-mono shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  <span>Diseño UX/UI + SEO + CRO + Analítica</span>
                </div>
              </div>
              
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[68px] font-black tracking-tighter leading-[0.94] mb-8 uppercase font-heading text-zinc-950">
                Desarrollo Web Corporativo <br />
                <span className="text-[#7850FA]">
                  de Alto Rendimiento
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-zinc-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Diseñamos y desarrollamos <strong className="text-zinc-950 font-bold">sitios web profesionales</strong> preparados para posicionar tu empresa, captar oportunidades comerciales y convertir visitas en clientes reales.
              </p>
              
              {/* Pitch Feature Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto lg:mx-0 mb-10 text-left">
                <div className="p-3 bg-white border border-zinc-200 rounded-2xl flex items-center gap-2.5 shadow-xs">
                  <Compass className="w-4 h-4 text-purple-600 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-800">Diseño UX/UI</span>
                </div>
                <div className="p-3 bg-white border border-zinc-200 rounded-2xl flex items-center gap-2.5 shadow-xs">
                  <Code2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-800">Desarrollo a Medida</span>
                </div>
                <div className="p-3 bg-white border border-zinc-200 rounded-2xl flex items-center gap-2.5 shadow-xs">
                  <Search className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-800">SEO Técnico</span>
                </div>
                <div className="p-3 bg-white border border-zinc-200 rounded-2xl flex items-center gap-2.5 shadow-xs">
                  <MousePointerClick className="w-4 h-4 text-pink-600 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-800">Optimización CRO</span>
                </div>
                <div className="p-3 bg-white border border-zinc-200 rounded-2xl flex items-center gap-2.5 shadow-xs">
                  <LineChart className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-800">Analítica GA4/GTM</span>
                </div>
                <div className="p-3 bg-white border border-zinc-200 rounded-2xl flex items-center gap-2.5 shadow-xs">
                  <Zap className="w-4 h-4 text-violet-600 shrink-0" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-800">Alto Rendimiento</span>
                </div>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-6">
                 <LeadButton 
                   service="Web Corporativa Performance"
                   className="px-10 py-5 bg-purple-600 hover:bg-purple-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-purple-600/20 uppercase tracking-widest text-xs w-full sm:w-auto text-center cursor-pointer"
                 >
                    Solicitar cotización <ArrowRight className="inline w-4 h-4 ml-2" />
                 </LeadButton>
                 
                 <a 
                   href="#planes" 
                   className="px-8 py-5 bg-white border border-zinc-300 hover:border-purple-300 text-zinc-800 font-bold rounded-2xl hover:bg-purple-50/50 transition-all uppercase tracking-widest text-xs text-center w-full sm:w-auto shadow-xs"
                 >
                    Ver planes
                 </a>
                 
                 <WhatsAppButton className="px-8 py-5 bg-[#25d366] text-white font-black rounded-2xl hover:bg-emerald-600 transition-all uppercase tracking-widest text-xs text-center w-full sm:w-auto flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10">
                    Hablar por WhatsApp
                 </WhatsAppButton>
              </div>

              {/* Microcopy */}
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500">
                Proyectos desde <span className="text-zinc-950 font-black">$1.100.000 + IVA</span>
              </p>

            </div>
            
            {/* Right Interactive Mockup Container */}
            <div className="lg:col-span-5 relative group">
               <div className="absolute -inset-4 bg-gradient-to-tr from-purple-400/20 to-emerald-400/20 rounded-[3.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               
               <div className="relative bg-white border border-zinc-200/90 rounded-[3rem] p-6 sm:p-8 shadow-2xl overflow-hidden">
                  
                  {/* Top Bar Simulated Platform */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-zinc-100">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-400" />
                      <span className="w-3 h-3 rounded-full bg-yellow-400" />
                      <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-purple-900 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
                      WEBUNICA CORE • PERFORMANCE READY
                    </span>
                  </div>

                  {/* Simulated Metrics Card */}
                  <div className="relative rounded-2xl overflow-hidden bg-purple-50/50 border border-purple-100 p-5 mb-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-black text-white bg-purple-700 px-2.5 py-1 rounded-md uppercase shadow-xs">
                        EMPRESA VALIDADA
                      </span>
                      <span className="text-[10px] font-mono font-bold text-purple-900 bg-white border border-purple-200 px-2.5 py-0.5 rounded flex items-center gap-1 shadow-xs">
                        <Zap className="w-3 h-3 text-emerald-600" /> Core Web Vitals 100/100
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-zinc-950 uppercase mb-1 font-heading">
                      Arquitectura Comercial Activa
                    </h4>
                    <p className="text-xs text-zinc-500 mb-4 font-light italic">
                      SEO Técnico + Captación de Leads + Medición Continua
                    </p>

                    {/* Progress Bar Conversion Rate */}
                    <div className="p-3 bg-white rounded-xl border border-zinc-200 mb-4 text-xs text-zinc-700 shadow-xs">
                      <div className="flex items-center justify-between mb-1.5 text-purple-900 font-bold font-mono">
                        <span className="flex items-center gap-1.5"><TrendingUp className="w-3.5 h-3.5 text-emerald-600" /> Tasa de Conversión Prospectos:</span>
                        <span className="text-emerald-700 font-black text-sm">+285% ROI</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                        <div className="w-[92%] h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-emerald-500 rounded-full" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-zinc-700">
                      <div className="bg-white p-2.5 rounded-lg border border-zinc-200 text-center shadow-xs">
                        <span className="text-zinc-400 block">Tiempo de Carga:</span>
                        <strong className="text-emerald-700 text-xs font-bold">&lt; 1.2 Segundos</strong>
                      </div>
                      <div className="bg-white p-2.5 rounded-lg border border-zinc-200 text-center shadow-xs">
                        <span className="text-zinc-400 block">Estructura SEO:</span>
                        <strong className="text-purple-900 text-xs font-bold">100% Indexable</strong>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge List */}
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between p-2.5 bg-zinc-50 rounded-xl border border-zinc-200">
                      <span className="flex items-center gap-2 text-zinc-700">
                        <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
                        Next.js + TypeScript + Vercel
                      </span>
                      <span className="text-[10px] text-purple-900 font-bold bg-purple-100 px-2 py-0.5 rounded">MODERNO</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 bg-zinc-50 rounded-xl border border-zinc-200">
                      <span className="flex items-center gap-2 text-zinc-700">
                        <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
                        GA4 + GTM Eventos de Contacto
                      </span>
                      <span className="text-[10px] text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded">CONFIGURADO</span>
                    </div>
                  </div>

               </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 2: PROPUESTA DE VALOR (TU SITIO DEBE TRABAJAR...)    */}
        {/* ========================================================= */}
        <section className="py-24 bg-white border-y border-zinc-200/80 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 mb-3 block">
                Estrategia Comercial Integrada
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-zinc-950 font-heading">
                Tu sitio web debe trabajar <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600">
                  para tu empresa
                </span>
              </h2>
              <p className="text-zinc-600 text-base sm:text-lg font-light mt-4 leading-relaxed">
                Un sitio corporativo moderno no es un folleto digital pasivo. Debe cumplir múltiples funciones estratégicas de forma simultánea y medible.
              </p>
            </div>

            {/* Funnel de 6 etapas interactivas */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { step: "01", title: "Posicionar", desc: "Aparecer en búsquedas de alto valor comercial.", icon: Search, color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200" },
                { step: "02", title: "Generar Confianza", desc: "Diseño UX/UI que transmite solidez corporativa.", icon: ShieldCheck, color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-200" },
                { step: "03", title: "Captar Tráfico", desc: "Atraer prospectos con intención de compra.", icon: Globe, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" },
                { step: "04", title: "Generar Contactos", desc: "Formularios de bajo roce y WhatsApp directo.", icon: MessageSquare, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
                { step: "05", title: "Medir Resultados", desc: "Trazabilidad de cada canal en GA4 y GTM.", icon: BarChart3, color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200" },
                { step: "06", title: "Convertir", desc: "Transformar visitas en reuniones y ventas reales.", icon: Target, color: "text-pink-600", bg: "bg-pink-50", border: "border-pink-200" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx} 
                    className={`p-6 rounded-3xl bg-white border ${item.border} flex flex-col justify-between shadow-xs hover:shadow-md transition-all group`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-black text-zinc-400">{item.step}</span>
                        <div className={`w-8 h-8 ${item.bg} ${item.color} rounded-xl flex items-center justify-center`}>
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                      <h4 className="text-base font-black uppercase text-zinc-950 mb-2 font-heading group-hover:text-purple-700 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-zinc-500 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 3: QUÉ INCLUYE EL DESARROLLO (6 MÓDULOS)             */}
        {/* ========================================================= */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple-100 text-purple-900 rounded-full font-mono font-bold text-xs uppercase mb-4 border border-purple-200">
              <Cpu className="w-4 h-4 text-purple-700" />
              <span>Ingeniería Web Completa & Sin Fricciones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tighter text-zinc-950 font-heading">
              Qué incluye el <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600">Desarrollo Web</span>
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg font-light mt-4 leading-relaxed">
              Una solución integral que cubre cada arista del ciclo de vida digital: desde la arquitectura inicial hasta la analítica post-publicación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. Estrategia y arquitectura */}
            <div className="bg-white border border-zinc-200 p-8 rounded-3xl hover:border-purple-500 transition-all flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-12 h-12 bg-purple-50 text-purple-700 rounded-2xl flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black uppercase text-zinc-950 mb-3 font-heading">
                  1. Estrategia y Arquitectura
                </h3>
                <p className="text-xs text-zinc-600 font-light leading-relaxed mb-6">
                  Análisis inicial profundo del mercado, arquitectura de contenidos, definición de objetivos comerciales y estructura de navegación orientada a la conversión.
                </p>
                <ul className="space-y-2 text-xs font-mono text-zinc-700 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Análisis inicial & requerimientos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Arquitectura de contenidos y URLs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Estrategia de flujo comercial</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Diseño UX/UI */}
            <div className="bg-white border border-zinc-200 p-8 rounded-3xl hover:border-indigo-500 transition-all flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-12 h-12 bg-indigo-50 text-indigo-700 rounded-2xl flex items-center justify-center mb-6">
                  <LayoutGrid className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black uppercase text-zinc-950 mb-3 font-heading">
                  2. Diseño UX/UI Profesional
                </h3>
                <p className="text-xs text-zinc-600 font-light leading-relaxed mb-6">
                  Interfaces atractivas, modernas y fluidas pensadas en la experiencia de usuario. Diseño mobile-first con jerarquía visual impecable y botones claros.
                </p>
                <ul className="space-y-2 text-xs font-mono text-zinc-700 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Diseño a medida & Mobile-first</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Jerarquía tipográfica & Espaciados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Llamadas a la acción estratégicas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. Desarrollo */}
            <div className="bg-white border border-zinc-200 p-8 rounded-3xl hover:border-emerald-500 transition-all flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mb-6">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black uppercase text-zinc-950 mb-3 font-heading">
                  3. Desarrollo e Ingeniería
                </h3>
                <p className="text-xs text-zinc-600 font-light leading-relaxed mb-6">
                  Construcción modular de alto estándar con componentes limpios y reutilizables. Optimización extrema de rendimiento y buenas prácticas técnicas.
                </p>
                <ul className="space-y-2 text-xs font-mono text-zinc-700 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Arquitectura modular y escalable</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Código limpio y sin sobrecargas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Máxima velocidad de carga</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. SEO */}
            <div className="bg-white border border-zinc-200 p-8 rounded-3xl hover:border-blue-500 transition-all flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-6">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black uppercase text-zinc-950 mb-3 font-heading">
                  4. SEO Técnico
                </h3>
                <p className="text-xs text-zinc-600 font-light leading-relaxed mb-6">
                  Estructura semántica preparada para ser indexada y entendida por Google: jerarquía H1-H6, metadatos, sitemap XML, robots.txt y marcado Schema.
                </p>
                <ul className="space-y-2 text-xs font-mono text-zinc-700 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Estructura de URLs amigables</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Schema JSON-LD estructurado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Optimización Core Web Vitals</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 5. Conversión */}
            <div className="bg-white border border-zinc-200 p-8 rounded-3xl hover:border-pink-500 transition-all flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-12 h-12 bg-pink-50 text-pink-700 rounded-2xl flex items-center justify-center mb-6">
                  <MousePointerClick className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black uppercase text-zinc-950 mb-3 font-heading">
                  5. Optimización de Conversión (CRO)
                </h3>
                <p className="text-xs text-zinc-600 font-light leading-relaxed mb-6">
                  Formularios de contacto de bajo roce, conexión directa con WhatsApp, botones de llamada y llamadas a la acción ubicadas en puntos estratégicos.
                </p>
                <ul className="space-y-2 text-xs font-mono text-zinc-700 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                    <span>Formularios rápidos y seguros</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                    <span>WhatsApp contextual predefinido</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 shrink-0" />
                    <span>Reducción de fricción de contacto</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 6. Analítica */}
            <div className="bg-white border border-zinc-200 p-8 rounded-3xl hover:border-amber-500 transition-all flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-12 h-12 bg-amber-50 text-amber-700 rounded-2xl flex items-center justify-center mb-6">
                  <LineChart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black uppercase text-zinc-950 mb-3 font-heading">
                  6. Analítica y Medición
                </h3>
                <p className="text-xs text-zinc-600 font-light leading-relaxed mb-6">
                  Configuración completa de Google Analytics 4 y Google Tag Manager para medir eventos clave: envíos de formularios, clics a WhatsApp y llamadas.
                </p>
                <ul className="space-y-2 text-xs font-mono text-zinc-700 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Google Analytics 4 & GTM</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Tracking de formularios y WhatsApp</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Medición de conversiones comerciales</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 4: MODELOS DE NEGOCIO / TIPOS DE PROYECTOS           */}
        {/* ========================================================= */}
        <section className="py-24 bg-white border-y border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 mb-3 block">
                Flexibilidad y Escalabilidad
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-zinc-950 font-heading">
                Una solución adaptable a <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600">
                  distintos modelos de negocio
                </span>
              </h2>
              <p className="text-zinc-600 text-base sm:text-lg font-light mt-4 leading-relaxed">
                Desarrollamos plataformas preparadas para responder a las exigencias operativas y comerciales de diversos sectores.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { title: "Empresas de Servicios", desc: "Captación de leads y cotizaciones B2B/B2C." },
                { title: "Empresas Industriales", desc: "Catálogos técnicos, fichas y solicitudes corporativas." },
                { title: "Servicios Profesionales", desc: "Abogados, consultores, ingeniería y finanzas." },
                { title: "Clínicas y Centros de Salud", desc: "Especialidades, profesionales y contacto directo." },
                { title: "Empresas Inmobiliarias", desc: "Proyectos, cotizadores y captación de inversionistas." },
                { title: "Constructoras", desc: "Portafolio de obras, licitaciones y experiencia técnica." },
                { title: "Empresas con Sucursales", desc: "SEO Local, mapas y páginas por ubicación." },
                { title: "Organizaciones B2B", desc: "Generación continua de reuniones comerciales." },
                { title: "Marcas B2C con Tienda Física", desc: "Direccionamiento de tráfico hacia locales." },
                { title: "Instituciones y Fundaciones", desc: "Transparencia, memoria y captación de fondos." },
                { title: "Empresas Regionales", desc: "Liderazgo de búsqueda en su zona geográfica." },
                { title: "Cobertura Nacional", desc: "Arquitecturas escalables para todo Chile." },
              ].map((item, idx) => (
                <div key={idx} className="p-5 bg-zinc-50 border border-zinc-200/80 rounded-2xl flex flex-col justify-between hover:border-purple-300 transition-colors">
                  <div>
                    <h4 className="text-sm font-black uppercase text-zinc-950 mb-1 font-heading">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-500 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 5: PROCESO DE TRABAJO EN 8 FASES                     */}
        {/* ========================================================= */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple-100 text-purple-900 rounded-full font-mono font-bold text-xs uppercase mb-4 border border-purple-200">
              <Rocket className="w-4 h-4 text-purple-700" />
              <span>Metodología de Desarrollo Ágil</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tighter text-zinc-950 font-heading">
              Proceso de Desarrollo <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600">Paso a Paso</span>
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg font-light mt-4 leading-relaxed">
              Un flujo de trabajo riguroso que garantiza entregas predecibles, calidad visual y excelencia técnica.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Descubrimiento", desc: "Análisis de la empresa, objetivos de negocio, audiencia y competencia en el mercado chileno.", icon: Search },
              { step: "02", title: "Arquitectura", desc: "Estructuración de mapa de sitio, jerarquía de información y definición de flujos de conversión.", icon: Compass },
              { step: "03", title: "UX/UI", desc: "Diseño visual personalizado en alta fidelidad respetando la identidad y lineamientos de marca.", icon: LayoutGrid },
              { step: "04", title: "Desarrollo", desc: "Programación en stack moderno con código limpio, arquitectura modular y alto rendimiento.", icon: Code2 },
              { step: "05", title: "SEO + CRO", desc: "Implementación de metadatos, marcado Schema, jerarquía H1-H6 y llamadas a la acción estratégicas.", icon: Target },
              { step: "06", title: "Analítica", desc: "Integración y validación de Google Analytics 4, Google Tag Manager y eventos de conversión.", icon: LineChart },
              { step: "07", title: "QA & Pruebas", desc: "Auditoría exhaustiva de Core Web Vitals, compatibilidad multidispositivo y seguridad SSL.", icon: ShieldCheck },
              { step: "08", title: "Publicación", desc: "Lanzamiento oficial en producción, configuración de Search Console y entrega de accesos.", icon: Rocket },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 rounded-3xl bg-white border border-zinc-200 flex flex-col justify-between shadow-xs hover:border-purple-400 hover:shadow-md transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black font-mono text-purple-600">{item.step}</span>
                      <div className="w-9 h-9 bg-purple-50 text-purple-700 rounded-xl flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h4 className="text-base font-black uppercase text-zinc-950 mb-2 font-heading">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-600 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 6: PLANES Y PRECIOS                                  */}
        {/* ========================================================= */}
        <section id="planes" className="py-24 bg-gradient-to-b from-white to-purple-50/50 border-t border-zinc-200/80 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-purple-700 mb-3 block">
                Inversión Transparente • Sin Letras Chicas
              </span>
              <h2 className="text-4xl lg:text-6xl font-black mb-4 uppercase tracking-tighter text-zinc-950 font-heading">
                Elige el nivel de desarrollo que <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-900">
                  necesita tu empresa
                </span>
              </h2>
              <p className="text-lg text-zinc-600 font-light max-w-2xl mx-auto">
                Dos alternativas diseñadas para responder con precisión al momento y ambición comercial de tu negocio.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
              
              {/* PLAN 1: PROFESIONAL */}
              <div className="bg-white text-zinc-950 border border-zinc-200 rounded-[3rem] p-8 lg:p-12 flex flex-col justify-between shadow-lg hover:border-purple-300 transition-all duration-300">
                <div>
                  <div className="mb-6">
                    <span className="px-3.5 py-1 text-[11px] font-mono font-bold rounded-full uppercase tracking-wider bg-purple-50 border border-purple-200 text-purple-900">
                      Presencia Corporativa Sólida
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-black uppercase mb-3 font-heading">
                    Web Corporativa Profesional
                  </h3>
                  
                  <p className="text-xs font-light text-zinc-600 mb-8 leading-relaxed min-h-[44px]">
                    Una plataforma web profesional para empresas que necesitan renovar o construir una presencia digital sólida, moderna y preparada para posicionamiento orgánico.
                  </p>

                  <div className="mb-8 p-6 rounded-2xl bg-zinc-50 border border-zinc-200/90">
                    <span className="text-xs text-zinc-400 font-mono block mb-1 uppercase font-bold">Inversión del Proyecto</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl lg:text-5xl font-black text-zinc-950 font-heading">$1.100.000</span>
                      <span className="text-xs text-zinc-500 font-bold uppercase">+ IVA</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-10 text-xs text-zinc-700">
                    {[
                      "Diseño UX/UI personalizado y responsive",
                      "Arquitectura profesional hasta 10 páginas o secciones",
                      "Formularios de contacto de bajo roce",
                      "Integración con WhatsApp directo",
                      "Integración con Google Maps cuando corresponda",
                      "SEO técnico inicial (Metadata, Sitemap XML, Robots.txt)",
                      "Optimización de imágenes y rendimiento Core Web Vitals",
                      "Google Analytics 4 + Google Tag Manager configurados",
                      "Certificado de seguridad SSL + Integración redes sociales",
                      "Capacitación de administración y publicación oficial"
                    ].map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <LeadButton 
                  service="Web Corporativa Profesional"
                  className="w-full py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-widest text-center transition-all bg-zinc-950 hover:bg-zinc-800 text-white cursor-pointer shadow-md"
                >
                  Solicitar Plan Profesional
                </LeadButton>
              </div>

              {/* PLAN 2: PERFORMANCE (RECOMENDADO) */}
              <div className="bg-zinc-950 text-white border-2 border-purple-500 rounded-[3rem] p-8 lg:p-12 flex flex-col justify-between relative shadow-2xl scale-[1.02] transition-all duration-300">
                
                {/* Badge Recomendado */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[10px] font-mono font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                  RECOMENDADO
                </div>

                <div>
                  <div className="mb-6">
                    <span className="px-3.5 py-1 text-[11px] font-mono font-bold rounded-full uppercase tracking-wider bg-zinc-900 border border-zinc-800 text-purple-300">
                      Posicionamiento, Captación & CRO
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-black uppercase mb-3 font-heading text-white">
                    Web Corporativa Performance
                  </h3>
                  
                  <p className="text-xs font-light text-zinc-400 mb-8 leading-relaxed min-h-[44px]">
                    Una plataforma web orientada a posicionamiento, captación y conversión, diseñada para empresas que necesitan utilizar su sitio como una herramienta comercial activa.
                  </p>

                  <div className="mb-8 p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                    <span className="text-xs text-zinc-400 font-mono block mb-1 uppercase font-bold">Inversión del Proyecto</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl lg:text-5xl font-black text-purple-400 font-heading">$1.450.000</span>
                      <span className="text-xs text-zinc-400 font-bold uppercase">+ IVA</span>
                    </div>
                  </div>

                  <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-300 mb-4">
                    Todo lo incluido en el Plan Profesional y además:
                  </p>

                  <ul className="space-y-3 mb-10 text-xs text-zinc-300">
                    {[
                      "Arquitectura SEO avanzada e investigación de oportunidades",
                      "Páginas específicas por servicio y ubicación (SEO Local)",
                      "Schema JSON-LD avanzado (LocalBusiness, FAQPage, Breadcrumb)",
                      "Optimización CRO y diseño avanzado de llamadas a la acción",
                      "WhatsApp contextual por servicio",
                      "Tracking avanzado y eventos personalizados en GA4 y GTM",
                      "Seguimiento granular de formularios, WhatsApp, llamadas y CTAs",
                      "Landing pages estratégicas de alta conversión",
                      "Localizador de sucursales si el proyecto lo requiere",
                      "Optimización avanzada Core Web Vitals (LCP < 2.5s)",
                      "Estrategia de interlinking y configuración Search Console",
                      "Preparación técnica para campañas Google Ads"
                    ].map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <LeadButton 
                  service="Web Corporativa Performance"
                  className="w-full py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-widest text-center transition-all bg-purple-600 hover:bg-purple-500 text-white cursor-pointer shadow-xl shadow-purple-600/30"
                >
                  Solicitar Plan Performance
                </LeadButton>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 7: TABLA COMPARATIVA RESPONSIVE                      */}
        {/* ========================================================= */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 mb-3 block">
              Comparativa Detallada
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-zinc-950 font-heading">
              Profesional vs <span className="text-[#7850FA]">Performance</span>
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg font-light mt-4 leading-relaxed">
              Compara el alcance técnico y comercial de cada propuesta para tomar la decisión correcta.
            </p>
          </div>

          <div className="bg-white border border-zinc-200 rounded-[3rem] p-6 lg:p-10 shadow-xl overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b border-zinc-200 text-xs font-mono uppercase text-zinc-500">
                  <th className="py-4 px-6">Característica o Capacidad</th>
                  <th className="py-4 px-6 text-zinc-900 font-bold bg-zinc-50 rounded-t-2xl text-center">
                    Profesional ($1.100.000)
                  </th>
                  <th className="py-4 px-6 text-purple-900 font-bold bg-purple-100/70 rounded-t-2xl text-center">
                    ⭐ Performance ($1.450.000)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-xs sm:text-sm">
                {comparisonFeatures.map((item, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-zinc-950">
                      <div>{item.name}</div>
                      {item.note && <span className="text-[11px] text-zinc-400 font-light block">{item.note}</span>}
                    </td>
                    <td className="py-4 px-6 text-center bg-zinc-50/40">
                      {typeof item.pro === 'boolean' ? (
                        item.pro ? (
                          <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                        ) : (
                          <Minus className="w-5 h-5 text-zinc-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-[11px] font-mono font-bold text-zinc-600">{item.pro}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center bg-purple-50/30">
                      {typeof item.perf === 'boolean' ? (
                        item.perf ? (
                          <Check className="w-5 h-5 text-purple-700 mx-auto" />
                        ) : (
                          <Minus className="w-5 h-5 text-zinc-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-[11px] font-mono font-bold text-purple-900">{item.perf}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 8: GOOGLE ADS COMO SERVICIO COMPLEMENTARIO           */}
        {/* ========================================================= */}
        <section className="py-20 bg-zinc-950 text-white rounded-[3.5rem] mx-4 relative overflow-hidden shadow-2xl">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 text-purple-200 rounded-full font-mono font-bold text-xs uppercase mb-4 border border-white/15">
                  <Flame className="w-4 h-4 text-purple-300" />
                  <span>Servicio Adicional Opcional</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white font-heading mb-4">
                  ¿Necesitas generar tráfico <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-200 to-emerald-300">
                    desde el primer día?
                  </span>
                </h2>

                <h3 className="text-xl sm:text-2xl font-black uppercase text-purple-300 font-heading mb-6">
                  Campaña de Tráfico con Google Ads
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                  Complementa el desarrollo web con una estrategia de tráfico pagado mediante Google Ads para atraer usuarios que están buscando activamente los productos o servicios de tu empresa.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs text-zinc-300">
                  {[
                    "Análisis inicial de palabras clave",
                    "Estructuración de campañas y grupos",
                    "Configuración de conversiones en GA4 y GTM",
                    "Creación de copys y extensiones",
                    "Configuración geográfica de anuncios",
                    "Optimización mensual y palabras clave negativas",
                    "Revisión de términos de búsqueda",
                    "Reporte mensual de rendimiento y ROI"
                  ].map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-xs text-zinc-400 mb-8 leading-relaxed">
                  <strong className="text-white block mb-1 uppercase font-mono">Nota de Transparencia Comercial:</strong>
                  La inversión destinada directamente a Google Ads se define de acuerdo con los objetivos, mercado y alcance de cada campaña, y se paga de forma independiente a la plataforma publicitaria.
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <LeadButton 
                    service="Campaña Google Ads"
                    className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-black rounded-2xl uppercase tracking-widest text-xs transition-all w-full sm:w-auto text-center cursor-pointer shadow-lg"
                  >
                    Agregar Google Ads
                  </LeadButton>
                  <WhatsAppButton className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold rounded-2xl uppercase tracking-widest text-xs transition-all w-full sm:w-auto text-center">
                    Consultar por WhatsApp
                  </WhatsAppButton>
                </div>

              </div>

              {/* Price card */}
              <div className="lg:col-span-5 bg-white/10 border border-white/15 rounded-[3rem] p-8 lg:p-10 backdrop-blur-md flex flex-col justify-between text-center">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-200 block mb-2">
                    Gestión Mensual Estratégica
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-white font-heading mb-2">
                    $350.000
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-300 block mb-6">
                    / mes (Honorarios de Gestión)
                  </span>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed mb-6">
                    Optimización permanente, pruebas A/B de anuncios, gestión de palabras clave negativas y reportes transparentes de conversión.
                  </p>
                </div>
                <div className="p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl text-xs font-mono font-bold text-emerald-300">
                  ⚡ Activación inmediata post-publicación del sitio web
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 9: COMBINACIONES COMERCIALES                         */}
        {/* ========================================================= */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 mb-3 block">
              Estructura de Contratación
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-zinc-950 font-heading">
              Combinaciones Comerciales Claras
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg font-light mt-4 leading-relaxed">
              El desarrollo web corresponde a un pago único por proyecto. Google Ads corresponde a un servicio mensual opcional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Combo 1 */}
            <div className="p-8 rounded-[2.5rem] bg-white border border-zinc-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase text-purple-700">Opción 01</span>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700">PAGO ÚNICO</span>
                </div>
                <h4 className="text-2xl font-black uppercase text-zinc-950 mb-2 font-heading">
                  Desarrollo Profesional
                </h4>
                <div className="text-3xl font-black text-zinc-950 font-heading mb-4">
                  $1.100.000 <span className="text-xs text-zinc-500 font-normal">+ IVA</span>
                </div>
                <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 text-xs text-zinc-700 mb-6">
                  <strong className="text-purple-900 block mb-1 font-bold">+ Opcional Google Ads:</strong>
                  $350.000 / mes para acelerar tráfico calificado desde el primer día.
                </div>
              </div>
              <LeadButton 
                service="Web Corporativa Profesional"
                className="w-full py-3.5 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl font-bold uppercase tracking-wider text-xs transition-all text-center cursor-pointer"
              >
                Cotizar Opción Profesional
              </LeadButton>
            </div>

            {/* Combo 2 */}
            <div className="p-8 rounded-[2.5rem] bg-gradient-to-b from-purple-50/70 to-white border-2 border-purple-400 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold uppercase text-purple-700">Opción 02 (Recomendada)</span>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-purple-600 text-white">RECOMENDADO</span>
                </div>
                <h4 className="text-2xl font-black uppercase text-zinc-950 mb-2 font-heading">
                  Desarrollo Performance
                </h4>
                <div className="text-3xl font-black text-purple-700 font-heading mb-4">
                  $1.450.000 <span className="text-xs text-zinc-500 font-normal">+ IVA</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-purple-200 text-xs text-zinc-700 mb-6 shadow-xs">
                  <strong className="text-purple-900 block mb-1 font-bold">+ Opcional Google Ads:</strong>
                  $350.000 / mes sincronizado con landing pages y tracking CRO avanzado.
                </div>
              </div>
              <LeadButton 
                service="Web Corporativa Performance"
                className="w-full py-3.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold uppercase tracking-wider text-xs transition-all text-center cursor-pointer shadow-md"
              >
                Cotizar Opción Performance
              </LeadButton>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 10: SEO + CRO ("NO BASTA CON TENER...")               */}
        {/* ========================================================= */}
        <section className="py-24 bg-white border-y border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 mb-3 block">
                Los 3 Pilares del Crecimiento Web
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-zinc-950 font-heading">
                No basta con tener una página bonita
              </h2>
              <p className="text-zinc-600 text-base sm:text-lg font-light mt-4 leading-relaxed">
                Un sitio corporativo rentable requiere la combinación coordinada de posicionamiento, psicología de conversión y medición.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              
              <div className="p-8 rounded-[2.5rem] bg-purple-50/50 border border-purple-200">
                <div className="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center mb-6 font-black text-sm">
                  SEO
                </div>
                <h3 className="text-xl font-black uppercase text-zinc-950 mb-3 font-heading">
                  1. Posicionamiento SEO
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-light">
                  Hacemos que Google pueda entender, indexar y posicionar correctamente cada página de tu empresa para búsquedas comerciales relevantes.
                </p>
              </div>

              <div className="p-8 rounded-[2.5rem] bg-indigo-50/50 border border-indigo-200">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mb-6 font-black text-sm">
                  CRO
                </div>
                <h3 className="text-xl font-black uppercase text-zinc-950 mb-3 font-heading">
                  2. Optimización CRO
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-light">
                  Diseñamos cada sección pensando en que el usuario avance de forma fluida e intuitiva hacia una acción comercial o contacto directo.
                </p>
              </div>

              <div className="p-8 rounded-[2.5rem] bg-emerald-50/50 border border-emerald-200">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 font-black text-sm">
                  GA4
                </div>
                <h3 className="text-xl font-black uppercase text-zinc-950 mb-3 font-heading">
                  3. Analítica Trazable
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-light">
                  Medimos el comportamiento exacto de los visitantes para saber qué canales generan oportunidades reales y optimizar continuamente.
                </p>
              </div>

            </div>

            {/* Representación visual de flujo */}
            <div className="p-6 sm:p-8 bg-zinc-950 text-white rounded-3xl flex flex-wrap items-center justify-between gap-4 text-center">
              {[
                "Tráfico",
                "Contenido",
                "Experiencia",
                "Llamadas a la Acción",
                "Contacto",
                "Conversión"
              ].map((step, idx, arr) => (
                <div key={idx} className="flex items-center gap-4 mx-auto sm:mx-0">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300">
                    {step}
                  </span>
                  {idx < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-zinc-600 hidden lg:block" />
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 11 & 12: SEO LOCAL Y MULTISUCURSAL (PLAN PERFORMANCE) */}
        {/* ========================================================= */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple-100 text-purple-900 rounded-full font-mono font-bold text-xs uppercase mb-4 border border-purple-200">
                <MapPin className="w-4 h-4 text-purple-700" />
                <span>Capacidad del Plan Performance</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-zinc-950 font-heading mb-6">
                SEO Local y Arquitectura <br />
                <span className="text-[#7850FA]">Multisucursal</span>
              </h2>

              <p className="text-zinc-600 text-sm sm:text-base font-light leading-relaxed mb-6">
                Cuando el modelo de negocio lo requiere, desarrollamos arquitecturas orientadas a búsquedas geográficas y directorios corporativos para empresas con presencia física o cobertura regional.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  "Directorio de sucursales con mapa interactivo y buscador",
                  "Página individual por sucursal con dirección, horarios y teléfonos",
                  "Integración con Google Maps y Schema LocalBusiness estructurado",
                  "Estructura jerárquica: Servicio → Región → Ciudad → Comuna",
                  "Tracking independiente de contactos por cada sucursal"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 font-mono">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-zinc-400 font-mono italic">
                * Funcionalidades sujetas al alcance y objetivos específicos de cada proyecto.
              </p>
            </div>

            {/* Mockup visual geolocalizado */}
            <div className="p-8 rounded-[3rem] bg-white border border-zinc-200 shadow-xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-100">
                <span className="text-xs font-mono font-bold uppercase text-purple-900">
                  Jerarquía de Búsqueda Local
                </span>
                <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                  Schema Validado
                </span>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-3 bg-purple-50 rounded-xl border border-purple-200 flex items-center justify-between">
                  <span className="text-purple-900 font-bold">1. Servicio Comercial</span>
                  <span className="text-zinc-500 text-[10px]">Ej: Laboratorio Clínico</span>
                </div>
                <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-200 flex items-center justify-between ml-4">
                  <span className="text-indigo-900 font-bold">↳ 2. Región</span>
                  <span className="text-zinc-500 text-[10px]">Región Metropolitana</span>
                </div>
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 flex items-center justify-between ml-8">
                  <span className="text-blue-900 font-bold">↳ 3. Ciudad / Comuna</span>
                  <span className="text-zinc-500 text-[10px]">Las Condes / Providencia</span>
                </div>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between ml-12">
                  <span className="text-emerald-900 font-bold">↳ 4. Sucursal & Maps</span>
                  <span className="text-emerald-700 text-[10px] font-bold">LocalBusiness Schema</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 13 & 14: TECNOLOGÍA REAL Y CORE WEB VITALS           */}
        {/* ========================================================= */}
        <section className="py-24 bg-zinc-950 text-white rounded-[3.5rem] mx-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-300 mb-3 block">
                Infraestructura Tecnológica
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white font-heading">
                Tecnología moderna para proyectos <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-emerald-300">
                  que necesitan crecer
                </span>
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg font-light mt-4 leading-relaxed">
                Utilizamos el stack técnico moderno de Webunica para garantizar máxima velocidad, seguridad corporativa y facilidad de administración.
              </p>
            </div>

            {/* Stack Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
              {[
                { name: "Next.js 16", desc: "App Router & SSR" },
                { name: "React 19", desc: "Arquitectura Modular" },
                { name: "TypeScript", desc: "Tipado Seguro" },
                { name: "Tailwind CSS", desc: "Diseño & Velocidad" },
                { name: "Vercel Edge", desc: "Despliegue Global" },
                { name: "Supabase", desc: "Base de Datos & Auth" },
              ].map((tech, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <strong className="text-sm font-black uppercase block text-white mb-1 font-heading">
                    {tech.name}
                  </strong>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {tech.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Core Web Vitals Targets */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-black font-mono text-emerald-400 mb-1">
                  LCP &lt; 2.5s
                </div>
                <span className="text-xs text-zinc-400 uppercase font-mono font-bold">Largest Contentful Paint</span>
              </div>
              <div>
                <div className="text-3xl font-black font-mono text-emerald-400 mb-1">
                  INP &lt; 200ms
                </div>
                <span className="text-xs text-zinc-400 uppercase font-mono font-bold">Interaction to Next Paint</span>
              </div>
              <div>
                <div className="text-3xl font-black font-mono text-emerald-400 mb-1">
                  CLS &lt; 0.1
                </div>
                <span className="text-xs text-zinc-400 uppercase font-mono font-bold">Cumulative Layout Shift</span>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 15: FAQ                                              */}
        {/* ========================================================= */}
        <div id="faq" className="mt-20">
          <FAQSection 
            faqs={corporateFaqs}
            title="Preguntas Frecuentes sobre Desarrollo Web Corporativo"
            description="Información clara sobre costos, diferencias de planes, SEO, multisucursales y Google Ads."
            ctaTitle="¿Listo para evaluar tu proyecto corporativo?"
            ctaDescription="Completa tus datos o escríbenos por WhatsApp para recibir una propuesta personalizada."
            ctaLabel="Solicitar Cotización Ahora"
          />
        </div>

        {/* ========================================================= */}
        {/* ZONA 16: CTA FINAL DE ALTO IMPACTO                        */}
        {/* ========================================================= */}
        <section className="py-32 text-center px-6 bg-white border-t border-zinc-200/80">
           <div className="max-w-4xl mx-auto">
             <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-700 mb-4 block">
               Inicia tu Proyecto Digital
             </span>
             <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8 tracking-tighter uppercase leading-[0.9] text-zinc-950 font-heading">
                Convierte tu sitio web en una <br />
                <span className="text-[#7850FA]">
                  herramienta comercial
                </span>
             </h2>
             <p className="text-zinc-600 text-lg sm:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Construimos plataformas digitales preparadas para posicionar tu empresa, generar confianza, captar oportunidades y medir resultados.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
               <LeadButton 
                 service="Web Corporativa Performance"
                 className="px-12 py-6 bg-purple-600 hover:bg-purple-700 text-white font-black rounded-full transition-all shadow-2xl shadow-purple-600/30 uppercase tracking-[0.2em] text-xs cursor-pointer w-full sm:w-auto"
               >
                  Solicitar cotización
               </LeadButton>
               <WhatsAppButton className="px-10 py-6 bg-[#25d366] hover:bg-emerald-600 text-white font-black rounded-full transition-all shadow-xl uppercase tracking-[0.2em] text-xs cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2">
                  Hablar con Webunica
               </WhatsAppButton>
             </div>
             <p className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
               Proyectos desde <strong className="text-zinc-950">$1.100.000 + IVA</strong>
             </p>
           </div>
        </section>

      </div>
    </main>
  );
}
