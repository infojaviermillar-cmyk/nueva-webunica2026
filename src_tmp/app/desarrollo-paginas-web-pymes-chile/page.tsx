import Link from 'next/link';

export const metadata = {
  title: 'Diseño de Páginas Web para Pymes y Empresas en Chile',
  description: 'Desarrollamos sitios web modernos, autoadministrables y veloces para pymes. Atrae más prospectos a tu negocio con una arquitectura orientada al SEO y UX.',
};

export default function DesarrolloPymesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Header Spacer since we have a transparent fixed header */}
      <div className="h-24 bg-[#FDFDFD]"></div>

      {/* Hero Service Section: Pymes Theme (Blue / Professional) */}
      <section className="relative w-full pt-16 pb-32 overflow-hidden bg-blue-50 rounded-b-[4rem] md:rounded-b-[6rem]">
        {/* Decoración de fondo */}
        <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-300 via-transparent to-transparent"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[100px]"></div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Texto Principal */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-700 font-bold text-xs uppercase tracking-widest mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Agencia Recomendada
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[70px] text-zinc-900 font-extrabold leading-[1.1] mb-6 text-balance">
                Páginas Web para <span className="text-blue-600">Pymes y Empresas</span> en Chile
              </h1>
              <p className="text-xl text-zinc-600 mb-10 leading-relaxed text-pretty">
                Tu empresa necesita más que un diseño bonito. Construimos sitios web estratégicos que cargan en milisegundos, destacan en Google y convierten a tus visitantes en clientes reales.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/cotizador-en-linea-desarrollo-web" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all transform hover:-translate-y-1 shadow-xl shadow-blue-600/30 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  Calcular Presupuesto Online
                </Link>
              </div>
            </div>

            {/* Ilustración o Mockup Abstracto Pyme */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[550px] bg-white border border-zinc-200 rounded-3xl shadow-2xl p-6 flex flex-col transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                {/* Header Mockup */}
                <div className="w-full flex items-center justify-between mb-8 pb-4 border-b border-zinc-100">
                  <div className="w-24 h-6 bg-zinc-200 rounded-md"></div>
                  <div className="flex gap-2">
                    <div className="w-10 h-2 bg-zinc-100 rounded"></div>
                    <div className="w-10 h-2 bg-zinc-100 rounded"></div>
                    <div className="w-10 h-2 bg-blue-100 rounded"></div>
                  </div>
                </div>
                {/* Hero Inside Mockup */}
                <div className="text-center mb-10 flex flex-col items-center">
                   <div className="w-3/4 h-8 bg-zinc-200 rounded-lg mb-3"></div>
                   <div className="w-1/2 h-8 bg-zinc-200 rounded-lg mb-6"></div>
                   <div className="w-[80%] h-3 bg-zinc-100 rounded mb-2"></div>
                   <div className="w-[60%] h-3 bg-zinc-100 rounded mb-6"></div>
                   <div className="w-32 h-10 bg-blue-600 rounded-lg"></div>
                </div>
                {/* Cards Inside Mockup */}
                <div className="grid grid-cols-2 gap-4 mt-auto">
                   <div className="w-full h-24 bg-zinc-50 rounded-xl border border-zinc-100 mb-2"></div>
                   <div className="w-full h-24 bg-blue-50/50 rounded-xl border border-blue-100 mb-2 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-8 h-full bg-blue-100 skew-x-12 transform translate-x-2"></div>
                   </div>
                </div>
              </div>
              
              {/* Badge Flotante de Rendimiento */}
              <div className="absolute top-[20%] right-[-5%] bg-white rounded-2xl shadow-xl shadow-blue-900/5 p-5 flex items-center gap-4 border border-zinc-50 transform rotate-3 hover:rotate-0 transition-transform duration-500 font-mono">
                 <div className="w-14 h-14 rounded-full border-[4px] border-green-500 flex items-center justify-center font-extrabold text-green-600 text-xl">
                   100
                 </div>
                 <div className="flex flex-col">
                   <span className="text-zinc-900 font-bold text-sm tracking-widest uppercase">Performance</span>
                   <span className="text-zinc-500 text-xs">Core Web Vitals</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios & SEO Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-zinc-900 mb-6 text-balance">
                Desarrollo Web Pymes Optimizado y Autoadministrable
              </h2>
              <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                Empoderamos a las pequeñas y medianas empresas de Chile con infraestructura propia de grandes agencias. Te entregamos un sitio web corporativo o un catálogo sobre WordPress que podrás gestionar tú mismo, sin depender de nosotros para cada cambio.
              </p>
              <ul className="space-y-4">
                {[
                  'Diseño Responsivo (Mobile-First y Retina Display)', 
                  'Gestor de contenidos amigable (WordPress/Elementor)', 
                  'Integración nativa con botón de WhatsApp Web', 
                  'Indexación en Google (Sitemap y Search Console)'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-zinc-700">
                    <svg className="w-6 h-6 text-blue-600 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-zinc-50 border border-zinc-100 rounded-3xl p-10 shadow-lg shadow-zinc-200/40">
              <h3 className="font-heading text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                Ventajas Corporativas
              </h3>
              <div className="space-y-6">
                {[
                  { title: 'Velocidad de Carga Extrema', desc: 'Evita perder clientes. Tus páginas se abrirán en menos de 2 segundos.' },
                  { title: 'Análitica Integrada', desc: 'Panel conectado a Google Analytics 4 para rastrear visitas reales.' },
                  { title: 'Dominio y Correos Profesionales', desc: 'Soporte para configurar tu@empresa.cl transmitiendo plena confianza.' }
                ].map((feature, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-zinc-900">{feature.title}</h4>
                    <p className="text-zinc-600 text-sm mt-1">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl shadow-blue-600/20 relative">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-500 skew-x-12 transform translate-x-32 hidden md:block"></div>
            <div className="relative z-10 p-12 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl text-balance">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                  Transforma la imagen de tu PYME hoy
                </h2>
                <p className="text-blue-100 text-lg">
                  La barrera tecnológica ya no es una excusa. Construye credibilidad ante nuevos prospectos.
                </p>
              </div>
              <Link href="/cotizador-en-linea-desarrollo-web" className="bg-white hover:bg-zinc-100 text-blue-700 font-bold px-10 py-5 rounded-xl text-lg transition-colors whitespace-nowrap shadow-xl">
                Agendar Diagnóstico Cero Costo
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}