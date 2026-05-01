import Link from 'next/link';
import { ShieldCheck, Code2, Globe, Cpu, Heart, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Licencias y Filosofía Open Source | Webunica Chile 2026',
  description: 'Descubre cómo trabajamos con licencias GPL y software de código abierto en WordPress y otras plataformas. Libertad y seguridad para tu negocio.',
};

export default function LicensePage() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans antialiased text-white pb-20">
      <main className="max-w-5xl mx-auto px-6 pt-32 lg:pt-40">
        
        {/* Header Section */}
        <div className="text-center mb-20 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-violet-600/20 blur-[100px] rounded-full -z-10" />
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">
            Licencias & <br/> <span className="text-violet-500 italic font-serif lowercase font-light">Open Source</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
            En Webunica creemos en la libertad del software. Utilizamos tecnología que empodera al cliente y no lo ata a una sola agencia.
          </p>
        </div>

        {/* Content Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          <div className="bg-zinc-900/50 p-10 lg:p-14 rounded-[3rem] border border-white/5 hover:border-violet-500/30 transition-all group">
            <Code2 className="w-12 h-12 text-violet-500 mb-8 group-hover:scale-110 transition-transform" />
            <h2 className="text-3xl font-black uppercase tracking-tight mb-6">Filosofía GPL</h2>
            <p className="text-zinc-400 font-light leading-relaxed mb-6">
              La mayoría de nuestras herramientas (incluyendo WordPress y sus plugins) se distribuyen bajo la <strong className="text-white">Licencia Pública General (GPL)</strong>. Esto garantiza que el software es libre de usar, modificar y distribuir.
            </p>
            <p className="text-zinc-400 font-light leading-relaxed">
              Para ti, esto significa que <strong className="text-white">eres el dueño absoluto de tu plataforma</strong>. No existen "licencias propietarias" que te impidan mover tu sitio a otro proveedor en el futuro.
            </p>
          </div>

          <div className="bg-zinc-900/50 p-10 lg:p-14 rounded-[3rem] border border-white/5 hover:border-violet-500/30 transition-all group">
            <ShieldCheck className="w-12 h-12 text-violet-500 mb-8 group-hover:scale-110 transition-transform" />
            <h2 className="text-3xl font-black uppercase tracking-tight mb-6">Seguridad Auditada</h2>
            <p className="text-zinc-400 font-light leading-relaxed mb-6">
              El software de código abierto (Open Source) es revisado constantemente por miles de desarrolladores en todo el mundo. Esto permite detectar y corregir vulnerabilidades mucho más rápido que en sistemas cerrados.
            </p>
            <p className="text-zinc-400 font-light leading-relaxed">
              En Webunica auditamos cada complemento que instalamos, asegurando que el ecosistema de tu sitio sea <strong className="text-white">robusto, seguro y eficiente</strong>.
            </p>
          </div>

        </div>

        {/* Advantage List */}
        <div className="bg-white rounded-[4rem] p-12 lg:p-24 text-zinc-900 mb-20 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-12 leading-none">Ventajas para <br/><span className="text-violet-600">Tu Negocio</span></h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 text-lg font-light text-zinc-600">
               <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-violet-600 shrink-0 mt-1" />
                  <p><strong className="text-zinc-950">Sin Ataduras:</strong> Tienes total libertad para elegir quién mantiene tu sitio.</p>
               </div>
               <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-violet-600 shrink-0 mt-1" />
                  <p><strong className="text-zinc-950">Costo-Efectivo:</strong> Inviertes en ingeniería y diseño, no en rentas de software infinitas.</p>
               </div>
               <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-violet-600 shrink-0 mt-1" />
                  <p><strong className="text-zinc-950">Escalabilidad:</strong> Tu sitio crece contigo sin pagar extras por "funcionalidades bloqueadas".</p>
               </div>
               <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-violet-600 shrink-0 mt-1" />
                  <p><strong className="text-zinc-950">Transparencia:</strong> El código es visible y auditable en cualquier momento.</p>
               </div>
            </div>
          </div>
        </div>

        {/* Final Statement */}
        <div className="text-center max-w-3xl mx-auto border-t border-white/10 pt-16">
          <Cpu className="w-16 h-16 text-violet-500 mx-auto mb-8 animate-pulse" />
          <h4 className="text-2xl font-black uppercase mb-6 tracking-tight">Compromiso con el Código Abierto</h4>
          <p className="text-zinc-400 font-light leading-relaxed mb-10">
            Nuestro trabajo no es "venderte un software", sino aplicar <strong className="text-white">Ingeniería Web de alto nivel</strong> sobre las mejores bases tecnológicas disponibles en el mercado global. El software es libre; nuestra experiencia es tu ventaja competitiva.
          </p>
          <div className="flex justify-center gap-6">
            <Link href="/" className="px-10 py-5 bg-violet-600 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/20 active:scale-95">
              Volver al Inicio
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}
