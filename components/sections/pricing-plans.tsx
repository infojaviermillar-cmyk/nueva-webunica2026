"use client";

import { CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';
import ScrollRevealText from '@/components/ui/scroll-reveal-text';

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
    name: "Sitio PyME / Catálogo",
    price: "$520.000",
    desc: "Para empresas que necesitan presencia sólida, catálogo de productos y posicionamiento local.",
    features: [
      "Hasta 5 secciones personalizadas",
      "Estructura SEO de alto nivel",
      "Integración WhatsApp & Formularios",
      "Velocidad de carga Turbo",
      "Capacitación autoadministrable",
      "Entrega en 10 días hábiles"
    ],
    cta: "Elegir Sitio PyME",
    popular: true
  },
  {
    name: "Shopify / WooCommerce",
    price: "$850.000",
    desc: "Plataforma e-Commerce profesional lista para vender con medios de pago locales.",
    features: [
      "Configuración de Tienda completa",
      "Webpay, MercadoPago & Flow",
      "Integración Envíos (Starken/Blue)",
      "Optimización de Conversión CRO",
      "Diseño de banners e identidad",
      "Soporte post-lanzamiento"
    ],
    cta: "Crear mi Tienda",
    popular: false
  }
];

export default function PricingPlans() {
  return (
    <section className="py-32 bg-zinc-50 relative overflow-hidden" id="planes">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-100/40 blur-[120px] rounded-full -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white border border-zinc-200/80 rounded-full shadow-xs">
             <Zap className="w-4 h-4 text-[#7850FA]" />
             <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-600 uppercase">Precios Transparentes 2026</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tighter text-zinc-950 font-heading">
            Planes de <span className="text-[#7850FA]">Ingeniería Web</span>
          </h2>
          
          <ScrollRevealText 
            text="Inversiones diseñadas para escalar tu facturación, no solo para tener un sitio bonito."
            className="text-lg sm:text-xl md:text-2xl text-zinc-800 font-light leading-relaxed max-w-3xl mx-auto mb-6"
          />

          <div className="flex items-center justify-center gap-4 text-[11px] font-mono font-bold text-[#7850FA] uppercase tracking-widest">
             <span>Valores + IVA</span>
             <span className="w-1.5 h-1.5 bg-purple-300 rounded-full"></span>
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

