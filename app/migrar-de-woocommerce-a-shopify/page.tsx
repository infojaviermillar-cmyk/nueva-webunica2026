import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import FAQSection from '@/components/sections/faq-section';

export const metadata: Metadata = {
  title: 'Migrar de WooCommerce a Shopify Chile 2026 | Sin perder productos ni SEO',
  description: 'Servicio experto de migración de WooCommerce a Shopify en Chile. Traspasamos productos, variantes, clientes, pedidos y configuraciones SEO. Olvídate del mantenimiento técnico. ¡Cotiza gratis!',
  keywords: 'migrar woocommerce a shopify, migracion woocommerce shopify chile, pasar de woocommerce a shopify, cambiar wordpress shopify, agencia migracion ecommerce chile 2026',
  openGraph: {
    title: 'Migrar de WooCommerce a Shopify Chile | Expertos Webunica',
    description: 'Migración completa de WooCommerce a Shopify. Preservamos tu catálogo, clientes, historial de pedidos y SEO. Adiós a plugins, hosting y actualizaciones.',
    url: 'https://webunica.cl/migrar-de-woocommerce-a-shopify',
    type: 'website',
    siteName: 'Webunica',
    images: [{ url: 'https://webunica.cl/og-woocommerce-shopify.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Migrar WooCommerce a Shopify Chile | Webunica',
    description: 'Migración profesional de WooCommerce a Shopify. Sin pérdida de datos ni SEO. Cotiza gratis.',
  },
  alternates: {
    canonical: 'https://webunica.cl/migrar-de-woocommerce-a-shopify',
  },
};

export default function MigrarWooCommerceShopifyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://webunica.cl/migrar-de-woocommerce-a-shopify#service",
        "name": "Migración de WooCommerce a Shopify en Chile",
        "description": "Servicio profesional de migración de tiendas WooCommerce/WordPress a Shopify, incluyendo traspaso de productos, variantes, clientes, historial de pedidos y configuración SEO.",
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
          { "@type": "ListItem", "position": 3, "name": "Migrar de WooCommerce a Shopify", "item": "https://webunica.cl/migrar-de-woocommerce-a-shopify" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Se pierden las reseñas de WooCommerce al migrar a Shopify?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. Exportamos las reseñas de WooCommerce y las importamos usando apps como Loox o Judge.me, que tienen importadores CSV compatibles. Las reseñas se asignan correctamente a cada producto en Shopify." }
          },
          {
            "@type": "Question",
            "name": "¿Puedo mantener el mismo dominio al migrar de WooCommerce a Shopify?",
            "acceptedAnswer": { "@type": "Answer", "text": "Sí. Tu dominio se mantiene exactamente igual. Solo cambiamos el servidor al que apunta (DNS), de tu hosting WordPress a los servidores de Shopify. El proceso de cambio toma entre 10 minutos y 24 horas en propagarse." }
          }
        ]
      }
    ]
  };

  const problemas = [
    { icon: "🛡️", title: "Seguridad comprometida", desc: "WordPress es el CMS más hackeado del mundo. Plugins desactualizados y vulnerabilidades constantes requieren atención permanente." },
    { icon: "⚡", title: "Velocidad impredecible", desc: "WooCommerce mal configurado genera tiempos de carga de 4-8 segundos. Shopify tiene CDN global incluido y velocidades garantizadas." },
    { icon: "🔌", title: "Plugins que se rompen", desc: "Cada actualización de WordPress o WooCommerce puede romper plugins de pago. Mantener la compatibilidad es un trabajo de tiempo completo." },
    { icon: "💰", title: "Hosting + SSL + backups", desc: "En Shopify, el hosting, SSL y backups están incluidos. En WooCommerce, son costos adicionales que se acumulan." },
  ];

  const whatMigramos = [
    { label: "Productos y variantes", detail: "SKUs, atributos, precios y stock." },
    { label: "Imágenes de productos", detail: "Galería completa al CDN de Shopify." },
    { label: "Categorías y tags", detail: "Estructura de colecciones en Shopify." },
    { label: "Clientes y contraseñas", detail: "Emails, nombres y direcciones de despacho." },
    { label: "Historial de pedidos", detail: "Todas las órdenes anteriores migradas." },
    { label: "Reseñas de productos", detail: "Con apps como Loox o Judge.me." },
    { label: "Cupones y descuentos", detail: "Códigos activos trasladados a Shopify." },
    { label: "Redirecciones 301", detail: "Cada URL de WordPress redirigida." },
    { label: "Metadatos SEO", detail: "Yoast / RankMath → Shopify SEO." },
    { label: "Páginas y posts blog", detail: "Contenido institucional y artículos." },
    { label: "Configuración de envíos", detail: "Zonas y tarifas replicadas en Shopify." },
    { label: "Impuestos y IVA", detail: "Configuración tributaria chilena." },
  ];

  const pasos = [
    {
      step: "01",
      title: "Auditoría WordPress",
      desc: "Analizamos tu instalación actual: versión de WooCommerce, plugins activos, volumen de datos, estructura SEO y configuraciones de pago."
    },
    {
      step: "02",
      title: "Exportación y mapeo",
      desc: "Exportamos todos los datos vía API de WooCommerce y CSV. Mapeamos categorías, atributos de variantes y campos personalizados al modelo de Shopify."
    },
    {
      step: "03",
      title: "Staging en Shopify",
      desc: "Construimos tu nueva tienda en un ambiente de prueba. Importamos todos los datos, configuramos el theme y conectamos las pasarelas de pago chilenas."
    },
    {
      step: "04",
      title: "Validación QA",
      desc: "Verificamos cada producto, cliente y pedido migrado. Probamos el checkout completo con pagos reales y revisamos móvil y escritorio."
    },
    {
      step: "05",
      title: "Redirecciones 301",
      desc: "Configuramos el archivo de redirecciones mapeando cada URL de WordPress/WooCommerce a su equivalente en Shopify. Cero 404."
    },
    {
      step: "06",
      title: "Lanzamiento",
      desc: "Cambiamos el DNS de tu dominio hacia Shopify. Tu tienda WordPress queda en modo mantenimiento y Shopify toma el control en minutos."
    },
  ];

  const faqs = [
    {
      question: "¿Por qué migrar de WooCommerce a Shopify?",
      answer: "WooCommerce requiere que tú gestiones el hosting, la seguridad, los backups, las actualizaciones de plugins y la compatibilidad entre versiones. Shopify se encarga de todo eso por ti, permitiéndote enfocarte en vender. Además, Shopify tiene mejor rendimiento en carga, checkout optimizado y un ecosistema de apps superior."
    },
    {
      question: "¿Se pueden migrar los productos variables de WooCommerce?",
      answer: "Sí. Los 'productos variables' de WooCommerce (con atributos como talla y color) se migran a 'productos con variantes' de Shopify. Mapeamos cada atributo y opción para que las combinaciones queden intactas. Para productos con más de 3 atributos (límite de Shopify), usamos Metafields o apps especializadas."
    },
    {
      question: "¿Se pierden las reseñas al migrar a Shopify?",
      answer: "No. Exportamos las reseñas de WooCommerce (nativas o de WP Product Review) y las importamos usando apps como Loox o Judge.me, que tienen importadores CSV compatibles. Las reseñas quedan correctamente asignadas a cada producto."
    },
    {
      question: "¿El SEO de mi sitio WordPress se mantiene?",
      answer: "Sí, con el trabajo correcto. Migramos todos los meta títulos, descripciones y slugs configurados en Yoast o RankMath directamente a Shopify. Además, configuramos redirecciones 301 para todas las URLs antiguas. El posicionamiento puede fluctuar levemente las primeras 2-4 semanas mientras Google procesa los cambios, pero se normaliza y en muchos casos mejora gracias a la mayor velocidad de Shopify."
    },
    {
      question: "¿Puedo mantener mi blog de WordPress?",
      answer: "Shopify tiene un sistema de blog integrado donde migramos todos tus artículos existentes. Si tu blog es muy extenso y estratégico para SEO, también existe la opción de mantener el blog en un subdominio de WordPress y conectarlo a tu tienda Shopify."
    },
    {
      question: "¿Qué pasa con Yoast SEO al migrar a Shopify?",
      answer: "Exportamos todos los metadatos configurados en Yoast SEO (títulos, descripciones, OG tags) y los importamos directamente en los campos SEO de Shopify para cada producto, colección y página. No se pierde nada del trabajo SEO previo."
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
            <li className="text-violet-600">Desde WooCommerce</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="relative pb-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-violet-500/5 blur-[130px] rounded-full pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-violet-50 border border-violet-200 rounded-full">
                <span className="text-[10px] font-black tracking-[0.2em] text-violet-600 uppercase">🛒 Migración WooCommerce → Shopify</span>
              </div>

              <h1 className="text-[2.4rem] lg:text-[68px] font-black tracking-tighter leading-[0.9] mb-8 uppercase text-zinc-950">
                De WooCommerce{' '}
                <span className="text-violet-600 italic font-serif lowercase font-light">a Shopify</span>
                {' '}sin perder nada
              </h1>

              <p className="text-lg text-zinc-500 mb-8 leading-relaxed font-light max-w-lg">
                Olvídate de plugins, hosting, backups y actualizaciones. Migramos tu tienda WooCommerce completa a Shopify <strong className="text-zinc-900">preservando productos, clientes, pedidos y posicionamiento SEO</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <LeadButton className="px-8 py-4 bg-violet-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/20 active:scale-95">
                  Cotizar Migración Gratis
                </LeadButton>
                <WhatsAppButton className="px-8 py-4 bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95">
                  Hablar con un Experto
                </WhatsAppButton>
              </div>

              {/* Mini stats */}
              <div className="flex gap-8 mt-10 pt-10 border-t border-zinc-100">
                <div>
                  <div className="text-2xl font-black text-zinc-950">+80</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Migraciones realizadas</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-zinc-950">0</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Pérdida de datos</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-zinc-950">301</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">SEO protegido</div>
                </div>
              </div>
            </div>

            {/* Migration visual */}
            <div className="hidden lg:flex items-center justify-center gap-8">
              <div className="p-8 bg-zinc-100 rounded-[3rem] text-center border border-zinc-200">
                <div className="text-6xl mb-4">🛒</div>
                <div className="text-xl font-black tracking-tight text-zinc-500 uppercase">WooCommerce</div>
                <div className="text-xs text-zinc-400 mt-1 font-medium">WordPress / Hosting</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-violet-500" />
                <div className="px-3 py-1 bg-gradient-to-r from-purple-500 to-violet-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">API</div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-violet-500 to-purple-400" />
              </div>
              <div className="p-8 bg-violet-950 rounded-[3rem] text-center border border-violet-700 shadow-2xl shadow-violet-500/20">
                <div className="text-6xl mb-4">🛍️</div>
                <div className="text-xl font-black tracking-tight text-white uppercase">Shopify</div>
                <div className="text-xs text-violet-400 mt-1 font-medium">SaaS / Todo incluido</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problemas de WooCommerce */}
        <section className="bg-zinc-950 py-28 rounded-[4rem] mx-4 text-white overflow-hidden relative mb-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.15),transparent)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
                El costo real de <span className="text-violet-400">WooCommerce</span>
              </h2>
              <p className="text-zinc-400 font-light max-w-xl mx-auto">Lo que parece gratis tiene un costo oculto altísimo en tiempo y riesgo.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problemas.map((p) => (
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

        {/* Proceso paso a paso */}
        <section className="max-w-7xl mx-auto px-6 pb-28">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
              Proceso de{' '}
              <span className="text-violet-600 italic font-serif lowercase font-light">migración</span>
            </h2>
            <p className="text-zinc-500 font-light max-w-xl mx-auto">6 pasos probados para migrar sin errores y sin detener tus ventas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pasos.map((p) => (
              <div key={p.step} className="p-8 bg-zinc-50 border border-zinc-100 rounded-[2.5rem] hover:border-violet-200 hover:bg-violet-50/20 transition-all group">
                <div className="text-5xl font-black text-violet-200 group-hover:text-violet-400 mb-4 tracking-tighter transition-colors">{p.step}</div>
                <h3 className="text-lg font-black uppercase tracking-tight mb-3 text-zinc-900">{p.title}</h3>
                <p className="text-zinc-500 font-light text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Qué migramos */}
        <section className="bg-zinc-50 py-24 mb-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
                Todo lo que{' '}
                <span className="text-violet-600 italic font-serif lowercase font-light">migramos</span>
              </h2>
              <p className="text-zinc-500 font-light max-w-xl mx-auto">Nada queda en WordPress. Todo llega a Shopify.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {whatMigramos.map((w) => (
                <div key={w.label} className="p-5 bg-white border border-zinc-100 rounded-3xl hover:border-violet-200 hover:shadow-md transition-all">
                  <div className="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center text-white text-[10px] font-black mb-3">✓</div>
                  <h3 className="font-black text-zinc-900 uppercase text-xs tracking-tight mb-1">{w.label}</h3>
                  <p className="text-zinc-500 text-xs font-light leading-snug">{w.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid CTA */}
        <section className="bg-violet-600/8 border-y border-violet-500/15 py-20 mb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">
              ¿Cuántos plugins tienes instalados? <span className="text-violet-600">Cada uno es un riesgo.</span>
            </h2>
            <p className="text-zinc-600 font-light mb-8 max-w-xl mx-auto">
              La media de una tienda WooCommerce tiene 18 plugins activos. Cada actualización puede romper cualquiera. Shopify elimina ese riesgo por completo.
            </p>
            <LeadButton className="px-10 py-5 bg-violet-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/20">
              Quiero Migrar a Shopify
            </LeadButton>
          </div>
        </section>

        {/* FAQ */}
        <div className="pb-24">
          <FAQSection
            faqs={faqs}
            title="Preguntas sobre Migración WooCommerce a Shopify"
            description="Todo lo que necesitas saber antes de migrar tu tienda WordPress a Shopify."
          />
        </div>

        {/* CTA Final */}
        <section className="max-w-4xl mx-auto px-6 text-center pb-32">
          <div className="p-12 lg:p-24 bg-zinc-950 rounded-[5rem] text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.2),transparent)]" />
            <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">
              Deja de mantener <br />
              <span className="text-violet-400 italic font-serif lowercase font-light">WordPress</span>
            </h2>
            <p className="text-zinc-400 mb-12 text-xl font-light max-w-lg mx-auto">
              Evaluamos tu tienda WooCommerce sin costo y te entregamos un plan de migración con plazos reales y precio fijo.
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
