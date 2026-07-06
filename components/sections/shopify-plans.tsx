"use client";

import LeadButton from '@/components/ui/lead-button';
import { CheckCircle2, Star, Zap, Shield, ArrowRight } from 'lucide-react';

export default function ShopifyPlans() {
  const plans = [
    {
      name: "Shopify AJUSTE",
      price: "$320.000",
      bonus: "Auditoría CRO Gratis",
      highlight: "🔧 Para tiendas ya creadas",
      desc: "Ideal para tiendas que necesitan mejorar imagen, orden comercial y confianza visual.",
      icon: <Zap className="w-6 h-6 text-pink-600" />,
      features: [
        "🎁 Plantilla Envato premium gratis",
        "Revisión visual general de la tienda",
        "Mejora de home, menú, banners y jerarquía",
        "Ajustes en ficha de producto",
        "Mejora de textos clave y llamados a la acción",
        "Optimización básica de experiencia mobile",
        "Revisión de apps instaladas",
        "Ajustes de confianza visual en carrito/checkout",
        "Hasta cierta cantidad de cambios definidos",
        "Videollamada para explicar diseño y Shopify",
        "Botón de WhatsApp",
        "Activación sistema de notificaciones",
        "Recuperación de carritos abandonados",
        "Tiempo de entrega: 5 a 10 días hábiles"
      ]
    },
    {
      name: "Shopify PRENDE",
      price: "$580.000",
      bonus: "Theme Premium Incluido",
      highlight: "🌟 Ideal para emprendedores que inician",
      desc: "Perfecto para emprendedores que dan sus primeros pasos en el comercio digital. Lanza tu tienda con imagen profesional y optimizada para vender.",
      icon: <Star className="w-6 h-6 text-pink-600" />,
      features: [
        "Configuración completa de tienda Shopify",
        "Conexión de dominio + validación de correo",
        "Instalación de plantilla premium Envato / Shopify",
        "Cargamos hasta 70 productos por ti o migración",
        "Certificado SSL y Panel administrador",
        "1 Medio de pago (Mercado Pago, PayPal, Flow o Ventipay)",
        "Multicourier (Shipit/Sendu) o tarifa única",
        "Integración Bluexpress, Starken, etc.",
        "Variaciones de producto (talla, color, etc.)",
        "Redes sociales y Botón de WhatsApp",
        "App propia datos de facturación",
        "Soporte técnico 3 meses y hasta 3 cambios",
        "Tiempo de entrega: Hasta 4 semanas"
      ]
    },
    {
      name: "Shopify FULL",
      price: "$780.000",
      bonus: "Setup GA4 Sin Costo",
      highlight: "⚙️ Para negocios en crecimiento",
      desc: "Automatiza, optimiza y escala tus ventas. Para negocios que necesitan mayor capacidad de productos y herramientas de marketing.",
      recommended: true,
      icon: <Shield className="w-6 h-6 text-pink-600" />,
      features: [
        "Integración Google Analytics y Facebook Pixel",
        "Optimización SEO Básica (Títulos, H2, Textos)",
        "Ajustes avanzados de estructura y navegación",
        "Chat en vivo opcional (Tawk.to o WhatsApp)",
        "Newsletter y formulario de suscripción",
        "Capacitación personalizada con videos",
        "Correos de carritos abandonados automáticos",
        "Todo lo del Plan PRENDE incluido"
      ]
    },
    {
      name: "Shopify PRO",
      price: "$1.200.000",
      bonus: "Consultoría SEO Inicial",
      highlight: "🚀 Para marcas que desean escalar",
      desc: "Solución completa y profesional. Integraciones complejas, estrategias de conversión avanzadas y diseño a medida.",
      icon: <ArrowRight className="w-6 h-6 text-pink-600" />,
      features: [
        "Todo lo del Plan FULL, más:",
        "Carga o migración de hasta 300 productos",
        "Integración ERP/Bsale (requiere evaluación)",
        "Marketing automatizado (Mailchimp/Klaviyo)",
        "Configuración Google Ads y Meta Ads",
        "Configuración completa de Analytics 4",
        "Plantilla ultra personalizada a medida",
        "Páginas optimizadas para campañas",
        "Integraciones externas (Calendly, CRM, Zapier)",
        "Soporte técnico preferente + auditoría final",
        "Tiempo estimado: Hasta 8 semanas"
      ]
    }
  ];

  return (
    <section id="planes" className="py-32 scroll-mt-32 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />
      <div className="max-w-[90rem] mx-auto px-6">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center space-x-2 bg-pink-50 text-pink-700 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-pink-600 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest">Inversión Transparente</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase mb-6 text-zinc-950">
            Ficha Técnica de Planes Shopify
          </h2>
          <p className="text-lg text-zinc-600 font-light leading-relaxed">
            Nuestros planes de diseño y desarrollo en Shopify están creados para adaptarse a la etapa actual de tu negocio en Chile. 
            Desde optimizaciones (CRO) hasta tiendas listas para procesar miles de transacciones. Revisa en detalle cada ficha técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative z-10">
          {plans.map((p, i) => (
            <div 
              key={i} 
              className={`group relative bg-white rounded-[2rem] p-8 lg:p-10 flex flex-col transition-all duration-500 hover:-translate-y-2
                ${p.recommended 
                  ? 'border-2 border-pink-500 shadow-2xl shadow-pink-500/20 scale-100 lg:scale-105 z-10' 
                  : 'border border-zinc-200 hover:border-pink-300 hover:shadow-xl'
                }`}
            >
              {p.recommended && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <div className="bg-pink-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-white" /> Recomendado
                  </div>
                </div>
              )}
              
              <div className="mb-6 flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center">
                  {p.icon}
                </div>
                {p.bonus && (
                  <div className="bg-emerald-50 text-emerald-600 text-[10px] font-black px-3 py-1 rounded-full border border-emerald-100">
                    + {p.bonus}
                  </div>
                )}
              </div>

              <h3 className="text-2xl font-black mb-2 uppercase text-zinc-900 group-hover:text-pink-600 transition-colors">{p.name}</h3>
              <p className="text-xs font-bold text-pink-500 uppercase mb-6">{p.highlight}</p>
              
              <div className="mb-6 pb-6 border-b border-zinc-100">
                <div className="h-5 mb-1" />
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-zinc-900 tracking-tight">{p.price}</span>
                  <span className="text-sm text-zinc-500 font-medium">+ iva</span>
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-zinc-600 bg-zinc-50 px-3 py-1.5 rounded-lg border border-zinc-200">
                  💳 6 cuotas sin interés
                </div>
              </div>
              
              <p className="text-sm text-zinc-500 font-light mb-8 min-h-[60px] leading-relaxed">
                {p.desc}
              </p>
              
              <div className="flex-grow">
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Ficha Técnica Detallada</p>
                <ul className="space-y-3.5 mb-10">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="text-sm text-zinc-600 flex items-start gap-3 leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-pink-500 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <LeadButton 
                className={`w-full py-4 rounded-xl font-black uppercase tracking-widest text-[11px] text-center transition-all shadow-md active:scale-95 flex items-center justify-center gap-2
                  ${p.recommended 
                    ? 'bg-pink-600 text-white hover:bg-pink-700 shadow-pink-600/30' 
                    : 'bg-zinc-900 text-white hover:bg-zinc-800'
                  }`}
              >
                Solicitar Propuesta
                <ArrowRight className="w-4 h-4" />
              </LeadButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
