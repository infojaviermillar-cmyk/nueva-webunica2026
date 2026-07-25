'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, ExternalLink, ChevronLeft, ChevronRight, Sparkles, Maximize2, X } from 'lucide-react';

type CaseItem = {
  id: string;
  name: string;
  url: string;
  category: string;
  image: string;
  bullets: string[];
};

const cases: CaseItem[] = [
  {
    id: 'vicca',
    name: 'Vicca',
    url: 'vicca.cl',
    category: 'Moda & Ergonomía',
    image: '/clientes-2/vicca.cl.png',
    bullets: ['Diseño Liquid personalizado', 'Integración Webpay & Flow', 'Despacho automático por región']
  },
  {
    id: 'ohmyskin',
    name: 'Oh My Skin',
    url: 'ohmyskinchile.cl',
    category: 'Skincare & Cosmética',
    image: '/clientes-2/ohmyskinchile.cl.png',
    bullets: ['Ficha de producto con CRO', 'Reseñas & Social Proof', 'Navegación Mobile-First 100%']
  },
  {
    id: 'spinmedical',
    name: 'SpinMedical',
    url: 'spinmedical.cl',
    category: 'Salud & Insumos Médicos',
    image: '/clientes/Spinmedical.png',
    bullets: ['Diseño e-commerce a medida', 'Integración de pagos & ERP', 'Capacitación al equipo']
  },
  {
    id: 'tecno',
    name: 'Tecno-Mobile',
    url: 'tecno-mobile.cl',
    category: 'Tecnología & Gadgets',
    image: '/clientes-2/tecno-mobile.cl.png',
    bullets: ['Catálogo tecnológico rápido', 'Estructura SEO avanzada', 'CyberDay Ready']
  },
  {
    id: 'phywaters',
    name: 'PHY Waters',
    url: 'phywaters.com',
    category: 'Bienestar & Purificadores',
    image: '/clientes/PHY Waters.png',
    bullets: ['Theme propio optimizado', 'Checkout de baja fricción', 'Optimización de conversión']
  },
  {
    id: 'bodymuscle',
    name: 'Body Muscle',
    url: 'bodymuscle.cl',
    category: 'Suplementos & Fitness',
    image: '/clientes-2/bodymuscle.cl.png',
    bullets: ['Ventas masivas de nutrición', 'Pasarelas Webpay & Mercado Pago', 'Filtros rápidos de catálogo']
  },
  {
    id: 'altavista',
    name: 'Altavista Chile',
    url: 'altavistachile.cl',
    category: 'Industrial & Outdoor',
    image: '/clientes/altavista.png',
    bullets: ['Migración a Shopify', 'Catálogo técnico + ERP', 'SEO orgánico estratégico']
  },
  {
    id: 'chiletronics',
    name: 'Chiletronics',
    url: 'chiletronics.cl',
    category: 'Retail & Electrónica',
    image: '/clientes-2/chiletronics.cl.png',
    bullets: ['Estructura multicategoría', 'Buscador instantáneo de repuestos', 'Boleta SII automática']
  },
  {
    id: 'terraandes',
    name: 'Terra Andes',
    url: 'terraandesplus.com',
    category: 'Alimentos & Exportación',
    image: '/clientes-2/terraandesplus.cl.png',
    bullets: ['Visual corporativo premium', 'Boleta SII & ERP Bsale', 'Logística internacional']
  },
  {
    id: 'tuupos',
    name: 'Tuupos',
    url: 'tuupos.cl',
    category: 'General Store & Dropshipping',
    image: '/clientes-2/tuupos.cl.png',
    bullets: ['Secciones dinámicas', 'Recuperación de carritos', 'Velocidad de carga instantánea']
  },
];

export default function ShopifyInfiniteCasesCarousel() {
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-mono font-bold uppercase tracking-widest rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Carrusel de Proyectos Shopify
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 tracking-tighter uppercase font-heading">
              Casos Shopify que generan resultados
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg font-light mt-2">
              Explora algunos de los proyectos reales desarrollados para marcas líderes en Chile.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleScroll('left')}
              className="p-3 bg-zinc-100 hover:bg-zinc-900 hover:text-white rounded-2xl text-zinc-800 transition-all border border-zinc-200 cursor-pointer"
              title="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-3 bg-zinc-100 hover:bg-zinc-900 hover:text-white rounded-2xl text-zinc-800 transition-all border border-zinc-200 cursor-pointer"
              title="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Carousel Track */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-none px-6 lg:px-12 py-4 scroll-smooth snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cases.map((item) => (
          <div
            key={item.id}
            className="w-[340px] sm:w-[380px] shrink-0 snap-start bg-zinc-50 rounded-[2.5rem] overflow-hidden border border-zinc-200 flex flex-col justify-between group hover:shadow-2xl hover:border-violet-300 transition-all duration-300"
          >
            <div>
              {/* Image Preview Container */}
              <div 
                className="relative w-full aspect-[16/10] bg-zinc-950 overflow-hidden cursor-pointer"
                onClick={() => setSelectedCase(item)}
              >
                <img
                  src={item.image}
                  alt={`Caso de éxito ${item.name} - Webunica`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* URL Tag */}
                <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-zinc-950/80 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-mono text-white font-bold tracking-wider">
                  https://{item.url}
                </div>

                {/* Hover Zoom Indicator */}
                <div className="absolute inset-0 bg-violet-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white uppercase tracking-wider backdrop-blur-[2px]">
                  <Maximize2 className="w-5 h-5 text-purple-200" />
                  <span>Ver Detalle HD</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-600 block mb-1">
                  {item.category}
                </span>
                <h3 className="text-2xl font-black text-zinc-950 uppercase tracking-tight mb-4 font-heading">
                  {item.name}
                </h3>
                
                <ul className="space-y-2.5 mb-6">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-zinc-600 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 pt-0 flex gap-3">
              <a
                href={`https://${item.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-white border border-zinc-200 hover:bg-zinc-900 hover:text-white text-zinc-900 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>Sitio Live</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setSelectedCase(item)}
                className="px-4 py-3 bg-violet-50 hover:bg-violet-600 hover:text-white text-violet-700 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                title="Ampliar captura"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedCase && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] p-4 sm:p-8 flex flex-col items-center justify-center animate-in fade-in duration-200"
          onClick={() => setSelectedCase(null)}
        >
          <div className="w-full max-w-6xl flex items-center justify-between pb-4 border-b border-white/10 mb-4 text-white">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono bg-violet-600 px-3 py-1 rounded-full font-bold uppercase">Caso Shopify</span>
              <h4 className="text-xl font-black uppercase tracking-tight">{selectedCase.name}</h4>
              <span className="text-xs text-zinc-400 font-mono hidden sm:inline-block">({selectedCase.url})</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href={`https://${selectedCase.url}`} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border border-white/15"
              >
                <span>Visitar Sitio Web</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button 
                onClick={() => setSelectedCase(null)}
                className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div 
            className="relative w-full max-w-6xl flex-1 max-h-[85vh] overflow-y-auto rounded-2xl bg-zinc-950 border border-white/15 shadow-2xl p-2 flex justify-center cursor-default custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedCase.image} 
              alt={`Captura alta resolución de ${selectedCase.name}`}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
