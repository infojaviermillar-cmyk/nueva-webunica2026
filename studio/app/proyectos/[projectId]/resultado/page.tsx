'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { SimulationRenderer } from '../../../../components/simulation-renderer';
import { 
  Bot, 
  ArrowLeft, 
  Edit3, 
  Download, 
  Check, 
  Share2 
} from 'lucide-react';
import Link from 'next/link';

export default function ResultadoPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params?.projectId as string;
  const [config, setConfig] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const savedConfig = localStorage.getItem(`project_config_${projectId}`);
    if (savedConfig) {
      setConfig(JSON.parse(savedConfig));
    } else {
      router.push(`/proyectos/${projectId}/personalizar`);
    }
  }, [projectId, router]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!config) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
        <div className="animate-pulse text-indigo-600">Cargando resultado...</div>
      </div>
    );
  }

  // Encontrar la paleta para aplicar estilos decorativos en la UI del resultado
  const cardStyle = 'bg-white rounded-3xl border border-slate-100 shadow-sm';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      {/* Navbar Minimalista */}
      <header className="bg-white border-b border-slate-200 h-20 px-6 flex items-center justify-between shrink-0 z-20 shadow-sm">
        <div className="flex items-center gap-4">
          <Link 
            href={`/proyectos/${projectId}/personalizar`}
            className="text-slate-500 hover:text-slate-950 p-2 rounded-full hover:bg-slate-100 transition-colors flex items-center gap-2 text-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al Editor
          </Link>
          <span className="h-6 w-[1px] bg-slate-200" />
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-indigo-600" />
            <span className="font-bold text-lg">Commerce Studio</span>
            <span className="text-xs text-slate-400 font-semibold uppercase">
              / Propuesta Guardada: {projectId}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={handleCopyLink}
            className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl flex items-center gap-2 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" /> ¡Enlace Copiado!
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" /> Compartir Propuesta
              </>
            )}
          </button>
          
          <Link 
            href={`/proyectos/${projectId}/personalizar`}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl flex items-center gap-2 transition-all shadow-md shadow-indigo-600/10"
          >
            <Edit3 className="w-4 h-4" /> Editar Propuesta
          </Link>
        </div>
      </header>

      {/* Main Preview Container */}
      <main className="flex-1 overflow-y-auto p-8 flex justify-center items-start">
        <div className="bg-white border border-slate-200 shadow-2xl overflow-hidden rounded-[2.5rem] w-full max-w-6xl min-h-[80vh]">
          <SimulationRenderer
            wireframeId={config.selectedWireframe}
            colors={config.colors}
            fonts={config.fonts}
            buttonRadius={config.buttonRadius}
            shadow={config.shadow}
            cardStyle={cardStyle}
          />
        </div>
      </main>
    </div>
  );
}
