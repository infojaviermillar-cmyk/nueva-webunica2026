import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import FunnelAnimation from '@/components/ui/funnel-animation';
import { MessageSquare, Users, FileSignature, ThumbsUp, Route, UploadCloud, Palette, Search, Puzzle, Rocket, LayoutTemplate, ShoppingBag } from 'lucide-react';

export const metadata = {
  title: 'Desarrollo de Tiendas Shopify en Chile | Diseño Web Shopify 2026',
  description: 'Agencia experta en diseño y desarrollo de tiendas Shopify en Chile. Optimizamos tu ecommerce con Transbank, Flow y Mercado Pago. ¡Lidera el mercado con Shopify Chile!',
  keywords: 'desarrollo tiendas shopify chile, diseño tienda shopify, shopify chile, expertos shopify, agencia shopify santiago, ecommerce shopify chile',
};

export default function ShopifyEnChilePage() {
  const processSteps = [
    { step: "01", name: "Descripción", desc: "El cliente describe su proyecto y necesidades.", icon: <MessageSquare className="w-6 h-6" /> },
    { step: "02", name: "Reunión", desc: "Se genera una reunión estratégica.", icon: <Users className="w-6 h-6" /> },
    { step: "03", name: "Cotización", desc: "Elaboramos y presentamos la propuesta comercial.", icon: <FileSignature className="w-6 h-6" /> },
    { step: "04", name: "Aprobación", desc: "El cliente acepta la cotización.", icon: <ThumbsUp className="w-6 h-6" /> },
    { step: "05", name: "Flujo", desc: "Se presenta el flujo de desarrollo del proyecto.", icon: <Route className="w-6 h-6" /> },
    { step: "06", name: "Contenido", desc: "El cliente envía el contenido (textos, imágenes).", icon: <UploadCloud className="w-6 h-6" /> },
    { step: "07", name: "Diseño", desc: "Se desarrolla el theme o se adapta el diseño.", icon: <Palette className="w-6 h-6" /> },
    { step: "08", name: "Revisión", desc: "Se revisan las funciones de la tienda.", icon: <Search className="w-6 h-6" /> },
    { step: "09", name: "Componentes", desc: "Se agregan componentes y apps finales.", icon: <Puzzle className="w-6 h-6" /> },
    { step: "10", name: "Finalización", desc: "Se entrega la tienda. (De 1 a 6 semanas en total).", icon: <Rocket className="w-6 h-6" /> }
  ];

  const shopifyFaqs = [
    {
      question: "¿Cuánto cobra Shopify por vender en Chile?",
      answer: "Shopify cobra una suscripción mensual (desde aprox. $19 USD) y una comisión por transacción. En Chile, al usar pasarelas externas como Flow o Mercado Pago, Shopify aplica un cargo adicional de entre 0.5% y 2.0% según tu plan, además de la comisión de la pasarela local."
    },
    {
      question: "¿Qué pasarelas de pago son mejores para Shopify en Chile?",
      answer: "Las más recomendadas por estabilidad y soporte son Mercado Pago y Flow. Ambas permiten aceptar tarjetas de crédito, débito (Webpay) y transferencias. También existe la opción de cobrar mediante transacciones directas o pago contra entrega."
    },
    {
      question: "¿Cómo se integra la Facturación Electrónica con Shopify?",
      answer: "Integramos aplicaciones como Obuma o Bsale que automatizan la emisión de boletas y facturas ante el SII cada vez que se realiza una venta, asegurando que tu negocio cumpla con la normativa tributaria chilena de forma automática."
    },
    {
      question: "¿Cuánto tiempo toma el desarrollo de una tienda Shopify profesional?",
      answer: "Un proyecto estándar toma entre 4 y 6 semanas. Esto incluye el diseño estratégico, configuración de catálogo, integración de pagos, logística local y capacitación para que seas 100% autónomo en la gestión."
    },
    {
      question: "¿Es Shopify mejor que Jumpseller o WooCommerce para el mercado chileno?",
      answer: "Shopify gana en escalabilidad global y estabilidad de servidores. Mientras que Jumpseller es muy local y sencillo, Shopify permite crecer sin límites técnicos. Comparado con WooCommerce, Shopify requiere menos mantenimiento y es mucho más seguro."
    }
  ];

  const sitemap = [
    { title: "Inicio (Home)", desc: "Tu vitrina principal." },
    { title: "Colecciones", desc: "Segmentación lógica de productos." },
    { title: "Ficha de Producto", desc: "Información clara, fotos de calidad y CTA." },
    { title: "Nosotros", desc: "Genera conexión y confianza." },
    { title: "Ayuda/FAQ", desc: "Resuelve dudas antes de la compra." }
  ];

  const plans = [
    {
      name: "Shopify AJUSTE",
      price: "$320.000",
      originalPrice: "$337.000",
      highlight: "🔧 Para tiendas ya creadas",
      desc: "Ideal para tiendas que necesitan mejorar imagen, orden comercial y confianza visual.",
      features: [
        "🎁 Plantilla Envato premium gratis",
        "Revisión visual general de la tienda",
        "Mejora de home, menú, banners y jerarquía",
        "Ajustes en ficha de producto",
        "Mejora de textos clave y llamados a la acción",
        "Optimización básica de experiencia mobile",
        "Revisión de apps instaladas",
        "Ajustes de confianza visual en carrito/checkout",
        "Hasta cierta cantidad de cambios definidos",
        "Videollamada para explicar cómo funciona el diseño y Shopify",
        "Botón de WhatsApp",
        "Activación sistema de notificaciones",
        "Recuperación de carritos abandonados",
        "Tiempo de entrega: 5 a 10 días hábiles"
      ],
      time: "2 Semanas",
      cta: "Cotizar sin costo"
    },
    {
      name: "Shopify PRENDE",
      price: "$580.000",
      originalPrice: "$650.000",
      highlight: "🌟 Ideal para emprendedores que inician",
      desc: "Perfecto para emprendedores que dan sus primeros pasos en el comercio digital. Lanza tu tienda con imagen profesional y optimizada para vender.",
      features: [
        "Configuración completa de tienda Shopify",
        "Conexión de dominio + validación de correo",
        "Instalación de plantilla premium Envato / Shopify",
        "Cargamos hasta 70 productos por ti o migración",
        "Certificado SSL y Panel administrador",
        "1 Medio de pago (Mercado Pago, PayPal, Flow o Ventipay)",
        "Multicourier (Shipit/Sendu) o tarifa única",
        "Integración Bluexpress, Starken, etc.",
        "Variaciones de producto (talla, color, etc.)",
        "Redes sociales y Botón de WhatsApp",
        "App propia datos de facturación",
        "Soporte técnico 3 meses y hasta 3 cambios",
        "Tiempo de entrega: Hasta 4 semanas"
      ],
      time: "4 Semanas",
      cta: "Cotizar sin costo"
    },
    {
      name: "Shopify FULL",
      price: "$780.000",
      originalPrice: "$980.000",
      highlight: "⚙️ Para negocios en crecimiento",
      desc: "Automatiza, optimiza y escala tus ventas. Para negocios que necesitan mayor capacidad de productos y herramientas de marketing.",
      recommended: true,
      features: [
        "Todo lo del Plan Prende, más:",
        "Capacidad para hasta 120 productos",
        "Diseño personalizado por secciones",
        "Integración Google Analytics y Facebook Pixel",
        "Optimización SEO Básica (Títulos, H2, Textos)",
        "Ajustes avanzados de estructura y navegación",
        "Chat en vivo opcional (Tawk.to o WhatsApp)",
        "Newsletter y formulario de suscripción",
        "Capacitación personalizada con videos",
        "Correos de carritos abandonados automáticos"
      ],
      time: "6 Semanas",
      cta: "Cotizar sin costo"
    },
    {
      name: "Shopify PRO",
      price: "$1.200.000",
      originalPrice: "$1.400.000",
      highlight: "🚀 Para marcas que desean escalar",
      desc: "Solución completa y profesional. Integraciones complejas, estrategias de conversión avanzadas y diseño a medida.",
      features: [
        "Todo lo del Plan FULL, más:",
        "Carga o migración de hasta 300 productos",
        "Integración ERP/Bsale (requiere evaluación)",
        "Marketing automatizado (Mailchimp/Klaviyo)",
        "Configuración Google Ads y Meta Ads",
        "Configuración completa de Analytics 4",
        "Plantilla ultra personalizada a medida",
        "Páginas optimizadas para campañas",
        "Integraciones externas (Calendly, CRM, Zapier)",
        "Soporte técnico preferente + auditoría final",
        "Tiempo estimado: Hasta 8 semanas"
      ],
      time: "8 Semanas",
      cta: "Cotizar sin costo"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-zinc-900 overflow-x-hidden">
      <main className="pt-32">
        {/* 1. Hero Principal - Estilo EMD */}
        <section id="inicio" className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
          
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-violet-50 border border-violet-100 rounded-full">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] text-violet-600 uppercase">Shopify Partner Chile</span>
              </div>
              
              <h1 className="text-[2.4rem] xs:text-5xl lg:text-[75px] font-black tracking-tighter leading-[0.9] mb-8 uppercase text-zinc-950 break-words">
                Desarrollo de Tiendas <span className="text-violet-600 italic font-serif lowercase font-light">Shopify</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-zinc-500 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Diseño, Themes, Costos, Planes y Apps. Creamos tiendas Shopify profesionales, pensadas para vender, con diseño atractivo, configuración técnica, personalización de themes, integración de aplicaciones y estructura lista para crecer.
              </p>
              
              <div className="inline-block px-4 py-2 mb-10 bg-zinc-100 rounded-lg text-sm font-bold text-zinc-700 italic border-l-4 border-violet-500 shadow-sm">
                “Diseño + desarrollo + estrategia comercial”
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                <LeadButton className="px-8 py-4 bg-violet-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/20 active:scale-95 text-center flex items-center justify-center gap-2">
                  Solicitar cotización
                </LeadButton>
                <a 
                  href="#pricing"
                  className="px-8 py-4 bg-white text-zinc-900 border-2 border-zinc-200 rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:border-zinc-900 transition-all active:scale-95 text-center flex items-center justify-center gap-2"
                >
                  Ver planes
                </a>
                <WhatsAppButton className="px-8 py-4 bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95 text-center flex items-center justify-center gap-2">
                  Hablar por WhatsApp
                </WhatsAppButton>
              </div>
            </div>
            
            {/* Mockup CSS representation */}
            <div className="relative z-10 hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500 to-indigo-400 rounded-full blur-[80px] opacity-20 animate-pulse" />
              <Image
                src="/tecno.png"
                alt="Tienda Shopify Profesional"
                width={800}
                height={600}
                className="relative w-full h-auto object-contain transform rotate-2 hover:rotate-0 transition-transform duration-700 z-10"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-white shadow-xl px-6 py-4 rounded-3xl border border-zinc-100 flex items-center gap-4 z-20">
                 <ShoppingBag className="w-6 h-6 text-violet-600" />
                 <div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block leading-tight">Shopify</span>
                   <span className="text-sm font-bold text-zinc-900">Partner Certificado</span>
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
                Optimizado para el <br/><span className="text-violet-400">Mercado Chileno</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-10 font-light leading-relaxed">
                Entendemos los desafíos locales. Desde la integración con el SII hasta los despachos en regiones con Starken.
              </p>
              <ul className="space-y-6">
                {[
                  { t: 'Pagos Locales', d: 'Configuración Webpay, Flow y Mercado Pago.' },
                  { t: 'Logística Integrada', d: 'Conexión con Shipit, Starken y Blue Express.' },
                  { t: 'Cumplimiento SII', d: 'Facturación electrónica automática con apps locales.' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 text-violet-400 font-bold">0{i+1}</div>
                    <div>
                      <h4 className="font-bold text-white uppercase tracking-wider mb-1">{item.t}</h4>
                      <p className="text-zinc-500 text-sm">{item.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm">
               <h3 className="text-2xl font-black mb-6 uppercase">¿Por qué Shopify en Chile?</h3>
               <p className="text-zinc-400 leading-relaxed mb-8 font-light">
                 A diferencia de otras plataformas, Shopify ofrece una estabilidad de nivel bancario. En eventos de alto tráfico como el CyberDay, tu tienda nunca dejará de vender.
               </p>
               <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <div className="text-3xl font-black mb-2 text-violet-400">99.9%</div>
                    <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Uptime Garantizado</div>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <div className="text-3xl font-black mb-2 text-violet-400">+100</div>
                    <div className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Pasarelas de Pago</div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Comparison CTA */}
        <section className="max-w-7xl mx-auto px-6 py-32 text-center">
           <h2 className="text-3xl lg:text-5xl font-black mb-8 tracking-tighter uppercase">¿Aún comparando plataformas?</h2>
           <p className="text-xl text-zinc-500 mb-10 max-w-2xl mx-auto font-light">Mira nuestro análisis honesto sobre Shopify vs Jumpseller y decide con datos.</p>
           <Link href="/desarrollo-tiendas-shopify-chile" className="inline-flex items-center gap-2 text-violet-600 font-bold text-lg hover:underline">
              Ver Comparativa Completa 2026
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
           </Link>
        </section>

        {/* Checklist CRO Banner */}
        <section className="bg-violet-600 py-20 px-6 mx-4 mb-32 rounded-[3rem] relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full pointer-events-none"></div>
           <div className="max-w-4xl mx-auto text-center relative z-10">
             <div className="inline-block px-4 py-1.5 bg-black/20 text-white border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 backdrop-blur-md">Herramienta Gratuita</div>
             <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 tracking-tight">¿Tu tienda Shopify está perdiendo ventas?</h2>
             <p className="text-violet-200 text-lg mb-10 max-w-2xl mx-auto font-medium">Revisa gratis los puntos clave donde la mayoría de las tiendas en Chile pierden clientes con nuestra Auditoría CRO Básica.</p>
             <Link href="/listas-de-verificacion-shopify-cro-basica" className="inline-block px-8 py-4 bg-white text-violet-900 font-black uppercase tracking-[0.1em] text-xs rounded-full hover:scale-105 transition-transform shadow-xl">
               Ver Checklist CRO
             </Link>
           </div>
        </section>

        {/* Por qué elegir Shopify */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-violet-600/5 blur-[100px] rounded-full -translate-x-1/2" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase text-zinc-950 mb-6">¿Por qué elegir <span className="text-violet-600">Shopify</span>?</h2>
              <p className="text-lg text-zinc-500 font-light max-w-2xl mx-auto">La plataforma líder mundial para e-commerce, optimizada para escalar tu negocio sin límites técnicos.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-50 p-10 rounded-[3rem] border border-zinc-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center text-violet-600 mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Velocidad y Estabilidad</h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-light">Hosting de clase mundial incluido. Tu tienda siempre activa y rápida, incluso en días de alta demanda como CyberDay.</p>
              </div>
              <div className="bg-zinc-50 p-10 rounded-[3rem] border border-zinc-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center text-violet-600 mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Seguridad Total</h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-light">Cumplimiento PCI DSS nivel 1. Los datos de tus clientes y tus transacciones están protegidos por los más altos estándares de seguridad.</p>
              </div>
              <div className="bg-zinc-50 p-10 rounded-[3rem] border border-zinc-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center text-violet-600 mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 00-2 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Escalabilidad Sin Límites</h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-light">Desde tu primer pedido hasta miles por hora. Shopify crece contigo sin necesidad de migrar de plataforma ni preocuparte por el servidor.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-32 bg-zinc-50 border-y border-zinc-100">
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-24">
                 <h2 className="text-4xl lg:text-7xl font-black tracking-tighter uppercase mb-6 text-zinc-950">Inversión Shopify</h2>
                 <p className="text-xl text-zinc-500 font-light">Desarrollo profesional para negocios que no juegan a vender.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                 {plans.map((p, i) => (
                   <div key={i} className={`relative bg-white rounded-[4rem] p-10 lg:p-14 border-2 transition-all duration-500 hover:translate-y-[-10px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(124,58,237,0.1)] ${p.recommended ? 'border-violet-600 shadow-2xl shadow-violet-600/10' : 'border-zinc-100'}`}>
                      {/* Descuento Badge */}
                      <div className="absolute top-8 right-8 bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-full animate-pulse">
                        10% OFF
                      </div>
                      <h3 className="text-2xl font-black mb-2 uppercase">{p.name}</h3>
                      <p className="text-xs font-bold text-violet-600 uppercase mb-4">{p.highlight}</p>
                      <div className="mb-4">
                        {p.originalPrice ? (
                          <div className="text-sm text-zinc-400 line-through font-medium mb-1">{p.originalPrice} + iva</div>
                        ) : (
                          <div className="h-5 mb-1" />
                        )}
                        <span className="text-4xl font-black text-zinc-900">{p.price}</span>
                        <span className="text-sm text-zinc-500 font-medium ml-1">+ iva</span>
                      </div>
                      <div className="flex items-center gap-2 mb-6 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg w-fit border border-emerald-100">
                        <span className="text-xs font-black uppercase tracking-widest">💳 6 cuotas sin interés</span>
                      </div>
                      {p.desc && <p className="text-sm text-zinc-500 font-light mb-8 min-h-[40px]">{p.desc}</p>}
                      <ul className="space-y-4 mb-12">
                         {p.features.map((f, idx) => (
                           <li key={idx} className="text-sm text-zinc-600 flex gap-3">
                              <span className="text-violet-600">✓</span>
                              {f}
                           </li>
                         ))}
                      </ul>
                      <LeadButton className={`w-full py-5 rounded-2xl font-bold ${p.recommended ? 'bg-violet-600 text-white' : 'bg-black text-white hover:bg-zinc-800'}`}>
                        Obtener 10% Dto
                      </LeadButton>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Ecosistema de Aplicaciones */}
        <section className="py-32 bg-zinc-950 text-white rounded-[4rem] mx-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.15),transparent)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase mb-6">
                Ecosistema de <span className="text-violet-500 underline decoration-violet-500/30">Aplicaciones</span>
              </h2>
              <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto">
                No instalamos apps por instalar; elegimos las que realmente impulsan tu negocio y se pagan solas mediante automatización y eficiencia.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center text-violet-500 font-black">$$</div>
                  <div className="text-[10px] font-black bg-violet-600 text-white px-2 py-0.5 rounded uppercase">Ventas</div>
                </div>
                <h4 className="font-bold text-white mb-4">Conversión Avanzada</h4>
                <p className="text-zinc-400 font-light text-sm leading-relaxed mb-6">Maximizamos el ticket promedio con estrategias de Upselling, descuentos por volumen y recuperación inteligente de carritos.</p>
                <div className="flex flex-wrap gap-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  <span className="text-[9px] font-black border border-white/20 px-2 py-0.5 rounded">Klaviyo</span>
                  <span className="text-[9px] font-black border border-white/20 px-2 py-0.5 rounded">Rebuy</span>
                  <span className="text-[9px] font-black border border-white/20 px-2 py-0.5 rounded">Vitals</span>
                </div>
              </div>
              
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center text-indigo-500 font-black">⚙️</div>
                  <div className="text-[10px] font-black bg-indigo-600 text-white px-2 py-0.5 rounded uppercase">Operaciones</div>
                </div>
                <h4 className="font-bold text-white mb-4">Logística y Pagos</h4>
                <p className="text-zinc-400 font-light text-sm leading-relaxed mb-6">Sincronización automática de inventario, facturación electrónica con SII y seguimiento de envíos en tiempo real.</p>
                <div className="flex flex-wrap gap-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  <span className="text-[9px] font-black border border-white/20 px-2 py-0.5 rounded">Bsale</span>
                  <span className="text-[9px] font-black border border-white/20 px-2 py-0.5 rounded">Shipit</span>
                  <span className="text-[9px] font-black border border-white/20 px-2 py-0.5 rounded">Starken</span>
                </div>
              </div>

              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-500 font-black">🛡️</div>
                  <div className="text-[10px] font-black bg-blue-600 text-white px-2 py-0.5 rounded uppercase">Confianza</div>
                </div>
                <h4 className="font-bold text-white mb-4">Social Proof</h4>
                <p className="text-zinc-400 font-light text-sm leading-relaxed mb-6">Reseñas de clientes con fotos, integración con Instagram Shopping y sellos de seguridad dinámicos para el checkout.</p>
                <div className="flex flex-wrap gap-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  <span className="text-[9px] font-black border border-white/20 px-2 py-0.5 rounded">Loox</span>
                  <span className="text-[9px] font-black border border-white/20 px-2 py-0.5 rounded">Judge.me</span>
                  <span className="text-[9px] font-black border border-white/20 px-2 py-0.5 rounded">Gorgias</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Estructura recomendada */}
        <section className="py-32 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tighter uppercase text-zinc-950 mb-6">Estructura Recomendada (Sitemap)</h2>
              <p className="text-zinc-500 font-light">Una tienda profesional debe contar con las bases exactas de navegación.</p>
            </div>
            <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-sm">
              {sitemap.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center p-6 border-b border-zinc-100 last:border-0 hover:bg-zinc-50 transition-colors">
                  <div className="w-full sm:w-1/3">
                    <span className="font-bold text-zinc-900 flex items-center gap-2">
                      <LayoutTemplate className="w-4 h-4 text-violet-500" />
                      {item.title}
                    </span>
                  </div>
                  <div className="w-full sm:w-2/3 mt-2 sm:mt-0 text-sm text-zinc-500 font-light">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso de Trabajo */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase text-zinc-950 mb-6">Proceso de Trabajo</h2>
              <p className="text-lg text-zinc-500 font-light">Paso a paso hacia el lanzamiento.</p>
            </div>
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes scanLineHorizontal {
                0% { left: -10%; opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { left: 100%; opacity: 0; }
              }
              .animate-scan-horizontal {
                animation: scanLineHorizontal 6s linear infinite;
              }
            `}} />
            
            <div className="max-w-7xl mx-auto relative pt-8 pb-16">
              
              {/* Líneas horizontales de conexión (2 filas en escritorio) */}
              <div className="hidden lg:block absolute top-[4.5rem] left-[8%] right-[8%] h-1.5 bg-zinc-100 rounded-full z-0 overflow-hidden">
                 <div className="absolute top-0 bottom-0 w-48 bg-gradient-to-r from-transparent via-violet-500 to-transparent animate-scan-horizontal" />
              </div>
              <div className="hidden lg:block absolute top-[19.5rem] left-[8%] right-[8%] h-1.5 bg-zinc-100 rounded-full z-0 overflow-hidden">
                 <div className="absolute top-0 bottom-0 w-48 bg-gradient-to-r from-transparent via-violet-500 to-transparent animate-scan-horizontal" style={{ animationDelay: '3s' }} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-6 relative z-10">
                {processSteps.map((step, i) => (
                  <div key={i} className="relative flex flex-col items-center group w-full">
                    
                    {/* Central Icon */}
                    <div className="w-20 h-20 bg-white border-[5px] border-violet-50 rounded-full flex flex-col items-center justify-center group-hover:border-violet-500 group-hover:scale-110 transition-all duration-300 shadow-sm relative cursor-default shrink-0">
                      {/* Active ping effect on hover */}
                      <div className="absolute inset-0 rounded-full bg-violet-400 opacity-0 group-hover:opacity-20 group-hover:animate-ping transition-opacity duration-300" />
                      <span className="text-violet-600 group-hover:text-violet-700 transition-colors z-10">{step.icon}</span>
                    </div>

                    {/* Content Card */}
                    <div className="mt-6 text-center px-4 w-full">
                      <div className="text-violet-400 font-black text-[10px] mb-2 tracking-widest uppercase">Paso {step.step}</div>
                      <h4 className="font-black text-zinc-900 mb-2 uppercase tracking-wide text-sm group-hover:text-violet-600 transition-colors">{step.name}</h4>
                      <p className="text-zinc-500 font-light text-xs leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>
                    </div>
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* FAQ */}
        <div className="pb-32">
           <FAQSection 
             faqs={shopifyFaqs} 
             title="Preguntas Shopify Chile"
             description="Todo lo que necesitas saber antes de lanzar tu ecommerce en el mercado local."
           />
        </div>
      </main>
    </div>
  );
}
