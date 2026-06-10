import { getProjectWithDesign, getDesignPins } from '@/lib/feedback-actions'
import Link from 'next/link'
import { ArrowLeft, Image as ImageIcon } from 'lucide-react'
import DesignFeedbackClient from './DesignFeedbackClient'

export default async function ProjectFeedbackPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const { success, project, design, error, isAdmin } = await getProjectWithDesign(id)

  if (!success || !project) {
    return (
      <div className="min-h-screen bg-slate-50 pt-[22vh] lg:pt-48 pb-20 font-sans flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-black text-slate-900 mb-4">Proyecto no encontrado</h1>
          <p className="text-slate-500 mb-8">{error || 'No tienes acceso a este proyecto.'}</p>
          <Link href="/mi-cuenta/proyectos" className="px-6 py-3 bg-violet-600 text-white rounded-full font-bold text-sm">
            Volver a Proyectos
          </Link>
        </div>
      </div>
    )
  }

  if (!design) {
    return (
      <div className="min-h-screen bg-slate-50 pt-[22vh] lg:pt-48 pb-20 font-sans">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ImageIcon className="w-10 h-10 text-slate-300" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-4">Aún no hay diseños subidos</h1>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">
            El proyecto "{project.title}" está creado, pero el equipo de Webunica aún no ha subido la primera propuesta. Te avisaremos cuando esté lista.
          </p>
          <Link href="/mi-cuenta/proyectos" className="text-violet-600 font-bold hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Volver atrás
          </Link>
        </div>
      </div>
    )
  }

  // Fetch initial pins and comments
  const { pins } = await getDesignPins(design.id)

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      {/* Top Bar */}
      <div className="h-20 bg-white border-b border-slate-200 px-6 flex items-center justify-between shrink-0 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <Link href="/mi-cuenta/proyectos" className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors">
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </Link>
          <div>
            <h1 className="text-lg font-black text-slate-900 leading-tight">{project.title}</h1>
            <span className="text-[10px] font-black uppercase tracking-widest text-violet-600">Versión: {design.version}</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4 text-xs font-bold text-slate-500">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-600"></span> Haz clic en la imagen para agregar un pin
          </span>
        </div>
      </div>

      {/* Main Interactive Area */}
      <div className="flex-1 overflow-hidden relative">
        <DesignFeedbackClient 
          project={project}
          design={design}
          initialPins={pins || []}
        />
      </div>
    </div>
  )
}
