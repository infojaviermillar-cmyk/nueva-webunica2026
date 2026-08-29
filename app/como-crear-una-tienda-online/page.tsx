import { Metadata } from 'next'
import Link from 'next/link'
import LeadButton from '@/components/ui/lead-button'

export const metadata: Metadata = {
  title: 'Cómo Crear una Tienda Online en Chile: 10 Pasos Prácticos | Webunica',
  description:
    'Aprende a crear una tienda online en Chile con esta guía paso a paso. Comparamos Shopify, WooCommerce y desarrollo personalizado para que elijas la opción correcta para tu negocio.',
  alternates: {
    canonical: 'https://webunica.cl/como-crear-una-tienda-online',
  },
  openGraph: {
    title:
      'Cómo Crear una Tienda Online en Chile: 10 Pasos Prácticos para tu Negocio',
    description:
      'Guía paso a paso para crear tu tienda online en Chile. Comparamos Shopify, WooCommerce y desarrollo personalizado con criterios claros para cada tipo de negocio.',
    url: 'https://webunica.cl/como-crear-una-tienda-online',
    siteName: 'Webunica',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://webunica.cl/como-crear-una-tienda-online/#webpage',
      url: 'https://webunica.cl/como-crear-una-tienda-online/',
      name: 'Cómo Crear una Tienda Online en Chile: 10 Pasos Prácticos',
      inLanguage: 'es-CL',
      isPartOf: {
        '@type': 'WebSite',
        url: 'https://webunica.cl/',
        name: 'Webunica',
      },
    },
    {
      '@type': 'BreadcrumbList',
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
          name: 'Cómo Crear una Tienda Online',
          item: 'https://webunica.cl/como-crear-una-tienda-online/',
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'Creación de Tiendas Online en Chile',
      serviceType: 'Diseño y Desarrollo de E-commerce',
      provider: {
        '@type': 'Organization',
        name: 'Webunica',
        url: 'https://webunica.cl/',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Chile',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuánto tiempo toma crear una tienda online desde cero?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Un proyecto bien planificado demora entre 3 y 6 semanas dependiendo de la cantidad de productos, la disponibilidad de fotos y la velocidad de aprobación del diseño.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Necesito contratar hosting si uso Shopify?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Shopify incluye el hosting dentro de su mensualidad. Si usas WooCommerce o desarrollo personalizado, sí necesitas contratar un servidor o hosting externo.',
          },
        },
        {
          '@type': 'Question',
          name: '¿La tienda queda en mi poder o dependo de la agencia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cuando Webunica desarrolla tu tienda, el resultado es tuyo. Te entregamos acceso completo a la plataforma y te capacitamos para administrarla sin depender de nosotros.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué pasa si quiero agregar más productos después de lanzar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Puedes agregar, editar o eliminar productos de forma independiente sin depender de un programador. Esto aplica también a cambios de precio, fotografías o descripciones.',
          },
        },
      ],
    },
  ],
}

const steps = [
  {
    number: 1,
    title: 'Organiza tu catálogo',
    description:
      'Antes de tocar cualquier plataforma, lista todos tus productos con nombre, precio, descripción, variantes (talla, color, tamaño) y fotografías de calidad. Un catálogo bien ordenado es la base de todo e-commerce que funciona.',
  },
  {
    number: 2,
    title: 'Elige la plataforma',
    description:
      'Shopify, WooCommerce o desarrollo personalizado: cada opción tiene ventajas según tu volumen, presupuesto y necesidades de integración. Más abajo encontrarás una comparativa con criterios concretos para decidir.',
  },
  {
    number: 3,
    title: 'Registra un dominio web',
    description:
      'Tu dominio es tu dirección en internet. Elige uno breve, fácil de escribir y que incluya el nombre de tu marca o tu producto principal. En Chile, los dominios .cl transmiten confianza local y favorecen el posicionamiento regional.',
  },
  {
    number: 4,
    title: 'Diseña la experiencia',
    description:
      'El diseño no es decoración: es conversión. Asegúrate de que la navegación sea intuitiva, el proceso de compra tenga el menor número de pasos posible y la tienda se vea impecable en móvil. El 70% del tráfico en Chile llega desde smartphones.',
  },
  {
    number: 5,
    title: 'Carga tus productos',
    description:
      'Sube cada producto con fotos en alta resolución, descripciones que expliquen beneficios reales y precios claros. Agrega variantes si corresponde y revisa que las categorías sean fáciles de navegar para alguien que no conoce tu marca.',
  },
  {
    number: 6,
    title: 'Configura medios de pago',
    description:
      'En Chile los pagos más usados son Webpay Plus (Transbank), Mercado Pago y Flow. Intégralos antes de lanzar y haz pruebas de compra reales. Un pago que no funciona es un cliente perdido para siempre.',
  },
  {
    number: 7,
    title: 'Define el despacho',
    description:
      'Integra un courier confiable: Starken, Chilexpress o Blue Express son las opciones más extendidas. Define costos de envío, tiempos de entrega y política de devoluciones. La transparencia en el despacho reduce el abandono de carrito.',
  },
  {
    number: 8,
    title: 'Establece las políticas',
    description:
      'La Ley del Consumidor en Chile exige términos de compra claros, política de devoluciones dentro de 10 días y tratamiento de datos según la Ley 19.628. Publica estas políticas en páginas accesibles desde el footer.',
  },
  {
    number: 9,
    title: 'Conecta analítica',
    description:
      'Instala Google Analytics 4 y Google Search Console antes del lanzamiento. Así desde el primer día sabrás de dónde viene tu tráfico, qué productos interesan más y en qué paso del proceso de compra abandonan los usuarios.',
  },
  {
    number: 10,
    title: 'Lanza y atrae clientes',
    description:
      'El lanzamiento no es el fin, es el inicio. Anuncia tu tienda en redes sociales, activa campañas en Google o Meta, trabaja el SEO de las fichas de producto y construye una lista de correos desde el primer día. El tráfico no llega solo.',
  },
]

const comparisonRows = [
  {
    criteria: 'Costo inicial',
    shopify: 'Bajo (desde USD 29/mes)',
    woo: 'Bajo (plugin gratuito, hosting ~$5.000/mes)',
    custom: 'Alto (proyecto único)',
  },
  {
    criteria: 'Facilidad de uso',
    shopify: 'Muy alta — sin conocimientos técnicos',
    woo: 'Media — requiere WordPress',
    custom: 'Variable — depende del panel',
  },
  {
    criteria: 'Escalabilidad',
    shopify: 'Alta dentro del ecosistema',
    woo: 'Alta con plugins',
    custom: 'Ilimitada — a medida',
  },
  {
    criteria: 'Integraciones locales (CL)',
    shopify: 'Webpay, Flow, Mercado Pago',
    woo: 'Webpay, Flow, Mercado Pago',
    custom: 'Cualquiera (desarrollo propio)',
  },
  {
    criteria: 'Control del código',
    shopify: 'Limitado (plataforma cerrada)',
    woo: 'Total (open source)',
    custom: 'Total (código propio)',
  },
  {
    criteria: 'Ideal para',
    shopify: 'Primeras tiendas, catálogos pequeños/medios',
    woo: 'Negocios con WordPress existente',
    custom: 'Proyectos con lógica compleja o integración ERP',
  },
]

const faqs = [
  {
    question: '¿Cuánto tiempo toma crear una tienda online desde cero?',
    answer:
      'Un proyecto bien planificado demora entre 3 y 6 semanas dependiendo de la cantidad de productos, la disponibilidad de fotos y la velocidad de aprobación del diseño.',
  },
  {
    question: '¿Necesito contratar hosting si uso Shopify?',
    answer:
      'No. Shopify incluye el hosting dentro de su mensualidad. Si usas WooCommerce o desarrollo personalizado, sí necesitas contratar un servidor o hosting externo.',
  },
  {
    question: '¿La tienda queda en mi poder o dependo de la agencia?',
    answer:
      'Cuando Webunica desarrolla tu tienda, el resultado es tuyo. Te entregamos acceso completo a la plataforma y te capacitamos para administrarla sin depender de nosotros.',
  },
  {
    question: '¿Qué pasa si quiero agregar más productos después de lanzar?',
    answer:
      'Puedes agregar, editar o eliminar productos de forma independiente sin depender de un programador. Esto aplica también a cambios de precio, fotografías o descripciones.',
  },
]

const relatedArticles = [
  {
    href: '/como-vender-por-internet/',
    label: 'Guía completa: cómo vender por internet en Chile',
  },
  {
    href: '/pagina-web-para-vender-productos/',
    label: 'Qué debe tener una página para vender productos',
  },
  {
    href: '/crear-tienda-online-chile/',
    label: 'Crear mi tienda online con Webunica',
  },
]

export default function ComoCrearTiendaOnlinePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-zinc-950 text-white min-h-screen">
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="pt-[22vh] lg:pt-48 pb-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6">
              Cómo crear una tienda online en Chile:{' '}
              <span className="text-blue-500">10 pasos</span> para hacerlo bien
              desde el inicio
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Esta guía está pensada para dueños de negocio que quieren lanzar
              su e-commerce sin cometer los errores más comunes. No te diremos
              que es fácil, pero sí te explicaremos exactamente qué hacer en
              cada etapa: desde organizar tu catálogo hasta conectar los medios
              de pago locales y atraer tus primeros clientes.
            </p>
          </div>
        </section>

        {/* ── ANTES DE ELEGIR TECNOLOGÍA ────────────────────────── */}
        <section className="pb-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Antes de elegir tecnología, define esto
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-8">
              El error más frecuente al crear una tienda online es empezar
              eligiendo plataforma sin tener clara la operación. Muchos
              proyectos se demoran el doble o fracasan porque el negocio no
              estaba listo para vender en línea, no porque la tecnología falle.
              Antes de instalar nada, responde estas preguntas:
            </p>
            <ul className="space-y-3 pl-0">
              {[
                '¿Cuántos productos vas a vender y con qué variantes (talla, color, tamaño)?',
                '¿Tienes fotografías de calidad para todos tus productos?',
                '¿Desde dónde vas a despachar y a qué regiones de Chile?',
                '¿Cómo vas a manejar el stock: de forma manual o con un sistema integrado?',
                '¿Cuánto tiempo disponible tienes para administrar la tienda cada semana?',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-300">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── LOS 10 PASOS ─────────────────────────────────────── */}
        <section className="pb-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">
              Los 10 pasos para crear tu tienda online
            </h2>
            <ol className="relative space-y-0 pl-0" aria-label="10 pasos para crear tu tienda online">
              {steps.map((step, index) => (
                <li key={step.number} className="flex gap-6">
                  {/* Línea vertical + número */}
                  <div className="flex flex-col items-center">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm z-10">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-px flex-1 bg-zinc-700 my-2" />
                    )}
                  </div>
                  {/* Contenido */}
                  <div className="pb-10">
                    <h3 className="text-xl font-semibold mb-2 mt-2">
                      Paso {step.number}: {step.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-base">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── CTA INTERMEDIO ───────────────────────────────────── */}
        <section className="pb-20 px-6">
          <div className="max-w-2xl mx-auto text-center rounded-2xl border border-zinc-800 bg-zinc-900 p-10">
            <p className="text-zinc-400 text-sm uppercase tracking-widest mb-3 font-medium">
              ¿No sabes qué plataforma conviene a tu negocio?
            </p>
            <p className="text-white text-xl font-semibold mb-6">
              Cuéntanos tu situación y te recomendamos la opción más adecuada
              sin cobrarte nada.
            </p>
            <LeadButton
              service="como-crear-tienda-online"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 transition-colors text-white font-semibold px-8 py-4 rounded-xl text-base"
            >
              Ayúdame a elegir mi plataforma
            </LeadButton>
          </div>
        </section>

        {/* ── COMPARATIVA DE PLATAFORMAS ───────────────────────── */}
        <section className="pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Shopify vs WooCommerce vs Desarrollo personalizado
            </h2>
            <p className="text-zinc-400 mb-10 text-base leading-relaxed">
              No existe una plataforma universalmente mejor. La correcta es la
              que se ajusta a tu presupuesto, tus capacidades técnicas y los
              requerimientos reales de tu negocio. Esta tabla te ayuda a
              comparar las tres opciones más usadas en Chile con criterios
              concretos.
            </p>
            <div className="overflow-x-auto rounded-xl border border-zinc-800">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-zinc-900 border-b border-zinc-800">
                    <th className="px-5 py-4 font-semibold text-zinc-300 w-1/4">
                      Criterio
                    </th>
                    <th className="px-5 py-4 font-semibold text-blue-400">
                      Shopify
                    </th>
                    <th className="px-5 py-4 font-semibold text-blue-400">
                      WooCommerce
                    </th>
                    <th className="px-5 py-4 font-semibold text-blue-400">
                      Desarrollo personalizado
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-b border-zinc-800 last:border-0 ${
                        i % 2 === 0 ? 'bg-zinc-950' : 'bg-zinc-900/50'
                      }`}
                    >
                      <td className="px-5 py-4 font-medium text-white">
                        {row.criteria}
                      </td>
                      <td className="px-5 py-4 text-zinc-400">{row.shopify}</td>
                      <td className="px-5 py-4 text-zinc-400">{row.woo}</td>
                      <td className="px-5 py-4 text-zinc-400">{row.custom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="pb-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">Preguntas frecuentes</h2>
            <div className="space-y-8">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <p className="text-white font-semibold text-base mb-2">
                    {faq.question}
                  </p>
                  <p className="text-zinc-400 leading-relaxed text-base">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ARTÍCULOS RELACIONADOS ───────────────────────────── */}
        <section className="pb-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Artículos relacionados</h2>
            <ul className="space-y-4">
              {relatedArticles.map((article) => (
                <li key={article.href}>
                  <Link
                    href={article.href}
                    className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors text-base font-medium group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 group-hover:bg-blue-300 transition-colors" />
                    {article.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CTA FINAL ────────────────────────────────────────── */}
        <section className="pb-28 px-6">
          <div className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              ¿Listo para crear tu tienda online con un equipo especializado?
            </h2>
            <p className="text-blue-100 text-base leading-relaxed mb-8 max-w-xl mx-auto">
              En Webunica diseñamos y desarrollamos tiendas online en Chile que
              convierten visitantes en clientes. Te acompañamos desde la
              arquitectura del catálogo hasta el lanzamiento con analítica
              configurada.
            </p>
            <LeadButton
              service="como-crear-tienda-online-cta-final"
              className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 transition-colors font-bold px-8 py-4 rounded-xl text-base"
            >
              Ayúdame a crear mi tienda online
            </LeadButton>
          </div>
        </section>
      </main>
    </>
  )
}
