"use client";

import React from 'react';
import { Check, Plus } from 'lucide-react';

interface ChipSelectorProps {
  options: string[];
  selected: string[];
  onChange: (updated: string[]) => void;
  maxSelection?: number;
}

export function ChipSelector({ options, selected, onChange, maxSelection }: ChipSelectorProps) {
  const handleToggle = (opt: string) => {
    if (selected.includes(opt)) {
      onChange(selected.filter(item => item !== opt));
    } else {
      if (maxSelection && selected.length >= maxSelection) {
        return; // alcanzado el límite máximo
      }
      onChange([...selected, opt]);
    }
  };

  const isMaxReached = maxSelection ? selected.length >= maxSelection : false;

  return (
    <div className="space-y-3">
      {maxSelection && (
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-zinc-500">Seleccionados:</span>
          <span className={`font-bold ${isMaxReached ? 'text-purple-700 font-black' : 'text-zinc-800'}`}>
            {selected.length} de máximo {maxSelection}
          </span>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const isSelected = selected.includes(opt);
          const isDisabled = !isSelected && isMaxReached;

          return (
            <button
              key={opt}
              type="button"
              disabled={isDisabled}
              onClick={() => handleToggle(opt)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 border ${
                isSelected
                  ? 'bg-purple-600 border-purple-600 text-white shadow-xs font-bold'
                  : isDisabled
                  ? 'bg-zinc-100 border-zinc-200 text-zinc-400 opacity-60 cursor-not-allowed'
                  : 'bg-white border-zinc-200 text-zinc-800 hover:border-purple-300 hover:bg-purple-50/40'
              }`}
            >
              {isSelected ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3.5 h-3.5 text-zinc-400" />}
              <span>{opt}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
