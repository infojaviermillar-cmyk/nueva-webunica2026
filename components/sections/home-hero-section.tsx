'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';
import HeroCarousel from '@/components/sections/hero-carousel';
import MobileCarousel from '@/components/sections/mobile-carousel';

interface ProjectItem {
  title: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  link: string;
}

export default function HomeHeroSection({ projects }: { projects: ProjectItem[] }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Transition to dark mode as soon as the user scrolls down > 30px
      if (window.scrollY > 30) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className={`relative pt-[22vh] lg:pt-32 pb-24 lg:pb-32 overflow-hidden flex items-start lg:items-center min-h-[100vh] lg:min-h-[95vh] transition-colors duration-700 ${
        isDark ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-950'
      }`}
    >
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-35 pointer-events-none transition-opacity duration-700">
        <Image 
          src="/bg-01.jpg" 
          alt="Agencia de Diseño y Desarrollo Web en Chile - Webunica" 
          fill 
          className="object-cover object-center" 
          priority
          fetchPriority="high"
          quality={75}
        />
        {/* Dynamic Overlay */}
        <div 
          className={`absolute inset-0 transition-colors duration-700 ${
            isDark 
              ? 'bg-gradient-to-b from-zinc-950/95 via-zinc-950/80 to-zinc-950' 
              : 'bg-gradient-to-b from-white/90 via-white/40 to-white'
          }`}
        />
      </div>

      {/* Decorative Glow Elements in Dark Mode */}
      <div 
        className={`absolute top-1/4 left-0 w-[600px] h-[600px] bg-violet-600/20 blur-[140px] rounded-full pointer-events-none transition-opacity duration-700 -z-10 -translate-x-1/2 ${
          isDark ? 'opacity-100' : 'opacity-0'
        }`} 
      />
      <div 
        className={`absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-500/15 blur-[140px] rounded-full pointer-events-none transition-opacity duration-700 -z-10 translate-x-1/3 ${
          isDark ? 'opacity-100' : 'opacity-0'
        }`} 
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="text-center lg:text-left">
            
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 px-4 py-2 mb-6 xl:mb-10 backdrop-blur-sm border rounded-full transition-all duration-700 ${
                isDark 
                  ? 'bg-zinc-900/90 border-zinc-800 text-zinc-300 shadow-lg shadow-black/40' 
                  : 'bg-white/80 border-zinc-100 text-zinc-500 shadow-xs'
              }`}
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              <span className="text-[10px] font-black tracking-[0.25em] uppercase">
                Expertos en E-commerce & Shopify Partners
              </span>
            </div>
            
            {/* Title */}
            <h1 
              className={`text-[2.4rem] xs:text-5xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[85px] font-black tracking-tighter leading-[0.85] mb-6 xl:mb-12 uppercase break-words transition-colors duration-700 ${
                isDark ? 'text-white' : 'text-zinc-950'
              }`}
            >
              Diseño & <br/>
              <span className={`font-black transition-colors duration-700 ${isDark ? 'text-violet-400' : 'text-violet-600'}`}>
                Desarrollo
              </span> <br/>
              Sitios Web.
            </h1>
            
            {/* Paragraph */}
            <p 
              className={`text-base lg:text-lg xl:text-xl max-w-md xl:max-w-xl mx-auto lg:mx-0 mb-8 xl:mb-16 font-light leading-relaxed transition-colors duration-700 ${
                isDark ? 'text-zinc-400' : 'text-zinc-500'
              }`}
            >
              Expertos en{' '}
              <strong className={`font-bold transition-colors duration-700 ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                Next.js
              </strong>{' '}
              y{' '}
              <strong className={`font-bold transition-colors duration-700 ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                Shopify Chile
              </strong>
              . Construimos ecosistemas digitales de alto rendimiento enfocados en velocidad, SEO y conversión.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 xl:gap-6 items-center justify-center lg:justify-start">
              <LeadButton 
                className={`px-6 sm:px-10 xl:px-14 py-5 xl:py-7 font-black rounded-3xl transition-all uppercase tracking-widest text-xs flex items-center gap-3 scale-100 hover:scale-105 active:scale-95 group w-full sm:w-auto justify-center cursor-pointer duration-500 ${
                  isDark
                    ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:from-violet-500 hover:to-purple-500 shadow-2xl shadow-violet-600/40 border border-violet-500/30'
                    : 'bg-zinc-950 text-white hover:bg-zinc-800 shadow-2xl'
                }`}
              >
                Cotizar mi Proyecto <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </LeadButton>

              <Link 
                href="/portafolio" 
                className={`px-6 sm:px-10 xl:px-14 py-5 xl:py-7 border font-black rounded-3xl transition-all uppercase tracking-widest text-xs w-full sm:w-auto text-center duration-500 ${
                  isDark
                    ? 'border-zinc-800 text-white hover:bg-zinc-900/90 hover:border-zinc-700 bg-zinc-900/40'
                    : 'border-zinc-200 text-zinc-950 hover:bg-zinc-50'
                }`}
              >
                Ver Portafolio
              </Link>
            </div>

            <MobileCarousel projects={projects} />
          </div>

          {/* Right Carousel Column */}
          <HeroCarousel projects={projects} />

        </div>
      </div>
    </section>
  );
}
