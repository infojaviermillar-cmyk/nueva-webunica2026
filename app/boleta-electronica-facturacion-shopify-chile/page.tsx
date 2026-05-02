import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';
import LeadButton from '@/components/ui/lead-button';
import FAQSection from '@/components/sections/faq-section';

export const metadata: Metadata = {
  title: 'Boleta Electrónica y Facturación para Shopify Chile (2026)',
  description: 'Conoce los mejores sistemas de facturación y boleta electrónica para Shopify en Chile. Integración directa con el SII mediante Haulmer, LibreDTE, Lioren y más.',
  openGraph: {
    title: 'Sistemas de Boleta y Factura para Shopify en Chile',
    description: 'Automatiza tus Documentos Tributarios Electrónicos (DTE). Guía de integración de Haulmer OpenFactura, Relbase y LibreDTE para Shopify.',
    url: 'https://webunica.cl/boleta-electronica-facturacion-shopify-chile',
    type: 'article',
  }
};

export default function BillingSystemsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Sistema de Boleta Electrónica y Facturación para Shopify Chile",
    "description": "Análisis de las mejores aplicaciones y sistemas para automatizar la emisión de boletas y facturas electrónicas (DTE) en Shopify cumpliendo con el SII.",
    "author": {
      "@type": "Organization",
      "name": "Webunica",
      "url": "https://webunica.cl"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Webunica",
      "logo": {
        "@type": "ImageObject",
        "url": "https://webunica.cl/logo-webunica.png.webp"
      }
    },
    "datePublished": "2024-01-01T08:00:00+08:00",
    "dateModified": new Date().toISOString(),
  };

  const billingSystems = [
    {
      name: "Haulmer (OpenFactura)",
      logo: "🧾",
      type: "App Oficial en Shopify",
      pricing: "Desde 1 UF mensual (Aprox.)",
      pros: ["Integración extremadamente fluida mediante App oficial", "Portal de autoservicio (el cliente convierte su boleta a factura)", "Plataforma OpenFactura muy amigable"],
      cons: ["El soporte técnico puede tardar en fechas de alta demanda (Cyber)"],
      recommended: true
    },
    {
      name: "Lioren",
      logo: "⚡",
      type: "Conector Directo",
      pricing: "Planes por tramos de documentos",
      pros: ["Soporte técnico destacable y rápido", "Configuración de App muy sencilla", "Excelente estabilidad de conexión con el SII"],
      cons: ["Interfaz de usuario un poco más tradicional", "Menos funcionalidades que un ERP completo"],
      recommended: true
    },
    {
      name: "LibreDTE / Simple API",
      logo: "💻",
      type: "Integración API (Desarrolladores)",
      pricing: "Planes desde $0 (Limitado) o muy económicos",
      pros: ["Ideal si cuentas con una agencia de desarrollo (como Webunica)", "Altísima flexibilidad técnica para flujos complejos", "Costos recurrentes bajísimos"],
      cons: ["No es 'Plug & Play'. Requiere conocimientos técnicos para conectar la API de Shopify"],
      recommended: false
    },
    {
      name: "Relbase",
      logo: "🔄",
      type: "Sistema de Ventas y Facturación",
      pricing: "Desde $19.990 CLP / mes",
      pros: ["Buena relación calidad-precio para PyMEs", "Permite gestionar ventas físicas (POS) y de Shopify en un solo lugar", "Sincroniza inventario básico"],
      cons: ["Su App de integración puede requerir apoyo técnico para configuración inicial"],
      recommended: false
    },
    {
      name: "Boleta Fácil",
      logo: "🏷️",
      type: "Emisión Simplificada",
      pricing: "Pago por paquete de boletas o plan básico",
      pros: ["Como su nombre lo indica, la curva de aprendizaje es casi nula", "Muy económico si tu volumen de venta es bajo"],
      cons: ["Opciones muy limitadas si el negocio escala rápidamente"],
      recommended: false
    }
  ];

  const faqs = [
    {
      question: "¿Cuál es la diferencia entre un ERP y un Sistema de Boleta Electrónica?",
      answer: "Un Sistema de Facturación o Boleta Electrónica (como Haulmer o Lioren) sirve *exclusivamente* para emitir el Documento Tributario (DTE) al SII y enviarlo al cliente. Un ERP (como Bsale o Defontana) hace eso, pero además gestiona la contabilidad profunda, múltiples bodegas, recursos humanos, etc. Si solo vendes online, un sistema de boleta es más barato y suficiente."
    },
    {
      question: "¿Qué necesito para empezar a emitir boletas en Shopify?",
      answer: "Necesitas 3 cosas: 1) Haber iniciado actividades en el SII de Chile. 2) Comprar un Certificado Digital (Firma Electrónica) e instalarlo en el SII. 3) Contratar una App de facturación (ej. Haulmer) y conectarla con tu tienda Shopify."
    },
    {
      question: "¿Cómo Shopify sabe si emitir Boleta o Factura?",
      answer: "Por defecto, Shopify no sabe la diferencia. Como agencia, nosotros configuramos el 'Checkout' de tu tienda agregando los campos obligatorios del SII (RUT, Razón Social, Giro). Si el cliente los llena, la App de facturación detecta los datos y emite una Factura; si no los llena, emite una Boleta."
    },
    {
      question: "¿La boleta se envía automáticamente al cliente?",
      answer: "Sí. Una vez que el pedido es pagado y verificado en Shopify (por ejemplo vía Webpay o Flow), la integración genera el PDF de la boleta electrónica y se lo envía inmediatamente al correo del comprador."
    },
    {
      question: "¿Puedo tener tienda física y online con el mismo sistema?",
      answer: "Sí, sistemas como Haulmer o Relbase ofrecen un punto de venta (POS) para tu tienda física, y al mismo tiempo conectan con Shopify. Así, todas tus boletas quedan registradas en el mismo portal ante el SII."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24 overflow-hidden font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
          Cumplimiento Tributario SII
        </div>
        <h1 className="text-4xl lg:text-6xl font-black text-zinc-900 tracking-tighter uppercase leading-[0.9] mb-8">
          Boletas y Facturas para <br/>
          <span className="text-violet-500 italic font-serif lowercase font-light text-5xl lg:text-7xl">Shopify Chile</span>
        </h1>
        <p className="text-xl text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Evita multas del SII. Automatiza la emisión de tus Documentos Tributarios Electrónicos (DTE) utilizando Haulmer, Lioren o LibreDTE integrados a tu checkout.
        </p>
        <LeadButton className="px-8 py-4 bg-zinc-900 text-white rounded-full font-bold uppercase tracking-wider text-xs hover:scale-105 transition-transform">
          Automatizar Facturación
        </LeadButton>
      </section>

      {/* Warning Box sobre Autoservicio */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="bg-gradient-to-r from-blue-500/10 to-transparent border-l-4 border-blue-500 p-8 rounded-r-2xl">
          <h2 className="text-xl font-bold text-blue-400 mb-3 flex items-center gap-2">
            <span className="text-2xl">⚡</span> La Tendencia: Portales de Autoservicio
          </h2>
          <p className="text-zinc-700 font-light leading-relaxed mb-4">
            Hoy en día, la mejor práctica en el e-commerce chileno no es ensuciar el checkout pidiendo datos de facturación a todos los clientes. La tendencia es <strong>emitir una Boleta siempre por defecto</strong> y ofrecer un link de "Autoservicio".
          </p>
          <div className="bg-slate-1000 p-6 rounded-xl border border-slate-200 mt-6">
            <p className="text-zinc-600 text-sm leading-relaxed">
              Plataformas como <strong>OpenFactura (Haulmer)</strong> permiten enviar un botón en el correo de la compra. Si el cliente necesita factura, hace clic ahí, ingresa su RUT y Giro, y el sistema automáticamente "Anula" (hace nota de crédito) la boleta y emite la Factura, sin intervención humana.
            </p>
          </div>
        </div>
      </section>

      {/* Billing Systems Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tight">Sistemas Ligeros de Facturación</h2>
          <p className="text-zinc-600 mt-4 max-w-2xl mx-auto">Alternativas más económicas y directas que un ERP completo. Diseñadas específicamente para cumplir con el SII de forma rápida.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {billingSystems.map((sys, idx) => (
            <div key={idx} className={`p-8 rounded-[2rem] border relative transition-all duration-300 flex flex-col ${sys.recommended ? 'bg-white/80 border-violet-500/30 shadow-[0_0_30px_rgba(139,92,246,0.05)]' : 'bg-slate-100 border-slate-200'}`}>
              
              {sys.recommended && (
                <div className="absolute top-0 right-0 px-3 py-1.5 bg-violet-600 text-zinc-900 text-[9px] font-black uppercase tracking-widest rounded-bl-2xl rounded-tr-[2rem]">
                  Top Pick
                </div>
              )}

              <div className="text-4xl mb-4">{sys.logo}</div>
              <h3 className="text-2xl font-black text-zinc-900 mb-1 tracking-tight">{sys.name}</h3>
              <div className="text-violet-400 text-[10px] font-bold uppercase tracking-widest mb-4">{sys.type}</div>
              
              <div className="inline-block bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 text-zinc-700 text-xs font-medium mb-6 w-fit">
                {sys.pricing}
              </div>

              <div className="mb-6 flex-grow">
                <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mb-3">Beneficios</div>
                <ul className="space-y-3">
                  {sys.pros.map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm text-zinc-700 font-light leading-snug">
                      <span className="text-emerald-500 shrink-0">✓</span> {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mb-3">Limitaciones</div>
                <ul className="space-y-3">
                  {sys.cons.map((c, i) => (
                    <li key={i} className="flex gap-2 text-sm text-zinc-600 font-light leading-snug">
                      <span className="text-amber-500 shrink-0">⚠</span> {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mid CTA */}
      <section className="bg-violet-600/10 border-y border-violet-500/20 py-20 mb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-zinc-900 mb-6 tracking-tight">
            ¿Tu tienda emite las boletas a mano?
          </h2>
          <p className="text-zinc-700 mb-8 mx-auto font-light leading-relaxed max-w-2xl">
            Emitir boletas en el portal gratuito del SII es insostenible si quieres escalar. Nosotros instalamos, configuramos y probamos la integración de tu facturador con Shopify en menos de 48 horas.
          </p>
          <LeadButton className="px-10 py-5 bg-violet-600 text-zinc-900 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-violet-500 transition-colors shadow-lg shadow-violet-500/20">
            Integrar Boleta Electrónica
          </LeadButton>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={faqs} 
        title="Dudas Frecuentes sobre Facturación"
        description="Lo que necesitas saber para operar tu tienda online 100% legal en Chile."
      />

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center mt-32">
        <h2 className="text-4xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.9]">
          Cumplimiento <br/>
          <span className="text-violet-500 italic font-serif lowercase font-light">sin estrés tributario</span>
        </h2>
        <p className="text-zinc-600 mb-10 mx-auto font-light leading-relaxed max-w-xl">
          Deja de preocuparte por el cierre de mes. Automatiza el envío de tus boletas y facturas para enfocarte únicamente en vender más.
        </p>
        <LeadButton className="px-12 py-6 bg-zinc-100 text-zinc-950 rounded-[2rem] font-black uppercase tracking-[0.15em] text-[11px] inline-flex items-center justify-center hover:bg-white transition-all hover:scale-105 active:scale-95">
          Cotizar Configuración Técnica
        </LeadButton>
      </section>
    </main>
  );
}
