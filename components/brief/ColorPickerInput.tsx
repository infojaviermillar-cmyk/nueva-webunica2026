"use client";

import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface ColorItem {
  hex: string;
  name?: string;
}

interface ColorPickerInputProps {
  colors: ColorItem[];
  onChange: (colors: ColorItem[]) => void;
}

export function ColorPickerInput({ colors, onChange }: ColorPickerInputProps) {
  const [newHex, setNewHex] = useState('#7850FA');
  const [newName, setNewName] = useState('');

  const handleAdd = () => {
    if (!newHex) return;
    onChange([...colors, { hex: newHex, name: newName || undefined }]);
    setNewName('');
  };

  const handleRemove = (index: number) => {
    onChange(colors.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      {/* Existing Colors List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {colors.map((color, idx) => (
          <div
            key={`${color.hex}-${idx}`}
            className="p-3 bg-white border border-zinc-200 rounded-xl flex items-center justify-between shadow-xs"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-7 h-7 rounded-lg border border-zinc-300 shadow-inner shrink-0"
                style={{ backgroundColor: color.hex }}
              />
              <div>
                <span className="text-xs font-mono font-bold text-zinc-900 block">{color.hex}</span>
                {color.name && <span className="text-[11px] text-zinc-500">{color.name}</span>}
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleRemove(idx)}
              className="p-1.5 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
              aria-label="Eliminar color"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Add New Color Row */}
      <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl flex flex-col sm:flex-row items-center gap-3">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <input
            type="color"
            value={newHex}
            onChange={(e) => setNewHex(e.target.value)}
            className="w-10 h-10 rounded-xl cursor-pointer border border-zinc-300 bg-white p-1"
          />
          <input
            type="text"
            value={newHex}
            onChange={(e) => setNewHex(e.target.value)}
            placeholder="#HEX"
            className="w-28 px-3 py-2 bg-white border border-zinc-200 rounded-xl text-xs font-mono font-bold text-zinc-900"
          />
        </div>

        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Nombre del color (ej: Morado Principal)"
          className="w-full px-3.5 py-2 bg-white border border-zinc-200 rounded-xl text-xs text-zinc-800"
        />

        <button
          type="button"
          onClick={handleAdd}
          className="w-full sm:w-auto px-4 py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-all shrink-0 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Añadir</span>
        </button>
      </div>
    </div>
  );
}
