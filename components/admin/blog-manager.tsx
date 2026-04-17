'use client';

import React, { useState, useEffect } from 'react';
import { getAdminPosts, deleteBlogPost } from '@/lib/blog-actions';
import { 
  Trash2, 
  ExternalLink, 
  FileEdit, 
  Loader2, 
  BookOpen,
  Calendar,
  Tag,
  Search
} from 'lucide-react';
import Link from 'next/link';

export default function BlogManager() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    setLoading(true);
    const result = await getAdminPosts();
    if (result.success) {
      setPosts(result.posts || []);
    }
    setLoading(false);
  }

  async function handleDelete(id: string) {
    if (!confirm('¿Estás seguro de eliminar este artículo? Esta acción no se puede deshacer.')) return;
    setLoading(true);
    const result = await deleteBlogPost(id);
    if (result.success) {
      loadPosts();
    } else {
      alert('Error: ' + result.error);
    }
    setLoading(false);
  }

  const filteredPosts = posts.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading && posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <Loader2 className="w-10 h-10 text-violet-600 animate-spin mb-4" />
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Cargando Artículos...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Filters and Stats */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text"
            placeholder="Buscar por título o categoría..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-100 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-violet-500 transition-all font-medium text-slate-700"
          />
        </div>
        <div className="flex gap-4">
          <Link 
            href="/admin-blog"
            className="px-6 py-4 bg-violet-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center gap-2 hover:bg-violet-700 transition-all shadow-lg shadow-violet-600/20"
          >
            Generar con IA
          </Link>
        </div>
      </div>

      {/* Table-like List */}
      <div className="bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Artículo</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Categoría</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Estado</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredPosts.map((post) => (
                <tr key={post.id} className="group hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-900 mb-1 group-hover:text-violet-600 transition-colors line-clamp-1">{post.title}</span>
                      <span className="text-[10px] text-slate-400 flex items-center gap-1.5 font-medium">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-violet-50 text-violet-700 rounded-full text-[10px] font-black uppercase tracking-widest">
                      <Tag className="w-3 h-3" />
                      {post.category?.name || 'General'}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-widest ${post.status === 'published' ? 'text-emerald-500 bg-emerald-50' : 'text-amber-500 bg-amber-50'}`}>
                      {post.status === 'published' ? 'Publicado' : 'Borrador'}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex gap-2">
                       <Link 
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="p-3 text-slate-300 hover:text-blue-500 hover:bg-blue-50 rounded-xl transition-all"
                        title="Ver en la web"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                      <button 
                        onClick={() => handleDelete(post.id)}
                        className="p-3 text-slate-300 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all"
                        title="Eliminar"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <BookOpen className="w-12 h-12 text-slate-100 mx-auto mb-4" />
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No se encontraron artículos</p>
          </div>
        )}
      </div>
    </div>
  );
}
