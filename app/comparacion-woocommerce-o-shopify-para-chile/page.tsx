import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Shopify vs WooCommerce en Chile (2026) | Cuál elegir para tu E-commerce',
  description: 'Comparativa definitiva entre Shopify y WooCommerce. Descubre los costos ocultos, nivel de seguridad y rendimiento para tiendas online en Chile.',
};

export default function Page() {
  const comparisonData = [
    {
      feature: "Costo Inicial",
      shopify: "Suscripción desde $25 USD",
      woo: "Gratis (Software base)",
      winner: "woo"
    },
    {
      feature: "Hosting y Servidor",
      shopify: "Incluido (Ancho de banda Ilimitado)",
      woo: "Aparte ($30 - $100+ USD / mes para buen rendimiento)",
      winner: "shopify"
    },
    {
      feature: "Mantenimiento Técnico",
      shopify: "0 Horas. Actualizaciones automáticas.",
      woo: "Requiere desarrollador. Plugins pueden romper la tienda.",
      winner: "shopify"
    },
    {
      feature: "Estabilidad en CyberDay",
      shopify: "99.99% Uptime garantizado.",
      woo: "Alta probabilidad de caída sin un servidor dedicado costoso.",
      winner: "shopify"
    },
    {
      feature: "Seguridad y Anti-Fraude",
      shopify: "Nivel Bancario (PCI DSS) Incluido.",
      woo: "Responsabilidad del dueño instalar y configurar plugins de seguridad.",
      winner: "shopify"
    },
    {
      feature: "Conexión Facturación CL. (SII)",
      shopify: "Integraciones limpias vía Apps (ej. Bsale, Facto).",
      woo: "Plugins pesados, a menudo conflictivos con plantillas.",
      winner: "shopify"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 pt-[20vh] pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10 text-center">
        <div className="inline-block px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
          La Batalla E-commerce 2026
        </div>
        <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8">
          Shopify <span className="text-zinc-500 font-light italic lowercase font-serif px-2">vs</span> WooCommerce
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
          Descubre por qué la plataforma "gratuita" suele ser la más cara, y por qué las marcas líderes en Chile están migrando a soluciones SaaS.
        </p>
      </section>

      {/* Comparison Table Section */}
      <section className="max-w-5xl mx-auto px-6 mb-32 relative z-10">
        <div className="bg-zinc-900 border border-zinc-800 rounded-[3rem] overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-zinc-950 border-b border-zinc-800 p-8 text-center items-center">
            <div className="text-left text-zinc-500 font-bold uppercase tracking-widest text-xs">Característica</div>
            <div className="text-emerald-400 font-black text-2xl tracking-tighter uppercase flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Shopify
            </div>
            <div className="text-indigo-400 font-black text-2xl tracking-tighter uppercase disable-opacity">
              WooCommerce
            </div>
          </div>
          
          {/* Table Rows */}
          <div className="divide-y divide-zinc-800/50">
            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 p-8 items-center text-sm lg:text-base hover:bg-white/5 transition-colors">
                <div className="font-bold text-white pr-4">{row.feature}</div>
                <div className={`text-center font-medium px-4 ${row.winner === 'shopify' ? 'text-emerald-300' : 'text-zinc-500'}`}>
                  {row.winner === 'shopify' && <span className="block text-xl mb-1">👑</span>}
                  {row.shopify}
                </div>
                <div className={`text-center font-medium px-4 ${row.winner === 'woo' ? 'text-indigo-300' : 'text-zinc-500'}`}>
                  {row.woo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Hidden Cost of Free */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="flex flex-col lg:flex-row gap-16 items-center bg-zinc-900 rounded-[4rem] p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
              El alto costo de las <br/>cosas <span className="text-rose-500 underline decoration-rose-500/30">gratis.</span>
            </h2>
          </div>
          <div className="lg:w-1/2 relative z-10 text-zinc-400 font-light leading-relaxed space-y-6">
            <p>
              WooCommerce es excelente si eres un desarrollador con tiempo libre. Pero si eres el dueño de un negocio, tu tiempo debe enfocarse en vender, no en actualizar servidores o reparar bases de datos corrompidas.
            </p>
            <p>
              Una hora de tu tienda caída durante un fin de semana cuesta mucho más que un año completo de suscripción en Shopify. En <strong className="text-white">Webunica</strong> construimos sobre Shopify porque nuestros clientes exigen infraestructuras que nunca fallen.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
          ¿Listo para la <span className="text-emerald-500 italic font-serif lowercase font-light">migración?</span>
        </h2>
        <p className="text-zinc-400 mb-10 mx-auto font-light leading-relaxed">
          Traemos todos tus productos, clientes e historial desde WooCommerce hacia una infraestructura Shopify ultra-rápida y a medida.
        </p>
        <LeadButton className="px-12 py-6 bg-emerald-600 text-white rounded-[2rem] font-black uppercase tracking-[0.15em] text-[11px] inline-flex items-center justify-center hover:bg-emerald-700 transition-all shadow-[0_0_40px_rgba(52,211,153,0.2)] hover:scale-105 active:scale-95">
          Cotizar Migración a Shopify
        </LeadButton>
      </section>

    </div>
  );
}

