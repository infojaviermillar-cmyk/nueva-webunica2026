"use client";

import React from 'react';

interface ScaleRangeSliderProps {
  label: string;
  leftExtreme: string;
  rightExtreme: string;
  value: number; // 1-5
  onChange: (val: number) => void;
}

export function ScaleRangeSlider({ label, leftExtreme, rightExtreme, value, onChange }: ScaleRangeSliderProps) {
  return (
    <div className="p-4 sm:p-5 bg-white border border-zinc-200 rounded-2xl shadow-xs space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-xs font-mono font-bold uppercase tracking-wider text-purple-900">
          {label}
        </label>
        <span className="px-2.5 py-0.5 bg-purple-100 text-purple-900 font-mono font-black text-xs rounded-md">
          Nivel {value} / 5
        </span>
      </div>

      {/* Opposing Labels */}
      <div className="flex items-center justify-between text-xs font-medium text-zinc-700">
        <span className={`transition-colors ${value <= 2 ? 'text-purple-700 font-bold' : ''}`}>
          {leftExtreme}
        </span>
        <span className={`transition-colors ${value >= 4 ? 'text-purple-700 font-bold' : ''}`}>
          {rightExtreme}
        </span>
      </div>

      {/* 5-Step Button Buttons Row & Native Range Slider */}
      <div className="flex items-center gap-2 pt-1">
        {[1, 2, 3, 4, 5].map((step) => {
          const isSelected = value === step;
          return (
            <button
              key={step}
              type="button"
              onClick={() => onChange(step)}
              className={`flex-1 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-purple-600 border-purple-600 text-white shadow-md scale-105'
                  : 'bg-zinc-50 border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:border-zinc-300'
              }`}
            >
              {step}
            </button>
          );
        })}
      </div>
    </div>
  );
}
