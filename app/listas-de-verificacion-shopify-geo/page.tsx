'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Circle, Send, Loader2, Trophy, RotateCcw } from 'lucide-react';
import { saveGeoLead } from '@/lib/geo-lead-action';

// ─── GEO Checklist Data ──────────────────────────────────────────────────────
const sections = [
  {
    id: 'identidad',
    emoji: '🤖',
    title: 'Identidad y Conexión AI',
    subtitle: 'La base fundamental: que los crawlers de IA lean tu marca y entiendan tu entidad.',
    items: [
      'Nombre de marca consistente en todo el sitio (logo, footer, metadatos, About).',
      'Página /sobre-nosotros o /about publicada con información real (fundador, historia, ubicación).',
      'Dominio propio configurado con HTTPS (sin usar la dirección técnica .myshopify.com).',
      'Archivos llms.txt y ai.txt creados y accesibles en la raíz del sitio (/llms.txt y /ai.txt).',
      'robots.txt configurado para permitir a bots de IA (GPTBot, ClaudeBot, Google-Extended, PerplexityBot) y bloquear rutas privadas.',
    ],
  },
  {
    id: 'schemas',
    emoji: '🗂️',
    title: 'Datos Estructurados (Schema.org)',
    subtitle: 'El lenguaje nativo de la IA. Formatea tu contenido para bases de datos de conocimiento.',
    items: [
      'Schema Organization global en el layout principal con sameAs (enlaces a redes sociales).',
      'Schema LocalBusiness con dirección, geolocalización y teléfono en Chile.',
      'Schema WebSite con SearchAction activo para búsquedas internas.',
      'Schema Product configurado en todas las fichas de producto (ofertas, marca, disponibilidad y precio).',
      'Schema FAQPage en tus páginas de preguntas frecuentes.',
      'Schema BreadcrumbList implementado para estructurar la jerarquía de navegación.',
    ],
  },
  {
    id: 'aeo',
    emoji: '✍️',
    title: 'Contenido AEO (Answer Engine)',
    subtitle: 'Transforma tu redacción en respuestas directas para alimentar búsquedas conversacionales.',
    items: [
      'El primer párrafo de tus productos responde explícitamente qué es y para qué sirve en 2-3 frases directas.',
      'Las páginas de colección tienen introducciones semánticas que explican la categoría.',
      'Página FAQ con preguntas y respuestas reales de tus clientes redactadas de forma directa y clara.',
      'Contenido estructurado en H1 -> H2 -> H3 respondiendo preguntas específicas del usuario.',
      'Mención explícita de cobertura de despachos en Chile y operadoras logísticas.',
    ],
  },
  {
    id: 'tecnico-eeat',
    emoji: '🛡️',
    title: 'SEO Técnico & EEAT',
    subtitle: 'Señales de confianza y rastreabilidad estándar que validan la legitimidad de tu tienda.',
    items: [
      'Etiqueta HTML configurada con idioma específico de Chile (lang="es-CL").',
      'Títulos y meta descripciones únicos, descriptivos y optimizados por página.',
      'Canonical URLs configuradas de forma correcta y absoluta en todas las páginas.',
      'Imagen Open Graph (og:image) física configurada para evitar errores al compartir enlaces.',
      'Políticas de devoluciones y términos y condiciones claramente redactados y enlazados.',
      'Datos de contacto reales y visibles (correo, teléfono y dirección física).',
    ],
  },
  {
    id: 'performance',
    emoji: '⚡',
    title: 'Velocidad y Performance',
    subtitle: 'Los motores de IA penalizan enlaces lentos o inestables. Tu sitio debe cargar de inmediato.',
    items: [
      'Imágenes en formato WebP o AVIF comprimidas sin pérdida de calidad visual.',
      'Lazy loading configurado en imágenes de la parte inferior de la pantalla (below the fold).',
      'Métrica LCP (Largest Contentful Paint) menor a 2.5 segundos en dispositivos móviles.',
      'Métrica CLS (Cumulative Layout Shift) menor a 0.1 para evitar cambios bruscos de diseño.',
      'Scripts de terceros diferidos (defer/async) para evitar retrasar el renderizado principal.',
    ],
  },
];

const TOTAL = sections.reduce((acc, s) => acc + s.items.length, 0);

function getScoreInfo(score: number) {
  const pct = Math.round((score / TOTAL) * 100);
  if (pct < 30) return { label: 'GEO Score Bajo', sub: 'La IA no puede identificarte ni citarte. Tu tienda es invisible para ChatGPT y Gemini.', color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200', bar: 'from-red-500 to-orange-400' };
  if (pct < 60) return { label: 'GEO Score Medio', sub: 'Visible parcialmente. Tienes algunas señales básicas, pero te falta la estructura semántica clave.', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200', bar: 'from-orange-400 to-yellow-400' };
  if (pct < 85) return { label: 'GEO Score Alto', sub: 'Bien posicionado en IA. Excelente base de schemas, optimiza tu contenido AEO para ganar más citaciones.', color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-200', bar: 'from-violet-400 to-emerald-400' };
  return { label: 'GEO Score Élite', sub: '¡Felicitaciones! Tu tienda cumple con los más altos estándares GEO y es un referente altamente citable para la IA.', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', bar: 'from-emerald-400 to-green-500' };
}

export default function ChecklistGEOShopifyPage() {
  const [step, setStep] = useState(0); // 0..sections.length-1, then results
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
      await saveGeoLead({ email, score, total: TOTAL });
      setSent(true);
    } catch {
      setEmailError('Error al enviar. Inténtalo de nuevo.');
    } finally {
      setSending(false);
    }
  }

  const current = !isResults ? sections[step] : null;
  const sectionChecked = !isResults ? checked[step].filter(Boolean).length : 0;
  const sectionPct = !isResults ? Math.round((sectionChecked / (current?.items.length ?? 1)) * 100) : 100;

  const barColor = globalPct < 30 ? 'from-red-500 to-orange-400'
    : globalPct < 60 ? 'from-orange-400 to-yellow-400'
    : globalPct < 85 ? 'from-violet-400 to-emerald-400'
    : 'from-emerald-400 to-green-500';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased pt-[116px]">
      
      {/* ── HEADER ── */}
      <header className="max-w-3xl mx-auto px-4 pt-10 pb-6 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-violet-50 border border-violet-100 text-violet-600 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
          Auditoría de Visibilidad en Inteligencia Artificial (GEO)
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-none mb-3 uppercase">
          Checklist GEO <span className="text-violet-600 italic font-serif lowercase font-light">Shopify</span>
        </h1>
        <p className="text-slate-500 font-light leading-relaxed max-w-xl mx-auto text-sm">
          Descubre si tu tienda Shopify está optimizada para ser recomendada y citada por ChatGPT, Gemini, Claude y Perplexity en Chile.
        </p>
      </header>

      {/* ── PROGRESS BAR ── */}
      <div className="sticky top-[95px] lg:top-[116px] z-[60] bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="h-1.5 bg-slate-100 w-full">
          <div
            className={`h-full bg-gradient-to-r ${barColor} transition-all duration-700 ease-out`}
            style={{ width: `${isResults ? 100 : globalPct}%` }}
          />
        </div>

        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
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
                className="text-[11px] font-black uppercase tracking-wider px-3.5 py-1.5 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors whitespace-nowrap"
              >
                Ver resultado
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-3xl mx-auto px-4 pt-10 pb-32">
        
        {/* Back Link */}
        <Link href="/geo-ai-visibility" className="inline-flex items-center gap-2 text-violet-600 font-bold text-sm mb-8 hover:underline group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver a Servicio GEO
        </Link>

        {/* ── STEP WIZARD ── */}
        {!isResults && current && (
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-10 animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{current.emoji}</span>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-violet-500">
                    Sección {step + 1} de {sections.length}
                  </p>
                  <h2 className="text-2xl font-black text-slate-900 leading-tight">{current.title}</h2>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed font-light">{current.subtitle}</p>
            </div>

            {/* Section Progress */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-violet-500 rounded-full transition-all duration-500"
                  style={{ width: `${sectionPct}%` }}
                />
              </div>
              <span className="text-xs font-bold text-slate-400 whitespace-nowrap">{sectionChecked}/{current.items.length}</span>
            </div>

            {/* Items List */}
            <div className="space-y-3 mb-10">
              {current.items.map((item, ii) => {
                const isChecked = checked[step][ii];
                return (
                  <button
                    key={ii}
                    onClick={() => toggleItem(ii)}
                    className={`w-full flex items-start gap-4 p-5 rounded-2xl border-2 text-left transition-all duration-200 group
                      ${isChecked
                        ? 'bg-violet-50/50 border-violet-300 shadow-sm'
                        : 'bg-white border-slate-100 hover:border-slate-200 hover:shadow-sm'
                      }`}
                  >
                    <div className="shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110">
                      {isChecked
                        ? <CheckCircle2 className="w-6 h-6 text-violet-600" />
                        : <Circle className="w-6 h-6 text-slate-300 group-hover:text-violet-300 transition-colors" />
                      }
                    </div>
                    <span className={`font-semibold text-sm leading-relaxed transition-colors ${isChecked ? 'text-violet-850' : 'text-slate-700'}`}>
                      {item}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Step Navigation */}
            <div className="flex items-center justify-between gap-4 pt-6 border-t border-slate-100">
              <button
                onClick={() => setStep(s => Math.max(0, s - 1))}
                disabled={step === 0}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ArrowLeft className="w-4 h-4" /> Anterior
              </button>

              <div className="flex gap-2">
                <button
                  onClick={() => isLast ? setStep(sections.length) : setStep(s => s + 1)}
                  className="px-4 py-3 rounded-xl border border-transparent text-slate-400 font-bold text-sm hover:text-slate-600 transition-all text-xs"
                >
                  Saltar
                </button>

                <button
                  onClick={() => isLast ? setStep(sections.length) : setStep(s => s + 1)}
                  className="flex items-center gap-2 px-8 py-3 rounded-xl bg-violet-600 hover:bg-violet-750 text-white font-black text-sm active:scale-95 transition-all shadow-md shadow-violet-600/10"
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
            {/* Score Card */}
            <div className={`rounded-3xl border-2 ${scoreInfo.border} ${scoreInfo.bg} p-8 md:p-12 text-center mb-8 shadow-sm`}>
              <div className="text-6xl mb-4">{
                globalPct < 30 ? '😟' : globalPct < 60 ? '😐' : globalPct < 85 ? '✨' : '🏆'
              }</div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">Tu puntaje GEO</p>
              <div className="text-7xl font-black text-slate-900 mb-1">
                {score}<span className="text-3xl text-slate-400 font-medium">/{TOTAL}</span>
              </div>
              <div className={`text-xl font-black mb-3 ${scoreInfo.color}`}>{scoreInfo.label}</div>
              <p className="text-slate-600 max-w-sm mx-auto leading-relaxed font-medium text-sm">{scoreInfo.sub}</p>

              {/* Progress Bar */}
              <div className="mt-6 h-3 bg-white rounded-full overflow-hidden max-w-xs mx-auto border border-slate-100">
                <div
                  className={`h-full bg-gradient-to-r ${scoreInfo.bar} rounded-full transition-all duration-1000`}
                  style={{ width: `${globalPct}%` }}
                />
              </div>
              <p className="text-xs text-slate-400 mt-2">{globalPct}% optimizado para motores IA</p>
            </div>

            {/* Breakdown Card */}
            <div className="bg-white rounded-3xl border border-slate-100 p-6 md:p-8 mb-8 shadow-sm">
              <h3 className="font-black text-slate-900 mb-4 text-xs uppercase tracking-wider text-slate-400">Puntaje por Categorías</h3>
              <div className="space-y-4">
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

            {/* Lead Capture Box */}
            <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-3xl p-8 md:p-10 text-center text-white relative overflow-hidden shadow-lg shadow-violet-600/10">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
              <div className="relative z-10">
                {!sent ? (
                  <>
                    <div className="inline-block px-4 py-1.5 bg-white/20 border border-white/30 text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
                      Servicios de Consultoría GEO
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black mb-3">Obtén tu Informe Completo en PDF</h3>
                    <p className="text-violet-200 mb-8 max-w-sm mx-auto leading-relaxed text-sm font-light">
                      Ingresa tu correo para enviarte la lista detallada de puntos de mejora de tu tienda Shopify y una asesoría inicial sin costo para mejorar tu visibilidad en IA.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="tu@correo.cl"
                        className="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/30 text-white placeholder:text-violet-200 focus:outline-none focus:border-white text-sm font-medium transition-colors"
                      />
                      <button
                        type="submit"
                        disabled={sending}
                        className="px-6 py-4 bg-white text-violet-700 font-black text-xs uppercase tracking-widest rounded-xl hover:bg-violet-50 active:scale-95 transition-all disabled:opacity-60 flex items-center justify-center gap-2 whitespace-nowrap"
                      >
                        {sending ? <><Loader2 className="w-4 h-4 animate-spin" /> Enviando</> : <><Send className="w-4 h-4" /> Enviar Informe</>}
                      </button>
                    </form>
                    {emailError && <p className="text-red-300 text-xs mt-3 font-bold">{emailError}</p>}
                    <p className="text-violet-300 text-xs mt-4">Sin spam. Solo tu diagnóstico GEO personalizado.</p>
                  </>
                ) : (
                  <>
                    <div className="text-5xl mb-4">📩</div>
                    <h3 className="text-2xl font-black mb-3">¡Diagnóstico enviado!</h3>
                    <p className="text-violet-200 mb-6 max-w-sm mx-auto text-sm font-light">
                      Te enviamos el reporte a tu correo. Nos pondremos en contacto contigo para agendar tu asesoría gratuita.
                    </p>
                    <Link
                      href="/geo-ai-visibility"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-700 font-black uppercase tracking-widest text-xs rounded-full hover:bg-violet-50 transition-all"
                    >
                      Volver a la página de servicios GEO →
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Restart Button */}
            <div className="text-center mt-10">
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
