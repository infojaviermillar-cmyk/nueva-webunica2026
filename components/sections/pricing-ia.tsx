"use client";

import { CheckCircle2, ArrowRight } from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';

const plans = [
  {
    name: "Implementación IA Conversacional",
    subtitle: "Implementación única",
    price: "$590.000",
    period: "+ IVA",
    desc: "El setup profesional de tu asistente virtual inteligente.",
    features: [
      "Diagnóstico del negocio",
      "Configuración completa de Databot",
      "Entrenamiento de la IA con la información de la empresa",
      "Diseño de flujos conversacionales",
      "Integración con el sitio web",
      "Capacitación del equipo",
      "Puesta en marcha",
      "Soporte durante los primeros 30 días"
    ],
    cta: "Comenzar Implementación",
    popular: false
  },
  {
    name: "Soporte Webunica",
    subtitle: "Opcional",
    price: "$120.000",
    period: "+ IVA / mes",
    desc: "Asegura el máximo rendimiento de tu IA en el tiempo.",
    features: [
      "Optimización continua de la IA",
      "Ajustes de respuestas",
      "Incorporación de nueva información",
      "Revisión de conversaciones",
      "Reunión mensual",
      "Soporte prioritario"
    ],
    cta: "Añadir Soporte",
    popular: true // Marcado visualmente como destacado / recomendado
  },
  {
    name: "Licencia Plataforma",
    subtitle: "Databot Growth",
    price: "USD 149",
    period: "+ IVA / mes",
    desc: "La licencia es contratada directamente por el cliente.",
    features: [
      "500 conversaciones mensuales",
      "Chat Web",
      "IA Generativa",
      "1 usuario",
      "Base de conocimiento",
      "Historial de conversaciones",
      "Actualizaciones de la plataforma"
    ],
    cta: "Contratar Licencia",
    popular: false,
    note: "La licencia es contratada directamente por el cliente."
  }
];

export default function PricingIA() {
  return (
    <section className="py-24 bg-zinc-50 relative overflow-hidden" id="planes-ia">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 uppercase tracking-tight text-zinc-950">
            Inversión y <span className="text-violet-600">Planes</span>
          </h2>
          <p className="text-lg lg:text-xl text-zinc-600 max-w-3xl mx-auto">
            Este modelo es simple y transparente: tú decides la implementación, la licencia de la plataforma y si quieres acompañamiento mensual continuo.
          </p>
        </div>
        
        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
          {plans.map((p, i) => (
            <div key={i} className={`relative p-10 rounded-3xl border transition-all duration-300 flex flex-col ${
              p.popular 
              ? 'bg-zinc-950 text-white border-zinc-800 lg:-translate-y-4 shadow-2xl z-20' 
              : 'bg-white text-zinc-950 border-zinc-200 shadow-xl shadow-zinc-200/50'
            }`}>
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-emerald-500 text-white text-[11px] font-black uppercase rounded-full tracking-wider shadow-lg">
                  Recomendado
                </div>
              )}
              
              <div className="mb-8">
                <span className={`block text-xs font-bold uppercase tracking-widest mb-2 ${p.popular ? 'text-violet-400' : 'text-violet-600'}`}>
                  {p.subtitle}
                </span>
                <h3 className="text-2xl font-black leading-tight tracking-tight mb-6">
                  {p.name}
                </h3>
                <div className="flex flex-col items-start gap-1">
                  <span className={`text-4xl font-black ${p.popular ? 'text-white' : 'text-zinc-900'}`}>
                    {p.price}
                  </span>
                  <span className={`text-sm font-bold uppercase tracking-wider ${p.popular ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {p.period}
                  </span>
                </div>
                {p.note && (
                  <p className="text-xs italic text-zinc-500 mt-2">*{p.note}</p>
                )}
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[13px] font-medium leading-snug">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${p.popular ? 'text-emerald-400' : 'text-emerald-500'}`} />
                    <span className={p.popular ? 'text-zinc-300' : 'text-zinc-600'}>{f}</span>
                  </li>
                ))}
              </ul>
              
              <LeadButton className={`w-full py-5 rounded-2xl font-black uppercase tracking-wider text-[12px] shadow-lg transition-all flex items-center justify-center gap-2 group ${
                p.popular 
                ? 'bg-violet-600 text-white hover:bg-violet-500' 
                : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
              }`}>
                {p.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </LeadButton>
            </div>
          ))}
        </div>

        {/* Tabla Resumen */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-zinc-200 shadow-xl overflow-hidden">
          <div className="bg-zinc-950 p-6 text-center">
            <h3 className="text-white text-xl font-black uppercase tracking-widest">Resumen de Inversión</h3>
          </div>
          <div className="p-8">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-100 gap-2">
                <span className="text-zinc-600 font-bold">Implementación (única vez)</span>
                <span className="text-zinc-950 font-black text-lg">$590.000 <span className="text-sm text-zinc-500 font-normal">+ IVA</span></span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-100 gap-2">
                <span className="text-zinc-600 font-bold">Licencia Databot Growth</span>
                <span className="text-zinc-950 font-black text-lg">USD 149 <span className="text-sm text-zinc-500 font-normal">+ IVA / mes</span></span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-zinc-600 font-bold">Soporte Webunica (opcional)</span>
                <span className="text-zinc-950 font-black text-lg text-violet-600">$120.000 <span className="text-sm text-zinc-500 font-normal">+ IVA / mes</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA General */}
        <div className="mt-20 text-center">
          <LeadButton className="bg-violet-600 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-violet-700 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 inline-flex items-center gap-3">
            Quiero implementar mi IA conversacional <ArrowRight className="w-5 h-5" />
          </LeadButton>
        </div>

      </div>
    </section>
  );
}
