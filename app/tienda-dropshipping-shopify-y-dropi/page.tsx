import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import { Metadata } from 'next';
import { 
  Zap, 
  ShoppingBag, 
  Truck, 
  Target, 
  BarChart3, 
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Package,
  Globe,
  Bot,
  Sparkles,
  Cpu,
  Award,
  TrendingUp,
  ArrowRight,
  Flame,
  DollarSign,
  Layers,
  Smartphone,
  RefreshCw
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tiendas Dropshipping Chile | Shopify & Dropi Local (COD 24-48h)',
  description: 'Desarrollo profesional de tiendas dropshipping en Chile conectadas con Dropi y Shopify. Vende sin stock con proveedores locales en Santiago y pago contra entrega.',
  keywords: [
    'dropshipping chile',
    'dropi chile shopify',
    'vender sin stock chile',
    'tienda dropshipping automatizada',
    'pago contra entrega chile cod',
    'proveedores dropshipping santiago',
    'ecommerce contra entrega chile',
    'dropshipping shopify dropi',
    'ganar dinero online chile',
    'desarrollo tiendas shopify chile'
  ].join(', '),
  alternates: {
    canonical: 'https://webunica.cl/tienda-dropshipping-shopify-y-dropi',
  },
  openGraph: {
    title: 'Tiendas Dropshipping Chile | Shopify & Dropi Local',
    description: 'Inicia tu negocio e-commerce sin stock con proveedores en Chile, despacho rápido en 24-48 horas y recaudo Pago Contra Entrega (COD).',
    url: 'https://webunica.cl/tienda-dropshipping-shopify-y-dropi',
    siteName: 'Webunica',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: 'https://webunica.cl/pymes_hero_new.png',
        width: 1200,
        height: 630,
        alt: 'Tiendas Dropshipping Chile Shopify y Dropi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiendas Dropshipping en Chile con Shopify & Dropi Local',
    description: 'Vende productos ganadores sin comprar inventario previo. Pago contra entrega en todo Chile.',
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

export default function DropshippingPage() {
  const dropshippingFaqs = [
    {
      question: "¿Qué es Dropi Chile y cómo se conecta con mi tienda Shopify?",
      answer: "Dropi Chile es la plataforma logística y de catálogo local líder para dropshipping en el país. Se conecta mediante API directa con tu tienda Shopify. Al instalarla, puedes importar productos de proveedores chilenos en minutos. Cuando un cliente compra en tu sitio, el pedido se transfiere automáticamente a Dropi para su empaque y despacho."
    },
    {
      question: "¿Realmente no necesito comprar inventario o stock por adelantado?",
      answer: "Exactamente. Con el modelo Shopify + Dropi Chile, todo el inventario permanece almacenado en las bodegas de los proveedores en Santiago o regiones. Tú solo pagas el costo mayorista del producto una vez que tu cliente ya realizó y pagó el pedido en tu tienda, eliminando el riesgo financiero."
    },
    {
      question: "¿Cómo funciona el Pago Contra Entrega (COD) en Chile?",
      answer: "El Pago Contra Entrega (Cash On Delivery) permite a los compradores pagar en efectivo o transferencia al repartidor en el momento exacto en que reciben el paquete en su casa. Integramos este flujo en tu Shopify para multiplicar hasta por 3x las conversiones en el mercado chileno."
    },
    {
      question: "¿La actualización de stock e imágenes de productos es automática?",
      answer: "Sí, es 100% automática en tiempo real. Si un proveedor en Santiago cambia el precio o se agota el stock de un producto en Dropi, tu tienda Shopify actualiza el estado de inmediato para evitar ventas sin inventario."
    },
    {
      question: "¿Cuánto tardan los envíos al cliente en Chile?",
      answer: "Al tratarse de dropshipping local con proveedores nacionales, los tiempos de despacho toman entre 24 y 48 horas hábiles en la Región Metropolitana y de 2 a 4 días en regiones. Esto representa una ventaja masiva frente a los 20 días de espera de AliExpress o China."
    },
    {
      question: "¿Necesito conocimientos técnicos previos para operar la tienda?",
      answer: "No. Nosotros entregamos tu plataforma 100% configurada y lista para vender: dominio conectado, pasarelas de pago (Webpay, Mercado Pago, Flow, Fintoc), integración con Dropi Chile y capacitación en video paso a paso."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://webunica.cl/tienda-dropshipping-shopify-y-dropi/#service",
        "name": "Configuración de Tiendas Dropshipping con Dropi Chile",
        "serviceType": "E-Commerce Dropshipping & Local Fulfillment",
        "description": "Desarrollo profesional de tiendas Shopify integradas con Dropi Chile para venta sin stock con pago contra entrega y logística automatizada.",
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
        "@id": "https://webunica.cl/tienda-dropshipping-shopify-y-dropi/#faq",
        "mainEntity": dropshippingFaqs.map((faq) => ({
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

  const dropshippingPlans = [
    {
      name: "Dropshipping Básico",
      price: "$580.000",
      original: "$680.000",
      highlight: "Ideal para iniciar sin stock",
      desc: "Plataforma completa lista para vender con catálogo Dropi Chile y Pago Contra Entrega activado.",
      features: [
        "Desarrollo completo Tienda Shopify Dropshipping",
        "Integración API oficial con plataforma Dropi Chile",
        "Dominio .cl propio y certificado de seguridad SSL",
        "Plantilla Premium optimizada para carga rápida",
        "Creación de 5 colecciones de productos estratégicas",
        "Sistema de Pago Contra Entrega (COD) configurado",
        "Personalización de 1 Producto Estrella con fotos/videos IA",
        "Integración de pasarela de pago (Webpay/Mercado Pago + Fintoc)",
        "Video explicativo exclusivo sobre generación de contenido IA",
        "Canal de atención directa WhatsApp + Redes Sociales",
        "Soporte técnico y acompañamiento por 3 meses"
      ]
    },
    {
      name: "Dropshipping Avanzado & Escala",
      price: "$850.000",
      original: "$980.000",
      highlight: "Para escalar volumen de ventas",
      desc: "Ecosistema e-commerce optimizado para campañas de alto volumen en TikTok & Meta Ads con CRO avanzado.",
      features: [
        "Todo lo del Plan Básico +",
        "Creación de hasta 15 colecciones inteligentes",
        "Personalización de 3 Productos Ganadores con 5 fotos y 3 videos IA cada uno",
        "Todas las pasarelas de pago locales activadas (Webpay, Flow, Mercado Pago, Fintoc)",
        "Configuración de Meta Pixel, TikTok Pixel & Google Analytics 4",
        "Optimización de Tasa de Conversión (CRO)",
        "Diseño de Banners publicitarios y carruseles promocionales",
        "Estrategia de SEO técnico para colecciones",
        "Reunión de estrategia comercial y soporte prioritario",
        "Garantía de rendimiento y mantención extendida"
      ],
      recommended: true
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans antialiased overflow-x-hidden selection:bg-purple-400 selection:text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-[20vh] lg:pt-40 pb-20">
        
        {/* ========================================================= */}
        {/* ZONA 1: HERO CYBERPUNK NEON PURPLE & EMERALD E-COMMERCE   */}
        {/* ========================================================= */}
        <section className="relative px-6 py-12 lg:py-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-500/10 blur-[170px] rounded-full pointer-events-none -z-10" />
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-7 text-center lg:text-left">
              
              {/* Badges Pill Row */}
              <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-full shadow-lg font-black text-[11px] uppercase tracking-wider">
                  <Flame className="w-4 h-4 fill-white" />
                  <span>Dropshipping Local Chile 2026</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-300 text-[11px] font-mono">
                  <Truck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Shopify + Dropi Chile (COD)</span>
                </div>
              </div>
              
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[72px] font-black tracking-tighter leading-[0.92] mb-8 uppercase font-heading text-white">
                Vende Sin Stock con <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-emerald-400">
                  Shopify & Dropi Chile
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                La forma más rentable de emprender en e-commerce. Creamos tu <strong className="text-white font-bold">tienda dropshipping profesional</strong> sincronizando Shopify con proveedores locales de <strong className="text-white font-bold">Dropi Chile</strong>: despacho expreso en 24-48 horas y recaudo Pago Contra Entrega (COD).
              </p>
              
              {/* Pitch Feature Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto lg:mx-0 mb-10 text-left">
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <Package className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">Cero Stock</span>
                </div>
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-200">Envío 24-48h</span>
                </div>
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">Pago COD</span>
                </div>
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">Dropi API</span>
                </div>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                 <LeadButton className="px-10 py-5 bg-purple-500 hover:bg-purple-400 text-white font-black rounded-2xl transition-all shadow-xl shadow-purple-500/20 uppercase tracking-widest text-xs w-full sm:w-auto text-center cursor-pointer">
                    Cotizar Tienda Dropshipping <ArrowRight className="inline w-4 h-4 ml-2" />
                 </LeadButton>
                 <a 
                   href="#pilares" 
                   className="px-8 py-5 border border-zinc-800 text-zinc-300 font-bold rounded-2xl hover:bg-zinc-900 hover:text-white transition-all uppercase tracking-widest text-xs text-center w-full sm:w-auto"
                 >
                    Ver Modelo 5 Pilares
                 </a>
              </div>

            </div>
            
            {/* Right Interactive Mockup Container */}
            <div className="lg:col-span-5 relative group">
               <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 to-emerald-500/10 rounded-[3.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               
               <div className="relative bg-zinc-900 border border-zinc-800 rounded-[3rem] p-6 shadow-2xl overflow-hidden">
                  
                  {/* Top Bar Simulated Dropi Live Sync */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-800">
                      DROPI API CONNECTED • CHILE
                    </span>
                  </div>

                  {/* Card Simulation Orders Feed */}
                  <div className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 p-5 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-black text-zinc-950 bg-emerald-400 px-2.5 py-1 rounded-md uppercase">
                        PEDIDO COD CONFIRMADO
                      </span>
                      <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-950/80 border border-purple-800 px-2 py-0.5 rounded flex items-center gap-1">
                        <Truck className="w-3 h-3 text-purple-400" /> Blue Express 24h
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-white uppercase mb-1 font-heading">
                      Orden #4819 • $34.990 CLP
                    </h4>
                    <p className="text-xs text-zinc-400 mb-4 font-light italic">
                      Producto Ganador • Proveedor Bodega Santiago
                    </p>

                    {/* Simulation Profit Margin */}
                    <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 mb-4 text-xs text-zinc-300">
                      <div className="flex items-center justify-between mb-1.5 text-purple-400 font-bold font-mono">
                        <span className="flex items-center gap-1.5"><DollarSign className="w-3.5 h-3.5 text-emerald-400" /> Ganancia Neta Estimada:</span>
                        <span className="text-emerald-400 font-black text-sm">$18.500 CLP</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="w-[85%] h-full bg-gradient-to-r from-purple-500 to-emerald-400 rounded-full" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-zinc-300">
                      <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800 text-center">
                        <span className="text-zinc-500 block">Recaudo COD:</span>
                        <strong className="text-white text-xs font-bold">Al Entregar</strong>
                      </div>
                      <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800 text-center">
                        <span className="text-zinc-500 block">Stock Proveedor:</span>
                        <strong className="text-emerald-400 text-xs font-bold">1.420 Unidades</strong>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge Row */}
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between p-2.5 bg-zinc-950/60 rounded-xl border border-zinc-800">
                      <span className="flex items-center gap-2 text-zinc-300">
                        <ShoppingBag className="w-3.5 h-3.5 text-purple-400" />
                        Sincronización Shopify + Dropi
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded">AUTOMÁTICO</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 bg-zinc-950/60 rounded-xl border border-zinc-800">
                      <span className="flex items-center gap-2 text-zinc-300">
                        <Bot className="w-3.5 h-3.5 text-cyan-400" />
                        Fotos & Videos IA Productos
                      </span>
                      <span className="text-[10px] text-cyan-400 font-bold bg-cyan-950/60 px-2 py-0.5 rounded">INCLUIDO</span>
                    </div>
                  </div>

               </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 2: LOS 5 PILARES DEL DROPSHIPPING LOCAL EN CHILE       */}
        {/* ========================================================= */}
        <section id="pilares" className="py-24 bg-white text-zinc-950 rounded-[3.5rem] mx-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple-100 text-zinc-950 rounded-full font-mono font-bold text-xs uppercase mb-4">
                <Cpu className="w-4 h-4 text-purple-800" />
                <span>Ecosistema de E-Commerce Automatizado</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tighter text-zinc-950 font-heading">
                5 Pilares para Facturar con <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-500 to-emerald-600">Dropi Chile</span>
              </h2>
              <p className="text-zinc-600 text-base sm:text-lg font-light mt-4 leading-relaxed">
                Reinventamos el dropshipping eliminando los envíos lentos de China. Conectamos tu tienda directamente con bodegas locales en Santiago y despacho garantizado.
              </p>
            </div>

            {/* PILAR 1: VENDER SIN STOCK */}
            <div className="mb-20 bg-zinc-50 border border-zinc-200/80 rounded-[3rem] p-8 lg:p-14 shadow-sm relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-200/80">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center text-white shadow-md">
                    <Package className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-purple-800 uppercase tracking-widest">Pilar 01</span>
                    <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                      1. Vender Sin Inventario ni Riesgo Capital
                    </h3>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-purple-100 text-purple-900 rounded-full text-xs font-mono font-black uppercase">
                  Zero Stock Risk
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    t: "Catálogo Local en Chile",
                    d: "Accede a miles de productos probados almacenados en bodegas en Santiago y regiones sin comprar mercadería."
                  },
                  {
                    t: "Cero Riesgo de Liquidez",
                    d: "Solo compras el producto al costo mayorista una vez que tu cliente ya hizo la orden en tu tienda."
                  },
                  {
                    t: "Prueba de Productos Ganadores",
                    d: "Agrega o quita productos de tu tienda en minutos sin quedarte con stock obsoleto atascado."
                  },
                  {
                    t: "Escalabilidad Exponencial",
                    d: "Escala de 1 a 100 pedidos diarios sin necesidad de arrendar bodega ni contratar personal de empaque."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs hover:border-purple-400 transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 bg-purple-50 text-purple-800 rounded-xl flex items-center justify-center font-mono font-bold text-xs mb-4">
                        0{idx + 1}
                      </div>
                      <h4 className="text-base font-black uppercase text-zinc-950 mb-2 font-heading">{item.t}</h4>
                      <p className="text-xs text-zinc-600 font-normal leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PILAR 2: PAGO CONTRA ENTREGA (COD 24-48H) */}
            <div className="mb-20 bg-zinc-950 text-white rounded-[3rem] p-8 lg:p-14 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-800 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-400 rounded-2xl flex items-center justify-center text-zinc-950 shadow-md">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">Pilar 02</span>
                    <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-white font-heading">
                      2. Pago Contra Entrega (COD) & Despacho Expreso
                    </h3>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-emerald-400 text-zinc-950 rounded-full text-xs font-mono font-black uppercase">
                  Conversion Boost 3x
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                
                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-emerald-400/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-emerald-400/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">
                      Confianza Máxima al Cliente
                    </h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                      El comprador paga en efectivo o transferencia al repartidor cuando recibe el paquete en su puerta.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Multiplica hasta 3x las ventas en Chile</span>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-purple-500/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mb-6">
                      <Truck className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">
                      Despacho en 24-48 Horas
                    </h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                      Despachos locales rápidos gestionados por transportadoras como Blue Express en toda la RM y regiones.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Sin esperas largas de envíos internacionales</span>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-cyan-500/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">
                      Recaudo Automático de Utilidades
                    </h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                      Dropi liquida semanalmente el dinero recaudado y transfiere tu ganancia neta directo a tu cuenta bancaria.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Trazabilidad clara de cada comisión</span>
                  </div>
                </div>

              </div>
            </div>

            {/* PILAR 3: INTEGRACIÓN API DROPI + SHOPIFY */}
            <div className="mb-20 bg-purple-950/20 border border-purple-200/80 rounded-[3rem] p-8 lg:p-14 shadow-sm relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-purple-200/80">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500 text-white rounded-2xl flex items-center justify-center shadow-md">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-purple-800 uppercase tracking-widest">Pilar 03</span>
                    <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                      3. Sincronización Automática Dropi API + Shopify
                    </h3>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-purple-500 text-white rounded-full text-xs font-mono font-black uppercase">
                  Automatización 100%
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="bg-white p-8 rounded-3xl border border-purple-100 shadow-sm flex items-start gap-5">
                  <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 shrink-0">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase text-zinc-950 mb-2 font-heading">
                      Importación en 1-Click
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                      Carga títulos, imágenes, variantes de color/talla y precios sugeridos desde Dropi Chile hacia tu tienda Shopify sin ingreso manual.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-purple-100 shadow-sm flex items-start gap-5">
                  <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 shrink-0">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase text-zinc-950 mb-2 font-heading">
                      Despacho Automatizado de Pedidos
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                      Cada venta efectuada en tu sitio web notifica de inmediato al sistema de Dropi para la preparación del paquete sin intervención manual.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* PILAR 4 & 5: CONTENIDOS IA & PASARELAS DE PAGO */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* PILAR 4: CONTENIDOS IA */}
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-[3rem] p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-zinc-950 text-purple-400 rounded-xl flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                    4. Fotos & Videos IA para Productos Ganadores
                  </h3>
                </div>

                <ul className="space-y-4">
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Imágenes Exclusivas por IA</strong>
                    <p className="text-xs text-zinc-600 font-normal">Generación de fotografías publicitarias únicas para diferenciarte de otros dropshippers.</p>
                  </li>
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Videos Publicitarios para TikTok & Meta Ads</strong>
                    <p className="text-xs text-zinc-600 font-normal">Edición de piezas en formato vertical optimizadas para campañas con alto ROI.</p>
                  </li>
                </ul>
              </div>

              {/* PILAR 5: PASARELAS DE PAGO CHILE */}
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-[3rem] p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-zinc-950 text-emerald-400 rounded-xl flex items-center justify-center">
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                    5. Múltiples Pasarelas de Pago Locales
                  </h3>
                </div>

                <ul className="space-y-4">
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Webpay Plus, Mercado Pago & Flow</strong>
                    <p className="text-xs text-zinc-600 font-normal">Acepta tarjetas de débito, crédito y cuotas para clientes que prefieren pagar online.</p>
                  </li>
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Transferencias Fintoc 0% Comisión</strong>
                    <p className="text-xs text-zinc-600 font-normal">Integración de cobros bancarios inmediatos por transferencia reduciendo costos por transacción.</p>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 3: PLANES DE DROPSHIPPING EN CHILE                   */}
        {/* ========================================================= */}
        <section id="planes" className="py-24 max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-purple-400 mb-3 block">
              Inversión Inteligente • Sin Cobros Ocultos
            </span>
            <h2 className="text-4xl lg:text-7xl font-black mb-4 uppercase tracking-tighter text-white font-heading">
              Planes <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-emerald-400">Dropi Chile & Shopify</span>
            </h2>
            <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto">
              Estructuras e-commerce diseñadas para vender sin stock y escalar tus ingresos en Chile.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {dropshippingPlans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`rounded-[3rem] p-8 lg:p-12 flex flex-col justify-between relative transition-all duration-300 ${
                  plan.recommended 
                    ? 'bg-zinc-900 border-2 border-purple-400 shadow-2xl shadow-purple-400/10' 
                    : 'bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-400 text-zinc-950 text-[10px] font-mono font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                    MÁS SOLICITADO PARA ESCALAR
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <span className="px-3.5 py-1 bg-zinc-950 border border-zinc-800 text-purple-400 text-[11px] font-mono font-bold rounded-full uppercase tracking-wider">
                      {plan.highlight}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-black text-white uppercase mb-2 font-heading">
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
                      <span className="text-4xl font-black text-purple-400 font-heading">{plan.price}</span>
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
                    ? 'bg-purple-400 hover:bg-purple-300 text-zinc-950 shadow-lg' 
                    : 'bg-zinc-950 hover:bg-zinc-800 text-white border border-zinc-800'
                }`}>
                  Cotizar {plan.name}
                </LeadButton>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 4: PREGUNTAS FRECUENTES SOBRE DROPSHIPPING CHILE      */}
        {/* ========================================================= */}
        <div id="faq" className="rounded-[4rem] bg-white text-zinc-950 mx-4 overflow-hidden mt-20">
          <FAQSection 
            faqs={dropshippingFaqs}
            title="Dudas sobre Dropshipping en Chile"
            description="Todo lo que necesitas saber para vender sin stock con Shopify y Dropi."
            ctaTitle="¿Listo para lanzar tu tienda online sin stock?"
            ctaDescription="Solicita una asesoría estratégica y propuesta a medida para tu nuevo negocio e-commerce."
            ctaLabel="Solicitar Asesoría Dropshipping"
          />
        </div>

        {/* ========================================================= */}
        {/* ZONA 5: CTA FINAL IMPACTANTE                              */}
        {/* ========================================================= */}
        <section className="py-32 text-center px-6">
           <h2 className="text-5xl lg:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.85] text-white font-heading">
              EMPIEZA A <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-emerald-400">
                facturar hoy mismo.
              </span>
           </h2>
           <p className="text-zinc-400 text-xl mb-14 max-w-2xl mx-auto font-light leading-relaxed">
              No esperes más para profesionalizar tu negocio. El dropshipping local en Chile está explotando y Shopify + Dropi Chile son la combinación ganadora.
           </p>
           <LeadButton className="px-16 py-7 bg-purple-400 text-zinc-950 font-black rounded-full hover:bg-purple-300 transition-all shadow-2xl uppercase tracking-[0.2em] text-xs cursor-pointer">
              Configurar mi Tienda Dropshipping
           </LeadButton>
        </section>

      </div>
    </main>
  );
}