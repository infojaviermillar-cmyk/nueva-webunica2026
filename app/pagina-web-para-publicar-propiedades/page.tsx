import { Metadata } from 'next';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Página Web para Publicar Propiedades: Catálogo y Gestión Online | Webunica',
  description:
    '¿Quieres publicar tus propiedades en tu propia web? Descubre cómo transformar tu inventario en un catálogo online fácil de administrar, actualizar y compartir.',
  alternates: {
    canonical: 'https://webunica.cl/pagina-web-para-publicar-propiedades',
  },
  openGraph: {
    title: 'Página Web para Publicar Propiedades: Catálogo y Gestión Online',
    description:
      'Pasa de las planillas Excel y mensajes de WhatsApp a un catálogo web profesional. Aprende cómo publicar casas, departamentos y terrenos con control total de tu inventario.',
    url: 'https://webunica.cl/pagina-web-para-publicar-propiedades',
    siteName: 'Webunica',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://webunica.cl/pagina-web-para-publicar-propiedades/#webpage',
      url: 'https://webunica.cl/pagina-web-para-publicar-propiedades/',
      name: 'Página Web para Publicar Propiedades: Catálogo y Gestión Online | Webunica',
      description:
        '¿Quieres publicar tus propiedades en tu propia web? Descubre cómo transformar tu inventario en un catálogo online fácil de administrar, actualizar y compartir.',
      inLanguage: 'es-CL',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://webunica.cl/#website',
        url: 'https://webunica.cl/',
        name: 'Webunica',
      },
      breadcrumb: {
        '@id': 'https://webunica.cl/pagina-web-para-publicar-propiedades/#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://webunica.cl/pagina-web-para-publicar-propiedades/#breadcrumb',
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
          name: 'Publicar Propiedades',
          item: 'https://webunica.cl/pagina-web-para-publicar-propiedades/',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://webunica.cl/pagina-web-para-publicar-propiedades/#service',
      name: 'Sistema Web para Publicar y Administrar Propiedades',
      serviceType: 'Catálogo Inmobiliario Autoadministrable',
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
        'Desarrollo de páginas web con panel autoadministrable para publicar casas, departamentos y parcelas en venta o arriendo en Chile, con cálculo de UF y enlaces para WhatsApp.',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://webunica.cl/pagina-web-para-publicar-propiedades/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Necesito conocimientos técnicos para subir o editar propiedades?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. El panel de administración funciona de manera tan sencilla como rellenar un formulario en internet o publicar una foto en una red social. Puedes administrar tu catálogo sin conocimientos de programación.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo publicar propiedades tanto en venta como en arriendo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. El sistema permite clasificar cada propiedad en venta, arriendo tradicional, arriendo temporal o comercial, y los visitantes pueden filtrar el catálogo según el tipo de operación que buscan.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuántas propiedades puedo publicar en mi sitio web?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No existe un límite técnico forzoso en la plataforma. Puedes comenzar publicando 10 propiedades y escalar a cientos de inmuebles a medida que tu cartera crezca.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo subir videos o recorridos virtuales de las propiedades?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. La plataforma permite incrustar enlaces de video de YouTube o Vimeo, así como tours virtuales en 360° para que los interesados puedan recorrer los espacios antes de agendar una visita.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué pasa si quiero que mis propiedades se compartan en redes sociales?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cada propiedad cuenta con botones directos para compartir en WhatsApp o redes sociales, generando automáticamente una vista previa con fotografía, título y precio.',
          },
        },
      ],
    },
  ],
};

export default function Page() {
  const steps = [
    {
      num: '01',
      title: 'Ingresar datos básicos y ubicación',
      desc: 'Seleccionas el tipo de operación (Venta o Arriendo), tipo de inmueble (Casa, Departamento, Terreno, Oficina) y la Comuna correspondiente.',
    },
    {
      num: '02',
      title: 'Cargar fotografías y planos',
      desc: 'Arrastras las fotos en alta resolución. El sistema las procesa y optimiza para que se vean nítidas en computadores y teléfonos sin perder velocidad.',
    },
    {
      num: '03',
      title: 'Definir precio en UF o pesos chilenos',
      desc: 'Ingresas el valor base en UF o CLP, gastos comunes estimados y contribuciones si aplica. El sistema muestra la conversión automática actualizada.',
    },
    {
      num: '04',
      title: 'Publicar y compartir en un clic',
      desc: 'La propiedad queda activa de inmediato en el buscador de tu web y lista para enviar el enlace directo por WhatsApp o redes sociales.',
    },
  ];

  const adminFeatures = [
    {
      title: 'Control de estados comerciales',
      desc: 'Cambia en un clic entre «Disponible», «Reservada» o «Vendida», manteniendo el historial o retirando el inmueble del buscador público.',
    },
    {
      title: 'Filtro rápido de búsqueda interna',
      desc: 'Encuentra cualquier propiedad de tu cartera en 3 segundos buscando por código interno, calle o cliente mientras hablas por teléfono.',
    },
    {
      title: 'Asignación de ejecutivo o corredor',
      desc: 'Asocia cada propiedad al asesor responsable para que su nombre, teléfono y WhatsApp personal aparezcan en la ficha pública.',
    },
    {
      title: 'Tarjeta lista para WhatsApp',
      desc: 'Al pegar el enlace en un chat, se genera automáticamente una vista previa elegante con foto destacada, precio en UF y ubicación.',
    },
  ];

  const faqs = [
    {
      q: '¿Necesito conocimientos técnicos para subir o editar propiedades?',
      a: 'No. El panel de administración funciona de manera tan sencilla como rellenar un formulario en internet o publicar una foto en una red social. Si sabes usar un correo electrónico o WhatsApp, puedes administrar tu catálogo sin problemas.',
    },
    {
      q: '¿Puedo publicar propiedades tanto en venta como en arriendo?',
      a: 'Sí. El sistema permite clasificar cada propiedad en venta, arriendo tradicional, arriendo temporal o comercial, y los visitantes pueden filtrar el catálogo según el tipo de negocio que buscan.',
    },
    {
      q: '¿Cuántas propiedades puedo publicar en mi sitio web?',
      a: 'No existe un límite técnico forzoso en la plataforma. Puedes comenzar publicando 10 propiedades y escalar a cientos de inmuebles a medida que tu cartera crezca, sin que el sitio pierda velocidad.',
    },
    {
      q: '¿Puedo subir videos o recorridos virtuales de las propiedades?',
      a: 'Sí. La plataforma permite incrustar enlaces de video de YouTube o Vimeo, así como tours virtuales en 360° para que los interesados puedan recorrer los espacios antes de agendar una visita presencial.',
    },
    {
      q: '¿Qué pasa si quiero que mis propiedades se compartan en redes sociales?',
      a: 'Cada propiedad cuenta con botones directos para compartir en WhatsApp, Facebook o copiar el enlace directo. Al compartirlo, la vista previa incluye la foto principal, el título y el precio automáticamente.',
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
            Catálogo Inmobiliario Autoadministrable
          </span>
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
            Chile
          </span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05] mb-8">
          Página web para publicar propiedades:{' '}
          <span className="text-blue-500 italic font-serif lowercase font-light">
            ordena tu catálogo
          </span>{' '}
          y muestra tus inmuebles
        </h1>

        <p className="text-lg lg:text-xl text-zinc-400 font-light leading-relaxed mb-8">
          Pasa de las planillas Excel, los chats desordenados y las publicaciones manuales a una
          plataforma web con panel propio. Sube fotos, actualiza precios en UF y comparte fichas
          profesionales con tus clientes en segundos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <LeadButton
            service="pagina-web-para-publicar-propiedades"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-700 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)] text-center"
          >
            Necesito publicar mis propiedades
          </LeadButton>
          <Link
            href="/pagina-web-para-inmobiliarias"
            className="px-8 py-4 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 rounded-xl font-bold uppercase tracking-wider text-xs transition-all text-center"
          >
            Ver características completas
          </Link>
        </div>
      </section>

      {/* El Dolor Operativo */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-6">
          El problema de vender y arrendar propiedades mediante métodos manuales
        </h2>
        <p className="text-zinc-400 font-light leading-relaxed mb-8">
          Administrar un inventario inmobiliario sin un catálogo centralizado genera pérdidas
          comerciales constantes. Cuando un cliente te pide información, tener que buscar las fotos
          y redactar textos por WhatsApp toma minutos valiosos. Un enlace web con dominio propio
          transmite total profesionalismo y permite que el interesado explore todo tu catálogo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-white font-bold text-lg mb-2">Respuestas en 5 Segundos</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              En lugar de armar mensajes largos, envías la ficha web directa con fotos en alta
              resolución, mapa y precio actualizado.
            </p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-white font-bold text-lg mb-2">Precios en UF siempre al día</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Modificas el valor una sola vez en tu panel y se actualiza en todo el sitio web de
              forma instantánea.
            </p>
          </div>
        </div>
      </section>

      {/* Flujo en 4 Pasos */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          El flujo para publicar una propiedad en 4 pasos simples
        </h2>

        <div className="space-y-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="flex gap-6 items-start bg-zinc-900 border border-zinc-800 p-6 rounded-2xl"
            >
              <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center font-black text-lg shrink-0">
                {s.num}
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
            ¿Quieres ordenar tu inventario inmobiliario hoy?
          </h2>
          <p className="text-zinc-400 font-light text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Te entregamos una plataforma lista para usar con panel autoadministrable, buscador
            incorporado y enlaces directos para WhatsApp.
          </p>
          <LeadButton
            service="pagina-web-para-publicar-propiedades"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-700 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)]"
          >
            Ver cómo funciona el catálogo web
          </LeadButton>
        </div>
      </section>

      {/* Funciones del Panel */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Funciones clave de tu panel de administración
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {adminFeatures.map((f, idx) => (
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
          Preguntas frecuentes sobre publicación de propiedades
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
          Más guías y soluciones inmobiliarias
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/pagina-web-para-inmobiliarias"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Guía Principal</p>
            <p className="text-white text-sm font-semibold">Sitios web para inmobiliarias</p>
          </Link>
          <Link
            href="/crear-portal-inmobiliario"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Escala Mayor</p>
            <p className="text-white text-sm font-semibold">Crear un portal inmobiliario</p>
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
            Empieza a publicar tus propiedades de forma profesional
          </h2>
          <p className="text-blue-100 font-light text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Centraliza tu catálogo en un solo lugar y comparte fichas impecables con tus clientes
            por WhatsApp y redes sociales.
          </p>
          <LeadButton
            service="pagina-web-para-publicar-propiedades"
            className="px-10 py-5 bg-white text-blue-700 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-zinc-100 transition-all shadow-xl"
          >
            Solicitar mi página para publicar propiedades
          </LeadButton>
        </div>
      </section>
    </div>
  );
}
