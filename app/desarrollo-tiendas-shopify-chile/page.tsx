import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';

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
    <div className="min-h-screen bg-white font-sans antialiased text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="pt-32 pb-20">
        {/* Shopify Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-[#95bf47] uppercase bg-[#95bf47]/10 rounded-full border border-[#95bf47]/20">
                Shopify Expert Solutions
              </span>
              <h1 className="text-4xl lg:text-[70px] font-black tracking-tighter leading-[0.9] mb-10 uppercase">
                ESCALA TU <br/><span className="text-[#95bf47]">Ecommerce</span>
              </h1>
              <p className="text-xl text-zinc-500 mb-12 max-w-xl leading-relaxed text-pretty font-light">
                No construimos solo tiendas rápidas; creamos ecosistemas de venta automatizados en **Shopify** diseñados para maximizar tu retorno de inversión desde el primer día.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <a 
                  href="https://calendly.com/javiermillar/reunion-webunica" 
                  target="_blank"
                  className="px-10 py-5 bg-[#95bf47] text-white rounded-2xl font-bold text-center hover:bg-[#82a63d] transition-all shadow-xl shadow-[#95bf47]/20"
                 >
                    Sesión Estratégica Shopify
                 </a>
              </div>
            </div>
            <div className="relative group">
               <div className="absolute -inset-10 bg-[#95bf47]/5 rounded-full blur-[100px] -z-10" />
               <div className="bg-zinc-50 border border-zinc-100 rounded-[3rem] p-10 shadow-2xl relative overflow-hidden">
                  <div className="flex justify-between items-center mb-10">
                    <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center">
                       <span className="text-2xl">🛍️</span>
                    </div>
                    <div className="px-6 py-2 bg-green-50 text-green-700 rounded-full text-xs font-bold uppercase">Ready to scale</div>
                  </div>
                  <h3 className="text-3xl font-bold mb-6">Omnicanalidad nativa</h3>
                  <p className="text-zinc-500 font-light leading-relaxed mb-8">Vende en tu web, redes sociales y puntos físicos de forma sincronizada con el mejor ecosistema e-commerce del mundo.</p>
                  <div className="p-6 bg-white rounded-2xl border border-zinc-100 italic text-zinc-400 text-sm">
                    \"La rapidez de carga con Shopify es impresionante...\"
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="bg-zinc-50 py-32 border-y border-zinc-100 px-6">
           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { t: 'Checkout Optimizado', d: 'El sistema de pagos más confiable y rápido del mundo con Shopify Pay.' },
                { t: 'Expansión Global', d: 'Configuración de mercados internacionales, idiomas y monedas múltiples.' },
                { t: 'Soporte 24/7', d: 'Arquitectura en la nube que garantiza que tu tienda nunca se caiga.' },
                { t: 'Marketing Automatizado', d: 'Integración plena con Facebook Ads, Google Shopping y TikTok.' }
              ].map((f, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-zinc-200 hover:border-[#95bf47] transition-all">
                   <h3 className="text-lg font-bold mb-3">{f.t}</h3>
                   <p className="text-zinc-500 text-sm leading-relaxed">{f.d}</p>
                </div>
              ))}
           </div>
        </section>

        {/* FAQ Section */}
        <div className="mt-20">
          <FAQSection 
            faqs={shopifyFaqs}
            title="Dudas sobre Shopify"
            description="Las claves para entender por qué las grandes marcas eligen este ecosistema."
            ctaTitle="¿Llevamos tu tienda a Shopify?"
            ctaDescription="Agenda una reunión técnica para planificar tu migración o el lanzamiento de tu nueva marca."
            ctaLabel="Agendar Consultoría en Shopify"
          />
        </div>

        {/* CTA Case Study */}
        <section className="py-32 max-w-4xl mx-auto text-center px-6">
           <h2 className="text-5xl font-extrabold mb-10 tracking-tight">Vende a todo el Mundo hoy</h2>
           <p className="text-xl text-zinc-500 mb-12 italic font-serif leading-relaxed">Únete al ecosistema que mueve el e-commerce global con un diseño experto.</p>
           <a 
            href="https://calendly.com/javiermillar/reunion-webunica" 
            target="_blank"
            className="inline-block px-12 py-6 bg-black text-white font-bold text-lg rounded-2xl hover:scale-105 transition-all shadow-2xl"
           >
              Lanzar mi Tienda Shopify
           </a>
        </section>
      </main>
    </div>
  );
}