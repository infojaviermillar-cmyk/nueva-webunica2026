import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import { Metadata } from 'next';
import { 
  Zap, 
  Code, 
  ShieldCheck, 
  Cpu, 
  Server, 
  Globe, 
  Database, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Bot, 
  DollarSign, 
  Layers, 
  Lock, 
  Activity, 
  Terminal, 
  Smartphone, 
  Users, 
  BarChart3 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Desarrollo Web Next.js 16 & SaaS a Medida en Chile | Software Escalable',
  description: 'Desarrollamos aplicaciones web SaaS, software a medida y plataformas digitales escalables en Chile con Next.js 16, Supabase PostgreSQL y Vercel Serverless.',
  keywords: [
    'desarrollo nextjs chile',
    'creacion saas chile',
    'desarrollo software a medida chile',
    'programacion nextjs 16 santiago',
    'plataformas web escalables supabase',
    'desarrollo fullstack typescript',
    'arquitectura serverless vercel chile',
    'desarrollo proptech fintech chile',
    'agencia desarrollo software chile'
  ].join(', '),
  alternates: {
    canonical: 'https://webunica.cl/desarrollo-web-nextjs-saas-custom',
  },
  openGraph: {
    title: 'Desarrollo Web Next.js 16 & SaaS a Medida en Chile | Webunica',
    description: 'Transforma tu lógica de negocio en una plataforma digital imparable. Renderizado híbrido SSR/ISR, base de datos Supabase y despliegue serverless de alta velocidad.',
    url: 'https://webunica.cl/desarrollo-web-nextjs-saas-custom',
    siteName: 'Webunica',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: 'https://webunica.cl/saas_hero_new.png',
        width: 1200,
        height: 630,
        alt: 'Desarrollo Web Next.js 16 y SaaS a Medida en Chile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desarrollo Web Next.js 16 & SaaS a Medida en Chile',
    description: 'Llevamos tu software al siguiente nivel con arquitectura moderna Next.js, Supabase y Vercel Edge.',
    images: ['https://webunica.cl/saas_hero_new.png'],
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

export default function SaaSPage() {
  const saasFaqs = [
    {
      question: "¿Por qué Next.js 16 es el estándar de ingeniería para un SaaS en 2026?",
      answer: "Next.js 16 ofrece renderizado híbrido (SSR, ISR y React Server Components), lo que garantiza tiempos de carga inferiores a 100ms y una indexación perfecta en Google. Para un producto SaaS, esto significa mejor rendimiento SEO, menor costo de infraestructura y una experiencia de usuario extremadamente fluida."
    },
    {
      question: "¿Qué nivel de seguridad ofrece la arquitectura Supabase PostgreSQL?",
      answer: "Utilizamos Supabase con políticas estricta de seguridad a nivel de fila (Row Level Security - RLS) e infraestructura PostgreSQL encriptada. Esto asegura que la información de cada usuario o empresa esté aislada y protegida bajo estándares bancarios."
    },
    {
      question: "¿El software desarrollado será de propiedad exclusiva de mi empresa?",
      answer: "Sí, el 100% del código fuente, derechos de autor y propiedad intelectual te pertenecen desde el primer día. Al desarrollar software a medida con Webunica, no dependes de licenciamientos de terceros ni mensualidades cerradas."
    },
    {
      question: "¿Cómo se gestionan los pagos de suscripción en Chile e internacionalmente?",
      answer: "Integramos pasarelas locales como Webpay Plus, Mercado Pago o Flow para cobros en CLP, así como Stripe Billing para suscripciones recurrentes internacionales en USD, emitiendo boletas y facturas electrónicas automáticas."
    },
    {
      question: "¿Qué tiempo toma desarrollar un MVP (Producto Mínimo Viable) funcional?",
      answer: "Un MVP SaaS con autenticación, base de datos, panel de administración y pasarela de pagos suele completarse entre 4 y 6 semanas bajo nuestra metodología ágil de sprints continuos."
    },
    {
      question: "¿Incluyen servicios de despliegue en la nube y mantenimiento post-lanzamiento?",
      answer: "Sí. Configuramos la infraestructura en Vercel, Supabase Cloud y AWS, además de entregar soporte técnico post-lanzamiento, monitoreo de errores en tiempo real y garantía de rendimiento."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://webunica.cl/desarrollo-web-nextjs-saas-custom/#software",
        "name": "Plataforma SaaS & Software a Medida Next.js",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "Desarrollo de aplicaciones web SaaS de alto rendimiento, microservicios y plataformas a medida con Next.js 16 y Supabase.",
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
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://webunica.cl/desarrollo-web-nextjs-saas-custom/#faq",
        "mainEntity": saasFaqs.map((faq) => ({
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
      name: "MVP SaaS NEXT.JS",
      price: "$2.400.000",
      original: "$2.800.000",
      highlight: "Lanza tu producto al mercado rápido",
      desc: "Ideal para startups y empresas que necesitan validar un nuevo software o plataforma comercial.",
      features: [
        "Arquitectura Next.js 16 + React Server Components",
        "Base de datos PostgreSQL en Supabase Cloud",
        "Autenticación segura (Email, Google, GitHub OAuth)",
        "Panel de control de usuario y Dashboard intuitivo",
        "Integración de pasarela de pago (Stripe o Webpay)",
        "Despliegue automatizado CI/CD en Vercel Edge",
        "SEO Técnico Avanzado & Meta tags dinámicos",
        "Certificado SSL Cifrado y Dominio personalizado",
        "Garantía técnica y soporte por 1 mes"
      ],
      time: "Entrega: 4 a 6 semanas"
    },
    {
      name: "CUSTOM SaaS SUITE",
      price: "$4.800.000",
      original: "$5.500.000",
      highlight: "Escalabilidad y Lógica Compleja",
      desc: "Para plataformas multi-tenant, roles de usuario avanzados e integraciones API automatizadas.",
      features: [
        "Todo lo del Plan MVP, más:",
        "Gestión de roles de usuario (Admin, Manager, Cliente)",
        "Arquitectura Multi-tenant (Aislamiento de empresas)",
        "Panel de Analítica avanzado con gráficos interactivos",
        "Integración de Webhooks y APIs externas (Zapier/CRMs)",
        "Envío de correos transaccionales (Resend / Postmark)",
        "Diseño UI/UX a medida en Figma / Adobe XD",
        "Optimización de rendimiento Lighthouse 100/100",
        "Soporte técnico prioritario por 3 meses"
      ],
      recommended: true,
      time: "Entrega: 8 a 12 semanas"
    },
    {
      name: "SaaS ENTERPRISE",
      price: "Consultar",
      original: "Proyecto a Medida",
      highlight: "Ecosistemas Digitales de Gran Escala",
      desc: "Software de misión crítica para corporaciones con requisitos estrictos de seguridad y alta disponibilidad.",
      features: [
        "Desarrollo de Software de Misión Crítica",
        "Microservicios y Arquitectura Cloud Distribuida",
        "Seguridad nivel bancario con auditoría de código",
        "Integración con ERPs y Sistemas Legados",
        "SLA de disponibilidad garantizada 99.9%",
        "Capacitación presencial y documentación técnica completa",
        "Equipo de desarrollo dedicado a tiempo completo",
        "Plan de mantenimiento preferente y soporte 24/7"
      ],
      time: "Entrega: Según Alcance"
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans antialiased overflow-x-hidden selection:bg-cyan-400 selection:text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-[20vh] lg:pt-40 pb-20">
        
        {/* ========================================================= */}
        {/* ZONA 1: HERO FUTURISTA CYBERPUNK NEXT.JS 16 SAAS           */}
        {/* ========================================================= */}
        <section className="relative px-6 py-12 lg:py-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/10 blur-[170px] rounded-full pointer-events-none -z-10" />
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-7 text-center lg:text-left">
              
              {/* Badges Pill Row */}
              <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 text-zinc-950 rounded-full shadow-lg font-black text-[11px] uppercase tracking-wider">
                  <Terminal className="w-4 h-4 fill-zinc-950" />
                  <span>Next.js 16 + Supabase + Vercel</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-300 text-[11px] font-mono">
                  <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span>99.9% Uptime Serverless</span>
                </div>
              </div>
              
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[72px] font-black tracking-tighter leading-[0.92] mb-8 uppercase font-heading text-white">
                Desarrollo de Software & <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-emerald-400">
                  SaaS a Medida en Chile
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Transformamos ideas complejas en <strong className="text-white font-bold">plataformas web SaaS escalables</strong> de alto rendimiento. Arquitectura Next.js 16, velocidad de carga ultrarrápida (100/100 Lighthouse), seguridad PostgreSQL en Supabase y código 100% tuyo.
              </p>
              
              {/* Pitch Feature Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto lg:mx-0 mb-10 text-left">
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <Code className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-200">Next 16 RSC</span>
                </div>
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <Database className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">Supabase DB</span>
                </div>
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">Auth & RLS</span>
                </div>
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">Vercel Edge</span>
                </div>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                 <LeadButton className="px-10 py-5 bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-black rounded-2xl transition-all shadow-xl shadow-cyan-400/20 uppercase tracking-widest text-xs w-full sm:w-auto text-center cursor-pointer">
                    Agendar Consultoría Técnica <ArrowRight className="inline w-4 h-4 ml-2" />
                 </LeadButton>
                 <a 
                   href="#pilares" 
                   className="px-8 py-5 border border-zinc-800 text-zinc-300 font-bold rounded-2xl hover:bg-zinc-900 hover:text-white transition-all uppercase tracking-widest text-xs text-center w-full sm:w-auto"
                 >
                    Ver Modelo 5 Pilares
                 </a>
              </div>

            </div>
            
            {/* Right Interactive Developer Dashboard Mockup */}
            <div className="lg:col-span-5 relative group">
               <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-purple-500/10 rounded-[3.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               
               <div className="relative bg-zinc-900 border border-zinc-800 rounded-[3rem] p-6 shadow-2xl overflow-hidden">
                  
                  {/* Top Bar Simulated Dev Console */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
                      NEXT.JS 16 LIVE DASHBOARD
                    </span>
                  </div>

                  {/* Card Simulation API & Performance */}
                  <div className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 p-5 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-black text-zinc-950 bg-cyan-400 px-2.5 py-1 rounded-md uppercase">
                        LATENCIA 12MS • EDGE
                      </span>
                      <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded flex items-center gap-1">
                        <Activity className="w-3 h-3 text-emerald-400" /> 100/100 Lighthouse
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-white uppercase mb-1 font-heading">
                      14.820 Active Users
                    </h4>
                    <p className="text-xs text-zinc-400 mb-4 font-light italic">
                      Multi-Tenant Architecture • Supabase PostgreSQL
                    </p>

                    {/* Progress Bar Simulation */}
                    <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 mb-4 text-xs text-zinc-300">
                      <div className="flex items-center justify-between mb-1.5 text-cyan-400 font-bold font-mono">
                        <span className="flex items-center gap-1.5"><TrendingUp className="w-3.5 h-3.5" /> Servidor Serverless Uptime:</span>
                        <span>99.98%</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="w-[99.9%] h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-zinc-300">
                      <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800 text-center">
                        <span className="text-zinc-500 block">Seguridad RLS:</span>
                        <strong className="text-white text-xs font-bold">Activa (PostgreSQL)</strong>
                      </div>
                      <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800 text-center">
                        <span className="text-zinc-500 block">Cobros Recurrentes:</span>
                        <strong className="text-emerald-400 text-xs font-bold">Stripe / Webpay</strong>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge Row */}
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between p-2.5 bg-zinc-950/60 rounded-xl border border-zinc-800">
                      <span className="flex items-center gap-2 text-zinc-300">
                        <Users className="w-3.5 h-3.5 text-cyan-400" />
                        Roles de Usuario RBAC
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded">CONFIGURADO</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 bg-zinc-950/60 rounded-xl border border-zinc-800">
                      <span className="flex items-center gap-2 text-zinc-300">
                        <Code className="w-3.5 h-3.5 text-purple-400" />
                        Código Fuente 100% Tuyo
                      </span>
                      <span className="text-[10px] text-purple-400 font-bold bg-purple-950/60 px-2 py-0.5 rounded">GARANTIZADO</span>
                    </div>
                  </div>

               </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 2: LOS 5 PILARES DEL DESARROLLO SAAS & SOFTWARE      */}
        {/* ========================================================= */}
        <section id="pilares" className="py-24 bg-white text-zinc-950 rounded-[3.5rem] mx-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cyan-100 text-zinc-950 rounded-full font-mono font-bold text-xs uppercase mb-4">
                <Cpu className="w-4 h-4 text-cyan-800" />
                <span>Ingeniería de Software de Clase Mundial</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tighter text-zinc-950 font-heading">
                5 Pilares que Impulsan Nuestro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-purple-600 to-indigo-600">Código SaaS</span>
              </h2>
              <p className="text-zinc-600 text-base sm:text-lg font-light mt-4 leading-relaxed">
                Diseñamos software robusto, mantenible y escalable utilizando las mejores tecnologías web del ecosistema moderno.
              </p>
            </div>

            {/* PILAR 1: NEXT.JS 16 APP ROUTER */}
            <div className="mb-20 bg-zinc-50 border border-zinc-200/80 rounded-[3rem] p-8 lg:p-14 shadow-sm relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-200/80">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-950 text-cyan-400 rounded-2xl flex items-center justify-center shadow-md">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-800 uppercase tracking-widest">Pilar 01</span>
                    <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                      1. Next.js 16 App Router & Turbopack Core
                    </h3>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-cyan-100 text-cyan-900 rounded-full text-xs font-mono font-black uppercase">
                  Rendimiento Extremo
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    t: "React Server Components",
                    d: "Carga datos directamente en el servidor reduciendo el peso de JavaScript enviado al cliente a casi cero."
                  },
                  {
                    t: "Renderizado Híbrido SSR/ISR",
                    d: "Generación estática instantánea combinada con renderizado en el servidor para SEO y velocidad inigualable."
                  },
                  {
                    t: "Optimización de Imágenes & Fonts",
                    d: "Compresión automática WebP/AVIF y fuentes tipográficas sin bloqueo de renderizado en pantallas 4K."
                  },
                  {
                    t: "Código 100% TypeScript",
                    d: "Tipado estricto que previene errores en tiempo de ejecución y facilita la mantenibilidad a largo plazo."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs hover:border-cyan-500 transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 bg-cyan-50 text-cyan-800 rounded-xl flex items-center justify-center font-mono font-bold text-xs mb-4">
                        0{idx + 1}
                      </div>
                      <h4 className="text-base font-black uppercase text-zinc-950 mb-2 font-heading">{item.t}</h4>
                      <p className="text-xs text-zinc-600 font-normal leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PILAR 2: SUPABASE POSTGRESQL & SEGURIDAD RLS */}
            <div className="mb-20 bg-zinc-950 text-white rounded-[3rem] p-8 lg:p-14 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-800 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center text-white shadow-md">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">Pilar 02</span>
                    <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-white font-heading">
                      2. Supabase PostgreSQL & Row Level Security (RLS)
                    </h3>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-purple-500 text-white rounded-full text-xs font-mono font-black uppercase">
                  Seguridad Empresarial
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                
                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-purple-400/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mb-6">
                      <Lock className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">
                      Aislamiento Estricto de Datos (RLS)
                    </h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                      Políticas de seguridad a nivel de fila en la base de datos que impiden filtraciones de datos entre empresas.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>PostgreSQL Multi-Tenant seguro</span>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-cyan-500/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                      <Users className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">
                      Autenticación Completa (OAuth / Magic Link)
                    </h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                      Soporte para Google, GitHub, Microsoft SSO y verificación de correo sin contraseñas difíciles de gestionar.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Sesiones seguras con JWT Tokens</span>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6">
                      <Server className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">
                      Real-Time WebSockets
                    </h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                      Suscripciones en tiempo real para notificaciones en vivo, chat o dashboards actualizados al instante.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Sincronización instantánea</span>
                  </div>
                </div>

              </div>
            </div>

            {/* PILAR 3: DESPLIEGUE EDGE EN VERCEL */}
            <div className="mb-20 bg-cyan-950/20 border border-cyan-200/80 rounded-[3rem] p-8 lg:p-14 shadow-sm relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-cyan-200/80">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-400 text-zinc-950 rounded-2xl flex items-center justify-center shadow-md">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-800 uppercase tracking-widest">Pilar 03</span>
                    <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                      3. Despliegue Serverless Edge & Vercel Global CDN
                    </h3>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-cyan-400 text-zinc-950 rounded-full text-xs font-mono font-black uppercase">
                  Infraestructura Cloud
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="bg-white p-8 rounded-3xl border border-cyan-100 shadow-sm flex items-start gap-5">
                  <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase text-zinc-950 mb-2 font-heading">
                      Latencia Inferior a 20ms
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                      Ejecución de funciones Edge en el nodo más cercano al usuario en Chile y el mundo para respuestas inmediatas.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-cyan-100 shadow-sm flex items-start gap-5">
                  <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 shrink-0">
                    <Server className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase text-zinc-950 mb-2 font-heading">
                      Escalado Automático sin Caídas
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                      Soporta picos masivos de tráfico sin necesidad de administrar servidores físicos o gestionar parches de SO.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* PILAR 4 & 5: PAGOS DE SUSCRIPCIÓN & API MULTI-TENANT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* PILAR 4: SUSCRIPCIONES STRIPE / WEBPAY */}
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-[3rem] p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-zinc-950 text-emerald-400 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                    4. Pagos Recurrentes (Stripe / Webpay / Flow)
                  </h3>
                </div>

                <ul className="space-y-4">
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Cobros Recurrentes en CLP & USD</strong>
                    <p className="text-xs text-zinc-600 font-normal">Gestión de planes de suscripción mensual/anual con pasarelas locales e internacionales.</p>
                  </li>
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Facturación Electrónica Automática (SII)</strong>
                    <p className="text-xs text-zinc-600 font-normal">Emisión automática de documentos tributarios ante cada renovación de suscripción.</p>
                  </li>
                </ul>
              </div>

              {/* PILAR 5: ARQUITECTURA MULTI-TENANT & WEBHOOKS */}
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-[3rem] p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-zinc-950 text-cyan-400 rounded-xl flex items-center justify-center">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                    5. Paneles Multi-Tenant & Webhooks API
                  </h3>
                </div>

                <ul className="space-y-4">
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Múltiples Organizaciones & RBAC</strong>
                    <p className="text-xs text-zinc-600 font-normal">Administración de equipos, invitaciones por correo y permisos granulares por usuario.</p>
                  </li>
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Integración Webhooks (Zapier / CRMs)</strong>
                    <p className="text-xs text-zinc-600 font-normal">Conecta eventos de tu software con herramientas externas de marketing y ventas.</p>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 3: CASO DE ÉXITO PROPTECH - SOLOCASASCHILE           */}
        {/* ========================================================= */}
        <section className="bg-zinc-900 text-white py-24 rounded-[3.5rem] mx-4 my-12 relative overflow-hidden border border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
             <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950 text-cyan-400 border border-cyan-800 rounded-full font-mono text-xs font-bold uppercase mb-6">
                      <Sparkles className="w-3.5 h-3.5" /> Caso de Éxito Destacado
                   </div>
                   <h3 className="text-4xl lg:text-6xl font-black tracking-tight mb-6 text-white uppercase font-heading">
                      SoloCasasChile.com
                   </h3>
                   <p className="text-lg text-zinc-300 leading-relaxed mb-8 font-light">
                      Marketplace PropTech líder desarrollado íntegramente bajo la arquitectura Next.js 16 y Supabase de Webunica.
                   </p>
                   
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {[
                         'Búsqueda dinámica ultra-rápida',
                         'Arquitectura SEO 100/100',
                         'Panel Admin multi-usuario',
                         'Seguridad Supabase RLS',
                         'Filtros por Comuna y Precio',
                         '100% Speed Score Vercel'
                      ].map((item, i) => (
                         <li key={i} className="flex gap-3 items-center text-xs font-mono text-zinc-300">
                            <span className="w-5 h-5 rounded-full bg-cyan-400 text-zinc-950 flex items-center justify-center font-bold text-[10px]">✓</span>
                            {item}
                         </li>
                      ))}
                   </ul>

                   <a 
                    href="https://solocasaschile.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 text-lg font-bold text-cyan-400 hover:text-cyan-300 transition-colors font-mono uppercase"
                   >
                    Explorar Proyecto en Vivo <ArrowRight className="w-5 h-5" />
                   </a>
                </div>

                <div className="lg:w-1/2 relative">
                  <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-[2.5rem] shadow-2xl">
                    <Image 
                      src="/saas_hero_new.png"
                      alt="SoloCasasChile SaaS PropTech Architecture"
                      width={800}
                      height={600}
                      className="rounded-2xl w-full h-auto"
                    />
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 4: PLANES DE INVERSIÓN EN INGENIERÍA DE SOFTWARE       */}
        {/* ========================================================= */}
        <section id="pricing" className="py-24 max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-400 mb-3 block">
              Inversión en Activos Digitales de Propiedad 100% Tuya
            </span>
            <h2 className="text-4xl lg:text-7xl font-black mb-4 uppercase tracking-tighter text-white font-heading">
              Planes <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-emerald-400">Next.js & SaaS 2026</span>
            </h2>
            <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto">
              Construye un software que genere ingresos recurrentes sin depender de código de terceros.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`rounded-[3rem] p-8 lg:p-10 flex flex-col justify-between relative transition-all duration-300 ${
                  plan.recommended 
                    ? 'bg-zinc-900 border-2 border-cyan-400 shadow-2xl shadow-cyan-400/10' 
                    : 'bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {/* 10% OFF Badge */}
                <div className="absolute top-6 right-6 bg-emerald-500 text-white text-[10px] font-mono font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                  10% OFF VIP
                </div>

                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-zinc-950 text-[10px] font-mono font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                    MÁS ESTRATÉGICO PARA ESCALAR
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <span className="px-3.5 py-1 bg-zinc-950 border border-zinc-800 text-cyan-400 text-[11px] font-mono font-bold rounded-full uppercase tracking-wider">
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
                      <span className="text-4xl font-black text-cyan-400 font-heading">{plan.price}</span>
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
                      ? 'bg-cyan-400 hover:bg-cyan-300 text-zinc-950 shadow-lg shadow-cyan-400/20' 
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
        {/* ZONA 5: PREGUNTAS FRECUENTES SOBRE SAAS & NEXT.JS          */}
        {/* ========================================================= */}
        <div id="faq" className="rounded-[4rem] bg-white text-zinc-950 mx-4 overflow-hidden mt-20">
          <FAQSection 
            faqs={saasFaqs}
            title="Dudas sobre Desarrollo SaaS & Next.js"
            description="Preguntas técnicas y comerciales frecuentes sobre arquitectura de software a medida."
            ctaTitle="¿Listo para llevar tu software a producción?"
            ctaDescription="Agenda una consultoría técnica gratuita para evaluar la viabilidad y arquitectura de tu SaaS."
            ctaLabel="Agendar Consultoría Gratuita"
          />
        </div>

        {/* ========================================================= */}
        {/* ZONA 6: CTA FINAL IMPACTANTE                              */}
        {/* ========================================================= */}
        <section className="py-32 text-center px-6">
           <h2 className="text-5xl lg:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.85] text-white font-heading">
              CONSTRUYAMOS EL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-emerald-400">
                futuro de tu empresa.
              </span>
           </h2>
           <p className="text-zinc-400 text-xl mb-14 max-w-2xl mx-auto font-light leading-relaxed">
              Hablemos sobre tu visión y cómo la ingeniería moderna de software puede transformarla en un negocio rentable y escalable.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <LeadButton className="px-16 py-7 bg-cyan-400 text-zinc-950 font-black rounded-full hover:bg-cyan-300 transition-all shadow-2xl uppercase tracking-[0.2em] text-xs cursor-pointer">
                Agendar Consultoría Técnica
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

