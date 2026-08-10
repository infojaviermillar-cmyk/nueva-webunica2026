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
  savingsText?: string;
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
      oldPrice: '$780.000',
      price: '$680.000',
      description: 'Ideal para crear una tienda Shopify profesional desde cero o migración inicial, con setup completo y hasta 70 productos.',
      time: 'Entrega en 4 semanas.',
      cta: '-5% Solicita Asesoría Gratis',
      savingsText: 'Con esta promoción ahorras $34.000',
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
      oldPrice: '$1.400.000',
      price: '$1.200.000',
      description: 'La opción más completa para marcas en crecimiento: Preparado para campañas y crecimiento, Boleta SII, envíos automatizados y hasta 500 productos.',
      time: 'Entrega en 6 semanas.',
      cta: '-8% Solicita Asesoría Gratis',
      savingsText: 'Con esta promoción ahorras $96.000',
      recommended: true,
      color: 'bg-purple-600',
      lightColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      features: [
        { title: 'Todo lo del Plan Prende', detail: 'Incluye todas las funcionalidades del plan anterior, como setup completo, dominio, diseño en plantilla premium, carga inicial, pagos, logística básica, mobile-first y capacitación.' },
        { title: 'Carga de hasta 500 productos', detail: 'Carga o migración inicial de hasta 500 productos según calidad del archivo entregado (CSV/Excel).' },
        { title: 'SEO Técnico: Títulos y Metas', detail: 'Configuración inicial de títulos SEO, metadescripciones, URLs amigables, estructura básica de encabezados y optimización inicial para indexación.' },
        { title: 'Integración Google Analytics 4', detail: 'Configuración de Google Analytics 4 para medir tráfico, comportamiento de usuarios y eventos relevantes de la tienda.' },
        { title: 'Diseño personalizado por secciones', detail: 'Personalización de secciones clave como home, banners, productos destacados, beneficios, colecciones, llamados a la acción y bloques de confianza.' },
        { title: 'Sistema de Reviews de clientes', detail: 'Instalación o configuración de un sistema de reseñas para productos, ayudando a aumentar confianza y conversión.' },
        { title: 'Formulario de Newsletter', detail: 'Configuración de formulario de suscripción para captar correos de potenciales clientes y construir una base de datos comercial.' },
        { title: 'Soporte técnico 60 días', detail: 'Soporte posterior a la entrega para resolver dudas y asegurar el funcionamiento continuo.' },
        { title: 'Carrier Calculated Shipping (CCS)', detail: 'Activación de tarifas de envío calculadas por transportistas en tiempo real (Starken, BlueExpress, etc.).' },
        { title: 'Entrega en 6 semanas', detail: 'Desarrollo más completo, pensado para tiendas con mayor catálogo y necesidades comerciales más avanzadas.' }
      ]
    },
    {
      id: 'escala',
      name: 'SHOPIFY CONVERSIÓN',
      price: '$1.200.000',
      description: 'Ideal para marcas que buscan maximizar su tasa de ventas con theme propio para conversión, mejoras CRO en ficha de producto, integración ERP y Klaviyo.',
      time: 'Entrega en 8 semanas.',
      cta: '-10% Solicita Asesoría Gratis',
      savingsText: 'Con esta promoción ahorras $120.000',
      color: 'bg-zinc-900',
      lightColor: 'bg-zinc-100',
      textColor: 'text-zinc-900',
      features: [
        { title: 'Todo lo del Plan FULL', detail: 'Incluye todas las funcionalidades del Plan FULL, incluyendo carga de productos, SEO técnico, Google Analytics 4, reviews, newsletter y soporte prioritario.' },
        { title: 'Personalización de Theme Propio para Conversión', detail: 'Personalización completa de theme propio enfocado en eliminar fricción de compra, velocidad extrema y máxima rentabilidad.' },
        { title: 'Ficha de Producto con Mejoras CRO', detail: 'Optimización avanzada de Ficha de Producto con mejoras CRO (Conversion Rate Optimization), metacampos, badges de confianza y ofertas dinámicas.' },
        { title: 'Migración de hasta 1.000 productos', detail: 'Migración o carga de hasta 1.000 productos desde una tienda anterior, archivo Excel, CSV u otra fuente disponible. Incluye organización por colecciones y variantes.' },
        { title: 'Integración ERP: Bsale, Obuma o Rex', detail: 'Configuración inicial de integración con ERP según disponibilidad técnica para sincronización de stock y boleta electrónica.' },
        { title: 'Email Marketing con Klaviyo', detail: 'Instalación y configuración inicial de Klaviyo conectado con Shopify para flujos automáticos de carrito abandonado y bienvenida.' },
        { title: 'Páginas de aterrizaje a medida', detail: 'Diseño de páginas especiales para campañas, productos destacados y promociones enfocado en conversión.' },
        { title: 'Optimización de velocidad avanzada', detail: 'Revisión avanzada de rendimiento, optimización de imágenes, análisis de scripts y mejoras móvil.' },
        { title: 'Configuración Meta Pixel & API', detail: 'Instalación de Meta Pixel y Conversion API para campañas efectivas en Facebook e Instagram Ads.' },
        { title: 'Carrier Calculated Shipping (CCS)', detail: 'Activación de tarifas de envío calculadas por transportistas en tiempo real (Starken, BlueExpress, etc.).' },
        { title: 'Consultoría estratégica 1 a 1', detail: 'Sesión estratégica individual para revisar arquitectura e-commerce, propuesta de valor y optimización comercial.' }
      ]
    },
    {
      id: 'custom-elite',
      name: 'Shopify CUSTOM ELITE',
      price: 'A cotizar',
      description: 'La solución más completa con diseño desde cero en Figma, migración avanzada e integraciones ERP y georreferenciación.',
      time: 'Entrega A convenir.',
      cta: 'Solicita Asesoría Gratis',
      color: 'bg-emerald-600',
      lightColor: 'bg-emerald-50',
      textColor: 'text-emerald-600',
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

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <ShopifyPlansComparison />
        </div>
      </div>

      {/* SECCIÓN ANCHO COMPLETO: CARRIER CALCULATED SHIPPING (CCS) - DISEÑO CLARO */}
      <div className="w-full bg-zinc-50 text-zinc-950 py-16 lg:py-24 my-16 border-y border-zinc-200/80 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100/60 blur-[140px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left Header */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-100 border border-violet-200 text-violet-700 rounded-full text-xs font-mono font-bold uppercase tracking-widest mb-6">
                <Zap className="w-4 h-4 text-violet-600" />
                Factibilidad Logística
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight mb-4 font-heading text-zinc-950">
                Carrier Calculated <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-pink-600 to-purple-600 italic">Shipping (CCS)</span>
              </h3>

              <p className="text-zinc-600 text-base sm:text-lg leading-relaxed font-normal">
                Algunas integraciones logísticas requieren que la tienda tenga habilitadas las tarifas de envío calculadas por terceros (CCS).
              </p>
            </div>
            
            {/* Right Details */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-zinc-200/90 rounded-3xl p-6 sm:p-8 mb-6 shadow-sm">
                <p className="text-zinc-700 text-base sm:text-lg leading-relaxed font-normal">
                  Su disponibilidad depende del <strong className="text-zinc-950 font-bold">plan Shopify contratado</strong>, la aplicación seleccionada y las condiciones vigentes del proveedor. Antes de comenzar <strong className="text-violet-700 font-bold">validamos la factibilidad técnica</strong> y los costos externos asociados.
                </p>
              </div>

              <div className="p-6 bg-white rounded-3xl border border-zinc-200/90 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center shrink-0 mt-1 text-emerald-700">
                    <Check className="w-5 h-5" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-zinc-950 mb-2 font-heading">
                      Integración Logística Transparente
                    </h4>
                    <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
                      Te asesoramos para activar CCS con soporte de Shopify (por ejemplo en modalidad de pago anual) o configurar tarifas dinámicas estructuradas según dirección, peso y zonas de cobertura.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="mt-20 text-center">
          <p className="text-sm text-zinc-400 font-medium italic">
            * Todos los planes están sujetos a factibilidad técnica y volumen de catálogo.
          </p>
        </div>
      </div>
    </section>
  );
}
