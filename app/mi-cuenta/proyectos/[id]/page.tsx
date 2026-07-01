import { getProjectPhasesWithTasks } from '@/lib/project-actions'
import { createClient } from '@/lib/supabase/server'
import { getSupabaseAdmin } from '@/lib/supabase/admin'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Globe, Layout, Palette, PenTool, DollarSign } from 'lucide-react'
import TaskCard from '@/components/client/task-card'

export const dynamic = 'force-dynamic'

const ADMIN_EMAILS = ['javiermillarv@gmail.com', 'javier@webunica.cl', 'javiermillar@gmail.com']

// Nuevos colores para 5 fases (Fase 0 a Fase 4)
const PHASE_GRADIENTS = [
  { bg: 'from-amber-400 to-orange-500', badge: '#f59e0b' }, // Fase 0
  { bg: 'from-pink-500 to-rose-500', badge: '#ec4899' },    // Fase 1 (Diseño)
  { bg: 'from-teal-500 to-emerald-500', badge: '#14b8a6' }, // Fase 2
  { bg: 'from-violet-500 to-purple-500', badge: '#8b5cf6' }, // Fase 3
  { bg: 'from-blue-500 to-cyan-500', badge: '#3b82f6' },    // Fase 4
]

const BADGE_LABELS: Record<string, string> = {
  critico: 'Crítico',
  intenso: 'Intenso',
  go_live: '🚀 Go Live',
  normal: '',
}

const BADGE_CLASSES: Record<string, string> = {
  critico: 'bg-red-50 text-red-600',
  intenso: 'bg-orange-50 text-orange-600',
  go_live: 'bg-emerald-50 text-emerald-600',
  normal: 'bg-slate-100 text-slate-500',
}

const PLATFORM_LABEL: Record<string, string> = {
  shopify: 'Shopify',
  wordpress: 'WordPress',
  woocommerce: 'WordPress + WooCommerce',
}

export default async function ClientProyectoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 pt-48 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-black text-slate-900 mb-4">Acceso Requerido</h1>
          <Link href="/login" className="text-violet-600 font-bold hover:underline">Iniciar Sesión</Link>
        </div>
      </div>
    )
  }

  const isAdmin = ADMIN_EMAILS.includes(user.email || '')
  const adminClient = getSupabaseAdmin()

  // Fetch project
  const query = adminClient.from('client_projects').select('*').eq('id', id)
  if (!isAdmin) query.eq('user_id', user.id)
  const { data: project, error: projectError } = await query.single()

  if (projectError || !project) {
    return (
      <div className="min-h-screen bg-slate-50 pt-48 pb-20 flex items-center justify-center font-sans">
        <div className="text-center">
          <h1 className="text-2xl font-black text-slate-900 mb-4">Proyecto no encontrado</h1>
          <p className="text-slate-500 mb-8">No tienes acceso a este proyecto o no existe.</p>
          <Link href="/mi-cuenta/proyectos" className="text-violet-600 font-bold hover:underline">← Volver</Link>
        </div>
      </div>
    )
  }

  const { phases } = await getProjectPhasesWithTasks(id)

  // Calculate stats (ignoring Fase 0 for overall dev progress maybe? For now include all)
  const allTasks = (phases as any[]).flatMap((p: any) => p.tasks || [])
  const completedCount = allTasks.filter((t: any) => t.status === 'completado').length
  const totalCount = allTasks.length
  const progressPct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  const platform = PLATFORM_LABEL[project.platform] || 'Proyecto Web'

  // Extract phases for specialized UI
  const phase0 = (phases as any[]).find(p => p.phase_number === 0)
  const phase1 = (phases as any[]).find(p => p.phase_number === 1)
  const devPhases = (phases as any[]).filter(p => p.phase_number >= 2)

  const paymentPerPhase = project.total_price ? Math.round(project.total_price * 0.25) : 0
  const formattedPayment = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(paymentPerPhase)

  return (
    <div className="min-h-screen bg-[#fafaf9] font-sans antialiased text-[#1c1917] pt-[22vh] lg:pt-48 pb-24">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Back */}
        <Link href="/mi-cuenta/proyectos" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-violet-600 hover:text-violet-700 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Mis Proyectos
        </Link>

        {/* Hero Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-5 py-2 rounded-full text-sm font-bold mb-5 uppercase tracking-wide">
            ⏱️ Plan de Desarrollo — {platform}
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-4 text-slate-900">
            {project.title}
          </h1>
          {project.description && (
            <p className="text-slate-500 text-lg max-w-xl mx-auto">{project.description}</p>
          )}

          {/* Urgency banner if in progress */}
          {project.status !== 'aprobado' && (
            <div className="bg-red-50 text-red-600 rounded-xl px-6 py-4 mt-6 max-w-md mx-auto font-semibold flex items-center justify-center gap-2 text-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              Proyecto en desarrollo — Actualizamos tu plan en tiempo real
            </div>
          )}
        </header>

        {/* Timeline Overview */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.2),transparent)] pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-xl font-black mb-6 tracking-tight">
              Vista General del Proyecto
            </h3>

            {/* Segment bar */}
            <div className="flex gap-1 mb-4 rounded-full overflow-hidden h-2.5">
              {(phases as any[]).map((phase: any, i: number) => {
                const pTasks = phase.tasks || []
                const pCompleted = pTasks.filter((t: any) => t.status === 'completado').length
                const pPct = pTasks.length > 0 ? pCompleted / pTasks.length : 0
                const colors = ['bg-amber-400', 'bg-pink-400', 'bg-teal-400', 'bg-violet-400', 'bg-blue-400']
                return (
                  <div key={phase.id} className="flex-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
                    <div
                      className={`h-full transition-all duration-700 ${colors[i % colors.length]}`}
                      style={{ width: `${pPct * 100}%` }}
                    />
                  </div>
                )
              })}
            </div>

            {/* Labels */}
            <div className="flex">
              {(phases as any[]).map((phase: any) => (
                <div key={phase.id} className="flex-1 text-center">
                  <strong className="block text-sm text-white">Fase {phase.phase_number}</strong>
                  <span className="text-[10px] sm:text-xs text-slate-400 leading-tight block truncate px-1">
                    {phase.title.replace(/Fase \d+: /, '').replace(/Semana \d+: /, '')}
                  </span>
                </div>
              ))}
            </div>

            {/* Overall Progress */}
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Progreso Total</div>
                <div className="text-3xl font-black">{progressPct}%</div>
                <div className="text-slate-400 text-sm">{completedCount} de {totalCount} tareas completadas</div>
              </div>
              {project.deadline && (
                <div className="text-right">
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Entrega Estimada</div>
                  <div className="text-xl font-black">{new Date(project.deadline).toLocaleDateString('es-CL', { day: 'numeric', month: 'long' })}</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* URLs (Design, Staging, Production) */}
        {(project.design_url || project.staging_url || project.production_url) && (
          <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center shrink-0">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-800 mb-1">Accesos de tu proyecto</h4>
              <p className="text-sm text-slate-500">Links para revisar avances de diseño y desarrollo.</p>
            </div>
            <div className="flex flex-col gap-2 shrink-0">
              {project.design_url && (
                <a href={project.design_url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-pink-100 border border-pink-200 rounded-full text-xs font-bold text-pink-700 hover:bg-pink-200 transition-colors">
                  {project.design_tool === 'adobe_xd' ? <Layout className="w-3.5 h-3.5" /> : <PenTool className="w-3.5 h-3.5" />}
                  Diseño {project.design_tool === 'adobe_xd' ? 'Adobe XD' : 'Figma'} <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {project.staging_url && (
                <a href={project.staging_url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors">
                  Staging / Preview <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {project.production_url && (
                <a href={project.production_url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 rounded-full text-xs font-bold text-white hover:bg-emerald-700 transition-colors">
                  Sitio en Producción <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        )}

        {/* FASE 0: Kick-off (Special UI) */}
        {phase0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 mb-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Palette className="w-32 h-32 text-amber-500" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <span className="px-3 py-1 bg-amber-200 text-amber-800 rounded-lg text-[10px] font-black uppercase tracking-widest">
                  Fase 0 — Requiere tu acción
                </span>
                {paymentPerPhase > 0 && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-slate-800 rounded-full text-xs font-bold shadow-sm">
                    <DollarSign className="w-3 h-3 text-emerald-500" />
                    Pago: {formattedPayment}
                  </span>
                )}
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-2">{phase0.title}</h2>
              <p className="text-slate-600 mb-8 max-w-2xl">{phase0.subtitle}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(phase0.tasks || []).map((task: any) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* FASE 1: Diseño UX/UI (Special UI) */}
        {phase1 && (
          <div className="bg-white border-2 border-pink-100 hover:border-pink-300 rounded-3xl overflow-hidden mb-12 transition-all shadow-sm">
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-pink-100">
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="px-3 py-1 bg-pink-200 text-pink-800 rounded-lg text-[10px] font-black uppercase tracking-widest">
                    Fase 1
                  </span>
                  {paymentPerPhase > 0 && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-slate-800 rounded-full text-xs font-bold shadow-sm">
                      <DollarSign className="w-3 h-3 text-emerald-500" />
                      Pago: {formattedPayment}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-1">{phase1.title}</h2>
                <p className="text-slate-500">{phase1.subtitle}</p>
              </div>
              {project.design_url && (
                <a href={project.design_url} target="_blank" rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-4 bg-pink-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-pink-200 hover:bg-pink-700 transition-all">
                  <PenTool className="w-4 h-4" />
                  Ver Maqueta Visual en {project.design_tool === 'adobe_xd' ? 'Adobe XD' : 'Figma'}
                </a>
              )}
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-3">
              {(phase1.tasks || []).map((task: any) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </div>
          </div>
        )}

        {/* Fases 2-4: Desarrollo Regular */}
        <div className="space-y-6">
          <h3 className="text-2xl font-black text-slate-900 mb-6 px-2">Fases de Desarrollo</h3>
          {devPhases.map((phase: any, phaseIdx: number) => {
            const phaseTasks = phase.tasks || []
            const phaseCompleted = phaseTasks.filter((t: any) => t.status === 'completado').length
            const phaseTotal = phaseTasks.length
            const gradient = PHASE_GRADIENTS[(phaseIdx + 2) % PHASE_GRADIENTS.length] // +2 because Phase 0 and 1 exist
            const badgeLabel = BADGE_LABELS[phase.badge]
            const badgeClass = BADGE_CLASSES[phase.badge] || BADGE_CLASSES.normal

            return (
              <div key={phase.id} className="bg-white border border-[#e7e5e4] rounded-3xl overflow-hidden hover:shadow-lg hover:shadow-slate-100 transition-all">
                {/* Phase Header */}
                <div className="flex items-center gap-5 p-7 border-b border-[#e7e5e4]">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient.bg} flex items-center justify-center shrink-0`}>
                    <span className="text-white font-black text-xl">{phase.phase_number}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h2 className="text-lg font-bold text-slate-900">{phase.title}</h2>
                      {badgeLabel && (
                        <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${badgeClass}`}>
                          {badgeLabel}
                        </span>
                      )}
                      {paymentPerPhase > 0 && phase.phase_number < 4 && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-xs font-bold">
                          <DollarSign className="w-3 h-3 text-emerald-500" />
                          Pago: {formattedPayment}
                        </span>
                      )}
                    </div>
                    {phase.subtitle && (
                      <p className="text-sm text-slate-400">{phase.subtitle}</p>
                    )}
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-xl font-black text-slate-900">
                      {phaseTotal > 0 ? Math.round((phaseCompleted / phaseTotal) * 100) : 0}%
                    </div>
                    <div className="text-[10px] text-slate-400">{phaseCompleted}/{phaseTotal}</div>
                  </div>
                </div>

                {/* Tasks Grid */}
                <div className="p-7 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {phaseTasks.map((task: any) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {phases.length === 0 && (
          <div className="bg-white border-2 border-dashed border-slate-200 rounded-3xl p-16 text-center">
            <Clock className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-black text-slate-900 mb-2">Preparando tu plan</h3>
            <p className="text-slate-500 max-w-sm mx-auto">
              El equipo de Webunica está configurando tu plan de desarrollo. Te notificaremos cuando esté listo.
            </p>
          </div>
        )}

        {/* Footer CTA */}
        <div className="mt-16 bg-teal-50 border border-teal-100 rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center shrink-0">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-1">¿Tienes preguntas sobre tu proyecto?</h4>
            <p className="text-sm text-slate-500">Contáctanos directamente por WhatsApp o escríbenos.</p>
          </div>
          <div className="sm:ml-auto flex gap-3">
            <a
              href="https://wa.me/56966198752"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25d366] text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#1fba59] transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
