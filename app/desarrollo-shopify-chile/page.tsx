import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Desarrollo Shopify Chile | Agencia Experta E-commerce 2026',
  description: 'Agencia experta en desarrollo de tiendas Shopify en Chile. Configuración de Webpay, envíos, facturación, SEO técnico y migración segura.',
  keywords: 'Shopify Chile, desarrollo Shopify Chile, agencia Shopify Chile, crear tienda Shopify en Chile, tienda online Shopify Chile',
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
          "text": "El costo de desarrollo inicial en Webunica comienza desde $480.000 + IVA. Además, debes considerar el pago mensual a Shopify (desde $29 USD/mes), comisiones de pago y apps adicionales."
        }
      },
      {
        "@type": "Question",
        "name": "¿Shopify funciona con Webpay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, existen integraciones oficiales y de terceros para habilitar Webpay Plus, permitiendo a tus clientes pagar con tarjetas de crédito y débito chilenas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo usar Flow en Shopify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, Flow tiene una aplicación oficial que permite integrar pagos fácilmente en tiendas Shopify en Chile, incluyendo opciones como MACH o Servipag."
        }
      },
      {
        "@type": "Question",
        "name": "¿Shopify permite Mercado Pago?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, Mercado Pago cuenta con integración directa para procesar pagos de forma segura en tu checkout de Shopify."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo emitir boleta electrónica desde Shopify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutamente. En Chile utilizamos aplicaciones y plataformas conectadas (como Bsale, Haulmer o Simple API) que automatizan la emisión de boletas y facturas válidas ante el SII."
        }
      },
      {
        "@type": "Question",
        "name": "¿Shopify sirve para vender con despacho a todo Chile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, puedes configurar tarifas planas, integraciones con couriers locales (Starken, Chilexpress) o usar plataformas multicourier como Shipit y Envíame para automatizar despachos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es mejor, Shopify o WooCommerce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende. Shopify es ideal para negocios que buscan escalabilidad sin preocuparse por servidores, actualizaciones ni caídas. WooCommerce es útil si requieres control total del código y desarrollo a medida."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es mejor, Shopify o Jumpseller?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jumpseller es excelente para presupuestos iniciales o catálogo simple. Shopify es la plataforma definitiva si quieres un ecosistema mundial, mayor personalización comercial y crecer sin límite técnico."
        }
      },
      {
        "@type": "Question",
        "name": "¿Se puede migrar desde Magento a Shopify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Realizamos migraciones SEO seguras, traspasando productos, clientes, pedidos e historial sin perder tu posicionamiento en Google."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto demora crear una tienda Shopify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dependiendo de la complejidad y volumen de productos, un proyecto bien estructurado puede tardar entre 2 y 6 semanas en publicarse."
        }
      },
      {
        "@type": "Question",
        "name": "¿Necesito saber programación para administrar Shopify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Una vez entregada la tienda, el panel es sumamente intuitivo para subir productos, gestionar pedidos y cambiar banners sin tocar código."
        }
      },
      {
        "@type": "Question",
        "name": "¿Webunica entrega capacitación?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Todos nuestros planes incluyen capacitación grabada y en vivo para que tú y tu equipo sean autónomos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo conectar Shopify con WhatsApp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, instalamos botones de chat flotante o integramos sistemas CRM para recuperar carritos abandonados directamente vía WhatsApp."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo posicionar una tienda Shopify en Google?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Totalmente. Shopify tiene una base SEO excelente que, combinada con optimización técnica de títulos, descripciones y velocidad, logra primeros lugares en Google."
        }
      },
      {
        "@type": "Question",
        "name": "¿Shopify sirve para dropshipping en Chile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, puedes conectar con plataformas como AliExpress, CJ Dropshipping, Dropi o proveedores locales para operar sin stock propio."
        }
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Webunica - Agencia de Desarrollo Shopify",
    "image": "https://webunica.cl/logo.png",
    "description": "Agencia experta en desarrollo de tiendas Shopify en Chile.",
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

      {/* 5. HERO SECTION */}
      <section className="pt-32 pb-20 px-6 lg:pt-[20vh] max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-6 leading-none text-zinc-950">
          Desarrollo <span className="text-violet-600">Shopify Chile</span>
        </h1>
        <p className="text-xl lg:text-2xl text-zinc-600 font-light max-w-3xl mb-12 leading-relaxed">
          Creamos tiendas online de alto rendimiento para empresas y pymes chilenas. Conecta Webpay, envíos locales y boleta electrónica en un ecommerce diseñado para convertir.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
          <Link href="#contacto" className="bg-violet-600 text-white font-bold px-8 py-4 rounded-full hover:bg-violet-700 transition shadow-lg hover:shadow-violet-600/30 text-center text-lg">
            Solicitar cotización
          </Link>
          <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-zinc-200 text-zinc-900 font-bold px-8 py-4 rounded-full hover:border-zinc-300 transition text-center text-lg flex items-center justify-center gap-2">
            Hablar por WhatsApp
          </a>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 max-w-2xl w-full text-left">
          <ul className="space-y-4 font-medium text-zinc-700">
            <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> Tienda 100% configurada para operar en Chile.</li>
            <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> Integración con Transbank, Flow y Mercado Pago.</li>
            <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> Configuración de despachos y couriers nacionales.</li>
            <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> Solución de Facturación y Boleta Electrónica SII.</li>
            <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> Optimización CRO (Conversión) y SEO Técnico incluido.</li>
          </ul>
        </div>
      </section>

      {/* 6. INTRODUCCIÓN */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">El motor de ventas que necesita tu empresa en Chile</h2>
        <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
          Shopify es la plataforma de comercio electrónico líder a nivel mundial. Su arquitectura SaaS (Software como Servicio) elimina los dolores de cabeza de mantenimiento, caídas de servidor y seguridad que tanto afectan a los negocios.
        </p>
        <p className="text-lg text-zinc-600 leading-relaxed">
          Sin embargo, lanzar una tienda exitosa en Chile requiere localización experta. No basta con subir productos; tu tienda debe conectar con las herramientas de pago, logística y tributarias locales para operar sin fricciones. En <strong>Webunica</strong>, ayudamos a emprendedores y marcas establecidas a tener un canal de venta robusto y escalable.
        </p>
      </section>

      {/* 7. ¿POR QUÉ ELEGIR SHOPIFY? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">¿Por qué elegir Shopify para tu tienda online?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Seguridad extrema", text: "Certificado SSL y nivel de cumplimiento PCI-DSS. Tus datos y los de tus clientes siempre protegidos." },
              { title: "Estabilidad total", text: "Olvídate de caídas en CyberDay. Servidores listos para recibir picos de tráfico masivo." },
              { title: "Fácil administración", text: "Un panel intuitivo para que tú y tu equipo gestionen inventario y ventas sin conocimientos técnicos." },
              { title: "Checkout confiable", text: "Un proceso de pago optimizado globalmente que reduce drásticamente los carritos abandonados." },
              { title: "Escalabilidad infinita", text: "La plataforma crece contigo. Desde 10 pedidos al mes hasta miles al día, la tienda no se vuelve lenta." },
              { title: "Ecosistema de Apps", text: "Miles de aplicaciones para automatizar marketing, fidelización, upselling y mucho más." },
              { title: "Menor carga técnica", text: "Adiós a los dolores de cabeza actualizando plugins como en WooCommerce." },
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

      {/* 8. SHOPIFY PARA CHILE */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Aterrizando Shopify para empresas chilenas</h2>
        <div className="bg-zinc-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex gap-4">
              <span className="text-violet-400 font-bold">1.</span>
              <div>
                <strong className="block mb-1">Pagos Locales</strong>
                <span className="text-zinc-400 text-sm">Integración rápida con los sistemas que confían los chilenos (tarjetas, transferencias).</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-violet-400 font-bold">2.</span>
              <div>
                <strong className="block mb-1">Envíos por Región</strong>
                <span className="text-zinc-400 text-sm">Cálculo en carrito para tarifas exactas a regiones y comunas de Chile.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-violet-400 font-bold">3.</span>
              <div>
                <strong className="block mb-1">Boleta Electrónica SII</strong>
                <span className="text-zinc-400 text-sm">Emisión automática para evitar el papeleo manual.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-violet-400 font-bold">4.</span>
              <div>
                <strong className="block mb-1">Cálculo de IVA</strong>
                <span className="text-zinc-400 text-sm">Configuración de impuestos para operar en regla con la legislación chilena.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-violet-400 font-bold">5.</span>
              <div>
                <strong className="block mb-1">Integración con ERP</strong>
                <span className="text-zinc-400 text-sm">Conexiones con Defontana, Softland o Bsale para control de inventario unificado.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-violet-400 font-bold">6.</span>
              <div>
                <strong className="block mb-1">WhatsApp Comercial</strong>
                <span className="text-zinc-400 text-sm">El canal de soporte número uno en Chile, a un clic de distancia.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* 9. COSTOS REALES */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Costos reales de Shopify en Chile</h2>
          <p className="text-center text-zinc-600 mb-10">Es importante planificar tu presupuesto sabiendo que el costo no es solo el plan mensual de Shopify.</p>
          
          <div className="overflow-x-auto rounded-2xl border border-zinc-200">
            <table className="w-full text-left">
              <thead className="bg-zinc-50">
                <tr>
                  <th className="p-4 font-bold">Ítem</th>
                  <th className="p-4 font-bold">Frecuencia</th>
                  <th className="p-4 font-bold">Valor Estimado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                <tr><td className="p-4">Plan Shopify (Basic)</td><td className="p-4 text-zinc-500">Mensual</td><td className="p-4 font-medium">Desde $29 USD*</td></tr>
                <tr><td className="p-4">Desarrollo Inicial Agencia</td><td className="p-4 text-zinc-500">Único</td><td className="p-4 font-medium">Desde $480.000 CLP + IVA</td></tr>
                <tr><td className="p-4">Dominio (.cl o .com)</td><td className="p-4 text-zinc-500">Anual</td><td className="p-4 font-medium">~$10.000 - $15.000 CLP</td></tr>
                <tr><td className="p-4">Apps de terceros (opcional)</td><td className="p-4 text-zinc-500">Mensual</td><td className="p-4 font-medium">$0 - $50+ USD</td></tr>
                <tr><td className="p-4">Comisión Pasarela (Flow/Webpay)</td><td className="p-4 text-zinc-500">Por venta</td><td className="p-4 font-medium">~2.5% a 3.5% + IVA</td></tr>
                <tr><td className="p-4">Comisión Shopify Payments</td><td className="p-4 text-zinc-500">Por venta</td><td className="p-4 font-medium">Varía según plan</td></tr>
                <tr><td className="p-4">Boleta Electrónica (ej. Haulmer)</td><td className="p-4 text-zinc-500">Mensual</td><td className="p-4 font-medium">~$15.000 - $30.000 CLP</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-400 mt-4 text-center">*Los valores mensuales de Shopify dependen de los planes vigentes y promociones publicadas oficialmente por la plataforma.</p>
        </div>
      </section>

      {/* 10. MEDIOS DE PAGO */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Medios de pago para Shopify en Chile</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <h3 className="font-bold text-xl mb-2">Webpay / Transbank</h3>
            <p className="text-sm text-zinc-600 mb-4">El estándar chileno para crédito y débito.</p>
            <ul className="text-sm space-y-2 mb-4">
              <li><strong className="text-green-600">Ventaja:</strong> Alta confianza local.</li>
              <li><strong className="text-zinc-800">Ideal para:</strong> Marcas tradicionales, tickets altos.</li>
            </ul>
            <p className="text-xs text-zinc-500 italic">Nota: La disponibilidad nativa puede depender del contrato, apps integradas o condiciones vigentes de Transbank.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <h3 className="font-bold text-xl mb-2">Flow</h3>
            <p className="text-sm text-zinc-600 mb-4">Agregador de pagos con integración muy estable.</p>
            <ul className="text-sm space-y-2 mb-4">
              <li><strong className="text-green-600">Ventaja:</strong> Incluye Webpay, MACH, Servipag y fácil habilitación.</li>
              <li><strong className="text-zinc-800">Ideal para:</strong> Pymes que buscan rapidez y menos papeleo.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <h3 className="font-bold text-xl mb-2">Mercado Pago</h3>
            <p className="text-sm text-zinc-600 mb-4">Potente ecosistema regional.</p>
            <ul className="text-sm space-y-2 mb-4">
              <li><strong className="text-green-600">Ventaja:</strong> Permite pagar con cuenta de Mercado Pago y cuotas sin interés en campañas.</li>
              <li><strong className="text-zinc-800">Ideal para:</strong> Público joven, ventas combinadas con Mercado Libre.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
            <h3 className="font-bold text-xl mb-2">VentiPay / Pago Fácil</h3>
            <p className="text-sm text-zinc-600 mb-4">Alternativas modernas de cobro.</p>
            <ul className="text-sm space-y-2 mb-4">
              <li><strong className="text-green-600">Ventaja:</strong> Pagos con transferencias automatizadas o Buy Now Pay Later.</li>
              <li><strong className="text-zinc-800">Ideal para:</strong> Diversificar opciones de checkout.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 11. ENVÍOS Y 12. BOLETA ELECTRÓNICA */}
      <section className="py-20 bg-zinc-100">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Logística y Envíos Nacionales</h2>
            <p className="text-zinc-600 mb-6">La configuración correcta de despachos es vital para evitar pérdidas o abandonos de carrito.</p>
            <ul className="space-y-4">
              <li className="bg-white p-4 rounded-xl shadow-sm border border-zinc-200">
                <strong className="block text-violet-600">Multicourier (Recomendado)</strong>
                <span className="text-sm">Shipit, Envíame o Sendu conectan Starken, Chilexpress, Bluexpress y otros en una sola app, mostrando tarifas dinámicas.</span>
              </li>
              <li className="bg-white p-4 rounded-xl shadow-sm border border-zinc-200">
                <strong className="block text-violet-600">Tarifas Manuales por Región</strong>
                <span className="text-sm">Si tienes logística propia o tarifas fijas, configuramos zonas geográficas (Ej: RM $3.500, Regiones $5.000).</span>
              </li>
              <li className="bg-white p-4 rounded-xl shadow-sm border border-zinc-200">
                <strong className="block text-violet-600">Estrategias Comerciales</strong>
                <span className="text-sm">Reglas como "Envío gratis sobre $50.000" para aumentar el ticket promedio.</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Boleta y Factura Electrónica</h2>
            <p className="text-zinc-600 mb-6">Emitir documentos tributarios legalmente en Chile sin hacerlos a mano es posible gracias al ecosistema de Shopify.</p>
            <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm h-full">
              <h3 className="font-bold mb-4">Soluciones principales:</h3>
              <ul className="list-disc pl-5 space-y-3 text-zinc-700">
                <li><strong>Bsale:</strong> Si ya usas este ERP, su integración mantiene sincronizado el inventario físico y la emisión de documentos.</li>
                <li><strong>Haulmer / OpenFactura:</strong> Excelente app para generar boletas automáticas y enviarlas al correo del cliente.</li>
                <li><strong>Simple API / Lioren:</strong> Opciones para desarrollos más a medida o conexiones contables directas.</li>
              </ul>
              <div className="mt-6 p-4 bg-yellow-50 text-yellow-800 text-sm rounded-lg border border-yellow-200">
                Aclaración: La elección dependerá de tu sistema contable, volumen de ventas y requerimientos del SII.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. MIGRACIÓN */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Migrar tu tienda a Shopify</h2>
        <p className="text-center text-zinc-600 mb-12">Si vienes de Magento, WooCommerce, Prestashop o Jumpseller, un cambio mal hecho puede destruir tu tráfico en Google. Nosotros lo hacemos seguro.</p>
        
        <div className="bg-zinc-950 text-white p-8 rounded-3xl shadow-xl">
          <h3 className="text-xl font-bold text-red-400 mb-4">Riesgos de una mala migración:</h3>
          <p className="text-sm text-zinc-400 mb-6">Pérdida de SEO, URLs rotas, productos duplicados y clientes confundidos.</p>
          
          <h3 className="text-xl font-bold text-green-400 mb-4">Nuestro Checklist de Migración Segura:</h3>
          <ul className="grid sm:grid-cols-2 gap-4 text-sm text-zinc-300">
            <li className="flex items-center gap-2">✓ Auditoría del sitio actual</li>
            <li className="flex items-center gap-2">✓ Exportación y limpieza de datos</li>
            <li className="flex items-center gap-2">✓ Configuración de variantes</li>
            <li className="flex items-center gap-2">✓ Migración de imágenes</li>
            <li className="flex items-center gap-2">✓ Redirecciones 301 (Crítico)</li>
            <li className="flex items-center gap-2">✓ Configuración pagos/envíos</li>
            <li className="flex items-center gap-2">✓ Publicación controlada</li>
          </ul>
        </div>
      </section>

      {/* 15. PLANES (Including 14) */}
      <section className="py-20 bg-violet-600 text-white" id="planes">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16 uppercase">Planes de Desarrollo Shopify</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* PLAN PRENDE */}
            <div className="bg-white text-zinc-900 rounded-3xl p-8 shadow-xl flex flex-col">
              <h3 className="font-black text-2xl mb-2 uppercase">Plan Prende</h3>
              <p className="text-violet-600 font-bold text-2xl mb-4">Desde $480.000 <span className="text-sm font-normal text-zinc-500">+ IVA</span></p>
              <p className="text-sm text-zinc-600 mb-6 h-12">Ideal para emprendedores o negocios que necesitan lanzar rápido y bien.</p>
              <ul className="space-y-3 mb-8 text-sm flex-grow">
                <li>✓ Configuración inicial de tienda</li>
                <li>✓ Theme profesional optimizado</li>
                <li>✓ Carga inicial de productos</li>
                <li>✓ Configuración pasarela de pago</li>
                <li>✓ Configuración básica de envíos</li>
                <li>✓ Botón WhatsApp</li>
                <li>✓ Capacitación básica</li>
              </ul>
              <Link href="#contacto" className="block text-center bg-zinc-950 text-white font-bold py-3 rounded-full hover:bg-zinc-800 transition">Solicitar plan</Link>
            </div>

            {/* PLAN FULL */}
            <div className="bg-zinc-950 text-white rounded-3xl p-8 shadow-2xl scale-105 border-2 border-violet-400 relative flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">El más elegido</div>
              <h3 className="font-black text-2xl mb-2 uppercase">Plan Full</h3>
              <p className="text-violet-400 font-bold text-2xl mb-4">Desde $780.000 <span className="text-sm font-normal text-zinc-400">+ IVA</span></p>
              <p className="text-sm text-zinc-400 mb-6 h-12">Empresas que necesitan una tienda estructurada, SEO base y mayor personalización.</p>
              <ul className="space-y-3 mb-8 text-sm flex-grow">
                <li>✓ Todo el Plan Prende</li>
                <li>✓ Diseño UI adaptado a marca</li>
                <li>✓ Estructura de colecciones avanzada</li>
                <li>✓ Configuración multicourier</li>
                <li>✓ SEO Técnico base (Titles/Meta)</li>
                <li>✓ Integración Meta Pixel & Analytics</li>
                <li>✓ Soporte post-lanzamiento</li>
              </ul>
              <Link href="#contacto" className="block text-center bg-violet-500 text-white font-bold py-3 rounded-full hover:bg-violet-400 transition">Solicitar plan</Link>
            </div>

            {/* PLAN AVANZADO */}
            <div className="bg-white text-zinc-900 rounded-3xl p-8 shadow-xl flex flex-col">
              <h3 className="font-black text-2xl mb-2 uppercase">Plan Avanzado</h3>
              <p className="text-violet-600 font-bold text-2xl mb-4">Desde $1.200.000 <span className="text-sm font-normal text-zinc-500">+ IVA</span></p>
              <p className="text-sm text-zinc-600 mb-6 h-12">Ecommerce maduros con amplio catálogo, ERP o que buscan máxima conversión.</p>
              <ul className="space-y-3 mb-8 text-sm flex-grow">
                <li>✓ Todo el Plan Full</li>
                <li>✓ Integraciones ERP / Facturación</li>
                <li>✓ Estructura CRO para venta cruzada</li>
                <li>✓ Landings comerciales personalizadas</li>
                <li>✓ Automatizaciones (Klaviyo/Mailchimp)</li>
                <li>✓ Migraciones complejas</li>
                <li>✓ Capacitación nivel administrador</li>
              </ul>
              <Link href="#contacto" className="block text-center bg-zinc-950 text-white font-bold py-3 rounded-full hover:bg-zinc-800 transition">Solicitar plan</Link>
            </div>
          </div>
          <p className="text-center mt-10 text-sm text-violet-200">Los valores son referenciales y sujetos al alcance final de cada proyecto.</p>
        </div>
      </section>

      {/* 16 & 17. SEO Y CRO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">SEO para Tiendas Shopify</h2>
            <p className="text-zinc-600 mb-6">Desarrollamos tiendas construidas para liderar los resultados en Google Chile.</p>
            <ul className="space-y-3 font-medium text-sm text-zinc-700">
              <li>• Optimización de Titles y Metadescripciones.</li>
              <li>• URLs amigables y jerarquía de Colecciones SEO.</li>
              <li>• Compresión de imágenes y ALT Text.</li>
              <li>• Implementación de Schema Product.</li>
              <li>• Indexación en Google Search Console.</li>
              <li>• Optimización de velocidad (Core Web Vitals).</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Optimización CRO</h2>
            <p className="text-zinc-600 mb-6">Una tienda bonita no basta. Diseñamos enfocados en la tasa de conversión.</p>
            <ul className="space-y-3 font-medium text-sm text-zinc-700">
              <li>• Botones de acción claros y sticky.</li>
              <li>• Políticas de despacho y confianza visibles.</li>
              <li>• Estructuras de Cross selling (productos relacionados).</li>
              <li>• Upselling en el carrito de compras.</li>
              <li>• Elementos de prueba social y reseñas.</li>
              <li>• Formularios de carrito optimizados.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 19. COMPARATIVA */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Shopify vs WooCommerce vs Jumpseller</h2>
          <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-zinc-200">
            <table className="w-full text-sm">
              <thead className="bg-zinc-950 text-white text-left">
                <tr>
                  <th className="p-4">Plataforma</th>
                  <th className="p-4">Facilidad / Mantenimiento</th>
                  <th className="p-4">Escalabilidad</th>
                  <th className="p-4">Ideal para...</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                <tr>
                  <td className="p-4 font-bold text-violet-600">Shopify</td>
                  <td className="p-4 text-zinc-600">Extremadamente fácil, cero mantenimiento técnico.</td>
                  <td className="p-4 text-zinc-600">Infinito.</td>
                  <td className="p-4 text-zinc-600">Marcas serias, empresas que buscan crecimiento estable.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">WooCommerce</td>
                  <td className="p-4 text-zinc-600">Alta dependencia técnica, requiere actualizar plugins.</td>
                  <td className="p-4 text-zinc-600">Alto (si el servidor lo soporta).</td>
                  <td className="p-4 text-zinc-600">Desarrollos 100% a medida.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Jumpseller</td>
                  <td className="p-4 text-zinc-600">Muy fácil.</td>
                  <td className="p-4 text-zinc-600">Limitado.</td>
                  <td className="p-4 text-zinc-600">Microempresas iniciando.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-zinc-500 mt-6 max-w-3xl mx-auto">
            Conclusión: Shopify no siempre es la única opción, pero es la más recomendable cuando se busca estabilidad, facilidad de administración a largo plazo y la menor carga técnica.
          </p>
        </div>
      </section>

      {/* 20. PROCESO DE TRABAJO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Nuestro Proceso de Trabajo</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <ol className="space-y-4 text-sm font-medium text-zinc-700">
              <li className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold">1</span> Diagnóstico inicial.</li>
              <li className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold">2</span> Revisión de productos y necesidades.</li>
              <li className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold">3</span> Propuesta y alcance.</li>
              <li className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold">4</span> Diseño UI y configuración.</li>
              <li className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold">5</span> Carga de contenido.</li>
            </ol>
            <ol className="space-y-4 text-sm font-medium text-zinc-700" start={6}>
              <li className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold">6</span> Configuración de pagos y envíos.</li>
              <li className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold">7</span> Pruebas integrales de compra.</li>
              <li className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold">8</span> Capacitación del cliente.</li>
              <li className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold">9</span> Publicación e indexación.</li>
              <li className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold">10</span> Soporte post-lanzamiento.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* 21. PREGUNTAS FRECUENTES */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Preguntas Frecuentes (Shopify Chile)</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, i) => (
              <details key={i} className="group bg-white p-6 rounded-xl shadow-sm border border-zinc-200">
                <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center text-zinc-800">
                  {faq.name}
                  <span className="text-violet-600 group-open:rotate-45 transition-transform text-2xl">+</span>
                </summary>
                <p className="mt-4 text-zinc-600 leading-relaxed text-sm">
                  {faq.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 22. CTA FINAL */}
      <section className="py-24 bg-zinc-950 text-white text-center" id="contacto">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 uppercase tracking-tighter">Conversemos sobre tu tienda Shopify</h2>
          <p className="text-xl text-zinc-400 mb-10 font-light">
            Te ayudamos a crear una tienda lista para vender en Chile, con pagos, envíos, productos, SEO y configuración profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hola@webunica.cl" className="bg-violet-600 text-white font-bold px-8 py-4 rounded-full hover:bg-violet-500 transition text-lg">
              Solicitar cotización
            </a>
            <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" className="bg-white text-zinc-950 font-bold px-8 py-4 rounded-full hover:bg-zinc-200 transition text-lg">
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
