"use client";

import React from 'react';
import { Check } from 'lucide-react';

interface Option {
  value: string;
  label: string;
  description?: string;
  badge?: string;
}

interface RadioCardGroupProps {
  options: Option[];
  value: string;
  onChange: (val: any) => void;
  gridCols?: string;
}

export function RadioCardGroup({ options, value, onChange, gridCols = 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' }: RadioCardGroupProps) {
  return (
    <div className={`grid ${gridCols} gap-3`}>
      {options.map((opt) => {
        const isSelected = value === opt.value;
        return (
          <div
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden ${
              isSelected
                ? 'border-purple-600 bg-purple-50/50 shadow-md ring-2 ring-purple-500/20'
                : 'border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50/50'
            }`}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className={`text-sm font-bold ${isSelected ? 'text-purple-950' : 'text-zinc-900'}`}>
                {opt.label}
              </span>
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                  isSelected ? 'bg-purple-600 border-purple-600 text-white' : 'border-zinc-300 bg-white'
                }`}
              >
                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
              </div>
            </div>

            {opt.description && (
              <p className="text-xs text-zinc-500 leading-relaxed font-light mb-1">
                {opt.description}
              </p>
            )}

            {opt.badge && (
              <span className="mt-2 inline-self-start text-[10px] font-mono font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-2 py-0.5 rounded-md">
                {opt.badge}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
