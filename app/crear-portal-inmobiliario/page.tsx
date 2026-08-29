import { Metadata } from 'next';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Crear Portal Inmobiliario: Desarrollo de Plataformas de Propiedades | Webunica',
  description:
    'Desarrollo de portales inmobiliarios a medida en Chile. Búsqueda en mapas, perfiles multiagente, filtros avanzados, conexión API y arquitectura escalable.',
  alternates: {
    canonical: 'https://webunica.cl/crear-portal-inmobiliario',
  },
  openGraph: {
    title: 'Crear Portal Inmobiliario: Desarrollo de Plataformas de Propiedades',
    description:
      'Ingeniería y desarrollo para portales inmobiliarios en Chile: búsqueda en mapa, roles de agentes, gestión masiva de propiedades y enrutamiento inteligente de leads.',
    url: 'https://webunica.cl/crear-portal-inmobiliario',
    siteName: 'Webunica',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://webunica.cl/crear-portal-inmobiliario/#webpage',
      url: 'https://webunica.cl/crear-portal-inmobiliario/',
      name: 'Crear Portal Inmobiliario: Desarrollo de Plataformas de Propiedades | Webunica',
      description:
        'Desarrollo de portales inmobiliarios a medida en Chile. Búsqueda en mapas, perfiles multiagente, filtros avanzados, conexión API y arquitectura escalable.',
      inLanguage: 'es-CL',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://webunica.cl/#website',
        url: 'https://webunica.cl/',
        name: 'Webunica',
      },
      breadcrumb: {
        '@id': 'https://webunica.cl/crear-portal-inmobiliario/#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://webunica.cl/crear-portal-inmobiliario/#breadcrumb',
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
          name: 'Crear Portal Inmobiliario',
          item: 'https://webunica.cl/crear-portal-inmobiliario/',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://webunica.cl/crear-portal-inmobiliario/#service',
      name: 'Desarrollo de Portales y Plataformas Inmobiliarias',
      serviceType: 'Ingeniería de Software Inmobiliario',
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
        'Ingeniería, diseño y desarrollo de portales inmobiliarios de alta escala en Chile, con búsqueda geoespacial en mapas, paneles multiagente, enrutamiento de leads y arquitectura Next.js.',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://webunica.cl/crear-portal-inmobiliario/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué tecnología recomiendan para construir un portal inmobiliario de alto tráfico?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Recomendamos una arquitectura moderna basada en Next.js para el frontend combinada con bases de datos relacionales PostgreSQL y almacenamiento cloud distribuido para garantizar máxima velocidad y optimización SEO.',
          },
        },
        {
          '@type': 'Question',
          name: '¿El portal permite que múltiples corredores se registren y publiquen de forma independiente?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. El sistema puede configurarse con roles jerárquicos para que cada corredor o sucursal administre su propia cartera de propiedades y reciba sus propios prospectos.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Se pueden integrar mapas interactivos con geolocalización precisa?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Integramos soluciones avanzadas como Mapbox o Google Maps API con soporte para búsqueda por radio, polígonos y clusters de densidad en tiempo real.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Es posible conectar el portal con sistemas CRM externos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Desarrollamos la plataforma con arquitectura basada en APIs para permitir la sincronización bidireccional de inventario y prospectos con CRMs y ERPs inmobiliarios.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Quién es el dueño del código fuente y los datos del portal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Tu empresa es la propietaria exclusiva del código fuente y de la base de datos de propiedades y clientes, sin contratos de arriendo forzosos ni licencias cautivas.',
          },
        },
      ],
    },
  ],
};

export default function Page() {
  const modules = [
    {
      title: 'Sistema Multi-usuario y Roles Jerárquicos',
      desc: 'Perfiles diferenciados para Super Administrador, Oficinas asociadas, Corredores independientes y Usuarios finales con panel de favoritos y alertas.',
    },
    {
      title: 'Búsqueda Geoespacial en Mapas Interactivos',
      desc: 'Integración con Mapbox o Google Maps con clusters de propiedades, búsqueda por radio de kilómetros y actualización dinámica al mover el mapa.',
    },
    {
      title: 'Paneles de Gestión por Agente',
      desc: 'Cada corredor administra su inventario, revisa estadísticas de visitas, clics en WhatsApp y gestiona su bandeja exclusiva de prospectos.',
    },
    {
      title: 'Favoritos, Comparador y Alertas de Precio',
      desc: 'Los compradores pueden guardar propiedades, comparar hasta 4 inmuebles en paralelo y recibir alertas por correo cuando baje el precio en UF.',
    },
    {
      title: 'Enrutamiento Automatizado de Leads',
      desc: 'Notificación instantánea por WhatsApp y correo al agente asignado a la propiedad, con registro centralizado y trazabilidad comercial.',
    },
    {
      title: 'Arquitectura API para Sincronización Masiva',
      desc: 'Endpoints REST y feeds XML para importar o exportar inventario desde y hacia CRMs inmobiliarios y sistemas de tasación.',
    },
  ];

  const faqs = [
    {
      q: '¿Qué tecnología recomiendan para construir un portal inmobiliario de alto tráfico?',
      a: 'Recomendamos una arquitectura moderna basada en Next.js para el frontend combinada con bases de datos relacionales PostgreSQL y almacenamiento cloud distribuido para garantizar máxima velocidad y optimización SEO.',
    },
    {
      q: '¿El portal permite que múltiples corredores se registren y publiquen de forma independiente?',
      a: 'Sí. El sistema puede configurarse con roles jerárquicos para que cada corredor o sucursal administre su propia cartera de propiedades y reciba sus propios prospectos.',
    },
    {
      q: '¿Se pueden integrar mapas interactivos con geolocalización precisa?',
      a: 'Sí. Integramos soluciones avanzadas como Mapbox o Google Maps API con soporte para búsqueda por radio, polígonos y clusters de densidad en tiempo real.',
    },
    {
      q: '¿Es posible conectar el portal con sistemas CRM externos?',
      a: 'Sí. Desarrollamos la plataforma con arquitectura basada en APIs para permitir la sincronización bidireccional de inventario y prospectos con CRMs y ERPs inmobiliarios.',
    },
    {
      q: '¿Quién es el dueño del código fuente y los datos del portal?',
      a: 'Tu empresa es la propietaria exclusiva del código fuente y de la base de datos de propiedades y clientes, sin contratos de arriendo forzosos ni licencias cautivas.',
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
            Ingeniería de Software Inmobiliario
          </span>
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
            Escala Masiva
          </span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05] mb-8">
          Crear un portal inmobiliario:{' '}
          <span className="text-blue-500 italic font-serif lowercase font-light">
            arquitectura y desarrollo
          </span>{' '}
          de plataformas a escala
        </h1>

        <p className="text-lg lg:text-xl text-zinc-400 font-light leading-relaxed mb-8">
          Diseñamos y programamos portales y marketplaces de propiedades capaces de procesar miles de
          publicaciones, soportar redes de agentes en simultáneo y ofrecer búsquedas geoespaciales
          fluidas en mapas interactivos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <LeadButton
            service="crear-portal-inmobiliario"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-700 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)] text-center"
          >
            Evaluar mi portal inmobiliario
          </LeadButton>
          <Link
            href="/desarrollo-web-inmobiliario-chile"
            className="px-8 py-4 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 rounded-xl font-bold uppercase tracking-wider text-xs transition-all text-center"
          >
            Consultar con un especialista
          </Link>
        </div>
      </section>

      {/* Diferencia Sitio vs Portal */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-6">
          La diferencia entre un sitio web inmobiliario y un portal de propiedades
        </h2>
        <p className="text-zinc-400 font-light leading-relaxed mb-8">
          Un sitio corporativo atiende a una sola empresa con catálogo acotado. Un portal
          inmobiliario es una plataforma tecnológica multi-inquilino (*multi-tenant*) con roles de
          agente, búsqueda geoespacial masiva, reglas avanzadas de negocio y capacidad de sincronizar
          inventario con múltiples fuentes vía API sin degradar la velocidad.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-white font-bold text-lg mb-2">Escalabilidad de Base de Datos</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Consultas optimizadas con índices geoespaciales que responden en menos de 50 milisegundos
              incluso con más de 10.000 propiedades activas.
            </p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-white font-bold text-lg mb-2">Búsqueda en Mapa sin Recargas</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Mueve el mapa y las propiedades se actualizan en vivo con clusters visuales, tal como
              las aplicaciones líderes de la industria.
            </p>
          </div>
        </div>
      </section>

      {/* Módulos de la Plataforma */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Módulos indispensables en una plataforma inmobiliaria moderna
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((m, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
              <h3 className="text-blue-400 font-bold text-lg mb-2">{m.title}</h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Intermedio */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />
          <h2 className="text-2xl lg:text-4xl font-black text-white uppercase tracking-tight mb-4">
            ¿Planificando un portal inmobiliario o red de agentes?
          </h2>
          <p className="text-zinc-400 font-light text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Analizamos tu modelo de negocio y diseñamos la arquitectura técnica para que tu
            plataforma soporte miles de usuarios con total estabilidad.
          </p>
          <LeadButton
            service="crear-portal-inmobiliario"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-700 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)]"
          >
            Solicitar consultoría técnica para mi portal
          </LeadButton>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Preguntas frecuentes sobre desarrollo de portales inmobiliarios
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
          Soluciones relacionadas del clúster inmobiliario
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/pagina-web-para-inmobiliarias"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Sitio Corporativo</p>
            <p className="text-white text-sm font-semibold">Página web para inmobiliarias</p>
          </Link>
          <Link
            href="/sitios-web-para-proyectos-inmobiliarios"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Desarrolladoras</p>
            <p className="text-white text-sm font-semibold">Web para proyectos y condominios</p>
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
            Construye tu portal inmobiliario sobre tecnología propia
          </h2>
          <p className="text-blue-100 font-light text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Plataformas modernas, rápidas y escalables con propiedad total del código y de tu base de
            datos de propiedades y clientes.
          </p>
          <LeadButton
            service="crear-portal-inmobiliario"
            className="px-10 py-5 bg-white text-blue-700 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-zinc-100 transition-all shadow-xl"
          >
            Iniciar proyecto de portal inmobiliario
          </LeadButton>
        </div>
      </section>
    </div>
  );
}
