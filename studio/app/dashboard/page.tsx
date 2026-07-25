'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase/client';
import { 
  Plus, 
  Folder, 
  LogOut, 
  User, 
  Briefcase, 
  ChevronRight,
  ShieldAlert,
  ShoppingCart,
  Globe,
  Code2,
  X,
  Building2,
  Tag,
  Layers,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

type Project = {
  id: string;
  name: string;
  company: string;
  industry: string;
  type: string;
  status: string;
  createdAt?: string;
};

const PROJECT_TYPES = [
  { value: 'Ecommerce',  label: 'E-commerce',    icon: ShoppingCart, color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
  { value: 'Sitio Web',  label: 'Sitio Web',      icon: Globe,        color: 'text-sky-600 bg-sky-50 border-sky-200' },
  { value: 'SaaS',       label: 'SaaS / App',     icon: Code2,        color: 'text-violet-600 bg-violet-50 border-violet-200' },
];

const STATUS_OPTIONS = [
  { value: 'En diseño',      color: 'bg-amber-100 text-amber-800' },
  { value: 'En revisión',    color: 'bg-blue-100 text-blue-800' },
  { value: 'Aprobado',       color: 'bg-emerald-100 text-emerald-800' },
  { value: 'En desarrollo',  color: 'bg-purple-100 text-purple-800' },
];

const INDUSTRIES = [
  'Tecnología', 'Moda y Vestuario', 'Hogar y Decoración', 'Alimentos y Bebidas',
  'Deportes', 'Salud y Bienestar', 'Educación', 'Automotriz', 'Servicios', 'General'
];

const STORAGE_KEY = 'studio_projects';

const defaultProjects: Project[] = [
  {
    id: 'maxxgo',
    name: 'Maxxgo',
    company: 'Pacific Color',
    industry: 'Tecnología',
    type: 'Ecommerce',
    status: 'En diseño',
    createdAt: '2026-07-01'
  }
];

function getStatusStyle(status: string) {
  return STATUS_OPTIONS.find(s => s.value === status)?.color ?? 'bg-slate-100 text-slate-600';
}

function getTypeIcon(type: string) {
  const found = PROJECT_TYPES.find(t => t.value === type);
  return found ? found.icon : Folder;
}

function getTypeColor(type: string) {
  const found = PROJECT_TYPES.find(t => t.value === type);
  return found ? found.color : 'text-slate-500 bg-slate-50 border-slate-200';
}

export default function DashboardPage() {
  const [user, setUser] = useState<{ email: string; role: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const [projects, setProjects] = useState<Project[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Form state
  const [form, setForm] = useState({
    name: '',
    company: '',
    industry: 'Tecnología',
    type: 'Ecommerce',
    status: 'En diseño',
  });
  const [formError, setFormError] = useState('');
  const [saving, setSaving] = useState(false);

  // Load user and projects from localStorage
  useEffect(() => {
    async function checkUser() {
      const stored = localStorage.getItem('studio_user');
      if (stored) {
        setUser(JSON.parse(stored));
        setLoading(false);
        return;
      }

      if (supabase) {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          const email = session.user.email || '';
          const role = session.user.user_metadata?.role || (email.endsWith('@webunica.cl') ? 'admin' : 'client');
          const userData = { email, role };
          localStorage.setItem('studio_user', JSON.stringify(userData));
          setUser(userData);
          setLoading(false);
          return;
        }
      }

      router.push('/login');
    }

    checkUser();
  }, [router]);

  // Load persisted projects
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setProjects(JSON.parse(saved));
      } catch {
        setProjects(defaultProjects);
      }
    } else {
      setProjects(defaultProjects);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProjects));
    }
  }, []);

  const handleLogout = async () => {
    if (supabase) await supabase.auth.signOut();
    localStorage.removeItem('studio_user');
    router.push('/login');
  };

  const handleOpenModal = () => {
    setForm({ name: '', company: '', industry: 'Tecnología', type: 'Ecommerce', status: 'En diseño' });
    setFormError('');
    setShowCreateModal(true);
  };

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!form.name.trim()) { setFormError('El nombre del proyecto es obligatorio.'); return; }
    if (!form.company.trim()) { setFormError('El nombre de la empresa es obligatorio.'); return; }

    const id = form.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

    if (projects.find(p => p.id === id)) {
      setFormError('Ya existe un proyecto con ese nombre. Elige otro.');
      return;
    }

    setSaving(true);
    await new Promise(r => setTimeout(r, 500)); // micro-delay para UX

    const newProject: Project = {
      id,
      name: form.name.trim(),
      company: form.company.trim(),
      industry: form.industry,
      type: form.type,
      status: form.status,
      createdAt: new Date().toISOString().split('T')[0],
    };

    const updated = [...projects, newProject];
    setProjects(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setSaving(false);
    setShowCreateModal(false);
  };

  const handleDeleteProject = (id: string) => {
    if (id === 'maxxgo') return; // proteger el demo
    const updated = projects.filter(p => p.id !== id);
    setProjects(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center font-sans">
        <div className="animate-pulse text-indigo-600 font-medium">Cargando panel...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Top Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-indigo-600" />
            <span className="font-bold text-xl tracking-tight">Commerce Studio</span>
            <span className="text-[10px] bg-indigo-600 text-white font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ml-1">Beta</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full border border-slate-200">
              <User className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-semibold text-slate-700">{user?.email}</span>
              <span className="text-[10px] bg-indigo-600 text-white font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                {user?.role === 'admin' ? 'Admin' : 'Cliente'}
              </span>
            </div>
            
            <button 
              onClick={handleLogout}
              className="text-slate-500 hover:text-rose-600 transition-colors p-2 rounded-full hover:bg-slate-100"
              title="Cerrar sesión"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Proyectos Activos</h1>
            <p className="text-slate-500 text-sm mt-1">
              {user?.role === 'admin' 
                ? 'Gestiona y crea propuestas de diseño para tus clientes.' 
                : 'Revisa las propuestas de wireframes y personaliza el diseño de tu tienda.'}
            </p>
          </div>

          {user?.role === 'admin' && (
            <button 
              onClick={handleOpenModal}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-2xl text-sm font-semibold flex items-center gap-2 shadow-lg shadow-indigo-600/10 active:scale-95 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" /> Nuevo Proyecto
            </button>
          )}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const TypeIcon = getTypeIcon(project.type);
            return (
              <div 
                key={project.id}
                className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-2.5 rounded-2xl border ${getTypeColor(project.type)}`}>
                      <TypeIcon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${getStatusStyle(project.status)}`}>
                        {project.status}
                      </span>
                      {user?.role === 'admin' && project.id !== 'maxxgo' && (
                        <button
                          onClick={() => handleDeleteProject(project.id)}
                          className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-rose-500 transition-all p-1 rounded-full cursor-pointer"
                          title="Eliminar proyecto"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-1">{project.name}</h3>
                  <p className="text-slate-400 text-sm mb-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" /> {project.company}
                  </p>
                  <p className="text-slate-400 text-sm mb-6 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" /> {project.industry} · {project.type}
                  </p>
                </div>

                <Link 
                  href={`/proyectos/${project.id}/wireframes`}
                  className="w-full inline-flex items-center justify-between bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-100 text-slate-700 hover:text-indigo-600 py-3.5 px-5 rounded-2xl font-bold text-sm transition-all"
                >
                  Revisar Wireframes
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}

          {/* Empty state add button */}
          {user?.role === 'admin' && (
            <button
              onClick={handleOpenModal}
              className="bg-white border-2 border-dashed border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30 rounded-[2rem] p-8 flex flex-col items-center justify-center gap-3 transition-all cursor-pointer text-slate-400 hover:text-indigo-500 group min-h-[220px]"
            >
              <div className="p-4 bg-slate-100 group-hover:bg-indigo-100 rounded-2xl transition-colors">
                <Plus className="w-6 h-6" />
              </div>
              <span className="text-sm font-semibold">Agregar nuevo proyecto</span>
            </button>
          )}
        </div>
      </main>

      {/* ── Create Project Modal ── */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="bg-white border border-slate-100 rounded-[2.5rem] w-full max-w-lg shadow-2xl animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-10 pt-10 pb-6 border-b border-slate-100">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">Nuevo Proyecto</h2>
                <p className="text-sm text-slate-500 mt-0.5">Completa los datos del cliente</p>
              </div>
              <button 
                onClick={() => setShowCreateModal(false)} 
                className="text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateProject} className="px-10 py-8 space-y-6">

              {/* Nombre del Proyecto */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                  Nombre del Proyecto *
                </label>
                <input 
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all text-slate-800 font-medium placeholder-slate-300"
                  placeholder="Ej. FashionStore Chile"
                  autoFocus
                />
              </div>

              {/* Empresa / Cliente */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                  Empresa / Cliente *
                </label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="text"
                    required
                    value={form.company}
                    onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all text-slate-800 font-medium placeholder-slate-300"
                    placeholder="Ej. Pacific Color SpA"
                  />
                </div>
              </div>

              {/* Industria */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                  Industria
                </label>
                <div className="relative">
                  <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <select
                    value={form.industry}
                    onChange={e => setForm(f => ({ ...f, industry: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all text-slate-800 font-medium appearance-none cursor-pointer"
                  >
                    {INDUSTRIES.map(ind => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Tipo de Proyecto */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">
                  Tipo de Proyecto
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {PROJECT_TYPES.map(pt => {
                    const Icon = pt.icon;
                    const isSelected = form.type === pt.value;
                    return (
                      <button
                        key={pt.value}
                        type="button"
                        onClick={() => setForm(f => ({ ...f, type: pt.value }))}
                        className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                          isSelected 
                            ? 'border-indigo-500 bg-indigo-50 text-indigo-700' 
                            : 'border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="text-xs font-bold">{pt.label}</span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Estado */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                  Estado Inicial
                </label>
                <div className="relative">
                  <Layers className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <select
                    value={form.status}
                    onChange={e => setForm(f => ({ ...f, status: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all text-slate-800 font-medium appearance-none cursor-pointer"
                  >
                    {STATUS_OPTIONS.map(s => (
                      <option key={s.value} value={s.value}>{s.value}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Error */}
              {formError && (
                <div className="flex items-center gap-2 text-rose-600 bg-rose-50 border border-rose-100 rounded-xl px-4 py-3 text-sm font-medium">
                  <ShieldAlert className="w-4 h-4 flex-shrink-0" />
                  {formError}
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <button 
                  type="button" 
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  disabled={saving}
                  className="flex-1 py-3.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white rounded-2xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {saving ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Creando...
                    </>
                  ) : 'Crear Proyecto'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
