'use client';

import React, { useState, useEffect } from 'react';
import { 
  getTestimonials, 
  createTestimonial, 
  updateTestimonial, 
  deleteTestimonial,
  Testimonial 
} from '@/lib/testimonial-actions';
import { 
  Plus, 
  Trash2, 
  Save, 
  X, 
  Star, 
  CheckCircle2, 
  XCircle,
  Loader2,
  RefreshCw
} from 'lucide-react';

export default function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  
  const [formData, setFormData] = useState<Testimonial>({
    quote: '',
    author: '',
    stars: 5,
    active: true
  });

  useEffect(() => {
    loadTestimonials();
  }, []);

  async function loadTestimonials() {
    setLoading(true);
    const result = await getTestimonials();
    if (result.success) {
      setTestimonials(result.testimonials || []);
    }
    setLoading(false);
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const result = await createTestimonial(formData);
    if (result.success) {
      setFormData({ quote: '', author: '', stars: 5, active: true });
      setShowAddForm(false);
      loadTestimonials();
    } else {
      alert('Error: ' + result.error);
    }
    setLoading(false);
  }

  async function handleUpdate(id: string, updates: Partial<Testimonial>) {
    setLoading(true);
    const result = await updateTestimonial(id, updates);
    if (result.success) {
      setIsEditing(null);
      loadTestimonials();
    } else {
      alert('Error: ' + result.error);
    }
    setLoading(false);
  }

  async function handleDelete(id: string) {
    if (!confirm('¿Estás seguro de eliminar este testimonio?')) return;
    setLoading(true);
    const result = await deleteTestimonial(id);
    if (result.success) {
      loadTestimonials();
    } else {
      alert('Error: ' + result.error);
    }
    setLoading(false);
  }

  if (loading && testimonials.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 className="w-10 h-10 text-violet-600 animate-spin mb-4" />
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Cargando Testimonios...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Action Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-3">
          Testimonios Activos
          <span className="text-xs bg-slate-100 text-slate-400 px-3 py-1 rounded-full">{testimonials.length}</span>
        </h2>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-6 py-3 bg-zinc-950 text-white rounded-2xl font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 hover:bg-zinc-800 transition-all"
        >
          {showAddForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          {showAddForm ? 'Cancelar' : 'Nuevo Testimonio'}
        </button>
      </div>

      {/* Add Form */}
      {showAddForm && (
        <form onSubmit={handleAdd} className="bg-white border-2 border-violet-100 rounded-[2.5rem] p-10 shadow-xl shadow-violet-600/5 animate-in slide-in-from-top-4 duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="md:col-span-2">
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-4">Cita / Testimonio</label>
              <textarea 
                required
                value={formData.quote}
                onChange={e => setFormData({...formData, quote: e.target.value})}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet-500 transition-all text-slate-700 min-h-[120px]"
                placeholder="Escribe lo que el cliente dijo..."
              />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-4">Autor y Cargo</label>
              <input 
                required
                type="text"
                value={formData.author}
                onChange={e => setFormData({...formData, author: e.target.value})}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet-500 transition-all text-slate-700"
                placeholder="Ej: Javier Millar - CEO en Webunica"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-4">Calificación (Estrellas)</label>
              <select 
                value={formData.stars}
                onChange={e => setFormData({...formData, stars: Number(e.target.value)})}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet-500 transition-all text-slate-700"
              >
                {[5, 4, 3, 2, 1].map(n => (
                  <option key={n} value={n}>{n} Estrellas</option>
                ))}
              </select>
            </div>
          </div>
          <button 
            type="submit"
            className="px-10 py-5 bg-violet-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-violet-700 transition-all shadow-lg shadow-violet-600/20"
          >
            Guardar Testimonio
          </button>
        </form>
      )}

      {/* List */}
      <div className="grid grid-cols-1 gap-4">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white border border-slate-100 rounded-[2rem] p-8 flex flex-col md:flex-row items-center gap-8 group hover:border-violet-200 transition-all">
            <div className="flex-1 w-full">
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-orange-300 text-orange-300" />
                ))}
              </div>
              <p className="text-slate-700 font-serif italic text-lg leading-relaxed mb-4">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-2">
                <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">~ {t.author} ~</span>
                <span className={`px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest ${t.active ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                  {t.active ? 'Visible' : 'Oculto'}
                </span>
              </div>
            </div>
            
            <div className="flex gap-2 shrink-0">
              <button 
                onClick={() => handleUpdate(t.id!, { active: !t.active })}
                className={`p-3 rounded-xl transition-all ${t.active ? 'text-slate-300 hover:text-rose-500 hover:bg-rose-50' : 'text-emerald-500 bg-emerald-50'}`}
                title={t.active ? 'Ocultar' : 'Mostrar'}
              >
                {t.active ? <XCircle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
              </button>
              <button 
                onClick={() => handleDelete(t.id!)}
                className="p-3 text-slate-300 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                title="Eliminar"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {testimonials.length === 0 && !showAddForm && (
        <div className="text-center py-20 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[3rem]">
          <MessageSquare className="w-12 h-12 text-slate-200 mx-auto mb-4" />
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No hay testimonios registrados</p>
        </div>
      )}
    </div>
  );
}
