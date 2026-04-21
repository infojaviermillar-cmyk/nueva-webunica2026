import { Metadata } from 'next';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Modelos de Casas Prefabricadas 2024 | Diseños y Planos',
  description: 'Explora nuestra galería premium de modelos de casas prefabricadas en Chile. Estilos Mediterráneo, Moderno, Cabaña y más. 100% personalizables.',
  keywords: [
    'modelos casas prefabricadas'
  ],
  alternates: {
    canonical: 'https://webunica.cl/modelos-casas-prefabricadas',
  }
};

export default function ModelosCasasPage() {
  const models = [
    { name: "Modelo Nórdico 60", type: "Casas Modulares", m2: "62 m²", beds: 2, baths: 1, img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80" },
    { name: "Modelo Austral 90", type: "Paneles SIP", m2: "94 m²", beds: 3, baths: 2, img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80" },
    { name: "Villa Mediterránea", type: "Prefabricada Alta Gama", m2: "140 m²", beds: 4, baths: 3, img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80" },
    { name: "Refugio Sur", type: "Cabaña SIP", m2: "45 m²", beds: 1, baths: 1, img: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&q=80" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 font-sans antialiased text-zinc-900 overflow-x-hidden">
      <main className="pt-32">
        <section className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
            Galería y Diseños
          </div>
          <h1 className="text-4xl lg:text-7xl font-black tracking-tighter leading-[0.9] mb-8 uppercase text-zinc-950">
            Modelos de <br/>
            <span className="text-blue-600 font-serif italic lowercase font-light">Casas Prefabricadas</span>
          </h1>
          <p className="text-xl text-zinc-500 mb-12 max-w-3xl mx-auto leading-relaxed font-light text-pretty">
             Cada familia es un mundo. Nuestra línea de diseños en Chile permite personalizar el hogar según su terreno, orientación y presupuesto. Echa un vistazo a nuestros modelos más cotizados.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {models.map((model, i) => (
               <div key={i} className="group bg-white rounded-[2rem] overflow-hidden border border-zinc-200 hover:shadow-2xl hover:shadow-blue-600/10 transition-all">
                  <div className="aspect-[4/3] bg-zinc-200 relative overflow-hidden">
                     <img src={model.img} alt={model.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                     <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase text-blue-600">
                       {model.m2}
                     </div>
                  </div>
                  <div className="p-8">
                     <div className="text-[10px] uppercase font-black tracking-widest text-zinc-400 mb-2">{model.type}</div>
                     <h3 className="text-2xl font-black text-zinc-900 tracking-tighter mb-4">{model.name}</h3>
                     <div className="flex gap-4 mb-8">
                        <span className="px-3 py-1 bg-zinc-100 rounded-lg text-sm text-zinc-600 font-medium">🛏️ {model.beds} Hab.</span>
                        <span className="px-3 py-1 bg-zinc-100 rounded-lg text-sm text-zinc-600 font-medium">🚿 {model.baths} Baños</span>
                     </div>
                     <LeadButton className="w-full py-4 bg-zinc-950 text-white rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-blue-600 transition-colors">
                        Solicitar Plano de este Modelo
                     </LeadButton>
                  </div>
               </div>
            ))}
          </div>
        </section>

        <section className="bg-zinc-950 text-white py-24 text-center">
           <div className="max-w-3xl mx-auto px-6">
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">Todos los diseños son Modificables</h2>
              <p className="text-zinc-400 font-light mb-8">
                 Contamos con arquitectos in-house. Si viste uno de nuestros <strong>modelos casas prefabricadas</strong> pero necesitas agrandar la cocina o agregar un quincho, ¡se puede! Todo lo adaptamos para aprovechar mejor nuestros <Link href="/casas-paneles-sip" className="text-white font-bold underline">sistemas SIP</Link> o nuestras soluciones de <Link href="/casas-modulares" className="text-white font-bold underline">estructuras modulares</Link>.
              </p>
              <LeadButton className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all">
                Hablar con Arquitecto Comercial
              </LeadButton>
           </div>
        </section>
      </main>
    </div>
  );
}
