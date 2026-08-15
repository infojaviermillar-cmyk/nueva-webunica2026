"use client";

import { useState } from 'react';
import { CalendarDays, CheckCircle2, ShieldCheck, Clock, MessageSquare, ArrowRight, User, Briefcase, Users, Lock, ChevronRight, Sparkles } from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';

export default function GanttShowcaseSection() {
  const [activeWeek, setActiveWeek] = useState<number>(1);
  const [demoTasks, setDemoTasks] = useState([
    { id: 1, week: 1, title: 'Reunión Kick-off & Definición de Objetivos', assigned: 'ambos', status: 'completado', desc: 'Sesión virtual de inicio por Google Meet' },
    { id: 2, week: 1, title: 'Entrega de Logo, Manual de Marca & Fotos', assigned: 'cliente', status: 'completado', desc: 'Sube tus insumos directamente en la plataforma' },
    { id: 3, week: 1, title: 'Wireframes UX/UI & Mockups en Figma', assigned: 'agencia', status: 'completado', desc: 'Diseño responsive Desktop y Mobile' },
    { id: 4, week: 2, title: 'Setup Shopify + Tema Premium', assigned: 'agencia', status: 'completado', desc: 'Configuración técnica base y staging' },
    { id: 5, week: 2, title: 'Validación de Estructura de Navegación', assigned: 'ambos', status: 'en_progreso', desc: 'Revisión conjunta del menú y categorías' },
    { id: 6, week: 3, title: 'Importación de Catálogo (hasta 1.000 SKUs)', assigned: 'agencia', status: 'pendiente', desc: 'Carga masiva de productos y precios' },
    { id: 7, week: 3, title: 'Integración Webpay & Mercado Pago', assigned: 'agencia', status: 'pendiente', desc: 'Pasarelas de pago locales con cuotas' },
    { id: 8, week: 4, title: 'Pruebas QA, SEO Técnico & Go Live', assigned: 'agencia', status: 'pendiente', desc: 'Lanzamiento oficial en tu dominio' },
  ]);

  function toggleTask(id: number) {
    setDemoTasks(prev => prev.map(t => t.id === id ? { ...t, status: t.status === 'completado' ? 'pendiente' : 'completado' } : t));
  }

  const currentTasks = demoTasks.filter(t => t.week === activeWeek);
  const totalCompleted = demoTasks.filter(t => t.status === 'completado').length;
  const progressPct = Math.round((totalCompleted / demoTasks.length) * 100);

  return (
    <section className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden" id="carta-gantt-hitos">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-violet-600/20 via-indigo-600/20 to-pink-600/20 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/10 border border-white/15 backdrop-blur-md rounded-full">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-[11px] font-mono font-bold tracking-widest text-emerald-300 uppercase">
              Garantía & Transparencia Total
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tighter text-white font-heading leading-tight">
            Carta Gantt en Línea <br/>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              & Pagos por Hitos Cumplidos
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Olvídate de la incertidumbre en proyectos web. Accedes a tu panel privado de seguimiento en vivo, avanzamos semana a semana y <strong className="text-white font-semibold">liberas tus pagos únicamente contra el cumplimiento verificado de cada hito</strong>.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-emerald-500/50 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
              <CalendarDays className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Carta Gantt en Tiempo Real</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Visualiza el avance exacto semana a semana con responsabilidades clasificadas para el cliente, la agencia y reuniones agendadas.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-violet-500/50 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-5 group-hover:scale-110 transition-transform">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Pagos Protegidos por Hitos</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Tu inversión está respaldada. Pagas el anticipo inicial y los saldos posteriores se liberan previa aprobación de cada etapa del proyecto.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-cyan-500/50 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Bitácora & Archivos Directos</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Carga tus logos y fotos directamente en el panel, registra notas en cada tarea y comunícate sin perder nada en chats dispersos.
            </p>
          </div>
        </div>

        {/* Interactive Gantt Demo Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-[2.5rem] p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3" /> Panel Interactivo de Demostración
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">
                Proyecto: Tienda Shopify Performance — Cliente Ejemplo
              </h3>
            </div>

            {/* Overall Progress */}
            <div className="flex items-center gap-4 bg-slate-950/80 px-6 py-3.5 rounded-2xl border border-slate-800">
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">Progreso General</div>
                <div className="text-xl font-black text-emerald-400">{progressPct}% completado</div>
              </div>
              <div className="w-24 bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div className="bg-emerald-400 h-full transition-all duration-500" style={{ width: `${progressPct}%` }} />
              </div>
            </div>
          </div>

          {/* Milestone Payment Status Bar */}
          <div className="py-6 border-b border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
            <div className="bg-emerald-950/50 border border-emerald-800/50 p-3 rounded-2xl flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="block font-bold text-emerald-300">Etapa 1 (25%)</span>
                <span className="text-[10px] text-slate-400">Kick-off & Diseño ✓ Liberado</span>
              </div>
            </div>

            <div className="bg-violet-950/50 border border-violet-800/50 p-3 rounded-2xl flex items-center gap-2">
              <Clock className="w-4 h-4 text-violet-400 shrink-0" />
              <div>
                <span className="block font-bold text-violet-300">Etapa 2 (25%)</span>
                <span className="text-[10px] text-slate-400">Setup Shopify ⏳ En proceso</span>
              </div>
            </div>

            <div className="bg-slate-950/50 border border-slate-800 p-3 rounded-2xl flex items-center gap-2 opacity-60">
              <Lock className="w-4 h-4 text-slate-500 shrink-0" />
              <div>
                <span className="block font-bold text-slate-300">Etapa 3 (25%)</span>
                <span className="text-[10px] text-slate-500">Catálogo & Pagos (Pendiente)</span>
              </div>
            </div>

            <div className="bg-slate-950/50 border border-slate-800 p-3 rounded-2xl flex items-center gap-2 opacity-60">
              <Lock className="w-4 h-4 text-slate-500 shrink-0" />
              <div>
                <span className="block font-bold text-slate-300">Etapa 4 (25%)</span>
                <span className="text-[10px] text-slate-500">Go Live & Cierre (Pendiente)</span>
              </div>
            </div>
          </div>

          {/* Week Selector Tabs */}
          <div className="flex items-center gap-2 pt-6 pb-6 overflow-x-auto">
            {[1, 2, 3, 4].map(w => (
              <button
                key={w}
                onClick={() => setActiveWeek(w)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 flex items-center gap-2 ${
                  activeWeek === w
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <CalendarDays className="w-3.5 h-3.5" />
                <span>Semana {w}</span>
              </button>
            ))}
          </div>

          {/* Interactive Task Cards */}
          <div className="space-y-3 mb-8">
            {currentTasks.map(task => {
              const isDone = task.status === 'completado';
              return (
                <div
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                    isDone
                      ? 'bg-emerald-950/20 border-emerald-800/40 hover:bg-emerald-950/30'
                      : 'bg-slate-950/50 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className="mt-1 shrink-0">
                    <CheckCircle2 className={`w-5 h-5 transition-colors ${isDone ? 'text-emerald-400' : 'text-slate-600'}`} />
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider flex items-center gap-1 ${
                        task.assigned === 'cliente'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : task.assigned === 'ambos'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                      }`}>
                        {task.assigned === 'cliente' ? <User className="w-2.5 h-2.5" /> : task.assigned === 'ambos' ? <Users className="w-2.5 h-2.5" /> : <Briefcase className="w-2.5 h-2.5" />}
                        {task.assigned === 'cliente' ? 'Cliente' : task.assigned === 'ambos' ? 'Reunión / Ambos' : 'Webunica'}
                      </span>
                    </div>

                    <h4 className={`text-sm font-bold ${isDone ? 'line-through text-emerald-200/70' : 'text-white'}`}>
                      {task.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">{task.desc}</p>
                  </div>

                  <span className="text-[10px] font-mono text-slate-500 shrink-0">Clic para probar</span>
                </div>
              );
            })}
          </div>

          {/* Footer Callout */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-white">¿Quieres trabajar con seguimiento por Carta Gantt?</h4>
                <p className="text-xs text-slate-400">Incluido sin costo adicional en todos nuestros proyectos de ingeniería web.</p>
              </div>
            </div>

            <LeadButton className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-emerald-500/20 shrink-0 flex items-center gap-2">
              <span>Iniciar Mi Proyecto</span>
              <ArrowRight className="w-4 h-4" />
            </LeadButton>
          </div>

        </div>

      </div>
    </section>
  );
}
