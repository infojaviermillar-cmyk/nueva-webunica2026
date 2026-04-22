'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, Sparkles } from 'lucide-react';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-[60] bg-gradient-to-r from-violet-700 via-violet-600 to-pink-600 text-white text-xs font-bold">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3 text-center">
        <Sparkles className="w-3.5 h-3.5 shrink-0 text-yellow-300 animate-pulse" />
        <p className="leading-snug">
          <span className="font-black">Analiza tu tienda Shopify gratis</span>
          {' '}y obtén un{' '}
          <span className="underline underline-offset-2 font-black text-yellow-300">15% de descuento</span>
          {' '}exclusivo en tu desarrollo —{' '}
          <Link
            href="/listas-de-verificacion-shopify-cro-basica"
            className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 border border-white/30 px-3 py-0.5 rounded-full transition-colors font-black whitespace-nowrap"
          >
            Iniciar análisis →
          </Link>
        </p>
        <button
          onClick={() => setVisible(false)}
          aria-label="Cerrar"
          className="shrink-0 ml-2 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
