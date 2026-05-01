import Link from 'next/link';
import { ShieldCheck, Code2, Globe, Cpu, Heart, CheckCircle2, AlertTriangle, Scale, Zap } from 'lucide-react';

export const metadata = {
  title: 'Licencia GPL y Filosofía de Software Libre | Webunica Chile 2026',
  description: 'Entiende por qué trabajamos con licencias GPL. Transparencia total sobre el uso de software de código abierto en nuestros proyectos de ingeniería web.',
};

export default function LicensePage() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans antialiased text-white pb-20 overflow-x-hidden">
      <main className="max-w-5xl mx-auto px-6 pt-32 lg:pt-40">
        
        {/* Header Section */}
        <div className="text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full -z-10" />
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-violet-500/10 border border-violet-500/20 rounded-full">
            <Scale className="w-4 h-4 text-violet-500" />
            <span className="text-[10px] font-black tracking-[0.2em] text-violet-400 uppercase">Transparencia & Legalidad</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-black tracking-tighter uppercase mb-8 leading-[0.85]">
            Sobre la <br/> <span className="text-violet-500 italic font-serif lowercase font-light">Licencia GPL</span>
          </h1>
          <p className="text-xl text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed">
            En Webunica defendemos la libertad del software. Adoptamos el modelo <strong className="text-white">GPL (General Public License)</strong> para garantizar que nuestros clientes nunca sean rehenes tecnológicos.
          </p>
        </div>

        {/* The 4 Freedoms Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="md:col-span-2 bg-gradient-to-br from-zinc-900 to-zinc-950 p-10 lg:p-16 rounded-[4rem] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
               <Code2 className="w-64 h-64 text-violet-500" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-10">Las 4 Libertades <br/><span className="text-violet-500 italic">Fundamentales</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
               <div className="space-y-4">
                  <div className="w-12 h-12 bg-violet-600/10 rounded-2xl flex items-center justify-center text-violet-500 font-black text-xl italic">0</div>
                  <h4 className="font-black uppercase text-sm">Libertad de Uso</h4>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed">Puedes ejecutar el programa para cualquier propósito, sin restricciones de uso geográfico o comercial.</p>
               </div>
               <div className="space-y-4">
                  <div className="w-12 h-12 bg-violet-600/10 rounded-2xl flex items-center justify-center text-violet-500 font-black text-xl italic">1</div>
                  <h4 className="font-black uppercase text-sm">Libertad de Estudio</h4>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed">Puedes estudiar cómo funciona el programa y cambiarlo para que haga lo que tú quieras (acceso al código fuente).</p>
               </div>
               <div className="space-y-4">
                  <div className="w-12 h-12 bg-violet-600/10 rounded-2xl flex items-center justify-center text-violet-500 font-black text-xl italic">2</div>
                  <h4 className="font-black uppercase text-sm">Libertad de Distribución</h4>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed">Puedes redistribuir copias para ayudar a otros, ya sea de forma gratuita o comercial.</p>
               </div>
               <div className="space-y-4">
                  <div className="w-12 h-12 bg-violet-600/10 rounded-2xl flex items-center justify-center text-violet-500 font-black text-xl italic">3</div>
                  <h4 className="font-black uppercase text-sm">Libertad de Mejora</h4>
                  <p className="text-sm text-zinc-500 font-light leading-relaxed">Puedes distribuir copias de tus versiones modificadas, permitiendo que toda la comunidad se beneficie de tus cambios.</p>
               </div>
            </div>
          </div>
        </div>

        {/* Legal & Ethical Section */}
        <section className="mb-24 px-6 lg:px-16 py-16 bg-white rounded-[4rem] text-zinc-950">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-600 mb-6 block">¿Es Legal? Sí, y es ético.</span>
                 <h2 className="text-4xl lg:text-6xl font-black mb-8 tracking-tighter uppercase leading-[0.9]">Legalidad <br/><span className="text-violet-600 italic">Total</span></h2>
                 <div className="space-y-6 text-lg text-zinc-600 font-light leading-relaxed">
                    <p>
                      Existe una confusión común: "Si es software libre, ¿por qué debo pagar?". La <strong className="text-zinc-950">Free Software Foundation (FSF)</strong> es clara al respecto: es 100% legal cobrar por la distribución de software GPL.
                    </p>
                    <p>
                      En Webunica no solo entregamos el software, sino que aplicamos nuestra <strong className="text-zinc-950">Ingeniería Web</strong> para auditarlo, limpiarlo de posibles vulnerabilidades y garantizar que se instale sobre una infraestructura optimizada para el máximo rendimiento.
                    </p>
                    <p>
                      Al elegir software GPL, estás rompiendo el <strong className="text-zinc-950">Vendor Lock-in</strong>. Tu sitio no está secuestrado; eres libre de llevarte tu código a donde quieras, cuando quieras.
                    </p>
                 </div>
              </div>
              <div className="bg-zinc-50 p-10 rounded-[3rem] border border-zinc-200">
                 <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter">Beneficios Directos</h3>
                 <ul className="space-y-6">
                    <li className="flex gap-4">
                       <Zap className="w-6 h-6 text-violet-600 shrink-0 mt-1" />
                       <div>
                          <h4 className="font-black uppercase text-xs mb-1 text-zinc-950">Precios Justos</h4>
                          <p className="text-sm text-zinc-500">Acceso a herramientas Premium de nivel corporativo sin barreras económicas abusivas.</p>
                       </div>
                    </li>
                    <li className="flex gap-4">
                       <ShieldCheck className="w-6 h-6 text-violet-600 shrink-0 mt-1" />
                       <div>
                          <h4 className="font-black uppercase text-xs mb-1 text-zinc-950">Código Limpio</h4>
                          <p className="text-sm text-zinc-500">Garantizamos que el software redistribuido está libre de malware y "bloatware".</p>
                       </div>
                    </li>
                    <li className="flex gap-4">
                       <Globe className="w-6 h-6 text-violet-600 shrink-0 mt-1" />
                       <div>
                          <h4 className="font-black uppercase text-xs mb-1 text-zinc-950">Soberanía Digital</h4>
                          <p className="text-sm text-zinc-500">Tú eres el dueño de tu activo digital, no un arrendatario de una plataforma cerrada.</p>
                       </div>
                    </li>
                 </ul>
              </div>
           </div>
        </section>

        {/* Clarification Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
           <div className="bg-zinc-900/50 p-10 rounded-[3rem] border border-white/5">
              <h4 className="text-xl font-black uppercase mb-6 tracking-tight flex items-center gap-3">
                 <AlertTriangle className="w-6 h-6 text-amber-500" />
                 Lo que debes saber
              </h4>
              <ul className="space-y-4 text-sm text-zinc-500 font-light">
                 <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-500 shrink-0" />
                    <span>Las actualizaciones automáticas suelen requerir una llave de licencia individual comprada directamente al autor.</span>
                 </li>
                 <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-500 shrink-0" />
                    <span>El soporte técnico directo del desarrollador del plugin no está incluido en el modelo de redistribución GPL.</span>
                 </li>
                 <li className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-500 shrink-0" />
                    <span>Webunica brinda soporte sobre la <strong className="text-white">integración y funcionalidad</strong> del sitio, no sobre el código interno de cada plugin.</span>
                 </li>
              </ul>
           </div>
           <div className="bg-zinc-900/50 p-10 rounded-[3rem] border border-white/5">
              <h4 className="text-xl font-black uppercase mb-6 tracking-tight flex items-center gap-3">
                 <Scale className="w-6 h-6 text-violet-500" />
                 Aviso Legal
              </h4>
              <p className="text-sm text-zinc-500 font-light leading-relaxed mb-6 italic">
                Webunica no tiene ninguna afiliación oficial, ni está patrocinada por marcas como WordPress, WooCommerce, Automattic Inc. o cualquier otro desarrollador de plugins mencionado en nuestros servicios.
              </p>
              <p className="text-xs text-zinc-600 font-light leading-relaxed">
                Los nombres y logotipos se utilizan únicamente para describir los servicios de integración y optimización que proporcionamos sobre herramientas de software libre bajo los términos de la Licencia GPL.
              </p>
           </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
           <div className="inline-block p-1 bg-violet-600/20 rounded-full mb-8">
              <Link href="/" className="flex items-center gap-3 px-10 py-5 bg-violet-600 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/20 active:scale-95 group">
                Volver al Inicio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
           </div>
        </div>

      </main>
    </div>
  );
}

function ArrowRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
