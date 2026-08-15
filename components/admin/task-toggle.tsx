'use client'

import { useState } from 'react'
import { updateTaskStatus } from '@/lib/project-actions'
import { CheckCircle2, Circle, Loader2, User, Briefcase, Users } from 'lucide-react'

type Task = {
  id: string
  title: string
  description: string | null
  status: string
  sort_order: number
  assigned_to?: 'cliente' | 'agencia' | 'ambos'
}

type Props = {
  task: Task
  projectId: string
}

export default function TaskToggle({ task, projectId }: Props) {
  const [status, setStatus] = useState(task.status)
  const [loading, setLoading] = useState(false)

  async function toggle() {
    setLoading(true)
    const nextStatus = status === 'completado' ? 'pendiente' : 'completado'
    const res = await updateTaskStatus(task.id, nextStatus as any, projectId)
    if (res.success) {
      setStatus(nextStatus)
    }
    setLoading(false)
  }

  const isDone = status === 'completado'
  const assigned = task.assigned_to || 'agencia'

  return (
    <button
      onClick={toggle}
      disabled={loading}
      className={`group flex items-start gap-3 p-3.5 rounded-2xl transition-all w-full text-left border ${
        isDone
          ? 'bg-emerald-50/70 border-emerald-100 hover:bg-emerald-100/70'
          : 'bg-white border-slate-100 hover:border-violet-200 hover:shadow-sm'
      }`}
    >
      <span className="mt-1 shrink-0">
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin text-slate-400" />
        ) : isDone ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
        ) : (
          <Circle className="w-5 h-5 text-slate-300 group-hover:text-violet-400 transition-colors" />
        )}
      </span>

      <span className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider ${
              assigned === 'cliente'
                ? 'bg-amber-100 text-amber-800'
                : assigned === 'ambos'
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-violet-100 text-violet-800'
            }`}
          >
            {assigned === 'cliente' ? (
              <User className="w-2.5 h-2.5" />
            ) : assigned === 'ambos' ? (
              <Users className="w-2.5 h-2.5" />
            ) : (
              <Briefcase className="w-2.5 h-2.5" />
            )}
            {assigned === 'cliente' ? 'Cliente' : assigned === 'ambos' ? 'Reunión / Ambos' : 'Webunica'}
          </span>
        </div>

        <span className={`block text-sm font-bold leading-snug ${isDone ? 'line-through text-emerald-800 opacity-75' : 'text-slate-900'}`}>
          {task.title}
        </span>
        {task.description && (
          <span className="block text-xs text-slate-500 mt-0.5 leading-normal">{task.description}</span>
        )}
      </span>
    </button>
  )
}

