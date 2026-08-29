import { Metadata } from 'next';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Agencia CRO en Chile: Optimización de Conversión y Ventas Web | Webunica',
  description:
    'Agencia especializada en CRO y optimización de tasa de conversión en Chile. Auditamos y rediseñamos tu web o e-commerce con datos para multiplicar tus ventas.',
  alternates: {
    canonical: 'https://webunica.cl/agencia-cro-optimizacion-conversion-chile',
  },
  openGraph: {
    title: 'Agencia CRO en Chile: Optimización de Conversión y Ventas Web',
    description:
      'Multiplica tus ventas y cotizaciones sin gastar más en publicidad. Auditoría CRO, mapas de calor, análisis de embudo y rediseño de alta conversión en Chile.',
    url: 'https://webunica.cl/agencia-cro-optimizacion-conversion-chile',
    siteName: 'Webunica',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://webunica.cl/agencia-cro-optimizacion-conversion-chile/#webpage',
      url: 'https://webunica.cl/agencia-cro-optimizacion-conversion-chile/',
      name: 'Agencia CRO en Chile: Optimización de Conversión y Ventas Web | Webunica',
      description:
        'Agencia especializada en CRO y optimización de tasa de conversión en Chile. Auditamos y rediseñamos tu web o e-commerce con datos para multiplicar tus ventas.',
      inLanguage: 'es-CL',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://webunica.cl/#website',
        url: 'https://webunica.cl/',
        name: 'Webunica',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://webunica.cl/#organization',
        },
      },
      breadcrumb: {
        '@id': 'https://webunica.cl/agencia-cro-optimizacion-conversion-chile/#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://webunica.cl/agencia-cro-optimizacion-conversion-chile/#breadcrumb',
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
          name: 'Mejorar Ventas Web',
          item: 'https://webunica.cl/como-mejorar-las-ventas-de-mi-pagina-web/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Agencia CRO Chile',
          item: 'https://webunica.cl/agencia-cro-optimizacion-conversion-chile/',
        },
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://webunica.cl/#organization',
      name: 'Webunica',
      url: 'https://webunica.cl/',
      logo: '[LOGO_WEBUNICA]',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        areaServed: 'CL',
        availableLanguage: 'Spanish',
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://webunica.cl/agencia-cro-optimizacion-conversion-chile/#service',
      name: 'Servicio de Optimización de Tasa de Conversión (CRO) en Chile',
      serviceType: 'Consultoría y Auditoría CRO',
      provider: {
        '@type': 'Organization',
        '@id': 'https://webunica.cl/#organization',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Chile',
      },
      description:
        'Consultoría, auditoría analítica y rediseño de conversión para tiendas online y sitios B2B en Chile, orientada a aumentar la tasa de conversión, reducir carritos abandonados y maximizar ventas.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios CRO y Conversión',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Auditoría Integral de Conversión (CRO Audit)',
              description: 'Diagnóstico de más de 60 puntos de fricción, análisis de mapas de calor y matriz ICE de priorización.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Optimización CRO para E-commerce',
              description: 'Rediseño de fichas de producto, checkout acelerado y recuperación de carritos abandonados.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Optimización de Landing Pages B2B',
              description: 'Diseño de páginas de aterrizaje de alta conversión para captación de prospectos y reducción de CPL.',
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://webunica.cl/agencia-cro-optimizacion-conversion-chile/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta contratar un servicio de consultoría y optimización CRO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El valor del servicio depende del tamaño y complejidad de la plataforma: número de plantillas a optimizar, volumen de tráfico y si se trata de un proyecto puntual de auditoría + rediseño o de un programa continuo mensual.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué métricas se utilizan para evaluar el éxito de un proyecto de CRO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Las métricas primarias son: Tasa de Conversión (%), Costo por Lead (CPL), Costo por Adquisición (CPA), Ticket Promedio (AOV) y la facturación total generada respecto a períodos anteriores.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Necesito cambiar de plataforma para hacer CRO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No necesariamente. En la gran mayoría de los casos podemos optimizar la experiencia de usuario y eliminar fricciones directamente sobre la plataforma que ya utilizas (Shopify, WooCommerce, Next.js, etc.).'
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto tiempo toma ver mejoras en las ventas tras implementar CRO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Los cambios directos en claridad de oferta, formularios, botones de compra y reducción de pasos de checkout generan incrementos en la tasa de conversión desde las primeras semanas posteriores a su publicación.'
          },
        },
        {
          '@type': 'Question',
          name: '¿Trabajan con empresas fuera de Santiago?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Entregamos servicios de consultoría y desarrollo CRO para empresas en todo Chile (Antofagasta, Viña del Mar, Concepción, Puerto Montt, entre otras) mediante coordinación remota ágil y transparente.'
          },
        },
      ],
    },
  ],
};

export default function Page() {
  const phases = [
    {
      step: '01',
      title: 'Auditoría Cuantitativa Profunda (GA4)',
      desc: 'Analizamos las rutas de navegación, caídas de embudo y rendimiento por dispositivo para saber exactamente dónde se pierden los clientes.',
    },
    {
      step: '02',
      title: 'Mapas de Calor y Grabaciones Reales',
      desc: 'Implementamos Microsoft Clarity para registrar mapas de scroll, clics y puntos de fricción interactiva en teléfonos y computadores.',
    },
    {
      step: '03',
      title: 'Evaluación Heurística y Psicología de Compra',
      desc: 'Auditamos más de 60 criterios de usabilidad, confianza comercial, claridad de propuesta y reducción de objeciones de precio.',
    },
    {
      step: '04',
      title: 'Matriz de Priorización ICE',
      desc: 'Priorizamos las mejoras según su Impacto comercial, Confianza y Facilidad técnica para atacar primero lo que genera más ventas.',
    },
    {
      step: '05',
      title: 'Rediseño UX/UI en Figma',
      desc: 'Diseñamos maquetas interactivas con nuevas fichas de producto, checkout acelerado y redacción persuasiva de alta conversión.',
    },
    {
      step: '06',
      title: 'Desarrollo en Código de Alto Rendimiento',
      desc: 'Programamos e integramos las mejoras directamente en tu sitio (Shopify, WooCommerce, Next.js, React) sin ralentizar la plataforma.',
    },
    {
      step: '07',
      title: 'Medición de Impacto y Acompañamiento',
      desc: 'Monitoreamos el aumento en tasa de conversión, ticket promedio y cantidad de pedidos para validar el retorno de inversión.',
    },
  ];

  const auditQuestions = [
    {
      q: '1. ¿El diagnóstico se basa en datos reales de mis usuarios?',
      a: 'Todo cambio en Webunica se fundamenta en analítica de embudos de GA4, mapas de calor, grabaciones de sesión y principios heurísticos probados.',
    },
    {
      q: '2. ¿Incluyen la implementación técnica en código?',
      a: 'Nos encargamos tanto del diagnóstico y diseño UX en Figma como de la programación e implementación directa en tu sitio web.',
    },
    {
      q: '3. ¿Cómo abordan la experiencia en teléfonos móviles?',
      a: 'Diseñamos con enfoque mobile-first, optimizando botones táctiles, teclados automáticos y velocidad de carga en redes celulares de Chile.',
    },
    {
      q: '4. ¿Tienen experiencia con pasarelas de pago y logística chilena?',
      a: 'Dominamos la integración de Webpay Plus, Mercado Pago, Flow, Fintoc, y operadores como Shipit, Enviame, Starken y Chilexpress.',
    },
    {
      q: '5. ¿Los cambios propuestos afectarán la velocidad de mi web?',
      a: 'Optimizamos imágenes y código para mejorar tus métricas de Google Core Web Vitals (LCP, CLS, INP), acelerando la carga.',
    },
    {
      q: '6. ¿Cómo se priorizan las mejoras a realizar?',
      a: 'Mediante la matriz científica ICE (Impacto, Confianza y Facilidad), atacando primero las oportunidades de mayor retorno.',
    },
    {
      q: '7. ¿Trabajan con e-commerce y empresas B2B?',
      a: 'Sí, adaptamos la estrategia: foco en checkout y carritos para e-commerce, y foco en formularios, propuesta de valor y WhatsApp para B2B.',
    },
    {
      q: '8. ¿Quién es el dueño del código y los diseños?',
      a: 'Tu empresa es la única propietaria de todos los diseños en Figma, código programado y configuraciones de analítica entregadas.',
    },
  ];

  const faqs = [
    {
      q: '¿Cuánto cuesta contratar un servicio de consultoría y optimización CRO?',
      a: 'El valor del servicio depende del tamaño y complejidad de la plataforma: número de plantillas a optimizar, volumen de tráfico y si se trata de un proyecto puntual de auditoría + rediseño o de un programa continuo mensual.',
    },
    {
      q: '¿Qué métricas se utilizan para evaluar el éxito de un proyecto de CRO?',
      a: 'Las métricas primarias son: Tasa de Conversión (%), Costo por Lead (CPL), Costo por Adquisición (CPA), Ticket Promedio (AOV) y la facturación total generada respecto a períodos anteriores.',
    },
    {
      q: '¿Necesito cambiar de plataforma para hacer CRO?',
      a: 'No necesariamente. En la gran mayoría de los casos podemos optimizar la experiencia de usuario y eliminar fricciones directamente sobre la plataforma que ya utilizas (Shopify, WooCommerce, Next.js, etc.).'
    },
    {
      q: '¿Cuánto tiempo toma ver mejoras en las ventas tras implementar CRO?',
      a: 'Los cambios directos en claridad de oferta, formularios, botones de compra y reducción de pasos de checkout generan incrementos en la tasa de conversión desde las primeras semanas posteriores a su publicación.'
    },
    {
      q: '¿Trabajan con empresas fuera de Santiago?',
      a: 'Sí. Entregamos servicios de consultoría y desarrollo CRO para empresas en todo Chile (Antofagasta, Viña del Mar, Concepción, Puerto Montt, entre otras) mediante coordinación remota ágil y transparente.'
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
            Agencia CRO Especializada
          </span>
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
            Chile 2026
          </span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05] mb-8">
          Agencia CRO en Chile:{' '}
          <span className="text-blue-500 italic font-serif lowercase font-light">
            optimización de conversión
          </span>{' '}
          para multiplicar tus ventas
        </h1>

        <p className="text-lg lg:text-xl text-zinc-400 font-light leading-relaxed mb-8">
          No adivinamos ni aplicamos cambios por gusto estético. Analizamos los datos de tu embudo con
          mapas de calor y rediseñamos tu web o e-commerce en código de alto rendimiento para que
          vendas más con el tráfico que ya tienes en Chile.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <LeadButton
            service="agencia-cro-optimizacion-conversion-chile"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-700 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)] text-center"
          >
            Solicitar auditoría CRO para mi web
          </LeadButton>
          <a
            href="https://wa.me/56900000000?text=Hola%20Webunica,%20me%20gustar%C3%ADa%20cotizar%20un%20servicio%20de%20optimizaci%C3%B3n%20CRO"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 rounded-xl font-bold uppercase tracking-wider text-xs transition-all text-center flex items-center justify-center gap-2"
          >
            <span>💬</span> Hablar por WhatsApp
          </a>
        </div>
      </section>

      {/* 7 Fases del Servicio */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-4">
          Las 7 fases del servicio de optimización de conversión
        </h2>
        <p className="text-zinc-400 font-light text-base mb-8">
          Metodología rigurosa que va desde el diagnóstico de datos hasta la programación de las
          mejoras en tu sitio web.
        </p>

        <div className="space-y-6">
          {phases.map((p, idx) => (
            <div
              key={idx}
              className="flex gap-6 items-start bg-zinc-900 border border-zinc-800 p-6 rounded-2xl"
            >
              <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center font-black text-lg shrink-0">
                {p.step}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8 Preguntas de Auditoría */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-4">
          Qué preguntar antes de contratar una agencia de CRO
        </h2>
        <p className="text-zinc-400 font-light text-base mb-8">
          Guía de auditoría técnica: 8 preguntas fundamentales que debes hacer para evaluar la
          experiencia real de tu proveedor.
        </p>

        <div className="space-y-4">
          {auditQuestions.map((q, idx) => (
            <div key={idx} className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl">
              <h3 className="text-blue-400 font-bold text-base mb-2">{q.q}</h3>
              <p className="text-zinc-300 font-light text-sm leading-relaxed">{q.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Intermedio */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />
          <h2 className="text-2xl lg:text-4xl font-black text-white uppercase tracking-tight mb-4">
            ¿Listo para auditar y optimizar tu embudo comercial?
          </h2>
          <p className="text-zinc-400 font-light text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Analizamos tus métricas y te entregamos un plan de trabajo detallado con presupuesto y
            alcance cerrado en 24 horas hábiles.
          </p>
          <LeadButton
            service="agencia-cro-optimizacion-conversion-chile"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-700 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)]"
          >
            Quiero que mi sitio web convierta más
          </LeadButton>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Preguntas frecuentes sobre el servicio de agencia CRO
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

      {/* Clúster Links */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">
          Explora las secciones del clúster de conversión
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/como-mejorar-las-ventas-de-mi-pagina-web"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Diagnóstico General</p>
            <p className="text-white text-sm font-semibold">Cómo mejorar ventas web</p>
          </Link>
          <Link
            href="/optimizacion-de-conversion-web"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Metodología</p>
            <p className="text-white text-sm font-semibold">Optimización de conversión CRO</p>
          </Link>
          <Link
            href="/como-aumentar-las-ventas-de-mi-tienda-online"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">E-commerce</p>
            <p className="text-white text-sm font-semibold">Aumentar ventas en tienda online</p>
          </Link>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 rounded-3xl p-10 lg:p-14 text-center text-white shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
          <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight mb-4">
            Multiplica los resultados de tu negocio digital
          </h2>
          <p className="text-blue-100 font-light text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Auditoría profunda, análisis de mapas de calor y rediseño de alta conversión en código
            limpio para escalar tus ventas en Chile.
          </p>
          <LeadButton
            service="agencia-cro-optimizacion-conversion-chile"
            className="px-10 py-5 bg-white text-blue-700 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-zinc-100 transition-all shadow-xl"
          >
            Cotizar servicio de optimización CRO
          </LeadButton>
        </div>
      </section>
    </div>
  );
}
