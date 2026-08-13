'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';

/**
 * Root /intelligence redirect:
 * - If authenticated → /intelligence/projects
 * - If not → /login
 */
export default function IntelligenceRootPage() {
  const router = useRouter();

  useEffect(() => {
    async function check() {
      if (!supabase) { router.replace('/login?next=/intelligence'); return; }
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        router.replace('/intelligence/projects');
      } else {
        router.replace('/login?next=/intelligence');
      }
    }
    check();
  }, [router]);

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-zinc-400 text-sm">Cargando Webunica Intelligence...</p>
      </div>
    </div>
  );
}
