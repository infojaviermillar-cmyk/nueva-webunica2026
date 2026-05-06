import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';
import FAQSection from '@/components/sections/faq-section';

export const metadata: Metadata = {
  title: 'Empresas de Transporte y Envíos para Shopify Chile (2026)',
  description: 'Descubre cómo integrar Bluexpress, Starken, Chilexpress y plataformas multi-courier como Shipit y Sendu en tu tienda Shopify. Costos de cálculo de tarifas automatizadas.',
  openGraph: {
    title: 'Envíos y Transporte para Shopify Chile',
    description: 'Guía para integrar couriers locales (Starken, Bluexpress, Chilexpress) y multi-couriers (Shipit, Sendu) en tu e-commerce.',
    url: 'https://webunica.cl/empresas-de-transporte-y-envios-para-shopify-chile',
    type: 'article',
  }
};

export default function ShippingCompaniesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Empresas de Transporte y Envíos Automáticos para Shopify en Chile (2026)",
    "description": "Guía completa para configurar el cálculo de tarifas de envío en tiempo real en Shopify Chile utilizando Shipit, Sendu, Bluexpress, Starken y más.",
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

  const multiCouriers = [
    {
      name: "Shipit.cl",
      logo: "📦",
      type: "Multi-Courier y Fullfilment",
      pros: ["Algoritmo que elige el courier más barato/rápido", "App oficial en Shopify App Store", "Servicio de Fulfillment y recolección disponible"],
      cons: ["Requiere volumen mínimo mensual para tarifas competitivas", "Dependencia de terceros para reclamos de paquetes"],
      recommended: true
    },
    {
      name: "Sendu.cl",
      logo: "🚚",
      type: "Multi-Courier Inteligente",
      pros: ["Plataforma muy amigable y moderna", "Buenas tarifas negociadas con Starken y Bluexpress", "Cálculo de tarifas exactas en el checkout"],
      cons: ["El servicio de atención al cliente puede demorar en fechas pico (Cyber)"],
      recommended: true
    },
    {
      name: "Envíame",
      logo: "🌐",
      type: "Gestión Multi-Courier (Enterprise)",
      pros: ["Ideal para grandes volúmenes y retailers", "Integración con más de 150 couriers a nivel regional"],
      cons: ["Enfoque B2B corporativo, no ideal para emprendimientos pequeños"],
      recommended: false
    }
  ];

  const directCouriers = [
    {
      name: "Bluexpress",
      logo: "🔵",
      focus: "E-commerce general y envíos rápidos",
      pros: ["Excelente cobertura nacional", "Servicio 'Prioritario' muy efectivo", "Puntos Blue para dejar encomiendas"]
    },
    {
      name: "Starken",
      logo: "⭐",
      focus: "Envíos por Pagar y carga pesada",
      pros: ["La red de sucursales más extensa del país", "Opción de envío por pagar a sucursal", "Especialistas en bultos grandes"]
    },
    {
      name: "Chilexpress",
      logo: "🟨",
      focus: "Documentos y envíos ultra express",
      pros: ["Reconocimiento de marca y confianza", "Entregas overnight (Día hábil siguiente) garantizadas"]
    },
    {
      name: "Moova / 90 Minutos",
      logo: "🛵",
      focus: "Same-Day Delivery (Última milla)",
      pros: ["Entregas el mismo día en RM", "Tracking en tiempo real para el cliente final"]
    },
    {
      name: "Correos de Chile",
      logo: "📮",
      focus: "Envíos internacionales y zonas extremas",
      pros: ["La mejor tarifa para zonas rurales o extremas", "Servicios internacionales económicos"]
    }
  ];

  const faqs = [
    {
      question: "¿Cómo funciona el cálculo de envíos en Shopify?",
      answer: "Shopify te permite configurar tarifas planas (ej. $3.000 a todo Santiago) o por peso. Sin embargo, para mostrar el precio exacto de Starken o Bluexpress en el momento del pago, necesitas activar la función 'Carrier Calculated Shipping' (Cálculo de tarifas de envío de terceros) y usar una App como Shipit o Sendu."
    },
    {
      question: "¿Cuánto cuesta activar el Carrier Calculated Shipping (CCS) en Shopify?",
      answer: "Para habilitar el cálculo de tarifas de terceros (CCS) en Chile, tienes dos opciones: 1) Cambiar la facturación de tu plan de mensual a ANUAL (Shopify te lo regalará al pedirlo por soporte). 2) Subir al plan 'Advanced Shopify'. Anteriormente se podía pagar un extra mensual de $20 USD, pero Shopify ha restringido esa opción para tiendas nuevas."
    },
    {
      question: "¿Es mejor integrar un multi-courier o ir directo con la empresa?",
      answer: "Para el 90% de las tiendas, usar un multi-courier (Shipit, Sendu) es mejor porque te ahorra la integración técnica individual, te ofrece recolección consolidada y permite a tu cliente elegir la opción más barata o rápida en el checkout."
    },
    {
      question: "¿Puedo ofrecer retiro en tienda o 'Envío por Pagar'?",
      answer: "Sí. El 'Retiro en Tienda' es nativo de Shopify y gratuito de configurar. El 'Envío por Pagar' no es nativo; debes configurarlo como una tarifa de envío de valor $0 y añadir un texto aclaratorio, o usar apps especializadas chilenas para gestionar este flujo con Starken o Chilexpress."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-[22vh] lg:pt-40 pb-24 overflow-hidden font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
          Logística E-commerce
        </div>
        <h1 className="text-4xl lg:text-6xl font-black text-zinc-900 tracking-tighter uppercase leading-[0.9] mb-8">
          Empresas de Transporte y Envíos para <br/>
          <span className="text-violet-500 italic font-serif lowercase font-light text-5xl lg:text-7xl">Shopify Chile</span>
        </h1>
        <p className="text-xl text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto mb-10">
          La guía definitiva para automatizar tus despachos. Compara multi-couriers como Shipit y Sendu, y descubre qué necesitas para mostrar tarifas reales en el checkout.
        </p>
        <LeadButton className="px-8 py-4 bg-zinc-900 text-white rounded-full font-bold uppercase tracking-wider text-xs hover:scale-105 transition-transform">
          Cotizar Configuración Logística
        </LeadButton>
      </section>

      {/* Warning Box sobre CCS */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="bg-gradient-to-r from-amber-500/10 to-transparent border-l-4 border-amber-500 p-8 rounded-r-2xl">
          <h2 className="text-xl font-bold text-amber-500 mb-3 flex items-center gap-2">
            <span className="text-2xl">⚠️</span> Requisito Técnico: Carrier Calculated Shipping (CCS)
          </h2>
          <p className="text-zinc-700 font-light leading-relaxed mb-4">
            Para que aplicaciones como Shipit o Sendu puedan inyectar el valor real del envío (calculado según dirección y peso) en la pantalla de pagos de tu cliente, tu tienda Shopify <strong>DEBE</strong> tener habilitada la función de "Tarifas de envío calculadas por terceros".
          </p>
          <div className="bg-slate-1000 p-6 rounded-xl border border-slate-200 mt-6">
            <h3 className="text-zinc-900 font-bold mb-4 uppercase tracking-wider text-sm">¿Cómo obtener esta función?</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <p className="text-zinc-600 text-sm"><strong>Opción Recomendada:</strong> Paga tu plan Basic o Shopify de forma <strong>ANUAL</strong> en lugar de mensual, y comunícate con el soporte de Shopify para que habiliten la función gratis (Ahorras un 25% en tu plan y consigues el CCS).</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✓</span>
                <p className="text-zinc-600 text-sm"><strong>Opción Corporativa:</strong> Contratar el plan <strong>Advanced Shopify</strong> (incluye la función por defecto).</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Multi-Couriers */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tight">Plataformas Multi-Courier (Agregadores)</h2>
          <p className="text-zinc-600 mt-4 max-w-2xl mx-auto">Estas plataformas centralizan todos los couriers en un solo contrato. Instalas su App en Shopify y ellos calculan la tarifa automáticamente.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {multiCouriers.map((mc, idx) => (
            <div key={idx} className={`p-8 rounded-[2rem] border relative transition-all duration-300 ${mc.recommended ? 'bg-white/80 border-violet-500/30 shadow-[0_0_30px_rgba(139,92,246,0.05)]' : 'bg-slate-100 border-slate-200'}`}>
              <div className="text-4xl mb-4">{mc.logo}</div>
              <h3 className="text-2xl font-black text-zinc-900 mb-2 tracking-tight">{mc.name}</h3>
              <div className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-6">{mc.type}</div>
              
              <div className="mb-6">
                <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mb-3">Puntos a Favor</div>
                <ul className="space-y-3">
                  {mc.pros.map((p, i) => (
                    <li key={i} className="flex gap-3 text-sm text-zinc-700 font-light leading-snug">
                      <span className="text-emerald-500 shrink-0">✓</span> {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest mb-3">Consideraciones</div>
                <ul className="space-y-3">
                  {mc.cons.map((c, i) => (
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

      {/* Single Couriers */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tight">Principales Empresas de Transporte</h2>
          <p className="text-zinc-600 mt-4 max-w-2xl mx-auto">Ya sea que operes directo con ellos o a través de un multi-courier, estos son los actores principales del ecosistema logístico en Chile.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {directCouriers.map((dc, idx) => (
            <div key={idx} className="p-6 bg-slate-100 border border-slate-200 rounded-[1.5rem] hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{dc.logo}</div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900">{dc.name}</h3>
                  <div className="text-zinc-600 text-[10px] uppercase tracking-wider">{dc.focus}</div>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {dc.pros.map((p, i) => (
                  <li key={i} className="flex gap-2 text-xs text-zinc-600">
                    <span className="text-violet-400">•</span> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Mid CTA */}
      <section className="bg-violet-600/10 border-y border-violet-500/20 py-20 mb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-zinc-900 mb-6 tracking-tight">
            ¿Problemas con el Check-out y Envíos?
          </h2>
          <p className="text-zinc-700 mb-8 mx-auto font-light leading-relaxed max-w-2xl">
            Un mal cálculo de envío reduce tus conversiones hasta en un 40%. Nosotros configuramos la topología completa de tus envíos, integraciones con Shipit/Sendu y la estructura de Retiro en Tienda.
          </p>
          <LeadButton className="px-10 py-5 bg-violet-600 text-zinc-900 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-violet-500 transition-colors shadow-lg shadow-violet-500/20">
            Solicitar Auditoría Logística
          </LeadButton>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        faqs={faqs} 
        title="Dudas Frecuentes sobre Logística Shopify"
        description="Aclaramos los conceptos técnicos para automatizar tus despachos en todo el país."
      />

      {/* Final Integration CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center mt-32">
        <h2 className="text-4xl lg:text-6xl font-black text-zinc-900 mb-6 tracking-tighter uppercase leading-[0.9]">
          Despachos en <br/>
          <span className="text-violet-500 italic font-serif lowercase font-light">piloto automático</span>
        </h2>
        <p className="text-zinc-600 mb-10 mx-auto font-light leading-relaxed max-w-xl">
          Deja que tu tienda calcule sola los costos y genere las etiquetas de envío. Nos encargamos de la integración técnica para que tu operación escale sin límites.
        </p>
        <LeadButton className="px-12 py-6 bg-zinc-100 text-zinc-950 rounded-[2rem] font-black uppercase tracking-[0.15em] text-[11px] inline-flex items-center justify-center hover:bg-white transition-all hover:scale-105 active:scale-95">
          Hablar con un Experto Shopify
        </LeadButton>
      </section>
    </div>
  );
}
