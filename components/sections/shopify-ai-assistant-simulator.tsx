'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  Sparkles, 
  Send, 
  User, 
  CheckCircle2, 
  TrendingUp, 
  CreditCard, 
  Truck, 
  Puzzle, 
  BarChart3, 
  Search, 
  RefreshCw,
  Zap,
  ArrowRight,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';

interface TopicAiData {
  id: string;
  badge: string;
  title: string;
  shortDesc: string;
  icon: React.ElementType;
  question: string;
  aiResponse: {
    heading: string;
    summary: string;
    bullets: string[];
    technicalNote: string;
  };
}

const TOPICS: TopicAiData[] = [
  {
    id: 'cro',
    badge: 'VENTAS & UX',
    title: 'DISEÑO QUE CONVIERTE (CRO)',
    shortDesc: 'Estructuramos tu tienda para guiar al cliente hasta la compra, eliminando fricción y aumentando tu tasa de conversión.',
    icon: TrendingUp,
    question: '✨ ¿Cómo logran aumentar la tasa de conversión (CRO) en mi tienda Shopify?',
    aiResponse: {
      heading: 'Arquitectura de Ficha de Producto Orientada a la Venta',
      summary: 'Diseñamos cada pantalla eliminando puntos de fuga y aplicando principios de psicología del consumidor:',
      bullets: [
        'Botones de compra principales y fijos (Sticky Add to Cart) en móviles.',
        'Pruebas sociales integradas (sistema de reseñas de clientes con foto).',
        'Badges de confianza, garantías claras y calculador de envíos antes del checkout.',
        'Velocidad de carga extrema sin scripts innecesarios que ralenticen la compra.'
      ],
      technicalNote: 'Resultado: Tiendas diseñadas no solo para verse bien, sino para maximizar el retorno por cada visita.'
    }
  },
  {
    id: 'pagos-sii',
    badge: 'FINANZAS CHILE',
    title: 'PAGOS Y FACTURACIÓN AUTOMÁTICA',
    shortDesc: 'Integramos Webpay, Flow, Mercado Pago y conectamos la emisión de boletas y facturas electrónicas ante el SII.',
    icon: CreditCard,
    question: '💳 ¿Cómo funciona la integración de pasarelas de pago y boleta automática del SII?',
    aiResponse: {
      heading: 'Flujo 100% Automatizado de Cobro y Facturación en Chile',
      summary: 'Configuramos pasarelas locales e internacionales asegurando cobros en pesos chilenos (CLP):',
      bullets: [
        'Integración con Webpay Plus, Mercado Pago, Flow, VentiPay y Transferencias.',
        'Emisión automática de Boletas o Facturas electrónicas conectadas al SII (Bsale, Openfactura, SimpleBoleta).',
        'Envío automático del documento tributario PDF al correo del cliente al confirmar el pago.',
        'Soporte multi-moneda si planeas vender internacionalmente.'
      ],
      technicalNote: 'Ahorra horas de trabajo manual diario en emisión tributaria y conciliación de cuentas.'
    }
  },
  {
    id: 'despachos',
    badge: 'LOGÍSTICA',
    title: 'DESPACHOS EN CHILE EN TIEMPO REAL',
    shortDesc: 'Conectamos Starken, BlueExpress, Chilexpress y multi-couriers para configurar tarifas dinámicas según dirección, peso y cobertura.',
    icon: Truck,
    question: '🚚 ¿Cómo funcionan los envíos automáticos con Starken, BlueExpress y Chilexpress?',
    aiResponse: {
      heading: 'Cálculo de Despachos Transparente por Comuna y Región',
      summary: 'Configuramos las mejores opciones de despacho vigentes para el mercado chileno:',
      bullets: [
        'Tarifas dinámicas en tiempo real según dirección de entrega, dimensiones y peso.',
        'Integración nativa o vía multi-courier (Starken, BlueExpress, Chilexpress, Shipit, Envíame).',
        'Configuración de reglas de Envío Gratis por monto mínimo de compra.',
        'Integración de retiros en tienda (Click & Collect) y zonas con tarifa plana local.'
      ],
      technicalNote: 'Eliminamos la incertidumbre en el checkout entregando el precio exacto de despacho a tu comprador.'
    }
  },
  {
    id: 'erp',
    badge: 'AUTOMATIZACIÓN',
    title: 'SINCRONIZACIÓN & ERP',
    shortDesc: 'Sincronizamos inventario y ventas con tu ERP (Bsale, Obuma, Defontana, Laudus) para automatizar tu operación.',
    icon: Puzzle,
    question: '🔄 ¿Cómo sincronizan el stock y las ventas entre Shopify y mi sistema ERP?',
    aiResponse: {
      heading: 'Inventario Unificado y Sincronizado en Tiempo Real',
      summary: 'Evitamos quiebres de stock conectando tu tienda web con tu software contable o de bodega:',
      bullets: [
        'Conexión API bidireccional con Bsale, Obuma, Defontana, Laudus y relacionales.',
        'Descuento automático de stock cuando vendes tanto en la web como en tu tienda física.',
        'Sincronización masiva de precios, familias de productos y descripciones.',
        'Reducción total de errores de digitación e inventario duplicado.'
      ],
      technicalNote: 'Tu operación comercial funciona en piloto automático con inventario siempre al día.'
    }
  },
  {
    id: 'analitica',
    badge: 'MEDICIÓN 360°',
    title: 'ANALÍTICA Y CAMPAÑAS PUBLICITARIAS',
    shortDesc: 'Medición confiable con GA4, Meta Pixel, Conversion API y Merchant Center para tomar decisiones comerciales reales.',
    icon: BarChart3,
    question: '📊 ¿Qué herramientas de analítica y medición para Ads dejan configuradas?',
    aiResponse: {
      heading: 'Medición Precisa de Datos para Maximizar tu ROAS',
      summary: 'Medimos con exactitud el comportamiento de tus usuarios y el retorno de inversión publicitaria:',
      bullets: [
        'Google Analytics 4 (GA4) con seguimiento de eventos e-commerce (Purchase, AddToCart, Checkout).',
        'Meta Pixel + Conversion API (CAPI) desde el servidor para sobrepasar bloqueos de iOS y navegadores.',
        'Catálogo sincronizado con Google Merchant Center para publicidad en Google Shopping.',
        'Trazabilidad limpia para campañas de Facebook, Instagram y TikTok Ads.'
      ],
      technicalNote: 'Obtienes datos 100% fiables para escalar la inversión en tus campañas de marketing digital.'
    }
  },
  {
    id: 'seo',
    badge: 'TRÁFICO ORGÁNICO',
    title: 'SEO TÉCNICO DE ALTO RENDIMIENTO',
    shortDesc: 'Estructura optimizada, código limpio, metadatos y velocidad mobile-first para ser rastreada, indexada y ganar tráfico orgánico.',
    icon: Search,
    question: '🔍 ¿Cómo está optimizada la tienda para posicionar orgánicamente en Google?',
    aiResponse: {
      heading: 'Infraestructura Técnica Preparada para Motores de Búsqueda',
      summary: 'Optimizamos la tienda a nivel de arquitectura y código para que Google indexe rápido tu catálogo:',
      bullets: [
        'Jerarquía SEO correcta: etiquetas H1, H2, H3, meta-títulos y meta-descripciones.',
        'Marcado de datos estructurados Schema.org (JSON-LD) para productos, precios y stock.',
        'Optimización de imágenes en formato WebP con atributos ALT descriptivos.',
        'Sitemap XML automático enviado a Google Search Console.'
      ],
      technicalNote: 'Tu e-commerce nace técnicamente preparado para escalar orgánicamente sin depender solo de publicidad pagada.'
    }
  }
];

export default function ShopifyAiAssistantSimulator() {
  const [selectedTopic, setSelectedTopic] = useState<TopicAiData>(TOPICS[0]);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string; topicData?: TopicAiData }>>([
    {
      sender: 'ai',
      text: '¡Hola! 👋 Soy el Asistente Virtual de Webunica. Haz clic en cualquiera de las 6 áreas técnicas de abajo o selecciona una pregunta sugerida para ver cómo resolvemos la arquitectura e-commerce de tu tienda Shopify en Chile.',
      topicData: TOPICS[0]
    }
  ]);

  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [customQuery, setCustomQuery] = useState<string>('');
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const handleSelectTopic = (topic: TopicAiData) => {
    setSelectedTopic(topic);
    setIsTyping(true);

    // Append user question
    const newMessages = [
      ...messages,
      { sender: 'user' as const, text: topic.question }
    ];
    setMessages(newMessages);

    // Simulate AI response after typing delay
    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          sender: 'ai',
          text: topic.aiResponse.heading,
          topicData: topic
        }
      ]);
      setIsTyping(false);
    }, 600);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customQuery.trim()) return;

    const queryText = customQuery.trim();
    setCustomQuery('');
    setIsTyping(true);

    // Find if custom query matches any keywords or default to closest topic
    const matchedTopic = TOPICS.find(t => 
      queryText.toLowerCase().includes(t.id) || 
      queryText.toLowerCase().includes(t.title.toLowerCase().split(' ')[0])
    ) || selectedTopic;

    const userMsg = { sender: 'user' as const, text: `💬 ${queryText}` };
    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          sender: 'ai',
          text: `Respuesta para tu consulta sobre: "${queryText}":`,
          topicData: matchedTopic
        }
      ]);
      setIsTyping(false);
    }, 700);
  };

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="w-full">
      
      {/* Header Badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-violet-100 text-violet-700 text-xs font-mono font-bold uppercase tracking-widest rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5 text-violet-600 animate-pulse" />
            Asistente IA Interactivo E-commerce
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 uppercase font-heading tracking-tight">
            Explora las capacidades de tu futura tienda Shopify
          </h3>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200/80 rounded-full text-xs font-mono text-emerald-700 font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>IA en vivo • Asistente Webunica Chile</span>
        </div>
      </div>

      {/* Main Container: 6 Interactive Cards + AI Terminal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: 6 Commercial Benefit Cards (Clickable) */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TOPICS.map((topic) => {
            const Icon = topic.icon;
            const isSelected = selectedTopic.id === topic.id;

            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => handleSelectTopic(topic)}
                className={`text-left p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-zinc-950 text-white border-violet-500 shadow-2xl ring-2 ring-violet-500/40 scale-[1.02]'
                    : 'bg-white text-zinc-950 border-zinc-200/90 hover:border-violet-300 hover:shadow-lg'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-r from-violet-600 to-pink-600 text-white text-[10px] font-mono font-bold uppercase tracking-widest rounded-bl-xl">
                    Activo en IA
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-violet-600 text-white'
                        : 'bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      isSelected
                        ? 'bg-white/10 text-violet-300 border border-white/10'
                        : 'bg-violet-50 text-violet-600'
                    }`}>
                      {topic.badge}
                    </span>
                  </div>

                  <h4 className={`text-base font-black uppercase mb-2 font-heading tracking-tight ${
                    isSelected ? 'text-white' : 'text-zinc-950 group-hover:text-violet-700'
                  }`}>
                    {topic.title}
                  </h4>
                  
                  <p className={`text-xs font-normal leading-relaxed ${
                    isSelected ? 'text-zinc-300' : 'text-zinc-600'
                  }`}>
                    {topic.shortDesc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between text-[11px] font-mono font-bold uppercase tracking-wider">
                  <span className={isSelected ? 'text-pink-400' : 'text-violet-600'}>
                    Ver respuesta IA →
                  </span>
                  <Sparkles className={`w-3.5 h-3.5 ${isSelected ? 'text-pink-400' : 'text-zinc-400'}`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Simulated AI Terminal Window */}
        <div className="lg:col-span-6 bg-zinc-950 text-white rounded-[2.5rem] border border-zinc-800 shadow-2xl overflow-hidden flex flex-col h-[600px] lg:h-[640px]">
          
          {/* AI Window Titlebar */}
          <div className="bg-zinc-900 px-6 py-4 border-b border-zinc-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-600 to-pink-500 flex items-center justify-center text-white font-bold shadow-md">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-none">Asistente IA Webunica</h4>
                <p className="text-[11px] font-mono text-zinc-400 mt-0.5">Shopify E-commerce Expert v2.5</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleSelectTopic(selectedTopic)}
                title="Reiniciar chat"
                className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Preset Question Chips */}
          <div className="px-4 py-3 bg-zinc-900/60 border-b border-zinc-800/80 flex items-center gap-2 overflow-x-auto scrollbar-none shrink-0 text-xs font-mono">
            <span className="text-zinc-500 uppercase tracking-widest text-[10px] shrink-0 font-bold">Chips IA:</span>
            {TOPICS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => handleSelectTopic(t)}
                className={`px-3 py-1 rounded-full shrink-0 transition-all font-medium border ${
                  selectedTopic.id === t.id
                    ? 'bg-violet-600 text-white border-violet-400'
                    : 'bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10'
                }`}
              >
                {t.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Chat Messages Log Area */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-zinc-800">
            {messages.map((msg, index) => {
              const isUser = msg.sender === 'user';

              return (
                <div
                  key={index}
                  className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                    isUser 
                      ? 'bg-pink-600 text-white' 
                      : 'bg-gradient-to-tr from-violet-600 to-purple-600 text-white'
                  }`}>
                    {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  <div className={`max-w-[85%] rounded-3xl p-5 text-sm leading-relaxed ${
                    isUser
                      ? 'bg-violet-600 text-white font-medium rounded-tr-none'
                      : 'bg-zinc-900 border border-zinc-800 text-zinc-100 rounded-tl-none shadow-lg'
                  }`}>
                    <p className="font-medium">{msg.text}</p>

                    {/* Rich AI Topic Card Details */}
                    {!isUser && msg.topicData && (
                      <div className="mt-4 pt-4 border-t border-zinc-800/80 space-y-3">
                        <div className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          {msg.topicData.aiResponse.heading}
                        </div>

                        <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                          {msg.topicData.aiResponse.summary}
                        </p>

                        <ul className="space-y-2 my-2">
                          {msg.topicData.aiResponse.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2 text-xs text-zinc-200">
                              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0 mt-1.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="p-3 bg-violet-950/60 border border-violet-800/40 rounded-xl text-[11px] text-violet-200 font-mono">
                          💡 <span className="font-bold text-violet-300">Nota Técnica:</span> {msg.topicData.aiResponse.technicalNote}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-purple-600 flex items-center justify-center text-white shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-2xl rounded-tl-none text-xs text-zinc-400 flex items-center gap-2 font-mono">
                  <span className="w-2 h-2 rounded-full bg-violet-500 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-pink-500 animate-bounce delay-100" />
                  <span className="w-2 h-2 rounded-full bg-purple-500 animate-bounce delay-200" />
                  <span>Procesando respuesta técnica...</span>
                </div>
              </div>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* Input Box & CTA Bar */}
          <div className="p-4 bg-zinc-900 border-t border-zinc-800 shrink-0">
            <form onSubmit={handleCustomSubmit} className="flex items-center gap-2 mb-3">
              <input
                type="text"
                value={customQuery}
                onChange={(e) => setCustomQuery(e.target.value)}
                placeholder="Escribe una pregunta sobre tu tienda Shopify..."
                className="flex-1 bg-zinc-950 border border-zinc-800 text-white rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-violet-500 transition-colors font-mono placeholder:text-zinc-600"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
              >
                <span>Preguntar</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span className="font-mono text-[10px]">¿Tienes dudas complejas?</span>
              <LeadButton className="text-pink-400 hover:text-pink-300 font-bold uppercase text-[11px] tracking-wider transition-colors flex items-center gap-1 cursor-pointer">
                <span>Hablar con un Ingeniero Humano</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </LeadButton>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
