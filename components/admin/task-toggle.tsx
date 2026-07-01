'use client'

import { useState } from 'react'
import { updateTaskStatus } from '@/lib/project-actions'
import { CheckCircle2, Circle, Loader2 } from 'lucide-react'

type Task = {
  id: string
  title: string
  description: string | null
  status: string
  sort_order: number
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

  return (
    <button
      onClick={toggle}
      disabled={loading}
      className={`group flex items-start gap-3 p-3 rounded-xl transition-all w-full text-left
        ${isDone ? 'bg-emerald-50 hover:bg-emerald-100' : 'bg-slate-50 hover:bg-violet-50'}`}
    >
      <span className="mt-0.5 shrink-0">
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin text-slate-400" />
        ) : isDone ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
        ) : (
          <Circle className="w-5 h-5 text-slate-300 group-hover:text-violet-400 transition-colors" />
        )}
      </span>
      <span className="flex-1">
        <span className={`block text-sm font-semibold leading-snug ${isDone ? 'line-through text-emerald-700' : 'text-slate-800'}`}>
          {task.title}
        </span>
        {task.description && (
          <span className="block text-xs text-slate-400 mt-0.5">{task.description}</span>
        )}
      </span>
    </button>
  )
}
