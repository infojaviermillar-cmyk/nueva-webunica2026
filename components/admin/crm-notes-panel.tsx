"use client";

import { useState, useMemo } from 'react';
import { 
  Loader2, AlertTriangle, Phone, Plus, Trash2, CheckCircle2, 
  Clock, Play, RefreshCw, Layers, Calendar, ChevronRight, CheckSquare
} from 'lucide-react';
import { Lead, LeadProject, ProjectStage } from '@/types/lead';

// ── WhatsAppIcon SVG ──────────────────────────────────────
function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.805-9.799.002-2.618-1.016-5.083-2.868-6.938C16.357 2.012 13.9 1.002 11.993 1.002c-5.396 0-9.786 4.392-9.788 9.797-.001 1.955.485 3.869 1.402 5.534L2.617 21.92l5.733-1.503c1.693.923 3.42 1.34 4.547 1.34h.001zM17.487 14.39c-.3-.15-1.774-.875-2.049-.976-.275-.1-.475-.15-.675.15-.2.3-.775.976-.95 1.176-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.49-1.042-.93-1.637-2.078-1.842-2.43-.204-.352-.022-.543.153-.717.157-.156.3-.35.45-.525.075-.088.15-.175.225-.263.075-.087.125-.15.2-.3.075-.15.037-.275-.018-.375-.056-.1-.475-1.15-.65-1.575-.17-.412-.34-.356-.475-.363-.125-.007-.27-.01-.413-.01-.143 0-.377.05-.575.267-.2.217-.762.75-.762 1.83 0 1.078.784 2.118.893 2.268.11.15 1.543 2.356 3.738 3.3.522.226 1.025.378 1.38.49.524.166.99.143 1.363.088.416-.062 1.774-.725 2.024-1.425.25-.7.25-1.295.175-1.422-.075-.13-.275-.205-.575-.355z" />
    </svg>
  );
}

interface CRMNotesPanelProps {
  lead: Lead;
  onUpdateLead: (lead: Lead) => void;
}

const DEFAULT_STAGES = [
  {
    name: 'Wireframes y Estructura Visual',
    description: 'Diseño UX/UI de las pantallas principales y definición del mapa del sitio acordado.'
  },
  {
    name: 'Propuesta de Contenidos y Maquetación',
    description: 'Redacción de textos clave, recopilación de imágenes de marca y estructuración inicial.'
  },
  {
    name: 'Desarrollo de Funcionalidades y Pasarelas',
    description: 'Integración técnica, desarrollo de código, pasarelas de pago (Webpay/Stripe) y formularios.'
  },
  {
    name: 'Pruebas (QA) y Ajustes de Usuario',
    description: 'Revisión técnica responsiva (móviles/desktop), optimización de velocidad y ajustes finales.'
  },
  {
    name: 'Lanzamiento y SEO Inicial',
    description: 'Indexación en Google, configuración de dominio de producción y entrega de credenciales.'
  }
];

export default function CRMNotesPanel({ lead, onUpdateLead }: CRMNotesPanelProps) {
  const [activeTab, setActiveTab] = useState<'notes' | 'whatsapp' | 'project'>('notes');
  const [notes, setNotes] = useState(lead.notes || '');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [dbError, setDbError] = useState<string | null>(null);

  // Project creation state
  const [projectName, setProjectName] = useState(lead.service_interest || lead.project_type || 'Proyecto de Desarrollo');
  const [projectDesc, setProjectDesc] = useState('');
  const [startDate, setStartDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [projectSaving, setProjectSaving] = useState(false);
  const [projectError, setProjectError] = useState<string | null>(null);

  // New stage state
  const [newStageName, setNewStageName] = useState('');
  const [newStageDesc, setNewStageDesc] = useState('');

  // Capitalize name helper
  const capitalizeName = (str?: string) => {
    if (!str) return 'Cliente';
    return str
      .trim()
      .split(/\s+/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const serviceInterest = lead.service_interest || lead.project_type || 'sitio web';

  // WhatsApp Templates Definition
  const templates = useMemo(() => [
    {
      id: 'contacto',
      name: 'Primer Contacto',
      description: 'Saludo inicial y oferta de llamada rápida',
      emoji: '🚀',
      getText: (name: string, service: string) => 
        `¡Hola ${name}! 👋 Te escribe Javier Millar de WebUnica.cl 🇨🇱. Recibí tu consulta por el diseño de tu ${service}. ¡Excelente iniciativa! 🚀 Me gustaría contarte brevemente cómo trabajamos y coordinar un llamado de 5 min para conocer más de tu proyecto. ¿Te acomoda hoy o mañana? 😊`
    },
    {
      id: 'propuesta',
      name: 'Seguimiento Propuesta',
      description: 'Dar seguimiento a la cotización enviada',
      emoji: '💵',
      getText: (name: string, service: string) => 
        `Hola ${name}, ¿cómo estás? 👋 Te escribo para dar seguimiento a la propuesta y cotización de ${service} que te enviamos de WebUnica. ⚡ ¿Pudiste revisarla? Si tienes dudas sobre los planes, plazos de entrega o facilidades de pago, feliz de resolverlas por aquí o coordinar un llamado corto. ¡Quedo muy atento! 🎯`
    },
    {
      id: 'cupon',
      name: 'Urgencia y Descuento',
      description: 'Ofrecer cupón WEBUNICA10 y urgencia de cupos',
      emoji: '⏰',
      getText: (name: string, service: string) => 
        `¡Hola ${name}! 👋 Quería comentarte que esta semana estamos cerrando los cupos de inicio rápido con el descuento especial del 10% ingresando el código *WEBUNICA10* ⏰🔥. Si aún te interesa lanzar tu web de ${service} con nosotros este mes, avísame y dejamos tu cupo reservado. ¡Un abrazo! 🛡️`
    },
    {
      id: 'reunion',
      name: 'Agendar Reunión',
      description: 'Confirmación de reunión o llamada',
      emoji: '📅',
      getText: (name: string, service: string) => 
        `¡Hola ${name}! 👋 Confirmado nuestro contacto para revisar los detalles del desarrollo de tu ${service} 📅. Estaré muy atento para llamarte. Si quieres adelantarnos más detalles o tienes alguna referencia de diseño que te guste, puedes enviármela por aquí. ¡Hablamos pronto! 🚀`
    }
  ], []);

  const [selectedTemplateId, setSelectedTemplateId] = useState('contacto');
  const [customText, setCustomText] = useState(() => {
    const t = templates.find(x => x.id === 'contacto');
    return t ? t.getText(capitalizeName(lead.name), serviceInterest) : '';
  });

  const selectTemplate = (id: string) => {
    setSelectedTemplateId(id);
    const t = templates.find(x => x.id === id);
    if (t) {
      setCustomText(t.getText(capitalizeName(lead.name), serviceInterest));
    }
  };

  const handleSave = async (contentToSave = notes) => {
    setSaving(true);
    setDbError(null);
    setSaved(false);
    try {
      const res = await fetch('/api/leads/notes', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leadId: lead.id, notes: contentToSave }),
      });
      const d = await res.json();
      if (res.ok && d.success) {
        setSaved(true);
        onUpdateLead({ ...lead, notes: contentToSave });
        setTimeout(() => setSaved(false), 2000);
      } else {
        setDbError(d.error || 'Error al guardar notas');
      }
    } catch {
      setDbError('Error de red al conectar con la base de datos');
    } finally {
      setSaving(false);
    }
  };

  const appendActivity = (
    activityType: 'llamada' | 'whatsapp' | 'cotizado' | 'seguimiento',
    customMsg?: string,
    tplLabel?: string
  ) => {
    const now = new Date();
    const dateStr = now.toLocaleDateString('es-CL');
    const timeStr = now.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' });
    const timestamp = `${dateStr} ${timeStr}`;
    
    let text = '';
    if (activityType === 'llamada') {
      text = `[${timestamp}] 📞 Llamada telefónica realizada: `;
    } else if (activityType === 'whatsapp') {
      if (customMsg) {
        const preview = customMsg.length > 60 ? `${customMsg.substring(0, 60)}...` : customMsg;
        text = `[${timestamp}] 💬 WhatsApp enviado (Plt: ${tplLabel || 'Personalizado'}): "${preview}"`;
      } else {
        text = `[${timestamp}] 💬 Mensaje de WhatsApp enviado: `;
      }
    } else if (activityType === 'cotizado') {
      text = `[${timestamp}] 💵 Propuesta comercial enviada: `;
    } else if (activityType === 'seguimiento') {
      text = `[${timestamp}] ⏳ Seguimiento programado: `;
    }

    const newNotes = notes ? `${notes}\n${text}` : text;
    setNotes(newNotes);
    handleSave(newNotes);
  };

  const handleSendWhatsApp = async () => {
    if (!lead.phone || lead.phone === 'EMPTY') return;

    const formattedPhone = lead.phone.replace(/[^0-9]/g, '');
    let finalPhone = formattedPhone;
    if (finalPhone.length === 9 && finalPhone.startsWith('9')) {
      finalPhone = '56' + finalPhone; 
    }
    
    const url = `https://api.whatsapp.com/send?phone=${finalPhone}&text=${encodeURIComponent(customText)}`;
    window.open(url, '_blank');

    const activeTemplate = templates.find(t => t.id === selectedTemplateId);
    const templateLabel = activeTemplate ? activeTemplate.name : 'Personalizado';
    
    appendActivity('whatsapp', customText, templateLabel);
  };

  // ── Project Management Helpers ──
  const saveProject = async (updatedProject: LeadProject | null) => {
    setProjectSaving(true);
    setProjectError(null);
    try {
      const res = await fetch('/api/leads/project', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leadId: lead.id, project: updatedProject }),
      });
      const d = await res.json();
      if (res.ok && d.success) {
        onUpdateLead({ ...lead, project: updatedProject || undefined });
      } else {
        setProjectError(d.error || 'Error al actualizar base de datos');
      }
    } catch {
      setProjectError('Error de conexión de red');
    } finally {
      setProjectSaving(false);
    }
  };

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectName.trim()) return;

    const initialStages: ProjectStage[] = DEFAULT_STAGES.map((s, idx) => ({
      id: `stage_${Date.now()}_${idx}`,
      name: s.name,
      description: s.description,
      status: 'pending',
      completed_at: null,
      created_at: new Date().toISOString(),
    }));

    const newProject: LeadProject = {
      name: projectName.trim(),
      description: projectDesc.trim() || undefined,
      start_date: startDate || undefined,
      delivery_date: deliveryDate || undefined,
      stages: initialStages,
    };

    await saveProject(newProject);
  };

  const handleSetStageStatus = async (stageId: string, status: 'pending' | 'in_progress' | 'completed') => {
    if (!lead.project) return;

    const updatedStages = lead.project.stages.map(s => {
      if (s.id === stageId) {
        return {
          ...s,
          status,
          completed_at: status === 'completed' ? new Date().toISOString() : null,
        };
      }
      return s;
    });

    const updatedProject = {
      ...lead.project,
      stages: updatedStages,
    };

    await saveProject(updatedProject);
  };

  const handleAddNewStage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStageName.trim() || !lead.project) return;

    const newStage: ProjectStage = {
      id: `stage_${Date.now()}`,
      name: newStageName.trim(),
      description: newStageDesc.trim() || undefined,
      status: 'pending',
      completed_at: null,
      created_at: new Date().toISOString(),
    };

    const updatedProject = {
      ...lead.project,
      stages: [...lead.project.stages, newStage],
    };

    await saveProject(updatedProject);
    setNewStageName('');
    setNewStageDesc('');
  };

  const handleDeleteStage = async (stageId: string) => {
    if (!lead.project) return;

    const updatedStages = lead.project.stages.filter(s => s.id !== stageId);
    const updatedProject = {
      ...lead.project,
      stages: updatedStages,
    };

    await saveProject(updatedProject);
  };

  const handleDeleteProject = async () => {
    if (!window.confirm('¿Estás seguro de que deseas desasociar este proyecto y eliminar todas sus etapas?')) {
      return;
    }
    await saveProject(null);
  };

  const projectStats = useMemo(() => {
    if (!lead.project || !lead.project.stages.length) return { completed: 0, total: 0, pct: 0 };
    const total = lead.project.stages.length;
    const completed = lead.project.stages.filter(s => s.status === 'completed').length;
    const pct = Math.round((completed / total) * 100);
    return { completed, total, pct };
  }, [lead.project]);

  const hasPhone = lead.phone && lead.phone !== 'EMPTY';

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
      
      {/* ── Tabs Navigation ── */}
      <div className="flex border-b border-slate-100 mb-6 gap-2 flex-wrap sm:flex-nowrap">
        <button
          onClick={() => setActiveTab('notes')}
          className={`py-3 px-5 text-xs font-black uppercase tracking-widest border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'notes'
              ? 'border-violet-600 text-violet-600 font-black'
              : 'border-transparent text-slate-400 hover:text-slate-600 font-bold'
          }`}
        >
          📝 Bitácora e Historial
        </button>
        <button
          onClick={() => setActiveTab('whatsapp')}
          className={`py-3 px-5 text-xs font-black uppercase tracking-widest border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'whatsapp'
              ? 'border-emerald-600 text-emerald-600 font-black'
              : 'border-transparent text-slate-400 hover:text-slate-600 font-bold'
          }`}
        >
          <WhatsAppIcon className="w-3.5 h-3.5" />
          Seguimiento WhatsApp
        </button>
        <button
          onClick={() => setActiveTab('project')}
          className={`py-3 px-5 text-xs font-black uppercase tracking-widest border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'project'
              ? 'border-violet-600 text-violet-600 font-black'
              : 'border-transparent text-slate-400 hover:text-slate-600 font-bold'
          }`}
        >
          💻 Proyecto de Desarrollo
        </button>
      </div>

      {/* ── Tab Content: NOTES & ACTIVITY LOG ── */}
      {activeTab === 'notes' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-2 flex-wrap gap-4">
            <div>
              <h3 className="font-black text-slate-900 text-xs uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-600 animate-pulse"></span>
                Notas Internas del Lead
              </h3>
              <p className="text-slate-400 text-[10px] mt-0.5 font-medium">Registra todas las interacciones, llamadas, acuerdos y estados del prospecto.</p>
            </div>
            
            {/* Quick action logger buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => appendActivity('whatsapp')}
                disabled={saving}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-full transition-all disabled:opacity-50 cursor-pointer animate-fade-in"
              >
                💬 WhatsApp
              </button>
              <button
                onClick={() => appendActivity('llamada')}
                disabled={saving}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-full transition-all disabled:opacity-50 cursor-pointer animate-fade-in"
              >
                📞 Llamada
              </button>
              <button
                onClick={() => appendActivity('cotizado')}
                disabled={saving}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-violet-50 hover:bg-violet-100 text-violet-700 text-[10px] font-black uppercase tracking-widest rounded-full transition-all disabled:opacity-50 cursor-pointer animate-fade-in"
              >
                💵 Propuesta
              </button>
            </div>
          </div>

          {dbError && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-2xl mb-4 text-xs font-medium">
              <p className="font-black uppercase tracking-widest text-[10px] text-red-800 mb-1">⚠️ Error al Actualizar Base de Datos</p>
              <p className="mb-2">{dbError}</p>
              {dbError.toLowerCase().includes('column') && (
                <div className="bg-white/80 p-3 rounded-xl border border-red-100 mt-2 font-mono text-[10px] text-slate-700 select-all">
                  <p className="font-sans font-bold text-slate-800 mb-1">Ejecuta esta consulta SQL en tu consola de Supabase:</p>
                  ALTER TABLE public.leads ADD COLUMN notes TEXT;
                </div>
              )}
            </div>
          )}

          <div className="relative">
            <textarea
              value={notes}
              onChange={e => setNotes(e.target.value)}
              placeholder="Escribe comentarios sobre las necesidades del cliente, fecha de la reunión acordada o cualquier dato importante..."
              className="w-full min-h-[140px] p-4 bg-slate-50 border border-slate-100 focus:border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 rounded-2xl text-sm font-medium text-slate-700 placeholder:text-slate-300 transition-all font-sans resize-y"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              {notes ? `${notes.trim().split('\n').length} entradas registradas` : 'Sin registros aún'}
            </span>
            <div className="flex items-center gap-3">
              {saved && (
                <span className="text-[10px] text-emerald-600 font-black uppercase tracking-widest animate-bounce">
                  ✓ ¡Nota Guardada!
                </span>
              )}
              <button
                onClick={() => handleSave()}
                disabled={saving}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-950 hover:bg-slate-800 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-md active:scale-95 disabled:opacity-50 transition-all cursor-pointer"
              >
                {saving ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    Guardando...
                  </>
                ) : (
                  'Guardar Nota'
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Tab Content: SEGUIMIENTO WHATSAPP ── */}
      {activeTab === 'whatsapp' && (
        <div className="space-y-6">
          {!hasPhone ? (
            <div className="bg-amber-50 border border-amber-200 text-amber-800 p-6 rounded-3xl flex flex-col items-center text-center animate-fade-in">
              <AlertTriangle className="w-8 h-8 text-amber-500 mb-2 animate-bounce" />
              <p className="font-black uppercase tracking-widest text-[10px] mb-1">Sin teléfono de contacto</p>
              <p className="text-xs font-semibold text-amber-700 max-w-md">
                Este lead no registró un número de teléfono válido. Puedes intentar contactarlo por correo electrónico haciendo clic en su email en la fila superior: <a href={`mailto:${lead.email}`} className="underline font-bold text-violet-700 hover:text-violet-900 transition-colors">{lead.email}</a>.
              </p>
            </div>
          ) : (
            <div className="space-y-5 animate-fade-in">
              
              {/* Template selector cards */}
              <div>
                <p className="text-slate-900 text-xs font-black uppercase tracking-widest mb-3">1. Selecciona una Plantilla de Ventas:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {templates.map(t => {
                    const isSelected = selectedTemplateId === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => selectTemplate(t.id)}
                        className={`p-3.5 rounded-2xl border text-left transition-all hover:scale-[1.02] active:scale-95 cursor-pointer ${
                          isSelected 
                            ? 'bg-emerald-50/70 border-emerald-500 shadow-sm' 
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-base">{t.emoji}</span>
                          <span className={`font-black text-[10px] uppercase tracking-wider ${isSelected ? 'text-emerald-800' : 'text-slate-800'}`}>
                            {t.name}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-400 font-bold leading-relaxed">
                          {t.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Simulated chat container */}
              <div>
                <p className="text-slate-900 text-xs font-black uppercase tracking-widest mb-3">2. Previsualiza y Edita el Mensaje:</p>
                <div className="bg-[#efeae2] border border-slate-300/40 rounded-3xl overflow-hidden shadow-inner flex flex-col">
                  
                  {/* WhatsApp mock header */}
                  <div className="bg-[#075e54] px-5 py-3 flex items-center gap-3 text-white">
                    <div className="w-7.5 h-7.5 bg-emerald-700/80 rounded-full flex items-center justify-center font-black text-xs text-white shrink-0">
                      {(lead.name ?? '?').charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-bold text-xs leading-none">{capitalizeName(lead.name)}</div>
                      <div className="text-[9px] text-emerald-200/90 font-bold tracking-wide mt-0.5">En línea (WhatsApp Web)</div>
                    </div>
                    <div className="ml-auto text-[9px] bg-emerald-700/60 border border-emerald-500/20 px-2 py-0.5 rounded font-black tracking-widest uppercase">
                      CRM Vendedor
                    </div>
                  </div>

                  {/* WhatsApp mock chat body */}
                  <div 
                    className="p-4 flex flex-col gap-3 min-h-[180px] bg-[#e5ddd5] relative" 
                    style={{ 
                      backgroundImage: 'radial-gradient(rgba(0,0,0,0.04) 1px, transparent 0)', 
                      backgroundSize: '12px 12px' 
                    }}
                  >
                    {/* Incoming customer original inquiry */}
                    <div className="self-start bg-white text-slate-700 rounded-2xl rounded-tl-none px-4 py-2.5 text-xs shadow-sm max-w-[85%] font-medium border border-slate-200/20">
                      <div className="text-[8px] font-black text-violet-600 uppercase tracking-widest mb-1">📋 Consulta de Cliente:</div>
                      <div className="italic text-slate-500 leading-relaxed">&quot;Interés en: {serviceInterest}. {lead.message || 'Sin descripción de proyecto.'}&quot;</div>
                    </div>
                    
                    {/* Outgoing editable chat bubble */}
                    <div className="self-end bg-[#d9fdd3] text-slate-800 rounded-2xl rounded-tr-none p-4 shadow-sm max-w-[85%] relative border border-emerald-100/50 flex flex-col">
                      <div className="text-[8px] font-black text-emerald-700 uppercase tracking-widest mb-2 flex items-center gap-1">
                        <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
                        Mensaje Editable antes de Enviar:
                      </div>
                      
                      <textarea
                        value={customText}
                        onChange={e => setCustomText(e.target.value)}
                        className="bg-transparent border-0 outline-none text-[11px] font-bold text-slate-800 w-full min-h-[110px] resize-none font-sans p-0 m-0 focus:ring-0 leading-relaxed border-transparent focus:border-transparent select-text"
                        placeholder="Edita el mensaje de WhatsApp aquí..."
                      />
                      
                      <div className="self-end flex items-center gap-1 mt-2.5 text-[8px] text-slate-400 font-bold uppercase tracking-wider leading-none">
                        <span>{new Date().toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })}</span>
                        <span className="text-[#34b7f1] font-bold">✓✓</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* WhatsApp mock footer / action sender */}
                  <div className="bg-[#f0f2f5] px-6 py-4.5 border-t border-slate-200/50 flex items-center justify-between gap-4 flex-wrap">
                    <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-slate-300" />
                      Destinatario: {lead.phone}
                    </span>
                    <div className="flex items-center gap-3">
                      {saved && (
                        <span className="text-[9px] text-emerald-600 font-black uppercase tracking-widest animate-pulse">
                          ✓ Guardado en Bitácora
                        </span>
                      )}
                      <button
                        onClick={handleSendWhatsApp}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25d366] hover:bg-[#20ba5a] text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-md active:scale-95 transition-all cursor-pointer border-0"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-white fill-white shrink-0" />
                        Abrir WhatsApp y Registrar en Bitácora 🚀
                      </button>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          )}
        </div>
      )}

      {/* ── Tab Content: PROYECTO DE DESARROLLO (Milestones Timeline) ── */}
      {activeTab === 'project' && (
        <div className="space-y-6 animate-fade-in">
          
          {/* Project Error Notification (Resilience DB checks) */}
          {projectError && (
            <div className="bg-rose-50 border border-rose-200 text-rose-700 p-5 rounded-2xl mb-4 text-xs">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                <span className="font-black uppercase tracking-widest text-[10px] text-rose-800">⚠️ Error de Base de Datos</span>
              </div>
              <p className="font-semibold mb-3">La columna `project` no parece existir en tu tabla `leads` de Supabase.</p>
              <div className="bg-white/80 p-3.5 rounded-xl border border-rose-100 font-mono text-[10px] text-slate-700 select-all leading-normal">
                <p className="font-sans font-bold text-slate-800 mb-1">Copia y ejecuta este script en la consola de Supabase:</p>
                <strong>ALTER TABLE public.leads ADD COLUMN project JSONB;</strong>
              </div>
              <p className="text-[9px] text-rose-500 font-bold mt-2 uppercase tracking-wide">Código de diagnóstico: {projectError}</p>
            </div>
          )}

          {/* 1. NO PROJECT ASSIGNED YET: Creation Form */}
          {!lead.project ? (
            <div className="bg-slate-50/50 rounded-3xl border border-dashed border-slate-200 p-8 flex flex-col lg:flex-row gap-8">
              
              {/* Form Side */}
              <div className="flex-1 space-y-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-violet-50 text-violet-700 rounded-full text-[9px] font-black uppercase tracking-widest border border-violet-100">
                    <Layers className="w-3 h-3" />
                    Nueva Asignación
                  </span>
                  <h3 className="font-black text-slate-900 text-lg tracking-tight mt-2.5">
                    🚀 Iniciar Proyecto de Desarrollo
                  </h3>
                  <p className="text-slate-400 text-xs mt-1 font-semibold leading-relaxed">
                    Configura este prospecto como un proyecto activo. Se creará una línea de tiempo con las 5 fases estándar de Webunica.
                  </p>
                </div>

                <form onSubmit={handleCreateProject} className="space-y-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Nombre del Proyecto</label>
                    <input
                      type="text"
                      required
                      value={projectName}
                      onChange={e => setProjectName(e.target.value)}
                      placeholder="Ej. Tienda E-commerce - Pyme"
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200/50 transition-all"
                    />
                  </div>

                  {/* Description field */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Descripción del Alcance (Opcional)</label>
                    <textarea
                      rows={2}
                      value={projectDesc}
                      onChange={e => setProjectDesc(e.target.value)}
                      placeholder="Breve detalle técnico, integraciones especiales o integraciones requeridas..."
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200/50 transition-all resize-none"
                    />
                  </div>

                  {/* Dates Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Fecha de Inicio</label>
                      <input
                        type="date"
                        value={startDate}
                        onChange={e => setStartDate(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:border-violet-500 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Entrega Estimada (Opcional)</label>
                      <input
                        type="date"
                        value={deliveryDate}
                        onChange={e => setDeliveryDate(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:border-violet-500 transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={projectSaving}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-zinc-950 hover:bg-slate-800 text-white text-[10px] font-black uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-xl active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {projectSaving ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Creando Línea de Tiempo...
                      </>
                    ) : (
                      <>
                        🚀 Inicializar Proyecto con Etapas de Webunica
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Preview Side */}
              <div className="w-full lg:w-[320px] bg-white border border-slate-200 rounded-2xl p-5 flex flex-col shadow-sm">
                <span className="text-[8px] font-black uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <RefreshCw className="w-3 h-3 text-violet-500" />
                  Previsualización de Etapas
                </span>
                
                <div className="space-y-3.5 flex-1">
                  {DEFAULT_STAGES.map((s, idx) => (
                    <div key={idx} className="flex gap-2.5">
                      <div className="flex flex-col items-center shrink-0">
                        <div className="w-4 h-4 rounded-full border-2 border-slate-300 bg-white flex items-center justify-center text-[8px] font-black text-slate-400">
                          {idx + 1}
                        </div>
                        {idx !== DEFAULT_STAGES.length - 1 && (
                          <div className="w-0.5 flex-1 bg-slate-100 min-h-[16px] my-1" />
                        )}
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-700 leading-tight">{s.name}</p>
                        <p className="text-[9px] text-slate-400 font-bold leading-snug mt-0.5 line-clamp-1">{s.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            
            // 2. PROJECT ASSIGNED: Status, Progress & Timeline View
            <div className="space-y-6">
              
              {/* Project Status Summary Card */}
              <div className="bg-zinc-950 rounded-3xl p-6 text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
                {/* Background glow decoration */}
                <div className="absolute right-0 top-0 w-[200px] h-[200px] bg-gradient-to-br from-violet-600/20 to-transparent blur-3xl rounded-full pointer-events-none" />

                <div className="space-y-2.5 z-10">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-violet-500/20 border border-violet-400/20 text-violet-400 rounded-full text-[9px] font-black uppercase tracking-widest">
                      💻 En Desarrollo
                    </span>
                    {lead.project.start_date && (
                      <span className="text-[9px] text-zinc-400 font-bold flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                        Inició: {new Date(lead.project.start_date).toLocaleDateString('es-CL')}
                      </span>
                    )}
                    {lead.project.delivery_date && (
                      <span className="text-[9px] text-violet-400 font-black flex items-center gap-1 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/10">
                         entrega: {new Date(lead.project.delivery_date).toLocaleDateString('es-CL')}
                      </span>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-black tracking-tight">{lead.project.name}</h3>
                    {lead.project.description && (
                      <p className="text-xs text-zinc-400 font-medium max-w-xl mt-1.5 leading-relaxed">
                        {lead.project.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Progress Circle & Text */}
                <div className="flex items-center gap-4 shrink-0 z-10 w-full md:w-auto border-t md:border-t-0 border-zinc-800/80 pt-4 md:pt-0">
                  <div className="flex-1 md:flex-initial">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1.5">
                      <span>Progreso General</span>
                      <span className="text-violet-400">{projectStats.pct}%</span>
                    </div>
                    {/* Premium Progress Bar */}
                    <div className="w-full md:w-48 bg-zinc-800 rounded-full h-2 overflow-hidden border border-zinc-700/50">
                      <div 
                        className="bg-gradient-to-r from-violet-500 to-indigo-500 h-full rounded-full transition-all duration-500 ease-out" 
                        style={{ width: `${projectStats.pct}%` }}
                      />
                    </div>
                    <span className="text-[9px] text-zinc-500 font-bold mt-1 block">
                      {projectStats.completed} de {projectStats.total} etapas completadas
                    </span>
                  </div>

                  <button
                    onClick={handleDeleteProject}
                    disabled={projectSaving}
                    className="p-2.5 bg-zinc-900 hover:bg-zinc-800 hover:text-rose-400 text-zinc-500 rounded-xl transition-all border border-zinc-800 cursor-pointer active:scale-90"
                    title="Desasociar/Eliminar Proyecto"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Vertical Timeline Interactive Checklist */}
              <div className="relative pl-4 space-y-6">
                {/* Timeline vertical bar */}
                <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-slate-100" />

                {lead.project.stages.length === 0 ? (
                  <div className="bg-slate-50 border border-dashed border-slate-200 text-slate-400 p-8 rounded-3xl text-center italic text-xs font-semibold">
                    No hay etapas registradas en este proyecto. Utiliza el formulario inferior para agregar una.
                  </div>
                ) : (
                  lead.project.stages.map((s, idx) => {
                    const isCompleted = s.status === 'completed';
                    const isInProgress = s.status === 'in_progress';
                    
                    return (
                      <div 
                        key={s.id} 
                        className={`flex gap-5 relative transition-all group duration-300 ${
                          isCompleted ? 'opacity-85' : ''
                        }`}
                      >
                        
                        {/* Timeline Milestone Indicator Node */}
                        <div className="flex flex-col items-center z-10 shrink-0">
                          <button
                            onClick={() => handleSetStageStatus(s.id, isCompleted ? 'pending' : 'completed')}
                            className={`w-6 h-6 rounded-full flex items-center justify-center transition-all cursor-pointer border-2 ${
                              isCompleted 
                                ? 'bg-emerald-500 border-emerald-500 text-white shadow-md shadow-emerald-200' 
                                : isInProgress
                                  ? 'bg-violet-600 border-violet-600 text-white shadow-md shadow-violet-200 animate-pulse'
                                  : 'bg-white border-slate-300 hover:border-slate-400 text-transparent'
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                          </button>
                        </div>

                        {/* Stage Card */}
                        <div 
                          className={`flex-1 p-5 rounded-2xl border transition-all duration-300 ${
                            isCompleted 
                              ? 'bg-emerald-50/20 border-emerald-200/50 shadow-sm' 
                              : isInProgress
                                ? 'bg-violet-50/20 border-violet-200/50 ring-1 ring-violet-200/30 shadow-sm'
                                : 'bg-white border-slate-200 hover:border-slate-300/80 shadow-sm'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h4 className={`text-xs font-black uppercase tracking-wider leading-tight ${
                                  isCompleted ? 'text-slate-500 line-through' : 'text-slate-800'
                                }`}>
                                  {s.name}
                                </h4>
                                
                                {/* Status badges selector */}
                                <div className="flex items-center gap-1">
                                  <button
                                    onClick={() => handleSetStageStatus(s.id, 'pending')}
                                    className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider transition-colors ${
                                      s.status === 'pending'
                                        ? 'bg-slate-100 text-slate-600 border border-slate-200'
                                        : 'text-slate-300 hover:text-slate-500 bg-transparent'
                                    }`}
                                  >
                                    Pendiente
                                  </button>
                                  <button
                                    onClick={() => handleSetStageStatus(s.id, 'in_progress')}
                                    className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider transition-colors ${
                                      s.status === 'in_progress'
                                        ? 'bg-violet-100 text-violet-700 border border-violet-200 animate-pulse'
                                        : 'text-slate-300 hover:text-violet-500 bg-transparent'
                                    }`}
                                  >
                                    En Proceso
                                  </button>
                                  <button
                                    onClick={() => handleSetStageStatus(s.id, 'completed')}
                                    className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider transition-colors ${
                                      s.status === 'completed'
                                        ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                                        : 'text-slate-300 hover:text-emerald-500 bg-transparent'
                                    }`}
                                  >
                                    Completado
                                  </button>
                                </div>
                              </div>

                              {s.description && (
                                <p className={`text-[10px] font-bold leading-relaxed ${
                                  isCompleted ? 'text-slate-400' : 'text-slate-500'
                                }`}>
                                  {s.description}
                                </p>
                              )}

                              {isCompleted && s.completed_at && (
                                <span className="inline-block text-[8px] text-emerald-600 font-bold bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded mt-1.5 uppercase tracking-wide">
                                  Terminado: {new Date(s.completed_at).toLocaleDateString('es-CL')} {new Date(s.completed_at).toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })}
                                </span>
                              )}
                            </div>

                            <button
                              onClick={() => handleDeleteStage(s.id)}
                              disabled={projectSaving}
                              className="opacity-0 group-hover:opacity-100 hover:text-rose-600 text-slate-300 p-1.5 rounded-lg transition-all shrink-0 hover:bg-slate-50 cursor-pointer"
                              title="Remover esta etapa"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                      </div>
                    );
                  })
                )}
              </div>

              {/* Add New Custom Stage Form (Sticky/Bottom panel) */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mt-8">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-3 block flex items-center gap-1.5">
                  <Plus className="w-3.5 h-3.5 text-violet-500" />
                  Agregar Nueva Etapa Personalizada
                </span>
                
                <form onSubmit={handleAddNewStage} className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-end">
                  <div className="md:col-span-4 space-y-1">
                    <label className="text-[8px] font-black uppercase tracking-widest text-slate-400 pl-0.5">Nombre de la Etapa</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Integración de Despachos"
                      value={newStageName}
                      onChange={e => setNewStageName(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-violet-500 transition-all"
                    />
                  </div>
                  
                  <div className="md:col-span-6 space-y-1">
                    <label className="text-[8px] font-black uppercase tracking-widest text-slate-400 pl-0.5">Descripción o Entregable</label>
                    <input
                      type="text"
                      placeholder="Ej. Configuración técnica del plugin Starken y pruebas de tarifas."
                      value={newStageDesc}
                      onChange={e => setNewStageDesc(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 placeholder:text-slate-300 focus:outline-none focus:border-violet-500 transition-all"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      disabled={projectSaving || !newStageName.trim()}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-zinc-900 hover:bg-slate-800 disabled:opacity-40 text-white text-[9px] font-black uppercase tracking-widest rounded-xl transition-all cursor-pointer shrink-0"
                    >
                      {projectSaving ? (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      ) : (
                        <>
                          <Plus className="w-3 h-3" />
                          Agregar
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

            </div>
          )}
        </div>
      )}

    </div>
  );
}
