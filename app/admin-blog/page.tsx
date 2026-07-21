import Link from 'next/link';
import { Sparkles, ChevronRight, TrendingUp } from 'lucide-react';

const TOPIC_CATEGORIES = [
  {
    id: 'shopify',
    label: 'Ventas Online & Shopify',
    color: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    dot: 'bg-emerald-500',
    icon: '🛍️',
    topics: [
      { title: 'Cómo crear una tienda Shopify en Chile: Guía práctica para dueños de negocios', keywords: 'crear tienda shopify chile, shopify chile, abrir tienda shopify', published: true },
      { title: 'Planes de Shopify en Chile: Cuál elegir para iniciar y escalar tu pyme', keywords: 'planes shopify chile, precio shopify chile, costos shopify pyme' },
      { title: 'Métodos de pago en Chile (Webpay, Flow, Mercado Pago): Cuál conviene para tu e-commerce', keywords: 'metodos de pago shopify chile, transbank shopify, flow mercado pago chile', published: false },
      { title: 'Shopify vs Jumpseller o WooCommerce: Comparativa real para el mercado chileno', keywords: 'shopify vs jumpseller chile, shopify vs woocommerce, mejor plataforma ecommerce' },
      { title: 'Cómo organizar los envíos de tu tienda online: Starken, Chilexpress y Shipit en Shopify', keywords: 'envios shopify chile, logistica ecommerce chile, starken chilexpress shopify', published: true },
      { title: 'Diseño de tiendas online: 7 elementos indispensables para inspirar confianza y vender más', keywords: 'diseño ecommerce exitoso, confianza tienda online, optimizar checkout' }
    ]
  },
  {
    id: 'sitios-corporativos',
    label: 'Sitios Web & Diseño',
    color: 'bg-blue-50 border-blue-200 text-blue-700',
    dot: 'bg-blue-500',
    icon: '🏢',
    topics: [
      { title: 'Cuánto cuesta una página web profesional en Chile (Precios y presupuestos reales)', keywords: 'cuanto cuesta pagina web chile, precio pagina web corporativa, valor sitio web chile', published: false },
      { title: 'Páginas web corporativas: 5 elementos clave para proyectar una imagen profesional', keywords: 'pagina web corporativa chile, sitio web empresarial, presencia digital profesional', published: true },
      { title: 'Cómo estructurar el sitio web de tu empresa para captar clientes B2B automáticamente', keywords: 'captacion leads b2b web, sitio web vendedor, embudo ventas digital' },
      { title: 'Rediseño de páginas web: 6 señales claras de que tu sitio actual te hace perder clientes', keywords: 'rediseno pagina web chile, actualizar sitio web, mejorar conversion web' },
      { title: 'Dominio .cl: Cómo registrar y proteger el nombre de tu empresa en NIC Chile', keywords: 'dominio cl chile, registrar dominio cl, nic chile registro', published: false },
      { title: 'Diseño web responsivo: cómo hacer que tu sitio venda en celulares y tablets', keywords: 'diseño web responsivo chile, web movil pyme, optimizar web para celulares', published: true }
    ]
  },
  {
    id: 'seo-marketing',
    label: 'SEO & Crecimiento',
    color: 'bg-violet-50 border-violet-200 text-violet-700',
    dot: 'bg-violet-500',
    icon: '📈',
    topics: [
      { title: 'SEO para pymes en Chile: Cómo aparecer en los primeros lugares de Google sin pagar anuncios', keywords: 'seo pymes chile, posicionar web google chile, optimizar seo local' },
      { title: 'Estrategia de contenidos digital: Cómo posicionar la marca de tu empresa en internet', keywords: 'estrategia marketing digital chile, contenido seo empresas, marca digital pyme' },
      { title: 'Google Analytics (GA4) para principiantes: Cómo medir las visitas y ventas de tu web', keywords: 'google analytics 4 chile, medir visitas web, analitica web sencilla' },
      { title: 'Cómo escribir artículos en el blog de tu empresa para atraer clientes calificados', keywords: 'blog corporativo seo chile, atraer clientes con blog, redaccion seo' }
    ]
  },
  {
    id: 'automatizacion-ventas',
    label: 'Automatización & Negocios',
    color: 'bg-amber-50 border-amber-200 text-amber-700',
    dot: 'bg-amber-500',
    icon: '⚡',
    topics: [
      { title: 'Cómo automatizar las cotizaciones y consultas de clientes desde tu página web', keywords: 'automatizacion cotizaciones web, cotizador online chile, optimizar consultas clientes', published: false },
      { title: 'Boleta electrónica y ERP: Cómo conectar la contabilidad de tu negocio a tu tienda online', keywords: 'boleta electronica shopify chile, conectar erp ecommerce, facturacion automatica shopify' },
      { title: 'Sistemas de reservas y agendas online: Cómo optimizar la atención a tus clientes', keywords: 'agenda online chile, sistema reservas web, optimizar tiempo equipo', published: true },
      { title: 'Por qué tu empresa necesita un catálogo digital interactivo en lugar de un PDF estático', keywords: 'catalogo digital chile, catalogo interactivo web, mostrar productos online' }
    ]
  }
];

export default function AdminBlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-[22vh] lg:pt-48 pb-20">
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
                      href={`/admin-blog/generate?${params.toString()}${topic.published ? '&mode=advanced' : ''}`}
                      className={`group flex items-start gap-4 p-5 bg-white border border-slate-100 rounded-2xl transition-all ${
                        topic.published 
                        ? 'bg-slate-50/50 hover:border-violet-200' 
                        : 'hover:border-violet-300 hover:shadow-[0_8px_30px_rgba(124,58,237,0.08)]'
                      }`}
                    >
                      <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${topic.published ? 'bg-emerald-500' : cat.dot}`} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <p className={`text-sm font-bold group-hover:text-violet-700 transition-colors leading-snug ${
                            topic.published ? 'text-slate-500' : 'text-slate-800'
                          }`}>
                            {topic.title}
                          </p>
                          {topic.published && (
                            <span className="flex-shrink-0 bg-emerald-100 text-emerald-700 text-[8px] font-black uppercase px-1.5 py-0.5 rounded group-hover:bg-violet-600 group-hover:text-white transition-colors">
                              Mejorar Post
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 font-medium truncate">
                          🔑 {topic.keywords.split(',')[0].trim()}…
                        </p>
                      </div>
                      {!topic.published && (
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-violet-500 group-hover:translate-x-1 transition-all shrink-0 mt-0.5" />
                      )}
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

