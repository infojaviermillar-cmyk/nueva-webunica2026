"use client";

import Image from 'next/image';
import { Project } from '@/types/project';

export default function MobileCarousel({ projects }: { projects: Project[] }) {
  return (
    <div className="mt-20 lg:hidden overflow-x-auto pb-8 -mx-6 px-6 no-scrollbar flex gap-6 snap-x snap-mandatory">
       {projects.map((p, i) => (
          <a key={i} href={p.link} target="_blank" rel="noopener noreferrer" className="min-w-[280px] snap-center bg-white rounded-[2.5rem] border border-zinc-100 shadow-xl overflow-hidden flex flex-col group/card hover:border-violet-200 transition-colors">
             <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover/card:scale-110" loading="lazy" />
             </div>
             <div className="p-6">
                <span className="text-[8px] font-black uppercase text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full mb-2 inline-block">{p.category}</span>
                <h4 className="text-lg font-black text-zinc-950 uppercase group-hover/card:text-violet-600 transition-colors">{p.title}</h4>
             </div>
          </a>
       ))}
    </div>
  );
}
