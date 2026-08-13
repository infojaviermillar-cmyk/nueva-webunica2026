'use client';

import { useState } from 'react';
import { Printer, Settings, Eye, EyeOff, Building2, UserCheck } from 'lucide-react';

interface ReportControlsProps {
  onConfigChange: (config: {
    agencyName: string;
    clientName: string;
    hideBranding: boolean;
  }) => void;
}

export default function ReportControls({ onConfigChange }: ReportControlsProps) {
  const [agencyName, setAgencyName] = useState('Webunica Intelligence');
  const [clientName, setClientName] = useState('');
  const [hideBranding, setHideBranding] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  function updateConfig(newAgency: string, newClient: string, newHide: boolean) {
    setAgencyName(newAgency);
    setClientName(newClient);
    setHideBranding(newHide);
    onConfigChange({ agencyName: newAgency, clientName: newClient, hideBranding: newHide });
  }

  function handlePrint() {
    window.print();
  }

  return (
    <div className="print:hidden mb-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm font-medium transition-colors"
          >
            <Settings className="w-4 h-4 text-violet-400" />
            Personalizar Marca Blanca
          </button>

          {hideBranding && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium">
              <EyeOff className="w-3 h-3" />
              Marca Blanca Activa
            </span>
          )}
        </div>

        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-all shadow-lg shadow-violet-600/20"
        >
          <Printer className="w-4 h-4" />
          Imprimir / Guardar en PDF
        </button>
      </div>

      {showSettings && (
        <div className="mt-4 pt-4 border-t border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-zinc-400 text-xs mb-1.5 font-medium">
              Nombre de la Agencia / Consultor
            </label>
            <div className="relative">
              <Building2 className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
              <input
                type="text"
                value={agencyName}
                onChange={(e) => updateConfig(e.target.value, clientName, hideBranding)}
                placeholder="Ej. Mi Agencia SEO"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-white text-sm focus:border-violet-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-zinc-400 text-xs mb-1.5 font-medium">
              Nombre del Cliente / Destinatario
            </label>
            <div className="relative">
              <UserCheck className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
              <input
                type="text"
                value={clientName}
                onChange={(e) => updateConfig(agencyName, e.target.value, hideBranding)}
                placeholder="Ej. Empresa Cliente SpA"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-white text-sm focus:border-violet-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-end pb-2">
            <label className="flex items-center gap-2.5 text-zinc-300 text-sm cursor-pointer select-none">
              <input
                type="checkbox"
                checked={hideBranding}
                onChange={(e) => updateConfig(agencyName, clientName, e.target.checked)}
                className="w-4 h-4 rounded bg-zinc-950 border-zinc-700 text-violet-600 focus:ring-violet-500 focus:ring-offset-zinc-900"
              />
              Ocultar marca Webunica (Marca Blanca pura)
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
