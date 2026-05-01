'use client';

import React, { useState } from 'react';
import { X, Mail, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/lib/supabase/client';

interface LeadResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  resourceName: string;
  resourceSlug: string;
}

export default function LeadResourceModal({ isOpen, onClose, resourceName, resourceSlug }: LeadResourceModalProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // 1. Guardar como Lead en la base de datos
      if (supabase) {
        await supabase.from('leads').insert({
          email,
          service_interest: `Recurso: ${resourceName}`,
          source_url: window.location.href,
          status: 'nuevo'
        });
      }

      // 2. Iniciar registro/login vía Magic Link
      // Usamos el callback para procesar el inicio de sesión y luego ir a setup-password
      const redirectUrl = `${window.location.origin}/auth/callback?next=/login/setup-password?next=${resourceSlug}`;
      
      const { error: authError } = await supabase!.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: redirectUrl,
        },
      });

      if (authError) throw authError;

      setSuccess(true);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Ocurrió un error. Por favor intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-50 text-slate-400 hover:text-slate-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-10 lg:p-14">
          {!success ? (
            <>
              <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mb-8">
                <Mail className="w-8 h-8 text-violet-600" />
              </div>
              
              <h2 className="text-3xl font-black text-slate-900 mb-4 leading-tight pr-10">
                Acceso Gratuito a la <br/> <span className="text-violet-600">{resourceName}</span>
              </h2>
              
              <p className="text-slate-500 mb-8 font-medium leading-relaxed">
                Ingresa tu correo corporativo para recibir el acceso instantáneo. Validaremos tu email para asegurar la entrega del recurso.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="email" 
                    required
                    placeholder="tu@empresa.cl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-14 pr-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white transition-all font-medium text-slate-900 placeholder:text-slate-400"
                  />
                </div>

                {error && (
                  <p className="text-sm font-bold text-red-500 px-2 animate-bounce">
                    ⚠️ {error}
                  </p>
                )}

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 bg-slate-950 text-white rounded-2xl font-black uppercase tracking-[0.15em] text-[11px] flex items-center justify-center gap-3 hover:bg-slate-800 transition-all disabled:opacity-70 group shadow-xl shadow-slate-200"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Obtener Acceso Instantáneo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                
                <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest pt-4">
                  🔒 Privacidad garantizada. Sin spam comercial.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-8 mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10 text-emerald-600" />
              </div>
              
              <h2 className="text-3xl font-black text-slate-900 mb-4">¡Correo Enviado!</h2>
              
              <p className="text-slate-600 mb-8 font-medium leading-relaxed">
                Hemos enviado un enlace de acceso mágico a <strong>{email}</strong>.<br/><br/>
                Haz clic en el botón del correo para validar tu cuenta y completar la creación de tu contraseña.
              </p>

              <button 
                onClick={onClose}
                className="w-full py-5 bg-slate-50 text-slate-900 rounded-2xl font-black uppercase tracking-[0.15em] text-[11px] hover:bg-slate-100 transition-all"
              >
                Cerrar Ventana
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
