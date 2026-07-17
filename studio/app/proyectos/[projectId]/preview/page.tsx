"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { SimulationRenderer } from '../../../../components/simulation-renderer';
import { DESIGN_STYLES } from '../../../../store/useCustomizerStore';

export default function PreviewPage() {
  const params = useParams();
  const projectId = params?.projectId as string;
  const [config, setConfig] = useState<any>(null);

  useEffect(() => {
    const loadConfig = () => {
      const savedConfig = localStorage.getItem(`project_config_${projectId}`);
      if (savedConfig) {
        setConfig(JSON.parse(savedConfig));
      }
    };

    // Carga inicial
    loadConfig();

    // Escuchar cambios de storage (útil si está en otra ventana o pestaña)
    window.addEventListener('storage', loadConfig);

    // Sondeo de seguridad rápido (500ms) para actualizaciones en tiempo real en la misma pestaña
    const interval = setInterval(loadConfig, 500);

    return () => {
      window.removeEventListener('storage', loadConfig);
      clearInterval(interval);
    };
  }, [projectId]);

  if (!config) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center font-sans">
        <div className="animate-pulse text-indigo-600 font-medium">Cargando simulación...</div>
      </div>
    );
  }

  // Encontrar el estilo actual para obtener su cardStyle
  const currentStyle = DESIGN_STYLES.find(s => s.id === config.selectedStyle) || DESIGN_STYLES[0];

  return (
    <SimulationRenderer
      wireframeId={config.selectedWireframe}
      colors={config.colors}
      fonts={config.fonts}
      buttonRadius={config.buttonRadius}
      shadow={config.shadow}
      cardStyle={currentStyle.cardStyle}
    />
  );
}
