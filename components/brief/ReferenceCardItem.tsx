"use client";

import React from 'react';
import { Trash2, ExternalLink, Plus } from 'lucide-react';
import { SiteReference, CompetitorReference } from '@/types/brief';
import { ChipSelector } from './ChipSelector';

const REFERENCE_ELEMENTS = [
  'Header',
  'Menú',
  'Buscador',
  'Hero',
  'Colores',
  'Tipografía',
  'Fotografías',
  'Categorías',
  'Cards de productos',
  'Ficha de producto',
  'Navegación',
  'Promociones',
  'Footer',
  'Sensación general'
];

interface ReferenceCardItemProps {
  type: 'positive' | 'negative' | 'competitor';
  items: (SiteReference | CompetitorReference | any)[];
  onChange: (updated: any[]) => void;
}

export function ReferenceCardItem({ type, items, onChange }: ReferenceCardItemProps) {
  const handleAdd = () => {
    if (items.length >= 5) return;
    const newId = `ref_${Date.now()}`;
    if (type === 'competitor') {
      onChange([
        ...items,
        { id: newId, companyName: '', url: '', whatTheyDoWell: '', whatWeCouldDoBetter: '', isBenchmark: false }
      ]);
    } else if (type === 'negative') {
      onChange([...items, { id: newId, url: '', comments: '' }]);
    } else {
      onChange([...items, { id: newId, url: '', likedElements: ['Header', 'Hero'], comments: '' }]);
    }
  };

  const handleUpdate = (index: number, field: string, val: any) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: val };
    onChange(updated);
  };

  const handleRemove = (index: number) => {
    onChange(items.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={item.id || idx} className="p-5 bg-white border border-zinc-200 rounded-2xl shadow-xs space-y-4 relative">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-900">
              {type === 'competitor' ? `Competidor #${idx + 1}` : type === 'negative' ? `Referencia Negativa #${idx + 1}` : `Referencia Inspiracional #${idx + 1}`}
            </span>

            <button
              type="button"
              onClick={() => handleRemove(idx)}
              className="p-1.5 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-lg cursor-pointer transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          {type === 'competitor' ? (
            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-zinc-600 font-bold mb-1">Nombre Empresa</label>
                  <input
                    type="text"
                    value={item.companyName || ''}
                    onChange={(e) => handleUpdate(idx, 'companyName', e.target.value)}
                    placeholder="Ej: MercadoLibre / Marca X"
                    className="w-full px-3 py-2 border border-zinc-200 rounded-xl bg-zinc-50"
                  />
                </div>
                <div>
                  <label className="block text-zinc-600 font-bold mb-1">URL del Sitio</label>
                  <input
                    type="url"
                    value={item.url || ''}
                    onChange={(e) => handleUpdate(idx, 'url', e.target.value)}
                    placeholder="https://..."
                    className="w-full px-3 py-2 border border-zinc-200 rounded-xl bg-zinc-50 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-600 font-bold mb-1">¿Qué hacen bien?</label>
                <textarea
                  value={item.whatTheyDoWell || ''}
                  onChange={(e) => handleUpdate(idx, 'whatTheyDoWell', e.target.value)}
                  placeholder="Fortalezas visuales o comerciales..."
                  rows={2}
                  className="w-full px-3 py-2 border border-zinc-200 rounded-xl bg-zinc-50"
                />
              </div>

              <div>
                <label className="block text-zinc-600 font-bold mb-1">¿Qué podríamos hacer mejor?</label>
                <textarea
                  value={item.whatWeCouldDoBetter || ''}
                  onChange={(e) => handleUpdate(idx, 'whatWeCouldDoBetter', e.target.value)}
                  placeholder="Oportunidades de diferenciación..."
                  rows={2}
                  className="w-full px-3 py-2 border border-zinc-200 rounded-xl bg-zinc-50"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id={`benchmark-${idx}`}
                  checked={item.isBenchmark || false}
                  onChange={(e) => handleUpdate(idx, 'isBenchmark', e.target.checked)}
                  className="w-4 h-4 text-purple-600 rounded cursor-pointer"
                />
                <label htmlFor={`benchmark-${idx}`} className="font-bold text-zinc-800 cursor-pointer">
                  ¿Es considerado el referente N° 1 del mercado?
                </label>
              </div>
            </div>
          ) : type === 'negative' ? (
            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-zinc-600 font-bold mb-1">URL del Sitio no deseado</label>
                <input
                  type="url"
                  value={item.url || ''}
                  onChange={(e) => handleUpdate(idx, 'url', e.target.value)}
                  placeholder="https://..."
                  className="w-full px-3 py-2 border border-zinc-200 rounded-xl bg-zinc-50 font-mono"
                />
              </div>
              <div>
                <label className="block text-zinc-600 font-bold mb-1">¿Por qué NO representa a la marca?</label>
                <textarea
                  value={item.comments || ''}
                  onChange={(e) => handleUpdate(idx, 'comments', e.target.value)}
                  placeholder="Ej: Colores desordenados, exceso de texto, se ve anticuado..."
                  rows={2}
                  className="w-full px-3 py-2 border border-zinc-200 rounded-xl bg-zinc-50"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-zinc-600 font-bold mb-1">URL del Sitio de Referencia</label>
                <input
                  type="url"
                  value={item.url || ''}
                  onChange={(e) => handleUpdate(idx, 'url', e.target.value)}
                  placeholder="https://..."
                  className="w-full px-3 py-2 border border-zinc-200 rounded-xl bg-zinc-50 font-mono"
                />
              </div>

              <div>
                <label className="block text-zinc-600 font-bold mb-2">¿Qué te gusta específicamente?</label>
                <ChipSelector
                  options={REFERENCE_ELEMENTS}
                  selected={item.likedElements || []}
                  onChange={(updated) => handleUpdate(idx, 'likedElements', updated)}
                />
              </div>

              <div>
                <label className="block text-zinc-600 font-bold mb-1">Comentarios y Observaciones</label>
                <textarea
                  value={item.comments || ''}
                  onChange={(e) => handleUpdate(idx, 'comments', e.target.value)}
                  placeholder="Detalles sobre por qué te gusta esta referencia..."
                  rows={2}
                  className="w-full px-3 py-2 border border-zinc-200 rounded-xl bg-zinc-50"
                />
              </div>
            </div>
          )}
        </div>
      ))}

      {items.length < 5 && (
        <button
          type="button"
          onClick={handleAdd}
          className="w-full py-3 bg-zinc-50 hover:bg-zinc-100 border border-dashed border-zinc-300 hover:border-purple-400 rounded-2xl text-xs font-bold text-zinc-700 flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4 text-purple-600" />
          <span>Añadir {type === 'competitor' ? 'Competidor' : type === 'negative' ? 'Referencia Negativa' : 'Referencia Inspiracional'} ({items.length}/5)</span>
        </button>
      )}
    </div>
  );
}
