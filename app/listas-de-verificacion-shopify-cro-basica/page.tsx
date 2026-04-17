'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import ChecklistClient from '@/components/ui/checklist-client';

export default function ChecklistBasicaPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [rawText, setRawText] = useState<string>('');

  useEffect(() => {
    async function checkAuth() {
      if (!supabase) return;
      
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        router.push('/login?next=/listas-de-verificacion-shopify-cro-basica');
        return;
      }
      
      setUser(user);
      
      // Fetch the checklist content via public URL to avoid fs issues on client
      try {
        const response = await fetch('/listas-de-verificacion-shopify-cro-basica.txt');
        const text = await response.text();
        setRawText(text);
      } catch (e) {
        console.error("Error fetching checklist text", e);
      } finally {
        setLoading(false);
      }
    }
    
    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-violet-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-500 font-medium animate-pulse">Cargando recurso seguro...</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <main className="min-h-screen bg-slate-50 pt-20">
      <ChecklistClient 
        title="Checklist CRO Shopify Básica"
        description="Optimiza los elementos fundamentales de tu tienda para empezar a convertir visitas en ventas."
        rawText={rawText}
        storageKey="cro-basic-checklist"
      />
    </main>
  );
}
