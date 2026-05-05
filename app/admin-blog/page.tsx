import Link from 'next/link';
import { Sparkles, ChevronRight, TrendingUp } from 'lucide-react';

const TOPIC_CATEGORIES = [
  {
    id: 'shopify',
    label: 'Ingeniería Shopify',
    color: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    dot: 'bg-emerald-500',
    icon: '💎',
    topics: [
      { title: 'Cómo crear una tienda Shopify en Chile paso a paso', keywords: 'crear tienda shopify chile, shopify chile, abrir tienda shopify', published: true },
      { title: 'Optimización avanzada de LCP y Core Web Vitals en Shopify Plus', keywords: 'lcp shopify chile, velocidad shopify avanzado, core web vitals shopify' },
      { title: 'Cómo integrar Webpay en Shopify Chile', keywords: 'webpay shopify chile, transbank shopify, pago shopify chile', published: false },
      { title: 'Arquitectura Headless: Shopify Hydrogen vs Next.js para Chile', keywords: 'shopify headless chile, hydrogen shopify, shopify nextjs' },
      { title: 'Cómo configurar envíos con Starken y Chilexpress en Shopify', keywords: 'envios shopify chile, starken shopify, chilexpress shopify', published: true },
      { title: 'Diferencia entre Shopify Basic, Shopify y Advanced en Chile', keywords: 'planes shopify chile, precio shopify chile, shopify costo', published: false },
      { title: 'Custom Apps en Shopify: Extendiendo la funcionalidad con Remix', keywords: 'apps personalizadas shopify, remix shopify app, api shopify chile' },
      { title: 'Cómo hacer SEO para tu tienda Shopify y aparecer en Google', keywords: 'seo shopify, posicionamiento shopify google, shopify seo chile', published: false },
    ]
  },
  {
    id: 'desarrollo-web',
    label: 'Ingeniería & Backend',
    color: 'bg-blue-50 border-blue-200 text-blue-700',
    dot: 'bg-blue-500',
    icon: '⚡',
    topics: [
      { title: 'Seguridad en Next.js: RLS y Middleware con Supabase en 2025', keywords: 'seguridad nextjs chile, supabase rls chile, autenticacion nextjs' },
      { title: 'Qué es una plataforma SaaS y cómo puede digitalizar tu negocio', keywords: 'saas chile, plataforma saas, software como servicio chile', published: true },
      { title: 'React Server Actions: Manejo avanzado de estados y validaciones', keywords: 'react server actions chile, nextjs server actions, formularios avanzados' },
      { title: 'Cómo crear un sistema de cotización online para tu empresa', keywords: 'sistema cotizacion online chile, cotizador web, formulario cotizacion', published: false },
      { title: 'Arquitectura de Microservicios con Node.js para empresas chilenas', keywords: 'microservicios nodejs chile, arquitectura software chile, backend avanzado' },
      { title: 'Qué es una API y cómo puede automatizar tu negocio en Chile', keywords: 'integracion api chile, automatizacion negocio web, api rest chile', published: false },
    ]
  },
  {
    id: 'cro-seo',
    label: 'CRO & Datos',
    color: 'bg-violet-50 border-violet-200 text-violet-700',
    dot: 'bg-violet-500',
    icon: '📈',
    topics: [
      { title: 'Configuración técnica de GA4 para medir el ROI real de tu ecommerce', keywords: 'ga4 ecommerce chile, medicion roi web, google analytics 4 avanzado' },
      { title: 'Neurodivergencia y Accesibilidad: Cómo no perder 1 de cada 5 usuarios', keywords: 'accesibilidad web chile, neurodivergencia web, inclusividad digital', published: true },
      { title: 'Psicología del consumo: Cómo optimizar el checkout para evitar rebotes', keywords: 'cro checkout chile, optimizar conversion chile, psicologia ventas online' },
      { title: 'Implementación de Server-Side Tagging para mejorar el tracking', keywords: 'server side tagging chile, tracking avanzado web, privacidad datos chile' },
      { title: 'A/B Testing en Next.js: Metodología técnica para validar cambios', keywords: 'ab testing nextjs, optimizacion conversion chile, experimentos web' },
    ]
  },
  {
    id: 'diseno-web',
    label: 'UI/UX Engineering',
    color: 'bg-pink-50 border-pink-200 text-pink-700',
    dot: 'bg-pink-500',
    icon: '🎨',
    topics: [
      { title: 'Construcción de un Design System escalable con Tailwind CSS', keywords: 'design system chile, tailwind css avanzado, componentes react' },
      { title: 'Diseño Web con Adobe XD: de prototipo a sitio real', keywords: 'adobe xd chile, diseño web adobe xd, prototipo web chile', published: true },
      { title: 'Micro-interacciones con Framer Motion para mejorar el engagement', keywords: 'framer motion chile, animaciones react chile, ux moderno' },
      { title: 'Diseño web responsivo: cómo hacer que tu sitio se vea bien en móviles', keywords: 'diseño web responsivo chile, mobile first chile, sitio web movil', published: true },
      { title: 'Tendencias de diseño web para empresas chilenas en 2025', keywords: 'tendencias diseño web 2025, diseño web moderno chile, web design trends', published: true },
    ]
  },
  {
    id: 'paginas-web',
    label: 'Negocio Web',
    color: 'bg-amber-50 border-amber-200 text-amber-700',
    dot: 'bg-amber-500',
    icon: '🌐',
    topics: [
      { title: 'Cuánto cuesta una página web en Chile en 2025 (precios reales)', keywords: 'cuanto cuesta pagina web chile, precio pagina web, valor sitio web chile', published: false },
      { title: 'Estrategia de contenidos SEO para sectores B2B altamente técnicos', keywords: 'seo b2b chile, estrategia contenido tecnico, marketing industrial chile' },
      { title: 'Dominio .cl: cómo registrarlo y para qué sirve', keywords: 'dominio cl chile, registrar dominio cl, nic chile dominio', published: false },
      { title: 'Cómo Crear un Sitio Web para Inmobiliaria que Venda Efectivamente', keywords: 'crear sitio web inmobiliaria chile, web inmobiliaria, venta casas web', published: true },
      { title: 'Academia en Línea con WordPress y Tutor LMS Pro: Guía Completa', keywords: 'academia online chile, tutor lms pro chile, cursos online wordpress', published: true },
    ]
  },
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

