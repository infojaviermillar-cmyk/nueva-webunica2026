import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';

export const metadata = {
  title: 'Expertos en Diseño de Tiendas Shopify en Chile | Webunica',
  description: 'Desarrollamos tiendas Shopify de alto impacto. Optimización de conversión, integración de pagos locales y diseño profesional para marcas que buscan escalar su e-commerce.',
  keywords: 'expertos shopify chile, diseño tienda shopify, desarrollo ecommerce shopify, agencia shopify santiago',
};

export default function ShopifyPage() {
  const shopifyFaqs = [
    {
      question: "¿Cuánto cuesta mantener una tienda Shopify al mes?",
      answer: "Shopify tiene diferentes planes según el tamaño de tu negocio, comenzando desde aprox. $19 USD/mes. A esto debes sumar el costo de las aplicaciones que decidas instalar y la comisión por transacción si usas pasarelas externas."
    },
    {
      question: "¿Puedo vender en el extranjero con mi tienda Shopify?",
      answer: "Sí, Shopify es la plataforma líder para el comercio global. Permite configurar múltiples monedas, idiomas y reglas de impuestos automáticas para que tu marca no tenga fronteras."
    },
    {
      question: "¿Es necesario saber programar para gestionar mi tienda?",
      answer: "Para nada. Shopify es extremadamente amigable. Tras el lanzamiento, te entregamos una capacitación para que puedas gestionar stock, pedidos y contenidos de forma autónoma sin tocar una sola línea de código."
    },
    {
      question: "¿Qué tipo de soporte ofrecen tras el lanzamiento?",
      answer: "Ofrecemos planes de acompañamiento mensual para optimizar la tasa de conversión, actualizar contenidos y asegurar que tu tienda siempre esté operando bajo los mejores estándares de la industria."
    }
  ];

  const plans = [
    {
      name: "Tienda Shopify PRENDE",
      price: "$580.000",
      highlight: "Ideal para emprendedores que inician",
      features: [
        "Configuración completa de tienda Shopify",
        "Conexión de dominio + validación de correo",
        "Instalación de plantilla premium Envato / Shopify",
        "Carga de hasta 70 productos (carga masiva)",
        "Migración básica desde otra plataforma",
        "Certificado SSL incluido",
        "Medio de pago (Mercado Pago, PayPal, Flow, etc.)",
        "Métodos de envío por pagar y tarifa única",
        "Multicourier fulfillment (Shipit.cl o Sendu.cl)",
        "App Botón de WhatsApp y Facturación",
        "Soporte técnico 3 meses"
      ],
      time: "Hasta 4 semanas",
      cta: "Plan Prende"
    },
    {
      name: "Tienda Shopify FULL",
      price: "$780.000",
      priceTo: "$980.000",
      highlight: "Para negocios en crecimiento",
      features: [
        "Todo lo del Plan Prende, más:",
        "Capacidad para hasta 120 productos",
        "Diseño personalizado por secciones",
        "Integración con Google Analytics y FB Pixel",
        "Optimización SEO Básica (H2, Textos, Meta)",
        "Ajustes avanzados de estructura",
        "Chat en vivo (Tawk.to o WhatsApp Biz)",
        "Newsletter y formulario de suscripción",
        "Capacitación personalizada con videos",
        "Correos automáticos de carritos abandonados"
      ],
      recommended: true,
      time: "Hasta 6 semanas",
      cta: "Lanzar Plan Full"
    },
    {
      name: "Tienda Shopify PRO",
      price: "$1.200.000",
      priceTo: "$1.400.000",
      highlight: "Para marcas que desean escalar",
      features: [
        "Todo lo del Plan FULL, más:",
        "Carga o migración de hasta 300 productos",
        "Integración con ERP/Bsale (sujeto a evaluación)",
        "Automatización de marketing (Mailchimp/Klaviyo)",
        "Optimización SEO Avanzada (Imágenes, Títulos)",
        "Configuración App (Google Ads / Meta Ads)",
        "Configuración completa de Analytics 4",
        "Plantilla ultra personalizada a medida",
        "Páginas optimizadas para campañas",
        "Integración externa (Calendly, CRM, Zapier)",
        "Videos de ayuda exclusivos para administración"
      ],
      time: "Hasta 8 semanas",
      cta: "Escalar con Plan PRO"
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Desarrollo E-commerce Shopify",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Webunica"
    },
    "description": "Servicios profesionales de diseño, configuración y optimización de tiendas online Shopify.",
    "areaServed": "CL"
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-zinc-900 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="pt-20 lg:pt-32">
        {/* Shopify Hero */}
        <section className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32 overflow-hidden">
          {/* Background Texture Overlay */}
          <div className="absolute inset-0 z-0 opacity-[0.25] pointer-events-none">
            <Image 
              src="/bg-01.jpg" 
              alt="Background Texture" 
              fill 
              className="object-cover object-center" 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div data-aos="fade-right">
              <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-violet-600 uppercase bg-violet-50 rounded-full border border-violet-100">
                Shopify Expert Solutions
              </span>
              <h1 className="text-5xl lg:text-[85px] font-black tracking-tighter leading-[0.85] mb-10 uppercase text-zinc-950">
                ESCALA TU <br/><span className="text-violet-600 font-serif italic lowercase font-light">Ecommerce</span>
              </h1>
              <p className="text-xl text-zinc-500 mb-12 max-w-xl leading-relaxed text-pretty font-light">
                No construimos solo tiendas rápidas; creamos ecosistemas de venta automatizados en **Shopify** diseñados para maximizar tu retorno de inversión desde el primer día.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                 <LeadButton 
                  className="px-10 py-5 bg-violet-600 text-white rounded-2xl font-bold text-center hover:bg-violet-700 transition-all shadow-2xl shadow-violet-600/30 scale-100 hover:scale-105 active:scale-95"
                 >
                    Sesión Estratégica Shopify
                 </LeadButton>
                 <a href="#pricing" className="px-10 py-5 bg-zinc-50 border border-zinc-200 text-zinc-900 rounded-2xl font-bold text-center hover:bg-white transition-all">
                    Ver Planes 2026
                 </a>
              </div>
            </div>
            <div className="relative group" data-aos="zoom-in">
               <div className="absolute -inset-10 bg-violet-500/10 rounded-full blur-[100px] -z-10 group-hover:bg-violet-500/20 transition-all duration-1000" />
               <div className="rounded-[4rem] overflow-hidden border border-zinc-100 shadow-[0_50px_100px_-20px_rgba(124,58,237,0.15)] bg-white p-6 md:p-10 transform -rotate-2 group-hover:rotate-0 transition-transform duration-700">
                 <Image 
                   src="/shopify_hero_card.png"
                   alt="Shopify Expert Showcase"
                   width={1000}
                   height={1000}
                   priority
                   quality={90}
                   className="w-full h-auto rounded-[3rem] transform group-hover:scale-105 transition-transform duration-1000"
                 />
               </div>
            </div>
          </div>
        </section>

        {/* Lead Magnet Section */}
        <section className="py-24 bg-zinc-950 mx-4 rounded-[4rem] relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent pointer-events-none" />
           <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 tracking-tighter uppercase">
                ¿Listo para despegar en Shopify?
              </h2>
              <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Obtén un <span className="text-violet-400 font-bold">10% de DESCUENTO</span> directo en tu cotización al dejarnos tu correo. Hagamos que tu marca destaque.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                 <LeadButton className="px-12 py-6 bg-violet-600 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl shadow-violet-600/40 hover:scale-105 active:scale-95 transition-all">
                    Reclamar mi 10% de descuento
                 </LeadButton>
              </div>
           </div>
        </section>

        {/* Tactical Features Grid */}
        <section className="max-w-7xl mx-auto px-6 py-32">
           <div className="text-center mb-24">
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-6 text-zinc-950">Vende más, <span className="text-zinc-400">esfuerzate menos</span></h2>
              <p className="text-xl text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed">Automatizamos todo el proceso para que te enfoques en lo que realmente importa: tu negocio.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { t: 'Checkout Optimizado', d: 'El sistema de pagos más confiable y rápido del mundo con Shopify Pay.', icon: '💳' },
                { t: 'Expansión Global', d: 'Configuración de mercados internacionales, idiomas y monedas múltiples.', icon: '🌍' },
                { t: 'Soporte 24/7', d: 'Arquitectura en la nube que garantiza que tu tienda nunca se caiga.', icon: '⚡' },
                { t: 'Marketing Automatizado', d: 'Integración plena con Facebook Ads, Google Shopping y TikTok.', icon: '📊' }
              ].map((f, i) => (
                <div key={i} className="bg-zinc-50 p-10 rounded-[3rem] border border-zinc-100 hover:bg-white hover:border-violet-200 hover:shadow-2xl hover:shadow-violet-600/5 transition-all group">
                   <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">{f.icon}</div>
                   <h3 className="text-xl font-bold mb-4 text-zinc-950">{f.t}</h3>
                   <p className="text-zinc-500 text-sm leading-relaxed font-light">{f.d}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-32 bg-[#fcfcfc] border-y border-zinc-100 relative overflow-hidden">
           <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-violet-600/5 blur-[100px] rounded-full" />
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-24">
                 <span className="text-xs font-black tracking-[0.3em] text-violet-600 uppercase mb-4 block">Inversión Inteligente</span>
                 <h2 className="text-4xl lg:text-7xl font-black tracking-tighter uppercase mb-10 text-zinc-950">Planes Shopify 2026</h2>
                 <p className="text-xl text-zinc-500 max-w-3xl mx-auto font-light leading-relaxed">Soluciones escalables diseñadas para cada etapa de tu negocio. Sin costos ocultos.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                 {plans.map((plan, i) => (
                   <div key={i} className={`relative bg-white rounded-[4rem] p-10 lg:p-14 border-2 transition-all duration-500 hover:translate-y-[-10px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(124,58,237,0.1)] ${plan.recommended ? 'border-violet-500' : 'border-zinc-100 hover:border-violet-200'}`}>
                      {plan.recommended && (
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                          Más Elegido
                        </div>
                      )}
                      <div className="mb-10">
                        <h3 className="text-2xl font-black text-zinc-900 mb-2 uppercase">{plan.name}</h3>
                        <p className="text-xs font-bold text-violet-500 uppercase tracking-wider mb-6">{plan.highlight}</p>
                        <div className="flex flex-col gap-1">
                          <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-black tracking-tight">{plan.price}</span>
                            <span className="text-zinc-400 font-bold">+ IVA</span>
                          </div>
                          {plan.priceTo && (
                             <div className="text-zinc-400 font-bold line-through ml-1">{plan.priceTo}</div>
                          )}
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-zinc-500 text-sm font-medium">
                           <span className="text-lg">💳</span> Paga en 6 cuotas sin interés
                        </div>
                      </div>

                      <ul className="space-y-4 mb-12">
                         {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-sm text-zinc-600 font-light">
                               <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                 <svg className="w-3 h-3 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                               </div>
                               {feature}
                            </li>
                         ))}
                      </ul>

                      <div className="mt-auto space-y-4">
                         <LeadButton className={`w-full py-5 rounded-2xl font-bold text-center transition-all ${plan.recommended ? 'bg-violet-600 text-white shadow-xl shadow-violet-600/20 hover:bg-violet-700' : 'bg-zinc-950 text-white hover:bg-zinc-800'}`}>
                            {plan.cta}
                         </LeadButton>
                         <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest pt-4">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            {plan.time}
                         </div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Global CTA Section / Meetings */}
        <section className="py-32 max-w-7xl mx-auto px-6">
           <div className="bg-zinc-950 rounded-[5rem] p-12 lg:p-24 text-center relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.1),transparent)] pointer-events-none" />
              <div className="relative z-10 max-w-4xl mx-auto">
                 <h2 className="text-4xl lg:text-7xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.9]">
                    ¿Prefieres una <br/><span className="text-violet-400 italic font-serif lowercase font-light">Atención Directa?</span>
                 </h2>
                 <p className="text-xl text-zinc-400 mb-14 max-w-2xl mx-auto font-light leading-relaxed">
                    Agenda una reunión inicial o solicita tu cotización personalizada sin costo hoy mismo.
                 </p>
                 <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <LeadButton className="px-12 py-6 bg-white text-zinc-950 font-black uppercase tracking-widest text-[11px] rounded-[2rem] hover:scale-105 active:scale-95 transition-all w-full md:w-auto">
                       Solicitar Cotización Gratis
                    </LeadButton>
                    <WhatsAppButton className="px-12 py-6 bg-[#25d366] text-white font-black uppercase tracking-widest text-[11px] rounded-[2rem] hover:scale-105 active:scale-95 transition-all w-full md:w-auto flex items-center justify-center gap-3 shadow-2xl shadow-[#25d366]/20">
                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.552.92 3.14 1.403 4.887 1.403 5.421 0 9.832-4.412 9.835-9.835.002-2.628-1.023-5.1-2.885-6.963-1.862-1.861-4.331-2.884-6.953-2.885-5.424 0-9.837 4.412-9.839 9.835-.001 1.83.524 3.614 1.517 5.176l-1.008 3.682 3.773-.99zm10.749-6.354c-.287-.144-1.701-.84-1.967-.936-.267-.096-.462-.144-.657.144-.195.288-.753.936-.922 1.129-.169.193-.338.216-.625.072-.287-.144-1.21-.447-2.305-1.423-.852-.76-1.427-1.7-1.593-1.987-.167-.287-.018-.443.126-.586.129-.129.287-.336.43-.504.144-.168.191-.288.287-.48.096-.192.048-.36-.024-.504-.072-.144-.657-1.585-.9-2.16-.234-.56-.475-.483-.655-.492-.17-.008-.364-.009-.558-.009s-.51.072-.776.36c-.267.288-1.018 1.008-1.018 2.459 0 1.45 1.056 2.855 1.203 3.048.147.193 2.078 3.174 5.035 4.453.703.305 1.252.487 1.68.623.709.226 1.354.194 1.864.118.57-.085 1.701-.696 1.944-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.193-.554-.337z" /></svg>
                       Consultar por WhatsApp
                    </WhatsAppButton>
                    <a 
                      href="https://calendly.com/javiermillar/reunion-webunica" 
                      target="_blank" 
                      className="px-12 py-6 bg-violet-600 text-white font-black uppercase tracking-widest text-[11px] rounded-[2rem] hover:scale-105 active:scale-95 transition-all w-full md:w-auto flex items-center justify-center gap-3 shadow-2xl shadow-violet-600/40"
                    >
                       <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                       Agendar Reunión Inicial
                    </a>
                 </div>
              </div>
           </div>
        </section>

        {/* FAQ Section */}
        <div className="pb-32">
          <FAQSection 
            faqs={shopifyFaqs}
            title="Dudas sobre Shopify"
            description="Resolvemos los desafíos comunes antes de dar el gran paso al e-commerce global."
            ctaTitle="¿Tu marca está lista?"
            ctaDescription="Hablemos sobre tu visión y cómo la tecnología puede impulsarla."
            ctaLabel="Agendar Consultoría Gratuita"
          />
        </div>
      </main>
    </div>
  );
}