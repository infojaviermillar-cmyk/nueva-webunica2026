import { Metadata } from 'next';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Cómo Mejorar las Ventas de mi Página Web: Guía de Diagnóstico y Conversión | Webunica',
  description:
    '¿Tu página web tiene visitas pero no vende? Descubre las 6 razones por las que no convierte y los pasos prácticos para multiplicar tus ventas y cotizaciones.',
  alternates: {
    canonical: 'https://webunica.cl/como-mejorar-las-ventas-de-mi-pagina-web',
  },
  openGraph: {
    title: 'Cómo Mejorar las Ventas de mi Página Web: Diagnóstico y Soluciones',
    description:
      'Descubre por qué tu página web no está vendiendo lo suficiente y qué cambios estratégicos en diseño, velocidad y propuesta de valor aumentan tus ventas.',
    url: 'https://webunica.cl/como-mejorar-las-ventas-de-mi-pagina-web',
    siteName: 'Webunica',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://webunica.cl/como-mejorar-las-ventas-de-mi-pagina-web/#webpage',
      url: 'https://webunica.cl/como-mejorar-las-ventas-de-mi-pagina-web/',
      name: 'Cómo Mejorar las Ventas de mi Página Web: Guía de Diagnóstico y Conversión | Webunica',
      description:
        '¿Tu página web tiene visitas pero no vende? Descubre las 6 razones por las que no convierte y los pasos prácticos para multiplicar tus ventas y cotizaciones.',
      inLanguage: 'es-CL',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://webunica.cl/#website',
        url: 'https://webunica.cl/',
        name: 'Webunica',
      },
      breadcrumb: {
        '@id': 'https://webunica.cl/como-mejorar-las-ventas-de-mi-pagina-web/#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://webunica.cl/como-mejorar-las-ventas-de-mi-pagina-web/#breadcrumb',
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
          name: 'Cómo Mejorar las Ventas de mi Página Web',
          item: 'https://webunica.cl/como-mejorar-las-ventas-de-mi-pagina-web/',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://webunica.cl/como-mejorar-las-ventas-de-mi-pagina-web/#service',
      name: 'Auditoría y Optimización de Conversión Web en Chile',
      serviceType: 'Optimización de Tasa de Conversión (CRO)',
      provider: {
        '@type': 'Organization',
        '@id': 'https://webunica.cl/#organization',
        name: 'Webunica',
        url: 'https://webunica.cl/',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Chile',
      },
      description:
        'Diagnóstico, auditoría y rediseño de páginas web y tiendas online en Chile para eliminar puntos de fuga, aumentar la tasa de conversión y maximizar ventas.',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://webunica.cl/como-mejorar-las-ventas-de-mi-pagina-web/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Por qué mi página web tiene visitas pero no recibo consultas ni ventas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La causa más frecuente es una desconexión entre lo que busca el usuario y lo que encuentra: falta de claridad en la propuesta de valor, lentitud en celulares, procesos de contacto complejos o desconfianza por ausencia de pruebas sociales y precios transparentes.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto tiempo toma ver resultados al optimizar la conversión de un sitio web?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Los cambios directos en formularios, llamados a la acción, botón de WhatsApp y claridad de oferta generan mejoras en la tasa de contacto de forma casi inmediata tras implementarse y recibir tráfico.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué es una tasa de conversión normal para un sitio web en Chile?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'En comercio electrónico (e-commerce), una tasa promedio oscila entre el 1% y el 2,5%. En empresas de servicios B2B o captación de prospectos, una página optimizada puede alcanzar entre el 3% y el 8%.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Conviene más invertir en SEO o en optimización de conversión (CRO)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ambas se complementan: el SEO atrae visitas calificadas, mientras que el CRO asegura que esas visitas se transformen en dinero. Lo óptimo es preparar primero la web para convertir y luego escalar el tráfico.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo sé qué parte de mi página web está fallando?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Mediante el análisis de métricas en Google Analytics 4 (porcentaje de rebote, tiempo en página, rutas) y herramientas de mapas de calor que muestran exactamente dónde se detienen o abandonan tus visitantes.',
          },
        },
      ],
    },
  ],
};

export default function Page() {
  const causes = [
    {
      num: '01',
      title: 'Propuesta de valor confusa en los primeros 5 segundos',
      desc: 'Si el visitante no entiende qué vendes, a quién ayudas y por qué elegirte en menos de 5 segundos, hace clic en «Atrás» y se va a la competencia.',
    },
    {
      num: '02',
      title: 'Lentitud y mala experiencia en teléfonos móviles',
      desc: 'Más del 75% del tráfico en Chile es móvil. Si la web tarda más de 3 segundos o tiene botones pequeños, pierdes más de la mitad de tus ventas.',
    },
    {
      num: '03',
      title: 'Demasiada fricción en el proceso de compra o contacto',
      desc: 'Formularios con 10 campos innecesarios, registros forzados antes de pagar o costos de envío ocultos hasta el final del checkout ahuyentan a los clientes.',
    },
    {
      num: '04',
      title: 'Falta de confianza y validación comercial',
      desc: 'Ausencia de testimonios reales, falta de datos de contacto visibles o carencia de pasarelas de pago chilenas certificadas generan desconfianza inmediata.',
    },
    {
      num: '05',
      title: 'Llamadas a la acción (CTA) poco claras o invisibles',
      desc: 'Botones con textos pasivos como «Enviar» o «Más información» que no guían al usuario hacia el siguiente paso lógico de compra o cotización.',
    },
    {
      num: '06',
      title: 'Tráfico desalineado con tu oferta real',
      desc: 'Visitas que llegan por anuncios o búsquedas poco calificadas que no tienen una intención de compra genuina para tus productos o servicios.',
    },
  ];

  const quickFixes = [
    {
      title: '1. Clarifica tu titular principal',
      desc: 'Usa una fórmula directa: [Qué problema resuelves] + [Para quién] + [Cómo lo haces] en la cabecera visible.',
    },
    {
      title: '2. Reduce tu formulario a 3 o 4 campos',
      desc: 'Pide solo Nombre, Correo, Teléfono/WhatsApp y Servicio. Los detalles se afinan en la conversación comercial.',
    },
    {
      title: '3. Agrega botón flotante de WhatsApp',
      desc: 'Con mensaje preconfigurado que indica la consulta específica para facilitar la respuesta inmediata.',
    },
    {
      title: '4. Muestra pruebas sociales reales',
      desc: 'Logos de clientes, reseñas con nombres y fotos reales, y sellos de seguridad bancaria o garantías claras.',
    },
    {
      title: '5. Optimiza la velocidad en celulares',
      desc: 'Comprime imágenes a WebP, elimina scripts pesados y asegura tiempos de carga bajo 2 segundos en redes 4G.',
    },
  ];

  const faqs = [
    {
      q: '¿Por qué mi página web tiene visitas pero no recibo consultas ni ventas?',
      a: 'La causa más frecuente es una desconexión entre lo que busca el usuario y lo que encuentra: falta de claridad en la propuesta de valor, lentitud en celulares, procesos de contacto complejos o desconfianza por ausencia de pruebas sociales y precios transparentes.',
    },
    {
      q: '¿Cuánto tiempo toma ver resultados al optimizar la conversión de un sitio web?',
      a: 'Los cambios directos en formularios, llamados a la acción, botón de WhatsApp y claridad de oferta generan mejoras en la tasa de contacto de forma casi inmediata tras implementarse y recibir tráfico.',
    },
    {
      q: '¿Qué es una tasa de conversión normal para un sitio web en Chile?',
      a: 'En comercio electrónico (e-commerce), una tasa promedio oscila entre el 1% y el 2,5%. En empresas de servicios B2B o captación de prospectos, una página optimizada puede alcanzar entre el 3% y el 8%.',
    },
    {
      q: '¿Conviene más invertir en SEO o en optimización de conversión (CRO)?',
      a: 'Ambas se complementan: el SEO atrae visitas calificadas, mientras que el CRO asegura que esas visitas se transformen en dinero. Lo óptimo es preparar primero la web para convertir y luego escalar el tráfico.',
    },
    {
      q: '¿Cómo sé qué parte de mi página web está fallando?',
      a: 'Mediante el análisis de métricas en Google Analytics 4 (porcentaje de rebote, tiempo en página, rutas) y herramientas de mapas de calor que muestran exactamente dónde se detienen o abandonan tus visitantes.',
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
            Diagnóstico de Ventas & Conversión
          </span>
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
            Chile 2026
          </span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05] mb-8">
          Cómo mejorar las ventas de mi página web:{' '}
          <span className="text-blue-500 italic font-serif lowercase font-light">
            diagnostica y multiplica
          </span>{' '}
          tu conversión
        </h1>

        <p className="text-lg lg:text-xl text-zinc-400 font-light leading-relaxed mb-8">
          Si tu sitio web tiene visitas o inviertes en publicidad en Google y Meta pero no recibes
          ventas ni cotizaciones, el problema no es la falta de tráfico: es la tasa de conversión.
          Descubre dónde están las fugas de tu sitio y cómo corregirlas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <LeadButton
            service="como-mejorar-las-ventas-de-mi-pagina-web"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-700 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)] text-center"
          >
            Auditar la conversión de mi sitio web
          </LeadButton>
          <Link
            href="/optimizacion-de-conversion-web"
            className="px-8 py-4 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 rounded-xl font-bold uppercase tracking-wider text-xs transition-all text-center"
          >
            Ver metodología CRO
          </Link>
        </div>
      </section>

      {/* El Error del Tráfico */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-6">
          El error más costoso: creer que la solución siempre es «comprar más visitas»
        </h2>
        <p className="text-zinc-400 font-light leading-relaxed mb-8">
          Enviar más visitantes a un sitio web que no convierte es como llenar un balde con
          agujeros. Si optimizas tu tasa de conversión del 0,5% al 1,5%, triplicas tus ventas con
          exactamente las mismas visitas que ya tienes, sin gastar un solo peso extra en publicidad.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-white font-bold text-lg mb-2">Comprar más visitas (Ineficiente)</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              1.000 visitas al 0,5% = 5 clientes. Para llegar a 15 clientes necesitas triplicar tu
              gasto publicitario a 3.000 visitas.
            </p>
          </div>
          <div className="bg-zinc-900/60 border border-blue-500/40 p-6 rounded-2xl bg-blue-950/10">
            <h3 className="text-blue-400 font-bold text-lg mb-2">Optimizar Conversión CRO (Rentable)</h3>
            <p className="text-zinc-300 font-light text-sm leading-relaxed">
              1.000 visitas al 1,5% = 15 clientes con el mismo presupuesto publicitario y mayor
              margen de ganancia neta.
            </p>
          </div>
        </div>
      </section>

      {/* 6 Motivos */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Los 6 motivos principales por los que una página web no vende
        </h2>

        <div className="space-y-6">
          {causes.map((c, idx) => (
            <div
              key={idx}
              className="flex gap-6 items-start bg-zinc-900 border border-zinc-800 p-6 rounded-2xl"
            >
              <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center font-black text-lg shrink-0">
                {c.num}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{c.title}</h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">{c.desc}</p>
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
            ¿Quieres detectar las fugas de tu sitio web?
          </h2>
          <p className="text-zinc-400 font-light text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Auditamos tu plataforma con mapas de calor y analítica de embudo para mostrarte
            exactamente dónde se detienen tus clientes.
          </p>
          <LeadButton
            service="como-mejorar-las-ventas-de-mi-pagina-web"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-700 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)]"
          >
            Quiero que mi página web venda más
          </LeadButton>
        </div>
      </section>

      {/* 5 Ajustes Inmediatos */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          5 ajustes que puedes implementar de inmediato
        </h2>

        <div className="space-y-4">
          {quickFixes.map((fix, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
              <h3 className="text-blue-400 font-bold text-lg mb-2">{fix.title}</h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">{fix.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Preguntas frecuentes sobre cómo mejorar las ventas web
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
          Profundiza en optimización y aumento de ventas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          <Link
            href="/optimizar-landing-page-para-captar-leads"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Servicios B2B</p>
            <p className="text-white text-sm font-semibold">Landing pages para captar leads</p>
          </Link>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 rounded-3xl p-10 lg:p-14 text-center text-white shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
          <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight mb-4">
            Convierte tu sitio web en un canal que realmente venda
          </h2>
          <p className="text-blue-100 font-light text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Elimina puntos de fuga, optimiza la experiencia en celulares y multiplica tus
            cotizaciones con un rediseño orientado a la conversión en Chile.
          </p>
          <LeadButton
            service="como-mejorar-las-ventas-de-mi-pagina-web"
            className="px-10 py-5 bg-white text-blue-700 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-zinc-100 transition-all shadow-xl"
          >
            Solicitar evaluación de conversión gratuita
          </LeadButton>
        </div>
      </section>
    </div>
  );
}
