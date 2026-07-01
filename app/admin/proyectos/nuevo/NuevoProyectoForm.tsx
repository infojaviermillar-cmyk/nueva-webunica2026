'use client'

import React, { useState } from 'react'
import { createProjectWithTemplate } from '@/lib/project-actions'
import { ArrowLeft, Loader2, Save, ShoppingBag, ShoppingCart, Code } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const PLATFORMS = [
  {
    id: 'shopify',
    label: 'Shopify',
    icon: ShoppingBag,
    color: 'border-emerald-400 bg-emerald-50',
    activeRing: 'ring-2 ring-emerald-500',
    desc: 'Tienda en Shopify con theme premium',
  },
  {
    id: 'woocommerce',
    label: 'WooCommerce',
    icon: ShoppingCart,
    color: 'border-violet-400 bg-violet-50',
    activeRing: 'ring-2 ring-violet-500',
    desc: 'WordPress + WooCommerce con Elementor',
  },
  {
    id: 'wordpress',
    label: 'WordPress',
    icon: Code,
    color: 'border-blue-400 bg-blue-50',
    activeRing: 'ring-2 ring-blue-500',
    desc: 'Sitio web en WordPress sin e-commerce',
  },
]

type User = { id: string; email: string }

export default function NuevoProyectoForm({ users }: { users: User[] }) {
  const [submitting, setSubmitting] = useState(false)
  const [platform, setPlatform] = useState('shopify')
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const formData = new FormData(e.currentTarget)
      formData.set('platform', platform)

      const result = await createProjectWithTemplate(formData)

      if (result.success) {
        router.push(`/admin/proyectos/${result.projectId}`)
      } else {
        alert('Error: ' + result.error)
        setSubmitting(false)
      }
    } catch (err: any) {
      alert('Error inesperado: ' + err.message)
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-[22vh] lg:pt-48 pb-20 font-sans">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link
          href="/admin/proyectos"
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-violet-600 hover:text-violet-700 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Volver a Proyectos
        </Link>

        <h1 className="text-4xl font-black tracking-tighter mb-2 text-slate-900">
          Nuevo{' '}
          <span className="text-violet-600 italic font-serif lowercase font-light">
            Proyecto
          </span>
        </h1>
        <p className="text-slate-500 font-medium mb-10">
          Las 4 fases y todas las tareas se generarán automáticamente según el tipo de proyecto.
        </p>

        <div className="bg-white border border-slate-200 rounded-[3rem] p-10 lg:p-14 shadow-xl shadow-slate-200/50">
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Tipo de Plataforma */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 ml-1">
                Tipo de Plataforma
              </label>
              <div className="grid grid-cols-3 gap-4">
                {PLATFORMS.map((p) => {
                  const Icon = p.icon
                  const isActive = platform === p.id
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPlatform(p.id)}
                      className={`p-5 border-2 rounded-3xl text-left transition-all ${p.color} ${isActive ? p.activeRing : 'border-transparent opacity-70 hover:opacity-100'}`}
                    >
                      <Icon className="w-6 h-6 mb-2 text-slate-600" />
                      <div className="font-black text-slate-900 text-sm">{p.label}</div>
                      <div className="text-xs text-slate-500 mt-1 leading-tight">{p.desc}</div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Nombre del Proyecto */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">
                Nombre del Proyecto
              </label>
              <input
                type="text"
                name="title"
                required
                placeholder="Ej: Tienda Shopify — Marca XYZ"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet-400 transition-all text-slate-700 font-medium"
              />
            </div>

            {/* Datos del Cliente */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">
                  Nombre del Cliente
                </label>
                <input
                  type="text"
                  name="clientName"
                  placeholder="Empresa o nombre del cliente"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet-400 transition-all text-slate-700 font-medium"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">
                  Email del Cliente
                </label>
                <input
                  type="email"
                  name="clientEmail"
                  placeholder="contacto@empresa.cl"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet-400 transition-all text-slate-700 font-medium"
                />
              </div>
            </div>

            {/* Asignar usuario — cargado server-side */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">
                Asignar a Usuario (Mi Cuenta)
                <span className="ml-2 text-slate-300 normal-case tracking-normal font-medium">
                  — {users.length} usuario{users.length !== 1 ? 's' : ''} disponible{users.length !== 1 ? 's' : ''}
                </span>
              </label>
              <select
                name="userId"
                required
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet-400 transition-all text-slate-700 font-medium appearance-none"
              >
                <option value="">-- Selecciona un usuario --</option>
                {users.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.email}
                  </option>
                ))}
              </select>
              {users.length === 0 && (
                <p className="text-xs text-red-500 mt-2 ml-1">
                  ⚠ No se pudieron cargar los usuarios. Verifica que SUPABASE_SERVICE_ROLE_KEY esté configurado en .env.local
                </p>
              )}
            </div>

            {/* Fechas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">
                  Fecha de Inicio
                </label>
                <input
                  type="date"
                  name="startDate"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet-400 transition-all text-slate-700 font-medium"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">
                  Deadline (Entrega)
                </label>
                <input
                  type="date"
                  name="deadline"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet-400 transition-all text-slate-700 font-medium"
                />
              </div>
            </div>

            {/* Staging URL */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">
                URL de Staging (Opcional)
              </label>
              <input
                type="url"
                name="stagingUrl"
                placeholder="https://staging.mitienda.myshopify.com"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet-400 transition-all text-slate-700 font-medium"
              />
            </div>

            {/* Descripción */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">
                Notas / Descripción del Proyecto
              </label>
              <textarea
                name="description"
                rows={3}
                placeholder="Descripción corta, contexto del cliente, particularidades del proyecto..."
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet-400 transition-all text-slate-700 font-medium resize-none"
              />
            </div>

            {/* Preview de tareas generadas */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">
                Se generarán automáticamente
              </p>
              <div className="flex flex-wrap gap-2">
                {['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'].map((s) => (
                  <span key={s} className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600">
                    {s} — 8 tareas
                  </span>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-6 bg-zinc-900 text-white rounded-[2.5rem] font-black uppercase tracking-[0.2em] text-[11px] hover:bg-zinc-800 transition-all shadow-2xl flex items-center justify-center gap-3 disabled:opacity-70"
            >
              {submitting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Save className="w-4 h-4" /> Crear Proyecto y Generar Plan
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
