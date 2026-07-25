'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag, Sparkles, ExternalLink } from 'lucide-react';

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
    id: 'tecno',
    name: 'Tecno-Mobile',
    url: 'tecno-mobile.cl',
    category: 'Tecnología & Gadgets',
    image: '/clientes-2/tecno-mobile.cl.png',
  },
  {
    id: 'ohmyskin',
    name: 'Oh My Skin',
    url: 'ohmyskinchile.cl',
    category: 'Skincare & Cosmética',
    image: '/clientes-2/ohmyskinchile.cl.png',
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
];

export default function ShopifyStackedHeroCards() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div 
      className="relative w-full max-w-lg lg:max-w-xl mx-auto h-[440px] sm:h-[500px] flex items-center justify-center group/container select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow behind stack */}
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 via-purple-500/20 to-pink-500/30 rounded-full blur-[100px] opacity-70 group-hover/container:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Stacked Cards Container */}
      <div className="relative w-full h-full flex items-center justify-center perspective-[1200px]">
        {storeCards.map((store, index) => {
          // Calculate relative position based on activeIndex
          const offset = (index - activeIndex + storeCards.length) % storeCards.length;
          const isFront = offset === 0;

          // Default stacked transforms vs hovered fanned out transforms
          let transformStyles = '';
          let zIndexClass = '';

          if (isFront) {
            zIndexClass = 'z-40';
            transformStyles = isHovered
              ? 'translate-y-0 scale-105 rotate-0 shadow-[0_30px_70px_rgba(124,58,237,0.35)]'
              : 'translate-y-0 scale-100 rotate-[-2deg] shadow-2xl';
          } else if (offset === 1) {
            zIndexClass = 'z-30';
            transformStyles = isHovered
              ? 'translate-x-[60px] sm:translate-x-[90px] -translate-y-4 rotate-[8deg] scale-95 shadow-2xl'
              : 'translate-x-[20px] translate-y-4 rotate-[4deg] scale-[0.96] shadow-xl opacity-90';
          } else if (offset === 2) {
            zIndexClass = 'z-20';
            transformStyles = isHovered
              ? 'translate-x-[-60px] sm:translate-x-[-90px] -translate-y-2 rotate-[-8deg] scale-95 shadow-2xl'
              : 'translate-x-[-20px] translate-y-8 rotate-[-5deg] scale-[0.92] shadow-lg opacity-80';
          } else if (offset === 3) {
            zIndexClass = 'z-10';
            transformStyles = isHovered
              ? 'translate-x-[110px] sm:translate-x-[160px] -translate-y-8 rotate-[14deg] scale-90 shadow-xl'
              : 'translate-x-[35px] translate-y-12 rotate-[8deg] scale-[0.88] opacity-70';
          } else {
            zIndexClass = 'z-0';
            transformStyles = isHovered
              ? 'translate-x-[-110px] sm:translate-x-[-160px] -translate-y-6 rotate-[-14deg] scale-90 shadow-xl'
              : 'translate-x-[-35px] translate-y-16 rotate-[-9deg] scale-[0.84] opacity-50';
          }

          return (
            <div
              key={store.id}
              onClick={() => setActiveIndex(index)}
              className={`absolute w-[88%] sm:w-[92%] max-w-[460px] bg-zinc-900 border border-white/20 rounded-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer ${zIndexClass} ${transformStyles}`}
            >
              {/* macOS Style Top Browser Bar */}
              <div className="bg-zinc-950/90 backdrop-blur-md px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>

                {/* URL Address Pill */}
                <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] font-mono text-zinc-300 font-medium">
                  <span className="text-emerald-400">https://</span>
                  <span>{store.url}</span>
                </div>

                <div className="flex items-center gap-1 text-violet-400 text-[10px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  <span>Shopify</span>
                </div>
              </div>

              {/* Store Screenshot */}
              <div className="relative w-full aspect-[16/10] bg-zinc-950 overflow-hidden">
                <Image
                  src={store.image}
                  alt={`Tienda Shopify ${store.name} realizada por Webunica`}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority={isFront}
                />

                {/* Front Card Highlight Overlay */}
                {isFront && (
                  <div className="absolute bottom-3 left-3 right-3 bg-zinc-950/85 backdrop-blur-md border border-white/15 p-3 rounded-xl flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-black text-white uppercase tracking-wider">{store.name}</h4>
                      <p className="text-[10px] text-zinc-400 font-light">{store.category}</p>
                    </div>
                    <span className="px-2.5 py-1 bg-violet-600/30 text-violet-300 border border-violet-500/40 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest flex items-center gap-1">
                      Ver tienda <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Shopify Partner Badge at bottom right */}
      <div className="absolute -bottom-2 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md shadow-2xl px-5 py-3.5 rounded-3xl border border-zinc-200/80 flex items-center gap-3.5 z-50 animate-bounce-slow">
        <div className="w-10 h-10 rounded-2xl bg-violet-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-violet-600/30">
          <ShoppingBag className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 block leading-none mb-1">Certificados</span>
          <span className="text-xs font-black text-zinc-950 tracking-tight">Shopify Partner 2026</span>
        </div>
      </div>

      {/* Interactive Helper Cue */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-900/80 backdrop-blur-md border border-white/15 text-white px-3.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-widest opacity-0 group-hover/container:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
        ✨ Haz clic en las tarjetas para rotar tiendas
      </div>
    </div>
  );
}
