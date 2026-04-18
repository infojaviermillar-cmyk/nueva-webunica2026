import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Centro de Conocimiento E-commerce | Webunica',
  description: 'Guías, tutoriales y comparativas de alto nivel para escalar tu E-commerce en Chile con Shopify y Next.js.',
};

export default function Page() {
  const categories = [
    {
      title: "Ecosistema Shopify Chile",
      description: "Todo lo que necesitas saber antes de lanzar o migrar tu tienda Shopify en el mercado chileno.",
      color: "from-emerald-500/20 to-transparent",
      borderColor: "border-emerald-500/30",
      icon: "🛒",
      links: [
        { title: "Desarrollo de Tiendas Shopify", href: "/desarrollo-tiendas-shopify-en-chile", tag: "Servicio" },
        { title: "Desarrollo de Themes a Medida", href: "/desarrollo-theme-shopify-chile", tag: "Servicio" },
        { title: "Shopify vs WooCommerce: La Batalla Final", href: "/comparacion-woocommerce-o-shopify-para-chile", tag: "Nuevo" },
        { title: "Los Costos Reales de Shopify en Chile", href: "/costos-asociados-a-tienda-shopify-chile" },
        { title: "Comisiones: Mercado Pago vs Flow vs Pago Fácil", href: "/comisiones-plataformas-de-pago-para-shopify-chile" },
        { title: "Apps Esenciales para Shopify Chile", href: "/aplicaciones-para-tiendas-shopify" },
        { title: "Logística: Envíos con Starken y Courier locales", href: "/medios-de-transporte-shopify" },
        { title: "Guía: Dropshipping Local con Dropi", href: "/tienda-dropshipping-shopify-y-dropi" },
        { title: "Guía 2026: Cómo Instalar Mercado Pago", href: "/como-instalar-mercado-pago-en-shopify-paso-a-paso-guia-2025" },
        { title: "Preguntas Frecuentes sobre Shopify", href: "/preguntas-frecuentes-sobre-tiendas-shopify-en-chile" },
      ]
    },
    {
      title: "Marketing y Embudos",
      description: "Recursos para calcular el retorno de inversión de tus campañas publicitarias.",
      color: "from-blue-500/20 to-transparent",
      borderColor: "border-blue-500/30",
      icon: "📈",
      links: [
        { title: "Calculadora de Inversión Meta Ads", href: "/calculadora-de-campana-meta-ads-facebook" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-24 overflow-hidden">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-6">
          Centro de <span className="text-violet-500 italic font-serif lowercase font-light">Conocimiento</span>
        </h1>
        <p className="text-xl text-zinc-400 font-light leading-relaxed">
          Guías de alto valor, comparativas técnicas y recursos estratégicos para dueños de negocios e-commerce en Chile.
        </p>
      </section>

      {/* Grid Categories */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className={`bg-gradient-to-br ${cat.color} bg-zinc-900 border ${cat.borderColor} p-8 lg:p-12 rounded-[3rem] relative overflow-hidden group`}>
              <div className="text-5xl mb-6">{cat.icon}</div>
              <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-4">{cat.title}</h2>
              <p className="text-zinc-400 font-light mb-8 text-sm">{cat.description}</p>
              
              <ul className="space-y-4 relative z-10">
                {cat.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link 
                      href={link.href}
                      className="group/link flex items-center justify-between p-4 bg-black/40 hover:bg-black/80 border border-white/5 hover:border-white/20 rounded-2xl transition-all"
                    >
                      <span className="text-zinc-300 group-hover/link:text-white font-medium text-sm transition-colors">
                        {link.title}
                      </span>
                      <div className="flex items-center gap-3">
                        {link.tag && (
                          <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${link.tag === 'Nuevo' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-zinc-800 text-zinc-500'}`}>
                            {link.tag}
                          </span>
                        )}
                        <svg className="w-4 h-4 text-zinc-600 group-hover/link:text-white transition-colors group-hover/link:translate-x-1 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
