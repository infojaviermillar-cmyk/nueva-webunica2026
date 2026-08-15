'use client'

import { useState } from 'react'
import { CheckCircle2, Circle, Clock, X, User, Briefcase } from 'lucide-react'

export default function TaskCard({ task }: { task: any }) {
  const [isOpen, setIsOpen] = useState(false)
  
  const isDone = task.status === 'completado'
  const isProgress = task.status === 'en_progreso'
  
  const assignedTo = task.assigned_to || 'agencia'
  
  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all hover:scale-[1.02] active:scale-100 ${
          isDone ? 'bg-emerald-50 hover:bg-emerald-100' : isProgress ? 'bg-blue-50 hover:bg-blue-100' : 'bg-white hover:bg-slate-50 border border-slate-100 shadow-sm'
        }`}
      >
        <span className="mt-0.5 shrink-0">
          {isDone ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          ) : isProgress ? (
            <Clock className="w-5 h-5 text-blue-500" />
          ) : (
            <Circle className="w-5 h-5 text-slate-300" />
          )}
        </span>
        <div className="flex-1">
          <span className={`block text-sm font-semibold leading-snug ${
            isDone ? 'line-through text-emerald-700' : 'text-slate-800'
          }`}>
            {task.title}
          </span>
          {task.description && (
            <span className="block text-xs text-slate-400 mt-0.5 line-clamp-1">{task.description}</span>
          )}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div 
            className="bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-slate-100 flex justify-between items-start">
              <div>
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 ${
                  assignedTo === 'cliente' ? 'bg-amber-100 text-amber-700' : assignedTo === 'ambos' ? 'bg-emerald-100 text-emerald-700' : 'bg-violet-100 text-violet-700'
                }`}>
                  {assignedTo === 'cliente' ? <User className="w-3 h-3" /> : <Briefcase className="w-3 h-3" />}
                  Responsable: {assignedTo === 'cliente' ? 'Cliente' : assignedTo === 'ambos' ? 'Reunión / Ambos' : 'Webunica'}
                </div>
                <h3 className="text-xl font-black text-slate-900 leading-tight">{task.title}</h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-6 bg-slate-50">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">¿Qué significa esto?</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {task.detailed_info || task.description || 'Sin información detallada.'}
              </p>
              
              <div className="mt-6 flex items-center gap-2">
                <span className="text-sm font-bold text-slate-700">Estado:</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  isDone ? 'bg-emerald-100 text-emerald-700' : isProgress ? 'bg-blue-100 text-blue-700' : 'bg-slate-200 text-slate-600'
                }`}>
                  {isDone ? 'Completado' : isProgress ? 'En progreso' : 'Pendiente'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
