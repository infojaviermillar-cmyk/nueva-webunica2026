"use client";

import React, { useState } from 'react';
import { UploadCloud, File, Trash2, CheckCircle2 } from 'lucide-react';

interface FileUploadBoxProps {
  label: string;
  allowedFormats: string;
  files: string[];
  onChange: (files: string[]) => void;
}

export function FileUploadBox({ label, allowedFormats, files, onChange }: FileUploadBoxProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleSimulatedUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFileNames = Array.from(e.target.files).map(f => f.name);
      onChange([...files, ...newFileNames]);
    }
  };

  const handleRemove = (name: string) => {
    onChange(files.filter(f => f !== name));
  };

  return (
    <div className="space-y-3">
      <label className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 block">
        {label}
      </label>

      {/* Drag and drop zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const newNames = Array.from(e.dataTransfer.files).map(f => f.name);
            onChange([...files, ...newNames]);
          }
        }}
        className={`p-6 border-2 border-dashed rounded-2xl text-center transition-all relative cursor-pointer ${
          isDragging
            ? 'border-purple-600 bg-purple-50/80 scale-[1.01]'
            : 'border-zinc-200 bg-zinc-50 hover:border-purple-300 hover:bg-purple-50/20'
        }`}
      >
        <input
          type="file"
          multiple
          onChange={handleSimulatedUpload}
          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
        />
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-purple-600 shadow-xs">
            <UploadCloud className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold text-zinc-900">
            Haz clic o arrastra tus archivos aquí
          </span>
          <span className="text-[11px] text-zinc-400 font-mono">
            Formatos soportados: {allowedFormats} (Máx. 25MB por archivo)
          </span>
        </div>
      </div>

      {/* Uploaded Files List */}
      {files.length > 0 && (
        <div className="space-y-2 pt-1">
          {files.map((file) => (
            <div
              key={file}
              className="p-3 bg-white border border-zinc-200 rounded-xl flex items-center justify-between shadow-xs text-xs"
            >
              <div className="flex items-center gap-2.5">
                <File className="w-4 h-4 text-purple-600 shrink-0" />
                <span className="font-medium text-zinc-800 truncate max-w-xs">{file}</span>
                <span className="inline-flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-100 font-mono px-2 py-0.5 rounded">
                  <CheckCircle2 className="w-3 h-3" /> Adjuntado
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleRemove(file)}
                className="p-1 text-zinc-400 hover:text-red-600 rounded cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
