'use client'

import React, { useState } from 'react'
import { createProjectWithTemplate } from '@/lib/project-actions'
import { ArrowLeft, Loader2, Save, ShoppingBag, ShoppingCart, Code, Zap, Star, Building2, MapPin } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const PLATFORMS = [
  {
    id: 'shopify',
    label: 'Shopify Básico',
    icon: ShoppingBag,
    color: 'border-emerald-300 bg-emerald-50',
    activeRing: 'ring-2 ring-emerald-500',
    desc: 'Tienda Shopify 4 semanas',
    weeks: '4 semanas',
    weeksBadge: 'bg-emerald-100 text-emerald-700',
  },
  {
    id: 'shopify-full',
    label: 'Shopify Full',
    icon: Zap,
    color: 'border-blue-300 bg-blue-50',
    activeRing: 'ring-2 ring-blue-500',
    desc: 'Shopify + DTE Wasabil',
    weeks: '6 semanas',
    weeksBadge: 'bg-blue-100 text-blue-700',
  },
  {
    id: 'shopify-elite',
    label: 'Shopify Custom Elite',
    icon: Star,
    color: 'border-violet-300 bg-violet-50',
    activeRing: 'ring-2 ring-violet-500',
    desc: 'ERP Nebula + DTE + SEO',
    weeks: '8 semanas',
    weeksBadge: 'bg-violet-100 text-violet-700',
  },
  {
    id: 'woocommerce',
    label: 'WooCommerce',
    icon: ShoppingCart,
    color: 'border-purple-300 bg-purple-50',
    activeRing: 'ring-2 ring-purple-500',
    desc: 'WordPress + WooCommerce',
    weeks: '4 semanas',
    weeksBadge: 'bg-purple-100 text-purple-700',
  },
  {
    id: 'wordpress',
    label: 'WordPress',
    icon: Code,
    color: 'border-slate-300 bg-slate-50',
    activeRing: 'ring-2 ring-slate-500',
    desc: 'Sitio web sin e-commerce',
    weeks: '4 semanas',
    weeksBadge: 'bg-slate-100 text-slate-600',
  },
  {
    id: 'corporativo',
    label: 'Web Corporativa',
    icon: Building2,
    color: 'border-teal-300 bg-teal-50',
    activeRing: 'ring-2 ring-teal-500',
    desc: 'Next.js + SEO + GA4',
    weeks: '6 semanas',
    weeksBadge: 'bg-teal-100 text-teal-700',
  },
]

const PLATFORM_PHASES: Record<string, { label: string; tasks: number }[]> = {
  shopify: [
    { label: 'Kick-off & Diseño UX/UI', tasks: 16 },
    { label: 'Desarrollo Base + Setup', tasks: 9 },
    { label: 'Catálogo + Páginas', tasks: 8 },
    { label: 'Pagos + Testing + Go Live', tasks: 8 },
  ],
  'shopify-full': [
    { label: 'Kick-off & Diseño UX/UI', tasks: 14 },
    { label: 'Setup Shopify + Base', tasks: 6 },
    { label: 'Catálogo + Páginas', tasks: 6 },
    { label: 'Pagos + DTE Wasabil', tasks: 6 },
    { label: 'SEO + Analytics + QA', tasks: 6 },
    { label: 'Go Live + Cierre', tasks: 6 },
  ],
  'shopify-elite': [
    { label: 'Kick-off & Arquitectura', tasks: 10 },
    { label: 'Diseño UX/UI Alta Fidelidad', tasks: 8 },
    { label: 'Setup Shopify + Base', tasks: 6 },
    { label: 'Desarrollo Avanzado', tasks: 6 },
    { label: 'ERP Nebula + DTE + Pagos', tasks: 6 },
    { label: 'SEO + Analytics + QA', tasks: 6 },
    { label: 'Go Live + Lanzamiento', tasks: 6 },
    { label: 'Holgura + Cierre', tasks: 6 },
  ],
  woocommerce: [
    { label: 'Kick-off & Diseño UX/UI', tasks: 16 },
    { label: 'Desarrollo Base + Setup', tasks: 9 },
    { label: 'Catálogo + Páginas', tasks: 8 },
    { label: 'Pagos + Testing + Go Live', tasks: 8 },
  ],
  wordpress: [
    { label: 'Kick-off & Diseño UX/UI', tasks: 16 },
    { label: 'Desarrollo Base + Setup', tasks: 9 },
    { label: 'Catálogo + Páginas', tasks: 8 },
    { label: 'Pagos + Testing + Go Live', tasks: 8 },
  ],
  corporativo: [
    { label: 'Kick-off & Levantamiento', tasks: 8 },
    { label: 'Diseño UX/UI', tasks: 5 },
    { label: 'Desarrollo + Contenido', tasks: 6 },
    { label: 'SEO Local + Schema + Analytics', tasks: 6 },
    { label: 'QA + Testing + Ajustes', tasks: 5 },
    { label: 'Go Live + Cierre', tasks: 6 },
  ],
}

type User = { id: string; email: string }

export default function NuevoProyectoForm({ users }: { users: User[] }) {
  const [submitting, setSubmitting] = useState(false)
  const [platform, setPlatform] = useState('shopify')
  const [addonStoreLocator, setAddonStoreLocator] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    try {
      const formData = new FormData(e.currentTarget)
      formData.set('platform', platform)
      formData.set('addon_store_locator', addonStoreLocator ? 'true' : 'false')

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

  const selectedPlatform = PLATFORMS.find(p => p.id === platform)
  const selectedPhases = PLATFORM_PHASES[platform] || []
  const extraTasksCount = addonStoreLocator ? 5 : 0

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
          Las fases y tareas se generarán automáticamente según el tipo de proyecto elegido.
        </p>

        <div className="bg-white border border-slate-200 rounded-[3rem] p-10 lg:p-14 shadow-xl shadow-slate-200/50">
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Tipo de Plataforma */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 ml-1">
                Tipo de Proyecto y Plantilla
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {PLATFORMS.map((p) => {
                  const Icon = p.icon
                  const isActive = platform === p.id
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPlatform(p.id)}
                      className={`p-4 border-2 rounded-2xl text-left transition-all ${p.color} ${isActive ? p.activeRing : 'border-transparent opacity-60 hover:opacity-90'}`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <Icon className="w-5 h-5 text-slate-600" />
                        <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${p.weeksBadge}`}>
                          {p.weeks}
                        </span>
                      </div>
                      <div className="font-black text-slate-900 text-xs">{p.label}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">{p.desc}</div>
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

            {/* Fechas y Precio */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">
                  Valor Total (CLP)
                </label>
                <input
                  type="number"
                  name="totalPrice"
                  placeholder="Ej: 1500000"
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

            {/* Componentes Extra / Add-ons */}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 ml-1">
                Componentes Extra / Módulos Adicionales (Opcional)
              </label>
              <div className="grid grid-cols-1 gap-3">
                <label className={`flex items-start gap-3.5 p-5 border-2 rounded-3xl cursor-pointer transition-all ${
                  addonStoreLocator ? 'border-violet-400 bg-violet-50/50 shadow-sm' : 'border-slate-100 bg-slate-50 hover:border-slate-200'
                }`}>
                  <input
                    type="checkbox"
                    checked={addonStoreLocator}
                    onChange={(e) => setAddonStoreLocator(e.target.checked)}
                    className="mt-1 w-4 h-4 text-violet-600 rounded border-slate-300 focus:ring-violet-500 cursor-pointer"
                  />
                  <div>
                    <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-violet-600" />
                      Geolocalización para Distribuidores
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 bg-violet-100 text-violet-700 rounded-full">
                        +5 tareas Gantt
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Mapa interactivo de puntos de venta (Google Maps / Leaflet), buscador por región/comuna, botón GPS "Cerca de mí" y carga masiva de distribuidores.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Preview de fases generadas — dinámico según plantilla */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Se generarán automáticamente
                </p>
                <span className="text-[10px] font-bold text-slate-500">
                  {selectedPhases.length} fases · {selectedPhases.reduce((acc, p) => acc + p.tasks, 0) + extraTasksCount} tareas
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedPhases.map((phase, i) => {
                  const addedInPhase = addonStoreLocator ? (i === 0 ? 2 : (i === Math.min(2, selectedPhases.length - 1) ? 2 : (i === Math.max(0, selectedPhases.length - 2) ? 1 : 0))) : 0
                  return (
                    <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600">
                      S{i + 1}: {phase.label} <span className="text-slate-400 font-medium">({phase.tasks + addedInPhase})</span>
                    </span>
                  )
                })}
              </div>
              {selectedPlatform && (
                <div className="mt-3 pt-3 border-t border-slate-200 flex items-center gap-2">
                  <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${selectedPlatform.weeksBadge}`}>
                    {selectedPlatform.weeks}
                  </span>
                  <span className="text-[11px] text-slate-400">duración estimada de ejecución</span>
                  {addonStoreLocator && (
                    <span className="text-[11px] font-semibold text-violet-600 ml-auto flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> Con Geolocalización
                    </span>
                  )}
                </div>
              )}
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
