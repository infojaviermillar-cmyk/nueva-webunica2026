import { Metadata } from 'next';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Desarrollo Web Inmobiliario en Chile: Sitios y Portales | Webunica',
  description:
    'Empresa especializada en desarrollo web inmobiliario en Chile. Diseñamos sitios, catálogos y portales para corredoras e inmobiliarias con buscador por UF y conexión CRM.',
  alternates: {
    canonical: 'https://webunica.cl/desarrollo-web-inmobiliario-chile',
  },
  openGraph: {
    title: 'Desarrollo Web Inmobiliario en Chile: Sitios y Portales | Webunica',
    description:
      'Ingeniería, diseño y arquitectura web para el sector inmobiliario chileno. Catálogos autoadministrables, buscadores avanzados y captura de leads.',
    url: 'https://webunica.cl/desarrollo-web-inmobiliario-chile',
    siteName: 'Webunica',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://webunica.cl/desarrollo-web-inmobiliario-chile/#webpage',
      url: 'https://webunica.cl/desarrollo-web-inmobiliario-chile/',
      name: 'Desarrollo Web Inmobiliario en Chile: Sitios y Portales | Webunica',
      description:
        'Empresa especializada en desarrollo web inmobiliario en Chile. Diseñamos sitios, catálogos y portales para corredoras e inmobiliarias con buscador por UF y conexión CRM.',
      inLanguage: 'es-CL',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://webunica.cl/#website',
        url: 'https://webunica.cl/',
        name: 'Webunica',
      },
      breadcrumb: {
        '@id': 'https://webunica.cl/desarrollo-web-inmobiliario-chile/#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://webunica.cl/desarrollo-web-inmobiliario-chile/#breadcrumb',
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
          name: 'Desarrollo Web Inmobiliario Chile',
          item: 'https://webunica.cl/desarrollo-web-inmobiliario-chile/',
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
      '@id': 'https://webunica.cl/desarrollo-web-inmobiliario-chile/#service',
      name: 'Servicio de Desarrollo Web Inmobiliario en Chile',
      serviceType: 'Desarrollo de Software y Sitios Inmobiliarios',
      provider: {
        '@type': 'Organization',
        '@id': 'https://webunica.cl/#organization',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Chile',
      },
      description:
        'Servicio integral de consultoría, diseño UX/UI, programación y soporte técnico para el desarrollo de sitios web, catálogos administrables y portales de propiedades en Chile.',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios Inmobiliarios Digitales',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Sitio Web para Corredoras e Inmobiliarias',
              description: 'Catálogo dinámico autoadministrable con buscador por comuna y valores en UF.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Web para Proyectos y Desarrolladoras',
              description: 'Plataforma de venta para proyectos nuevos con tipologías, plantas interactivas y cotizador.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Portal Inmobiliario Multiagente',
              description: 'Plataforma escalable con búsqueda en mapas, perfiles de corredores y conexión API.',
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://webunica.cl/desarrollo-web-inmobiliario-chile/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Trabajan con inmobiliarias y corredoras fuera de Santiago?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Desarrollamos proyectos para empresas en todo Chile (Antofagasta, La Serena, Viña del Mar, Concepción, Puerto Montt, entre otras) mediante coordinación remota ágil y transparente.',
          },
        },
        {
          '@type': 'Question',
          name: '¿El valor del desarrollo incluye la propiedad total del sitio?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. En Webunica no cobramos comisiones sobre ventas ni arriendos mensuales obligatorios. Una vez completado el proyecto, tu empresa es la dueña absoluta de la plataforma y el código.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Pueden migrar las propiedades desde nuestro sitio web antiguo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Si cuentas con una base de datos o planilla estructurada con tus propiedades y fotografías actuales, podemos realizar una importación inicial para facilitar el lanzamiento.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué soporte entregan tras el lanzamiento del sitio web?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Todos nuestros proyectos cuentan con garantía post-lanzamiento para resolver incidencias técnicas y ofrecemos planes mensuales opcionales de mantención, respaldo y optimización continua.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto tiempo demora el desarrollo completo de un sitio web inmobiliario?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un proyecto inmobiliario integral con diseño personalizado, panel autoadministrable, buscador avanzado y pruebas toma habitualmente entre 3 y 6 semanas de trabajo.',
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
      title: 'Levantamiento y Arquitectura de Datos',
      desc: 'Analizamos el modelo de negocio (corretaje, proyectos, arriendos), inventario proyectado y jerarquía de comunas antes de iniciar el diseño.',
    },
    {
      step: '02',
      title: 'Diseño UX/UI en Figma',
      desc: 'Maquetamos la experiencia de búsqueda, fichas de propiedad y cotizadores pensando en máxima fluidez y retención en dispositivos móviles.',
    },
    {
      step: '03',
      title: 'Desarrollo en Next.js y React',
      desc: 'Programamos con tecnologías web modernas, garantizando tiempos de carga inferiores a 1,5 segundos y código limpio sin plugins obsoletos.',
    },
    {
      step: '04',
      title: 'Panel de Administración a Medida',
      desc: 'Implementamos el panel autoadministrable en español para que tu equipo gestione propiedades, precios en UF y estados sin depender de técnicos.',
    },
    {
      step: '05',
      title: 'Integraciones CRM, Mapas y WhatsApp',
      desc: 'Conectamos mapas interactivos (Mapbox/Google Maps), botones de WhatsApp con mensaje contextual y canalización de leads al CRM de tu empresa.',
    },
    {
      step: '06',
      title: 'SEO Técnico Inmobiliario y Schema',
      desc: 'Estructuramos URLs amigables por comuna y operación, sitemap XML dinámico y marcado Schema.org para máxima visibilidad en Google.',
    },
    {
      step: '07',
      title: 'Control de Calidad (QA) y Testing',
      desc: 'Pruebas rigurosas de velocidad en conexiones 4G/5G, validación de formularios en iOS/Android y verificación de filtros cruzados.',
    },
    {
      step: '08',
      title: 'Go Live, Capacitación y Transferencia',
      desc: 'Lanzamiento en tu dominio oficial, sesión de capacitación grabada para tu equipo y entrega total de accesos y propiedad del sistema.',
    },
  ];

  const auditQuestions = [
    {
      q: '1. ¿Cómo se administrarán las propiedades?',
      a: 'A través de un panel intuitivo en español donde cualquier miembro del equipo puede subir fotos, editar precios en UF y cambiar estados en menos de 3 minutos.',
    },
    {
      q: '2. ¿Quién será el dueño del código y la base de datos?',
      a: 'Tu empresa es la dueña 100% absoluta de la plataforma y los datos, sin contratos de arriendo cautivos ni mensualidades obligatorias.',
    },
    {
      q: '3. ¿Cómo se manejará el SEO para posicionar en Google?',
      a: 'Con arquitectura jerárquica limpia por comuna, datos estructurados JSON-LD, sitemap dinámico y tiempos de carga bajo 2 segundos.',
    },
    {
      q: '4. ¿Puede integrarse con nuestro CRM inmobiliario?',
      a: 'Evaluamos la API de tu CRM para canalizar los leads directamente y evitar la doble digitación manual por parte de los ejecutivos.',
    },
    {
      q: '5. ¿Qué ocurre con las propiedades vendidas o arrendadas?',
      a: 'El sistema permite conservarlas con la etiqueta «Vendida» mostrando inmuebles similares para no perder el tráfico de Google, o aplicar redirecciones 301.',
    },
    {
      q: '6. ¿Cómo se administra el inventario si manejamos cientos de inmuebles?',
      a: 'Mediante bases de datos relacionales indexadas que procesan miles de registros sin ralentizar las búsquedas ni colapsar el servidor.',
    },
    {
      q: '7. ¿El sistema puede crecer si abrimos nuevas sucursales?',
      a: 'Sí, gracias a una arquitectura modular que permite sumar roles de agentes, nuevas comunas o cotizadores avanzados sin rehacer el sitio.',
    },
    {
      q: '8. ¿Quién mantiene y actualiza la plataforma técnica?',
      a: 'Entregamos garantía post-lanzamiento y planes de soporte opcionales y transparentes, sin obligaciones forzosas de permanencia.',
    },
    {
      q: '9. ¿Cómo se reciben y notifican los leads comerciales?',
      a: 'Con notificación inmediata por correo y WhatsApp al asesor responsable de la propiedad, además de registro en la base de datos central.',
    },
    {
      q: '10. ¿Podemos medir conversiones reales en Google y Meta Ads?',
      a: 'Sí, mediante Google Analytics 4 y píxeles de conversión configurados para medir clics en WhatsApp, llamadas y formularios enviados.',
    },
  ];

  const faqs = [
    {
      q: '¿Trabajan con inmobiliarias y corredoras fuera de Santiago?',
      a: 'Sí. Desarrollamos proyectos para empresas en todo Chile (Antofagasta, La Serena, Viña del Mar, Concepción, Puerto Montt, entre otras) mediante coordinación remota ágil y transparente.',
    },
    {
      q: '¿El valor del desarrollo incluye la propiedad total del sitio?',
      a: 'Sí. En Webunica no cobramos comisiones sobre ventas ni arriendos mensuales obligatorios. Una vez completado el proyecto, tu empresa es la dueña absoluta de la plataforma y el código.',
    },
    {
      q: '¿Pueden migrar las propiedades desde nuestro sitio web antiguo?',
      a: 'Sí. Si cuentas con una base de datos o planilla estructurada con tus propiedades y fotografías actuales, podemos realizar una importación inicial para facilitar el lanzamiento.',
    },
    {
      q: '¿Qué soporte entregan tras el lanzamiento del sitio web?',
      a: 'Todos nuestros proyectos cuentan con garantía post-lanzamiento para resolver incidencias técnicas y ofrecemos planes mensuales opcionales de mantención, respaldo y optimización continua.',
    },
    {
      q: '¿Cuánto tiempo demora el desarrollo completo de un sitio web inmobiliario?',
      a: 'Un proyecto inmobiliario integral con diseño personalizado, panel autoadministrable, buscador avanzado y pruebas toma habitualmente entre 3 y 6 semanas de trabajo.',
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
            Servicio Especializado Chile
          </span>
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
            Ingeniería Web Inmobiliaria
          </span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05] mb-8">
          Desarrollo web inmobiliario en Chile:{' '}
          <span className="text-blue-500 italic font-serif lowercase font-light">
            plataformas digitales
          </span>{' '}
          diseñadas para captar y vender
        </h1>

        <p className="text-lg lg:text-xl text-zinc-400 font-light leading-relaxed mb-8">
          Diseñamos y programamos sitios web, catálogos administrables y portales de propiedades
          para inmobiliarias, corredoras y desarrolladoras en Chile. Rendimiento extremo en Next.js,
          buscador por UF y comunas, y conexión con tus canales de venta.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <LeadButton
            service="desarrollo-web-inmobiliario-chile"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-700 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)] text-center"
          >
            Solicitar evaluación de proyecto inmobiliario
          </LeadButton>
          <a
            href="https://wa.me/56900000000?text=Hola%20Webunica,%20me%20gustar%C3%ADa%20cotizar%20el%20desarrollo%20de%20un%20sitio%20web%20inmobiliario"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 rounded-xl font-bold uppercase tracking-wider text-xs transition-all text-center flex items-center justify-center gap-2"
          >
            <span>💬</span> Hablar por WhatsApp
          </a>
        </div>
      </section>

      {/* 8 Fases del Servicio */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-4">
          Las 8 fases del servicio de desarrollo web inmobiliario
        </h2>
        <p className="text-zinc-400 font-light text-base mb-8">
          Metodología transparente y estructurada para garantizar la entrega de tu plataforma en los
          plazos comprometidos.
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

      {/* 10 Preguntas de Auditoría */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-4">
          Qué preguntar antes de contratar el desarrollo de un sitio inmobiliario
        </h2>
        <p className="text-zinc-400 font-light text-base mb-8">
          Guía de auditoría técnica: 10 preguntas clave que debes hacer a cualquier agencia o
          desarrollador antes de firmar un contrato.
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
            ¿Quieres cotizar tu plataforma inmobiliaria?
          </h2>
          <p className="text-zinc-400 font-light text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Conversemos sobre los requerimientos de tu empresa. Te entregamos una propuesta con
            alcance detallado y presupuesto cerrado en 24 horas hábiles.
          </p>
          <LeadButton
            service="desarrollo-web-inmobiliario-chile"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-700 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)]"
          >
            Cuéntanos cómo administras actualmente tus propiedades
          </LeadButton>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Preguntas frecuentes sobre nuestro servicio en Chile
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
          Navega por las secciones del clúster inmobiliario
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/pagina-web-para-inmobiliarias"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Guía Central</p>
            <p className="text-white text-sm font-semibold">Página web para inmobiliarias</p>
          </Link>
          <Link
            href="/pagina-web-para-publicar-propiedades"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Catálogo</p>
            <p className="text-white text-sm font-semibold">Publicar y administrar propiedades</p>
          </Link>
          <Link
            href="/sitios-web-para-proyectos-inmobiliarios"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Desarrolladoras</p>
            <p className="text-white text-sm font-semibold">Webs para proyectos y condominios</p>
          </Link>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 rounded-3xl p-10 lg:p-14 text-center text-white shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
          <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight mb-4">
            Hablemos de tu proyecto inmobiliario
          </h2>
          <p className="text-blue-100 font-light text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Diseñamos y programamos plataformas web inmobiliarias que aumentan tus consultas, ordenan
            tu catálogo y potencian las ventas de tu equipo en Chile.
          </p>
          <LeadButton
            service="desarrollo-web-inmobiliario-chile"
            className="px-10 py-5 bg-white text-blue-700 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-zinc-100 transition-all shadow-xl"
          >
            Cotizar desarrollo web inmobiliario
          </LeadButton>
        </div>
      </section>
    </div>
  );
}
