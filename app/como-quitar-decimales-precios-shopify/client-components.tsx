'use client';

import React, { useState } from 'react';
import { Copy, Check, ChevronDown } from 'lucide-react';

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  className?: string;
}

export function CopyButton({ textToCopy, label = "Copiar", className = "" }: CopyButtonProps) {
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
          : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700/60 hover:border-zinc-500'
      } ${className}`}
      title="Copiar código al portapapeles"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>¡Copiado!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-zinc-400" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}

export function FormatCodeTable() {
  const formats = [
    {
      field: "HTML con moneda",
      subfield: "HTML with currency",
      code: "${{amount_no_decimals_with_comma_separator}} CLP",
      result: "$25.000 CLP",
      desc: "Recomendado si vendes en Chile y recibes visitas extranjeras o usas Shopify Markets."
    },
    {
      field: "HTML sin moneda",
      subfield: "HTML without currency",
      code: "${{amount_no_decimals_with_comma_separator}}",
      result: "$25.000",
      desc: "La opción más limpia y habitual para tiendas con foco 100% en el mercado nacional."
    },
    {
      field: "Correo electrónico con moneda",
      subfield: "Email with currency",
      code: "${{amount_no_decimals_with_comma_separator}} CLP",
      result: "$25.000 CLP",
      desc: "Mantiene consistencia en recibos, confirmaciones de pedido y correos de envío."
    },
    {
      field: "Correo electrónico sin moneda",
      subfield: "Email without currency",
      code: "${{amount_no_decimals_with_comma_separator}}",
      result: "$25.000",
      desc: "Muestra solo el monto con separador de miles en los correos transaccionales."
    },
  ];

  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {formats.map((item, idx) => (
          <div
            key={idx}
            className="group relative bg-zinc-900/90 hover:bg-zinc-900 border border-zinc-800/80 hover:border-zinc-700/80 rounded-2xl p-5 transition-all shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h4 className="text-white font-bold text-sm tracking-tight">{item.field}</h4>
                  <span className="text-[11px] text-zinc-400 font-mono italic">({item.subfield})</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {item.result}
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-light mb-4">{item.desc}</p>
            </div>

            <div className="mt-auto">
              <div className="flex items-center justify-between gap-2 bg-[#090D14] border border-zinc-800 rounded-xl p-2.5 font-mono text-xs">
                <code className="text-blue-300 font-medium truncate select-all">{item.code}</code>
                <CopyButton textToCopy={item.code} label="Copiar" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSection({ items }: { items: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-zinc-900/90 border-blue-500/40 shadow-lg shadow-blue-500/5'
                : 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700'
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
              type="button"
              aria-expanded={isOpen}
            >
              <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-3">
                <span className="text-xs font-mono text-blue-400 w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                {item.question}
              </h3>
              <ChevronDown
                className={`w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? 'transform rotate-180 text-blue-400' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-6 pt-0 text-zinc-300 font-light leading-relaxed text-sm border-t border-zinc-800/40 mt-1 pt-4">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
