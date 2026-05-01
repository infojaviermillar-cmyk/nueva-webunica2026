"use client";

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Project } from '@/types/project';

interface HeroCarouselProps {
  projects: Project[];
}

export default function HeroCarousel({ projects }: HeroCarouselProps) {
  // Split projects into two distinct sets to avoid repetition side-by-side
  const set1 = projects.filter((_, i) => i % 2 === 0);
  const set2 = projects.filter((_, i) => i % 2 !== 0);

  return (
    <div className="relative h-[700px] lg:h-[900px] hidden lg:flex gap-8 overflow-hidden pr-4">
      <style jsx>{`
        @keyframes scroll-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .scroll-container {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          animation: scroll-vertical 120s linear infinite;
        }
        .scroll-container:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="flex-1">
        <div className="scroll-container">
          {[...set1, ...set1].map((p, i) => (
            <a key={i} href={p.link} target="_blank" rel="noopener noreferrer" className="flex flex-col bg-white rounded-[3rem] overflow-hidden border border-zinc-100 shadow-2xl group/card w-full hover:border-violet-200 transition-all">
              <div className="relative aspect-[16/10] overflow-hidden">
                 <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover/card:scale-110" loading="lazy" />
                 <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-violet-600 text-white text-[9px] font-black uppercase rounded-full shadow-lg">
                       {p.category}
                    </span>
                 </div>
              </div>
              <div className="p-8 pb-10 text-left">
                 <div className="flex gap-2 mb-4">
                    {p.tags.map(t => (
                       <span key={t} className="text-[8px] font-black uppercase tracking-widest text-violet-600 bg-violet-50 px-3 py-1 rounded-full">{t}</span>
                    ))}
                 </div>
                 <h3 className="text-2xl font-black text-zinc-950 uppercase mb-3 leading-none group-hover/card:text-violet-600 transition-colors">{p.title}</h3>
                 <p className="text-[11px] text-zinc-500 font-medium leading-relaxed mb-8 line-clamp-2">
                    {p.description}
                 </p>
                 <div className="flex items-center justify-between pt-6 border-t border-zinc-50">
                    <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 group-hover/card:text-zinc-950 transition-colors">Explorar Proyecto</span>
                    <div className="w-10 h-10 rounded-full bg-violet-600 text-white flex items-center justify-center group-hover/card:translate-x-2 transition-transform shadow-lg shadow-violet-500/20">
                       <ArrowRight className="w-4 h-4" />
                    </div>
                 </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="flex-1 translate-y-32">
        <div className="scroll-container" style={{ animationDirection: 'reverse' }}>
          {[...set2, ...set2].map((p, i) => (
            <a key={i} href={p.link} target="_blank" rel="noopener noreferrer" className="flex flex-col bg-white rounded-[3rem] overflow-hidden border border-zinc-100 shadow-2xl group/card w-full hover:border-violet-200 transition-all">
              <div className="relative aspect-[16/10] overflow-hidden">
                 <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover/card:scale-110" loading="lazy" />
                 <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-violet-600 text-white text-[9px] font-black uppercase rounded-full shadow-lg">
                       {p.category}
                    </span>
                 </div>
              </div>
              <div className="p-8 pb-10 text-left">
                 <div className="flex gap-2 mb-4">
                    {p.tags.map(t => (
                       <span key={t} className="text-[8px] font-black uppercase tracking-widest text-violet-600 bg-violet-50 px-3 py-1 rounded-full">{t}</span>
                    ))}
                 </div>
                 <h3 className="text-2xl font-black text-zinc-950 uppercase mb-3 leading-none group-hover/card:text-violet-600 transition-colors">{p.title}</h3>
                 <p className="text-[11px] text-zinc-500 font-medium leading-relaxed mb-8 line-clamp-2">
                    {p.description}
                 </p>
                 <div className="flex items-center justify-between pt-6 border-t border-zinc-50">
                    <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 group-hover/card:text-zinc-950 transition-colors">Explorar Proyecto</span>
                    <div className="w-10 h-10 rounded-full bg-violet-600 text-white flex items-center justify-center group-hover/card:translate-x-2 transition-transform shadow-lg shadow-violet-500/20">
                       <ArrowRight className="w-4 h-4" />
                    </div>
                 </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
