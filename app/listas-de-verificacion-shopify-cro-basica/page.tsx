'use client';

import { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Circle, X, Send, Loader2, Trophy, ChevronDown } from 'lucide-react';
import { saveCroLead } from '@/lib/cro-lead-action';

// ─── Data ────────────────────────────────────────────────────────────────────
const sections = [
  {
    id: 'propuesta',
    title: '1. Propuesta de Valor y Primera Impresión',
    items: [
      'La tienda comunica claramente qué vende en los primeros 5 segundos.',
      'El titular principal explica el beneficio o propuesta de valor.',
      'La portada evita mensajes genéricos y muestra una oferta clara.',
      'Existe coherencia entre marca, diseño y tipo de producto.',
      'La página transmite profesionalismo y confianza desde el inicio.',
    ],
  },
  {
    id: 'home',
    title: '2. Home',
    items: [
      'El home muestra productos o categorías relevantes rápidamente.',
      'Hay un llamado a la acción principal visible.',
      'El banner principal no distrae ni oculta la oferta.',
      'Se destacan beneficios importantes como despacho, cambios o garantía.',
      'El home ayuda a avanzar hacia compra y no solo a "verse bonito".',
    ],
  },
  {
    id: 'navegacion',
    title: '3. Navegación y Estructura',
    items: [
      'El menú principal es claro y fácil de entender.',
      'Las categorías tienen nombres simples y orientados al usuario.',
      'El buscador está visible si la tienda tiene varios productos.',
      'El usuario puede encontrar productos sin perderse.',
      'La navegación funciona correctamente tanto en desktop como en móvil.',
    ],
  },
  {
    id: 'colecciones',
    title: '4. Colecciones y Categorías',
    items: [
      'Las colecciones tienen títulos claros y útiles.',
      'Los productos se muestran con imágenes de buena calidad.',
      'El usuario puede comparar productos fácilmente.',
      'Hay filtros o una organización útil cuando el catálogo lo requiere.',
      'Las colecciones no se sienten vacías ni desordenadas.',
    ],
  },
  {
    id: 'ficha',
    title: '5. Ficha de Producto',
    items: [
      'La ficha de producto muestra un nombre claro y entendible.',
      'El precio está visible sin esfuerzo.',
      'El botón de compra destaca visualmente.',
      'La descripción explica beneficios y no solo características técnicas.',
      'Las fotos ayudan realmente a entender el producto.',
      'El producto muestra variantes de forma clara si las tiene.',
      'La ficha resuelve dudas frecuentes antes de comprar.',
      'Se informa disponibilidad, stock o tiempos de entrega cuando aplica.',
    ],
  },
  {
    id: 'confianza',
    title: '6. Confianza y Prueba Social',
    items: [
      'La tienda muestra información de contacto visible.',
      'Existen señales de confianza como reseñas, testimonios o valoraciones.',
      'Se explican políticas de cambios, despacho o devoluciones.',
      'La marca muestra presencia real y no parece improvisada.',
      'Hay elementos que reducen la sensación de riesgo en la compra.',
    ],
  },
  {
    id: 'carrito',
    title: '7. Carrito',
    items: [
      'El carrito muestra claramente los productos agregados.',
      'Es fácil modificar cantidades o eliminar productos.',
      'No aparecen costos sorpresa demasiado tarde.',
      'El carrito mantiene claridad sobre subtotal y siguiente paso.',
      'El usuario entiende fácilmente cómo continuar al checkout.',
    ],
  },
  {
    id: 'checkout',
    title: '8. Checkout',
    items: [
      'El proceso de compra se siente simple y ordenado.',
      'No se piden datos innecesarios.',
      'Los métodos de pago generan confianza.',
      'Los costos de envío o condiciones aparecen con suficiente claridad.',
      'El checkout funciona correctamente en móvil.',
    ],
  },
  {
    id: 'movil',
    title: '9. Experiencia Móvil',
    items: [
      'La tienda se ve bien en smartphone.',
      'Los botones son fáciles de tocar.',
      'El texto tiene buen tamaño y legibilidad.',
      'Las imágenes no rompen el diseño.',
      'Comprar desde móvil se siente cómodo y rápido.',
    ],
  },
  {
    id: 'velocidad',
    title: '10. Velocidad y Fricción General',
    items: [
      'La tienda carga rápido en páginas principales.',
      'No hay popups invasivos apenas entra el usuario.',
      'No existen errores visibles o elementos rotos.',
      'La experiencia general se siente fluida.',
      'La tienda facilita la compra y no la complica.',
    ],
  },
  {
    id: 'medicion',
    title: '11. Medición Básica',
    items: [
      'La tienda tiene instalado al menos un sistema de analítica.',
      'Se pueden identificar productos o páginas importantes.',
      'Existe una forma básica de medir ventas o comportamiento.',
      'El negocio revisa datos y no toma decisiones solo por intuición.',
    ],
  },
];

const TOTAL = sections.reduce((acc, s) => acc + s.items.length, 0);

function getScoreLabel(score: number) {
  if (score <= 15) return { label: 'Base débil', sub: 'Requiere mejoras prioritarias urgentes.', color: 'text-red-500', bg: 'bg-red-50', border: 'border-red-200' };
  if (score <= 30) return { label: 'Avances parciales', sub: 'Tienes varias fugas de conversión importantes.', color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-200' };
  if (score <= 45) return { label: 'Base aceptable', sub: 'Hay oportunidades claras de mejora.', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' };
  return { label: 'Estructura sólida', sub: 'Tu tienda puede seguir optimizándose.', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' };
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function ChecklistCROPage() {
  // checked[sectionIndex][itemIndex] = true/false
  const [checked, setChecked] = useState<boolean[][]>(
    sections.map(s => Array(s.items.length).fill(false))
  );
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [expandedSections, setExpandedSections] = useState<boolean[]>(sections.map(() => true));

  const endRef = useRef<HTMLDivElement>(null);

  const score = useMemo(() =>
    checked.reduce((acc, section) => acc + section.filter(Boolean).length, 0),
    [checked]
  );

  const pct = Math.round((score / TOTAL) * 100);
  const scoreInfo = getScoreLabel(score);

  function toggleItem(si: number, ii: number) {
    setChecked(prev => {
      const next = prev.map(s => [...s]);
      next[si][ii] = !next[si][ii];
      return next;
    });
  }

  function toggleSection(si: number) {
    setExpandedSections(prev => {
      const next = [...prev];
      next[si] = !next[si];
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes('@')) { setError('Ingresa un correo válido.'); return; }
    setSending(true);
    setError('');
    try {
      await saveCroLead({ email, score, total: TOTAL });
      setSent(true);
    } catch {
      setError('Hubo un error. Inténtalo de nuevo.');
    } finally {
      setSending(false);
    }
  }

  // Progress bar color
  const barColor = pct < 30 ? 'from-red-500 to-orange-500'
    : pct < 60 ? 'from-orange-400 to-yellow-400'
    : 'from-emerald-400 to-green-500';

  return (
    <main className="min-h-screen bg-slate-50 pb-32 pt-28">

      {/* ── STICKY PROGRESS BAR ─────────────────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        {/* top gradient bar */}
        <div className="h-1.5 bg-slate-100 w-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${barColor} transition-all duration-500 ease-out`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black ${pct === 100 ? 'bg-emerald-500 text-white' : 'bg-violet-100 text-violet-700'}`}>
                {pct === 100 ? '✓' : `${pct}%`}
              </div>
              <span className="text-xs font-bold text-slate-600 hidden sm:block">
                {score} de {TOTAL} puntos
              </span>
            </div>

            {/* mini bar */}
            <div className="hidden md:block w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${barColor} transition-all duration-500`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border ${scoreInfo.bg} ${scoreInfo.color} ${scoreInfo.border} hidden sm:block`}>
              {scoreInfo.label}
            </span>
            {score > 0 && (
              <button
                onClick={() => setShowModal(true)}
                className="text-xs font-black uppercase tracking-wider px-4 py-2 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors whitespace-nowrap"
              >
                Descargar análisis
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <Link href="/desarrollo-tiendas-shopify-en-chile" className="inline-flex items-center gap-2 text-violet-600 font-bold text-sm mb-10 hover:underline group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver a Tiendas Shopify
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-100 border border-violet-200 text-violet-700 text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
            Checklist Interactivo · {TOTAL} puntos
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tighter leading-tight">
            Lista de Verificación<br />
            <span className="text-violet-600">CRO Básica</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium max-w-2xl leading-relaxed">
            Marca cada punto que <strong>tu tienda cumple</strong> hoy. Al finalizar descarga tu análisis y recibe una oferta exclusiva del <strong>15% OFF</strong> en nuestros planes Shopify.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section, si) => {
            const sectionChecked = checked[si].filter(Boolean).length;
            const sectionTotal = section.items.length;
            const sectionPct = Math.round((sectionChecked / sectionTotal) * 100);

            return (
              <div key={section.id} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300">
                {/* Section header */}
                <button
                  onClick={() => toggleSection(si)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors group"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    {/* mini circular indicator */}
                    <div className="relative w-12 h-12 shrink-0">
                      <svg viewBox="0 0 36 36" className="w-12 h-12 -rotate-90">
                        <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                        <circle
                          cx="18" cy="18" r="15.9" fill="none"
                          stroke={sectionPct === 100 ? '#10b981' : '#7c3aed'}
                          strokeWidth="3"
                          strokeDasharray={`${sectionPct} ${100 - sectionPct}`}
                          strokeLinecap="round"
                          className="transition-all duration-500"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-slate-700">
                        {sectionChecked}/{sectionTotal}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-black text-slate-900 text-base leading-snug truncate">{section.title}</h2>
                      <div className="h-1.5 w-24 bg-slate-100 rounded-full mt-2 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${sectionPct === 100 ? 'bg-emerald-500' : 'bg-violet-500'}`}
                          style={{ width: `${sectionPct}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 ml-4 transition-transform duration-300 ${expandedSections[si] ? 'rotate-180' : ''}`} />
                </button>

                {/* Items */}
                {expandedSections[si] && (
                  <div className="px-6 pb-6 space-y-2">
                    {section.items.map((item, ii) => {
                      const isChecked = checked[si][ii];
                      return (
                        <button
                          key={ii}
                          onClick={() => toggleItem(si, ii)}
                          className={`w-full flex items-start gap-4 p-4 rounded-2xl border text-left transition-all duration-200 group
                            ${isChecked
                              ? 'bg-violet-50 border-violet-200 shadow-sm'
                              : 'bg-white border-slate-100 hover:border-violet-200 hover:shadow-sm'
                            }`}
                        >
                          <div className="shrink-0 mt-0.5">
                            {isChecked
                              ? <CheckCircle2 className="w-5 h-5 text-violet-600" />
                              : <Circle className="w-5 h-5 text-slate-300 group-hover:text-violet-300 transition-colors" />
                            }
                          </div>
                          <span className={`font-semibold text-sm leading-snug transition-colors ${isChecked ? 'text-violet-800 line-through decoration-violet-300' : 'text-slate-700'}`}>
                            {item}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Score summary */}
        <div ref={endRef} className={`mt-10 p-8 rounded-3xl border-2 ${scoreInfo.border} ${scoreInfo.bg} text-center`}>
          <Trophy className={`w-10 h-10 mx-auto mb-4 ${scoreInfo.color}`} />
          <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Tu resultado</p>
          <div className="text-6xl font-black text-slate-900 mb-1">{score}<span className="text-2xl text-slate-400">/{TOTAL}</span></div>
          <p className={`font-black text-xl mb-2 ${scoreInfo.color}`}>{scoreInfo.label}</p>
          <p className="text-slate-600 font-medium mb-8 max-w-md mx-auto">{scoreInfo.sub}</p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-violet-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-violet-600/30"
          >
            <Send className="w-4 h-4" />
            Recibir análisis + 15% OFF
          </button>
          <p className="text-xs text-slate-400 mt-3">Te enviamos el análisis completo y un descuento exclusivo a tu correo.</p>
        </div>

      </div>

      {/* ── MODAL ────────────────────────────────────────────────────────── */}
      {showModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => !sending && setShowModal(false)}>
          <div
            className="relative bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md p-10 text-center"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setShowModal(false)} className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 transition-colors">
              <X className="w-5 h-5" />
            </button>

            {!sent ? (
              <>
                {/* Score display inside modal */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-violet-50 border-4 border-violet-100 flex flex-col items-center justify-center">
                  <span className="text-xl font-black text-violet-700">{score}</span>
                  <span className="text-[10px] text-violet-400 font-bold">/{TOTAL}</span>
                </div>

                <div className="inline-block px-4 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
                  15% Descuento exclusivo
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Recibe tu análisis</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                  Te enviamos por email tu resultado detallado + un cupón del <strong>15% OFF</strong> en nuestros planes Shopify.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="tu@correo.cl"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-slate-200 focus:border-violet-500 focus:outline-none text-sm font-medium transition-colors text-slate-900 placeholder:text-slate-400"
                  />
                  {error && <p className="text-red-500 text-xs font-bold">{error}</p>}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 bg-violet-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-violet-700 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {sending ? <><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</> : <><Send className="w-4 h-4" /> Enviar mi análisis</>}
                  </button>
                  <p className="text-[11px] text-slate-400">Sin spam. Solo tu análisis y tu descuento.</p>
                </form>
              </>
            ) : (
              <>
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-50 border-4 border-emerald-200 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">¡Enviado!</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                  Revisa tu correo. Te enviamos el análisis completo y el cupón <strong className="text-violet-700">SHOPICRO15</strong> con 15% OFF en planes Shopify.
                </p>
                <Link
                  href="/desarrollo-tiendas-shopify-en-chile#pricing"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-violet-700 transition-all"
                >
                  Ver Planes con 15% OFF →
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
