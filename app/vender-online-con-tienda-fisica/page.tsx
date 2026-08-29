import { Metadata } from 'next';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Vender Online Teniendo Tienda Física en Chile: Cómo Funciona | Webunica',
  description:
    '¿Tienes un local y quieres vender también por internet? Aprende cómo sincronizar inventario, gestionar pedidos online y físicos al mismo tiempo, y qué errores evitar al digitalizar tu negocio.',
  alternates: {
    canonical: 'https://webunica.cl/vender-online-con-tienda-fisica',
  },
  openGraph: {
    title: 'Vender Online Teniendo Tienda Física: Cómo Funciona y por Dónde Empezar',
    description:
      'Si ya tienes un local físico y quieres agregar ventas online, aquí encontrarás cómo funciona, qué debes sincronizar y cuáles son los errores más frecuentes al hacer esa transición.',
    url: 'https://webunica.cl/vender-online-con-tienda-fisica',
    siteName: 'Webunica',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://webunica.cl/vender-online-con-tienda-fisica/#webpage',
      url: 'https://webunica.cl/vender-online-con-tienda-fisica/',
      name: 'Vender Online Teniendo Tienda Física: Cómo Funciona y por Dónde Empezar',
      description:
        '¿Tienes un local y quieres vender también por internet? Aprende cómo sincronizar inventario, gestionar pedidos online y físicos al mismo tiempo, y qué errores evitar al digitalizar tu negocio.',
      inLanguage: 'es-CL',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://webunica.cl/#website',
        url: 'https://webunica.cl/',
        name: 'Webunica',
      },
      breadcrumb: {
        '@id': 'https://webunica.cl/vender-online-con-tienda-fisica/#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://webunica.cl/vender-online-con-tienda-fisica/#breadcrumb',
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
          name: 'Vender Online con Tienda Física',
          item: 'https://webunica.cl/vender-online-con-tienda-fisica/',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://webunica.cl/vender-online-con-tienda-fisica/#service',
      name: 'Digitalización de Negocios con Local Físico en Chile',
      serviceType: 'Desarrollo de Canal de Venta Digital para Tiendas Físicas',
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
        'Acompañamos a negocios con local físico en Chile en la creación de su canal de venta online, incluyendo sincronización de inventario, configuración de pagos y opciones de despacho o retiro en tienda.',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://webunica.cl/vender-online-con-tienda-fisica/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Puedo usar la misma caja registradora del local para las ventas online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No directamente, pero sí puedes integrar el inventario. Dependiendo del sistema de punto de venta que uses en el local, puede existir una integración con la plataforma de e-commerce que sincronice el stock automáticamente. Shopify POS es el ejemplo más conocido de una solución que une ambos canales en una sola plataforma.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Los precios tienen que ser iguales en el local y en la tienda online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No hay una ley que lo exija, pero sí es una buena práctica para evitar confusión y reclamos. Si quieres ofrecer precios exclusivos online, es recomendable comunicarlo claramente en ambos canales.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Debo emitir boleta electrónica por las ventas online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Las ventas online están afectas a IVA y deben documentarse con boleta o factura electrónica según lo establece el SII. Existen sistemas de facturación electrónica como Wasabil, Bsale o los propios del SII que pueden conectarse a tu tienda online para emitir documentos tributarios de forma automática.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto demora en configurarse una tienda online si ya tengo el catálogo y las fotos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Si el catálogo de productos y las fotografías están listos, el tiempo de desarrollo disminuye significativamente. Un proyecto bien planificado puede estar operativo entre 2 y 4 semanas dependiendo de la complejidad del diseño, el número de productos y las integraciones requeridas.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Es rentable agregar ventas online a un negocio con local físico?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depende del tipo de producto, el margen disponible y el volumen de ventas que logres generar. En general, negocios con ticket promedio sobre los $15.000 CLP y márgenes razonables encuentran el canal rentable desde el primer año de operación.',
          },
        },
      ],
    },
  ],
};

export default function Page() {
  const stepsDecisiones = [
    {
      num: '01',
      title: '¿Vendes el mismo catálogo online o uno diferente?',
      desc: 'No es obligatorio vender online todo lo que vendes en el local. Muchos negocios comienzan con un subconjunto de sus productos más populares, más fáciles de despachar, con mayor margen o que tienen mejor fotografía disponible.',
    },
    {
      num: '02',
      title: '¿Ofreces despacho a domicilio, retiro en tienda o ambas opciones?',
      desc: 'Despacho a domicilio requiere couriers (Starken, Chilexpress) y embalaje. Retiro en tienda (Click & Collect) es inmediato, sin costo de flete para el cliente y atrae compradores físicos a tu local.',
    },
    {
      num: '03',
      title: '¿Tu sistema de inventario actual se puede conectar?',
      desc: 'Si ya usas un POS o software en tu mesón (Bsale, Defontana o planillas), revisamos si existe conector directo con Shopify o WooCommerce para descontar stock en tiempo real.',
    },
    {
      num: '04',
      title: '¿Quién va a preparar y despachar los pedidos online?',
      desc: 'Los pedidos online llegan a toda hora. Es vital definir qué persona del equipo revisa la plataforma, en qué horario embala paquetes y quién coordina la entrega al courier o en el mesón.',
    },
    {
      num: '05',
      title: '¿Cómo vas a manejar las devoluciones de compras online?',
      desc: 'La Ley del Consumidor en Chile establece el derecho a retracto dentro de 10 días hábiles para compras online. Tener políticas claras y el procedimiento de reembolso listo evita fricciones.',
    },
  ];

  const syncOptions = [
    {
      type: 'Opción A — Gestión manual separada',
      badge: 'Para catálogos pequeños',
      desc: 'Reservas una cuota fija de unidades para la web. Ideal para menos de 50 productos con baja rotación. Requiere disciplina manual para ajustar stock cuando hay ventas físicas.',
    },
    {
      type: 'Opción B — Plataforma con inventario unificado (Shopify POS)',
      badge: 'Recomendada para pymes',
      desc: 'Tu local y tu tienda online comparten la misma base de datos. Si vendes una unidad en el mesón físico, automáticamente se descuenta en la web evitando sobreventas.',
    },
    {
      type: 'Opción C — Conexión con ERP / Sistema de Gestión',
      badge: 'Operaciones medianas y grandes',
      desc: 'Integración vía API o conector estándar entre tu software de gestión (Bsale, ERPs) y la tienda online. Mantiene facturación, stock y múltiples bodegas sincronizadas.',
    },
  ];

  const faqs = [
    {
      q: '¿Puedo usar la misma caja registradora del local para las ventas online?',
      a: 'No directamente como máquina física, pero sí a nivel de inventario. Con plataformas integradas como Shopify POS o WooCommerce POS, las ventas del mesón y de la web descuentan del mismo stock compartido en tiempo real.',
    },
    {
      q: '¿Los precios tienen que ser iguales en el local y en la tienda online?',
      a: 'No hay una obligación legal de que sean idénticos, pero mantener coherencia en los precios evita la desconfianza del cliente que visita ambos canales. Las promociones online exclusivas deben comunicarse con total claridad.',
    },
    {
      q: '¿Debo emitir boleta electrónica por las ventas online?',
      a: 'Sí. Toda venta por internet en Chile está afecta a IVA y exige emisión de boleta o factura electrónica. Integramos sistemas automáticos como Wasabil o Bsale para emitir el DTE ante el SII apenas se confirma el pago.',
    },
    {
      q: '¿Cuánto demora en configurarse una tienda online si ya tengo el local y los productos?',
      a: 'Teniendo el catálogo, los precios y las fotografías listos, el proyecto toma entre 2 y 4 semanas de desarrollo y configuración técnica antes de salir a producción.',
    },
    {
      q: '¿Es rentable agregar ventas online a un negocio con local físico?',
      a: 'Para la gran mayoría de los negocios sí lo es. El canal online aprovecha los costos fijos de tu local e inventario existente para abrir una vitrina 24/7 accesible desde cualquier región de Chile.',
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
            Estrategia Omnicanal para Pymes
          </span>
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
            Chile 2026
          </span>
        </div>

        <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05] mb-8">
          Cómo vender online sin perder el control de tu{' '}
          <span className="text-blue-500 italic font-serif lowercase font-light">
            tienda física
          </span>
        </h1>

        <p className="text-lg lg:text-xl text-zinc-400 font-light leading-relaxed mb-8">
          Si ya tienes un local físico, cuentas con lo más valioso: productos reales, clientes que
          confían en tu marca y experiencia comercial. Descubre cómo sumar un canal online que
          multiplique tus ventas sin desordenar tu stock ni duplicar tu carga de trabajo.
        </p>
      </section>

      {/* Por qué los locales abren canal digital */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-6">
          Por qué los negocios con local físico están abriendo canales digitales
        </h2>
        <p className="text-zinc-400 font-light leading-relaxed mb-8">
          Tus clientes habituales y potenciales compradores ya buscan productos en Google e Instagram
          antes de salir de casa. Tener una tienda online no canibaliza tu local: captura a quienes
          no tienen tiempo de ir presencialmente, viven en otras comunas o regiones, o prefieren
          comprar fuera del horario comercial.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-white font-bold text-lg mb-2">Vitrina 24/7 sin costo de arriendo extra</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Tu local físico cierra a las 19:00 hrs, pero más del 40% de las transacciones online
              en Chile se realizan de noche o fines de semana.
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-white font-bold text-lg mb-2">Alcance a todo Chile</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Tu punto de venta físico atiende a tu barrio o comuna; tu tienda online vende a Santiago,
              Antofagasta, Concepción, Puerto Montt y todo el país.
            </p>
          </div>
        </div>
      </section>

      {/* Lo que cambia al tener ambos canales */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Lo que cambia cuando tienes ambos canales funcionando al mismo tiempo
        </h2>

        <div className="space-y-6">
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-blue-400 font-bold text-lg mb-2">1. El inventario pasa a ser compartido</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Si quedan 3 unidades en el mostrador y alguien las compra físicamente, la web debe
              actualizarse de inmediato para no vender un producto agotado.
            </p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-blue-400 font-bold text-lg mb-2">2. Los pedidos llegan desde dos fuentes distintas</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Atiendes clientes presenciales mientras en paralelo se reciben compras online que deben
              prepararse para entrega o envío por encomienda.
            </p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-blue-400 font-bold text-lg mb-2">3. Precios y promociones consistentes</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              El cliente consulta precios desde su celular mientras camina hacia tu local. La
              transparencia genera confianza inmediata en tu marca.
            </p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-blue-400 font-bold text-lg mb-2">4. Canales de atención unificados</h3>
            <p className="text-zinc-400 font-light text-sm leading-relaxed">
              Consultas por WhatsApp, mensajes en redes y preguntas en el mesón se canalizan con
              respuestas y horarios coordinados.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Decisiones Clave */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Las 5 decisiones que debes tomar antes de lanzar tu tienda online
        </h2>

        <div className="space-y-6">
          {stepsDecisiones.map((item, idx) => (
            <div key={idx} className="flex gap-6 items-start bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
              <div className="w-12 h-12 bg-blue-600/10 border border-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center font-black text-lg shrink-0">
                {item.num}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">{item.desc}</p>
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
            ¿Tienes local y quieres dar el salto online?
          </h2>
          <p className="text-zinc-400 font-light text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Evaluamos tu catálogo actual, tu sistema de ventas y te mostramos el camino más directo
            para sincronizar ambos canales sin interrumpir tu atención diaria.
          </p>
          <LeadButton
            service="vender-online-con-tienda-fisica"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-blue-700 transition-all shadow-[0_10px_25px_rgba(37,99,235,0.3)]"
          >
            Quiero vender online sin perder el control de mi local
          </LeadButton>
        </div>
      </section>

      {/* Click & Collect Box */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="bg-gradient-to-br from-blue-950/60 to-zinc-900 border border-blue-500/30 p-8 lg:p-10 rounded-3xl">
          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-widest rounded-full">
            Tu ventaja competitiva exclusiva
          </span>
          <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mt-4 mb-4">
            Retiro en tienda (Click & Collect): la ventaja que solo tú tienes
          </h2>
          <p className="text-zinc-300 font-light leading-relaxed mb-6">
            Las tiendas que solo venden por internet dependen 100% de empresas de courier y tiempos
            de espera. Con tu local físico puedes ofrecer <strong className="text-white font-medium">«Compra online y retira en 2 horas»</strong> sin costo de envío.
          </p>
          <ul className="space-y-3 text-zinc-300 font-light text-sm">
            <li className="flex items-center gap-3">
              <span className="text-blue-400 font-bold">✓</span> El cliente asegura el stock antes de salir de casa.
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-400 font-bold">✓</span> Cero costo de despacho y cero riesgo de extravío.
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-400 font-bold">✓</span> Al visitar tu tienda física a retirar, un 30% de los clientes compra productos adicionales en el mostrador.
            </li>
          </ul>
        </div>
      </section>

      {/* Sincronización de Stock */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Cómo sincronizar el stock entre tu local y tu tienda online
        </h2>

        <div className="space-y-6">
          {syncOptions.map((opt, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h3 className="text-white font-bold text-lg">{opt.type}</h3>
                <span className="text-xs px-2.5 py-1 bg-zinc-800 text-zinc-400 rounded-lg font-medium border border-zinc-700">
                  {opt.badge}
                </span>
              </div>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">{opt.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h2 className="text-2xl lg:text-3xl font-black text-white uppercase tracking-tight mb-8">
          Preguntas frecuentes sobre vender online teniendo tienda física
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

      {/* Artículos Relacionados */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">
          Guías relacionadas para digitalizar tu negocio
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/como-vender-por-internet"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Guía base</p>
            <p className="text-white text-sm font-semibold">Cómo vender por internet en Chile</p>
          </Link>
          <Link
            href="/como-crear-una-tienda-online"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Paso a paso</p>
            <p className="text-white text-sm font-semibold">10 pasos para crear tu tienda online</p>
          </Link>
          <Link
            href="/crear-tienda-online-chile"
            className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-colors block"
          >
            <p className="text-blue-400 text-xs font-bold uppercase mb-1">Servicio Webunica</p>
            <p className="text-white text-sm font-semibold">Crear tienda online profesional</p>
          </Link>
        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 rounded-3xl p-10 lg:p-14 text-center text-white shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
          <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight mb-4">
            Construimos tu tienda online sin interferir con tu local
          </h2>
          <p className="text-blue-100 font-light text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Diseño a medida, pasarelas de pago chilenas, despacho configurado, integración de stock y
            capacitación completa para tu equipo.
          </p>
          <LeadButton
            service="vender-online-con-tienda-fisica"
            className="px-10 py-5 bg-white text-blue-700 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-zinc-100 transition-all shadow-xl"
          >
            Solicitar evaluación para mi negocio
          </LeadButton>
        </div>
      </section>
    </div>
  );
}
