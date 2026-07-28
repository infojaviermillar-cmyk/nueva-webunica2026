'use client';

import React, { useEffect, useState, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function NavigationProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Al cambiar la ruta (pathname o searchParams), completar la barra y ocultar
  useEffect(() => {
    if (isLoading) {
      setProgress(100);
      const timer = setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 250);

      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams]);

  // Interceptar clicks globales en enlaces para disparar la animación de carga de inmediato
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a') as HTMLAnchorElement | null;

      if (!anchor) return;

      const href = anchor.getAttribute('href');
      const targetAttr = anchor.getAttribute('target');

      // Solo interceptar si es navegación interna real (no hash # ni target _blank ni descargas)
      if (
        href &&
        !href.startsWith('#') &&
        !href.startsWith('mailto:') &&
        !href.startsWith('tel:') &&
        !href.startsWith('whatsapp:') &&
        targetAttr !== '_blank'
      ) {
        const url = new URL(anchor.href, window.location.href);
        
        // Si va a la misma URL actual exacta con el mismo pathname y search, ignorar
        if (url.pathname === window.location.pathname && url.search === window.location.search && url.hash) {
          return;
        }

        // Iniciar carga inmediata
        startLoading();
      }
    };

    const startLoading = () => {
      setIsLoading(true);
      setProgress(25);

      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 85) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return 85;
          }
          return prev + Math.floor(Math.random() * 15 + 5);
        });
      }, 150);
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (!isLoading && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[99999] pointer-events-none">
      {/* Top Glow Loading Line */}
      <div 
        className="h-1 bg-gradient-to-r from-violet-600 via-pink-500 to-amber-400 shadow-[0_0_15px_rgba(236,72,153,0.9)] transition-all duration-200 ease-out"
        style={{ width: `${progress}%` }}
      />

      {/* Floating Cargando... Pill Indicator */}
      {isLoading && progress < 100 && (
        <div className="fixed top-4 right-6 z-[99999] animate-fade-in">
          <div className="bg-zinc-950/90 text-white border border-white/20 backdrop-blur-md px-3.5 py-2 rounded-full shadow-2xl flex items-center gap-2.5 text-xs font-bold tracking-wide">
            <Loader2 className="w-3.5 h-3.5 text-pink-400 animate-spin" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-200">Cargando...</span>
          </div>
        </div>
      )}
    </div>
  );
}
