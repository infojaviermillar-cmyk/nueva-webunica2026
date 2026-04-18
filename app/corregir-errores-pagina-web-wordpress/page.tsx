import Link from 'next/link';
import { Metadata } from 'next';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Urgencias WordPress: Reparar Página Web en Chile',
  description: '¿Sitio web vulnerado, pantalla blanca o errores críticos? Servicio express de recuperación, desinfección y optimización de páginas WordPress en Chile.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-24 overflow-hidden">
      <section className="max-w-5xl mx-auto px-6 mb-24 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
          🚨 Servicio Express 24/7
        </div>
        <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
          ¿Tu WordPress <br/><span className="text-rose-500 italic font-serif lowercase font-light">dejó de funcionar?</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
          Pantalla blanca de la muerte (WSoD), malware asiático, plugins incompatibles o servidor caído. Si estás perdiendo ventas ahora mismo, nosotros lo reparamos hoy.
        </p>
        <LeadButton className="px-12 py-6 bg-rose-600 text-white rounded-full font-black uppercase tracking-[0.15em] text-[11px] shadow-[0_0_40px_rgba(225,29,72,0.3)] animate-pulse">
          Solicitar Soporte de Urgencia
        </LeadButton>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-10 bg-zinc-900 rounded-[3rem] border border-rose-500/20">
          <h3 className="text-white font-bold mb-4 uppercase">Desinfección de Malware</h3>
          <p className="text-zinc-400 font-light text-sm">Limpiamos inyecciones SQL, redireccionamientos spam y sacamos tu dominio de las listas negras de Google.</p>
        </div>
        <div className="p-10 bg-zinc-900 rounded-[3rem] border border-zinc-800">
          <h3 className="text-white font-bold mb-4 uppercase">Errores Fatales (PHP)</h3>
          <p className="text-zinc-400 font-light text-sm">Recuperamos el sitio tras actualizaciones automáticas destructivas o conflictos entre versiones de PHP/Plugins.</p>
        </div>
        <div className="p-10 bg-zinc-900 rounded-[3rem] border border-zinc-800">
          <h3 className="text-white font-bold mb-4 uppercase">Optimización de Base de Datos</h3>
          <p className="text-zinc-400 font-light text-sm">Lentitud extrema en el checkout debido a bases de datos corrompidas por exceso de copias de seguridad u opciones transitorias.</p>
        </div>
      </section>
    </main>
  );
}
