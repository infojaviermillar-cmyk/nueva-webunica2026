'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, MessageCircle, ArrowRight, Star, Zap, Percent } from 'lucide-react';
import Link from 'next/link';
import LeadButton from '@/components/ui/lead-button';
import ShopifyPlansComparison from '@/components/sections/shopify-plans-comparison';

interface Feature {
  title: string;
  detail: string;
}

interface Plan {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  description: string;
  time: string;
  features: Feature[];
  cta: string;
  recommended?: boolean;
  color: string;
  lightColor: string;
  textColor: string;
}

const FeatureAccordion = ({ feature, planColor }: { feature: Feature; planColor: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-start gap-3 text-left group transition-all"
        aria-expanded={isOpen}
      >
        <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${planColor} text-white`}>
          <Check className="w-3 h-3" />
        </div>
        <span className="flex-grow text-sm font-medium text-zinc-700 group-hover:text-zinc-950 transition-colors">
          {feature.title}
        </span>
        <ChevronDown 
          className={`w-4 h-4 mt-1 text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-4 pl-8 pr-4 text-xs leading-relaxed text-zinc-500">
              {feature.detail}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function ShopifyPricingSection() {
  const plans: Plan[] = [
    {
      id: 'ajuste',
      name: 'PLAN AJUSTE & OPTIMIZACIÓN',
      oldPrice: '$337.000',
      price: '$320.000',
      description: 'Ideal para mejorar una tienda Shopify existente, optimizar velocidad, navegación y aumentar la tasa de conversión.',
      time: 'Entrega en 10 días hábiles.',
      cta: 'Optimizar mi Tienda Actual',
      color: 'bg-blue-600',
      lightColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      features: [
        { title: 'Auditoría visual y de UX/UI', detail: 'Revisión de estructura visual, jerarquía de contenidos, botones, navegación, experiencia móvil y puntos de fricción que pueden afectar la conversión.' },
        { title: 'Mejora de navegación y menú', detail: 'Optimización del menú principal, categorías, colecciones y accesos rápidos para que el cliente encuentre fácilmente los productos.' },
        { title: 'Optimización de Ficha de Producto', detail: 'Mejora de la estructura de la página de producto, orden de la información, llamados a la acción, imágenes, beneficios y elementos de confianza.' },
        { title: 'Configuración de Apps esenciales', detail: 'Instalación o configuración básica de aplicaciones necesarias para mejorar la operación, conversión o experiencia del cliente.' },
        { title: 'Botón de WhatsApp flotante', detail: 'Implementación de botón directo a WhatsApp con mensaje inicial personalizado para facilitar consultas y aumentar oportunidades de venta.' },
        { title: 'Mejora de velocidad de carga', detail: 'Revisión básica de imágenes, scripts, apps y elementos visuales que pueden afectar el rendimiento inicial de la tienda.' },
        { title: 'Recuperación de carritos', detail: 'Configuración básica del flujo de recuperación de carritos abandonados disponible en Shopify para ayudar a recuperar ventas perdidas.' },
        { title: 'Entrega en 10 días hábiles', detail: 'Implementación rápida, ideal para negocios que necesitan mejorar su presencia online en poco tiempo.' }
      ]
    },
    {
      id: 'profesional',
      name: 'SHOPIFY PRENDE (Lanzamiento)',
      oldPrice: '$650.000',
      price: '$580.000',
      description: 'Ideal para crear una tienda Shopify profesional desde cero o migración inicial, con setup completo y hasta 70 productos.',
      time: 'Entrega en 4 semanas.',
      cta: 'Iniciar mi Tienda Shopify',
      color: 'bg-fuchsia-600',
      lightColor: 'bg-fuchsia-50',
      textColor: 'text-fuchsia-600',
      features: [
        { title: 'Setup completo de Shopify', detail: 'Configuración inicial de la tienda, moneda, país, datos comerciales, preferencias generales y estructura base del ecommerce.' },
        { title: 'Conexión de dominio propio', detail: 'Configuración del dominio del cliente para que la tienda funcione correctamente con una URL profesional.' },
        { title: 'Diseño basado en Plantilla Premium', detail: 'Implementación de una plantilla premium adaptada a la identidad visual de la marca, rubro y objetivos comerciales.' },
        { title: 'Carga inicial de 70 productos', detail: 'Carga de hasta 70 productos con nombre, precio, descripción, imágenes, colecciones y variantes si corresponde.' },
        { title: 'Configuración de Webpay/Flow', detail: 'Configuración inicial de medios de pago compatibles con Shopify, como Webpay, Flow u otras opciones disponibles según el proyecto.' },
        { title: 'Integración de Logística básica', detail: 'Configuración de métodos de envío, tarifas básicas, zonas de despacho, retiro en tienda o condiciones logísticas iniciales.' },
        { title: 'Diseño Mobile-First 100%', detail: 'Ajuste visual y funcional para que la tienda se vea correctamente en celulares, tablets y computadores.' },
        { title: 'Capacitación de uso básica', detail: 'Capacitación para administrar productos, revisar pedidos, modificar contenidos básicos y operar la tienda desde el panel de Shopify.' },
        { title: 'Entrega en 4 semanas', detail: 'Desarrollo planificado para una tienda profesional, funcional y lista para comenzar a vender.' }
      ]
    },
    {
      id: 'full',
      name: 'SHOPIFY FULL (Más Vendido)',
      oldPrice: '$980.000',
      price: '$780.000',
      description: 'La opción más completa para marcas en crecimiento: CyberDay Ready, Boleta SII, envíos automatizados y hasta 120 productos.',
      time: 'Entrega en 6 semanas.',
      cta: 'Elegir Plan Full (El más vendido)',
      recommended: true,
      color: 'bg-purple-600',
      lightColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      features: [
        { title: 'Todo lo del Plan Prende', detail: 'Incluye todas las funcionalidades del plan anterior, como setup completo, dominio, diseño en plantilla premium, carga inicial, pagos, logística básica, mobile-first y capacitación.' },
        { title: 'Carga de hasta 120 productos', detail: 'Carga o migración inicial de hasta 120 productos con imágenes, precios, descripciones, categorías, colecciones y variantes si aplica.' },
        { title: 'SEO Técnico: Títulos y Metas', detail: 'Configuración inicial de títulos SEO, metadescripciones, URLs amigables, estructura básica de encabezados y optimización inicial para indexación.' },
        { title: 'Integración Google Analytics 4', detail: 'Configuración de Google Analytics 4 para medir tráfico, comportamiento de usuarios y eventos relevantes de la tienda.' },
        { title: 'Diseño personalizado por secciones', detail: 'Personalización de secciones clave como home, banners, productos destacados, beneficios, colecciones, llamados a la acción y bloques de confianza.' },
        { title: 'Sistema de Reviews de clientes', detail: 'Instalación o configuración de un sistema de reseñas para productos, ayudando a aumentar confianza y conversión.' },
        { title: 'Formulario de Newsletter', detail: 'Configuración de formulario de suscripción para captar correos de potenciales clientes y construir una base de datos comercial.' },
        { title: 'Soporte prioritario 3 meses', detail: 'Soporte posterior a la entrega para resolver dudas, revisar funcionamiento y realizar ajustes menores relacionados con la implementación inicial.' },
        { title: 'Carrier Calculated Shipping (CCS)', detail: 'Activación de tarifas de envío calculadas por transportistas en tiempo real (Starken, BlueExpress, etc.), permitiendo cobrar el valor exacto del despacho.' },
        { title: 'Entrega en 6 semanas', detail: 'Desarrollo más completo, pensado para tiendas con mayor catálogo y necesidades comerciales más avanzadas.' }
      ]
    },
    {
      id: 'escala',
      name: 'SHOPIFY PRO / ESCALA',
      price: '$1.200.000',
      description: 'Ideal para empresas consolidadas, catálogo amplio, integración ERP (Bsale/Obuma), Klaviyo y campañas de alto volumen.',
      time: 'Entrega en 8 a 10 semanas.',
      cta: 'Solicitar Propuesta a Medida',
      color: 'bg-zinc-900',
      lightColor: 'bg-zinc-100',
      textColor: 'text-zinc-900',
      features: [
        { title: 'Todo lo del Plan FULL', detail: 'Incluye todas las funcionalidades del Plan FULL, incluyendo diseño personalizado, carga de productos, SEO técnico, Google Analytics 4, reviews, newsletter y soporte prioritario.' },
        { title: 'Migración de hasta 300 productos', detail: 'Migración o carga de hasta 300 productos desde una tienda anterior, archivo Excel, CSV u otra fuente disponible. Incluye organización por colecciones, revisión de imágenes, precios, descripciones y variantes cuando corresponda.' },
        { title: 'Integración ERP: Bsale, Obuma o Rex', detail: 'Configuración inicial de integración con ERP según disponibilidad técnica. Puede considerar sincronización de productos, stock, ventas o documentos tributarios dependiendo de la solución contratada y las condiciones del proveedor externo.' },
        { title: 'Email Marketing con Klaviyo', detail: 'Instalación y configuración inicial de Klaviyo conectado con Shopify. Incluye formulario de captación, flujo de bienvenida, flujo básico de recuperación de carrito y segmentación inicial de contactos.' },
        { title: 'Páginas de aterrizaje a medida', detail: 'Diseño de páginas especiales para campañas, productos destacados, colecciones o promociones. Las landing pages deben estar enfocadas en conversión, con beneficios, llamados a la acción, productos y elementos de confianza.' },
        { title: 'Optimización de velocidad avanzada', detail: 'Revisión avanzada de rendimiento, optimización de imágenes, análisis de apps instaladas, reducción de scripts innecesarios cuando sea posible y mejoras orientadas a carga móvil.' },
        { title: 'Configuración Meta Pixel & API', detail: 'Instalación de Meta Pixel, configuración de eventos principales y preparación de Conversion API cuando sea compatible. Esto permite mejorar la medición de campañas de Facebook e Instagram Ads.' },
        { title: 'Carrier Calculated Shipping (CCS)', detail: 'Activación de tarifas de envío calculadas por transportistas en tiempo real (Starken, BlueExpress, etc.), permitiendo cobrar el valor exacto del despacho.' },
        { title: 'Consultoría estratégica 1 a 1', detail: 'Sesión estratégica para revisar objetivos comerciales, estructura del catálogo, propuesta de valor, embudo de ventas, campañas, oportunidades de mejora y recomendaciones para escalar la tienda.' }
      ]
    },
    {
      id: 'custom-elite',
      name: 'Shopify CUSTOM ELITE',
      price: 'A cotizar',
      description: 'La solución más completa con diseño desde cero en Figma, migración avanzada e integraciones ERP y georreferenciación.',
      time: 'Entrega A convenir.',
      cta: 'Cotizar Proyecto Custom Elite',
      color: 'bg-amber-600',
      lightColor: 'bg-amber-50',
      textColor: 'text-amber-600',
      features: [
        { title: 'Setup completo de Shopify', detail: 'Setup inicial y configuración completa de Shopify (Dominio, SSL, Impuestos, Checkout).' },
        { title: 'Diseño UX/UI a medida en Figma', detail: 'Diseño UX/UI a medida desde cero en Figma (sin uso de plantillas).' },
        { title: 'Migración avanzada de productos y datos', detail: 'Migración o carga inicial de productos, clientes y contenido de la empresa.' },
        { title: 'Diseño profesional para conversión (CRO)', detail: 'Diseño enfocado en maximizar la conversión en todos los puntos del embudo.' },
        { title: 'Diseño Mobile-First Responsive', detail: 'Optimización total para dispositivos móviles y computadores.' },
        { title: 'Plataforma autoadministrable', detail: 'Panel autoadministrable con capacitación incluida para operar tu tienda.' },
        { title: 'Categorías, colecciones y fichas de producto', detail: 'Configuración de categorías, colecciones inteligentes y fichas de productos.' },
        { title: 'Medios de Pago y Despacho', detail: 'Configuración de pasarelas de pago y opciones de despacho local e internacional.' },
        { title: 'Integración ERP / Sistemas a Medida', detail: 'Integración con ERP (Bsale, Obuma, Defontana) u otros sistemas según requerimiento.' },
        { title: 'Analítica y Medición Avanzada', detail: 'Configuración de GA4, Google Tag Manager, Meta Pixel + Conversion API y Google Merchant Center.' },
        { title: 'Medición de Eventos para Ads', detail: 'Medición de eventos y conversiones para optimizar campañas publicitarias.' },
        { title: 'SEO Técnico & Estructura Orgánica', detail: 'Optimización SEO técnica, SEO On-Page de categorías/productos y propuesta SEO mensual.' },
        { title: 'Garantía 3 meses y Soporte VIP', detail: 'Garantía de 3 meses en su funcionamiento y soporte prioritario VIP.' }
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
              Planes de Desarrollo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 italic font-serif font-normal">Shopify en Chile</span>
            </h2>
            <p className="text-lg md:text-xl text-zinc-500 font-light max-w-3xl mx-auto leading-relaxed">
              Creamos tiendas Shopify profesionales en Chile, optimizadas para vender online, integrar medios de pago, mejorar la experiencia móvil y preparar tu ecommerce para campañas digitales. Elige el plan que mejor se adapta al estado actual de tu negocio.
            </p>
          </motion.div>
        </div>

        <div className="mb-16">
          <ShopifyPlansComparison />
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
