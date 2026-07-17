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
      if (event.data) {
        if (event.data.type === 'UPDATE_CONFIG') {
          setConfig(event.data.config);
        } else if (event.data.type === 'DOWNLOAD_PDF') {
          handleDownloadPDF();
        }
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
  }, [config, projectId]); // Depend on config and projectId so PDF download has closure on correct values

  const handleDownloadPDF = async () => {
    if (window.parent && window.parent !== window) {
      window.parent.postMessage({ type: 'PDF_STATUS', status: 'generating' }, '*');
    }

    const cssBackups: any[] = [];

    try {
      const html2canvasModule = await import('html2canvas');
      const html2canvas = html2canvasModule.default || html2canvasModule;

      const jsPDFModule = await import('jspdf');
      const jsPDF = jsPDFModule.jsPDF || jsPDFModule.default || jsPDFModule;

      const element = document.getElementById('simulation-capture');
      if (!element) throw new Error("No se encontró el elemento simulador (#simulation-capture)");

      // Temporarily remove unsupported CSS color functions to prevent html2canvas parsing crashes
      for (let i = 0; i < document.styleSheets.length; i++) {
        const sheet = document.styleSheets[i];
        try {
          const rules = sheet.cssRules || sheet.rules;
          if (!rules) continue;
          const backupRules = [];
          for (let j = rules.length - 1; j >= 0; j--) {
            const rule = rules[j];
            try {
              if (rule.cssText && (
                rule.cssText.includes('color-mix') ||
                rule.cssText.includes('light-dark') ||
                rule.cssText.includes('oklch') ||
                rule.cssText.includes('from')
              )) {
                backupRules.push({ index: j, cssText: rule.cssText });
                sheet.deleteRule(j);
              }
            } catch (err) {
              // Ignore rule failure
            }
          }
          if (backupRules.length > 0) {
            cssBackups.push({ sheet, backupRules });
          }
        } catch (e) {
          // Ignore stylesheet rules access errors (e.g. cross-origin fonts)
        }
      }

      // Wait a moment for any assets/fonts to settle
      await new Promise((resolve) => setTimeout(resolve, 800));

      const canvas = await html2canvas(element, {
        useCORS: true,
        allowTaint: true,
        scale: 1.5, // Good quality without making file size humongous
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.9); // Use JPEG with 90% quality for smaller PDF file size
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 size width
      const pageHeight = 297; // A4 size height
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      // First page
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pageHeight;

      // Multi-page loop
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
        heightLeft -= pageHeight;
      }

      pdf.save(`wireframe-${config.selectedWireframe}-${projectId}-${Date.now()}.pdf`);
      
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({ type: 'PDF_STATUS', status: 'success' }, '*');
      }
    } catch (error: any) {
      console.error("Error generating PDF:", error);
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({ 
          type: 'PDF_STATUS', 
          status: 'error', 
          errorDetails: error?.message || String(error)
        }, '*');
      }
    } finally {
      // Restore deleted styles
      for (const backup of cssBackups) {
        const { sheet, backupRules } = backup;
        for (const rule of backupRules.reverse()) {
          try {
            sheet.insertRule(rule.cssText, rule.index);
          } catch (e) {
            // Ignore insert errors
          }
        }
      }
    }
  };

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
    <div id="simulation-capture" className="w-full bg-white relative">
      <SimulationRenderer
        wireframeId={config.selectedWireframe}
        colors={config.colors}
        fonts={config.fonts}
        buttonRadius={config.buttonRadius}
        shadow={config.shadow}
        cardStyle={currentStyle.cardStyle}
        heroBgImage={config.heroBgImage ?? null}
        heroProductImage={config.heroProductImage ?? null}
        productImages={config.productImages ?? [null, null, null, null, null]}
      />
    </div>
  );
}
