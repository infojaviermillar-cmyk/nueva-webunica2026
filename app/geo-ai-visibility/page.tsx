import { Metadata } from 'next';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Posicionamiento en Inteligencia Artificial (GEO) | Webunica',
  description: 'Domina los resultados generativos de Google AI, ChatGPT y Perplexity. El primer servicio de Generative Engine Optimization (GEO) en Chile para B2B y E-commerce.',
  openGraph: {
    title: 'Posicionamiento en Inteligencia Artificial (GEO) | Webunica',
    description: 'El primer servicio de Generative Engine Optimization en Chile.',
    url: 'https://webunica.cl/geo-ai-visibility',
    type: 'website',
  },
  alternates: {
    canonical: 'https://webunica.cl/geo-ai-visibility',
  }
};

export default function GEOAIVisibilityPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-300 font-sans selection:bg-violet-500/30 selection:text-white">
      {/* Background abstract gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-violet-600/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute top-[40%] -left-[20%] w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 pt-[20vh] pb-32">
        {/* HERO SECTION */}
        <section className="px-6 mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-bold text-white uppercase tracking-widest">NUEVO SERVICIO PREMIUM</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-[80px] font-black text-white tracking-tighter leading-[0.9] mb-8 text-balance">
            NO COMPITAS POR CLICS. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-emerald-400">
              CONVIÉRTETE EN LA RESPUESTA.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed text-balance">
            Domina los resultados generativos de <strong className="text-white font-semibold">Google AI Overviews, ChatGPT y Perplexity</strong>. El primer servicio de Generative Engine Optimization (GEO) en Chile diseñado para dominar la búsqueda de Inteligencia Artificial.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LeadButton className="px-8 py-5 rounded-full bg-white text-zinc-950 font-black text-sm uppercase tracking-widest hover:bg-zinc-200 transition-colors shadow-xl shadow-white/10 w-full sm:w-auto text-center">
              Auditar mi Share of Voice en IA
            </LeadButton>
            <Link href="#metodologia" className="px-8 py-5 rounded-full bg-white/5 text-white font-bold text-sm uppercase tracking-widest border border-white/10 hover:bg-white/10 transition-colors w-full sm:w-auto text-center">
              Ver Metodología
            </Link>
          </div>
        </section>

        {/* LOGOS SECTION */}
        <section className="mt-24 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <p className="text-center text-xs font-bold text-zinc-500 uppercase tracking-widest mb-8">OPTIMIZAMOS LA PRESENCIA DE TU MARCA PARA:</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-2xl font-black tracking-tighter text-white">ChatGPT</span>
              <span className="text-2xl font-black tracking-tighter text-white">Gemini</span>
              <span className="text-2xl font-black tracking-tighter text-white">Perplexity</span>
              <span className="text-2xl font-black tracking-tighter text-white">Claude</span>
              <span className="text-2xl font-black tracking-tighter text-white">Google SGE</span>
            </div>
          </div>
        </section>

        {/* COMPARISON SECTION */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">¿Por qué el SEO tradicional ya no es suficiente?</h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">El 40% de las búsquedas B2B informacionales ya se resuelven en interfaces conversacionales. Si no estás en la respuesta generada, pierdes al cliente antes de que busque en Google.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Old SEO */}
            <div className="p-8 md:p-12 rounded-[2rem] bg-zinc-900/50 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-9xl -mr-10 -mt-10 group-hover:scale-110 transition-transform">01</div>
              <h3 className="text-2xl font-black text-zinc-400 uppercase tracking-tighter mb-6">SEO Tradicional (El Pasado)</h3>
              <ul className="space-y-4">
                <li className="flex gap-3"><span className="text-red-500 font-bold">✕</span> Lucha por 10 enlaces azules.</li>
                <li className="flex gap-3"><span className="text-red-500 font-bold">✕</span> Dependencia de CTR y clics orgánicos.</li>
                <li className="flex gap-3"><span className="text-red-500 font-bold">✕</span> Algoritmos inestables basados en backlinks tóxicos.</li>
                <li className="flex gap-3"><span className="text-red-500 font-bold">✕</span> Optimización para "bots araña" ciegos.</li>
              </ul>
            </div>
            
            {/* GEO */}
            <div className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-violet-900/20 to-emerald-900/20 border border-violet-500/30 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 text-emerald-400 font-black text-9xl -mr-10 -mt-10 group-hover:scale-110 transition-transform">02</div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-6">GEO / AI Visibility (El Futuro)</h3>
              <ul className="space-y-4">
                <li className="flex gap-3"><span className="text-emerald-400 font-bold">✓</span> La IA te cita como la única autoridad absoluta.</li>
                <li className="flex gap-3"><span className="text-emerald-400 font-bold">✓</span> Captura de ventas en búsquedas "Cero-Clic".</li>
                <li className="flex gap-3"><span className="text-emerald-400 font-bold">✓</span> Construcción de confianza profunda (EEAT y Knowledge Graph).</li>
                <li className="flex gap-3"><span className="text-emerald-400 font-bold">✓</span> Optimización semántica estructurada para LLMs (Large Language Models).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* METHODOLOGY SECTION */}
        <section id="metodologia" className="py-32 bg-white/[0.02] border-y border-white/5 px-6">
          <div className="max-w-7xl mx-auto">
             <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">Neural-Rank Protocol™</h2>
                <p className="text-zinc-400 text-lg">Nuestra metodología exclusiva y registrada de 6 fases para dominar la inteligencia artificial.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 { step: "01", title: "AI Discovery", desc: "Auditoría inicial de Entidades y Share of Voice. Descubrimos cómo ChatGPT y Gemini ven a tu marca hoy y a tu competencia." },
                 { step: "02", title: "Semantic Architecture", desc: "Implementación masiva de Schema.org avanzado (JSON-LD). Transformamos tu catálogo en una base de datos que la IA pueda leer a la perfección." },
                 { step: "03", title: "Answer Engine Optimization", desc: "Transformación de contenidos a formatos de Pregunta-Respuesta (AEO) ricos en contexto y diseñados para alimentar respuestas directas." },
                 { step: "04", title: "EEAT & Digital PR", desc: "A la IA le importa la verdad consensuada. Construimos señales de confianza externas, reviews y autoridad digital verificable." },
                 { step: "05", title: "AI Feedback Loop", desc: "Monitoreo constante de respuestas generativas. Ajustamos los prompts inversos para forzar la recomendación de tu marca como solución ideal." },
                 { step: "06", title: "Generative Scaling", desc: "Uso de Inteligencia Artificial propia para escalar el marcado de datos y la clusterización en catálogos de miles de productos." }
               ].map((phase, idx) => (
                 <div key={idx} className="bg-zinc-950 p-8 rounded-3xl border border-white/5 hover:border-violet-500/50 transition-colors group">
                    <div className="text-violet-500 font-black text-2xl mb-4 group-hover:scale-110 origin-left transition-transform">{phase.step}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{phase.desc}</p>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Planes de Consultoría AI</h2>
            <p className="text-zinc-400 text-lg">Retainers mensuales diseñados para escalar la autoridad digital de tu empresa en el largo plazo.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Starter */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-[2rem] p-8 hover:border-white/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">AI Starter</h3>
              <p className="text-zinc-500 text-sm mb-6">Para ecommerce en crecimiento (hasta 500 productos).</p>
              <div className="text-3xl font-black text-white mb-8">Consultar</div>
              <ul className="space-y-4 text-sm text-zinc-400 mb-8">
                <li className="flex items-start gap-3"><span className="text-emerald-400">✓</span> 20 Páginas optimizadas al mes</li>
                <li className="flex items-start gap-3"><span className="text-emerald-400">✓</span> 2 Artículos/Clústeres Semánticos</li>
                <li className="flex items-start gap-3"><span className="text-emerald-400">✓</span> Schema.org Dinámico Básico</li>
                <li className="flex items-start gap-3"><span className="text-emerald-400">✓</span> Auditoría de Share of Voice (Trimestral)</li>
                <li className="flex items-start gap-3"><span className="text-emerald-400">✓</span> 1 Reunión de Estrategia mensual</li>
              </ul>
              <LeadButton className="w-full py-4 text-center border border-white/10 text-white rounded-xl hover:bg-white/5 font-bold uppercase tracking-widest text-xs transition-colors">Solicitar Evaluación</LeadButton>
            </div>

            {/* Professional */}
            <div className="bg-gradient-to-b from-violet-900/40 to-zinc-900 border border-violet-500/50 rounded-[2rem] p-8 transform lg:-translate-y-4 shadow-2xl shadow-violet-900/20">
              <div className="bg-violet-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-4">Más Solicitado</div>
              <h3 className="text-xl font-bold text-white mb-2">AI Professional</h3>
              <p className="text-violet-200/60 text-sm mb-6">Para empresas B2B y tiendas medianas (hasta 2.500 productos).</p>
              <div className="text-3xl font-black text-white mb-8">Consultar</div>
              <ul className="space-y-4 text-sm text-zinc-300 mb-8">
                <li className="flex items-start gap-3"><span className="text-emerald-400">✓</span> 50 Páginas optimizadas al mes</li>
                <li className="flex items-start gap-3"><span className="text-emerald-400">✓</span> 4 Artículos/Clústeres Semánticos</li>
                <li className="flex items-start gap-3"><span className="text-emerald-400">✓</span> Schema.org Avanzado (FAQ, Breadcrumbs)</li>
                <li className="flex items-start gap-3"><span className="text-emerald-400">✓</span> Auditoría de Share of Voice (Mensual)</li>
                <li className="flex items-start gap-3"><span className="text-emerald-400">✓</span> 1 Mención Digital PR (Señales EEAT)</li>
                <li className="flex items-start gap-3"><span className="text-emerald-400">✓</span> 2 Reuniones Estratégicas mensuales</li>
              </ul>
              <LeadButton className="w-full py-4 text-center bg-white text-zinc-950 rounded-xl hover:bg-zinc-200 font-black uppercase tracking-widest text-xs transition-colors shadow-lg">Cotizar Plan Pro</LeadButton>
            </div>

            {/* Enterprise */}
            <div className="bg-zinc-900/50 border border-white/10 rounded-[2rem] p-8 hover:border-white/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">AI Enterprise</h3>
              <p className="text-zinc-500 text-sm mb-6">Solución a escala para marcas líderes y catálogos masivos.</p>
              <div className="text-3xl font-black text-white mb-8">A Medida</div>
              <ul className="space-y-4 text-sm text-zinc-400 mb-8">
                <li className="flex items-start gap-3"><span className="text-emerald-400">✓</span> +150 Páginas optimizadas al mes</li>
                <li className="flex items-start gap-3"><span className="text-emerald-400">✓</span> +8 Artículos/Clústeres Semánticos</li>
                <li className="flex items-start gap-3"><span className="text-emerald-400">✓</span> Schema.org Personalizado Custom</li>
                <li className="flex items-start gap-3"><span className="text-emerald-400">✓</span> Auditoría de Share of Voice (Quincenal)</li>
                <li className="flex items-start gap-3"><span className="text-emerald-400">✓</span> 3 Menciones Digital PR (Alto EEAT)</li>
                <li className="flex items-start gap-3"><span className="text-emerald-400">✓</span> Canal de Slack Compartido</li>
              </ul>
              <LeadButton className="w-full py-4 text-center border border-white/10 text-white rounded-xl hover:bg-white/5 font-bold uppercase tracking-widest text-xs transition-colors">Contactar Ventas</LeadButton>
            </div>
          </div>
        </section>

        {/* CTA BOTTOM */}
        <section className="max-w-4xl mx-auto px-6 mt-16 text-center">
          <div className="bg-gradient-to-br from-violet-600 to-indigo-800 rounded-[3rem] p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full" />
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 relative z-10">¿Tu marca existe para la IA?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto relative z-10">Averígualo hoy. Agenda una sesión exploratoria gratuita y descubre cómo ChatGPT y Perplexity están recomendando a tu competencia.</p>
            <LeadButton className="inline-block px-10 py-5 bg-[#a1fcd8] text-zinc-950 font-black text-sm uppercase tracking-widest rounded-xl hover:bg-[#8defc1] transition-colors relative z-10 shadow-xl">
              Agendar Sesión Estratégica
            </LeadButton>
          </div>
        </section>

      </div>
    </div>
  );
}
