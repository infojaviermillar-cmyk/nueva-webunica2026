"use client";

import { CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';

const plans = [
  {
    name: "Landing Express SEO",
    price: "$340.000",
    desc: "Ideal para campañas específicas o servicios únicos que necesitan conversión rápida y visibilidad.",
    features: [
      "Diseño One Page de alto impacto",
      "Google Analytics 4 & Meta Pixel",
      "Optimización SEO avanzada",
      "Contenido optimizado con IA",
      "4 Imágenes Full HD con IA",
      "Entrega en 5 días hábiles"
    ],
    cta: "Empezar Landing",
    popular: false
  },
  {
    name: "Web Corporativa SEO",
    price: "$360.000",
    desc: "La mejor opción para PYMES que buscan profesionalizar su imagen completa con SEO técnico.",
    features: [
      "Hasta 5 secciones internas",
      "Arquitectura de conversión PRO",
      "GA4 & Meta Pixel Profesional",
      "8 Imágenes Full HD con IA",
      "Diseño 100% Mobile-First",
      "Entrega en 10-15 días"
    ],
    cta: "Elegir Corporativa",
    popular: true
  },
  {
    name: "Pyme WordPress Pro SEO",
    price: "$580.000",
    desc: "Sitio web avanzado con gestión de contenido y estrategia SEO Full de dominio orgánico.",
    features: [
      "WordPress autogestionable",
      "Estrategia SEO Full (Silos)",
      "GA4, Meta Pixel & API Conversiones",
      "15 Imágenes Full HD con IA",
      "Capacitación de uso avanzada",
      "Soporte técnico prioritario"
    ],
    cta: "Elegir WordPress Pro",
    popular: false
  }
];

export default function PricingPlans() {
  return (
    <section className="py-32 bg-zinc-50 relative overflow-hidden" id="planes">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-100/50 blur-[120px] rounded-full -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white border border-zinc-200 rounded-full">
             <Zap className="w-4 h-4 text-violet-600" />
             <span className="text-[10px] font-black tracking-widest text-zinc-500 uppercase">Precios Transparentes 2026</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black mb-8 uppercase tracking-tighter text-zinc-950">
            Planes de <span className="text-violet-600 italic font-serif lowercase font-light">Ingeniería</span> Web
          </h2>
          <p className="text-xl text-zinc-500 font-light max-w-2xl mx-auto mb-4">
            Inversiones diseñadas para escalar tu facturación, no solo para tener un sitio bonito.
          </p>
          <div className="flex items-center justify-center gap-4 text-[10px] font-black text-violet-600 uppercase tracking-widest">
             <span>Valores + IVA</span>
             <span className="w-1 h-1 bg-violet-300 rounded-full"></span>
             <span>6 cuotas sin interés</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, i) => (
            <div key={i} className={`relative p-12 rounded-[4rem] border transition-all duration-500 flex flex-col ${
              p.popular 
              ? 'bg-zinc-950 text-white border-zinc-800 lg:scale-105 shadow-3xl z-20' 
              : 'bg-white text-zinc-950 border-zinc-100 hover:border-violet-200 shadow-xl shadow-zinc-200/50'
            }`}>
              {p.popular && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-violet-600 text-[10px] font-black uppercase rounded-full tracking-[0.2em] shadow-lg">
                  El más elegido
                </span>
              )}
              
              <div className="mb-10">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{p.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl font-black ${p.popular ? 'text-violet-400' : 'text-violet-600'}`}>{p.price}</span>
                  <span className={`text-xs font-bold uppercase tracking-widest opacity-50`}>Desde</span>
                </div>
              </div>

              <p className={`text-sm mb-12 font-medium leading-relaxed ${p.popular ? 'text-zinc-400' : 'text-zinc-500'}`}>
                {p.desc}
              </p>

              <ul className="space-y-5 mb-14 flex-grow">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-[11px] font-bold uppercase tracking-wide leading-tight">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${p.popular ? 'text-violet-400' : 'text-emerald-500'}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              
              <LeadButton className={`w-full py-7 rounded-[2rem] font-black uppercase tracking-widest text-[11px] shadow-2xl transition-all group flex items-center justify-center gap-3 ${
                p.popular 
                ? 'bg-white text-zinc-950 hover:bg-violet-50' 
                : 'bg-zinc-950 text-white hover:bg-violet-600 shadow-zinc-900/20'
              }`}>
                {p.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </LeadButton>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <p className="text-zinc-400 text-sm font-light">
              ¿Necesitas algo a medida o un eCommerce robusto? 
              <button className="ml-2 text-violet-600 font-bold hover:underline">Hablemos de tu proyecto SaaS o Shopify</button>
           </p>
        </div>
      </div>
    </section>
  );
}

