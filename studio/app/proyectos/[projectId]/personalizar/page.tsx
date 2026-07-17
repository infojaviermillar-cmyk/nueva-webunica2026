'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useCustomizerStore, DESIGN_STYLES } from '../../../../store/useCustomizerStore';
import { 
  Bot, 
  ArrowLeft, 
  Smartphone, 
  Tablet as TabletIcon, 
  Monitor, 
  Maximize2, 
  Save, 
  Eye, 
  Settings, 
  RotateCcw,
  Sparkles,
  Palette,
  Type,
  Layout,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';

const GOOGLE_FONTS = [
  'Inter',
  'Poppins',
  'Montserrat',
  'Open Sans',
  'Roboto',
  'Lato',
  'DM Sans',
  'Manrope',
  'Playfair Display',
  'Cormorant Garamond',
  'Oswald',
  'Bebas Neue',
  'Space Grotesk',
  'Archivo',
  'Nunito Sans',
  'Merriweather'
];

export default function PersonalizarPage() {
  const router = useRouter();
  const params = useParams();
  const projectId = params?.projectId as string;
  const store = useCustomizerStore();

  const [activeViewTab, setActiveViewTab] = useState<'simulation' | 'original'>('simulation');
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving' | 'error' | 'idle'>('idle');
  const [user, setUser] = useState<{ email: string; role: string } | null>(null);

  const saveTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Cargar configuración guardada y usuario
  useEffect(() => {
    const storedUser = localStorage.getItem('studio_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push('/login');
    }

    const savedConfig = localStorage.getItem(`project_config_${projectId}`);
    if (savedConfig) {
      store.loadConfig(JSON.parse(savedConfig));
    }
  }, [projectId]);

  // Simulación de Autosave con Debounce de 1.5s
  useEffect(() => {
    // Evitar que guarde en la carga inicial
    if (store.selectedWireframe === 'home-simple' && store.selectedStyleId === 'ecommerce' && store.selectedPaletteId === 'ecom-stripe' && saveStatus === 'idle') {
      return;
    }

    setSaveStatus('saving');
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);

    saveTimerRef.current = setTimeout(() => {
      try {
        const configToSave = {
          projectId,
          selectedWireframe: store.selectedWireframe,
          selectedStyle: store.selectedStyleId,
          selectedPalette: store.selectedPaletteId,
          colors: store.colors,
          fonts: store.fonts,
          buttonRadius: store.buttonRadius,
          shadow: store.shadow
        };
        localStorage.setItem(`project_config_${projectId}`, JSON.stringify(configToSave));
        setSaveStatus('saved');
      } catch (err) {
        setSaveStatus('error');
      }
    }, 1500);

    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
  }, [
    store.selectedWireframe,
    store.selectedStyleId,
    store.selectedPaletteId,
    store.colors,
    store.fonts,
    store.buttonRadius,
    store.shadow,
    projectId
  ]);

  const handleManualSave = () => {
    setSaveStatus('saving');
    setTimeout(() => {
      try {
        const configToSave = {
          projectId,
          selectedWireframe: store.selectedWireframe,
          selectedStyle: store.selectedStyleId,
          selectedPalette: store.selectedPaletteId,
          colors: store.colors,
          fonts: store.fonts,
          buttonRadius: store.buttonRadius,
          shadow: store.shadow
        };
        localStorage.setItem(`project_config_${projectId}`, JSON.stringify(configToSave));
        setSaveStatus('saved');
        router.push(`/proyectos/${projectId}/resultado`);
      } catch (err) {
        setSaveStatus('error');
      }
    }, 800);
  };

  const handleReset = () => {
    store.setStyle('ecommerce');
  };

  // Obtener estilo actualmente seleccionado
  const currentStyle = DESIGN_STYLES.find(s => s.id === store.selectedStyleId) || DESIGN_STYLES[0];

  // Determinar ruta de imagen SVG original
  const originalSvgPath = `/wireframes/maxxgo/${store.selectedWireframe}.svg`;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans flex flex-col overflow-hidden h-screen">
      
      {/* Header bar */}
      <header className="bg-white border-b border-slate-200 h-20 px-6 flex items-center justify-between shrink-0 z-20 shadow-sm">
        <div className="flex items-center gap-4">
          <Link 
            href={`/proyectos/${projectId}/wireframes`}
            className="text-slate-500 hover:text-slate-950 p-2 rounded-full hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <span className="h-6 w-[1px] bg-slate-200" />
          <div className="flex items-center gap-3">
            <Bot className="w-5 h-5 text-indigo-600" />
            <span className="font-bold text-lg">Commerce Studio</span>
            <span className="text-xs text-slate-400 font-semibold uppercase">
              / {projectId} / {store.selectedWireframe.replace('-', ' ')}
            </span>
          </div>
        </div>

        {/* Save status feedback */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            {saveStatus === 'saving' && (
              <span className="text-xs text-amber-600 font-bold flex items-center gap-1.5 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> Guardando...
              </span>
            )}
            {saveStatus === 'saved' && (
              <span className="text-xs text-emerald-600 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Cambios guardados
              </span>
            )}
            {saveStatus === 'error' && (
              <span className="text-xs text-rose-600 font-bold flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> Error al guardar
              </span>
            )}
          </div>

          <button 
            onClick={handleManualSave}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl flex items-center gap-2 cursor-pointer shadow-md shadow-slate-900/10"
          >
            <Save className="w-4 h-4" /> Guardar Propuesta
          </button>
        </div>
      </header>

      {/* Main Workspace split */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* LEFT PANEL: CONFIGURATOR */}
        <aside className="w-[360px] bg-white border-r border-slate-200 overflow-y-auto flex flex-col px-6 py-8 shrink-0">
          <div className="space-y-8">
            
            {/* 1. Wireframe seleccionado */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                <Layout className="w-4 h-4" /> 1. Wireframe Portada
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'home-completo', label: 'Completo' },
                  { id: 'home-alternativo', label: 'Alternativo' },
                  { id: 'home-simple', label: 'Simple' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => store.setWireframe(item.id)}
                    className={`py-2 px-1 text-center rounded-xl text-[10px] font-bold border transition-all truncate cursor-pointer ${
                      store.selectedWireframe === item.id 
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              {/* Páginas complementarias */}
              <div className="grid grid-cols-3 gap-2 mt-2">
                {[
                  { id: 'categoria', label: 'Categoría' },
                  { id: 'producto', label: 'Producto' },
                  { id: 'carrito', label: 'Carrito' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => store.setWireframe(item.id)}
                    className={`py-2 px-1 text-center rounded-xl text-[10px] font-bold border transition-all truncate cursor-pointer ${
                      store.selectedWireframe === item.id 
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Estilo visual */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> 2. Estilo Visual
              </h3>
              <select 
                value={store.selectedStyleId}
                onChange={(e) => store.setStyle(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 focus:outline-none focus:border-indigo-500"
              >
                {DESIGN_STYLES.map((style) => (
                  <option key={style.id} value={style.id}>{style.name}</option>
                ))}
              </select>
              <p className="text-[11px] text-slate-400 mt-2 italic px-1">{currentStyle.description}</p>
            </div>

            {/* 3. Paleta de colores */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                <Palette className="w-4 h-4" /> 3. Paleta Inicial
              </h3>
              <div className="space-y-2">
                {currentStyle.palettes.map((pal) => (
                  <button
                    key={pal.id}
                    onClick={() => store.setPalette(pal.id)}
                    className={`w-full p-3 rounded-xl border flex items-center justify-between text-left transition-all cursor-pointer ${
                      store.selectedPaletteId === pal.id 
                        ? 'border-indigo-600 bg-indigo-50/50' 
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xs font-bold text-slate-700">{pal.name}</span>
                    <div className="flex gap-1">
                      <span className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: pal.primary }} />
                      <span className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: pal.secondary }} />
                      <span className="w-3.5 h-3.5 rounded-full border border-black/10" style={{ backgroundColor: pal.background }} />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Colores HEX */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                <Settings className="w-4 h-4" /> 4. Colores HEX
              </h3>
              <div className="space-y-4">
                {[
                  { key: 'primary' as const, label: 'Color Principal' },
                  { key: 'secondary' as const, label: 'Color Secundario' },
                  { key: 'accent' as const, label: 'Acento' },
                  { key: 'background' as const, label: 'Fondo' },
                  { key: 'surface' as const, label: 'Superficie' },
                  { key: 'text' as const, label: 'Texto Principal' },
                  { key: 'textMuted' as const, label: 'Texto Secundario' },
                  { key: 'border' as const, label: 'Bordes' }
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold text-slate-600">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <div className="relative flex items-center">
                        <input 
                          type="color"
                          value={store.colors[item.key]}
                          onChange={(e) => store.setColor(item.key, e.target.value)}
                          className="w-8 h-8 rounded-lg border border-slate-200 cursor-pointer overflow-hidden opacity-0 absolute"
                        />
                        <div 
                          className="w-8 h-8 rounded-lg border border-slate-200 pointer-events-none"
                          style={{ backgroundColor: store.colors[item.key] }}
                        />
                      </div>
                      <input 
                        type="text"
                        value={store.colors[item.key]}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (val.startsWith('#') && val.length <= 7) {
                            store.setColor(item.key, val);
                          }
                        }}
                        className="w-20 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5 text-center text-xs font-mono font-semibold focus:outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Fuente principal */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                <Type className="w-4 h-4" /> 5. Fuente Títulos
              </h3>
              <select 
                value={store.fonts.primary}
                onChange={(e) => store.setFont('primary', e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 focus:outline-none focus:border-indigo-500"
              >
                {GOOGLE_FONTS.map((font) => (
                  <option key={font} value={font}>{font}</option>
                ))}
              </select>
            </div>

            {/* 6. Fuente secundaria */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                <Type className="w-4 h-4" /> 6. Fuente Cuerpo
              </h3>
              <select 
                value={store.fonts.secondary}
                onChange={(e) => store.setFont('secondary', e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 focus:outline-none focus:border-indigo-500"
              >
                {GOOGLE_FONTS.map((font) => (
                  <option key={font} value={font}>{font}</option>
                ))}
              </select>
            </div>

            {/* Reset button */}
            <div className="pt-4 border-t border-slate-100">
              <button 
                onClick={handleReset}
                className="w-full py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <RotateCcw className="w-4 h-4" /> Restaurar Estilo Base
              </button>
            </div>

          </div>
        </aside>

        {/* RIGHT PREVIEW WORKSPACE */}
        <section className="flex-1 flex flex-col bg-slate-100 overflow-hidden">
          
          {/* Top toolbar */}
          <div className="bg-white border-b border-slate-200 px-6 h-14 flex items-center justify-between shrink-0">
            {/* View tabs */}
            <div className="flex gap-1 bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setActiveViewTab('simulation')}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  activeViewTab === 'simulation' 
                    ? 'bg-white text-slate-900 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Simulación Interactiva
              </button>
              <button
                onClick={() => setActiveViewTab('original')}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  activeViewTab === 'original' 
                    ? 'bg-white text-slate-900 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Referencia Original
              </button>
            </div>

            {/* Device View resize (Only visible for interactive simulation) */}
            {activeViewTab === 'simulation' && (
              <div className="flex gap-2">
                {[
                  { id: 'desktop' as const, icon: Monitor, label: '1440px' },
                  { id: 'tablet' as const, icon: TabletIcon, label: '768px' },
                  { id: 'mobile' as const, icon: Smartphone, label: '390px' }
                ].map((device) => (
                  <button
                    key={device.id}
                    onClick={() => setDeviceView(device.id)}
                    className={`p-2 rounded-lg border transition-all flex items-center gap-2 cursor-pointer ${
                      deviceView === device.id 
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-600' 
                        : 'border-slate-200 text-slate-400 hover:text-slate-800 bg-white'
                    }`}
                    title={device.label}
                  >
                    <device.icon className="w-4 h-4" />
                    <span className="text-[10px] font-bold">{device.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Interactive view container */}
          <div className="flex-1 overflow-y-auto p-8 flex justify-center items-start">
            {activeViewTab === 'simulation' ? (
              <div 
                className="transition-all duration-300 bg-white border border-slate-200 shadow-xl overflow-hidden rounded-[2.5rem] flex flex-col"
                style={{
                  width: deviceView === 'desktop' ? '100%' : deviceView === 'tablet' ? '768px' : deviceView === 'mobile' ? '390px' : '100%',
                  maxWidth: '100%',
                  height: '80vh'
                }}
              >
                <iframe 
                  src={`/proyectos/${projectId}/preview`}
                  className="w-full flex-1 border-0"
                />
              </div>
            ) : (
              <div className="bg-white border border-slate-200 shadow-xl rounded-[2.5rem] p-4 max-w-4xl w-full">
                <iframe 
                  src={originalSvgPath} 
                  className="w-full h-[70vh] border-0"
                />
              </div>
            )}
          </div>

        </section>

      </div>
    </div>
  );
}
