"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { SimulationRenderer } from '../../../../components/simulation-renderer';
import { DESIGN_STYLES } from '../../../../store/useCustomizerStore';

export default function PreviewPage() {
  const params = useParams();
  const projectId = params?.projectId as string;
  const [config, setConfig] = useState<any>(null);

  // REGLA DE HOOKS: todos los useEffect deben estar ANTES de cualquier return condicional

  // 1. Escuchar actualizaciones desde el padre por postMessage
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'UPDATE_CONFIG') {
        setConfig(event.data.config);
      }
    };

    window.addEventListener('message', handleMessage);

    // Solicitar configuración inicial al padre
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: 'REQUEST_INITIAL_CONFIG' }, '*');
    }

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // 2. Fallback de localStorage (para cuando se abre directamente sin iframe)
  useEffect(() => {
    try {
      const savedConfig = localStorage.getItem(`project_config_${projectId}`);
      if (savedConfig) {
        setConfig(JSON.parse(savedConfig));
      }
    } catch (err) {
      console.warn("localStorage no disponible en iframe, usando postMessage.");
    }
  }, [projectId]);

  // 3. Reportar la altura real del documento al padre (siempre presente, condición interna)
  useEffect(() => {
    if (!config) return;

    const sendHeight = () => {
      const height = document.documentElement.scrollHeight || document.body.scrollHeight;
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({ type: 'PREVIEW_HEIGHT', height }, '*');
      }
    };

    const timer = setTimeout(sendHeight, 300);
    const resizeObserver = new ResizeObserver(sendHeight);
    resizeObserver.observe(document.body);

    return () => {
      clearTimeout(timer);
      resizeObserver.disconnect();
    };
  }, [config]);

  // --- RETURN CONDICIONAL: siempre después de todos los hooks ---

  if (!config) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center font-sans">
        <div className="animate-pulse text-indigo-600 font-medium">Cargando simulación...</div>
      </div>
    );
  }

  const currentStyle = DESIGN_STYLES.find(s => s.id === config.selectedStyle) || DESIGN_STYLES[0];

  return (
    <SimulationRenderer
      wireframeId={config.selectedWireframe}
      colors={config.colors}
      fonts={config.fonts}
      buttonRadius={config.buttonRadius}
      shadow={config.shadow}
      cardStyle={currentStyle.cardStyle}
      heroBgImage={config.heroBgImage ?? null}
      heroProductImage={config.heroProductImage ?? null}
    />
  );
}
