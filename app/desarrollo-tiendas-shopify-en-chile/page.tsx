import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import FunnelAnimation from '@/components/ui/funnel-animation';

export const metadata = {
  title: 'Desarrollo de Tiendas Shopify en Chile | Diseño Web Shopify 2026',
  description: 'Agencia experta en diseño y desarrollo de tiendas Shopify en Chile. Optimizamos tu ecommerce con Transbank, Flow y Mercado Pago. ¡Lidera el mercado con Shopify Chile!',
  keywords: 'desarrollo tiendas shopify chile, diseño tienda shopify, shopify chile, expertos shopify, agencia shopify santiago, ecommerce shopify chile',
};

export default function ShopifyEnChilePage() {
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

  const plans = [
    {
      name: "Shopify PRENDE",
      price: "$580.000",
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
        {/* Modern Shopify Hero */}
        <section className="relative max-w-7xl mx-auto px-6 py-20 lg:py-40">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/5 blur-[120px] rounded-full -z-10" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.2em] text-violet-600 uppercase bg-violet-50 rounded-full border border-violet-100">
                Shopify Expert Chile 2026
              </div>
              <h1 className="text-5xl lg:text-[90px] font-black tracking-tighter leading-[0.8] mb-10 uppercase text-zinc-950">
                Desarrollo de <br/><span className="text-violet-600 italic font-serif lowercase font-light">Tiendas Shopify</span> en Chile
              </h1>
              <p className="text-xl text-zinc-500 mb-12 max-w-xl leading-relaxed font-light">
                No hacemos sitios web, construimos herramientas de venta. Expertos en escalar marcas chilenas mediante arquitectura <span className="font-bold text-zinc-950 underline decoration-violet-500">Shopify de alto rendimiento</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <LeadButton className="px-10 py-5 bg-violet-600 text-white rounded-2xl font-bold hover:bg-violet-700 transition-all shadow-2xl shadow-violet-600/30 scale-100 hover:scale-105 active:scale-95">
                  Cotizar mi Proyecto
                </LeadButton>
                <WhatsAppButton className="px-10 py-5 bg-white border border-zinc-200 text-zinc-900 rounded-2xl font-bold hover:bg-zinc-50 transition-all flex items-center justify-center gap-2">
                   Hablar con un Experto
                </WhatsAppButton>
              </div>
            </div>
            <div className="relative">
               <div className="rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-zinc-100 transform rotate-1 hover:rotate-0 transition-transform duration-700 mb-12">
                 <Image 
                   src="/shopify_hero_card.png"
                   alt="Shopify E-commerce Expert"
                   width={800}
                   height={800}
                   priority
                   className="w-full h-auto"
                 />
               </div>
               
               <div className="bg-zinc-50/80 rounded-[3rem] p-6 lg:p-8 border border-zinc-100">
                 <FunnelAnimation type="ecommerce" />
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

        {/* Pricing Section */}
        <section id="pricing" className="py-32 bg-zinc-50 border-y border-zinc-100">
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-24">
                 <h2 className="text-4xl lg:text-7xl font-black tracking-tighter uppercase mb-6 text-zinc-950">Inversión Shopify</h2>
                 <p className="text-xl text-zinc-500 font-light">Desarrollo profesional para negocios que no juegan a vender.</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                 {plans.map((p, i) => (
                   <div key={i} className={`relative bg-white rounded-[4rem] p-10 lg:p-14 border-2 transition-all duration-500 hover:translate-y-[-10px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(124,58,237,0.1)] ${p.recommended ? 'border-violet-600 shadow-2xl shadow-violet-600/10' : 'border-zinc-100'}`}>
                      {/* Descuento Badge */}
                      <div className="absolute top-8 right-8 bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-full animate-pulse">
                        10% OFF
                      </div>
                      <h3 className="text-2xl font-black mb-2 uppercase">{p.name}</h3>
                      <p className="text-xs font-bold text-violet-600 uppercase mb-4">{p.highlight}</p>
                      <div className="mb-4">
                        {p.originalPrice && (
                          <span className="text-sm text-zinc-400 line-through mr-2 font-medium">{p.originalPrice}</span>
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
