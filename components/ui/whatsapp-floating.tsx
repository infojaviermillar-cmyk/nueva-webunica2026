"use client";

import React from 'react';
import Image from 'next/image';

interface WhatsAppFloatingProps {
  onClick: () => void;
}

export default function WhatsAppFloating({ onClick }: WhatsAppFloatingProps) {
  return (
    <div 
      className="fixed bottom-8 right-8 z-[999] group cursor-pointer"
      onClick={onClick}
    >
      {/* Label Tooltip (Show on hover) */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[100%] mr-4 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 pointer-events-none">
        <div className="bg-zinc-950 text-white text-[10px] font-black uppercase tracking-widest py-3 px-6 rounded-2xl shadow-2xl whitespace-nowrap border border-white/10 relative">
          ¿En qué puedo ayudarte?
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-950 rotate-45 border-r border-t border-white/10" />
        </div>
      </div>
      
      {/* Main Avatar Button */}
      <button 
        type="button"
        onClick={(e) => {
          console.log("Floating button clicked");
          onClick();
        }}
        className="relative bg-white border-2 border-zinc-100 p-1.5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_60px_rgba(37,211,102,0.3)] hover:scale-105 transition-all duration-500 flex items-center gap-3 active:scale-95 cursor-pointer touch-manipulation pointer-events-auto"
        style={{ WebkitTapHighlightColor: 'transparent' }}
        aria-label="Contactar por WhatsApp"
      >
        <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-inner flex-shrink-0 pointer-events-none">
          <Image 
            src="/javier-avatar.jpg"
            alt="Javier Millar"
            fill
            sizes="56px"
            className="object-cover"
          />
          <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-[#25d366] rounded-full border-2 border-white animate-pulse" />
        </div>
        
        <div className="hidden group-hover:block pr-6 animate-in slide-in-from-right-4 duration-500 pointer-events-none">
           <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none mb-1">En línea</p>
           <p className="text-sm font-black text-zinc-950 whitespace-nowrap">Asesor Directo</p>
        </div>
      </button>

      {/* Decorative pulse glow */}
      <div className="absolute inset-0 -z-10 bg-violet-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
}
