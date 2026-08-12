"use client";

import React from 'react';
import { ArrowUp, ArrowDown, GripVertical, CheckCircle2 } from 'lucide-react';

interface DragDropPrioritizerProps {
  items: string[];
  onChange: (updated: string[]) => void;
  topFiveSelected: string[];
  onTopFiveChange: (topFive: string[]) => void;
}

export function DragDropPrioritizer({ items, onChange, topFiveSelected, onTopFiveChange }: DragDropPrioritizerProps) {
  const moveItem = (index: number, direction: 'up' | 'down') => {
    const newItems = [...items];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newItems.length) return;

    const [moved] = newItems.splice(index, 1);
    newItems.splice(targetIndex, 0, moved);
    onChange(newItems);
  };

  const toggleTopFive = (item: string) => {
    if (topFiveSelected.includes(item)) {
      onTopFiveChange(topFiveSelected.filter(i => i !== item));
    } else {
      if (topFiveSelected.length >= 5) return;
      onTopFiveChange([...topFiveSelected, item]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top 5 Selector */}
      <div className="p-4 bg-purple-50 border border-purple-200 rounded-2xl">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-900">
            Top 5 Elementos Indispensables para el Home
          </span>
          <span className="text-xs font-mono font-bold text-purple-800">
            {topFiveSelected.length} de 5
          </span>
        </div>
        <p className="text-xs text-zinc-600 mb-3">
          Haz clic en las casillas para marcar los 5 elementos estrictamente obligatorios si el espacio fuera limitado.
        </p>

        <div className="flex flex-wrap gap-2">
          {items.map((item) => {
            const isTop5 = topFiveSelected.includes(item);
            const disabled = !isTop5 && topFiveSelected.length >= 5;

            return (
              <button
                key={`top5-${item}`}
                type="button"
                disabled={disabled}
                onClick={() => toggleTopFive(item)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer border ${
                  isTop5
                    ? 'bg-purple-600 border-purple-600 text-white shadow-xs font-bold'
                    : disabled
                    ? 'bg-zinc-100 border-zinc-200 text-zinc-400 cursor-not-allowed'
                    : 'bg-white border-zinc-200 text-zinc-700 hover:border-purple-300 hover:bg-purple-50'
                }`}
              >
                {isTop5 && <CheckCircle2 className="w-3.5 h-3.5" />}
                <span>{item}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Ordered List Reordering Controls */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-1">
          <span>Prioridad Módulo (1 = Máxima Prioridad)</span>
          <span>Usa las flechas para reordenar</span>
        </div>

        <div className="space-y-2">
          {items.map((item, idx) => {
            const isTop5 = topFiveSelected.includes(item);

            return (
              <div
                key={item}
                className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-all ${
                  isTop5
                    ? 'bg-purple-50/70 border-purple-300 text-purple-950 font-bold'
                    : 'bg-white border-zinc-200 text-zinc-800 hover:border-zinc-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-700 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <GripVertical className="w-4 h-4 text-zinc-400 shrink-0" />
                  <span className="text-xs md:text-sm">{item}</span>
                  {isTop5 && (
                    <span className="text-[10px] font-mono font-bold bg-purple-600 text-white px-2 py-0.5 rounded-full">
                      TOP 5
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    disabled={idx === 0}
                    onClick={() => moveItem(idx, 'up')}
                    className="p-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 disabled:opacity-30 cursor-pointer"
                    aria-label="Subir prioridad"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    disabled={idx === items.length - 1}
                    onClick={() => moveItem(idx, 'down')}
                    className="p-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 disabled:opacity-30 cursor-pointer"
                    aria-label="Bajar prioridad"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
