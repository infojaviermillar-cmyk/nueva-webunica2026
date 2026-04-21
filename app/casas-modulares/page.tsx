import { Metadata } from 'next';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Casas Modulares en Chile | Proyectos Rápidos y Escalables',
  description: 'Proyectos de casas modulares de alta calidad. Construcción en fábrica, ensamblaje rápido en terreno y diseño vanguardista. Amplía tu hogar módulo a módulo.',
  keywords: [
    'casas modulares'
  ],
  alternates: {
    canonical: 'https://webunica.cl/casas-modulares',
  }
};

export default function CasasModularesPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fb] font-sans antialiased text-zinc-900 overflow-x-hidden">
      <main className="pt-32">
        <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-violet-600/10 -rotate-6 rounded-[3rem] -z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80" 
                  alt="Casa Modular en Terreno" 
                  className="rounded-[3rem] shadow-2xl"
                />
             </div>
             <div className="order-1 lg:order-2">
                <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.2em] text-violet-600 uppercase bg-violet-100 rounded-full">
                  Ensamblaje Perfecto
                </div>
                <h1 className="text-4xl lg:text-6xl font-black tracking-tighter leading-[0.9] mb-8 uppercase text-zinc-950">
                  <span className="text-violet-600 block mb-2">Evolución:</span>
                  Casas<br/>Modulares.
                </h1>
                <p className="text-xl text-zinc-500 mb-8 leading-relaxed font-light text-pretty">
                  Llevamos el concepto de las prefabricadas al siguiente nivel. Construimos el 90% de tu hogar en nuestras fábricas techadas y luego ensamblamos los módulos (blocks) directo en tu terreno en solo unos días.
                </p>
                <div className="flex gap-4">
                  <LeadButton className="px-10 py-5 bg-violet-600 text-white rounded-2xl font-bold hover:bg-violet-700 transition-all shadow-[0_10px_30px_rgba(124,58,237,0.3)] hover:-translate-y-1">
                    Agendar Reunión Técnica
                  </LeadButton>
                </div>
             </div>
          </div>
        </section>

        <section className="bg-white py-32 border-y border-zinc-200">
           <div className="max-w-5xl mx-auto px-6 text-center mb-20">
              <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-6">¿Por qué lo Modular está de Moda?</h2>
              <p className="text-zinc-500 font-light text-xl">Muchos confunden las <Link href="/casas-prefabricadas" className="text-violet-600 font-bold underline">casas prefabricadas</Link> comunes con las casas modulares. Estas son sus grandes ventajas:</p>
           </div>
           
           <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-10 bg-[#f8f9fb] rounded-[2rem] border border-zinc-100">
                 <div className="text-4xl mb-6">☔</div>
                 <h3 className="font-black text-xl tracking-tight mb-4">Cero Retrasos por Clima</h3>
                 <p className="text-zinc-600 font-light text-sm leading-relaxed">
                   Al construirse los módulos en naves industriales selladas, evitamos que la lluvia, el viento y la nieve dañen las maderas y causen demoras innecesarias.
                 </p>
              </div>
              <div className="p-10 bg-violet-600 rounded-[2rem] text-white shadow-2xl shadow-violet-600/30 transform md:-translate-y-6">
                 <div className="text-4xl mb-6">🧱</div>
                 <h3 className="font-black text-xl tracking-tight mb-4">Crecimiento Escalable</h3>
                 <p className="text-violet-100 font-light text-sm leading-relaxed">
                   Diseñamos la propiedad bajo una arquitectura que permite agregar nuevos "Módulos" (habitaciones extra, quinchos, gimnasios) en un par de años si tu familia crece. Un verdadero sistema Lego a tamaño real.
                 </p>
              </div>
              <div className="p-10 bg-[#f8f9fb] rounded-[2rem] border border-zinc-100">
                 <div className="text-4xl mb-6">🔧</div>
                 <h3 className="font-black text-xl tracking-tight mb-4">Terminaciones Boutique</h3>
                 <p className="text-zinc-600 font-light text-sm leading-relaxed">
                   Dado que los trabajadores instalan cerámicas y enchufes sobre piso nivelado industrial, la precisión de los cortes y la calidad final supera enormemente al trabajo en terreno de las prefabricadas normales.
                 </p>
              </div>
           </div>
        </section>

        <section className="bg-zinc-950 py-32 text-center text-white">
           <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-invert font-light text-pretty">
             <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 text-white">Tu próximo proyecto modular</h2>
             <p>
               La tecnología modular es 100% compatible con nuestros <Link href="/casas-paneles-sip" className="font-bold text-violet-400 hover:underline">sistemas SIP</Link> para máxima aislación, y nos permite ofrecer <Link href="/modelos-casas-prefabricadas" className="font-bold text-violet-400 hover:underline">diseños de revista</Link> en un tiempo récord. Hoy grandes empresas y profesionales confían en la metodología "Plug & Play" (Conectar y usar) que otorga un módulo preensamblado.
             </p>
             <LeadButton className="mt-8 px-10 py-5 bg-white text-zinc-950 rounded-2xl font-black uppercase text-sm hover:scale-105 transition-all">
               Recibir Cotización Modular
             </LeadButton>
           </div>
        </section>

      </main>
    </div>
  );
}
