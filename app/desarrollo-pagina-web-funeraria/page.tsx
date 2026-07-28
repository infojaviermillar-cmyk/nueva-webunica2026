import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import { Metadata } from 'next';
import { 
  Heart, 
  MapPin, 
  Search, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Flame,
  Cpu,
  Sparkles,
  Smartphone,
  BookOpen,
  Calendar,
  Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Diseño y Desarrollo de Páginas Web para Funerarias Chile | Obituarios Digitales',
  description: 'Desarrollamos sitios web y portales para funerarias en Chile. Incluye obituarios digitales interactivos, libro de condolencias, velas virtuales, cotizador de planes y SEO local 24/7.',
  keywords: [
    'diseño pagina funeraria chile',
    'desarrollo pagina funeraria',
    'obituarios digitales chile',
    'sitios web para funerarias',
    'marketing para funerarias',
    'libro de condolencias digital',
    'velas virtuales funeraria',
    'cotizador de servicios funerarios',
    'seo local funerarias chile',
    'posicionamiento web funerarias'
  ].join(', '),
  alternates: {
    canonical: 'https://webunica.cl/desarrollo-pagina-web-funeraria',
  },
  openGraph: {
    title: 'Páginas Web para Funerarias & Obituarios Digitales | Webunica Chile',
    description: 'Portales funerarios profesionales con obituarios digitales, libro de condolencias, cotizador de planes de previsión y captación SEO local 24/7 en Chile.',
    url: 'https://webunica.cl/desarrollo-pagina-web-funeraria',
    siteName: 'Webunica',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: 'https://webunica.cl/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Diseño Web Profesional para Funerarias en Chile - Webunica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diseño Web para Funerarias & Obituarios Digitales en Chile',
    description: 'Sistemas digitales integrados para funerarias y parques cementerios. Obituarios interactivos y SEO local 24/7.',
    images: ['https://webunica.cl/og-image.jpg'],
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

export default function FuneralPage() {
  const funeralFaqs = [
    {
      question: "¿Por qué es crucial el posicionamiento SEO local para una funeraria en Chile?",
      answer: "Cuando una familia enfrenta la pérdida de un ser querido, la primera acción es buscar en Google 'funeraria cerca de mí' o 'funeraria en [mi comuna/ciudad]'. Nuestra arquitectura SEO local garantiza que tu empresa aparezca destacada en Google Maps y en los primeros resultados orgánicos justo en el momento de mayor necesidad."
    },
    {
      question: "¿Cómo funcionan los obituarios digitales y el libro de condolencias?",
      answer: "Es un espacio de homenaje eterno en tu propio dominio. Permite publicar la ficha del fallecido, lugar de velatorio y misa con mapa dinámico, recibir mensajes de pésame moderados, encender velas virtuales y compartir el homenaje vía WhatsApp con familiares y amigos."
    },
    {
      question: "¿Puedo ofrecer cotización de planes de previsión a futuro y de urgencia?",
      answer: "Sí. Diseñamos un cotizador en línea transparente que permite a los usuarios revisar y cotizar planes de necesidad inmediata (básico, tradicional, cremación) o planes de previsión a futuro con simulación de cuotas mensuales."
    },
    {
      question: "¿Cómo llegan las consultas urgentes de las familias las 24 horas?",
      answer: "Todas las solicitudes de atención inmediata se envían directamente al WhatsApp corporativo de turno de tu funeraria con un mensaje estructurado y rutean por correo electrónico al equipo de guardia."
    },
    {
      question: "¿La página web es 100% de propiedad de la funeraria?",
      answer: "Absolutamente. La plataforma se entrega instalada en tu propio dominio corporativo sin comisiones por servicio ni cobros mensuales por cantidad de obituarios o condolencias publicadas."
    },
    {
      question: "¿Se puede integrar ubicación de salas de velatorio con Google Maps y Waze?",
      answer: "De forma nativa. Cada obituario incluye un mapa dinámico e interactivo optimizado para móviles, permitiendo a los acompañantes abrir la ruta directa en Waze o Google Maps con un solo toque."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://webunica.cl/desarrollo-pagina-web-funeraria/#service",
        "name": "Diseño y Desarrollo de Páginas Web para Funerarias en Chile",
        "serviceType": "Funeral Home Web Development & Digital Obituaries",
        "description": "Portales web especializados para funerarias en Chile. Incluye obituarios digitales interactivos, velas virtuales, cotizador de servicios y SEO local 24/7.",
        "provider": {
          "@type": "LocalBusiness",
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
        "@id": "https://webunica.cl/desarrollo-pagina-web-funeraria/#faq",
        "mainEntity": funeralFaqs.map((faq) => ({
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
      name: "Plan Esencial",
      price: "$580.000",
      original: "$650.000",
      highlight: "Presencia & Dignidad Digital",
      desc: "Ideal para funerarias locales que buscan una imagen sobria, respetuosa y presencia en Google Maps.",
      features: [
        "Diseño Web Sobrio, Elegante & Responsive",
        "Sección de Servicios, Catálogo de Urnas & Previsión",
        "Módulo de Obituarios Digitales Básicos",
        "Botón de WhatsApp de Atención 24/7",
        "Integración con Google Maps para Velatorios",
        "SEO Local Inicial en Google Maps",
        "Dominio .cl y Hosting de Alta Velocidad (1 año)",
        "Soporte técnico por 3 meses"
      ]
    },
    {
      name: "Plan Profesional",
      price: "$780.000",
      original: "$880.000",
      highlight: "Obituarios Interáctivos & Condolencias",
      desc: "Plataforma completa con libro de condolencias moderado, velas virtuales y cotizador de planes.",
      features: [
        "Todo lo del Plan Esencial +",
        "Libro de Condolencias Moderado en Tiempo Real",
        "Sistema de Velas Virtuales e In Memoriam",
        "Galería de Homenaje y Fotos Conmemorativas",
        "Cotizador en Línea de Planes Funerarios",
        "Blog de Apoyo al Duelo & Orientación Legal",
        "Optimización de Carga Ultra-rápida en Móviles",
        "Capacitación de uso para administración de obituarios"
      ],
      recommended: true
    },
    {
      name: "Plan Elite / Funnel 24/7",
      price: "$1.600.000",
      original: "$1.850.000",
      highlight: "Motor Comercial & SEO Local Avanzado",
      desc: "Potente ecosistema digital diseñado para captación en momentos críticos y posicionamiento dominador en tu comuna.",
      features: [
        "Plataforma Web 100% a medida con Next.js & Supabase",
        "SEO Local Dominante en múltiples comunas/regiones",
        "Integración con Asistente de IA para redacción de homenajes",
        "Cotizador Dinámico de Previsión a Futuro con Simulación",
        "Sistema de Notificación Inmediata por WhatsApp & SMS 24/7",
        "Obituario Digital Interactivo Premium de Alta Gama",
        "Pauta Google Ads estructurada para atención inmediata",
        "Garantía extendida y soporte técnico VIP por 6 meses"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans antialiased overflow-x-hidden selection:bg-amber-400 selection:text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-[20vh] lg:pt-40 pb-20">
        
        {/* ZONA 1: HERO LUJO LUXURY GOLD & DARK */}
        <section className="relative px-6 py-12 lg:py-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-amber-500/10 blur-[170px] rounded-full pointer-events-none -z-10" />
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 text-zinc-950 rounded-full shadow-lg font-black text-[11px] uppercase tracking-wider">
                  <Flame className="w-4 h-4 fill-zinc-950" />
                  <span>Tecnología y Dignidad Digital</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-300 text-[11px] font-mono">
                  <Heart className="w-3.5 h-3.5 text-amber-400" />
                  <span>Portales Funerarios Pro</span>
                </div>
              </div>
              
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[72px] font-black tracking-tighter leading-[0.92] mb-8 uppercase font-heading text-white">
                Plataformas Web <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
                  Para Funerarias en Chile
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Diseñamos portales digitales de alta ingeniería para funerarias, parques cementerios y servicios de previsión: <strong className="text-white font-bold">Obituarios digitales interactivos</strong>, libro de condolencias, velas virtuales, localización de velatorios y captación SEO local 24/7.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto lg:mx-0 mb-10 text-left">
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <Heart className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">Obituarios 2.0</span>
                </div>
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <Flame className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">Velas Virtuales</span>
                </div>
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <Search className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-200">SEO Local 24/7</span>
                </div>
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">100% Propia</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                 <LeadButton className="px-10 py-5 bg-amber-400 hover:bg-yellow-400 text-zinc-950 font-black rounded-2xl transition-all shadow-xl shadow-amber-400/10 uppercase tracking-widest text-xs w-full sm:w-auto text-center cursor-pointer">
                    Cotizar Portal Funerario <ArrowRight className="inline w-4 h-4 ml-2" />
                 </LeadButton>
                 <a 
                   href="#pilares" 
                   className="px-8 py-5 border border-zinc-800 text-zinc-300 font-bold rounded-2xl hover:bg-zinc-900 hover:text-white transition-all uppercase tracking-widest text-xs text-center w-full sm:w-auto"
                 >
                    Ver Funcionalidades
                 </a>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative group">
               <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/20 to-yellow-500/10 rounded-[3.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               <div className="relative bg-zinc-900 border border-zinc-800 rounded-[3rem] p-6 shadow-2xl overflow-hidden">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-zinc-400 bg-zinc-950 px-3 py-1 rounded-full border border-zinc-800">
                      obituarios.cl / tu-funeraria.cl
                    </span>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 p-5 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-black text-zinc-950 bg-amber-400 px-2.5 py-1 rounded-md uppercase">
                        HOMENAJE EN MEMORIA
                      </span>
                      <span className="text-[10px] font-mono font-bold text-amber-300 bg-amber-950/80 border border-amber-800 px-2 py-0.5 rounded flex items-center gap-1">
                        <Flame className="w-3 h-3 fill-amber-400" /> 142 Velas
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-white uppercase mb-1 font-heading">
                      Don Roberto Silva Morales
                    </h4>
                    <p className="text-xs text-zinc-400 mb-4 font-light italic">
                      1945 - 2026 • Descansa en Paz
                    </p>

                    <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 mb-4 text-xs text-zinc-300">
                      <div className="flex items-center gap-2 mb-1 text-amber-400 font-bold">
                        <MapPin className="w-3.5 h-3.5" /> Velatorio & Capilla:
                      </div>
                      <p className="font-light text-[11px] text-zinc-400">
                        Capilla San Pedro • Av. Vicuña Mackenna 1200, Santiago
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-zinc-300">
                      <div className="bg-zinc-900 p-2 rounded-lg border border-zinc-800 text-center">
                        <span className="text-zinc-500 block">Condolencias:</span>
                        <strong className="text-white text-xs">38 Mensajes</strong>
                      </div>
                      <div className="bg-zinc-900 p-2 rounded-lg border border-zinc-800 text-center">
                        <span className="text-zinc-500 block">Atención:</span>
                        <strong className="text-emerald-400 text-xs">Disponible 24/7</strong>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between p-2.5 bg-zinc-950/60 rounded-xl border border-zinc-800">
                      <span className="flex items-center gap-2 text-zinc-300">
                        <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                        WhatsApp 24 Horas Directo
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded">ACTIVO 24/7</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-zinc-950/60 rounded-xl border border-zinc-800">
                      <span className="flex items-center gap-2 text-zinc-300">
                        <Search className="w-3.5 h-3.5 text-emerald-400" />
                        SEO Local Google Maps
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded">INDEXADO</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* ZONA 2: LOS 5 PILARES DE LA PLATAFORMA FUNERARIA */}
        <section id="pilares" className="py-24 bg-white text-zinc-950 rounded-[3.5rem] mx-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-100 text-zinc-950 rounded-full font-mono font-bold text-xs uppercase mb-4">
                <Cpu className="w-4 h-4 text-amber-800" />
                <span>Ingeniería Digital & Respeto Institucional</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tighter text-zinc-950 font-heading">
                5 Pilares que Elevan tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600">Funeraria</span>
              </h2>
            </div>

            {/* PILAR 1: OBITUARIOS DIGITALES & VELAS VIRTUALES */}
            <div className="mb-20 bg-zinc-50 border border-zinc-200/80 rounded-[3rem] p-8 lg:p-14 shadow-sm relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-200/80">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center text-zinc-950 shadow-md">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-widest">Pilar 01</span>
                    <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                      1. Obituarios Digitales & Homenajes
                    </h3>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { t: "Obituario Interactivo", d: "Ficha tributo con fotografía, fecha de nacimiento/defunción y reseña conmemorativa." },
                  { t: "Encendido de Velas Virtuales", d: "Módulo donde familiares pueden encender una vela simétrica virtual." },
                  { t: "Libro de Pésame Moderado", d: "Muro de mensajes de apoyo con filtro de moderación previo." },
                  { t: "Difusión en Redes & WhatsApp", d: "Botón para compartir la ficha técnica del funeral por WhatsApp." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs hover:border-amber-400 transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 bg-amber-50 text-amber-800 rounded-xl flex items-center justify-center font-mono font-bold text-xs mb-4">0{idx + 1}</div>
                      <h4 className="text-base font-black uppercase text-zinc-950 mb-2 font-heading">{item.t}</h4>
                      <p className="text-xs text-zinc-600 font-normal leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PILAR 2: SEO LOCAL 24/7 & GOOGLE MAPS */}
            <div className="mb-20 bg-zinc-950 text-white rounded-[3rem] p-8 lg:p-14 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-800 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center text-zinc-950 shadow-md">
                    <Search className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">Pilar 02</span>
                    <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-white font-heading">
                      2. SEO Local Oportuno & Geolocalización
                    </h3>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-amber-400/50 transition-all">
                  <div className="w-12 h-12 bg-amber-400/20 text-amber-400 rounded-2xl flex items-center justify-center mb-6"><Search className="w-6 h-6" /></div>
                  <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">Posicionamiento 'Cerca de Mí'</h4>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">Optimización por comuna para aparecer en búsquedas urgentes.</p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-all">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6"><MapPin className="w-6 h-6" /></div>
                  <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">Ubicación con Waze & Maps</h4>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">Mapeo directo permitiendo la navegación GPS a los asistentes.</p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-blue-500/50 transition-all">
                  <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6"><Smartphone className="w-4 h-4" /></div>
                  <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">Velocidad Móvil</h4>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">Carga instantánea en smartphones para usuarios en momentos críticos.</p>
                </div>
              </div>
            </div>

            {/* PILAR 3: COTIZADOR DE PLANES */}
            <div className="mb-20 bg-amber-950/20 border border-amber-200/80 rounded-[3rem] p-8 lg:p-14 shadow-sm relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-amber-200/80">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-500 text-zinc-950 rounded-2xl flex items-center justify-center shadow-md"><BookOpen className="w-6 h-6" /></div>
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-widest">Pilar 03</span>
                    <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-zinc-950 font-heading">3. Cotizador de Planes & Previsión</h3>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-amber-100 shadow-sm flex items-start gap-5">
                  <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 shrink-0"><Sparkles className="w-6 h-6" /></div>
                  <div>
                    <h4 className="text-xl font-black uppercase text-zinc-950 mb-2 font-heading">Catálogo Transparente</h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">Muestra de servicios sin costos ocultos.</p>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-amber-100 shadow-sm flex items-start gap-5">
                  <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 shrink-0"><Calendar className="w-6 h-6" /></div>
                  <div>
                    <h4 className="text-xl font-black uppercase text-zinc-950 mb-2 font-heading">Previsión a Futuro</h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">Cotización de planes con facilidades de pago.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-[3rem] p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6"><Clock className="w-5 h-5 text-amber-600" /><h3 className="text-2xl font-black uppercase">4. Atención 24/7</h3></div>
                <ul className="space-y-4">
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60"><strong className="text-xs block uppercase">WhatsApp Directo</strong><p className="text-xs">Coordinación de traslados inmediata.</p></li>
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60"><strong className="text-xs block uppercase">CRM de Condolencias</strong><p className="text-xs">Moderación de mensajes previa publicación.</p></li>
                </ul>
              </div>
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-[3rem] p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6"><Zap className="w-5 h-5 text-amber-600" /><h3 className="text-2xl font-black uppercase">5. Infraestructura</h3></div>
                <ul className="space-y-4">
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60"><strong className="text-xs block uppercase">Next.js + Supabase</strong><p className="text-xs">Velocidad extrema y seguridad de datos.</p></li>
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60"><strong className="text-xs block uppercase">100% Marca Blanca</strong><p className="text-xs">Dominio propio sin mensualidades de uso.</p></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ZONA 3: PLANES */}
        <section id="planes" className="py-24 max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-7xl font-black mb-4 uppercase tracking-tighter text-white font-heading">
              Planes de <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">Desarrollo</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, idx) => (
              <div key={idx} className={`rounded-[3rem] p-8 lg:p-10 flex flex-col justify-between ${plan.recommended ? 'bg-zinc-900 border-2 border-amber-400' : 'bg-zinc-900/70 border border-zinc-800'}`}>
                <h3 className="text-2xl font-black text-white uppercase mb-4 font-heading">{plan.name}</h3>
                <div className="mb-8 p-6 bg-zinc-950 border border-zinc-800 rounded-2xl">
                  <div className="text-4xl font-black text-amber-400">{plan.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />{feat}
                    </li>
                  ))}
                </ul>
                <LeadButton className="w-full py-4 rounded-2xl font-black text-xs uppercase bg-amber-400 hover:bg-yellow-400 text-zinc-950">Cotizar {plan.name}</LeadButton>
              </div>
            ))}
          </div>
        </section>

        {/* ZONA 4: FAQ */}
        <div id="faq" className="rounded-[4rem] bg-white text-zinc-950 mx-4 overflow-hidden mt-20">
          <FAQSection 
            faqs={funeralFaqs}
            title="Dudas sobre Plataformas para Funerarias"
            description="Todo lo que necesitas saber sobre obituarios digitales y SEO local."
            ctaTitle="¿Listo para modernizar la atención?"
            ctaDescription="Obtén una asesoría técnica y propuesta a medida."
            ctaLabel="Solicitar Asesoría"
          />
        </div>

        {/* ZONA 5: CTA FINAL */}
        <section className="py-32 text-center px-6">
           <h2 className="text-5xl lg:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.85] text-white font-heading">
              DIGNIFICA TU <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
                presencia en línea.
              </span>
           </h2>
           <LeadButton className="px-16 py-7 bg-amber-400 text-zinc-950 font-black rounded-full hover:bg-yellow-400 transition-all uppercase tracking-[0.2em] text-xs">
              Configurar Portal de Funeraria
           </LeadButton>
        </section>
      </div>
    </main>
  );
}
