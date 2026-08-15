'use client'

import { useState } from 'react'
import { addCustomProjectTask } from '@/lib/project-actions'
import { PlusCircle, Users, User, Briefcase, X, Loader2, Save, CalendarCheck } from 'lucide-react'

type PhaseOption = {
  id: string
  phase_number: number
  title: string
}

type Props = {
  projectId: string
  phases: PhaseOption[]
}

export default function AddMeetingTaskModal({ projectId, phases }: Props) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const [selectedPhaseId, setSelectedPhaseId] = useState(phases[0]?.id || '')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [assignedTo, setAssignedTo] = useState<'cliente' | 'agencia' | 'ambos'>('ambos')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim() || !selectedPhaseId) return

    setLoading(true)
    const res = await addCustomProjectTask(
      selectedPhaseId,
      projectId,
      title,
      description,
      assignedTo
    )

    setLoading(false)
    if (res.success) {
      setTitle('')
      setDescription('')
      setOpen(false)
    } else {
      alert(`Error al agregar compromiso: ${res.error}`)
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-full shadow-md transition-all active:scale-95"
      >
        <PlusCircle className="w-4 h-4" />
        <span>+ Agregar Compromiso de Reunión</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div
            className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-start">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-[10px] font-black uppercase tracking-wider mb-2">
                  <CalendarCheck className="w-3 h-3" /> Minuta / Compromiso de Reunión
                </span>
                <h3 className="text-xl font-black text-slate-900 leading-tight">Agregar Acuerdo a la Gantt</h3>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5 bg-slate-50/50">
              {/* Seleccionar Semana / Fase */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                  Semana / Fase del Proyecto
                </label>
                <select
                  value={selectedPhaseId}
                  onChange={(e) => setSelectedPhaseId(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 text-xs text-slate-800 font-medium focus:outline-none focus:border-emerald-500 transition-all"
                >
                  {phases.map((phase) => (
                    <option key={phase.id} value={phase.id}>
                      Semana {phase.phase_number}: {phase.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Título del Compromiso */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                  Título del Acuerdo / Compromiso
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ej: Entregar planilla de sucursales revisada el jueves"
                  className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 text-xs text-slate-800 font-medium focus:outline-none focus:border-emerald-500 transition-all"
                />
              </div>

              {/* Detalle */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                  Detalle / Minuta de Reunión (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Detalles acordados en la sesión de seguimiento..."
                  className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 text-xs text-slate-800 font-medium focus:outline-none focus:border-emerald-500 transition-all resize-none"
                />
              </div>

              {/* Responsable */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                  Responsable del Acuerdo
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setAssignedTo('ambos')}
                    className={`p-3 border-2 rounded-2xl text-center text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                      assignedTo === 'ambos' ? 'border-emerald-500 bg-emerald-50 text-emerald-800' : 'border-slate-200 bg-white text-slate-600'
                    }`}
                  >
                    <Users className="w-4 h-4 text-emerald-600" />
                    <span>Reunión / Ambos</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAssignedTo('cliente')}
                    className={`p-3 border-2 rounded-2xl text-center text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                      assignedTo === 'cliente' ? 'border-amber-500 bg-amber-50 text-amber-800' : 'border-slate-200 bg-white text-slate-600'
                    }`}
                  >
                    <User className="w-4 h-4 text-amber-600" />
                    <span>Cliente</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setAssignedTo('agencia')}
                    className={`p-3 border-2 rounded-2xl text-center text-xs font-bold transition-all flex flex-col items-center gap-1 ${
                      assignedTo === 'agencia' ? 'border-violet-500 bg-violet-50 text-violet-800' : 'border-slate-200 bg-white text-slate-600'
                    }`}
                  >
                    <Briefcase className="w-4 h-4 text-violet-600" />
                    <span>Webunica</span>
                  </button>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading || !title.trim()}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  <span>Agregar a la Carta Gantt</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
