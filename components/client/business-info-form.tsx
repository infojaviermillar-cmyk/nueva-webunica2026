'use client'

import { useState } from 'react'
import { updateProjectBusinessInfo } from '@/lib/project-actions'
import { MapPin, Phone, Mail, Globe, Share2, Folder, FileSpreadsheet, Save, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'

type Props = {
  projectId: string
  initialDescription?: string | null
}

export default function BusinessInfoForm({ projectId, initialDescription }: Props) {
  let parsedInfo: any = {}
  try {
    if (initialDescription && initialDescription.startsWith('{')) {
      const json = JSON.parse(initialDescription)
      parsedInfo = json.business_info || {}
    }
  } catch {
    parsedInfo = {}
  }

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)

  const [address, setAddress] = useState(parsedInfo.address || '')
  const [phone, setPhone] = useState(parsedInfo.phone || '')
  const [email, setEmail] = useState(parsedInfo.email || '')
  const [instagram, setInstagram] = useState(parsedInfo.instagram || '')
  const [facebook, setFacebook] = useState(parsedInfo.facebook || '')
  const [driveLink, setDriveLink] = useState(parsedInfo.drive_link || '')
  const [catalogLink, setCatalogLink] = useState(parsedInfo.catalog_link || '')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setSaved(false)

    const res = await updateProjectBusinessInfo(projectId, {
      address,
      phone,
      email,
      instagram,
      facebook,
      drive_link: driveLink,
      catalog_link: catalogLink,
    })

    setLoading(false)
    if (res.success) {
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } else {
      alert(`Error al guardar datos: ${res.error}`)
    }
  }

  const hasData = address || phone || email || instagram || driveLink || catalogLink

  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm mb-10 transition-all">
      {/* Header / Summary Bar */}
      <div 
        onClick={() => setOpen(!open)} 
        className="p-6 md:p-8 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0 text-amber-700">
            <Share2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <h3 className="text-lg font-black text-slate-900">Datos e Insumos de la Empresa</h3>
              {hasData && (
                <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider rounded-full flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Datos Registrados
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500">
              Dirección, contacto comercial, redes sociales y links a archivos de marca.
            </p>
          </div>
        </div>

        <button className="w-10 h-10 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors">
          {open ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      {/* Quick Summary Badges if collapsed */}
      {!open && hasData && (
        <div className="px-8 pb-6 -mt-2 flex flex-wrap gap-2 text-xs">
          {address && (
            <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full font-medium flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-600" /> {address}
            </span>
          )}
          {phone && (
            <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full font-medium flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-600" /> {phone}
            </span>
          )}
          {email && (
            <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full font-medium flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-amber-600" /> {email}
            </span>
          )}
          {driveLink && (
            <a href={driveLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full font-bold hover:bg-violet-200 transition-colors flex items-center gap-1.5">
              <Folder className="w-3.5 h-3.5" /> Carpeta Drive Marca
            </a>
          )}
          {catalogLink && (
            <a href={catalogLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-bold hover:bg-emerald-200 transition-colors flex items-center gap-1.5">
              <FileSpreadsheet className="w-3.5 h-3.5" /> Catálogo de Productos
            </a>
          )}
        </div>
      )}

      {/* Expandable Form */}
      {open && (
        <div className="p-6 md:p-8 pt-0 border-t border-slate-100 bg-slate-50/50">
          <form onSubmit={handleSubmit} className="space-y-6 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Dirección */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" /> Dirección Comercial / Tienda Física
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Ej: Av. Providencia 1234, Of. 501, Providencia, Santiago"
                  className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 text-xs text-slate-800 font-medium focus:outline-none focus:border-amber-500 transition-all"
                />
              </div>

              {/* Teléfono / WhatsApp */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-600" /> Teléfono / WhatsApp de Atención
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ej: +56 9 1234 5678"
                  className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 text-xs text-slate-800 font-medium focus:outline-none focus:border-amber-500 transition-all"
                />
              </div>

              {/* Email Comercial */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-600" /> Email de Contacto Publicable
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ej: contacto@miempresa.cl"
                  className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 text-xs text-slate-800 font-medium focus:outline-none focus:border-amber-500 transition-all"
                />
              </div>

              {/* Redes Sociales */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-amber-600" /> Instagram / Redes Sociales
                </label>
                <input
                  type="text"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  placeholder="Ej: @miempresa_cl o https://instagram.com/miempresa"
                  className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 text-xs text-slate-800 font-medium focus:outline-none focus:border-amber-500 transition-all"
                />
              </div>

              {/* Drive Link */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1.5">
                  <Folder className="w-3.5 h-3.5 text-violet-600" /> Link Drive (Logo, Manual Marca, Fotos)
                </label>
                <input
                  type="url"
                  value={driveLink}
                  onChange={(e) => setDriveLink(e.target.value)}
                  placeholder="https://drive.google.com/drive/folders/..."
                  className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 text-xs text-slate-800 font-medium focus:outline-none focus:border-violet-500 transition-all"
                />
              </div>

              {/* Catalog Link */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1.5">
                  <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" /> Link a Catálogo (Excel / Sheets)
                </label>
                <input
                  type="url"
                  value={catalogLink}
                  onChange={(e) => setCatalogLink(e.target.value)}
                  placeholder="https://docs.google.com/spreadsheets/d/..."
                  className="w-full bg-white border border-slate-200 rounded-2xl px-4 py-3 text-xs text-slate-800 font-medium focus:outline-none focus:border-emerald-500 transition-all"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              {saved ? (
                <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" /> ¡Datos guardados correctamente!
                </span>
              ) : (
                <span className="text-[11px] text-slate-400">Estos datos se usan para la maquetación y pie de página del sitio.</span>
              )}

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-2xl text-xs uppercase tracking-wider transition-all flex items-center gap-2 disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                <span>{loading ? 'Guardando...' : 'Guardar Insumos'}</span>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
