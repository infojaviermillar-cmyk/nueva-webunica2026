import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checklist de Posicionamiento SEO Local en Google',
  description: 'Audita tu propio sitio web. Checklist técnica gratuita con 50 puntos a revisar para alcanzar la primera página de Google.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-24 overflow-hidden">
      <section className="max-w-5xl mx-auto px-6 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8">
          <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">✅ Checklist Gratuita</span>
        </div>
        <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
          Checklist Total <br/>de <span className="text-emerald-400 italic font-serif lowercase font-light">Posicionamiento </span> SEO
        </h1>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
          Una guía interactiva paso a paso para auditar Etiquetas H1, Meta Descriptions, sitemaps, robots.txt, Canonical Tags y Optimizaciones Core Web Vitals en tu web.
        </p>
      </section>

      <section className="max-w-xl mx-auto px-6">
        <div className="p-10 border border-emerald-500/20 bg-emerald-950/10 rounded-3xl backdrop-blur-md">
          <h3 className="text-2xl text-white font-bold mb-6 text-center">Desbloquear el Checklist Completo</h3>
          <form className="space-y-4">
            <div>
              <input type="email" placeholder="¿A qué correo te enviamos el PDF?" className="w-full bg-black/50 border border-white/5 rounded-xl p-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500" />
            </div>
            <button type="button" className="w-full px-8 py-5 bg-emerald-600 text-white rounded-xl font-black uppercase tracking-[0.1em] text-xs hover:bg-emerald-700 transition-colors shadow-[0_0_30px_rgba(16,185,129,0.2)]">
              Descargar PDF Ahora
            </button>
            <div className="text-center mt-6 pt-6 border-t border-white/5">
              <span className="text-zinc-500 text-xs italic font-serif">O evita hacerlo tú mismo.</span><br/>
              <Link href="/contacto" className="text-emerald-400 font-bold text-xs uppercase hover:underline mt-2 inline-block">
                Contratar nuestro Servicio SEO
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
