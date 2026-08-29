import { Metadata } from 'next';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Optimizar Landing Page para Captar Leads: Guía B2B y Conversión | Webunica',
  description:
    'Aprende cómo optimizar tu landing page para captar más leads y reducir tu costo por contacto en Chile. Estructura, formularios, pruebas sociales y WhatsApp.',
  alternates: {
    canonical: 'https://webunica.cl/optimizar-landing-page-para-captar-leads',
  },
  openGraph: {
    title: 'Optimizar Landing Page para Captar Leads: Guía B2B y Conversión',
    description:
      'Descubre cómo diseñar una página de aterrizaje que convierta clics en oportunidades de venta reales. Formularios optimizados, propuesta de valor y reducción de CPL.',
    url: 'https://webunica.cl/optimizar-landing-page-para-captar-leads',
    siteName: 'Webunica',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://webunica.cl/optimizar-landing-page-para-captar-leads/#webpage',
      url: 'https://webunica.cl/optimizar-landing-page-para-captar-leads/',
      name: 'Optimizar Landing Page para Captar Leads: Guía B2B y Conversión | Webunica',
      description:
        'Aprende cómo optimizar tu landing page para captar más leads y reducir tu costo por contacto en Chile. Estructura, formularios, pruebas sociales y WhatsApp.',
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
        '@id': 'https://webunica.cl/optimizar-landing-page-para-captar-leads/#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://webunica.cl/optimizar-landing-page-para-captar-leads/#breadcrumb',
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
          name: 'Optimizar Landing Page para Leads',
          item: 'https://webunica.cl/optimizar-landing-page-para-captar-leads/',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://webunica.cl/optimizar-landing-page-para-captar-leads/#service',
      name: 'Diseño y Optimización de Landing Pages B2B en Chile',
      serviceType: 'Generación de Leads y Optimización de Conversión',
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
        'Desarrollo y optimización de landing pages de alta conversión para empresas B2B y servicios profesionales en Chile, orientadas a maximizar cotizaciones y reducir el costo por lead.',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://webunica.cl/optimizar-landing-page-para-captar-leads/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué tasa de conversión se considera buena para una landing page B2B en Chile?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Una landing page B2B bien optimizada orientada a tráfico pagado calificado suele alcanzar tasas de conversión entre el 4,0% y el 9,0%. Si tu página actual convierte por debajo del 2%, existe un amplio margen de mejora mediante optimización de estructura y formularios.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Por qué mi landing page tiene muchos clics pero nadie llena el formulario?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Las causas más comunes son: titular poco claro que no conecta con lo que prometía el anuncio, formularios con demasiadas preguntas invasivas, lentitud de carga en celulares o falta de elementos de prueba social que generen confianza en la empresa.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Conviene tener una landing page separada para cada servicio o campaña?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutamente sí. Cada servicio debe tener su propia landing page con textos y testimonios específicos. La relevancia exacta entre el anuncio y la página es el factor número uno para reducir el Costo por Lead.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo sé si mi landing page está funcionando mejor después de optimizarla?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A través de la medición comparativa de métricas en Google Analytics 4 y Google Ads: comparando la tasa de conversión anterior vs. actual, el Costo por Lead (CPL) y la cantidad de reuniones comerciales generadas para tu equipo de ventas.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto demora el desarrollo de una landing page optimizada con Webunica?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El diseño, redacción, programación y configuración de analítica de una landing page de alto rendimiento toma habitualmente entre 5 y 10 días hábiles desde la definición de requerimientos.',
          },
        },
      ],
    },
  ],
};

export default function Page() {
  const blocks = [
    {
      num: '01',
      title: 'Cabecera de impacto y propuesta de valor clara',
      desc: 'Titular directo orientado al beneficio principal y subtítulo explicativo visible en los primeros 3 segundos sin hacer scroll.',
    },
    {
      num: '02',
      title: 'Formulario de captura con mínima fricción',
      desc: 'Solo 3 o 4 campos indispensables para calificar al cliente (Nombre, Correo corporativo, Teléfono y Servicio requerido).',
    },
    {
      num: '03',
      title: 'Prueba social y validación verificable',
      desc: 'Logotipos de empresas que confían en ti, testimonios con nombre y cargo real, y métricas cuantitativas de impacto.',
    },
    {
      num: '04',
      title: 'Beneficios comerciales concretos',
      desc: 'Explicación estructurada en iconos limpios que traducen especificaciones técnicas a ahorros de tiempo, dinero o riesgos.',
    },
    {
      num: '05',
      title: 'Respuestas a objeciones frecuentes',
      desc: 'Sección de preguntas frecuentes que desactiva los temores sobre plazos, requisitos, cobertura en regiones y garantías.',
    },
    {
      num: '06',
      title: 'Cierre con llamada a la acción reforzada',
      desc: 'Bloque final contrastante con formulario o botón directo que captura al visitante que leyó toda la propuesta.',
    },
  ];

  const faqs = [
    {
      q: '¿Qué tasa de conversión se considera buena para una landing page B2B en Chile?',
      a: 'Una landing page B2B bien optimizada orientada a tráfico pagado calificado suele alcanzar tasas de conversión entre el 4,0% y el 9,0%. Si tu página actual convierte por debajo del 2%, existe un amplio margen de mejora mediante optimización de estructura y formularios.',
    },
    {
      q: '¿Por qué mi landing page tiene muchos clics pero nadie llena el formulario?',
      a: 'Las causas más comunes son: titular poco claro que no conecta con lo que prometía el anuncio, formularios con demasiadas preguntas invasivas, lentitud de carga en celulares o falta de elementos de prueba social que generen confianza en la empresa.',
    },
    {
      q: '¿Conviene tener una landing page separada para cada servicio o campaña?',
      a: 'Absolutamente sí. Cada servicio debe tener su propia landing page con textos y testimonios específicos. La relevancia exacta entre el anuncio y la página es el factor número uno para reducir el Costo por Lead.',
    },
    {
      q: '¿Cómo sé si mi landing page está funcionando mejor después de optimizarla?',
      a: 'A través de la medición comparativa de métricas en Google Analytics 4 y Google Ads: comparando la tasa de conversión anterior vs. actual, el Costo por Lead (CPL) y la cantidad de reuniones comerciales generadas para tu equipo de ventas.',
    },
    {
      q: '¿Cuánto demora el desarrollo de una landing page optimizada con Webunica?',
      a: 'El diseño, redacción, programación y configuración de analítica de una landing page de alto rendimiento toma habitualmente entre 5 y 10 días hábiles desde la definición de requerimientos.',
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
            Servicios B2B & Captación de Leads
          </span>
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
            Chile
          </span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05] mb-8">
          Cómo optimizar una landing page para captar leads:{' '}
          <span className="text-blue-500 italic font-serif lowercase font-light">
            la estructura que multiplica
          </span>{' '}
          tus cotizaciones
        </h1>

        <p className="text-lg lg:text-xl text-zinc-400 font-light leading-relaxed mb-8">
          Dejar de enviar tráfico publicitario a un Home corporativo con menús distractores. Diseña
          páginas de aterrizaje enfocadas en un único objetivo comercial para reducir tu Costo por
          Lead (CPL) y generar reuniones de venta reales.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <LeadButton
            service="optimizar-landing-page-para-captar-leads"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-700 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)] text-center"
          >
            Auditar mi landing page actual
          </LeadButton>
          <Link
            href="/agencia-cro-optimizacion-conversion-chile"
            className="px-8 py-4 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 rounded-xl font-bold uppercase tracking-wider text-xs transition-all text-center"
          >
            Ver servicios CRO en Chile
          </Link>
        </div>
      </section>

      {/* Regla de Oro 1:1 */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-6">
          La regla de oro: Proporción de atención 1:1 sin puntos de fuga
        </h2>
        <p className="text-zinc-400 font-light leading-relaxed mb-8">
          Una página de aterrizaje exitosa elimina las barras de navegación, los enlaces a redes
          sociales y los artículos de blog. Todo el contenido converge hacia una sola acción:
          solicitar una cotización o escribir por WhatsApp.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-white font-bold text-lg mb-2">Homepage con Menús (Fugas)</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Múltiples enlaces que distraen al usuario. Conversión típica entre 0,5% y 1,5% con alto
              desperdicio de presupuesto publicitario.
            </p>
          </div>
          <div className="bg-zinc-900/60 border border-blue-500/40 p-6 rounded-2xl bg-blue-950/10">
            <h3 className="text-blue-400 font-bold text-lg mb-2">Landing Page B2B Optimizada</h3>
            <p className="text-zinc-300 font-light text-sm leading-relaxed">
              Cero distracciones y mensaje alineado al anuncio. Conversión típica entre 4,0% y 9,0% en
              tráfico calificado de Google Ads.
            </p>
          </div>
        </div>
      </section>

      {/* 6 Bloques */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Los 6 bloques de una landing page de alta conversión
        </h2>

        <div className="space-y-6">
          {blocks.map((b, idx) => (
            <div
              key={idx}
              className="flex gap-6 items-start bg-zinc-900 border border-zinc-800 p-6 rounded-2xl"
            >
              <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center font-black text-lg shrink-0">
                {b.num}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">{b.desc}</p>
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
            ¿Listo para reducir tu costo por lead en Google Ads?
          </h2>
          <p className="text-zinc-400 font-light text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Diseñamos y programamos páginas de aterrizaje con redacción persuasiva y formularios
            optimizados para acelerar las reuniones de tu equipo de ventas.
          </p>
          <LeadButton
            service="optimizar-landing-page-para-captar-leads"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-700 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)]"
          >
            Quiero optimizar mi landing page para captar más leads
          </LeadButton>
        </div>
      </section>

      {/* WhatsApp B2B */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="bg-gradient-to-br from-blue-950/60 to-zinc-900 border border-blue-500/30 p-8 lg:p-10 rounded-3xl">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest rounded-full">
            El canal clave en Chile
          </span>
          <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mt-4 mb-4">
            WhatsApp Business: La vía rápida para captar prospectos B2B
          </h2>
          <p className="text-zinc-300 font-light leading-relaxed mb-6">
            En Chile, más del 65% de los tomadores de decisión prefieren iniciar la conversación por
            WhatsApp antes de esperar una respuesta por correo.
          </p>
          <ul className="space-y-3 text-zinc-300 font-light text-sm">
            <li className="flex items-center gap-3">
              <span className="text-blue-400 font-bold">✓</span> Botón flotante con mensaje contextual precargado.
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-400 font-bold">✓</span> Medición como evento de conversión clave en Google Ads.
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-400 font-bold">✓</span> Respuesta ágil que evita que el prospecto busque a otro proveedor.
            </li>
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Preguntas frecuentes sobre landing pages para captar leads
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
          Más recursos del clúster de optimización
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
            Multiplica los contactos comerciales de tu empresa
          </h2>
          <p className="text-blue-100 font-light text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Diseño UX/UI en Figma, redacción persuasiva y programación en Next.js ultrarrápido para
            generar leads calificados desde el primer día.
          </p>
          <LeadButton
            service="optimizar-landing-page-para-captar-leads"
            className="px-10 py-5 bg-white text-blue-700 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-zinc-100 transition-all shadow-xl"
          >
            Solicitar cotización de landing page B2B
          </LeadButton>
        </div>
      </section>
    </div>
  );
}
