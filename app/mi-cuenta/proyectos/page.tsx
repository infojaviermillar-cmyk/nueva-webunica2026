import { getClientProjects } from '@/lib/feedback-actions'
import { PenTool, ArrowRight, Clock, CheckCircle2, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

export default async function ProyectosPage() {
  const result = await getClientProjects()

  if (!result.success) {
    // If unauthorized or error, maybe they aren't logged in
    // Real protection should be in middleware, but just in case:
    return (
      <div className="min-h-screen bg-slate-50 pt-[22vh] lg:pt-48 pb-20 font-sans">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-2xl font-black text-slate-900 mb-4">Error al cargar proyectos</h1>
          <p className="text-slate-500">Por favor, intenta iniciar sesión nuevamente.</p>
        </div>
      </div>
    )
  }

  const projects = result.projects || []
  const isAdmin = result.isAdmin || false

  return (
    <div className="min-h-screen bg-slate-50 pt-[22vh] lg:pt-48 pb-20 font-sans">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header */}
        <div className="mb-12">
          <Link href="/mi-cuenta" className="text-xs font-black uppercase tracking-widest text-violet-600 hover:text-violet-700 mb-6 inline-block">
            ← Volver a Mi Cuenta
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter">
              Revisión de <span className="text-violet-600">Diseños</span>
            </h1>
            {isAdmin && (
              <span className="px-3 py-1 bg-fuchsia-50 border border-fuchsia-200 text-fuchsia-600 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Admin
              </span>
            )}
          </div>
          <p className="text-slate-500 font-medium">
            {isAdmin 
              ? 'Vista de administrador — mostrando todos los proyectos de clientes.' 
              : 'Revisa las propuestas de diseño, deja tus comentarios y aprueba los avances.'}
          </p>
          {isAdmin && (
            <Link href="/admin/proyectos/nuevo" className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-colors">
              + Nuevo Proyecto
            </Link>
          )}
        </div>

        {/* Project List */}
        <div className="space-y-6">
          {projects.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-slate-200 rounded-[3rem] p-16 text-center">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <PenTool className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">No tienes proyectos activos</h3>
              <p className="text-slate-500 font-medium max-w-md mx-auto">
                Aún no te hemos asignado propuestas de diseño para revisar. Cuando haya una disponible, aparecerá aquí.
              </p>
            </div>
          ) : (
            projects.map(project => (
              <Link key={project.id} href={`/mi-cuenta/proyectos/${project.id}`}>
                <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100 transition-all cursor-pointer group">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-violet-50 text-violet-600 rounded-3xl flex items-center justify-center shrink-0">
                      <PenTool className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-violet-600 transition-colors">{project.title}</h3>
                      <div className="flex items-center gap-3 text-xs font-black uppercase tracking-widest">
                        {project.status === 'aprobado' ? (
                          <span className="text-emerald-500 flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4" /> Aprobado
                          </span>
                        ) : (
                          <span className="text-amber-500 flex items-center gap-1">
                            <Clock className="w-4 h-4" /> En Revisión
                          </span>
                        )}
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-400">
                          {new Date(project.created_at).toLocaleDateString('es-CL')}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0 bg-slate-50 p-4 rounded-full group-hover:bg-violet-600 group-hover:text-white transition-all">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
