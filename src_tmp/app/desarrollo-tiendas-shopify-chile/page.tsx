import Link from 'next/link';

export const metadata = {
  title: 'Diseño y Desarrollo de Tiendas Shopify en Chile | Webunica',
  description: 'Somos expertos en creación de e-commerce sobre Shopify. Diseñamos tiendas online escalables, rápidas y optimizadas para máxima conversión en Chile.',
};

export default function DesarrolloShopifyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Header Spacer */}
      <div className="h-20 bg-[#FDFDFD]"></div>

      {/* Hero Service Section */}
      <section className="relative w-full pt-20 pb-32 overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#95bf47] via-transparent to-transparent"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#95bf47]/20 border border-[#95bf47]/30 rounded-full text-[#95bf47] font-bold text-xs uppercase tracking-widest mb-6">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 14.5c0-1.8-1.5-3.3-3.3-3.3S12.4 12.7 12.4 14.5s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3zm-10-8C9 4.7 7.5 3.2 5.7 3.2S2.4 4.7 2.4 6.5s1.5 3.3 3.3 3.3S9 8.3 9 6.5zM12 21.6c0-1.8-1.5-3.3-3.3-3.3S5.4 19.8 5.4 21.6s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3z"/>
                </svg>
                Shopify Partners
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[70px] text-white font-extrabold leading-[1.1] mb-6 text-balance">
                Desarrollo de <span className="text-white">Tiendas Shopify</span> en Chile
              </h1>
              <p className="text-xl text-zinc-400 mb-10 leading-relaxed text-pretty">
                Deja de pelear con plataformas lentas. Diseñamos y programamos tiendas online de alto rendimiento en Shopify, listas para escalar tus ventas y dominar tu nicho comercial.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/cotizador-en-linea-desarrollo-web" className="bg-[#95bf47] hover:bg-[#86ac40] text-zinc-950 font-bold px-8 py-4 rounded-xl transition-colors">
                  Cotizar mi Tienda
                </Link>
                <Link href="/proyectos-paginas-y-sitios-web" className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-colors backdrop-blur-sm">
                  Ver Portafolio
                </Link>
              </div>
            </div>

            {/* Abstract Graphic Right */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl p-6 flex flex-col transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-48 bg-zinc-800 rounded-2xl mb-4 overflow-hidden relative">
                   <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>
                   <div className="absolute right-4 bottom-4 w-12 h-12 bg-[#95bf47] rounded-full flex items-center justify-center">
                     <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                   </div>
                </div>
                <div className="w-3/4 h-6 bg-zinc-800 rounded-md mb-2"></div>
                <div className="w-1/2 h-6 bg-zinc-800 rounded-md mb-8"></div>
                <div className="flex justify-between items-end mt-auto">
                   <div className="w-1/3 h-10 bg-zinc-800 rounded-lg"></div>
                   <div className="w-1/2 h-12 bg-[#95bf47] rounded-lg"></div>
                </div>
              </div>
              <div className="absolute top-[60%] left-[-10%] w-[250px] h-[150px] bg-zinc-800 rounded-2xl shadow-xl border border-zinc-700 p-4 transform -rotate-6 hover:-rotate-3 transition-transform duration-500 flex flex-col justify-between">
                <div className="w-20 h-4 bg-zinc-700 rounded"></div>
                <div className="w-full h-12 bg-[#95bf47]/20 rounded-md border border-[#95bf47]/50 flex items-center px-4">
                  <span className="text-[#95bf47] font-mono font-bold">$ 2,450,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-zinc-900 mb-6 text-balance">
                Implementación de Diseño eCommerce Avanzado
              </h2>
              <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                No usamos plantillas lentas ni sobrecargadas. Programamos interfaces limpias en Shopify (Liquid) para garantizar que la experiencia de usuario (UX) en dispositivos móviles sea impecable, permitiendo a tus clientes comprar con solo un par de clics.
              </p>
              <ul className="space-y-4">
                {['Optimización de velocidad (Core Web Vitals)', 'Checkout rápido y sin fricción', 'Integraciones de pago locales (Webpay, MercadoPago)', 'Configuración de envíos automatizados (Starken, Chilexpress)'].map((item, i) => (
                  <li key={i} className="flex items-start text-zinc-700">
                    <svg className="w-6 h-6 text-[#95bf47] mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-10 shadow-xl shadow-zinc-200/50">
              <h3 className="font-heading text-2xl font-bold text-zinc-900 mb-6">Ventajas de migrar a Shopify</h3>
              <div className="space-y-6">
                {[
                  { title: 'Servidor 100% Gestionado', desc: 'Olvídate de caídas del sitio web durante el CyberDay.' },
                  { title: 'Ecosistema de Apps', desc: 'Conecta con miles de herramientas de marketing fácilmente.' },
                  { title: 'Seguridad PCI', desc: 'Transacciones encriptadas de máxima seguridad para tus clientes.' }
                ].map((feature, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-zinc-900">{feature.title}</h4>
                    <p className="text-zinc-600 text-sm">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-[#95bf47]/10 skew-x-12 transform translate-x-32"></div>
            <div className="relative z-10 p-12 md:p-16 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                ¿Tu ecommerce no está vendiendo lo esperado?
              </h2>
              <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto text-balance">
                La mayoría de las tiendas fracasan por tener un diseño confuso o procesos de pago largos. Déjanos auditar tu plataforma y migrarla a una solución High-Ticket.
              </p>
              <Link href="/contacto" className="inline-block bg-[#95bf47] hover:bg-[#86ac40] text-zinc-950 font-bold px-10 py-5 rounded-xl text-lg transition-colors">
                Hablemos de tu Tienda Online
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}