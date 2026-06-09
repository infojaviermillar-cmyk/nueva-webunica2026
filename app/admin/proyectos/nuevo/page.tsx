'use client'

import React, { useState, useEffect } from 'react'
import { getAllUsers, createProjectWithDesign } from '@/lib/feedback-admin-actions'
import { ArrowLeft, UploadCloud, Loader2, Save } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NuevoProyectoAdmin() {
  const [users, setUsers] = useState<{id: string, email: string}[]>([])
  const [loadingUsers, setLoadingUsers] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    async function loadUsers() {
      const res = await getAllUsers()
      if (res.success && res.users) {
        setUsers(res.users)
      }
      setLoadingUsers(false)
    }
    loadUsers()
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const result = await createProjectWithDesign(formData)
    
    if (result.success) {
      router.push('/admin/proyectos')
    } else {
      alert('Error: ' + result.error)
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-[22vh] lg:pt-48 pb-20 font-sans">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link href="/admin/proyectos" className="text-xs font-black uppercase tracking-widest text-violet-600 hover:text-violet-700 mb-6 inline-block flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Volver a Proyectos
        </Link>
        <h1 className="text-4xl font-black tracking-tighter mb-10 text-slate-900">
          Nuevo <span className="text-fuchsia-600">Proyecto de Diseño</span>
        </h1>

        <div className="bg-white border border-slate-200 rounded-[3rem] p-10 lg:p-14 shadow-xl shadow-slate-200/50">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Cliente */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 ml-6">Selecciona el Cliente</label>
              <div className="relative">
                <select 
                  name="userId" 
                  required
                  disabled={loadingUsers}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 focus:outline-none focus:border-fuchsia-500 transition-all text-slate-700 font-medium appearance-none disabled:opacity-50"
                >
                  <option value="">-- Selecciona un usuario --</option>
                  {users.map(u => (
                    <option key={u.id} value={u.id}>{u.email} ({u.id})</option>
                  ))}
                </select>
                {loadingUsers && (
                  <Loader2 className="w-5 h-5 animate-spin text-slate-400 absolute right-6 top-5" />
                )}
              </div>
            </div>

            {/* Título */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 ml-6">Nombre del Proyecto</label>
              <input 
                type="text" 
                name="title" 
                required
                placeholder="Ej: Rediseño Ecommerce Fashion"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 focus:outline-none focus:border-fuchsia-500 transition-all text-slate-700 font-medium"
              />
            </div>

            {/* Imagen */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 ml-6">Imagen de la Propuesta (PNG, JPG)</label>
              <div className="relative border-2 border-dashed border-slate-200 bg-slate-50 rounded-3xl p-10 text-center hover:border-fuchsia-300 transition-colors group">
                <input 
                  type="file" 
                  name="image" 
                  accept="image/png, image/jpeg, image/webp"
                  required
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="pointer-events-none flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <UploadCloud className="w-8 h-8 text-fuchsia-500" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-700">Arrastra o haz clic para subir</p>
                    <p className="text-xs text-slate-400 mt-1">Recomendado: Imagen vertical completa de la web.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit */}
            <button 
              type="submit" 
              disabled={submitting}
              className="w-full py-6 bg-zinc-900 text-white rounded-[2.5rem] font-black uppercase tracking-[0.2em] text-[11px] hover:bg-zinc-800 transition-all shadow-2xl flex items-center justify-center gap-3 disabled:opacity-70"
            >
              {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Save className="w-4 h-4" /> Crear y Asignar Proyecto</>}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
