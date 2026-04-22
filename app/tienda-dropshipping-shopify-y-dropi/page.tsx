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
  keywords: 'dropshipping, dropi chile, vender sin stock, dropshipping chile, tienda dropshiping, shopify dropi chile, tienda shopify y dropi',
};

export default function DropshippingPage() {
  const dropshippingFaqs = [
    {
      question: "¿Realmente no necesito comprar stock por adelantado?",
      answer: "Exactamente. Con el modelo Shopify + Dropi, el stock vive en las bodegas de los proveedores. Tú solo compras el producto una vez que tu cliente ya te hizo el pedido en tu tienda, lo que te permite vender sin stock y minimizar el riesgo."
    },
    {
      question: "¿Cómo funciona el Pago Contra Entrega (COD) con Dropi Chile?",
      answer: "Es el método que más vende en el dropshipping chile. Integramos tu tienda para que el cliente pague al repartidor en el momento de recibir el producto. Dropi Chile gestiona el recaudo y te entrega tu utilidad de forma automática."
    },
    {
      question: "¿La sincronización de productos es manual o automática?",
      answer: "Es 100% automática. Una vez que eliges un producto en Dropi, se crea en tu Shopify con imágenes, descripción y stock sincronizado. Si el proveedor se queda sin stock, tu tienda dropshiping se actualiza al instante."
    },
    {
      question: "¿Qué márgenes de utilidad se pueden obtener en dropshipping?",
      answer: "En promedio, los productos de dropshipping local en Chile dejan entre un 30% y un 50% de margen neto tras descontar el costo del producto y el envío, lo que lo hace un negocio altamente rentable si se escala bien."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans antialiased overflow-x-hidden">
      <main className="pt-24 pb-20">
        {/* Animated Hero Section */}
        <section className="relative px-6 py-20 lg:py-40 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full -z-10 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-600/5 blur-[120px] rounded-full -z-10" />
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/5 border border-white/10 rounded-full">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] text-purple-400 uppercase">E-commerce Automatizado</span>
              </div>
              
              <h1 className="text-6xl lg:text-[100px] font-black tracking-tighter leading-[0.85] mb-10 uppercase">
                DOMINA EL <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-amber-500">DROPSHIPPING</span> <br/>EN CHILE.
              </h1>
              
              <p className="text-xl text-zinc-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                La forma más rápida de <strong className="text-white">vender sin stock</strong>. Creamos tu <strong className="text-white">tienda dropshiping</strong> profesional conectando Shopify con <strong className="text-white">Dropi Chile</strong> para una logística 100% automática.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                 <LeadButton className="px-12 py-5 bg-white text-black font-black rounded-full hover:bg-zinc-200 transition-all shadow-xl shadow-white/5 uppercase tracking-widest text-xs">
                    Iniciar mi Tienda Dropi
                 </LeadButton>
                 <LeadButton className="px-12 py-5 border border-white/20 text-white font-black rounded-full hover:bg-white/5 transition-all uppercase tracking-widest text-xs">
                    Ver Portafolio
                 </LeadButton>
              </div>
            </div>
            
            <div className="relative group hidden lg:block">
               <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-[4rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="relative bg-zinc-900 border border-white/10 rounded-[4rem] p-4 overflow-hidden shadow-2xl">
                  <Image 
                    src="/pymes_hero_new.png" 
                    alt="Dropshipping Chile Shopify Dropi"
                    width={800}
                    height={800}
                    className="w-full h-auto rounded-[3.5rem] grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-10 right-10 bg-black/80 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
                     <div className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-amber-500" />
                        <span className="text-xs font-black uppercase tracking-widest">Pedido Automático</span>
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
                   { t: 'Stock Local Chile', d: 'Proveedores en Santiago y regiones para despachos ultra rápidos.', i: <Truck className="w-8 h-8" /> },
                   { t: 'Pago Contra Entrega', d: 'Aumenta tu conversión hasta 3x permitiendo que el cliente pague al recibir.', i: <ShieldCheck className="w-8 h-8" /> },
                   { t: 'Escalabilidad', d: 'Pasa de 1 a 100 pedidos diarios sin preocuparte por la bodega.', i: <Rocket className="w-8 h-8" /> }
                 ].map((item, i) => (
                   <div key={i} className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 hover:shadow-xl transition-all">
                      <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-purple-600 shadow-sm mb-8">
                         {item.i}
                      </div>
                      <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{item.t}</h3>
                      <p className="text-sm text-zinc-500 leading-relaxed font-light">{item.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Deep Integration Section */}
        <section className="py-32 px-6">
           <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-purple-500 mb-4 block">Alianza Estratégica</span>
                 <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-8 leading-tight">
                    Expertos en la conexión <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Shopify + Dropi</span>
                 </h2>
                 <div className="space-y-8">
                    {[
                      { t: 'Importación Masiva', d: 'Agrega cientos de productos a tu tienda dropshiping en minutos.' },
                      { t: 'Sincronización de Pedidos', d: 'Las ventas de Shopify se reflejan en Dropi automáticamente.' },
                      { t: 'Márgenes Garantizados', d: 'Configuramos tu calculadora de precios para asegurar rentabilidad.' }
                    ].map((feat, i) => (
                      <div key={i} className="flex gap-6 items-start">
                         <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                            <CheckCircle2 className="w-5 h-5" />
                         </div>
                         <div>
                            <h4 className="font-bold text-white mb-2 uppercase tracking-wide text-sm">{feat.t}</h4>
                            <p className="text-zinc-500 text-sm font-light leading-relaxed">{feat.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="relative">
                 <div className="bg-zinc-900 border border-white/10 p-12 rounded-[4rem] shadow-2xl relative z-10">
                    <div className="flex justify-between items-center mb-12">
                       <div className="flex flex-col items-center gap-2">
                          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-3">
                             <ShoppingBag className="w-full h-full text-[#95bf47]" />
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Shopify</span>
                       </div>
                       <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-8 relative">
                          <Zap className="w-4 h-4 text-purple-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce" />
                       </div>
                       <div className="flex flex-col items-center gap-2">
                          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-3">
                             <Target className="w-full h-full text-blue-600" />
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Dropi Chile</span>
                       </div>
                    </div>
                    <p className="text-center text-zinc-400 text-sm font-light italic">
                      "Tú consigues el cliente, <strong className="text-white">Dropi Chile</strong> se encarga del resto. La magia de <strong className="text-white">vender sin stock</strong>."
                    </p>
                 </div>
                 <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full" />
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
                <div key={i} className={`relative p-10 lg:p-14 rounded-[4rem] border transition-all duration-500 ${p.recommended ? 'bg-white text-zinc-950 border-purple-500 shadow-2xl scale-105 z-10' : 'bg-zinc-900 text-white border-white/5 hover:border-purple-500/30'}`}>
                   <div className="absolute top-10 right-10 bg-emerald-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full animate-pulse">
                      10% DESCUENTO
                   </div>
                   <h3 className="text-3xl font-black mb-2 uppercase tracking-tight">{p.name}</h3>
                   <p className={`text-xs font-bold uppercase mb-8 ${p.recommended ? 'text-purple-600' : 'text-purple-400'}`}>{p.highlight}</p>
                   
                   <div className="mb-10">
                      <div className={`text-sm line-through font-medium mb-1 opacity-50`}>{p.original} + iva</div>
                      <div className="flex items-baseline gap-2">
                         <span className="text-5xl font-black">{p.price}</span>
                         <span className="text-sm opacity-50 font-medium">+ iva</span>
                      </div>
                   </div>

                   <ul className="space-y-4 mb-12">
                      {p.features.map((f, idx) => (
                        <li key={idx} className={`flex items-start gap-3 text-sm font-medium ${p.recommended ? 'text-zinc-600' : 'text-zinc-400'}`}>
                           <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                           {f}
                        </li>
                      ))}
                   </ul>

                   <LeadButton className={`w-full py-5 rounded-3xl font-black uppercase tracking-widest text-[11px] transition-all ${p.recommended ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-xl shadow-purple-600/20' : 'bg-white text-black hover:bg-zinc-200 shadow-xl shadow-white/5'}`}>
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
           <h2 className="text-5xl lg:text-8xl font-black mb-12 tracking-tighter uppercase leading-[0.85]">
              EMPIEZA A <br/><span className="text-purple-500 italic font-serif lowercase font-light">facturar hoy.</span>
           </h2>
           <p className="text-zinc-500 text-xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
              No esperes más para profesionalizar tu negocio. El <strong className="text-white">dropshipping chile</strong> está explotando y Shopify + Dropi son el combo ganador.
           </p>
           <LeadButton className="px-16 py-8 bg-white text-black font-black rounded-full hover:scale-105 transition-all shadow-2xl shadow-white/10 uppercase tracking-[0.2em] text-xs">
              Configurar mi Ecosistema
           </LeadButton>
        </section>
      </main>
    </div>
  );
}