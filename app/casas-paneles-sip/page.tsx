import { Metadata } from 'next';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';

export const metadata: Metadata = {
  title: 'Casas Paneles SIP: Venta y Construcción | Mejor Aislación Chile',
  description: 'Descubre por qué las casas prefabricadas con paneles SIP son el futuro de la construcción. Máxima retención térmica, armado rápido y ahorro garantizado.',
  keywords: [
    'casas paneles sip',
    'casas sip',
    'casas prefabricadas paneles sip',
    'casas prefabricadas sip'
  ],
  alternates: {
    canonical: 'https://webunica.cl/casas-paneles-sip',
  }
};

export default function CasasPanelesSipPage() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans antialiased text-white overflow-x-hidden">
      <main className="pt-32">
        <section className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-rose-600/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.2em] text-rose-400 uppercase bg-rose-500/10 rounded-full border border-rose-500/20">
                Tecnología Constructiva Superior
              </div>
              <h1 className="text-4xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-8 uppercase text-white">
                Casas <br/>
                <span className="text-rose-500 font-serif italic lowercase font-light">Paneles SIP</span>
              </h1>
              <p className="text-xl text-zinc-400 mb-10 leading-relaxed font-light text-pretty">
                El sistema Constructivo SIP (Structural Insulated Panel) revolucionó el mercado eliminando casi por completo la pérdida de calor en invierno y el ingreso de altas temperaturas en verano.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <LeadButton className="px-10 py-5 bg-rose-600 text-white rounded-2xl font-bold hover:bg-rose-700 transition-all shadow-[0_10px_30px_rgba(225,29,72,0.3)] hover:scale-105">
                  Cotizar mi Proyecto SIP
                </LeadButton>
                <Link href="/casas-prefabricadas" className="px-10 py-5 rounded-2xl font-bold bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center text-sm flex items-center justify-center">
                  Ver Casas Prefabricadas
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 relative">
              <div className="space-y-6">
                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] transform translate-y-8">
                   <div className="text-4xl mb-4 text-rose-500 tracking-tighter font-black">60%</div>
                   <h3 className="text-sm font-bold uppercase tracking-wider mb-2">Más Aislación</h3>
                   <p className="text-zinc-500 text-xs font-light">Frente al metalcom tradicional.</p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem]">
                   <div className="text-4xl mb-4 text-rose-500 tracking-tighter font-black">3x</div>
                   <h3 className="text-sm font-bold uppercase tracking-wider mb-2">Rapidez Armado</h3>
                   <p className="text-zinc-500 text-xs font-light">Estructura limpia e inteligente.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-rose-500 to-orange-500 p-8 rounded-[2rem] text-white shadow-2xl shadow-rose-500/20">
                   <div className="text-4xl mb-4 tracking-tighter font-black">100%</div>
                   <h3 className="text-sm font-bold uppercase tracking-wider mb-2">Libre de Plagas</h3>
                   <p className="text-white/80 text-xs font-light">Núcleo poliestireno EPS ignífugo e impenetrable para termitas.</p>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] transform -translate-y-8">
                   <div className="text-4xl mb-4 text-rose-500 tracking-tighter font-black">20%</div>
                   <h3 className="text-sm font-bold uppercase tracking-wider mb-2">Ahorro Energía</h3>
                   <p className="text-zinc-500 text-xs font-light">En calefacción durante la vida útil del hogar.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section SEO */}
        <section className="bg-zinc-900 border-t border-white/5 py-24">
          <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-invert text-zinc-400 font-light">
             <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8">¿Qué es exactamente una Casa con Panel SIP?</h2>
             <p>Muchas familias nos preguntan por la diferencia entre las <Link href="/casas-prefabricadas" className="text-rose-400 font-bold hover:underline">casas prefabricadas</Link> comunes y las <strong>casas paneles SIP</strong>. Para simplificarlo: el SIP es como un "sándwich" de alta tecnología; posee dos láminas de cubierta estructural (normalmente madera OSB) adheridas fuertemente a un núcleo central de material aislante EPS.</p>
             <p>Al unir varios de estos paneles mediante cortes milimétricos se levantan los muros, pisos y techos en tiempo récord y sin dejar rendijas. Esto convierte a las <strong>casas prefabricadas con paneles SIP</strong> en verdaderos "termos" habitacionales, algo vital para protegerse del clima extremo del sur de Chile o de las calurosas tardes de la zona central.</p>
             <p>Te invitamos a no quedarte solo con la parte técnica. Navega hacia <Link href="/modelos-casas-prefabricadas" className="text-rose-400 font-bold hover:underline">los diseños y modelos</Link> para ver cómo lucen por fuera, o sigue leyendo nuestra rama de <Link href="/casas-modulares" className="text-rose-400 font-bold hover:underline">casas modulares</Link>.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
