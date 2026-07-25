'use client';

import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle2, ExternalLink, ChevronLeft, ChevronRight, Sparkles, Maximize2, X, ZoomIn, ZoomOut } from 'lucide-react';

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
    image: '/clientes-2/phywaters.com.png',
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
    image: '/clientes-2/altavistachile.cl.png',
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

// Tripled list for endless seamless infinite looping
const duplicatedCases = [...cases, ...cases, ...cases];

export default function ShopifyInfiniteCasesCarousel() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isZoomed100, setIsZoomed100] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const selectedCase = selectedIndex !== null ? cases[selectedIndex] : null;

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + cases.length) % cases.length);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % cases.length);
    }
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  // CONTINUOUS INFINITE AUTO-SCROLL LOOP
  useEffect(() => {
    if (isPaused || selectedIndex !== null) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If reached end of first set of duplicated items, reset smoothly to beginning
        if (scrollLeft >= (scrollWidth - clientWidth) * 0.66) {
          scrollRef.current.scrollLeft = scrollLeft - (scrollWidth / 3);
        } else {
          scrollRef.current.scrollLeft += 1.5;
        }
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isPaused, selectedIndex]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-mono font-bold uppercase tracking-widest rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Carrusel Continuo de Proyectos Shopify
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 tracking-tighter uppercase font-heading">
              Casos Shopify que generan resultados
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg font-light mt-2">
              Explora nuestros proyectos reales desarrollados para marcas en Chile.
            </p>
          </div>

          {/* Track Controls */}
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

      {/* Horizontal Carousel Track with Infinite Smooth Auto-Scroll */}
      <div 
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex gap-6 overflow-x-auto scrollbar-none px-6 lg:px-12 py-4 select-none cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {duplicatedCases.map((item, idx) => {
          const originalIndex = idx % cases.length;
          return (
            <div
              key={`${item.id}-${idx}`}
              className="w-[340px] sm:w-[380px] shrink-0 bg-zinc-50 rounded-[2.5rem] overflow-hidden border border-zinc-200 flex flex-col justify-between group hover:shadow-2xl hover:border-violet-300 transition-all duration-300"
            >
              <div>
                {/* Image Preview Container */}
                <div 
                  className="relative w-full aspect-[16/10] bg-zinc-950 overflow-hidden cursor-pointer"
                  onClick={() => {
                    setSelectedIndex(originalIndex);
                    setIsZoomed100(false);
                  }}
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
                    <span>Abrir Galería HD</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-600 block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-black text-zinc-950 uppercase tracking-tight mb-4 font-heading">
                    {item.name}
                  </h3>
                  
                  <ul className="space-y-2.5 mb-6">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-sm text-zinc-800 font-medium">
                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
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
                  className="flex-1 py-3.5 px-4 bg-white border border-zinc-200 hover:bg-zinc-900 hover:text-white text-zinc-900 font-bold text-sm uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 text-center"
                >
                  <span>Sitio Live</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  onClick={() => {
                    setSelectedIndex(originalIndex);
                    setIsZoomed100(false);
                  }}
                  className="px-4 py-3.5 bg-violet-50 hover:bg-violet-600 hover:text-white text-violet-700 rounded-xl font-bold text-sm uppercase tracking-wider transition-colors cursor-pointer"
                  title="Abrir en Galería HD"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* FULL INTERACTIVE GALLERY LIGHTBOX MODAL */}
      {selectedCase && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] p-3 sm:p-6 flex flex-col items-center justify-center animate-in fade-in duration-200 select-none"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Top Gallery Bar */}
          <div className="w-full max-w-7xl flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/15 mb-3 text-white">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono bg-violet-600 text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                Proyecto {selectedIndex! + 1} / {cases.length}
              </span>
              <h4 className="text-lg sm:text-xl font-black uppercase tracking-tight">{selectedCase.name}</h4>
              <span className="text-xs text-purple-300 font-mono hidden md:inline-block">({selectedCase.url})</span>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Zoom 100% Toggle */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsZoomed100(!isZoomed100);
                }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all border ${
                  isZoomed100 
                    ? 'bg-purple-600 text-white border-purple-400 shadow-lg shadow-purple-600/40' 
                    : 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                }`}
              >
                {isZoomed100 ? (
                  <>
                    <ZoomOut className="w-4 h-4 text-purple-200" />
                    <span className="hidden sm:inline">Ajustar Pantalla</span>
                  </>
                ) : (
                  <>
                    <ZoomIn className="w-4 h-4 text-emerald-400" />
                    <span className="hidden sm:inline">Escala 100% HD</span>
                  </>
                )}
              </button>

              <a 
                href={`https://${selectedCase.url}`} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-emerald-500/20"
              >
                <span>Visitar Sitio</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button 
                onClick={() => setSelectedIndex(null)}
                className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer"
                title="Cerrar galeria"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Main Display Area with Left / Right Floating Navigation Buttons */}
          <div 
            className="relative w-full max-w-7xl flex-1 flex items-center justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-50 p-3.5 sm:p-4 rounded-full bg-zinc-900/90 text-white border border-white/20 hover:bg-violet-600 hover:border-violet-400 transition-all shadow-2xl hover:scale-110 cursor-pointer"
              title="Anterior proyecto (Flecha Izquierda)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* High-Res Image Box */}
            <div 
              className={`w-full max-h-[82vh] overflow-auto rounded-2xl bg-zinc-950 border border-white/15 shadow-2xl p-2 flex justify-center custom-scrollbar ${
                isZoomed100 ? 'items-start justify-start' : 'items-center justify-center'
              }`}
            >
              <img 
                src={selectedCase.image} 
                alt={`Captura alta resolución de ${selectedCase.name}`}
                className={`rounded-xl transition-all duration-300 ${
                  isZoomed100 
                    ? 'w-[1920px] max-w-none h-auto shrink-0 shadow-2xl' 
                    : 'w-full h-auto max-h-[80vh] object-contain'
                }`}
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-50 p-3.5 sm:p-4 rounded-full bg-zinc-900/90 text-white border border-white/20 hover:bg-violet-600 hover:border-violet-400 transition-all shadow-2xl hover:scale-110 cursor-pointer"
              title="Siguiente proyecto (Flecha Derecha)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar Info & Gallery Thumbs Indicator */}
          <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2 mt-3 text-xs font-mono text-purple-200/80">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Categoría: <strong>{selectedCase.category}</strong> • Usa las flechas ◀ ▶ para navegar</span>
            </span>

            {/* Quick Dots / Pager */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-xs py-1">
              {cases.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelectedIndex(i);
                    setIsZoomed100(false);
                  }}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    i === selectedIndex ? 'w-6 bg-violet-400' : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                  title={c.name}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
