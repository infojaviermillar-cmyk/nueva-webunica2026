import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top Header Spacing (in case header is fixed) */}
      <div className="h-20"></div>

      {/* Intro Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 container mx-auto">
        <div className="max-w-4xl">
          <p className="text-sm font-bold text-[#4f46e5] uppercase tracking-widest mb-4">Nuestro Trabajo</p>
          <h1 className="font-heading font-extrabold text-[#2d3748] text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-tight mb-8 text-balance">
            Casos de Estudio y Proyectos.
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl leading-relaxed">
            Hemos ayudado a decenas de empresas a digitalizar sus ventas, automatizar sus procesos educativos y dominar Google con SEO altamente estructurado.
          </p>
        </div>
      </section>

      {/* Bento Grid Gallery */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          
          {/* Bento Item 1: Large Left (eCommerce) */}
          <div className="group relative col-span-1 md:col-span-2 row-span-1 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl overflow-hidden cursor-pointer shadow-xl">
            {/* Abstract UI representation since image gen was exhausted */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[120%] bg-white/10 backdrop-blur-md rounded-tl-3xl shadow-2xl transform group-hover:-translate-x-4 transition-transform duration-700 flex flex-col p-8 gap-4 border-t border-l border-white/20">
              <div className="w-full h-8 bg-white/20 rounded-md"></div>
              <div className="w-3/4 h-8 bg-white/20 rounded-md"></div>
              <div className="mt-auto w-1/2 h-12 bg-[#a1fcd8] rounded-full mix-blend-overlay"></div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 flex flex-col">
              <div className="flex gap-2 mb-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full">Shopify Plus</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full">Fashion</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Tienda Escalable High-End</h3>
              <p className="text-white/80 max-w-sm">Rediseño completo de experiencia de compra y checkout optimizado para conversión.</p>
            </div>
          </div>

          {/* Bento Item 2: Top Right (e-Learning generated image) */}
          <div className="group relative col-span-1 row-span-1 bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer shadow-xl flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('/portfolio-2.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-500/80 backdrop-blur-md text-white text-xs font-bold rounded-full">Tutor LMS</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Academia Online</h3>
              <p className="text-white/70 text-sm">Dashboard de estudiantes y control analítico.</p>
            </div>
          </div>

          {/* Bento Item 3: Bottom Left / Center (Real Estate generated image) */}
          <div className="group relative col-span-1 row-span-1 bg-zinc-900 rounded-3xl overflow-hidden cursor-pointer shadow-xl flex items-center justify-center">
             <div className="absolute inset-0 bg-[url('/portfolio-3.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex gap-2 mb-3">
                <span className="px-3 py-1 bg-[#a1fcd8] text-zinc-900 text-xs font-bold rounded-full">WordPress</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Portal Inmobiliario Premium</h3>
              <p className="text-white/70 text-sm">Filtros dinámicos y fichas de propiedades de lujo.</p>
            </div>
          </div>

          {/* Bento Item 4: Wide Rectangle Bottom Right (B2B SaaS) */}
          <div className="group relative col-span-1 md:col-span-2 row-span-1 bg-zinc-100 rounded-3xl overflow-hidden cursor-pointer shadow-xl flex items-center p-8 md:p-12">
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600 via-transparent to-transparent"></div>
             
             {/* Abstract Wireframe elements */}
             <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-1/2 h-[80%] bg-white rounded-2xl shadow-2xl p-6 flex flex-col gap-4 transform group-hover:scale-105 transition-transform duration-500">
                <div className="flex justify-between items-center mb-2">
                  <div className="w-1/3 h-4 bg-zinc-200 rounded"></div>
                  <div className="w-8 h-8 bg-zinc-100 rounded-full"></div>
                </div>
                <div className="w-full h-32 bg-zinc-50 rounded-xl border border-zinc-100"></div>
                <div className="flex gap-4">
                  <div className="w-1/2 h-16 bg-blue-50 rounded-xl"></div>
                  <div className="w-1/2 h-16 bg-[#a1fcd8]/20 rounded-xl"></div>
                </div>
             </div>

             <div className="relative z-10 max-w-md">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-zinc-900 text-white text-xs font-bold rounded-full">UI/UX</span>
                  <span className="px-3 py-1 bg-zinc-200 text-zinc-800 text-xs font-bold rounded-full">SaaS B2B</span>
                </div>
                <h3 className="text-3xl font-heading font-extrabold text-zinc-900 mb-4">Interfaz para Plataformas Empresariales</h3>
                <p className="text-zinc-600">
                  Sistemas escalables basados en React/Next.js con un diseño moderno, claro y orientado a la productividad.
                </p>
                <button className="mt-8 text-blue-600 font-bold flex items-center gap-2 group-hover:text-blue-800 transition-colors">
                  Ver Detalles 
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
             </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-950 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">¿Listo para ser el próximo gran proyecto?</h2>
          <p className="text-zinc-400 text-lg mb-10">Agenda una llamada estratégica hoy mismo y descubramos cómo escalar tu negocio con un ecosistema digital potente.</p>
          <LeadButton className="inline-block bg-[#a1fcd8] hover:bg-[#8AEFBA] text-zinc-900 font-bold px-8 py-4 rounded-xl text-lg transition-colors">
            Cotizar mi Proyecto
          </LeadButton>
        </div>
      </section>
    </main>
  );
}
