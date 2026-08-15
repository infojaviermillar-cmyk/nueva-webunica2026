'use client';

import React, { useState, useRef } from 'react';
import { Check, ArrowRight, ArrowLeft, Crown, Sparkles, Tag, ChevronRight, ChevronLeft } from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';

export default function ShopifyInteractivePlansCarousel() {
  const [activeSlide, setActiveSlide] = useState<number>(0); // 0 = Planes Estándar (3 tarjetas), 1 = Custom Elite
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (slideIndex: number) => {
    setActiveSlide(slideIndex);
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: slideIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full relative">
      
      {/* Header Controls for Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-violet-600 block mb-1">
            Planes & Alternativas
          </span>
          <p className="text-sm text-zinc-600">
            {activeSlide === 0 
              ? "Mostrando los 3 planes estandarizados principales. Haz clic en la flecha para revisar Plan Custom Elite." 
              : "Mostrando Plan Enterprise Custom Elite a medida."}
          </p>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => scrollToSlide(0)}
            disabled={activeSlide === 0}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
              activeSlide === 0
                ? 'bg-zinc-100 text-zinc-400 cursor-not-allowed opacity-50'
                : 'bg-zinc-900 text-white hover:bg-zinc-800 shadow-md cursor-pointer'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Ver Planes Principales</span>
          </button>

          <button
            onClick={() => scrollToSlide(1)}
            disabled={activeSlide === 1}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
              activeSlide === 1
                ? 'bg-zinc-100 text-zinc-400 cursor-not-allowed opacity-50'
                : 'bg-amber-400 text-zinc-950 hover:bg-amber-500 shadow-md shadow-amber-400/20 cursor-pointer font-black'
            }`}
          >
            <span>Revisa Plan Custom Elite</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* CAROUSEL CONTAINER (Con Padding Superior para que el Badge flotante de Plan Full no se corte) */}
      <div 
        ref={scrollRef}
        className="w-full overflow-x-auto scrollbar-none snap-x snap-mandatory pt-6 pb-4 -mt-4 rounded-[2.5rem]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex w-[200%] transition-transform duration-500 ease-out">
          
          {/* SLIDE 01: LOS 3 PLANES PRINCIPALES (100% WIDE) */}
          <div className="w-1/2 snap-start shrink-0 pr-0 sm:pr-4 pt-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                            {/* PLAN PRENDE */}
              <div id="plan-prende" className="bg-white rounded-[2.5rem] p-6 lg:p-8 border border-zinc-200 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="mb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full inline-block">
                      Lanzamiento
                    </span>
                  </div>
                  <h3 className="text-2xl font-black uppercase text-zinc-950 mb-1 font-heading">Plan Prende</h3>
                  <p className="text-sm text-zinc-600 font-medium mb-6">Para empezar a vender con tienda funcional y profesional.</p>
                  
                  <div className="mb-6 pb-6 border-b border-zinc-100">
                    <span className="text-3xl sm:text-4xl font-black text-zinc-950 font-mono">$680.000</span>
                    <span className="text-xs font-bold text-zinc-400 uppercase ml-2">+ IVA</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {[
                      "Diseño basado en plantilla premium",
                      "Carga inicial de hasta 70 productos",
                      "Medios de pago (Webpay / Flow / MP)",
                      "Despacho con tarifas fijas / zonas",
                      "1 app instalada y configurada",
                      "1 flujo de correos (bienvenida)",
                      "Carta Gantt en línea & seguimiento por hitos",
                      "2 rondas de revisión de diseño",
                      "Diseño Mobile-First 100%",
                      "Capacitación básica de administración",
                      "3 meses (90 días) de garantía y soporte post-entrega"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-800 font-medium">
                        <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" strokeWidth={3} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-center gap-2 text-center">
                  <LeadButton service="Plan Prende" className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all text-center cursor-pointer shadow-md">
                    -5% Solicita Asesoría Gratis
                  </LeadButton>
                  <p className="text-[14px] font-bold text-zinc-950 mt-1 leading-snug">
                    Con esta promoción ahorras $29.000
                  </p>
                </div>
              </div>

              {/* PLAN FULL (DESTACADO / MÁS ELEGIDO) */}
              <div id="plan-full" className="bg-gradient-to-b from-violet-900 via-[#2C02A5] to-zinc-950 text-white rounded-[2.5rem] p-6 lg:p-8 border-2 border-[#FF0085] shadow-2xl relative flex flex-col justify-between transform">
                <div>
                  <div className="mb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-300 bg-white/10 px-3 py-1 rounded-full inline-block">
                      Crecimiento & Automatización
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-1 font-heading">Plan Full</h3>
                  <p className="text-sm text-purple-200 font-medium mb-6">Tienda optimizada para vender, medir y automatizar.</p>
                  
                  <div className="mb-6 pb-6 border-b border-white/15">
                    <span className="text-3xl sm:text-4xl font-black text-white font-mono">$1.200.000</span>
                    <span className="text-xs font-bold text-purple-300 uppercase ml-2">+ IVA</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {[
                      "Diseño en plantilla premium + secciones a medida",
                      "Importación o configuración de hasta 500 productos*",
                      "3 apps instaladas y configuradas",
                      "3 flujos de correos que venden solos: bienvenida, carrito abandonado y post-compra",
                      "Carta Gantt en línea & seguimiento por hitos",
                      "3 rondas de revisión de diseño",
                      "Integración pasarelas de pago + Despacho local",
                      "Boleta Electrónica SII automática",
                      "SEO Técnico + GA4 + Meta Pixel + Conversion API",
                      "Capacitación avanzada 1 a 1",
                      "3 meses de soporte post-entrega"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-purple-50 font-medium">
                        <Check className="w-4.5 h-4.5 text-pink-400 shrink-0 mt-0.5" strokeWidth={3} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="text-[11px] text-purple-300/80 italic leading-tight mb-6">
                    * Según calidad del archivo entregado (CSV/Excel).
                  </p>
                </div>

                <div className="flex flex-col items-center gap-2 text-center">
                  <LeadButton service="Plan Full" className="w-full py-4 bg-[#FF0085] hover:bg-pink-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all shadow-xl shadow-pink-600/30 text-center cursor-pointer">
                    -8% Solicita Asesoría Gratis
                  </LeadButton>
                  <p className="text-[14px] font-bold text-white mt-1 leading-snug">
                    Con esta promoción ahorras $62.400
                  </p>
                </div>
              </div>

              {/* PLAN CONVERSIÓN (COTIZAR) */}
              <div id="plan-conversion" className="bg-white rounded-[2.5rem] p-6 lg:p-8 border border-zinc-200 shadow-lg flex flex-col justify-between relative group">
                <div>
                  <div className="mb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      Performance & CRO
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black uppercase text-zinc-950 mb-1 font-heading">Plan Conversión</h3>
                  <p className="text-sm text-zinc-600 font-medium mb-6">Solución para catálogos grandes e integraciones avanzadas.</p>
                  
                  <div className="mb-6 pb-6 border-b border-zinc-100 flex items-center justify-between">
                    <div>
                      <span className="text-3xl sm:text-4xl font-black text-zinc-950 font-mono">Cotizar</span>
                      <span className="text-xs font-bold text-zinc-400 block mt-0.5 uppercase">Propuesta a medida</span>
                    </div>

                    {/* Botón Flotante de Flecha a la Derecha para deslizar a Custom Elite */}
                    <button 
                      onClick={() => scrollToSlide(1)}
                      className="p-3 bg-amber-400 hover:bg-amber-500 text-zinc-950 rounded-2xl shadow-md transition-transform hover:scale-105 cursor-pointer flex items-center justify-center"
                      title="Ver siguiente plan: Custom Elite"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {[
                      "Diseño UX/UI personalizado para máxima conversión",
                      "Importación o migración de hasta 1.000 productos",
                      "Carta Gantt en línea & seguimiento por hitos",
                      "5 apps instaladas y configuradas",
                      "5 flujos de correos de automatización",
                      "4 rondas de revisión de diseño",
                      "Integración ERP (Bsale / Obuma / Defontana)",
                      "Email Marketing automático con Klaviyo",
                      "Analítica avanzada & reportes de ventas",
                      "Optimización CRO en ficha de producto",
                      "6 meses de soporte post-entrega"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-800 font-medium">
                        <Check className="w-4.5 h-4.5 text-blue-500 shrink-0 mt-0.5" strokeWidth={3} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-center gap-2 text-center">
                  <LeadButton service="Plan Conversión" className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all text-center cursor-pointer shadow-md">
                    -10% Solicita Asesoría Gratis
                  </LeadButton>
                  <p className="text-[14px] font-bold text-zinc-950 mt-1 leading-snug">
                    Con esta promoción ahorras $120.000
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* SLIDE 02: CUSTOM ELITE (SE MUESTRA AL HACER CLIC EN LA FLECHA) */}
          <div className="w-1/2 snap-start shrink-0 pl-0 sm:pl-4">
            <div className="max-w-2xl mx-auto">
              
              <div id="custom-elite" className="bg-gradient-to-b from-zinc-900 via-zinc-950 to-purple-950 text-white rounded-[2.5rem] p-8 lg:p-10 border-2 border-amber-400/60 shadow-2xl flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber-400/10 blur-[100px] pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-300 bg-amber-400/20 border border-amber-400/30 px-3.5 py-1.5 rounded-full inline-block">
                      ★ Enterprise & Figma • Desarrollo VIP
                    </span>

                    <button
                      onClick={() => scrollToSlide(0)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-300 hover:text-white bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-full transition-all cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Volver a los 3 planes</span>
                    </button>
                  </div>

                  <h3 className="text-3xl sm:text-5xl font-black uppercase text-white mb-2 font-heading tracking-tight">
                    Shopify Custom Elite
                  </h3>
                  <p className="text-base text-zinc-300 font-medium mb-8">
                    Desarrollo 100% exclusivo a medida desde cero en Figma para marcas con requerimientos corporativos complejos.
                  </p>
                  
                  <div className="mb-8 pb-8 border-b border-white/15 flex items-baseline gap-4">
                    <div>
                      <span className="text-4xl sm:text-5xl font-black text-amber-300 font-mono">Cotizar</span>
                      <span className="text-xs font-bold text-zinc-400 block mt-1 uppercase tracking-widest">Proyecto Corporativo a Medida</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {[
                      "Diseño UX/UI a medida desde cero en Figma",
                      "Carta Gantt en línea & seguimiento por hitos",
                      "Migración avanzada de catálogo (1.000+ prods)",
                      "5 apps instaladas y configuradas",
                      "5 flujos de correos de automatización",
                      "4 rondas de revisión de diseño en Figma",
                      "Integración ERP (Bsale / Obuma / Defontana / Laudus)",
                      "Canal B2B / Venta mayorista o funciones especiales",
                      "6 meses de soporte post-entrega y acompañamiento"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-zinc-200 font-medium bg-white/5 p-3.5 rounded-xl border border-white/10">
                        <Check className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" strokeWidth={3} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <LeadButton className="w-full sm:w-auto flex-1 py-4 px-8 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-zinc-950 font-black text-xs uppercase tracking-widest rounded-2xl transition-all shadow-xl shadow-amber-500/20 text-center cursor-pointer">
                    Solicita asesoría gratis
                  </LeadButton>

                  <button
                    onClick={() => scrollToSlide(0)}
                    className="w-full sm:w-auto py-4 px-6 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-2xl transition-all text-center cursor-pointer"
                  >
                    Ver los 3 planes anteriores
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
