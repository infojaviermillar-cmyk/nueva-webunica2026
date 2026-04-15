import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';

export const metadata = {
  title: 'Tienda Dropshipping Shopify y Dropi en Chile | Webunica',
  description: 'Inicia tu negocio de dropshipping en Chile con Shopify y Dropi. Automatización total de pedidos, catálogo de proveedores locales y diseño orientado a conversión.',
  keywords: 'dropshipping chile, shopify dropi integración, crear tienda dropshipping chile, ecommerce automatizado',
};

export default function DropshippingPage() {
  const dropshippingFaqs = [
    {
      question: "¿Realmente no necesito comprar stock por adelantado?",
      answer: "Exactamente. Con el modelo Shopify + Dropi, el stock vive en las bodegas de los proveedores. Tú solo compras el producto una vez que tu cliente ya te hizo el pedido en tu tienda."
    },
    {
      question: "¿Cómo funciona el Pago Contra Entrega (COD)?",
      answer: "Es el método que más vende en Chile. Integramos tu tienda para que el cliente pague al repartidor en el momento de recibir el producto. Dropi gestiona el recaudo y te entrega tu utilidad de forma automática."
    },
    {
      question: "¿La sincronización de productos es manual o automática?",
      answer: "Es 100% automática. Una vez que eliges un producto en Dropi, se crea en tu Shopify con imágenes, descripción y stock sincronizado. Si el proveedor se queda sin stock, tu tienda se actualiza al instante."
    },
    {
      question: "¿Qué márgenes de utilidad se pueden obtener?",
      answer: "En promedio, los productos de dropshipping local en Chile dejan entre un 30% y un 50% de margen neto tras descontar el costo del producto y el envío, lo que lo hace un negocio altamente rentable si se escala bien."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Desarrollo de Tiendas Dropshipping Shopify + Dropi",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Webunica"
    },
    "description": "Configuración y diseño de ecosistemas dropshipping para emprendedores en Chile.",
    "areaServed": "CL"
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="pt-32 pb-20">
        {/* Animated Hero Section */}
        <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full -z-10" />
          
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-6xl lg:text-[7rem] font-black tracking-tighter leading-[0.9] mb-8 text-white">
              VENDE SIN <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 uppercase">STOCK</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 text-pretty font-light leading-relaxed">
              Llevamos tu tienda de Dropshipping al siguiente nivel integrando <strong>Shopify + Dropi</strong>. Automatiza tus pedidos y enfócate solo en escalar.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <a 
                href="https://calendly.com/javiermillar/reunion-webunica" 
                target="_blank"
                className="px-12 py-5 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-all shadow-xl shadow-white/5"
               >
                  Agendar Asesoría Dropshipping
               </a>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="max-w-7xl mx-auto px-6 py-20">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-900/50 p-10 rounded-[2.5rem] border border-white/5 hover:border-purple-500/30 transition-all group">
                 <div className="w-14 h-14 bg-purple-500/20 text-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="node" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                 </div>
                 <h3 className="text-2xl font-bold mb-4">Sincronización Total</h3>
                 <p className="text-zinc-500 font-light">Importa productos de Dropi a tu Shopify con un solo clic. Stock y precios siempre al día.</p>
              </div>

              <div className="bg-zinc-900/50 p-10 rounded-[2.5rem] border border-white/5 hover:border-pink-500/30 transition-all group">
                 <div className="w-14 h-14 bg-pink-500/20 text-pink-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
                 <h3 className="text-2xl font-bold mb-4">Pago Contra Entrega</h3>
                 <p className="text-zinc-500 font-light">Configuramos el método preferido en Chile para que tus ventas se disparen desde el día 1.</p>
              </div>

              <div className="bg-zinc-900/50 p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all group">
                 <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
                 <h3 className="text-2xl font-bold mb-4">Márgenes Reales</h3>
                 <p className="text-zinc-500 font-light">Estrategia de precios y calculadora de rentabilidad integrada en tu proceso de ventas.</p>
              </div>
           </div>
        </section>

        {/* Comparison Section */}
        <section className="py-32 px-6">
           <div className="max-w-5xl mx-auto bg-white text-zinc-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <h2 className="text-4xl font-extrabold mb-8 leading-tight text-black tracking-tight">¿Por qué Shopify + Dropi?</h2>
                    <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                       Dropi elimina la barrera logística en Chile, permitiéndote vender productos con stock local y despacho en 24-48 horas. Shopify te da la plataforma robusta y profesional para escalar.
                    </p>
                    <ul className="space-y-4">
                       <li className="flex items-center gap-3 font-bold text-zinc-800">
                          <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px]">✓</span> 
                          Retiros en punto de despacho automáticos.
                       </li>
                       <li className="flex items-center gap-3 font-bold text-zinc-800">
                          <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-[10px]">✓</span> 
                          Conciliación de pagos en tiempo real.
                       </li>
                    </ul>
                 </div>
                 <div className="bg-zinc-100 p-8 rounded-3xl aspect-video flex items-center justify-center border-2 border-dashed border-zinc-300">
                    <p className="text-zinc-400 font-bold italic">Integración 100% Automática</p>
                 </div>
              </div>
           </div>
        </section>

        {/* FAQ Section */}
        <div className="rounded-[4rem] bg-white text-zinc-950 mx-4 overflow-hidden mt-20">
          <FAQSection 
            faqs={dropshippingFaqs}
            title="Dudas sobre Dropshipping"
            description="Las preguntas clave que todo emprendedor chileno se hace antes de empezar con Dropi."
            ctaTitle="¿Escalamos tus ventas este mes?"
            ctaDescription="Agenda una sesión técnica para revisar tu nicho y cómo automatizar todo el flujo logístico."
            ctaLabel="Agendar mi llamada estratégica"
          />
        </div>
      </main>
    </div>
  );
}
