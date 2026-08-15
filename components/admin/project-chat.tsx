'use client'

import { useState, useRef, useEffect } from 'react'
import { addProjectNote, type ProjectNote } from '@/lib/project-notes-actions'
import { Send, MessageSquare, Loader2 } from 'lucide-react'

type Props = {
  projectId: string
  initialNotes: ProjectNote[]
}

function formatRelativeTime(dateStr: string): string {
  const date = new Date(dateStr)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffMins < 1) return 'Ahora'
  if (diffMins < 60) return `hace ${diffMins}m`
  if (diffHours < 24) return `hace ${diffHours}h`
  if (diffDays < 7) return `hace ${diffDays}d`
  return date.toLocaleDateString('es-CL', { day: 'numeric', month: 'short' })
}

export default function ProjectChat({ projectId, initialNotes }: Props) {
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
      author_type: 'admin',
      author_email: null,
      created_at: new Date().toISOString(),
    }
    setNotes(prev => [...prev, optimistic])
    setMessage('')

    const result = await addProjectNote(projectId, trimmed, 'admin')
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
    <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 p-6 border-b border-slate-100">
        <div className="w-10 h-10 bg-violet-100 rounded-2xl flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-violet-600" />
        </div>
        <div>
          <h3 className="font-black text-slate-900 text-sm uppercase tracking-wider">Bitácora del Proyecto</h3>
          <p className="text-xs text-slate-400">Notas internas y comunicación con el cliente</p>
        </div>
        <span className="ml-auto text-xs text-slate-400 font-bold">{notes.length} mensaje{notes.length !== 1 ? 's' : ''}</span>
      </div>

      {/* Messages */}
      <div className="p-6 space-y-3 max-h-96 overflow-y-auto bg-slate-50/50">
        {notes.length === 0 && (
          <div className="text-center py-10">
            <MessageSquare className="w-10 h-10 text-slate-200 mx-auto mb-3" />
            <p className="text-slate-400 text-sm">Sin mensajes aún. Agrega una nota o actualización.</p>
          </div>
        )}
        {notes.map(note => {
          const isAdmin = note.author_type === 'admin'
          return (
            <div key={note.id} className={`flex ${isAdmin ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                isAdmin
                  ? 'bg-violet-600 text-white rounded-br-sm'
                  : 'bg-white border border-slate-200 text-slate-800 rounded-bl-sm shadow-sm'
              }`}>
                <div className={`text-[10px] font-black uppercase tracking-wider mb-1 ${
                  isAdmin ? 'text-violet-200' : 'text-slate-400'
                }`}>
                  {isAdmin ? `Webunica${note.author_email ? ` · ${note.author_email.split('@')[0]}` : ''}` : `Cliente${note.author_email ? ` · ${note.author_email.split('@')[0]}` : ''}`}
                </div>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{note.content}</p>
                <div className={`text-[10px] mt-1.5 text-right ${
                  isAdmin ? 'text-violet-300' : 'text-slate-300'
                }`}>
                  {formatRelativeTime(note.created_at)}
                </div>
              </div>
            </div>
          )
        })}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-slate-100 bg-white">
        <div className="flex gap-3 items-end">
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe una nota o actualización... (Ctrl+Enter para enviar)"
            rows={2}
            className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-800 resize-none focus:outline-none focus:border-violet-400 transition-colors placeholder:text-slate-300"
          />
          <button
            onClick={handleSend}
            disabled={sending || !message.trim()}
            className="shrink-0 w-12 h-12 bg-violet-600 hover:bg-violet-700 text-white rounded-2xl flex items-center justify-center transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          </button>
        </div>
        <p className="text-[10px] text-slate-300 mt-2 text-right">Este mensaje es visible para el cliente en su panel de proyecto</p>
      </div>
    </div>
  )
}
