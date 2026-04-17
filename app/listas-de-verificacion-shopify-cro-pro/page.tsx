'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import ChecklistClient from '@/components/ui/checklist-client';
import Link from 'next/link';
import { Lock } from 'lucide-react';
import { Suspense } from 'react';

function ChecklistProContent() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [rawText, setRawText] = useState<string>('');
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    async function checkAuthAndAccess() {
      if (!supabase) return;
      
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        router.push('/login?next=/listas-de-verificacion-shopify-cro-pro');
        return;
      }
      
      setUser(user);
      
      // VALIDACIÓN REAL CONTRA LA BASE DE DATOS
      const { data: accessData, error: accessError } = await supabase
        .from('user_access')
        .select('id')
        .eq('user_id', user.id)
        .eq('resource_id', 'cro-pro')
        .single();
      
      const hasAccess = !!accessData && !accessError;
      setIsPaid(hasAccess);
      
      if (hasAccess) {
        try {
          const response = await fetch('/listas-de-verificacion-shopify-cro-pro.txt');
          const text = await response.text();
          setRawText(text);
        } catch (e) {
          console.error("Error fetching checklist text", e);
        }
      }
      
      setLoading(false);
    }
    
    checkAuthAndAccess();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="w-12 h-12 border-4 border-violet-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) return null;

  if (!isPaid) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 bg-slate-50">
        <div className="max-w-xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-slate-200 text-center">
          <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-violet-600" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-4">Recurso Premium Protegido</h1>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Esta lista avanzada contiene estrategias de conversión de alto nivel. Para acceder, es necesario realizar el pago único de $10.000 CLP.
          </p>
          <div className="space-y-4">
            <Link 
              href="/api/flow/checkout" 
              className="block w-full py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-violet-200"
            >
              Desbloquear Lista PRO ($10.000)
            </Link>
            <Link href="/mi-cuenta" className="block text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors">
              Volver a mi cuenta
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <ChecklistClient 
        title="Checklist CRO Shopify PRO"
        description="Estrategias avanzadas de psicología de ventas y optimización técnica para tiendas de alto rendimiento."
        rawText={rawText}
        storageKey="cro-pro-checklist"
      />
    </main>
  );
}

export default function ChecklistProPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-50"><div className="w-12 h-12 border-4 border-violet-600 border-t-transparent rounded-full animate-spin"></div></div>}>
      <ChecklistProContent />
    </Suspense>
  );
}
