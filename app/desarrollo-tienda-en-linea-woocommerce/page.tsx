import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import { Metadata } from 'next';
import { 
  ShoppingBag, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Globe,
  Bot,
  Sparkles,
  Cpu,
  Award,
  TrendingUp,
  Flame,
  DollarSign,
  Layers,
  Smartphone,
  Database,
  Building2,
  Server,
  Code,
  CreditCard
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Desarrollo de Tiendas WooCommerce en Chile | E-Commerce B2B & Sin Comisiones',
  description: 'Desarrollamos tiendas online y portales B2B con WooCommerce en Chile. 100% de propiedad del código, sin comisiones por venta, integradas con Webpay, ERPs (Bsale, Defontana) y Facturación SII.',
  keywords: [
    'desarrollo woocommerce chile',
    'tiendas online woocommerce chile',
    'desarrollo ecommerce wordpress chile',
    'experto woocommerce santiago',
    'crear tienda online sin comisiones',
    'ecommerce b2b chile woocommerce',
    'integracion erp bsale woocommerce',
    'integracion webpay woocommerce',
    'facturacion electronica woocommerce',
    'agencia woocommerce chile'
  ].join(', '),
  alternates: {
    canonical: 'https://webunica.cl/desarrollo-tienda-en-linea-woocommerce',
  },
  openGraph: {
    title: 'Desarrollo de Tiendas WooCommerce en Chile | Webunica',
    description: 'Toma el control total de tu e-commerce con WooCommerce. Tiendas de alto volumen, portales B2B, cero comisiones por venta e integración con ERPs chilenos.',
    url: 'https://webunica.cl/desarrollo-tienda-en-linea-woocommerce',
    siteName: 'Webunica',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: 'https://webunica.cl/woocommerce_new_hero.png',
        width: 1200,
        height: 630,
        alt: 'Desarrollo Tienda Online WooCommerce en Chile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desarrollo de Tiendas WooCommerce en Chile | B2B & Sin Comisiones',
    description: 'Potencia y libertad total en e-commerce. Integración nativa con Webpay, Starken, Shipit y ERPs locales.',
    images: ['https://webunica.cl/woocommerce_new_hero.png'],
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

export default function WooCommercePage() {
  const wooFaqs = [
    {
      question: "¿Qué ventajas comerciales ofrece WooCommerce frente a Shopify en Chile?",
      answer: "La ventaja principal es la libertad total de código y la rentabilidad. Con WooCommerce no pagas comisiones del 0.5% al 2% por cada venta que realizas ni tarifas mensuales fijas en dólares. Eres el único dueño de tu base de datos y puedes personalizar cualquier flujo B2B o integración ERP sin restricciones."
    },
    {
      question: "¿Cómo funciona el desarrollo de portales B2B y precios por cliente en WooCommerce?",
      answer: "Desarrollamos soluciones B2B a medida que permiten a tus clientes mayoristas iniciar sesión con su RUT, ver listas de precios personalizadas con descuentos por volumen, solicitar cotizaciones formales en PDF e ingresar pedidos con pago a 30 o 60 días."
    },
    {
      question: "¿Es posible integrar WooCommerce con ERPs locales como Bsale, Defontana u Obuma?",
      answer: "Sí. Poseemos amplia experiencia integrando WooCommerce mediante API con ERPs chilenos (Bsale, Defontana, Obuma, Laudus). Esto permite sincronizar stock en tiempo real entre tus sucursales físicas y la tienda web, emitiendo boletas y facturas electrónicas automáticas en el SII."
    },
    {
      question: "¿Cuántos productos puede soportar una tienda WooCommerce bien optimizada?",
      answer: "Con una arquitectura profesional de servidores cloud y optimización de base de datos MySQL (Redis/Varnish cache), WooCommerce puede gestionar sin problemas catálogos masivos de más de 25.000 SKUs con búsquedas instantáneas y filtros avanzados."
    },
    {
      question: "¿Cómo se gestionan los envíos con Starken, Blue Express y Chilexpress?",
      answer: "Integramos pasarelas logísticas como Shipit, Envia.com o plugins directos de couriers en Chile. Esto calcula automáticamente la tarifa de envío en el checkout según las dimensiones del paquete y la comuna de destino, imprimiendo las etiquetas de despacho en 1-click."
    },
    {
      question: "¿Es seguro procesar tarjetas de crédito y débito con Webpay Plus?",
      answer: "Totalmente seguro. Configuramos la pasarela oficial de Transbank Webpay Plus o Flow bajo certificados SSL cifrados de 256-bit. La transacción se realiza en los servidores seguros del procesador de pago y tú recibes los fondos directo en tu cuenta de empresa."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://webunica.cl/desarrollo-tienda-en-linea-woocommerce/#service",
        "name": "Desarrollo E-Commerce & B2B WooCommerce en Chile",
        "serviceType": "Enterprise WooCommerce Web Development & ERP Integration",
        "description": "Desarrollo profesional de tiendas en línea y portales B2B con WooCommerce. Control total de código, sin comisiones por venta e integración con ERPs chilenos.",
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
        "@id": "https://webunica.cl/desarrollo-tienda-en-linea-woocommerce/#faq",
        "mainEntity": wooFaqs.map((faq) => ({
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
      name: "WooCommerce INICIO",
      price: "$480.000",
      original: "$580.000",
      highlight: "Ideal para marcas y catálogos medianos",
      desc: "Plataforma e-commerce completa con cero comisiones por venta y control total de tu marca.",
      features: [
        "Configuración profesional WordPress + WooCommerce",
        "Conexión de dominio propio + SSL Cifrado 256-bit",
        "Plantilla Premium optimizada para alta velocidad",
        "Carga inicial de hasta 50 productos con variantes",
        "Pasarela Webpay Plus, Mercado Pago o Flow configurada",
        "Cierre de ventas e integración con WhatsApp",
        "Diseño 100% adaptado a móviles y tablets",
        "Capacitación en video para administración de productos",
        "Soporte técnico y garantía de 3 meses"
      ],
      time: "Entrega: Hasta 3 semanas"
    },
    {
      name: "WooCommerce EMPRESA",
      price: "$680.000",
      original: "$780.000",
      highlight: "Potencia y mayor volumen de venta",
      desc: "Estructura personalizada con diseño por secciones, multicourier y SEO técnico integrado.",
      features: [
        "Todo lo del Plan Inicio, más:",
        "Carga inicial de hasta 150 productos con variantes",
        "Diseño UI/UX a medida con Banners dinámicos",
        "Integración Multicourier (Starken, Blue Express, Shipit)",
        "Sistema de cupones de descuento y alertas de stock",
        "Optimización de velocidad de carga con WPRocket",
        "SEO On-Page técnico para categorías clave",
        "Integración Meta Pixel, TikTok Pixel & Google Analytics 4",
        "Soporte técnico prioritario por 4 meses"
      ],
      recommended: true,
      time: "Entrega: Hasta 5 semanas"
    },
    {
      name: "WooCommerce ADVANCED / B2B",
      price: "$980.000",
      original: "$1.150.000",
      highlight: "Catálogos masivos & Portales B2B",
      desc: "Solución de nivel empresarial para catálogos de alto volumen, precios diferenciados por RUT y ERPs.",
      features: [
        "Todo lo del Plan Empresa, más:",
        "Carga o migración de hasta 500 productos masivos",
        "Diseño a medida boutique en Figma / Adobe XD",
        "Filtros de búsqueda avanzada por facetado (FacetWP)",
        "Portal B2B con precios por cliente y cotizador PDF",
        "Integración con ERP (Bsale, Defontana, Obuma o Laudus)",
        "Fast 1-Page Checkout (Proceso de compra en 1 paso)",
        "Automatización de correos transaccionales postventa",
        "Soporte técnico VIP y garantía por 6 meses"
      ],
      time: "Entrega: Hasta 8 semanas"
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-sans antialiased overflow-x-hidden selection:bg-violet-400 selection:text-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-[20vh] lg:pt-40 pb-20">
        
        {/* ========================================================= */}
        {/* ZONA 1: HERO CYBERPUNK LUXURY VIOLET B2B                   */}
        {/* ========================================================= */}
        <section className="relative px-6 py-12 lg:py-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-violet-500/10 blur-[170px] rounded-full pointer-events-none -z-10" />
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-7 text-center lg:text-left">
              
              {/* Badges Pill Row */}
              <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-full shadow-lg font-black text-[11px] uppercase tracking-wider">
                  <Flame className="w-4 h-4 fill-white" />
                  <span>WooCommerce & B2B Chile 2026</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-300 text-[11px] font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-violet-400" />
                  <span>Sin Comisiones por Venta</span>
                </div>
              </div>
              
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-[72px] font-black tracking-tighter leading-[0.92] mb-8 uppercase font-heading text-white">
                Desarrollo E-Commerce <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400">
                  WooCommerce en Chile
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Construimos tiendas en línea y portales B2B de alto rendimiento con <strong className="text-white font-bold">WooCommerce y WordPress</strong>. Toma el control total de tu código sin pagar mensualidades recurrentes ni comisiones por venta, integrando ERPs locales y pasarelas chilenas.
              </p>
              
              {/* Pitch Feature Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto lg:mx-0 mb-10 text-left">
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <DollarSign className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-200">0% Comisión</span>
                </div>
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-violet-400 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">Portal B2B</span>
                </div>
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <Database className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">ERP Sync</span>
                </div>
                <div className="p-3 bg-zinc-900/80 border border-zinc-800 rounded-2xl flex items-center gap-2.5">
                  <CreditCard className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-200">Webpay Plus</span>
                </div>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                 <LeadButton className="px-10 py-5 bg-violet-600 hover:bg-violet-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-violet-600/20 uppercase tracking-widest text-xs w-full sm:w-auto text-center cursor-pointer">
                    Cotizar Tienda WooCommerce <ArrowRight className="inline w-4 h-4 ml-2" />
                 </LeadButton>
                 <a 
                   href="#pilares" 
                   className="px-8 py-5 border border-zinc-800 text-zinc-300 font-bold rounded-2xl hover:bg-zinc-900 hover:text-white transition-all uppercase tracking-widest text-xs text-center w-full sm:w-auto"
                 >
                    Ver Arquitectura 5 Pilares
                 </a>
              </div>

            </div>
            
            {/* Right Interactive Mockup Container */}
            <div className="lg:col-span-5 relative group">
               <div className="absolute -inset-4 bg-gradient-to-tr from-violet-600/20 to-indigo-500/10 rounded-[3.5rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
               
               <div className="relative bg-zinc-900 border border-zinc-800 rounded-[3rem] p-6 shadow-2xl overflow-hidden">
                  
                  {/* Top Bar Simulated WooCommerce Admin */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-violet-400 bg-violet-950/80 px-3 py-1 rounded-full border border-violet-800">
                      WOOCOMMERCE ENTERPRISE B2B
                    </span>
                  </div>

                  {/* Card Simulation SKU & Commissions */}
                  <div className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 p-5 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-black text-zinc-950 bg-violet-400 px-2.5 py-1 rounded-md uppercase">
                        CÓDIGO 100% PROPIO
                      </span>
                      <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded flex items-center gap-1">
                        <DollarSign className="w-3 h-3 text-emerald-400" /> 0% Comisiones
                      </span>
                    </div>

                    <h4 className="text-xl font-black text-white uppercase mb-1 font-heading">
                      Catálogo +25.000 SKUs
                    </h4>
                    <p className="text-xs text-zinc-400 mb-4 font-light italic">
                      Sincronización API ERP Bsale / Defontana en Tiempo Real
                    </p>

                    {/* Progress Bar Simulation */}
                    <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 mb-4 text-xs text-zinc-300">
                      <div className="flex items-center justify-between mb-1.5 text-violet-400 font-bold font-mono">
                        <span className="flex items-center gap-1.5"><TrendingUp className="w-3.5 h-3.5" /> Rendimiento & Caché Serverless:</span>
                        <span>99.2%</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="w-[99%] h-full bg-gradient-to-r from-violet-500 to-emerald-400 rounded-full" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-zinc-300">
                      <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800 text-center">
                        <span className="text-zinc-500 block">Fast Checkout:</span>
                        <strong className="text-white text-xs font-bold">1-Page Active</strong>
                      </div>
                      <div className="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800 text-center">
                        <span className="text-zinc-500 block">Facturación SII:</span>
                        <strong className="text-emerald-400 text-xs font-bold">Automatizada</strong>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge Row */}
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between p-2.5 bg-zinc-950/60 rounded-xl border border-zinc-800">
                      <span className="flex items-center gap-2 text-zinc-300">
                        <Building2 className="w-3.5 h-3.5 text-violet-400" />
                        Precios por Cliente B2B (RUT)
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded">HABILITADO</span>
                    </div>

                    <div className="flex items-center justify-between p-2.5 bg-zinc-950/60 rounded-xl border border-zinc-800">
                      <span className="flex items-center gap-2 text-zinc-300">
                        <CreditCard className="w-3.5 h-3.5 text-cyan-400" />
                        Webpay Plus & Flow Chile
                      </span>
                      <span className="text-[10px] text-cyan-400 font-bold bg-cyan-950/60 px-2 py-0.5 rounded">OFICIAL</span>
                    </div>
                  </div>

               </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 2: LOS 5 PILARES DE WOOCOMMERCE ENTERPRISE           */}
        {/* ========================================================= */}
        <section id="pilares" className="py-24 bg-white text-zinc-950 rounded-[3.5rem] mx-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-violet-100 text-zinc-950 rounded-full font-mono font-bold text-xs uppercase mb-4">
                <Cpu className="w-4 h-4 text-violet-800" />
                <span>Ingeniería Digital & Escalabilidad Comercial</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tighter text-zinc-950 font-heading">
                5 Pilares que Hacen Único a <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">WooCommerce</span>
              </h2>
              <p className="text-zinc-600 text-base sm:text-lg font-light mt-4 leading-relaxed">
                Combina la libertad de poseer el 100% de tu código con la infraestructura más flexible del mercado para catálogos masivos y venta mayorista.
              </p>
            </div>

            {/* PILAR 1: CERO COMISIONES & CÓDIGO PROPIO */}
            <div className="mb-20 bg-zinc-50 border border-zinc-200/80 rounded-[3rem] p-8 lg:p-14 shadow-sm relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-200/80">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-violet-600 rounded-2xl flex items-center justify-center text-white shadow-md">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-violet-800 uppercase tracking-widest">Pilar 01</span>
                    <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                      1. Código 100% Propio & Cero Comisiones por Venta
                    </h3>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-violet-100 text-violet-900 rounded-full text-xs font-mono font-black uppercase">
                  Libertad Total
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    t: "Sin Cobros por Transacción",
                    d: "Tus márgenes de ganancia se mantienen intactos. No pagas comisiones por cada venta realizada en tu tienda."
                  },
                  {
                    t: "Propiedad de la Base de Datos",
                    d: "La información de tus clientes y el historial de ventas son 100% de tu propiedad, sin restricciones."
                  },
                  {
                    t: "Sin Cobros Fijos en Dólares",
                    d: "Elimina las mensualidades recurrentes en divisas extranjeras manteniendo la tienda en tu propio servidor."
                  },
                  {
                    t: "Personalización Ilimitada",
                    d: "Modifica cualquier flujo comercial o checkout sin las barreras cerradas de plataformas en la nube."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-xs hover:border-violet-500 transition-all flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 bg-violet-50 text-violet-800 rounded-xl flex items-center justify-center font-mono font-bold text-xs mb-4">
                        0{idx + 1}
                      </div>
                      <h4 className="text-base font-black uppercase text-zinc-950 mb-2 font-heading">{item.t}</h4>
                      <p className="text-xs text-zinc-600 font-normal leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PILAR 2: MODULO B2B & COTIZADORES */}
            <div className="mb-20 bg-zinc-950 text-white rounded-[3rem] p-8 lg:p-14 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[140px] pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-zinc-800 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-violet-500 rounded-2xl flex items-center justify-center text-white shadow-md">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest">Pilar 02</span>
                    <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-white font-heading">
                      2. E-Commerce B2B & Precios Diferenciados por RUT
                    </h3>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-violet-500 text-white rounded-full text-xs font-mono font-black uppercase">
                  Venta Mayorista Pro
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                
                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-violet-400/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-violet-500/20 text-violet-400 rounded-2xl flex items-center justify-center mb-6">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">
                      Portal Mayorista con Login por RUT
                    </h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                      Permite que tus distribuidores inicien sesión y accedan a su catálogo de precios preferenciales según su categoría.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-violet-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Listas de precio personalizadas</span>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-6">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">
                      Cotizador PDF Automático
                    </h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                      Genera cotizaciones comerciales formales en PDF listas para aprobación previa antes de enviar la orden de compra.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Descarga de cotización instantánea</span>
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl hover:border-cyan-500/50 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 bg-cyan-500/20 text-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                      <CreditCard className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-black uppercase text-white mb-3 font-heading">
                      Venta con Factura Electrónica (SII)
                    </h4>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                      Captura automática de Razón Social, RUT, Giro y Dirección Tributaria para emisión de factura de inmediato.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Validación nativa del RUT chileno</span>
                  </div>
                </div>

              </div>
            </div>

            {/* PILAR 3: INTEGRACIÓN ERP CHILE (BSALE, DEFONTANA, OBUMA) */}
            <div className="mb-20 bg-violet-950/20 border border-violet-200/80 rounded-[3rem] p-8 lg:p-14 shadow-sm relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-violet-200/80">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-violet-600 text-white rounded-2xl flex items-center justify-center shadow-md">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-violet-800 uppercase tracking-widest">Pilar 03</span>
                    <h3 className="text-2xl lg:text-4xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                      3. Integración Nativa con ERPs Chilenos
                    </h3>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-violet-600 text-white rounded-full text-xs font-mono font-black uppercase">
                  Bsale / Defontana / Obuma
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="bg-white p-8 rounded-3xl border border-violet-100 shadow-sm flex items-start gap-5">
                  <div className="w-12 h-12 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-600 shrink-0">
                    <Database className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase text-zinc-950 mb-2 font-heading">
                      Sincronización de Stock Omnicanal
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                      Conecta tus tiendas físicas y bodegas con la tienda en línea. Cada venta en el local descuenta el stock web de inmediato.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-violet-100 shadow-sm flex items-start gap-5">
                  <div className="w-12 h-12 bg-violet-50 rounded-2xl flex items-center justify-center text-violet-600 shrink-0">
                    <Server className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase text-zinc-950 mb-2 font-heading">
                      Emisión Automática de Boletas y Facturas
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                      Envío automático del documento tributario electrónico firmado al correo del cliente tras confirmarse el pago.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* PILAR 4 & 5: RENDIMIENTO CATÁLOGOS MASIVOS & COURIERS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* PILAR 4: CATÁLOGOS MASIVOS */}
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-[3rem] p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-zinc-950 text-violet-400 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                    4. Velocidad WPRocket & Catálogos +20k SKUs
                  </h3>
                </div>

                <ul className="space-y-4">
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Caché de Servidor Redis & Varnish</strong>
                    <p className="text-xs text-zinc-600 font-normal">Tiempos de respuesta ultrarrápidos para evitar abandono de carrito.</p>
                  </li>
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Búsquedas Avanzadas por Filtros Facetados</strong>
                    <p className="text-xs text-zinc-600 font-normal">Permite a los usuarios filtrar por marca, atributo, compatibilidad o rango de precio en milisegundos.</p>
                  </li>
                </ul>
              </div>

              {/* PILAR 5: LOGÍSTICA & MULTIPARESALAS */}
              <div className="bg-zinc-50 border border-zinc-200/80 rounded-[3rem] p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-zinc-950 text-emerald-400 rounded-xl flex items-center justify-center">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tight text-zinc-950 font-heading">
                    5. Pasarelas Chilenas & Cotización de Envíos
                  </h3>
                </div>

                <ul className="space-y-4">
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Webpay Plus, Flow & Mercado Pago</strong>
                    <p className="text-xs text-zinc-600 font-normal">Ofrece cuotas sin interés y las pasarelas preferidas por los compradores en Chile.</p>
                  </li>
                  <li className="p-4 bg-white rounded-2xl border border-zinc-200/60">
                    <strong className="text-sm font-black uppercase block text-zinc-950 mb-1">Cálculo de Despacho con Starken & Blue Express</strong>
                    <p className="text-xs text-zinc-600 font-normal">Cotización automática en tiempo real de fletes según peso y comuna de destino.</p>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 3: PLANES DE DESARROLLO WOOCOMMERCE CHILE             */}
        {/* ========================================================= */}
        <section id="pricing" className="py-24 max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-violet-400 mb-3 block">
              Inversión Transparente • Sin Comisiones
            </span>
            <h2 className="text-4xl lg:text-7xl font-black mb-4 uppercase tracking-tighter text-white font-heading">
              Planes <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400">WooCommerce 2026</span>
            </h2>
            <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto">
              Sin límites de crecimiento. La flexibilidad de WordPress aplicada a tu éxito comercial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`rounded-[3rem] p-8 lg:p-10 flex flex-col justify-between relative transition-all duration-300 ${
                  plan.recommended 
                    ? 'bg-zinc-900 border-2 border-violet-500 shadow-2xl shadow-violet-500/10' 
                    : 'bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {/* 10% Discount Badge */}
                <div className="absolute top-6 right-6 bg-emerald-500 text-white text-[10px] font-mono font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                  10% OFF
                </div>

                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-[10px] font-mono font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                    MÁS ELEGIDO POR EMPRESAS
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <span className="px-3.5 py-1 bg-zinc-950 border border-zinc-800 text-violet-400 text-[11px] font-mono font-bold rounded-full uppercase tracking-wider">
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
                      <span className="text-4xl font-black text-violet-400 font-heading">{plan.price}</span>
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
                      ? 'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/20' 
                      : 'bg-zinc-950 hover:bg-zinc-800 text-white border border-zinc-800'
                  }`}>
                    Obtener 10% Descuento
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
        {/* ZONA 4: PREGUNTAS FRECUENTES SOBRE WOOCOMMERCE CHILE       */}
        {/* ========================================================= */}
        <div id="faq" className="rounded-[4rem] bg-white text-zinc-950 mx-4 overflow-hidden mt-20">
          <FAQSection 
            faqs={wooFaqs}
            title="Dudas sobre WooCommerce & E-Commerce B2B"
            description="Información clave para elegir la plataforma más flexible y escalable."
            ctaTitle="¿Listo para acelerar tus ventas sin comisiones?"
            ctaDescription="Agenda una sesión técnica gratuita para evaluar tu proyecto o migración hacia WooCommerce."
            ctaLabel="Agendar Evaluación WooCommerce"
          />
        </div>

        {/* ========================================================= */}
        {/* ZONA 5: CTA FINAL IMPACTANTE                              */}
        {/* ========================================================= */}
        <section className="py-32 text-center px-6">
           <h2 className="text-5xl lg:text-8xl font-black mb-10 tracking-tighter uppercase leading-[0.85] text-white font-heading">
              TOMA EL CONTROL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400">
                de tu éxito digital.
              </span>
           </h2>
           <p className="text-zinc-400 text-xl mb-14 max-w-2xl mx-auto font-light leading-relaxed">
              Construye una tienda en línea verdaderamente tuya. Sin ataduras, sin comisiones por venta y lista para escalar.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <LeadButton className="px-16 py-7 bg-violet-600 text-white font-black rounded-full hover:bg-violet-500 transition-all shadow-2xl uppercase tracking-[0.2em] text-xs cursor-pointer">
                Solicitar Cotización Gratis
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
ión WooCommerce"
          />
        </div>
      </div>
    </div>
  );
}
