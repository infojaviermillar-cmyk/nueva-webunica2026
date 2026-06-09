'use client'

import React, { useState, useRef, useEffect } from 'react'
import { ClientProject, ProjectDesign, DesignPin, PinComment, createPin, createComment } from '@/lib/feedback-actions'
import { Send, CheckCircle2, MessageSquare, Loader2 } from 'lucide-react'

type DesignFeedbackClientProps = {
  project: ClientProject
  design: ProjectDesign
  initialPins: (DesignPin & { pin_comments: PinComment[] })[]
}

export default function DesignFeedbackClient({ project, design, initialPins }: DesignFeedbackClientProps) {
  const [pins, setPins] = useState(initialPins)
  const [activePinId, setActivePinId] = useState<string | null>(null)
  const [isCreatingPin, setIsCreatingPin] = useState(false)
  const [newCommentText, setNewCommentText] = useState('')
  const [isSubmittingComment, setIsSubmittingComment] = useState(false)
  
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Scroll to comment in sidebar when pin is clicked
  useEffect(() => {
    if (activePinId && sidebarRef.current) {
      const element = document.getElementById(`comment-thread-${activePinId}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [activePinId])

  const handleImageClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current || isCreatingPin) return

    const rect = imageContainerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const xPercent = (x / rect.width) * 100
    const yPercent = (y / rect.height) * 100

    // Next marker number
    const nextMarkerNumber = pins.length > 0 ? Math.max(...pins.map(p => p.marker_number)) + 1 : 1

    setIsCreatingPin(true)
    
    // Optimistic UI could be added here, but for simplicity we await the server action
    const result = await createPin(design.id, xPercent, yPercent, nextMarkerNumber)
    
    if (result.success && result.pin) {
      const newPin = { ...result.pin, pin_comments: [] }
      setPins(prev => [...prev, newPin])
      setActivePinId(result.pin.id)
    } else {
      alert('Error al crear el pin. Por favor intenta de nuevo.')
    }
    
    setIsCreatingPin(false)
  }

  const handleAddComment = async (e: React.FormEvent, pinId: string) => {
    e.preventDefault()
    if (!newCommentText.trim() || isSubmittingComment) return

    setIsSubmittingComment(true)
    const result = await createComment(pinId, newCommentText)

    if (result.success && result.comment) {
      setPins(prev => prev.map(pin => {
        if (pin.id === pinId) {
          return {
            ...pin,
            pin_comments: [...pin.pin_comments, result.comment as PinComment]
          }
        }
        return pin
      }))
      setNewCommentText('')
    } else {
      alert('Error al enviar el comentario.')
    }
    
    setIsSubmittingComment(false)
  }

  return (
    <div className="flex h-full w-full absolute inset-0">
      {/* Left: Image Container (Scrollable) */}
      <div className="flex-1 overflow-auto bg-slate-100 relative">
        <div 
          className="relative inline-block mx-auto shadow-2xl cursor-crosshair min-h-full"
          style={{ width: 'max-content' }}
        >
          {/* Main Design Image */}
          <div 
            ref={imageContainerRef}
            onClick={handleImageClick}
            className="relative"
          >
            {/* We use standard img to easily measure natural dimensions vs rendered if needed, 
                though max-content + relative positioning usually handles it. */}
            <img 
              src={design.image_url} 
              alt={`Propuesta de diseño ${project.title}`}
              className="max-w-none block"
              style={{ width: '1200px' }} // Default width, can be adjusted or dynamic
            />
            
            {/* Pins overlay */}
            {pins.map(pin => (
              <button
                key={pin.id}
                onClick={(e) => {
                  e.stopPropagation()
                  setActivePinId(pin.id)
                }}
                className={`absolute w-8 h-8 -ml-4 -mt-4 rounded-full flex items-center justify-center font-black text-xs shadow-lg transition-all z-10 
                  ${activePinId === pin.id 
                    ? 'bg-violet-600 text-white scale-110 ring-4 ring-violet-200' 
                    : 'bg-white text-slate-800 hover:bg-violet-50 border-2 border-violet-600'
                  }
                  ${pin.status === 'resuelto' ? 'opacity-50' : ''}
                `}
                style={{ 
                  left: `${pin.x_percent}%`, 
                  top: `${pin.y_percent}%` 
                }}
              >
                {pin.marker_number}
              </button>
            ))}
          </div>
          
          {isCreatingPin && (
            <div className="absolute inset-0 bg-white/20 flex items-center justify-center backdrop-blur-sm z-50">
              <div className="bg-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3 text-sm font-bold text-slate-700">
                <Loader2 className="w-5 h-5 animate-spin text-violet-600" />
                Creando marcador...
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right: Sidebar Comments */}
      <div 
        ref={sidebarRef}
        className="w-96 bg-white border-l border-slate-200 shadow-xl overflow-y-auto flex flex-col shrink-0"
      >
        <div className="p-6 border-b border-slate-100 bg-slate-50/50 sticky top-0 z-10">
          <h2 className="text-sm font-black uppercase tracking-widest text-slate-800 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-violet-600" />
            Comentarios ({pins.length})
          </h2>
        </div>

        <div className="p-4 space-y-6 flex-1">
          {pins.length === 0 ? (
            <div className="text-center py-12 px-6">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-slate-300" />
              </div>
              <p className="text-sm text-slate-500 font-medium">Haz clic en cualquier parte del diseño para dejar tu primer comentario.</p>
            </div>
          ) : (
            pins.map(pin => (
              <div 
                key={pin.id} 
                id={`comment-thread-${pin.id}`}
                className={`rounded-2xl border transition-all ${activePinId === pin.id ? 'border-violet-300 bg-violet-50/30 shadow-md' : 'border-slate-200 bg-white'}`}
                onClick={() => setActivePinId(pin.id)}
              >
                {/* Pin Header */}
                <div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-white rounded-t-2xl">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 ${activePinId === pin.id ? 'bg-violet-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    {pin.marker_number}
                  </div>
                  <span className="text-xs font-bold text-slate-700">Comentarios de la sección</span>
                  {pin.status === 'resuelto' && (
                    <span className="ml-auto text-[9px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-50 px-2 py-1 rounded-full">Resuelto</span>
                  )}
                </div>

                {/* Comments List */}
                <div className="p-4 space-y-4">
                  {pin.pin_comments.map(comment => (
                    <div key={comment.id} className="bg-white border border-slate-100 p-3 rounded-xl shadow-sm">
                      <p className="text-sm text-slate-700">{comment.content}</p>
                      <span className="text-[10px] text-slate-400 mt-2 block">
                        {new Date(comment.created_at).toLocaleString('es-CL', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: 'short' })}
                      </span>
                    </div>
                  ))}
                  
                  {pin.pin_comments.length === 0 && (
                    <p className="text-xs text-slate-400 italic text-center py-2">No hay comentarios aún.</p>
                  )}
                </div>

                {/* Add Comment Input (Only show if active or no comments) */}
                {(activePinId === pin.id || pin.pin_comments.length === 0) && pin.status !== 'resuelto' && (
                  <form onSubmit={(e) => handleAddComment(e, pin.id)} className="p-3 border-t border-slate-100 bg-white rounded-b-2xl flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Escribe un comentario..."
                      value={activePinId === pin.id ? newCommentText : ''}
                      onChange={(e) => activePinId === pin.id && setNewCommentText(e.target.value)}
                      onClick={() => setActivePinId(pin.id)}
                      className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-xs focus:outline-none focus:border-violet-500 transition-colors"
                    />
                    <button 
                      type="submit"
                      disabled={isSubmittingComment || !newCommentText.trim() || activePinId !== pin.id}
                      className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center shrink-0 disabled:opacity-50 hover:bg-violet-700 transition-colors"
                    >
                      {isSubmittingComment && activePinId === pin.id ? <Loader2 className="w-3 h-3 animate-spin" /> : <Send className="w-3 h-3 -ml-0.5" />}
                    </button>
                  </form>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
