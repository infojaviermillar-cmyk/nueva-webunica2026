import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';

export const metadata = {
  title: 'Desarrollo de Tiendas Online WooCommerce en Chile | Webunica',
  description: 'Expertos en creación de e-commerce robustos con WooCommerce. Control total de tu tienda, integración con Webpay y diseño orientado a maximizar ventas sin comisiones.',
  keywords: 'tiendas online woocommerce chile, desarrollo ecommerce wordpress, experto woocommerce chile, crear tienda online profesional',
};

export default function WooCommercePage() {
  const wooFaqs = [
    {
      question: "¿Qué ventajas tiene WooCommerce frente a Shopify?",
      answer: "La principal ventaja es la libertad y el ahorro. Con WooCommerce no pagas comisiones por cada venta ni mensualidades fijas por la plataforma. Además, eres dueño total del código y los datos de tu tienda, permitiendo personalizaciones que en otras plataformas son imposibles."
    },
    {
      question: "¿Es seguro procesar pagos en mi propia web con WooCommerce?",
      answer: "Sí, es totalmente seguro. Utilizamos certificados SSL de alto nivel y protocolos de seguridad cifrados para conectar con pasarelas como Webpay Plus o Flow. Los datos bancarios nunca se guardan en tu sitio, sino en los servidores seguros del procesador de pagos."
    },
    {
      question: "¿Cuántos productos puede gestionar una tienda WooCommerce?",
      answer: "Con una optimización profesional y un hosting de alta calidad (como el que ofrecemos en Webunica), WooCommerce puede gestionar desde unos pocos productos hasta catálogos de más de 20.000 SKUs sin perder velocidad."
    },
    {
      question: "¿Cómo integro los despachos de Starken o Chilepost?",
      answer: "Integramos plugins especializados como Shipit o Envia.com que calculan el costo de envío en tiempo real según el peso del producto y la ubicación del cliente, generando etiquetas de despacho de forma automática."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Desarrollo E-commerce WooCommerce",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Webunica"
    },
    "description": "Desarrollo de tiendas online profesionales basadas en WordPress y WooCommerce para empresas chilenas.",
    "areaServed": "CL"
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="pt-32 pb-20">
        {/* Professional Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-purple-600 uppercase bg-purple-50 rounded-full border border-purple-100 uppercase font-black">
                Soluciones E-commerce de Alto Nivel
              </span>
              <h1 className="text-6xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.85] mb-10 text-zinc-900">
                VENTAS SIN <br/><span className="text-zinc-400 font-serif italic lowercase font-light">Comisiones</span>
              </h1>
              <p className="text-xl text-zinc-500 mb-12 max-w-xl leading-relaxed text-pretty">
                Toma el control absoluto de tu negocio con **WooCommerce**. Potencia, escalabilidad y la libertad de ser el único dueño de tu éxito digital. Sin pagos mensuales por plataforma.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <a 
                  href="https://calendly.com/javiermillar/reunion-webunica" 
                  target="_blank"
                  className="px-10 py-5 bg-purple-600 text-white rounded-2xl font-bold text-center hover:bg-purple-700 transition-all shadow-xl shadow-purple-100"
                 >
                    Planificar mi Ecommerce
                 </a>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-10 bg-purple-50 rounded-full blur-[100px] -z-10" />
              <div className="rounded-[3rem] overflow-hidden border border-zinc-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] bg-white p-4">
                <Image 
                  src="/portfolio_woocommerce_premium_1776264357191.png"
                  alt="WooCommerce Enterprise Store Showcase"
                  width={800}
                  height={800}
                  className="w-full h-auto rounded-[2rem] transform group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tactical Features */}
        <section className="bg-zinc-950 py-32 rounded-[4rem] mx-4 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
          <div className="max-w-7xl mx-auto px-10">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div>
                   <h3 className="text-3xl font-bold mb-6 text-white uppercase tracking-tighter">Dueño <br/>de los Datos</h3>
                   <p className="text-zinc-400 font-light leading-relaxed">A diferencia de otras plataformas, con WooCommerce tú posees cada bit de información de tus clientes y ventas.</p>
                </div>
                <div>
                   <h3 className="text-3xl font-bold mb-6 text-white uppercase tracking-tighter">Integración <br/>Nacional</h3>
                   <p className="text-zinc-400 font-light leading-relaxed">Webpay Plus, Flow, Starken y Shipit integrados de forma nativa para el mercado chileno.</p>
                </div>
                <div>
                   <h3 className="text-3xl font-bold mb-6 text-white uppercase tracking-tighter">SEO <br/>Avanzado</h3>
                   <p className="text-zinc-400 font-light leading-relaxed">WordPress es la plataforma número 1 para SEO. Tu tienda WooCommerce rankeará más rápido en Google.</p>
                </div>
             </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="mt-20">
          <FAQSection 
            faqs={wooFaqs}
            title="Dudas sobre WooCommerce"
            description="Lo que necesitas saber para elegir la plataforma más flexible del mercado."
            ctaTitle="¿Escalamos tu facturación hoy?"
            ctaDescription="Agenda una sesión para analizar la factibilidad de tu proyecto y cómo migrar o empezar con WooCommerce."
            ctaLabel="Agendar Evaluación WooCommerce"
          />
        </div>

        {/* CTA Case Study */}
        <section className="py-32 max-w-4xl mx-auto text-center px-6">
           <h2 className="text-5xl font-extrabold mb-10 text-zinc-900 tracking-tight">Potencia Corporativa en tus Manos</h2>
           <p className="text-xl text-zinc-500 mb-12 italic font-serif">Escala sin límites y sin pagar de más por cada venta que logres.</p>
           <a 
            href="https://calendly.com/javiermillar/reunion-webunica" 
            target="_blank"
            className="inline-block px-12 py-6 bg-zinc-950 text-white font-bold text-lg rounded-2xl hover:scale-105 transition-all shadow-2xl"
           >
              Iniciar mi Proyecto Ecommerce
           </a>
        </section>
      </main>
    </div>
  );
}
