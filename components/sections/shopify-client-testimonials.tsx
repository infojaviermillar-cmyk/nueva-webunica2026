'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';

type Testimonial = {
  id: string;
  store: string;
  url: string;
  category: string;
  quote: string;
  author: string;
  role: string;
  initials: string;
  color: string;
};

const clientTestimonials: Testimonial[] = [
  {
    id: 'vicca',
    store: 'Vicca.cl',
    url: 'vicca.cl',
    category: 'Moda & Ergonomía',
    quote: 'El diseño de nuestra tienda Shopify y la integración del carrito con facturación automática transformaron la experiencia de nuestros clientes. Webunica logró reflejar la calidad de nuestra marca desde el primer día.',
    author: 'Equipo Vicca',
    role: 'E-commerce & Branding — Vicca.cl',
    initials: 'VC',
    color: 'bg-[#3c096c]'
  },
  {
    id: 'altavista',
    store: 'Altavista Chile',
    url: 'altavistachile.cl',
    category: 'Industrial & Outdoor',
    quote: 'Migramos a Shopify buscando estabilidad y mejor rendimiento. Webunica sincronizó nuestro catálogo técnico y los métodos de pago en Chile sin perder tráfico ni posicionamiento SEO.',
    author: 'Gerencia Comercial',
    role: 'Operaciones — Altavista Chile',
    initials: 'AV',
    color: 'bg-violet-700'
  },
  {
    id: 'bodymuscle',
    store: 'Body Muscle',
    url: 'bodymuscle.cl',
    category: 'Suplementos & Fitness',
    quote: 'Necesitábamos una tienda ultra rápida y adaptada 100% a celulares para nuestras campañas masivas. Webunica dejó el checkout impecable con Webpay, Mercado Pago y cálculo de envíos.',
    author: 'Equipo de Ventas',
    role: 'Marketing — Body Muscle Chile',
    initials: 'BM',
    color: 'bg-indigo-700'
  },
  {
    id: 'chiletronics',
    store: 'Chiletronics',
    url: 'chiletronics.cl',
    category: 'Retail Electrónica',
    quote: 'Conectar la emisión automática de boletas SII y las tarifas de envío por regiones nos ahorró horas de trabajo operativo diario. Excelente soporte y atención post lanzamiento.',
    author: 'Área Operativa',
    role: 'Logística — Chiletronics',
    initials: 'CT',
    color: 'bg-purple-800'
  },
  {
    id: 'terraandes',
    store: 'Terra Andes',
    url: 'terraandesplus.com',
    category: 'Alimentos & Exportación',
    quote: 'Buscábamos una presencia visual de alto estándar y un e-commerce corporativo limpio. El resultado en Shopify cumplió 100% con los plazos y objetivos de nuestra empresa.',
    author: 'Dirección Ejecutiva',
    role: 'Comercial — Terra Andes Plus',
    initials: 'TA',
    color: 'bg-emerald-700'
  }
];

export default function ShopifyClientTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const current = clientTestimonials[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + clientTestimonials.length) % clientTestimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % clientTestimonials.length);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Active Featured Testimonial Card */}
      <div className="bg-gradient-to-br from-violet-50 via-purple-50/50 to-white border border-violet-200/90 rounded-[3rem] p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-xl transition-all duration-300">
        
        <Quote className="absolute top-6 right-8 w-24 h-24 text-violet-200/40 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
          
          {/* Avatar / Store Initials */}
          <div className="flex flex-col items-center shrink-0">
            <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-3xl ${current.color} text-white font-mono font-black text-2xl sm:text-3xl flex items-center justify-center shadow-xl shadow-violet-600/20 border-2 border-white`}>
              {current.initials}
            </div>
            
            <span className="mt-3 text-xs font-mono font-bold uppercase tracking-wider text-violet-700 bg-violet-100/90 px-3 py-1 rounded-full">
              {current.category}
            </span>
          </div>

          {/* Quote Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-sm font-mono font-bold text-zinc-600 ml-2">5.0 / 5.0</span>
            </div>

            <blockquote className="text-xl sm:text-2xl lg:text-3xl text-zinc-900 font-medium italic leading-relaxed mb-6">
              "{current.quote}"
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-violet-100">
              <div>
                <strong className="text-lg font-black text-zinc-950 uppercase tracking-tight block">
                  {current.author}
                </strong>
                <span className="text-sm text-zinc-600 font-medium">
                  {current.role}
                </span>
              </div>

              <a
                href={`https://${current.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white border border-zinc-200 hover:border-violet-400 text-zinc-900 font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow-md"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Ver {current.store} en vivo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Carousel Slider Controls */}
        <div className="mt-10 pt-6 border-t border-violet-100/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Dot Indicators */}
          <div className="flex items-center gap-2">
            {clientTestimonials.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all rounded-full cursor-pointer ${
                  idx === activeIndex
                    ? 'w-8 h-2.5 bg-violet-600'
                    : 'w-2.5 h-2.5 bg-zinc-300 hover:bg-zinc-400'
                }`}
                title={`Testimonio ${item.store}`}
              />
            ))}
          </div>

          {/* Prev / Next Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-2xl bg-white border border-zinc-200 hover:bg-zinc-900 hover:text-white text-zinc-800 transition-all shadow-sm cursor-pointer"
              title="Testimonio anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-2xl bg-white border border-zinc-200 hover:bg-zinc-900 hover:text-white text-zinc-800 transition-all shadow-sm cursor-pointer"
              title="Testimonio siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
