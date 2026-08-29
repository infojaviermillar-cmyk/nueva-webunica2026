import { Metadata } from 'next';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Optimización de Conversión Web (CRO): Metodología y Estrategias | Webunica',
  description:
    'Aprende qué es el CRO y cómo optimizar la tasa de conversión de tu sitio web o e-commerce. Metodología basada en datos, mapas de calor, análisis UX y pruebas.',
  alternates: {
    canonical: 'https://webunica.cl/optimizacion-de-conversion-web',
  },
  openGraph: {
    title: 'Optimización de Conversión Web (CRO): Metodología y Estrategias',
    description:
      'Guía técnica y metodológica de CRO. Descubre cómo identificar fricciones, analizar el comportamiento de tus usuarios y multiplicar tus ventas sin gastar más en publicidad.',
    url: 'https://webunica.cl/optimizacion-de-conversion-web',
    siteName: 'Webunica',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://webunica.cl/optimizacion-de-conversion-web/#webpage',
      url: 'https://webunica.cl/optimizacion-de-conversion-web/',
      name: 'Optimización de Conversión Web (CRO): Metodología y Estrategias | Webunica',
      description:
        'Aprende qué es el CRO y cómo optimizar la tasa de conversión de tu sitio web o e-commerce. Metodología basada en datos, mapas de calor, análisis UX y pruebas.',
      inLanguage: 'es-CL',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://webunica.cl/#website',
        url: 'https://webunica.cl/',
        name: 'Webunica',
      },
      breadcrumb: {
        '@id': 'https://webunica.cl/optimizacion-de-conversion-web/#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://webunica.cl/optimizacion-de-conversion-web/#breadcrumb',
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
          name: 'Optimización de Conversión Web (CRO)',
          item: 'https://webunica.cl/optimizacion-de-conversion-web/',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://webunica.cl/optimizacion-de-conversion-web/#service',
      name: 'Optimización de Tasa de Conversión (CRO) en Chile',
      serviceType: 'Consultoría e Ingeniería de Conversión Digital',
      provider: {
        '@type': 'Organization',
        '@id': 'https://webunica.cl/#organization',
        name: 'Webunica',
        url: 'https://webunica.cl/',
        logo: '[LOGO_WEBUNICA]',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Chile',
      },
      description:
        'Servicio especializado de análisis cuantitativo, cualitativo, mapas de calor, pruebas A/B y rediseño de embudos para optimizar la tasa de conversión en Chile.',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://webunica.cl/optimizacion-de-conversion-web/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuántas visitas mensuales necesita mi sitio web para hacer pruebas A/B?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Para ejecutar pruebas A/B con significancia estadística sólida (95%+ de certeza), se recomienda contar con al menos 10.000 a 20.000 visitas mensuales. Para sitios con menor tráfico, se aplican auditorías heurísticas y rediseños directos basados en patrones probados.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué diferencia hay entre UX (Experiencia de Usuario) y CRO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La UX busca que la navegación sea intuitiva y agradable. El CRO alinea esa usabilidad directamente con los objetivos de negocio y ventas, guiando estratégicamente al usuario a completar una transacción.',
          },
        },
        {
          '@type': 'Question',
          name: '¿El CRO ayuda a mejorar el rendimiento de mis anuncios en Google y Meta Ads?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Directamente sí. Al duplicar la tasa de conversión de tu página de destino, tu Costo por Lead (CPL) o Costo por Adquisición (CPA) se reduce a la mitad, haciendo tus campañas mucho más rentables y escalables.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto tiempo dura un proyecto de auditoría e implementación CRO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Una auditoría CRO profunda toma habitualmente entre 2 y 3 semanas de análisis de datos y grabaciones. La implementación de mejoras y su posterior medición de impacto se desarrolla en ciclos de 4 a 8 semanas.',
          },
        },
        {
          '@type': 'Question',
          name: '¿El trabajo de CRO puede afectar negativamente mi posicionamiento SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Si se ejecuta profesionalmente, ocurre lo contrario: Google premia a los sitios con mejor experiencia de usuario, mayor tiempo de permanencia, menor rebote y velocidad de carga rápida (Core Web Vitals).',
          },
        },
      ],
    },
  ],
};

export default function Page() {
  const phases = [
    {
      num: '01',
      title: 'Análisis Cuantitativo de Datos',
      desc: 'Revisión en profundidad de GA4 y embudos para identificar en qué paso exacto se caen los usuarios y dónde se producen las mayores fugas.',
    },
    {
      num: '02',
      title: 'Mapas de Calor y Grabaciones Cualitativas',
      desc: 'Implementación de Microsoft Clarity / Hotjar para ver clics de rabia, mapas de scroll y grabaciones reales de cómo interactúan los usuarios.',
    },
    {
      num: '03',
      title: 'Evaluación Heurística de Usabilidad y Fricción',
      desc: 'Auditoría experta de más de 60 puntos: claridad de propuesta de valor, transparencia de precios en UF/CLP, pruebas sociales y barreras de formulario.',
    },
    {
      num: '04',
      title: 'Hipótesis y Rediseño en Figma',
      desc: 'Diseño de prototipos de alta fidelidad con soluciones visuales y redacción persuasiva (copywriting) enfocada en resolver objeciones de compra.',
    },
    {
      num: '05',
      title: 'Implementación Técnica y Medición',
      desc: 'Desarrollo en código limpio (Next.js, Shopify, WooCommerce) y pruebas A/B o comparativas de cohortes para medir el incremento real de ventas.',
    },
  ];

  const frictionTypes = [
    {
      title: 'Fricción Cognitiva (Sobrecarga mental)',
      desc: 'Menús desordenados, textos con tecnicismos excesivos o precios ambiguos que obligan al usuario a pensar demasiado antes de actuar.',
    },
    {
      title: 'Fricción Emocional (Desconfianza y temor)',
      desc: 'Ausencia de políticas claras de devolución, falta de sellos de pago reconocidos (Webpay/Mercado Pago) o carencia de testimonios reales.',
    },
    {
      title: 'Fricción Interactiva (Barreras mecánicas)',
      desc: 'Formularios con demasiados campos, botones difíciles de presionar en celulares o tiempos de carga superiores a 3 segundos.',
    },
  ];

  const faqs = [
    {
      q: '¿Cuántas visitas mensuales necesita mi sitio web para hacer pruebas A/B?',
      a: 'Para ejecutar pruebas A/B con significancia estadística sólida (95%+ de certeza), se recomienda contar con al menos 10.000 a 20.000 visitas mensuales. Para sitios con menor tráfico, se aplican auditorías heurísticas y rediseños directos basados en patrones probados.',
    },
    {
      q: '¿Qué diferencia hay entre UX (Experiencia de Usuario) y CRO?',
      a: 'La UX busca que la navegación sea intuitiva y agradable. El CRO alinea esa usabilidad directamente con los objetivos de negocio y ventas, guiando estratégicamente al usuario a completar una transacción.',
    },
    {
      q: '¿El CRO ayuda a mejorar el rendimiento de mis anuncios en Google y Meta Ads?',
      a: 'Directamente sí. Al duplicar la tasa de conversión de tu página de destino, tu Costo por Lead (CPL) o Costo por Adquisición (CPA) se reduce a la mitad, haciendo tus campañas mucho más rentables y escalables.',
    },
    {
      q: '¿Cuánto tiempo dura un proyecto de auditoría e implementación CRO?',
      a: 'Una auditoría CRO profunda toma habitualmente entre 2 y 3 semanas de análisis de datos y grabaciones. La implementación de mejoras y su posterior medición de impacto se desarrolla en ciclos de 4 a 8 semanas.',
    },
    {
      q: '¿El trabajo de CRO puede afectar negativamente mi posicionamiento SEO?',
      a: 'Si se ejecuta profesionalmente, ocurre lo contrario: Google premia a los sitios con mejor experiencia de usuario, mayor tiempo de permanencia, menor rebote y velocidad de carga rápida (Core Web Vitals).',
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 pt-[22vh] lg:pt-48 pb-24 font-sans text-zinc-100 selection:bg-blue-600 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest rounded-full">
            Metodología Científica CRO
          </span>
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
            Data-Driven UX
          </span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05] mb-8">
          Optimización de conversión web (CRO):{' '}
          <span className="text-blue-500 italic font-serif lowercase font-light">
            la metodología científica
          </span>{' '}
          para vender más
        </h1>

        <p className="text-lg lg:text-xl text-zinc-400 font-light leading-relaxed mb-8">
          El CRO combina análisis cuantitativo de embudos, mapas de calor, heurística de usabilidad y
          psicología del consumidor para eliminar las fricciones que impiden que tus visitas compren
          o soliciten cotizaciones en Chile.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <LeadButton
            service="optimizacion-de-conversion-web"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-700 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)] text-center"
          >
            Auditar la conversión de mi sitio web
          </LeadButton>
          <Link
            href="/agencia-cro-optimizacion-conversion-chile"
            className="px-8 py-4 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 rounded-xl font-bold uppercase tracking-wider text-xs transition-all text-center"
          >
            Consultar con agencia CRO
          </Link>
        </div>
      </section>

      {/* Qué es el CRO */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-6">
          Qué es el CRO y por qué transforma tu rentabilidad
        </h2>
        <p className="text-zinc-400 font-light leading-relaxed mb-8">
          La tasa de conversión es el porcentaje de visitantes que completan una acción comercial
          deseada (comprar, cotizar o contactar). Optimizar la conversión multiplica los ingresos y
          reduce a la mitad el Costo por Adquisición (CPA) sin depender de presupuestos crecientes de
          publicidad.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-white font-bold text-lg mb-2">Rediseño Estético Tradicional</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Basado en opiniones personales del diseñador o modas visuales. Alto riesgo de dañar las
              ventas sin entender el comportamiento real del usuario.
            </p>
          </div>
          <div className="bg-zinc-900/60 border border-blue-500/40 p-6 rounded-2xl bg-blue-950/10">
            <h3 className="text-blue-400 font-bold text-lg mb-2">Optimización CRO con Datos</h3>
            <p className="text-zinc-300 font-light text-sm leading-relaxed">
              Basado en mapas de calor, embudos analíticos y pruebas empíricas. Cada cambio busca
              resolver una fricción demostrada en el proceso de compra.
            </p>
          </div>
        </div>
      </section>

      {/* Ciclo de 5 Fases */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          El ciclo de 5 fases de la optimización de conversión
        </h2>

        <div className="space-y-6">
          {phases.map((p, idx) => (
            <div
              key={idx}
              className="flex gap-6 items-start bg-zinc-900 border border-zinc-800 p-6 rounded-2xl"
            >
              <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center font-black text-lg shrink-0">
                {p.num}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">{p.desc}</p>
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
            ¿Quieres aplicar una metodología CRO a tu sitio web?
          </h2>
          <p className="text-zinc-400 font-light text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Elimina las conjeturas y rediseña tu embudo con datos reales de comportamiento de tus
            usuarios.
          </p>
          <LeadButton
            service="optimizacion-de-conversion-web"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-700 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)]"
          >
            Quiero optimizar la conversión de mi sitio
          </LeadButton>
        </div>
      </section>

      {/* 3 Dimensiones de la Fricción */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Las tres dimensiones de la fricción digital
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {frictionTypes.map((f, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
              <h3 className="text-blue-400 font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Preguntas frecuentes sobre metodología CRO
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
          Soluciones especializadas del clúster CRO
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/como-mejorar-las-ventas-de-mi-pagina-web"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Diagnóstico Inicial</p>
            <p className="text-white text-sm font-semibold">Cómo mejorar las ventas web</p>
          </Link>
          <Link
            href="/como-aumentar-las-ventas-de-mi-tienda-online"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">E-commerce</p>
            <p className="text-white text-sm font-semibold">Aumentar ventas en tienda online</p>
          </Link>
          <Link
            href="/agencia-cro-optimizacion-conversion-chile"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Servicio Webunica</p>
            <p className="text-white text-sm font-semibold">Agencia CRO en Chile</p>
          </Link>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 rounded-3xl p-10 lg:p-14 text-center text-white shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
          <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight mb-4">
            Aumenta tus ventas con optimización científica
          </h2>
          <p className="text-blue-100 font-light text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Diagnóstico de más de 60 puntos de usabilidad, mapas de calor y rediseño en código
            limpio para multiplicar la tasa de conversión en Chile.
          </p>
          <LeadButton
            service="optimizacion-de-conversion-web"
            className="px-10 py-5 bg-white text-blue-700 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-zinc-100 transition-all shadow-xl"
          >
            Solicitar auditoría de conversión CRO
          </LeadButton>
        </div>
      </section>
    </div>
  );
}
