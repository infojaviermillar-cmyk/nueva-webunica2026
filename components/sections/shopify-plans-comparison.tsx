"use client";

import React, { useState } from 'react';
import { Check, Info, Rocket, TrendingUp, Zap, Minus } from 'lucide-react';
import FeatureExplanationModal from '@/components/modals/feature-explanation-modal';
import LeadButton from '@/components/ui/lead-button';

interface FeatureInfo {
  name: string;
  description: string;
}

interface PlanFeature {
  feature: FeatureInfo;
  prende: string | boolean;
  full: string | boolean;
  pro: string | boolean;
}

interface PlanCategory {
  category: string;
  features: PlanFeature[];
}

const COMPARISON_DATA: PlanCategory[] = [
  {
    category: "Configuración y Diseño",
    features: [
      {
        feature: { name: "Tema y Diseño", description: "Utilizamos plantillas premium de Shopify, optimizadas para conversión y velocidad. En planes superiores, personalizamos secciones a medida de la marca." },
        prende: "Plantilla Premium",
        full: "Secciones Personalizadas",
        pro: "Diseño UX/UI a Medida"
      },
      {
        feature: { name: "Carga de Productos", description: "Cantidad de productos que nuestro equipo configurará inicialmente. Incluye carga de imágenes, descripciones, precios y variantes base." },
        prende: "Hasta 70",
        full: "Hasta 120",
        pro: "Hasta 300+"
      },
      {
        feature: { name: "Diseño Mobile-First", description: "El 80% de las compras en Chile se hacen desde el celular. Optimizamos la tienda priorizando la experiencia móvil." },
        prende: true,
        full: true,
        pro: true
      },
      {
        feature: { name: "Páginas Informativas", description: "Creación de páginas esenciales como Quienes Somos, Contacto, Políticas de Devolución y Términos de Servicio." },
        prende: "Básicas",
        full: "Completas",
        pro: "Ilimitadas"
      }
    ]
  },
  {
    category: "Integraciones y Funcionalidad",
    features: [
      {
        feature: { name: "Medios de Pago", description: "Configuración de pasarelas de pago para recibir pagos con Tarjetas de Crédito, Débito y Transferencias en Chile." },
        prende: "Webpay Plus / Flow",
        full: "Múltiples (Webpay, Flow, MercadoPago)",
        pro: "Múltiples + B2B"
      },
      {
        feature: { name: "Logística y Envíos", description: "Integración con empresas de transporte chilenas para calcular costos en tiempo real o definir tarifas planas." },
        prende: "Tarifas Planas",
        full: "Integración (Starken/Chilexpress)",
        pro: "Integración Avanzada (Envíame/Shipit)"
      },
      {
        feature: { name: "Integración ERP / Boletas", description: "Conexión con sistemas de facturación y control de inventario locales para emitir boletas electrónicas automáticamente." },
        prende: false,
        full: false,
        pro: "Bsale / Obuma / Defontana"
      },
      {
        feature: { name: "Sistema de Reviews", description: "Implementación de aplicaciones para recolectar y mostrar opiniones de clientes, generando confianza." },
        prende: false,
        full: true,
        pro: "Avanzado (Loox/Judge.me)"
      }
    ]
  },
  {
    category: "Marketing y Análisis",
    features: [
      {
        feature: { name: "SEO Técnico", description: "Optimización de títulos, meta descripciones, estructura de URLs y etiquetas ALT en imágenes para mejorar el posicionamiento en Google." },
        prende: "Básico",
        full: "Avanzado",
        pro: "Estrategia Completa"
      },
      {
        feature: { name: "Analítica Web", description: "Instalación de Google Analytics 4 y configuración de píxeles para medir el rendimiento de la tienda." },
        prende: "Básico",
        full: "Google Analytics 4",
        pro: "GA4 + Meta Pixel API"
      },
      {
        feature: { name: "Email Marketing", description: "Configuración de flujos automáticos de correos (ej. Carrito Abandonado, Bienvenida) para recuperar y aumentar ventas." },
        prende: false,
        full: false,
        pro: "Klaviyo (Flujos Avanzados)"
      }
    ]
  },
  {
    category: "Soporte y Entrega",
    features: [
      {
        feature: { name: "Tiempo de Entrega", description: "Tiempo estimado para tener tu tienda lista y operando, desde la entrega de la información inicial." },
        prende: "4 Semanas",
        full: "6 Semanas",
        pro: "8-10 Semanas"
      },
      {
        feature: { name: "Capacitación", description: "Entrenamiento para que tú y tu equipo puedan administrar la tienda, procesar pedidos y actualizar inventario." },
        prende: "Video Tutorial",
        full: "Sesión 1 a 1",
        pro: "Consultoría Estratégica"
      },
      {
        feature: { name: "Soporte Post-Lanzamiento", description: "Atención prioritaria para resolver dudas técnicas y asegurar que la tienda funcione perfectamente tras salir a vivo." },
        prende: "1 Mes",
        full: "3 Meses",
        pro: "6 Meses"
      }
    ]
  }
];

export default function ShopifyPlansComparison() {
  const [activeFeature, setActiveFeature] = useState<FeatureInfo | null>(null);

  const renderValue = (val: string | boolean, highlight: boolean = false) => {
    if (typeof val === 'boolean') {
      return val ? (
        <Check className={`w-5 h-5 mx-auto ${highlight ? 'text-violet-500' : 'text-zinc-400'}`} />
      ) : (
        <Minus className="w-5 h-5 mx-auto text-zinc-200" />
      );
    }
    return <span className={`text-sm ${highlight ? 'font-black text-violet-700' : 'font-medium text-zinc-600'}`}>{val}</span>;
  };

  return (
    <div className="w-full">
      {/* Table Container */}
      <div className="bg-white rounded-[2rem] lg:rounded-[3rem] border border-zinc-100 shadow-xl overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead>
              <tr>
                <th className="p-8 lg:p-10 w-1/3 bg-zinc-50 border-b border-zinc-100">
                  <h3 className="text-xl font-black text-zinc-900 tracking-tighter uppercase mb-2">Compara los Planes</h3>
                  <p className="text-xs text-zinc-500 font-light">Haz clic en cada característica para ver el detalle de lo que incluye.</p>
                </th>
                
                {/* PRENDE */}
                <th className="p-8 lg:p-10 w-2/9 text-center border-b border-zinc-100 border-l border-zinc-50">
                  <div className="flex justify-center mb-4"><TrendingUp className="w-8 h-8 text-emerald-500" /></div>
                  <h4 className="text-2xl font-black text-zinc-900 uppercase tracking-tight mb-1">Prende</h4>
                  <div className="text-xl font-black text-zinc-900 mb-6">$580.000 <span className="text-[10px] text-zinc-400 uppercase font-bold">+ IVA</span></div>
                  <LeadButton className="w-full py-4 text-[10px] bg-zinc-950 text-white rounded-xl uppercase font-black tracking-widest hover:bg-zinc-800">
                    Cotizar
                  </LeadButton>
                </th>

                {/* FULL (Recommended) */}
                <th className="p-8 lg:p-10 w-2/9 text-center border-b border-zinc-100 border-l border-zinc-50 bg-violet-50/30 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-[9px] font-black px-4 py-1.5 rounded-b-lg uppercase tracking-widest">Recomendado</div>
                  <div className="flex justify-center mb-4 mt-2"><Zap className="w-8 h-8 text-violet-500" /></div>
                  <h4 className="text-2xl font-black text-zinc-900 uppercase tracking-tight mb-1">Full</h4>
                  <div className="text-xl font-black text-violet-700 mb-6">$780.000 <span className="text-[10px] text-violet-400/80 uppercase font-bold">+ IVA</span></div>
                  <LeadButton className="w-full py-4 text-[10px] bg-violet-600 text-white rounded-xl uppercase font-black tracking-widest hover:bg-violet-700 shadow-lg shadow-violet-600/20">
                    Cotizar Full
                  </LeadButton>
                </th>

                {/* PRO */}
                <th className="p-8 lg:p-10 w-2/9 text-center border-b border-zinc-100 border-l border-zinc-50">
                  <div className="flex justify-center mb-4"><Rocket className="w-8 h-8 text-blue-500" /></div>
                  <h4 className="text-2xl font-black text-zinc-900 uppercase tracking-tight mb-1">Pro</h4>
                  <div className="text-xl font-black text-zinc-900 mb-6">$1.200.000 <span className="text-[10px] text-zinc-400 uppercase font-bold">+ IVA</span></div>
                  <LeadButton className="w-full py-4 text-[10px] bg-zinc-950 text-white rounded-xl uppercase font-black tracking-widest hover:bg-zinc-800">
                    Hablar con Experto
                  </LeadButton>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((section, sIdx) => (
                <React.Fragment key={sIdx}>
                  {/* Category Header */}
                  <tr>
                    <td colSpan={4} className="bg-zinc-50 py-4 px-8 text-xs font-black uppercase tracking-[0.2em] text-zinc-400">
                      {section.category}
                    </td>
                  </tr>
                  
                  {/* Features */}
                  {section.features.map((item, iIdx) => (
                    <tr key={iIdx} className="group hover:bg-zinc-50/50 transition-colors">
                      <td className="p-4 px-8 border-b border-zinc-100 border-r border-r-zinc-50">
                        <button 
                          onClick={() => setActiveFeature(item.feature)}
                          className="flex items-center gap-3 text-left w-full hover:opacity-70 transition-opacity"
                        >
                          <span className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 group-hover:bg-violet-100 transition-colors">
                            <Info className="w-3.5 h-3.5 text-zinc-400 group-hover:text-violet-600" />
                          </span>
                          <span className="font-bold text-sm text-zinc-700">{item.feature.name}</span>
                        </button>
                      </td>
                      <td className="p-4 text-center border-b border-zinc-100 border-r border-r-zinc-50">
                        {renderValue(item.prende)}
                      </td>
                      <td className="p-4 text-center border-b border-zinc-100 border-r border-r-zinc-50 bg-violet-50/10">
                        {renderValue(item.full, true)}
                      </td>
                      <td className="p-4 text-center border-b border-zinc-100">
                        {renderValue(item.pro)}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <FeatureExplanationModal 
        isOpen={!!activeFeature}
        onClose={() => setActiveFeature(null)}
        title={activeFeature?.name || ''}
        description={activeFeature?.description || ''}
      />
    </div>
  );
}
