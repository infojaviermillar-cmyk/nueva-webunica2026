'use client'

import { useState } from 'react'
import { updateDesignSettings } from '@/lib/project-actions'
import { Save, Loader2, Link as LinkIcon, PenTool } from 'lucide-react'

export default function DesignSettingsForm({ 
  projectId, 
  initialDesignUrl, 
  initialDesignTool 
}: { 
  projectId: string
  initialDesignUrl: string | null
  initialDesignTool: string | null
}) {
  const [designUrl, setDesignUrl] = useState(initialDesignUrl || '')
  const [designTool, setDesignTool] = useState(initialDesignTool || 'figma')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  async function handleSave() {
    setSaving(true)
    setSaved(false)
    const result = await updateDesignSettings(projectId, designUrl, designTool)
    setSaving(false)
    if (result.success) {
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } else {
      alert('Error: ' + result.error)
    }
  }

  return (
    <div className="bg-white border border-slate-200 rounded-[2rem] p-6 mb-8 flex flex-col md:flex-row gap-6 md:items-end">
      <div className="flex-1">
        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
          URL de Diseño UX/UI
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <LinkIcon className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="url"
            value={designUrl}
            onChange={(e) => setDesignUrl(e.target.value)}
            placeholder="https://www.figma.com/file/..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-violet-400 transition-all text-slate-700"
          />
        </div>
      </div>
      
      <div className="w-full md:w-48">
        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-1">
          Herramienta
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <PenTool className="h-4 w-4 text-slate-400" />
          </div>
          <select
            value={designTool}
            onChange={(e) => setDesignTool(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-violet-400 transition-all text-slate-700 appearance-none"
          >
            <option value="figma">Figma</option>
            <option value="adobe_xd">Adobe XD</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleSave}
        disabled={saving}
        className="w-full md:w-auto px-6 py-3 bg-zinc-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 h-[46px]"
      >
        {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
        {saved ? 'Guardado' : 'Guardar Diseño'}
      </button>
    </div>
  )
}
