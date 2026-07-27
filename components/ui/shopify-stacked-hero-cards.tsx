'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingBag, X, Maximize2, ExternalLink, Sparkles, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

type StoreCard = {
  id: string;
  name: string;
  url: string;
  category: string;
  image: string;
};

const storeCards: StoreCard[] = [
  {
    id: 'vicca',
    name: 'Vicca',
    url: 'vicca.cl',
    category: 'Moda & Ergonómicos',
    image: '/clientes-2/vicca.cl.png',
  },
  {
    id: 'ohmyskin',
    name: 'Oh My Skin',
    url: 'ohmyskinchile.cl',
    category: 'Skincare & Cosmética',
    image: '/clientes-2/ohmyskinchile.cl.png',
  },
  {
    id: 'terraandes',
    name: 'Terra Andes',
    url: 'terraandesplus.com',
    category: 'Alimentos & Exportación',
    image: '/clientes-2/terraandesplus.cl.png',
  },
];

export default function ShopifyStackedHeroCards() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);
  const [isZoomed100, setIsZoomed100] = useState<boolean>(false);

  const selectedImage = selectedIndex !== null ? storeCards[selectedIndex] : null;

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + storeCards.length) % storeCards.length);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % storeCards.length);
    }
  };

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

  return (
    <div className="relative w-full max-w-2xl mx-auto py-2 select-none">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 via-purple-500/20 to-pink-500/30 rounded-full blur-[120px] pointer-events-none" />

      {/* Stacked Vertical Slices Container */}
      <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] flex items-center justify-start overflow-visible my-4">
        {storeCards.map((store, index) => {
          const isVicca = index === 0;
          const isHovered = activeHoverId === store.id;

          const leftOffset = index * 18; 
          const zIndex = isHovered ? 60 : isVicca ? 50 : 40 - index;

          return (
            <div
              key={store.id}
              onClick={() => {
                setSelectedIndex(index);
                setIsZoomed100(false);
              }}
              onMouseEnter={() => setActiveHoverId(store.id)}
              onMouseLeave={() => setActiveHoverId(null)}
              style={{
                left: `${leftOffset}%`,
                zIndex: zIndex,
              }}
              className={`absolute top-1/2 -translate-y-1/2 w-[74%] sm:w-[78%] aspect-[192/105] rounded-2xl overflow-hidden border border-zinc-200/90 bg-zinc-950 shadow-[0_25px_60px_rgba(0,0,0,0.22)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer group ${
                isHovered
                  ? '-translate-y-[56%] scale-105 shadow-[0_35px_80px_rgba(124,58,237,0.4)] border-purple-500 ring-4 ring-purple-500/30'
                  : 'hover:-translate-y-[53%]'
              }`}
            >
              {/* macOS Browser Header Bar */}
              <div className="bg-zinc-900/95 backdrop-blur-md px-3.5 py-2 border-b border-white/10 flex items-center justify-between z-30 relative">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>

                <div className="flex items-center gap-1.5 px-3 py-0.5 bg-white/10 border border-white/15 rounded-full text-[10px] font-mono text-white font-bold tracking-wider">
                  <span className="text-emerald-400">https://</span>
                  <span>{store.url}</span>
                </div>

                <span className="text-[9px] font-mono text-purple-300 font-bold uppercase tracking-widest hidden sm:inline-block">
                  HD 1920px
                </span>
              </div>

              {/* Crisp Native Store Viewport */}
              <div className="relative w-full h-[calc(100%-32px)] bg-zinc-950 overflow-hidden">
                <img
                  src={store.image}
                  alt={`Tienda Shopify ${store.name} - Webunica`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  decoding="async"
                />

                {/* Hover Reveal Details Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-20">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono bg-violet-600 px-2 py-0.5 rounded text-white font-bold uppercase">HD Nitido</span>
                        <h4 className="text-sm font-black uppercase tracking-wider">{store.name}</h4>
                      </div>
                      <p className="text-[11px] text-purple-200 font-light">{store.category}</p>
                    </div>
                    
                    <div className="px-3 py-1.5 rounded-xl bg-white text-zinc-950 font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-xl hover:bg-purple-100 transition-colors">
                      <Maximize2 className="w-3.5 h-3.5 text-violet-600" />
                      <span>Abrir Galería HD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>



      {/* High-Resolution Crisp Lightbox Gallery Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] p-3 sm:p-6 flex flex-col items-center justify-center animate-in fade-in duration-200 select-none"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Lightbox Top Control Bar */}
          <div className="w-full max-w-7xl flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/15 mb-3 text-white">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono bg-violet-600 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                Proyecto {selectedIndex! + 1} / {storeCards.length}
              </span>
              <h4 className="text-lg sm:text-xl font-black uppercase tracking-tight">{selectedImage.name}</h4>
              <span className="text-xs text-purple-300 font-mono hidden md:inline-block">
                ({selectedImage.url})
              </span>
            </div>

            {/* Resolution Toggle & External Link Actions */}
            <div className="flex items-center gap-3">
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
                href={`https://${selectedImage.url}`} 
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
                title="Cerrar vista previa"
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

            {/* High-Res Container */}
            <div 
              className={`w-full max-h-[82vh] overflow-auto rounded-2xl bg-zinc-950 border border-white/20 shadow-2xl p-2 flex justify-center custom-scrollbar ${
                isZoomed100 ? 'items-start justify-start' : 'items-center justify-center'
              }`}
            >
              <img 
                src={selectedImage.image} 
                alt={`Captura alta resolución de ${selectedImage.name}`}
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

          {/* Bottom Bar Info & Indicator */}
          <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2 mt-3 text-xs font-mono text-purple-200/80">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Categoría: <strong>{selectedImage.category}</strong> • Navega con ◀ ▶ o teclado</span>
            </span>

            <div className="flex items-center gap-1.5 overflow-x-auto max-w-xs py-1">
              {storeCards.map((c, i) => (
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
    </div>
  );
}
