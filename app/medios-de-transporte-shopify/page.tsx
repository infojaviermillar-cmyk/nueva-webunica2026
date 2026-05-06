import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import { 
  Truck, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  MapPin, 
  Clock, 
  Printer, 
  Package, 
  CheckCircle2,
  ArrowRight,
  Globe
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Envíos en Shopify Chile | Transporte y Empresas de Logística 2026',
  description: 'Guía completa sobre envíos en Shopify Chile. Conecta Shipit, Sendu, Bluexpress, Starken y Correos de Chile. Automatiza tu transporte Shopify y ahorra tiempo.',
  keywords: 'envios en shopify, transporte shopify, empresas chile transporte shopify, logistica shopify chile, shipit shopify, bluexpress shopify',
};

export default function ShippingPage() {
  const couriers = [
    { 
      name: "Shipit", 
      desc: "El multicourier #1 en Chile. Conecta con Starken, Bluexpress, Chilexpress y más desde una sola app.",
      icon: "⚡",
      pros: ["Multicourier automático", "Retiro en tu bodega", "Seguro de carga"]
    },
    { 
      name: "Bluexpress", 
      desc: "Especialistas en e-commerce con la mayor red de puntos de retiro (Puntos Blue) en todo Chile.",
      icon: "🔵",
      pros: ["Precios competitivos", "Excelente red rural", "API nativa"]
    },
    { 
      name: "Sendu", 
      desc: "Optimización inteligente de rutas y gestión de flota propia o externa para máxima eficiencia.",
      icon: "🚀",
      pros: ["Tracking en tiempo real", "Prueba de entrega digital", "Rutas optimizadas"]
    },
    { 
      name: "Starken", 
      desc: "La empresa con mayor cobertura geográfica en Chile. Ideal para envíos grandes o a regiones extremas.",
      icon: "📦",
      pros: ["Cobertura nacional", "Precios por volumen", "Integración confiable"]
    }
  ];

  const benefits = [
    { title: "Cálculo en Tiempo Real", desc: "El cliente ve el costo exacto del envío según su comuna antes de pagar.", icon: <BarChart3 className="w-6 h-6" /> },
    { title: "Etiquetas Automáticas", desc: "Genera e imprime etiquetas masivamente sin errores manuales.", icon: <Printer className="w-6 h-6" /> },
    { title: "Tracking Automático", desc: "Notifica al cliente por mail o WhatsApp apenas el paquete sale a ruta.", icon: <MapPin className="w-6 h-6" /> },
    { title: "Menos Fricción", desc: "Reduce el abandono de carrito al ofrecer múltiples opciones de envío.", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-zinc-900 overflow-x-hidden">
      <div className="pt-[22vh] lg:pt-48">
        {/* Hero Section */}
        <section className="relative pt-0 pb-32 lg:pt-0 lg:pb-40 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-amber-50 border border-amber-100 rounded-full">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] text-amber-600 uppercase">Logística Inteligente</span>
              </div>
              
              <h1 className="text-5xl lg:text-[75px] font-black tracking-tighter leading-[0.9] mb-8 uppercase text-zinc-950">
                Envíos en <br/> <span className="text-amber-500 italic font-serif lowercase font-light">Shopify</span> <br/> Chile 2026.
              </h1>
              
              <p className="text-lg lg:text-xl text-zinc-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Deja de escribir etiquetas a mano. Conecta tu tienda con las mejores <strong className="text-zinc-900">empresas de transporte Shopify</strong> en Chile y automatiza tu logística de punta a punta.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                <LeadButton className="px-10 py-5 bg-zinc-950 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200 active:scale-95 text-center flex items-center justify-center gap-2">
                   Optimizar mi Transporte
                </LeadButton>
                <WhatsAppButton className="px-10 py-5 bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95 text-center">
                  Consultar por Integraciones
                </WhatsAppButton>
              </div>
            </div>
            
            <div className="relative z-10 hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-orange-400 rounded-full blur-[80px] opacity-10 animate-pulse" />
              <div className="relative bg-zinc-50 border border-zinc-100 rounded-[3rem] p-12 shadow-2xl overflow-hidden group">
                 <Truck className="w-64 h-64 text-zinc-200 absolute -bottom-10 -right-10 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                 <div className="relative z-10">
                   <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 mb-6 max-w-[280px]">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Orden #4502</span>
                        <span className="px-2 py-1 bg-amber-100 text-amber-600 text-[8px] font-black rounded uppercase">En Ruta</span>
                      </div>
                      <div className="h-2 w-full bg-zinc-100 rounded-full mb-2">
                        <div className="h-full w-2/3 bg-amber-500 rounded-full" />
                      </div>
                      <p className="text-xs font-bold text-zinc-900">Despacho Bluexpress</p>
                   </div>
                   <div className="bg-white p-6 rounded-2xl shadow-lg border border-zinc-100 max-w-[280px] ml-12">
                      <div className="flex items-center gap-3 mb-3">
                         <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">✓</div>
                         <span className="text-xs font-bold">Etiqueta Generada</span>
                      </div>
                      <p className="text-[10px] text-zinc-500 font-light italic">"El mensajero retirará tu paquete en 2 horas."</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Couriers Showcase */}
        <section className="py-32 bg-zinc-950 text-white rounded-[4rem] mx-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05),transparent)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tighter uppercase leading-tight">
                Empresas de <span className="text-amber-500">Transporte</span> en Chile
              </h2>
              <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
                No tienes que elegir una sola. Te ayudamos a integrar un ecosistema que elige automáticamente el mejor Courier para cada zona.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {couriers.map((c, i) => (
                <div key={i} className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 hover:border-amber-500/50 transition-all group">
                   <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{c.icon}</div>
                   <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{c.name}</h3>
                   <p className="text-zinc-500 text-sm leading-relaxed font-light mb-8">{c.desc}</p>
                   <ul className="space-y-3">
                      {c.pros.map((p, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[11px] font-bold text-zinc-300">
                           <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                           {p}
                        </li>
                      ))}
                   </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 bg-zinc-50 border-y border-zinc-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 mb-4 block">Eficiencia Operativa</span>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-8 text-zinc-950">
                  ¿Por qué automatizar <br/>tus envíos?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {benefits.map((b, i) => (
                    <div key={i}>
                       <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-4">
                          {b.icon}
                       </div>
                       <h4 className="font-bold text-zinc-900 mb-2 uppercase tracking-wide text-xs">{b.title}</h4>
                       <p className="text-zinc-500 text-xs leading-relaxed font-light">{b.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-white p-10 rounded-[3rem] border border-zinc-100 shadow-2xl relative z-10">
                   <h3 className="text-xl font-black mb-8 uppercase text-center">El Proceso Ideal</h3>
                   <div className="space-y-8">
                      {[
                        { s: '01', t: 'Venta en Shopify', d: 'La orden entra al sistema sincronizada.' },
                        { s: '02', t: 'Selección de Courier', d: 'El software elige la opción más barata/rápida.' },
                        { s: '03', t: 'Impresión y Envío', d: 'Imprimes la etiqueta y el Courier retira.' }
                      ].map((step, i) => (
                        <div key={i} className="flex gap-6 items-start">
                           <div className="text-4xl font-black text-amber-500/20">{step.s}</div>
                           <div>
                              <h4 className="font-bold text-zinc-900 mb-1 uppercase text-[11px] tracking-widest">{step.t}</h4>
                              <p className="text-zinc-500 text-xs font-light">{step.d}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-600/10 blur-[80px] rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* CCS Warning Section (Optional but relevant for trust) */}
        <section className="py-32 px-6">
           <div className="max-w-5xl mx-auto bg-amber-500 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-5xl font-black text-white mb-8 tracking-tight uppercase leading-tight">
                   Domina la logística <br/> <span className="italic font-serif lowercase font-light text-amber-50">en todo Chile</span>
                </h2>
                <p className="text-amber-50 text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
                  Evita reclamos por retrasos y costos sorpresa. Implementamos soluciones de transporte que escalan con tu negocio.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <LeadButton className="px-12 py-6 bg-zinc-950 text-white rounded-full font-black uppercase tracking-widest text-[11px] shadow-xl hover:scale-105 transition-all">
                    Cotizar Integración Logística
                  </LeadButton>
                  <WhatsAppButton className="px-12 py-6 bg-white text-amber-600 rounded-full font-black uppercase tracking-widest text-[11px] shadow-xl hover:scale-105 transition-all">
                    Hablar con un Especialista
                  </WhatsAppButton>
                </div>
              </div>
           </div>
        </section>

        {/* Final SEO Text */}
        <section className="py-24 max-w-4xl mx-auto px-6 text-center border-t border-zinc-100">
           <h3 className="text-2xl font-bold mb-6 text-zinc-900 uppercase tracking-widest">Envíos en Shopify: Tu ventaja competitiva</h3>
           <p className="text-zinc-500 font-light leading-relaxed mb-8">
             Un sistema de <strong className="text-zinc-950">transporte Shopify</strong> eficiente no solo te ahorra tiempo operativo, sino que mejora drásticamente la percepción de tu marca. En el mercado chileno, ofrecer opciones claras con empresas como Bluexpress o Starken es fundamental para generar confianza y cerrar ventas.
           </p>
           <div className="flex justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex flex-col items-center">
                 <Package className="w-8 h-8 mb-2" />
                 <span className="text-[10px] font-black uppercase tracking-[0.2em]">Secure Pack</span>
              </div>
              <div className="flex flex-col items-center">
                 <Globe className="w-8 h-8 mb-2" />
                 <span className="text-[10px] font-black uppercase tracking-[0.2em]">Global Ship</span>
              </div>
              <div className="flex flex-col items-center">
                 <Clock className="w-8 h-8 mb-2" />
                 <span className="text-[10px] font-black uppercase tracking-[0.2em]">Fast Delivery</span>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}

