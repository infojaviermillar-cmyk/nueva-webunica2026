import { Metadata } from 'next';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Integración Fintoc en Shopify Chile | Webunica',
  description: 'Integramos Fintoc en Shopify para aceptar pagos por transferencia en Chile. Configuración, pruebas, checkout y soporte para tu tienda.',
  keywords: 'Integrar Fintoc en Shopify, Fintoc Shopify Chile, Fintoc Shopify, pagos por transferencia Shopify Chile, pasarela de pago Shopify Chile, medio de pago Fintoc Shopify, integración Fintoc Shopify Chile, aceptar transferencias en Shopify, pagos bancarios Shopify Chile, Webpay vs Fintoc Shopify, Flow vs Fintoc Shopify, Mercado Pago vs Fintoc Shopify',
};

export default function IntegracionFintocShopifyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Se puede integrar Fintoc en Shopify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, es posible integrar Fintoc en Shopify utilizando la aplicación oficial o las soluciones de conexión provistas por Fintoc para la plataforma."
        }
      },
      {
        "@type": "Question",
        "name": "¿Fintoc funciona en Shopify Chile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, Fintoc está diseñado para conectar cuentas bancarias chilenas, permitiendo a los clientes de Shopify Chile pagar mediante transferencias desde sus bancos locales."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué necesito para activar Fintoc en Shopify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generalmente se requiere una cuenta empresa o personal validada, inicio de actividades, RUT y una cuenta bancaria comercial en Chile, además de la cuenta de Fintoc."
        }
      },
      {
        "@type": "Question",
        "name": "¿Fintoc reemplaza a Webpay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No necesariamente. Fintoc es una alternativa específica para pagos por transferencia. Webpay se enfoca principalmente en pagos con tarjetas de crédito y débito. Recomendamos mantener ambos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo usar Fintoc junto con Webpay, Flow o Mercado Pago?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, Shopify permite configurar múltiples pasarelas de pago, por lo que puedes ofrecer Fintoc para transferencias y Mercado Pago, Flow o Webpay para tarjetas de crédito."
        }
      },
      {
        "@type": "Question",
        "name": "¿Fintoc permite pagar con tarjeta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, el enfoque principal de Fintoc es el pago a través de transferencia bancaria directa (cuenta a cuenta)."
        }
      },
      {
        "@type": "Question",
        "name": "¿Fintoc sirve para recibir transferencias bancarias?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, esa es su función principal. Fintoc automatiza y facilita el proceso de recibir transferencias bancarias sin requerir validación manual."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta usar Fintoc en Shopify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Las comisiones y condiciones comerciales deben revisarse directamente en la página oficial de Fintoc, ya que pueden cambiar según producto, volumen, país o condiciones vigentes."
        }
      },
      {
        "@type": "Question",
        "name": "¿Webunica cobra por integrar Fintoc?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, cobramos un valor por el servicio de configuración, pruebas de flujo, revisión de checkout y soporte para dejar el medio de pago operando correctamente."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto demora integrar Fintoc en Shopify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La integración técnica puede tomar pocos días, pero la activación definitiva depende del tiempo de revisión y aprobación de la cuenta por parte del proveedor."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo probar Fintoc antes de publicar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, es parte de nuestro servicio realizar pruebas de compra y revisión de estados antes de liberar el método de pago al público."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué pasa con los reembolsos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los reembolsos deben gestionarse según las políticas de la pasarela y las capacidades de devolución bancaria; te orientamos en cómo es este flujo operativo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Fintoc emite boleta electrónica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No de forma nativa. Fintoc es un medio de pago. Para emitir boletas electrónicas en Shopify debes conectar una aplicación de facturación compatible con el SII."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo usar Fintoc en una tienda Shopify nueva?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, siempre que cuentes con los requisitos comerciales, de empresa y la cuenta bancaria exigidos por el proveedor."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puedo agregar Fintoc si mi tienda ya vende con otro medio de pago?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, puedes añadir Fintoc como un método de pago adicional en tu checkout de Shopify sin interrumpir tus operaciones actuales."
        }
      },
      {
        "@type": "Question",
        "name": "¿Fintoc mejora la conversión?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Puede ayudar a reducir la fricción en clientes que prefieren pagar mediante transferencia, eliminando el proceso manual de enviar comprobantes por WhatsApp."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué pasa si el cliente no completa el pago?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El pedido quedará registrado en Shopify como pendiente de pago o abandonado, permitiéndote recuperarlo o cancelarlo posteriormente según tu flujo de trabajo."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Integración de Fintoc en Shopify",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Webunica.cl"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Chile"
    },
    "description": "Servicio de configuración e integración de la pasarela Fintoc en tiendas Shopify en Chile. Incluye configuración, pruebas de flujo, checkout y soporte técnico."
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Webunica.cl",
    "image": "https://webunica.cl/logo.png",
    "description": "Agencia chilena especializada en desarrollo Shopify, configuración de tiendas online, medios de pago, envíos y SEO técnico.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Santiago",
      "addressRegion": "RM",
      "addressCountry": "CL"
    },
    "url": "https://webunica.cl/integracion-fintoc-shopify"
  };

  return (
    <main className="bg-zinc-50 min-h-screen font-sans text-zinc-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 lg:pt-[20vh] max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-6 leading-none text-zinc-950">
          Integración de Fintoc en Shopify <span className="text-violet-600 block sm:inline">para tiendas chilenas</span>
        </h1>
        <p className="text-xl lg:text-2xl text-zinc-600 font-light max-w-3xl mb-12 leading-relaxed">
          Agrega Fintoc como medio de pago en tu tienda Shopify y permite que tus clientes paguen por transferencia bancaria de forma más simple, rápida y ordenada.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
          <LeadButton className="bg-violet-600 text-white font-bold px-8 py-4 rounded-full hover:bg-violet-700 transition shadow-lg hover:shadow-violet-600/30 text-center text-lg">
            Solicitar integración
          </LeadButton>
          <WhatsAppButton className="bg-white border-2 border-zinc-200 text-zinc-900 font-bold px-8 py-4 rounded-full hover:border-zinc-300 transition text-center text-lg flex items-center justify-center gap-2">
            Hablar por WhatsApp
          </WhatsAppButton>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 max-w-2xl w-full text-left">
          <ul className="space-y-4 font-medium text-zinc-700">
            <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500" /> Pagos por transferencia bancaria.</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500" /> Configuración en Shopify.</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500" /> Pruebas antes de publicar.</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500" /> Revisión de checkout móvil.</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="text-green-500" /> Soporte para tiendas chilenas.</li>
          </ul>
        </div>
      </section>

      {/* ¿QUÉ ES FINTOC? */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">¿Qué es Fintoc y cómo funciona en Shopify?</h2>
        <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
          Fintoc es una solución de pagos que permite recibir pagos por transferencia bancaria y que puede integrarse en Shopify mediante su app o mediante soluciones disponibles del proveedor. En una tienda online, el cliente selecciona Fintoc como medio de pago, elige su banco, autoriza la transferencia y el comercio recibe confirmación del pago según el flujo del proveedor.
        </p>
        <div className="bg-violet-50 border border-violet-100 p-6 rounded-2xl text-violet-900 text-sm mt-8 flex gap-4">
          <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Aclaración importante:</strong> Webunica no es Fintoc ni representa comercialmente a Fintoc. Prestamos el servicio de configuración, implementación, pruebas y acompañamiento técnico/comercial para tiendas Shopify.
          </p>
        </div>
      </section>

      {/* ¿POR QUÉ AGREGAR FINTOC? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">¿Por qué agregar Fintoc a tu tienda Shopify?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Método adicional", text: "Agregar un método de pago adicional a tu ecosistema." },
              { title: "Transferencia bancaria", text: "Ofrecer pago por transferencia bancaria de forma directa." },
              { title: "Independencia", text: "Reducir dependencia de un solo proveedor de pagos." },
              { title: "Mejor experiencia", text: "Mejorar alternativas para clientes que prefieren transferencia." },
              { title: "Costos variables", text: "Evaluar costos por transacción frente a otros métodos de pago." },
              { title: "Orden operacional", text: "Mejorar orden operacional respecto a transferencias manuales." },
              { title: "Confirmación", text: "Confirmación de pago más estructurada que una transferencia tradicional." },
              { title: "Adiós WhatsApp", text: "Mejor experiencia que pedir comprobantes por WhatsApp." }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-zinc-600 italic">Puede mejorar la experiencia de pago en negocios donde los clientes ya están acostumbrados a transferir.</p>
        </div>
      </section>

      {/* FINTOC VS TRANSFERENCIA MANUAL */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Fintoc vs Transferencia manual</h2>
        <div className="overflow-x-auto rounded-2xl border border-zinc-200">
          <table className="w-full text-left border-collapse bg-white">
            <thead className="bg-zinc-50 border-b border-zinc-200">
              <tr>
                <th className="p-4 font-bold text-zinc-800 border-r border-zinc-200 w-1/3">Aspecto</th>
                <th className="p-4 font-bold text-zinc-800 border-r border-zinc-200 w-1/3">Transferencia manual</th>
                <th className="p-4 font-bold text-violet-600 w-1/3">Fintoc en Shopify</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              <tr>
                <td className="p-4 border-r border-zinc-200 font-medium">Confirmación de pago</td>
                <td className="p-4 text-zinc-600 border-r border-zinc-200">Requiere revisión manual del banco.</td>
                <td className="p-4 text-zinc-800 font-medium">Confirmación automatizada según flujo del proveedor.</td>
              </tr>
              <tr>
                <td className="p-4 border-r border-zinc-200 font-medium">Experiencia del cliente</td>
                <td className="p-4 text-zinc-600 border-r border-zinc-200">Debe salir de la tienda, transferir y enviar comprobante.</td>
                <td className="p-4 text-zinc-800 font-medium">Se mantiene en un flujo estructurado desde el checkout.</td>
              </tr>
              <tr>
                <td className="p-4 border-r border-zinc-200 font-medium">Orden del pedido</td>
                <td className="p-4 text-zinc-600 border-r border-zinc-200">Pedido queda pendiente hasta revisión.</td>
                <td className="p-4 text-zinc-800 font-medium">El estado se actualiza automáticamente al confirmarse.</td>
              </tr>
              <tr>
                <td className="p-4 border-r border-zinc-200 font-medium">Revisión administrativa</td>
                <td className="p-4 text-zinc-600 border-r border-zinc-200">Alta carga de tiempo validando cuentas.</td>
                <td className="p-4 text-zinc-800 font-medium">Proceso digitalizado en Dashboard.</td>
              </tr>
              <tr>
                <td className="p-4 border-r border-zinc-200 font-medium">Riesgo de errores</td>
                <td className="p-4 text-zinc-600 border-r border-zinc-200">Errores de monto o RUT al digitar.</td>
                <td className="p-4 text-zinc-800 font-medium">Datos preconectados reducen fricción.</td>
              </tr>
              <tr>
                <td className="p-4 border-r border-zinc-200 font-medium">Escalabilidad operativa</td>
                <td className="p-4 text-zinc-600 border-r border-zinc-200">Dificultad en campañas o eventos grandes.</td>
                <td className="p-4 text-zinc-800 font-medium">Capacidad para procesar volumen.</td>
              </tr>
              <tr>
                <td className="p-4 border-r border-zinc-200 font-medium">Conciliación</td>
                <td className="p-4 text-zinc-600 border-r border-zinc-200">1 a 1 mediante Excel y cartolas bancarias.</td>
                <td className="p-4 text-zinc-800 font-medium">Conciliación estructurada en plataforma.</td>
              </tr>
              <tr>
                <td className="p-4 border-r border-zinc-200 font-medium">Profesionalismo</td>
                <td className="p-4 text-zinc-600 border-r border-zinc-200">Experiencia rudimentaria e informal.</td>
                <td className="p-4 text-zinc-800 font-medium">Experiencia de pago moderna.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-center mt-8 text-lg font-medium text-zinc-800 bg-zinc-100 p-6 rounded-2xl">
          Si hoy recibes transferencias manuales y revisas comprobantes por WhatsApp o correo, Fintoc puede ayudarte a ordenar ese proceso dentro del flujo de compra.
        </p>
      </section>

      {/* FINTOC VS OTROS MEDIOS */}
      <section className="py-20 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Fintoc vs Webpay, Flow y Mercado Pago</h2>
          <div className="overflow-x-auto rounded-2xl border border-zinc-800">
            <table className="w-full text-left border-collapse bg-zinc-900">
              <thead className="bg-zinc-800 border-b border-zinc-700">
                <tr>
                  <th className="p-4 font-bold text-zinc-100 border-r border-zinc-700">Medio de pago</th>
                  <th className="p-4 font-bold text-zinc-100 border-r border-zinc-700">Tipo de pago</th>
                  <th className="p-4 font-bold text-zinc-100 border-r border-zinc-700">Ventajas</th>
                  <th className="p-4 font-bold text-zinc-100 border-r border-zinc-700">Consideraciones</th>
                  <th className="p-4 font-bold text-zinc-100">Cuándo conviene</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-sm">
                <tr>
                  <td className="p-4 border-r border-zinc-800 font-bold text-violet-400">Fintoc</td>
                  <td className="p-4 text-zinc-300 border-r border-zinc-800">Transferencia Bancaria</td>
                  <td className="p-4 text-zinc-300 border-r border-zinc-800">Automatiza la transferencia. Puede tener costos competitivos según ticket.</td>
                  <td className="p-4 text-zinc-300 border-r border-zinc-800">No procesa tarjetas de crédito ni ofrece cuotas.</td>
                  <td className="p-4 text-zinc-300">Como complemento para quienes prefieren transferir, o para B2B.</td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-zinc-800 font-bold">Webpay / Transbank</td>
                  <td className="p-4 text-zinc-300 border-r border-zinc-800">Crédito / Débito</td>
                  <td className="p-4 text-zinc-300 border-r border-zinc-800">El estándar más conocido en Chile. Pago en cuotas.</td>
                  <td className="p-4 text-zinc-300 border-r border-zinc-800">Altamente dependiente del procesador centralizado.</td>
                  <td className="p-4 text-zinc-300">Esencial para el 90% de los B2C que requieren ofrecer cuotas.</td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-zinc-800 font-bold">Flow</td>
                  <td className="p-4 text-zinc-300 border-r border-zinc-800">Agregador Multi-pago</td>
                  <td className="p-4 text-zinc-300 border-r border-zinc-800">Estabilidad, agrupa Servipag, Webpay, Multicaja en una app.</td>
                  <td className="p-4 text-zinc-300 border-r border-zinc-800">La comisión es por servicio de agregador.</td>
                  <td className="p-4 text-zinc-300">Ideal para Pymes que buscan activación rápida y estabilidad.</td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-zinc-800 font-bold">Mercado Pago</td>
                  <td className="p-4 text-zinc-300 border-r border-zinc-800">Billetera / Tarjetas</td>
                  <td className="p-4 text-zinc-300 border-r border-zinc-800">Permite pagar con saldo de billetera virtual. Fuerte ecosistema.</td>
                  <td className="p-4 text-zinc-300 border-r border-zinc-800">La experiencia de redirección y costos puede variar.</td>
                  <td className="p-4 text-zinc-300">Para audiencias que ya operan dentro del ecosistema de Mercado Libre.</td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-zinc-800 font-bold">Transferencia Manual</td>
                  <td className="p-4 text-zinc-300 border-r border-zinc-800">Depósito Directo</td>
                  <td className="p-4 text-zinc-300 border-r border-zinc-800">Sin comisiones de pasarela.</td>
                  <td className="p-4 text-zinc-300 border-r border-zinc-800">Carga operativa alta, fricción para el usuario, errores manuales.</td>
                  <td className="p-4 text-zinc-300">Solo en etapa de validación o con volúmenes extremadamente bajos.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center mt-8 text-zinc-400">
            La mejor configuración depende del tipo de cliente, ticket promedio, volumen de ventas, márgenes, necesidad de cuotas, medios de pago esperados y flujo administrativo.
          </p>
        </div>
      </section>

      {/* CASOS DE USO Y COMPATIBILIDAD */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Casos donde Fintoc puede ser una buena alternativa</h2>
            <ul className="space-y-4">
              <li className="flex gap-3"><CheckCircle2 className="text-violet-600 flex-shrink-0" /> <span>Tiendas con alto volumen de transferencias.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="text-violet-600 flex-shrink-0" /> <span>Ecommerce con margen ajustado.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="text-violet-600 flex-shrink-0" /> <span>Empresas B2B.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="text-violet-600 flex-shrink-0" /> <span>Tiendas con ticket promedio alto.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="text-violet-600 flex-shrink-0" /> <span>Negocios que reciben pagos manuales.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="text-violet-600 flex-shrink-0" /> <span>Empresas que quieren agregar un medio de pago adicional.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="text-violet-600 flex-shrink-0" /> <span>Tiendas que quieren reducir fricción de transferencia manual.</span></li>
            </ul>
          </div>
          <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-200">
            <h2 className="text-2xl font-bold mb-6">Casos donde conviene mantener otros medios de pago</h2>
            <p className="text-zinc-600 mb-6 leading-relaxed">
              En muchos proyectos recomendamos mantener más de un medio de pago. Fintoc puede funcionar como alternativa por transferencia, mientras otros proveedores cubren tarjetas, cuotas u otros métodos que tus clientes ya usan.
            </p>
            <p className="text-zinc-600 leading-relaxed font-medium">
              Fintoc no necesariamente reemplaza a las tarjetas de crédito, las compras en cuotas, Webpay, Mercado Pago o Flow.
            </p>
          </div>
        </div>
      </section>

      {/* CHECKLIST: ANTES DE INTEGRAR */}
      <section className="py-20 bg-violet-600 text-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Qué revisamos antes de integrar Fintoc en Shopify</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/10 p-4 rounded-xl">✓ Si la tienda Shopify está activa.</div>
            <div className="bg-white/10 p-4 rounded-xl">✓ País y moneda configurada.</div>
            <div className="bg-white/10 p-4 rounded-xl">✓ Estado del checkout.</div>
            <div className="bg-white/10 p-4 rounded-xl">✓ Medios de pago actuales.</div>
            <div className="bg-white/10 p-4 rounded-xl">✓ Datos de empresa y RUT.</div>
            <div className="bg-white/10 p-4 rounded-xl">✓ Razón social y Giro.</div>
            <div className="bg-white/10 p-4 rounded-xl">✓ Cuenta bancaria para pagos.</div>
            <div className="bg-white/10 p-4 rounded-xl">✓ Correos transaccionales.</div>
            <div className="bg-white/10 p-4 rounded-xl">✓ Políticas de pago.</div>
            <div className="bg-white/10 p-4 rounded-xl">✓ Experiencia móvil.</div>
            <div className="bg-white/10 p-4 rounded-xl">✓ Pruebas de pedido.</div>
            <div className="bg-white/10 p-4 rounded-xl">✓ Boleta/factura electrónica.</div>
            <div className="bg-white/10 p-4 rounded-xl">✓ Flujo de reembolsos.</div>
            <div className="bg-white/10 p-4 rounded-xl">✓ Analítica y seguimiento.</div>
          </div>
        </div>
      </section>

      {/* REQUISITOS HABITUALES */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Requisitos habituales para activar Fintoc</h2>
          <p className="text-zinc-600 mb-10">
            Los requisitos pueden variar según las condiciones vigentes del proveedor. Como información orientativa, generalmente se requiere:
          </p>
          <ul className="text-left space-y-3 max-w-lg mx-auto bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
            <li>• Certificado de inicio de actividades.</li>
            <li>• RUT de empresa o persona.</li>
            <li>• Razón social y Nombre de fantasía.</li>
            <li>• Dirección y comuna.</li>
            <li>• Giro o actividad económica.</li>
            <li>• Cuenta bancaria donde se recibirán los pagos.</li>
            <li>• Acceso a Shopify.</li>
            <li>• Cuenta o Dashboard de Fintoc.</li>
          </ul>
          <p className="mt-8 text-sm text-zinc-500 font-medium">Los requisitos definitivos deben validarse directamente con Fintoc al momento de la activación.</p>
        </div>
      </section>

      {/* PROCESO EN 8 PASOS & QUÉ INCLUYE */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">Proceso de integración con Webunica</h2>
            <ol className="space-y-6">
              <li className="flex gap-4"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold flex-shrink-0">1</span> <div><strong className="block">Diagnóstico de la tienda Shopify.</strong></div></li>
              <li className="flex gap-4"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold flex-shrink-0">2</span> <div><strong className="block">Revisión de medios de pago actuales.</strong></div></li>
              <li className="flex gap-4"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold flex-shrink-0">3</span> <div><strong className="block">Validación de requisitos para activar Fintoc.</strong></div></li>
              <li className="flex gap-4"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold flex-shrink-0">4</span> <div><strong className="block">Instalación o configuración de la app disponible.</strong></div></li>
              <li className="flex gap-4"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold flex-shrink-0">5</span> <div><strong className="block">Configuración del Dashboard y datos.</strong></div></li>
              <li className="flex gap-4"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold flex-shrink-0">6</span> <div><strong className="block">Activación del medio de pago en Shopify.</strong></div></li>
              <li className="flex gap-4"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold flex-shrink-0">7</span> <div><strong className="block">Pruebas de pedido, pago y estados.</strong></div></li>
              <li className="flex gap-4"><span className="w-8 h-8 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center font-bold flex-shrink-0">8</span> <div><strong className="block">Revisión final, capacitación y publicación.</strong></div></li>
            </ol>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8">Qué incluye nuestro servicio Fintoc Shopify</h2>
            <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
              <ul className="space-y-3 font-medium text-zinc-700">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-violet-600" /> Revisión inicial de Shopify.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-violet-600" /> Revisión de medios de pago actuales.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-violet-600" /> Instalación/configuración de Fintoc según disponibilidad.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-violet-600" /> Acompañamiento en datos de activación.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-violet-600" /> Configuración del medio de pago.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-violet-600" /> Prueba de compra y Prueba en móvil.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-violet-600" /> Revisión de estado del pedido.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-violet-600" /> Revisión de mensajes al cliente.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-violet-600" /> Orientación sobre reembolsos.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-violet-600" /> Recomendaciones de checkout.</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-violet-600" /> Capacitación básica y Soporte posterior.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ERRORES COMUNES */}
      <section className="py-20 bg-red-50/50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-950">Errores comunes al integrar medios de pago</h2>
          <div className="bg-white p-8 rounded-3xl border border-red-100 shadow-sm">
            <ul className="grid sm:grid-cols-2 gap-4 text-zinc-700 mb-8">
              <li className="flex items-start gap-2"><XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" /> <span>Instalar un medio de pago sin revisar condiciones comerciales.</span></li>
              <li className="flex items-start gap-2"><XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" /> <span>No probar pedidos antes de publicar.</span></li>
              <li className="flex items-start gap-2"><XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" /> <span>No revisar estados de pago y correos.</span></li>
              <li className="flex items-start gap-2"><XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" /> <span>Dejar solo un medio de pago sin alternativas.</span></li>
              <li className="flex items-start gap-2"><XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" /> <span>No informar correctamente al cliente.</span></li>
              <li className="flex items-start gap-2"><XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" /> <span>No considerar el flujo de reembolsos.</span></li>
              <li className="flex items-start gap-2"><XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" /> <span>No revisar la emisión de boleta o factura.</span></li>
              <li className="flex items-start gap-2"><XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" /> <span>No medir la conversión ni comparar costos.</span></li>
            </ul>
            <p className="text-center font-bold text-red-900 bg-red-50 p-4 rounded-xl">
              En Webunica evitamos estos errores revisando el flujo completo antes de dejar el medio de pago activo en producción.
            </p>
          </div>
        </div>
      </section>

      {/* COSTOS */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Costos de integrar Fintoc en Shopify</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
            <h3 className="font-bold text-lg mb-3">A. Costos del proveedor</h3>
            <p className="text-sm text-zinc-600 mb-2">• Tarifas, comisiones o condiciones comerciales de Fintoc.</p>
            <p className="text-sm text-zinc-600 mb-2">• Pueden cambiar según producto, volumen o condiciones vigentes.</p>
            <p className="text-sm text-zinc-600">• Deben revisarse directamente con Fintoc.</p>
          </div>
          <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
            <h3 className="font-bold text-lg mb-3">B. Costos del servicio Webunica</h3>
            <p className="text-sm text-zinc-600 mb-2">• Configuración y Pruebas.</p>
            <p className="text-sm text-zinc-600 mb-2">• Revisión de checkout.</p>
            <p className="text-sm text-zinc-600">• Acompañamiento y Soporte.</p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-zinc-200">
          <table className="w-full text-left border-collapse bg-white">
            <thead className="bg-zinc-50 border-b border-zinc-200">
              <tr>
                <th className="p-4 font-bold text-zinc-800 border-r border-zinc-200">Ítem</th>
                <th className="p-4 font-bold text-zinc-800 border-r border-zinc-200">Quién lo cobra</th>
                <th className="p-4 font-bold text-zinc-800 border-r border-zinc-200">Frecuencia</th>
                <th className="p-4 font-bold text-zinc-800">Consideración</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-sm">
              <tr>
                <td className="p-4 border-r border-zinc-200 font-medium">Comisión Fintoc</td>
                <td className="p-4 border-r border-zinc-200">Fintoc</td>
                <td className="p-4 border-r border-zinc-200">Por transacción</td>
                <td className="p-4 text-zinc-600">Revisar cuadro tarifario en sitio oficial.</td>
              </tr>
              <tr>
                <td className="p-4 border-r border-zinc-200 font-medium">Plan Shopify</td>
                <td className="p-4 border-r border-zinc-200">Shopify</td>
                <td className="p-4 border-r border-zinc-200">Mensual</td>
                <td className="p-4 text-zinc-600">Requerido para operar la tienda base.</td>
              </tr>
              <tr>
                <td className="p-4 border-r border-zinc-200 font-medium">Servicio integración</td>
                <td className="p-4 border-r border-zinc-200">Webunica</td>
                <td className="p-4 border-r border-zinc-200">Única vez</td>
                <td className="p-4 text-zinc-600 font-bold">Valor según evaluación de la tienda y alcance requerido.</td>
              </tr>
              <tr>
                <td className="p-4 border-r border-zinc-200 font-medium">Integración facturación</td>
                <td className="p-4 border-r border-zinc-200">Proveedor SII</td>
                <td className="p-4 border-r border-zinc-200">Mensual</td>
                <td className="p-4 text-zinc-600">Si aplica para emitir boletas legales conectadas a la venta.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* BOLETA ELECTRÓNICA & ADMINISTRACIÓN */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Fintoc y boleta electrónica en Shopify</h2>
            <p className="text-zinc-600 mb-4 leading-relaxed">
              Fintoc resuelve el medio de pago, pero la emisión de boleta o factura electrónica normalmente se gestiona mediante una solución tributaria o app conectada a Shopify, como Bsale, Haulmer (OpenFactura), Simple API, Lioren, u otras soluciones disponibles.
            </p>
            <p className="text-violet-700 font-medium bg-violet-100 p-4 rounded-xl">
              La integración de Fintoc no reemplaza automáticamente un sistema de facturación electrónica. Si la tienda necesita emitir boletas o facturas, se debe revisar el flujo completo entre pago, pedido y emisión de documento.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Fintoc, conciliación y administración</h2>
            <p className="text-zinc-600 mb-4 leading-relaxed">Para una operación fluida, la tienda debe poder identificar claramente los pedidos pagados. Es fundamental:</p>
            <ul className="space-y-2 text-zinc-700 font-medium">
              <li>• Revisar la relación exacta entre el pedido de Shopify y el pago.</li>
              <li>• Entender el uso del Dashboard del proveedor.</li>
              <li>• Revisar los reportes y las liquidaciones a la cuenta de la empresa.</li>
              <li>• Validar el flujo administrativo antes de escalar campañas de ventas.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <details key={i} className="group bg-zinc-50 p-6 rounded-xl shadow-sm border border-zinc-200">
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

      {/* SEO BLOCK */}
      <section className="py-16 bg-zinc-100 border-t border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-bold text-xl mb-4">SEO y contenido para búsquedas de pagos en Shopify Chile</h3>
          <p className="text-zinc-600 text-sm leading-relaxed mb-6">
            Si tu tienda quiere captar búsquedas relacionadas con formas de pago, conviene tener páginas o secciones claras sobre medios de pago disponibles, despacho, cambios y devoluciones.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/desarrollo-shopify-chile" className="text-xs font-bold text-violet-600 bg-white px-3 py-1.5 rounded-full shadow-sm hover:bg-violet-50">Shopify Chile</Link>
            <span className="text-xs font-bold text-zinc-500 bg-white px-3 py-1.5 rounded-full shadow-sm">Webpay Shopify Chile</span>
            <span className="text-xs font-bold text-zinc-500 bg-white px-3 py-1.5 rounded-full shadow-sm">Flow Shopify Chile</span>
            <span className="text-xs font-bold text-zinc-500 bg-white px-3 py-1.5 rounded-full shadow-sm">Mercado Pago Shopify Chile</span>
            <span className="text-xs font-bold text-zinc-500 bg-white px-3 py-1.5 rounded-full shadow-sm">Boleta electrónica Shopify</span>
            <span className="text-xs font-bold text-zinc-500 bg-white px-3 py-1.5 rounded-full shadow-sm">Envíos Shopify Chile</span>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 bg-zinc-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 uppercase tracking-tighter">Agrega Fintoc a tu tienda Shopify</h2>
          <p className="text-xl text-zinc-400 mb-10 font-light leading-relaxed">
            Te ayudamos a configurar Fintoc en Shopify, revisar el flujo de pago, realizar pruebas y dejar tu tienda preparada para aceptar pagos por transferencia bancaria en Chile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LeadButton className="bg-violet-600 text-white font-bold px-8 py-4 rounded-full hover:bg-violet-500 transition text-lg shadow-lg hover:shadow-violet-600/30">
              Solicitar integración
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
