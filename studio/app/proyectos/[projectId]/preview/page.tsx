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

    const tempStyleTags: HTMLStyleElement[] = [];
    const hiddenLinks: { parent: Node; next: Node | null; element: Element }[] = [];
    const hiddenStyles: { parent: Node; next: Node | null; element: Element }[] = [];

    // Helper to recursively clean CSS rules (handles @media and grouping rules correctly)
    const cleanRules = (rules: CSSRuleList): string => {
      let cleanText = "";
      for (let i = 0; i < rules.length; i++) {
        const rule = rules[i];
        try {
          // If it is a grouping/media rule, clean its child rules recursively
          if ((rule as any).cssRules) {
            const childrenText = cleanRules((rule as any).cssRules);
            const header = rule.cssText.split('{')[0];
            cleanText += `${header} {\n${childrenText}\n}\n`;
          } else {
            const text = rule.cssText;
            if (text && !(
              text.includes('color-mix') ||
              text.includes('light-dark') ||
              text.includes('oklch') ||
              text.includes('rgb(from') ||
              text.includes('rgba(from') ||
              text.includes('hsl(from') ||
              text.includes('hsla(from')
            )) {
              cleanText += text + "\n";
            }
          }
        } catch (e) {
          // Ignore individual rule access errors
        }
      }
      return cleanText;
    };

    try {
      const html2canvasModule = await import('html2canvas');
      const html2canvas = html2canvasModule.default || html2canvasModule;

      const jsPDFModule = await import('jspdf');
      const jsPDF = jsPDFModule.jsPDF || jsPDFModule.default || jsPDFModule;

      const element = document.getElementById('simulation-capture');
      if (!element) throw new Error("No se encontró el elemento simulador (#simulation-capture)");

      // 1. Process and swap all link tags
      const linkElements = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
      for (const link of linkElements) {
        try {
          const sheet = (link as any).sheet as CSSStyleSheet;
          if (!sheet) continue;
          const rules = sheet.cssRules || sheet.rules;
          if (!rules) continue;

          const cleanedCss = cleanRules(rules);
          
          const styleTag = document.createElement('style');
          styleTag.type = 'text/css';
          styleTag.innerHTML = cleanedCss;
          document.head.appendChild(styleTag);
          tempStyleTags.push(styleTag);

          const parent = link.parentNode;
          if (parent) {
            const next = link.nextSibling;
            hiddenLinks.push({ parent, next, element: link });
            parent.removeChild(link);
          }
        } catch (e) {
          // Keep the stylesheet as is if we can't access it due to CORS (usually Google Fonts)
        }
      }

      // 2. Process and swap all existing inline style tags (e.g. Next.js injected styles)
      const styleElements = Array.from(document.querySelectorAll('style'));
      for (const style of styleElements) {
        // Skip our own temp styles
        if (tempStyleTags.includes(style)) continue;

        try {
          const sheet = style.sheet as CSSStyleSheet;
          if (!sheet) continue;
          const rules = sheet.cssRules || sheet.rules;
          if (!rules) continue;

          const cleanedCss = cleanRules(rules);

          const styleTag = document.createElement('style');
          styleTag.type = 'text/css';
          styleTag.innerHTML = cleanedCss;
          document.head.appendChild(styleTag);
          tempStyleTags.push(styleTag);

          const parent = style.parentNode;
          if (parent) {
            const next = style.nextSibling;
            hiddenStyles.push({ parent, next, element: style });
            parent.removeChild(style);
          }
        } catch (e) {
          // Ignore
        }
      }

      // Wait a moment for layout to settle without the old style rules
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
      // Restore all original link tags
      for (const { parent, next, element } of hiddenLinks) {
        try {
          parent.insertBefore(element, next);
        } catch (e) {}
      }
      // Restore all original style tags
      for (const { parent, next, element } of hiddenStyles) {
        try {
          parent.insertBefore(element, next);
        } catch (e) {}
      }
      // Remove temporary styles
      for (const styleTag of tempStyleTags) {
        try {
          styleTag.remove();
        } catch (e) {}
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
