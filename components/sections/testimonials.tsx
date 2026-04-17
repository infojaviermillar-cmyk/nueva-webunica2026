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
    <section className="bg-zinc-950 py-24 md:py-40 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
            Wall of <span className="text-violet-500 italic font-serif font-light">Love</span>
          </h2>
          <p className="text-zinc-500 font-medium">
            Historias de éxito de clientes que confiaron en nuestra visión digital.
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {displayList.map((testimonial, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="break-inside-avoid bg-zinc-900/30 backdrop-blur-sm border border-white/5 p-8 rounded-3xl hover:border-violet-500/20 transition-all group"
            >
              {/* Card Header (Profile style) */}
              <div className="flex items-start gap-4 mb-6">
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white font-bold text-lg overflow-hidden">
                    {testimonial.author.charAt(0)}
                  </div>
                  {/* Small X Icon Overlay */}
                  <div className="absolute -top-1 -left-1 w-5 h-5 bg-black border border-white/10 rounded-md flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-white font-bold text-sm tracking-tight">{testimonial.author}</h3>
                    <div className="w-3.5 h-3.5 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                       <svg viewBox="0 0 24 24" className="w-2 h-2 text-white fill-current"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                  </div>
                  <p className="text-zinc-600 text-[10px] font-bold tracking-widest uppercase">
                    @{testimonial.author.split(' ')[0].toLowerCase()}_
                  </p>
                </div>
              </div>

              {/* Quote text */}
              <p className="text-zinc-400 text-[15px] leading-relaxed font-medium">
                {testimonial.quote}
              </p>

              {/* Footer info */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-0.5">
                   {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-violet-500 text-violet-500" />
                  ))}
                </div>
                <time className="text-[9px] font-black text-zinc-700 uppercase tracking-widest">
                  {new Date(testimonial.created_at || Date.now()).toLocaleDateString('es-CL', { month: 'short', year: 'numeric' })}
                </time>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            href="/mi-cuenta" 
            className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-violet-500 hover:text-white transition-all shadow-xl shadow-white/5"
          >
            Deja tu testimonio ahora
          </Link>
        </div>
      </div>
    </section>
  );
}


