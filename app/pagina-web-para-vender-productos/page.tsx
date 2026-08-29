import { Metadata } from 'next';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Página Web para Vender Productos en Chile: Qué Debe Incluir | Webunica',
  description:
    'Descubre qué debe tener una página web para vender productos online en Chile. Diferencias entre catálogo, tienda completa y qué necesitas para cobrar, despachar y gestionar pedidos.',
  alternates: {
    canonical: 'https://webunica.cl/pagina-web-para-vender-productos',
  },
  openGraph: {
    title: 'Página Web para Vender Productos en Chile: Qué Debe Incluir y Cómo Crearla',
    description:
      'Antes de contratar una página para vender, descubre la diferencia entre un catálogo online, una vitrina web y una tienda completa con carrito y medios de pago.',
    url: 'https://webunica.cl/pagina-web-para-vender-productos',
    siteName: 'Webunica',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      url: 'https://webunica.cl/pagina-web-para-vender-productos/',
      name: 'Página Web para Vender Productos en Chile: Qué Debe Incluir',
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
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://webunica.cl/' },
        { '@type': 'ListItem', position: 2, name: 'Página Web para Vender Productos', item: 'https://webunica.cl/pagina-web-para-vender-productos/' },
      ],
    },
    {
      '@type': 'Service',
      name: 'Diseño de Páginas Web para Vender Productos en Chile',
      provider: { '@type': 'Organization', name: 'Webunica', url: 'https://webunica.cl/' },
      areaServed: { '@type': 'Country', name: 'Chile' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Es obligatorio tener empresa para tener una tienda online en Chile?',
          acceptedAnswer: { '@type': 'Answer', text: 'Para contratar Webpay Plus es obligatorio tener inicio de actividades en el SII. Mercado Pago tiene opciones más accesibles para personas naturales.' },
        },
        {
          '@type': 'Question',
          name: '¿Cuántos productos puedo tener en una tienda online?',
          acceptedAnswer: { '@type': 'Answer', text: 'No existe un límite real. Tiendas en Shopify o WooCommerce pueden manejar desde 5 hasta decenas de miles de productos.' },
        },
        {
          '@type': 'Question',
          name: '¿La tienda queda en mi poder o dependo de la agencia?',
          acceptedAnswer: { '@type': 'Answer', text: 'Cuando Webunica desarrolla tu tienda, el resultado es tuyo con acceso completo de administrador.' },
        },
        {
          '@type': 'Question',
          name: '¿Puedo ofrecer descuentos o promociones en la tienda?',
          acceptedAnswer: { '@type': 'Answer', text: 'Sí. Las tiendas modernas permiten cupones de descuento, precios de oferta, descuentos por volumen y promociones como envío gratis sobre cierto monto.' },
        },
      ],
    },
  ],
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const storeTypes = [
  {
    label: 'Tipo A',
    title: 'Página corporativa con productos',
    description: 'Muestra tu catálogo como sección dentro de un sitio informativo. No tiene carrito ni proceso de compra online.',
    whenUseful: 'Útil cuando vendes por cotización, proyectos a medida o servicios de alto ticket.',
    limitation: 'No procesa pagos ni pedidos: el cliente debe contactarte por otro canal.',
    highlighted: false,
  },
  {
    label: 'Tipo B',
    title: 'Catálogo web con WhatsApp',
    description: 'Muestra productos con fotos, precios y descripciones. El botón de compra abre WhatsApp o un formulario de contacto.',
    whenUseful: 'Funciona bien para negocios pequeños que gestionan pocos pedidos manualmente.',
    limitation: 'Escala mal: cada pedido requiere atención manual, sin automatización.',
    highlighted: false,
  },
  {
    label: 'Tipo C',
    title: 'Tienda online completa',
    description: 'Carrito, checkout, medios de pago (Webpay, Mercado Pago, Flow), despacho calculado automáticamente y panel de pedidos.',
    whenUseful: 'La opción correcta cuando quieres vender de forma autónoma, escalable y profesional.',
    limitation: 'Requiere mayor inversión inicial, pero es la única que opera mientras duermes.',
    highlighted: true,
  },
];

const components = [
  { number: 1, title: 'Fichas de producto completas', description: 'Nombre, precio, descripción larga, variantes (talla, color, material), disponibilidad de stock y código SKU. Sin información completa, los clientes buscan en otro sitio.' },
  { number: 2, title: 'Galería de imágenes de calidad', description: 'Múltiples fotos por producto, zoom, y si es posible, video. El cliente no puede tocar el producto; las imágenes son su único contacto sensorial antes de comprar.' },
  { number: 3, title: 'Carrito de compras funcional', description: 'Persistente entre sesiones, con edición de cantidades, eliminación de productos y resumen claro del pedido antes de ir al pago.' },
  { number: 4, title: 'Proceso de pago (Checkout) simple', description: 'Máximo 3 pasos: datos de envío, método de pago y confirmación. Cada paso adicional aumenta el abandono del carrito.' },
  { number: 5, title: 'Medios de pago para Chile', description: 'Webpay Plus (tarjetas de débito y crédito), Mercado Pago (incluye billetera digital) y Flow. No limites tus ventas a quienes tengan solo una tarjeta.' },
  { number: 6, title: 'Cálculo de despacho en tiempo real', description: 'Integración con Starken, Chilexpress o correos propios que calcula el costo de envío según la dirección del cliente al momento del checkout.' },
  { number: 7, title: 'Control de inventario y stock', description: 'El sistema debe descontar unidades al confirmar una venta, alertarte cuando un producto está por agotarse y bloquear compras si el stock es cero.' },
  { number: 8, title: 'Panel de administración de pedidos', description: 'Vista centralizada de todos los pedidos: estado, datos del comprador, seguimiento de envío y herramientas para emitir boleta o factura electrónica.' },
  { number: 9, title: 'Seguridad SSL/HTTPS', description: 'Certificado activo, cifrado de datos en el checkout y cumplimiento de los requisitos mínimos de los procesadores de pago. Sin HTTPS no hay Webpay.' },
  { number: 10, title: 'Analítica (GA4, Search Console)', description: 'Saber cuántas personas visitan tu tienda, qué productos ven más, dónde abandonan el carrito y desde qué canal llegan es imprescindible para mejorar las ventas.' },
];

const businessGuides = [
  {
    heading: 'Estás empezando y tienes pocos productos',
    body: 'Un catálogo web con WhatsApp puede ser suficiente para validar demanda. Cuando proceses más de 10 pedidos a la semana, el seguimiento manual se vuelve insostenible: ese es el momento de migrar a una tienda completa.',
  },
  {
    heading: 'Tienes tienda física y quieres vender online',
    body: 'Necesitas una tienda online completa sincronizada con tu stock físico. La clave es que no gestiones dos inventarios por separado. Un sistema integrado evita vender lo que no tienes.',
  },
  {
    heading: 'Ya vendes en marketplace (Mercado Libre, Falabella)',
    body: 'Una tienda propia complementa el marketplace: te permite construir base de clientes propia, ofrecer precios sin comisión de plataforma y fidelizar con email marketing. No son excluyentes.',
  },
];

const commonErrors = [
  { error: 'Usar una sola foto por producto', detail: 'Fotos únicas o de baja resolución generan desconfianza. El cliente necesita ver el producto desde varios ángulos.' },
  { error: 'No ofrecer Webpay', detail: 'En Chile, Webpay es el medio de pago preferido con tarjeta. No tenerlo puede eliminar hasta el 40% de tus compradores potenciales.' },
  { error: 'Checkout de más de 5 pasos', detail: 'Cada paso adicional en el proceso de compra incrementa el abandono. La fricción mata la conversión.' },
  { error: 'No mostrar el costo de envío hasta el final', detail: 'Revelar el costo de despacho solo en el último paso es la causa número uno de abandono de carrito a nivel mundial.' },
  { error: 'No tener boleta o factura electrónica integrada', detail: 'En Chile, emitir el documento tributario es obligatorio. Sin integración con el SII o con un sistema de facturación, gestionarlo a mano es inviable a escala.' },
];

const faqs = [
  { question: '¿Es obligatorio tener empresa para tener una tienda online en Chile?', answer: 'Para contratar Webpay Plus es obligatorio tener inicio de actividades en el SII. Mercado Pago tiene opciones más accesibles para personas naturales.' },
  { question: '¿Cuántos productos puedo tener en una tienda online?', answer: 'No existe un límite real. Tiendas en Shopify o WooCommerce pueden manejar desde 5 hasta decenas de miles de productos.' },
  { question: '¿La tienda queda en mi poder o dependo de la agencia?', answer: 'Cuando Webunica desarrolla tu tienda, el resultado es tuyo con acceso completo de administrador.' },
  { question: '¿Puedo ofrecer descuentos o promociones en la tienda?', answer: 'Sí. Las tiendas modernas permiten cupones de descuento, precios de oferta, descuentos por volumen y promociones como envío gratis sobre cierto monto.' },
];

const relatedArticles = [
  { href: '/como-vender-por-internet/', label: 'Guía completa para vender por internet en Chile' },
  { href: '/como-crear-una-tienda-online/', label: '10 pasos para crear tu tienda online' },
  { href: '/vender-online-con-tienda-fisica/', label: 'Vender online si tienes tienda física' },
  { href: '/crear-tienda-online-chile/', label: 'Crear mi tienda con Webunica' },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PaginaWebParaVenderProductos() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-zinc-950 text-white min-h-screen">

        {/* ── Hero ── */}
        <section className="pt-[22vh] lg:pt-48 pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
              Página web para vender productos: qué necesita para realmente funcionar
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed">
              No todas las páginas que muestran productos sirven para vender. Antes de invertir,
              necesitas saber si lo que te ofrecen es un simple catálogo informativo, una vitrina
              con WhatsApp o una tienda online completa con carrito, medios de pago y gestión de
              pedidos. La diferencia entre los tres tipos puede costar miles de pesos en ventas perdidas.
            </p>
          </div>
        </section>

        {/* ── Los 3 tipos ── */}
        <section className="py-16 px-4 border-t border-zinc-800">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Los 3 tipos de &quot;página para vender productos&quot;
            </h2>
            <p className="text-zinc-400 mb-10 text-base md:text-lg">
              Cuando alguien dice &quot;quiero una página para vender&quot;, puede estar pensando en tres
              cosas muy distintas. Entender la diferencia es el primer paso para no pagar por algo
              que no resuelve tu problema.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {storeTypes.map((type) => (
                <div
                  key={type.label}
                  className={`rounded-2xl p-6 border flex flex-col gap-4 ${
                    type.highlighted
                      ? 'bg-blue-600/10 border-blue-500 ring-1 ring-blue-500/40'
                      : 'bg-zinc-900 border-zinc-700'
                  }`}
                >
                  {type.highlighted && (
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full w-fit">
                      Recomendado
                    </span>
                  )}
                  <div>
                    <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{type.label}</span>
                    <h3 className="text-xl font-bold mt-1 text-white">{type.title}</h3>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">{type.description}</p>
                  <div className="mt-auto space-y-3">
                    <div className="bg-zinc-800/60 rounded-lg p-3">
                      <p className="text-xs font-semibold text-zinc-400 uppercase mb-1">Cuándo conviene</p>
                      <p className="text-sm text-zinc-300">{type.whenUseful}</p>
                    </div>
                    <div className={`rounded-lg p-3 ${type.highlighted ? 'bg-blue-900/20' : 'bg-zinc-800/40'}`}>
                      <p className="text-xs font-semibold text-amber-400 uppercase mb-1">Limitación principal</p>
                      <p className="text-sm text-zinc-300">{type.limitation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Los 10 componentes ── */}
        <section className="py-16 px-4 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Los 10 componentes que debe tener una página para vender productos
            </h2>
            <p className="text-zinc-400 mb-10 text-base md:text-lg">
              Si ya decidiste que necesitas una tienda online completa, aquí están los elementos
              que no pueden faltar. Cada uno cumple una función específica en el ciclo de compra.
            </p>
            <ol className="space-y-6">
              {components.map((item) => (
                <li key={item.number} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm text-white mt-0.5">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base mb-1">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── CTA Intermedio ── */}
        <section className="py-16 px-4 border-t border-zinc-800">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              ¿Tu negocio necesita una página que realmente venda?
            </h2>
            <p className="text-zinc-400 text-base md:text-lg">
              En Webunica evaluamos tu situación actual y te recomendamos la solución correcta,
              sin venderte más de lo que necesitas.
            </p>
            <LeadButton
              service="pagina-web-para-vender-productos"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 transition-colors text-white font-semibold px-8 py-4 rounded-xl text-base cursor-pointer"
            >
              Necesito una página para vender mis productos
            </LeadButton>
          </div>
        </section>

        {/* ── ¿Qué tipo necesita tu negocio? ── */}
        <section className="py-16 px-4 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              ¿Qué tipo de página necesita tu negocio?
            </h2>
            <p className="text-zinc-400 mb-10 text-base md:text-lg">
              La respuesta depende de tu volumen de pedidos, tu situación legal y tu estrategia de ventas.
              Aquí te orientamos según los escenarios más comunes.
            </p>
            <div className="space-y-8">
              {businessGuides.map((guide, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">{guide.heading}</h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">{guide.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Errores comunes ── */}
        <section className="py-16 px-4 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              5 errores comunes en páginas para vender productos
            </h2>
            <p className="text-zinc-400 mb-10 text-base md:text-lg">
              La mayoría de los proyectos de e-commerce que fracasan comparten los mismos errores
              de base. Identificarlos antes de construir te ahorra tiempo y dinero.
            </p>
            <ul className="space-y-5">
              {commonErrors.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 items-start border-l-4 border-amber-500 bg-amber-500/5 rounded-r-xl pl-5 pr-4 py-4"
                >
                  <div>
                    <p className="font-semibold text-amber-300 mb-1">{item.error}</p>
                    <p className="text-zinc-300 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 px-4 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-white">
              Preguntas frecuentes
            </h2>
            <dl className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6">
                  <dt className="font-semibold text-white mb-3">{faq.question}</dt>
                  <dd className="text-zinc-400 text-sm leading-relaxed">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── Artículos relacionados ── */}
        <section className="py-16 px-4 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-8 text-white">Artículos relacionados</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {relatedArticles.map((article) => (
                <li key={article.href}>
                  <Link
                    href={article.href}
                    className="flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-blue-500/50 transition-all rounded-xl px-5 py-4 text-sm text-zinc-300 hover:text-white group"
                  >
                    <span className="text-blue-500 group-hover:text-blue-400 transition-colors text-lg leading-none">→</span>
                    {article.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CTA Final ── */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-zinc-900 border border-blue-500/30 rounded-3xl p-10 md:p-16 space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              Crea la tienda online que tu negocio necesita
            </h2>
            <p className="text-zinc-300 text-base md:text-lg">
              Evaluamos tu proyecto de forma gratuita y te proponemos la solución técnica correcta
              según tu rubro, volumen y presupuesto.
            </p>
            <LeadButton
              service="pagina-web-para-vender-productos"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 transition-colors text-white font-bold px-8 py-4 rounded-xl text-base cursor-pointer"
            >
              Solicitar evaluación de mi proyecto
            </LeadButton>
          </div>
        </section>

      </main>
    </>
  );
}
