import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import ShopifyPricingSection from '@/components/sections/shopify-pricing-section';
import ViccaTransformationShowcase from '@/components/sections/vicca-transformation-showcase';
import ShopifyStackedHeroCards from '@/components/ui/shopify-stacked-hero-cards';
import ShopifyAppsCarousel from '@/components/sections/shopify-apps-carousel';
import ShopifyInfiniteCasesCarousel from '@/components/sections/shopify-infinite-cases-carousel';
import ShopifyAiAssistantSimulator from '@/components/sections/shopify-ai-assistant-simulator';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Smartphone, 
  Search, 
  BarChart3, 
  ShoppingBag, 
  CreditCard, 
  Truck, 
  Puzzle, 
  Check, 
  ChevronRight,
  Zap,
  TrendingUp,
  Rocket,
  MessageSquare,
  Star,
  Users,
  Award,
  Layers,
  Tag,
  Crown
} from 'lucide-react';

export const metadata = {
  title: 'Desarrollo de Tiendas Shopify en Chile | Agencia Partner',
  description: 'Agencia de desarrollo de tiendas Shopify en Chile. Creamos tu e-commerce listo para vender y crecer: Webpay, Mercado Pago, Flow, Starken, BlueExpress, Bsale y Boleta SII.',
  keywords: [
    'desarrollo tiendas shopify chile',
    'agencia shopify partner chile',
    'diseño tienda shopify chile',
    'crear tienda shopify chile',
    'pasarelas de pago shopify chile',
    'factura electronica shopify',
    'integracion erp shopify',
    'expertos shopify chile',
    'migrar a shopify chile'
  ].join(', '),
  alternates: {
    canonical: 'https://webunica.cl/desarrollo-tiendas-shopify-en-chile',
  },
  openGraph: {
    title: 'Desarrollo de Tiendas Shopify en Chile | Agencia Partner',
    description: 'Creamos tiendas Shopify listas para vender y crecer en Chile. Integraciones locales con Webpay, Mercado Pago, Starken, BlueExpress y Boleta SII.',
    url: 'https://webunica.cl/desarrollo-tiendas-shopify-en-chile',
    siteName: 'Webunica',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: 'https://webunica.cl/clientes-2/vicca.cl.png',
        width: 1200,
        height: 630,
        alt: 'Desarrollo de Tiendas Shopify en Chile - Webunica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desarrollo de Tiendas Shopify en Chile | Agencia Partner',
    description: 'Desarrollo e-commerce Shopify profesional en Chile con integraciones locales.',
    images: ['https://webunica.cl/clientes-2/vicca.cl.png'],
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

export default function ShopifyEnChilePage() {
  const shopifyFaqs = [
    {
      question: "¿Qué incluye cada plan de desarrollo Shopify?",
      answer: "Todos los planes incluyen setup completo de Shopify, diseño adaptado a tu marca, carga inicial de catálogo, configuración de pasarelas de pago (Webpay/Flow/Mercado Pago), métodos de despacho en Chile, diseño 100% mobile-first, capacitación de uso y período de soporte técnico postlanzamiento."
    },
    {
      question: "¿Cuánto cuesta la suscripción mensual de Shopify?",
      answer: "Shopify cobra un plan mensual independiente (Basic desde aprox $19 USD/mes en plan anual). Nosotros te asesoramos para elegir la versión adecuada según tu volumen de ventas."
    },
    {
      question: "¿Qué aplicaciones se pagan aparte?",
      answer: "La mayoría de tiendas estándar operan con aplicaciones gratuitas o incluidas. Si necesitas herramientas avanzadas de Klaviyo, ERPs específicos o multi-courier con Carrier Calculated Shipping (CCS), te explicaremos transparente los costos antes de iniciar."
    },
    {
      question: "¿Puedo migrar mi tienda desde WooCommerce, Jumpseller o Magento?",
      answer: "Sí, realizamos migraciones integrales de productos, categorías, imágenes e historial de clientes preservando las URLs y redirecciones 301 para no perder tu posicionamiento SEO en Google."
    },
    {
      question: "¿Necesito tener logo, productos y textos listos para empezar?",
      answer: "Es ideal contar con tu logotipo y lista base de productos. Si no los tienes listos, nuestro equipo te guía con plantillas de carga masiva y estructuras sugeridas."
    },
    {
      question: "¿Integran medios de pago y despacho locales en Chile?",
      answer: "De forma nativa. Configuramos Webpay Plus, Mercado Pago, Flow, Ventipay, así como integraciones de despacho con Starken, BlueExpress, Chilexpress y Shipit."
    },
    {
      question: "¿Pueden conectar la tienda con mi ERP o facturación ante el SII?",
      answer: "Sí. Integramos Shopify con Bsale, Obuma, Defontana, Laudus o conectores certificados para emitir boletas y facturas electrónicas automáticamente en cada venta."
    },
    {
      question: "¿Qué soporte entregan después de publicar la tienda?",
      answer: "Entregamos entre 30 y 90 días de soporte técnico postlanzamiento (según plan) para resolver dudas, realizar ajustes menores y garantizar que tu tienda funcione 100% fluida."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://webunica.cl/#agencia",
        "name": "Webunica - Agencia Desarrollo Shopify Chile",
        "url": "https://webunica.cl/desarrollo-tiendas-shopify-en-chile",
        "logo": "https://webunica.cl/logo-webunica.png.webp",
        "image": "https://webunica.cl/clientes-2/vicca.cl.png",
        "priceRange": "$$",
        "telephone": "+56991089527",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Santiago",
          "addressRegion": "Región Metropolitana",
          "addressCountry": "CL"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "48",
          "bestRating": "5",
          "worstRating": "1"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Chile"
        }
      },
      {
        "@type": "Service",
        "@id": "https://webunica.cl/desarrollo-tiendas-shopify-en-chile/#service",
        "name": "Desarrollo de Tiendas Shopify en Chile",
        "serviceType": "E-commerce Web Development",
        "provider": {
          "@id": "https://webunica.cl/#agencia"
        },
        "areaServed": "CL",
        "description": "Servicios profesionales de diseño, desarrollo, migración y optimización CRO para tiendas Shopify en Chile con pasarelas de pago y facturación SII."
      },
      {
        "@type": "FAQPage",
        "@id": "https://webunica.cl/desarrollo-tiendas-shopify-en-chile/#faq",
        "mainEntity": shopifyFaqs.map((faq) => ({
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

  const trustBadges = [
    { text: "+100 Tiendas desarrolladas", icon: ShoppingBag },
    { text: "Shopify Partner verificado", icon: Award },
    { text: "Diseño Mobile-First 100%", icon: Smartphone },
    { text: "Soporte post lanzamiento & capacitación", icon: ShieldCheck },
    { text: "Analítica & SEO técnico incluidos", icon: BarChart3 },
  ];

  const benefitCards = [
    {
      title: "Diseño que convierte (CRO)",
      desc: "Estructuramos tu tienda para guiar al cliente hasta la compra, eliminando fricción y aumentando tu tasa de conversión.",
      icon: TrendingUp,
      badge: "Ventas & UX"
    },
    {
      title: "Pagos y facturación automática",
      desc: "Integramos Webpay, Flow, Mercado Pago y conectamos la emisión de boletas y facturas electrónicas ante el SII.",
      icon: CreditCard,
      badge: "Finanzas Chile"
    },
    {
      title: "Despachos en Chile en tiempo real",
      desc: "Conectamos Starken, BlueExpress, Chilexpress y multi-couriers para configurar tarifas dinámicas según dirección, peso y cobertura.",
      icon: Truck,
      badge: "Logística"
    },
    {
      title: "Sincronización & ERP",
      desc: "Sincronizamos inventario y ventas con tu ERP (Bsale, Obuma, Defontana, Laudus) para automatizar tu operación.",
      icon: Puzzle,
      badge: "Automatización"
    },
    {
      title: "Analítica y campañas publicitarias",
      desc: "Medición confiable con GA4, Meta Pixel, Conversion API y Merchant Center para tomar decisiones comerciales reales.",
      icon: BarChart3,
      badge: "Medición 360°"
    },
    {
      title: "SEO técnico de alto rendimiento",
      desc: "Estructura optimizada, código limpio, metadatos y velocidad mobile-first para ser rastreada, indexada y ganar tráfico orgánico desde su lanzamiento.",
      icon: Search,
      badge: "Tráfico Orgánico"
    },
  ];

  const guaranteeItems = [
    { title: "Revisión & pruebas QA", desc: "Testeo completo de checkout, navegación móvil y pasarelas antes de salir en vivo." },
    { title: "Capacitación 1 a 1", desc: "Entrenamiento práctico para que tú y tu equipo operen la tienda autónomamente." },
    { title: "30 a 90 días de soporte", desc: "Acompañamiento técnico post lanzamiento para responder dudas y hacer ajustes." },
    { title: "Entrega total de accesos", desc: "Propiedad 100% tuya del dominio, tienda e integraciones sin amarres." },
    { title: "Alcance claro desde el inicio", desc: "Presupuesto y plazos cerrados sin cobros sorpresa durante el desarrollo." },
  ];

  const caseStudies = [
    {
      name: "Vicca",
      category: "Moda & Ergonomía",
      image: "/clientes-2/vicca.cl.png",
      bullets: [
        "Diseño Liquid a medida",
        "Integración Webpay & Flow",
        "Despacho por zonas en Chile"
      ],
      link: "https://vicca.cl/"
    },
    {
      name: "PHY Waters",
      category: "Purificadores de Agua & Bienestar",
      image: "/clientes-2/phywaters.com.png",
      bullets: [
        "Diseño e-commerce de alta conversión",
        "Integración Webpay y despachos regionales",
        "Optimización CRO en ficha de producto"
      ],
      link: "https://phywaters.com/"
    },
    {
      name: "Altavista Chile",
      category: "Equipamiento Industrial & Outdoor",
      image: "/clientes-2/altavistachile.cl.png",
      bullets: [
        "Migración completa a Shopify",
        "Catálogo avanzado + Integración ERP",
        "SEO técnico y analítica avanzada"
      ],
      link: "https://altavistachile.cl/"
    }
  ];

  const crossSellServices = [
    { title: "SEO para E-commerce", desc: "Posiciona tu catálogo en Google para atraer clientes calificados de forma orgánica.", icon: Search },
    { title: "Publicidad Meta & Google Ads", desc: "Campañas orientadas a retorno de inversión (ROAS) con medición avanzada.", icon: TrendingUp },
    { title: "Email Marketing con Klaviyo", desc: "Automatizaciones de bienvenida y carritos abandonados para aumentar recompras.", icon: Sparkles },
    { title: "Soporte & Mantenimiento", desc: "Asistencia técnica continua, actualización de banners y optimización constante.", icon: ShieldCheck },
    { title: "Optimización CRO Avanzada", desc: "Pruebas y mejoras en la ficha de producto para maximizar el ticket promedio.", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-zinc-950 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-[20vh] lg:pt-40">
        
        {/* ========================================================= */}
        {/* ZONA 1: HERO (SEDUCIR Y ACLARAR)                          */}
        {/* ========================================================= */}
        <section id="inicio" className="relative pt-0 pb-6 lg:pb-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-violet-600/10 blur-[130px] rounded-full pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none -z-10 -translate-x-1/3" />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Content Column */}
              <div className="lg:col-span-7 text-center lg:text-left">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-6 bg-violet-50 border border-violet-200/80 rounded-full shadow-sm">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600"></span>
                  </span>
                  <span className="text-[11px] font-mono font-bold tracking-widest text-violet-700 uppercase">
                    Agencia Shopify Partner en Chile
                  </span>
                </div>
                
                <h1 className="text-[2rem] xs:text-3xl sm:text-4xl lg:text-[58px] font-black tracking-tighter leading-[0.92] mb-6 uppercase text-zinc-950 font-heading">
                  Creamos tu tienda Shopify <br className="hidden sm:inline" />
                  lista para <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-[#FF0085]">vender y crecer</span> en Chile
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl text-zinc-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                  Diseñamos tiendas Shopify preparadas para vender en Chile, con pagos locales, despacho, facturación electrónica, analítica, SEO y una experiencia de compra optimizada.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-4">
                  <LeadButton className="px-8 py-5 bg-[#2C02A5] text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-violet-900 transition-all shadow-xl shadow-violet-900/25 active:scale-95 text-center flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer">
                    Solicitar evaluación Shopify <ArrowRight className="w-4 h-4" />
                  </LeadButton>

                  <a 
                    href="#planes" 
                    className="px-8 py-5 border-2 border-zinc-200 text-zinc-900 font-black rounded-2xl hover:bg-zinc-50 hover:border-zinc-300 transition-all uppercase tracking-widest text-xs text-center w-full sm:w-auto"
                  >
                    Ver planes
                  </a>
                </div>

                {/* Trust guarantee microcopy */}
                <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono text-zinc-500 mb-4">
                  <Clock className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Evaluamos tu proyecto y te recomendamos el plan adecuado, sin compromiso.</span>
                </div>
              </div>

              {/* Right Mockup Stack Column */}
              <div className="lg:col-span-5 w-full">
                <ShopifyStackedHeroCards />
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 2: FRANJA COMPACTA DE CONFIANZA                      */}
        {/* ========================================================= */}
        <section className="py-6 bg-zinc-900 text-white border-y border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2.5 p-2">
                <Zap className="w-5 h-5 text-violet-400 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-zinc-200">Especialistas en Shopify para Chile</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2.5 p-2">
                <CreditCard className="w-5 h-5 text-pink-400 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-zinc-200">Pagos, logística y facturación local</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2.5 p-2">
                <Smartphone className="w-5 h-5 text-purple-400 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-zinc-200">Diseño mobile-first</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2.5 p-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-zinc-200">Capacitación y soporte incluidos</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 2: CASOS DE ÉXITO SHOPIFY (CARRUSEL JUSTO DEBAJO DEL HERO) */}
        {/* ========================================================= */}
        <section className="py-6 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Carrusel de Casos con todos los proyectos */}
            <ShopifyInfiniteCasesCarousel />
          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 4: PROBLEMAS QUE NECESITA RESOLVER EL CLIENTE        */}
        {/* ========================================================= */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-pink-100 text-pink-700 text-[11px] font-mono font-bold uppercase tracking-widest rounded-full mb-4">
                <CheckCircle2 className="w-3.5 h-3.5" /> Diagnóstico Comercial
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 tracking-tighter uppercase font-heading">
                ¿Qué necesitas resolver con tu tienda Shopify?
              </h2>
              <p className="text-zinc-600 text-base sm:text-lg font-light mt-3">
                Identifica en qué etapa está tu negocio y descubre qué solución Shopify necesitas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Necesitas comenzar a vender online", desc: "Quieres lanzar tu e-commerce profesional desde cero con una tienda lista para recibir pagos en Chile." },
                { title: "Tu tienda actual no genera suficiente confianza", desc: "Tienes visitas pero pocas compras. Necesitas mejorar la UX/UI, velocidad y fichas de producto." },
                { title: "Quieres mejorar la experiencia móvil", desc: "Gran parte de las visitas ocurre desde celulares; necesitas una navegabilidad mobile-first fluida." },
                { title: "Necesitas integrar pagos, despacho o facturación", desc: "Requieres conectar Webpay, Starken, BlueExpress o boleta electrónica SII sin complicaciones." },
                { title: "Tu catálogo requiere una mejor organización", desc: "Tienes muchos productos y necesitas estructurar colecciones inteligentes, variantes y buscador rápido." },
                { title: "Necesitas conectar Shopify con un ERP", desc: "Requieres sincronización automatizada de inventario y ventas con Bsale, Obuma, Defontana u otros." }
              ].map((item, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-200/90 rounded-3xl p-6 hover:border-violet-300 hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-full bg-violet-100 text-violet-700 font-mono font-bold text-xs flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950 mb-2 leading-snug font-heading">{item.title}</h3>
                  <p className="text-sm text-zinc-600 font-normal leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 6: PLANES Y PRECIOS + ORIENTACIÓN PREVIA            */}
        {/* ========================================================= */}
        <section id="planes" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            {/* Orientación para Escoger un Plan */}
            <div className="bg-zinc-900 text-white rounded-3xl p-8 mb-16 border border-zinc-800">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-xs font-mono font-bold text-pink-400 uppercase tracking-widest block mb-2">
                  Guía de Selección
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-heading">
                  ¿Qué plan Shopify se adapta a tu proyecto?
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <a href="#plan-prende" className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all block text-left">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase block mb-1">"Estoy comenzando"</span>
                  <h4 className="text-sm font-bold text-white mb-1">Recomendación: Plan Prende</h4>
                  <p className="text-xs text-zinc-400">Setup completo profesional para lanzar sin complicaciones.</p>
                </a>

                <a href="#plan-full" className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all block text-left">
                  <span className="text-xs font-mono font-bold text-purple-400 uppercase block mb-1">"Necesito una tienda más completa"</span>
                  <h4 className="text-sm font-bold text-white mb-1">Recomendación: Plan Full</h4>
                  <p className="text-xs text-zinc-400">Boleta SII, envíos y secciones personalizadas.</p>
                </a>

                <a href="#plan-conversion" className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all block text-left">
                  <span className="text-xs font-mono font-bold text-blue-400 uppercase block mb-1">"Ya vendo y quiero aumentar la conversión"</span>
                  <h4 className="text-sm font-bold text-white mb-1">Recomendación: Plan Conversión</h4>
                  <p className="text-xs text-zinc-400">CRO avanzado, Klaviyo y migración masiva.</p>
                </a>

                <a href="#custom-elite" className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all block text-left">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase block mb-1">"Diseño exclusivo o ERP"</span>
                  <h4 className="text-sm font-bold text-white mb-1">Recomendación: Custom Elite</h4>
                  <p className="text-xs text-zinc-400">Diseño Figma a medida e integraciones corporativas.</p>
                </a>
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-violet-100 text-violet-700 text-[11px] font-mono font-bold uppercase tracking-widest rounded-full mb-4">
                <Tag className="w-3.5 h-3.5" /> Inversión Transparente
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 tracking-tighter uppercase font-heading">
                Elige el plan ideal para tu proyecto
              </h2>
              <p className="text-zinc-600 text-base sm:text-lg font-light mt-3">
                Tres alternativas claras, diseñadas para diferentes etapas de crecimiento.
              </p>
            </div>

            {/* 3 Main Plans Summary Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              
              {/* PLAN PRENDE */}
              <div id="plan-prende" className="bg-white rounded-[2.5rem] p-8 border border-zinc-200 shadow-lg flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full inline-block mb-4">
                    Lanzamiento
                  </span>
                  <h3 className="text-2xl font-black uppercase text-zinc-950 mb-1 font-heading">Plan Prende</h3>
                  <p className="text-sm text-zinc-600 font-medium mb-6">Para empezar a vender con tienda funcional y profesional.</p>
                  
                  <div className="mb-6 pb-6 border-b border-zinc-100">
                    <span className="text-4xl font-black text-zinc-950 font-mono">$580.000</span>
                    <span className="text-xs font-bold text-zinc-400 uppercase ml-2">+ IVA</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {[
                      "Diseño basado en plantilla premium",
                      "Carga inicial de hasta 70 productos",
                      "Medios de pago (Webpay / Flow / MP)",
                      "Despacho con tarifas fijas / zonas",
                      "Diseño Mobile-First 100%",
                      "Capacitación básica de administración",
                      "30 días de soporte técnico postlanzamiento"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-zinc-800 font-medium">
                        <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <LeadButton className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all text-center cursor-pointer">
                  Evaluar mi proyecto con este plan
                </LeadButton>
              </div>

              {/* PLAN FULL (DESTACADO / MÁS ELEGIDO) */}
              <div id="plan-full" className="bg-gradient-to-b from-violet-900 via-[#2C02A5] to-zinc-950 text-white rounded-[2.5rem] p-8 border-2 border-[#FF0085] shadow-2xl relative flex flex-col justify-between scale-[1.02] transform">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF0085] text-white text-[10px] font-mono font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg text-center whitespace-nowrap">
                  ★ MÁS ELEGIDO • PREPARADO PARA CAMPAÑAS Y CRECIMIENTO
                </div>

                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-violet-300 bg-white/10 px-3 py-1 rounded-full inline-block mb-4 mt-2">
                    Crecimiento & Automatización
                  </span>
                  <h3 className="text-3xl font-black uppercase text-white mb-1 font-heading">Plan Full</h3>
                  <p className="text-sm text-purple-200 font-medium mb-6">Tienda optimizada para vender, medir y automatizar.</p>
                  
                  <div className="mb-6 pb-6 border-b border-white/15">
                    <span className="text-4xl font-black text-white font-mono">$780.000</span>
                    <span className="text-xs font-bold text-purple-300 uppercase ml-2">+ IVA</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {[
                      "Diseño en plantilla premium + secciones a medida",
                      "Importación o configuración de hasta 500 productos*",
                      "Integración pasarelas de pago + Despacho local",
                      "Boleta Electrónica SII automática",
                      "SEO Técnico + GA4 + Meta Pixel + Conversion API",
                      "Capacitación avanzada 1 a 1",
                      "60 días de soporte técnico postlanzamiento"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-purple-50 font-medium">
                        <Check className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" strokeWidth={3} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-[11px] text-purple-300/80 italic leading-tight mb-6">
                    * Según calidad del archivo entregado (CSV/Excel). Edición manual y contenidos masivos se cotizan aparte.
                  </p>
                </div>

                <LeadButton className="w-full py-4 bg-[#FF0085] hover:bg-pink-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all shadow-xl shadow-pink-600/30 text-center cursor-pointer">
                  Evaluar mi proyecto con este plan
                </LeadButton>
              </div>

              {/* PLAN CONVERSIÓN */}
              <div id="plan-conversion" className="bg-white rounded-[2.5rem] p-8 border border-zinc-200 shadow-lg flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block mb-4">
                    Performance & CRO Avanzado
                  </span>
                  <h3 className="text-2xl font-black uppercase text-zinc-950 mb-1 font-heading">Plan Conversión</h3>
                  <p className="text-sm text-zinc-600 font-medium mb-6">Solución para catálogos grandes e integraciones avanzadas.</p>
                  
                  <div className="mb-6 pb-6 border-b border-zinc-100">
                    <span className="text-4xl font-black text-zinc-950 font-mono">$1.200.000</span>
                    <span className="text-xs font-bold text-zinc-400 uppercase ml-2">+ IVA</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {[
                      "Diseño UX/UI personalizado para máxima conversión",
                      "Importación o migración de hasta 1.000 productos",
                      "Integración ERP (Bsale / Obuma / Defontana)",
                      "Email Marketing automático con Klaviyo",
                      "Analítica avanzada & reportes de ventas",
                      "Optimización CRO en ficha de producto",
                      "90 días de soporte técnico postlanzamiento"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-zinc-800 font-medium">
                        <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" strokeWidth={3} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <LeadButton className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all text-center cursor-pointer">
                  Evaluar mi proyecto con este plan
                </LeadButton>
              </div>

            </div>

            {/* SECCIÓN INDEPENDIENTE PARA CUSTOM ELITE (VIP / ENTERPRISE) */}
            <div id="custom-elite" className="bg-gradient-to-r from-zinc-900 via-zinc-950 to-purple-950 border border-purple-500/30 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
                  <Crown className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest block mb-1">
                    Enterprise & Proyectos a Medida
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black uppercase text-white font-heading">
                    ¿Necesitas diseño Figma desde cero, canal B2B o integraciones avanzadas?
                  </h4>
                  <p className="text-sm sm:text-base text-zinc-300 font-normal mt-1 leading-relaxed">
                    Conoce <strong className="text-white">Shopify Custom Elite</strong>: desarrollo exclusivo para marcas con requerimientos corporativos complejos.
                  </p>
                </div>
              </div>

              <LeadButton className="px-6 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-zinc-950 font-black text-xs uppercase tracking-widest rounded-xl transition-all shrink-0 cursor-pointer shadow-lg">
                Evaluar proyecto Custom Elite
              </LeadButton>
            </div>

          </div>
        </section>

        {/* COMPARACIÓN TÉCNICA EXTENSA DESPLEGABLE */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <details className="group bg-zinc-50 rounded-3xl border border-zinc-200/80 p-6 lg:p-8">
              <summary className="flex items-center justify-between cursor-pointer list-none select-none">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-violet-600 block mb-1">
                    Tabla de Especificaciones
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-zinc-950 font-heading">
                    Comparar todas las características
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-zinc-200 group-open:rotate-180 transition-transform duration-300 flex items-center justify-center text-zinc-800 shrink-0">
                  ↓
                </div>
              </summary>

              <div className="mt-8 pt-8 border-t border-zinc-200">
                <ShopifyPricingSection />
              </div>
            </details>
          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 9: GARANTÍA Y ACOMPAÑAMIENTO                         */}
        {/* ========================================================= */}
        <section className="w-full bg-zinc-950 text-white py-20 lg:py-28 my-16 relative overflow-hidden border-y border-zinc-800">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/20 blur-[140px] rounded-full pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mb-12">
              <span className="text-sm font-mono font-bold uppercase tracking-widest text-violet-400 block mb-3">
                Garantía & Transparencia
              </span>
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight font-heading">
                Tu tienda queda lista, documentada y bajo tu control
              </h3>
              <p className="text-zinc-200 font-normal text-lg sm:text-xl mt-4 leading-relaxed">
                Nos aseguramos de que el proceso sea transparente, seguro y sin imprevistos desde el primer día:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
              {guaranteeItems.map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/15 p-6 rounded-3xl hover:bg-white/10 transition-colors">
                  <div className="w-9 h-9 rounded-full bg-violet-600/30 border border-violet-400/40 flex items-center justify-center text-violet-300 mb-4 font-mono font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 leading-snug">{item.title}</h4>
                  <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-r from-violet-950 via-purple-950 to-zinc-900 border border-violet-500/40 rounded-2xl text-center">
              <p className="text-sm sm:text-base font-bold text-purple-200">
                🛡️ Tu tienda, dominio e integraciones quedan bajo tu propiedad, sin amarres con la agencia.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN ANCHO COMPLETO (#3c096c): CASO VICCA DE WIREFRAME A TIENDA FINAL */}
        <ViccaTransformationShowcase />

        {/* ========================================================= */}
        {/* ZONA 11: CONTENIDO TÉCNICO Y ARQUITECTURA SHOPIFY CHILE    */}
        {/* ========================================================= */}
        <section className="py-20 bg-zinc-50 rounded-[3.5rem] mx-4 my-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ShopifyAiAssistantSimulator />
          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 12: PREGUNTAS FRECUENTES                             */}
        {/* ========================================================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FAQSection 
              faqs={shopifyFaqs} 
              title="Preguntas Frecuentes sobre Shopify en Chile"
              description="Respuestas claras a las dudas más comunes sobre costos, integraciones, migraciones y tiempos de desarrollo."
            />
          </div>
        </section>

        {/* ========================================================= */}
        {/* ZONA 12: CTA FINAL DE CONVERSIÓN                          */}
        {/* ========================================================= */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto bg-gradient-to-br from-violet-950 via-[#2C02A5] to-zinc-950 rounded-[3.5rem] p-10 sm:p-16 lg:p-20 text-center text-white relative overflow-hidden shadow-3xl border border-violet-800/40">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF0085]/20 blur-[150px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tighter uppercase leading-[0.95] font-heading">
                Cuéntanos qué tienda <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-200 to-indigo-200">Shopify necesitas</span>
              </h2>
              
              <p className="text-purple-100 text-base sm:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Revisaremos tu proyecto, catálogo e integraciones para recomendarte el plan más adecuado.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <LeadButton className="px-10 py-5 bg-[#FF0085] hover:bg-pink-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl transition-all shadow-xl shadow-pink-600/30 text-center cursor-pointer w-full sm:w-auto">
                  Solicitar evaluación Shopify
                </LeadButton>
                
                <WhatsAppButton className="px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl transition-all shadow-xl shadow-emerald-500/20 text-center cursor-pointer w-full sm:w-auto">
                  Hablar por WhatsApp
                </WhatsAppButton>
              </div>

              <p className="text-xs font-mono text-purple-300/80">
                ⚡ Evaluación inicial sin compromiso.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
