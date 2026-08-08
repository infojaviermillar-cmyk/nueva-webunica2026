'use client';

import { useState, useTransition } from 'react';
import { createLead } from '@/lib/lead-actions';
import {
  Store, RefreshCcw, Paintbrush, Zap,
  Rocket, ShoppingBag, Crown, Sparkles,
  ArrowRight, Check, Loader2, ChevronLeft,
  MessageCircle
} from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────────────────

interface Step1Option {
  id: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
}

interface Step2Option {
  id: string;
  label: string;
  price: string;
  tag: string;
  icon: React.ReactNode;
  color: string;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const STEP1_OPTIONS: Step1Option[] = [
  {
    id: 'nueva',
    label: 'Tienda nueva',
    sublabel: 'Crear desde cero',
    icon: <Store className="w-5 h-5" />,
  },
  {
    id: 'migracion',
    label: 'Migrar tienda',
    sublabel: 'WooCommerce, Jumpseller...',
    icon: <RefreshCcw className="w-5 h-5" />,
  },
  {
    id: 'rediseno',
    label: 'Rediseñar tienda',
    sublabel: 'Tengo Shopify, cambiar diseño',
    icon: <Paintbrush className="w-5 h-5" />,
  },
  {
    id: 'optimizar',
    label: 'Optimizar tienda',
    sublabel: 'Mejorar velocidad o ventas',
    icon: <Zap className="w-5 h-5" />,
  },
];

const STEP2_OPTIONS: Step2Option[] = [
  {
    id: 'prende',
    label: 'Plan Prende',
    price: 'Desde $580.000',
    tag: 'Ideal para empezar',
    icon: <Rocket className="w-5 h-5" />,
    color: 'text-blue-600 bg-blue-50 border-blue-200',
  },
  {
    id: 'full',
    label: 'Plan Full',
    price: 'Desde $1.200.000',
    tag: 'ERP + facturación SII',
    icon: <ShoppingBag className="w-5 h-5" />,
    color: 'text-violet-600 bg-violet-50 border-violet-200',
  },
  {
    id: 'conversion',
    label: 'Plan Conversión',
    price: 'Desde $2.100.000',
    tag: 'UX premium + CRO',
    icon: <Sparkles className="w-5 h-5" />,
    color: 'text-pink-600 bg-pink-50 border-pink-200',
  },
  {
    id: 'custom',
    label: 'Plan Custom',
    price: 'A cotizar',
    tag: 'Proyecto a medida',
    icon: <Crown className="w-5 h-5" />,
    color: 'text-amber-600 bg-amber-50 border-amber-200',
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function ShopifyHeroWizard() {
  const [step, setStep] = useState(1);
  const [selected1, setSelected1] = useState<string | null>(null);
  const [selected2, setSelected2] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [leadName, setLeadName] = useState('');
  const [isPending, startTransition] = useTransition();

  // ── Helpers ─────────────────────────────────────────────────────────────────

  const step1Label = STEP1_OPTIONS.find(o => o.id === selected1)?.label ?? '';
  const step2Label = STEP2_OPTIONS.find(o => o.id === selected2)?.label ?? '';

  function handleSelect1(id: string) {
    setSelected1(id);
    setTimeout(() => setStep(2), 280);
  }

  function handleSelect2(id: string) {
    setSelected2(id);
    setTimeout(() => setStep(3), 280);
  }

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Tu nombre es requerido';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Email válido requerido';
    if (!form.phone.trim()) errs.phone = 'Tu WhatsApp es requerido';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    startTransition(async () => {
      const projectType = `Shopify / ${step1Label} / ${step2Label}`;
      await createLead({
        name: form.name,
        email: form.email,
        phone: form.phone,
        project_type: projectType,
        source: 'Wizard Hero Shopify',
      });
      setLeadName(form.name.split(' ')[0]);
      setDone(true);
    });
  }

  function openWhatsApp() {
    const msg = encodeURIComponent(
      `Hola Webunica 👋 Me llamo ${form.name || leadName}. Completé el formulario y me interesa el ${step2Label} (${step1Label}). ¿Podemos agendar una llamada?`
    );
    window.open(`https://wa.me/56991089527?text=${msg}`, '_blank');
  }

  // ── Input style ──────────────────────────────────────────────────────────────
  const inputCls = (err?: string) =>
    `w-full px-4 py-3 rounded-xl bg-white border ${err ? 'border-red-400 ring-1 ring-red-300' : 'border-zinc-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200'} text-sm text-zinc-900 outline-none transition placeholder-zinc-400`;

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <div className="w-full max-w-[460px] mx-auto lg:mx-0">
      <div className="relative bg-white/95 backdrop-blur-sm rounded-[2rem] shadow-2xl shadow-violet-900/10 border border-zinc-100 overflow-hidden">

        {/* Top gradient strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500" />

        {/* ── SUCCESS STATE ──────────────────────────────────────────────── */}
        {done ? (
          <div className="p-8 flex flex-col items-center text-center gap-5">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
                <Check className="w-10 h-10 text-emerald-600" strokeWidth={2.5} />
              </div>
              <div className="absolute inset-0 w-20 h-20 rounded-full bg-emerald-200 animate-ping opacity-30" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-1">¡Listo, {leadName}!</p>
              <h3 className="text-2xl font-black text-zinc-950 tracking-tighter mb-2">
                Tu evaluación está en camino
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-xs mx-auto">
                Revisaremos tu proyecto y te contactaremos en las próximas horas con una propuesta personalizada.
              </p>
            </div>
            <button
              onClick={openWhatsApp}
              className="flex items-center gap-2.5 px-6 py-3.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black text-sm rounded-xl transition-all shadow-lg shadow-green-500/20 uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4" />
              Chatear por WhatsApp
            </button>
            <p className="text-[10px] text-zinc-400 font-mono">También puedes escribirnos en cualquier momento</p>
          </div>
        ) : (
          <div className="p-7">

            {/* Progress bar + steps indicator */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                  Paso {step} de 3
                </span>
                {step > 1 && (
                  <button
                    onClick={() => setStep(s => s - 1)}
                    className="flex items-center gap-1 text-[10px] font-bold text-zinc-400 hover:text-zinc-700 transition"
                  >
                    <ChevronLeft className="w-3 h-3" /> Volver
                  </button>
                )}
              </div>
              <div className="flex gap-1.5">
                {[1, 2, 3].map(n => (
                  <div
                    key={n}
                    className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                      n <= step
                        ? 'bg-gradient-to-r from-violet-600 to-purple-500'
                        : 'bg-zinc-100'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* ── STEP 1 ────────────────────────────────────────────────── */}
            {step === 1 && (
              <div>
                <p className="text-[11px] font-black text-violet-600 uppercase tracking-widest mb-1">
                  Comencemos
                </p>
                <h2 className="text-xl font-black text-zinc-950 tracking-tighter mb-5 leading-tight">
                  ¿Qué necesitas crear?
                </h2>
                <div className="grid grid-cols-2 gap-2.5">
                  {STEP1_OPTIONS.map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect1(opt.id)}
                      className={`group flex flex-col items-start gap-3 p-4 rounded-2xl border-2 text-left transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                        selected1 === opt.id
                          ? 'border-violet-600 bg-violet-50 shadow-md shadow-violet-100'
                          : 'border-zinc-100 bg-zinc-50 hover:border-violet-300 hover:bg-violet-50/50'
                      }`}
                    >
                      <span className={`p-2 rounded-xl transition-colors ${
                        selected1 === opt.id ? 'bg-violet-600 text-white' : 'bg-white text-zinc-600 group-hover:bg-violet-100 group-hover:text-violet-600'
                      }`}>
                        {opt.icon}
                      </span>
                      <div>
                        <p className="text-sm font-black text-zinc-900 leading-none mb-1">{opt.label}</p>
                        <p className="text-[10px] text-zinc-500 leading-snug">{opt.sublabel}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ── STEP 2 ────────────────────────────────────────────────── */}
            {step === 2 && (
              <div>
                <p className="text-[11px] font-black text-violet-600 uppercase tracking-widest mb-1">
                  Casi listo
                </p>
                <h2 className="text-xl font-black text-zinc-950 tracking-tighter mb-1 leading-tight">
                  ¿Qué plan te interesa?
                </h2>
                <p className="text-xs text-zinc-500 mb-5 font-medium">Te ayudamos a elegir el más adecuado después</p>
                <div className="flex flex-col gap-2.5">
                  {STEP2_OPTIONS.map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelect2(opt.id)}
                      className={`group flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] ${
                        selected2 === opt.id
                          ? 'border-violet-600 bg-violet-50 shadow-md shadow-violet-100'
                          : 'border-zinc-100 bg-zinc-50 hover:border-violet-300 hover:bg-violet-50/50'
                      }`}
                    >
                      <span className={`p-2.5 rounded-xl border flex-shrink-0 ${opt.color}`}>
                        {opt.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-black text-zinc-900 leading-none mb-0.5">{opt.label}</p>
                        <p className="text-[10px] text-zinc-500">{opt.tag}</p>
                      </div>
                      <span className="text-xs font-black text-zinc-700 whitespace-nowrap shrink-0">{opt.price}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ── STEP 3 ────────────────────────────────────────────────── */}
            {step === 3 && (
              <div>
                <p className="text-[11px] font-black text-violet-600 uppercase tracking-widest mb-1">
                  Último paso
                </p>
                <h2 className="text-xl font-black text-zinc-950 tracking-tighter mb-1 leading-tight">
                  ¿Cómo te contactamos?
                </h2>
                <p className="text-xs text-zinc-500 mb-5 font-medium">Sin compromisos. Te llamamos para presentarte la propuesta.</p>

                {/* Selected summary pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {selected1 && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-violet-50 border border-violet-200 rounded-full text-[10px] font-black text-violet-700 uppercase tracking-wide">
                      {step1Label}
                    </span>
                  )}
                  {selected2 && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-50 border border-pink-200 rounded-full text-[10px] font-black text-pink-700 uppercase tracking-wide">
                      {step2Label}
                    </span>
                  )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      placeholder="Tu nombre completo"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className={inputCls(errors.name)}
                    />
                    {errors.name && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="tu@correo.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className={inputCls(errors.email)}
                    />
                    {errors.email && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.email}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="WhatsApp (ej: +56 9 1234 5678)"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                      className={inputCls(errors.phone)}
                    />
                    {errors.phone && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.phone}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full flex items-center justify-center gap-2.5 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-black text-sm rounded-xl transition-all shadow-lg shadow-violet-500/25 uppercase tracking-wider disabled:opacity-70 active:scale-[0.98] mt-2"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Quiero mi evaluación gratuita
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-center text-[10px] text-zinc-400 mt-3 font-mono">
                  🔒 Sin spam. Evaluamos y te respondemos en 24h.
                </p>
              </div>
            )}

          </div>
        )}
      </div>

      {/* Outside label */}
      <p className="text-center text-[10px] font-mono text-zinc-400 mt-3">
        ✦ Evaluamos tu proyecto y te recomendamos el plan adecuado, sin compromiso.
      </p>
    </div>
  );
}
