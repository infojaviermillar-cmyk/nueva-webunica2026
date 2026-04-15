"use client";

import { useState } from 'react';
import ContactModal from '@/components/ui/contact-modal';
import Link from 'next/link';
import FloatingShapes from '@/components/ui/floating-shapes';

interface CityPageClientProps {
  data: {
    name: string;
    title: string;
    desc: string;
  };
}

export default function CityPageClient({ data }: CityPageClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        city={data.name} 
      />

      {/* White Corporate Hero */}
      <section className="relative px-6 py-20 lg:py-40 bg-zinc-50 border-b border-zinc-100">
        <FloatingShapes />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 border border-violet-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-violet-700">Webunica | Presencia Local</span>
          </div>
          <h1 className="text-4xl lg:text-[70px] font-black tracking-tighter leading-[0.9] mb-10 text-zinc-950 uppercase max-w-5xl mx-auto text-pretty">
            {data.title}
          </h1>
          <p className="text-xl text-zinc-500 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            {data.desc}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-12 py-6 bg-violet-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/20 active:scale-95"
            >
              Cotización Gratis
            </button>
            <Link 
              href="/portafolio"
              className="px-12 py-6 bg-white text-zinc-900 border border-zinc-200 rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-zinc-50 transition-all"
            >
              Ver Portafolio
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Text Content - Natural Style */}
      <section className="max-w-4xl mx-auto px-6 py-32">
        <div className="prose prose-zinc prose-lg lg:prose-xl max-w-none">
          <h2 className="text-4xl font-black tracking-tight text-zinc-900 mb-12 uppercase">
            Potenciamos el mercado digital de <span className="text-violet-600">{data.name}</span>
          </h2>
          
          <div className="space-y-8 text-zinc-500 font-light leading-relaxed">
            <p>
              En el escenario competitivo actual de <strong>{data.name}</strong>, contar con una página web estática ya no es suficiente. Las empresas modernas necesitan herramientas de venta dinámicas que no solo carguen rápido, sino que estén optimizadas para los algoritmos de búsqueda más exigentes de Google.
            </p>
            
            <p>
              Como especialistas en <strong>Diseño Web</strong> de alto nivel, implementamos soluciones robustas utilizando plataformas líderes como <strong>Shopify</strong> para e-commerce avanzado, <strong>WooCommerce</strong> para tiendas integradas en WordPress y desarrollos a medida en <strong>Next.js</strong> para quienes buscan una experiencia SaaS personalizada.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 bg-zinc-50 p-10 rounded-[3rem] border border-zinc-100">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-tighter">✔ Tiendas con Shopify</h3>
                <p className="text-sm">Configuración experta de canales de venta, pagos locales y optimización de conversión para marcas en {data.name}.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-tighter">✔ WordPress & WooCommerce</h3>
                <p className="text-sm">Estructuras autogestionables, seguras y preparadas para el crecimiento de tu inventario online.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-tighter">✔ Diseño Estratégico</h3>
                <p className="text-sm">UI/UX boutique que prioriza la experiencia del usuario local, aumentando la confianza y el retorno de inversión.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-tighter">✔ SEO de Ingeniería</h3>
                <p className="text-sm">Arquitectura de datos avanzada para que tu marca en {data.name} sea la primera opción en los resultados orgánicos.</p>
              </div>
            </div>

            <p>
              Nuestro enfoque en <strong>{data.name}</strong> se basa en la ingeniería de crecimiento. No solo "hacemos páginas"; construimos activos digitales que generan confianza desde el primer clic. Ya sea que necesites una landing page informativa o un sistema e-commerce complejo, nuestro equipo está preparado para llevar tu visión técnica al siguiente nivel.
            </p>
          </div>
        </div>

        <div className="mt-20 pt-20 border-t border-zinc-100">
          <h3 className="text-xl font-black uppercase tracking-tighter mb-10 text-center">Nuestra Red Regional</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
                { n: 'Santiago', s: 'santiago' },
                { n: 'Concepción', s: 'concepcion' },
                { n: 'Temuco', s: 'temuco' },
                { n: 'Valdivia', s: 'valdivia' },
                { n: 'Puerto Montt', s: 'puerto-montt' },
                { n: 'Antofagasta', s: 'antofagasta' },
                { n: 'La Serena', s: 'la-serena' },
                { n: 'Punta Arenas', s: 'punta-arenas' },
             ].filter(c => c.n !== data.name).slice(0, 4).map((c) => (
                <Link 
                  key={c.s} 
                  href={`/diseno-paginas-web/${c.s}`}
                  className="text-xs text-center py-3 border border-zinc-100 rounded-xl hover:bg-zinc-50 transition-all font-bold text-zinc-400 hover:text-violet-600"
                >
                  {c.n}
                </Link>
             ))}
          </div>
          <div className="text-center mt-12">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-8">¿Listo para dominar Google en {data.name}?</h3>
            <button 
                onClick={() => setIsModalOpen(true)}
                className="px-12 py-6 bg-zinc-950 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-zinc-800 transition-all shadow-2xl"
              >
                Iniciar Proyecto Gratis
              </button>
          </div>
        </div>
      </section>
    </>
  );
}
