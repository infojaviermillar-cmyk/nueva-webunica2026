import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Descarga Gratis: Carta Gantt Proyecto E-commerce',
  description: 'Plantilla de planificación, cronograma y flujos para desarrollo de tiendas online. Organiza el lanzamiento de tu Shopify.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-[20vh] pb-24 overflow-hidden">
      <section className="max-w-5xl mx-auto px-6 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-8">
          <span className="text-indigo-400 text-[10px] font-black uppercase tracking-widest">🎁 Recurso Descargable</span>
        </div>
        <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
          Carta Gantt: <span className="text-indigo-400 italic font-serif lowercase font-light">Lanzamiento</span> E-Commerce
        </h1>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
          El 80% de los proyectos de tiendas online fracasan por falta de planificación. Descarga este Tracker usado por agencias para organizar el Wireframing, Carga de Productos, Pasarelas QA y Salida a Producción.
        </p>
      </section>

      <section className="max-w-xl mx-auto px-6">
        <div className="p-10 border border-zinc-800 bg-zinc-900/50 rounded-3xl backdrop-blur-md">
          <h3 className="text-2xl text-white font-bold mb-6 text-center">Obtener el documento (Excel/PDF)</h3>
          <form className="space-y-4">
            <div>
              <input type="text" placeholder="Tu nombre" className="w-full bg-black/50 border border-white/5 rounded-xl p-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500" />
            </div>
            <div>
              <input type="email" placeholder="Tu e-mail de trabajo" className="w-full bg-black/50 border border-white/5 rounded-xl p-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500" />
            </div>
            <button type="button" className="w-full px-8 py-5 bg-indigo-600 text-white rounded-xl font-black uppercase tracking-[0.1em] text-xs hover:bg-indigo-700 transition-colors shadow-xl">
              Enviar link a mi correo
            </button>
            <p className="text-zinc-600 text-[10px] text-center mt-4 uppercase">No enviamos SPAM. Puedes desuscribirte en cualquier momento.</p>
          </form>
        </div>
      </section>
    </main>
  );
}
