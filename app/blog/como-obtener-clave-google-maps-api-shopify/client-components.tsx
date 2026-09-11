'use client';

import React, { useState } from 'react';
import { Copy, Check, Share2, Globe, Link as LinkIcon } from 'lucide-react';

export function CopySnippetButton({ textToCopy, label = "Copiar" }: { textToCopy: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
        copied
          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
          : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/60'
      }`}
      title="Copiar al portapapeles"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>¡Copiado!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-slate-400" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}

export function ShareButtons({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // user cancelled or not supported
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <div className="flex lg:flex-col gap-3">
      <button
        onClick={handleShare}
        aria-label="Compartir artículo"
        className="w-11 h-11 rounded-2xl bg-slate-100 text-slate-600 hover:bg-brand-purple hover:text-white transition-all flex items-center justify-center border border-slate-200 shadow-sm cursor-pointer"
        title="Compartir"
      >
        <Share2 className="w-5 h-5" />
      </button>
      <button
        onClick={handleCopyLink}
        aria-label="Copiar link"
        className="w-11 h-11 rounded-2xl bg-slate-100 text-slate-600 hover:bg-brand-purple hover:text-white transition-all flex items-center justify-center border border-slate-200 shadow-sm cursor-pointer"
        title="Copiar enlace"
      >
        {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <LinkIcon className="w-5 h-5" />}
      </button>
    </div>
  );
}
