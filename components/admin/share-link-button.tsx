'use client'

import { useState } from 'react'
import { Link2, Check, Copy } from 'lucide-react'

type Props = {
  projectId: string
  title?: string
  variant?: 'button' | 'icon' | 'badge'
}

export default function ShareLinkButton({ projectId, title = 'Copiar Link Privado', variant = 'button' }: Props) {
  const [copied, setCopied] = useState(false)

  function handleCopy(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()

    const url = `${window.location.origin}/proyecto/${projectId}`
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  if (variant === 'badge') {
    return (
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 px-3 py-1 bg-violet-100 hover:bg-violet-200 text-violet-800 rounded-full text-xs font-bold transition-all"
        title="Copiar enlace privado de seguimiento para el cliente"
      >
        {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Link2 className="w-3.5 h-3.5 text-violet-600" />}
        <span>{copied ? '¡Link Copiado!' : 'Link Privado Cliente'}</span>
      </button>
    )
  }

  if (variant === 'icon') {
    return (
      <button
        onClick={handleCopy}
        className="p-2.5 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all relative group"
        title="Copiar enlace privado para el cliente"
      >
        {copied ? <Check className="w-4.5 h-4.5 text-emerald-500" /> : <Link2 className="w-4.5 h-4.5" />}
      </button>
    )
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-full text-xs font-bold shadow-lg shadow-violet-200 transition-all active:scale-95"
    >
      {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
      <span>{copied ? '¡Link Copiado al Portapapeles!' : title}</span>
    </button>
  )
}
