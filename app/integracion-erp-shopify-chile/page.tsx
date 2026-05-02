import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';
import LeadButton from '@/components/ui/lead-button';
import FAQSection from '@/components/sections/faq-section';

export const metadata: Metadata = {
  title: 'Integración ERP Chile y Shopify (Bsale, Defontana, Kame) - 2026',
  description: 'Guía de integración de sistemas ERP con Shopify en Chile. Compara precios y características de Bsale, Obuma, Defontana, Kame ERP y Laudus para boleta electrónica y control de stock.',
  openGraph: {
    title: 'Mejores ERP para integrar con Shopify en Chile',
    description: 'Automatiza tu facturación electrónica y sincroniza tu inventario en tiempo real. Análisis de Bsale, Obuma, Defontana y Laudus para Shopify.',
    url: 'https://webunica.cl/integracion-erp-shopify-chile',
    type: 'article',
  }
};

export default function ErpIntegrationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Integración ERP con Shopify en Chile: Guía Definitiva y Precios",
    "description": "Análisis exhaustivo sobre cómo conectar Bsale, Obuma, Defontana, Kame y Laudus con Shopify para automatizar la facturación (SII) y sincronizar el inventario.",
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

  const erps = [
    {
      name: "Bsale",
      logo: "🏪",
      type: "Integración por App (Terceros)",
      pricing: "Desde US$20 a US$60/mes (App de integración) + Plan Bsale",
      pros: ["El punto de venta (POS) más popular de Chile", "Múltiples apps en Shopify App Store (ej. Pivot, Lobo Creaciones)", "Sincroniza stock multi-sucursal y emite boleta/factura automáticamente"],
      cons: ["No tiene integración 'nativa' oficial gratuita", "El soporte técnico depende del desarrollador de la App elegida"],
      recommended: true
    },
    {
      name: "Obuma",
      logo: "📊",
      type: "Integración Nativa Incluida",
      pricing: "Incluido en planes Obuma compatibles (sin costo extra por App)",
      pros: ["Desarrollo nativo directo de Obuma", "Excelente sincronización masiva de precios, stock e imágenes", "Soporte unificado (un solo proveedor para ERP y conector)"],
      cons: ["La interfaz del ERP es muy técnica y menos intuitiva que Bsale", "Requiere crear una App privada (Custom App) en Shopify"],
      recommended: true
    },
    {
      name: "Defontana",
      logo: "🏢",
      type: "Integración Middleware / API",
      pricing: "Cotización a medida (Costos de Setup + Mensualidad)",
      pros: ["Ideal para medianas y grandes empresas con contabilidad compleja", "Altamente robusto para múltiples razones sociales y grandes catálogos", "Se integra a través de partners oficiales como Middify o Centry"],
      cons: ["Costos de implementación (setup) considerablemente más altos", "Curva de aprendizaje del sistema"],
      recommended: false
    },
    {
      name: "Kame ERP",
      logo: "📈",
      type: "Integración vía Middleware",
      pricing: "~$30.000 a $50.000 CLP/mes (Integrador) + Plan Kame",
      pros: ["Excelente opción para PyMEs por su relación calidad-precio", "100% cloud y muy enfocado en la gestión financiera", "Planes atractivos para empresas en crecimiento"],
      cons: ["Dependencia de un tercero (Middify/otros) para la conexión con Shopify"],
      recommended: false
    },
    {
      name: "Laudus",
      logo: "💼",
      type: "Integración por Desarrolladores",
      pricing: "Variable según partner (Fixlabs, Middify, etc.)",
      pros: ["Uno de los mejores ERP contables del mercado chileno", "Muy estable y riguroso con la normativa del SII"],
      cons: ["Al ser un software originalmente 'de escritorio' adaptado a la nube, la integración requiere mayor experticia técnica", "Costos adicionales por el middleware"],
      recommended: false
    }
  ];

  const faqs = [
    {
      question: "¿Por qué necesito integrar mi ERP con Shopify en Chile?",
      answer: "Principalmente por tres razones críticas: 1) Emitir automáticamente la Boleta o Factura Electrónica validada por el SII sin doble digitación. 2) Descontar el stock en tiempo real para evitar quiebres si vendes en tienda física y online a la vez. 3) Mantener los precios y costos unificados para la contabilidad."
    },
    {
      question: "¿Bsale tiene una integración nativa y gratis con Shopify?",
      answer: "No directamente. Bsale cuenta con una potente API, pero la conexión con Shopify se hace contratando una aplicación externa en la Shopify App Store (como Bsale Connect de Pivot o Bsale App de Lobo Creaciones), la cual tiene un costo mensual en dólares (entre $20 y $60 USD)."
    },
    {
      question: "¿Qué ERP recomiendan para una PyME en crecimiento?",
      answer: "Si tienes tiendas físicas y online, Bsale es el líder indiscutido por la facilidad de su POS. Si tu operación es principalmente digital y buscas una integración sin costos de Apps de terceros, Obuma es altamente recomendable por su conector nativo."
    },
    {
      question: "¿Cómo se hace la integración con Defontana o Laudus?",
      answer: "Para ERPs más corporativos o contables tradicionales (Defontana, Laudus), la recomendación es utilizar un 'Middleware' (plataforma intermediaria) chileno como Middify o Centry. Estos cobran una mensualidad por mantener los datos fluyendo entre Shopify y el ERP."
    },
    {
      question: "¿Se pueden emitir Facturas a empresas (B2B) en Shopify?",
      answer: "Sí, pero Shopify por defecto no tiene campos para el RUT y Giro. Nosotros modificamos el checkout de Shopify agregando los campos del SII, y luego la integración (ej. Bsale u Obuma) lee esos datos para generar el DTE correcto (Boleta o Factura) automáticamente."
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-24 overflow-hidden font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
          Operaciones y Automatización
        </div>
        <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8">
          Integración ERP para <br/>
          <span className="text-violet-500 italic font-serif lowercase font-light text-5xl lg:text-7xl">Shopify Chile</span>
        </h1>
        <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Descubre los costos reales y la mejor forma de sincronizar inventario, precios y emisión de DTE (SII) con Bsale, Obuma, Defontana, Kame y Laudus.
        </p>
        <LeadButton className="px-8 py-4 bg-white text-zinc-950 rounded-full font-bold uppercase tracking-wider text-xs hover:scale-105 transition-transform">
          Cotizar Integración de ERP
        </LeadButton>
      </section>

      {/* Warning Box sobre Checkout (RUT/Giro) */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="bg-gradient-to-r from-emerald-500/10 to-transparent border-l-4 border-emerald-500 p-8 rounded-r-2xl">
          <h2 className="text-xl font-bold text-emerald-500 mb-3 flex items-center gap-2">
            <span className="text-2xl">💡</span> El Desafío del Checkout en Chile
          </h2>
          <p className="text-zinc-300 font-light leading-relaxed mb-4">
            Para que cualquier ERP pueda emitir una factura en Chile de forma automática, necesita capturar el <strong>RUT</strong>, <strong>Giro</strong> y <strong>Razón Social</strong> del cliente en la pantalla de pagos de Shopify. 
          </p>
          <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 mt-6">
            <p className="text-zinc-400 text-sm leading-relaxed">
              Shopify no trae estos campos por defecto. Nuestro equipo de desarrollo se encarga de inyectar y mapear estos campos tributarios en el carrito (o mediante la API del checkout) para asegurar que la integración con tu ERP no falle al momento de emitir el Documento Tributario Electrónico (DTE).
            </p>
          </div>
        </div>
      </section>

      {/* ERP Comparison Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">Sistemas ERP en Chile vs Shopify</h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">Comparativa de las herramientas líderes en el mercado, métodos de conexión y costos asociados ocultos.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {erps.map((erp, idx) => (
            <div key={idx} className={`p-8 md:p-10 rounded-[2.5rem] border relative transition-all duration-300 flex flex-col ${erp.recommended ? 'bg-zinc-900/80 border-violet-500/30 shadow-[0_0_40px_rgba(139,92,246,0.08)]' : 'bg-white/5 border-white/10'}`}>
              
              {erp.recommended && (
                <div className="absolute top-0 right-0 px-4 py-2 bg-violet-600 text-white text-[10px] font-black uppercase tracking-widest rounded-bl-3xl rounded-tr-[2.5rem]">
                  Recomendado
                </div>
              )}

              <div className="flex items-center gap-5 mb-6">
                <div className="text-5xl">{erp.logo}</div>
                <div>
                  <h3 className="text-3xl font-black text-white tracking-tight">{erp.name}</h3>
                  <div className="text-violet-400 text-[11px] font-bold uppercase tracking-widest mt-1">{erp.type}</div>
                </div>
              </div>
              
              <div className="inline-block bg-zinc-950 px-4 py-2 rounded-xl border border-zinc-800 text-zinc-300 text-sm font-medium mb-8 w-fit">
                <span className="text-zinc-500 mr-2">Costos:</span> {erp.pricing}
              </div>

              <div className="grid md:grid-cols-2 gap-8 flex-grow">
                <div>
                  <div className="text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Ventajas
                  </div>
                  <ul className="space-y-4">
                    {erp.pros.map((p, i) => (
                      <li key={i} className="text-sm text-zinc-300 font-light leading-relaxed">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-amber-500 text-[10px] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    A Considerar
                  </div>
                  <ul className="space-y-4">
                    {erp.cons.map((c, i) => (
                      <li key={i} className="text-sm text-zinc-400 font-light leading-relaxed">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Mid CTA */}
      <section className="bg-violet-600/10 border-y border-violet-500/20 py-20 mb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 tracking-tight">
            ¿Vendes sin conexión al ERP?
          </h2>
          <p className="text-zinc-300 mb-8 mx-auto font-light leading-relaxed max-w-2xl">
            La digitación manual de boletas y el control de inventario en planillas es el cuello de botella #1 para crecer. Nosotros configuramos la topología completa: Shopify + Medio de Pago + Logística + ERP.
          </p>
          <LeadButton className="px-10 py-5 bg-violet-600 text-white rounded-full font-bold uppercase tracking-wider text-sm hover:bg-violet-500 transition-colors shadow-lg shadow-violet-500/20">
            Automatizar Mi Operación
          </LeadButton>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={faqs} 
        title="Dudas Frecuentes sobre Integración ERP"
        description="Aclaramos los conceptos técnicos y tributarios para que tomes la mejor decisión de software."
      />

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center mt-32">
        <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">
          Contabilidad en <br/>
          <span className="text-violet-500 italic font-serif lowercase font-light">sincronía perfecta</span>
        </h2>
        <p className="text-zinc-400 mb-10 mx-auto font-light leading-relaxed max-w-xl">
          Evita quiebres de stock, olvídate de digitar boletas a mano y dedica tu tiempo a estrategias de crecimiento comercial.
        </p>
        <LeadButton className="px-12 py-6 bg-zinc-100 text-zinc-950 rounded-[2rem] font-black uppercase tracking-[0.15em] text-[11px] inline-flex items-center justify-center hover:bg-white transition-all hover:scale-105 active:scale-95">
          Hablar con un Experto
        </LeadButton>
      </section>
    </main>
  );
}
