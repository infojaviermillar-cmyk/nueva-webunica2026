import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Costos Reales de Shopify en Chile (2026) | Comisiones y Planes',
  description: 'Desglose exacto de cuánto cuesta mantener una tienda Shopify en Chile. Conoce las comisiones por transacción, planes mensuales, costos de Flow/Mercado Pago y Apps.',
};

export default function Page() {
  const costBreakdown = [
    {
      title: "Plan Mensual Shopify",
      price: "Desde $25 USD/mes",
      description: "El plan 'Basic' cubre el 90% de las necesidades iniciales. Incluye hosting ilimitado, gestión de inventario, recuperación de carritos y certificados de seguridad (SSL).",
      icon: "🏪"
    },
    {
      title: "Comisión de Plataforma",
      price: "2.0% por venta",
      description: "Dado que 'Shopify Payments' aún no opera nativamente en Chile, Shopify aplica un cargo del 2% por cada transacción procesada con pasarelas externas en el plan Basic.",
      icon: "💳"
    },
    {
      title: "Pasarela de Pago (Flow / MercadoPago)",
      price: "Aprox. 2.9% a 3.5%",
      description: "Es el costo del procesador de pagos chileno que recibe el dinero (Tarjetas de crédito/débito). Varía dependiendo de la plataforma y de cuándo decidas retirar tus fondos.",
      icon: "🏦"
    },
    {
      title: "Apps de Ecosistema (Opcional)",
      price: "USD $0 - $50/mes",
      description: "Shopify es potente por sí solo, pero escalar suele requerir Apps: integración con Starken/Chilexpress (Shipit), marketing por email, o sistemas de reseñas avanzados.",
      icon: "🧩"
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 pt-[20vh] pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            Transparencia Financiera
          </div>
          <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8">
            La verdad sobre los <span className="text-emerald-500 italic font-serif lowercase font-light text-5xl lg:text-8xl">costos</span> <br/>de Shopify en Chile
          </h1>
          <p className="text-xl text-zinc-400 font-light leading-relaxed">
            Sin letras chicas. Este es el presupuesto exacto y continuo que necesitas considerar para operar un E-commerce profesional y escalable en Chile este 2026.
          </p>
        </div>
      </section>

      {/* Breakdown Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {costBreakdown.map((item, index) => (
            <div key={index} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white/10 transition-colors group">
              <div className="flex items-start gap-6">
                <div className="text-4xl group-hover:scale-110 transition-transform">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{item.title}</h3>
                  <div className="text-2xl font-black text-emerald-400 mb-4">{item.price}</div>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROI / Comparison Section */}
      <section className="bg-zinc-900 py-24 mb-32 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-700/50 rounded-[4rem] p-12 lg:p-16 text-center">
            <span className="text-violet-400 font-black text-sm uppercase tracking-widest block mb-4">El Mito de lo "Gratis"</span>
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tighter uppercase mb-8">
              ¿Por qué no usar WooCommerce si es "gratis"?
            </h2>
            <p className="text-lg text-zinc-300 font-light leading-relaxed mb-10 text-pretty">
              Muchas tiendas empiezan en WooCommerce (WordPress) porque no tiene pago mensual. Pero olvidan los <strong>costos ocultos</strong>: Hosting privado de alta velocidad ($30-$50/mes), mantenimiento técnico constante, plugins de pago cruzados y <strong>el costo incalculable de perder ventas porque tu servidor se cayó un CyberDay</strong>. Shopify es una inversión en tranquilidad y rendimiento garantizado.
            </p>
            <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs text-white uppercase font-bold tracking-widest">Shopify: 99.99% Uptime Garantizado</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
          Saquemos la <span className="text-violet-500 italic font-serif lowercase font-light">calculadora</span>
        </h2>
        <p className="text-zinc-400 mb-10 max-w-xl mx-auto font-light leading-relaxed">
          Cuéntanos sobre tus márgenes de producto y tu ticket promedio. Haremos un análisis de viabilidad para asegurarnos de que Shopify sea altamente rentable para ti.
        </p>
        <LeadButton className="px-12 py-6 bg-violet-600 text-white rounded-[2rem] font-black uppercase tracking-[0.15em] text-[11px] inline-flex items-center justify-center hover:bg-violet-700 transition-all shadow-[0_0_40px_rgba(124,58,237,0.3)] hover:scale-105 active:scale-95">
          Agendar Evaluación Gratuita
        </LeadButton>
      </section>

    </main>
  );
}

