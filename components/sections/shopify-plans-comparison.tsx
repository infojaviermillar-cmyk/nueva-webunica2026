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
    category: "Garantía & Gestión de Proyecto",
    features: [
      {
        feature: { name: "Carta Gantt en Línea en Vivo", description: "Acceso a un portal privado donde puedes seguir el avance semana a semana, ver las responsabilidades clasificadas y chatear con el equipo." },
        prende: "Incluido (Panel Privado)",
        full: "Incluido (Panel Privado)",
        pro: "Incluido (Panel Privado)",
        customElite: "Incluido (Panel Privado 8s)"
      },
      {
        feature: { name: "Pagos por Cumplimiento de Hitos", description: "Tus pagos se dividen por etapas y se liberan únicamente contra el cumplimiento verificado de los entregables de cada hito." },
        prende: "50% Inicio - 50% Go Live",
        full: "Hitos por Semana (50% / 50%)",
        pro: "4 Hitos (25% / 25% / 25% / 25%)",
        customElite: "4 Hitos (25% / 25% / 25% / 25%)"
      },
      {
        feature: { name: "Adecuación Ley 21.719 (Datos & Cookies)", description: "Cumplimiento de la nueva ley de protección de datos en Chile: consentimientos informados, derechos ARCOP y banner de cookies Consent Mode v2." },
        prende: "Opcional (+$190k)",
        full: "Opcional (+$190k)",
        pro: "✓ Incluido Gratis",
        customElite: "✓ Incluido Gratis"
      }
    ]
  },
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
        feature: { name: "Carga de Productos", description: "Cantidad de productos que nuestro equipo configurará o importará inicialmente. La edición manual excesiva o normalización avanzada se cotiza por separado." },
        prende: "Hasta 70 productos",
        full: "Hasta 500 productos (según archivo entregado)",
        pro: "Hasta 1.000 productos (migración masiva)"
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
        feature: { name: "Rondas de Revisión de Diseño", description: "Rondas consolidadas de correcciones y ajustes sobre la propuesta de diseño entregada." },
        prende: "2 Rondas",
        full: "3 Rondas",
        pro: "4 Rondas",
        customElite: "4 Rondas (Figma)"
      },
      {
        feature: { name: "Páginas Informativas", description: "Creación de páginas esenciales como Quienes Somos, Contacto, Políticas de Devolución y Términos de Servicio." },
        prende: "Básicas (5 págs)",
        full: "Completas (7 págs)",
        pro: "Ilimitadas (+8 págs)"
      }
    ]
  },
  {
    category: "Integraciones y Funcionalidad",
    features: [
      {
        feature: { name: "Apps Instaladas y Configuradas", description: "Instalación, integración y pruebas de aplicaciones esenciales de Shopify para potenciar tu tienda." },
        prende: "1 App Instalada",
        full: "3 Apps Instaladas",
        pro: "5 Apps Instaladas",
        customElite: "5+ Apps Corporativas"
      },
      {
        feature: { name: "Medios de Pago", description: "Configuración de pasarelas de pago para recibir pagos con Tarjetas de Crédito, Débito y Transferencias en Chile." },
        prende: "Mercado Pago",
        full: "Múltiples (Webpay, Flow, MercadoPago)",
        pro: "Múltiples + B2B"
      },
      {
        feature: { name: "Logística y Envíos", description: "Configuración de tarifas dinámicas según dirección, peso y cobertura cuando la integración y plan sean compatibles." },
        prende: "Tarifas Planas / Zonas",
        full: "Integración (Starken/Chilexpress/Blue)",
        pro: "Integración Avanzada (Envíame/Shipit)"
      },
      {
        feature: { name: "Integración ERP / Boletas", description: "Conexión con sistemas de facturación y control de inventario locales para emitir boletas electrónicas automáticamente." },
        prende: false,
        full: "Boleta SII Automática",
        pro: "Bsale / Obuma / Defontana"
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
        feature: { name: "Flujos de Correos de Automatización", description: "Configuración de flujos automáticos de Email Marketing (Bienvenida, Recuperación de Carrito Abandonado, Post-Compra)." },
        prende: "1 Flujo (Bienvenida)",
        full: "3 Flujos (Bienvenida, Carrito, Post-compra)",
        pro: "5 Flujos de Automatización (Klaviyo)",
        customElite: "Flujos Avanzados Klaviyo"
      },
      {
        feature: { name: "Analítica Web (Google Analytics 4)", description: "Configuración de GA4 para medir visitas, comportamiento de navegación y embudo de conversión." },
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
        feature: { name: "Optimización SEO Técnica", description: "Tienda preparada técnicamente para ser rastreada, indexada y desarrollar posicionamiento orgánico desde su lanzamiento." },
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
        pro: "6 a 8 Semanas"
      },
      {
        feature: { name: "Capacitación", description: "Entrenamiento para que tú y tu equipo puedan administrar la tienda, procesar pedidos y actualizar inventario." },
        prende: "Video Tutorial / Básica",
        full: "Sesión 1 a 1 Avanzada",
        pro: "Consultoría Estratégica 1 a 1"
      },
      {
        feature: { name: "Soporte Técnico Post-Entrega", description: "Atención prioritaria para resolver dudas técnicas y asegurar que la tienda funcione perfectamente tras salir a vivo." },
        prende: "3 Meses (90 días) de garantía y soporte",
        full: "3 Meses (90 días) de soporte",
        pro: "6 Meses de soporte y acompañamiento",
        customElite: "6 Meses de soporte VIP"
      }
    ]
  }
];

const PLAN_CARDS = [
  {
    id: "prende",
    name: "Plan Prende",
    icon: <TrendingUp className="w-6 h-6 text-emerald-500" />,
    price: "$680.000",
    subtitle: "+ IVA",
    cta: "-5% Solicita Asesoría Gratis",
    savingsText: "Con esta promoción ahorras $34.000",
    ctaClass: "bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50",
    color: "emerald"
  },
  {
    id: "full",
    name: "Plan Full",
    icon: <Zap className="w-6 h-6 text-[#FF0085]" />,
    price: "$1.200.000",
    subtitle: "+ IVA",
    badge: "El Más Vendido • Crecimiento & Automatización",
    recommended: true,
    cta: "-8% Solicita Asesoría Gratis",
    savingsText: "Con esta promoción ahorras $96.000",
    ctaClass: "bg-[#FF0085] text-white hover:bg-pink-700 shadow-lg shadow-pink-600/20",
    color: "pink"
  },
  {
    id: "pro",
    name: "Plan Conversión",
    icon: <Crown className="w-6 h-6 text-blue-500" />,
    price: "Cotizar",
    subtitle: "Desarrollo a Medida",
    cta: "-10% Solicita Asesoría Gratis",
    savingsText: "Con esta promoción ahorras $120.000",
    ctaClass: "bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50",
    color: "blue"
  },
  {
    id: "customElite",
    name: "Custom Elite",
    icon: <Crown className="w-6 h-6 text-emerald-500" />,
    price: "Cotizar",
    subtitle: "Desarrollo 100% a Medida",
    badge: "Diseño Figma desde Cero",
    cta: "Solicita Asesoría Gratis",
    ctaClass: "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/20",
    color: "emerald"
  }
];

const MobilePlanCard = ({ plan, data, onFeatureClick }: { plan: any, data: PlanCategory[], onFeatureClick: (feature: FeatureInfo) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-[2rem] border ${plan.recommended ? 'border-violet-200 bg-violet-50/50' : 'border-zinc-200 bg-white'} overflow-hidden relative shadow-xl`}>
      {plan.recommended && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-[9px] font-black px-4 py-1.5 rounded-b-lg uppercase tracking-widest">
          Recomendado
        </div>
      )}
      <div className={`p-8 ${plan.recommended ? 'pt-10' : ''} flex flex-col items-center text-center border-b border-zinc-100`}>
        <div className="flex justify-center mb-4">{plan.icon}</div>
        <h4 className="text-2xl font-black text-zinc-900 uppercase tracking-tight mb-1 font-neue-haas">{plan.name}</h4>
        <div className={`text-xl font-black ${plan.recommended ? 'text-violet-700' : 'text-zinc-900'} mb-2`}>
          {plan.price} <span className={`text-xs uppercase font-bold ${plan.recommended ? 'text-violet-500' : 'text-zinc-400'}`}>{plan.subtitle}</span>
        </div>
        {plan.badge && (
          <div className="text-[10px] font-black text-violet-600 bg-violet-100 px-2.5 py-1 rounded-full inline-block mb-3">{plan.badge}</div>
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
    return <span className={`text-xs lg:text-sm ${highlight ? 'font-black text-violet-700' : 'font-medium text-zinc-600'}`}>{val}</span>;
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
          <table className="w-full min-w-[1100px] table-fixed text-left border-collapse">
            <thead>
              <tr>
                <th className="p-5 lg:p-8 w-1/5 bg-zinc-50 border-b border-zinc-100 sticky left-0 z-20 shadow-[4px_0_12px_rgba(0,0,0,0.03)] lg:shadow-none">
                  <h3 className="text-sm lg:text-xl font-black text-zinc-900 tracking-tight uppercase mb-1">Compara</h3>
                  <p className="text-[9px] lg:text-[11px] text-zinc-500 font-light hidden lg:block leading-tight">Haz clic en cada característica para ver el detalle.</p>
                </th>
                
                {/* PRENDE */}
                <th className="p-5 lg:p-8 w-1/5 text-center border-b border-zinc-100 border-l border-zinc-50">
                  <div className="flex justify-center mb-3"><TrendingUp className="w-7 h-7 text-emerald-500" /></div>
                  <h4 className="text-xl lg:text-2xl font-black text-zinc-900 uppercase tracking-tight mb-1 font-neue-haas">Plan Prende</h4>
                  <div className="text-lg lg:text-xl font-black text-zinc-900 mb-5">$680.000 <span className="text-[10px] text-zinc-400 uppercase font-bold">+ IVA</span></div>
                  <div className="flex flex-col items-center gap-2">
                    <LeadButton service="Plan Prende" className="w-full py-3.5 px-3 text-[10px] bg-zinc-900 text-white rounded-xl uppercase font-black tracking-wider hover:bg-zinc-800 shadow-md">
                      -5% Solicita Asesoría Gratis
                    </LeadButton>
                    <p className="text-[14px] font-bold text-zinc-950 mt-1 leading-snug">
                      Con esta promoción ahorras $34.000
                    </p>
                  </div>
                </th>

                {/* FULL (Recommended) */}
                <th className="p-5 lg:p-8 w-1/5 text-center border-b border-zinc-100 border-l border-zinc-50 bg-violet-50/50 relative">
                  <div className="flex justify-center mb-3 mt-1"><Zap className="w-7 h-7 text-violet-500" /></div>
                  <h4 className="text-xl lg:text-2xl font-black text-zinc-900 uppercase tracking-tight mb-1 font-neue-haas">Plan Full</h4>
                  <div className="text-lg lg:text-xl font-black text-violet-700 mb-2">$1.200.000 <span className="text-[10px] text-violet-500 uppercase font-bold">+ IVA</span></div>
                  <div className="text-[9px] font-black text-violet-600 bg-violet-100 px-2.5 py-1 rounded-full inline-block mb-4">Boleta SII • Envíos</div>
                  <div className="flex flex-col items-center gap-2">
                    <LeadButton service="Plan Full" className="w-full py-3.5 px-3 text-[10px] bg-[#FF0085] text-white rounded-xl uppercase font-black tracking-wider hover:bg-pink-700 shadow-lg shadow-pink-600/20">
                      -8% Solicita Asesoría Gratis
                    </LeadButton>
                    <p className="text-[14px] font-bold text-zinc-950 mt-1 leading-snug">
                      Con esta promoción ahorras $62.400
                    </p>
                  </div>
                </th>

                {/* CONVERSIÓN */}
                <th className="p-5 lg:p-8 w-1/5 text-center border-b border-zinc-100 border-l border-zinc-50">
                  <div className="flex justify-center mb-3"><Rocket className="w-7 h-7 text-blue-500" /></div>
                  <h4 className="text-xl lg:text-2xl font-black text-zinc-900 uppercase tracking-tight mb-1 font-neue-haas">Plan Conversión</h4>
                  <div className="text-lg lg:text-xl font-black text-zinc-900 mb-5">A Cotizar</div>
                  <div className="flex flex-col items-center gap-2">
                    <LeadButton service="Plan Conversión" className="w-full py-3.5 px-3 text-[10px] bg-zinc-900 text-white rounded-xl uppercase font-black tracking-wider hover:bg-zinc-800 shadow-md">
                      -10% Solicita Asesoría Gratis
                    </LeadButton>
                    <p className="text-[14px] font-bold text-zinc-950 mt-1 leading-snug">
                      Con esta promoción ahorras $120.000
                    </p>
                  </div>
                </th>

                {/* CUSTOM ELITE */}
                <th className="p-5 lg:p-8 w-1/5 text-center border-b border-zinc-100 border-l border-zinc-50 bg-emerald-50/40">
                  <div className="flex justify-center mb-3"><Crown className="w-7 h-7 text-emerald-500" /></div>
                  <h4 className="text-xl lg:text-2xl font-black text-zinc-900 uppercase tracking-tight mb-1 font-neue-haas">Custom Elite</h4>
                  <div className="text-lg lg:text-xl font-black text-emerald-700 mb-2">A Cotizar</div>
                  <div className="text-[9px] font-black text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full inline-block mb-4">Diseño Figma desde Cero</div>
                  <div className="flex flex-col items-center gap-2">
                    <LeadButton className="w-full py-3.5 px-3 text-[10px] bg-emerald-600 text-white rounded-xl uppercase font-black tracking-wider hover:bg-emerald-700 shadow-lg shadow-emerald-600/20">
                      Solicita Asesoría Gratis
                    </LeadButton>
                  </div>
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
                      <td className="p-3 lg:p-4 lg:px-6 w-1/5 border-b border-zinc-100 border-r border-r-zinc-50 sticky left-0 z-10 bg-white group-hover:bg-zinc-50/50 transition-colors shadow-[4px_0_12px_rgba(0,0,0,0.03)] lg:shadow-none">
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
                      <td className="p-4 w-1/5 text-center border-b border-zinc-100 border-r border-r-zinc-50">
                        {renderValue(item.prende)}
                      </td>
                      <td className="p-4 w-1/5 text-center border-b border-zinc-100 border-r border-r-zinc-50 bg-violet-50/50">
                        {renderValue(item.full, true)}
                      </td>
                      <td className="p-4 w-1/5 text-center border-b border-zinc-100 border-r border-r-zinc-50">
                        {renderValue(item.pro)}
                      </td>
                      <td className="p-4 w-1/5 text-center border-b border-zinc-100 bg-emerald-50/30 font-bold text-emerald-900">
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
