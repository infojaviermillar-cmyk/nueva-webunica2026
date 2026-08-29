import { Metadata } from 'next';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Cómo Vender por Internet en Chile: Guía Completa para Comerciantes | Webunica',
  description:
    'Guía práctica para dueños de negocios que quieren vender por internet en Chile. Sin tecnicismos: medios de pago, despacho, tienda online y primeros pasos para empezar a vender online.',
  alternates: {
    canonical: 'https://webunica.cl/como-vender-por-internet',
  },
  openGraph: {
    title: 'Cómo Vender por Internet en Chile: Guía Completa para Comerciantes',
    description:
      'Todo lo que un dueño de negocio necesita saber para empezar a vender por internet en Chile: tienda online, medios de pago, despacho y primeros clientes.',
    url: 'https://webunica.cl/como-vender-por-internet',
    siteName: 'Webunica',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://webunica.cl/como-vender-por-internet/#webpage',
      url: 'https://webunica.cl/como-vender-por-internet/',
      name: 'Cómo Vender por Internet en Chile: Guía Completa para Comerciantes',
      description:
        'Guía práctica para dueños de negocios que quieren vender por internet en Chile.',
      inLanguage: 'es-CL',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://webunica.cl/#website',
        url: 'https://webunica.cl/',
        name: 'Webunica',
      },
      breadcrumb: {
        '@id': 'https://webunica.cl/como-vender-por-internet/#breadcrumb',
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://webunica.cl/como-vender-por-internet/#breadcrumb',
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
          name: 'Cómo Vender por Internet',
          item: 'https://webunica.cl/como-vender-por-internet/',
        },
      ],
    },
    {
      '@type': 'Service',
      name: 'Creación de Tiendas Online para Negocios en Chile',
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
          name: '¿Necesito tener una empresa para vender por internet en Chile?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No necesariamente para comenzar, pero sí para acceder a pasarelas de pago como Webpay Plus que requieren inicio de actividades en el SII. Mercado Pago tiene opciones para personas naturales sin empresa formal.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto dinero necesito para empezar a vender por internet?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depende del nivel de profesionalismo que buscas. Plataformas como Shopify tienen planes desde USD $29 mensuales. A eso hay que sumar el dominio web y la inversión en fotografías de productos.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Puedo vender por internet sin tener un sitio web propio?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí. Existen marketplaces como Mercado Libre o Yapo donde puedes publicar sin necesidad de desarrollar tu propio sitio. Sin embargo, no controlas la experiencia de compra ni los datos de tus clientes.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto tiempo tarda en verse resultados de ventas online?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Las primeras ventas pueden llegar el mismo día del lanzamiento si tienes una base de clientes existente y los contactas directamente. El tráfico orgánico desde Google puede demorar entre 3 y 6 meses en consolidarse.',
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-[22vh] lg:pt-48 pb-20">
        <div className="max-w-4xl mx-auto px-6 mb-20">
          <span className="inline-block mb-6 text-xs font-bold uppercase tracking-widest text-blue-500 border border-blue-500/30 bg-blue-500/10 px-3 py-1 rounded-full">
            TOFU — Guía Informacional
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold uppercase leading-tight mb-6 text-white">
            Cómo vender por internet en Chile:{' '}
            <span className="text-blue-500">guía práctica para dueños de negocio</span>
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
            Si tienes un negocio y quieres empezar a vender por internet, esta guía es para ti.
            No tienes que saber qué es Shopify, WooCommerce ni ningún término técnico. Solo
            necesitas entender el proceso: qué necesitas, por dónde empezar y cómo evitar los
            errores más comunes que cometen los comerciantes en Chile al dar el salto al mundo
            digital.
          </p>
        </div>
      </section>

      {/* ── QUÉ SIGNIFICA VENDER POR INTERNET ──────────────────────────────── */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold uppercase mb-4 text-white">
            Qué significa realmente vender por internet
          </h2>
          <p className="text-zinc-400 mb-10 leading-relaxed">
            Vender por internet no es una sola cosa. Hay al menos tres formas distintas de
            hacerlo, cada una con sus ventajas y sus límites. Antes de invertir un peso, conviene
            entender cuál se adapta mejor a tu negocio.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <div className="text-3xl mb-4">🛒</div>
              <h3 className="text-white font-bold text-lg mb-2 uppercase tracking-wide">
                Marketplace
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Publicas tus productos en plataformas como Mercado Libre o Yapo. La ventaja es
                que ya tienen tráfico. La desventaja: pagas comisiones y no controlas la
                experiencia de compra.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-white font-bold text-lg mb-2 uppercase tracking-wide">
                Redes Sociales
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Vendes a través de Instagram, Facebook o WhatsApp. Es barato y ágil, pero depende
                de que alguien te contacte primero. Difícil de escalar sin sistematizarlo.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-white font-bold text-lg mb-2 uppercase tracking-wide">
                Tienda Propia Online
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Tienes tu propio sitio web con carrito de compras. Controlas todo: la imagen, los
                precios, los datos de clientes y la experiencia. Es la opción más profesional y
                escalable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOS 5 COMPONENTES ────────────────────────────────────────────────── */}
      <section className="pb-24 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 pt-20">
          <h2 className="text-3xl font-bold uppercase mb-4 text-white">
            Los 5 componentes que necesita cualquier venta online
          </h2>
          <p className="text-zinc-400 mb-12 leading-relaxed">
            No importa si vendes en Instagram o en tu propia tienda: toda venta online necesita
            estos cinco elementos funcionando correctamente.
          </p>

          <div className="space-y-0">
            {[
              {
                num: '01',
                title: 'Producto visible',
                desc: 'El cliente tiene que poder ver claramente qué estás vendiendo. Foto de calidad, nombre descriptivo y características relevantes. Sin esto, no hay venta.',
              },
              {
                num: '02',
                title: 'Precio claro',
                desc: 'El precio debe estar visible sin necesidad de preguntar. Incluye si el precio es con o sin IVA, si aplican costos de despacho, y si tienes descuentos por volumen.',
              },
              {
                num: '03',
                title: 'Medio de pago',
                desc: 'Tiene que haber una forma de pagar en línea. Tarjeta de crédito, débito, transferencia con flujo automático. Si el cliente tiene que llamar para pagar, perderás la venta.',
              },
              {
                num: '04',
                title: 'Logística y despacho',
                desc: '¿Cómo llega el producto al cliente? Definir costos, tiempos y operador logístico antes de lanzarte. El despacho mal manejado es el principal motivo de malas evaluaciones.',
              },
              {
                num: '05',
                title: 'Confirmación de compra',
                desc: 'El cliente debe recibir un email o mensaje de confirmación inmediatamente después de comprar. Reduce las dudas, las llamadas de soporte y las devoluciones innecesarias.',
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-6 pb-10 relative">
                {i < 4 && (
                  <div className="absolute left-[1.85rem] top-12 bottom-0 w-px bg-zinc-800" />
                )}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-600/20 border border-blue-600/40 flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-sm">{step.num}</span>
                </div>
                <div className="pt-3">
                  <h3 className="text-white font-bold uppercase tracking-wide mb-2">
                    {step.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEDIOS DE PAGO ────────────────────────────────────────────────────── */}
      <section className="pb-24 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 pt-20">
          <h2 className="text-3xl font-bold uppercase mb-4 text-white">
            Medios de pago disponibles en Chile
          </h2>
          <p className="text-zinc-400 mb-10 leading-relaxed">
            En Chile existen varias plataformas de pago que puedes integrar a tu tienda online.
            Aquí van las más usadas y a quién le conviene cada una.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <div className="text-2xl mb-3">🏦</div>
              <h3 className="text-white font-bold text-base uppercase mb-2">Webpay Plus</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                La solución de Transbank. Alta confianza entre los chilenos. Acepta tarjetas de
                crédito y débito de todos los bancos.
              </p>
              <span className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded-full">
                Para empresas con inicio de actividades
              </span>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <div className="text-2xl mb-3">💳</div>
              <h3 className="text-white font-bold text-base uppercase mb-2">Mercado Pago</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Fácil de instalar, sin mensualidad. Acepta tarjetas, transferencias y hasta pagos
                en cuotas. Ideal para empezar rápido.
              </p>
              <span className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded-full">
                Para personas naturales y PYMES
              </span>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="text-white font-bold text-base uppercase mb-2">Flow</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                Pasarela chilena con soporte para Webpay, transferencias y cuotas sin tarjeta.
                Buena API para integraciones a medida.
              </p>
              <span className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded-full">
                Para tiendas con desarrollo propio
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIO ────────────────────────────────────────────────────── */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-blue-600/20 border border-blue-600/40 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold uppercase text-white mb-4">
              ¿Listo para dar el primer paso?
            </h2>
            <p className="text-zinc-300 mb-8 max-w-xl mx-auto">
              Te ayudamos a evaluar qué necesita tu negocio para empezar a vender en línea. Sin
              costo, sin compromiso.
            </p>
            <LeadButton
              service="Vender por Internet"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wide text-sm px-8 py-4 rounded-xl transition-colors duration-200"
            >
              Solicitar evaluación gratuita
            </LeadButton>
          </div>
        </div>
      </section>

      {/* ── DESPACHO ──────────────────────────────────────────────────────────── */}
      <section className="pb-24 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 pt-20">
          <h2 className="text-3xl font-bold uppercase mb-4 text-white">
            Cómo despachar lo que vendes online en Chile
          </h2>
          <p className="text-zinc-400 mb-10 leading-relaxed">
            El despacho es uno de los puntos más críticos. Un producto llega tarde o en malas
            condiciones y la reputación de tu negocio sufre. Estas son las opciones más usadas
            en Chile:
          </p>

          <ul className="space-y-4">
            {[
              {
                icon: '📦',
                name: 'Chilexpress',
                desc: 'La más conocida en Chile. Cobertura nacional, integración directa con plataformas de e-commerce. Buena para volumen mediano y alto.',
              },
              {
                icon: '🚚',
                name: 'Starken',
                desc: 'Fuerte en regiones. Buena opción si tu cliente objetivo está fuera de Santiago. Precios competitivos en envíos al sur.',
              },
              {
                icon: '🔵',
                name: 'Blue Express',
                desc: 'Enfocada en e-commerce. Integración técnica simple, tracking en tiempo real. Muy usada por tiendas Shopify en Chile.',
              },
              {
                icon: '🔗',
                name: 'Enviame',
                desc: 'Plataforma que agrega múltiples courriers. Desde un solo panel gestionas Chilexpress, Starken, Correos y más. Ideal si tienes volumen.',
              },
              {
                icon: '🏪',
                name: 'Retiro en tienda',
                desc: 'Si tienes local físico, ofrece el retiro sin costo. Reduce el gasto logístico y permite una segunda interacción con el cliente en persona.',
              },
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 bg-zinc-900 border border-zinc-800 rounded-xl p-5"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <span className="text-white font-bold uppercase tracking-wide text-sm">
                    {item.name}
                  </span>
                  <p className="text-zinc-400 text-sm mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── POR DÓNDE EMPEZAR ────────────────────────────────────────────────── */}
      <section className="pb-24 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 pt-20">
          <h2 className="text-3xl font-bold uppercase mb-4 text-white">
            Por dónde empezar según tu situación
          </h2>
          <p className="text-zinc-400 mb-10 leading-relaxed">
            No hay una sola respuesta correcta. Depende de dónde estás hoy. Elige la situación
            que más se parezca a la tuya:
          </p>

          <div className="space-y-5">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7">
              <h3 className="text-white font-bold uppercase tracking-wide text-base mb-3 flex items-center gap-3">
                <span className="text-blue-500">→</span>
                No tengo nada: ni sitio web, ni redes, ni base de clientes
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Empieza con Mercado Libre o Yapo para validar que hay demanda por tu producto. No
                inviertas en una tienda propia hasta tener al menos 10 ventas comprobadas.
                Mientras tanto, crea un perfil de Instagram y documenta el proceso de tu negocio.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7">
              <h3 className="text-white font-bold uppercase tracking-wide text-base mb-3 flex items-center gap-3">
                <span className="text-blue-500">→</span>
                Tengo local físico y clientes habituales
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Tienes la mejor ventaja: una base de clientes existente. Crea una tienda online y
                avísale a tus clientes actuales. Ellos serán tus primeros compradores digitales y
                también tu mejor recomendación. Integra el inventario físico con el online desde
                el primer día.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7">
              <h3 className="text-white font-bold uppercase tracking-wide text-base mb-3 flex items-center gap-3">
                <span className="text-blue-500">→</span>
                Tengo redes sociales activas pero vendo de forma caótica
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Ya tienes demanda y audiencia. El problema es que no tienes un proceso ordenado.
                Una tienda propia te permitirá automatizar el cobro, el stock y los avisos de
                despacho. Así dejarás de responder mensajes de WhatsApp a las 11 PM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────────────── */}
      <section className="pb-24 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 pt-20">
          <h2 className="text-3xl font-bold uppercase mb-10 text-white">
            Preguntas frecuentes sobre cómo vender por internet en Chile
          </h2>

          <div className="space-y-8">
            <div>
              <p className="text-white font-bold mb-2">
                ¿Necesito tener una empresa para vender por internet en Chile?
              </p>
              <p className="text-zinc-400 leading-relaxed">
                No necesariamente para comenzar, pero sí para acceder a pasarelas de pago como
                Webpay Plus que requieren inicio de actividades en el SII. Mercado Pago tiene
                opciones para personas naturales sin empresa formal.
              </p>
            </div>

            <div>
              <p className="text-white font-bold mb-2">
                ¿Cuánto dinero necesito para empezar a vender por internet?
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Depende del nivel de profesionalismo que buscas. Plataformas como Shopify tienen
                planes desde USD $29 mensuales. A eso hay que sumar el dominio web y la inversión
                en fotografías de productos.
              </p>
            </div>

            <div>
              <p className="text-white font-bold mb-2">
                ¿Puedo vender por internet sin tener un sitio web propio?
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Sí. Existen marketplaces como Mercado Libre o Yapo donde puedes publicar sin
                necesidad de desarrollar tu propio sitio. Sin embargo, no controlas la experiencia
                de compra ni los datos de tus clientes.
              </p>
            </div>

            <div>
              <p className="text-white font-bold mb-2">
                ¿Cuánto tiempo tarda en verse resultados de ventas online?
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Las primeras ventas pueden llegar el mismo día del lanzamiento si tienes una base
                de clientes existente y los contactas directamente. El tráfico orgánico desde
                Google puede demorar entre 3 y 6 meses en consolidarse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTÍCULOS RELACIONADOS ─────────────────────────────────────────────── */}
      <section className="pb-24 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 pt-20">
          <h2 className="text-xl font-bold uppercase tracking-widest mb-8 text-zinc-400">
            Artículos relacionados
          </h2>

          <ul className="space-y-4">
            <li>
              <Link
                href="/como-crear-una-tienda-online/"
                className="group flex items-center gap-3 text-white hover:text-blue-400 transition-colors duration-200"
              >
                <span className="text-blue-600 group-hover:text-blue-400 transition-colors">
                  →
                </span>
                Cómo crear una tienda online paso a paso
              </Link>
            </li>
            <li>
              <Link
                href="/pagina-web-para-vender-productos/"
                className="group flex items-center gap-3 text-white hover:text-blue-400 transition-colors duration-200"
              >
                <span className="text-blue-600 group-hover:text-blue-400 transition-colors">
                  →
                </span>
                Qué necesita una página para vender productos
              </Link>
            </li>
            <li>
              <Link
                href="/crear-tienda-online-chile/"
                className="group flex items-center gap-3 text-white hover:text-blue-400 transition-colors duration-200"
              >
                <span className="text-blue-600 group-hover:text-blue-400 transition-colors">
                  →
                </span>
                Crear tienda online con Webunica
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* ── CTA FINAL ──────────────────────────────────────────────────────────── */}
      <section className="pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl bg-gradient-to-br from-blue-700/30 via-blue-600/20 to-zinc-900 border border-blue-600/30 p-14 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold uppercase text-white mb-5 leading-tight">
              ¿Quieres vender por internet con un equipo que conoce el mercado chileno?
            </h2>
            <p className="text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              En Webunica llevamos años ayudando a negocios chilenos a vender en línea. Sabemos
              qué funciona y qué no en el mercado local. Cuéntanos tu caso y te decimos cómo
              empezar.
            </p>
            <LeadButton
              service="Tienda Online Chile"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wide text-sm px-10 py-5 rounded-xl transition-colors duration-200"
            >
              Empezar ahora
            </LeadButton>
          </div>
        </div>
      </section>
    </div>
  );
}
