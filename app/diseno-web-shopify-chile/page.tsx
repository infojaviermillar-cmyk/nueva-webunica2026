import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import { Star, Palette, Layers, Code, Zap, Heart, ShieldCheck, ShoppingBag, ArrowRight, Layout, PencilRuler, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Diseño Shopify en Chile | Diseño de Tiendas Ecommerce Shopify',
  description: 'Especialistas en diseño Shopify en Chile. Creamos, modificamos y optimizamos tu diseño ecommerce Shopify. 3 opciones: Envato, Themes Oficiales o Diseño a Medida. ¡10% de descuento hoy!',
  keywords: 'diseño shopify, diseño tiendas Shopify, diseño ecommerce Shopify, modificar diseño shopify, crear diseño shopify, shopify chile, diseño web shopify',
};

export default function DisenoWebShopifyPage() {
  const designOptions = [
    {
      title: "Diseño Premium Envato",
      subtitle: "Estética de alto impacto",
      desc: "Utilizamos un diseño de la empresa Envato.com para dar a tu tienda una apariencia de clase mundial. Ideal para marcas que quieren destacar visualmente con plantillas ultra-profesionales.",
      features: ["Diseños modernos", "Estructuras probadas", "Gran impacto visual"],
      icon: <Layers className="w-8 h-8 text-violet-500" />,
      color: "from-violet-500/10 to-transparent"
    },
    {
      title: "Themes Oficiales Shopify",
      subtitle: "Estabilidad y velocidad",
      desc: "Implementamos themes de Shopify gratis o de pago directamente desde la Theme Store oficial. Máxima compatibilidad, velocidad de carga optimizada y actualizaciones garantizadas.",
      features: ["Optimización nativa", "Fácil mantenimiento", "Soporte oficial"],
      icon: <ShoppingBag className="w-8 h-8 text-emerald-500" />,
      color: "from-emerald-500/10 to-transparent"
    },
    {
      title: "Diseño a Medida",
      subtitle: "100% Único y Exclusivo",
      desc: "Podemos crear diseño shopify personalizado o modificar diseño shopify existente. Desde el prototipo en Figma/Adobe XD hasta la implementación final, único para tu marca.",
      features: ["Cero limitaciones", "Branding exclusivo", "CRO avanzado"],
      icon: <PencilRuler className="w-8 h-8 text-blue-500" />,
      color: "from-blue-500/10 to-transparent"
    }
  ];

  const plans = [
    {
      name: "Shopify AJUSTE",
      price: "$320.000",
      originalPrice: "$337.000",
      highlight: "🔧 Para tiendas ya creadas",
      desc: "Ideal para modificar diseño shopify y mejorar la conversión visual de tu actual ecommerce.",
      features: [
        "🎁 Plantilla Envato premium gratis",
        "Revisión visual general",
        "Mejora de home y banners",
        "Ajustes en ficha de producto",
        "Optimización mobile",
        "Soporte técnico 1 mes"
      ],
      cta: "Obtener 10% Dto"
    },
    {
      name: "Shopify PRENDE",
      price: "$580.000",
      originalPrice: "$650.000",
      highlight: "🌟 Para nuevos proyectos",
      desc: "Perfecto para crear diseño shopify desde cero con una base sólida y profesional.",
      features: [
        "Configuración completa",
        "Theme Premium incluido",
        "Carga hasta 70 productos",
        "Pagos Locales (Webpay/Flow)",
        "Logística (Shipit/Starken)",
        "Soporte 3 meses"
      ],
      cta: "Obtener 10% Dto"
    },
    {
      name: "Shopify FULL",
      price: "$780.000",
      originalPrice: "$980.000",
      highlight: "⚙️ Negocios en crecimiento",
      desc: "Diseño ecommerce Shopify avanzado con integraciones de marketing y optimización SEO.",
      recommended: true,
      features: [
        "Todo lo del Plan Prende",
        "Diseño personalizado x secciones",
        "Hasta 120 productos",
        "Google Analytics 4 + Pixel",
        "Optimización SEO Básica",
        "Capacitación personalizada"
      ],
      cta: "Obtener 10% Dto"
    },
    {
      name: "Shopify PRO",
      price: "$1.200.000",
      originalPrice: "$1.400.000",
      highlight: "🚀 Escalamiento total",
      desc: "Solución de diseño shopify a medida con integraciones complejas y estrategia Pro.",
      features: [
        "Todo lo del Plan FULL",
        "Carga hasta 300 productos",
        "Integración ERP/Bsale",
        "Marketing Automatizado",
        "Diseño 100% a medida",
        "Soporte Preferente"
      ],
      cta: "Obtener 10% Dto"
    }
  ];

  const shopifyFaqs = [
    {
      question: "¿Cuál es la diferencia entre un theme de Envato y uno oficial de Shopify?",
      answer: "Los themes de Envato suelen ser más vistosos y con más funciones integradas de fábrica, ideales para un diseño de alto impacto. Los themes oficiales de Shopify están más optimizados para el motor nativo de la plataforma y suelen ser más rápidos en actualizaciones de seguridad."
    },
    {
      question: "¿Puedo modificar el diseño de mi tienda Shopify si ya está funcionando?",
      answer: "Sí, absolutamente. Podemos entrar a tu tienda actual y modificar diseño shopify para mejorar la experiencia de usuario (UX), la interfaz (UI) y, lo más importante, la tasa de conversión (CRO)."
    },
    {
      question: "¿Cómo funciona el diseño a medida en Shopify?",
      answer: "Primero creamos un prototipo visual de cómo se verá tu tienda. Una vez aprobado, desarrollamos ese diseño directamente sobre Shopify, ya sea creando secciones personalizadas o modificando el código Liquid del theme."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-zinc-900 overflow-x-hidden">
      <main className="pt-32">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/10 blur-[120px] rounded-full -z-10 translate-x-1/3 -translate-y-1/3" />
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-violet-50 border border-violet-100 rounded-full">
                <span className="text-[10px] font-black tracking-[0.2em] text-violet-600 uppercase">Diseño Shopify Profesional</span>
              </div>
              <h1 className="text-5xl lg:text-[70px] font-black tracking-tighter leading-[0.9] mb-8 uppercase text-zinc-950">
                Diseño <span className="text-violet-600 italic font-serif lowercase font-light">Tiendas Shopify</span> Chile
              </h1>
              <p className="text-lg lg:text-xl text-zinc-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Creamos experiencias visuales que venden. Especialistas en <strong className="text-zinc-900">diseño ecommerce Shopify</strong>. Optimizamos cada pixel para que tu marca destaque en el mercado chileno.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start mb-12">
                <LeadButton className="px-8 py-4 bg-violet-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/20 active:scale-95 text-center flex items-center justify-center gap-2">
                  Solicitar Cotización
                </LeadButton>
                <Link 
                  href="https://calendly.com/webunica" 
                  target="_blank"
                  className="px-8 py-4 bg-white text-zinc-900 border-2 border-zinc-200 rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:border-zinc-900 transition-all active:scale-95 text-center flex items-center justify-center gap-2"
                >
                  Agendar Reunión
                </Link>
                <WhatsAppButton className="px-8 py-4 bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95 text-center flex items-center justify-center gap-2">
                  WhatsApp Directo
                </WhatsAppButton>
              </div>

              <div className="flex items-center gap-8 justify-center lg:justify-start">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 relative overflow-hidden">
                      <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Empresas confían en nosotros</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-violet-500/20 blur-[100px] rounded-full group-hover:bg-violet-500/30 transition-all duration-700" />
              <div className="relative bg-white/40 backdrop-blur-xl border border-white/20 p-4 rounded-[3rem] shadow-2xl overflow-hidden">
                <Image 
                  src="/tecno.png" 
                  alt="Diseño Shopify Ecommerce" 
                  width={800} 
                  height={600} 
                  className="rounded-[2rem] w-full h-auto shadow-lg transform group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3 Forms of Design Section */}
        <section className="py-32 bg-zinc-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-6 text-zinc-950">
                3 Formas de ver el <span className="text-violet-600">Diseño Shopify</span>
              </h2>
              <p className="text-xl text-zinc-500 font-light max-w-2xl mx-auto">
                No importa en qué etapa esté tu negocio, tenemos una solución de diseño adaptada a tus objetivos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {designOptions.map((opt, i) => (
                <div key={i} className={`group bg-white p-10 rounded-[3rem] border border-zinc-100 hover:border-violet-200 hover:shadow-2xl transition-all duration-500 bg-gradient-to-b ${opt.color}`}>
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-8 group-hover:scale-110 transition-transform">
                    {opt.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-2 uppercase text-zinc-950">{opt.title}</h3>
                  <p className="text-xs font-bold text-violet-600 uppercase mb-6 tracking-widest">{opt.subtitle}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed font-light mb-8">
                    {opt.desc}
                  </p>
                  <ul className="space-y-4">
                    {opt.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs font-bold text-zinc-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action - SEO Keywords focus */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tighter uppercase mb-8">
              ¿Necesitas <span className="text-violet-600">crear diseño shopify</span> o mejorar el actual?
            </h2>
            <p className="text-lg text-zinc-500 font-light mb-12">
              Ya sea que busques <strong className="text-zinc-900">modificar diseño shopify</strong> para vender más o quieras una tienda totalmente nueva, nuestro equipo de expertos está listo para ayudarte.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <LeadButton className="px-10 py-5 bg-zinc-950 text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-zinc-800 transition-all shadow-xl">
                Empezar Proyecto
              </LeadButton>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-32 bg-zinc-50 border-y border-zinc-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-4xl lg:text-7xl font-black tracking-tighter uppercase mb-6 text-zinc-950">Planes de Diseño</h2>
              <p className="text-xl text-zinc-500 font-light italic">¡Aprovecha hoy un 10% de descuento en todos nuestros planes!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {plans.map((p, i) => (
                <div key={i} className={`relative bg-white rounded-[4rem] p-10 lg:p-14 border-2 transition-all duration-500 hover:translate-y-[-10px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(124,58,237,0.1)] ${p.recommended ? 'border-violet-600 shadow-2xl shadow-violet-600/10' : 'border-zinc-100'}`}>
                  {/* Descuento Badge */}
                  <div className="absolute -top-4 -right-4 bg-emerald-500 text-white text-[10px] font-black px-4 py-2 rounded-full shadow-lg transform rotate-12">
                    10% OFF HOY
                  </div>
                  
                  <h3 className="text-2xl font-black mb-2 uppercase">{p.name}</h3>
                  <p className="text-[10px] font-black text-violet-600 uppercase mb-4 tracking-widest">{p.highlight}</p>
                  
                  <div className="mb-8">
                    {p.originalPrice && (
                      <div className="text-sm text-zinc-400 line-through font-medium mb-1">{p.originalPrice} + iva</div>
                    )}
                    <span className="text-4xl font-black text-zinc-900">{p.price}</span>
                    <span className="text-xs text-zinc-500 font-medium ml-1">+ iva</span>
                  </div>

                  <p className="text-sm text-zinc-500 font-light mb-8 min-h-[50px] leading-relaxed italic border-l-2 border-violet-100 pl-4">
                    {p.desc}
                  </p>

                  <ul className="space-y-4 mb-12">
                    {p.features.map((f, idx) => (
                      <li key={idx} className="text-xs text-zinc-600 flex gap-3 font-medium">
                        <span className="text-violet-600 font-bold">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <LeadButton className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all ${p.recommended ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30' : 'bg-zinc-950 text-white hover:bg-zinc-800 shadow-lg shadow-zinc-950/20'}`}>
                    {p.cta}
                  </LeadButton>
                </div>
              ))}
            </div>
            
            <div className="mt-20 text-center">
              <div className="inline-flex items-center gap-6 px-10 py-4 bg-white border border-zinc-100 rounded-full shadow-sm">
                <span className="text-xs font-black uppercase tracking-widest text-zinc-400">Medios de pago:</span>
                <div className="flex gap-4 items-center opacity-40 grayscale">
                  <span className="text-[10px] font-black uppercase">Webpay</span>
                  <span className="text-[10px] font-black uppercase">Flow</span>
                  <span className="text-[10px] font-black uppercase">Mercado Pago</span>
                  <span className="text-[10px] font-black uppercase">6 Cuotas Sin Interés</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 bg-zinc-950 text-white rounded-[5rem] mx-4 my-20 relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.1),transparent)] pointer-events-none" />
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter uppercase leading-tight">
                    ¿Por qué somos tu <br/><span className="text-violet-400">Agencia Shopify</span> en Chile?
                 </h2>
                 <div className="space-y-8">
                    {[
                      { t: 'Partner Oficial Shopify', d: 'Contamos con la experiencia y certificaciones necesarias para manejar tu tienda.' },
                      { t: 'Foco en Conversión', d: 'No solo hacemos tiendas bonitas, hacemos tiendas que convierten visitas en ventas.' },
                      { t: 'Soporte Local', d: 'Hablamos en chileno. Soporte rápido y directo para solucionar tus dudas.' }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 group">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                          <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white uppercase tracking-wider mb-1">{item.t}</h4>
                          <p className="text-zinc-400 text-sm font-light leading-relaxed">{item.d}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-white/5 p-12 rounded-[4rem] border border-white/10 backdrop-blur-xl relative">
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-violet-600/20 blur-[50px] rounded-full" />
                 <h3 className="text-2xl font-black mb-6 uppercase">Expertos en Ecommerce</h3>
                 <p className="text-zinc-400 leading-relaxed mb-10 font-light">
                   El <strong className="text-white font-bold">diseño ecommerce Shopify</strong> no es algo que deba dejarse al azar. Entendemos el comportamiento del consumidor digital en Chile y adaptamos tu tienda para el éxito.
                 </p>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                      <div className="text-3xl font-black mb-1 text-violet-400">98%</div>
                      <div className="text-[9px] uppercase font-bold text-zinc-500 tracking-[0.2em]">Satisfacción</div>
                    </div>
                    <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                      <div className="text-3xl font-black mb-1 text-violet-400">+150</div>
                      <div className="text-[9px] uppercase font-bold text-zinc-500 tracking-[0.2em]">Tiendas Lanzadas</div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* FAQ Section */}
        <div className="pb-32 bg-white">
          <FAQSection 
            faqs={shopifyFaqs} 
            title="Dudas sobre Diseño Shopify"
            description="Respondemos las preguntas más frecuentes sobre la creación y modificación de diseños en Shopify Chile."
          />
        </div>

        {/* Final CTA Section */}
        <section className="py-32 bg-zinc-50 border-t border-zinc-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-10 text-zinc-950">¿Listo para despegar?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
               <LeadButton className="px-12 py-6 bg-violet-600 text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-violet-700 transition-all shadow-2xl shadow-violet-600/30 active:scale-95">
                 Obtener mi presupuesto con 10% OFF
               </LeadButton>
               <WhatsAppButton className="px-12 py-6 bg-emerald-500 text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all shadow-2xl shadow-emerald-500/30 active:scale-95">
                 Hablar con un experto
               </WhatsAppButton>
            </div>
            <p className="mt-12 text-sm text-zinc-400 font-medium uppercase tracking-[0.2em]">Respuesta en menos de 24 horas hábiles</p>
          </div>
        </section>
      </main>
    </div>
  );
}