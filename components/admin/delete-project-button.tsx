'use client'

import { useState } from 'react'
import { deleteProject } from '@/lib/project-actions'
import { Trash2, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

type Props = {
  projectId: string
  projectTitle: string
  redirectTo?: string
  variant?: 'icon' | 'button'
}

export default function DeleteProjectButton({
  projectId,
  projectTitle,
  redirectTo,
  variant = 'icon',
}: Props) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleDelete(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()

    const confirmed = window.confirm(
      `¿Estás seguro de que deseas eliminar el proyecto "${projectTitle}"?\n\nEsta acción eliminará todas las fases, tareas y mensajes asociados. No se puede deshacer.`
    )

    if (!confirmed) return

    setLoading(true)
    try {
      const res = await deleteProject(projectId)
      if (res.success) {
        if (redirectTo) {
          router.push(redirectTo)
        } else {
          router.refresh()
        }
      } else {
        alert(`Error al eliminar proyecto: ${res.error}`)
        setLoading(false)
      }
    } catch (err: any) {
      alert(`Error inesperado: ${err.message}`)
      setLoading(false)
    }
  }

  if (variant === 'button') {
    return (
      <button
        onClick={handleDelete}
        disabled={loading}
        className="px-4 py-2.5 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 rounded-xl text-xs font-bold transition-all flex items-center gap-2 disabled:opacity-50"
        title="Eliminar proyecto"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin text-red-500" />
        ) : (
          <Trash2 className="w-4 h-4 text-red-500" />
        )}
        <span>Eliminar Proyecto</span>
      </button>
    )
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="p-2.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all disabled:opacity-50"
      title="Eliminar proyecto"
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin text-red-500" />
      ) : (
        <Trash2 className="w-4 h-4" />
      )}
    </button>
  )
}
