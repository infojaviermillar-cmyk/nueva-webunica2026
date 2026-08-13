'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Play, Loader2, RefreshCw } from 'lucide-react';

interface Props {
  projectId: string;
  isRunning: boolean;
  hasAnalysis: boolean;
  variant?: 'primary' | 'secondary';
}

export default function StartAnalysisButton({
  projectId,
  isRunning: initialIsRunning,
  hasAnalysis,
  variant = 'secondary',
}: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleStart() {
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/intelligence/analysis/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ project_id: projectId }),
      });

      const data = await res.json();
      if (!data.success) {
        setError(data.error || 'Error al iniciar análisis');
        return;
      }

      router.refresh();
    } catch {
      setError('Error de conexión');
    } finally {
      setLoading(false);
    }
  }

  if (initialIsRunning || loading) {
    return (
      <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium">
        <Loader2 className="w-4 h-4 animate-spin" />
        Analizando sitio...
      </div>
    );
  }

  const baseStyles = variant === 'primary'
    ? 'bg-violet-600 hover:bg-violet-500 text-white'
    : 'bg-zinc-900 border border-zinc-800 hover:border-violet-500/40 text-white';

  return (
    <div>
      <button
        onClick={handleStart}
        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${baseStyles}`}
      >
        {hasAnalysis ? (
          <>
            <RefreshCw className="w-4 h-4" />
            Re-analizar sitio
          </>
        ) : (
          <>
            <Play className="w-4 h-4 fill-current" />
            Iniciar análisis
          </>
        )}
      </button>
      {error && <p className="text-red-400 text-xs mt-1.5">{error}</p>}
    </div>
  );
}
