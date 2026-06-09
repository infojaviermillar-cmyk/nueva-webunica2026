import { getAllProjects } from '@/lib/feedback-admin-actions'
import Link from 'next/link'
import { PlusCircle, ArrowLeft, PenTool, Image as ImageIcon } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function AdminProyectosPage() {
  const result = await getAllProjects()
  const projects = result.success && result.projects ? result.projects : []

  return (
    <div className="min-h-screen bg-slate-50 pt-[22vh] lg:pt-48 pb-20 font-sans">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center justify-between mb-12">
          <div>
            <Link href="/admin" className="text-xs font-black uppercase tracking-widest text-violet-600 hover:text-violet-700 mb-6 inline-block flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Panel Admin
            </Link>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-slate-900">
              Proyectos de <span className="text-fuchsia-600">Diseño</span>
            </h1>
          </div>
          <Link href="/admin/proyectos/nuevo" className="px-6 py-4 bg-zinc-900 text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-zinc-800 transition-colors flex items-center gap-2">
            <PlusCircle className="w-4 h-4" /> Nuevo Proyecto
          </Link>
        </div>

        <div className="bg-white border border-slate-200 rounded-[3rem] overflow-hidden shadow-xl shadow-slate-200/50">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">ID / Fecha</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Proyecto</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Cliente (ID)</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {projects.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-8 py-16 text-center text-slate-500 font-medium">
                      No hay proyectos creados aún.
                    </td>
                  </tr>
                ) : (
                  projects.map((project: any) => (
                    <tr key={project.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-8 py-6">
                        <div className="text-xs font-medium text-slate-900 truncate max-w-[100px]" title={project.id}>{project.id.split('-')[0]}...</div>
                        <div className="text-[10px] text-slate-400">{new Date(project.created_at).toLocaleDateString()}</div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="font-bold text-slate-900 flex items-center gap-2">
                          <ImageIcon className="w-4 h-4 text-fuchsia-500" />
                          {project.title}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full w-fit">
                          {project.user_id}
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-full ${project.status === 'aprobado' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                          {project.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
