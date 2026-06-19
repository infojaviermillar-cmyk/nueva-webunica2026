import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import FAQSection from '@/components/sections/faq-section';

export const metadata: Metadata = {
  title: 'Shopify con Inteligencia Artificial Chile 2026 | Automatiza tu Tienda',
  description: 'Conectamos tu tienda Shopify a IA vía API para crear productos, mejorar textos, generar ofertas, optimizar el home y gestionar redirecciones de forma automática. Ahorra horas de trabajo editorial.',
  keywords: 'shopify inteligencia artificial, ia para shopify chile, automatizar shopify ia, chatgpt shopify, crear productos con ia shopify, optimizar tienda shopify ia',
  openGraph: {
    title: 'Shopify + IA Chile | Automatiza tu Tienda con Inteligencia Artificial',
    description: 'Conectamos tu Shopify a IA vía API para crear productos, mejorar textos, generar ofertas y optimizar tu tienda sin trabajo manual.',
    url: 'https://webunica.cl/shopify-inteligencia-artificial',
    type: 'website',
    siteName: 'Webunica',
    images: [{ url: 'https://webunica.cl/og-shopify-ia.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify + Inteligencia Artificial | Webunica Chile',
    description: 'Automatiza la gestión de tu tienda Shopify con IA: productos, textos, ofertas, home y redirecciones.',
  },
  alternates: {
    canonical: 'https://webunica.cl/shopify-inteligencia-artificial',
  },
};

export default function ShopifyIAPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://webunica.cl/shopify-inteligencia-artificial#service",
        "name": "Shopify con Inteligencia Artificial",
        "description": "Integración de IA vía API de Shopify para automatizar la creación de productos, optimización de textos, generación de ofertas, personalización del home y gestión de redirecciones.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Webunica",
          "url": "https://webunica.cl",
          "image": "https://webunica.cl/logo-webunica.png.webp",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Santiago",
            "addressCountry": "CL"
          },
          "telephone": "+56999999999"
        },
        "areaServed": "CL",
        "serviceType": "AI Ecommerce Automation",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios IA para Shopify",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Creación masiva de productos con IA" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Optimización de textos SEO con IA" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Generación de ofertas con IA" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gestión de redirecciones automáticas" }}
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://webunica.cl" },
          { "@type": "ListItem", "position": 2, "name": "Shopify con Inteligencia Artificial", "item": "https://webunica.cl/shopify-inteligencia-artificial" }
        ]
      }
    ]
  };

  const features = [
    {
      icon: "📦",
      color: "from-cyan-500 to-blue-500",
      hoverBg: "hover:bg-cyan-50",
      hoverText: "group-hover/item:text-cyan-600",
      tag: "text-cyan-600 bg-cyan-50 border-cyan-100",
      title: "Creación de Productos",
      desc: "La IA genera títulos, descripciones, metafields, tags y alt texts de imagen a partir de una ficha simple o incluso de una foto del producto. Carga catálogos completos en minutos.",
      highlights: [
        "Títulos y descripciones SEO optimizadas",
        "Metafields y tags automáticos",
        "Alt texts para todas las imágenes",
        "Carga masiva vía API de Shopify",
      ]
    },
    {
      icon: "✍️",
      color: "from-violet-500 to-purple-500",
      hoverBg: "hover:bg-violet-50",
      hoverText: "group-hover/item:text-violet-600",
      tag: "text-violet-600 bg-violet-50 border-violet-100",
      title: "Mejora de Textos",
      desc: "Auditamos todos los textos de tu tienda y la IA los reescribe para mejorar legibilidad, conversión y posicionamiento SEO. Sin tocar el theme ni trabajar producto por producto.",
      highlights: [
        "Reescritura masiva de descripciones",
        "Optimización de meta titles y descriptions",
        "Tono de marca consistente",
        "Revisión y mejora de colecciones",
      ]
    },
    {
      icon: "🏷️",
      color: "from-amber-500 to-orange-500",
      hoverBg: "hover:bg-amber-50",
      hoverText: "group-hover/item:text-amber-600",
      tag: "text-amber-600 bg-amber-50 border-amber-100",
      title: "Ofertas y Precios",
      desc: "La IA detecta patrones de venta, estacionalidad y márgenes para sugerir y ejecutar promociones, descuentos por volumen y price rules directamente vía API de Shopify.",
      highlights: [
        "Price rules automáticos por segmento",
        "Descuentos por volumen y temporada",
        "Activación y desactivación programada",
        "Alertas de margen antes de aplicar",
      ]
    },
    {
      icon: "🏠",
      color: "from-emerald-500 to-teal-500",
      hoverBg: "hover:bg-emerald-50",
      hoverText: "group-hover/item:text-emerald-600",
      tag: "text-emerald-600 bg-emerald-50 border-emerald-100",
      title: "Home y Colecciones",
      desc: "Actualiza automáticamente los banners, textos destacados y orden de colecciones del home según temporada, stock disponible o campañas activas, sin editar el theme manualmente.",
      highlights: [
        "Contenido del home dinámico",
        "Reordenamiento de colecciones por IA",
        "Banners y copies adaptados por campaña",
        "Sincronización con calendario comercial",
      ]
    },
    {
      icon: "↪️",
      color: "from-rose-500 to-pink-500",
      hoverBg: "hover:bg-rose-50",
      hoverText: "group-hover/item:text-rose-600",
      tag: "text-rose-600 bg-rose-50 border-rose-100",
      title: "Redirecciones",
      desc: "Gestiona de forma masiva las redirecciones 301 de tu tienda. Útil al reorganizar el catálogo, eliminar productos descontinuados o después de una migración.",
      highlights: [
        "Creación masiva de 301 vía API",
        "Detección de URLs rotas automática",
        "Mapeo inteligente origen → destino",
        "Exportación e importación en CSV",
      ]
    },
    {
      icon: "🔍",
      color: "from-sky-500 to-indigo-500",
      hoverBg: "hover:bg-sky-50",
      hoverText: "group-hover/item:text-sky-600",
      tag: "text-sky-600 bg-sky-50 border-sky-100",
      title: "Auditoría de Contenido",
      desc: "La IA escanea toda la tienda y entrega un informe priorizando qué productos tienen textos débiles, imágenes sin alt, metadatos faltantes o precios desactualizados.",
      highlights: [
        "Reporte de salud del catálogo",
        "Priorización por impacto en ventas",
        "Detección de contenido duplicado",
        "Plan de mejora accionable",
      ]
    },
  ];

  const process = [
    { step: "01", title: "Conexión API", desc: "Generamos las credenciales de acceso a tu tienda Shopify vía API. Sin instalar apps de terceros ni modificar el theme." },
    { step: "02", title: "Auditoría IA", desc: "Escaneamos todo el catálogo y definimos qué tareas automatiza la IA primero según el impacto esperado." },
    { step: "03", title: "Ejecución", desc: "La IA genera el contenido, lo revisamos contigo y lo publicamos vía API directamente en tu tienda." },
    { step: "04", title: "Iteración", desc: "Medimos resultados, ajustamos el modelo a tu tono de marca y escalamos las automatizaciones." },
  ];

  const faqs = [
    {
      question: "¿La IA publica directamente en mi tienda Shopify?",
      answer: "Sí, usamos la API oficial de Shopify (Admin API) para leer y escribir contenido en tu tienda. Antes de publicar cualquier cambio masivo, siempre hay una revisión previa contigo o con tu equipo."
    },
    {
      question: "¿Necesito instalar alguna app en Shopify?",
      answer: "No. Trabajamos directamente con la Admin API de Shopify usando un Custom App privado en tu tienda. No hay apps de terceros que revisar ni costos de suscripción adicionales por esa vía."
    },
    {
      question: "¿La IA respeta el tono y el estilo de mi marca?",
      answer: "Sí. Antes de ejecutar cualquier tarea, construimos un brief de marca con tu tono, vocabulario preferido, palabras a evitar y ejemplos de textos aprobados. El modelo usa ese contexto en cada generación."
    },
    {
      question: "¿Qué pasa si la IA genera un texto que no me gusta?",
      answer: "Todo el contenido generado pasa por un flujo de revisión antes de publicarse. Puedes aprobar, editar o rechazar cada bloque. Para cambios masivos, entregamos una planilla de previsualización antes de ejecutar."
    },
    {
      question: "¿Funciona para tiendas con miles de productos?",
      answer: "Sí, es justamente donde más valor entrega. La API de Shopify permite operar catálogos de cualquier tamaño y la IA puede procesar miles de productos en paralelo, algo imposible de hacer manualmente."
    },
    {
      question: "¿Qué tan seguro es dar acceso API a mi tienda?",
      answer: "El acceso se configura con un Custom App privado con permisos mínimos necesarios para cada tarea. No compartimos credenciales con terceros y puedes revocar el acceso en cualquier momento desde el panel de Shopify."
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-zinc-900 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-[22vh] lg:pt-48">

        {/* Hero */}
        <section className="relative pt-0 pb-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-cyan-50 border border-cyan-200 rounded-full">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-[10px] font-black tracking-[0.2em] text-cyan-600 uppercase">Shopify API + Inteligencia Artificial · Chile</span>
            </div>

            <h1 className="text-[2.4rem] lg:text-[80px] font-black tracking-tighter leading-[0.9] mb-8 uppercase text-zinc-950">
              Tu Shopify conectado{' '}
              <span className="text-cyan-500 italic font-serif lowercase font-light">a la IA</span>
            </h1>

            <p className="text-xl text-zinc-500 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              Conectamos tu tienda Shopify a modelos de inteligencia artificial vía API para{' '}
              <strong className="text-zinc-900">crear productos, mejorar textos, generar ofertas, actualizar el home y gestionar redirecciones</strong>{' '}
              de forma automática.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LeadButton className="px-10 py-5 bg-cyan-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-cyan-600 transition-all shadow-xl shadow-cyan-500/20 active:scale-95">
                Cotizar Integración IA
              </LeadButton>
              <WhatsAppButton className="px-10 py-5 bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95">
                Hablar con un Especialista
              </WhatsAppButton>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-8 mt-16">
              {[
                { label: "API Oficial Shopify", value: "✓" },
                { label: "Sin Apps de Terceros", value: "✓" },
                { label: "Revisión antes de publicar", value: "✓" },
                { label: "Acceso Revocable", value: "✓" },
              ].map((b) => (
                <div key={b.label} className="text-center">
                  <div className="text-3xl font-black text-zinc-950 tracking-tighter">{b.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-1">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto px-6 pb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
              Qué puede hacer{' '}
              <span className="text-cyan-500 italic font-serif lowercase font-light">la IA en tu tienda</span>
            </h2>
            <p className="text-zinc-500 font-light max-w-xl mx-auto">
              Tareas que antes tomaban días o semanas, ejecutadas en minutos directamente en tu Shopify.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="group/item flex flex-col bg-white rounded-[3rem] border border-zinc-100 hover:border-zinc-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-3 bg-gradient-to-r ${f.color}`} />
                <div className="p-10 flex flex-col flex-grow">
                  <div className="text-5xl mb-6">{f.icon}</div>
                  <h3 className="text-2xl font-black tracking-tighter uppercase mb-4 text-zinc-950">{f.title}</h3>
                  <p className="text-zinc-500 font-light leading-relaxed mb-8 flex-grow">{f.desc}</p>
                  <ul className="space-y-2">
                    {f.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm font-medium text-zinc-700">
                        <span className="w-4 h-4 rounded-full bg-cyan-500 flex items-center justify-center text-white text-[8px] font-black shrink-0">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="bg-zinc-950 py-32 rounded-[4rem] mx-4 text-white overflow-hidden relative mb-16">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.12),transparent)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
                Cómo{' '}
                <span className="text-cyan-400 italic font-serif lowercase font-light">funciona</span>
              </h2>
              <p className="text-zinc-400 font-light max-w-xl mx-auto">
                Integración directa vía API, sin modificar tu theme ni instalar apps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((s) => (
                <div key={s.step} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/8 transition-all">
                  <div className="text-5xl font-black text-cyan-400/30 mb-4 tracking-tighter">{s.step}</div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-3">{s.title}</h3>
                  <p className="text-zinc-500 font-light text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Diagrama simplificado */}
            <div className="mt-20 p-8 bg-white/5 border border-white/10 rounded-[2.5rem]">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-4 text-center">
                {[
                  { label: "Tu Shopify", sub: "Admin API" },
                  { label: "→", sub: "" },
                  { label: "Modelo IA", sub: "GPT-4 / Claude" },
                  { label: "→", sub: "" },
                  { label: "Revisión", sub: "Tú apruebas" },
                  { label: "→", sub: "" },
                  { label: "Publicado", sub: "En tu tienda" },
                ].map((node, i) => (
                  node.sub === "" ? (
                    <div key={i} className="text-2xl text-zinc-600 font-black hidden lg:block">→</div>
                  ) : (
                    <div key={i} className="flex flex-col items-center px-6 py-4 bg-white/5 rounded-2xl border border-white/10 min-w-[120px]">
                      <span className="text-sm font-black uppercase tracking-wide text-white">{node.label}</span>
                      <span className="text-[10px] text-zinc-500 font-medium mt-1">{node.sub}</span>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Casos de uso destacados */}
        <section className="max-w-7xl mx-auto px-6 pb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
              Casos de uso{' '}
              <span className="text-cyan-500 italic font-serif lowercase font-light">frecuentes</span>
            </h2>
            <p className="text-zinc-500 font-light max-w-xl mx-auto">
              Ejemplos reales de lo que automatizamos con IA en tiendas Shopify.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                tag: "Catálogos grandes",
                title: "Tengo 2.000 productos sin descripción",
                desc: "La IA lee el nombre, SKU y categoría de cada producto y genera una descripción optimizada para SEO y conversión. Luego la publicamos masivamente vía API.",
              },
              {
                tag: "Post-migración",
                title: "Cambié de plataforma y tengo URLs rotas",
                desc: "Detectamos todas las URLs antiguas que dejaron de existir y configuramos las redirecciones 301 correspondientes en Shopify para no perder tráfico ni posicionamiento.",
              },
              {
                tag: "Temporadas",
                title: "Quiero actualizar el home para CyberDay",
                desc: "La IA genera los copies de banners, textos de colecciones destacadas y reordena los productos según stock y margen. El home queda listo sin tocar el tema.",
              },
              {
                tag: "Calidad editorial",
                title: "Mis textos son inconsistentes entre productos",
                desc: "Auditamos el tono, largo y estructura de todas las descripciones y las estandarizamos con el tono de tu marca, manteniendo las palabras clave correctas.",
              },
            ].map((c) => (
              <div key={c.title} className="p-10 bg-zinc-50 rounded-[3rem] border border-zinc-100 hover:border-cyan-200 hover:bg-cyan-50/30 transition-all group">
                <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-cyan-600 bg-cyan-100 px-3 py-1 rounded-full mb-4">{c.tag}</span>
                <h3 className="text-xl font-black tracking-tight text-zinc-950 mb-3 group-hover:text-cyan-700 transition-colors">"{c.title}"</h3>
                <p className="text-zinc-500 font-light leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <div className="pb-24 bg-white">
          <FAQSection
            faqs={faqs}
            title="Preguntas sobre Shopify + IA"
            description="Todo lo que necesitas saber antes de automatizar tu tienda con inteligencia artificial."
          />
        </div>

        {/* CTA Final */}
        <section className="max-w-4xl mx-auto px-6 text-center pb-32">
          <div className="p-12 lg:p-24 bg-zinc-950 rounded-[5rem] text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent)]" />
            <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">
              Automatiza tu tienda{' '}
              <br />
              <span className="text-cyan-400 italic font-serif lowercase font-light">con inteligencia artificial</span>
            </h2>
            <p className="text-zinc-400 mb-12 text-xl font-light max-w-lg mx-auto">
              Cuéntanos qué tarea quieres automatizar y te mostramos cómo funciona en tu Shopify antes de comprometer nada.
            </p>
            <LeadButton className="px-12 py-6 bg-white text-zinc-950 font-black uppercase tracking-widest text-[11px] rounded-[2rem] hover:scale-105 active:scale-95 transition-all">
              Ver Demo Personalizada
            </LeadButton>
          </div>
        </section>

      </div>
    </div>
  );
}
