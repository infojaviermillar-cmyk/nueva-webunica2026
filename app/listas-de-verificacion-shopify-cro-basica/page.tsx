'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Send, Loader2, Trophy, RotateCcw } from 'lucide-react';
import { saveCroLead } from '@/lib/cro-lead-action';

// ─── Data ────────────────────────────────────────────────────────────────────
const sections = [
  {
    id: 'propuesta',
    emoji: '🎯',
    title: 'Propuesta de Valor',
    subtitle: 'Primera impresión — los primeros 5 segundos son decisivos.',
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
    emoji: '🏠',
    title: 'Home',
    subtitle: 'Tu portada debe vender, no solo "verse bonita".',
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
    emoji: '🧭',
    title: 'Navegación y Estructura',
    subtitle: 'Si el usuario no encuentra, no compra.',
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
    emoji: '🗂️',
    title: 'Colecciones y Categorías',
    subtitle: 'El orden del catálogo impacta directamente en las ventas.',
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
    emoji: '📦',
    title: 'Ficha de Producto',
    subtitle: 'Es donde se toma la decisión de compra.',
    items: [
      'La ficha muestra un nombre claro y entendible.',
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
    emoji: '🛡️',
    title: 'Confianza y Prueba Social',
    subtitle: 'Las personas compran donde se sienten seguras.',
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
    emoji: '🛒',
    title: 'Carrito',
    subtitle: 'La última parada antes de pagar — no la arruines.',
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
    emoji: '💳',
    title: 'Checkout',
    subtitle: 'Un checkout confuso es el mayor generador de carritos abandonados.',
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
    emoji: '📱',
    title: 'Experiencia Móvil',
    subtitle: 'Más del 70% de las visitas llegan desde smartphones.',
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
    emoji: '⚡',
    title: 'Velocidad y Fricción',
    subtitle: 'Cada segundo de carga = clientes que se van.',
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
    emoji: '📊',
    title: 'Medición Básica',
    subtitle: 'No puedes mejorar lo que no mides.',
    items: [
      'La tienda tiene instalado al menos un sistema de analítica.',
      'Se pueden identificar productos o páginas importantes.',
      'Existe una forma básica de medir ventas o comportamiento.',
      'El negocio revisa datos y no toma decisiones solo por intuición.',
    ],
  },
];

const TOTAL = sections.reduce((acc, s) => acc + s.items.length, 0);

function getScoreInfo(score: number) {
  if (score <= 15) return { label: 'Base débil', sub: 'Tu tienda tiene fugas importantes de conversión. Requiere mejoras prioritarias.', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200', bar: 'from-red-500 to-orange-400' };
  if (score <= 30) return { label: 'Avances parciales', sub: 'Tienes una base, pero con varias fugas de conversión activas.', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200', bar: 'from-orange-400 to-yellow-400' };
  if (score <= 45) return { label: 'Base aceptable', sub: 'La estructura es razonable, pero hay oportunidades claras sin aprovechar.', color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200', bar: 'from-yellow-400 to-lime-400' };
  return { label: 'Estructura sólida', sub: 'Tu tienda está bien, pero siempre hay margen de optimización adicional.', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', bar: 'from-emerald-400 to-green-500' };
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ChecklistCROPage() {
  const [step, setStep] = useState(0); // 0..sections.length-1, then sections.length = results
  const [checked, setChecked] = useState<boolean[][]>(
    sections.map(s => Array(s.items.length).fill(false))
  );
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [emailError, setEmailError] = useState('');

  const score = useMemo(() =>
    checked.reduce((acc, s) => acc + s.filter(Boolean).length, 0),
    [checked]
  );

  const globalPct = Math.round((score / TOTAL) * 100);
  const scoreInfo = getScoreInfo(score);

  const isLast = step === sections.length - 1;
  const isResults = step === sections.length;

  function toggleItem(ii: number) {
    setChecked(prev => {
      const next = prev.map(s => [...s]);
      next[step][ii] = !next[step][ii];
      return next;
    });
  }

  function reset() {
    setStep(0);
    setChecked(sections.map(s => Array(s.items.length).fill(false)));
    setSent(false);
    setEmail('');
    setEmailError('');
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes('@')) { setEmailError('Ingresa un correo válido.'); return; }
    setSending(true);
    setEmailError('');
    try {
      await saveCroLead({ email, score, total: TOTAL });
      setSent(true);
    } catch {
      setEmailError('Error al enviar. Inténtalo de nuevo.');
    } finally {
      setSending(false);
    }
  }

  // ── Current section data
  const current = !isResults ? sections[step] : null;
  const sectionChecked = !isResults ? checked[step].filter(Boolean).length : 0;
  const sectionPct = !isResults ? Math.round((sectionChecked / (current?.items.length ?? 1)) * 100) : 100;

  const barColor = globalPct < 30 ? 'from-red-500 to-orange-400'
    : globalPct < 60 ? 'from-orange-400 to-yellow-400'
    : 'from-emerald-400 to-green-500';

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

      {/* ── PROGRESS BAR — below site header ───────────────────────────────── */}
      <div className="sticky top-[95px] lg:top-[116px] z-[60] bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        {/* Color bar */}
        <div className="h-1.5 bg-slate-100 w-full">
          <div
            className={`h-full bg-gradient-to-r ${barColor} transition-all duration-700 ease-out`}
            style={{ width: `${isResults ? 100 : globalPct}%` }}
          />
        </div>

        {/* Info strip */}
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          {/* Steps pills */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {sections.map((s, i) => {
              const sec = checked[i].filter(Boolean).length;
              const done = sec === s.items.length;
              const active = i === step && !isResults;
              return (
                <button
                  key={s.id}
                  onClick={() => setStep(i)}
                  className={`shrink-0 w-7 h-7 rounded-full text-[10px] font-black transition-all duration-200 border
                    ${done ? 'bg-emerald-500 border-emerald-500 text-white'
                      : active ? 'bg-violet-600 border-violet-600 text-white scale-110'
                      : 'bg-white border-slate-200 text-slate-400 hover:border-violet-300'
                    }`}
                >
                  {done ? '✓' : i + 1}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-bold text-slate-500 hidden sm:block whitespace-nowrap">
              {score}/{TOTAL} pts
            </span>
            {(score > 0 || isResults) && (
              <button
                onClick={() => setStep(sections.length)}
                className="text-[11px] font-black uppercase tracking-wider px-3 py-1.5 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors whitespace-nowrap"
              >
                Ver resultado
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── WIZARD CONTENT ─────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-4 pt-10 pb-32">

        {/* Back link */}
        <Link href="/desarrollo-tiendas-shopify-en-chile" className="inline-flex items-center gap-2 text-violet-600 font-bold text-sm mb-8 hover:underline group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver a Tiendas Shopify
        </Link>

        {/* ── SECTION STEP ── */}
        {!isResults && current && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{current.emoji}</span>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-violet-500">
                    Paso {step + 1} de {sections.length}
                  </p>
                  <h1 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">{current.title}</h1>
                </div>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed">{current.subtitle}</p>
            </div>

            {/* Section progress */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-violet-500 rounded-full transition-all duration-500"
                  style={{ width: `${sectionPct}%` }}
                />
              </div>
              <span className="text-xs font-bold text-slate-400 whitespace-nowrap">{sectionChecked}/{current.items.length}</span>
            </div>

            {/* Items */}
            <div className="space-y-3 mb-10">
              {current.items.map((item, ii) => {
                const isChecked = checked[step][ii];
                return (
                  <button
                    key={ii}
                    onClick={() => toggleItem(ii)}
                    className={`w-full flex items-start gap-4 p-5 rounded-2xl border-2 text-left transition-all duration-200 group
                      ${isChecked
                        ? 'bg-violet-50 border-violet-300 shadow-sm shadow-violet-100'
                        : 'bg-white border-slate-100 hover:border-violet-200 hover:shadow-sm'
                      }`}
                  >
                    <div className="shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110">
                      {isChecked
                        ? <CheckCircle2 className="w-6 h-6 text-violet-600" />
                        : <Circle className="w-6 h-6 text-slate-300 group-hover:text-violet-300 transition-colors" />
                      }
                    </div>
                    <span className={`font-semibold text-sm leading-relaxed transition-colors ${isChecked ? 'text-violet-800' : 'text-slate-700'}`}>
                      {item}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={() => setStep(s => Math.max(0, s - 1))}
                disabled={step === 0}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-slate-200 text-slate-600 font-bold text-sm hover:border-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ArrowLeft className="w-4 h-4" /> Anterior
              </button>

              <div className="flex gap-2">
                {/* Skip */}
                <button
                  onClick={() => isLast ? setStep(sections.length) : setStep(s => s + 1)}
                  className="px-4 py-3 rounded-2xl border-2 border-slate-100 text-slate-400 font-bold text-sm hover:border-slate-200 transition-all text-xs"
                >
                  Saltar
                </button>

                {/* Next / Finish */}
                <button
                  onClick={() => isLast ? setStep(sections.length) : setStep(s => s + 1)}
                  className="flex items-center gap-2 px-8 py-3 rounded-2xl bg-violet-600 text-white font-black text-sm hover:bg-violet-700 active:scale-95 transition-all shadow-lg shadow-violet-600/20"
                >
                  {isLast ? (
                    <><Trophy className="w-4 h-4" /> Ver mi resultado</>
                  ) : (
                    <>Siguiente <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── RESULTS SCREEN ── */}
        {isResults && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Score card */}
            <div className={`rounded-3xl border-2 ${scoreInfo.border} ${scoreInfo.bg} p-8 md:p-12 text-center mb-8`}>
              <div className="text-6xl mb-4">{
                score <= 15 ? '😟' : score <= 30 ? '😐' : score <= 45 ? '🙂' : '🏆'
              }</div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Tu puntaje CRO</p>
              <div className="text-7xl font-black text-slate-900 mb-1">
                {score}<span className="text-3xl text-slate-400 font-medium">/{TOTAL}</span>
              </div>
              <div className={`text-xl font-black mb-3 ${scoreInfo.color}`}>{scoreInfo.label}</div>
              <p className="text-slate-600 max-w-sm mx-auto leading-relaxed font-medium">{scoreInfo.sub}</p>

              {/* Global bar */}
              <div className="mt-6 h-3 bg-white rounded-full overflow-hidden max-w-xs mx-auto">
                <div
                  className={`h-full bg-gradient-to-r ${scoreInfo.bar} rounded-full transition-all duration-1000`}
                  style={{ width: `${globalPct}%` }}
                />
              </div>
              <p className="text-xs text-slate-400 mt-2">{globalPct}% completado</p>
            </div>

            {/* Section breakdown */}
            <div className="bg-white rounded-3xl border border-slate-100 p-6 mb-8 shadow-sm">
              <h3 className="font-black text-slate-900 mb-4 text-sm uppercase tracking-wide">Desglose por sección</h3>
              <div className="space-y-3">
                {sections.map((s, i) => {
                  const sec = checked[i].filter(Boolean).length;
                  const pct = Math.round((sec / s.items.length) * 100);
                  return (
                    <div key={s.id} className="flex items-center gap-3">
                      <span className="text-lg shrink-0">{s.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-bold text-slate-700 truncate">{s.title}</span>
                          <span className="text-xs font-black text-slate-500 ml-2 shrink-0">{sec}/{s.items.length}</span>
                        </div>
                        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-700 ${pct === 100 ? 'bg-emerald-500' : pct > 50 ? 'bg-violet-500' : 'bg-orange-400'}`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                      <button onClick={() => setStep(i)} className="text-[10px] text-violet-600 font-bold hover:underline shrink-0">
                        Revisar
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Email capture */}
            <div className="bg-gradient-to-br from-violet-600 to-violet-700 rounded-3xl p-8 md:p-10 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
              <div className="relative z-10">
                {!sent ? (
                  <>
                    <div className="inline-block px-4 py-1.5 bg-white/20 border border-white/30 text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
                      Oferta exclusiva · 15% OFF
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black mb-3">Recibe tu análisis completo</h3>
                    <p className="text-violet-200 mb-8 max-w-sm mx-auto leading-relaxed">
                      Te enviamos el informe con tu resultado + el cupón <strong className="text-white">SHOPICRO15</strong> para obtener 15% de descuento en cualquier plan Shopify.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="tu@correo.cl"
                        className="flex-1 px-5 py-4 rounded-2xl bg-white/10 border border-white/30 text-white placeholder:text-violet-300 focus:outline-none focus:border-white text-sm font-medium transition-colors"
                      />
                      <button
                        type="submit"
                        disabled={sending}
                        className="px-6 py-4 bg-white text-violet-700 font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-violet-50 active:scale-95 transition-all disabled:opacity-60 flex items-center justify-center gap-2 whitespace-nowrap"
                      >
                        {sending ? <><Loader2 className="w-4 h-4 animate-spin" /> Enviando</> : <><Send className="w-4 h-4" /> Enviar</>}
                      </button>
                    </form>
                    {emailError && <p className="text-red-300 text-xs mt-3 font-bold">{emailError}</p>}
                    <p className="text-violet-300 text-xs mt-4">Sin spam. Solo tu análisis y tu descuento.</p>
                  </>
                ) : (
                  <>
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-2xl font-black mb-3">¡Enviado con éxito!</h3>
                    <p className="text-violet-200 mb-6 max-w-sm mx-auto">
                      Revisa tu correo. Incluye el cupón <strong className="text-white">SHOPICRO15</strong> con 15% OFF en nuestros planes.
                    </p>
                    <Link
                      href="/desarrollo-tiendas-shopify-en-chile#pricing"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-700 font-black uppercase tracking-widest text-xs rounded-full hover:bg-violet-50 transition-all"
                    >
                      Ver Planes con 15% OFF →
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Restart */}
            <div className="text-center mt-8">
              <button onClick={reset} className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-600 font-bold text-sm transition-colors">
                <RotateCcw className="w-4 h-4" /> Reiniciar checklist
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
