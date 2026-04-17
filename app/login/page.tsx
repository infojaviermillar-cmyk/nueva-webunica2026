import React, { Suspense } from 'react';
import { LoginForm } from './login-form';
import { Loader2 } from 'lucide-react';
import { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Acceso Clientes | Webunica',
  description: 'Inicia sesión en tu panel de control de Webunica para gestionar tus testimonios y servicios.',
};

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ next?: string }> }) {
  const params = await searchParams;
  const next = params.next || '/mi-cuenta';
  
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (user) {
    redirect(next);
  }
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-100/50 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/50 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <Suspense fallback={
        <div className="flex items-center justify-center py-20 relative z-10">
          <Loader2 className="w-10 h-10 text-violet-600 animate-spin" />
        </div>
      }>
        <LoginForm />
      </Suspense>
    </div>
  );
}
