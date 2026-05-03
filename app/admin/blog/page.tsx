import Link from 'next/link';
import { ChevronLeft, BookOpen } from 'lucide-react';
import BlogManager from '@/components/admin/blog-manager';

export default function AdminBlogManagePage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-[22vh] lg:pt-48 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Breadcrumb */}
        <Link 
          href="/admin"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-violet-600 transition-colors text-xs font-black uppercase tracking-widest mb-10 group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver al Dashboard
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-50 border border-violet-100 rounded-full text-violet-700 text-[10px] font-black uppercase tracking-widest mb-6 w-fit">
            <BookOpen className="w-3.5 h-3.5" />
            Gestión de Contenidos SEO
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-6">
            Admin de <br/>
            <span className="text-violet-600 italic font-serif lowercase font-light">Artículos</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl font-medium">
            Gestiona, elimina o visualiza los artículos generados para tu blog.
          </p>
        </div>

        {/* Manager UI */}
        <BlogManager />

      </div>
    </div>
  );
}

