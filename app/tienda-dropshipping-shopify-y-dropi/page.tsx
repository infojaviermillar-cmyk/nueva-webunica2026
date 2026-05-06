import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import { Metadata } from 'next';
import { 
  Zap, 
  ShoppingBag, 
  Truck, 
  Target, 
  BarChart3, 
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Package,
  Globe
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Dropshipping Chile | Tienda Shopify y Dropi Local (2026)',
  description: 'Inicia tu negocio de dropshipping en Chile con Shopify y Dropi. Vende sin stock con proveedores locales, pago contra entrega y logística 100% automatizada.',
  keywords: 'dropshipping chile, dropi chile, vender sin stock chile, shopify dropi chile, tienda dropshipping automatizada, proveedores dropshipping chile, ecommerce contra entrega chile, ganar dinero online chile',
};


export default function DropshippingPage() {
  const dropshippingFaqs = [
    {
      question: "¿Qué es Dropi Chile y cómo funciona con Shopify?",
      answer: "Dropi Chile es la plataforma logística líder para dropshipping local. Se conecta directamente con Shopify para importar productos de proveedores chilenos a tu tienda. Cuando vendes, el pedido se envía a Dropi automáticamente, ellos lo despachan y tú cobras tu ganancia."
    },
    {
      question: "¿Realmente no necesito comprar stock por adelantado?",
      answer: "Exactamente. Con el modelo Shopify + Dropi, el stock vive en las bodegas de los proveedores en Chile. Tú solo compras el producto una vez que tu cliente ya te hizo el pedido en tu tienda, lo que te permite vender sin stock y minimizar el riesgo financiero."
    },
    {
      question: "¿Cómo funciona el Pago Contra Entrega (COD) con Dropi Chile?",
      answer: "Es el método que más vende en el dropshipping chile. Integramos tu tienda para que el cliente pague al repartidor en el momento de recibir el producto. Dropi Chile gestiona el recaudo mediante transportadoras como Blue Express y te entrega tu utilidad de forma automática."
    },
    {
      question: "¿La sincronización de productos es manual o automática?",
      answer: "Es 100% automática. Una vez que eliges un producto en Dropi, se crea en tu Shopify con imágenes, descripción y stock sincronizado. Si el proveedor se queda sin stock en su bodega en Santiago, tu tienda dropshiping se actualiza al instante."
    },
    {
      question: "¿Cuánto tiempo tarda el envío con proveedores de Dropi Chile?",
      answer: "Al ser dropshipping local, los envíos suelen tardar entre 24 a 48 horas hábiles en la Región Metropolitana y hasta 4 días en regiones extremas. Esto es una ventaja enorme comparado con los 20 días que tarda China."
    },
    {
      question: "¿Necesito ser experto en tecnología para usar Dropi Chile?",
      answer: "No, nosotros configuramos todo el ecosistema por ti. Te entregamos la tienda conectada, los métodos de pago listos y la integración con Dropi Chile operativa para que tú solo te enfoques en elegir productos y vender."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Configuración de Tiendas Dropshipping con Dropi Chile",
    "description": "Desarrollo profesional de tiendas Shopify integradas con Dropi para dropshipping local en Chile con pago contra entrega.",
    "provider": {
      "@type": "Organization",
      "name": "Webunica",
      "url": "https://webunica.cl"
    },
    "areaServed": "CL",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Planes Dropshipping",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dropshipping Básico"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dropshipping Avanzado"
          }
        }
      ]
    }
  };


  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-[22vh] lg:pt-48 pb-20">
        {/* Animated Hero Section */}
        <section className="relative pt-0 pb-32 lg:pt-0 lg:pb-40 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/5 blur-[150px] rounded-full -z-10 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-600/5 blur-[120px] rounded-full -z-10" />
          
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-zinc-100 border border-zinc-200 rounded-full">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] text-purple-600 uppercase">E-commerce Automatizado</span>
              </div>
              
              <h1 className="text-[2.2rem] xs:text-5xl lg:text-[75px] font-black tracking-tighter leading-[0.9] mb-8 uppercase text-zinc-950 break-words">
                DOMINA EL <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600">DROPSHIPPING</span> <br/>EN CHILE.
              </h1>
              
              <p className="text-lg lg:text-xl text-zinc-600 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                La forma más rápida de <strong className="text-zinc-950">vender sin stock</strong>. Creamos tu <strong className="text-zinc-950">tienda dropshipping</strong> profesional conectando Shopify con <strong className="text-zinc-950">Dropi Chile</strong> para una logística 100% automática.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                 <LeadButton className="px-12 py-5 bg-zinc-950 text-white font-black rounded-full hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-950/10 uppercase tracking-widest text-xs">
                    Iniciar mi Tienda Dropi
                 </LeadButton>
                 <LeadButton className="px-12 py-5 border border-zinc-200 text-zinc-950 font-black rounded-full hover:bg-zinc-50 transition-all uppercase tracking-widest text-xs">
                    Ver Portafolio
                 </LeadButton>
              </div>
            </div>
            
            <div className="relative group hidden lg:block">
               <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/10 to-pink-600/10 rounded-[4rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="relative bg-zinc-50 border border-zinc-200 rounded-[4rem] p-4 overflow-hidden shadow-2xl">
                  <Image 
                    src="/pymes_hero_new.png" 
                    alt="Dropshipping Chile Shopify Dropi"
                    width={800}
                    height={800}
                    className="w-full h-auto rounded-[3.5rem] grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-10 right-10 bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-zinc-200">
                     <div className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-amber-500" />
                        <span className="text-xs font-black uppercase tracking-widest text-zinc-950">Pedido Automático</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>


        {/* Tactical Keywords Section */}
        <section className="py-32 bg-white text-zinc-950 rounded-[4rem] mx-4 relative overflow-hidden">
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-24">
                 <h2 className="text-4xl lg:text-7xl font-black mb-8 tracking-tighter uppercase leading-tight">
                    ¿Por qué el <span className="text-purple-600">Dropshipping Chile</span> es el negocio del momento?
                 </h2>
                 <p className="text-xl text-zinc-500 font-light max-w-3xl mx-auto">
                    El modelo de <strong className="text-zinc-950">dropshipping</strong> local elimina los largos tiempos de espera de China. Con <strong className="text-zinc-950">Dropi Chile</strong>, tus clientes reciben sus productos en 24-48 horas.
                 </p>
              </div>
              
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { t: 'Vender Sin Stock', d: 'No arriesgues capital. Solo pagas al proveedor cuando ya has vendido el producto.', i: <Package className="w-8 h-8" /> },
                    { t: 'Dropi Chile Local', d: 'Proveedores en Santiago y regiones para despachos ultra rápidos en 24-48h.', i: <Truck className="w-8 h-8" /> },
                    { t: 'Pago Contra Entrega', d: 'Aumenta tu conversión hasta 3x con Dropi permitiendo que el cliente pague al recibir.', i: <ShieldCheck className="w-8 h-8" /> },
                    { t: 'Escalabilidad Real', d: 'Pasa de 1 a 100 pedidos diarios sin preocuparte por la logística o bodega.', i: <Rocket className="w-8 h-8" /> }
                  ].map((item, i) => (
                    <div key={i} className="p-10 bg-white rounded-[3rem] border border-zinc-200 hover:shadow-xl transition-all">
                       <div className="w-16 h-16 bg-zinc-50 rounded-3xl flex items-center justify-center text-purple-600 shadow-sm mb-8 border border-zinc-100">
                          {item.i}
                       </div>
                       <h3 className="text-xl font-black mb-4 uppercase tracking-tight text-zinc-900">{item.t}</h3>
                       <p className="text-sm text-zinc-600 leading-relaxed font-light">{item.d}</p>
                    </div>
                  ))}
               </div>

           </div>
        </section>

        {/* Deep Integration Section */}
        <section className="py-32 px-6 bg-zinc-50 rounded-[4rem] mx-4 mb-20">
           <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-purple-600 mb-4 block">Alianza Estratégica</span>
                 <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-8 leading-tight text-zinc-900">
                    Expertos en la conexión <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Shopify + Dropi Chile</span>
                 </h2>
                 <div className="space-y-8">
                    {[
                      { t: 'Importación Masiva', d: 'Agrega cientos de productos ganadores desde Dropi Chile a tu tienda en minutos.' },
                      { t: 'Sincronización de Pedidos', d: 'Las ventas de Shopify se reflejan en la plataforma Dropi automáticamente para despacho.' },
                      { t: 'Márgenes Garantizados', d: 'Configuramos tu calculadora de precios para asegurar rentabilidad real en Chile.' }
                    ].map((feat, i) => (
                      <div key={i} className="flex gap-6 items-start">
                         <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                            <CheckCircle2 className="w-5 h-5" />
                         </div>
                         <div>
                            <h4 className="font-bold text-zinc-900 mb-2 uppercase tracking-wide text-sm">{feat.t}</h4>
                            <p className="text-zinc-600 text-sm font-light leading-relaxed">{feat.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative">
                 <div className="bg-white border border-zinc-200 p-12 rounded-[4rem] shadow-2xl relative z-10">
                    <div className="flex justify-between items-center mb-12">
                       <div className="flex flex-col items-center gap-2">
                          <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center p-3 border border-zinc-100">
                             <ShoppingBag className="w-full h-full text-[#95bf47]" />
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Shopify</span>
                       </div>
                       <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-8 relative">
                          <Zap className="w-4 h-4 text-purple-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce" />
                       </div>
                       <div className="flex flex-col items-center gap-2">
                          <div className="w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center p-3 border border-zinc-100">
                             <Target className="w-full h-full text-blue-600" />
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Dropi Chile</span>
                       </div>
                    </div>
                    <p className="text-center text-zinc-600 text-sm font-light italic">
                      "Tú consigues el cliente, <strong className="text-zinc-900">Dropi Chile</strong> se encarga del resto. La magia de <strong className="text-zinc-900">vender sin stock</strong>."
                    </p>
                 </div>
                 <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
              </div>
           </div>
        </section>


        {/* Dropshipping Plans */}
        <section id="planes" className="py-32 max-w-7xl mx-auto px-6">
           <div className="text-center mb-20">
              <span className="text-[10px] font-black uppercase tracking-widest text-purple-500 mb-4 block">Inversión Inteligente</span>
              <h2 className="text-4xl lg:text-7xl font-black mb-6 uppercase tracking-tighter">Planes <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Dropi Chile</span></h2>
              <p className="text-xl text-zinc-500 font-light">Estructuras diseñadas para vender sin stock y escalar rápido.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Dropshipping Básico",
                  price: "$580.000",
                  original: "$650.000",
                  highlight: "Ideal para iniciar",
                  features: [
                    "Desarrollo Tienda Dropshipping Dropi",
                    "Configuración completa Shopify",
                    "Dominio + Validación correo",
                    "Plantilla Premium Envato / Shopify",
                    "Carga hasta 70 productos desde Dropi",
                    "Sincronización plataforma Dropi",
                    "Pago por entrega o Tradicional",
                    "Certificado SSL y Panel administrador",
                    "1 Medio de pago (Webpay/Flow/Etc)",
                    "Integración Bluexpress (Dropi)",
                    "Categorías y Colecciones",
                    "WhatsApp + Redes Sociales",
                    "Soporte 3 meses (3 cambios)",
                    "Entrega: Hasta 4 semanas"
                  ]
                },
                {
                  name: "Dropshipping Avanzado",
                  price: "$780.000",
                  original: "$980.000",
                  highlight: "Para escalar volumen",
                  features: [
                    "Todo lo del Plan Básico +",
                    "Carga hasta 250 productos Dropi",
                    "Optimización de Conversión (CRO)",
                    "Configuración de Pixel y Analytics",
                    "Diseño de Banners personalizados",
                    "SEO de categorías avanzado",
                    "Soporte prioritario",
                    "Entrega: Hasta 5 semanas"
                  ],
                  recommended: true
                }
               ].map((p, i) => (
                 <div key={i} className={`relative p-10 lg:p-14 rounded-[4rem] border transition-all duration-500 ${p.recommended ? 'bg-zinc-950 text-white border-purple-500 shadow-2xl scale-105 z-10' : 'bg-zinc-50 text-zinc-950 border-zinc-200 hover:border-purple-500/30'}`}>
                    <div className="absolute top-10 right-10 bg-emerald-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full animate-pulse">
                       10% DESCUENTO
                    </div>
                    <h3 className="text-3xl font-black mb-2 uppercase tracking-tight">{p.name}</h3>
                    <p className={`text-xs font-bold uppercase mb-8 ${p.recommended ? 'text-purple-400' : 'text-purple-600'}`}>{p.highlight}</p>
                    
                    <div className="mb-10">
                       <div className={`text-sm line-through font-medium mb-1 opacity-50`}>{p.original} + iva</div>
                       <div className="flex items-baseline gap-2">
                          <span className="text-5xl font-black">{p.price}</span>
                          <span className="text-sm opacity-50 font-medium">+ iva</span>
                       </div>
                    </div>

                    <ul className="space-y-4 mb-12">
                       {p.features.map((f, idx) => (
                         <li key={idx} className={`flex items-start gap-3 text-sm font-medium ${p.recommended ? 'text-zinc-400' : 'text-zinc-600'}`}>
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            {f}
                         </li>
                       ))}
                    </ul>

                    <LeadButton className={`w-full py-5 rounded-3xl font-black uppercase tracking-widest text-[11px] transition-all ${p.recommended ? 'bg-white text-zinc-950 hover:bg-zinc-200 shadow-xl shadow-white/5' : 'bg-zinc-950 text-white hover:bg-zinc-800 shadow-xl shadow-zinc-950/10'}`}>
                       Obtener 10% Descuento
                    </LeadButton>
                 </div>
               ))}

           </div>
        </section>

        {/* FAQ Section */}
        <div className="rounded-[4rem] bg-white text-zinc-950 mx-4 overflow-hidden mt-20">
          <FAQSection 
            faqs={dropshippingFaqs}
            title="Dudas sobre Dropshipping"
            description="Todo lo que necesitas saber para triunfar en el dropshipping chile."
            ctaTitle="¿Obtén un 10% de Descuento?"
            ctaDescription="Inicia tu tienda dropshiping hoy y recibe un descuento especial en la configuración."
            ctaLabel="Quiero mi 10% Descuento"
          />
        </div>

        {/* Final CTA */}
        <section className="py-40 text-center px-6">
           <h2 className="text-5xl lg:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.85] text-zinc-900">
              EMPIEZA A <br/><span className="text-purple-600 italic font-serif lowercase font-light">facturar hoy.</span>
           </h2>
           <p className="text-zinc-600 text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              No esperes más para profesionalizar tu negocio. El <strong className="text-zinc-900">dropshipping chile</strong> está explotando y Shopify + Dropi Chile son el combo ganador.
           </p>
           <LeadButton className="px-16 py-8 bg-zinc-950 text-white font-black rounded-full hover:scale-105 transition-all shadow-2xl shadow-zinc-950/10 uppercase tracking-[0.2em] text-xs">
              Configurar mi Ecosistema
           </LeadButton>
        </section>

      </div>
    </div>
  );
}