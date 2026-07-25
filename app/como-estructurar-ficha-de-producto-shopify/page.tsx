'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ShoppingBag, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Star, 
  Sparkles, 
  HelpCircle, 
  ShieldCheck, 
  Truck, 
  Copy, 
  Check, 
  Smartphone, 
  Zap, 
  Eye, 
  AlertTriangle, 
  Layers, 
  FileText,
  RotateCcw,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';

export default function FichaProductoShopifyPage() {
  const [activeZone, setActiveZone] = useState<number>(1);
  const [copiedTemplate, setCopiedTemplate] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // ─── Checklist Items Data ──────────────────────────────────────────────────
  const checklistData = [
    { id: 't1', text: 'Título claro y descriptivo (no sólo código o marca)', category: 'Zona 1: Entrada' },
    { id: 't2', text: 'Precio visible con IVA e impuestos explicados sin engaños', category: 'Zona 1: Entrada' },
    { id: 't3', text: 'Galería con fotos del producto en uso real o a escala', category: 'Zona 1: Entrada' },
    { id: 't4', text: 'Botón "Agregar al carrito" grande, destacado y accesible', category: 'Zona 1: Entrada' },
    { id: 't5', text: 'Puntuación con estrellas y acceso fácil a reseñas de clientes', category: 'Zona 1: Entrada' },
    { id: 't6', text: 'Selector de variantes cómodo (color, talla) con guía visible', category: 'Zona 1: Entrada' },
    { id: 't7', text: 'Promesa de envío verídica (días hábiles y cobertura en Chile)', category: 'Zona 2: Confianza' },
    { id: 't8', text: 'Descripción enfocada en beneficios útiles y no sólo características', category: 'Zona 2: Confianza' },
    { id: 't9', text: 'Garantía legal (6 meses SERNAC en Chile) y política de cambios explicada', category: 'Zona 2: Confianza' },
    { id: 't10', text: '3 o 4 testimonios o opiniones reales destacadas con fotos', category: 'Zona 3: Pruebas' },
    { id: 't11', text: 'Preguntas frecuentes breves resolviendo las objeciones principales', category: 'Zona 3: Pruebas' },
    { id: 't12', text: 'Botón de compra fijo (Sticky CTA) optimizado para teléfonos celulares', category: 'Zona 4: Cierre' },
  ];

  const totalChecklist = checklistData.length;
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const scorePercent = Math.round((checkedCount / totalChecklist) * 100);

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const resetChecklist = () => {
    setCheckedItems({});
  };

  const templateText = `[TÍTULO DEL PRODUCTO]
Ej: Polera Térmica Transpirable - Colección Invierno

[SUBTÍTULO O PROMESA PRINCIPAL]
Mantén el calor corporal sin sudar en tus actividades al aire libre.

[LO QUE HACE ÚNICO A ESTE PRODUCTO]
- Beneficio 1: [Característica] que te ayuda a [Resultado útil].
- Beneficio 2: [Característica] para evitar [Molestia común].
- Beneficio 3: [Característica] pensada para durar [Tiempo/Uso].

[¿CÓMO USAR O ELEGIR TU TALLA?]
Revisa nuestra guía de tallas antes de comprar. Si dudas entre dos tallas, te recomendamos elegir la mayor.

[¿QUÉ INCLUYE TU PAQUETE?]
- 1x [Nombre del producto]
- Embalaje ecológico de protección

[DESPACHO Y GARANTÍA EN CHILE]
- Despacho a todo Chile por Starken / Blue Express (2 a 4 días hábiles).
- Garantía legal de 6 meses (SERNAC) y 30 días para cambios sin complicaciones.`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(templateText);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 3000);
  };

  // Structured Data Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        "name": "Cómo Estructurar la Ficha de Producto Perfecta en Shopify",
        "description": "Guía práctica paso a paso para optimizar la página de producto en Shopify, transmitir confianza y aumentar las ventas sin complicaciones técnicas.",
        "image": "https://webunica.cl/logo-webunica.png.webp",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Primera Pantalla: Decisión Inicial",
            "text": "Presenta el título claro, fotos en contexto, precio sin ambigüedades y el botón de compra dominante."
          },
          {
            "@type": "HowToStep",
            "name": "Primer Scroll: Comprensión y Beneficios",
            "text": "Explica en lenguaje cercano cómo el producto resuelve el problema del cliente y sus especificaciones útiles."
          },
          {
            "@type": "HowToStep",
            "name": "Segundo Scroll: Validación Social",
            "text": "Muestra opiniones reales de compradores, preguntas frecuentes y productos complementarios."
          },
          {
            "@type": "HowToStep",
            "name": "Cierre: Eliminación de Riesgo y Experiencia Móvil",
            "text": "Agrega políticas de garantía SERNAC en Chile, datos de contacto y botón flotante en móviles."
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://webunica.cl" },
          { "@type": "ListItem", "position": 2, "name": "Recursos", "item": "https://webunica.cl/recursos" },
          { "@type": "ListItem", "position": 3, "name": "Ficha de Producto Shopify", "item": "https://webunica.cl/como-estructurar-ficha-de-producto-shopify" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased selection:bg-violet-100 selection:text-violet-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pt-[16vh] lg:pt-40 pb-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-6 mb-8">
          <ol className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            <li><Link href="/" className="hover:text-zinc-900 transition-colors">Inicio</Link></li>
            <li>/</li>
            <li><Link href="/recursos" className="hover:text-zinc-900 transition-colors">Recursos</Link></li>
            <li>/</li>
            <li className="text-violet-600 font-bold">Ficha de Producto Shopify</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-violet-50 border border-violet-200 rounded-full text-violet-700 text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-violet-600" />
            Guía Práctica &amp; Sin Complicaciones • Shopify Chile
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.95] mb-8 text-zinc-950">
            Cómo Estructurar la <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600">Ficha de Producto</span> en Shopify para Vender Más
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 font-light max-w-3xl mx-auto leading-relaxed mb-10">
            Una página de producto exitosa no presiona ni miente: <strong className="text-zinc-900 font-bold">explica el valor con claridad</strong>, aclara las dudas en segundos, transmite seguridad y hace que comprar sea la opción más simple.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">
            <span className="px-4 py-2 bg-zinc-100 rounded-full border border-zinc-200">✓ Sin Jerga Técnica</span>
            <span className="px-4 py-2 bg-zinc-100 rounded-full border border-zinc-200">✓ Método de 4 Zonas</span>
            <span className="px-4 py-2 bg-zinc-100 rounded-full border border-zinc-200">✓ Ley SERNAC Chile</span>
            <span className="px-4 py-2 bg-zinc-100 rounded-full border border-zinc-200">✓ Checklist Interactivo</span>
          </div>
        </section>

        {/* 1. Principio Central: Las 5 Preguntas en 3 Segundos */}
        <section className="w-full bg-[#3c096c] text-white py-16 sm:py-20 lg:py-24 mb-20 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-violet-300">Regla de Oro</span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mt-2 mb-4">
                Tu cliente decide en 3 segundos si se queda o se va
              </h2>
              <p className="text-purple-100 font-light text-base leading-relaxed">
                Cuando una persona llega a tu producto desde Google, Instagram o un anuncio, no tiene tiempo para adivinar. La página debe responder de inmediato a estas 5 preguntas que todos se hacen mentalmente:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { num: "01", q: "¿Qué es este producto y cuál es su beneficio principal?", desc: "Responde de forma clara el nombre y la solución que ofrece sin palabras rebuscadas." },
                { num: "02", q: "¿Es adecuado para mi necesidad, talla o espacio?", desc: "Aclara medidas, usos recomendados, colores reales y compatibilidad." },
                { num: "03", q: "¿Por qué debería elegirlo frente a otras tiendas?", desc: "Destaca la calidad del material, el servicio postventa o detalles únicos." },
                { num: "04", q: "¿Qué garantía tengo si no me gusta o llega defectuoso?", desc: "Ofrece la seguridad del despacho verídico y la garantía legal SERNAC." },
                { num: "05", q: "¿Cómo lo compro ahora mismo?", desc: "Un botón visible y fácil de presionar en celulares y computadores." },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 border border-white/15 p-6 rounded-2xl hover:border-violet-300/50 transition-colors">
                  <div className="text-2xl font-black text-violet-300 mb-2">{item.num}</div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">{item.q}</h3>
                  <p className="text-xs text-purple-100/80 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Los 7 Errores que Matan las Ventas */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-red-500 bg-red-50 px-3 py-1 rounded-full border border-red-100">
              Evita estos tropiezos
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-zinc-950 mt-4 mb-3">
              Los 7 Errores Más Comunes que Espantan Compradores
            </h2>
            <p className="text-zinc-500 text-base max-w-2xl mx-auto font-light">
              Muchas tiendas no venden lo que deberían por pequeños detalles en su página de producto. Revisa si estás cometiendo alguno de estos errores:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                err: "1. Títulos técnicos o vacíos",
                desc: "Poner sólo 'Modelo X-400' sin explicar qué es. Tu cliente no memoriza códigos de proveedor.",
                sol: "Pónselo fácil: 'Polera Térmica Transpirable X-400'."
              },
              {
                err: "2. Fotos solas en fondo blanco sin contexto",
                desc: "Mostrar el objeto aislado dificulta entender el tamaño real o cómo se ve en la vida real.",
                sol: "Incluye al menos una foto en uso, al lado de una mano o en un espacio real."
              },
              {
                err: "3. Botón de compra débil o escondido",
                desc: "Botones pequeños, de colores deslavados o que quedan tapados al hacer scroll en celular.",
                sol: "El botón 'Agregar al Carrito' debe ser el elemento más llamativo y fácil de tocar."
              },
              {
                err: "4. Urgencia o contadores falsos",
                desc: "Relojes regresivos que se reinician o decir '¡Quedan 2 unidades!' cuando hay 500 en bodega.",
                sol: "Destruye tu credibilidad. Usa stock verídico o promete tiempos de entrega reales."
              },
              {
                err: "5. Descripciones copiadas del fabricante",
                desc: "Textos fríos llenos de términos aburridos que no le dicen al cliente en qué le ayuda.",
                sol: "Traduce cada característica a un beneficio directo de la vida diaria."
              },
              {
                err: "6. Reseñas y opiniones al final del todo",
                desc: "Si las estrellas y opiniones están escondidas a 5 scrolls de distancia, nadie las lee.",
                sol: "Muestra la puntuación con estrellas justo bajo el título del producto."
              },
              {
                err: "7. Sellos de garantía genéricos o falsos",
                desc: "Poner íconos decorativos de 'Compra 100% Segura' sin explicar plazos ni contacto.",
                sol: "Explica en 2 líneas tu política de cambios y el respaldo de la garantía legal en Chile."
              }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-zinc-50 border border-zinc-200/80 rounded-3xl hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-red-600 font-black text-base uppercase tracking-tight mb-2">
                  <XCircle className="w-5 h-5 shrink-0" />
                  {item.err}
                </div>
                <p className="text-xs text-zinc-600 mb-4 font-light leading-relaxed">{item.desc}</p>
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 font-medium flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Solución:</strong> {item.sol}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. El Framework Visual de 4 Zonas */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-violet-600 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
              Estructura Recomendada
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-zinc-950 mt-4 mb-3">
              El Método de las 4 Zonas para tu Ficha en Shopify
            </h2>
            <p className="text-zinc-500 text-base max-w-2xl mx-auto font-light">
              Organiza la información siguiendo el proceso mental del comprador: <strong className="text-zinc-900 font-bold">Seducir, Informar, Validar y Cerrar</strong>.
            </p>
          </div>

          {/* Zone Selector Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { num: 1, name: "Zona 1: Entrada (Primera Pantalla)", desc: "Seducir en 3 segundos" },
              { num: 2, name: "Zona 2: Primer Scroll", desc: "Informar y romper dudas" },
              { num: 3, name: "Zona 3: Segundo Scroll", desc: "Validar con opiniones" },
              { num: 4, name: "Zona 4: Cierre Móvil", desc: "Facilitar la compra final" },
            ].map(z => (
              <button
                key={z.num}
                onClick={() => setActiveZone(z.num)}
                className={`px-6 py-4 rounded-2xl text-left transition-all border ${
                  activeZone === z.num
                    ? 'bg-violet-600 text-white border-violet-600 shadow-lg shadow-violet-600/20 scale-105 font-bold'
                    : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                }`}
              >
                <div className="text-xs uppercase tracking-widest font-black opacity-80">Paso 0{z.num}</div>
                <div className="text-sm font-bold leading-tight">{z.name}</div>
              </button>
            ))}
          </div>

          {/* Zone Content Display */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-[2.5rem] p-8 sm:p-12 shadow-sm">
            {activeZone === 1 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-violet-600 text-white flex items-center justify-center font-black text-xl">1</div>
                  <div>
                    <h3 className="text-xl font-black uppercase text-zinc-900">Primera Pantalla: Decisión Inicial</h3>
                    <p className="text-xs text-zinc-500 font-light">Objetivo: Que el cliente entienda qué es, cuánto vale y cómo comprarlo sin tener que buscar.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-sm text-zinc-900 uppercase tracking-wider">Elementos Clave que deben estar a la vista:</h4>
                    <ul className="space-y-3 text-sm text-zinc-700 font-medium">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                        <span><strong>Título claro:</strong> Nombre descriptivo del producto.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                        <span><strong>Puntuación de estrellas:</strong> Con enlace directo a leer las opiniones.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                        <span><strong>Precio transparente:</strong> Muestra si incluye IVA o si hay descuento especial.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                        <span><strong>Galería de fotos:</strong> Imagen principal limpia + fotos en uso y de cerca.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                        <span><strong>Selector de variantes y guía:</strong> Tallas o colores con acceso a tabla de medidas.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                        <span><strong>Botón "Agregar al Carrito":</strong> Grande, colorido y fácil de presionar.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-violet-600 mb-1">Vista Previa Recomendada</div>
                      <div className="h-40 bg-zinc-100 rounded-xl mb-4 flex items-center justify-center text-zinc-400 text-xs font-semibold">
                        [ Galería con Fotos en Uso + Detalle ]
                      </div>
                      <div className="flex items-center gap-1 text-amber-500 mb-1">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-xs text-zinc-500 font-bold ml-1">4.9 (48 opiniones)</span>
                      </div>
                      <div className="text-xl font-black text-zinc-950 mb-3">$29.990 <span className="text-xs text-zinc-400 font-normal">IVA incluido</span></div>
                      <div className="w-full py-3 bg-violet-600 text-white rounded-xl text-center font-black uppercase text-xs tracking-widest shadow-md">
                        Agregar al Carrito
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center gap-2 text-xs text-emerald-700 font-medium">
                      <Truck className="w-4 h-4" /> Despacho en 24 a 48 hrs a todo Chile
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeZone === 2 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-violet-600 text-white flex items-center justify-center font-black text-xl">2</div>
                  <div>
                    <h3 className="text-xl font-black uppercase text-zinc-900">Primer Scroll: Comprensión y Beneficios</h3>
                    <p className="text-xs text-zinc-500 font-light">Objetivo: Explicar por qué las características del producto realmente le importan al comprador.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-sm text-zinc-900 uppercase tracking-wider">¿Qué incluir en esta sección?</h4>
                    <ul className="space-y-3 text-sm text-zinc-700 font-medium">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                        <span><strong>Beneficios en viñetas cortas:</strong> 3 a 5 puntos destacando lo mejor.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                        <span><strong>Descripción conversacional:</strong> Responde a la duda de la persona, no al manual de fábrica.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                        <span><strong>Foto o Video demostrativo:</strong> Muestra cómo funciona en movimiento.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                        <span><strong>Insignias de tranquilidad:</strong> Garantía 6 meses SERNAC, cambios sencillos, soporte WhatsApp.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm">
                    <h5 className="font-black text-sm text-zinc-900 uppercase mb-3">Ejemplo de viñeta clara:</h5>
                    <div className="p-4 bg-violet-50/50 rounded-xl border border-violet-100 space-y-3 text-xs text-zinc-700">
                      <div className="flex items-start gap-2">
                        <span className="text-violet-600 font-bold">✓</span>
                        <span><strong>Material transpirable:</strong> Evita la acumulación de sudor durante el día.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-violet-600 font-bold">✓</span>
                        <span><strong>Costuras reforzadas:</strong> No se deforma ni deshilacha tras lavados frecuentes.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-violet-600 font-bold">✓</span>
                        <span><strong>Calce ajustado cómodo:</strong> Permite libertad total de movimiento sin apretar.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeZone === 3 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-violet-600 text-white flex items-center justify-center font-black text-xl">3</div>
                  <div>
                    <h3 className="text-xl font-black uppercase text-zinc-900">Segundo Scroll: Validación Social y Respuestas</h3>
                    <p className="text-xs text-zinc-500 font-light">Objetivo: Demostrar que otras personas ya compraron felices y resolver objeciones finales.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-sm text-zinc-900 uppercase tracking-wider">Elementos de confianza social:</h4>
                    <ul className="space-y-3 text-sm text-zinc-700 font-medium">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                        <span><strong>Reseñas destacadas:</strong> Muestra 3 o 4 testimonios de clientes reales con foto o video.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                        <span><strong>Preguntas Frecuentes (FAQ):</strong> Responde "¿Cómo lavar?", "¿Qué pasa si la talla no me queda?", etc.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                        <span><strong>Productos complementarios útiles:</strong> Ofrece accesorios reales (ej: funda o calcetines) sin saturar.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-3">
                    <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Testimonio Destacado</div>
                    <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 text-xs text-zinc-700">
                      <div className="flex items-center gap-1 text-amber-500 mb-2">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="font-bold text-zinc-900 ml-2">Camila R. (Santiago)</span>
                      </div>
                      <p className="italic">"La talla me quedó perfecta siguiendo la tabla de medidas. Llegó a mi casa en 2 días por Starken. ¡Totalmente recomendados!"</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeZone === 4 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-violet-600 text-white flex items-center justify-center font-black text-xl">4</div>
                  <div>
                    <h3 className="text-xl font-black uppercase text-zinc-900">Zona 4: Cierre y Navegación Móvil</h3>
                    <p className="text-xs text-zinc-500 font-light">Objetivo: Eliminar cualquier miedo final y hacer que volver a comprar sea cuestión de un toque.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-sm text-zinc-900 uppercase tracking-wider">Infraestructura de cierre:</h4>
                    <ul className="space-y-3 text-sm text-zinc-700 font-medium">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                        <span><strong>Botón Fijo en Celulares (Sticky CTA):</strong> Mantiene el botón "Agregar al Carrito" abajo en la pantalla del celular mientras navegan.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                        <span><strong>Canales de contacto claros:</strong> Enlace a WhatsApp o email de soporte por si tienen dudas de último minuto.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                        <span><strong>Políticas de devolución legibles:</strong> Explicadas en español simple, sin términos de abogados inaccesibles.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-zinc-900 text-white p-6 rounded-2xl border border-zinc-800 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-2">Botón Fijo en Celular (Sticky CTA)</div>
                      <p className="text-xs text-zinc-300 font-light mb-4">
                        En teléfonos, cuando el cliente baja leyendo la descripción, este botón fijo abajo le permite comprar al instante sin tener que hacer scroll hacia arriba.
                      </p>
                    </div>
                    <div className="p-3 bg-zinc-800 rounded-xl border border-zinc-700 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold">Producto Seleccionado</div>
                        <div className="text-sm font-black text-emerald-400">$29.990</div>
                      </div>
                      <div className="px-5 py-2.5 bg-emerald-500 text-zinc-950 font-black text-xs uppercase tracking-wider rounded-lg">
                        Comprar Ahora
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 4. Transformador de Copywriting: De Técnico a Comercial */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              Ejemplos Reales de Redacción
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-zinc-950 mt-4 mb-3">
              Transforma Fichas Aburridas en Textos que Venden
            </h2>
            <p className="text-zinc-500 text-base max-w-2xl mx-auto font-light">
              Los clientes no compran especificaciones frías; compran los resultados y soluciones que esas características generan:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                cat: "Textil & Vestuario",
                bad: "Poliéster 240 g/m², cierre YKK y 4 bolsillos.",
                good: "Tejido ultra resistente para uso diario, cierre metálico suave y 4 bolsillos amplios para llevar todo sin necesidad de mochila."
              },
              {
                cat: "Tecnología & Gadgets",
                bad: "Batería de litio de 5.000 mAh integrada.",
                good: "Batería suficiente para acompañarte durante toda tu jornada de trabajo o viajes sin tener que buscar enchufes."
              },
              {
                cat: "Cosmética & Skincare",
                bad: "Fórmula con Niacinamida 10% concentrada.",
                good: "Fórmula ligera que empareja el tono de tu piel, atenúa manchas y ayuda a controlar el brillo diario."
              },
              {
                cat: "Hogar & Muebles",
                bad: "Dimensiones 120 x 60 x 75 cm de melamina 18mm.",
                good: "Escritorio compacto para armar tu espacio de home office cómodo, resistente al agua y con espacio ideal para tu notebook y monitor."
              }
            ].map((ex, i) => (
              <div key={i} className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm space-y-4">
                <div className="text-xs font-black uppercase tracking-widest text-violet-600">{ex.cat}</div>
                <div className="p-3 bg-red-50/70 border border-red-100 rounded-xl text-xs text-red-900">
                  <div className="font-bold mb-1 text-red-600 flex items-center gap-1">❌ Versión Técnica Fría:</div>
                  <span>"{ex.bad}"</span>
                </div>
                <div className="p-3 bg-emerald-50/70 border border-emerald-100 rounded-xl text-xs text-emerald-900">
                  <div className="font-bold mb-1 text-emerald-700 flex items-center gap-1">✅ Versión Centrada en el Cliente:</div>
                  <span>"{ex.good}"</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Normativa y Confianza en Chile (SERNAC) */}
        <section className="w-full bg-[#3c096c] text-white py-16 sm:py-20 mb-24 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full text-xs font-bold uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4" /> Normativa SERNAC &amp; Confianza en Chile
                </div>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
                  Las Garantías Explicadas Generan Más Ventas que los Sellos Falsos
                </h2>
                <p className="text-purple-100/90 text-sm font-light leading-relaxed">
                  En Chile, la ley protege al comprador con la <strong className="text-white">Garantía Legal de 6 meses</strong> si el producto presenta fallas (reparación, cambio o devolución del dinero). Transmitir esta política con claridad en tu tienda elimina el miedo a comprar online.
                </p>
                <ul className="space-y-2 text-xs text-purple-100/90">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Envíos Transparentes:</strong> Indica tiempos promedio según courier (Starken, BlueExpress, Chilexpress).</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Canal Directo:</strong> Pon a disposición un WhatsApp o Email real atendido en Chile.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 border border-white/15 p-6 rounded-2xl w-full lg:w-80 text-center shrink-0">
                <div className="text-3xl font-black text-emerald-300 mb-1">6 Meses</div>
                <div className="text-xs uppercase font-bold text-white mb-3">Garantía Legal en Chile</div>
                <p className="text-[11px] text-purple-100/80 font-light mb-4">Explícala en tu tienda y tus clientes comprarán con total tranquilidad.</p>
                <div className="text-[10px] bg-white/10 px-3 py-1.5 rounded-lg text-purple-200 font-mono">
                  SERNAC Cumplimiento 2026
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Checklist Interactivo de Auditoría */}
        <section className="max-w-6xl mx-auto px-6 mb-24">
          <div className="bg-zinc-50 border border-zinc-200 rounded-[2.5rem] p-8 sm:p-12 shadow-md">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 pb-6 border-b border-zinc-200">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-violet-600 bg-violet-100 px-3 py-1 rounded-full">
                  Herramienta Práctica
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-zinc-950 mt-3">
                  Checklist Interactivo: Audita la Ficha de tu Tienda
                </h2>
                <p className="text-xs text-zinc-500 font-light mt-1">
                  Marca los elementos que ya tienes configurados en tu tienda Shopify para calcular tu nivel de optimización.
                </p>
              </div>

              {/* Live Score Display */}
              <div className="bg-white p-4 rounded-2xl border border-zinc-200 text-center shrink-0 shadow-sm min-w-44">
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Tu Puntaje</div>
                <div className={`text-3xl font-black ${scorePercent >= 80 ? 'text-emerald-600' : scorePercent >= 50 ? 'text-amber-600' : 'text-violet-600'}`}>
                  {scorePercent}%
                </div>
                <div className="text-[10px] text-zinc-500 font-semibold mt-1">
                  {checkedCount} de {totalChecklist} ítems
                </div>
              </div>
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {checklistData.map(item => {
                const isChecked = !!checkedItems[item.id];
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    className={`flex items-start gap-3 p-4 rounded-xl text-left border transition-all ${
                      isChecked
                        ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 font-medium'
                        : 'bg-white border-zinc-200 text-zinc-700 hover:border-zinc-300'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                      isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-zinc-300 bg-zinc-50'
                    }`}>
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div className="text-xs leading-snug">
                      <span className="text-[9px] font-black uppercase text-zinc-400 block mb-0.5">{item.category}</span>
                      {item.text}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Score Diagnosis */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-zinc-200">
              <div className="text-xs text-zinc-600 font-medium">
                {scorePercent >= 80 ? (
                  <span className="text-emerald-700 font-bold flex items-center gap-1">🎉 ¡Excelente! Tu ficha de producto transmite mucha confianza y está lista para vender más.</span>
                ) : scorePercent >= 50 ? (
                  <span className="text-amber-700 font-bold flex items-center gap-1">⚠️ Buen avance, pero aún tienes espacio para reducir objeciones y aumentar conversiones.</span>
                ) : (
                  <span className="text-violet-700 font-bold flex items-center gap-1">💡 Tienes una gran oportunidad de mejora. Implementa los primeros 4 ítems para ver resultados rápidos.</span>
                )}
              </div>

              {checkedCount > 0 && (
                <button
                  onClick={resetChecklist}
                  className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-900 font-bold uppercase tracking-wider shrink-0 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reiniciar
                </button>
              )}
            </div>
          </div>
        </section>

        {/* 7. Plantilla Copiable para Copywriting de Producto */}
        <section className="w-full bg-[#3c096c] text-white py-16 sm:py-20 mb-24 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-violet-300">Recurso Reutilizable</span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mt-1">
                  Plantilla de Redacción para Copiar y Pegar en Shopify
                </h2>
                <p className="text-xs text-purple-100/80 font-light mt-1">
                  Copia esta estructura base para redactar tus productos de forma ordenada y profesional:
                </p>
              </div>

              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all shrink-0 shadow-lg shadow-violet-600/30 cursor-pointer"
              >
                {copiedTemplate ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    ¡Plantilla Copiada!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copiar Plantilla
                  </>
                )}
              </button>
            </div>

            <pre className="p-6 bg-black/40 rounded-2xl border border-white/15 text-xs font-mono text-purple-100 overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-96 custom-scrollbar">
              {templateText}
            </pre>
          </div>
        </section>

        {/* 8. Call to Action Final */}
        <section className="w-full bg-[#3c096c] text-white py-20 sm:py-28 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" />
            
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-none mb-6 relative z-10">
              ¿Quieres que Diseñemos o Mejoremos tu <span className="text-violet-300 italic font-serif lowercase font-light">Tienda en Shopify?</span>
            </h2>
            
            <p className="text-purple-100 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed mb-10 relative z-10">
              En Webunica creamos tiendas Shopify de alto rendimiento en Chile, con themes propios optimizados para conversión, boleta electrónica e integraciones locales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <LeadButton className="px-10 py-5 bg-violet-600 hover:bg-violet-500 text-white font-black uppercase tracking-widest text-xs rounded-2xl transition-all shadow-xl shadow-violet-600/30 text-center cursor-pointer">
                Cotizar Proyecto Shopify
              </LeadButton>
              <WhatsAppButton className="px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl transition-all shadow-xl shadow-emerald-500/20 text-center cursor-pointer">
                Hablar por WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
