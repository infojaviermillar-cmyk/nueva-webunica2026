'use client';

import React, { useState, useEffect } from 'react';
import { 
  getUserTestimonials, 
  createTestimonial,
  Testimonial 
} from '@/lib/testimonial-actions';
import { 
  Star, 
  MessageSquare, 
  Send, 
  Loader2, 
  CheckCircle2,
  AlertCircle,
  Zap,
  Lock,
  ArrowRight
} from 'lucide-react';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function UserAccountPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [hasProAccess, setHasProAccess] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    quote: '',
    author: '',
    stars: 5
  });

  useEffect(() => {
    async function init() {
      if (!supabase) return;
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/login?next=/mi-cuenta');
        return;
      }
      setUser(user);
      checkProAccess(user.id);
      loadTestimonials();
    }
    init();
  }, []);

  async function checkProAccess(userId: string) {
    if (!supabase) return;

    const { data } = await supabase
      .from('user_access')
      .select('id')
      .eq('user_id', userId)
      .eq('resource_id', 'cro-pro')
      .single();
    
    setHasProAccess(!!data);
  }

  async function loadTestimonials() {
    setLoading(true);
    const result = await getUserTestimonials();
    if (result.success) {
      setTestimonials(result.testimonials || []);
    }
    setLoading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    const result = await createTestimonial({
      ...formData,
      active: false // Client testimonials need admin approval
    });
    if (result.success) {
      setFormData({ quote: '', author: '', stars: 5 });
      alert('¡Gracias! Tu testimonio ha sido enviado y será revisado por el equipo.');
      loadTestimonials();
    }
    setSending(false);
  }

  const handleLogout = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading && !user) return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="w-8 h-8 animate-spin text-violet-600" />
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 font-sans">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* User Header */}
        <div className="bg-zinc-950 rounded-[3rem] p-10 lg:p-16 mb-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/20 blur-[100px] rounded-full" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-violet-400 mb-4">Zona de Clientes</div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 italic font-serif lowercase font-light">
                Hola, <span className="text-white not-italic uppercase font-black">{user?.email?.split('@')[0]}</span>
              </h1>
              <p className="text-zinc-400 font-medium">Comparte tu experiencia trabajando con Webunica.</p>
            </div>
            <button 
                onClick={handleLogout}
                className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all self-start md:self-center"
            >
                Cerrar Sesión
            </button>
          </div>
        </div>


        {/* Mis Recursos: Checklists Section */}
        <div className="mb-12">
          <h2 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-widest ml-6">Mis Recursos y Herramientas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Checklist Link */}
            <div 
              onClick={() => router.push('/listas-de-verificacion-shopify-cro-basica')}
              className="bg-white border border-slate-200 rounded-[2.5rem] p-8 flex items-center justify-between hover:border-violet-300 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-violet-100 text-violet-600 rounded-2xl flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 leading-none mb-2">Checklist CRO Básica</h3>
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Acceso Habilitado</span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-violet-500 group-hover:translate-x-1 transition-all" />
            </div>

            {/* Pro Checklist Link */}
            <div 
              onClick={() => router.push('/listas-de-verificacion-shopify-cro-pro')}
              className={`${hasProAccess ? 'bg-white border-slate-200' : 'bg-amber-50 border-amber-100'} border rounded-[2.5rem] p-8 flex items-center justify-between hover:border-amber-300 hover:shadow-lg transition-all cursor-pointer group`}
            >
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 ${hasProAccess ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'} rounded-2xl flex items-center justify-center shrink-0`}>
                  {hasProAccess ? <CheckCircle2 className="w-7 h-7" /> : <Zap className="w-7 h-7" />}
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 leading-none mb-2">Auditoría CRO PRO</h3>
                  <div className="flex items-center gap-2">
                    {hasProAccess ? (
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Acceso Habilitado</span>
                    ) : (
                      <>
                        <span className="text-[10px] font-black uppercase tracking-widest text-amber-600">Requiere Desbloqueo</span>
                        <Lock className="w-3 h-3 text-amber-600" />
                      </>
                    )}
                  </div>
                </div>
              </div>
              <ArrowRight className={`w-5 h-5 ${hasProAccess ? 'text-slate-300 group-hover:text-emerald-500' : 'text-amber-300 group-hover:text-amber-500'} group-hover:translate-x-1 transition-all`} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Side */}
          <div className="lg:col-span-12">
            <div className="bg-white border-2 border-slate-100 rounded-[3rem] p-10 lg:p-14 shadow-xl shadow-slate-200/50">
              <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tighter flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-violet-600" />
                Dejar un Testimonio
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 ml-6">¿Qué te pareció el servicio?</label>
                  <textarea 
                    required
                    value={formData.quote}
                    onChange={e => setFormData({...formData, quote: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-100 rounded-[2rem] px-8 py-6 focus:outline-none focus:border-violet-500 transition-all text-slate-700 min-h-[160px] font-medium"
                    placeholder="Escribe tu opinión aquí..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 ml-6">Nombre y Cargo / Empresa</label>
                    <input 
                      required
                      type="text"
                      value={formData.author}
                      onChange={e => setFormData({...formData, author: e.target.value})}
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 focus:outline-none focus:border-violet-500 transition-all text-slate-700 font-medium"
                      placeholder="Ej: Sarah - CEO en Fashion Boutique"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 ml-6">Calificación</label>
                    <div className="flex bg-slate-50 border border-slate-100 rounded-2xl p-4 justify-around">
                        {[1, 2, 3, 4, 5].map(star => (
                            <button 
                                key={star}
                                type="button"
                                onClick={() => setFormData({...formData, stars: star})}
                                className="group transition-transform active:scale-90 p-1"
                            >
                                <Star className={`w-8 h-8 ${formData.stars >= star ? 'fill-orange-400 text-orange-400' : 'text-slate-200'}`} />
                            </button>
                        ))}
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={sending}
                  className="w-full py-6 bg-violet-600 text-white rounded-[2.5rem] font-black uppercase tracking-[0.2em] text-[11px] hover:bg-violet-700 transition-all shadow-2xl shadow-violet-600/30 flex items-center justify-center gap-3"
                >
                  {sending ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-4 h-4" /> Enviar Testimonio</>}
                </button>
              </form>
            </div>
          </div>

          {/* Past Testimonials */}
          <div className="lg:col-span-12">
            <h2 className="text-xl font-black text-slate-900 mb-8 uppercase tracking-widest ml-6">Mis Testimonios</h2>
            <div className="space-y-4">
              {testimonials.map(t => (
                <div key={t.id} className="bg-white border border-slate-100 rounded-[2.5rem] p-8 lg:p-10 flex flex-col md:flex-row items-start justify-between gap-6 hover:border-violet-200 transition-all">
                  <div className="flex-1">
                    <div className="flex gap-1 mb-4">
                      {[...Array(t.stars)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-orange-300 text-orange-300" />
                      ))}
                    </div>
                    <p className="text-slate-600 font-serif italic text-lg leading-relaxed mb-4">"{t.quote}"</p>
                    <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">~ Publicado como: {t.author} ~</span>
                  </div>
                  <div className="shrink-0 pt-2">
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] ${t.active ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                      {t.active ? 'Publicado' : 'Pendiente de Revisión'}
                    </span>
                  </div>
                </div>
              ))}

              {testimonials.length === 0 && (
                 <div className="bg-white/50 border-2 border-dashed border-slate-200 rounded-[3rem] p-16 text-center">
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Aún no has enviado testimonios.</p>
                 </div>
              )}
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-20 p-10 bg-white border border-slate-100 rounded-[3rem] flex items-center gap-6">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0">
                <AlertCircle className="w-6 h-6" />
            </div>
            <p className="text-sm text-slate-500 font-medium">
                Tu testimonio pasará por un proceso de revisión antes de ser publicado en la web. Esto garantiza la integridad de nuestra comunidad.
            </p>
        </div>
      </div>
    </div>
  );
}
