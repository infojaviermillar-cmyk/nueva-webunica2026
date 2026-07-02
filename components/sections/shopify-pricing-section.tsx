'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, MessageCircle, Star, Zap, Percent, Gift } from 'lucide-react';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';

interface FeatureGroup {
  title: string;
  items: string[];
}

interface Plan {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  pricePrefix?: string;
  description: string;
  time: string;
  featureGroups: FeatureGroup[];
  bonus?: string[];
  cta: string;
  recommended?: boolean;
  color: string;
  lightColor: string;
  textColor: string;
}

export default function ShopifyPricingSection() {
  const plans: Plan[] = [
    {
      id: 'profesional',
      name: 'SHOPIFY PROFESIONAL',
      oldPrice: '$650.000',
      price: '$580.000',
      description: 'Ideal para crear una tienda Shopify profesional y salir a vender rápidamente.',
      time: '4 semanas',
      cta: 'Quiero este plan',
      color: 'bg-blue-600',
      lightColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      featureGroups: [
        {
          title: 'Implementación Base',
          items: [
            'Setup completo en Shopify',
            'Configuración de dominio propio',
            'Implementación sobre Theme Premium',
            'Configuración visual según branding de marca',
            'Diseño 100% responsive (Mobile-First)'
          ]
        },
        {
          title: 'Catálogo & Contenido',
          items: [
            'Carga inicial de hasta 70 productos',
            'Configuración de colecciones',
            'Menú de navegación principal',
            'Página Nosotros',
            'Página Contacto',
            'Páginas legales (Privacidad / Términos / Cambios y devoluciones)'
          ]
        },
        {
          title: 'Pagos & Logística',
          items: [
            'Configuración de Webpay / Flow / Mercado Pago',
            'Configuración logística básica',
            'Tarifas de envío por zona'
          ]
        },
        {
          title: 'Lanzamiento',
          items: [
            'Testing general',
            'Revisión final',
            'Go Live',
            'Capacitación inicial de uso'
          ]
        }
      ],
      bonus: [
        'Botón WhatsApp',
        'Checklist de lanzamiento'
      ]
    },
    {
      id: 'full',
      name: 'SHOPIFY FULL',
      oldPrice: '$980.000',
      price: '$780.000',
      description: 'Ideal para marcas que buscan una tienda optimizada para conversión y crecimiento.',
      time: '5–6 semanas',
      cta: 'Quiero este plan',
      recommended: true,
      color: 'bg-purple-600',
      lightColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      featureGroups: [
        {
          title: 'Implementación Avanzada',
          items: [
            'Setup completo en Shopify',
            'Configuración de dominio propio',
            'Theme Premium configurado',
            'Diseño personalizado por secciones',
            'Diseño 100% responsive (Mobile-First)'
          ]
        },
        {
          title: 'Catálogo & Contenido',
          items: [
            'Carga de hasta 150 productos',
            'Configuración avanzada de colecciones',
            'Navegación optimizada',
            'Homepage estratégica enfocada en conversión',
            'Banners promocionales editables',
            'Página Nosotros',
            'Página Contacto',
            'Páginas legales'
          ]
        },
        {
          title: 'Conversión',
          items: [
            'Sistema de reviews',
            'Newsletter / Captación de leads',
            'Upselling / Cross-selling',
            'Carrito optimizado',
            'Filtros avanzados',
            'Búsqueda optimizada'
          ]
        },
        {
          title: 'Marketing & Analítica',
          items: [
            'SEO técnico inicial',
            'Google Analytics 4',
            'Google Search Console',
            'Meta Pixel'
          ]
        },
        {
          title: 'Pagos & Logística',
          items: [
            'Configuración Webpay / Flow / Mercado Pago',
            'Carrier Calculated Shipping (CCS)',
            'Configuración logística avanzada'
          ]
        },
        {
          title: 'Lanzamiento & Soporte',
          items: [
            'Testing completo',
            'Revisión final',
            'Go Live',
            'Capacitación',
            'Soporte prioritario por 90 días',
            'Reunión estratégica post-lanzamiento'
          ]
        }
      ]
    },
    {
      id: 'enterprise',
      name: 'SHOPIFY ENTERPRISE',
      pricePrefix: 'Desde',
      price: '$1.450.000',
      description: 'Ideal para empresas que requieren una solución eCommerce avanzada, personalizada y preparada para escalar.',
      time: '6–8 semanas',
      cta: 'Hablar con un experto',
      color: 'bg-zinc-900',
      lightColor: 'bg-zinc-100',
      textColor: 'text-zinc-900',
      featureGroups: [
        {
          title: 'UX/UI Estratégico Personalizado',
          items: [
            'Reunión de discovery',
            'Levantamiento estratégico',
            'Benchmark de competencia',
            'Arquitectura UX',
            'Wireframes de páginas clave',
            'Diseño UI personalizado en Figma',
            'Prototipo Desktop + Mobile',
            'Revisión y aprobación de diseño'
          ]
        },
        {
          title: 'Desarrollo Shopify Avanzado',
          items: [
            'Setup completo Shopify',
            'Configuración de dominio',
            'Desarrollo frontend personalizado',
            'Secciones dinámicas avanzadas',
            'Funcionalidades a medida',
            'Landing pages custom',
            'Diseño 100% responsive'
          ]
        },
        {
          title: 'Catálogo & Contenido',
          items: [
            'Migración / carga hasta 300 productos',
            'Configuración avanzada de colecciones',
            'Homepage personalizada',
            'Ficha de producto avanzada',
            'Landing pages estratégicas',
            'Páginas corporativas y legales'
          ]
        },
        {
          title: 'Conversión & Marketing',
          items: [
            'Sistema de reviews',
            'Newsletter',
            'Upselling / Cross-selling',
            'SEO técnico avanzado',
            'Core Web Vitals',
            'Meta Pixel + Conversion API',
            'Google Analytics 4 avanzado'
          ]
        },
        {
          title: 'Automatización',
          items: [
            'Integración con Klaviyo',
            'Carrito abandonado',
            'Remarketing automático',
            'Post compra',
            'Recuperación de clientes'
          ]
        },
        {
          title: 'Integraciones Empresariales',
          items: [
            'Integración ERP (relBase, Bsale, Contabilium, Laudus)',
            'Sincronización de stock',
            'Sincronización de ventas',
            'Sincronización de pedidos',
            'Gestión de inventario'
          ]
        },
        {
          title: 'Lanzamiento & Consultoría',
          items: [
            'Testing completo',
            'Go Live',
            'Capacitación avanzada',
            '2–3 sesiones estratégicas',
            'Roadmap de crecimiento',
            'Consultoría CRO + Ads + SEO',
            'Soporte premium por 4 meses',
            'Auditoría post lanzamiento'
          ]
        }
      ]
    }
  ];

  return (
    <section id="planes" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-50/50 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-fuchsia-50/50 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 text-zinc-950">
              Planes de Desarrollo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 italic font-serif lowercase font-normal">Shopify en Chile</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-500 font-light max-w-3xl mx-auto leading-relaxed">
              Creamos tiendas Shopify profesionales en Chile, optimizadas para vender online, integrar medios de pago, mejorar la experiencia móvil y preparar tu ecommerce para escalar. Elige el plan que mejor se adapta al estado actual de tu negocio.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col h-full bg-white rounded-[2.5rem] p-8 border-2 transition-all duration-500 group hover:translate-y-[-12px] ${
                plan.recommended 
                  ? 'border-purple-600 shadow-[0_32px_64px_-16px_rgba(139,92,246,0.15)] ring-4 ring-purple-50' 
                  : 'border-zinc-100 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.05)] hover:border-zinc-200'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-purple-600/30 uppercase tracking-widest">
                  <Star className="w-3 h-3 fill-current" />
                  Recomendado
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-black mb-3 uppercase tracking-tight text-zinc-900">{plan.name}</h3>
                <p className="text-xs text-zinc-500 font-medium leading-relaxed mb-6 min-h-[60px]">
                  {plan.description}
                </p>
                
                <div className="mt-4 flex flex-col">
                  {plan.oldPrice && (
                    <span className="text-sm text-zinc-400 line-through font-medium mb-1">
                      {plan.oldPrice} + IVA
                    </span>
                  )}
                  {plan.pricePrefix && (
                    <span className="text-sm text-zinc-500 font-bold uppercase tracking-tight mb-1">
                      {plan.pricePrefix}
                    </span>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-zinc-950 tracking-tighter">
                      {plan.price}
                    </span>
                    <span className="text-sm font-bold text-zinc-500 uppercase tracking-tight">+ IVA</span>
                  </div>
                </div>
              </div>

              <div className="flex-grow">
                <div className="mb-4 pt-4 border-t border-zinc-50">
                  <div className="space-y-6">
                    {plan.featureGroups.map((group, gIndex) => (
                      <div key={gIndex}>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.1em] text-zinc-400 mb-3 border-b border-zinc-100 pb-2">
                          {group.title}
                        </h4>
                        <ul className="space-y-2">
                          {group.items.map((item, iIndex) => (
                            <li key={iIndex} className="flex items-start gap-2">
                              <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${plan.textColor}`} />
                              <span className="text-[13px] font-medium text-zinc-700 leading-snug">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {plan.bonus && plan.bonus.length > 0 && (
                      <div className="mt-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.1em] text-zinc-800 mb-2 flex items-center gap-1.5">
                          <Gift className="w-3 h-3 text-emerald-500" />
                          Bonus Incluidos
                        </h4>
                        <ul className="space-y-1">
                          {plan.bonus.map((item, bIndex) => (
                            <li key={bIndex} className="flex items-center gap-2">
                              <span className="text-[12px] font-bold text-zinc-600">
                                🎁 {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-50 space-y-4">
                <div className="flex items-center justify-between text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-2">
                  <span>Tiempo estimado</span>
                  <span className={plan.textColor}>{plan.time}</span>
                </div>
                
                <LeadButton 
                  className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 transition-all active:scale-95 ${
                    plan.recommended 
                      ? 'bg-purple-600 text-white shadow-xl shadow-purple-600/30 hover:bg-purple-700' 
                      : `${plan.color} text-white shadow-xl shadow-zinc-900/10 hover:opacity-90`
                  }`}
                >
                  <Percent className="w-3.5 h-3.5" />
                  Obtener Cotización
                </LeadButton>

                <Link 
                  href="https://wa.me/56984410379"
                  className="w-full py-3 rounded-2xl font-bold text-[10px] uppercase tracking-widest text-zinc-400 border border-zinc-100 flex items-center justify-center gap-2 hover:bg-zinc-50 hover:text-zinc-600 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Hablar con Webunica
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CCS Requirement Explanation */}
        <div className="max-w-4xl mx-auto mt-20 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-950 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/20 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                    <Zap className="w-3 h-3" />
                    Requisito Técnico
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tight leading-none">
                    Carrier Calculated <br/><span className="text-violet-400 italic">Shipping (CCS)</span>
                  </h3>
                </div>
                
                <div className="w-full md:w-2/3">
                  <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                    Para que aplicaciones como <strong className="text-white">Shipit, Sendu o BlueExpress</strong> puedan inyectar el valor real del envío (calculado según dirección y peso) en la pantalla de pagos de tu cliente, tu tienda Shopify <strong className="text-white uppercase tracking-wider text-xs">DEBE</strong> tener habilitada la función de "Tarifas de envío calculadas por terceros".
                  </p>
                  
                  <div className="space-y-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-400 block">¿Cómo obtener esta función?</span>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group/card">
                        <div className="flex gap-4">
                          <div className="w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center flex-shrink-0 mt-1">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <div>
                            <p className="text-[13px] font-bold text-white mb-1">Opción Recomendada (Plan Anual)</p>
                            <p className="text-[11px] text-zinc-400 leading-relaxed">
                              Paga tu plan <span className="text-zinc-300">Basic o Shopify</span> de forma <strong className="text-violet-400 italic">ANUAL</strong> en lugar de mensual, y comunícate con el soporte de Shopify para que habiliten la función gratis. <span className="text-emerald-400">(Ahorras un 25% en tu plan y consigues el CCS gratis)</span>.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group/card">
                        <div className="flex gap-4">
                          <div className="w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center flex-shrink-0 mt-1">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <div>
                            <p className="text-[13px] font-bold text-white mb-1">Opción Corporativa (Plan Advanced)</p>
                            <p className="text-[11px] text-zinc-400 leading-relaxed">
                              Contratar el plan <strong className="text-zinc-300">Advanced Shopify</strong>. Esta función ya viene incluida por defecto en este nivel de servicio.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-sm text-zinc-400 font-medium italic">
            * Todos los planes están sujetos a factibilidad técnica y volumen de catálogo.
          </p>
        </div>
      </div>
    </section>
  );
}
