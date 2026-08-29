import { Metadata } from 'next';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Cómo Aumentar las Ventas de mi Tienda Online en Chile | Webunica',
  description:
    'Descubre cómo aumentar las ventas de tu tienda online en Chile: optimiza tus fichas de producto, reduce carritos abandonados, agiliza el checkout y sube tu ticket promedio.',
  alternates: {
    canonical: 'https://webunica.cl/como-aumentar-las-ventas-de-mi-tienda-online',
  },
  openGraph: {
    title: 'Cómo Aumentar las Ventas de mi Tienda Online en Chile',
    description:
      'Guía práctica para escalar tu e-commerce: elimina la fricción en el checkout, muestra costos de envío claros, sube tu ticket promedio y convierte visitas en pedidos reales.',
    url: 'https://webunica.cl/como-aumentar-las-ventas-de-mi-tienda-online',
    siteName: 'Webunica',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://webunica.cl/como-aumentar-las-ventas-de-mi-tienda-online/#webpage',
      url: 'https://webunica.cl/como-aumentar-las-ventas-de-mi-tienda-online/',
      name: 'Cómo Aumentar las Ventas de mi Tienda Online en Chile | Webunica',
      description:
        'Descubre cómo aumentar las ventas de tu tienda online en Chile: optimiza tus fichas de producto, reduce carritos abandonados, agiliza el checkout y sube tu ticket promedio.',
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
        '@id': 'https://webunica.cl/como-aumentar-las-ventas-de-mi-tienda-online/#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://webunica.cl/como-aumentar-las-ventas-de-mi-tienda-online/#breadcrumb',
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
          name: 'Aumentar Ventas Tienda Online',
          item: 'https://webunica.cl/como-aumentar-las-ventas-de-mi-tienda-online/',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://webunica.cl/como-aumentar-las-ventas-de-mi-tienda-online/#service',
      name: 'Optimización de Ventas y Conversión E-commerce en Chile',
      serviceType: 'Optimización de Tiendas Online y CRO E-commerce',
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
        'Optimización estratégica de tiendas online en Chile: rediseño de fichas de producto, reducción de carritos abandonados, integración de Webpay/Mercado Pago y aceleración de checkout.',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://webunica.cl/como-aumentar-las-ventas-de-mi-tienda-online/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Cuál es la tasa de conversión promedio de una tienda online en Chile?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'En el mercado chileno, una tasa de conversión promedio oscila entre el 1,0% y el 2,0%. Con optimización profesional de fichas, checkout y velocidad móvil, tiendas bien gestionadas pueden alcanzar entre el 2,5% y el 4,5%.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Por qué los clientes abandonan el carrito en el último paso?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Las causas principales son: costos de envío no advertidos con anticipación, exigencia obligatoria de registrar una cuenta con contraseña, desconfianza en los métodos de pago o lentitud y fallos técnicos en la pasarela bancaria.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Conviene ofrecer envío gratis en una tienda online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. La estrategia recomendada es establecer un monto mínimo de compra superior a tu ticket promedio actual (por ejemplo, gratis sobre $40.000 CLP), incentivando al comprador a agregar más artículos para calificar.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Qué plataforma es mejor para vender online en Chile: Shopify o WooCommerce?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ambas son excelentes: Shopify destaca por su estabilidad de servidores, checkout ultrarrápido y facilidad operativa. WooCommerce ofrece flexibilidad total y control de base de datos propia. La clave en ambas es la experiencia de usuario y la baja fricción.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto tiempo toma ver un aumento en las ventas tras optimizar la tienda?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Los cambios directos en la claridad de la ficha de producto, la simplificación del checkout y la activación de recuperación de carritos generan mejoras medibles en la tasa de conversión desde las primeras semanas tras su implementación.',
          },
        },
      ],
    },
  ],
};

export default function Page() {
  const pdpComponents = [
    {
      num: '01',
      title: 'Fotografías de alta resolución y contexto de uso',
      desc: 'Fotos en fondo blanco, detalles de texturas, fotos de escala con personas reales y videos cortos que resuelven dudas visuales de inmediato.',
    },
    {
      num: '02',
      title: 'Guía de tallas y medidas en centímetros',
      desc: 'Tablas claras y recomendaciones de ajuste directo para eliminar la incertidumbre de tamaño y reducir devoluciones posteriores.',
    },
    {
      num: '03',
      title: 'Calculador de despacho visible por comuna',
      desc: 'Permite consultar el costo y tiempo de envío antes de llegar al checkout con Starken, Chilexpress o Blue Express.',
    },
    {
      num: '04',
      title: 'Botón de compra destacado y Sticky Cart móvil',
      desc: 'Barra fija inferior en celulares que acompaña el scroll para que el usuario pueda agregar al carrito en cualquier momento.',
    },
    {
      num: '05',
      title: 'Opiniones y valoraciones verificadas',
      desc: 'Reseñas con fotos de clientes reales que disipan el temor al fraude y entregan prueba social decisiva antes del pago.',
    },
  ];

  const cartRecovery = [
    {
      title: 'Compra como invitado sin registro forzado',
      desc: 'Permite pagar ingresando únicamente correo y dirección, sin obligar al usuario a inventar contraseñas previas.',
    },
    {
      title: 'Pasarelas de pago chilenas certificadas',
      desc: 'Integración fluida con Webpay Plus (Transbank), Mercado Pago y Flow con cuotas sin interés y tarjetas de débito.',
    },
    {
      title: 'Transparencia de costos desde el inicio',
      desc: 'Sin recargos sorpresa al final del proceso que generen desconfianza o frustración en el comprador.',
    },
    {
      title: 'Secuencias automatizadas de recuperación',
      desc: 'Recordatorios amables por correo electrónico y WhatsApp a 1h, 24h y 48h tras el abandono del carrito.',
    },
  ];

  const faqs = [
    {
      q: '¿Cuál es la tasa de conversión promedio de una tienda online en Chile?',
      a: 'En el mercado chileno, una tasa de conversión promedio oscila entre el 1,0% y el 2,0%. Con optimización profesional de fichas, checkout y velocidad móvil, tiendas bien gestionadas pueden alcanzar entre el 2,5% y el 4,5%.',
    },
    {
      q: '¿Por qué los clientes abandonan el carrito en el último paso?',
      a: 'Las causas principales son: costos de envío no advertidos con anticipación, exigencia obligatoria de registrar una cuenta con contraseña, desconfianza en los métodos de pago o lentitud y fallos técnicos en la pasarela bancaria.',
    },
    {
      q: '¿Conviene ofrecer envío gratis en una tienda online?',
      a: 'Sí. La estrategia recomendada es establecer un monto mínimo de compra superior a tu ticket promedio actual (por ejemplo, gratis sobre $40.000 CLP), incentivando al comprador a agregar más artículos para calificar.',
    },
    {
      q: '¿Qué plataforma es mejor para vender online en Chile: Shopify o WooCommerce?',
      a: 'Ambas son excelentes: Shopify destaca por su estabilidad de servidores, checkout ultrarrápido y facilidad operativa. WooCommerce ofrece flexibilidad total y control de base de datos propia. La clave en ambas es la experiencia de usuario y la baja fricción.',
    },
    {
      q: '¿Cuánto tiempo toma ver un aumento en las ventas tras optimizar la tienda?',
      a: 'Los cambios directos en la claridad de la ficha de producto, la simplificación del checkout y la activación de recuperación de carritos generan mejoras medibles en la tasa de conversión desde las primeras semanas tras su implementación.',
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
            E-commerce & Tiendas Online
          </span>
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
            Chile
          </span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05] mb-8">
          Cómo aumentar las ventas de mi tienda online:{' '}
          <span className="text-blue-500 italic font-serif lowercase font-light">
            fichas, checkout y carritos
          </span>{' '}
          en Chile
        </h1>

        <p className="text-lg lg:text-xl text-zinc-400 font-light leading-relaxed mb-8">
          El abandono de carritos en e-commerce supera el 70%. Aprende cómo eliminar las fricciones en
          el pago, transparentar costos de despacho, aumentar tu ticket promedio y transformar visitas
          en pedidos completados.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <LeadButton
            service="como-aumentar-las-ventas-de-mi-tienda-online"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-700 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)] text-center"
          >
            Auditar la conversión de mi tienda online
          </LeadButton>
          <Link
            href="/agencia-cro-optimizacion-conversion-chile"
            className="px-8 py-4 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 rounded-xl font-bold uppercase tracking-wider text-xs transition-all text-center"
          >
            Ver servicios CRO para e-commerce
          </Link>
        </div>
      </section>

      {/* Las 3 Palancas Matemáticas */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-6">
          Las 3 palancas matemáticas para hacer crecer tu e-commerce
        </h2>
        <p className="text-zinc-400 font-light leading-relaxed mb-8">
          La facturación de tu tienda online es el resultado de multiplicar: <strong className="text-white font-medium">Tráfico × Tasa de Conversión × Ticket Promedio</strong>.
          Si optimizas la conversión un 30% y el ticket promedio un 20%, tus ventas aumentan más de
          un 56% sin necesidad de gastar más dinero en publicidad.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-blue-400 font-bold text-lg mb-2">1. Fichas de Producto</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Resuelven dudas de tallas, fotos y despacho para motivar el clic en «Agregar al Carrito».
            </p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-blue-400 font-bold text-lg mb-2">2. Checkout Rápido</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Elimina registros forzados y conecta Webpay Plus y Mercado Pago sin fricciones.
            </p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-blue-400 font-bold text-lg mb-2">3. Ticket Promedio (AOV)</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Barras de envío gratis, paquetes (bundles) y venta cruzada complementaria.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Componentes de PDP */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Anatomía de una Ficha de Producto (PDP) que vende
        </h2>

        <div className="space-y-6">
          {pdpComponents.map((c, idx) => (
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
            ¿Quieres reducir los carritos abandonados de tu tienda?
          </h2>
          <p className="text-zinc-400 font-light text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Optimizamos tu proceso de compra para que más personas terminen pagando con Webpay Plus o
            Mercado Pago de forma fluida.
          </p>
          <LeadButton
            service="como-aumentar-las-ventas-de-mi-tienda-online"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-700 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)]"
          >
            Quiero aumentar las ventas de mi tienda online
          </LeadButton>
        </div>
      </section>

      {/* Reducción de Carritos */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Estrategias para reducir el abandono de carritos en Chile
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cartRecovery.map((r, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
              <h3 className="text-blue-400 font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Preguntas frecuentes sobre ventas en tiendas online
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
          Más guías y soluciones de conversión
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
            Escala las ventas de tu tienda online
          </h2>
          <p className="text-blue-100 font-light text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Rediseñamos tus fichas de producto, eliminamos fricciones en el checkout y recuperamos
            carritos abandonados para acelerar tu facturación en Chile.
          </p>
          <LeadButton
            service="como-aumentar-las-ventas-de-mi-tienda-online"
            className="px-10 py-5 bg-white text-blue-700 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-zinc-100 transition-all shadow-xl"
          >
            Solicitar optimización para mi e-commerce
          </LeadButton>
        </div>
      </section>
    </div>
  );
}
