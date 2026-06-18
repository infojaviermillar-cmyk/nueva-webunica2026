import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import FAQSection from '@/components/sections/faq-section';

export const metadata: Metadata = {
  title: 'Migrar de Jumpseller a Shopify Chile 2026 | Sin perder datos ni SEO',
  description: 'Servicio profesional de migración de Jumpseller a Shopify en Chile. Traspasamos productos, clientes, pedidos y URLs con redirecciones 301. Accede al ecosistema global de Shopify. ¡Cotiza gratis!',
  keywords: 'migrar jumpseller a shopify, migracion jumpseller shopify chile, pasar de jumpseller a shopify, cambiar de jumpseller a shopify, agencia migracion ecommerce chile',
  openGraph: {
    title: 'Migrar de Jumpseller a Shopify Chile | Expertos Webunica',
    description: 'Migración completa de Jumpseller a Shopify. Preservamos tu catálogo, clientes, historial de pedidos y posicionamiento SEO. Somos expertos en migraciones de ecommerce en Chile.',
    url: 'https://webunica.cl/migrar-de-jumpseller-a-shopify',
    type: 'website',
    siteName: 'Webunica',
    images: [{ url: 'https://webunica.cl/og-jumpseller-shopify.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Migrar Jumpseller a Shopify Chile | Webunica',
    description: 'Migración profesional de Jumpseller a Shopify. Sin pérdida de datos ni SEO. Cotiza gratis.',
  },
  alternates: {
    canonical: 'https://webunica.cl/migrar-de-jumpseller-a-shopify',
  },
};

export default function MigrarJumpsellerShopifyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://webunica.cl/migrar-de-jumpseller-a-shopify#service",
        "name": "Migración de Jumpseller a Shopify en Chile",
        "description": "Servicio profesional de migración de tiendas Jumpseller a Shopify, incluyendo traspaso de productos, clientes, historial de pedidos y redirecciones SEO.",
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
          { "@type": "ListItem", "position": 3, "name": "Migrar de Jumpseller a Shopify", "item": "https://webunica.cl/migrar-de-jumpseller-a-shopify" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Puedo exportar mis productos desde Jumpseller?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sí. Jumpseller permite exportar el catálogo en formato CSV. Nosotros procesamos ese archivo, lo transformamos al formato de importación de Shopify y complementamos con la API de Jumpseller para datos que no se exportan directamente, como el historial de pedidos." }
          },
          {
            "@type": "Question",
            "name": "¿Se mantiene el SEO al migrar de Jumpseller a Shopify?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sí. Mapeamos todas las URLs de Jumpseller y configuramos redirecciones 301 en Shopify antes del lanzamiento. También migramos los meta títulos y descripciones para preservar el posicionamiento en Google." }
          }
        ]
      }
    ]
  };

  const limitaciones = [
    { icon: "🌍", title: "Apps limitadas al mercado local", desc: "Jumpseller tiene un ecosistema de integraciones más pequeño. Shopify accede a más de 8.000 apps globales y locales." },
    { icon: "🎨", title: "Personalización de diseño restringida", desc: "Los temas de Jumpseller son más rígidos. Shopify permite personalización total con Liquid y el editor visual más potente del mercado." },
    { icon: "📈", title: "Escalabilidad con techo", desc: "Jumpseller es ideal para empezar, pero su infraestructura tiene límites cuando el negocio crece en volumen y complejidad." },
    { icon: "🔗", title: "Integraciones internacionales", desc: "Conectar herramientas globales como Klaviyo, Gorgias, Yotpo o Recharge es complejo en Jumpseller. En Shopify, son un clic." },
  ];

  const comparativa = [
    { feature: "Apps disponibles", jumpseller: "~200", shopify: "+8.000" },
    { feature: "Uptime garantizado", jumpseller: "99.5%", shopify: "99.99%" },
    { feature: "Checkout personalizable", jumpseller: "Limitado", shopify: "Total (Shopify Plus)" },
    { feature: "Soporte en español", jumpseller: "✓", shopify: "✓" },
    { feature: "Pasarelas CL (Flow, Transbank)", jumpseller: "✓", shopify: "✓" },
    { feature: "Facturación SII (Bsale, Obuma)", jumpseller: "Básico", shopify: "Completo" },
    { feature: "Headless / Next.js", jumpseller: "✗", shopify: "✓" },
    { feature: "Markets (multimoneda)", jumpseller: "✗", shopify: "✓" },
  ];

  const whatMigramos = [
    { label: "Catálogo completo", detail: "Productos, variantes, precios y stock." },
    { label: "Imágenes de productos", detail: "Trasladadas a CDN de Shopify." },
    { label: "Colecciones y categorías", detail: "Estructura de navegación preservada." },
    { label: "Clientes registrados", detail: "Emails, nombres y direcciones." },
    { label: "Historial de pedidos", detail: "Órdenes anteriores para trazabilidad." },
    { label: "Metadatos SEO", detail: "Titles, descriptions y slugs." },
    { label: "Redirecciones 301", detail: "Todas las URLs antiguas redirigidas." },
    { label: "Páginas de contenido", detail: "Políticas, FAQ e institucionales." },
  ];

  const faqs = [
    {
      question: "¿Por qué migrar de Jumpseller a Shopify?",
      answer: "Jumpseller es una excelente plataforma para empezar, pero cuando tu negocio crece necesitas más: más apps de marketing, checkout más personalizable, integraciones globales y capacidad de escalar sin límites técnicos. Shopify te da todo eso y más."
    },
    {
      question: "¿Puedo exportar mis datos desde Jumpseller?",
      answer: "Sí. Jumpseller permite exportar el catálogo en CSV. Nosotros procesamos ese archivo, lo transformamos al formato de importación de Shopify y complementamos con la API de Jumpseller para los datos que no se exportan nativamente, como el historial completo de pedidos."
    },
    {
      question: "¿Se mantiene el SEO al migrar de Jumpseller a Shopify?",
      answer: "Sí. Antes del lanzamiento mapeamos todas tus URLs actuales de Jumpseller y configuramos redirecciones 301 en Shopify. También migramos los meta títulos y descripciones de productos y colecciones. Los primeros 2-4 semanas puede haber fluctuaciones menores en el ranking, que se normalizan cuando Google procesa las redirecciones."
    },
    {
      question: "¿Las pasarelas de pago chilenas funcionan igual en Shopify?",
      answer: "Sí y mejor. Shopify tiene integraciones directas con Flow, Mercado Pago y Transbank Webpay. Adicionalmente, puedes agregar Ventipay (cuotas sin tarjeta) y otras pasarelas chilenas que Jumpseller no soporta."
    },
    {
      question: "¿Cuánto tiempo toma la migración de Jumpseller a Shopify?",
      answer: "Para una tienda de hasta 500 productos y 1.500 clientes, el proceso toma entre 1 y 3 semanas. Incluye la configuración del nuevo theme Shopify, migración de datos, testing y configuración de redirecciones."
    },
    {
      question: "¿Qué pasa con mi dominio .cl durante la migración?",
      answer: "Tu dominio no cambia. El cambio de DNS hacia Shopify toma entre 10 minutos y 48 horas en propagarse. Durante ese tiempo, ambas plataformas pueden recibir tráfico. Una vez confirmado el traspaso, tu tienda Jumpseller deja de mostrar productos."
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
            <li className="text-emerald-500">Desde Jumpseller</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="relative pb-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 blur-[130px] rounded-full pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-emerald-50 border border-emerald-200 rounded-full">
                <span className="text-[10px] font-black tracking-[0.2em] text-emerald-600 uppercase">🦘 Migración Jumpseller → Shopify</span>
              </div>

              <h1 className="text-[2.4rem] lg:text-[68px] font-black tracking-tighter leading-[0.9] mb-8 uppercase text-zinc-950">
                De Jumpseller{' '}
                <span className="text-emerald-500 italic font-serif lowercase font-light">a Shopify</span>
                {' '}sin perder nada
              </h1>

              <p className="text-lg text-zinc-500 mb-8 leading-relaxed font-light max-w-lg">
                Jumpseller te acompañó en el inicio. Ahora tu negocio necesita más. Migramos tu tienda completa a Shopify <strong className="text-zinc-900">preservando cada dato, cada cliente y cada posición SEO</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <LeadButton className="px-8 py-4 bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95">
                  Cotizar Migración Gratis
                </LeadButton>
                <WhatsAppButton className="px-8 py-4 bg-zinc-900 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-900/20 active:scale-95">
                  Hablar con un Experto
                </WhatsAppButton>
              </div>
            </div>

            {/* Migration visual */}
            <div className="hidden lg:flex items-center justify-center gap-8">
              <div className="p-8 bg-zinc-100 rounded-[3rem] text-center border border-zinc-200">
                <div className="text-6xl mb-4">🦘</div>
                <div className="text-xl font-black tracking-tight text-zinc-500 uppercase">Jumpseller</div>
                <div className="text-xs text-zinc-400 mt-1 font-medium">Plataforma actual</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-violet-500" />
                <div className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-violet-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">API</div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-violet-500 to-emerald-400" />
              </div>
              <div className="p-8 bg-violet-950 rounded-[3rem] text-center border border-violet-700 shadow-2xl shadow-violet-500/20">
                <div className="text-6xl mb-4">🛍️</div>
                <div className="text-xl font-black tracking-tight text-white uppercase">Shopify</div>
                <div className="text-xs text-violet-400 mt-1 font-medium">Nueva plataforma</div>
              </div>
            </div>
          </div>
        </section>

        {/* Limitaciones de Jumpseller */}
        <section className="bg-zinc-950 py-28 rounded-[4rem] mx-4 text-white overflow-hidden relative mb-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.1),transparent)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
                Por qué <span className="text-emerald-400">Jumpseller ya no es suficiente</span>
              </h2>
              <p className="text-zinc-400 font-light max-w-xl mx-auto">Tu negocio creció. Tu plataforma también debe hacerlo.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {limitaciones.map((l) => (
                <div key={l.title} className="flex gap-5 items-start p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/8 transition-all">
                  <div className="text-4xl shrink-0">{l.icon}</div>
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tight mb-2">{l.title}</h3>
                    <p className="text-zinc-400 font-light text-sm leading-relaxed">{l.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparativa */}
        <section className="max-w-7xl mx-auto px-6 pb-28">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
              Jumpseller <span className="text-zinc-300">vs</span>{' '}
              <span className="text-violet-600 italic font-serif lowercase font-light">Shopify</span>
            </h2>
            <p className="text-zinc-500 font-light max-w-lg mx-auto">Una comparación honesta para que tomes la mejor decisión.</p>
          </div>

          <div className="bg-white border border-zinc-100 rounded-[3rem] overflow-hidden shadow-xl">
            <div className="grid grid-cols-3 bg-zinc-950 text-white px-10 py-6">
              <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Característica</div>
              <div className="text-center text-sm font-black uppercase">Jumpseller</div>
              <div className="text-center text-sm font-black uppercase text-violet-400">Shopify</div>
            </div>
            {comparativa.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 px-10 py-5 border-b border-zinc-50 ${i % 2 === 0 ? 'bg-white' : 'bg-zinc-50/50'}`}>
                <div className="text-sm font-bold text-zinc-700">{row.feature}</div>
                <div className="text-center text-sm text-zinc-500 font-medium">{row.jumpseller}</div>
                <div className="text-center text-sm font-bold text-violet-600">{row.shopify}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Qué migramos */}
        <section className="bg-zinc-50 py-24 mb-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
                Todo lo que <span className="text-emerald-500 italic font-serif lowercase font-light">migramos</span>
              </h2>
              <p className="text-zinc-500 font-light max-w-xl mx-auto">Exportamos desde Jumpseller y re-importamos en Shopify con verificación manual.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {whatMigramos.map((w) => (
                <div key={w.label} className="p-6 bg-white border border-zinc-100 rounded-3xl hover:border-emerald-200 hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[11px] font-black mb-4">✓</div>
                  <h3 className="font-black text-zinc-900 uppercase text-sm tracking-tight mb-1">{w.label}</h3>
                  <p className="text-zinc-500 text-xs font-light">{w.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <div className="pb-24">
          <FAQSection
            faqs={faqs}
            title="Preguntas sobre Migración Jumpseller a Shopify"
            description="Resolvemos todas tus dudas antes de iniciar la migración."
          />
        </div>

        {/* CTA Final */}
        <section className="max-w-4xl mx-auto px-6 text-center pb-32">
          <div className="p-12 lg:p-24 bg-zinc-950 rounded-[5rem] text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent)]" />
            <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">
              El salto que{' '}
              <br />
              <span className="text-emerald-400 italic font-serif lowercase font-light">tu marca merece</span>
            </h2>
            <p className="text-zinc-400 mb-12 text-xl font-light max-w-lg mx-auto">
              Evaluamos tu tienda Jumpseller sin costo y te entregamos un plan de migración detallado con plazos y precios reales.
            </p>
            <LeadButton className="px-12 py-6 bg-white text-zinc-950 font-black uppercase tracking-widest text-[11px] rounded-[2rem] hover:scale-105 active:scale-95 transition-all">
              Agendar Evaluación Gratuita
            </LeadButton>
          </div>
        </section>

        {/* Otras migraciones */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 text-center">¿Tienes otra plataforma?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/migrar-de-magento-a-shopify" className="px-8 py-4 border border-zinc-200 rounded-full font-black text-sm uppercase tracking-widest hover:border-orange-400 hover:text-orange-500 transition-all">
              🧱 Migrar desde Magento
            </Link>
            <Link href="/migrar-de-woocommerce-a-shopify" className="px-8 py-4 border border-zinc-200 rounded-full font-black text-sm uppercase tracking-widest hover:border-violet-500 hover:text-violet-600 transition-all">
              🛒 Migrar desde WooCommerce
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
