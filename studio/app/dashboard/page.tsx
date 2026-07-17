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
  Layers, 
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import Link from 'next/link';

type Project = {
  id: string;
  name: string;
  company: string;
  industry: string;
  type: string;
  status: string;
};

export default function DashboardPage() {
  const [user, setUser] = useState<{ email: string; role: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Lista de proyectos iniciales con el proyecto demostrativo
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 'maxxgo',
      name: 'Maxxgo',
      company: 'Pacific Color',
      industry: 'Tecnología',
      type: 'Ecommerce',
      status: 'En diseño'
    }
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newProjName, setNewProjName] = useState('');
  const [newProjCompany, setNewProjCompany] = useState('');
  const [newProjIndustry, setNewProjIndustry] = useState('');

  useEffect(() => {
    async function checkUser() {
      // 1. Intentar leer de localStorage (soporte mock y persistencia rápida)
      const stored = localStorage.getItem('studio_user');
      if (stored) {
        setUser(JSON.parse(stored));
        setLoading(false);
        return;
      }

      // 2. Si no hay local, revisar Supabase Auth
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

      // 3. Si no hay sesión, mandar a login
      router.push('/login');
    }

    checkUser();
  }, [router]);

  const handleLogout = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
    localStorage.removeItem('studio_user');
    router.push('/login');
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjName || !newProjCompany) return;

    const newProject: Project = {
      id: newProjName.toLowerCase().replace(/\s+/g, '-'),
      name: newProjName,
      company: newProjCompany,
      industry: newProjIndustry || 'General',
      type: 'Ecommerce',
      status: 'En diseño'
    };

    setProjects([...projects, newProject]);
    setShowCreateModal(false);
    setNewProjName('');
    setNewProjCompany('');
    setNewProjIndustry('');
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
        <div className="flex justify-between items-center mb-8">
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
              onClick={() => setShowCreateModal(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-2xl text-sm font-semibold flex items-center gap-2 shadow-lg shadow-indigo-600/10 active:scale-95 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" /> Nuevo Proyecto
            </button>
          )}
        </div>

        {/* Project List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                    <Folder className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-1">{project.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{project.company} • {project.industry}</p>
              </div>

              <Link 
                href={`/proyectos/${project.id}/wireframes`}
                className="w-full inline-flex items-center justify-between bg-slate-50 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-100 text-slate-700 hover:text-indigo-600 py-3.5 px-5 rounded-2xl font-bold text-sm transition-all"
              >
                Revisar Wireframes
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Create Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-6 z-50">
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 max-w-md w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200">
              <h2 className="text-2xl font-bold mb-6">Crear Nuevo Proyecto</h2>
              <form onSubmit={handleCreateProject} className="space-y-5">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Nombre del Proyecto</label>
                  <input 
                    type="text" 
                    required
                    value={newProjName}
                    onChange={e => setNewProjName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all text-slate-700 font-medium"
                    placeholder="Ej. Maxxgo"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Empresa</label>
                  <input 
                    type="text" 
                    required
                    value={newProjCompany}
                    onChange={e => setNewProjCompany(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all text-slate-700 font-medium"
                    placeholder="Ej. Pacific Color"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Industria</label>
                  <input 
                    type="text" 
                    value={newProjIndustry}
                    onChange={e => setNewProjIndustry(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all text-slate-700 font-medium"
                    placeholder="Ej. Tecnología"
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <button 
                    type="button" 
                    onClick={() => setShowCreateModal(false)}
                    className="flex-1 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Cancelar
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Crear
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
