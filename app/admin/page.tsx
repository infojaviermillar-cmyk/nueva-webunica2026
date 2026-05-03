import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { 
  BarChart3, 
  BookOpen, 
  MessageSquare, 
  Settings, 
  Users, 
  Sparkles, 
  PlusCircle,
  TrendingUp,
  FileText
} from 'lucide-react';

export default async function AdminDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Simple Admin Check by Email
  if (!user || user.email !== 'javiermillarv@gmail.com') {
    redirect('/mi-cuenta');
  }
  const adminModules = [
    {
      title: "Generador de Blog",
      desc: "Planifica y genera artículos SEO con IA para posicionar en Google.",
      icon: <Sparkles className="w-8 h-8 text-violet-600" />,
      href: "/admin-blog",
      count: "8 Categorías",
      color: "bg-violet-50 border-violet-100",
      cta: "Ir al Blog"
    },
    {
      title: "Testimonios",
      desc: "Gestiona las reseñas de clientes y el social proof de la web.",
      icon: <MessageSquare className="w-8 h-8 text-emerald-600" />,
      href: "/admin/testimonials",
      count: "Social Proof",
      color: "bg-emerald-50 border-emerald-100",
      cta: "Gestionar"
    },
    {
      title: "Leads Capturados",
      desc: "Revisa los contactos generados por el formulario de WhatsApp.",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      href: "/admin/leads",
      count: "Embudo Activo",
      color: "bg-blue-50 border-blue-100",
      cta: "Ver Leads"
    },
    {
      title: "Calculadora de Ads",
      desc: "Configuración de variables para el simulador de ROI.",
      icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
      href: "/calculadora-de-campana-meta-ads-facebook",
      count: "Herramienta",
      color: "bg-orange-50 border-orange-100",
      cta: "Ver Vista Pública"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-[22vh] lg:pt-48 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Welcome Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-6 w-fit">
            <Settings className="w-3.5 h-3.5" />
            Admin Panel v2.0
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-6">
            Centro de <br/>
            <span className="text-violet-600 italic font-serif lowercase font-light">Operaciones</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl font-medium">
            Gestiona el contenido, los testimonios y los leads de Webunica desde un solo lugar.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {adminModules.map((mod, i) => (
            <Link 
              key={i} 
              href={mod.href}
              className={`group p-10 lg:p-14 border rounded-[3rem] bg-white transition-all hover:shadow-2xl hover:shadow-zinc-200 hover:scale-[1.01] flex flex-col`}
            >
              <div className={`w-16 h-16 ${mod.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {mod.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">{mod.title}</h2>
                  <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest">{mod.count}</span>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed mb-10">
                  {mod.desc}
                </p>
              </div>
              <div className="flex items-center gap-2 text-zinc-900 font-black uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                {mod.cta}
                <PlusCircle className="w-4 h-4 text-violet-600" />
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Stats or Footer info */}
        <div className="mt-20 p-10 bg-zinc-900 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/20 blur-[100px] rounded-full" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Estado del Sistema</h3>
            <p className="text-zinc-400 font-light max-w-md">Todos los módulos están operativos. La base de datos de Supabase está sincronizada.</p>
          </div>
          <div className="flex gap-12 relative z-10">
            <div>
              <div className="text-xs text-zinc-500 font-black uppercase tracking-widest mb-1">Último Lead</div>
              <div className="text-2xl font-black">Hace 2h</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 font-black uppercase tracking-widest mb-1">Post Generados</div>
              <div className="text-2xl font-black">12</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

