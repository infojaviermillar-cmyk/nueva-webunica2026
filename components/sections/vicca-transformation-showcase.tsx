'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Maximize2, X, ArrowRight, CheckCircle2, Eye, Palette, Layout } from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';
import ScrollRevealText from '@/components/ui/scroll-reveal-text';

type ShowcaseStep = {
  id: string;
  stepNumber: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  icon: any;
  color: string;
  accentBg: string;
};

const steps: ShowcaseStep[] = [
  {
    id: 'wireframe',
    stepNumber: '01',
    badge: 'UX & Arquitectura',
    title: 'Wireframe & Estructura',
    description: 'Diagramación de zonas de conversión, jerarquía de información y experiencia de navegación antes de aplicar estilos.',
    image: '/vicca-layout--wireframe-001.png',
    icon: Layout,
    color: 'text-violet-300',
    accentBg: 'bg-violet-500/20 border-violet-400/30',
  },
  {
    id: 'palette',
    stepNumber: '02',
    badge: 'Branding & Color',
    title: 'Carta de Colores & Estilo',
    description: 'Definición de la paleta cromática, contrastes accesibles y la identidad visual representativa de la marca Vicca.',
    image: '/vicca-carta-colores.png',
    icon: Palette,
    color: 'text-pink-300',
    accentBg: 'bg-pink-500/20 border-pink-400/30',
  },
  {
    id: 'result',
    stepNumber: '03',
    badge: 'Shopify Live',
    title: 'Resultado Final Tienda',
    description: 'Integración completa en Shopify con theme optimizado, carga ultra-rápida y adaptable a dispositivos móviles.',
    image: '/vicca-layout-001.png',
    icon: Sparkles,
    color: 'text-emerald-300',
    accentBg: 'bg-emerald-500/20 border-emerald-400/30',
  },
];

export default function ViccaTransformationShowcase() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);
  const [activeStep, setActiveStep] = useState<string>('result');

  return (
    <section className="w-full bg-[#3c096c] text-white py-20 sm:py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 border border-white/30 rounded-full text-white text-xs font-mono font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-300" />
            Caso de Éxito • Proceso Real Shopify
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6 font-heading text-white">
            De Wireframe a <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-purple-100 to-white">Resultado Final</span>
          </h2>

          <ScrollRevealText 
            text="Así transformamos la tienda Vicca: desde el boceto estructural UX, la elección cromática de la marca, hasta la tienda Shopify 100% optimizada para vender."
            className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed max-w-3xl mx-auto"
            mode="dark"
          />
        </div>

        {/* 3 Step Flow Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step) => {
            const Icon = step.icon;
            const isCurrent = activeStep === step.id;

            return (
              <div 
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`bg-white/5 border rounded-[2.5rem] p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 group cursor-pointer ${
                  isCurrent 
                    ? 'border-purple-300/60 bg-white/10 shadow-2xl shadow-purple-900/50 scale-[1.02]' 
                    : 'border-white/10 hover:border-white/25 hover:bg-white/8'
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`px-3 py-1.5 rounded-full border text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 ${step.accentBg} ${step.color}`}>
                      <Icon className="w-3.5 h-3.5" />
                      <span>{step.badge}</span>
                    </div>
                    <span className="text-2xl font-black text-white/30 font-mono">{step.stepNumber}</span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-3 group-hover:text-purple-200 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-100/80 font-light leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Preview Image Container */}
                  <div 
                    className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 bg-black/40 group/img cursor-zoom-in"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage({ src: step.image, title: step.title });
                    }}
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    />

                    {/* Hover Overlay with Zoom Icon */}
                    <div className="absolute inset-0 bg-purple-950/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-[2px]">
                      <Maximize2 className="w-5 h-5 text-purple-300 animate-bounce" />
                      <span>Ampliar Imagen</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Trigger Button */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-purple-200/70 font-semibold uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Etapa Completada
                  </span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage({ src: step.image, title: step.title });
                    }}
                    className="text-xs font-bold text-white hover:text-purple-300 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Eye className="w-4 h-4" /> Ver detalle
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="bg-white/10 border border-white/15 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="text-center md:text-left space-y-1">
            <h4 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
              ¿Quieres un Proceso de Diseño Organizado para tu Tienda?
            </h4>
            <p className="text-xs sm:text-sm text-purple-100/80 font-light">
              Diseñamos temas a medida en Shopify con wireframes previos y prototipado profesional.
            </p>
          </div>

          <LeadButton className="px-8 py-4 bg-white text-[#3c096c] hover:bg-purple-50 font-black uppercase tracking-widest text-xs rounded-2xl transition-all shadow-xl hover:scale-105 shrink-0 flex items-center gap-2 cursor-pointer">
            Cotizar Diseño Shopify <ArrowRight className="w-4 h-4" />
          </LeadButton>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 p-4 sm:p-8 flex flex-col items-center justify-center animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          {/* Top Bar */}
          <div className="w-full max-w-6xl flex items-center justify-between pb-4 border-b border-white/10 mb-4 text-white">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono bg-purple-600 px-3 py-1 rounded-full font-bold uppercase">Caso Vicca</span>
              <h4 className="text-lg font-black uppercase tracking-tight">{selectedImage.title}</h4>
            </div>
            <button 
              onClick={() => setSelectedImage(null)}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer"
              title="Cerrar vista previa"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Full Image Container */}
          <div 
            className="relative w-full max-w-6xl flex-1 max-h-[82vh] overflow-auto rounded-2xl bg-zinc-900 border border-white/10 p-2 flex items-start justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>

          <p className="text-xs text-purple-200/70 mt-3 font-mono">
            Haz clic fuera o presiona X para salir de la vista previa
          </p>
        </div>
      )}
    </section>
  );
}
