import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Comisiones de Pago en Shopify Chile: Flow vs Mercado Pago (2026)',
  description: 'Comparativa exacta de comisiones, tarifas y plazos de retiro de las pasarelas de pago disponibles para tiendas Shopify en Chile.',
};

export default function Page() {
  const gateways = [
    {
      name: "Mercado Pago",
      logo: "💳",
      commission: "2.99% + IVA",
      releaseTime: "En el momento",
      pros: ["Alta confianza del cliente", "Checkout optimizado", "Dinero inmediato"],
      cons: ["Comisión ligeramente mayor si liberas al instante", "Soporte técnico más lento"],
      recommended: true
    },
    {
      name: "Flow.cl",
      logo: "🌊",
      commission: "2.89% + IVA",
      releaseTime: "2 días hábiles",
      pros: ["Muy estable en Chile", "Excelentes tarifas si esperas más días", "Buen soporte B2B"],
      cons: ["El checkout redirige fuera de tu web"],
      recommended: false
    },
    {
      name: "Pago Fácil",
      logo: "⚡",
      commission: "2.95% + IVA",
      releaseTime: "A convenir",
      pros: ["Fácil inicio de actividades", "Múltiples medios de pago locales"],
      cons: ["Interfaz de usuario en proceso de modernización", "Integración Shopify a veces requiere soporte"],
      recommended: false
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-24 overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
          Finanzas E-commerce
        </div>
        <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8">
          Comparativa de <br/>
          <span className="text-emerald-500 italic font-serif lowercase font-light text-5xl lg:text-8xl">comisiones</span> 2026
        </h1>
        <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto">
          ¿No sabes qué pasarela instalar en tu Shopify? Analizamos a fondo los costos reales de Flow, Mercado Pago y Pago Fácil para que protejas tu rentabilidad.
        </p>
      </section>

      {/* Warning Box */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        <div className="bg-zinc-900 border-l-4 border-amber-500 p-6 rounded-r-2xl text-zinc-300 font-light text-sm">
          <strong className="text-amber-500 font-bold block mb-2">⚠️ Recordatorio sobre Shopify Payments:</strong>
          Actualmente, Shopify Payments no opera nativamente en Chile. Por ende, Shopify te cobrará una pequeña comisión transaccional (entre 0.5% y 2.0% dependiendo de tu plan) **además** de la comisión que te cobre tu pasarela local. Calcula tus márgenes considerando ambas tarifas.
        </div>
      </section>

      {/* Gateway Cards Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gateways.map((gw, idx) => (
            <div key={idx} className={`p-8 rounded-[3rem] border relative overflow-hidden transition-all duration-300 ${gw.recommended ? 'bg-gradient-to-b from-zinc-900 to-zinc-950 border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.1)]' : 'bg-white/5 border-white/10 hover:border-white/20'}`}>
              {gw.recommended && (
                <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[9px] font-black uppercase tracking-widest px-4 py-1 rounded-bl-xl">
                  Recomendado para Shopify
                </div>
              )}
              
              <div className="text-4xl mb-4">{gw.logo}</div>
              <h3 className="text-2xl font-black text-white mb-6 tracking-tight">{gw.name}</h3>
              
              <div className="mb-6 pb-6 border-b border-zinc-800">
                <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">Comisión Base (Crédito)</div>
                <div className="text-3xl font-black text-emerald-400">{gw.commission}</div>
              </div>
              
              <div className="mb-8">
                <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-2">Abono del Dinero</div>
                <div className="text-zinc-300">{gw.releaseTime}</div>
              </div>

              <div>
                <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-3">Ventajas Clave</div>
                <ul className="space-y-2">
                  {gw.pros.map((p, i) => (
                    <li key={i} className="flex gap-2 text-sm text-zinc-400 font-light">
                      <span className="text-emerald-500">✓</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
          Deja la integración en <br/>
          <span className="text-emerald-500 italic font-serif lowercase font-light">manos expertas</span>
        </h2>
        <p className="text-zinc-400 mb-10 mx-auto font-light leading-relaxed max-w-xl">
          Instalamos, probamos y certificamos tu pasarela de pagos para asegurar que ninguna transacción falle y tu cuenta no sea bloqueada por errores de configuración.
        </p>
        <LeadButton className="px-12 py-6 bg-emerald-600 text-white rounded-[2rem] font-black uppercase tracking-[0.15em] text-[11px] inline-flex items-center justify-center hover:bg-emerald-700 transition-all shadow-[0_0_40px_rgba(16,185,129,0.2)] hover:scale-105 active:scale-95">
          Cotizar Integración E-commerce
        </LeadButton>
      </section>
    </main>
  );
}

