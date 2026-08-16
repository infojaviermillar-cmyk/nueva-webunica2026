import { getProjectPhasesWithTasks } from '@/lib/project-actions'
import { getProjectNotes } from '@/lib/project-notes-actions'
import { getSupabaseAdmin } from '@/lib/supabase/admin'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Globe, Layout, PenTool, DollarSign, Clock, CalendarDays, CheckCircle2, Circle } from 'lucide-react'
import TaskCard from '@/components/client/task-card'
import ProjectChatClient from '@/components/client/project-chat-client'
import TaskToggle from '@/components/admin/task-toggle'
import BusinessInfoForm from '@/components/client/business-info-form'
import AddMeetingTaskModal from '@/components/admin/add-meeting-task-modal'
import InteractiveGanttView from '@/components/client/interactive-gantt-view'
import { getCleanDescription } from '@/lib/project-types'
import { User, Briefcase, Users } from 'lucide-react'

export const dynamic = 'force-dynamic'

const PHASE_GRADIENTS = [
  { bg: 'from-amber-400 to-orange-500', badge: '#f59e0b' },
  { bg: 'from-pink-500 to-rose-500', badge: '#ec4899' },
  { bg: 'from-teal-500 to-emerald-500', badge: '#14b8a6' },
  { bg: 'from-violet-500 to-purple-500', badge: '#8b5cf6' },
  { bg: 'from-blue-500 to-cyan-500', badge: '#3b82f6' },
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
  shopify: 'Shopify Básico',
  'shopify-full': 'Shopify Full',
  'shopify-elite': 'Shopify Custom Elite',
  wordpress: 'WordPress',
  woocommerce: 'WordPress + WooCommerce',
  corporativo: 'Web Corporativa',
}

export default async function PublicProyectoPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const adminClient = getSupabaseAdmin()
  const { data: project, error: projectError } = await adminClient
    .from('client_projects')
    .select('*')
    .eq('id', id)
    .single()

  if (projectError || !project) {
    return (
      <div className="min-h-screen bg-slate-50 pt-48 pb-20 flex items-center justify-center font-sans">
        <div className="text-center max-w-md px-6">
          <h1 className="text-3xl font-black text-slate-900 mb-3">Proyecto no encontrado</h1>
          <p className="text-slate-500 mb-8">El enlace de este proyecto no es válido o ha expirado.</p>
          <Link href="/" className="px-6 py-3 bg-violet-600 text-white font-bold rounded-full hover:bg-violet-700 transition-colors">
            Ir a Webunica.cl
          </Link>
        </div>
      </div>
    )
  }

  const { phases } = await getProjectPhasesWithTasks(id)
  const { notes } = await getProjectNotes(id)

  const allTasks = (phases as any[]).flatMap((p: any) => p.tasks || [])
  const completedCount = allTasks.filter((t: any) => t.status === 'completado').length
  const totalCount = allTasks.length
  const progressPct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  const platform = PLATFORM_LABEL[project.platform] || 'Proyecto Web'

  const paymentPerPhase = project.total_price ? Math.round(project.total_price * 0.25) : 0
  const formattedPayment = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(paymentPerPhase)

  return (
    <div className="min-h-screen bg-[#fafaf9] font-sans antialiased text-[#1c1917] pt-[22vh] lg:pt-48 pb-24">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Branding header */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-stone-200">
          <div className="flex items-center gap-3">
            <span className="font-black text-xl tracking-tighter text-slate-900">
              Webunica<span className="text-violet-600">.cl</span>
            </span>
            <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-[10px] font-black uppercase tracking-wider">
              Seguimiento Privado
            </span>
          </div>
          <a
            href="https://wa.me/56966198752"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1.5"
          >
            <span>Soporte WhatsApp</span>
          </a>
        </div>

        {/* Hero Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-5 py-2 rounded-full text-xs font-bold mb-5 uppercase tracking-wide">
            ⏱️ Plan de Desarrollo — {platform}
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-4 text-slate-900">
            {project.title}
          </h1>
          {project.client_name && (
            <p className="text-slate-600 font-semibold mb-2">Cliente: {project.client_name}</p>
          )}
          {getCleanDescription(project.description) && (
            <p className="text-slate-500 text-base max-w-2xl mx-auto">{getCleanDescription(project.description)}</p>
          )}
        </header>

        {/* External URLs */}
        {(project.design_url || project.staging_url || project.production_url) && (
          <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center shrink-0">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-800 mb-1">Enlaces de Revisión y Avances</h4>
              <p className="text-xs text-slate-500">Accede directamente a las maquetas visuales y al sitio de pruebas.</p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
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
                  Sitio Staging / Preview <ExternalLink className="w-3 h-3" />
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

        {/* Formulario de Insumos y Datos de la Empresa */}
        <BusinessInfoForm projectId={id} initialDescription={project.description} />

        {/* Carta Gantt Interactivas con Pestañas por Semana e Hitos de Pago */}
        <div className="mb-16">
          <InteractiveGanttView projectId={id} project={project} phases={phases} />
        </div>

        {/* Section: Project Chat / Bitácora */}
        <div className="mb-12">
          <h3 className="text-2xl font-black text-slate-900 mb-4 px-2">Bitácora y Comentarios del Proyecto</h3>
          <ProjectChatClient projectId={id} initialNotes={notes} />
        </div>

        {/* Footer info */}
        <footer className="text-center pt-8 border-t border-slate-200 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Webunica.cl — Plataforma de Desarrollo Web & E-commerce en Chile</p>
        </footer>

      </div>
    </div>
  )
}
