"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Zap, Link as LinkIcon, CheckCircle2 } from 'lucide-react';

export default function SuccessCases() {
  const cases = [
    {
      title: "SpinMedical",
      industry: "Insumos Médicos",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fspinmedical.cl%2F?w=1200",
      link: "https://spinmedical.cl/",
      tags: ["Migración", "B2B / B2C"],
      challenges: [
        "Velocidad de carga deficiente en WooCommerce",
        "Experiencia de usuario confusa",
        "Problemas de integración logística"
      ],
      solutions: [
        "Migración completa a Shopify",
        "Rediseño enfocado en CRO",
        "Integración automatizada"
      ],
      results: [
        { label: "Conversión", value: "+35%", icon: <TrendingUp className="w-4 h-4" /> },
        { label: "Velocidad", value: "+42%", icon: <Zap className="w-4 h-4" /> },
        { label: "Operativa", value: "100%", icon: <CheckCircle2 className="w-4 h-4" /> }
      ]
    },
    {
      title: "Recovery Zone",
      industry: "Deportes & Bienestar",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Frecoveryzone.cl%2F?w=1200",
      link: "https://recoveryzone.cl/",
      tags: ["Shopify Plus", "Optimización"],
      challenges: [
        "Checkout abandonado frecuente",
        "Falta de confianza visual",
        "Dificultad para escalar campañas"
      ],
      solutions: [
        "Rediseño de ficha de producto",
        "Implementación de trust badges",
        "Setup completo de Analytics 4"
      ],
      results: [
        { label: "Ventas", value: "+50%", icon: <TrendingUp className="w-4 h-4" /> },
        { label: "Rebote", value: "-20%", icon: <Zap className="w-4 h-4" /> },
        { label: "Leads", value: "+150", icon: <CheckCircle2 className="w-4 h-4" /> }
      ]
    },
    {
      title: "Kinelawen",
      industry: "Salud Natural",
      image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.kinelawen.com%2F?w=1200",
      link: "https://www.kinelawen.com/",
      tags: ["Branding", "E-commerce"],
      challenges: [
        "Marca con poca presencia digital",
        "Procesos de pago manuales",
        "Catálogo desordenado"
      ],
      solutions: [
        "Diseño Shopify a medida",
        "Pasarela de pago automatizada",
        "Estructuración SEO de categorías"
      ],
      results: [
        { label: "Tráfico Org.", value: "+200%", icon: <TrendingUp className="w-4 h-4" /> },
        { label: "Conversión", value: "3.2%", icon: <Zap className="w-4 h-4" /> },
        { label: "Retención", value: "+40%", icon: <CheckCircle2 className="w-4 h-4" /> }
      ]
    }
  ];

  return (
    <section className="py-32 bg-zinc-50 relative overflow-hidden border-t border-zinc-200">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/5 blur-[100px] rounded-full pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-emerald-100/50 border border-emerald-200 rounded-full text-[10px] font-black tracking-widest text-emerald-700 uppercase">
            Casos de Éxito Reales
          </div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase mb-6 text-zinc-950">
            No somos "otra agencia". <br/>Somos tu <span className="text-emerald-600">Growth Partner</span>.
          </h2>
          <p className="text-lg text-zinc-600 font-light leading-relaxed">
            Nuestro trabajo no termina cuando entregamos la tienda. Termina cuando tus métricas comerciales y operativas mejoran. Aquí tienes algunos ejemplos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((project, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] p-8 border border-zinc-200 hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 group flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-black text-zinc-900 mb-1">{project.title}</h3>
                  <p className="text-sm text-zinc-500 font-medium">{project.industry}</p>
                </div>
                <div className="flex flex-col gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-black uppercase tracking-wider bg-zinc-100 text-zinc-600 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Métricas Hero */}
              <div className="grid grid-cols-3 gap-2 mb-8 p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                {project.results.map((res, i) => (
                  <div key={i} className="text-center">
                    <div className="flex justify-center text-emerald-500 mb-1">{res.icon}</div>
                    <div className="text-lg font-black text-zinc-900">{res.value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{res.label}</div>
                  </div>
                ))}
              </div>

              {/* El Reto / La Solución */}
              <div className="flex-grow space-y-6 mb-8">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" /> El Reto
                  </h4>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, i) => (
                      <li key={i} className="text-sm text-zinc-600 font-light flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">⨯</span> {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-3 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> La Solución
                  </h4>
                  <ul className="space-y-2">
                    {project.solutions.map((sol, i) => (
                      <li key={i} className="text-sm text-zinc-600 font-light flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> {sol}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 w-full py-4 bg-zinc-900 text-white text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-600 transition-colors"
              >
                Ver Tienda en Vivo <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
