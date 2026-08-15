import { getProjectFull } from '@/lib/project-actions'
import { getProjectNotes } from '@/lib/project-notes-actions'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Globe, CheckCircle2, Circle, Clock, CalendarDays } from 'lucide-react'
import TaskToggle from '@/components/admin/task-toggle'
import DesignSettingsForm from '@/components/admin/design-settings-form'
import GanttExportButton from '@/components/admin/gantt-chart-pdf'
import ProjectChat from '@/components/admin/project-chat'
import DeleteProjectButton from '@/components/admin/delete-project-button'
import ShareLinkButton from '@/components/admin/share-link-button'
import BusinessInfoForm from '@/components/client/business-info-form'

export const dynamic = 'force-dynamic'

const PLATFORM_COLORS: Record<string, { bg: string; text: string; dot: string; label: string }> = {
  shopify: { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500', label: 'Shopify' },
  wordpress: { bg: 'bg-blue-50', text: 'text-blue-700', dot: 'bg-blue-500', label: 'WordPress' },
  woocommerce: { bg: 'bg-violet-50', text: 'text-violet-700', dot: 'bg-violet-500', label: 'WooCommerce' },
}

const BADGE_STYLES: Record<string, string> = {
  critico: 'bg-red-50 text-red-600',
  intenso: 'bg-orange-50 text-orange-600',
  go_live: 'bg-emerald-50 text-emerald-600',
  normal: 'bg-slate-100 text-slate-500',
}

const PHASE_COLORS = ['from-teal-500 to-emerald-500', 'from-violet-500 to-purple-500', 'from-orange-500 to-amber-500', 'from-red-500 to-rose-500']

export default async function AdminProyectoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const isAllowedAdmin = user?.email === 'javiermillarv@gmail.com' || user?.email?.endsWith('@webunica.cl')
  if (!user || !isAllowedAdmin) redirect('/mi-cuenta')

  const { success, project, phases } = await getProjectFull(id)

  if (!success || !project) {
    return (
      <div className="min-h-screen bg-slate-50 pt-[22vh] lg:pt-48 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-black text-slate-900 mb-4">Proyecto no encontrado</h1>
          <Link href="/admin/proyectos" className="text-violet-600 font-bold hover:underline">← Volver</Link>
        </div>
      </div>
    )
  }

  const platform = PLATFORM_COLORS[project.platform] || PLATFORM_COLORS['shopify']
  const totalTasks = phases.flatMap((p: any) => p.tasks || []).length
  const completedTasks = phases.flatMap((p: any) => p.tasks || []).filter((t: any) => t.status === 'completado').length
  const progressPct = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  return (
    <div className="min-h-screen bg-slate-50 pt-[22vh] lg:pt-48 pb-24 font-sans">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Back */}
        <Link href="/admin/proyectos" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-violet-600 hover:text-violet-700 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Todos los Proyectos
        </Link>

        {/* Header */}
        <div className="bg-white border border-slate-200 rounded-[3rem] p-10 mb-8 shadow-xl shadow-slate-100/50">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${platform.bg} ${platform.text}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${platform.dot}`} />
                  {platform.label}
                </span>
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                  project.status === 'aprobado' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                }`}>
                  {project.status === 'aprobado' ? '✓ Aprobado' : '⏳ En Proceso'}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 mb-2">{project.title}</h1>
              {project.client_name && (
                <p className="text-slate-500 font-medium">Cliente: <strong className="text-slate-700">{project.client_name}</strong>
                  {project.client_email && <span className="text-slate-400"> — {project.client_email}</span>}
                </p>
              )}
              {project.description && (
                <p className="text-slate-500 text-sm mt-2 max-w-xl">{project.description}</p>
              )}
            </div>

            {/* URLs and Actions */}
            <div className="flex flex-col gap-3 shrink-0">
              <ShareLinkButton projectId={id} title="📋 Copiar Link Privado Cliente" variant="button" />
              
              <GanttExportButton project={project} phases={phases} />
              
              {project.staging_url && (
                <a href={project.staging_url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-slate-100 hover:bg-slate-200 rounded-full text-xs font-bold text-slate-700 transition-colors">
                  <Globe className="w-4 h-4" /> Staging URL
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              )}
              {project.production_url && (
                <a href={project.production_url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-full text-xs font-bold text-white transition-colors">
                  <Globe className="w-4 h-4" /> Sitio en Vivo
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              )}
              <Link href={`/proyecto/${id}`} target="_blank"
                className="inline-flex items-center gap-2 px-5 py-3 bg-violet-50 hover:bg-violet-100 rounded-full text-xs font-bold text-violet-700 transition-colors">
                <ExternalLink className="w-4 h-4" /> Vista Privada del Cliente
              </Link>
              <div className="pt-2">
                <DeleteProjectButton projectId={id} projectTitle={project.title} redirectTo="/admin/proyectos" variant="button" />
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-black uppercase tracking-widest text-slate-400">Progreso Total</span>
              <span className="text-2xl font-black text-slate-900">{progressPct}%</span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-violet-500 to-emerald-500 rounded-full transition-all duration-700"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-[10px] text-slate-400">{completedTasks} de {totalTasks} tareas completadas</span>
              {project.deadline && (
                <span className="text-[10px] text-slate-400">Deadline: {new Date(project.deadline).toLocaleDateString('es-CL')}</span>
              )}
            </div>
          </div>
        </div>

        {/* Design URL Setup */}
        <DesignSettingsForm 
          projectId={id} 
          initialDesignUrl={project.design_url} 
          initialDesignTool={project.design_tool} 
        />

        {/* Formulario de Insumos y Datos de la Empresa */}
        <BusinessInfoForm projectId={id} initialDescription={project.description} />

        {/* Phases */}
        <div className="space-y-6">
          {(phases as any[]).map((phase: any, phaseIdx: number) => {
            const phaseTasks = phase.tasks || []
            const phaseCompleted = phaseTasks.filter((t: any) => t.status === 'completado').length
            const phaseTotal = phaseTasks.length
            const phaseProgress = phaseTotal > 0 ? Math.round((phaseCompleted / phaseTotal) * 100) : 0
            const badgeStyle = BADGE_STYLES[phase.badge] || BADGE_STYLES['normal']
            const gradient = PHASE_COLORS[phaseIdx % PHASE_COLORS.length]

            return (
              <div key={phase.id} className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-lg shadow-slate-100/50">
                {/* Phase Header */}
                <div className="flex items-center gap-5 p-8 border-b border-slate-100">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0`}>
                    <span className="text-white font-black text-xl">{phase.phase_number}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h2 className="text-lg font-black text-slate-900 tracking-tight">{phase.title}</h2>
                      <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${badgeStyle}`}>
                        {phase.badge === 'critico' ? 'Crítico' : phase.badge === 'go_live' ? 'Go Live' : phase.badge === 'intenso' ? 'Intenso' : 'Normal'}
                      </span>
                    </div>
                    {phase.subtitle && <p className="text-sm text-slate-400 mt-1">{phase.subtitle}</p>}
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-xl font-black text-slate-900">{phaseProgress}%</div>
                    <div className="text-[10px] text-slate-400 font-bold">{phaseCompleted}/{phaseTotal}</div>
                  </div>
                </div>

                {/* Phase Progress Bar */}
                <div className="h-1.5 bg-slate-100">
                  <div
                    className={`h-full bg-gradient-to-r ${gradient} transition-all duration-500`}
                    style={{ width: `${phaseProgress}%` }}
                  />
                </div>

                {/* Tasks Grid */}
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {phaseTasks.map((task: any) => (
                    <TaskToggle key={task.id} task={task} projectId={id} />
                  ))}
                  {phaseTasks.length === 0 && (
                    <p className="text-slate-400 text-sm col-span-2 text-center py-4">Sin tareas en esta fase.</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {phases.length === 0 && (
          <div className="bg-white border-2 border-dashed border-slate-200 rounded-[3rem] p-16 text-center">
            <p className="text-slate-400 font-medium">Este proyecto no tiene fases. Fue creado con el sistema antiguo.</p>
          </div>
        )}

        {/* Gantt Chart — Admin Only */}
        {phases.length > 0 && project.start_date && (
          <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm hidden md:block mt-2">
            <div className="flex items-center gap-3 p-6 border-b border-slate-100">
              <div className="w-10 h-10 bg-slate-100 rounded-2xl flex items-center justify-center">
                <CalendarDays className="w-5 h-5 text-slate-600" />
              </div>
              <div>
                <h3 className="font-black text-slate-900 text-sm uppercase tracking-wider">Carta Gantt — Cronograma de Fases</h3>
                <p className="text-xs text-slate-400">Calculado desde la fecha de inicio del proyecto</p>
              </div>
            </div>
            <div className="p-6 overflow-x-auto">
              <div className="min-w-[600px]">
                {/* Column headers */}
                <div className="flex gap-1 mb-3">
                  <div className="w-48 shrink-0" />
                  {Array.from({ length: (phases as any[]).length + 2 }).map((_, i) => (
                    <div key={i} className="flex-1 text-center">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">S{i + 1}</span>
                    </div>
                  ))}
                </div>
                {/* Phase rows */}
                {(phases as any[]).map((phase: any, idx: number) => {
                  const pTasks = phase.tasks || []
                  const pCompleted = pTasks.filter((t: any) => t.status === 'completado').length
                  const pPct = pTasks.length > 0 ? Math.round((pCompleted / pTasks.length) * 100) : 0
                  const totalCols = (phases as any[]).length + 2
                  const barColors = [
                    'bg-teal-500', 'bg-violet-500', 'bg-orange-500', 'bg-red-500',
                    'bg-blue-500', 'bg-emerald-500', 'bg-pink-500', 'bg-amber-500'
                  ]
                  const barColor = barColors[idx % barColors.length]
                  // Calculate start date for this phase (1 week per phase)
                  const phaseStart = new Date(project.start_date!)
                  phaseStart.setDate(phaseStart.getDate() + idx * 7)
                  const phaseEnd = new Date(phaseStart)
                  phaseEnd.setDate(phaseEnd.getDate() + 6)
                  const formatShort = (d: Date) => d.toLocaleDateString('es-CL', { day: 'numeric', month: 'short' })

                  return (
                    <div key={phase.id} className="flex gap-1 mb-2 items-center">
                      {/* Phase label */}
                      <div className="w-48 shrink-0 pr-3">
                        <div className="text-xs font-bold text-slate-700 truncate">{phase.title.replace(/Semana \d+: /, '')}</div>
                        <div className="text-[10px] text-slate-400">{formatShort(phaseStart)} – {formatShort(phaseEnd)}</div>
                      </div>
                      {/* Offset empty columns */}
                      {Array.from({ length: idx }).map((_, i) => (
                        <div key={i} className="flex-1" />
                      ))}
                      {/* Phase bar — spans 1 column */}
                      <div className="flex-1 relative h-8 group">
                        <div className={`absolute inset-0 ${barColor} rounded-lg opacity-20`} />
                        <div
                          className={`absolute inset-y-0 left-0 ${barColor} rounded-lg transition-all duration-500`}
                          style={{ width: `${pPct}%` }}
                        />
                        <div className="absolute inset-0 flex items-center justify-between px-2">
                          <span className="text-[10px] font-bold text-white drop-shadow-sm truncate max-w-[60%]">
                            {phase.title.replace(/Semana \d+: /, '').slice(0, 20)}
                          </span>
                          <span className="text-[10px] font-black text-white drop-shadow-sm">{pPct}%</span>
                        </div>
                      </div>
                      {/* Remaining empty columns */}
                      {Array.from({ length: totalCols - idx - 2 }).map((_, i) => (
                        <div key={i} className="flex-1" />
                      ))}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* Project Chat / Bitácora */}
        <ProjectChatWrapper projectId={project.id} />

      </div>
    </div>
  )
}

async function ProjectChatWrapper({ projectId }: { projectId: string }) {
  const { notes } = await getProjectNotes(projectId)
  return <ProjectChat projectId={projectId} initialNotes={notes} />
}
