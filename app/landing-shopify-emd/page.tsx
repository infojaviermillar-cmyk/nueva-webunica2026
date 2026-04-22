import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import { ShoppingBag, MonitorSmartphone, Rocket, Star, CheckCircle2, ShoppingCart, Search, Zap, ShieldCheck, Box, HelpCircle, ArrowRight, LayoutTemplate, MessageSquare, Users, FileSignature, ThumbsUp, Route, UploadCloud, Palette, Puzzle } from 'lucide-react';

export const metadata = {
  title: 'Desarrollo de Tiendas Shopify Chile | Diseño, Planes y Costos',
  description: 'Creamos tiendas Shopify profesionales, pensadas para vender, con diseño atractivo, configuración técnica, personalización de themes y estructura lista para crecer.',
  keywords: 'desarrollo shopify chile, tiendas shopify, diseño shopify, partners shopify, ecommerce chile',
  alternates: {
    canonical: 'https://desarrolloshopify.cl/',
  }
};

export default function ShopifyEmdLandingPage() {
  const projects = [
    { title: "Kinelawen", description: "Tienda Shopify con identidad limpia, navegación moderna y foco en experiencia de marca.", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.kinelawen.com%2F?w=1200", link: "https://www.kinelawen.com/" },
    { title: "SpinMedical", description: "Proyecto ecommerce con estructura profesional, catálogo claro y presentación visual de confianza.", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fspinmedical.cl%2F?w=1200", link: "https://spinmedical.cl/" },
    { title: "Librería Bazarte", description: "Ecommerce visualmente atractivo, preparado para exhibir productos y facilitar exploración por colecciones.", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Flibreriabazarte.cl%2F?w=1200", link: "https://libreriabazarte.cl/" },
    { title: "Altavista Chile", description: "Tienda de look robusto, con enfoque en navegación eficiente y presencia visual consistente.", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Faltavistachile.cl%2F?w=1200", link: "https://altavistachile.cl/" },
    { title: "Recovery Zone", description: "Proyecto Shopify con diseño orientado a conversión y fichas de producto con buena lectura visual.", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Frecoveryzone.cl%2F?w=1200", link: "https://recoveryzone.cl/" },
    { title: "Only Jeep", description: "Tienda con carácter de nicho, buena jerarquía de colecciones y estética alineada al rubro automotor.", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.onlyjeep.cl%2F?w=1200", link: "https://www.onlyjeep.cl/" },
    { title: "EvertSport", description: "Diseño deportivo, moderno y preparado para destacar colecciones, ofertas y llamados a la acción.", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Feversport.cl%2F?w=1200", link: "https://eversport.cl/" },
    { title: "AntarctiCare", description: "Ecommerce con branding más refinado, visual pulido y una presentación clara del catálogo.", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fantarcticare.cl%2F?w=1200", link: "https://antarcticare.cl/" },
    { title: "Divan Tienda", description: "Proyecto con estilo comercial elegante, pensado para destacar productos y mantener orden visual.", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fdivantienda.cl%2F?w=1200", link: "https://divantienda.cl/" },
    { title: "Chiletronics", description: "Tienda tecnológica con estructura orientada a variedad de productos y lectura rápida del catálogo.", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fchiletronics.cl%2F?w=1200", link: "https://chiletronics.cl/" },
    { title: "PHY Waters", description: "Marca con enfoque visual fuerte, experiencia simple y espacio claro para beneficios de producto.", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fphywaters.com%2F?w=1200", link: "https://phywaters.com/" },
    { title: "Tecno-Mobile", description: "Catálogo tecnológico con look comercial claro, navegación rápida y enfoque en productos destacados.", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftecno-mobile.cl%2F?w=1200", link: "https://tecno-mobile.cl/" },
    { title: "Tuupos", description: "Proyecto Shopify con identidad propia, buena legibilidad y composición de bloques moderna.", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftuupos.cl%2F?w=1200", link: "https://tuupos.cl/" },
    { title: "Anteros", description: "Tienda enfocada en visual limpio, presencia de marca y una experiencia de exploración ordenada.", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ftienda.anteros.cl%2F?w=1200", link: "https://tienda.anteros.cl/" },
    { title: "Terra Andes", description: "Proyecto con estética más corporativa y vitrina visual enfocada en credibilidad y presentación.", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fterraandesplus.com%2F?w=1200", link: "https://terraandesplus.com/" },
    { title: "Serch", description: "Diseño actual, orden visual sólido y estructura preparada para campañas y catálogo online.", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.serch.cl%2F?w=1200", link: "https://www.serch.cl/" },
    { title: "Sonnda", description: "Tienda con enfoque comercial, categorías claras y presentación robusta para productos técnicos.", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsonnda.cl%2F?w=1200", link: "https://sonnda.cl/" },
    { title: "Fcastro.cl", description: "Nueva tienda Shopify en proceso, enfocada en categorías como sillas, mesas, escaleras, hogar y cocina.", image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Ffcastrocl.myshopify.com%2F?w=1400", link: "https://fcastrocl.myshopify.com/" }
  ];

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
    { type: "Premium (Envato)", ideal: "Marcas en crecimiento", pros: "Funciones avanzadas, mejor UX. (¡Incluido en nuestros planes!)", cons: "Pago único de licencia." },
    { type: "Personalizados", ideal: "Requerimientos únicos", pros: "Exclusividad total y flexibilidad.", cons: "Mayor tiempo de desarrollo." }
  ];

  const processSteps = [
    { step: "01", name: "Descripción", desc: "El cliente describe su proyecto y necesidades.", icon: <MessageSquare className="w-6 h-6" /> },
    { step: "02", name: "Reunión", desc: "Se genera una reunión estratégica.", icon: <Users className="w-6 h-6" /> },
    { step: "03", name: "Cotización", desc: "Elaboramos y presentamos la propuesta comercial.", icon: <FileSignature className="w-6 h-6" /> },
    { step: "04", name: "Aprobación", desc: "El cliente acepta la cotización.", icon: <ThumbsUp className="w-6 h-6" /> },
    { step: "05", name: "Flujo", desc: "Se presenta el flujo de desarrollo del proyecto.", icon: <Route className="w-6 h-6" /> },
    { step: "06", name: "Contenido", desc: "El cliente envía el contenido (textos, imágenes).", icon: <UploadCloud className="w-6 h-6" /> },
    { step: "07", name: "Diseño", desc: "Se desarrolla el theme o se adapta el diseño.", icon: <Palette className="w-6 h-6" /> },
    { step: "08", name: "Revisión", desc: "Se revisan las funciones de la tienda.", icon: <Search className="w-6 h-6" /> },
    { step: "09", name: "Componentes", desc: "Se agregan componentes y apps finales.", icon: <Puzzle className="w-6 h-6" /> },
    { step: "10", name: "Finalización", desc: "Se entrega la tienda. (De 1 a 6 semanas en total).", icon: <Rocket className="w-6 h-6" /> }
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
    },
    {
      question: "¿Qué requisitos pide la Cámara de Comercio de Santiago (CCS)?",
      answer: "La CCS exige transparencia total en la información: identificación clara de la empresa, términos y condiciones visibles, políticas de devolución explícitas y protocolos de seguridad de datos. Cumplir con estos requisitos no solo te da el Sello de Confianza, sino que protege legalmente tu operación."
    }
  ];

  const plans = [
    {
      name: "Shopify AJUSTE",
      price: "$320.000",
      originalPrice: "$337.000",
      highlight: "🔧 Para tiendas ya creadas",
      desc: "Ideal para tiendas que necesitan mejorar imagen, orden comercial y confianza visual.",
      features: [
        "🎁 Plantilla Envato premium gratis",
        "Revisión visual general de la tienda",
        "Mejora de home, menú, banners y jerarquía",
        "Ajustes en ficha de producto",
        "Mejora de textos clave y llamados a la acción",
        "Optimización básica de experiencia mobile",
        "Revisión de apps instaladas",
        "Ajustes de confianza visual en carrito/checkout",
        "Hasta cierta cantidad de cambios definidos",
        "Tiempo de entrega: 5 a 10 días hábiles"
      ]
    },
    {
      name: "Shopify PRENDE",
      price: "$580.000",
      originalPrice: "$650.000",
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

  const dropshippingPlans = [
    {
      name: "DROPI Básico",
      price: "$580.000",
      originalPrice: "$650.000",
      highlight: "📦 Dropshipping Automatizado",
      desc: "Inicia tu negocio sin stock propio con la mejor integración de Chile: Shopify + Dropi.",
      features: [
        "Desarrollo Tienda Dropshipping Dropi",
        "Configuración completa Shopify",
        "Dominio + Validación correo",
        "Plantilla Premium incluida",
        "Carga hasta 70 productos Dropi",
        "Sincronización total con Dropi",
        "Pago Contra Entrega o Tradicional",
        "Certificado SSL + Panel Admin",
        "1 Medio de Pago (Webpay/MercadoPago)",
        "Envíos Bluexpress (vía Dropi)",
        "WhatsApp + Redes Sociales",
        "Soporte 3 meses (3 cambios)",
        "Entrega: Hasta 4 semanas"
      ]
    },
    {
      name: "DROPI Pro",
      price: "$780.000",
      originalPrice: "$980.000",
      highlight: "🚀 Dropshipping de Alto Vuelo",
      desc: "Escala tu tienda dropshipping con optimización de conversión y mayor catálogo.",
      features: [
        "Todo lo de DROPI Básico +",
        "Carga hasta 250 productos Dropi",
        "Optimización de Conversión (CRO)",
        "SEO de categorías avanzado",
        "Integración avanzada de Apps",
        "Soporte Prioritario",
        "Entrega: Hasta 5 semanas"
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

        {/* 4. Por qué elegir Shopify */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-pink-600/5 blur-[100px] rounded-full -translate-x-1/2" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase text-zinc-950 mb-6">¿Por qué elegir <span className="text-pink-600">Shopify</span>?</h2>
              <p className="text-lg text-zinc-500 font-light max-w-2xl mx-auto">La plataforma líder mundial para e-commerce, optimizada para escalar tu negocio sin límites técnicos.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-50 p-10 rounded-[3rem] border border-zinc-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Velocidad y Estabilidad</h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-light">Hosting de clase mundial incluido. Tu tienda siempre activa y rápida, incluso en días de alta demanda como CyberDay.</p>
              </div>
              <div className="bg-zinc-50 p-10 rounded-[3rem] border border-zinc-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Seguridad Total</h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-light">Cumplimiento PCI DSS nivel 1. Los datos de tus clientes y tus transacciones están protegidos por los más altos estándares de seguridad.</p>
              </div>
              <div className="bg-zinc-50 p-10 rounded-[3rem] border border-zinc-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600 mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Escalabilidad Sin Límites</h3>
                <p className="text-sm text-zinc-500 leading-relaxed font-light">Desde tu primer pedido hasta miles por hora. Shopify crece contigo sin necesidad de migrar de plataforma ni preocuparte por el servidor.</p>
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

        {/* 6. Checklist CRO Banner */}
        <section className="bg-pink-600 py-20 px-6 mx-4 mb-32 rounded-[3rem] relative overflow-hidden">
           <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full pointer-events-none"></div>
           <div className="max-w-4xl mx-auto text-center relative z-10">
             <div className="inline-block px-4 py-1.5 bg-black/20 text-white border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 backdrop-blur-md">Herramienta Gratuita</div>
             <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 tracking-tight">¿Tu tienda Shopify está perdiendo ventas?</h2>
             <p className="text-pink-100 text-lg mb-10 max-w-2xl mx-auto font-medium">Revisa gratis los puntos clave donde la mayoría de las tiendas en Chile pierden clientes con nuestra Auditoría CRO Básica.</p>
             <Link href="/listas-de-verificacion-shopify-cro-basica" className="inline-block px-8 py-4 bg-white text-pink-600 font-black uppercase tracking-[0.1em] text-xs rounded-full hover:scale-105 transition-transform shadow-xl">
               Ver Checklist CRO
             </Link>
           </div>
        </section>

        {/* 7. Planes de Desarrollo */}
        <section id="planes" className="py-32 bg-white">
          <div className="max-w-[90rem] mx-auto px-6">
             <div className="text-center mb-20">
                <span className="text-[10px] font-black uppercase tracking-widest text-pink-600 mb-4 block">Inversión</span>
                <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-6 text-zinc-950">Nuestros Planes</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
               {plans.map((p, i) => (
                 <div key={i} className={`relative bg-zinc-50 rounded-[3rem] p-10 flex flex-col transition-all duration-300 ${p.recommended ? 'border-2 border-pink-600 shadow-2xl shadow-pink-600/10 scale-100 lg:scale-105 z-10' : 'border border-zinc-200'}`}>
                    <div className="absolute top-8 right-8 bg-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-full animate-pulse">
                      10% OFF
                    </div>
                    {p.recommended && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-pink-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                        Recomendado
                      </div>
                    )}
                    <h3 className="text-2xl font-black mb-2 uppercase text-zinc-900">{p.name}</h3>
                    <p className="text-xs font-bold text-pink-600 uppercase mb-4">{p.highlight}</p>
                    <div className="mb-4">
                      {p.originalPrice ? (
                        <div className="text-sm text-zinc-400 line-through font-medium mb-1">{p.originalPrice} + iva</div>
                      ) : (
                        <div className="h-5 mb-1" />
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

        {/* Proceso de Trabajo */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase text-zinc-950 mb-6">Proceso de Trabajo</h2>
              <p className="text-lg text-zinc-500 font-light">Paso a paso hacia el lanzamiento.</p>
            </div>
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes scanLineHorizontal {
                0% { left: -10%; opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { left: 100%; opacity: 0; }
              }
              .animate-scan-horizontal {
                animation: scanLineHorizontal 6s linear infinite;
              }
            `}} />
            
            <div className="max-w-7xl mx-auto relative pt-8 pb-16">
              
              {/* Líneas horizontales de conexión (2 filas en escritorio) */}
              <div className="hidden lg:block absolute top-[4.5rem] left-[8%] right-[8%] h-1.5 bg-zinc-100 rounded-full z-0 overflow-hidden">
                 <div className="absolute top-0 bottom-0 w-48 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-scan-horizontal" />
              </div>
              <div className="hidden lg:block absolute top-[19.5rem] left-[8%] right-[8%] h-1.5 bg-zinc-100 rounded-full z-0 overflow-hidden">
                 <div className="absolute top-0 bottom-0 w-48 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-scan-horizontal" style={{ animationDelay: '3s' }} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-6 relative z-10">
                {processSteps.map((step, i) => (
                  <div key={i} className="relative flex flex-col items-center group w-full">
                    
                    {/* Central Icon */}
                    <div className="w-20 h-20 bg-white border-[5px] border-pink-50 rounded-full flex flex-col items-center justify-center group-hover:border-pink-500 group-hover:scale-110 transition-all duration-300 shadow-sm relative cursor-default shrink-0">
                      {/* Active ping effect on hover */}
                      <div className="absolute inset-0 rounded-full bg-pink-400 opacity-0 group-hover:opacity-20 group-hover:animate-ping transition-opacity duration-300" />
                      <span className="text-pink-600 group-hover:text-pink-700 transition-colors z-10">{step.icon}</span>
                    </div>

                    {/* Content Card */}
                    <div className="mt-6 text-center px-4 w-full">
                      <div className="text-pink-400 font-black text-[10px] mb-2 tracking-widest uppercase">Paso {step.step}</div>
                      <h4 className="font-black text-zinc-900 mb-2 uppercase tracking-wide text-sm group-hover:text-pink-600 transition-colors">{step.name}</h4>
                      <p className="text-zinc-500 font-light text-xs leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>
                    </div>
                    
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

         {/* 8. Planes Dropshipping Dropi */}
         <section className="py-32 bg-zinc-50 rounded-[4rem] mx-4 mb-32 border border-zinc-100">
           <div className="max-w-[90rem] mx-auto px-6">
              <div className="text-center mb-20">
                 <span className="text-[10px] font-black uppercase tracking-widest text-purple-600 mb-4 block">Especializado</span>
                 <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-6 text-zinc-950">Planes Dropshipping Dropi</h2>
                 <p className="text-lg text-zinc-500 font-light max-w-2xl mx-auto">La solución definitiva para vender en Chile sin manejar inventario físico.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {dropshippingPlans.map((p, i) => (
                  <div key={i} className={`relative bg-white rounded-[3rem] p-12 flex flex-col border border-zinc-100 shadow-xl hover:shadow-2xl transition-all duration-500`}>
                     <div className="absolute top-10 right-10 bg-emerald-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full animate-pulse">
                       10% DESCUENTO
                     </div>
                     <h3 className="text-3xl font-black mb-2 uppercase text-zinc-900">{p.name}</h3>
                     <p className="text-sm font-bold text-purple-600 uppercase mb-6">{p.highlight}</p>
                     <div className="mb-8">
                       <div className="text-sm text-zinc-400 line-through font-medium mb-1">{p.originalPrice} + iva</div>
                       <span className="text-5xl font-black text-zinc-900">{p.price}</span>
                       <span className="text-sm text-zinc-500 font-medium ml-1">+ iva</span>
                     </div>
                     <ul className="space-y-4 mb-12 flex-grow">
                       {p.features.map((f, idx) => (
                         <li key={idx} className="flex items-start gap-3 text-sm text-zinc-600 font-medium">
                           <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                           {f}
                         </li>
                       ))}
                     </ul>
                     <LeadButton className="w-full py-5 bg-purple-600 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-purple-700 shadow-xl shadow-purple-600/20 active:scale-95 transition-all">
                       Obtener 10% Descuento
                     </LeadButton>
                  </div>
                ))}
              </div>
           </div>
         </section>

         {/* 9. Ecosistema de Aplicaciones */}
        <section className="py-32 bg-zinc-950 text-white rounded-[4rem] mx-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(219,39,119,0.15),transparent)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase mb-6">
                Ecosistema de <span className="text-pink-500 underline decoration-pink-500/30">Aplicaciones</span>
              </h2>
              <p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto">
                No instalamos apps por instalar; elegimos las que realmente impulsan tu negocio y se pagan solas mediante automatización y eficiencia.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-pink-600/20 rounded-xl flex items-center justify-center text-pink-500 font-black">$$</div>
                  <div className="text-[10px] font-black bg-pink-600 text-white px-2 py-0.5 rounded uppercase">Ventas</div>
                </div>
                <h4 className="font-bold text-white mb-4">Conversión Avanzada</h4>
                <p className="text-zinc-400 font-light text-sm leading-relaxed mb-6">Maximizamos el ticket promedio con estrategias de Upselling, descuentos por volumen y recuperación inteligente de carritos.</p>
                <div className="flex flex-wrap gap-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  <span className="text-[9px] font-black border border-white/20 px-2 py-0.5 rounded">Klaviyo</span>
                  <span className="text-[9px] font-black border border-white/20 px-2 py-0.5 rounded">Rebuy</span>
                  <span className="text-[9px] font-black border border-white/20 px-2 py-0.5 rounded">Vitals</span>
                </div>
              </div>
              
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center text-violet-500 font-black">⚙️</div>
                  <div className="text-[10px] font-black bg-violet-600 text-white px-2 py-0.5 rounded uppercase">Operaciones</div>
                </div>
                <h4 className="font-bold text-white mb-4">Logística y Pagos</h4>
                <p className="text-zinc-400 font-light text-sm leading-relaxed mb-6">Sincronización automática de inventario, facturación electrónica con SII y seguimiento de envíos en tiempo real.</p>
                <div className="flex flex-wrap gap-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  <span className="text-[9px] font-black border border-white/20 px-2 py-0.5 rounded">Bsale</span>
                  <span className="text-[9px] font-black border border-white/20 px-2 py-0.5 rounded">Shipit</span>
                  <span className="text-[9px] font-black border border-white/20 px-2 py-0.5 rounded">Starken</span>
                </div>
              </div>

              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center text-emerald-500 font-black">🛡️</div>
                  <div className="text-[10px] font-black bg-emerald-600 text-white px-2 py-0.5 rounded uppercase">Confianza</div>
                </div>
                <h4 className="font-bold text-white mb-4">Confianza y Normativa CCS</h4>
                <p className="text-zinc-400 font-light text-sm leading-relaxed mb-6">Configuramos tu tienda bajo los estándares de la <strong>Cámara de Comercio de Santiago (CCS)</strong>, asegurando términos legales y buenas prácticas comerciales.</p>
                <div className="flex flex-wrap gap-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                  <span className="text-[9px] font-black border border-white/20 px-2 py-0.5 rounded">Sello CCS</span>
                  <span className="text-[9px] font-black border border-white/20 px-2 py-0.5 rounded">Términos y Condiciones</span>
                  <span className="text-[9px] font-black border border-white/20 px-2 py-0.5 rounded">Normativa SII</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Logística y Despacho Chile */}
        <section className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute inset-0 bg-pink-600/5 blur-[100px] rounded-full" />
                <div className="relative grid grid-cols-2 gap-4">
                   <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 flex flex-col items-center text-center">
                      <div className="w-12 h-12 mb-4"><img src="/shipit-logo.png" alt="Shipit" className="w-full h-full object-contain grayscale opacity-50" /></div>
                      <h5 className="font-bold text-zinc-900 text-sm">Shipit</h5>
                      <p className="text-[10px] text-zinc-500 mt-2">Multicourier líder en Chile</p>
                   </div>
                   <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 flex flex-col items-center text-center transform translate-y-8">
                      <div className="w-12 h-12 mb-4"><img src="/sendu-logo.png" alt="Sendu" className="w-full h-full object-contain grayscale opacity-50" /></div>
                      <h5 className="font-bold text-zinc-900 text-sm">Sendu</h5>
                      <p className="text-[10px] text-zinc-500 mt-2">Optimización de última milla</p>
                   </div>
                   <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 flex flex-col items-center text-center">
                      <div className="w-12 h-12 mb-4 text-2xl">🚚</div>
                      <h5 className="font-bold text-zinc-900 text-sm">Bluexpress</h5>
                      <p className="text-[10px] text-zinc-500 mt-2">Cobertura nacional total</p>
                   </div>
                   <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 flex flex-col items-center text-center transform translate-y-8">
                      <div className="w-12 h-12 mb-4 text-2xl">📦</div>
                      <h5 className="font-bold text-zinc-900 text-sm">Starken / Correos</h5>
                      <p className="text-[10px] text-zinc-500 mt-2">Los clásicos que no fallan</p>
                   </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-pink-600 mb-4 block">Operaciones</span>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-6 text-zinc-950">
                  Logística de <br/><span className="text-pink-600 italic">Clase Mundial</span>
                </h2>
                <p className="text-lg text-zinc-500 font-light mb-8 leading-relaxed">
                  Automatizamos tus despachos integrando tu tienda con los mejores operadores de Chile. Olvídate de escribir etiquetas a mano.
                </p>
                <ul className="space-y-4">
                  {[
                    "Cálculo de tarifas en tiempo real según la comuna.",
                    "Impresión masiva de etiquetas de despacho.",
                    "Envío automático del número de seguimiento al cliente.",
                    "Integración directa con Shipit, Sendu y Envia.com.",
                    "Configuración de retiros en tienda y delivery propio."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-3 text-sm text-zinc-600 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
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
            
            <div className="w-full overflow-hidden relative">
              {/* Optional gradient fades for the edges */}
              <div className="absolute left-0 top-0 bottom-0 w-12 lg:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 lg:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
              
              <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <div className="grid grid-rows-2 grid-flow-col gap-6 px-4 lg:px-12">
                  {projects.map((project, index) => (
                    <a 
                      key={index} 
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative bg-zinc-100 rounded-[2rem] overflow-hidden w-[280px] lg:w-[350px] aspect-[4/3] border border-zinc-200 flex-shrink-0 snap-center shadow-sm hover:shadow-xl transition-all block"
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-pink-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-6 text-center">
                        <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{project.title}</h3>
                        <p className="text-sm text-pink-100 mb-6 font-light">{project.description}</p>
                        <span className="px-6 py-2 bg-white text-pink-600 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">Ver Proyecto</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
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
