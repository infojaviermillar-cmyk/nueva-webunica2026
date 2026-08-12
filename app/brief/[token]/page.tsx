"use client";

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  ArrowRight, 
  Save, 
  CheckCircle2, 
  Sparkles, 
  FileText, 
  Clock, 
  HelpCircle,
  Plus,
  Trash2,
  ExternalLink,
  Shield,
  Layers,
  Edit3
} from 'lucide-react';
import { BriefStepper } from '@/components/brief/BriefStepper';
import { RadioCardGroup } from '@/components/brief/RadioCardGroup';
import { ChipSelector } from '@/components/brief/ChipSelector';
import { ScaleRangeSlider } from '@/components/brief/ScaleRangeSlider';
import { DragDropPrioritizer } from '@/components/brief/DragDropPrioritizer';
import { ColorPickerInput } from '@/components/brief/ColorPickerInput';
import { FileUploadBox } from '@/components/brief/FileUploadBox';
import { ReferenceCardItem } from '@/components/brief/ReferenceCardItem';
import { getBriefByToken, saveBrief, createEmptyBrief } from '@/lib/brief';
import { BriefProject } from '@/types/brief';

const STEPS = [
  { id: 1, title: 'Datos del Proyecto', shortTitle: 'Proyecto' },
  { id: 2, title: 'Identidad de Marca', shortTitle: 'Marca' },
  { id: 3, title: 'Personalidad de Marca', shortTitle: 'Personalidad' },
  { id: 4, title: 'Público Objetivo', shortTitle: 'Cliente' },
  { id: 5, title: 'Propuesta de Valor', shortTitle: 'Propuesta' },
  { id: 6, title: 'Dirección Visual', shortTitle: 'Estilo' },
  { id: 7, title: 'Referencias Inspiracionales', shortTitle: 'Referencias' },
  { id: 8, title: 'Análisis de Competencia', shortTitle: 'Competidores' },
  { id: 9, title: 'Prioridades del Home', shortTitle: 'Home' },
  { id: 10, title: 'Hero Principal', shortTitle: 'Hero' },
  { id: 11, title: 'Navegación & Categorías', shortTitle: 'Categorías' },
  { id: 12, title: 'Marcas Destacadas', shortTitle: 'Marcas' },
  { id: 13, title: 'Ficha de Producto', shortTitle: 'Producto' },
  { id: 14, title: 'Dudas & Barreras de Compra', shortTitle: 'Dudas' },
  { id: 15, title: 'Confianza & Conversión', shortTitle: 'Confianza' },
  { id: 16, title: 'Experiencia Mobile', shortTitle: 'Mobile' },
  { id: 17, title: 'Contenido e Inspiración', shortTitle: 'Contenido' },
  { id: 18, title: 'Primera Propuesta UX/UI', shortTitle: 'Pantallas' },
  { id: 19, title: 'Observaciones Adicionales', shortTitle: 'Notas' },
  { id: 20, title: 'Resumen Final & Generación', shortTitle: 'Resumen' },
];

const PERSONALITY_CHIPS = [
  'Moderna', 'Cercana', 'Profesional', 'Premium', 'Accesible', 'Técnica', 
  'Minimalista', 'Elegante', 'Divertida', 'Juvenil', 'Familiar', 'Especializada', 
  'Innovadora', 'Corporativa', 'Natural', 'Sofisticada', 'Enérgica', 'Confiable', 
  'Amigable', 'Inspiradora'
];

const STRENGTHS_CHIPS = [
  'Precio', 'Variedad', 'Marcas exclusivas', 'Stock', 'Calidad', 'Despacho rápido',
  'Atención', 'Experiencia', 'Garantía', 'Especialización', 'Soporte postventa',
  'Presencia física', 'Promociones', 'Productos exclusivos'
];

const PRODUCT_PAGE_ELEMENTS = [
  'Marca', 'Nombre', 'Fotografías', 'Videos', 'Precio', 'Precio oferta', 'Stock', 
  'SKU', 'Variantes', 'Tamaño', 'Peso', 'Características', 'Beneficios', 'Descripción', 
  'Ingredientes', 'Composición', 'Especificaciones técnicas', 'Instrucciones', 
  'Tabla de medidas', 'Despacho', 'Retiro', 'Garantía', 'Cambios y devoluciones', 
  'Medios de pago', 'Cuotas', 'Opiniones', 'Preguntas frecuentes', 'Productos relacionados', 
  'Productos complementarios'
];

const TRUST_ELEMENTS = [
  'Reseñas', 'Testimonios', 'Número de clientes', 'Años de experiencia', 'Garantía', 
  'Compra segura', 'Medios de pago', 'Despacho', 'Cambios y devoluciones', 
  'Atención humana', 'WhatsApp', 'Certificaciones', 'Marcas reconocidas', 
  'Tienda física', 'Casos de clientes'
];

const MOBILE_ACTIONS = [
  'Buscar', 'Navegar categorías', 'Comprar', 'Agregar al carrito', 'Contactar', 
  'WhatsApp', 'Revisar promociones', 'Comparar productos', 'Revisar características', 
  'Encontrar tiendas', 'Seguimiento de pedidos'
];

export default function BriefWizardPage({ params }: { params: Promise<{ token: string }> }) {
  const resolvedParams = use(params);
  const token = resolvedParams.token;
  const router = useRouter();

  const [brief, setBrief] = useState<BriefProject | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSavedTime, setLastSavedTime] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    async function loadData() {
      let loaded = await getBriefByToken(token);
      if (!loaded) {
        loaded = createEmptyBrief('Nuevo Proyecto', token);
      }
      setBrief(loaded);
    }
    loadData();
  }, [token]);

  // Guardado automático al modificar brief
  useEffect(() => {
    if (!brief) return;
    const timer = setTimeout(async () => {
      setIsSaving(true);
      await saveBrief(brief);
      setIsSaving(false);
      setLastSavedTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 800);
    return () => clearTimeout(timer);
  }, [brief]);

  if (!brief) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-6">
        <div className="flex items-center gap-3 text-zinc-600 font-mono text-xs">
          <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
          <span>Cargando Brief UX/UI Webunica...</span>
        </div>
      </div>
    );
  }

  const updateBrief = (section: keyof BriefProject, data: any) => {
    setBrief(prev => prev ? { ...prev, [section]: data } : prev);
  };

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleGenerateBrief = async () => {
    if (!brief) return;
    setIsGenerating(true);
    try {
      // 1. Llamar a la API de análisis de IA
      const res = await fetch('/api/brief/generate-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(brief),
      });

      const data = await res.json();
      const updatedBrief: BriefProject = {
        ...brief,
        status: 'Revisión Webunica',
        aiAnalysis: data.aiAnalysis,
      };

      await saveBrief(updatedBrief);
      router.push(`/brief/${token}/document`);
    } catch (e) {
      console.error('Error generando brief:', e);
      router.push(`/brief/${token}/document`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-zinc-950 font-sans antialiased pb-28">
      {/* Top Header SaaS */}
      <header className="bg-slate-950 text-white py-4 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/briefs" className="text-zinc-400 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <span className="text-[10px] font-mono font-black uppercase tracking-wider text-purple-400 block">
                Webunica — Brief UX/UI Ecommerce
              </span>
              <h1 className="text-sm sm:text-base font-extrabold text-white">
                {brief.projectInfo.companyName || 'Dirección Visual & Experiencia'}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="hidden sm:inline-block text-zinc-400">
              {isSaving ? 'Guardando...' : lastSavedTime ? `Guardado ${lastSavedTime}` : 'Guardado automáticamente'}
            </span>
            <Link
              href={`/brief/${token}/document`}
              className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/10 transition-all flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-purple-300" />
              <span className="hidden sm:inline">Ver Brief Generado</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Stepper Navigation Bar */}
      <BriefStepper
        steps={STEPS}
        currentStep={currentStep}
        onStepClick={(id) => setCurrentStep(id)}
      />

      {/* Main Step Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 shadow-sm transition-all">
          
          {/* ETAPA 1: DATOS DEL PROYECTO */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 block mb-1">
                  Etapa 1 de 20
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                  Sobre el proyecto
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  Ingresa los datos generales para comenzar la definición de arquitectura e identidad.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-zinc-700 font-bold mb-1">Nombre de la empresa *</label>
                  <input
                    type="text"
                    value={brief.projectInfo.companyName}
                    onChange={(e) => updateBrief('projectInfo', { ...brief.projectInfo, companyName: e.target.value })}
                    placeholder="Ej: Gerolamo Chile"
                    className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl font-medium"
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-bold mb-1">Sitio web actual (si existe)</label>
                  <input
                    type="url"
                    value={brief.projectInfo.currentWebsite}
                    onChange={(e) => updateBrief('projectInfo', { ...brief.projectInfo, currentWebsite: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl font-mono"
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-bold mb-1">Nueva tienda / dominio deseado</label>
                  <input
                    type="text"
                    value={brief.projectInfo.newStoreDomain}
                    onChange={(e) => updateBrief('projectInfo', { ...brief.projectInfo, newStoreDomain: e.target.value })}
                    placeholder="ejemplo.cl / shop.ejemplo.com"
                    className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl font-mono"
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-bold mb-1">Nombre del responsable *</label>
                  <input
                    type="text"
                    value={brief.projectInfo.projectLeadName}
                    onChange={(e) => updateBrief('projectInfo', { ...brief.projectInfo, projectLeadName: e.target.value })}
                    placeholder="Ej: Javier Millar"
                    className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-bold mb-1">Cargo</label>
                  <input
                    type="text"
                    value={brief.projectInfo.projectLeadRole}
                    onChange={(e) => updateBrief('projectInfo', { ...brief.projectInfo, projectLeadRole: e.target.value })}
                    placeholder="Ej: Director Comercial / Fundador"
                    className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-bold mb-1">Correo electrónico *</label>
                  <input
                    type="email"
                    value={brief.projectInfo.email}
                    onChange={(e) => updateBrief('projectInfo', { ...brief.projectInfo, email: e.target.value })}
                    placeholder="contacto@empresa.cl"
                    className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl font-mono"
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-bold mb-1">Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    value={brief.projectInfo.phone}
                    onChange={(e) => updateBrief('projectInfo', { ...brief.projectInfo, phone: e.target.value })}
                    placeholder="+56 9 ..."
                    className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl font-mono"
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-bold mb-1">Tipo de proyecto</label>
                  <select
                    value={brief.projectInfo.projectType}
                    onChange={(e) => updateBrief('projectInfo', { ...brief.projectInfo, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl font-medium"
                  >
                    <option value="Nueva tienda Shopify">Nueva tienda Shopify</option>
                    <option value="Rediseño Shopify">Rediseño Shopify</option>
                    <option value="Migración a Shopify">Migración a Shopify</option>
                    <option value="Optimización de tienda existente">Optimización de tienda existente</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Describe brevemente el proyecto
                </label>
                <textarea
                  value={brief.projectInfo.projectDescription}
                  onChange={(e) => updateBrief('projectInfo', { ...brief.projectInfo, projectDescription: e.target.value })}
                  placeholder="Cuéntanos qué espera lograr la empresa con la nueva tienda."
                  rows={4}
                  className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs"
                />
              </div>
            </div>
          )}

          {/* ETAPA 2: IDENTIDAD DE MARCA */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 block mb-1">
                  Etapa 2 de 20
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                  Identidad de marca
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  Define las guías visuales y los activos gráficos existentes.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-zinc-700 font-bold mb-2">
                    ¿Existe actualmente un manual de marca?
                  </label>
                  <RadioCardGroup
                    options={[
                      { value: 'Sí', label: 'Sí', description: 'Poseemos guías completas de marca.' },
                      { value: 'No', label: 'No', description: 'Se construirá a partir del nuevo diseño.' },
                      { value: 'Está en desarrollo', label: 'Está en desarrollo', description: 'Se está trabajando paralelamente.' }
                    ]}
                    value={brief.brandIdentity.hasBrandManual}
                    onChange={(val) => updateBrief('brandIdentity', { ...brief.brandIdentity, hasBrandManual: val })}
                  />
                </div>

                {brief.brandIdentity.hasBrandManual === 'Sí' && (
                  <FileUploadBox
                    label="Adjuntar manual de marca"
                    allowedFormats="PDF, JPG, PNG, ZIP"
                    files={brief.brandIdentity.brandManualFiles || []}
                    onChange={(files) => updateBrief('brandIdentity', { ...brief.brandIdentity, brandManualFiles: files })}
                  />
                )}

                <FileUploadBox
                  label="Adjuntar logotipo (Versiones en vector / alta resolución)"
                  allowedFormats="SVG, PNG, AI, PDF"
                  files={brief.brandIdentity.logoFiles || []}
                  onChange={(files) => updateBrief('brandIdentity', { ...brief.brandIdentity, logoFiles: files })}
                />

                <div>
                  <label className="block text-zinc-700 font-bold mb-2">Colores corporativos</label>
                  <ColorPickerInput
                    colors={brief.brandIdentity.colors}
                    onChange={(colors) => updateBrief('brandIdentity', { ...brief.brandIdentity, colors })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-zinc-700 font-bold mb-1">Tipografía Principal</label>
                    <input
                      type="text"
                      value={brief.brandIdentity.typography.primary}
                      onChange={(e) => updateBrief('brandIdentity', {
                        ...brief.brandIdentity,
                        typography: { ...brief.brandIdentity.typography, primary: e.target.value }
                      })}
                      placeholder="Ej: Inter / Outfit / Sans-Serif"
                      className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-700 font-bold mb-1">Tipografía Secundaria</label>
                    <input
                      type="text"
                      value={brief.brandIdentity.typography.secondary}
                      onChange={(e) => updateBrief('brandIdentity', {
                        ...brief.brandIdentity,
                        typography: { ...brief.brandIdentity.typography, secondary: e.target.value }
                      })}
                      placeholder="Ej: Roboto / Serif"
                      className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-700 font-bold mb-1">
                    ¿Qué elementos de la marca deben mantenerse obligatoriamente?
                  </label>
                  <textarea
                    value={brief.brandIdentity.mandatoryElements}
                    onChange={(e) => updateBrief('brandIdentity', { ...brief.brandIdentity, mandatoryElements: e.target.value })}
                    placeholder="Logotipo, color morado principal, ícono de isotipo..."
                    rows={3}
                    className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-bold mb-1">
                    ¿Qué elementos actuales preferirían cambiar o renovar?
                  </label>
                  <textarea
                    value={brief.brandIdentity.elementsToChange}
                    onChange={(e) => updateBrief('brandIdentity', { ...brief.brandIdentity, elementsToChange: e.target.value })}
                    placeholder="Banners antiguos, tipografía secundaria pesada, iconos anticuados..."
                    rows={3}
                    className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl"
                  />
                </div>
              </div>
            </div>
          )}

          {/* ETAPA 3: PERSONALIDAD DE LA MARCA */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 block mb-1">
                  Etapa 3 de 20
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                  ¿Cómo debería sentirse la nueva tienda?
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  Selecciona hasta máximo 5 atributos de personalidad de marca.
                </p>
              </div>

              <div className="space-y-6">
                <ChipSelector
                  options={PERSONALITY_CHIPS}
                  selected={brief.brandPersonality.attributes}
                  maxSelection={5}
                  onChange={(selected) => updateBrief('brandPersonality', { ...brief.brandPersonality, attributes: selected })}
                />

                <div className="p-5 bg-purple-50 border border-purple-200 rounded-2xl space-y-3">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-purple-950 block">
                    Si pudieras definir la marca en solamente tres palabras, ¿cuáles serían?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[0, 1, 2].map((i) => (
                      <input
                        key={i}
                        type="text"
                        value={brief.brandPersonality.threeWords[i] || ''}
                        onChange={(e) => {
                          const updatedWords = [...brief.brandPersonality.threeWords] as [string, string, string];
                          updatedWords[i] = e.target.value;
                          updateBrief('brandPersonality', { ...brief.brandPersonality, threeWords: updatedWords });
                        }}
                        placeholder={`Palabra #${i + 1}`}
                        className="px-3.5 py-2 bg-white border border-purple-200 rounded-xl text-xs font-bold text-zinc-900"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ETAPA 4: PÚBLICO OBJETIVO */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 block mb-1">
                  Etapa 4 de 20
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                  ¿Quién compra?
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  Entender el perfil del comprador es fundamental para diseñar la jerarquía de información.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-zinc-700 font-bold mb-1">¿Quién es el cliente principal?</label>
                  <textarea
                    value={brief.targetAudience.primaryCustomer}
                    onChange={(e) => updateBrief('targetAudience', { ...brief.targetAudience, primaryCustomer: e.target.value })}
                    placeholder="Describe a tu comprador ideal (ej: Hombres y mujeres de 28 a 45 años, profesionales, buscan practicidad y marcas confiables en Chile)."
                    rows={3}
                    className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-bold mb-2">Rango de edad predominante</label>
                  <RadioCardGroup
                    options={[
                      { value: '18–24', label: '18–24 años' },
                      { value: '25–34', label: '25–34 años' },
                      { value: '35–44', label: '35–44 años' },
                      { value: '45–54', label: '45–54 años' },
                      { value: '55+', label: '55+ años' },
                      { value: 'Muy amplio', label: 'Muy amplio' },
                    ]}
                    value={brief.targetAudience.ageRange}
                    onChange={(val) => updateBrief('targetAudience', { ...brief.targetAudience, ageRange: val })}
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-bold mb-2">¿El cliente compra principalmente por...?</label>
                  <ChipSelector
                    options={['Precio', 'Calidad', 'Marca', 'Confianza', 'Recomendaciones', 'Rapidez', 'Promociones', 'Exclusividad', 'Especialización', 'Conveniencia', 'Servicio']}
                    selected={brief.targetAudience.purchaseMotivations}
                    onChange={(selected) => updateBrief('targetAudience', { ...brief.targetAudience, purchaseMotivations: selected })}
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-bold mb-2">¿El cliente conoce bien los productos antes de entrar?</label>
                  <RadioCardGroup
                    gridCols="grid-cols-1 sm:grid-cols-2"
                    options={[
                      { value: 'Sí, sabe exactamente lo que busca', label: 'Sí, sabe exactamente lo que busca' },
                      { value: 'Tiene una idea, pero necesita orientación', label: 'Tiene una idea, pero necesita orientación' },
                      { value: 'Necesita bastante ayuda para decidir', label: 'Necesita bastante ayuda para decidir' },
                      { value: 'Depende de la categoría', label: 'Depende de la categoría' },
                    ]}
                    value={brief.targetAudience.productKnowledge}
                    onChange={(val) => updateBrief('targetAudience', { ...brief.targetAudience, productKnowledge: val })}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ETAPA 5: PROPUESTA DE VALOR */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 block mb-1">
                  Etapa 5 de 20
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                  ¿Por qué comprar en esta tienda?
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  Establece los verdaderos diferenciadores competitivos del negocio.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-zinc-700 font-bold mb-1">
                    ¿Por qué un cliente debería comprar aquí y no en otra tienda?
                  </label>
                  <textarea
                    value={brief.valueProposition.whyBuyHere}
                    onChange={(e) => updateBrief('valueProposition', { ...brief.valueProposition, whyBuyHere: e.target.value })}
                    placeholder="Precio, experiencia, marcas exclusivas, disponibilidad inmediata en bodegas de Santiago, despacho en 24-48h, asesoría experta, garantía..."
                    rows={4}
                    className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-bold mb-2">
                    Selecciona las principales fortalezas del negocio (máximo 5)
                  </label>
                  <ChipSelector
                    options={STRENGTHS_CHIPS}
                    selected={brief.valueProposition.strengths}
                    maxSelection={5}
                    onChange={(selected) => updateBrief('valueProposition', { ...brief.valueProposition, strengths: selected })}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ETAPA 6: DIRECCIÓN VISUAL */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 block mb-1">
                  Etapa 6 de 20
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                  Dirección visual
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  Ajusta los 9 deslisadores de escala (1 al 5) para fijar el equilibrio de diseño deseado.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ScaleRangeSlider
                  label="Diseño general"
                  leftExtreme="Minimalista"
                  rightExtreme="Visual / Llamativo"
                  value={brief.visualDirection.generalDesign}
                  onChange={(v) => updateBrief('visualDirection', { ...brief.visualDirection, generalDesign: v })}
                />
                <ScaleRangeSlider
                  label="Personalidad"
                  leftExtreme="Corporativo"
                  rightExtreme="Cercano"
                  value={brief.visualDirection.personality}
                  onChange={(v) => updateBrief('visualDirection', { ...brief.visualDirection, personality: v })}
                />
                <ScaleRangeSlider
                  label="Posicionamiento"
                  leftExtreme="Masivo"
                  rightExtreme="Premium"
                  value={brief.visualDirection.positioning}
                  onChange={(v) => updateBrief('visualDirection', { ...brief.visualDirection, positioning: v })}
                />
                <ScaleRangeSlider
                  label="Uso de fotografías"
                  leftExtreme="Producto"
                  rightExtreme="Lifestyle"
                  value={brief.visualDirection.photoUsage}
                  onChange={(v) => updateBrief('visualDirection', { ...brief.visualDirection, photoUsage: v })}
                />
                <ScaleRangeSlider
                  label="Uso del color"
                  leftExtreme="Sobrio"
                  rightExtreme="Colorido"
                  value={brief.visualDirection.colorUsage}
                  onChange={(v) => updateBrief('visualDirection', { ...brief.visualDirection, colorUsage: v })}
                />
                <ScaleRangeSlider
                  label="Densidad de Información"
                  leftExtreme="Muy limpia"
                  rightExtreme="Muy informativa"
                  value={brief.visualDirection.informationDensity}
                  onChange={(v) => updateBrief('visualDirection', { ...brief.visualDirection, informationDensity: v })}
                />
                <ScaleRangeSlider
                  label="Promociones"
                  leftExtreme="Discretas"
                  rightExtreme="Muy protagonistas"
                  value={brief.visualDirection.promotionsProminence}
                  onChange={(v) => updateBrief('visualDirection', { ...brief.visualDirection, promotionsProminence: v })}
                />
                <ScaleRangeSlider
                  label="Experiencia Comercial"
                  leftExtreme="Marketplace"
                  rightExtreme="Boutique especializada"
                  value={brief.visualDirection.shoppingExperience}
                  onChange={(v) => updateBrief('visualDirection', { ...brief.visualDirection, shoppingExperience: v })}
                />
                <ScaleRangeSlider
                  label="Navegación"
                  leftExtreme="Inspiracional"
                  rightExtreme="Búsqueda & Categorías"
                  value={brief.visualDirection.navigationStyle}
                  onChange={(v) => updateBrief('visualDirection', { ...brief.visualDirection, navigationStyle: v })}
                />
              </div>
            </div>
          )}

          {/* ETAPA 7: REFERENCIAS INSPIRACIONALES */}
          {currentStep === 7 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 block mb-1">
                  Etapa 7 de 20
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                  Sitios que nos inspiran
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  Ingresa sitios de referencia e indica qué elementos específicos te gustan.
                </p>
              </div>

              <div className="space-y-6">
                <ReferenceCardItem
                  type="positive"
                  items={brief.references.positiveReferences}
                  onChange={(updated) => updateBrief('references', { ...brief.references, positiveReferences: updated })}
                />

                <div className="pt-4 border-t border-zinc-200">
                  <h3 className="text-sm font-bold text-zinc-900 mb-2">Referencias negativas</h3>
                  <p className="text-xs text-zinc-500 mb-4">
                    ¿Hay sitios o diseños que NO representan la marca?
                  </p>
                  <ReferenceCardItem
                    type="negative"
                    items={brief.references.negativeReferences}
                    onChange={(updated) => updateBrief('references', { ...brief.references, negativeReferences: updated })}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ETAPA 8: COMPETIDORES */}
          {currentStep === 8 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 block mb-1">
                  Etapa 8 de 20
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                  Análisis de Competencia
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  Agrega hasta 5 competidores directos o referentes del mercado.
                </p>
              </div>

              <ReferenceCardItem
                type="competitor"
                items={brief.references.competitors}
                onChange={(updated) => updateBrief('references', { ...brief.references, competitors: updated })}
              />
            </div>
          )}

          {/* ETAPA 9: PRIORIDADES DEL HOME */}
          {currentStep === 9 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 block mb-1">
                  Etapa 9 de 20
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                  ¿Qué debe vender y comunicar primero el Home?
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  Reordena los módulos por prioridad (1 = superior) y marca las 5 prioridades indispensables.
                </p>
              </div>

              <DragDropPrioritizer
                items={brief.homepagePriorities.orderedModules}
                onChange={(ordered) => updateBrief('homepagePriorities', { ...brief.homepagePriorities, orderedModules: ordered })}
                topFiveSelected={brief.homepagePriorities.topFiveModules}
                onTopFiveChange={(topFive) => updateBrief('homepagePriorities', { ...brief.homepagePriorities, topFiveModules: topFive })}
              />
            </div>
          )}

          {/* ETAPA 10: HERO PRINCIPAL */}
          {currentStep === 10 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 block mb-1">
                  Etapa 10 de 20
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                  Primera impresión (Hero Principal)
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  Define el objetivo y la dirección gráfica del encabezado del sitio.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-zinc-700 font-bold mb-2">¿Qué debería comunicar principalmente el Hero?</label>
                  <RadioCardGroup
                    options={[
                      { value: 'Marca', label: 'Marca' },
                      { value: 'Promoción', label: 'Promoción' },
                      { value: 'Categoría', label: 'Categoría' },
                      { value: 'Producto', label: 'Producto Estrella' },
                      { value: 'Temporada', label: 'Temporada' },
                      { value: 'Beneficio', label: 'Beneficio Principal' },
                    ]}
                    value={brief.heroPreferences.mainMessage}
                    onChange={(val) => updateBrief('heroPreferences', { ...brief.heroPreferences, mainMessage: val })}
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-bold mb-2">¿Qué debería protagonizar visualmente?</label>
                  <RadioCardGroup
                    options={[
                      { value: 'Productos', label: 'Productos' },
                      { value: 'Personas', label: 'Personas' },
                      { value: 'Fotografías lifestyle', label: 'Fotografías lifestyle' },
                      { value: 'Ilustraciones', label: 'Ilustraciones' },
                      { value: 'Marca', label: 'Marca / Isotipo' },
                      { value: 'Combinación', label: 'Combinación' },
                    ]}
                    value={brief.heroPreferences.visualProtagonist}
                    onChange={(val) => updateBrief('heroPreferences', { ...brief.heroPreferences, visualProtagonist: val })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-700 font-bold mb-2">¿Usaremos slider / carrusel?</label>
                    <RadioCardGroup
                      gridCols="grid-cols-3"
                      options={[
                        { value: 'Sí', label: 'Sí' },
                        { value: 'No', label: 'No' },
                        { value: 'Por definir', label: 'Por definir' },
                      ]}
                      value={brief.heroPreferences.useSlider}
                      onChange={(val) => updateBrief('heroPreferences', { ...brief.heroPreferences, useSlider: val })}
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-700 font-bold mb-2">Cantidad máxima de slides (1–5)</label>
                    <input
                      type="number"
                      min={1}
                      max={5}
                      value={brief.heroPreferences.maxSlides}
                      onChange={(e) => updateBrief('heroPreferences', { ...brief.heroPreferences, maxSlides: parseInt(e.target.value) || 3 })}
                      className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl font-bold"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ETAPA 11: CATEGORÍAS */}
          {currentStep === 11 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 block mb-1">
                  Etapa 11 de 20
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                  Navegación por productos
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  Identifica las categorías clave y las formas de descubrimiento preferidas.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-zinc-700 font-bold mb-2">Categorías más importantes</label>
                  <div className="space-y-2">
                    {brief.categoriesAndBrands.priorityCategories.map((cat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <input
                          type="text"
                          value={cat}
                          onChange={(e) => {
                            const updated = [...brief.categoriesAndBrands.priorityCategories];
                            updated[idx] = e.target.value;
                            updateBrief('categoriesAndBrands', { ...brief.categoriesAndBrands, priorityCategories: updated });
                          }}
                          placeholder={`Categoría #${idx + 1}`}
                          className="w-full px-3.5 py-2 bg-zinc-50 border border-zinc-200 rounded-xl font-medium"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const updated = brief.categoriesAndBrands.priorityCategories.filter((_, i) => i !== idx);
                            updateBrief('categoriesAndBrands', { ...brief.categoriesAndBrands, priorityCategories: updated });
                          }}
                          className="p-2 text-zinc-400 hover:text-red-600 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => {
                        updateBrief('categoriesAndBrands', {
                          ...brief.categoriesAndBrands,
                          priorityCategories: [...brief.categoriesAndBrands.priorityCategories, '']
                        });
                      }}
                      className="px-4 py-2 bg-purple-50 text-purple-900 border border-purple-200 rounded-xl font-bold flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-4 h-4 text-purple-600" />
                      <span>Agregar Categoría</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-700 font-bold mb-2">¿Cómo deberían descubrir los productos los clientes?</label>
                  <ChipSelector
                    options={['Categoría', 'Marca', 'Tipo de producto', 'Uso', 'Necesidad', 'Precio', 'Promociones', 'Recomendaciones', 'Buscador']}
                    selected={brief.categoriesAndBrands.discoveryMethods}
                    onChange={(selected) => updateBrief('categoriesAndBrands', { ...brief.categoriesAndBrands, discoveryMethods: selected })}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ETAPA 12: MARCAS */}
          {currentStep === 12 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 block mb-1">
                  Etapa 12 de 20
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                  Marcas
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  Evalúa la relevancia de las marcas comerciales en la decisión de compra.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <ScaleRangeSlider
                  label="Relevancia de marcas en la decisión de compra"
                  leftExtreme="1 - Poco Importante"
                  rightExtreme="5 - Fundamental"
                  value={brief.categoriesAndBrands.brandImportanceScale}
                  onChange={(v) => updateBrief('categoriesAndBrands', { ...brief.categoriesAndBrands, brandImportanceScale: v })}
                />

                <div>
                  <label className="block text-zinc-700 font-bold mb-2">¿Debería existir una sección destacada de marcas en el Home?</label>
                  <RadioCardGroup
                    gridCols="grid-cols-3"
                    options={[
                      { value: 'Sí', label: 'Sí' },
                      { value: 'No', label: 'No' },
                      { value: 'Por definir', label: 'Por definir' },
                    ]}
                    value={brief.categoriesAndBrands.showBrandsOnHome}
                    onChange={(val) => updateBrief('categoriesAndBrands', { ...brief.categoriesAndBrands, showBrandsOnHome: val })}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ETAPA 13: FICHA DE PRODUCTO */}
          {currentStep === 13 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 block mb-1">
                  Etapa 13 de 20
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                  Información necesaria para tomar una decisión (Ficha de Producto)
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  Selecciona los elementos prioritarios y los que deben verse inmediatamente antes de hacer scroll.
                </p>
              </div>

              <div className="space-y-6 text-xs">
                <div>
                  <label className="block text-zinc-700 font-bold mb-2">Elementos a destacar en la ficha de producto</label>
                  <ChipSelector
                    options={PRODUCT_PAGE_ELEMENTS}
                    selected={brief.productPagePriorities.featuredElements}
                    onChange={(selected) => updateBrief('productPagePriorities', { ...brief.productPagePriorities, featuredElements: selected })}
                  />
                </div>

                <div className="p-5 bg-purple-50 border border-purple-200 rounded-2xl space-y-3">
                  <label className="block font-mono font-bold uppercase tracking-wider text-purple-950">
                    ¿Qué información debería verse estrictamente antes de hacer scroll (Above the fold)? (Máx 8)
                  </label>
                  <ChipSelector
                    options={brief.productPagePriorities.featuredElements}
                    selected={brief.productPagePriorities.aboveTheFoldElements}
                    maxSelection={8}
                    onChange={(selected) => updateBrief('productPagePriorities', { ...brief.productPagePriorities, aboveTheFoldElements: selected })}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ETAPA 14: DUDAS DEL CLIENTE */}
          {currentStep === 14 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 block mb-1">
                  Etapa 14 de 20
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                  ¿Qué impide la compra? (Dudas & Objeciones)
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  Identifica las preguntas frecuentes y las razones por las que un cliente podría abandonar el carrito.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-zinc-700 font-bold mb-1">
                    ¿Qué preguntas hace normalmente un cliente antes de comprar?
                  </label>
                  <textarea
                    value={brief.clientDoubts.commonPrePurchaseQuestions}
                    onChange={(e) => updateBrief('clientDoubts', { ...brief.clientDoubts, commonPrePurchaseQuestions: e.target.value })}
                    placeholder="¿Tiene stock? ¿Sirve para...? ¿Cuánto demora el despacho? ¿Qué tamaño necesito? ¿Tiene garantía?"
                    rows={4}
                    className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-bold mb-2">
                    Principales motivos por los que un cliente puede abandonar una compra
                  </label>
                  <ChipSelector
                    options={['Precio', 'Despacho', 'Falta de información', 'Falta de confianza', 'No encuentra el producto', 'Dudas técnicas', 'Falta de stock', 'Proceso de pago', 'No conoce la marca']}
                    selected={brief.clientDoubts.abandonmentReasons}
                    onChange={(selected) => updateBrief('clientDoubts', { ...brief.clientDoubts, abandonmentReasons: selected })}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ETAPA 15: CONFIANZA Y CONVERSIÓN */}
          {currentStep === 15 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 block mb-1">
                  Etapa 15 de 20
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                  Elementos que generan confianza
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  Selecciona los respaldos de credibilidad clave para la conversión en Chile.
                </p>
              </div>

              <ChipSelector
                options={TRUST_ELEMENTS}
                selected={brief.clientDoubts.trustElements}
                onChange={(selected) => updateBrief('clientDoubts', { ...brief.clientDoubts, trustElements: selected })}
              />
            </div>
          )}

          {/* ETAPA 16: MOBILE */}
          {currentStep === 16 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 block mb-1">
                  Etapa 16 de 20
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                  Experiencia móvil (Mobile-First)
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  Selecciona hasta máximo 5 acciones que deben ser especialmente fáciles desde un smartphone.
                </p>
              </div>

              <ChipSelector
                options={MOBILE_ACTIONS}
                selected={brief.clientDoubts.mobileKeyActions}
                maxSelection={5}
                onChange={(selected) => updateBrief('clientDoubts', { ...brief.clientDoubts, mobileKeyActions: selected })}
              />
            </div>
          )}

          {/* ETAPA 17: CONTENIDO */}
          {currentStep === 17 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 block mb-1">
                  Etapa 17 de 20
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                  Contenido e inspiración
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  Define el formato y el rol estratégico del contenido en la tienda.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-zinc-700 font-bold mb-2">Formatos de contenido a utilizar</label>
                  <ChipSelector
                    options={['Blog', 'Guías', 'Consejos', 'Tutoriales', 'Videos', 'Casos', 'Contenido educativo', 'Preguntas frecuentes', 'Landing pages', 'Redes sociales']}
                    selected={brief.contentAndScope.contentTypes}
                    onChange={(selected) => updateBrief('contentAndScope', { ...brief.contentAndScope, contentTypes: selected })}
                  />
                </div>

                <div>
                  <label className="block text-zinc-700 font-bold mb-2">¿Qué rol principal debería tener el contenido?</label>
                  <RadioCardGroup
                    options={[
                      { value: 'SEO', label: 'SEO' },
                      { value: 'Educar', label: 'Educar' },
                      { value: 'Inspirar', label: 'Inspirar' },
                      { value: 'Generar confianza', label: 'Generar confianza' },
                      { value: 'Vender', label: 'Vender' },
                      { value: 'Soporte', label: 'Soporte' },
                      { value: 'Todas las anteriores', label: 'Todas las anteriores' },
                    ]}
                    value={brief.contentAndScope.contentRole}
                    onChange={(val) => updateBrief('contentAndScope', { ...brief.contentAndScope, contentRole: val })}
                  />
                </div>
              </div>
            </div>
          )}

          {/* ETAPA 18: PRIMERA PROPUESTA UX/UI */}
          {currentStep === 18 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 block mb-1">
                  Etapa 18 de 20
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                  ¿Qué queremos validar primero?
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  La primera propuesta visual no necesita diseñar toda la tienda. Primero validamos la dirección gráfica y el sistema de diseño.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <label className="block text-zinc-700 font-bold mb-2">¿Qué pantallas son prioritarias?</label>
                <ChipSelector
                  options={['Home desktop', 'Home mobile', 'Ficha producto desktop', 'Ficha producto mobile', 'Colección', 'Buscador', 'Carrito', 'Mega menú']}
                  selected={brief.contentAndScope.priorityScreens}
                  onChange={(selected) => updateBrief('contentAndScope', { ...brief.contentAndScope, priorityScreens: selected })}
                />
              </div>
            </div>
          )}

          {/* ETAPA 19: OBSERVACIONES ADICIONALES */}
          {currentStep === 19 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 block mb-1">
                  Etapa 19 de 20
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                  Información adicional
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  Escribe cualquier indicación extra para el equipo de diseño y adjunta archivos complementarios.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-zinc-700 font-bold mb-1">
                    ¿Hay algo más que el equipo de diseño debería saber antes de comenzar?
                  </label>
                  <textarea
                    value={brief.contentAndScope.additionalNotes}
                    onChange={(e) => updateBrief('contentAndScope', { ...brief.contentAndScope, additionalNotes: e.target.value })}
                    placeholder="Instrucciones especiales, acuerdos de branding, restricciones técnicas..."
                    rows={4}
                    className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs"
                  />
                </div>

                <FileUploadBox
                  label="Archivos adicionales proporcionados"
                  allowedFormats="PDF, JPG, PNG, DOCX, XLSX, ZIP"
                  files={brief.contentAndScope.additionalFiles || []}
                  onChange={(files) => updateBrief('contentAndScope', { ...brief.contentAndScope, additionalFiles: files })}
                />
              </div>
            </div>
          )}

          {/* ETAPA 20: RESUMEN FINAL & GENERACIÓN */}
          {currentStep === 20 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 block mb-1">
                  Etapa 20 de 20
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight">
                  Resumen del Brief UX/UI
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                  Revisa las respuestas principales antes de generar el documento final.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200">
                  <span className="font-bold text-zinc-900 block mb-1">Proyecto</span>
                  <p className="text-zinc-600 font-mono">{brief.projectInfo.companyName || 'Sin Nombre'} • {brief.projectInfo.projectType}</p>
                </div>

                <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200">
                  <span className="font-bold text-zinc-900 block mb-2">Personalidad</span>
                  <div className="flex flex-wrap gap-1.5">
                    {brief.brandPersonality.attributes.map(a => (
                      <span key={a} className="px-2.5 py-1 bg-purple-100 text-purple-900 font-bold rounded-lg">{a}</span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200">
                  <span className="font-bold text-zinc-900 block mb-2">Top 5 Módulos del Home</span>
                  <p className="font-mono text-zinc-700">{brief.homepagePriorities.topFiveModules.join(' → ')}</p>
                </div>

                <div className="p-4 bg-purple-950 text-white rounded-2xl space-y-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    <span className="font-bold text-sm">¿Listo para generar el documento oficial?</span>
                  </div>
                  <p className="text-xs text-purple-200 leading-relaxed font-light">
                    Al hacer clic en "Generar Brief UX/UI", nuestro motor procesará las respuestas, calculará la síntesis de IA (principios de diseño y riesgos a evitar) y compilará el documento oficial listo para compartir con el diseñador.
                  </p>
                  <button
                    type="button"
                    disabled={isGenerating}
                    onClick={handleGenerateBrief}
                    className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Generando Brief & Análisis IA...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Generar Brief UX/UI Oficial</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Footer Action Controls */}
          <div className="mt-10 pt-6 border-t border-zinc-200 flex items-center justify-between gap-4">
            <button
              type="button"
              disabled={currentStep === 1}
              onClick={handlePrev}
              className="px-5 py-3 rounded-2xl border border-zinc-200 bg-white hover:bg-zinc-50 font-bold text-xs text-zinc-700 disabled:opacity-30 cursor-pointer flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            {currentStep < STEPS.length ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-8 py-3 rounded-2xl bg-zinc-950 hover:bg-zinc-800 font-black text-xs text-white uppercase tracking-wider cursor-pointer flex items-center gap-2 shadow-md"
              >
                <span>Siguiente</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                disabled={isGenerating}
                onClick={handleGenerateBrief}
                className="px-8 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 font-black text-xs text-white uppercase tracking-wider cursor-pointer flex items-center gap-2 shadow-lg shadow-purple-600/30"
              >
                <span>Finalizar & Generar Brief</span>
                <Sparkles className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}
