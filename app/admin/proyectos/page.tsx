import { getAllProjects } from '@/lib/feedback-admin-actions'
import Link from 'next/link'
import { PlusCircle, ArrowLeft, ShoppingBag, ShoppingCart, Code, ExternalLink, Zap, Star, Building2 } from 'lucide-react'
import DeleteProjectButton from '@/components/admin/delete-project-button'

export const dynamic = 'force-dynamic'

const PLATFORM_CONFIG: Record<string, { icon: any; label: string; color: string }> = {
  shopify: { icon: ShoppingBag, label: 'Shopify Básico', color: 'text-emerald-600 bg-emerald-50' },
  'shopify-full': { icon: Zap, label: 'Shopify Full', color: 'text-blue-600 bg-blue-50' },
  'shopify-elite': { icon: Star, label: 'Shopify Elite', color: 'text-violet-600 bg-violet-50' },
  woocommerce: { icon: ShoppingCart, label: 'WooCommerce', color: 'text-purple-600 bg-purple-50' },
  wordpress: { icon: Code, label: 'WordPress', color: 'text-slate-600 bg-slate-50' },
  corporativo: { icon: Building2, label: 'Web Corporativa', color: 'text-teal-600 bg-teal-50' },
}

export default async function AdminProyectosPage() {
  const result = await getAllProjects()
  const projects = result.success && result.projects ? result.projects : []

  return (
    <div className="min-h-screen bg-slate-50 pt-[22vh] lg:pt-48 pb-20 font-sans">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center justify-between mb-12">
          <div>
            <Link href="/admin" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-violet-600 hover:text-violet-700 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Panel Admin
            </Link>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">
              Proyectos de{' '}
              <span className="text-violet-600 italic font-serif lowercase font-light">Clientes</span>
            </h1>
          </div>
          <Link
            href="/admin/proyectos/nuevo"
            className="px-6 py-4 bg-zinc-900 text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-zinc-800 transition-colors flex items-center gap-2"
          >
            <PlusCircle className="w-4 h-4" /> Nuevo Proyecto
          </Link>
        </div>

        {projects.length === 0 ? (
          <div className="bg-white border-2 border-dashed border-slate-200 rounded-[3rem] p-16 text-center">
            <p className="text-slate-400 font-medium">No hay proyectos aún. Crea el primero.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {projects.map((project: any) => {
              const platform = PLATFORM_CONFIG[project.platform] || PLATFORM_CONFIG['shopify']
              const Icon = platform.icon
              return (
                <div
                  key={project.id}
                  className="group bg-white border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-50 transition-all relative"
                >
                  <Link
                    href={`/admin/proyectos/${project.id}`}
                    className="flex-1 flex flex-col md:flex-row md:items-center gap-5 min-w-0"
                  >
                    {/* Platform Icon */}
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${platform.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h2 className="text-lg font-black text-slate-900 group-hover:text-violet-600 transition-colors truncate">
                          {project.title}
                        </h2>
                        <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${platform.color}`}>
                          {platform.label}
                        </span>
                        <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                          project.status === 'aprobado' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                        }`}>
                          {project.status === 'aprobado' ? '✓ Aprobado' : '⏳ En Proceso'}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-slate-400">
                        {project.client_name && <span>{project.client_name}</span>}
                        <span>{new Date(project.created_at).toLocaleDateString('es-CL')}</span>
                        {project.deadline && <span>Entrega: {new Date(project.deadline).toLocaleDateString('es-CL')}</span>}
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="shrink-0 flex flex-col items-end gap-2">
                      <div className="text-2xl font-black text-slate-900">{project.progress ?? 0}%</div>
                      <div className="w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-violet-500 to-emerald-500 rounded-full transition-all"
                          style={{ width: `${project.progress ?? 0}%` }}
                        />
                      </div>
                    </div>
                  </Link>

                  {/* Actions */}
                  <div className="flex items-center gap-2 border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-4 shrink-0">
                    <Link
                      href={`/admin/proyectos/${project.id}`}
                      className="p-2.5 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all"
                      title="Ver detalle"
                    >
                      <ExternalLink className="w-4.5 h-4.5" />
                    </Link>
                    <DeleteProjectButton projectId={project.id} projectTitle={project.title} />
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

