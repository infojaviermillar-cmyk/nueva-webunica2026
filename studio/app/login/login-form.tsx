'use client';

import React, { useState } from 'react';
import { supabase } from '../../lib/supabase/client';
import { useRouter } from 'next/navigation';
import { 
  Lock, 
  Mail, 
  Loader2, 
  CheckCircle2,
  Bot
} from 'lucide-react';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();

  const handleAction = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    // Determinar rol basado en el correo
    const isAdmin = email.endsWith('@webunica.cl') || email === 'admin@webunica.cl';
    const role = isAdmin ? 'admin' : 'client';

    if (!supabase) {
      // MOCK AUTHENTICATION (Si Supabase no está configurado localmente)
      console.warn('Supabase no está configurado. Usando autenticación Mock.');
      setTimeout(() => {
        localStorage.setItem('studio_user', JSON.stringify({ email, role }));
        setLoading(false);
        router.push('/dashboard');
      }, 1000);
      return;
    }

    try {
      if (isSignUp) {
        // Registrar usuario con metadata de rol
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { role },
            emailRedirectTo: `${window.location.origin}/auth/callback`,
          }
        });

        if (signUpError) throw signUpError;
        
        if (data.session) {
          localStorage.setItem('studio_user', JSON.stringify({ email, role }));
          router.push('/dashboard');
        } else {
          setMessage('¡Cuenta creada! Revisa tu correo para verificar activarla.');
        }
      } else {
        // Iniciar sesión
        const { data, error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password
        });

        if (signInError) throw signInError;

        if (data.user) {
          localStorage.setItem('studio_user', JSON.stringify({ email, role }));
          router.push('/dashboard');
        }
      }
    } catch (err: any) {
      setError(err.message || 'Ocurrió un error. Reintente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md relative z-10">
      <div className="text-center mb-8">
        <div className="inline-flex p-3 bg-indigo-100 rounded-2xl mb-3 text-indigo-600">
          <Bot className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Commerce Studio</h2>
        <p className="text-sm text-slate-500 mt-1">
          {isSignUp ? 'Crea tu cuenta de simulación' : 'Ingresa a tu panel de propuestas'}
        </p>
      </div>

      <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(99,102,241,0.05)]">
        <form onSubmit={handleAction} className="space-y-6">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-4">
              Email Corporativo
            </label>
            <div className="relative">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              <input 
                type="email" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all text-slate-700 font-medium"
                placeholder="ejemplo@webunica.cl"
              />
            </div>
            <p className="text-[10px] text-slate-400 mt-1 ml-4">
              Tip: Los correos @webunica.cl ingresan como Administrador.
            </p>
          </div>

          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-4">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              <input 
                type="password" 
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-14 pr-6 py-4 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all text-slate-700 font-medium"
                placeholder="••••••••"
              />
            </div>
          </div>

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
              className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-slate-800 active:scale-95 transition-all shadow-lg shadow-slate-900/10 cursor-pointer"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                isSignUp ? 'Crear Cuenta' : 'Acceder al Panel'
              )}
            </button>
            
            <div className="text-center">
              <button 
                type="button"
                onClick={() => { setIsSignUp(!isSignUp); setError(null); setMessage(null); }}
                className="text-[11px] text-indigo-600 font-bold hover:underline transition-colors"
              >
                {isSignUp ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
              </button>
            </div>
          </div>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black flex items-center justify-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            Acceso Seguro
          </p>
        </div>
      </div>
    </div>
  );
}
