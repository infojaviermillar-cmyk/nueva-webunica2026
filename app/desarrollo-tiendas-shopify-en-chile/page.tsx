import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import FunnelAnimation from '@/components/ui/funnel-animation';
import { MessageSquare, Users, FileSignature, ThumbsUp, Route, UploadCloud, Palette, Search, Puzzle, Rocket, LayoutTemplate, ShoppingBag, CreditCard, Truck, FileText } from 'lucide-react';

export const metadata = {
  title: 'Desarrollo de Tiendas Shopify en Chile | Expertos Shopify Partner 2026',
  description: 'Agencia líder en diseño y desarrollo de tiendas Shopify en Chile. Optimizamos tu ecommerce con Transbank, Webpay, Flow y Facturación SII. ¡Cotiza con Expertos Shopify!',
  keywords: 'desarrollo tiendas shopify chile, diseño tienda shopify, expertos shopify chile, agencia shopify partner santiago, ecommerce shopify chile, pasarelas de pago shopify chile, factura electronica shopify',
};

export default function ShopifyEnChilePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Desarrollo de Tiendas Shopify Profesionales",
    "description": "Servicios integrales de diseño, configuración y optimización de tiendas Shopify para el mercado chileno.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Webunica",
      "image": "https://webunica.cl/logo-webunica.png.webp",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Santiago",
        "addressCountry": "CL"
      }
    },
    "areaServed": "CL",
    "serviceType": "E-commerce Development"
  };


  const processSteps = [
    { step: "01", name: "Briefing Inicial", desc: "Entendemos tu modelo de negocio y objetivos comerciales.", icon: <MessageSquare className="w-6 h-6" /> },
    { step: "02", name: "Estrategia", desc: "Definimos la arquitectura de información y el funnel de ventas.", icon: <Users className="w-6 h-6" /> },
    { step: "03", name: "Propuesta", desc: "Diseñamos un presupuesto a medida con hitos claros.", icon: <FileSignature className="w-6 h-6" /> },
    { step: "04", name: "Onboarding", desc: "Formalización del proyecto y acceso a plataformas.", icon: <ThumbsUp className="w-6 h-6" /> },
    { step: "05", name: "Arquitectura", desc: "Estructura de colecciones y navegación estratégica.", icon: <Route className="w-6 h-6" /> },
    { step: "06", name: "Contenido", desc: "Optimización de imágenes y textos para SEO.", icon: <UploadCloud className="w-6 h-6" /> },
    { step: "07", name: "Diseño Liquid", desc: "Personalización avanzada del theme Shopify.", icon: <Palette className="w-6 h-6" /> },
    { step: "08", name: "Testing QA", desc: "Pruebas de checkout, pagos y navegación mobile.", icon: <Search className="w-6 h-6" /> },
    { step: "09", name: "Integraciones", desc: "Configuración de ERP, Boleta SII y Logística.", icon: <Puzzle className="w-6 h-6" /> },
    { step: "10", name: "Lanzamiento", desc: "Tu tienda en vivo en 4 a 6 semanas.", icon: <Rocket className="w-6 h-6" /> }
  ];

  const shopifyFaqs = [
    {
      question: "¿Cuánto cobra Shopify por vender en Chile?",
      answer: "Shopify cobra una suscripción mensual (Basic desde $19 USD) y una comisión por transacción (0.5% a 2% según el plan) si usas pasarelas externas como Flow o Mercado Pago en Chile."
    },
    {
      question: "¿Cuáles son las mejores pasarelas de pago para Shopify Chile?",
      answer: "Recomendamos Transbank Webpay, Mercado Pago por su alta tasa de aprobación y Flow por su facilidad. Revisa nuestra guía de 'Comisiones de Pago Shopify Chile' en la sección de Herramientas para comparar tarifas exactas de este año."
    },
    {
      question: "¿Qué opciones de empresas de transporte y envíos hay para Shopify Chile?",
      answer: "Para automatizar envíos (Carrier Calculated Shipping) en Chile recomendamos multi-couriers como Shipit o Sendu, o conexiones directas con Bluexpress o Starken. Puedes revisar nuestra guía completa de 'Empresas de Transporte Shopify Chile' en el menú inferior para conocer los costos de integración."
    },
    {
      question: "¿Cómo funciona la Facturación Electrónica con el SII?",
      answer: "Integramos el checkout de Shopify con tu ERP mediante un conector para emitir boletas y facturas automáticamente al realizar la venta. Trabajamos con Bsale, Obuma, Defontana y Laudus. Revisa nuestra comparativa 'Sistemas ERP para Shopify Chile' en el menú de Herramientas."
    },
    {
      question: "¿Puedo migrar mi tienda desde Jumpseller o WooCommerce?",
      answer: "Sí, realizamos migraciones completas de catálogo, clientes e historial de pedidos manteniendo tu autoridad SEO intacta durante el proceso."
    },
    {
      question: "¿Cuánto tiempo toma tener mi tienda lista?",
      answer: "Un proyecto profesional de desarrollo Shopify toma entre 4 y 6 semanas, incluyendo diseño a medida e integraciones técnicas complejas."
    }
  ];

  const sitemap = [
    { title: "Home Estratégico", desc: "Diseñado para la máxima retención y conversión." },
    { title: "Landing de Colecciones", desc: "Estructura de Silos SEO para posicionar en Google." },
    { title: "Ficha de Producto (CRO)", desc: "Enfoque en beneficios, social proof y CTA claro." },
    { title: "Checkout Optimizado", desc: "Reducción de fricción para evitar carritos abandonados." },
    { title: "Página de Ayuda/FAQ", desc: "Mejora la confianza y reduce consultas de soporte." }
  ];

  const plans = [
    {
      name: "Shopify AJUSTE",
      price: "$320.000",
      originalPrice: "$337.000",
      highlight: "🔧 Optimización de Tiendas",
      desc: "Ideal para marcas con tienda activa que necesitan mejorar su conversión y diseño visual.",
      features: [
        "🎁 Plantilla Premium de regalo",
        "Auditoría Visual y de UX",
        "Mejora de navegación y menú",
        "Optimización de Ficha de Producto",
        "Configuración de Apps esenciales",
        "Botón de WhatsApp flotante",
        "Mejora de velocidad de carga",
        "Recuperación de carritos",
        "Entrega en 10 días hábiles"
      ],
      time: "2 Semanas",
      cta: "Cotizar Ajuste"
    },
    {
      name: "Shopify PRENDE",
      price: "$580.000",
      originalPrice: "$650.000",
      highlight: "🌟 Lanzamiento Profesional",
      desc: "Perfecto para nuevos emprendimientos que buscan una base sólida y escalable en Chile.",
      features: [
        "Setup completo de Shopify",
        "Conexión de dominio propio",
        "Diseño basado en Plantilla Premium",
        "Carga inicial de 70 productos",
        "Configuración de Webpay/Flow",
        "Integración de Logística básica",
        "Diseño Mobile-First 100%",
        "Capacitación de uso básica",
        "Entrega en 4 semanas"
      ],
      time: "4 Semanas",
      cta: "Iniciar mi Tienda"
    },
    {
      name: "Shopify FULL",
      price: "$780.000",
      originalPrice: "$980.000",
      highlight: "⚙️ Automatización & Ventas",
      desc: "La solución preferida para negocios en crecimiento que necesitan automatizar procesos.",
      recommended: true,
      features: [
        "Todo lo del Plan Prende, más:",
        "Carga de hasta 120 productos",
        "SEO Técnico: Títulos y Metas",
        "Integración Google Analytics 4",
        "Diseño personalizado por secciones",
        "Sistema de Reviews de clientes",
        "Formulario de Newsletter",
        "Soporte prioritario 3 meses",
        "Entrega en 6 semanas"
      ],
      time: "6 Semanas",
      cta: "Cotizar Plan Full"
    },
    {
      name: "Shopify PRO",
      price: "$1.200.000",
      originalPrice: "$1.400.000",
      highlight: "🚀 Escalamiento Total",
      desc: "Solución de alto nivel para marcas que facturan y necesitan integraciones complejas ERP/CRM.",
      features: [
        "Todo lo del Plan FULL, más:",
        "Migración de hasta 300 productos",
        "Integración ERP (Bsale/Obuma/Rex)",
        "Email Marketing (Klaviyo)",
        "Páginas de aterrizaje a medida",
        "Optimización de velocidad avanzada",
        "Configuración Meta Pixel & API",
        "Consultoría estratégica 1 a 1",
        "Entrega en 8 semanas"
      ],
      time: "8 Semanas",
      cta: "Hablar con Experto"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-zinc-900 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-[22vh] lg:pt-48">
        {/* Hero Section */}
        <section id="inicio" className="relative pt-0 pb-32 lg:pt-0 lg:pb-40 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
          
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-violet-50 border border-violet-100 rounded-full">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] text-violet-600 uppercase">Expertos Shopify Partner Chile</span>
              </div>
              
              <h1 className="text-[2.4rem] xs:text-5xl lg:text-[75px] font-black tracking-tighter leading-[0.9] mb-8 uppercase text-zinc-950 break-words">
                Desarrollo de Tiendas <span className="text-violet-600 italic font-serif lowercase font-light">Shopify Chile</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-zinc-500 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                No arriesgues tu inversión. Creamos tiendas Shopify de alto rendimiento, optimizadas para el mercado chileno con <strong className="text-zinc-900">Pasarelas de Pago</strong>, <strong className="text-zinc-900">Logística</strong> y <strong className="text-zinc-900">Facturación SII</strong> integradas.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                <LeadButton className="px-8 py-4 bg-violet-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/20 active:scale-95 text-center flex items-center justify-center gap-2">
                  Solicitar Cotización Gratis
                </LeadButton>
                <WhatsAppButton className="px-8 py-4 bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95 text-center flex items-center justify-center gap-2">
                  Hablar con un Experto
                </WhatsAppButton>
              </div>
            </div>
            
            <div className="relative z-10 hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500 to-indigo-400 rounded-full blur-[80px] opacity-20 animate-pulse" />
              <Image
                src="/tecno.png"
                alt="Agencia de Desarrollo Shopify en Chile - Webunica"
                width={800}
                height={600}
                className="relative w-full h-auto object-contain transform rotate-2 hover:rotate-0 transition-transform duration-700 z-10"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-white shadow-xl px-6 py-4 rounded-3xl border border-zinc-100 flex items-center gap-4 z-20">
                 <ShoppingBag className="w-6 h-6 text-violet-600" />
                 <div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block leading-tight">Certificados</span>
                   <span className="text-sm font-bold text-zinc-900">Shopify Partner 2026</span>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Advantage Section */}
        <section className="bg-zinc-950 py-32 rounded-[4rem] mx-4 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter uppercase leading-tight">
                Potencia tu Marca en el <br/><span className="text-violet-400">Mercado Chileno</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-10 font-light leading-relaxed">
                Desarrollamos soluciones que eliminan la fricción de compra. Integramos todo lo que tu tienda necesita para operar legal y eficientemente en Chile.
              </p>
              
              <div className="grid gap-8">
                <article className="flex gap-6 items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-violet-600/20 group-hover:border-violet-600/50 transition-all">
                    <CreditCard className="w-7 h-7 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Pasarelas Webpay & Flow</h3>
                    <p className="text-zinc-500 text-sm font-light">Configuramos Mercado Pago, Flow, Ventipay o Transbank para que recibas pagos de inmediato con total seguridad.</p>
                  </div>
                </article>

                <article className="flex gap-6 items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-violet-600/20 group-hover:border-violet-600/50 transition-all">
                    <Truck className="w-7 h-7 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Logística Starken & Blue Express</h3>
                    <p className="text-zinc-500 text-sm font-light">Automatización de envíos con Shipit, Sendu o integraciones directas para calcular tarifas en tiempo real por región.</p>
                  </div>
                </article>

                <article className="flex gap-6 items-start group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-violet-600/20 group-hover:border-violet-600/50 transition-all">
                    <FileText className="w-7 h-7 text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">Boleta Electrónica SII</h3>
                    <p className="text-zinc-500 text-sm font-light">Conexión con Bsale, Obuma o plugins certificados para emitir documentos tributarios automáticamente en cada venta.</p>
                  </div>
                </article>
              </div>
            </div>
            
            <div className="bg-white/5 p-10 lg:p-14 rounded-[3rem] border border-white/10 backdrop-blur-sm">
               <h3 className="text-2xl font-black mb-6 uppercase">¿Por qué Shopify es líder en Chile?</h3>
               <p className="text-zinc-400 leading-relaxed mb-10 font-light text-lg">
                 En eventos masivos como el <strong className="text-white">CyberDay</strong>, la estabilidad es tu mejor aliado. Shopify garantiza un 99.9% de uptime mientras otras plataformas colapsan.
               </p>
               <div className="grid grid-cols-2 gap-8">
                  <div className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-all">
                    <div className="text-4xl font-black mb-2 text-violet-400">99.9%</div>
                    <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Uptime Garantizado</div>
                  </div>
                  <div className="p-8 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-all">
                    <div className="text-4xl font-black mb-2 text-violet-400">+100</div>
                    <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Apps Locales</div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-32 bg-zinc-50 border-y border-zinc-100">
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-24">
                 <h2 className="text-4xl lg:text-7xl font-black tracking-tighter uppercase mb-6 text-zinc-950">Planes Shopify 2026</h2>
                 <p className="text-xl text-zinc-500 font-light max-w-2xl mx-auto">Invierte en una infraestructura comercial diseñada para escalar. Sin costos ocultos y con resultados medibles.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                 {plans.map((p, i) => (
                   <div key={i} className={`relative bg-white rounded-[4rem] p-10 lg:p-14 border-2 transition-all duration-500 hover:translate-y-[-10px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(124,58,237,0.1)] ${p.recommended ? 'border-violet-600 shadow-2xl shadow-violet-600/10' : 'border-zinc-100'}`}>
                      <div className="absolute top-8 right-8 bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-full animate-pulse">
                        10% OFF
                      </div>
                      <h3 className="text-2xl font-black mb-2 uppercase">{p.name}</h3>
                      <p className="text-xs font-bold text-violet-500 uppercase tracking-wider mb-6">{p.highlight}</p>
                      <div className="mb-6">
                        {p.originalPrice && (
                          <div className="text-sm text-zinc-400 line-through font-medium mb-1">{p.originalPrice} + iva</div>
                        )}
                        <span className="text-4xl font-black text-zinc-900">{p.price}</span>
                        <span className="text-sm text-zinc-500 font-medium ml-2">+ iva</span>
                      </div>
                      <ul className="space-y-4 mb-12">
                         {p.features.map((f, idx) => (
                           <li key={idx} className="text-sm text-zinc-600 flex gap-3 font-light">
                              <span className="text-violet-600 font-bold">✓</span>
                              {f}
                           </li>
                         ))}
                      </ul>
                      <LeadButton className={`w-full py-5 rounded-2xl font-bold transition-all ${p.recommended ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30' : 'bg-black text-white hover:bg-zinc-800'}`}>
                        {p.cta}
                      </LeadButton>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* FAQ Section */}
        <div className="pb-32 bg-white">
           <FAQSection 
             faqs={shopifyFaqs} 
             title="Dudas sobre Shopify en Chile"
             description="Todo lo que necesitas saber sobre costos, integraciones y tiempos antes de iniciar tu proyecto."
           />
        </div>
      </main>
    </div>
  );
}
