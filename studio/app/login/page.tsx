import React, { Suspense } from 'react';
import { LoginForm } from './login-form';
import { Loader2 } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acceso | Webunica Commerce Studio',
  description: 'Inicia sesión para previsualizar y personalizar wireframes en tiempo real.',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/50 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/50 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <Suspense fallback={
        <div className="flex items-center justify-center py-20 relative z-10">
          <Loader2 className="w-10 h-10 text-indigo-600 animate-spin" />
        </div>
      }>
        <LoginForm />
      </Suspense>
    </div>
  );
}
