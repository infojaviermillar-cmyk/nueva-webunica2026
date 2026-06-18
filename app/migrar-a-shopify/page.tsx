import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import FAQSection from '@/components/sections/faq-section';

export const metadata: Metadata = {
  title: 'Migrar a Shopify Chile 2026 | Desde Magento, WooCommerce y Jumpseller',
  description: 'Servicio profesional de migración a Shopify en Chile. Traspasamos tu tienda desde Magento, WooCommerce o Jumpseller sin perder datos, SEO ni tiempo de operación. ¡Cotiza gratis!',
  keywords: 'migrar a shopify chile, migracion shopify, cambiar a shopify, pasar a shopify desde magento woocommerce jumpseller, agencia migracion ecommerce chile',
  openGraph: {
    title: 'Migrar a Shopify Chile 2026 | Expertos en Migración Ecommerce',
    description: 'Traspasamos tu tienda online a Shopify desde cualquier plataforma. Catálogo, clientes, historial de pedidos y SEO preservados. Somos expertos en Chile.',
    url: 'https://webunica.cl/migrar-a-shopify',
    type: 'website',
    siteName: 'Webunica',
    images: [{ url: 'https://webunica.cl/og-migracion-shopify.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Migrar a Shopify Chile | Webunica',
    description: 'Migración profesional de Magento, WooCommerce y Jumpseller a Shopify. Sin pérdida de datos ni SEO.',
  },
  alternates: {
    canonical: 'https://webunica.cl/migrar-a-shopify',
  },
};

export default function MigrarAShopifyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://webunica.cl/migrar-a-shopify#service",
        "name": "Migración a Shopify Chile",
        "description": "Servicio integral de migración de tiendas online a Shopify desde Magento, WooCommerce y Jumpseller, preservando catálogo, clientes, pedidos y posicionamiento SEO.",
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
        "serviceType": "Ecommerce Migration",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de Migración a Shopify",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Migración Magento a Shopify" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Migración WooCommerce a Shopify" }},
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Migración Jumpseller a Shopify" }}
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://webunica.cl" },
          { "@type": "ListItem", "position": 2, "name": "Migrar a Shopify", "item": "https://webunica.cl/migrar-a-shopify" }
        ]
      }
    ]
  };

  const migrations = [
    {
      from: "Magento",
      icon: "🧱",
      slug: "/migrar-de-magento-a-shopify",
      color: "from-orange-500 to-red-500",
      bgLight: "bg-orange-50",
      borderColor: "border-orange-200",
      tagColor: "text-orange-600 bg-orange-50 border-orange-100",
      desc: "Escapa de la complejidad técnica y los altos costos de mantenimiento de Magento. Lleva tu catálogo, clientes e historial completo a Shopify vía API.",
      highlights: ["Migración vía API oficial", "Preservación de URLs y SEO", "Catálogo + Clientes + Pedidos", "Sin tiempo de inactividad"]
    },
    {
      from: "Jumpseller",
      icon: "🦘",
      slug: "/migrar-de-jumpseller-a-shopify",
      color: "from-emerald-500 to-teal-500",
      bgLight: "bg-emerald-50",
      borderColor: "border-emerald-200",
      tagColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
      desc: "Jumpseller te quedó pequeño. Da el salto a Shopify y accede al ecosistema de apps más robusto del ecommerce mundial, sin perder lo que ya construiste.",
      highlights: ["Exportación completa de datos", "Redirecciones 301 configuradas", "Historial de clientes migrado", "Apps y pasarelas chilenas"]
    },
    {
      from: "WooCommerce",
      icon: "🛒",
      slug: "/migrar-de-woocommerce-a-shopify",
      color: "from-violet-500 to-purple-500",
      bgLight: "bg-violet-50",
      borderColor: "border-violet-200",
      tagColor: "text-violet-600 bg-violet-50 border-violet-100",
      desc: "Deja atrás los plugins desactualizados, la lentitud de WordPress y la carga de mantenimiento técnico. Shopify lo gestiona todo por ti.",
      highlights: ["Migración de productos y variantes", "Traslado de clientes y contraseñas", "Mantenimiento del posicionamiento", "Sin hosting que administrar"]
    }
  ];

  const faqs = [
    {
      question: "¿Se pierden datos al migrar a Shopify?",
      answer: "No. Nuestro proceso de migración usa la API oficial de Shopify y herramientas especializadas para traspasar el 100% de tu catálogo de productos (con variantes, imágenes y metadatos), base de clientes e historial de pedidos. Antes de activar la nueva tienda, validamos cada registro."
    },
    {
      question: "¿Cuánto tiempo toma una migración a Shopify?",
      answer: "Depende del volumen de datos. Una tienda con hasta 500 productos y 2.000 clientes puede migrarse en 5 a 10 días hábiles. Para catálogos mayores a 5.000 SKUs o con integraciones ERP complejas, el proceso puede tomar 3 a 6 semanas."
    },
    {
      question: "¿Qué pasa con el SEO durante la migración?",
      answer: "Es nuestra prioridad. Mapeamos todas las URLs actuales y configuramos redirecciones 301 a las nuevas URLs de Shopify antes del lanzamiento. También migramos las meta titles, descriptions y el texto de los productos para preservar el posicionamiento en Google."
    },
    {
      question: "¿Puedo seguir vendiendo mientras se hace la migración?",
      answer: "Sí. El proceso de migración ocurre en un ambiente de staging (tienda de prueba) y tu tienda actual sigue funcionando. El cambio se activa en un solo momento (cutover), minimizando la interrupción del negocio a minutos."
    },
    {
      question: "¿Qué plataformas pueden migrar a Shopify?",
      answer: "Migramos desde Magento (Adobe Commerce), WooCommerce, Jumpseller, Prestashop, Tiendanube, VTEX, Wix Stores y cualquier plataforma que tenga una API o permita exportar datos en CSV/XML."
    },
    {
      question: "¿Cuánto cuesta migrar a Shopify?",
      answer: "El costo depende del volumen de datos, las integraciones requeridas (ERP, logística, pasarelas) y el diseño del nuevo theme. Contáctanos para recibir una cotización personalizada sin compromiso."
    }
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
          <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-violet-600/5 blur-[150px] rounded-full pointer-events-none -z-10 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/4 blur-[120px] rounded-full pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-amber-50 border border-amber-200 rounded-full">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-[10px] font-black tracking-[0.2em] text-amber-600 uppercase">Especialistas en Migración Ecommerce Chile</span>
            </div>

            <h1 className="text-[2.4rem] lg:text-[80px] font-black tracking-tighter leading-[0.9] mb-8 uppercase text-zinc-950">
              Migra tu Tienda{' '}
              <span className="text-violet-600 italic font-serif lowercase font-light">a Shopify</span>
            </h1>

            <p className="text-xl text-zinc-500 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              Traspasamos tu ecommerce completo a Shopify <strong className="text-zinc-900">sin perder datos, sin perder SEO y sin detener tus ventas</strong>. Trabajamos con la API oficial para garantizar una migración sin errores.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LeadButton className="px-10 py-5 bg-violet-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/20 active:scale-95">
                Cotizar Migración Gratis
              </LeadButton>
              <WhatsAppButton className="px-10 py-5 bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95">
                Hablar con un Experto
              </WhatsAppButton>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-8 mt-16">
              {[
                { label: "Proyectos Migrados", value: "+80" },
                { label: "Datos Preservados", value: "100%" },
                { label: "SEO Protegido", value: "✓" },
                { label: "Sin Downtime", value: "✓" },
              ].map((b) => (
                <div key={b.label} className="text-center">
                  <div className="text-3xl font-black text-zinc-950 tracking-tighter">{b.value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-1">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migración cards */}
        <section className="max-w-7xl mx-auto px-6 pb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
              ¿Desde dónde <span className="text-violet-600 italic font-serif lowercase font-light">migras?</span>
            </h2>
            <p className="text-zinc-500 font-light max-w-xl mx-auto">Selecciona tu plataforma actual y descubre el proceso de migración específico para tu caso.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {migrations.map((m) => (
              <Link
                key={m.from}
                href={m.slug}
                className="group flex flex-col bg-white rounded-[3rem] border border-zinc-100 hover:border-zinc-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className={`h-3 bg-gradient-to-r ${m.color}`} />
                <div className="p-10 flex flex-col flex-grow">
                  <div className="text-5xl mb-6">{m.icon}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2">Desde</div>
                  <h3 className="text-4xl font-black tracking-tighter uppercase mb-4 text-zinc-950">{m.from}</h3>
                  <p className="text-zinc-500 font-light leading-relaxed mb-8 flex-grow">{m.desc}</p>

                  <ul className="space-y-2 mb-10">
                    {m.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm font-medium text-zinc-700">
                        <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center text-white text-[8px] font-black shrink-0">✓</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-6 border-t border-zinc-100">
                    <span className="text-[11px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-zinc-900 transition-colors">Ver proceso completo</span>
                    <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-all transform group-hover:translate-x-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Proceso general */}
        <section className="bg-zinc-950 py-32 rounded-[4rem] mx-4 text-white overflow-hidden relative mb-16">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
                Nuestro Proceso de <span className="text-violet-400 italic font-serif lowercase font-light">Migración</span>
              </h2>
              <p className="text-zinc-400 font-light max-w-xl mx-auto">Un proceso estructurado que garantiza cero pérdida de datos.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Auditoría", desc: "Analizamos tu plataforma actual: volumen de datos, integraciones activas y estructura SEO existente." },
                { step: "02", title: "Mapeo", desc: "Trazamos la correspondencia entre URLs, categorías, variantes y campos personalizados hacia Shopify." },
                { step: "03", title: "Migración", desc: "Traspaso de datos vía API en ambiente staging. Validamos cada producto, cliente y pedido." },
                { step: "04", title: "Lanzamiento", desc: "Activamos redirecciones 301, apuntamos el dominio y lanzamos. Tu tienda anterior sigue activa hasta confirmar." },
              ].map((s) => (
                <div key={s.step} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/8 transition-all">
                  <div className="text-5xl font-black text-violet-400/30 mb-4 tracking-tighter">{s.step}</div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-3">{s.title}</h3>
                  <p className="text-zinc-500 font-light text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <div className="pb-24 bg-white">
          <FAQSection
            faqs={faqs}
            title="Preguntas sobre Migración a Shopify"
            description="Todo lo que necesitas saber antes de dar el paso a Shopify."
          />
        </div>

        {/* CTA Final */}
        <section className="max-w-4xl mx-auto px-6 text-center pb-32">
          <div className="p-12 lg:p-24 bg-zinc-950 rounded-[5rem] text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.2),transparent)]" />
            <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">
              Listo para cambiar <br />
              <span className="text-violet-400 italic font-serif lowercase font-light">de plataforma</span>
            </h2>
            <p className="text-zinc-400 mb-12 text-xl font-light max-w-lg mx-auto">
              Agenda una evaluación gratuita y te decimos exactamente cómo sería tu migración, en cuánto tiempo y a qué costo.
            </p>
            <LeadButton className="px-12 py-6 bg-white text-zinc-950 font-black uppercase tracking-widest text-[11px] rounded-[2rem] hover:scale-105 active:scale-95 transition-all">
              Agendar Evaluación Gratuita
            </LeadButton>
          </div>
        </section>

      </div>
    </div>
  );
}
