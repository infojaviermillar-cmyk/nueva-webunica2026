"use client";

import { useEffect, useState, useRef } from 'react';

export default function FloatingShapes() {
  const [scrollY, setScrollY] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      
      rafRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      {/* Esfera 1: Violeta Superior Izquierda (Lenta) */}
      <div 
        className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.15}px, 0)` }}
      />

      {/* Esfera 2: Indigo Derecha (Rápida) */}
      <div 
        className="absolute top-[20%] -right-40 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.3}px, 0)` }}
      />

      {/* Esfera 3: Violeta Inferior (Media) */}
      <div 
        className="absolute top-[50%] left-[10%] w-[700px] h-[700px] bg-violet-400/5 rounded-full blur-[140px] will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.1}px, 0)` }}
      />
      
      {/* Esfera 4: Acento sutil central */}
      <div 
        className="absolute top-[80%] right-[20%] w-[400px] h-[400px] bg-zinc-200/20 rounded-full blur-[100px] will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.2}px, 0)` }}
      />
    </div>
  );
}
