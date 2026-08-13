'use client';

import { useState } from 'react';
import { Gauge, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface AnalyzePageSpeedButtonProps {
  projectId: string;
}

export default function AnalyzePageSpeedButton({ projectId }: AnalyzePageSpeedButtonProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  async function handleAnalyze() {
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch(`/api/intelligence/projects/${projectId}/pagespeed`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Error al analizar PageSpeed');
      }

      setStatus('success');
      setTimeout(() => {
        router.refresh();
        setStatus('idle');
      }, 2500);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error al analizar PageSpeed';
      setErrorMsg(msg);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  }

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
        <span>Auditoría completada</span>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
        <AlertCircle className="w-4 h-4 flex-shrink-0" />
        <span className="truncate max-w-xs">{errorMsg}</span>
      </div>
    );
  }

  return (
    <button
      id="analyze-pagespeed-btn"
      onClick={handleAnalyze}
      disabled={status === 'loading'}
      className="
        flex items-center gap-2 px-4 py-2 rounded-xl
        bg-violet-500/10 hover:bg-violet-500/20
        border border-violet-500/20 hover:border-violet-500/40
        text-violet-300 hover:text-violet-200
        text-sm font-medium
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
      "
    >
      {status === 'loading' ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Ejecutando Lighthouse…
        </>
      ) : (
        <>
          <Gauge className="w-4 h-4" />
          Auditar PageSpeed & Core Web Vitals
        </>
      )}
    </button>
  );
}
