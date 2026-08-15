'use client'

import { useState, useRef, useEffect } from 'react'
import { addProjectNote, type ProjectNote } from '@/lib/project-notes-actions'
import { Send, Loader2, MessageCircle } from 'lucide-react'

type Props = {
  projectId: string
  initialNotes: ProjectNote[]
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('es-CL', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' })
}

export default function ProjectChatClient({ projectId, initialNotes }: Props) {
  const [notes, setNotes] = useState<ProjectNote[]>(initialNotes)
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [notes])

  async function handleSend() {
    const trimmed = message.trim()
    if (!trimmed || sending) return

    setSending(true)
    const optimistic: ProjectNote = {
      id: `temp-${Date.now()}`,
      project_id: projectId,
      content: trimmed,
      author_type: 'cliente',
      author_email: null,
      created_at: new Date().toISOString(),
    }
    setNotes(prev => [...prev, optimistic])
    setMessage('')

    const result = await addProjectNote(projectId, trimmed, 'cliente')
    if (result.success && result.note) {
      setNotes(prev => prev.map(n => n.id === optimistic.id ? result.note! : n))
    } else {
      setNotes(prev => prev.filter(n => n.id !== optimistic.id))
      setMessage(trimmed)
    }
    setSending(false)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="bg-white border border-[#e7e5e4] rounded-3xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-4 px-7 py-5 border-b border-[#e7e5e4]">
        <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center shrink-0">
          <MessageCircle className="w-5 h-5 text-teal-600" />
        </div>
        <div>
          <h3 className="font-bold text-slate-900">Mensajes del Proyecto</h3>
          <p className="text-xs text-slate-400">Comunicación directa con el equipo de Webunica</p>
        </div>
      </div>

      {/* Messages */}
      <div className="px-7 py-5 space-y-4 max-h-[380px] overflow-y-auto">
        {notes.length === 0 && (
          <div className="text-center py-10">
            <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="w-6 h-6 text-slate-300" />
            </div>
            <p className="text-slate-400 text-sm">Aún no hay mensajes.</p>
            <p className="text-slate-300 text-xs mt-1">¿Tienes alguna pregunta sobre tu proyecto? Escríbenos.</p>
          </div>
        )}
        {notes.map(note => {
          const isWebunica = note.author_type === 'admin'
          return (
            <div key={note.id} className={`flex gap-3 ${isWebunica ? 'flex-row' : 'flex-row-reverse'}`}>
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-black ${
                isWebunica ? 'bg-teal-500 text-white' : 'bg-violet-100 text-violet-600'
              }`}>
                {isWebunica ? 'W' : 'Tú'}
              </div>
              {/* Bubble */}
              <div className={`flex-1 max-w-[78%] ${
                isWebunica ? '' : 'flex flex-col items-end'
              }`}>
                <span className="text-[10px] font-bold text-slate-400 mb-1 block">
                  {isWebunica ? 'Equipo Webunica' : 'Tú'} · {formatDate(note.created_at)}
                </span>
                <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                  isWebunica
                    ? 'bg-teal-50 text-slate-800 rounded-tl-sm border border-teal-100'
                    : 'bg-violet-600 text-white rounded-tr-sm'
                }`}>
                  {note.content}
                </div>
              </div>
            </div>
          )
        })}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-7 py-5 border-t border-[#e7e5e4]">
        <div className="flex gap-3 items-end">
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe tu pregunta o comentario..."
            rows={2}
            className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-800 resize-none focus:outline-none focus:border-teal-400 transition-colors placeholder:text-slate-300"
          />
          <button
            onClick={handleSend}
            disabled={sending || !message.trim()}
            className="shrink-0 w-12 h-12 bg-teal-500 hover:bg-teal-600 text-white rounded-2xl flex items-center justify-center transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          </button>
        </div>
        <p className="text-[10px] text-slate-300 mt-2">Ctrl+Enter para enviar · El equipo responde en horario hábil</p>
      </div>
    </div>
  )
}
