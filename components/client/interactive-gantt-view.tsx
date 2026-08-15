'use client'

import { useState } from 'react'
import { CalendarDays, CheckCircle2, Clock, Lock, Sparkles, User, Briefcase, Users, PlusCircle } from 'lucide-react'
import TaskToggle from '@/components/admin/task-toggle'
import AddMeetingTaskModal from '@/components/admin/add-meeting-task-modal'

type Props = {
  projectId: string
  project: any
  phases: any[]
}

const BADGE_CLASSES: Record<string, string> = {
  critico: 'bg-rose-100 text-rose-700 border-rose-200',
  intenso: 'bg-amber-100 text-amber-700 border-amber-200',
  go_live: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  normal: 'bg-slate-100 text-slate-600 border-slate-200',
}

const BADGE_LABELS: Record<string, string> = {
  critico: 'Fase Crítica',
  intenso: 'Desarrollo Intenso',
  go_live: 'Puesta en Marcha / Go Live',
  normal: 'Fase Normal',
}

const PHASE_GRADIENTS = [
  { bg: 'from-violet-600 to-indigo-600' },
  { bg: 'from-blue-600 to-cyan-600' },
  { bg: 'from-teal-600 to-emerald-600' },
  { bg: 'from-purple-600 to-pink-600' },
  { bg: 'from-amber-600 to-orange-600' },
  { bg: 'from-emerald-600 to-teal-600' },
]

export default function InteractiveGanttView({ projectId, project, phases }: Props) {
  const [selectedWeek, setSelectedWeek] = useState<number | 'all'>('all')

  // Calculate overall stats
  let totalTasks = 0
  let completedTasks = 0

  phases.forEach((phase: any) => {
    const tasks = phase.tasks || []
    totalTasks += tasks.length
    completedTasks += tasks.filter((t: any) => t.status === 'completado').length
  })

  const overallPct = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  // Determine stage percentages (e.g. 50% for 2-4 phases, 25% for 4+ phases)
  const numPhases = phases.length || 1
  const pctPerPhase = numPhases <= 4 ? Math.round(100 / numPhases) : 25

  // Filter phases by selected week tab
  const filteredPhases = selectedWeek === 'all' 
    ? phases 
    : phases.filter((p: any) => p.phase_number === selectedWeek)

  return (
    <div className="space-y-10">
      {/* Dark Theme Header Container (Estilo Demo Gantt) */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden backdrop-blur-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 blur-[100px] pointer-events-none rounded-full" />
        
        {/* Header Top Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3 h-3" /> Estado del Cronograma & Hitos
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {project.title}
            </h2>
            {project.client_name && (
              <p className="text-slate-400 text-xs mt-1">Cliente: {project.client_name}</p>
            )}
          </div>

          {/* Progreso General Widget */}
          <div className="flex items-center gap-4 bg-slate-950/80 px-6 py-4 rounded-2xl border border-slate-800 shrink-0">
            <div>
              <div className="text-[10px] text-slate-400 font-mono font-bold uppercase">Progreso General</div>
              <div className="text-2xl font-black text-emerald-400">{overallPct}% completado</div>
              <div className="text-[10px] text-slate-400">{completedTasks} de {totalTasks} tareas</div>
            </div>
            <div className="w-20 bg-slate-800 rounded-full h-3 overflow-hidden p-0.5 border border-slate-700">
              <div className="bg-gradient-to-r from-emerald-400 to-teal-300 h-full rounded-full transition-all duration-700" style={{ width: `${overallPct}%` }} />
            </div>
          </div>
        </div>

        {/* Hitos / Etapas de Pago Cards Grid (Matching requested screenshot) */}
        <div className="py-6 border-b border-slate-800/80 relative z-10">
          <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-1.5">
            <Lock className="w-3 h-3 text-emerald-400" /> Hitos de Pago por Cumplimiento de Entregables
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {phases.map((phase: any, idx: number) => {
              const pTasks = phase.tasks || []
              const pCompleted = pTasks.filter((t: any) => t.status === 'completado').length
              const isPhaseDone = pTasks.length > 0 && pCompleted === pTasks.length
              const isPhaseInProgress = pCompleted > 0 && !isPhaseDone

              return (
                <div
                  key={phase.id}
                  className={`p-4 rounded-2xl border transition-all ${
                    isPhaseDone
                      ? 'bg-emerald-950/40 border-emerald-500/50 text-white shadow-lg shadow-emerald-950/40'
                      : isPhaseInProgress
                      ? 'bg-violet-950/40 border-violet-500/50 text-white shadow-lg shadow-violet-950/40'
                      : 'bg-slate-950/50 border-slate-800 text-slate-400 opacity-70'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-bold text-xs">Etapa {phase.phase_number} ({pctPerPhase}%)</span>
                    {isPhaseDone ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : isPhaseInProgress ? (
                      <Clock className="w-4 h-4 text-violet-400 shrink-0" />
                    ) : (
                      <Lock className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </div>
                  <span className="block text-[11px] font-semibold text-slate-200 truncate">
                    {phase.title.replace(/Semana \d+: /, '').replace(/Fase \d+: /, '')}
                  </span>
                  <span className="block text-[10px] mt-1 font-mono">
                    {isPhaseDone ? '✓ Liberado / Completado' : isPhaseInProgress ? '⌛ En Proceso' : '🔒 Pendiente'}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Filter Tabs por Semana (Semana 1, Semana 2, Semana 3, etc.) */}
        <div className="pt-6 relative z-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
            <button
              onClick={() => setSelectedWeek('all')}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 flex items-center gap-2 ${
                selectedWeek === 'all'
                  ? 'bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-400/20'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
              }`}
            >
              <CalendarDays className="w-3.5 h-3.5" />
              <span>Todas las Semanas ({phases.length})</span>
            </button>

            {phases.map((phase: any) => (
              <button
                key={phase.id}
                onClick={() => setSelectedWeek(phase.phase_number)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all shrink-0 flex items-center gap-2 ${
                  selectedWeek === phase.phase_number
                    ? 'bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-400/20'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
                }`}
              >
                <CalendarDays className="w-3.5 h-3.5" />
                <span>Semana {phase.phase_number}</span>
              </button>
            ))}
          </div>

          <AddMeetingTaskModal
            projectId={projectId}
            phases={phases.map((p: any) => ({ id: p.id, phase_number: p.phase_number, title: p.title }))}
          />
        </div>
      </div>

      {/* Lista de Fases y Tareas Organizadas por Secciones */}
      <div className="space-y-6">
        {filteredPhases.map((phase: any, phaseIdx: number) => {
          const phaseTasks = phase.tasks || []
          const phaseCompleted = phaseTasks.filter((t: any) => t.status === 'completado').length
          const phaseTotal = phaseTasks.length
          const gradient = PHASE_GRADIENTS[phaseIdx % PHASE_GRADIENTS.length]
          const badgeLabel = BADGE_LABELS[phase.badge]
          const badgeClass = BADGE_CLASSES[phase.badge] || BADGE_CLASSES.normal

          const reunionTasks = phaseTasks.filter((t: any) => t.assigned_to === 'ambos')
          const clientTasks = phaseTasks.filter((t: any) => t.assigned_to === 'cliente')
          const agencyTasks = phaseTasks.filter((t: any) => !t.assigned_to || t.assigned_to === 'agencia')

          return (
            <div key={phase.id} className="bg-white border border-[#e7e5e4] rounded-3xl overflow-hidden shadow-sm transition-all">
              {/* Phase Header */}
              <div className="flex items-center gap-5 p-7 border-b border-[#e7e5e4]">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient.bg} flex items-center justify-center shrink-0`}>
                  <span className="text-white font-black text-lg">{phase.phase_number}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-slate-900">{phase.title}</h3>
                    {badgeLabel && (
                      <span className={`px-3 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-widest border ${badgeClass}`}>
                        {badgeLabel}
                      </span>
                    )}
                  </div>
                  {phase.subtitle && (
                    <p className="text-xs text-slate-400">{phase.subtitle}</p>
                  )}
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-xl font-black text-slate-900">
                    {phaseTotal > 0 ? Math.round((phaseCompleted / phaseTotal) * 100) : 0}%
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium">{phaseCompleted}/{phaseTotal} completadas</div>
                </div>
              </div>

              {/* Sub-secciones por Responsabilidad */}
              <div className="p-6 space-y-6">
                {/* Subsección: Reuniones y Coordinación */}
                {reunionTasks.length > 0 && (
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-lg inline-flex items-center gap-1.5 mb-3">
                      <Users className="w-3.5 h-3.5" /> 🤝 Reuniones, Minutas y Compromisos Conjuntos ({reunionTasks.length})
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {reunionTasks.map((task: any) => (
                        <TaskToggle key={task.id} task={task} projectId={projectId} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Subsección: Entregables del Cliente */}
                {clientTasks.length > 0 && (
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-lg inline-flex items-center gap-1.5 mb-3">
                      <User className="w-3.5 h-3.5" /> 🙋‍♂️ Insumos y Responsabilidades del Cliente ({clientTasks.length})
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {clientTasks.map((task: any) => (
                        <TaskToggle key={task.id} task={task} projectId={projectId} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Subsección: Trabajo Webunica */}
                {agencyTasks.length > 0 && (
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-violet-800 bg-violet-100 px-3 py-1 rounded-lg inline-flex items-center gap-1.5 mb-3">
                      <Briefcase className="w-3.5 h-3.5" /> 🚀 Trabajo de Diseño & Desarrollo Webunica ({agencyTasks.length})
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {agencyTasks.map((task: any) => (
                        <TaskToggle key={task.id} task={task} projectId={projectId} />
                      ))}
                    </div>
                  </div>
                )}

                {phaseTasks.length === 0 && (
                  <p className="text-slate-400 text-sm text-center py-4">Sin tareas en esta fase.</p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
