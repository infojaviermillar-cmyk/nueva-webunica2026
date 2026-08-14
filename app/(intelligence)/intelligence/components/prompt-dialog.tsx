'use client';

import { useState } from 'react';
import {
  Sparkles,
  Copy,
  Check,
  X,
  Bot,
  Terminal,
  ArrowRight,
  Code2,
} from 'lucide-react';

export interface PromptPayload {
  title: string;
  category?: string;
  priority?: string;
  impact?: string;
  effort?: string;
  problem?: string;
  recommendation?: string;
  affectedUrls?: string[];
  extraContext?: string;
}

export function generateAIPrompt(payload: PromptPayload): string {
  const {
    title,
    category = 'On-Page',
    priority = 'Alta',
    impact = 'Alto',
    effort = 'Medio',
    problem = '',
    recommendation = '',
    affectedUrls = [],
    extraContext = '',
  } = payload;

  const urlSection =
    affectedUrls.length > 0
      ? `\n### 🔗 URLs o Rutas Afectadas (${affectedUrls.length})\n` +
        affectedUrls.map((u) => `- \`${u}\``).join('\n')
      : '';

  const extraSection = extraContext
    ? `\n### 📝 Información Adicional de Diagnóstico\n${extraContext}\n`
    : '';

  return `# TAREA: Implementar Solución Técnica para WebUnica

Actúa como un Desarrollador Web Fullstack y Especialista en SEO Técnico Senior.
Necesito que resuelvas el siguiente requerimiento detectado en la auditoría del sitio:

---

## 🎯 Objetivo
**${title}**

## 📋 Diagnóstico y Especificaciones
- **Categoría:** ${category}
- **Prioridad:** ${priority}
- **Impacto estimado:** ${impact} | **Esfuerzo:** ${effort}
- **Problema detectado:** ${problem || 'No especificado'}
- **Recomendación sugerida:** ${recommendation || 'Aplicar mejores prácticas'}
${urlSection}
${extraSection}
---

## 🛠 Instrucciones de Implementación
1. **Código exacto:** Proporciona el código TypeScript/TSX, CSS o configuración de Next.js listo para ser copiado o aplicado directamente.
2. **Optimización de etiquetas/contenido:** Si involucra tags HTML (Title, H1, Meta Description, Open Graph o imágenes), redacta las etiquetas optimizadas exactas para cada URL afectada.
3. **Paso a paso:** Explica brevemente en qué archivo(s) del proyecto debe ubicarse cada cambio.
4. **Verificación:** Indica cómo validar que el problema ha quedado 100% resuelto.`;
}

interface PromptButtonProps {
  payload: PromptPayload;
  variant?: 'primary' | 'secondary' | 'compact';
  label?: string;
}

export default function PromptButton({
  payload,
  variant = 'secondary',
  label = 'Generar Prompt IA',
}: PromptButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const promptText = generateAIPrompt(payload);

  function handleDirectCopy(e: React.MouseEvent) {
    e.stopPropagation();
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  function handleOpenModal(e: React.MouseEvent) {
    e.stopPropagation();
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex items-center gap-1.5">
        {/* Quick 1-click Copy button */}
        <button
          onClick={handleDirectCopy}
          className={`inline-flex items-center gap-1.5 rounded-xl font-medium text-xs transition-all ${
            copied
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
              : variant === 'primary'
              ? 'bg-violet-600 hover:bg-violet-500 text-white border border-violet-500 shadow-md shadow-violet-600/20'
              : 'bg-violet-500/10 hover:bg-violet-500/20 text-violet-300 hover:text-white border border-violet-500/25 hover:border-violet-500/40'
          } ${variant === 'compact' ? 'px-2.5 py-1 text-[11px]' : 'px-3 py-1.5'}`}
          title="Copiar prompt listo para pegar al asistente de IA"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>¡Prompt copiado!</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              <span>{label}</span>
            </>
          )}
        </button>

        {/* View/Inspect prompt modal trigger */}
        <button
          onClick={handleOpenModal}
          className="p-1.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors"
          title="Ver y editar prompt antes de copiar"
        >
          <Code2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Modal Dialog */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-zinc-900 border border-zinc-700/80 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/60">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Prompt para Asistente IA</h3>
                  <p className="text-zinc-500 text-xs">Listo para copiar y pegar en el chat</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body: Prompt Codebox */}
            <div className="p-4 overflow-y-auto flex-1 bg-zinc-950/40">
              <div className="relative">
                <pre className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 font-mono text-xs leading-relaxed whitespace-pre-wrap select-all">
                  {promptText}
                </pre>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-zinc-800 bg-zinc-950/60 flex items-center justify-between gap-3">
              <p className="text-[11px] text-zinc-500 hidden sm:block">
                💡 Copia este prompt y pégalo directamente en este chat para implementar la solución.
              </p>
              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-3.5 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium transition-colors"
                >
                  Cerrar
                </button>
                <button
                  onClick={handleDirectCopy}
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold shadow-lg shadow-violet-600/30 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>¡Copiado con Éxito!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar Prompt</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
