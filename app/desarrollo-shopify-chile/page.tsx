import { Metadata } from 'next';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import { HeroArticleBanner } from '@/components/dropshipping/hero-article-banner';

export const metadata: Metadata = {
  title: 'Shopify Chile: Desarrollo de Tiendas Online | Webunica',
  description: 'Creamos tiendas Shopify en Chile con pagos, envíos, boleta electrónica, SEO técnico, CRO y capacitación. Planes desde $480.000 + IVA.',
  keywords: 'Shopify Chile, Desarrollo Shopify Chile, Expertos Shopify Chile, Webpay Shopify Chile, Boleta electrónica Shopify Chile, Migrar Magento a Shopify',
};

export default function DesarrolloShopifyChilePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta crear una tienda Shopify en Chile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El costo de desarrollo inicial en Webunica comienza desde $480.000 + IVA. Adicionalmente, debes considerar los costos de la plataforma Shopify, apps de terceros y pasarelas de pago."
        }
      },
      {
        "@type": "Question",
        "name": "¿Shopify funciona con Webpay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shopify puede trabajar con Webpay, pero la disponibilidad y activación dependen de la app disponible, contrato comercial, requisitos técnicos y condiciones vigentes del proveedor."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo usar Flow en Shopify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, Flow suele contar con una integración para procesar pagos en tiendas Shopify operativas en Chile."
        }
      },
      {
        "@type": "Question",
        "name": "¿Shopify permite Mercado Pago?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, existen integraciones de Mercado Pago que permiten procesar transacciones dentro de Shopify."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo emitir boleta electrónica desde Shopify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. En Chile se utilizan aplicaciones y plataformas conectadas que automatizan la emisión de boletas y facturas válidas ante el SII."
        }
      },
      {
        "@type": "Question",
        "name": "¿Shopify sirve para vender con despacho a todo Chile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, puedes configurar tarifas planas, conectarte con couriers locales o usar plataformas multicourier para automatizar envíos nacionales."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es mejor, Shopify o WooCommerce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shopify suele ser una de las mejores alternativas cuando se busca estabilidad, facilidad de administración y menor carga técnica. WooCommerce es útil si requieres control total del código y desarrollo a medida en tu propio servidor."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es mejor, Shopify o Jumpseller?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jumpseller es útil para presupuestos iniciales. Shopify es ideal para marcas que buscan mayor personalización comercial y un ecosistema de aplicaciones más amplio para escalar."
        }
      },
      {
        "@type": "Question",
        "name": "¿Se puede migrar desde Magento a Shopify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Realizamos procesos de migración reduciendo el riesgo de pérdida de posicionamiento mediante redirecciones, auditoría SEO y control de URLs."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto demora crear una tienda Shopify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dependiendo de la complejidad, el volumen de productos y los requerimientos de diseño, un proyecto bien estructurado puede tardar entre 2 y 6 semanas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Necesito saber programación para administrar Shopify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. El panel de administración está diseñado para gestionar productos, pedidos y contenido sin necesidad de conocimientos técnicos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Webunica entrega capacitación?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Nuestros planes incluyen instancias de capacitación para que puedas operar tu tienda de forma autónoma."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo conectar Shopify con WhatsApp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, es posible integrar botones de contacto directo a WhatsApp o soluciones más avanzadas para recuperación de carritos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo posicionar una tienda Shopify en Google?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Shopify cuenta con una estructura técnica base que, al optimizarse con una estrategia de contenidos y SEO, permite posicionar en los resultados de búsqueda."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Webunica - Expertos Shopify Partners",
    "image": "https://webunica.cl/logo.png",
    "description": "Creamos tiendas Shopify en Chile con pagos, envíos, boleta electrónica, SEO técnico, CRO y capacitación.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Santiago",
      "addressRegion": "RM",
      "addressCountry": "CL"
    },
    "url": "https://webunica.cl/desarrollo-shopify-chile"
  };

  return (
    <main className="bg-zinc-50 min-h-screen font-sans text-zinc-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 lg:pt-[20vh] max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="sr-only">Desarrollo Shopify Chile: tiendas online listas para vender</h1>
        <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-6 leading-none text-zinc-950">
          Tu tienda Shopify <span className="text-violet-600 block sm:inline">lista para vender en Chile</span>
        </h2>
        <p className="text-xl lg:text-2xl text-zinc-600 font-light max-w-3xl mb-12 leading-relaxed">
          Diseñamos, configuramos y optimizamos tiendas Shopify para empresas chilenas, con pagos, envíos, productos, SEO técnico, WhatsApp y capacitación.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
          <LeadButton className="bg-violet-600 text-white font-bold px-8 py-4 rounded-full hover:bg-violet-700 transition shadow-lg hover:shadow-violet-600/30 text-center text-lg">
            Solicitar cotización
          </LeadButton>
          <WhatsAppButton className="bg-white border-2 border-zinc-200 text-zinc-900 font-bold px-8 py-4 rounded-full hover:border-zinc-300 transition text-center text-lg flex items-center justify-center gap-2">
            Hablar por WhatsApp
          </WhatsAppButton>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 max-w-2xl w-full text-left">
          <ul className="space-y-4 font-medium text-zinc-700">
            <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> Pagos para Chile.</li>
            <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> Envíos nacionales.</li>
            <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> Boleta y factura electrónica.</li>
            <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> SEO técnico base.</li>
            <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> Capacitación y soporte.</li>
          </ul>
        </div>
      </section>

      {/* Featured Strategic Article Banner */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <HeroArticleBanner />
      </div>

      {/* INTRODUCCIÓN */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">El motor de ventas que necesita tu empresa en Chile</h2>
        <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
          Shopify es la plataforma de comercio electrónico líder a nivel mundial. Su arquitectura SaaS (Software como Servicio) elimina los dolores de cabeza de mantenimiento, caídas de servidor y seguridad que tanto afectan a los negocios.
        </p>
        <p className="text-lg text-zinc-600 leading-relaxed">
          Sin embargo, lanzar una tienda exitosa en Chile requiere localización experta. No basta con subir productos; tu tienda debe conectar con las herramientas de pago, logística y tributarias locales para operar sin fricciones. En <strong>Webunica</strong>, ayudamos a emprendedores y marcas establecidas a tener un canal de venta robusto y preparado para crecer.
        </p>
      </section>

      {/* ¿POR QUÉ ELEGIR SHOPIFY? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">¿Por qué elegir Shopify para tu tienda online?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Seguridad extrema", text: "Certificado SSL y nivel de cumplimiento PCI-DSS. Tus datos y los de tus clientes siempre protegidos." },
              { title: "Estabilidad en alto tráfico", text: "Shopify ofrece una infraestructura preparada para altos volúmenes de tráfico, reduciendo la dependencia de servidores propios durante campañas de alta demanda." },
              { title: "Fácil administración", text: "Un panel intuitivo para que tú y tu equipo gestionen inventario y ventas sin conocimientos técnicos." },
              { title: "Checkout confiable", text: "Un proceso de pago optimizado globalmente que reduce drásticamente los carritos abandonados." },
              { title: "Escalabilidad preparada para crecer", text: "La plataforma crece contigo. Desde operaciones iniciales hasta miles de transacciones, la tienda mantiene su rendimiento." },
              { title: "Ecosistema de Apps", text: "Miles de aplicaciones para automatizar marketing, fidelización, upselling y mucho más." },
              { title: "Menor carga técnica", text: "Menor dependencia técnica en comparación con plataformas auto-alojadas como WooCommerce." },
              { title: "Gestión de catálogo", text: "Edición masiva rápida, control de variantes y colecciones inteligentes dinámicas." }
            ].map(item => (
              <div key={item.title} className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOPIFY PARA CHILE */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Aterrizando Shopify para empresas chilenas</h2>
        <div className="bg-zinc-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex gap-4">
              <span className="text-violet-400 font-bold">1.</span>
              <div>
                <strong className="block mb-1">Pagos Locales</strong>
                <span className="text-zinc-400 text-sm">Integración con los sistemas en los que confían los consumidores (tarjetas, transferencias).</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-violet-400 font-bold">2.</span>
              <div>
                <strong className="block mb-1">Envíos por Región</strong>
                <span className="text-zinc-400 text-sm">Cálculo en carrito para tarifas a regiones y comunas de Chile.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-violet-400 font-bold">3.</span>
              <div>
                <strong className="block mb-1">Boleta Electrónica SII</strong>
                <span className="text-zinc-400 text-sm">Emisión automática conectada a soluciones locales.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-violet-400 font-bold">4.</span>
              <div>
                <strong className="block mb-1">Cálculo de IVA</strong>
                <span className="text-zinc-400 text-sm">Configuración de impuestos para operar de acuerdo a la legislación chilena.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-violet-400 font-bold">5.</span>
              <div>
                <strong className="block mb-1">Integración con ERP</strong>
                <span className="text-zinc-400 text-sm">Conexiones con sistemas de inventario y facturación utilizados en el país.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-violet-400 font-bold">6.</span>
              <div>
                <strong className="block mb-1">WhatsApp Comercial</strong>
                <span className="text-zinc-400 text-sm">Habilitación del canal de comunicación preferido en Chile.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* COSTOS REALES */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Costos reales de Shopify en Chile</h2>
          <p className="text-center text-zinc-600 mb-10">Es importante planificar tu presupuesto considerando los diferentes factores que componen la inversión en un ecommerce.</p>
          
          <div className="overflow-x-auto rounded-2xl border border-zinc-200">
            <table className="w-full text-left border-collapse">
              <thead className="bg-zinc-50 border-b border-zinc-200">
                <tr>
                  <th className="p-4 font-bold text-zinc-800 border-r border-zinc-200">Ítem</th>
                  <th className="p-4 font-bold text-zinc-800 border-r border-zinc-200">Frecuencia</th>
                  <th className="p-4 font-bold text-zinc-800">Referencia</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                <tr>
                  <td className="p-4 border-r border-zinc-200">Plan mensual Shopify</td>
                  <td className="p-4 text-zinc-500 border-r border-zinc-200">Mensual / Anual</td>
                  <td className="p-4 font-medium">Sujeto al plan publicado oficialmente</td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-zinc-200">Desarrollo Inicial Expertos</td>
                  <td className="p-4 text-zinc-500 border-r border-zinc-200">Único</td>
                  <td className="p-4 font-medium">Desde $480.000 CLP + IVA</td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-zinc-200">Dominio (.cl o .com)</td>
                  <td className="p-4 text-zinc-500 border-r border-zinc-200">Anual</td>
                  <td className="p-4 font-medium">~$10.000 - $15.000 CLP</td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-zinc-200">Apps de terceros (opcional)</td>
                  <td className="p-4 text-zinc-500 border-r border-zinc-200">Mensual</td>
                  <td className="p-4 font-medium">Según herramientas seleccionadas</td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-zinc-200">Comisión Pasarela de Pago</td>
                  <td className="p-4 text-zinc-500 border-r border-zinc-200">Por venta</td>
                  <td className="p-4 font-medium">Depende del proveedor</td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-zinc-200">Solución de Boleta Electrónica</td>
                  <td className="p-4 text-zinc-500 border-r border-zinc-200">Mensual</td>
                  <td className="p-4 font-medium">Según proveedor local</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-500 mt-4 text-center">Nota: El valor mensual o anual de Shopify depende del plan vigente publicado por Shopify, modalidad de pago, promociones activas y condiciones de la plataforma.</p>
        </div>
      </section>

      {/* MEDIOS DE PAGO */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Medios de pago para Shopify en Chile</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <h3 className="font-bold text-xl mb-2">Webpay / Transbank</h3>
            <p className="text-sm text-zinc-600 mb-4">La solución más reconocida en Chile para cobros con crédito y débito.</p>
            <p className="text-xs text-zinc-500 italic">Shopify puede trabajar con soluciones como Webpay, Flow, Mercado Pago u otras pasarelas, pero la disponibilidad y activación dependen de la app disponible, contrato comercial, requisitos técnicos y condiciones vigentes del proveedor.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <h3 className="font-bold text-xl mb-2">Flow</h3>
            <p className="text-sm text-zinc-600 mb-4">Agregador de pagos con integración muy estable.</p>
            <p className="text-xs text-zinc-500">Incluye soporte para múltiples medios de pago locales y suele tener una activación más ágil para pymes.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <h3 className="font-bold text-xl mb-2">Mercado Pago</h3>
            <p className="text-sm text-zinc-600 mb-4">Potente ecosistema regional.</p>
            <p className="text-xs text-zinc-500">Permite a los usuarios pagar con su cuenta de Mercado Pago y acceder a beneficios o cuotas especiales en campañas.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <h3 className="font-bold text-xl mb-2">Alternativas Modernas</h3>
            <p className="text-sm text-zinc-600 mb-4">Soluciones como VentiPay o Pago Fácil.</p>
            <p className="text-xs text-zinc-500">Ideales para diversificar opciones, cobros por transferencia o modelos "Buy Now Pay Later".</p>
          </div>
        </div>
      </section>

      {/* ERRORES COMUNES */}
      <section className="py-20 bg-red-50/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-950">Errores comunes al crear una tienda Shopify en Chile</h2>
          <div className="bg-white p-8 rounded-3xl border border-red-100 shadow-sm">
            <ul className="space-y-4 text-zinc-700">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-1">✗</span>
                <span>Lanzar sin validar medios de pago.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-1">✗</span>
                <span>No configurar impuestos e IVA.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-1">✗</span>
                <span>Crear tarifas de envío muy generales.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-1">✗</span>
                <span>Cargar productos sin estructura SEO.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-1">✗</span>
                <span>No crear colecciones pensadas para Google.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-1">✗</span>
                <span>No instalar Meta Pixel, Google Analytics ni Search Console.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-1">✗</span>
                <span>No revisar versión móvil.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-1">✗</span>
                <span>No preparar redirecciones 301 en migraciones.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-1">✗</span>
                <span>Instalar demasiadas apps.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE NUESTRO SERVICIO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Qué incluye nuestro servicio Shopify en Chile</h2>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
            <div className="flex items-center gap-2"><span className="text-violet-600 font-bold">✓</span> Configuración general de Shopify.</div>
            <div className="flex items-center gap-2"><span className="text-violet-600 font-bold">✓</span> Diseño visual adaptado a marca.</div>
            <div className="flex items-center gap-2"><span className="text-violet-600 font-bold">✓</span> Theme profesional.</div>
            <div className="flex items-center gap-2"><span className="text-violet-600 font-bold">✓</span> Home, catálogo, producto, carrito y páginas informativas.</div>
            <div className="flex items-center gap-2"><span className="text-violet-600 font-bold">✓</span> Carga inicial de productos.</div>
            <div className="flex items-center gap-2"><span className="text-violet-600 font-bold">✓</span> Colecciones.</div>
            <div className="flex items-center gap-2"><span className="text-violet-600 font-bold">✓</span> Variantes.</div>
            <div className="flex items-center gap-2"><span className="text-violet-600 font-bold">✓</span> Medios de pago.</div>
            <div className="flex items-center gap-2"><span className="text-violet-600 font-bold">✓</span> Envíos.</div>
            <div className="flex items-center gap-2"><span className="text-violet-600 font-bold">✓</span> WhatsApp.</div>
            <div className="flex items-center gap-2"><span className="text-violet-600 font-bold">✓</span> SEO técnico base.</div>
            <div className="flex items-center gap-2"><span className="text-violet-600 font-bold">✓</span> Meta Pixel.</div>
            <div className="flex items-center gap-2"><span className="text-violet-600 font-bold">✓</span> Google Analytics.</div>
            <div className="flex items-center gap-2"><span className="text-violet-600 font-bold">✓</span> Search Console.</div>
            <div className="flex items-center gap-2"><span className="text-violet-600 font-bold">✓</span> Capacitación.</div>
            <div className="flex items-center gap-2"><span className="text-violet-600 font-bold">✓</span> Soporte.</div>
          </div>
        </div>
      </section>

      {/* MIGRACIÓN */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Migrar tu tienda a Shopify</h2>
        <p className="text-center text-zinc-600 mb-12">Si vienes de Magento, WooCommerce, Jumpseller, Prestashop o una tienda antigua, un cambio mal gestionado puede afectar tu tráfico orgánico.</p>
        
        <div className="bg-zinc-950 text-white p-8 rounded-3xl shadow-xl">
          <h3 className="text-xl font-bold text-green-400 mb-4">Migración Profesional:</h3>
          <p className="text-sm text-zinc-300 mb-6">Realizamos el traspaso reduciendo el riesgo de pérdida de posicionamiento mediante redirecciones, auditoría SEO y control de URLs.</p>
          
          <ul className="grid sm:grid-cols-2 gap-4 text-sm text-zinc-300">
            <li className="flex items-center gap-2">✓ Auditoría SEO inicial</li>
            <li className="flex items-center gap-2">✓ Traspaso de productos e imágenes</li>
            <li className="flex items-center gap-2">✓ Configuración de variantes</li>
            <li className="flex items-center gap-2">✓ Organización de colecciones</li>
            <li className="flex items-center gap-2">✓ Redirecciones 301 (Crítico)</li>
            <li className="flex items-center gap-2">✓ Pruebas de funcionamiento</li>
          </ul>
        </div>
      </section>

      {/* PLANES */}
      <section className="py-20 bg-violet-600 text-white" id="planes">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16 uppercase">Planes de Desarrollo Shopify</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* PLAN PRENDE */}
            <div className="bg-white text-zinc-900 rounded-3xl p-8 shadow-xl flex flex-col">
              <h3 className="font-black text-2xl mb-2 uppercase">Prende</h3>
              <p className="text-violet-600 font-bold text-2xl mb-8">Desde $480.000 <span className="text-sm font-normal text-zinc-500">+ IVA</span></p>
              <ul className="space-y-3 mb-8 text-sm flex-grow">
                <li>✓ Configuración inicial</li>
                <li>✓ Theme profesional</li>
                <li>✓ Carga de productos base</li>
                <li>✓ Pasarela de pago</li>
                <li>✓ Envíos base</li>
                <li>✓ Capacitación</li>
              </ul>
              <LeadButton className="block w-full text-center bg-zinc-950 text-white font-bold py-3 rounded-full hover:bg-zinc-800 transition">Solicitar plan</LeadButton>
            </div>

            {/* PLAN FULL */}
            <div className="bg-zinc-950 text-white rounded-3xl p-8 shadow-2xl scale-105 border-2 border-violet-400 relative flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">El más elegido</div>
              <h3 className="font-black text-2xl mb-2 uppercase">Full</h3>
              <p className="text-violet-400 font-bold text-2xl mb-8">Desde $780.000 <span className="text-sm font-normal text-zinc-400">+ IVA</span></p>
              <ul className="space-y-3 mb-8 text-sm flex-grow">
                <li>✓ Todo el Plan Prende</li>
                <li>✓ Diseño visual adaptado</li>
                <li>✓ Colecciones estructuradas</li>
                <li>✓ SEO Técnico base</li>
                <li>✓ Meta Pixel & Analytics</li>
                <li>✓ Soporte adicional</li>
              </ul>
              <LeadButton className="block w-full text-center bg-violet-500 text-white font-bold py-3 rounded-full hover:bg-violet-400 transition">Solicitar plan</LeadButton>
            </div>

            {/* PLAN AVANZADO */}
            <div className="bg-white text-zinc-900 rounded-3xl p-8 shadow-xl flex flex-col">
              <h3 className="font-black text-2xl mb-2 uppercase">Avanzado</h3>
              <p className="text-violet-600 font-bold text-2xl mb-8">Desde $1.200.000 <span className="text-sm font-normal text-zinc-500">+ IVA</span></p>
              <ul className="space-y-3 mb-8 text-sm flex-grow">
                <li>✓ Todo el Plan Full</li>
                <li>✓ Integraciones complejas</li>
                <li>✓ Estructura CRO enfocada</li>
                <li>✓ Páginas informativas extra</li>
                <li>✓ Asesoría estratégica</li>
                <li>✓ Capacitación avanzada</li>
              </ul>
              <LeadButton className="block w-full text-center bg-zinc-950 text-white font-bold py-3 rounded-full hover:bg-zinc-800 transition">Solicitar plan</LeadButton>
            </div>
          </div>
          <p className="text-center mt-10 text-sm text-violet-200">Valores referenciales sujetos al alcance final del proyecto.</p>
        </div>
      </section>

      {/* PORTAFOLIO */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Proyectos Shopify y ecommerce desarrollados por Webunica</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm text-center">
              <div className="w-full h-48 bg-zinc-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-zinc-400">Imagen del proyecto</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Proyecto Destacado 1</h3>
              <p className="text-zinc-600 text-sm">Desarrollo Shopify con integración de pasarelas locales y logística a medida.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm text-center">
              <div className="w-full h-48 bg-zinc-100 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-zinc-400">Imagen del proyecto</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Proyecto Destacado 2</h3>
              <p className="text-zinc-600 text-sm">Migración a Shopify optimizando conversión y velocidad de carga.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO DE TRABAJO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Nuestro Proceso de Trabajo</h2>
          <ol className="grid sm:grid-cols-2 gap-y-4 gap-x-8 text-sm font-medium text-zinc-700">
            <li className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-100"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold flex-shrink-0">1</span> Diagnóstico inicial.</li>
            <li className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-100"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold flex-shrink-0">2</span> Revisión de productos y necesidades.</li>
            <li className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-100"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold flex-shrink-0">3</span> Propuesta y alcance.</li>
            <li className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-100"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold flex-shrink-0">4</span> Diseño UI y configuración.</li>
            <li className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-100"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold flex-shrink-0">5</span> Carga de contenido.</li>
            <li className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-100"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold flex-shrink-0">6</span> Configuración de pagos y envíos.</li>
            <li className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-100"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold flex-shrink-0">7</span> Pruebas integrales de compra.</li>
            <li className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-100"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold flex-shrink-0">8</span> Capacitación del cliente.</li>
            <li className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-100"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold flex-shrink-0">9</span> Publicación e indexación.</li>
            <li className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl border border-zinc-100"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold flex-shrink-0">10</span> Soporte post-lanzamiento.</li>
          </ol>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Preguntas Frecuentes (Shopify Chile)</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <details key={i} className="group bg-white p-6 rounded-xl shadow-sm border border-zinc-200">
                <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center text-zinc-800">
                  {faq.name}
                  <span className="text-violet-600 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="mt-4 text-zinc-600 leading-relaxed text-sm">
                  {faq.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-zinc-950 text-white text-center" id="contacto">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 uppercase tracking-tighter">Conversemos sobre tu tienda Shopify</h2>
          <p className="text-xl text-zinc-400 mb-10 font-light leading-relaxed">
            Te ayudamos a crear una tienda Shopify lista para vender en Chile, con pagos, envíos, productos, SEO técnico y configuración profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LeadButton className="bg-violet-600 text-white font-bold px-8 py-4 rounded-full hover:bg-violet-500 transition text-lg shadow-lg hover:shadow-violet-600/30">
              Solicitar cotización
            </LeadButton>
            <WhatsAppButton className="bg-white text-zinc-950 font-bold px-8 py-4 rounded-full hover:bg-zinc-200 transition text-lg flex items-center justify-center gap-2">
              Hablar por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </main>
  );
}
