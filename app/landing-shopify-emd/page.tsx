import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import { ShoppingBag, MonitorSmartphone, Rocket, Star, CheckCircle2, ShoppingCart, Search, Zap, ShieldCheck, Box, HelpCircle, ArrowRight, LayoutTemplate } from 'lucide-react';

export const metadata = {
  title: 'Desarrollo de Tiendas Shopify Chile | Diseño, Planes y Costos',
  description: 'Creamos tiendas Shopify profesionales, pensadas para vender, con diseño atractivo, configuración técnica, personalización de themes y estructura lista para crecer.',
  keywords: 'desarrollo shopify chile, tiendas shopify, diseño shopify, partners shopify, ecommerce chile',
  alternates: {
    canonical: 'https://desarrolloshopify.cl/',
  }
};

export default function ShopifyEmdLandingPage() {
  const features = [
    { title: "Configuración técnica", desc: "Dominio, checkout, notificaciones y analítica.", icon: <Zap className="w-6 h-6 text-pink-600" /> },
    { title: "Diseño & Branding", desc: "Adaptación de tu identidad de marca al entorno digital.", icon: <Star className="w-6 h-6 text-pink-600" /> },
    { title: "Catálogo", desc: "Estructura de colecciones y carga optimizada de productos.", icon: <Box className="w-6 h-6 text-pink-600" /> },
    { title: "Logística y Pagos", desc: "Integración con pasarelas de pago y operadores de envío.", icon: <ShoppingCart className="w-6 h-6 text-pink-600" /> },
    { title: "SEO Base", desc: "Configuración para que Google encuentre tu tienda.", icon: <Search className="w-6 h-6 text-pink-600" /> },
    { title: "Capacitación", desc: "Sesión para que aprendas a gestionar tus ventas de forma autónoma.", icon: <MonitorSmartphone className="w-6 h-6 text-pink-600" /> }
  ];

  const themeTypes = [
    { type: "Gratuitos (Dawn, etc.)", ideal: "Emprendimientos iniciales", pros: "Sin costo de licencia, rápidos.", cons: "Personalización limitada." },
    { type: "Premium", ideal: "Marcas en crecimiento", pros: "Funciones avanzadas, mejor UX.", cons: "Pago único de licencia." },
    { type: "Personalizados", ideal: "Requerimientos únicos", pros: "Exclusividad total y flexibilidad.", cons: "Mayor tiempo de desarrollo." }
  ];

  const processSteps = [
    { step: "01", name: "Diagnóstico", desc: "Entendemos tus objetivos y audiencia." },
    { step: "02", name: "Estructura", desc: "Definimos el mapa del sitio y flujo de compra." },
    { step: "03", name: "Desarrollo", desc: "Configuración técnica y diseño visual." },
    { step: "04", name: "Ajustes", desc: "Revisión de detalles y pruebas de navegación." },
    { step: "05", name: "Lanzamiento", desc: "Tu tienda sale al mundo." },
    { step: "06", name: "Soporte", desc: "Te acompañamos en los primeros días de operación." }
  ];

  const sitemap = [
    { title: "Inicio (Home)", desc: "Tu vitrina principal." },
    { title: "Colecciones", desc: "Segmentación lógica de productos." },
    { title: "Ficha de Producto", desc: "Información clara, fotos de calidad y CTA." },
    { title: "Nosotros", desc: "Genera conexión y confianza." },
    { title: "Ayuda/FAQ", desc: "Resuelve dudas antes de la compra." }
  ];

  const faqs = [
    {
      question: "¿Cuánto demora el proyecto?",
      answer: "Entre 2 y 6 semanas dependiendo del plan elegido y la complejidad de las integraciones."
    },
    {
      question: "¿Puedo administrar la tienda yo mismo?",
      answer: "Sí, Shopify es muy intuitivo y te capacitamos para que tengas total control sobre tu catálogo, pedidos y clientes."
    },
    {
      question: "¿Se integra con pagos en Chile?",
      answer: "Absolutamente. Configuramos Mercado Pago, Webpay (vía integraciones) y otros métodos locales para asegurar cobros exitosos."
    }
  ];

  const plans = [
    {
      name: "Shopify PRENDE",
      price: "$580.000",
      highlight: "🌟 Ideal para emprendedores que inician",
      desc: "Perfecto para emprendedores que dan sus primeros pasos en el comercio digital. Lanza tu tienda con imagen profesional y optimizada para vender.",
      features: [
        "Configuración completa de tienda Shopify",
        "Conexión de dominio + validación de correo",
        "Instalación de plantilla premium Envato / Shopify",
        "Cargamos hasta 70 productos por ti o migración",
        "Certificado SSL y Panel administrador",
        "1 Medio de pago (Mercado Pago, PayPal, Flow o Ventipay)",
        "Multicourier (Shipit/Sendu) o tarifa única",
        "Integración Bluexpress, Starken, etc.",
        "Variaciones de producto (talla, color, etc.)",
        "Redes sociales y Botón de WhatsApp",
        "App propia datos de facturación",
        "Soporte técnico 3 meses y hasta 3 cambios",
        "Tiempo de entrega: Hasta 4 semanas"
      ]
    },
    {
      name: "Shopify FULL",
      price: "$780.000",
      originalPrice: "$980.000",
      highlight: "⚙️ Para negocios en crecimiento",
      desc: "Automatiza, optimiza y escala tus ventas. Para negocios que necesitan mayor capacidad de productos y herramientas de marketing.",
      recommended: true,
      features: [
        "Todo lo del Plan Prende, más:",
        "Capacidad para hasta 120 productos",
        "Diseño personalizado por secciones",
        "Integración Google Analytics y Facebook Pixel",
        "Optimización SEO Básica (Títulos, H2, Textos)",
        "Ajustes avanzados de estructura y navegación",
        "Chat en vivo opcional (Tawk.to o WhatsApp)",
        "Newsletter y formulario de suscripción",
        "Capacitación personalizada con videos",
        "Correos de carritos abandonados automáticos"
      ]
    },
    {
      name: "Shopify PRO",
      price: "$1.200.000",
      originalPrice: "$1.400.000",
      highlight: "🚀 Para marcas que desean escalar",
      desc: "Solución completa y profesional. Integraciones complejas, estrategias de conversión avanzadas y diseño a medida.",
      features: [
        "Todo lo del Plan FULL, más:",
        "Carga o migración de hasta 300 productos",
        "Integración ERP/Bsale (requiere evaluación)",
        "Marketing automatizado (Mailchimp/Klaviyo)",
        "Configuración Google Ads y Meta Ads",
        "Configuración completa de Analytics 4",
        "Plantilla ultra personalizada a medida",
        "Páginas optimizadas para campañas",
        "Integraciones externas (Calendly, CRM, Zapier)",
        "Soporte técnico preferente + auditoría final",
        "Tiempo estimado: Hasta 8 semanas"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-zinc-900 overflow-x-hidden">
      <main className="pt-32">
        {/* 1. Hero Principal */}
        <section id="inicio" className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pink-600/5 blur-[120px] rounded-full pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
          
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-pink-50 border border-pink-100 rounded-full">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-[0.2em] text-pink-600 uppercase">Shopify Partner Chile</span>
              </div>
              
              <h1 className="text-5xl lg:text-[75px] font-black tracking-tighter leading-[0.9] mb-8 uppercase text-zinc-950">
                Desarrollo de Tiendas <span className="text-pink-600 italic font-serif lowercase font-light">Shopify</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-zinc-500 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Diseño, Themes, Costos, Planes y Apps. Creamos tiendas Shopify profesionales, pensadas para vender, con diseño atractivo, configuración técnica, personalización de themes, integración de aplicaciones y estructura lista para crecer.
              </p>
              
              <div className="inline-block px-4 py-2 mb-10 bg-zinc-100 rounded-lg text-sm font-bold text-zinc-700 italic border-l-4 border-pink-500 shadow-sm">
                “Diseño + desarrollo + estrategia comercial”
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
                <a 
                  href="#cotizar"
                  className="px-8 py-4 bg-pink-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-pink-700 transition-all shadow-xl shadow-pink-600/20 active:scale-95 text-center flex items-center justify-center gap-2"
                >
                  Solicitar cotización
                </a>
                <a 
                  href="#planes"
                  className="px-8 py-4 bg-white text-zinc-900 border-2 border-zinc-200 rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:border-zinc-900 transition-all active:scale-95 text-center flex items-center justify-center gap-2"
                >
                  Ver planes
                </a>
                <a 
                  href="https://wa.me/56984410379"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95 text-center flex items-center justify-center gap-2"
                >
                  Hablar por WhatsApp
                </a>
              </div>
            </div>
            
            {/* Mockup CSS representation */}
            <div className="relative z-10 hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-rose-400 rounded-full blur-[80px] opacity-20 animate-pulse" />
              <Image
                src="/tecno.png"
                alt="Tienda Shopify Profesional"
                width={800}
                height={600}
                className="relative w-full h-auto object-contain transform rotate-2 hover:rotate-0 transition-transform duration-700 z-10"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-white shadow-xl px-6 py-4 rounded-3xl border border-zinc-100 flex items-center gap-4 z-20">
                 <ShoppingBag className="w-6 h-6 text-pink-600" />
                 <div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 block leading-tight">Shopify</span>
                   <span className="text-sm font-bold text-zinc-900">Partner Certificado</span>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. ¿Qué significa desarrollar? */}
        <section id="ventajas" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl lg:text-5xl font-black mb-8 tracking-tighter uppercase leading-tight">
              ¿Qué significa desarrollar una <br/><span className="text-pink-500">tienda Shopify?</span>
            </h2>
            <p className="text-lg lg:text-xl text-zinc-400 leading-relaxed font-light">
              No se trata solo de "hacer una tienda bonita". Desarrollar en Shopify es construir una plataforma robusta lista para vender, administrar productos de forma eficiente, procesar cobros seguros, gestionar despachos y escalar sin límites técnicos. Nuestro enfoque integra la parte <strong className="text-white">visual, técnica y comercial</strong>.
            </p>
          </div>
        </section>

        {/* 3. Todo lo que incluye */}
        <section className="py-32 bg-zinc-50 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase text-zinc-950 mb-6">
                Todo lo que incluye una <br/>implementación <span className="text-pink-600">profesional</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl hover:border-pink-200 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-zinc-900">{feature.title}</h3>
                  <p className="text-zinc-500 font-light leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Diseño pensado para vender mejor */}
        <section className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-pink-600 mb-4 block">UX / UI Ecommerce</span>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-6 text-zinc-950">
                Diseño pensado <br/>para vender mejor
              </h2>
              <p className="text-lg text-zinc-500 font-light mb-10">
                El diseño no es solo estética, es funcionalidad. Nos enfocamos en crear experiencias de compra fluidas que minimizan el abandono del carrito.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-pink-600" /></div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Diseño Responsive</h4>
                    <p className="text-sm text-zinc-500 font-light">Tu tienda se verá y funcionará perfecta en cualquier smartphone, desde donde provienen la mayoría de las compras.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-pink-600" /></div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Jerarquía de Contenido</h4>
                    <p className="text-sm text-zinc-500 font-light">Estructuramos la información para guiar intuitivamente al cliente hacia el botón de "Comprar".</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-pink-600" /></div>
                  <div>
                    <h4 className="font-bold text-zinc-900 mb-1">Confianza Visual</h4>
                    <p className="text-sm text-zinc-500 font-light">Banners, tipografías y colores que transmiten profesionalismo y seguridad al pagar.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-50 rounded-[3rem] p-10 border border-zinc-100 flex items-center justify-center aspect-square relative overflow-hidden">
               {/* Decorative UI elements for UX */}
               <div className="absolute inset-0 bg-pink-600/5 blur-3xl rounded-full" />
               <div className="w-full max-w-sm space-y-4 relative z-10">
                 <div className="h-12 w-full bg-white rounded-xl shadow-sm flex items-center px-4 border border-zinc-100">
                   <div className="w-6 h-6 rounded bg-zinc-200 mr-3" />
                   <div className="h-3 w-1/3 bg-zinc-200 rounded" />
                   <div className="ml-auto w-16 h-6 rounded-full bg-pink-100 text-[8px] font-black text-pink-600 flex items-center justify-center uppercase">Add</div>
                 </div>
                 <div className="h-12 w-full bg-white rounded-xl shadow-md flex items-center px-4 border-2 border-pink-500 transform scale-105">
                   <div className="w-6 h-6 rounded bg-pink-200 mr-3" />
                   <div className="h-3 w-1/2 bg-zinc-900 rounded" />
                   <div className="ml-auto w-20 h-8 rounded-full bg-pink-600 text-[10px] font-black text-white flex items-center justify-center uppercase shadow-lg shadow-pink-600/20">Checkout</div>
                 </div>
                 <div className="h-12 w-full bg-white rounded-xl shadow-sm flex items-center px-4 border border-zinc-100">
                   <div className="w-6 h-6 rounded bg-zinc-200 mr-3" />
                   <div className="h-3 w-1/4 bg-zinc-200 rounded" />
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* 5. Themes Shopify */}
        <section className="py-32 bg-zinc-950 text-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase mb-6">Themes Shopify: ¿Cuál elegir?</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="py-4 px-6 text-sm font-black uppercase tracking-widest text-zinc-400">Tipo de Theme</th>
                    <th className="py-4 px-6 text-sm font-black uppercase tracking-widest text-zinc-400">Ideal para...</th>
                    <th className="py-4 px-6 text-sm font-black uppercase tracking-widest text-zinc-400">Ventajas</th>
                    <th className="py-4 px-6 text-sm font-black uppercase tracking-widest text-zinc-400">Limitaciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/50">
                  {themeTypes.map((t, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-6 px-6 font-bold text-pink-400">{t.type}</td>
                      <td className="py-6 px-6 font-light text-zinc-300">{t.ideal}</td>
                      <td className="py-6 px-6 font-light text-zinc-300 flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0"/> {t.pros}</td>
                      <td className="py-6 px-6 font-light text-zinc-400">{t.cons}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 6. ¿De qué depende el costo? */}
        <section className="py-32 bg-zinc-50 border-b border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase text-zinc-950 mb-6">¿De qué depende el costo de desarrollo?</h2>
               <p className="text-lg text-zinc-500 font-light max-w-2xl mx-auto">El presupuesto de una tienda Shopify no es fijo, varía según la complejidad y el estado de tu negocio actual.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Volumen", desc: "Cantidad de productos y categorías a estructurar." },
                { title: "Tecnología", desc: "Uso de themes premium o desarrollo totalmente a medida." },
                { title: "Funcionalidades", desc: "Integraciones con ERP, suscripciones o B2B." },
                { title: "Migración", desc: "Si traes datos desde WooCommerce, VTEX, Magento, etc." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm text-center">
                  <div className="w-10 h-10 mx-auto rounded-full bg-pink-50 text-pink-600 flex items-center justify-center font-black mb-4">{(i+1)}</div>
                  <h4 className="font-bold text-zinc-900 mb-2">{item.title}</h4>
                  <p className="text-xs text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Planes de Desarrollo */}
        <section id="planes" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
             <div className="text-center mb-20">
                <span className="text-[10px] font-black uppercase tracking-widest text-pink-600 mb-4 block">Inversión</span>
                <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-6 text-zinc-950">Nuestros Planes</h2>
             </div>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               {plans.map((p, i) => (
                 <div key={i} className={`relative bg-zinc-50 rounded-[3rem] p-10 flex flex-col transition-all duration-300 ${p.recommended ? 'border-2 border-pink-600 shadow-2xl shadow-pink-600/10 scale-100 lg:scale-105 z-10' : 'border border-zinc-200'}`}>
                    {p.recommended && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-pink-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                        Recomendado
                      </div>
                    )}
                    <h3 className="text-2xl font-black mb-2 uppercase text-zinc-900">{p.name}</h3>
                    <p className="text-xs font-bold text-pink-600 uppercase mb-4">{p.highlight}</p>
                    <div className="mb-4">
                      {p.originalPrice && (
                        <span className="text-sm text-zinc-400 line-through mr-2 font-medium">{p.originalPrice}</span>
                      )}
                      <span className="text-4xl font-black text-zinc-900">{p.price}</span>
                      <span className="text-sm text-zinc-500 font-medium ml-1">+ iva</span>
                    </div>
                    <div className="flex items-center gap-2 mb-6 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg w-fit border border-emerald-100">
                      <span className="text-xs font-black uppercase tracking-widest">💳 6 cuotas sin interés</span>
                    </div>
                    <p className="text-sm text-zinc-500 font-light mb-8 min-h-[40px]">{p.desc}</p>
                    <div className="flex-grow">
                      <ul className="space-y-4 mb-10">
                        {p.features.map((f, idx) => (
                          <li key={idx} className="text-sm text-zinc-600 font-medium flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <LeadButton 
                      className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[11px] text-center transition-colors shadow-md active:scale-95 ${p.recommended ? 'bg-pink-600 text-white hover:bg-pink-700 shadow-pink-600/30' : 'bg-zinc-900 text-white hover:bg-zinc-800'}`}
                    >
                      Obtener 10% Dto
                    </LeadButton>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* 8. Ecosistema de Aplicaciones */}
        <section className="py-32 bg-zinc-950 text-white rounded-[4rem] mx-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(219,39,119,0.15),transparent)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase mb-6">
                  Ecosistema de <span className="text-pink-500">Aplicaciones</span>
                </h2>
                <p className="text-lg text-zinc-400 font-light mb-10">
                  No instalamos apps por instalar; elegimos las que realmente impulsan tu negocio y se pagan solas.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <h4 className="font-bold text-pink-400 uppercase tracking-widest text-xs mb-2">Ventas</h4>
                  <p className="text-zinc-300 font-light text-sm">Upsells, descuentos por volumen, recuperación de carritos abandonados.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <h4 className="font-bold text-pink-400 uppercase tracking-widest text-xs mb-2">Confianza</h4>
                  <p className="text-zinc-300 font-light text-sm">Reseñas de clientes con fotos, sellos de seguridad dinámicos.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <h4 className="font-bold text-pink-400 uppercase tracking-widest text-xs mb-2">Operaciones</h4>
                  <p className="text-zinc-300 font-light text-sm">Facturación automática (Bsale), rastreo de envíos, chat multiagente integrado.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Proceso de Trabajo */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase text-zinc-950 mb-6">Proceso de Trabajo</h2>
              <p className="text-lg text-zinc-500 font-light">Paso a paso hacia el lanzamiento.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {processSteps.map((step, i) => (
                <div key={i} className="text-center relative">
                  {i !== processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[1px] bg-zinc-200" />
                  )}
                  <div className="w-16 h-16 mx-auto bg-pink-50 text-pink-600 font-black rounded-full flex items-center justify-center text-xl mb-4 relative z-10 border border-pink-100 shadow-sm">
                    {step.step}
                  </div>
                  <h4 className="font-bold text-zinc-900 mb-2 text-sm uppercase">{step.name}</h4>
                  <p className="text-xs text-zinc-500 font-light leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Estructura recomendada */}
        <section className="py-32 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-black tracking-tighter uppercase text-zinc-950 mb-6">Estructura Recomendada (Sitemap)</h2>
              <p className="text-zinc-500 font-light">Una tienda profesional debe contar con las bases exactas de navegación.</p>
            </div>
            <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-sm">
              {sitemap.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center p-6 border-b border-zinc-100 last:border-0 hover:bg-zinc-50 transition-colors">
                  <div className="w-full sm:w-1/3">
                    <span className="font-bold text-zinc-900 flex items-center gap-2">
                      <LayoutTemplate className="w-4 h-4 text-pink-500" />
                      {item.title}
                    </span>
                  </div>
                  <div className="w-full sm:w-2/3 mt-2 sm:mt-0 text-sm text-zinc-500 font-light">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Portafolio */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase text-zinc-950 mb-6">Portafolio de Proyectos</h2>
            <p className="text-zinc-500 font-light mb-16 max-w-2xl mx-auto">Conoce cómo se ven las marcas que han confiado su comercio digital en nosotros.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder portafolio items */}
              {[1,2,3].map((item) => (
                <div key={item} className="group relative bg-zinc-100 rounded-[2rem] overflow-hidden aspect-[4/3] border border-zinc-200 flex items-center justify-center">
                  <div className="text-zinc-300 font-black text-2xl uppercase tracking-widest">Proyecto {item}</div>
                  <div className="absolute inset-0 bg-pink-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6">
                    <h3 className="text-xl font-bold mb-2">Tienda Shopify {item}</h3>
                    <p className="text-sm text-pink-100 mb-6 font-light">Desarrollo theme personalizado y migraciones.</p>
                    <a href="#" className="px-6 py-2 bg-white text-pink-600 rounded-full text-xs font-black uppercase tracking-widest">Ver Proyecto</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. Preguntas Frecuentes */}
        <section id="faq" className="pb-32 bg-white">
           <FAQSection 
             faqs={faqs} 
             title="Preguntas Frecuentes"
             description="Lo que todo dueño de negocio necesita saber antes de empezar."
           />
        </section>

        {/* 13. Llamado a la Acción Final */}
        <section id="cotizar" className="py-32 px-6">
          <div className="max-w-5xl mx-auto bg-pink-600 rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden group shadow-2xl shadow-pink-600/30">
            <div className="absolute inset-0 bg-[url('/bg-01.jpg')] mix-blend-overlay opacity-10 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">
                ¿Listo para dar el <br/>salto a <span className="italic font-serif lowercase font-light">Shopify?</span>
              </h2>
              <p className="text-lg lg:text-xl text-pink-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Si estás evaluando crear tu tienda o mejorar la actual, te ayudamos a definir la mejor estructura, diseño y plan de desarrollo según tu negocio.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
                <a 
                  href="https://wa.me/56984410379" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-zinc-950 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-zinc-800 transition-all active:scale-95 shadow-xl"
                >
                  Solicitar propuesta
                </a>
                <a 
                  href="#planes" 
                  className="px-8 py-4 bg-white text-pink-600 rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-pink-50 transition-all active:scale-95 shadow-xl"
                >
                  Ver planes de desarrollo
                </a>
                <a 
                  href="https://wa.me/56984410379" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all active:scale-95 shadow-xl"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
