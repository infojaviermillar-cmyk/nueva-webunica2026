'use client';

import { useState } from 'react';
import { Trash2, Loader2, AlertTriangle } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface DeleteProjectButtonProps {
  projectId: string;
  projectName: string;
  variant?: 'icon' | 'full';
  redirectOnDelete?: boolean;
}

export default function DeleteProjectButton({
  projectId,
  projectName,
  variant = 'icon',
  redirectOnDelete = false,
}: DeleteProjectButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  async function handleDelete(e?: React.MouseEvent) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    setIsDeleting(true);
    setErrorMsg('');

    try {
      const res = await fetch(`/api/intelligence/projects/${projectId}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'No se pudo eliminar el proyecto');
      }

      setIsOpen(false);
      setIsDeleting(false);

      if (redirectOnDelete) {
        router.push('/intelligence/projects');
      } else {
        router.refresh();
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error al eliminar el proyecto';
      setErrorMsg(msg);
      setIsDeleting(false);
    }
  }

  return (
    <>
      {variant === 'icon' ? (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(true);
          }}
          title="Eliminar proyecto permanentemente"
          className="p-1.5 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 text-sm font-medium transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          Eliminar Proyecto
        </button>
      )}

      {/* Confirmation Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (!isDeleting) setIsOpen(false);
          }}
        >
          <div
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 text-red-400">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">¿Eliminar proyecto permanentemente?</h3>
                <p className="text-zinc-500 text-xs font-mono truncate max-w-[240px]">{projectName}</p>
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Esta acción eliminará el proyecto y <strong className="text-white">todos sus análisis, páginas, keywords, SERP y scores de la base de datos</strong>. Esta acción no se puede deshacer.
            </p>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                {errorMsg}
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                disabled={isDeleting}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="px-4 py-2 rounded-xl text-zinc-400 hover:text-white text-sm font-medium transition-colors"
              >
                Cancelar
              </button>
              <button
                type="button"
                disabled={isDeleting}
                onClick={handleDelete}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-medium transition-all shadow-lg shadow-red-600/20 disabled:opacity-50"
              >
                {isDeleting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Eliminando...
                  </>
                ) : (
                  <>
                    <Trash2 className="w-4 h-4" />
                    Sí, eliminar de la BD
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
