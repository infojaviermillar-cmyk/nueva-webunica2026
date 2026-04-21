import Link from 'next/link';
import Image from 'next/image';
import LeadButton from '@/components/ui/lead-button';

interface LMSLandingProps {
  heroTitle: string;
  competitorName: string;
  focusText: string;
}

export default function LMSLanding({ heroTitle, competitorName, focusText }: LMSLandingProps) {
  return (
    <main className="min-h-screen bg-zinc-950 pt-[20vh] pb-24 overflow-hidden text-white font-sans antialiased">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 mb-32 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-rose-400 text-[10px] font-black uppercase tracking-widest">Next.js LMS en Desarrollo Privado</span>
        </div>
        
        <h1 className="text-4xl lg:text-[5.5rem] font-black uppercase tracking-tighter mb-8 leading-[0.9] text-balance">
          El fin de los sistemas <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-500 italic font-serif lowercase font-light">lentos y feos.</span>
        </h1>
        
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed mb-6 text-pretty">
          {heroTitle}
        </p>
        <p className="text-lg text-zinc-500 max-w-2xl mx-auto font-light leading-relaxed mb-12">
          La industria del E-Learning evolucionó. Mientras {competitorName} se queda atrapado en el pasado con servidores saturados y diseños complejos, nosotros estamos construyendo <strong className="text-white">la plataforma educativa nativa en React + Next.js más rápida de Chile.</strong>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <LeadButton className="px-12 py-6 bg-white text-zinc-950 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all">
            Unirme a la lista de espera (Acceso Temprano)
          </LeadButton>
          <Link href="/contacto" className="px-8 py-5 border-b-2 border-zinc-700 text-zinc-400 font-bold uppercase tracking-wider text-xs hover:text-white hover:border-white transition-all">
            Quiero mi LMS a medida ahora
          </Link>
        </div>
      </section>

      {/* Portfolio Carousel section */}
      <section className="mb-32 relative z-10 w-full overflow-hidden">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-4">Ejemplos de Plataformas Creadas</h2>
            <p className="text-zinc-500 font-light">Proyectos reales operando y escalando con tecnología veloz.</p>
        </div>
        
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 pb-12 w-full scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
             {[
               { name: 'IPS Data X', url: 'https://ipsdatax.com', img: '/elearning/ipsdatax.png' },
               { name: 'Reaprende', url: 'https://reaprende.cl', img: '/elearning/resprende.png' },
               { name: 'Me Capacito en Línea', url: 'https://mecapacitoenlinea.cl', img: '/elearning/mecapacito.png' },
               { name: 'Skillnest', url: 'https://skillnest.la', img: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fskillnest.la%2F?w=1200' },
               { name: 'Educontable', url: 'https://educontable.cl', img: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Feducontable.cl%2F?w=1200' }
             ].map((proj, i) => (
                <a key={i} href={proj.url} target="_blank" rel="noreferrer" className="snap-center shrink-0 w-[85vw] md:w-[600px] bg-zinc-900 border border-white/10 rounded-[2rem] overflow-hidden group hover:border-rose-500/50 transition-all hover:shadow-[0_0_30px_rgba(225,29,72,0.15)] flex flex-col">
                     <div className="aspect-[16/10] relative overflow-hidden bg-zinc-950 border-b border-white/5">
                        <img src={proj.img} alt={proj.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" loading="lazy" />
                     </div>
                     <div className="p-6 flex items-center justify-between">
                        <div>
                           <h3 className="font-bold text-lg uppercase tracking-wider text-rose-50">{proj.name}</h3>
                           <p className="text-zinc-500 text-xs mt-1 font-mono">{proj.url.replace('https://', '')}</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-rose-600 transition-colors">
                           <span className="text-white">→</span>
                        </div>
                     </div>
                </a>
             ))}
        </div>
      </section>

      {/* Comparison Reality Check */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
        <div className="bg-zinc-900 border border-white/5 rounded-[4rem] p-10 lg:p-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-600/10 rounded-full blur-[100px] pointer-events-none" />
           <div className="text-center mb-16 relative z-10">
             <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight mb-4">¿Por qué estamos re-inventando el E-Learning?</h2>
             <p className="text-zinc-500 font-light">{focusText}</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="bg-zinc-950/50 border border-red-500/20 p-10 rounded-[3rem]">
                 <div className="text-red-400 font-black tracking-widest uppercase text-sm mb-8 flex items-center gap-3">
                   <span className="text-2xl">⚠️</span> El pasado ({competitorName})
                 </div>
                 <ul className="space-y-6 text-zinc-400 font-light text-sm">
                   <li>❌ Dependencia total de plugins externos que rompen el sitio al actualizarse.</li>
                   <li>❌ Interfaces de estudiante (Frontend) parecidas a bases de datos corporativas antiguas.</li>
                   <li>❌ Alto consumo de recursos en servidor; se caen cuando entran 50 alumnos simultáneos.</li>
                   <li>❌ Altas barreras de entrada para configurar métodos de pago locales y facturación.</li>
                 </ul>
              </div>
              <div className="bg-white/5 border border-emerald-500/30 p-10 rounded-[3rem] relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
                 <div className="text-emerald-400 font-black tracking-widest uppercase text-sm mb-8 flex items-center gap-3 relative z-10">
                   <span className="text-2xl">⚡</span> El futuro (Next.js by Webunica)
                 </div>
                 <ul className="space-y-6 text-zinc-300 font-light text-sm relative z-10">
                   <li>✅ Arquitectura desacoplada de alto rendimiento. Tiempos de carga casi de cero segundos.</li>
                   <li>✅ UX de calibre mundial estilo Netflix/Masterclass orientada a la retención de alumnos.</li>
                   <li>✅ Escalabilidad global nativa en la nube (Edge). Resiste miles de alumnos al mismo tiempo sin sudar.</li>
                   <li>✅ Monitoreo de progreso en tiempo real e integraciones limpias vía API directa.</li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="max-w-4xl mx-auto px-6 text-center pb-20 relative z-10">
        <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tighter uppercase leading-[0.9]">
          No adaptes tu negocio a la plataforma.<br/>
          <span className="text-rose-500 italic font-serif lowercase font-light text-4xl lg:text-5xl">que la plataforma trabaje para ti.</span>
        </h2>
        <p className="text-zinc-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Ya sea que decidas esperar nuestro producto empaquetado o necesites desarrollar hoy mismo un LMS corporativo cerrado a medida, tenemos la ingeniería necesaria.
        </p>
        <LeadButton className="px-12 py-6 bg-rose-600 text-white rounded-full font-black uppercase tracking-[0.15em] text-[11px] shadow-[0_0_30px_rgba(225,29,72,0.3)] hover:scale-105 active:scale-95 transition-all">
          Agendar Evaluación de Plataforma Educativa
        </LeadButton>
      </section>

    </main>
  );
}
