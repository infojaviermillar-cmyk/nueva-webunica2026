'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useRouter, useSearchParams } from 'next/navigation';
import { 
  Lock, 
  Mail, 
  Loader2, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export function LoginForm() {
  const [mode, setMode] = useState<'login' | 'signup' | 'reset'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get('next') || '/mi-cuenta';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) {
      setError('Error de configuración: Supabase no está inicializado.');
      setLoading(false);
      return;
    }
    
    setLoading(true);
    setError(null);
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push(next);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) return;
    setLoading(true); setError(null); setMessage(null);
    
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/login/update-password`,
    });

    if (error) {
      setError(error.message);
    } else {
      setMessage('¡Enlace de recuperación enviado! Revisa tu correo.');
    }
    setLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) {
      setError('Error de configuración: Supabase no está inicializado.');
      setLoading(false);
      return;
    }
    
    setLoading(true);
    setError(null);
    setMessage(null);
    
    const { error, data } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      }
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else if (data.session) {
        router.push(next);
    } else {
      setMessage('¡Cuenta creada! Revisa tu correo para confirmar activarla.');
      setLoading(false);
    }
  };


  const handleAction = (e: React.FormEvent) => {
    if (mode === 'login') handleLogin(e);
    else if (mode === 'signup') handleSignUp(e);
    else handleResetPassword(e);
  };

  return (
    <div className="w-full max-w-md relative z-10">
      {/* Header removed as requested */}


      <div className="bg-white border-2 border-slate-100 rounded-[3rem] p-10 shadow-[0_30px_100px_rgba(0,0,0,0.05)]">
        <form onSubmit={handleAction} className="space-y-6">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-4">Email Corporativo / Cliente</label>
            <div className="relative">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              <input 
                type="email" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:border-violet-500 transition-all text-slate-700 font-medium"
                placeholder="hola@empresa.cl"
              />
            </div>
          </div>

          {mode !== 'reset' && (
            <div>
              <div className="flex justify-between items-center mb-2 ml-4">
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400">Contraseña</label>
                {mode === 'login' && (
                  <button 
                    type="button"
                    onClick={() => setMode('reset')}
                    className="text-[10px] text-violet-600 font-bold hover:underline"
                  >
                    ¿Olvidaste tu clave?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                <input 
                  type="password" 
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:border-violet-500 transition-all text-slate-700 font-medium"
                  placeholder="••••••••"
                />
              </div>
            </div>
          )}

          {error && (
            <div className="p-4 bg-rose-50 border border-rose-100 rounded-2xl text-rose-600 text-xs font-bold text-center">
              {error}
            </div>
          )}

          {message && (
            <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-emerald-600 text-xs font-bold text-center">
              {message}
            </div>
          )}

          <div className="space-y-4 pt-4">
            <button 
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-zinc-950 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : (
                mode === 'login' ? <><Lock className="w-3.5 h-3.5" /> Acceder</> : 
                mode === 'signup' ? 'Crear Cuenta' : 'Enviar Enlace'
              )}
            </button>
            
            <div className="text-center">
              {mode === 'login' ? (
                <button 
                  type="button"
                  onClick={() => setMode('signup')}
                  className="text-[10px] text-slate-400 font-bold uppercase tracking-widest hover:text-violet-600 transition-colors"
                >
                  ¿No tienes cuenta? <span className="text-violet-600">Regístrate</span>
                </button>
              ) : (
                <button 
                  type="button"
                  onClick={() => { setMode('login'); setError(null); setMessage(null); }}
                  className="text-[10px] text-slate-400 font-bold uppercase tracking-widest hover:text-violet-600 transition-colors"
                >
                  Volver al <span className="text-violet-600">Acceso</span>
                </button>
              )}
            </div>
          </div>
        </form>

        <div className="mt-10 pt-8 border-t border-slate-50 text-center">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black flex items-center justify-center gap-2">
            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
            Sesión Segura vía Supabase Auth
          </p>
        </div>
      </div>
    </div>
  );
}
