"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  Users, 
  FileText, 
  ThumbsUp, 
  GitBranch, 
  CloudUpload, 
  Palette, 
  Search, 
  Puzzle, 
  Rocket 
} from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Descripción",
    desc: "El cliente describe su proyecto y necesidades específicas.",
    icon: <MessageSquare className="w-6 h-6 text-white" />,
    bgGradient: "from-pink-500 via-rose-500 to-amber-400",
    colorHex: "#ec4899",
    shadowColor: "shadow-pink-500/25"
  },
  {
    num: "02",
    title: "Reunión",
    desc: "Se genera una reunión estratégica para definir objetivos.",
    icon: <Users className="w-6 h-6 text-white" />,
    bgGradient: "from-violet-600 via-indigo-500 to-sky-400",
    colorHex: "#7c3aed",
    shadowColor: "shadow-violet-600/25"
  },
  {
    num: "03",
    title: "Cotización",
    desc: "Elaboramos y presentamos la propuesta técnica y comercial.",
    icon: <FileText className="w-6 h-6 text-white" />,
    bgGradient: "from-teal-500 via-emerald-500 to-lime-300",
    colorHex: "#14b8a6",
    shadowColor: "shadow-teal-500/25"
  },
  {
    num: "04",
    title: "Aprobación",
    desc: "El cliente acepta la cotización y damos luz verde al inicio.",
    icon: <ThumbsUp className="w-6 h-6 text-white" />,
    bgGradient: "from-amber-500 via-orange-500 to-yellow-300",
    colorHex: "#f59e0b",
    shadowColor: "shadow-amber-500/25"
  },
  {
    num: "05",
    title: "Flujo",
    desc: "Se presenta el flujo de desarrollo y arquitectura del proyecto.",
    icon: <GitBranch className="w-6 h-6 text-white" />,
    bgGradient: "from-sky-500 via-blue-500 to-indigo-400",
    colorHex: "#0ea5e9",
    shadowColor: "shadow-sky-500/25"
  },
  {
    num: "06",
    title: "Contenido",
    desc: "El cliente envía el contenido base (textos, imágenes y logos).",
    icon: <CloudUpload className="w-6 h-6 text-white" />,
    bgGradient: "from-orange-500 via-red-500 to-amber-400",
    colorHex: "#f97316",
    shadowColor: "shadow-orange-500/25"
  },
  {
    num: "07",
    title: "Diseño",
    desc: "Se desarrolla el theme o se adapta el diseño a medida.",
    icon: <Palette className="w-6 h-6 text-white" />,
    bgGradient: "from-fuchsia-600 via-pink-600 to-rose-400",
    colorHex: "#d946ef",
    shadowColor: "shadow-fuchsia-600/25"
  },
  {
    num: "08",
    title: "Revisión",
    desc: "Se revisan exhaustivamente las funciones y la experiencia UX.",
    icon: <Search className="w-6 h-6 text-white" />,
    bgGradient: "from-red-500 via-rose-600 to-orange-400",
    colorHex: "#ef4444",
    shadowColor: "shadow-red-500/25"
  },
  {
    num: "09",
    title: "Componentes",
    desc: "Se agregan componentes avanzados y apps finales de conversión.",
    icon: <Puzzle className="w-6 h-6 text-white" />,
    bgGradient: "from-cyan-500 via-teal-500 to-sky-400",
    colorHex: "#06b6d4",
    shadowColor: "shadow-cyan-500/25"
  },
  {
    num: "10",
    title: "Finalización",
    desc: "Se entrega la tienda optimizada. (De 1 a 6 semanas en total).",
    icon: <Rocket className="w-6 h-6 text-white" />,
    bgGradient: "from-emerald-500 via-green-500 to-teal-400",
    colorHex: "#10b981",
    shadowColor: "shadow-emerald-600/25"
  }
];

interface InteractiveBalloonProps {
  step: typeof steps[0];
  index: number;
}

function InteractiveBalloon({ step, index }: InteractiveBalloonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion values for tracking cursor offset
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth springs to animate the offset
  const springConfig = { stiffness: 90, damping: 12, mass: 0.6 };
  const balloonX = useSpring(x, springConfig);
  const balloonY = useSpring(y, springConfig);
  
  // Custom wind offset that runs continuously in the background
  const windOffset = useMotionValue(0);
  
  useEffect(() => {
    let animationId: number;
    let time = index * 2.3; // Offset starting times so they are desynchronized
    
    const animateWind = () => {
      time += 0.025;
      // Combine multiple frequencies for a natural wind sway
      const sway = Math.sin(time) * 4.5 + Math.cos(time * 0.6) * 1.5;
      windOffset.set(sway);
      animationId = requestAnimationFrame(animateWind);
    };
    
    animationId = requestAnimationFrame(animateWind);
    return () => cancelAnimationFrame(animationId);
  }, [index, windOffset]);
  
  // We compute the SVG string path dynamically using useTransform.
  // - The SVG viewBox is 0 0 128 80 (width 128, height 80)
  // - The balloon's center knot moves to (64 + bx, 0 + by) where bx, by are the spring values.
  // - The string anchor at the bottom of the card is at (64 + windOffset * 0.3, 75).
  // - The control point curves in the opposite direction of movement to simulate drag, plus wind.
  const pathD = useTransform(
    [balloonX, balloonY, windOffset],
    ([bx, by, wind]) => {
      const bxVal = Number(bx);
      const byVal = Number(by);
      const windVal = Number(wind);
      
      const startX = 64 + bxVal;
      const startY = 0 + byVal;
      
      const endX = 64 + windVal * 0.35;
      const endY = 75;
      
      // Control point pulls back in the opposite direction of the displacement (drag force)
      // and sways dynamically in the middle to create a wavy rope shape
      const controlX = 64 - bxVal * 1.6 + windVal;
      const controlY = 38 - byVal * 0.4;
      
      return `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`;
    }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate cursor displacement from center of card
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2 - 40; // Offset up to align with balloon center
    
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance === 0) return;
    
    // Limits the max pull of the balloon to 22px
    const limit = 22;
    const maxDistance = 120;
    const intensity = Math.min(distance / maxDistance, 1);
    
    const pullX = (dx / distance) * limit * intensity;
    const pullY = (dy / distance) * limit * intensity;
    
    x.set(pullX);
    y.set(pullY);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      ref={containerRef}
      className="flex flex-col items-center text-center group cursor-pointer relative w-full pt-6"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Floating Balloon */}
      <motion.div 
        className="relative flex flex-col items-center z-10 select-none"
        style={{ x: balloonX, y: balloonY }}
        animate={{
          y: [0, -8, 0],
          rotate: [-1.2, 1.2, -1.2],
        }}
        transition={{
          duration: 4.5 + (index % 3) * 0.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Balloon Body */}
        <motion.div 
          variants={{
            animate: { scale: 1 },
            hover: { scale: 1.1, y: -4 }
          }}
          className={`w-20 h-24 rounded-[50%_50%_50%_50%_/_40%_40%_60%_60%] bg-gradient-to-tr ${step.bgGradient} ${step.shadowColor} shadow-xl flex flex-col items-center justify-center relative transition-shadow duration-300 group-hover:shadow-2xl`}
        >
          {/* Glossy 3D Highlight top left */}
          <div className="absolute top-2 left-3 w-5 h-8 bg-white/25 rounded-full blur-[0.6px] transform -rotate-12 pointer-events-none" />
          {/* Subtle inner bounce light bottom right */}
          <div className="absolute bottom-3 right-4 w-2 h-2 bg-white/10 rounded-full blur-[0.6px] pointer-events-none" />

          {/* Icon (inside the balloon) */}
          <div className="text-white drop-shadow-md z-10 transform group-hover:scale-110 transition-transform duration-300">
            {step.icon}
          </div>

          {/* Step Number Badge */}
          <div className="absolute -top-1 -right-1 bg-zinc-950 text-white text-[8px] font-black w-5.5 h-5.5 rounded-full flex items-center justify-center border border-white/20 shadow-md">
            {step.num}
          </div>
        </motion.div>

        {/* Balloon Knot/Tie */}
        <div 
          className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[7px] -mt-[1px] relative z-10"
          style={{ borderBottomColor: step.colorHex }}
        />
      </motion.div>

      {/* Swaying & Pulling Bezier String */}
      <svg 
        className="w-32 h-20 overflow-visible pointer-events-none z-0 absolute top-[94px] left-1/2 -translate-x-1/2" 
        viewBox="0 0 128 80"
      >
        <motion.path
          d={pathD}
          fill="none"
          stroke={step.colorHex}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="2 3"
          className="opacity-50 group-hover:opacity-100 transition-all duration-300"
        />
      </svg>

      {/* Spacer for string height to keep grid layout structured */}
      <div className="h-20" />

      {/* Card Content */}
      <div className="space-y-2.5 mt-4 relative z-10">
        <span 
          className="text-[9px] font-black uppercase tracking-[0.25em] transition-colors duration-300 text-center block"
          style={{ color: step.colorHex }}
        >
          Paso {step.num}
        </span>
        <h3 className="text-base font-black text-zinc-900 uppercase tracking-tight leading-none group-hover:text-zinc-950 transition-colors">
          {step.title}
        </h3>
        <p className="text-xs text-zinc-500 font-medium leading-relaxed max-w-[170px] mx-auto group-hover:text-zinc-600 transition-colors">
          {step.desc}
        </p>
      </div>
    </div>
  );
}

export default function WorkProcess() {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 via-sky-50/20 to-violet-50/30 relative overflow-hidden">
      {/* Background Decorative Soft Glowing Blobs */}
      <div className="absolute top-10 left-[-10%] w-[45%] h-[45%] bg-gradient-to-tr from-pink-300/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-[-10%] w-[45%] h-[45%] bg-gradient-to-bl from-sky-300/15 to-transparent blur-[120px] rounded-full pointer-events-none -z-0" />
      <div className="absolute top-1/3 left-1/3 w-[30%] h-[30%] bg-violet-300/10 blur-[100px] rounded-full pointer-events-none -z-0" />

      {/* Animated Background Wind Currents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          {/* Wind Path 1 */}
          <motion.path
            d="M -100 200 C 300 150, 500 250, 900 200 C 1200 170, 1300 220, 1600 200"
            stroke="url(#wind-grad-1)"
            strokeWidth="2"
            strokeDasharray="10 15"
            animate={{ strokeDashoffset: [0, -1000] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          {/* Wind Path 2 */}
          <motion.path
            d="M -100 450 C 200 500, 600 400, 1000 480 C 1300 520, 1400 460, 1600 480"
            stroke="url(#wind-grad-2)"
            strokeWidth="1.5"
            strokeDasharray="6 12"
            animate={{ strokeDashoffset: [0, 1000] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="wind-grad-1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0"/>
              <stop offset="50%" stopColor="#818cf8" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="wind-grad-2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0"/>
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-7xl font-black text-zinc-950 tracking-tighter uppercase leading-none mb-6">
            Proceso de <span className="text-violet-600">Trabajo</span>
          </h2>
          <p className="text-xl text-zinc-500 font-light uppercase tracking-widest text-sm">
            Paso a paso hacia el lanzamiento exitoso.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="relative hidden lg:block">
          {/* Subtle wind-stream dashed connector line */}
          <div className="absolute top-[160px] left-8 right-8 border-t border-dashed border-zinc-300/40 -z-0"></div>
          
          <div className="grid grid-cols-5 gap-y-16 gap-x-8 relative z-10">
            {steps.map((step, index) => (
              <InteractiveBalloon key={index} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* Mobile Marquee */}
        <div className="lg:hidden w-full overflow-hidden relative -mx-6 px-6 pb-12">
          {/* Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
          
          <motion.div
            className="flex w-max pt-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {[...steps, ...steps].map((step, index) => (
              <div key={index} className="w-[220px] flex-shrink-0 px-2">
                <InteractiveBalloon step={step} index={index} />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
