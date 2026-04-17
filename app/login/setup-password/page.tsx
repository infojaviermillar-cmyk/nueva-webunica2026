'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import { Lock, CheckCircle2, Loader2, ArrowRight } from 'lucide-react';

function SetupPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get('next') || '/mi-cuenta';
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Asegurarse de que el usuario está logueado vía el link antes de dejarlo estar aquí
  useEffect(() => {
    async function checkSession() {
      if (!supabase) return;
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        // Si no hay sesión, mandarlo a login o pedir email de nuevo
        router.push('/login');
      }
    }
    checkSession();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      if (!supabase) throw new Error("Sistema no inicializado");
      
      const { error } = await supabase.auth.updateUser({
        password: password
      });

      if (error) throw error;

      setSuccess(true);
      // Redirigir después de 2 segundos
      setTimeout(() => {
        router.push(next);
      }, 2000);
    } catch (err: any) {
      setError(err.message || 'Error al establecer la contraseña.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-10 lg:p-14 rounded-[3rem] shadow-2xl border border-slate-100">
      {!success ? (
        <>
          <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mb-8">
            <Lock className="w-8 h-8 text-violet-600" />
          </div>
          
          <h1 className="text-3xl font-black text-slate-900 mb-4 leading-tight">
            Finaliza tu Registro
          </h1>
          
          <p className="text-slate-500 mb-8 font-medium leading-relaxed">
            Tu correo ha sido validado. Ahora, crea una contraseña segura para acceder a tus recursos en el futuro.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Nueva Contraseña</label>
              <input 
                type="password" 
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2x focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white transition-all font-medium text-slate-900"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Confirmar Contraseña</label>
              <input 
                type="password" 
                required
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white transition-all font-medium text-slate-900"
              />
            </div>

            {error && (
              <p className="text-sm font-bold text-red-500 px-2 animate-pulse">
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
                  Guardar y Acceder al Recurso
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </>
      ) : (
        <div className="text-center py-6">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-8 mx-auto">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-4">¡Todo Listo!</h2>
          <p className="text-slate-600 font-medium">Contraseña establecida correctamente. Redirigiendo a tu recurso...</p>
        </div>
      )}
    </div>
  );
}

export default function SetupPasswordPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <Suspense fallback={
        <div className="flex items-center justify-center">
          <Loader2 className="w-10 h-10 text-violet-600 animate-spin" />
        </div>
      }>
        <SetupPasswordForm />
      </Suspense>
    </div>
  );
}
