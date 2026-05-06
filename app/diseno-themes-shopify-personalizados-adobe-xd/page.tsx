import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import { 
  Palette, 
  Code2, 
  Layers, 
  Zap, 
  Layout, 
  Smartphone, 
  Search, 
  Gem, 
  ArrowRight,
  Monitor
} from 'lucide-react';

export const metadata = {
  title: 'Diseño de Themes Shopify Personalizados | Programar Liquid y Adobe XD',
  description: 'Agencia experta en diseño de tienda Shopify. Programamos tu diseño Adobe XD a medida usando Liquid. Adaptamos y optimizamos themes Shopify para máxima conversión.',
  keywords: 'themes shopify, diseño de tienda shopify, programar diseño shopify, adaptar diseño theme shopify, programar liquid, expertos shopify chile',
};

export default function ShopifyDesignPage() {
  const shopifyFaqs = [
    {
      question: "¿Por qué diseñar en Adobe XD antes de programar?",
      answer: "Diseñar en Adobe XD nos permite iterar la experiencia de usuario (UX) sin limitaciones técnicas iniciales. Esto garantiza que el diseño sea 100% original y esté optimizado para la conversión antes de escribir una sola línea de código en Shopify."
    },
    {
      question: "¿Qué es la programación Liquid en Shopify?",
      answer: "Liquid es el motor de plantillas de Shopify. Programar en Liquid nos permite crear funciones personalizadas, secciones dinámicas y diseños únicos que no podrías lograr con una plantilla estándar de la tienda de temas."
    },
    {
      question: "¿Pueden adaptar un diseño que ya tengo en Figma o Adobe XD?",
      answer: "Sí, somos especialistas en adaptar diseños externos a Shopify. Tomamos tus archivos de diseño y los transformamos en un theme funcional, rápido y 100% editable desde el panel de Shopify."
    },
    {
      question: "¿Mi tienda será compatible con dispositivos móviles?",
      answer: "Absolutamente. Aplicamos una metodología de diseño 'Mobile-First'. Tu tienda se verá y funcionará perfectamente en smartphones, tablets y computadoras, asegurando que no pierdas ninguna venta."
    }
  ];

  const plans = [
    {
      name: "DISEÑO PRO",
      price: "$380.000",
      originalPrice: "$450.000",
      highlight: "🎨 Diseño UX/UI en Adobe XD",
      desc: "Ideal para marcas que ya tienen desarrollador pero necesitan un diseño de clase mundial.",
      features: [
        "Diseño de Home Page en Adobe XD",
        "Diseño de Ficha de Producto optimizada",
        "Diseño de Carrito y Checkout (visual)",
        "Prototipo navegable para pruebas",
        "Guía de estilos (Colores y Tipografía)",
        "3 rondas de correcciones",
        "Entrega de archivos fuente editables"
      ],
      cta: "Diseñar mi Tienda"
    },
    {
      name: "LIQUID DEV",
      price: "$650.000",
      originalPrice: "$780.000",
      highlight: "💻 Programación Liquid a medida",
      recommended: true,
      desc: "Transformamos tu diseño (XD/Figma) en un theme real y ultra rápido.",
      features: [
        "Programación Liquid desde cero",
        "Adaptación de diseño Pixel-Perfect",
        "Configuración de secciones dinámicas",
        "Optimización de velocidad (LCP < 1.5s)",
        "Instalación de apps críticas",
        "Soporte técnico por 3 meses",
        "Entrega en 4 semanas"
      ],
      cta: "Programar mi Diseño"
    },
    {
      name: "FULL BOUTIQUE",
      price: "$950.000",
      originalPrice: "$1.200.000",
      highlight: "💎 Diseño + Desarrollo + SEO",
      desc: "La solución definitiva. Nos encargamos de todo, desde la idea hasta el lanzamiento.",
      features: [
        "Todo lo del Plan Liquid Dev, más:",
        "Diseño completo en Adobe XD",
        "Optimización SEO On-Page completa",
        "Configuración de Google Analytics 4",
        "Marketing automatizado (Klaviyo)",
        "Carga de hasta 50 productos",
        "Capacitación personalizada"
      ],
      cta: "Lanzar mi Marca"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-zinc-900 overflow-x-hidden">
      <div className="pt-[22vh] lg:pt-48">
        {/* Hero Section */}
        <section className="relative pt-0 pb-32 lg:pt-0 lg:pb-40 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
          
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-violet-50 border border-violet-100 rounded-full">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] text-violet-600 uppercase">Expertos en Themes Shopify</span>
              </div>
              
              <h1 className="text-5xl lg:text-[75px] font-black tracking-tighter leading-[0.9] mb-8 uppercase text-zinc-950">
                Diseño de Tiendas <br/> <span className="text-violet-600 italic font-serif lowercase font-light">Shopify</span> <br/> a medida.
              </h1>
              
              <p className="text-lg lg:text-xl text-zinc-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                No uses plantillas baratas. Creamos <strong className="text-zinc-900">themes Shopify</strong> únicos diseñados en Adobe XD y programados en Liquid para maximizar tus ventas y velocidad.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                <LeadButton className="px-10 py-5 bg-violet-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/20 active:scale-95 text-center">
                  Obtener 10% Descuento
                </LeadButton>
                <WhatsAppButton className="px-10 py-5 bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95 text-center">
                  Hablar con un experto
                </WhatsAppButton>
              </div>
            </div>
            
            <div className="relative z-10 hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500 to-indigo-400 rounded-full blur-[80px] opacity-10 animate-pulse" />
              <div className="bg-zinc-50 border border-zinc-100 rounded-[3rem] p-4 shadow-2xl relative overflow-hidden group">
                <Image 
                  src="/adobe_xd_hero_new.png" 
                  alt="Diseño Shopify Adobe XD" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover rounded-[2.5rem] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services / Workflow */}
        <section className="py-32 bg-zinc-950 text-white rounded-[4rem] mx-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.1),transparent)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter uppercase leading-tight">
                  Diseño que <br/><span className="text-violet-400">Vende</span>
                </h2>
                <p className="text-xl text-zinc-400 mb-12 font-light leading-relaxed">
                  En Webunica fusionamos el arte de Adobe XD con la potencia de <strong className="text-white text-lg">programar Liquid</strong>. El resultado: tiendas ultra rápidas que parecen sacadas de una revista de diseño.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { t: 'Diseño Adobe XD', d: 'Prototipos de alta fidelidad antes de tocar el código.', i: <Palette className="w-6 h-6" /> },
                    { t: 'Programar Liquid', d: 'Código nativo de Shopify para máxima performance.', i: <Code2 className="w-6 h-6" /> },
                    { t: 'Adaptar Themes', d: '¿Tienes un theme pero quieres cambiarlo todo? Lo hacemos.', i: <Layers className="w-6 h-6" /> },
                    { t: 'Optimización SEO', d: 'Tiendas que no solo son lindas, sino que aparecen en Google.', i: <Search className="w-6 h-6" /> }
                  ].map((item, i) => (
                    <div key={i} className="group">
                      <div className="mb-4 p-3 bg-white/5 rounded-2xl w-fit group-hover:bg-violet-500/20 transition-colors text-violet-400">
                        {item.i}
                      </div>
                      <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-sm">{item.t}</h4>
                      <p className="text-zinc-500 text-xs leading-relaxed font-light">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 backdrop-blur-md relative z-10">
                  <h3 className="text-2xl font-black mb-8 uppercase text-center">Nuestro Proceso</h3>
                  <div className="space-y-8">
                    {[
                      { step: '01', title: 'Diseño en XD', desc: 'Creamos tu tienda visualmente pixel por pixel.' },
                      { step: '02', title: 'Programación Liquid', desc: 'Codificamos tu diseño a mano en Shopify.' },
                      { step: '03', title: 'Lanzamiento Pro', desc: 'Optimizamos y publicamos tu tienda boutique.' }
                    ].map((s, i) => (
                      <div key={i} className="flex gap-6">
                        <div className="text-4xl font-black text-violet-500/30">{s.step}</div>
                        <div>
                          <h4 className="font-bold text-white mb-1 uppercase text-sm tracking-widest">{s.title}</h4>
                          <p className="text-zinc-500 text-xs font-light">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-600/20 blur-[80px] rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section id="pricing" className="py-32 bg-zinc-50 border-y border-zinc-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-4xl lg:text-7xl font-black tracking-tighter uppercase mb-6 text-zinc-950">Tarifas Diseño</h2>
              <p className="text-xl text-zinc-500 font-light">Inversión transparente para un ecommerce de nivel internacional.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {plans.map((p, i) => (
                <div key={i} className={`relative bg-white rounded-[4rem] p-10 lg:p-14 border-2 transition-all duration-500 hover:translate-y-[-10px] shadow-sm hover:shadow-2xl hover:shadow-violet-600/10 ${p.recommended ? 'border-violet-600' : 'border-transparent'}`}>
                  {p.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest">
                      Más Vendido
                    </div>
                  )}
                  <h3 className="text-2xl font-black mb-2 uppercase">{p.name}</h3>
                  <p className="text-xs font-bold text-violet-600 uppercase mb-6">{p.highlight}</p>
                  
                  <div className="mb-8">
                    {p.originalPrice && (
                      <div className="text-sm text-zinc-400 line-through font-medium mb-1">{p.originalPrice} + iva</div>
                    )}
                    <span className="text-4xl font-black text-zinc-950">{p.price}</span>
                    <span className="text-sm text-zinc-500 font-medium ml-1">+ iva</span>
                  </div>

                  <p className="text-sm text-zinc-500 font-light mb-10 min-h-[40px]">{p.desc}</p>
                  
                  <ul className="space-y-4 mb-12">
                     {p.features.map((f, idx) => (
                       <li key={idx} className="text-sm text-zinc-600 flex gap-3">
                          <span className="text-violet-600 font-bold">✓</span>
                          {f}
                       </li>
                     ))}
                  </ul>
                  
                  <LeadButton className={`w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] transition-all ${p.recommended ? 'bg-violet-600 text-white' : 'bg-zinc-950 text-white hover:bg-zinc-800'}`}>
                    {p.cta} - 10% Descuento
                  </LeadButton>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-32 px-6">
           <div className="max-w-5xl mx-auto bg-violet-600 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
              <div className="relative z-10">
                <h2 className="text-3xl lg:text-5xl font-black text-white mb-8 tracking-tight uppercase leading-tight">
                  ¿Tu tienda merece un <br/> <span className="italic font-serif lowercase font-light text-violet-100">diseño extraordinario?</span>
                </h2>
                <p className="text-violet-100/80 text-lg mb-12 max-w-xl mx-auto font-light">
                  No te conformes con lo mismo de siempre. Destaca sobre tu competencia con un theme Shopify programado a tu medida.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <LeadButton className="px-12 py-6 bg-white text-violet-600 rounded-full font-black uppercase tracking-widest text-[11px] shadow-xl hover:scale-105 transition-all">
                    Obtener 10% Descuento Ahora
                  </LeadButton>
                  <WhatsAppButton className="px-12 py-6 bg-zinc-950 text-white rounded-full font-black uppercase tracking-widest text-[11px] shadow-xl hover:scale-105 transition-all">
                    Hablar por WhatsApp
                  </WhatsAppButton>
                </div>
              </div>
           </div>
        </section>

        {/* FAQ Section */}
        <div className="pb-32">
           <FAQSection 
             faqs={shopifyFaqs} 
             title="Dudas Diseño Shopify"
             description="Todo lo que necesitas saber sobre el diseño y programación de themes personalizados."
           />
        </div>
      </div>
    </div>
  );
}

