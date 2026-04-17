'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const TESTIMONIALS = [
  {
    quote: "Partnering with Webunica has dramatically increased our sales conversions. Their expert understanding of user paths and clear insight into our customers has completely transformed our online performance.",
    author: "SARAH - CEO FASHION BOUTIQUE",
    stars: 5
  },
  {
    quote: "La velocidad de carga de nuestro nuevo embudo es increíble. Pasamos de perder leads por lentitud a captar el triple de contactos en menos de un mes. Un cambio radical para nuestra agencia inmobiliaria.",
    author: "MARCOS - DIRECTOR INMOBILIARIA PREMIUM",
    stars: 5
  },
  {
    quote: "Diseño, velocidad y estrategia. Webunica entiende que una web no es para verse bonita, sino para vender. Nuestra plataforma SaaS ahora escala de forma predecible gracias a su arquitectura.",
    author: "JAVIER - CO-FOUNDER TECH STARTUP",
    stars: 5
  }
];

export default function TestimonialsSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  return (
    <section className="bg-zinc-950 py-32 md:py-48 overflow-hidden rounded-[4rem] mx-4 my-8">
      <div className="max-w-7xl mx-auto px-6" ref={emblaRef}>
        <div className="flex">
          {TESTIMONIALS.map((testimonial, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 flex flex-col items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center text-center"
              >
                {/* 5 Stars */}
                <div className="flex gap-1 mb-10">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-300 text-orange-300" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="max-w-4xl mx-auto mb-12">
                  <p className="text-3xl md:text-5xl lg:text-6xl text-white font-serif italic leading-[1.2] tracking-tight">
                    "{testimonial.quote}"
                  </p>
                </blockquote>

                {/* Author */}
                <cite className="not-italic">
                  <span className="text-zinc-500 text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">
                    ~ {testimonial.author} ~
                  </span>
                </cite>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Indicators (Dots) */}
      <div className="flex justify-center gap-2 mt-16">
        {TESTIMONIALS.map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
        ))}
      </div>
    </section>
  );
}
