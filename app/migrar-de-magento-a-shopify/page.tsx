import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import FAQSection from '@/components/sections/faq-section';

export const metadata: Metadata = {
  title: 'Migrar de Magento a Shopify Chile 2026 | Migración vía API sin pérdida de datos',
  description: 'Servicio experto de migración de Magento (Adobe Commerce) a Shopify en Chile. Traspasamos productos, clientes, pedidos y URLs con redirecciones 301 para proteger tu SEO. ¡Cotiza gratis!',
  keywords: 'migrar magento a shopify, migracion magento shopify chile, pasar de magento a shopify, adobe commerce shopify, migrar tienda magento chile, agencia migracion magento shopify',
  openGraph: {
    title: 'Migrar de Magento a Shopify Chile | Expertos Webunica',
    description: 'Migración completa de Magento a Shopify vía API. Preservamos tu catálogo, clientes, historial de pedidos y SEO. Más de 80 migraciones exitosas en Chile.',
    url: 'https://webunica.cl/migrar-de-magento-a-shopify',
    type: 'website',
    siteName: 'Webunica',
    images: [{ url: 'https://webunica.cl/og-magento-shopify.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Migrar Magento a Shopify Chile | Webunica',
    description: 'Migración profesional de Magento a Shopify. Sin pérdida de datos ni SEO. Cotiza gratis.',
  },
  alternates: {
    canonical: 'https://webunica.cl/migrar-de-magento-a-shopify',
  },
};

export default function MigrarMagentoShopifyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://webunica.cl/migrar-de-magento-a-shopify#service",
        "name": "Migración de Magento a Shopify en Chile",
        "description": "Servicio profesional de migración de tiendas Magento (Adobe Commerce) a Shopify, incluyendo traspaso de productos, clientes, historial de pedidos, imágenes y redirecciones SEO.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Webunica",
          "url": "https://webunica.cl",
          "image": "https://webunica.cl/logo-webunica.png.webp",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Santiago",
            "addressCountry": "CL"
          }
        },
        "areaServed": "CL",
        "serviceType": "Ecommerce Migration"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://webunica.cl" },
          { "@type": "ListItem", "position": 2, "name": "Migrar a Shopify", "item": "https://webunica.cl/migrar-a-shopify" },
          { "@type": "ListItem", "position": 3, "name": "Migrar de Magento a Shopify", "item": "https://webunica.cl/migrar-de-magento-a-shopify" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Cuánto tiempo toma migrar de Magento a Shopify?",
            "acceptedAnswer": { "@type": "Answer", "text": "Una migración estándar desde Magento con hasta 2.000 productos toma entre 2 y 4 semanas. Para catálogos mayores o con atributos personalizados complejos, puede extenderse a 6-8 semanas." }
          },
          {
            "@type": "Question",
            "name": "¿Se pueden migrar los atributos de producto de Magento?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sí. Mapeamos los atributos de Magento (tallas, colores, materiales, etc.) a las opciones y variantes de Shopify. Los metafields de Shopify nos permiten traspasar atributos personalizados que no tienen equivalente directo." }
          }
        ]
      }
    ]
  };

  const painPoints = [
    { icon: "💸", title: "Costos de hosting desbordados", desc: "Los servidores dedicados de Magento y los licencias de Adobe Commerce cuestan miles de dólares al año." },
    { icon: "🔧", title: "Mantenimiento técnico constante", desc: "Actualizaciones críticas, parches de seguridad y módulos rotos que requieren desarrolladores especializados." },
    { icon: "🐌", title: "Velocidad de carga deficiente", desc: "Magento mal optimizado genera tiempos de carga de 5+ segundos, lo que destruye la conversión y el SEO." },
    { icon: "🧩", title: "Integraciones caras y frágiles", desc: "Cada extensión de Magento tiene un costo y puede romperse con cada actualización del core." },
  ];

  const whatMigramos = [
    { label: "Productos y variantes", detail: "SKUs, precios, stock, imágenes y descripciones." },
    { label: "Colecciones y categorías", detail: "Estructura de navegación y jerarquía de catálogo." },
    { label: "Clientes registrados", detail: "Nombres, emails, historial de direcciones y grupos." },
    { label: "Historial de pedidos", detail: "Órdenes pasadas para mantener la trazabilidad." },
    { label: "Metadatos SEO", detail: "Meta titles, descriptions y alt text de imágenes." },
    { label: "Redirecciones 301", detail: "Mapeo de URLs antiguas a las nuevas de Shopify." },
    { label: "Páginas de contenido", detail: "Políticas, FAQ, páginas institucionales." },
    { label: "Cupones y descuentos", detail: "Códigos de descuento activos migrados a Shopify." },
  ];

  const faqs = [
    {
      question: "¿Se pueden migrar los atributos de producto de Magento a Shopify?",
      answer: "Sí. Mapeamos los atributos configurables de Magento (tallas, colores, materiales, etc.) a las opciones y variantes de Shopify. Para atributos más complejos usamos Metafields de Shopify, que nos permiten almacenar datos adicionales por producto sin limitaciones."
    },
    {
      question: "¿Qué pasa con las reseñas y valoraciones de productos?",
      answer: "Las reseñas de Magento se pueden migrar a Shopify usando metafields o aplicaciones de terceros como Loox o Judge.me, que tienen importadores de CSV. Incluimos este proceso como parte de la migración cuando hay un volumen significativo de reseñas."
    },
    {
      question: "¿Cuánto tiempo toma migrar de Magento a Shopify?",
      answer: "Una migración estándar desde Magento con hasta 2.000 productos toma entre 2 y 4 semanas. Para catálogos mayores a 5.000 SKUs o con atributos configurables complejos, puede extenderse a 6-8 semanas. Siempre hacemos una estimación exacta tras la auditoría inicial gratuita."
    },
    {
      question: "¿Mi tienda Magento sigue funcionando durante la migración?",
      answer: "Absolutamente. Todo el proceso ocurre en una tienda Shopify de staging. Tu tienda Magento continúa operando con normalidad. El cutover (cambio de DNS) ocurre en una sola operación de minutos, una vez validados todos los datos."
    },
    {
      question: "¿Qué versiones de Magento pueden migrar?",
      answer: "Trabajamos con Magento 1.x (Open Source y Commerce), Magento 2.x y Adobe Commerce Cloud. Magento 1 llegó a fin de vida en 2020, por lo que es urgente migrar para mantener la seguridad del sitio."
    },
    {
      question: "¿Se pueden migrar los módulos de Magento?",
      answer: "Los módulos de Magento no se migran directamente, ya que son de código propietario. Lo que hacemos es identificar la funcionalidad de cada módulo y encontrar el equivalente en las más de 8.000 apps de la Shopify App Store, o desarrollar una solución custom si es necesario."
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-zinc-900 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-[22vh] lg:pt-48">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 mb-10">
          <ol className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
            <li><Link href="/" className="hover:text-zinc-700 transition-colors">Inicio</Link></li>
            <li aria-hidden>/</li>
            <li><Link href="/migrar-a-shopify" className="hover:text-zinc-700 transition-colors">Migrar a Shopify</Link></li>
            <li aria-hidden>/</li>
            <li className="text-orange-500">Desde Magento</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="relative pb-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/5 blur-[130px] rounded-full pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-orange-50 border border-orange-200 rounded-full">
                <span className="text-[10px] font-black tracking-[0.2em] text-orange-600 uppercase">🧱 Migración Magento → Shopify</span>
              </div>

              <h1 className="text-[2.4rem] lg:text-[68px] font-black tracking-tighter leading-[0.9] mb-8 uppercase text-zinc-950">
                De Magento{' '}
                <span className="text-orange-500 italic font-serif lowercase font-light">a Shopify</span>
                {' '}sin perder nada
              </h1>

              <p className="text-lg text-zinc-500 mb-8 leading-relaxed font-light max-w-lg">
                Migramos tu tienda Magento (Open Source o Adobe Commerce) a Shopify <strong className="text-zinc-900">vía API</strong>. Productos, clientes, pedidos, SEO y redirecciones. Sin downtime.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <LeadButton className="px-8 py-4 bg-orange-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 active:scale-95">
                  Cotizar Migración Gratis
                </LeadButton>
                <WhatsAppButton className="px-8 py-4 bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95">
                  Hablar con un Experto
                </WhatsAppButton>
              </div>
            </div>

            {/* Migration visual */}
            <div className="hidden lg:flex items-center justify-center gap-8">
              <div className="p-8 bg-zinc-100 rounded-[3rem] text-center border border-zinc-200">
                <div className="text-6xl mb-4">🧱</div>
                <div className="text-xl font-black tracking-tight text-zinc-500 uppercase">Magento</div>
                <div className="text-xs text-zinc-400 mt-1 font-medium">Plataforma actual</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-0.5 bg-gradient-to-r from-orange-400 to-violet-500" />
                <div className="px-3 py-1 bg-gradient-to-r from-orange-500 to-violet-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">API</div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-violet-500 to-orange-400" />
              </div>
              <div className="p-8 bg-violet-950 rounded-[3rem] text-center border border-violet-700 shadow-2xl shadow-violet-500/20">
                <div className="text-6xl mb-4">🛍️</div>
                <div className="text-xl font-black tracking-tight text-white uppercase">Shopify</div>
                <div className="text-xs text-violet-400 mt-1 font-medium">Nueva plataforma</div>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué salir de Magento */}
        <section className="bg-zinc-950 py-28 rounded-[4rem] mx-4 text-white overflow-hidden relative mb-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.1),transparent)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
                Por qué <span className="text-orange-400">salir de Magento</span>
              </h2>
              <p className="text-zinc-400 font-light max-w-xl mx-auto">El costo total de Magento va mucho más allá del hosting.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {painPoints.map((p) => (
                <div key={p.title} className="flex gap-5 items-start p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/8 transition-all">
                  <div className="text-4xl shrink-0">{p.icon}</div>
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tight mb-2">{p.title}</h3>
                    <p className="text-zinc-400 font-light text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Qué migramos */}
        <section className="max-w-7xl mx-auto px-6 pb-28">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
              Todo lo que <span className="text-violet-600 italic font-serif lowercase font-light">migramos</span>
            </h2>
            <p className="text-zinc-500 font-light max-w-xl mx-auto">Nada queda atrás. Migramos cada dato de tu tienda Magento.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {whatMigramos.map((w) => (
              <div key={w.label} className="p-6 bg-zinc-50 border border-zinc-100 rounded-3xl hover:border-orange-200 hover:bg-orange-50/30 transition-all group">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-[11px] font-black mb-4">✓</div>
                <h3 className="font-black text-zinc-900 uppercase text-sm tracking-tight mb-1">{w.label}</h3>
                <p className="text-zinc-500 text-xs font-light">{w.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mid CTA */}
        <section className="bg-orange-500/8 border-y border-orange-500/15 py-20 mb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">
              ¿Tienes Magento 1? <span className="text-orange-500">Actúa ahora</span>
            </h2>
            <p className="text-zinc-600 font-light mb-8 max-w-xl mx-auto">
              Magento 1 llegó a fin de vida en junio de 2020. Sin parches de seguridad, tu tienda es vulnerable. Migrar a Shopify es la solución definitiva.
            </p>
            <LeadButton className="px-10 py-5 bg-orange-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
              Evaluar Mi Tienda Magento
            </LeadButton>
          </div>
        </section>

        {/* FAQ */}
        <div className="pb-24">
          <FAQSection
            faqs={faqs}
            title="Preguntas sobre Migración Magento a Shopify"
            description="Resolvemos las dudas más comunes de nuestros clientes antes de iniciar el proyecto."
          />
        </div>

        {/* Otras migraciones */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 text-center">¿Tienes otra plataforma?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/migrar-de-woocommerce-a-shopify" className="px-8 py-4 border border-zinc-200 rounded-full font-black text-sm uppercase tracking-widest hover:border-violet-500 hover:text-violet-600 transition-all">
              🛒 Migrar desde WooCommerce
            </Link>
            <Link href="/migrar-de-jumpseller-a-shopify" className="px-8 py-4 border border-zinc-200 rounded-full font-black text-sm uppercase tracking-widest hover:border-emerald-500 hover:text-emerald-600 transition-all">
              🦘 Migrar desde Jumpseller
            </Link>
            <Link href="/migrar-a-shopify" className="px-8 py-4 border border-zinc-200 rounded-full font-black text-sm uppercase tracking-widest hover:border-zinc-400 transition-all">
              Ver todas las migraciones →
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
