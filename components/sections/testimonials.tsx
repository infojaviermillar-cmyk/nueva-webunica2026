'use client';
 
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import { getTestimonials, Testimonial } from '@/lib/testimonial-actions';
 
const MOCK_TESTIMONIALS = [
  {
    quote: "Partnering with Webunica has dramatically increased our sales conversions. Their expert understanding of user paths and clear insight into our customers has completely transformed our online performance.",
    author: "SARAH - CEO FASHION BOUTIQUE",
    stars: 5,
    active: true
  },
  {
    quote: "La velocidad de carga de nuestro nuevo embudo es increíble. Pasamos de perder leads por lentitud a captar el triple de contactos en menos de un mes. Un cambio radical para nuestra agencia inmobiliaria.",
    author: "MARCOS - DIRECTOR INMOBILIARIA PREMIUM",
    stars: 5,
    active: true
  },
  {
    quote: "Diseño, velocidad y estrategia. Webunica entiende que una web no es para verse bonita, sino para vender. Nuestra plataforma SaaS ahora escala de forma predecible gracias a su arquitectura.",
    author: "JAVIER - CO-FOUNDER TECH STARTUP",
    stars: 5,
    active: true
  }
];
 
export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [emblaRef] = useEmblaCarousel({ 
    align: 'start',
    loop: true,
    dragFree: true
  }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

  useEffect(() => {
    async function load() {
      const result = await getTestimonials();
      if (result.success && result.testimonials && result.testimonials.length > 0) {
        setTestimonials(result.testimonials.filter((t: any) => t.active));
      } else {
        setTestimonials(MOCK_TESTIMONIALS);
      }
    }
    load();
  }, []);

  const displayList = testimonials.length > 0 ? testimonials : MOCK_TESTIMONIALS;
 
  return (
    <section className="bg-zinc-950 py-24 md:py-40 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 mb-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-black uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
              Social Proof Real
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6">
              Lo que dicen de<br/>
              <span className="text-violet-500 italic font-serif lowercase font-light">nuestro trabajo</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-sm font-medium leading-relaxed mb-4">
            No solo construimos webs, creamos activos digitales que transforman negocios en Chile y el mundo.
          </p>
        </div>
      </div>

      <div className="relative z-10 px-4 md:px-0">
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-6 ml-6">
            {displayList.map((testimonial, i) => (
              <div key={i} className="flex-[0_0_85%] md:flex-[0_0_40%] lg:flex-[0_0_30%] min-w-0">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="h-full bg-zinc-900/40 backdrop-blur-md border border-white/5 p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between hover:border-violet-500/30 transition-all duration-500 group"
                >
                  <div className="mb-8">
                    {/* Twitter-like Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-black text-lg overflow-hidden shrink-0 shadow-lg shadow-violet-500/20">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div className="overflow-hidden">
                        <div className="flex items-center gap-2">
                          <h3 className="text-white font-bold text-sm tracking-tight truncate">{testimonial.author}</h3>
                          <div className="w-3.5 h-3.5 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                             <svg viewBox="0 0 24 24" className="w-2 h-2 text-white fill-current"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                          </div>
                        </div>
                        <p className="text-zinc-500 text-[10px] font-medium tracking-wide">@{testimonial.author.split(' ')[0].toLowerCase()}</p>
                      </div>
                      <div className="ml-auto opacity-20 group-hover:opacity-40 transition-opacity">
                         <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      </div>
                    </div>

                    <p className="text-zinc-300 text-lg leading-relaxed font-medium tracking-tight">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-violet-500 text-violet-500" />
                      ))}
                    </div>
                    <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Verificado</span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 flex flex-col items-center gap-8">
        <div className="h-px w-20 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        <Link 
          href="/mi-cuenta" 
          className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-all"
        >
          <span className="w-8 h-px bg-zinc-800 group-hover:w-12 group-hover:bg-violet-500 transition-all" />
          ¿Eres cliente? Deja tu testimonio aquí
        </Link>
      </div>
    </section>
  );
}

