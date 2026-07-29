import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
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
  RefreshCw,
  XCircle,
  Clock,
  UserCheck,
  Building2,
  Wallet,
  ArrowUpRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tiendas Dropshipping Chile | Shopify & Dropi Local (Pago Contra Entrega COD 24-48h)',
  description: 'Desarrollamos tiendas dropshipping en Chile integradas con Dropi y Shopify. Vende sin inventario con proveedores locales en Santiago, despacho en 24-48h y recaudo Pago Contra Entrega.',
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
    'desarrollo tiendas shopify chile',
    'como hacer dropshipping en chile',
    'catalogo productos dropi chile'
  ].join(', '),
  alternates: {
    canonical: 'https://webunica.cl/tienda-dropshipping-shopify-y-dropi',
  },
  openGraph: {
    title: 'Tiendas Dropshipping Chile | Shopify & Dropi Local (COD 24-48h)',
    description: 'Vende online en Chile sin manejar inventario ni envíos. Conectamos tu tienda Shopify con Dropi Chile: catálogo local, despacho expreso en 24-48h y recaudo Pago Contra Entrega.',
    url: 'https://webunica.cl/tienda-dropshipping-shopify-y-dropi',
    siteName: 'Webunica',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: 'https://webunica.cl/pymes_hero_new.png',
        width: 1200,
        height: 630,
        alt: 'Tiendas Dropshipping Chile Shopify y Dropi Local',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiendas Dropshipping en Chile con Shopify & Dropi Local',
    description: 'Vende productos ganadores sin comprar inventario previo. Pago contra entrega COD en todo Chile.',
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
      question: "¿Qué es Dropi Chile y cómo se integra con mi tienda Shopify?",
      answer: "Dropi Chile es la plataforma logística y de proveedores locales líder en el país. Se conecta de forma nativa vía API con tu tienda Shopify. Al conectarla, puedes importar productos ganadores de bodegas chilenas con 1-clic. Cuando un cliente realiza una compra en tu sitio web, el pedido se envía automáticamente a Dropi para empaque y despacho."
    },
    {
      question: "¿Realmente puedo vender sin comprar stock o inventario por adelantado?",
      answer: "Sí, el 100% de la mercancía permanece guardada en las bodegas físicas de los proveedores en Santiago y regiones. Tú no compras el producto por adelantado. Únicamente pagas el costo mayorista del artículo una vez que tu cliente ya realizó el pedido en tu tienda, eliminando cualquier riesgo financiero de liquidez."
    },
    {
      question: "¿Cómo funciona el Pago Contra Entrega (COD - Cash on Delivery) en Chile?",
      answer: "El Pago Contra Entrega (COD) le permite al cliente comprar en tu tienda Shopify sin necesidad de ingresar tarjetas de crédito. El repartidor de la transportadora (Starken, Blue Express, etc.) cobra en efectivo o transferencia en la puerta de la casa del cliente al entregar el paquete. Este método multiplica por 3x las conversiones en Chile."
    },
    {
      question: "¿Cómo y cuándo recibo las ganancias de mis ventas en Dropi?",
      answer: "Dropi realiza liquidaciones semanales transparentes. Una vez que la transportadora cobra el pedido COD al cliente, Dropi descuenta el costo mayorista del producto y el costo del envío, y deposita tu ganancia neta directamente a tu cuenta bancaria en Chile."
    },
    {
      question: "¿Cuál es la diferencia entre el dropshipping local con Dropi y el dropshipping de China (AliExpress)?",
      answer: "El dropshipping de China demora de 15 a 30 días en llegar, genera altas devoluciones y solo permite pagos online con tarjeta. El dropshipping local con Dropi Chile entrega los paquetes en 24 a 48 horas en la Región Metropolitana (y 2 a 4 días en regiones) ofreciendo Pago Contra Entrega, lo que garantiza una satisfacción del cliente infinitamente superior."
    },
    {
      question: "¿Qué incluye el desarrollo de mi tienda dropshipping en Webunica?",
      answer: "Entregamos tu negocio e-commerce 100% listo para vender: diseño Shopify a medida, integración nativa con Dropi Chile, configuración de pasarelas de pago (Webpay, Mercado Pago, Flow, Fintoc), personalización de productos ganadores con fotos y videos generados con IA, dominio .cl y capacitación en video."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://webunica.cl/tienda-dropshipping-shopify-y-dropi/#service",
        "name": "Desarrollo de Tiendas Dropshipping con Dropi Chile",
        "serviceType": "E-Commerce Dropshipping & Local Fulfillment Integration",
        "description": "Desarrollo profesional de tiendas Shopify integradas con Dropi Chile para venta sin stock con Pago Contra Entrega (COD) y despacho en 24-48 horas.",
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
        "@type": "HowTo",
        "name": "Cómo Iniciar en Dropshipping con Shopify y Dropi Chile",
        "description": "Paso a paso para crear un negocio e-commerce sin inventario y con pago contra entrega en Chile.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Selecciona Productos Ganadores en Dropi",
            "text": "Explora miles de productos validados con stock disponible en bodegas locales de Santiago."
          },
          {
            "@type": "HowToStep",
            "name": "Conecta tu Tienda Shopify con Dropi API",
            "text": "Importa productos a tu catálogo con 1-clic manteniendo precios y stock sincronizados."
          },
          {
            "@type": "HowToStep",
            "name": "Promociona con Meta & TikTok Ads",
            "text": "Genera ventas atrayendo clientes con anuncios de alta conversión de tus productos estrella."
          },
          {
            "@type": "HowToStep",
            "name": "Despacho COD y Recibe tus Ganancias",
            "text": "Dropi envía el producto en 24-48h, cobra al cliente al entregar y transfiere las utilidades a tu banco."
          }
        ]
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
      highlight: "Ideal para iniciar sin inventario",
      desc: "Plataforma e-commerce completa lista para vender con catálogo Dropi Chile y Pago Contra Entrega activado.",
      features: [
        "Desarrollo completo Tienda Shopify Dropshipping Profesional",
        "Integración API oficial con plataforma Dropi Chile",
        "Dominio .cl propio y certificado de seguridad SSL",
        "Plantilla Premium optimizada para carga ultra rápida (< 1s)",
        "Creación de 5 colecciones de productos estratégicas",
        "Sistema de Pago Contra Entrega (COD) configurado",
        "Personalización de 1 Producto Estrella con fotos/videos IA",
        "Integración de pasarelas de pago (Webpay, Mercado Pago, Fintoc)",
        "Video explicativo exclusivo sobre generación de contenido IA",
        "Canal de atención directa por WhatsApp + Redes Sociales",
        "Soporte técnico y acompañamiento post-lanzamiento por 3 meses"
      ]
    },
    {
      name: "Dropshipping Avanzado & Escala",
      price: "$850.000",
      original: "$980.000",
      highlight: "Para escalar volumen de facturación",
      desc: "Ecosistema e-commerce de alta conversión optimizado para campañas masivas en TikTok & Meta Ads con CRO avanzado.",
      features: [
        "Todo lo incluido en el Plan Básico +",
        "Creación de hasta 15 colecciones inteligentes de catálogo",
        "Personalización de 3 Productos Ganadores con 5 fotos y 3 videos IA cada uno",
        "Todas las pasarelas de pago locales activadas (Webpay, Flow, Mercado Pago, Fintoc)",
        "Configuración de Meta Pixel, TikTok Pixel & Google Analytics 4 PRO",
        "Optimización de Tasa de Conversión (CRO) en carritos y checkout",
        "Diseño de Banners publicitarios y carruseles promocionales HD",
        "Estrategia de SEO técnico para colecciones de productos",
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
        {/* ZONA 1: HERO CYBERPUNK DROPI.CO CHILE                      */}
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
                  <span>Shopify + Dropi Chile (COD 24-48h)</span>
                </div>
              </div>
              
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[70px] font-black tracking-tighter leading-[0.92] mb-8 uppercase font-heading text-white">
                Vende Online Sin Manejar <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-emerald-400">
                  Inventarios ni Envíos
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                La solución definitiva para escalar tu e-commerce. Creamos tu <strong className="text-white font-bold">tienda profesional en Shopify</strong> conectada con el catálogo local de <strong className="text-white font-bold">Dropi Chile</strong>: productos en bodegas de Santiago, despacho rápido en 24-48 horas y recaudo Pago Contra Entrega (COD).
              </p>
              
              {/* Pitch Feature Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto lg:mx-0 mb-10 text-left">
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <Package className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">Cero Inventario</span>
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
                  <Wallet className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">Pagos Semanales</span>
                </div>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                 <LeadButton className="px-10 py-5 bg-purple-500 hover:bg-purple-400 text-zinc-950 font-black rounded-2xl transition-all shadow-xl shadow-purple-500/20 uppercase tracking-widest text-xs w-full sm:w-auto text-center cursor-pointer">
                    Cotizar Tienda Dropshipping <ArrowRight className="inline w-4 h-4 ml-2" />
                 </LeadButton>
                 <WhatsAppButton className="px-8 py-5 bg-[#25d366] text-white font-black rounded-2xl hover:bg-emerald-500 transition-all uppercase tracking-widest text-xs text-center w-full sm:w-auto flex items-center justify-center gap-2">
                    Consultar por WhatsApp
                 </WhatsAppButton>
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
                      DROPI API CHILE • LIVE SYNC
                    </span>
                  </div>

                  {/* Card Simulation Orders Feed */}
                  <div className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 p-5 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-black text-zinc-950 bg-emerald-400 px-2.5 py-1 rounded-md uppercase">
                        ORDEN COD CONFIRMADA
                      </span>
                      <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-950/80 border border-purple-800 px-2 py-0.5 rounded flex items-center gap-1">
                        <Truck className="w-3 h-3 text-purple-400" /> Blue Express 24h
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-white uppercase mb-1 font-heading">
                      Orden #8912 • $34.990 CLP
                    </h4>
                    <p className="text-xs text-zinc-400 mb-4 font-light italic">
                      Producto Ganador • Bodega Santiago Chile
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
        {/* ZONA 2: MODO DROPSHIPPER VS MODO PROVEEDOR (INSPIRADO EN DROPI) */}
        {/* ========================================================= */}
        <section className="py-20 bg-zinc-900/60 border-y border-zinc-800/80 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-400 mb-3 block">
                Soluciones para cada modelo de negocio
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white font-heading">
                ¿Cuál es tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">Punto de Partida?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* MODO DROPSHIPPER */}
              <div className="bg-zinc-950 border border-purple-500/30 rounded-[3rem] p-8 lg:p-12 hover:border-purple-400 transition-all flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple-500/20 text-purple-300 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-6">
                    <UserCheck className="w-4 h-4 text-purple-400" />
                    <span>Quiero ser Dropshipper</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black uppercase text-white mb-4 font-heading">
                    Vende Sin Comprar Stock
                  </h3>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6">
                    Creas tu tienda Shopify con Webunica, eliges productos validados del catálogo Dropi Chile y vendes a todo el país con Pago Contra Entrega. Tú pones la publicidad y el margen de ganancia; Dropi despacha y te liquida tus ganancias semanalmente.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2.5 text-xs font-mono text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Riesgo $0 en compras masivas</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs font-mono text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Catálogo con miles de SKUs locales</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs font-mono text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Despacho 24-48h con Pago Contra Entrega</span>
                    </li>
                  </ul>
                </div>
                <LeadButton className="w-full py-4 bg-purple-500 hover:bg-purple-400 text-zinc-950 font-black rounded-2xl uppercase tracking-widest text-xs transition-all text-center">
                  Crear Mi Tienda Dropshipper
                </LeadButton>
              </div>

              {/* MODO PROVEEDOR */}
              <div className="bg-zinc-950 border border-emerald-500/30 rounded-[3rem] p-8 lg:p-12 hover:border-emerald-400 transition-all flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-6">
                    <Building2 className="w-4 h-4 text-emerald-400" />
                    <span>Tengo Bodega o Productos</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black uppercase text-white mb-4 font-heading">
                    Multiplica tus Ventas como Proveedor
                  </h3>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6">
                    Si eres importador, fabricante o distribuidor con inventario físico en Chile, conectamos tu catálogo a Dropi para que cientos de tiendas dropshippers promocionen y vendan tu mercadería diariamente.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2.5 text-xs font-mono text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Fuerza de ventas externa masiva</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs font-mono text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Rotación acelerada de tu inventario</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs font-mono text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Cobro mayorista directo por producto</span>
                    </li>
                  </ul>
                </div>
                <LeadButton className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 text-emerald-400 border border-emerald-500/50 font-black rounded-2xl uppercase tracking-widest text-xs transition-all text-center">
                  Conectar como Proveedor
                </LeadButton>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 3: TABLA COMPARATIVA DROPI CHILE VS DROPSHIPPING CHINA */}
        {/* ========================================================= */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 mb-3 block">
              Comparativa de Modelos E-Commerce
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white font-heading">
              ¿Por qué el Dropshipping Local <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">supera a China?</span>
            </h2>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-[3rem] p-6 lg:p-10 shadow-2xl overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-zinc-800 text-xs font-mono uppercase text-zinc-400">
                  <th className="py-4 px-6">Característica</th>
                  <th className="py-4 px-6 text-purple-400 font-bold bg-purple-950/30 rounded-t-2xl">
                    ⚡ Dropi Chile (Local COD)
                  </th>
                  <th className="py-4 px-6 text-zinc-500">
                    ❌ China (AliExpress / China)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-xs sm:text-sm">
                <tr>
                  <td className="py-4 px-6 font-bold text-white">Tiempo de Despacho</td>
                  <td className="py-4 px-6 text-emerald-400 font-bold bg-purple-950/20">24 a 48 Horas en RM</td>
                  <td className="py-4 px-6 text-red-400">15 a 30 Días de espera</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-white">Método de Pago Preferido</td>
                  <td className="py-4 px-6 text-emerald-400 font-bold bg-purple-950/20">Pago Contra Entrega (COD)</td>
                  <td className="py-4 px-6 text-zinc-400">Solo Tarjeta de Crédito Online</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-white">Tasa de Conversión en Chile</td>
                  <td className="py-4 px-6 text-emerald-400 font-bold bg-purple-950/20">Alta (hasta 3x superior)</td>
                  <td className="py-4 px-6 text-red-400">Baja (abandono por desconfianza)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-white">Ubicación del Inventario</td>
                  <td className="py-4 px-6 text-emerald-400 font-bold bg-purple-950/20">Bodegas en Santiago y Regiones</td>
                  <td className="py-4 px-6 text-zinc-400">Bodegas lejanas en Asia</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-white">Liquidación de Ganancias</td>
                  <td className="py-4 px-6 text-emerald-400 font-bold bg-purple-950/20">Semanales a tu Banco en Chile</td>
                  <td className="py-4 px-6 text-zinc-400">Sujeto a pasarelas externas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 4: CÓMO FUNCIONA EN 4 PASOS (INSPIRADO EN DROPI.CO)  */}
        {/* ========================================================= */}
        <section className="py-24 bg-white text-zinc-950 rounded-[3.5rem] mx-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple-100 text-zinc-950 rounded-full font-mono font-bold text-xs uppercase mb-4">
                <Rocket className="w-4 h-4 text-purple-800" />
                <span>Flujo de Negocio Paso a Paso</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tighter text-zinc-950 font-heading">
                ¿Cómo funciona empezar a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-500 to-emerald-600">Generar Ingresos?</span>
              </h2>
              <p className="text-zinc-600 text-base sm:text-lg font-light mt-4 leading-relaxed">
                4 pasos sencillos para poner tu tienda Shopify a facturar con la logística de Dropi Chile.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Elige Productos Ganadores",
                  desc: "Explora el catálogo de Dropi Chile con miles de productos probados y stock físico disponible en bodegas locales.",
                  icon: Package,
                  color: "border-purple-200 bg-purple-50"
                },
                {
                  step: "02",
                  title: "Conecta Shopify & Dropi",
                  desc: "Con 1-clic importas productos a tu tienda Shopify mantenidos en sincronización automática en tiempo real.",
                  icon: RefreshCw,
                  color: "border-blue-200 bg-blue-50"
                },
                {
                  step: "03",
                  title: "Vende con Anuncios Ads",
                  desc: "Promociona tu tienda en TikTok & Meta Ads usando los videos e imágenes publicitarias generadas por IA.",
                  icon: Target,
                  color: "border-pink-200 bg-pink-50"
                },
                {
                  step: "04",
                  title: "Dropi Envía y Te Paga",
                  desc: "Dropi despacha en 24-48h, cobra al cliente al entregar y transfiere tu ganancia neta directo a tu banco.",
                  icon: Wallet,
                  color: "border-emerald-200 bg-emerald-50"
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className={`p-8 rounded-[2.5rem] border ${item.color} flex flex-col justify-between transition-all hover:scale-105`}>
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-3xl font-black font-mono text-zinc-950">{item.step}</span>
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-zinc-950 shadow-xs">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <h4 className="text-xl font-black uppercase text-zinc-950 mb-3 font-heading">{item.title}</h4>
                      <p className="text-xs text-zinc-600 leading-relaxed font-normal">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 5: LOS 5 PILARES TECNOLÓGICOS DE WEBUNICA           */}
        {/* ========================================================= */}
        <section id="pilares" className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple-950 text-purple-300 rounded-full font-mono font-bold text-xs uppercase mb-4 border border-purple-800">
              <Cpu className="w-4 h-4 text-purple-400" />
              <span>Ingeniería E-Commerce de Alto Rendimiento</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tighter text-white font-heading">
              5 Pilares para Facturar con <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-emerald-400">Shopify & Dropi</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg font-light mt-4 leading-relaxed">
              Desarrollamos tiendas dropshipping optimizadas para velocidad, conversión en celulares y recaudo confiable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-purple-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mb-6">
                  <Package className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">
                  1. Vender Sin Inventario Inicial
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                  Sin riesgo de capital. Accede a miles de SKUs locales y paga el costo mayorista solo cuando el pedido ya fue comprado por tu cliente.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Riesgo $0 en stock atascado</span>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-emerald-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6">
                  <Truck className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">
                  2. Pago Contra Entrega (COD)
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                  Despachos rápidos en 24-48 horas con recaudo en la puerta de la casa del comprador. Multiplica hasta por 3x las ventas en Chile.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Confianza de compra inmediata</span>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-cyan-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">
                  3. Integración Dropi API 1-Click
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                  Sincronización nativa de catálogos, imágenes, precios y órdenes enviadas automáticamente a la bodega del proveedor.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Despacho 100% automatizado</span>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-pink-400 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-pink-500/20 text-pink-400 rounded-2xl flex items-center justify-center mb-6">
                  <Bot className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">
                  4. Fotos & Videos IA de Productos
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                  Contenido multimedia exclusivo generado con IA para destacar en campañas publicitarias de Meta Ads y TikTok Ads.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-pink-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Diferenciación de otros vendedores</span>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-amber-400 transition-all flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mb-6">
                  <DollarSign className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">
                  5. Múltiples Pasarelas Locales & Fintoc 0% Comisión
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                  Acepta pagos online con Webpay Plus, Mercado Pago, Flow y transferencias automáticas sin comisión vía Fintoc para clientes que no usan efectivo.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Flexibilidad total de cobro en Chile</span>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 6: PLANES DE DESARROLLO DROPSHIPPING EN CHILE         */}
        {/* ========================================================= */}
        <section id="planes" className="py-24 max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-purple-400 mb-3 block">
              Inversión Inteligente • Pago en 6 Cuotas Sin Interés
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
                {/* 10% OFF Badge */}
                <div className="absolute top-6 right-6 bg-emerald-500 text-white text-[10px] font-mono font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                  10% OFF VIP
                </div>

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
                  Reclamar 10% Descuento - {plan.name}
                </LeadButton>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 7: PREGUNTAS FRECUENTES SOBRE DROPSHIPPING CHILE      */}
        {/* ========================================================= */}
        <div id="faq" className="rounded-[4rem] bg-white text-zinc-950 mx-4 overflow-hidden mt-20">
          <FAQSection 
            faqs={dropshippingFaqs}
            title="Dudas Frecuentes sobre Dropshipping & Dropi Chile"
            description="Respuestas claras para vender sin inventario con Shopify."
            ctaTitle="¿Listo para lanzar tu tienda online sin stock?"
            ctaDescription="Solicita una asesoría estratégica y propuesta a medida para tu nuevo negocio e-commerce."
            ctaLabel="Solicitar Asesoría Dropshipping"
          />
        </div>

        {/* ========================================================= */}
        {/* ZONA 8: CTA FINAL IMPACTANTE                              */}
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
           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <LeadButton className="px-16 py-7 bg-purple-400 text-zinc-950 font-black rounded-full hover:bg-purple-300 transition-all shadow-2xl uppercase tracking-[0.2em] text-xs cursor-pointer">
                Configurar mi Tienda Dropshipping
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
