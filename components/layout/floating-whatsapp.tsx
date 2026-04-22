'use client';

import { Phone } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/56984410379"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-emerald-500 text-white p-4 rounded-full shadow-2xl shadow-emerald-500/40 hover:bg-emerald-600 hover:scale-110 transition-all active:scale-95 group"
      aria-label="Hablar por WhatsApp"
    >
      <div className="absolute -top-12 right-0 bg-white text-zinc-900 text-[10px] font-black px-3 py-1.5 rounded-xl shadow-lg border border-zinc-100 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase tracking-widest">
        ¿Dudas? Habla con un experto
        <div className="absolute top-full right-5 w-2 h-2 bg-white border-r border-b border-zinc-100 rotate-45 -translate-y-1"></div>
      </div>
      <Phone className="w-6 h-6 fill-current" />
    </a>
  );
}
