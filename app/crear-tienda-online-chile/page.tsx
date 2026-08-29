import { Metadata } from 'next';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Crear Tienda Online en Chile | Webunica — Agencia Especializada en E-commerce',
  description:
    'Creamos tiendas online profesionales para negocios en Chile. Diseño a medida, Shopify o desarrollo personalizado, medios de pago chilenos (Webpay, Mercado Pago), despacho y capacitación. Solicita evaluación sin compromiso.',
  alternates: {
    canonical: 'https://webunica.cl/crear-tienda-online-chile',
  },
  openGraph: {
    title: 'Crear Tienda Online en Chile | Webunica — Agencia Especializada en E-commerce',
    description:
      'Diseñamos y desarrollamos tiendas online para negocios chilenos. Shopify, WooCommerce o desarrollo personalizado con medios de pago, despacho y capacitación incluidos.',
    url: 'https://webunica.cl/crear-tienda-online-chile',
    siteName: 'Webunica',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://webunica.cl/crear-tienda-online-chile/#webpage',
      url: 'https://webunica.cl/crear-tienda-online-chile/',
      name: 'Crear Tienda Online en Chile | Webunica',
      description:
        'Creamos tiendas online profesionales para negocios en Chile. Diseño, Shopify o desarrollo personalizado, medios de pago chilenos, despacho y capacitación.',
      inLanguage: 'es-CL',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://webunica.cl/#website',
        url: 'https://webunica.cl/',
        name: 'Webunica',
      },
      breadcrumb: {
        '@id': 'https://webunica.cl/crear-tienda-online-chile/#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://webunica.cl/crear-tienda-online-chile/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: 'https://webunica.cl/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Crear Tienda Online Chile',
          item: 'https://webunica.cl/crear-tienda-online-chile/',
        },
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://webunica.cl/#organization',
      name: 'Webunica',
      url: 'https://webunica.cl/',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        areaServed: 'CL',
        availableLanguage: 'Spanish',
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://webunica.cl/crear-tienda-online-chile/#service',
      name: 'Creación de Tiendas Online en Chile',
      serviceType: 'Diseño y Desarrollo de E-commerce',
      provider: {
        '@type': 'Organization',
        '@id': 'https://webunica.cl/#organization',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Chile',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Planes de Tienda Online',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Tienda Online Shopify',
              description:
                'Diseño a medida, configuración Shopify, medios de pago chilenos, despacho y capacitación.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Tienda Online WooCommerce',
              description:
                'Tienda online sobre WordPress con diseño personalizado e integración de pagos en Chile.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Desarrollo E-commerce Personalizado',
              description:
                'Desarrollo a medida con Next.js para negocios con integraciones ERP o flujos específicos.',
            },
          },
        ],
      },
      description:
        'Diseño, desarrollo y configuración profesional de tiendas online para pymes y empresas en Chile. Incluye pasarelas de pago nacionales, logística, SEO y capacitación.',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://webunica.cl/crear-tienda-online-chile/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta crear una tienda online en Chile con Webunica?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El precio depende del alcance del proyecto: número de productos, tipo de diseño, plataforma e integraciones. Evaluamos tu catálogo y entregamos una cotización transparente en 24 horas hábiles.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto tiempo tarda el proyecto?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un proyecto estándar con diseño a medida, catálogo de hasta 200 productos, medios de pago y despacho tarda entre 3 y 6 semanas desde el inicio formal.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Quién administra la tienda después del lanzamiento?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El cliente. Al finalizar el proyecto tienes acceso completo de administrador y capacitación para manejarlo sin depender de Webunica.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Trabajan con negocios fuera de Santiago?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Trabajamos remotamente con clientes de todo Chile. Las reuniones de levantamiento, diseño y capacitación se realizan por videollamada.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué pasa si no quedo conforme con el diseño?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El diseño se presenta en Figma antes de programar. Incluimos rondas de feedback para que el cliente ajuste y apruebe cada pantalla antes de pasar al desarrollo.',
          },
        },
      ],
    },
  ],
};

export default function Page() {
  const inclusions = [
    {
      title: 'Diseño UX/UI orientado a conversión',
      desc: 'Diseñamos en Figma cada pantalla (Home, Catálogo, Ficha de Producto y Checkout) pensando en maximizar la compra y la velocidad en smartphones.',
    },
    {
      title: 'Medios de pago chilenos listos',
      desc: 'Configuración y pruebas de Webpay Plus (Transbank), Mercado Pago o Flow. Compatible con cuotas, tarjetas de crédito y débito Redcompra.',
    },
    {
      title: 'Despacho nacional configurado',
      desc: 'Integración de zonas de envío y tarifas para couriers en Chile (Starken, Chilexpress, Blue Express, Shipit) y opción Click & Collect.',
    },
    {
      title: 'Carga inicial de catálogo',
      desc: 'Importación estructurada de tus productos con fotografías, descripciones, precios, SKUs, variantes de talla/color y control de stock.',
    },
    {
      title: 'Capacitación y autonomía total',
      desc: 'Sesión grabada 1 a 1 para que tu equipo aprenda a gestionar pedidos, cambiar precios, agregar promociones y editar banners sin programar.',
    },
    {
      title: 'Analítica y SEO desde el día 1',
      desc: 'Configuración de Google Analytics 4 (eventos de e-commerce), Google Search Console y Meta Pixel para medir visitas y conversiones.',
    },
  ];

  const platforms = [
    {
      name: 'Shopify',
      badge: 'Shopify Partner Oficial',
      popular: true,
      ideal: 'Negocios que buscan rapidez, máxima estabilidad en servidores y facilidad de administración sin requerir mantenimiento técnico de código.',
      points: [
        'Panel intuitivo en español',
        'Hosting cloud ultrarrápido incluido',
        'Seguridad SSL y pasarelas oficiales',
        'App móvil para gestionar pedidos en vivo',
      ],
    },
    {
      name: 'WooCommerce / WordPress',
      badge: 'Control y flexibilidad',
      popular: false,
      ideal: 'Empresas que ya cuentan con WordPress, requieren personalizaciones de código libre o prefieren no pagar costos mensuales de plataforma.',
      points: [
        'Control total sobre el hosting y base de datos',
        'Plugins avanzados sin mensualidades forzosas',
        'Personalización extrema de reglas de negocio',
        'Excelente para catálogos con contenido editorial',
      ],
    },
    {
      name: 'Desarrollo a Medida (Next.js)',
      badge: 'Alto rendimiento y ERP',
      popular: false,
      ideal: 'Grandes catálogos, sincronizaciones complejas con sistemas ERP propietarios o flujos de compra únicos que superan las plataformas estándar.',
      points: [
        'Rendimiento y velocidad Core Web Vitals insuperable',
        'Integración API directa con ERPs y bodegas',
        'Experiencia de compra 100% personalizada',
        'Arquitectura moderna y escalable',
      ],
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Reunión de Levantamiento',
      desc: 'Analizamos tu modelo de negocio, catálogo de productos, público objetivo, medios de pago y logística requerida para definir el alcance exacto.',
    },
    {
      step: '02',
      title: 'Diseño UX/UI en Figma',
      desc: 'Creamos las maquetas visuales de tu tienda (versión móvil y escritorio). Revisas, ajustas y apruebas el diseño antes de escribir una sola línea de código.',
    },
    {
      step: '03',
      title: 'Desarrollo y Conexiones',
      desc: 'Implementamos la tienda en la plataforma elegida, configuramos Webpay, Mercado Pago, tarifas de despacho y emisión de boleta electrónica si aplica.',
    },
    {
      step: '04',
      title: 'Carga de Catálogo y QA',
      desc: 'Cargamos tus productos, validamos precios y realizamos compras de prueba reales de extremo a extremo para asegurar que todo fluya sin errores.',
    },
    {
      step: '05',
      title: 'Go Live y Capacitación',
      desc: 'Conectamos tu dominio .cl, retiramos contraseñas de staging y realizamos la capacitación para que tomes el control total de tu tienda.',
    },
  ];

  const faqs = [
    {
      q: '¿Cuánto cuesta crear una tienda online en Chile con Webunica?',
      a: 'El valor depende de factores como la cantidad de SKUs a cargar, el nivel de personalización del diseño y si requieres integraciones adicionales (como ERP o DTE). Tras conversar sobre tu proyecto, te entregamos una propuesta con alcance y precio cerrado.',
    },
    {
      q: '¿Cuánto tiempo tarda el proyecto de principio a fin?',
      a: 'Un proyecto promedio toma entre 3 y 6 semanas. Si tienes tu catálogo con fotos y precios listo desde el inicio, el proceso avanza con máxima fluidez.',
    },
    {
      q: '¿Quién es dueño de la tienda cuando terminan el desarrollo?',
      a: 'Tú eres el dueño absoluto. Te transferimos la propiedad completa de la cuenta y los accesos. No cobramos comisiones sobre tus ventas ni te amarramos a contratos forzosos.',
    },
    {
      q: '¿Trabajan con empresas y pymes de regiones?',
      a: 'Sí, trabajamos con marcas en todo Chile (Arica, Antofagasta, Viña del Mar, Concepción, Puerto Montt, etc.). Todas las reuniones y capacitaciones se realizan vía Google Meet con seguimiento continuo.',
    },
    {
      q: '¿Qué pasa si necesito soporte después de lanzar?',
      a: 'Tu proyecto incluye garantía post-lanzamiento para resolver cualquier eventualidad. Si lo deseas, también ofrecemos planes de acompañamiento mensual para optimización continua y campañas.',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 pt-[22vh] lg:pt-48 pb-24 font-sans text-zinc-100 selection:bg-blue-600 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero BOFU */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest rounded-full">
            Servicio Especializado E-commerce
          </span>
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
            Chile 2026
          </span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05] mb-8">
          Creamos tu tienda online en Chile:{' '}
          <span className="text-blue-500 italic font-serif lowercase font-light">
            diseño, tecnología y ventas
          </span>{' '}
          desde el primer día
        </h1>

        <p className="text-lg lg:text-xl text-zinc-400 font-light leading-relaxed mb-8">
          Transformamos tu catálogo en un canal de venta digital profesional y automatizado.
          Diseño en Figma, configuración de pasarelas chilenas (Webpay, Mercado Pago), couriers,
          facturación y capacitación para que operes con total independencia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <LeadButton
            service="crear-tienda-online-chile"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-700 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)] text-center"
          >
            Solicitar evaluación gratuita
          </LeadButton>
          <a
            href="https://wa.me/56900000000?text=Hola%20Webunica,%20me%20gustar%C3%ADa%20cotizar%20la%20creaci%C3%B3n%20de%20una%20tienda%20online"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 rounded-xl font-bold uppercase tracking-wider text-xs transition-all text-center flex items-center justify-center gap-2"
          >
            <span>💬</span> Hablar por WhatsApp
          </a>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Lo que incluye cada proyecto de tienda online en Webunica
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inclusions.map((item, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
              <h3 className="text-blue-400 font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Plataformas */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-4">
          ¿En qué plataforma construimos tu tienda?
        </h2>
        <p className="text-zinc-400 font-light text-base mb-8">
          No imponemos una sola tecnología. Te recomendamos la opción que mejor se ajusta a tu tipo
          de producto, tamaño de inventario y presupuesto operativo.
        </p>

        <div className="space-y-6">
          {platforms.map((p, idx) => (
            <div
              key={idx}
              className={`p-6 lg:p-8 rounded-2xl border ${
                p.popular
                  ? 'bg-zinc-900 border-blue-500/40 relative'
                  : 'bg-zinc-900/60 border-zinc-800'
              }`}
            >
              {p.popular && (
                <span className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                  Más elegida
                </span>
              )}
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h3 className="text-2xl font-black text-white">{p.name}</h3>
                <span className="text-xs text-blue-400 font-medium px-2.5 py-0.5 bg-blue-500/10 rounded border border-blue-500/20">
                  {p.badge}
                </span>
              </div>
              <p className="text-zinc-400 font-light text-sm mb-4 leading-relaxed">{p.ideal}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-300 text-xs font-light">
                {p.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-2">
                    <span className="text-blue-500 font-bold">✓</span> {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Proceso en 5 Pasos */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Nuestro proceso de trabajo: de cero a lanzamiento
        </h2>

        <div className="space-y-6">
          {processSteps.map((s, idx) => (
            <div
              key={idx}
              className="flex gap-6 items-start bg-zinc-900 border border-zinc-800 p-6 rounded-2xl"
            >
              <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center font-black text-lg shrink-0">
                {s.step}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Intermedio */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />
          <h2 className="text-2xl lg:text-4xl font-black text-white uppercase tracking-tight mb-4">
            ¿Listo para conocer el costo de tu proyecto?
          </h2>
          <p className="text-zinc-400 font-light text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Completa la solicitud con los detalles de tus productos. Te responderemos con una
            propuesta y estimación en menos de 24 horas hábiles.
          </p>
          <LeadButton
            service="crear-tienda-online-chile"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-700 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)]"
          >
            Solicitar cotización
          </LeadButton>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Preguntas frecuentes sobre crear tu tienda online con Webunica
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
              <h3 className="text-white font-bold text-lg mb-2">{faq.q}</h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enlaces de Clúster */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">
          Aprende más en nuestras guías especializadas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/como-vender-por-internet"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Para principiantes</p>
            <p className="text-white text-sm font-semibold">¿Cómo vender por internet en Chile?</p>
          </Link>
          <Link
            href="/como-crear-una-tienda-online"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Guía técnica</p>
            <p className="text-white text-sm font-semibold">Pasos para crear una tienda online</p>
          </Link>
          <Link
            href="/vender-online-con-tienda-fisica"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Negocios con local</p>
            <p className="text-white text-sm font-semibold">Vender online con tienda física</p>
          </Link>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 rounded-3xl p-10 lg:p-14 text-center text-white shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
          <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight mb-4">
            Hablemos de tu proyecto
          </h2>
          <p className="text-blue-100 font-light text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Sin rodeos y con transparencia. Cuéntanos qué productos vendes y te mostramos cómo
            llevarlos a una tienda online de alto impacto en Chile.
          </p>
          <LeadButton
            service="crear-tienda-online-chile"
            className="px-10 py-5 bg-white text-blue-700 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-zinc-100 transition-all shadow-xl"
          >
            Solicitar evaluación gratuita
          </LeadButton>
        </div>
      </section>
    </div>
  );
}
