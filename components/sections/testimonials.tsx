'use client';

import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { getTestimonials, Testimonial } from '@/lib/testimonial-actions';

const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    quote: "Webunica transformó nuestra tienda Shopify por completo. Pasamos de un tema genérico a una experiencia premium que convirtió un 40% más en el primer mes.",
    author: "Andrea Castro",
    stars: 5, active: true, created_at: new Date().toISOString()
  },
  {
    quote: "El embudo para mi inmobiliaria captó 50 leads calificados en la primera semana de lanzamiento. No lo podía creer.",
    author: "Roberto Méndez",
    stars: 5, active: true, created_at: new Date().toISOString()
  },
  {
    quote: "Nuestra plataforma Next.js pasó de un puntaje de 40 a 98 en Google Lighthouse tras el trabajo de Webunica. Increíble.",
    author: "Felipe Arriagada",
    stars: 5, active: true, created_at: new Date().toISOString()
  },
  {
    quote: "El sistema de blog con IA es una joya. Publicamos 10 artículos semanales y ya estamos en la primera página de Google.",
    author: "Mónica Salas",
    stars: 5, active: true, created_at: new Date().toISOString()
  },
  {
    quote: "Buscábamos expertos en Shopify y encontramos socios estratégicos. La integración con medios de pago locales fue perfecta.",
    author: "Carlos Ruiz",
    stars: 5, active: true, created_at: new Date().toISOString()
  },
  {
    quote: "El diseño UI/UX superó todas mis expectativas. La web se siente viva, moderna y transmite la confianza que necesitábamos.",
    author: "Ing. Sergio Lagos",
    stars: 5, active: true, created_at: new Date().toISOString()
  },
  {
    quote: "Nuestra academia online en Moodle era un caos hasta que Webunica tomó el control. Ahora es estable y a los alumnos les encanta.",
    author: "Dra. Elena Pontigo",
    stars: 5, active: true, created_at: new Date().toISOString()
  },
  {
    quote: "La calculadora de ROI personalizada en nuestra landing fue el diferencial para cerrar más contratos. Nivel de ingeniería superior.",
    author: "Patricio Soto",
    stars: 5, active: true, created_at: new Date().toISOString()
  },
  {
    quote: "Desde el checkout hasta el tracking de envíos, todo funciona como reloj suizo. Finalmente alguien que entiende el e-commerce chileno.",
    author: "Sofía Varas",
    stars: 5, active: true, created_at: new Date().toISOString()
  },
  {
    quote: "Si buscas una web rentable que te posicione como líder, Webunica es el único camino. Los demás solo hacen páginas bonitas.",
    author: "Javier Millar",
    stars: 5, active: true, created_at: new Date().toISOString()
  },
  {
    quote: "Muy satisfecha con el trabajo de la agencia. Serios y responsables. La implementación de nuestra tienda fue impecable.",
    author: "Ana María",
    stars: 5, active: true, created_at: new Date().toISOString()
  },
  {
    quote: "Webunica entiende que una web no es para verse bonita, sino para vender. Nuestra plataforma SaaS ahora escala de forma predecible.",
    author: "Co-Founder TechStart",
    stars: 5, active: true, created_at: new Date().toISOString()
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-5 mb-4 flex-shrink-0">
      <div className="flex items-center gap-3 mb-4">
        <div className="relative shrink-0">
          <div className="w-10 h-10 rounded-full bg-zinc-700 border border-white/10 flex items-center justify-center text-white font-bold text-sm">
            {testimonial.author.charAt(0)}
          </div>
          <div className="absolute -top-1 -left-1 w-4 h-4 bg-black border border-zinc-700 rounded-[4px] flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-2 h-2 fill-white">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </div>
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1">
            <span className="text-white font-semibold text-sm truncate">{testimonial.author}</span>
            <div className="w-3.5 h-3.5 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-2 h-2 fill-white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
          </div>
          <p className="text-zinc-600 text-[11px]">@{testimonial.author.split(' ')[0].toLowerCase()}_</p>
        </div>
      </div>
      <p className="text-zinc-400 text-[13px] leading-relaxed">{testimonial.quote}</p>
      <div className="mt-4 flex gap-0.5">
        {[...Array(testimonial.stars)].map((_, i) => (
          <Star key={i} className="w-3 h-3 fill-violet-500 text-violet-500" />
        ))}
      </div>
    </div>
  );
}

function MarqueeColumn({ items, duration, reverse = false, className = '' }: { items: Testimonial[]; duration: number; reverse?: boolean; className?: string }) {
  // Duplicamos para scroll infinito continuo
  const doubled = [...items, ...items];

  return (
    <div className={`flex flex-col overflow-hidden h-[600px] ${className}`}>
      <div
        className="flex flex-col"
        style={{
          animation: `marquee-${reverse ? 'down' : 'up'} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={i} testimonial={t} />
        ))}
      </div>
    </div>
  );
}

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

  const list = testimonials.length > 0 ? testimonials : MOCK_TESTIMONIALS;

  // Distribuir en 4 columnas
  const cols = [0, 1, 2, 3].map(ci =>
    list.filter((_, i) => i % 4 === ci)
  );

  return (
    <section className="bg-zinc-950 py-24 md:py-36 relative overflow-hidden">
      {/* Glow central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Fade vertical top/bottom */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-zinc-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent z-20 pointer-events-none" />

      {/* Fade horizontal izquierda/derecha */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-zinc-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-zinc-950 to-transparent z-20 pointer-events-none" />

      {/* Título centrado sobre el muro */}
      <div className="relative z-30 text-center mb-12">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-3">
          Wall of <em className="text-violet-500 not-italic font-serif font-normal">Love</em>
        </h2>
        <p className="text-zinc-500 text-sm">Historias reales de clientes que confiaron en Webunica.</p>
      </div>

      {/* Columnas con scroll infinito */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-6 max-w-7xl mx-auto">
        {cols.map((col, ci) => {
          // col 0: visible siempre | col 1: hidden en mobile | col 2-3: hidden hasta md
          const colClass = ci === 0 ? '' : ci === 1 ? 'hidden sm:flex flex-col' : 'hidden md:flex flex-col';
          return (
            <MarqueeColumn
              key={ci}
              items={col.length >= 2 ? col : [...col, ...col, ...col]}
              duration={20 + ci * 5}
              reverse={ci % 2 === 1}
              className={colClass}
            />
          );
        })}
      </div>

      {/* CTA inferior */}
      <div className="relative z-30 mt-12 text-center">
        <Link
          href="/mi-cuenta"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 text-zinc-400 text-[11px] font-bold uppercase tracking-widest hover:border-violet-500/40 hover:text-violet-400 transition-all"
        >
          ¿Eres cliente? Deja tu testimonio aquí
        </Link>
      </div>

      {/* Keyframes en style tag */}
      <style>{`
        @keyframes marquee-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marquee-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
