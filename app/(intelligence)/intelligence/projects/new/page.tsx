'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Globe, Briefcase, Target, ChevronRight, ChevronLeft, Check, Loader2, AlertCircle } from 'lucide-react';

const INDUSTRIES = [
  'Retail / Tienda online', 'Servicios profesionales', 'Inmobiliaria', 'Salud y clínicas',
  'Educación', 'Gastronomía', 'Turismo / Hoteles', 'Construcción', 'Automotriz',
  'Tecnología / SaaS', 'Consultoría', 'Legal', 'Otro',
];

const PROJECT_TYPES = [
  { value: 'website', label: 'Sitio web corporativo', desc: 'Empresa, servicios, portafolio' },
  { value: 'ecommerce', label: 'Tienda en línea', desc: 'Shopify, WooCommerce, e-commerce' },
  { value: 'blog', label: 'Blog / Contenidos', desc: 'Blog, noticias, media' },
];

const OBJECTIVES = [
  'Aumentar tráfico orgánico', 'Generar más leads', 'Aumentar ventas en línea',
  'Mejorar posicionamiento local', 'Superar a competidores en buscadores', 'Auditoría técnica SEO',
];

interface FormData {
  name: string;
  domain: string;
  industry: string;
  project_type: string;
  objective: string;
  description: string;
  country: string;
}

export default function NewProjectPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState<FormData>({
    name: '', domain: '', industry: '', project_type: 'website',
    objective: '', description: '', country: 'CL',
  });

  const totalSteps = 3;

  function update(key: keyof FormData, value: string) {
    setForm(prev => ({ ...prev, [key]: value }));
    setError('');
  }

  async function handleSubmit() {
    if (!form.name.trim() || !form.domain.trim()) {
      setError('Nombre y dominio son requeridos');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/intelligence/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!data.success) {
        setError(data.error || 'Error al crear el proyecto');
        return;
      }
      router.push(`/intelligence/${data.data.project.id}`);
    } catch {
      setError('Error de conexión. Intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  }

  function nextStep() {
    if (step === 1 && (!form.name.trim() || !form.domain.trim())) {
      setError('Nombre y dominio son requeridos');
      return;
    }
    setError('');
    setStep(s => Math.min(s + 1, totalSteps));
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      {/* Nav */}
      <nav className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-40">
        <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
          <button
            onClick={() => step > 1 ? setStep(s => s - 1) : router.back()}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            {step > 1 ? 'Anterior' : 'Proyectos'}
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i + 1 < step ? 'w-6 bg-violet-500' :
                  i + 1 === step ? 'w-8 bg-violet-400' : 'w-6 bg-zinc-700'
                }`}
              />
            ))}
          </div>
          <span className="text-zinc-600 text-xs font-mono">{step}/{totalSteps}</span>
        </div>
      </nav>

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-10">
        {/* ── Step 1: Basic Info ── */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="mb-8">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5 text-violet-400" />
              </div>
              <h1 className="text-xl font-bold text-white mb-1">Datos del proyecto</h1>
              <p className="text-zinc-400 text-sm">Define el nombre y el dominio a analizar.</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-zinc-300 mb-1.5">Nombre del proyecto *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => update('name', e.target.value)}
                  placeholder="ej. Análisis Tienda Principal"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-zinc-300 mb-1.5">Dominio a analizar *</label>
                <input
                  type="text"
                  value={form.domain}
                  onChange={e => update('domain', e.target.value)}
                  placeholder="ej. mitienda.cl o https://mitienda.cl"
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 transition-colors font-mono text-sm"
                />
                <p className="text-zinc-600 text-xs mt-1.5">Sin www. El crawler respetará robots.txt.</p>
              </div>

              <div>
                <label className="block text-sm text-zinc-300 mb-1.5">Tipo de proyecto</label>
                <div className="grid grid-cols-3 gap-2">
                  {PROJECT_TYPES.map(({ value, label, desc }) => (
                    <button
                      key={value}
                      onClick={() => update('project_type', value)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        form.project_type === value
                          ? 'border-violet-500 bg-violet-500/10 text-white'
                          : 'border-zinc-700 bg-zinc-900 text-zinc-400 hover:border-zinc-600'
                      }`}
                    >
                      <div className="text-xs font-medium mb-0.5">{label}</div>
                      <div className="text-xs text-zinc-600">{desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Step 2: Industry & Objective ── */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="mb-8">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5 text-violet-400" />
              </div>
              <h1 className="text-xl font-bold text-white mb-1">Industria y contexto</h1>
              <p className="text-zinc-400 text-sm">Esto mejora la calidad del análisis IA.</p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm text-zinc-300 mb-2">Industria</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {INDUSTRIES.map(ind => (
                    <button
                      key={ind}
                      onClick={() => update('industry', ind)}
                      className={`px-3 py-2 rounded-lg border text-xs text-left transition-all flex items-center gap-2 ${
                        form.industry === ind
                          ? 'border-violet-500 bg-violet-500/10 text-white'
                          : 'border-zinc-700 bg-zinc-900 text-zinc-400 hover:border-zinc-600'
                      }`}
                    >
                      {form.industry === ind && <Check className="w-3 h-3 text-violet-400 flex-shrink-0" />}
                      {ind}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm text-zinc-300 mb-2">Descripción (opcional)</label>
                <textarea
                  value={form.description}
                  onChange={e => update('description', e.target.value)}
                  placeholder="Contexto adicional sobre el negocio..."
                  rows={3}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-violet-500 transition-colors text-sm resize-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* ── Step 3: Objective ── */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="mb-8">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                <Target className="w-5 h-5 text-violet-400" />
              </div>
              <h1 className="text-xl font-bold text-white mb-1">Objetivo principal</h1>
              <p className="text-zinc-400 text-sm">¿Qué quieres lograr con este análisis?</p>
            </div>

            <div className="space-y-2 mb-8">
              {OBJECTIVES.map(obj => (
                <button
                  key={obj}
                  onClick={() => update('objective', obj)}
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-left transition-all flex items-center justify-between ${
                    form.objective === obj
                      ? 'border-violet-500 bg-violet-500/10 text-white'
                      : 'border-zinc-700 bg-zinc-900 text-zinc-400 hover:border-zinc-600 hover:text-zinc-300'
                  }`}
                >
                  {obj}
                  {form.objective === obj && <Check className="w-4 h-4 text-violet-400" />}
                </button>
              ))}
            </div>

            {/* Summary card */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mb-4">
              <p className="text-zinc-500 text-xs mb-2 uppercase tracking-wide font-mono">Resumen del proyecto</p>
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Nombre</span>
                  <span className="text-white font-medium">{form.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Dominio</span>
                  <span className="text-white font-mono text-xs">{form.domain}</span>
                </div>
                {form.industry && (
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Industria</span>
                    <span className="text-white">{form.industry}</span>
                  </div>
                )}
                {form.objective && (
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Objetivo</span>
                    <span className="text-white text-right max-w-[60%]">{form.objective}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-4 flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            {error}
          </div>
        )}

        {/* Actions */}
        <div className="mt-8 flex gap-3">
          {step < totalSteps ? (
            <button
              onClick={nextStep}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors"
            >
              Siguiente
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium transition-colors"
            >
              {loading ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Creando proyecto...</>
              ) : (
                <><Check className="w-4 h-4" /> Crear proyecto</>
              )}
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
