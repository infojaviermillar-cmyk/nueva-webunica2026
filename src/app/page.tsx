import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Hero Section Container */}
      <section className="relative w-full h-[calc(100vh-80px)] min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-[#8AEFBA] via-[#A8FBE1] to-[#E5FDF4]">
        
        {/* Background Decorative Rings */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
          {/* Top Left Huge Ring */}
          <div className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] rounded-full border-[3px] border-[#39d09a]"></div>
          {/* Bottom Right Ring */}
          <div className="absolute -bottom-[30%] -right-[10%] w-[1200px] h-[1200px] rounded-full border-[3px] border-[#39d09a]"></div>
          {/* Center Subtle intersecting ring */}
          <div className="absolute top-[30%] left-[40%] w-[600px] h-[600px] rounded-full border-[2px] border-[#39d09a]/50"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-[35vh] h-full flex flex-col justify-start max-w-7xl">
          
          <div className="max-w-[900px]">
            <h1 className="font-heading text-[#2d3748] font-extrabold leading-[1.1] tracking-tight mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-[70px] text-balance">
              Agencia de Desarrollo Web y Ecommerce en Chile
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-[#4f46e5] leading-snug mb-12 max-w-3xl text-pretty">
              Creamos sitios web, tiendas online y plataformas LMS con enfoque en SEO, rendimiento, experiencia de usuario e integraciones reales para empresas que quieren crecer.
            </p>
          </div>

          {/* Bottom Logos and Buttons Row */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mt-auto pb-8 lg:pb-12 w-full gap-8">
            
            {/* Logos */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 opacity-80 mix-blend-multiply">
              {/* Fake SVG for Shopify Partners */}
              <div className="flex items-center gap-2">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#95bf47]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 14.5c0-1.8-1.5-3.3-3.3-3.3S12.4 12.7 12.4 14.5s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3zm-10-8C9 4.7 7.5 3.2 5.7 3.2S2.4 4.7 2.4 6.5s1.5 3.3 3.3 3.3S9 8.3 9 6.5zM12 21.6c0-1.8-1.5-3.3-3.3-3.3S5.4 19.8 5.4 21.6s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3z"/>
                </svg>
                <span className="font-bold text-lg sm:text-xl tracking-tight text-[#1a1a1a]">shopify <span className="font-semibold text-[#4a4a4a]">partners</span></span>
              </div>
              
              {/* Fake SVG for WordPress Developer */}
              <div className="flex items-center gap-2">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 text-[#21759b]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.65 15.65c-1.78 1.78-4.22 2.85-6.65 2.85-2.07 0-3.98-.65-5.55-1.74l4-11.45 2.76 8.35 4.31-11.96c1.68 1.83 2.68 4.23 2.68 6.84 0 2.44-.94 4.65-2.45 6.21L12 9l-4 11C4.47 18.06 2 14.7 2 10.87c0-5.5 4.5-10 10-10S22 5.37 22 10.87c0 3.75-2.3 7-5.63 8.65z"/>
                </svg>
                <div className="flex flex-col leading-tight">
                  <span className="font-bold text-base sm:text-lg text-[#1a1a1a]">wordpress</span>
                  <span className="font-semibold text-xs sm:text-sm text-[#4a4a4a]">developer</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-start lg:justify-end gap-3 w-full lg:w-auto">
              <Link 
                href="/cotizador-en-linea-desarrollo-web"
                className="bg-[#4f46e5] text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-xl text-center transition-all transform hover:-translate-y-1 shadow-xl shadow-[#4f46e5]/30 flex items-center justify-center gap-2 flex-1 lg:flex-none text-sm md:text-base whitespace-nowrap"
              >
                 <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                 Calcular Presupuesto
              </Link>
              <Link 
                href="/proyectos-paginas-y-sitios-web"
                className="bg-white/50 backdrop-blur-sm border border-zinc-900/10 hover:bg-white text-zinc-900 font-bold px-6 py-3 md:px-8 md:py-4 rounded-xl text-center transition-colors flex-1 lg:flex-none text-sm md:text-base whitespace-nowrap shadow-sm"
              >
                Ver Portafolio
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* SEO Section: Servicios (H2 mapped to preserved SEO) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-6 text-balance">
              Soluciones digitales para vender, posicionar y escalar
            </h2>
            <p className="text-lg md:text-xl text-zinc-600">
              Diseñamos y desarrollamos páginas web estratégicamente preparadas para captar tráfico calificado (SEO) y generar alta conversión comercial.
            </p>
          </div>

          {/* Grid de H3s preservando las Palabras Claves originales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* SEO Card 1 */}
            <div className="group p-8 md:p-10 rounded-[2rem] bg-zinc-50 border border-zinc-100 hover:border-[#8AEFBA]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#8AEFBA]/10">
              <div className="w-14 h-14 rounded-2xl bg-[#a1fcd8] flex items-center justify-center mb-8 text-[#2d3748]">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-zinc-900 mb-4">
                Tiendas Shopify en Chile
              </h3>
              <p className="text-zinc-600 mb-8 leading-relaxed text-lg">
                Desarrollamos tiendas Shopify modernas, rápidas y orientadas a la conversión, con estructura SEO lista para crecer y rankear desde el primer mes.
              </p>
              <Link href="/desarrollo-tiendas-shopify-chile/" className="inline-flex items-center text-[#4f46e5] font-bold hover:text-blue-800 transition-colors">
                Ver Servicio 
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* SEO Card 2 */}
            <div className="group p-8 md:p-10 rounded-[2rem] bg-zinc-50 border border-zinc-100 hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/5">
              <div className="w-14 h-14 rounded-2xl bg-[#E0E7FF] flex items-center justify-center mb-8 text-[#4f46e5]">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-zinc-900 mb-4">
                Woo ecommerce empresas
              </h3>
              <p className="text-zinc-600 mb-8 leading-relaxed text-lg">
                Creamos desarrollo eCommerce flexible sobre WordPress y WooCommerce, ideal para proyectos que requieren 100% de propiedad e integraciones avanzadas B2B/B2C.
              </p>
              <Link href="/desarrollo-tienda-en-linea-woocommerce/" className="inline-flex items-center text-[#4f46e5] font-bold hover:text-blue-800 transition-colors">
                Ver Servicios 
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* SEO Card 3 */}
            <div className="group p-8 md:p-10 rounded-[2rem] bg-zinc-50 border border-zinc-100 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5">
               <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-8 text-blue-600">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-zinc-900 mb-4">
                Sitios web empredores Pymes
              </h3>
              <p className="text-zinc-600 mb-8 leading-relaxed text-lg">
                Diseñamos y programamos páginas web corporativas rápidas para que las empresas y pymes puedan rankear orgánicamente sin perder diseño visual Premium.
              </p>
              <Link href="/desarrollo-paginas-web-pymes-chile/" className="inline-flex items-center text-[#4f46e5] font-bold hover:text-blue-800 transition-colors">
                Ver Servicio 
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* SEO Card 4 */}
            <div className="group p-8 md:p-10 rounded-[2rem] bg-zinc-50 border border-zinc-100 hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/5">
               <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-8 text-orange-600">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-zinc-900 mb-4">
                Plataformas LMS Tutor LMS
              </h3>
              <p className="text-zinc-600 mb-8 leading-relaxed text-lg">
                Sistemas de academias e-learning sobre Tutor LMS. Arquitectura sólida para venta automatizada de cursos, embudos de venta y experiencias interactivas.
              </p>
              <Link href="/desarrollo-diseno-elearning-tutor-lms/" className="inline-flex items-center text-[#4f46e5] font-bold hover:text-blue-800 transition-colors">
                Ver Servicios 
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Section: Metodología Core (H2) */}
      <section className="py-24 relative overflow-hidden bg-white border-t border-zinc-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-2xl md:text-3xl text-[#2d3748] font-bold leading-relaxed mb-6">
              Metodología Webunica
            </h2>
            <p className="text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto">
              Combinamos auditoría comercial, estructura SEO on-page y directrices de UI/UX para construir tiendas web que capturan miradas y cierran tickets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left pt-8 border-t border-zinc-100 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">SEO Arquitectónico</h3>
              <p className="text-zinc-600 leading-relaxed">
                Cada URL, título y jerarquía H1-H6 del sitio están premeditados para responder a la intención de búsqueda exacta de tus posibles compradores en Google.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Desarrollo Orientado a Venta</h3>
              <p className="text-zinc-600 leading-relaxed">
                Flujos sin fricción. Incorporamos Google Analytics 4, Meta Pixel y carritos sin latencia para proteger la tasa de abandono y aumentar la rentabilidad.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Mantenimiento y Evolución</h3>
              <p className="text-zinc-600 leading-relaxed">
                El entorno digital no es estático. Optimizamos frecuentemente los módulos de conversión para adaptarnos a las últimas actualizaciones del algoritmo Core Web Vitals.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
