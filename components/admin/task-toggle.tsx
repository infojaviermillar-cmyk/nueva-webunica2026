'use client'

import { useState } from 'react'
import { updateTaskStatus, updateTaskNote } from '@/lib/project-actions'
import { CheckCircle2, Circle, Loader2, User, Briefcase, Users, MessageSquare, X, Save } from 'lucide-react'

type Task = {
  id: string
  title: string
  description: string | null
  status: string
  sort_order: number
  assigned_to?: 'cliente' | 'agencia' | 'ambos'
  detailed_info?: string | null
}

type Props = {
  task: Task
  projectId: string
}

export default function TaskToggle({ task, projectId }: Props) {
  const [status, setStatus] = useState(task.status)
  const [loading, setLoading] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [noteText, setNoteText] = useState(task.detailed_info || '')
  const [savingNote, setSavingNote] = useState(false)
  const [hasNote, setHasNote] = useState(Boolean(task.detailed_info))

  async function toggle(e: React.MouseEvent) {
    e.stopPropagation()
    setLoading(true)
    const nextStatus = status === 'completado' ? 'pendiente' : 'completado'
    const res = await updateTaskStatus(task.id, nextStatus as any, projectId)
    if (res.success) {
      setStatus(nextStatus)
    }
    setLoading(false)
  }

  async function handleSaveNote(e: React.FormEvent) {
    e.preventDefault()
    setSavingNote(true)
    const res = await updateTaskNote(task.id, noteText, projectId)
    setSavingNote(false)
    if (res.success) {
      setHasNote(Boolean(noteText.trim()))
      setOpenModal(false)
    } else {
      alert(`Error al guardar nota: ${res.error}`)
    }
  }

  const isDone = status === 'completado'
  const assigned = task.assigned_to || 'agencia'

  return (
    <>
      <div
        className={`group flex items-start gap-3 p-3.5 rounded-2xl transition-all w-full text-left border ${
          isDone
            ? 'bg-emerald-50/70 border-emerald-100 hover:bg-emerald-100/70'
            : 'bg-white border-slate-100 hover:border-violet-200 hover:shadow-sm'
        }`}
      >
        <button
          onClick={toggle}
          disabled={loading}
          className="mt-1 shrink-0 focus:outline-none"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin text-slate-400" />
          ) : isDone ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          ) : (
            <Circle className="w-5 h-5 text-slate-300 group-hover:text-violet-400 transition-colors" />
          )}
        </button>

        <div className="flex-1 min-w-0">
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

            {hasNote && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-sky-100 text-sky-800 rounded-md text-[9px] font-bold">
                <MessageSquare className="w-2.5 h-2.5" /> Con Observación
              </span>
            )}
          </div>

          <span
            onClick={toggle}
            className={`block text-sm font-bold leading-snug cursor-pointer ${
              isDone ? 'line-through text-emerald-800 opacity-75' : 'text-slate-900'
            }`}
          >
            {task.title}
          </span>
          {task.description && (
            <span className="block text-xs text-slate-500 mt-0.5 leading-normal">{task.description}</span>
          )}
          {noteText && (
            <span className="block text-xs text-sky-700 bg-sky-50 border border-sky-100 rounded-lg p-2 mt-2 font-medium">
              💬 <strong>Nota:</strong> {noteText}
            </span>
          )}
        </div>

        {/* Note Trigger Button */}
        <button
          onClick={() => setOpenModal(true)}
          title="Agregar o ver nota / subtarea"
          className="p-1.5 rounded-xl text-slate-400 hover:text-sky-600 hover:bg-sky-50 transition-colors shrink-0"
        >
          <MessageSquare className="w-4 h-4" />
        </button>
      </div>

      {/* Note / Subtask Modal */}
      {openModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setOpenModal(false)}
        >
          <div
            className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-slate-100 flex justify-between items-start">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                  Nota / Observación de Tarea
                </span>
                <h3 className="text-lg font-black text-slate-900 leading-snug">{task.title}</h3>
              </div>
              <button
                onClick={() => setOpenModal(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveNote} className="p-6 space-y-4 bg-slate-50/50">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                  Notas, Acuerdos o Detalles de Ejecución
                </label>
                <textarea
                  rows={4}
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder="Escribe observaciones, entregables pendientes o notas acordadas en reunión..."
                  className="w-full bg-white border border-slate-200 rounded-2xl p-4 text-xs text-slate-800 font-medium focus:outline-none focus:border-sky-500 transition-all resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className="px-4 py-2.5 text-xs font-bold text-slate-500 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={savingNote}
                  className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2 disabled:opacity-50"
                >
                  {savingNote ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  <span>Guardar Nota</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}


