"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Info, Rocket, TrendingUp, Zap, X, ChevronDown, Crown } from 'lucide-react';
import FeatureExplanationModal from '@/components/modals/feature-explanation-modal';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';

interface FeatureInfo {
  name: string;
  description: string;
}

interface PlanFeature {
  feature: FeatureInfo;
  prende: string | boolean;
  full: string | boolean;
  pro: string | boolean;
  customElite?: string | boolean;
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
        feature: { name: "Plataforma Autoadministrable", description: "Tu tienda quedará configurada para que tú o tu equipo puedan gestionar ventas, productos y clientes fácilmente." },
        prende: true,
        full: true,
        pro: true
      },
      {
        feature: { name: "Tema y Diseño", description: "Utilizamos plantillas premium de Shopify, optimizadas para conversión y velocidad. En el Plan Custom Elite diseñamos desde cero en Figma sin uso de plantillas." },
        prende: "Plantilla Premium",
        full: "Secciones Personalizadas",
        pro: "Secciones Avanzadas Pro",
        customElite: "Diseño UX/UI a Medida (Figma)"
      },
      {
        feature: { name: "Carga de Productos", description: "Cantidad de productos que nuestro equipo configurará inicialmente. Incluye carga de imágenes, descripciones, precios y variantes base." },
        prende: "Carga inicial de productos",
        full: "Carga ampliada de productos",
        pro: "Carga masiva de productos"
      },
      {
        feature: { name: "Categorías y Colecciones", description: "Configuración de árboles de navegación, categorías principales y colecciones inteligentes para ordenar el catálogo." },
        prende: "Básicas",
        full: "Avanzadas",
        pro: "Estructura Completa"
      },
      {
        feature: { name: "Diseño Mobile-First", description: "El 80% de las compras en Chile se hacen desde el celular. Optimizamos la tienda priorizando la experiencia móvil." },
        prende: true,
        full: true,
        pro: true
      },
      {
        feature: { name: "Diseño Optimizado para Convertir (CRO)", description: "Aplicamos técnicas de conversión y persuasión en la ficha de producto, carritos y checkout para maximizar ventas." },
        prende: false,
        full: true,
        pro: true
      },
      {
        feature: { name: "Fichas de Producto Dinámicas (Metacampos)", description: "Personalización avanzada usando metacampos de Shopify para agregar PDF descargables, videos específicos, pestañas adicionales y contenido único por producto." },
        prende: false,
        full: false,
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
        prende: "Mercado Pago",
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
        full: "Básico (1 Integración)",
        pro: "Múltiples / Avanzado"
      },
      {
        feature: { name: "Carro de Compra Optimizado", description: "Formulario especial en el carrito para guardar datos de facturación (RUT, Razón Social, Giro) antes del pago, facilitando la emisión automática de facturas." },
        prende: false,
        full: true,
        pro: true
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
    category: "Implementación Técnica y Analítica",
    features: [
      {
        feature: { name: "Google Analytics 4", description: "Configuración de la propiedad de GA4 para medir visitas, comportamiento y rendimiento general." },
        prende: "Básico",
        full: true,
        pro: true
      },
      {
        feature: { name: "Google Tag Manager", description: "Implementación de GTM para administrar etiquetas y scripts de forma ordenada sin tocar el código." },
        prende: false,
        full: false,
        pro: true
      },
      {
        feature: { name: "Meta Pixel y Conversion API", description: "Instalación del pixel de Facebook/Instagram y la API de conversiones para mejorar el rendimiento de tus anuncios." },
        prende: false,
        full: "Solo Pixel",
        pro: "Pixel + Conversion API"
      },
      {
        feature: { name: "Google Merchant Center", description: "Sincronización del catálogo de productos con Google para aparecer en Google Shopping." },
        prende: false,
        full: false,
        pro: true
      },
      {
        feature: { name: "Medición de Eventos y Conversiones", description: "Configuración de eventos clave (agregar al carrito, iniciar pago, compra) para optimizar campañas publicitarias." },
        prende: false,
        full: "Básico",
        pro: "Avanzado (Para Ads)"
      },
      {
        feature: { name: "Email Marketing", description: "Configuración de flujos automáticos de correos (ej. Carrito Abandonado, Bienvenida) para recuperar y aumentar ventas." },
        prende: false,
        full: "Recuperación de Carritos",
        pro: "Klaviyo (Flujos Avanzados)"
      }
    ]
  },
  {
    category: "SEO y Posicionamiento",
    features: [
      {
        feature: { name: "Optimización SEO Técnica", description: "Configuración de mapa del sitio, archivo robots.txt, velocidad de carga y solución de errores técnicos para Google." },
        prende: "Básica",
        full: "Avanzada",
        pro: "Auditoría y Setup Completo"
      },
      {
        feature: { name: "SEO On-Page (Categorías y Productos)", description: "Optimización de títulos, meta descripciones y etiquetas ALT en imágenes de las páginas más importantes." },
        prende: false,
        full: "Básico",
        pro: "Estrategia Completa"
      },
      {
        feature: { name: "Estructura Optimizada para SEO", description: "Organización jerárquica de URLs y menús pensada para que Google entienda y priorice tu contenido." },
        prende: false,
        full: true,
        pro: true
      },
      {
        feature: { name: "Propuesta de Servicio SEO Mensual", description: "Plan de acción y propuesta comercial para trabajar el SEO mes a mes y lograr crecimiento sostenido del tráfico orgánico." },
        prende: false,
        full: false,
        pro: "Incluida"
      }
    ]
  },
  {
    category: "Soporte y Entrega",
    features: [
      {
        feature: { name: "Tiempo de Entrega", description: "Tiempo estimado para tener tu tienda lista y operando, desde la entrega de la información inicial." },
        prende: "2 a 3 Semanas",
        full: "4 a 5 Semanas",
        pro: "5 a 6 Semanas"
      },
      {
        feature: { name: "Capacitación", description: "Entrenamiento para que tú y tu equipo puedan administrar la tienda, procesar pedidos y actualizar inventario." },
        prende: "Video Tutorial",
        full: "Sesión 1 a 1",
        pro: "Consultoría Estratégica"
      },
      {
        feature: { name: "Soporte Post-Lanzamiento", description: "Atención prioritaria para resolver dudas técnicas y asegurar que la tienda funcione perfectamente tras salir a vivo." },
        prende: "1 Mes de Garantía",
        full: "1 Mes de Garantía",
        pro: "3 Meses + 1 Extra"
      }
    ]
  }
];

const PLAN_CARDS = [
  {
    id: "prende",
    name: "Prende",
    icon: <TrendingUp className="w-6 h-6 text-emerald-500" />,
    price: "$580.000",
    subtitle: "+ IVA",
    cta: "Iniciar mi Tienda",
    ctaClass: "bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50",
    color: "emerald"
  },
  {
    id: "full",
    name: "Full",
    icon: <Zap className="w-6 h-6 text-violet-500" />,
    price: "$780.000",
    subtitle: "+ IVA",
    badge: "El Más Solicitado • CyberDay Ready",
    recommended: true,
    cta: "Elegir Plan Full (Más Vendido)",
    ctaClass: "bg-violet-600 text-white hover:bg-violet-700 shadow-lg shadow-violet-600/20",
    color: "violet"
  },
  {
    id: "pro",
    name: "Pro",
    icon: <Rocket className="w-6 h-6 text-blue-500" />,
    price: "$1.200.000",
    subtitle: "+ IVA",
    cta: "Solicitar Propuesta Pro",
    ctaClass: "bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50",
    color: "blue"
  },
  {
    id: "customElite",
    name: "Custom Elite",
    icon: <Crown className="w-6 h-6 text-amber-500" />,
    price: "A Cotizar",
    subtitle: "Desarrollo 100% a Medida",
    badge: "Diseño Figma desde Cero",
    cta: "Cotizar Proyecto Custom Elite",
    ctaClass: "bg-amber-600 text-white hover:bg-amber-700 shadow-lg shadow-amber-600/20",
    color: "amber"
  }
];

// Inside shopify-plans-comparison table header:
// Updated buttons for th columns
// Line 362: Iniciar mi Tienda
// Line 375: Elegir Plan Full
// Line 385: Propuesta a Medida
// Line 435: Agendar Asesoría E-commerce Gratis / Evaluar mi Proyecto por WhatsApp

const MobilePlanCard = ({ plan, data, onFeatureClick }: { plan: any, data: PlanCategory[], onFeatureClick: (feature: FeatureInfo) => void }) => {
  const [isOpen, setIsOpen] = useState(plan.recommended || false);

  return (
    <div className={`rounded-[2rem] border ${plan.recommended ? 'border-violet-200 bg-violet-50/50' : 'border-zinc-200 bg-white'} overflow-hidden relative shadow-xl`}>
      {plan.recommended && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-[9px] font-black px-4 py-1.5 rounded-b-lg uppercase tracking-widest">
          Recomendado
        </div>
      )}
      <div className={`p-8 ${plan.recommended ? 'pt-10' : ''} flex flex-col items-center text-center border-b border-zinc-100`}>
        <div className="flex justify-center mb-4">{plan.icon}</div>
        <h4 className="text-2xl font-black text-zinc-900 uppercase tracking-tight mb-1">{plan.name}</h4>
        <div className={`text-xl font-black ${plan.recommended ? 'text-violet-700' : 'text-zinc-900'} mb-2`}>
          {plan.price} <span className={`text-xs uppercase font-bold ${plan.recommended ? 'text-violet-500' : 'text-zinc-400'}`}>{plan.subtitle}</span>
        </div>
        {plan.badge && (
          <div className="text-[10px] font-black text-violet-600 bg-violet-100 px-2 py-0.5 rounded-full inline-block mb-3">{plan.badge}</div>
        )}
        <LeadButton className={`w-full py-4 mt-2 text-[10px] rounded-xl uppercase font-black tracking-widest ${plan.ctaClass}`}>
          {plan.cta}
        </LeadButton>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between text-sm font-bold text-zinc-900 mt-6 pt-6 border-t border-zinc-100/50"
        >
          {isOpen ? 'Ocultar características' : 'Ver características'}
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-8 space-y-8 bg-zinc-50/50">
              {data.map((category, idx) => {
                const includedFeatures = category.features.filter(f => f[plan.id as keyof PlanFeature] !== false);
                if (includedFeatures.length === 0) return null;

                return (
                  <div key={idx}>
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">{category.category}</h5>
                    <ul className="space-y-4">
                      {includedFeatures.map((f, fIdx) => {
                        const val = f[plan.id as keyof PlanFeature];
                        return (
                          <li key={fIdx} className="flex items-start gap-3">
                            <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.recommended ? 'text-violet-600' : 'text-zinc-800'}`} strokeWidth={3} />
                            <div>
                              <button onClick={() => onFeatureClick(f.feature)} className="font-bold text-sm text-zinc-700 text-left border-b border-dashed border-zinc-300 pb-0.5 hover:text-violet-600 hover:border-violet-400 transition-colors">
                                {f.feature.name}
                              </button>
                              {typeof val === 'string' && (
                                <span className={`block text-xs mt-1 ${plan.recommended ? 'font-bold text-violet-700' : 'font-medium text-zinc-600'}`}>{val}</span>
                              )}
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ShopifyPlansComparison() {
  const [activeFeature, setActiveFeature] = useState<FeatureInfo | null>(null);

  const renderValue = (val: string | boolean, highlight: boolean = false) => {
    if (typeof val === 'boolean') {
      return val ? (
        <Check className={`w-5 h-5 mx-auto ${highlight ? 'text-violet-600' : 'text-zinc-800'}`} strokeWidth={3} />
      ) : (
        <X className="w-5 h-5 mx-auto text-zinc-300" strokeWidth={2} />
      );
    }
    return <span className={`text-sm ${highlight ? 'font-black text-violet-700' : 'font-medium text-zinc-600'}`}>{val}</span>;
  };

  return (
    <div className="w-full">
      {/* Mobile Cards (hidden on lg desktop) */}
      <div className="flex lg:hidden flex-col gap-8">
        {PLAN_CARDS.map(plan => (
          <MobilePlanCard key={plan.id} plan={plan} data={COMPARISON_DATA} onFeatureClick={setActiveFeature} />
        ))}
      </div>

      {/* Desktop Table (hidden on mobile) */}
      <div className="hidden lg:block bg-white rounded-[2rem] lg:rounded-[3rem] border border-zinc-100 shadow-xl overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 lg:p-10 w-[140px] min-w-[140px] max-w-[140px] lg:w-1/3 lg:min-w-0 lg:max-w-none bg-zinc-50 border-b border-zinc-100 sticky left-0 z-20 shadow-[4px_0_12px_rgba(0,0,0,0.03)] lg:shadow-none">
                  <h3 className="text-sm lg:text-xl font-black text-zinc-900 tracking-tighter uppercase mb-1 lg:mb-2">Compara</h3>
                  <p className="text-[9px] lg:text-xs text-zinc-500 font-light hidden lg:block">Haz clic en cada característica para ver el detalle de lo que incluye.</p>
                </th>
                
                {/* PRENDE */}
                <th className="p-8 lg:p-10 w-2/9 text-center border-b border-zinc-100 border-l border-zinc-50">
                  <div className="flex justify-center mb-4"><TrendingUp className="w-8 h-8 text-emerald-500" /></div>
                  <h4 className="text-2xl font-black text-zinc-900 uppercase tracking-tight mb-1">Prende</h4>
                  <div className="text-xl font-black text-zinc-900 mb-6">$580.000 <span className="text-xs text-zinc-400 uppercase font-bold">+ IVA</span></div>
                  <LeadButton className="w-full py-4 text-[10px] bg-white text-zinc-900 border border-zinc-200 rounded-xl uppercase font-black tracking-widest hover:bg-zinc-50">
                    Iniciar mi Tienda
                  </LeadButton>
                </th>

                {/* FULL (Recommended) */}
                <th className="p-8 lg:p-10 w-2/9 text-center border-b border-zinc-100 border-l border-zinc-50 bg-violet-50/50 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-[9px] font-black px-4 py-1.5 rounded-b-lg uppercase tracking-widest">El Más Vendido</div>
                  <div className="flex justify-center mb-4 mt-2"><Zap className="w-8 h-8 text-violet-500" /></div>
                  <h4 className="text-2xl font-black text-zinc-900 uppercase tracking-tight mb-1">Full</h4>
                  <div className="text-xl font-black text-violet-700 mb-2">$780.000 <span className="text-xs text-violet-500 uppercase font-bold">+ IVA</span></div>
                  <div className="text-[10px] font-black text-violet-600 bg-violet-100 px-2 py-0.5 rounded-full inline-block mb-3">CyberDay Ready • Boleta SII</div>
                  <LeadButton className="w-full py-4 text-[10px] bg-violet-600 text-white rounded-xl uppercase font-black tracking-widest hover:bg-violet-700 shadow-lg shadow-violet-600/20">
                    Elegir Plan Full
                  </LeadButton>
                </th>

                {/* PRO */}
                <th className="p-8 lg:p-10 w-1/5 text-center border-b border-zinc-100 border-l border-zinc-50">
                  <div className="flex justify-center mb-4"><Rocket className="w-8 h-8 text-blue-500" /></div>
                  <h4 className="text-2xl font-black text-zinc-900 uppercase tracking-tight mb-1">Pro</h4>
                  <div className="text-xl font-black text-zinc-900 mb-6">$1.200.000 <span className="text-xs text-zinc-400 uppercase font-bold">+ IVA</span></div>
                  <LeadButton className="w-full py-4 text-[10px] bg-white text-zinc-900 border border-zinc-200 rounded-xl uppercase font-black tracking-widest hover:bg-zinc-50">
                    Solicitar Propuesta
                  </LeadButton>
                </th>

                {/* CUSTOM ELITE */}
                <th className="p-8 lg:p-10 w-1/5 text-center border-b border-zinc-100 border-l border-zinc-50 bg-amber-50/40">
                  <div className="flex justify-center mb-4"><Crown className="w-8 h-8 text-amber-500" /></div>
                  <h4 className="text-2xl font-black text-zinc-900 uppercase tracking-tight mb-1">Custom Elite</h4>
                  <div className="text-xl font-black text-amber-700 mb-2">A Cotizar</div>
                  <div className="text-[10px] font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full inline-block mb-3">Diseño Figma desde Cero</div>
                  <LeadButton className="w-full py-4 text-[10px] bg-amber-600 text-white rounded-xl uppercase font-black tracking-widest hover:bg-amber-700 shadow-lg shadow-amber-600/20">
                    Cotizar Custom Elite
                  </LeadButton>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((section, sIdx) => (
                <React.Fragment key={sIdx}>
                  {/* Category Header */}
                  <tr>
                    <td colSpan={5} className="bg-zinc-50 py-3 lg:py-4 px-4 lg:px-8 text-[10px] lg:text-xs font-black uppercase tracking-[0.2em] text-zinc-400 sticky left-0 z-10">
                      {section.category}
                    </td>
                  </tr>
                  
                  {/* Features */}
                  {section.features.map((item, iIdx) => (
                    <tr key={iIdx} className="group hover:bg-zinc-50/50 transition-colors">
                      <td className="p-3 lg:p-4 lg:px-8 w-[140px] min-w-[140px] max-w-[140px] lg:w-1/3 lg:min-w-0 lg:max-w-none border-b border-zinc-100 border-r border-r-zinc-50 sticky left-0 z-10 bg-white group-hover:bg-zinc-50/50 transition-colors shadow-[4px_0_12px_rgba(0,0,0,0.03)] lg:shadow-none">
                        <button 
                          onClick={() => setActiveFeature(item.feature)}
                          className="flex items-center gap-2 lg:gap-3 text-left w-full group/btn"
                        >
                          <span className="hidden lg:flex w-6 h-6 rounded-full bg-zinc-100 items-center justify-center shrink-0 group-hover/btn:bg-violet-100 group-hover/btn:scale-110 transition-all duration-300">
                            <Info className="w-3.5 h-3.5 text-zinc-400 group-hover/btn:text-violet-600 transition-colors" />
                          </span>
                          <span className="font-bold text-[11px] lg:text-sm text-zinc-700 border-b border-dashed border-zinc-300 group-hover/btn:border-violet-400 group-hover/btn:text-violet-700 transition-all duration-300 pb-0.5 leading-tight">
                            {item.feature.name}
                          </span>
                        </button>
                      </td>
                      <td className="p-4 text-center border-b border-zinc-100 border-r border-r-zinc-50">
                        {renderValue(item.prende)}
                      </td>
                      <td className="p-4 text-center border-b border-zinc-100 border-r border-r-zinc-50 bg-violet-50/50">
                        {renderValue(item.full, true)}
                      </td>
                      <td className="p-4 text-center border-b border-zinc-100 border-r border-r-zinc-50">
                        {renderValue(item.pro)}
                      </td>
                      <td className="p-4 text-center border-b border-zinc-100 bg-amber-50/30 font-bold text-amber-900">
                        {renderValue(item.customElite !== undefined ? item.customElite : true)}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
        <LeadButton className="px-8 py-4 bg-violet-600 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-violet-700 transition-all shadow-xl shadow-violet-600/20 active:scale-95 text-center flex items-center justify-center gap-2">
          Agendar Asesoría E-commerce Gratis
        </LeadButton>
        <WhatsAppButton className="px-8 py-4 bg-emerald-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 active:scale-95 text-center flex items-center justify-center gap-2">
          Evaluar mi Proyecto por WhatsApp
        </WhatsAppButton>
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
