import { Metadata } from 'next';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Página Web para Inmobiliarias en Chile: Catálogo, Buscador y Captación | Webunica',
  description:
    'Descubre qué debe tener una página web para inmobiliarias en Chile: catálogo administrable, buscador por comuna y UF, fichas optimizadas y conexión con CRM.',
  alternates: {
    canonical: 'https://webunica.cl/pagina-web-para-inmobiliarias',
  },
  openGraph: {
    title: 'Página Web para Inmobiliarias en Chile: Catálogo, Buscador y Captación',
    description:
      'Estructura, catálogo dinámico, buscador por comuna y UF, y captura de leads. Guía completa para profesionalizar la plataforma digital de tu inmobiliaria.',
    url: 'https://webunica.cl/pagina-web-para-inmobiliarias',
    siteName: 'Webunica',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://webunica.cl/pagina-web-para-inmobiliarias/#webpage',
      url: 'https://webunica.cl/pagina-web-para-inmobiliarias/',
      name: 'Página Web para Inmobiliarias en Chile: Catálogo, Buscador y Captación | Webunica',
      description:
        'Descubre qué debe tener una página web para inmobiliarias en Chile: catálogo administrable, buscador por comuna y UF, fichas optimizadas y conexión con CRM.',
      inLanguage: 'es-CL',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://webunica.cl/#website',
        url: 'https://webunica.cl/',
        name: 'Webunica',
      },
      breadcrumb: {
        '@id': 'https://webunica.cl/pagina-web-para-inmobiliarias/#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://webunica.cl/pagina-web-para-inmobiliarias/#breadcrumb',
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
          name: 'Página Web para Inmobiliarias',
          item: 'https://webunica.cl/pagina-web-para-inmobiliarias/',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://webunica.cl/pagina-web-para-inmobiliarias/#service',
      name: 'Diseño y Desarrollo de Páginas Web para Inmobiliarias en Chile',
      serviceType: 'Desarrollo Web Inmobiliario',
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
        'Desarrollo de sitios web y plataformas con catálogo de propiedades, buscador avanzado por comuna y UF, fichas técnicas y captura de prospectos para inmobiliarias y corredoras en Chile.',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://webunica.cl/pagina-web-para-inmobiliarias/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿El sitio web permite mostrar los precios automáticamente en UF y pesos chilenos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. El sistema permite registrar el valor base en Unidades de Fomento (UF) o en pesos (CLP), mostrando al usuario la conversión referencial actualizada para facilitar la comprensión de costos tanto a compradores particulares como a inversionistas.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo asignar diferentes corredores o agentes a propiedades específicas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. La plataforma permite asociar cada inmueble a un asesor determinado, mostrando su fotografía, nombre, teléfono directo y botón de WhatsApp exclusivo dentro de la ficha correspondiente.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué ocurre si ya utilizo un CRM inmobiliario para administrar mis propiedades?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Durante la etapa de evaluación técnica revisamos la disponibilidad de APIs o mecanismos de exportación de tu CRM para planificar la sincronización del catálogo hacia el sitio web, evitando la doble carga manual de información.',
          },
        },
        {
          '@type': 'Question',
          name: '¿El sitio web inmobiliario será propiedad de mi empresa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. A diferencia de las plataformas que cobran arriendos mensuales cautivos, el desarrollo entregado por Webunica pertenece a tu empresa, con acceso total a la administración del sistema.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto tiempo toma desarrollar una página web inmobiliaria completa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un proyecto profesional con diseño personalizado, configuración de catálogo, buscador avanzado y pruebas de funcionamiento toma habitualmente entre 3 y 6 semanas, dependiendo de la cantidad de propiedades iniciales y las integraciones requeridas.',
          },
        },
      ],
    },
  ],
};

export default function Page() {
  const componentsList = [
    {
      num: '01',
      title: 'Buscador y filtros por comuna, operación y UF',
      desc: 'Permite segmentar por venta o arriendo, tipo de inmueble (casa, depto, parcela, oficina), comuna y rango de precio con selector interactivo UF/CLP.',
    },
    {
      num: '02',
      title: 'Fichas de propiedad orientadas a la decisión',
      desc: 'Galerías en WebP, desglose claro de m² útiles y totales, orientación, gastos comunes, mapa aproximado y contacto directo con el asesor a cargo.',
    },
    {
      num: '03',
      title: 'Catálogo dinámico y panel autoadministrable',
      desc: 'Publica, edita y pausa propiedades en segundos. Cambia estados a «Disponible», «Reservada» o «Vendida» sin tocar una sola línea de código.',
    },
    {
      num: '04',
      title: 'Puntos de captura omnicanal y WhatsApp directo',
      desc: 'Formularios contextuales y botón flotante de WhatsApp con mensaje precargado que identifica la propiedad específica consultada por el cliente.',
    },
    {
      num: '05',
      title: 'Estructura optimizada para posicionamiento SEO',
      desc: 'URLs limpias jerarquizadas por tipo y comuna (ej. /casas-en-venta-lo-barnechea/), schema estructurado y velocidad extrema en smartphones.',
    },
    {
      num: '06',
      title: 'Conexión con CRM y herramientas de gestión',
      desc: 'Canaliza los prospectos directamente al sistema comercial de tu inmobiliaria evitando la pérdida de leads y permitiendo seguimiento en tiempo real.',
    },
  ];

  const techComparison = [
    {
      criteria: 'Propiedad del Sitio y Código',
      template: 'Propia, pero dependiente de plugins vulnerables',
      saas: 'Arrendada (si dejas de pagar, pierdes la web)',
      webunica: '100% propia de tu empresa, sin licencias cautivas',
    },
    {
      criteria: 'Velocidad y Core Web Vitals',
      template: 'Lenta por sobrecarga de plugins genéricos',
      saas: 'Estándar y compartida entre miles de clientes',
      webunica: 'Ultrarrápida, optimizada en Next.js y React',
    },
    {
      criteria: 'Personalización de Marca',
      template: 'Rígida, limitada a lo que permite la plantilla',
      saas: 'Estructura idéntica a la de tus competidores',
      webunica: 'Diseño exclusivo en Figma adaptado a tu identidad',
    },
    {
      criteria: 'Arquitectura SEO por Comuna',
      template: 'Básica y propensa a contenido duplicado',
      saas: 'Limitada por la estructura cerrada del proveedor',
      webunica: 'Indexación avanzada por tipo de inmueble y comuna',
    },
    {
      criteria: 'Integraciones con CRM y APIs',
      template: 'Inestables ante actualizaciones de plugins',
      saas: 'Solo las conexiones predefinidas por el sistema',
      webunica: 'Conexión flexible con CRM, APIs de mapas y WhatsApp',
    },
  ];

  const faqs = [
    {
      q: '¿El sitio web permite mostrar los precios automáticamente en UF y pesos chilenos?',
      a: 'Sí. El sistema permite registrar el valor base en Unidades de Fomento (UF) o en pesos (CLP), mostrando al usuario la conversión referencial actualizada para facilitar la comprensión de costos tanto a compradores particulares como a inversionistas.',
    },
    {
      q: '¿Puedo asignar diferentes corredores o agentes a propiedades específicas?',
      a: 'Sí. La plataforma permite asociar cada inmueble a un asesor determinado, mostrando su fotografía, nombre, teléfono directo y botón de WhatsApp exclusivo dentro de la ficha correspondiente.',
    },
    {
      q: '¿Qué ocurre si ya utilizo un CRM inmobiliario para administrar mis propiedades?',
      a: 'Durante la etapa de evaluación técnica revisamos la disponibilidad de APIs o mecanismos de exportación de tu CRM para planificar la sincronización del catálogo hacia el sitio web, evitando la doble carga manual de información.',
    },
    {
      q: '¿El sitio web inmobiliario será propiedad de mi empresa?',
      a: 'Sí. A diferencia de las plataformas que cobran arriendos mensuales cautivos, el desarrollo entregado por Webunica pertenece a tu empresa, con acceso total a la administración del sistema.',
    },
    {
      q: '¿Cuánto tiempo toma desarrollar una página web inmobiliaria completa?',
      a: 'Un proyecto profesional con diseño personalizado, configuración de catálogo, buscador avanzado y pruebas de funcionamiento toma habitualmente entre 3 y 6 semanas, dependiendo de la cantidad de propiedades iniciales y las integraciones requeridas.',
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
            Plataformas Inmobiliarias Chile
          </span>
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
            Actualización 2026
          </span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05] mb-8">
          Página web para inmobiliarias:{' '}
          <span className="text-blue-500 italic font-serif lowercase font-light">
            centraliza tu inventario
          </span>{' '}
          y capta compradores
        </h1>

        <p className="text-lg lg:text-xl text-zinc-400 font-light leading-relaxed mb-8">
          Si actualmente administras tus propiedades en planillas Excel, conversaciones de WhatsApp
          o dependes exclusivamente de portales de pago, una plataforma inmobiliaria profesional
          transforma tu catálogo en un activo digital propio, administrable y preparado para
          generar consultas todos los días.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <LeadButton
            service="pagina-web-para-inmobiliarias"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-700 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)] text-center"
          >
            Quiero crear mi sitio inmobiliario
          </LeadButton>
          <Link
            href="/desarrollo-web-inmobiliario-chile"
            className="px-8 py-4 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 rounded-xl font-bold uppercase tracking-wider text-xs transition-all text-center"
          >
            Ver proceso de desarrollo
          </Link>
        </div>
      </section>

      {/* Portales vs Web Propia */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-6">
          El rol de un sitio web inmobiliario frente a los portales tradicionales
        </h2>
        <p className="text-zinc-400 font-light leading-relaxed mb-8">
          Publicar en portales de pago ayuda a generar visibilidad, pero tus propiedades compiten
          directamente en la misma pantalla con cientos de ofertas similares. Un sitio web
          inmobiliario propio construye tu propia marca, centraliza tus campañas publicitarias y
          permite que cada propiedad indexe en Google trabajando a favor de tu empresa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-white font-bold text-lg mb-2">Construcción de Activo Digital</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Cada ficha indexada y cada visita fortalece tu propio dominio web, sin depender de
              tarifas mensuales crecientes impuestas por plataformas de terceros.
            </p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-white font-bold text-lg mb-2">Entorno Exclusivo sin Competencia</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Cuando un cliente entra a tu sitio web, solo ve tus casas y departamentos, sin
              publicidad de otras corredoras ni recomendaciones que lo desvíen.
            </p>
          </div>
        </div>
      </section>

      {/* 6 Componentes Esenciales */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Los componentes esenciales de una página web inmobiliaria moderna
        </h2>

        <div className="space-y-6">
          {componentsList.map((c, idx) => (
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
            ¿Listo para digitalizar y ordenar tu catálogo inmobiliario?
          </h2>
          <p className="text-zinc-400 font-light text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Evaluamos la cantidad de propiedades que administras y diseñamos una solución a la medida
            de tu equipo comercial en Chile.
          </p>
          <LeadButton
            service="pagina-web-para-inmobiliarias"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-700 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)]"
          >
            Evaluar mi proyecto inmobiliario
          </LeadButton>
        </div>
      </section>

      {/* Tabla Comparativa de Tecnologías */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-4">
          ¿Desarrollo a medida, plantilla prediseñada o software cerrado?
        </h2>
        <p className="text-zinc-400 font-light text-base mb-8">
          Comparativa técnica para tomar una decisión informada antes de contratar el desarrollo de tu
          página web inmobiliaria.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-400">
                <th className="py-4 px-4 font-bold text-xs uppercase">Criterio</th>
                <th className="py-4 px-4 font-bold text-xs uppercase">Plantilla Básica</th>
                <th className="py-4 px-4 font-bold text-xs uppercase">Software SaaS Cerrado</th>
                <th className="py-4 px-4 font-bold text-xs uppercase text-blue-400">Webunica (Medida)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60">
              {techComparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-4 px-4 font-bold text-white text-xs">{row.criteria}</td>
                  <td className="py-4 px-4 text-zinc-400 text-xs font-light">{row.template}</td>
                  <td className="py-4 px-4 text-zinc-400 text-xs font-light">{row.saas}</td>
                  <td className="py-4 px-4 text-blue-300 text-xs font-medium bg-blue-950/20">
                    {row.webunica}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Preguntas frecuentes sobre páginas web para inmobiliarias
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
          Explora más soluciones del clúster inmobiliario
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/pagina-web-para-publicar-propiedades"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Catálogo y Carga</p>
            <p className="text-white text-sm font-semibold">Página para publicar propiedades</p>
          </Link>
          <Link
            href="/crear-portal-inmobiliario"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Multiagente y Mapas</p>
            <p className="text-white text-sm font-semibold">Crear un portal inmobiliario</p>
          </Link>
          <Link
            href="/sitios-web-para-proyectos-inmobiliarios"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Desarrolladoras</p>
            <p className="text-white text-sm font-semibold">Webs para proyectos y tipologías</p>
          </Link>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 rounded-3xl p-10 lg:p-14 text-center text-white shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
          <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight mb-4">
            Construyamos la plataforma digital de tu inmobiliaria
          </h2>
          <p className="text-blue-100 font-light text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Catálogo administrable, buscador rápido en UF, fichas optimizadas para celulares y
            captura directa de prospectos para tu equipo de ventas.
          </p>
          <LeadButton
            service="pagina-web-para-inmobiliarias"
            className="px-10 py-5 bg-white text-blue-700 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-zinc-100 transition-all shadow-xl"
          >
            Solicitar evaluación de sitio inmobiliario
          </LeadButton>
        </div>
      </section>
    </div>
  );
}
