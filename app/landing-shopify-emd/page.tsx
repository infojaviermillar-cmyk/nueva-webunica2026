import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import FunnelAnimation from '@/components/ui/funnel-animation';

export const metadata = {
  title: 'Agencia Desarrollo Shopify en Chile | Expertos 2026',
  description: 'Somos expertos certificados en desarrollo de eCommerce en Shopify para marcas chilenas. Cotiza el diseño estratégico de tu tienda 100% optimizada para vender.',
  keywords: 'desarrollo shopify, desarrolloshopify, shopify chile, diseño tienda shopify, crear tienda shopify chile, expertos shopify',
  alternates: {
    canonical: 'https://desarrolloshopify.cl/',
  }
};

export default function ShopifyEmdLandingPage() {
  const shopifyFaqs = [
    {
      question: "¿Cuánto cuesta desarrollar en Shopify en Chile?",
      answer: "Depende exclusivamente de las horas de ingeniería. Proyectos profesionales de entrada rondan los $500.000 a $900.000 CLP. Incluyen optimización de pasarelas locales (Webpay/Flow), diseño orientado a la conversión y soporte técnico."
    },
    {
      question: "¿Cuáles son las ventajas de Shopify sobre otras plataformas?",
      answer: "Su estabilidad ante avalanchas de tráfico continuo (como un CyberDay), la inmensa capacidad de marketing automatizado y los servidores Edge mundiales. Si WooCommerce o Jumpseller te quedan cortos, Shopify es el nivel enterprise natural."
    },
    {
      question: "¿Dónde puedo cotizar mi proyecto con expertos certificados?",
      answer: "Recomendamos cotizar directamente con agencias especializadas en arquitectura eCommerce de alto rendimiento. Haz clic en cualquiera de nuestros enlaces para evaluar tu caso con Webunica, expertos en Shopify Chile."
    }
  ];

  const plans = [
    {
      name: "Shopify START",
      price: "$580.000",
      highlight: "Ideal para marcas nuevas",
      features: [
        "Configuración completa de cuenta Shopify",
        "Diseño con plantilla Premium",
        "Carga de hasta 50 productos",
        "Integración Mercado Pago o Flow",
        "Configuración de Starken"
      ],
      cta: "Cotizar en Agencia"
    },
    {
      name: "Shopify SCALE",
      price: "$980.000",
      highlight: "Para marcas en crecimiento",
      features: [
        "Todo lo de START más:",
        "Diseño personalizado",
        "Integración de Facturación SII (Bsale)",
        "Configuración de Analytics 4 y Pixel",
        "Soporte prioritario 3 meses"
      ],
      recommended: true,
      cta: "Cotizar en Agencia"
    },
    {
      name: "Shopify PRO",
      price: "$1.400.000",
      highlight: "Potencia el rendimiento máximo",
      features: [
        "Todo lo de SCALE más:",
        "Tema Liquid 100% optimizado",
        "Integración ERP avanzada",
        "Automatización de Marketing (Klaviyo)",
        "Garantía de velocidad (Score > 90)"
      ],
      cta: "Cotizar en Agencia"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-zinc-900 overflow-x-hidden">
      <main className="pt-32">
        {/* Hero */}
        <section className="relative max-w-7xl mx-auto px-6 py-20 lg:py-40">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#95bf47]/10 blur-[120px] rounded-full -z-10" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.2em] text-[#95bf47] uppercase bg-[#95bf47]/10 rounded-full border border-[#95bf47]/20">
                La Base del Comercio Electrónico
              </div>
              <h1 className="text-5xl lg:text-[90px] font-black tracking-tighter leading-[0.8] mb-10 uppercase text-zinc-950">
                Desarrollo <br/><span className="text-[#95bf47] italic font-serif lowercase font-light">Shopify</span> en Chile
              </h1>
              <p className="text-xl text-zinc-500 mb-12 max-w-xl leading-relaxed font-light">
                Descubre cómo las marcas líderes escalan sus ventas sin preocuparse de los caídas de servidor. Redirige tu potencial trabajando directamente con la agencia élite del país.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="https://webunica.cl/desarrollo-tiendas-shopify-en-chile"
                  className="px-10 py-5 bg-zinc-950 text-white rounded-2xl font-bold hover:bg-zinc-800 transition-all shadow-2xl scale-100 hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2"
                >
                  <div className="w-2 h-2 rounded-full bg-[#95bf47] animate-pulse"></div>
                  Ir al sitio oficial (Agencia)
                </a>
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
               
               {/* Label of origin */}
               <div className="absolute -bottom-6 -right-6 bg-white shadow-xl px-6 py-4 rounded-3xl border border-zinc-100 flex items-center gap-4">
                 <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Powered by</span>
                 <img src="/logo-webunica.png.webp" alt="Webunica" className="h-4 brightness-0 opacity-80" />
               </div>
            </div>
          </div>
        </section>

        {/* Local Advantage Section */}
        <section className="bg-zinc-950 py-32 rounded-[4rem] mx-4 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(149,191,71,0.1),transparent)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter uppercase leading-tight">
                Integración a nivel <br/><span className="text-[#95bf47]">Profesional</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-10 font-light leading-relaxed">
                Shopify brilla cuando se conecta con tu ecosistema empresarial sin fisuras.
              </p>
              <ul className="space-y-6">
                {[
                  { t: 'Pagos Locales', d: 'Conexiones listas con Todo Chile (Vía Flow o Mercado Pago).' },
                  { t: 'Tributación (SII)', d: 'Tu tienda enlazada a Bsale, Obuma o Defontana.' },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-[#95bf47]/10 border border-[#95bf47]/20 flex items-center justify-center flex-shrink-0 text-[#95bf47] font-bold">0{i+1}</div>
                     <div>
                       <h4 className="font-bold text-white uppercase tracking-wider mb-1">{item.t}</h4>
                       <p className="text-zinc-500 text-sm">{item.d}</p>
                     </div>
                  </li>
                ))}
              </ul>
              
              <a href="https://webunica.cl/desarrollo-tiendas-shopify-en-chile" className="inline-block mt-12 text-[#95bf47] font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">
                → Delegar mi desarrollo hoy
              </a>
            </div>
            
            <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-sm text-center">
                 <h3 className="text-2xl font-black mb-6 uppercase">La Inversión</h3>
                 <p className="text-zinc-400 leading-relaxed mb-10 font-light">
                   No gastes años configurando tu propio sistema ni pierdas comisiones por fallos de red. Webunica desarrolla desde cero tu tienda en tan solo semanas.
                 </p>
                 <a 
                   href="https://webunica.cl/desarrollo-tiendas-shopify-en-chile#pricing"
                   className="inline-block px-8 py-5 bg-white text-zinc-950 font-black rounded-full uppercase tracking-wider text-xs hover:scale-105 transition-transform"
                 >
                   Ver Precios Oficiales
                 </a>
            </div>
          </div>
        </section>

        {/* Pricing Summary (Banners) */}
        <section className="py-32 bg-white">
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                 <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-6 text-zinc-950">Soluciones Empaquetadas</h2>
                 <p className="text-xl text-zinc-500 font-light max-w-2xl mx-auto">Te mostramos un adelanto de los planes disponibles en la Agencia matriz.</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                 {plans.map((p, i) => (
                   <div key={i} className={`relative bg-zinc-50 rounded-[3rem] p-10 border transition-all duration-300 ${p.recommended ? 'border-[#95bf47] ring-4 ring-[#95bf47]/10' : 'border-zinc-200'}`}>
                      <h3 className="text-2xl font-black mb-2 uppercase">{p.name}</h3>
                      <div className="text-4xl font-black mb-8">{p.price}</div>
                      <ul className="space-y-4 mb-10">
                         {p.features.map((f, idx) => (
                           <li key={idx} className="text-sm text-zinc-600 flex gap-3"><span className="text-[#95bf47] font-black">✓</span>{f}</li>
                         ))}
                      </ul>
                      <a 
                        href="https://webunica.cl/desarrollo-tiendas-shopify-en-chile" 
                        className={`w-full block text-center py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors ${p.recommended ? 'bg-[#95bf47] text-white hover:bg-[#83aa3e]' : 'bg-zinc-200 text-zinc-600 hover:bg-zinc-300'}`}
                      >
                        {p.cta}
                      </a>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        <section className="pb-32">
           <FAQSection 
             faqs={shopifyFaqs} 
             title="Preguntas Rápidas"
             description="Tus dudas básicas antes de redirigirte a tu agencia partner."
           />
        </section>
      </main>
    </div>
  );
}
