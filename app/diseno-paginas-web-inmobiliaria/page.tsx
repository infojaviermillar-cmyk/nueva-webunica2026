import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import { Metadata } from 'next';
import { 
  Home, 
  Search, 
  MapPin, 
  Zap, 
  ShieldCheck, 
  Smartphone, 
  BarChart3, 
  CheckCircle2,
  ArrowRight,
  Globe,
  Database,
  Calculator,
  Share2,
  Users,
  Settings,
  Flame,
  LayoutGrid,
  Bot,
  Sparkles,
  ShoppingBag,
  Tag,
  Building2,
  Layers,
  ExternalLink,
  FileText,
  BadgePercent,
  Cpu,
  Check
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Plataforma Inmobiliaria & Portal Pro | Tecnología Activos en Red Chile',
  description: 'Desarrollamos portales inmobiliarios de alta ingeniería basados en Activos en Red: Multidifusión automática en Mercado Libre, Portal Inmobiliario, Yapo y Meta, IA de redacción, CRM de Leads y UF/CLP.',
  keywords: 'portal inmobiliario marca blanca, software inmobiliario chile, crm inmobiliario, activosenred, mercado libre portal inmobiliario api, yapo inmobiliario, autopublicacion redes sociales inmobiliaria, liquidaciones bancarias',
};

export default function RealEstatePage() {
  const realEstateFaqs = [
    {
      question: "¿La plataforma es 100% de mi propiedad o requiere suscripción mensual?",
      answer: "Es 100% independiente y de tu propiedad. La instalamos bajo tu propio dominio corporativo. No pagas comisiones por ventas ni tarifas mensuales por cantidad de inmuebles publicados. Solo mantienes tu propio dominio y hosting."
    },
    {
      question: "¿Cómo funciona la multidifusión automática en Mercado Libre, Yapo y Redes Sociales?",
      answer: "Tu panel se conecta mediante APIs oficiales. Al ingresar o actualizar una propiedad en tu sitio, esta se multidifunde de manera automática hacia Mercado Libre e Inmuebles Portal Inmobiliario Chile (MLC), Yapo.cl y tus redes sociales (Facebook e Instagram Business)."
    },
    {
      question: "¿Cómo opera la Inteligencia Artificial en la redacción de inmuebles?",
      answer: "Al ingresar los datos técnicos (dormitorios, metros cuadrados, ubicación, comodidades), el asistente de IA integrado genera automáticamente una descripción publicitaria atractiva, profesional y optimizada para captar compradores e inversionistas."
    },
    {
      question: "¿Se gestionan valores en UF y Pesos Chilenos (CLP) automáticamente?",
      answer: "Sí, el sistema está 100% adaptado al mercado chileno. Permite ingresar valores tanto en UF como en CLP, realizando la conversión de visualización en tiempo real para facilitar la búsqueda al usuario."
    },
    {
      question: "¿Qué es el módulo de Liquidaciones Bancarias?",
      answer: "Es una sección especializada dentro de tu portal para destacar propiedades de oportunidad, remates o cesiones de derechos a precios preferenciales, atrayendo a inversionistas de alto valor."
    },
    {
      question: "¿Cómo llegan las consultas de clientes interesados?",
      answer: "Todas las consultas captadas en la web o los portales rutean de inmediato al CRM interno y notifican por WhatsApp y correo corporativo adjuntando automáticamente la ficha técnica exacta y el Código Único (CÓD-XXXX) del inmueble."
    }
  ];

  const planFeatures = [
    "Carga ilimitada de propiedades (sin límites por plan)",
    "Códigos Únicos de Propiedad automáticos (CÓD-XXXX)",
    "Multidifusión API a Mercado Libre & Portal Inmobiliario",
    "Sincronización API con Yapo.cl (Pack Inmobiliario)",
    "Meta Graph API (Publicación en 1-click en FB e Instagram)",
    "Redacción Publicitaria de descripciones asistida por IA",
    "Conversor dinámico en tiempo real UF & Pesos CLP",
    "Módulo exclusivo de Liquidaciones Bancarias & Remates",
    "CRM Centralizado de Leads con trazabilidad de origen",
    "Calculadora de Rentabilidad Cap Rate para Inversores",
    "Galerías HD con selección interactiva de imagen de portada",
    "Buscador avanzado por ubicación, tipo y rango de precio",
    "WhatsApp Directo con mensaje estructurado y código CÓD-XXXX",
    "Embudo de captación 'Vender / Arrendar mi Propiedad'",
    "Arquitectura Next.js + Supabase con 100% Marca Blanca",
    "Soporte técnico prioritario y garantía de 6 meses"
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans antialiased overflow-x-hidden selection:bg-[#FFE600] selection:text-zinc-950">
      <div className="pt-[20vh] lg:pt-40 pb-20">
        
        {/* ========================================================= */}
        {/* ZONA 1: HERO IMPACTANTE ESTILO MERCADO LIBRE / PRO        */}
        {/* ========================================================= */}
        <section className="relative px-6 py-12 lg:py-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#FFE600]/10 blur-[170px] rounded-full pointer-events-none -z-10" />
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-7 text-center lg:text-left">
              
              {/* Badges Pill Row */}
              <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFE600] text-zinc-950 rounded-full shadow-lg font-black text-[11px] uppercase tracking-wider">
                  <Flame className="w-4 h-4 fill-zinc-950" />
                  <span>Tecnología Activos en Red</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-300 text-[11px] font-mono">
                  <Building2 className="w-3.5 h-3.5 text-[#FFE600]" />
                  <span>Portal Inmobiliario Pro</span>
                </div>
              </div>
              
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[72px] font-black tracking-tighter leading-[0.92] mb-8 uppercase font-heading text-white">
                Plataforma Inmobiliaria <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE600] via-yellow-400 to-amber-300">
                  Multidifusión & IA
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Impulsa tu corredora con la arquitectura tecnológica inspirada en <strong className="text-white font-bold">Activos en Red</strong>: multidifusión automática a <strong className="text-[#FFE600]">Mercado Libre</strong>, <strong className="text-[#FFE600]">Yapo</strong> y redes sociales, redacción con IA, códigos <span className="font-mono text-[#FFE600]">CÓD-XXXX</span> y módulo de liquidaciones bancarias.
              </p>
              
              {/* Pitch Feature Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto lg:mx-0 mb-10 text-left">
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <ShoppingBag className="w-4 h-4 text-[#FFE600] shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">Mercado Libre API</span>
                </div>
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <Bot className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">Redacción IA</span>
                </div>
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <Tag className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-200">UF / CLP Auto</span>
                </div>
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">100% Marca Blanca</span>
                </div>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                 <LeadButton className="px-10 py-5 bg-[#FFE600] hover:bg-yellow-400 text-zinc-950 font-black rounded-2xl transition-all shadow-xl shadow-[#FFE600]/10 uppercase tracking-widest text-xs w-full sm:w-auto text-center cursor-pointer">
                    Cotizar Plataforma Inmobiliaria <ArrowRight className="inline w-4 h-4 ml-2" />
                 </LeadButton>
                 <a 
                   href="#ventajas" 
                   className="px-8 py-5 border border-zinc-800 text-zinc-300 font-bold rounded-2xl hover:bg-zinc-900 hover:text-white transition-all uppercase tracking-widest text-xs text-center w-full sm:w-auto"
                 >
                    Explorar Funcionalidades
                 </a>
              </div>

            </div>
            
            {/* Right Interactive Mockup Container */}
            <div className="lg:col-span-5 relative group">
               <div className="absolute -inset-4 bg-gradient-to-tr from-[#FFE600]/20 to-amber-500/10 rounded-[3.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               
               <div className="relative bg-zinc-900 border border-zinc-800 rounded-[3rem] p-6 shadow-2xl overflow-hidden">
                  
                  {/* Top Bar Simulated Portal */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-zinc-400 bg-zinc-950 px-3 py-1 rounded-full border border-zinc-800">
                      activosenred.cl / tu-corredora.cl
                    </span>
                  </div>

                  {/* Card Simulation Header */}
                  <div className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 p-5 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-black text-zinc-950 bg-[#FFE600] px-2.5 py-1 rounded-md uppercase">
                        CÓD-4892
                      </span>
                      <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded">
                        LIQUIDACIÓN BANCARIA
                      </span>
                    </div>

                    <h4 className="text-lg font-black text-white uppercase mb-1">
                      Depto Penthouse 3D/2B • Las Condes
                    </h4>
                    <p className="text-xs text-zinc-400 mb-4 font-light">
                      Av. Apoquindo 4500 • Entrega Inmediata
                    </p>

                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-2xl font-black text-[#FFE600]">UF 8.950</span>
                      <span className="text-xs font-mono text-zinc-400 font-bold">≈ $340.100.000 CLP</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-zinc-300 bg-zinc-900 p-2.5 rounded-xl border border-zinc-800 text-center">
                      <div><strong className="text-white">125m²</strong> Totales</div>
                      <div><strong className="text-white">3</strong> Dorm.</div>
                      <div><strong className="text-white">2</strong> Baños</div>
                    </div>
                  </div>

                  {/* Sync Status Badge Row */}
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between p-2.5 bg-zinc-950/60 rounded-xl border border-zinc-800">
                      <span className="flex items-center gap-2 text-zinc-300">
                        <ShoppingBag className="w-3.5 h-3.5 text-yellow-400" />
                        Mercado Libre / Portal Inmobiliario
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded">SINCRONIZADO</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 bg-zinc-950/60 rounded-xl border border-zinc-800">
                      <span className="flex items-center gap-2 text-zinc-300">
                        <Share2 className="w-3.5 h-3.5 text-blue-400" />
                        Facebook e Instagram (Meta API)
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded">PUBLICADO</span>
                    </div>
                  </div>

               </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 2: LOS 5 PILARES TECNOLÓGICOS ACTIVOS EN RED         */}
        {/* ========================================================= */}
        <section id="ventajas" className="py-24 bg-white text-zinc-950 rounded-[3.5rem] mx-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFE600]/30 text-zinc-950 rounded-full font-mono font-bold text-xs uppercase mb-4">
                <Cpu className="w-4 h-4 text-zinc-950" />
                <span>Arquitectura Inspirada en Activos en Red</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tighter text-zinc-950 font-heading">
                5 Pilares que Transforman tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600">Corredora</span>
              </h2>
              <p className="text-zinc-600 text-base sm:text-lg font-light mt-4 leading-relaxed">
                Combinamos inteligencia artificial, sincronización en tiempo real y multidifusión para automatizar la gestión y venta de inmuebles en Chile.
              </p>
            </div>

            {/* PILAR 1: GESTIÓN INTELIGENTE DE PROPIEDADES */}
            <div className="mb-20 bg-zinc-50 border border-zinc-200/80 rounded-[3rem] p-8 lg:p-14 shadow-sm relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-200/80">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FFE600] rounded-2xl flex items-center justify-center text-zinc-950 shadow-md">
                    <Home className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest">Pilar 01</span>
                    <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                      1. Gestión Inteligente de Propiedades
                    </h3>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-amber-100 text-amber-900 rounded-full text-xs font-mono font-black uppercase">
                  Fichas & Liquidaciones
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    t: "Códigos Únicos (CÓD-XXXX)",
                    d: "Identificador exclusivo grabado en cada inmueble para una rápida referencia por clientes, agencias y asesores."
                  },
                  {
                    t: "Fichas Técnicas UF / CLP",
                    d: "Cálculo automático de valores en UF y CLP, metrajes (terreno y construido), dormitorios, baños, estacionamientos y mapa interactivo."
                  },
                  {
                    t: "Galerías HD con Selección de Portada",
                    d: "Presentación visual optimizada de alta velocidad con reordenamiento interactivo de imágenes para el mejor ángulo comercial."
                  },
                  {
                    t: "Módulo de Liquidaciones Bancarias",
                    d: "Sección exclusiva para destacar oportunidades de inversión, cesiones y remates bancarios a precios preferenciales."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs hover:border-amber-400 transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 bg-amber-50 text-amber-700 rounded-xl flex items-center justify-center font-mono font-bold text-xs mb-4">
                        0{idx + 1}
                      </div>
                      <h4 className="text-base font-black uppercase text-zinc-950 mb-2 font-heading">{item.t}</h4>
                      <p className="text-xs text-zinc-600 font-normal leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PILAR 2: MULTIDIFUSIÓN AUTOMÁTICA EN PORTALES */}
            <div className="mb-20 bg-zinc-950 text-white rounded-[3rem] p-8 lg:p-14 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFE600]/10 rounded-full blur-[140px] pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-800 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center text-zinc-950 shadow-md">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#FFE600] uppercase tracking-widest">Pilar 02</span>
                    <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-white font-heading">
                      2. Multidifusión Automática en Portales y Redes
                    </h3>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-[#FFE600] text-zinc-950 rounded-full text-xs font-mono font-black uppercase">
                  APIs Oficiales Chile
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                
                {/* Mercado Libre */}
                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-[#FFE600]/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-yellow-400/20 text-yellow-400 rounded-2xl flex items-center justify-center">
                        <ShoppingBag className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-yellow-400 bg-yellow-950 border border-yellow-800 px-2.5 py-1 rounded-full uppercase">
                        API Oficial MLC
                      </span>
                    </div>
                    <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">
                      Mercado Libre & Portal Inmobiliario
                    </h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                      Sincronización directa mediante API oficial para publicar tus inmuebles en el portal de mayor tráfico de Chile.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-yellow-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Actualización de precio & stock en tiempo real</span>
                  </div>
                </div>

                {/* Yapo.cl */}
                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-red-500/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-2xl flex items-center justify-center">
                        <Flame className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-red-400 bg-red-950 border border-red-800 px-2.5 py-1 rounded-full uppercase">
                        Pack Inmobiliario
                      </span>
                    </div>
                    <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">
                      Yapo.cl (Sincronización API)
                    </h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                      Publicación automatizada de inventario en Yapo.cl para maximizar la cobertura en búsquedas regionales de Chile.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-red-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Conexión de inventario activo sin reingreso</span>
                  </div>
                </div>

                {/* Meta Graph API */}
                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-blue-500/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center">
                        <Share2 className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-blue-400 bg-blue-950 border border-blue-800 px-2.5 py-1 rounded-full uppercase">
                        Meta Business API
                      </span>
                    </div>
                    <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">
                      Facebook e Instagram Autoposting
                    </h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                      Autopublicación masiva con piezas publicitarias y enlace directo a la ficha técnica de tu portal corporativo.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Publicación con 1-click desde tu admin</span>
                  </div>
                </div>

              </div>
            </div>

            {/* PILAR 3: INTELIGENCIA ARTIFICIAL APLICADA */}
            <div className="mb-20 bg-emerald-950/20 border border-emerald-200/80 rounded-[3rem] p-8 lg:p-14 shadow-sm relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-emerald-200/80">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shadow-md">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-widest">Pilar 03</span>
                    <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                      3. Inteligencia Artificial Aplicada a la Correduría
                    </h3>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-emerald-600 text-white rounded-full text-xs font-mono font-black uppercase">
                  Generación IA & Respuestas
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm flex items-start gap-5">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase text-zinc-950 mb-2 font-heading">
                      Redacción Publicitaria con IA
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                      Generación automática de descripciones inmobiliarias profesionales, atractivas y optimizadas para SEO en segundos, destacando puntos fuertes y equipamiento.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm flex items-start gap-5">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase text-zinc-950 mb-2 font-heading">
                      Atención y Respuesta Inmediata WhatsApp
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                      Integración directa con WhatsApp y correo corporativo enviando al cliente y al agente la ficha exacta y el Código Único (<span className="font-mono font-bold text-emerald-700">CÓD-XXXX</span>) consultado.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* PILAR 4 & 5: PANEL DE CONTROL & INFRAESTRUCTURA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* PILAR 4: PANEL DE CONTROL */}
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-[3rem] p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-zinc-950 text-[#FFE600] rounded-xl flex items-center justify-center">
                    <Settings className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                    4. Panel de Control Inmobiliario
                  </h3>
                </div>

                <ul className="space-y-4">
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">CRM de Leads Centralizado</strong>
                    <p className="text-xs text-zinc-600 font-normal">Registro de interesados con trazabilidad de origen (Web, WhatsApp, Mercado Libre, Portal Inmobiliario, Yapo).</p>
                  </li>
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Control de Estados Inmobiliarios</strong>
                    <p className="text-xs text-zinc-600 font-normal">Actualización inmediata entre Borrador, Disponible, Vendida, Arrendada o Liquidación Bancaria.</p>
                  </li>
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Blog & Artículos SEO</strong>
                    <p className="text-xs text-zinc-600 font-normal">Publicación de noticias, guías legales y recomendaciones para aumentar la visibilidad orgánica en Google.</p>
                  </li>
                </ul>
              </div>

              {/* PILAR 5: RENDIMIENTO Y SEGURIDAD */}
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-[3rem] p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-zinc-950 text-[#FFE600] rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                    5. Rendimiento & Seguridad Cloud
                  </h3>
                </div>

                <ul className="space-y-4">
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Next.js 16 + React + Supabase</strong>
                    <p className="text-xs text-zinc-600 font-normal">Arquitectura server-side para velocidad de carga instantánea en móviles y escritorios.</p>
                  </li>
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Seguridad PostgreSQL con RLS</strong>
                    <p className="text-xs text-zinc-600 font-normal">Base de datos protegida con Row Level Security y cifrado SSL en la nube.</p>
                  </li>
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Calculadora Cap Rate Inversionistas</strong>
                    <p className="text-xs text-zinc-600 font-normal">Simulador financiero de retorno anual y dividendos en tiempo real para compradores e inversores.</p>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 3: PLAN UNICO MARCA BLANCA PRO                       */}
        {/* ========================================================= */}
        <section id="planes" className="py-24 max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#FFE600] mb-3 block">
              Inversión Única • Sin Comisiones por Venta
            </span>
            <h2 className="text-4xl lg:text-7xl font-black mb-4 uppercase tracking-tighter text-white font-heading">
              Tu Propio <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE600] via-yellow-400 to-amber-300">Portal Inmobiliario Pro</span>
            </h2>
            <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto">
              Adquiere tu plataforma de marca blanca configurada con la tecnología de Activos en Red.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-[3.5rem] p-10 lg:p-14 shadow-2xl relative overflow-hidden">
            
            {/* 10% Discount Badge */}
            <div className="absolute top-10 right-10 bg-[#FFE600] text-zinc-950 text-[11px] font-mono font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-md">
              10% DESCUENTO INICIAL
            </div>
            
            <div className="mb-6">
              <span className="px-4 py-2 bg-zinc-950 border border-zinc-800 text-[#FFE600] text-xs font-mono font-bold rounded-full uppercase tracking-widest">
                Marca Blanca • Next.js & Supabase
              </span>
            </div>
            
            <h3 className="text-3xl lg:text-5xl font-black text-white mb-3 uppercase tracking-tight font-heading">
              Plataforma Inmobiliaria Pro
            </h3>
            
            <p className="text-sm text-zinc-400 mb-10 font-light leading-relaxed max-w-2xl">
              Sistema independiente y automatizado para publicar inmuebles ilimitados con multidifusión en Mercado Libre, Yapo y Meta Graph API, redacción IA, códigos CÓD-XXXX y CRM de clientes.
            </p>
            
            <div className="mb-12 p-8 bg-zinc-950 border border-zinc-800 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="text-xs line-through text-zinc-500 font-mono font-bold mb-1 uppercase tracking-wider">
                  $1.100.000 + IVA
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl lg:text-6xl font-black text-[#FFE600] font-heading">$800.000</span>
                  <span className="text-sm text-zinc-400 font-bold uppercase tracking-wider">+ IVA</span>
                </div>
              </div>
              <LeadButton className="px-10 py-5 bg-[#FFE600] hover:bg-yellow-400 text-zinc-950 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all shrink-0 cursor-pointer">
                 Cotizar esta Plataforma
              </LeadButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {planFeatures.map((f, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-zinc-300 font-normal">
                  <CheckCircle2 className="w-5 h-5 text-[#FFE600] shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 4: PREGUNTAS FRECUENTES SOBRE SOFTWARE INMOBILIARIO   */}
        {/* ========================================================= */}
        <div className="rounded-[4rem] bg-white text-zinc-950 mx-4 overflow-hidden mt-20">
          <FAQSection 
            faqs={realEstateFaqs}
            title="Dudas sobre la Plataforma Inmobiliaria"
            description="Todo sobre multidifusión en Mercado Libre, redacción por IA y marca blanca."
            ctaTitle="¿Listo para lanzar tu propio portal inmobiliario?"
            ctaDescription="Agenda una asesoría técnica y cotización personalizada para tu corredora."
            ctaLabel="Quiero mi Asesoría Gratuita"
          />
        </div>

        {/* ========================================================= */}
        {/* ZONA 5: CTA FINAL IMPACTANTE                              */}
        {/* ========================================================= */}
        <section className="py-32 text-center px-6">
           <h2 className="text-5xl lg:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.85] text-white font-heading">
              TU PROPIA <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE600] via-yellow-400 to-amber-300">
                plataforma inmobiliaria.
              </span>
           </h2>
           <p className="text-zinc-400 text-xl mb-14 max-w-2xl mx-auto font-light leading-relaxed">
              Posiciona tu marca en Chile con el sistema multidifusión más potente del mercado. Sin pagar comisiones por venta ni mensualidades por inmuebles.
           </p>
           <LeadButton className="px-16 py-7 bg-[#FFE600] text-zinc-950 font-black rounded-full hover:bg-yellow-400 transition-all shadow-2xl uppercase tracking-[0.2em] text-xs cursor-pointer">
              Configurar mi Portal Inmobiliario
           </LeadButton>
        </section>

      </div>
    </div>
  );
}
 Plataforma
           </LeadButton>
        </section>

      </div>
    </div>
  );
}
