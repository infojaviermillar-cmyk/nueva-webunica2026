import Link from 'next/link';
import { Sparkles, ChevronRight, TrendingUp } from 'lucide-react';

const TOPIC_CATEGORIES = [
  {
    id: 'shopify',
    label: 'Tiendas Shopify',
    color: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    dot: 'bg-emerald-500',
    icon: '🛍️',
    topics: [
      { title: 'Cómo crear una tienda Shopify en Chile paso a paso', keywords: 'crear tienda shopify chile, shopify chile, abrir tienda shopify' },
      { title: 'Los mejores temas Shopify para tiendas chilenas en 2025', keywords: 'temas shopify chile, themes shopify, plantillas shopify' },
      { title: 'Cómo integrar Webpay en Shopify Chile', keywords: 'webpay shopify chile, transbank shopify, pago shopify chile' },
      { title: 'Cómo configurar envíos con Starken y Chilexpress en Shopify', keywords: 'envios shopify chile, starken shopify, chilexpress shopify' },
      { title: 'Diferencia entre Shopify Basic, Shopify y Advanced en Chile', keywords: 'planes shopify chile, precio shopify chile, shopify costo' },
      { title: 'Apps imprescindibles para tu tienda Shopify en Chile', keywords: 'apps shopify chile, aplicaciones shopify, plugins shopify' },
      { title: 'Cómo hacer SEO para tu tienda Shopify y aparecer en Google', keywords: 'seo shopify, posicionamiento shopify google, shopify seo chile' },
      { title: 'Shopify vs WooCommerce: ¿cuál elegir para vender en Chile?', keywords: 'shopify vs woocommerce chile, comparar ecommerce chile' },
    ]
  },
  {
    id: 'ecommerce',
    label: 'Tiendas en Línea',
    color: 'bg-violet-50 border-violet-200 text-violet-700',
    dot: 'bg-violet-500',
    icon: '🛒',
    topics: [
      { title: 'Cómo crear una tienda online en Chile desde cero (Guía 2025)', keywords: 'crear tienda online chile, tienda en linea chile, ecommerce chile' },
      { title: 'Cuánto cuesta crear una tienda online en Chile', keywords: 'costo tienda online chile, precio tienda en linea, cuanto cuesta ecommerce chile' },
      { title: 'Los 5 errores más comunes al crear una tienda online', keywords: 'errores tienda online, como vender por internet chile, ecommerce errores' },
      { title: 'Cómo elegir la mejor pasarela de pago para vender en Chile', keywords: 'pasarelas de pago chile, mercado pago chile, flow chile, webpay' },
      { title: 'Cómo fotografiar tus productos para vender más online', keywords: 'fotografía productos ecommerce, fotos tienda online, product photography' },
      { title: 'Estrategias para aumentar las ventas de tu tienda online en Chile', keywords: 'aumentar ventas tienda online chile, estrategias ecommerce, conversion rate' },
      { title: 'Dropshipping en Chile: ¿es rentable en 2025?', keywords: 'dropshipping chile, dropi chile, vendredrop chile, negocio dropshipping' },
    ]
  },
  {
    id: 'desarrollo-web',
    label: 'Desarrollo Web',
    color: 'bg-blue-50 border-blue-200 text-blue-700',
    dot: 'bg-blue-500',
    icon: '⚡',
    topics: [
      { title: 'Next.js vs WordPress: ¿qué es mejor para tu empresa en Chile?', keywords: 'nextjs vs wordpress, desarrollo web chile, pagina web empresa chile' },
      { title: 'Qué es una plataforma SaaS y cómo puede digitalizar tu negocio', keywords: 'saas chile, plataforma saas, software como servicio chile' },
      { title: 'Velocidad web: por qué un sitio lento te hace perder clientes y ventas', keywords: 'velocidad web, pagina web rapida chile, google pagespeed chile' },
      { title: 'Cómo crear un sistema de cotización online para tu empresa', keywords: 'sistema cotizacion online chile, cotizador web, formulario cotizacion' },
      { title: 'Qué es una API y cómo puede automatizar tu negocio en Chile', keywords: 'integracion api chile, automatizacion negocio web, api rest chile' },
      { title: 'Las mejores herramientas de desarrollo web en 2025', keywords: 'herramientas desarrollo web chile, stack tecnologico, tecnologia web 2025' },
    ]
  },
  {
    id: 'diseno-web',
    label: 'Diseño Web',
    color: 'bg-pink-50 border-pink-200 text-pink-700',
    dot: 'bg-pink-500',
    icon: '🎨',
    topics: [
      { title: 'Tendencias de diseño web para empresas chilenas en 2025', keywords: 'tendencias diseño web 2025, diseño web moderno chile, web design trends' },
      { title: 'Cómo diseñar una landing page que convierte clientes en Chile', keywords: 'landing page chile, diseño landing page, pagina de aterrizaje chile' },
      { title: 'UX/UI: la diferencia entre un sitio web que vende y uno que no', keywords: 'ux ui diseño web chile, experiencia usuario web, interfaz web' },
      { title: 'Los colores que más convierten en sitios web de empresas chilenas', keywords: 'colores diseño web, psicologia colores web, conversion colores sitio' },
      { title: 'Diseño web con Adobe XD: de prototipo a sitio real', keywords: 'adobe xd chile, diseño web adobe xd, prototipo web chile' },
      { title: 'Diseño web responsivo: cómo hacer que tu sitio se vea bien en móviles', keywords: 'diseño web responsivo chile, mobile first chile, sitio web movil' },
    ]
  },
  {
    id: 'paginas-web',
    label: 'Páginas Web',
    color: 'bg-amber-50 border-amber-200 text-amber-700',
    dot: 'bg-amber-500',
    icon: '🌐',
    topics: [
      { title: 'Cuánto cuesta una página web en Chile en 2025 (precios reales)', keywords: 'cuanto cuesta pagina web chile, precio pagina web, valor sitio web chile' },
      { title: 'Qué debe tener una página web para una empresa en Chile', keywords: 'pagina web empresa chile, sitio web profesional chile, que tiene pagina web' },
      { title: 'Cómo conseguir clientes con tu página web en Chile', keywords: 'conseguir clientes web chile, leads sitio web, clientes online chile' },
      { title: 'Diferencia entre página web y tienda online: ¿cuál necesitas?', keywords: 'pagina web vs tienda online, diferencia sitio web ecommerce chile' },
      { title: 'Dominio .cl: cómo registrarlo y para qué sirve', keywords: 'dominio cl chile, registrar dominio cl, nic chile dominio' },
      { title: 'Por qué tu empresa necesita una página web hoy más que nunca', keywords: 'importancia pagina web empresa chile, pagina web negocio chile' },
    ]
  },
  {
    id: 'paginas-economicas',
    label: 'Páginas Económicas',
    color: 'bg-teal-50 border-teal-200 text-teal-700',
    dot: 'bg-teal-500',
    icon: '💰',
    topics: [
      { title: 'Las mejores plataformas para crear una página web económica en Chile', keywords: 'pagina web economica chile, web barata chile, crear web gratis chile' },
      { title: 'Cómo tener una página web profesional con presupuesto limitado', keywords: 'pagina web barata profesional chile, web economica empresas, sitio economico' },
      { title: 'Wix vs WordPress vs Shopify: ¿cuál es más económico para Chile?', keywords: 'wix vs wordpress chile, plataforma economica web chile, comparacion precios web' },
      { title: 'Plantillas web gratis que se ven profesionales: guía completa', keywords: 'plantillas web gratis chile, templates gratis profesionales, temas web gratuitos' },
      { title: 'Hosting económico en Chile: los mejores para tu sitio web', keywords: 'hosting chile economico, hosting barato chile, servidor web chile' },
    ]
  },
  {
    id: 'ia-web',
    label: 'Páginas Web con IA',
    color: 'bg-indigo-50 border-indigo-200 text-indigo-700',
    dot: 'bg-indigo-500',
    icon: '🤖',
    topics: [
      { title: 'Cómo la IA está cambiando el desarrollo web en Chile', keywords: 'inteligencia artificial web chile, ia desarrollo web, tecnologia ia 2025' },
      { title: 'Chatbots con IA para tu sitio web: cómo aumentar ventas 24/7', keywords: 'chatbot ia chile, asistente virtual web, chatbot ventas chile' },
      { title: 'Cómo crear contenido para tu web con ChatGPT y no morir en el intento', keywords: 'chatgpt web chile, contenido ia web, seo con chatgpt' },
      { title: 'IA generativa en el diseño web: tendencias para Chile 2025', keywords: 'ia diseño web chile, generative ai web, diseño web artificial intelligence' },
      { title: 'Cómo usar IA para mejorar el SEO de tu página web en Chile', keywords: 'ia seo chile, seo inteligencia artificial, automatizacion seo chile' },
      { title: 'Personalización web con IA: ofrecer la experiencia correcta a cada usuario', keywords: 'personalizacion web ia, machine learning web, experiencia usuario ia' },
    ]
  },
];

export default function AdminBlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-[22vh] lg:pt-[12vh] pb-20">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 border border-violet-200 rounded-full text-violet-700 text-xs font-black uppercase tracking-widest mb-6">
            <TrendingUp className="w-4 h-4" />
            Content Planner SEO
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-4">
                Temas para<br/>
                <span className="text-violet-600">tu Blog</span>
              </h1>
              <p className="text-lg text-slate-500 max-w-xl font-medium">
                Temas investigados y optimizados para rankear en Google Chile. 
                Haz clic en cualquier tema para generar el artículo completo con IA.
              </p>
            </div>
            <Link
              href="/admin-blog/generate"
              className="inline-flex items-center gap-3 px-8 py-4 bg-violet-600 text-white font-black rounded-2xl hover:bg-violet-700 transition-all shadow-lg shadow-violet-600/20 shrink-0"
            >
              <Sparkles className="w-5 h-5" />
              Tema Personalizado
            </Link>
          </div>
        </div>

        {/* Category Sections */}
        <div className="space-y-14">
          {TOPIC_CATEGORIES.map((cat) => (
            <section key={cat.id}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">{cat.label}</h2>
                <span className="ml-auto text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                  {cat.topics.length} temas
                </span>
              </div>

              {/* Topics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                {cat.topics.map((topic, i) => {
                  const params = new URLSearchParams({
                    topic: topic.title,
                    keywords: topic.keywords,
                  });
                  return (
                    <Link
                      key={i}
                      href={`/admin-blog/generate?${params.toString()}`}
                      className="group flex items-start gap-4 p-5 bg-white border border-slate-100 rounded-2xl hover:border-violet-300 hover:shadow-[0_8px_30px_rgba(124,58,237,0.08)] transition-all"
                    >
                      <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${cat.dot}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-slate-800 group-hover:text-violet-700 transition-colors leading-snug mb-2">
                          {topic.title}
                        </p>
                        <p className="text-xs text-slate-400 font-medium truncate">
                          🔑 {topic.keywords.split(',')[0].trim()}…
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-violet-500 group-hover:translate-x-1 transition-all shrink-0 mt-0.5" />
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
