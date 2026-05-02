import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';
import FAQSection from '@/components/sections/faq-section';

export const metadata: Metadata = {
  title: 'Comisiones de Pago en Shopify Chile: Webpay, Flow, Mercado Pago (2026)',
  description: 'Guía definitiva sobre comisiones, tarifas y plazos de retiro de las pasarelas de pago disponibles para Shopify en Chile. Incluye Transbank, VentiPay y más.',
  openGraph: {
    title: 'Comisiones de Pago en Shopify Chile 2026',
    description: 'Compara las tarifas reales de Transbank Webpay, Mercado Pago, Flow, VentiPay y Pago Fácil para tu tienda Shopify.',
    url: 'https://webunica.cl/comisiones-plataformas-de-pago-para-shopify-chile',
    type: 'article',
  }
};

export default function PaymentCommissionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Comisiones de Plataformas de Pago para Shopify en Chile (2026)",
    "description": "Análisis y comparativa de las comisiones de Transbank Webpay, Mercado Pago, Flow, Pago Fácil y VentiPay para tiendas Shopify en Chile.",
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

  const gateways = [
    {
      name: "Mercado Pago",
      logo: "💳",
      commission: "2.99% + IVA",
      releaseTime: "Al instante",
      pros: ["Alta confianza del consumidor chileno", "Checkout transparente y rápido", "Ofrece opción de 14 días al 1.49% + IVA"],
      cons: ["Comisión más alta si liberas al instante", "Soporte técnico estandarizado"],
      recommended: true,
      popular: true
    },
    {
      name: "Transbank (Webpay Plus)",
      logo: "🏦",
      commission: "1.49% a 2.5% + IVA",
      releaseTime: "24 - 48 horas",
      pros: ["Las comisiones más bajas del mercado", "App oficial en Shopify App Store", "Máxima seguridad bancaria"],
      cons: ["Requiere contrato y evaluación comercial previa", "El onboarding puede tardar un par de semanas"],
      recommended: true,
      popular: false
    },
    {
      name: "Flow.cl",
      logo: "🌊",
      commission: "2.89% + IVA",
      releaseTime: "3 días hábiles",
      pros: ["Muy estable en Chile", "Sin costos fijos de mantención", "Acepta Webpay, Mach, Servipag y Criptos"],
      cons: ["El checkout redirige fuera de tu tienda (baja ligera de conversión)", "Tasa sube a 3.19% si pides abono en 1 día"],
      recommended: false,
      popular: false
    },
    {
      name: "VentiPay",
      logo: "🚀",
      commission: "2.95% + IVA",
      releaseTime: "2 días hábiles",
      pros: ["Altísima conversión en dispositivos móviles", "Permite pagos con transferencia bancaria automatizada", "Excelente soporte local"],
      cons: ["Aún en crecimiento de adopción frente a gigantes como Mercado Pago"],
      recommended: true,
      popular: false
    },
    {
      name: "Pago Fácil",
      logo: "⚡",
      commission: "2.95% + IVA",
      releaseTime: "A convenir",
      pros: ["Múltiples medios de pago locales en una sola integración", "Planes a medida para empresas corporativas"],
      cons: ["Independientes pagan una tasa mayor (3.49% + IVA)", "El checkout también es externo"],
      recommended: false,
      popular: false
    },
    {
      name: "Payku",
      logo: "💡",
      commission: "2.79% + IVA",
      releaseTime: "48 horas hábiles",
      pros: ["Tasa muy competitiva sin costos ocultos", "Fácil inicio de actividades"],
      cons: ["Menor reconocimiento de marca por parte del comprador final"],
      recommended: false,
      popular: false
    }
  ];

  const faqs = [
    {
      question: "¿Puedo usar Shopify Payments en Chile?",
      answer: "No de forma nativa. Actualmente Shopify Payments no soporta el Peso Chileno (CLP) como moneda de liquidación directa para empresas chilenas, por lo que estás obligado a utilizar pasarelas de terceros como Mercado Pago, Flow o Transbank."
    },
    {
      question: "¿Cuánto cobra Shopify de comisión adicional?",
      answer: "Dado que debes usar pasarelas externas, Shopify cobra una 'tarifa por transacción' que varía según tu plan: 2.0% en el plan Basic, 1.0% en el plan Shopify, y 0.5% en el plan Advanced. Este costo es independiente de lo que te cobre Transbank o Mercado Pago."
    },
    {
      question: "¿Cuál es la pasarela más barata para Shopify Chile?",
      answer: "Generalmente, Webpay Plus directo de Transbank ofrece las tasas de adquirencia más bajas (entre 1.49% y 2.5% dependiendo de tus ventas). Sin embargo, Mercado Pago ofrece 1.49% si aceptas que el dinero se libere en 14 días."
    },
    {
      question: "¿Cómo ofrecer cuotas sin interés en mi tienda?",
      answer: "La mayoría de las pasarelas permiten configurar promociones de cuotas sin interés, pero asumiendo tú el costo financiero. Por ejemplo, en Flow, ofrecer 3 cuotas sin interés te sumará aproximadamente un 1.99% adicional a tu comisión base."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-[22vh] lg:pt-40 pb-24 overflow-hidden font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
          Guía Financiera E-commerce
        </div>
        <h1 className="text-[2.2rem] xs:text-4xl lg:text-6xl font-black text-zinc-900 tracking-tighter uppercase leading-[0.9] mb-8 break-words">
          Comparativa de Comisiones <br/>
          <span className="text-emerald-500 italic font-serif lowercase font-light text-[2rem] xs:text-4xl lg:text-7xl">Shopify Chile</span> 2026
        </h1>

        <p className="text-xl text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto mb-10">
          Analizamos a fondo los costos reales de Transbank Webpay, Mercado Pago, Flow y VentiPay. Descubre qué pasarela maximiza tus márgenes de ganancia.
        </p>
        <LeadButton className="px-8 py-4 bg-zinc-900 text-white rounded-full font-bold uppercase tracking-wider text-xs hover:scale-105 transition-transform">
          Necesito integrar pagos en mi tienda
        </LeadButton>
      </section>

      {/* Warning Box sobre Shopify Payments */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <div className="bg-gradient-to-r from-amber-500/10 to-transparent border-l-4 border-amber-500 p-8 rounded-r-2xl">
          <h2 className="text-xl font-bold text-amber-500 mb-3 flex items-center gap-2">
            <span className="text-2xl">⚠️</span> El Costo Oculto: Tarifa de Terceros de Shopify
          </h2>
          <p className="text-zinc-700 font-light leading-relaxed mb-4">
            Al no operar nativamente <strong>Shopify Payments</strong> en Chile, la plataforma te cobrará una comisión transaccional por usar cualquier pasarela de esta lista. Debes sumar este porcentaje al cálculo de tus precios:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <li className="bg-slate-1000 p-4 rounded-xl border border-slate-200">
              <span className="block text-zinc-600 text-xs uppercase mb-1">Plan Basic</span>
              <strong className="text-xl text-zinc-900">2.0%</strong>
            </li>
            <li className="bg-slate-1000 p-4 rounded-xl border border-slate-200">
              <span className="block text-zinc-600 text-xs uppercase mb-1">Plan Shopify</span>
              <strong className="text-xl text-zinc-900">1.0%</strong>
            </li>
            <li className="bg-slate-1000 p-4 rounded-xl border border-slate-200">
              <span className="block text-zinc-600 text-xs uppercase mb-1">Plan Advanced</span>
              <strong className="text-xl text-zinc-900">0.5%</strong>
            </li>
          </ul>
        </div>
      </section>

      {/* Gateway Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tight">Pasarelas Disponibles para Chile</h2>
          <p className="text-zinc-600 mt-4">Tarifas estimadas para transacciones con tarjetas de crédito y débito.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gateways.map((gw, idx) => (
            <div key={idx} className={`p-8 rounded-[2rem] border relative overflow-hidden transition-all duration-300 ${gw.recommended ? 'bg-white/80 border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.05)]' : 'bg-slate-100 border-slate-200'}`}>
              {gw.popular && (
                <div className="absolute top-0 right-0 bg-emerald-500 text-zinc-900 text-[10px] font-bold uppercase px-4 py-1.5 rounded-bl-xl">
                  Más Utilizada
                </div>
              )}
              
              <div className="text-4xl mb-4">{gw.logo}</div>
              <h3 className="text-2xl font-black text-zinc-900 mb-6 tracking-tight">{gw.name}</h3>
              
              <div className="mb-6 pb-6 border-b border-slate-200">
                <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mb-1">Comisión Base Aprox.</div>
                <div className="text-3xl font-black text-emerald-400">{gw.commission}</div>
              </div>
              
              <div className="mb-8">
                <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mb-2">Liberación del Dinero</div>
                <div className="text-zinc-700 text-sm">{gw.releaseTime}</div>
              </div>

              <div>
                <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mb-3">Ventajas Clave</div>
                <ul className="space-y-3 mb-6">
                  {gw.pros.map((p, i) => (
                    <li key={i} className="flex gap-3 text-sm text-zinc-700 font-light leading-snug">
                      <span className="text-emerald-500 shrink-0">✓</span> {p}
                    </li>
                  ))}
                </ul>

                <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mb-3">Consideraciones</div>
                <ul className="space-y-3">
                  {gw.cons.map((c, i) => (
                    <li key={i} className="flex gap-3 text-sm text-zinc-600 font-light leading-snug">
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
      <section className="bg-emerald-600/10 border-y border-emerald-500/20 py-20 mb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-zinc-900 mb-6 tracking-tight">
            ¿Confundido con las configuraciones financieras?
          </h2>
          <p className="text-zinc-700 mb-8 mx-auto font-light leading-relaxed max-w-2xl">
            Un error en la pasarela de pago puede costarte carritos abandonados y dinero retenido. Nuestro equipo de expertos en Shopify configura tus métodos de pago con las normativas locales y realiza pruebas exhaustivas (modo test y producción).
          </p>
          <LeadButton className="px-10 py-5 bg-emerald-500 text-zinc-950 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20">
            Agenda una Asesoría Gratuita
          </LeadButton>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={faqs} 
        title="Consultas Habituales sobre Pagos en Chile"
        description="Aclaramos las dudas financieras más comunes de nuestros clientes antes de lanzar su e-commerce."
      />

      {/* Final Integration CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center mt-32">
        <h2 className="text-4xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.9]">
          Vende con total <br/>
          <span className="text-emerald-500 italic font-serif lowercase font-light">seguridad</span>
        </h2>
        <p className="text-zinc-600 mb-10 mx-auto font-light leading-relaxed max-w-xl">
          Instalamos, probamos y certificamos Webpay, Mercado Pago o la pasarela que mejor se adapte a tu flujo de caja. Delega lo técnico y concéntrate en vender.
        </p>
        <LeadButton className="px-12 py-6 bg-zinc-100 text-zinc-950 rounded-[2rem] font-black uppercase tracking-[0.15em] text-[11px] inline-flex items-center justify-center hover:bg-white transition-all hover:scale-105 active:scale-95">
          Cotizar Integración E-commerce
        </LeadButton>
      </section>
    </main>
  );
}
