import { Metadata } from 'next';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Sitios Web para Proyectos Inmobiliarios: Tipologías, Cotizador y Venta | Webunica',
  description:
    'Diseño y desarrollo web para proyectos inmobiliarios en Chile. Fichas de tipologías, plantas, cotizador online, tour virtual y conexión directa con tu sala de ventas.',
  alternates: {
    canonical: 'https://webunica.cl/sitios-web-para-proyectos-inmobiliarios',
  },
  openGraph: {
    title: 'Sitios Web para Proyectos Inmobiliarios: Tipologías, Cotizador y Venta',
    description:
      'Presenta tus proyectos en blanco, verde o entrega inmediata con tipologías claras, planos interactivos, cotización en UF y captura de prospectos para tu equipo comercial.',
    url: 'https://webunica.cl/sitios-web-para-proyectos-inmobiliarios',
    siteName: 'Webunica',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://webunica.cl/sitios-web-para-proyectos-inmobiliarios/#webpage',
      url: 'https://webunica.cl/sitios-web-para-proyectos-inmobiliarios/',
      name: 'Sitios Web para Proyectos Inmobiliarios: Tipologías, Cotizador y Venta | Webunica',
      description:
        'Diseño y desarrollo web para proyectos inmobiliarios en Chile. Fichas de tipologías, plantas, cotizador online, tour virtual y conexión directa con tu sala de ventas.',
      inLanguage: 'es-CL',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://webunica.cl/#website',
        url: 'https://webunica.cl/',
        name: 'Webunica',
      },
      breadcrumb: {
        '@id': 'https://webunica.cl/sitios-web-para-proyectos-inmobiliarios/#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://webunica.cl/sitios-web-para-proyectos-inmobiliarios/#breadcrumb',
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
          name: 'Páginas Inmobiliarias',
          item: 'https://webunica.cl/pagina-web-para-inmobiliarias/',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Sitios para Proyectos Inmobiliarios',
          item: 'https://webunica.cl/sitios-web-para-proyectos-inmobiliarios/',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://webunica.cl/sitios-web-para-proyectos-inmobiliarios/#service',
      name: 'Desarrollo Web para Proyectos Inmobiliarios',
      serviceType: 'Diseño y Desarrollo de Plataformas de Venta Inmobiliaria',
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
        'Desarrollo de páginas y plataformas web para comercialización de proyectos inmobiliarios en blanco, verde o entrega inmediata en Chile, con visualizadores de tipologías y cotizador online.',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://webunica.cl/sitios-web-para-proyectos-inmobiliarios/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿El sitio web permite actualizar el estado de las unidades cuando se venden?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. El sistema permite marcar tipologías completas o unidades específicas como Últimas Unidades, Agotada o En Promesa, entregando una señal de urgencia comercial real a los visitantes.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Se pueden gestionar múltiples proyectos dentro de un mismo sitio web inmobiliario?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Desarrollamos tanto sitios exclusivos para un proyecto individual como plataformas corporativas que agrupan toda la cartera de proyectos de la inmobiliaria filtrables por comuna y estado de avance.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cómo se visualizan las plantas arquitectónicas en teléfonos móviles?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Implementamos visualizadores táctiles con soporte para gestos de zoom y desplazamiento, permitiendo que el usuario explore cada recinto con total nitidez sin tener que descargar archivos PDF externos.',
          },
        },
        {
          '@type': 'Question',
          name: '¿El cotizador web realiza una aprobación de crédito real?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. El cotizador web cumple un rol de simulación comercial referencial para que el interesado evalúe el pie y la cuota estimada. La evaluación financiera formal queda en manos del ejecutivo de ventas en la siguiente etapa.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto demora el desarrollo de una web para un proyecto inmobiliario?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'El desarrollo de un sitio web para proyecto con diseño personalizado, visualizador de tipologías y cotizador toma habitualmente entre 2 y 4 semanas, siempre que se cuente con los renders, planos y textos base del proyecto.',
          },
        },
      ],
    },
  ],
};

export default function Page() {
  const projectModules = [
    {
      num: '01',
      title: 'Presentación del Proyecto y Renders 3D',
      desc: 'Cabecera de alto impacto con estado comercial («En Blanco», «En Verde», «Entrega Inmediata»), ubicación y precio «Desde UF X.XXX».',
    },
    {
      num: '02',
      title: 'Módulo de Tipologías y Plantas Interactivas',
      desc: 'Visualizador de planos arquitectónicos en alta resolución, memoria de terminaciones, m² útiles y terrazas con zoom táctil optimizado para móviles.',
    },
    {
      num: '03',
      title: 'Cotizador Online con Simulación de Pie',
      desc: 'Permite al comprador elegir tipología, simular el pago del pie en cuotas hasta la entrega y enviar una pre-cotización formal a la sala de ventas.',
    },
    {
      num: '04',
      title: 'Máster Plan y Espacios Comunes',
      desc: 'Muestra piscinas, quinchos, gimnasios, bicicleteros y accesos para transmitir la experiencia de vida completa del condominio o edificio.',
    },
    {
      num: '05',
      title: 'Departamento Piloto 360° y Tour Virtual',
      desc: 'Recorridos virtuales interactivos que permiten caminar por el piloto decorado desde cualquier lugar, ideal para inversionistas o compradores de regiones.',
    },
    {
      num: '06',
      title: 'Agendamiento y Conexión con Sala de Ventas',
      desc: 'Integración con Waze y Google Maps para indicaciones de ruta directa y sistema de agendamiento de visitas presenciales con ejecutivos.',
    },
  ];

  const stages = [
    {
      stage: 'Venta en Blanco (Preventa)',
      focus: 'Precios de lanzamiento más bajos y mayor plazo de cuotas para el pie.',
      conversion: 'Formulario de «Preventa Exclusiva para Inversionistas».',
    },
    {
      stage: 'Venta en Verde (Construcción)',
      focus: 'Avance de obra documentado, elección de pisos y orientaciones.',
      conversion: 'Cotizador web con simulación de cuotas de pie hasta la entrega.',
    },
    {
      stage: 'Entrega Inmediata (Recepción)',
      focus: 'Disponibilidad inmediata de llaves y arriendo garantizado para renta.',
      conversion: 'Agendamiento directo de visita física a pilotos disponibles.',
    },
  ];

  const faqs = [
    {
      q: '¿El sitio web permite actualizar el estado de las unidades cuando se venden?',
      a: 'Sí. El sistema permite marcar tipologías completas o unidades específicas como Últimas Unidades, Agotada o En Promesa, entregando una señal de urgencia comercial real a los visitantes.',
    },
    {
      q: '¿Se pueden gestionar múltiples proyectos dentro de un mismo sitio web inmobiliario?',
      a: 'Sí. Desarrollamos tanto sitios exclusivos para un proyecto individual como plataformas corporativas que agrupan toda la cartera de proyectos de la inmobiliaria filtrables por comuna y estado de avance.',
    },
    {
      q: '¿Cómo se visualizan las plantas arquitectónicas en teléfonos móviles?',
      a: 'Implementamos visualizadores táctiles con soporte para gestos de zoom y desplazamiento, permitiendo que el usuario explore cada recinto con total nitidez sin tener que descargar archivos PDF externos.',
    },
    {
      q: '¿El cotizador web realiza una aprobación de crédito real?',
      a: 'No. El cotizador web cumple un rol de simulación comercial referencial para que el interesado evalúe el pie y la cuota estimada. La evaluación financiera formal queda en manos del ejecutivo de ventas en la siguiente etapa.',
    },
    {
      q: '¿Cuánto demora el desarrollo de una web para un proyecto inmobiliario?',
      a: 'El desarrollo de un sitio web para proyecto con diseño personalizado, visualizador de tipologías y cotizador toma habitualmente entre 2 y 4 semanas, siempre que se cuente con los renders, planos y textos base del proyecto.',
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
            Desarrolladoras & Constructoras
          </span>
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
            Chile
          </span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05] mb-8">
          Sitios web para proyectos inmobiliarios:{' '}
          <span className="text-blue-500 italic font-serif lowercase font-light">
            plataformas de venta
          </span>{' '}
          para edificios y condominios
        </h1>

        <p className="text-lg lg:text-xl text-zinc-400 font-light leading-relaxed mb-8">
          Presenta tus proyectos en blanco, verde o entrega inmediata con tipologías claras,
          visualizador de plantas interactivo, cotizador de pie en UF y captura directa de prospectos
          para tu sala de ventas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <LeadButton
            service="sitios-web-para-proyectos-inmobiliarios"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-700 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)] text-center"
          >
            Necesito una web para mi proyecto inmobiliario
          </LeadButton>
          <Link
            href="/desarrollo-web-inmobiliario-chile"
            className="px-8 py-4 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 rounded-xl font-bold uppercase tracking-wider text-xs transition-all text-center"
          >
            Ver proceso de trabajo
          </Link>
        </div>
      </section>

      {/* Por qué proyectos es diferente */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-6">
          Por qué un proyecto inmobiliario requiere una arquitectura web diferente
        </h2>
        <p className="text-zinc-400 font-light leading-relaxed mb-8">
          Un proyecto nuevo no es una propiedad aislada; es un ecosistema con múltiples modelos de
          departamento o casas (1D, 2D, 3D), plantas arquitectónicas, orientación solar, cotización
          en cuotas de pie y conexión con la sala de ventas física. Una web bien estructurada
          convence tanto a familias que buscan su hogar como a inversionistas inmobiliarios.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-white font-bold text-lg mb-2">Visualización Táctil de Plantas</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Los planos se exploran directamente en la pantalla del celular con zoom táctil nítido,
              sin descargas pesadas de PDFs.
            </p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-white font-bold text-lg mb-2">Cotizador con Valor en UF</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              El comprador simula el pie en cuotas mensuales según el plazo de entrega y envía la
              pre-cotización completa al ejecutivo de ventas.
            </p>
          </div>
        </div>
      </section>

      {/* 6 Módulos de Proyecto */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Módulos clave de un sitio web para proyectos inmobiliarios
        </h2>

        <div className="space-y-6">
          {projectModules.map((m, idx) => (
            <div
              key={idx}
              className="flex gap-6 items-start bg-zinc-900 border border-zinc-800 p-6 rounded-2xl"
            >
              <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center font-black text-lg shrink-0">
                {m.num}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{m.title}</h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Etapas del Proyecto */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-4">
          Adaptación según la etapa comercial del proyecto
        </h2>
        <p className="text-zinc-400 font-light text-base mb-8">
          El sitio web evoluciona dinámicamente junto con los hitos de construcción y ventas de tu
          desarrollo inmobiliario.
        </p>

        <div className="space-y-4">
          {stages.map((st, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
              <h3 className="text-blue-400 font-bold text-lg mb-2">{st.stage}</h3>
              <p className="text-zinc-300 font-light text-sm mb-2"><strong className="text-white font-medium">Foco comercial:</strong> {st.focus}</p>
              <p className="text-zinc-400 font-light text-sm"><strong className="text-white font-medium">Acción principal:</strong> {st.conversion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Intermedio */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />
          <h2 className="text-2xl lg:text-4xl font-black text-white uppercase tracking-tight mb-4">
            ¿Preparando el lanzamiento de un nuevo proyecto?
          </h2>
          <p className="text-zinc-400 font-light text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Diseñamos la plataforma de ventas digital para acelerar las cotizaciones de tu sala de
            ventas desde el primer día de preventa.
          </p>
          <LeadButton
            service="sitios-web-para-proyectos-inmobiliarios"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-700 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)]"
          >
            Cotizar web para mi proyecto inmobiliario
          </LeadButton>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Preguntas frecuentes sobre webs para proyectos inmobiliarios
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
          Más soluciones para empresas inmobiliarias
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/pagina-web-para-inmobiliarias"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Catálogo Corporativo</p>
            <p className="text-white text-sm font-semibold">Páginas web para inmobiliarias</p>
          </Link>
          <Link
            href="/crear-portal-inmobiliario"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Gran Escala</p>
            <p className="text-white text-sm font-semibold">Crear portal inmobiliario</p>
          </Link>
          <Link
            href="/desarrollo-web-inmobiliario-chile"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Servicio Webunica</p>
            <p className="text-white text-sm font-semibold">Desarrollo web inmobiliario Chile</p>
          </Link>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 rounded-3xl p-10 lg:p-14 text-center text-white shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
          <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight mb-4">
            Impulsa las ventas de tu proyecto inmobiliario
          </h2>
          <p className="text-blue-100 font-light text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Plataformas interactivas para venta en blanco, verde o entrega inmediata con tipologías,
            planos de alta resolución y cotizador online en Chile.
          </p>
          <LeadButton
            service="sitios-web-para-proyectos-inmobiliarios"
            className="px-10 py-5 bg-white text-blue-700 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-zinc-100 transition-all shadow-xl"
          >
            Solicitar propuesta para proyecto inmobiliario
          </LeadButton>
        </div>
      </section>
    </div>
  );
}
