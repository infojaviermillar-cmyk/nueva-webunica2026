'use client';

import React, { useState } from 'react';
import { ShoppingBag, X, Maximize2, ExternalLink, Sparkles } from 'lucide-react';

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
    category: 'Moda & Vestuario',
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
    id: 'tecno',
    name: 'Tecno-Mobile',
    url: 'tecno-mobile.cl',
    category: 'Tecnología & Gadgets',
    image: '/clientes-2/tecno-mobile.cl.png',
  },
  {
    id: 'bodymuscle',
    name: 'Body Muscle',
    url: 'bodymuscle.cl',
    category: 'Suplementos & Fitness',
    image: '/clientes-2/bodymuscle.cl.png',
  },
  {
    id: 'chiletronics',
    name: 'Chiletronics',
    url: 'chiletronics.cl',
    category: 'Retail Electrónica',
    image: '/clientes-2/chiletronics.cl.png',
  },
  {
    id: 'terraandes',
    name: 'Terra Andes',
    url: 'terraandesplus.com',
    category: 'Alimentos & Exportación',
    image: '/clientes-2/terraandesplus.cl.png',
  },
  {
    id: 'tuupos',
    name: 'Tuupos',
    url: 'tuupos.cl',
    category: 'General Store',
    image: '/clientes-2/tuupos.cl.png',
  },
];

export default function ShopifyStackedHeroCards() {
  const [selectedImage, setSelectedImage] = useState<StoreCard | null>(null);
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-2xl mx-auto py-2 select-none">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 via-purple-500/20 to-pink-500/30 rounded-full blur-[110px] pointer-events-none" />

      {/* Vertical Overlapping Slices Stack Container with Desktop Aspect Ratio */}
      <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[430px] flex items-center justify-start overflow-visible my-4">
        {storeCards.map((store, index) => {
          const isVicca = index === 0;
          const isHovered = activeHoverId === store.id;

          // Staggered horizontal position so left slice of every image is clearly visible
          const leftOffset = index * 12.5; // percentage shift
          const zIndex = isHovered ? 60 : isVicca ? 50 : 40 - index;

          return (
            <div
              key={store.id}
              onClick={() => setSelectedImage(store)}
              onMouseEnter={() => setActiveHoverId(store.id)}
              onMouseLeave={() => setActiveHoverId(null)}
              style={{
                left: `${leftOffset}%`,
                zIndex: zIndex,
              }}
              className={`absolute top-1/2 -translate-y-1/2 w-[72%] sm:w-[76%] aspect-[16/10] rounded-2xl overflow-hidden border border-zinc-200/80 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer group ${
                isHovered
                  ? '-translate-y-[56%] scale-105 shadow-[0_30px_70px_rgba(124,58,237,0.35)] border-purple-500 ring-4 ring-purple-500/20'
                  : 'hover:-translate-y-[53%]'
              }`}
            >
              {/* Native High-Res Image (Desktop Ratio Aspect 16/10) */}
              <div className="relative w-full h-full bg-zinc-950 overflow-hidden">
                <img
                  src={store.image}
                  alt={`Tienda Shopify ${store.name} - Webunica`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading={isVicca ? 'eager' : 'lazy'}
                />

                {/* Left Edge URL Pill */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1 bg-zinc-950/85 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-mono text-white font-bold tracking-wider shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{store.url}</span>
                </div>

                {/* Hover Reveal Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-wider">{store.name}</h4>
                      <p className="text-[11px] text-purple-200 font-light">{store.category}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-white shadow-lg">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Shopify Partner Badge */}
      <div className="absolute -bottom-6 right-0 sm:right-2 bg-white/95 backdrop-blur-md shadow-2xl px-5 py-3.5 rounded-3xl border border-zinc-200/80 flex items-center gap-3.5 z-50">
        <div className="w-10 h-10 rounded-2xl bg-violet-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-violet-600/30">
          <ShoppingBag className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 block leading-none mb-1">Certificados</span>
          <span className="text-xs font-black text-zinc-950 tracking-tight">Shopify Partner 2026</span>
        </div>
      </div>

      {/* Instruction hint */}
      <div className="text-center mt-8">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-zinc-100 border border-zinc-200 rounded-full text-[11px] font-mono text-zinc-600 font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-violet-600" />
          Haz clic en cualquier tienda para verla a resolución completa
        </span>
      </div>

      {/* Full Native High-Res Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] p-4 sm:p-8 flex flex-col items-center justify-center animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          {/* Top Bar */}
          <div className="w-full max-w-6xl flex items-center justify-between pb-4 border-b border-white/10 mb-4 text-white">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono bg-violet-600 px-3 py-1 rounded-full font-bold uppercase">Tienda Shopify</span>
              <h4 className="text-xl font-black uppercase tracking-tight">{selectedImage.name}</h4>
              <span className="text-xs text-zinc-400 font-mono hidden sm:inline-block">({selectedImage.url})</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href={`https://${selectedImage.url}`} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border border-white/15"
              >
                <span>Visitar Sitio Web</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button 
                onClick={() => setSelectedImage(null)}
                className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer"
                title="Cerrar vista previa"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Full High-Resolution Uncompressed Image Container */}
          <div 
            className="relative w-full max-w-6xl flex-1 max-h-[85vh] overflow-y-auto rounded-2xl bg-zinc-950 border border-white/15 shadow-2xl p-2 flex justify-center cursor-default custom-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.image} 
              alt={`Captura alta resolución de ${selectedImage.name}`}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>

          <p className="text-xs text-zinc-400 mt-3 font-mono">
            Haz clic fuera o presiona X para cerrar la vista previa
          </p>
        </div>
      )}
    </div>
  );
}
