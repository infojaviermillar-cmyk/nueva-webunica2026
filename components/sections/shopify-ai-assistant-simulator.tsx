'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  CreditCard, 
  Truck, 
  Puzzle, 
  BarChart3, 
  Search, 
  ArrowRight,
  ShieldCheck,
  Zap,
  ChevronRight,
  FileCheck
} from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';

interface TopicSeoData {
  id: string;
  badge: string;
  question: string;
  shortDesc: string;
  icon: React.ElementType;
  seoKeywords: string[];
  response: {
    heading: string;
    summary: string;
    highlights: Array<{ title: string; desc: string }>;
    technicalBox: {
      title: string;
      desc: string;
    };
  };
}

const SEO_TOPICS: TopicSeoData[] = [
  {
    id: 'cro',
    badge: 'Ventas & UX Chile',
    question: '¿Cómo adaptan el diseño para maximizar ventas (CRO) en Chile?',
    shortDesc: 'Diseño e-commerce mobile-first enfocado en conversión y retorno de inversión.',
    icon: TrendingUp,
    seoKeywords: ['diseño tiendas shopify chile', 'optimización cro shopify', 'agencia shopify partner chile'],
    response: {
      heading: 'Diseño de Tiendas Shopify Orientado a Conversión (CRO)',
      summary: 'Como agencia Shopify Partner en Chile, estructuramos tu tienda virtual eliminando fricciones de compra y aplicando las mejores prácticas de Conversion Rate Optimization (CRO) para el mercado chileno.',
      highlights: [
        {
          title: 'Navegación Mobile-First 100%',
          desc: 'Más del 80% del tráfico e-commerce en Chile proviene de smartphones. Optimizamos velocidad, menús táctiles y checkout rápido en celulares.'
        },
        {
          title: 'Ficha de Producto de Alto Rendimiento',
          desc: 'Layout enfocado en destacar beneficios, fotos HD, galerías interactivas, llamado a la acción fijo (Sticky Cart) y elementos de confianza.'
        },
        {
          title: 'Prueba Social & Reviews Verificadas',
          desc: 'Integración de opiniones de clientes reales con imágenes y estrellas para aumentar la credibilidad y acelerar la decisión de compra.'
        },
        {
          title: 'Proceso de Pago Fluido sin Fricción',
          desc: 'Minimizamos los pasos desde la selección del producto hasta la confirmación de la venta.'
        }
      ],
      technicalBox: {
        title: 'Impacto Comercial Directo',
        desc: 'Una tienda Shopify con diseño CRO profesional incrementa la tasa de conversión promedio y reduce el costo de adquisición de clientes (CAC).'
      }
    }
  },
  {
    id: 'pagos-sii',
    badge: 'Finanzas & Pasarelas',
    question: '¿Cómo funcionan Webpay, Mercado Pago y la boleta automática SII?',
    shortDesc: 'Pasarelas de pago chilenas e integración de emisión tributaria automática.',
    icon: CreditCard,
    seoKeywords: ['pasarelas de pago shopify chile', 'webpay plus shopify', 'boleta electronica sii shopify'],
    response: {
      heading: 'Integración de Pasarelas de Pago Locales y Boleta Electrónica SII',
      summary: 'Configuramos un ecosistema de pagos seguro y compatible con el comercio electrónico en Chile, permitiendo que tu tienda reciba pagos en pesos chilenos (CLP) y emita documentos tributarios de forma 100% automatizada.',
      highlights: [
        {
          title: 'Pasarelas Locales Integradas',
          desc: 'Conexión oficial con Webpay Plus (Transbank), Mercado Pago Chile, Flow y VentiPay para recibir Tarjetas de Crédito, Débito (Redcompra) y transferencias.'
        },
        {
          title: 'Emisión Automática de Boletas y Facturas SII',
          desc: 'Al confirmarse la compra en Shopify, el sistema emite automáticamente la Boleta Electrónica tributaria ante el Servicio de Impuestos Internos (SII).'
        },
        {
          title: 'Envío de Documento Tributario por E-mail',
          desc: 'El cliente recibe el comprobante PDF de su boleta en su correo electrónico al instante sin requerir gestión manual de tu equipo.'
        },
        {
          title: 'Sin Cobros Manuales ni Retrasos Operativos',
          desc: 'Conciliación limpia de ventas para facilitar tu contabilidad mensual.'
        }
      ],
      technicalBox: {
        title: 'Automatización Tributaria en Chile',
        desc: 'Conectamos tu tienda Shopify con sistemas certificados como Bsale, Openfactura o SimpleBoleta para cumplir con la normativa legal chilena.'
      }
    }
  },
  {
    id: 'despachos',
    badge: 'Logística & Couriers',
    question: '¿Cómo se integran los envíos automáticos con Starken y BlueExpress?',
    shortDesc: 'Cálculo de tarifas dinámicas en tiempo real por región y comuna en Chile.',
    icon: Truck,
    seoKeywords: ['envios shopify chile', 'integracion starken shopify', 'blueexpress shopify chile'],
    response: {
      heading: 'Integración Logística y Tarifas de Envíos en Tiempo Real para Chile',
      summary: 'Resolvemos la logística e-commerce en Chile conectando las principales empresas de transporte para mostrar cotizaciones precisas de despacho en el checkout.',
      highlights: [
        {
          title: 'Integración Multi-Courier en Chile',
          desc: 'Conexión con Starken, BlueExpress, Chilexpress, Shipit y Envíame para despacho en todo el territorio nacional.'
        },
        {
          title: 'Cálculo Dinámico según Dirección y Peso',
          desc: 'Cotización automática de tarifas en tiempo real según la comuna de destino, dimensiones y peso total del pedido.'
        },
        {
          title: 'Reglas de Envío Gratis y Tarifas Planas',
          desc: 'Configuración flexible de promociones como "Envío Gratis por compras sobre $50.000" o tarifas fijas por región.'
        },
        {
          title: 'Retiro en Tienda (Click & Collect)',
          desc: 'Opción de retiro en sucursal física habilitada directamente en la pantalla de despacho.'
        }
      ],
      technicalBox: {
        title: 'Carrier Calculated Shipping (CCS)',
        desc: 'Te asesoramos técnicamente para habilitar la función de tarifas calculadas por terceros oficial de Shopify según las condiciones de tu plan.'
      }
    }
  },
  {
    id: 'erp',
    badge: 'Automatización ERP',
    question: '¿Cómo sincronizan el inventario con Bsale, Obuma o Defontana?',
    shortDesc: 'Sincronización de stock y ventas en tiempo real entre Shopify y tu ERP contable.',
    icon: Puzzle,
    seoKeywords: ['integracion erp shopify chile', 'bsale shopify chile', 'sincronizacion stock shopify'],
    response: {
      heading: 'Sincronización de Inventario y Ventas con ERPs en Chile',
      summary: 'Conectamos tu tienda online Shopify directamente con tu sistema ERP o software contable local para mantener el inventario unificado entre tu tienda física y tu canal web.',
      highlights: [
        {
          title: 'Sincronización de Stock en Tiempo Real',
          desc: 'Cada venta en la web o en tienda física descuenta inventario automáticamente en ambas plataformas, evitando ventas sin stock.'
        },
        {
          title: 'Integración con ERPs Líderes en Chile',
          desc: 'Conexión probada con Bsale, Obuma, Defontana, Laudus y desarrollo de conectores personalizados vía API.'
        },
        {
          title: 'Actualización Masiva de Catálogo',
          desc: 'Sincronización periódica de precios, nombres de productos, categorías y variantes sin trabajo manual.'
        },
        {
          title: 'Control Operativo Centralizado',
          desc: 'Gestiona toda tu empresa desde un solo panel de administración consolidado.'
        }
      ],
      technicalBox: {
        title: 'Operación Sin Errores',
        desc: 'Eliminamos la digitación manual y los quiebres de stock en periodos de alto tráfico como CyberDay o Navidad.'
      }
    }
  },
  {
    id: 'analitica',
    badge: 'Analítica & Ads',
    question: '¿Qué herramientas de medición para Google Ads y Meta Ads incluyen?',
    shortDesc: 'Setup avanzado de GA4, Meta Pixel con Conversion API (CAPI) y Merchant Center.',
    icon: BarChart3,
    seoKeywords: ['meta pixel shopify chile', 'ga4 e-commerce shopify', 'google merchant center shopify'],
    response: {
      heading: 'Analítica Web y Medición de Conversiones para Marketing Digital',
      summary: 'Configuramos una infraestructura de medición completa para que puedas evaluar el retorno exacto de tu inversión en campañas de publicidad digital en Facebook, Instagram y Google.',
      highlights: [
        {
          title: 'Google Analytics 4 (GA4) E-commerce',
          desc: 'Configuración de eventos clave del embudo: vistas de producto, agregar al carrito, inicio de pago y ventas completadas.'
        },
        {
          title: 'Meta Pixel + Conversion API (CAPI)',
          desc: 'Instalación del pixel con API de conversiones desde el servidor para garantizar la captura de datos ante bloqueos de navegadores.'
        },
        {
          title: 'Sincronización Google Merchant Center',
          desc: 'Catálogo de productos conectado con Google Shopping para aparecer en búsquedas comerciales.'
        },
        {
          title: 'Trazabilidad de Campañas Publicitarias',
          desc: 'Datos precisos para optimizar campañas enfocadas en retorno sobre la inversión publicitaria (ROAS).'
        }
      ],
      technicalBox: {
        title: 'Medición 100% Confiable',
        desc: 'Garantizamos que el 100% de los datos de conversión lleguen limpios a tus plataformas de anuncios.'
      }
    }
  },
  {
    id: 'seo',
    badge: 'Posicionamiento Google',
    question: '¿Cómo preparan la tienda para posicionar orgánicamente en Google?',
    shortDesc: 'Optimización SEO técnica, velocidad mobile-first y marcado de datos estructurados.',
    icon: Search,
    seoKeywords: ['seo tiendas shopify chile', 'posicionamiento seo shopify', 'experto shopify chile'],
    response: {
      heading: 'Optimización SEO Técnico para Tiendas Shopify en Chile',
      summary: 'Entregamos tu tienda Shopify preparada técnicamente para ser rastreada, indexada y ganar tráfico orgánico constante en los primeros resultados de búsqueda de Google Chile.',
      highlights: [
        {
          title: 'Estructura SEO On-Page de Catálogo',
          desc: 'Optimización estratégica de títulos SEO, meta-descripciones, URLs amigables y jerarquía H1-H3 en productos y colecciones.'
        },
        {
          title: 'Datos Estructurados Schema.org (JSON-LD)',
          desc: 'Marcado de datos técnico para que Google muestre precio, stock, valoraciones e imágenes destacadas en los resultados.'
        },
        {
          title: 'Rendimiento y Carga Rápida Mobile',
          desc: 'Compresión de imágenes WebP y optimización de código para obtener puntajes altos en Core Web Vitals.'
        },
        {
          title: 'Indexación Rápida en Google',
          desc: 'Generación y envío automático del mapa del sitio XML a Google Search Console.'
        }
      ],
      technicalBox: {
        title: 'Tráfico Orgánico Sostenible',
        desc: 'Construimos una base sólida para atraer clientes de forma orgánica sin depender únicamente del gasto publicitario diario.'
      }
    }
  }
];

export default function ShopifyAiAssistantSimulator() {
  const [activeTopicId, setActiveTopicId] = useState<string>(SEO_TOPICS[0].id);

  const activeTopic = SEO_TOPICS.find((t) => t.id === activeTopicId) || SEO_TOPICS[0];
  const TopicIcon = activeTopic.icon;

  return (
    <div className="w-full">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-100 border border-violet-200/80 text-violet-700 text-xs font-mono font-bold uppercase tracking-widest rounded-full mb-4">
          <Zap className="w-4 h-4 text-violet-600" />
          <span>Arquitectura E-commerce & Preguntas Frecuentes</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 uppercase font-heading tracking-tight leading-tight">
          Todo lo que necesitas saber <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-[#FF0085]">
            para crear tu tienda Shopify en Chile
          </span>
        </h2>
        
        <p className="text-zinc-600 text-base sm:text-lg font-light mt-3 leading-relaxed">
          Resolvemos pasarelas de pago, boleta SII, envíos automáticos y SEO técnico para que puedas vender y crecer sin fricciones. Haz clic en cualquier pregunta para ver el alcance técnico.
        </p>
      </div>

      {/* 2-Column Layout Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: 6 Questions / Topics List */}
        <div className="lg:col-span-5 space-y-3">
          {SEO_TOPICS.map((topic) => {
            const Icon = topic.icon;
            const isActive = topic.id === activeTopicId;

            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => setActiveTopicId(topic.id)}
                className={`w-full text-left p-5 rounded-3xl border transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer group relative ${
                  isActive
                    ? 'bg-zinc-950 text-white border-violet-500 shadow-xl ring-2 ring-violet-500/30 translate-x-1'
                    : 'bg-white text-zinc-900 border-zinc-200/90 hover:border-violet-300 hover:shadow-md hover:bg-zinc-50/80'
                }`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                    isActive
                      ? 'bg-gradient-to-tr from-violet-600 to-pink-600 text-white shadow-md'
                      : 'bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-widest block mb-0.5 ${
                      isActive ? 'text-pink-400' : 'text-violet-600'
                    }`}>
                      {topic.badge}
                    </span>
                    <h4 className={`text-sm sm:text-base font-bold leading-tight truncate font-heading ${
                      isActive ? 'text-white font-black' : 'text-zinc-900 group-hover:text-violet-700'
                    }`}>
                      {topic.question}
                    </h4>
                  </div>
                </div>

                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  isActive
                    ? 'bg-violet-600 text-white'
                    : 'bg-zinc-100 text-zinc-400 group-hover:bg-violet-100 group-hover:text-violet-600'
                }`}>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-0.5' : ''}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT COLUMN: Explained Response Panel */}
        <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 sm:p-10 border border-zinc-200 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[580px]">
          
          {/* Top Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-violet-100/60 to-pink-100/20 rounded-bl-full pointer-events-none" />

          <div>
            {/* Header of Active Response */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-zinc-100 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 via-purple-600 to-pink-600 text-white flex items-center justify-center shadow-lg">
                  <TopicIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-violet-600 bg-violet-50 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-1">
                    {activeTopic.badge}
                  </span>
                  <h4 className="text-lg sm:text-xl font-black uppercase text-zinc-950 font-heading leading-tight">
                    {activeTopic.response.heading}
                  </h4>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <p className="text-base sm:text-lg text-zinc-700 font-normal leading-relaxed mb-8 relative z-10">
              {activeTopic.response.summary}
            </p>

            {/* Detailed Bullet Points Grid */}
            <div className="space-y-4 mb-8 relative z-10">
              {activeTopic.response.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-zinc-50/80 border border-zinc-200/80 hover:bg-violet-50/40 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-zinc-950 mb-0.5 font-heading">
                      {item.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* High-Impact Technical Scope Box */}
            <div className="p-5 bg-gradient-to-r from-zinc-900 to-zinc-950 text-white rounded-2xl border border-zinc-800 mb-8 relative z-10 shadow-md">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-pink-400 uppercase tracking-widest mb-1">
                <Zap className="w-4 h-4" />
                {activeTopic.response.technicalBox.title}
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
                {activeTopic.response.technicalBox.desc}
              </p>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <div className="text-xs text-zinc-500 font-mono text-center sm:text-left">
              <span>SEO & Arquitectura Shopify Chile • Webunica Partner</span>
            </div>

            <LeadButton className="w-full sm:w-auto px-6 py-3.5 bg-[#2C02A5] hover:bg-violet-900 text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-violet-900/20 text-center flex items-center justify-center gap-2 cursor-pointer">
              <span>Agenda una asesoría técnica gratuita</span>
              <ArrowRight className="w-4 h-4" />
            </LeadButton>
          </div>

        </div>

      </div>

    </div>
  );
}
