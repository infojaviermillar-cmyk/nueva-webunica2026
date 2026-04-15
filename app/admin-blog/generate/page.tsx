'use client';

import { useState } from 'react';
import { Sparkles, Save, Eye, Loader2, Wand2, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { saveBlogPost } from '@/lib/blog-actions';

export default function BlogGeneratorPage() {
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [generatedPost, setGeneratedPost] = useState<any>(null);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError('');
    setGeneratedPost(null);

    try {
      const res = await fetch('/api/blog/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          topic, 
          keywords: keywords.split(',').map(k => k.trim()) 
        }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);
      
      setGeneratedPost(data);
    } catch (err: any) {
      setError(err.message || 'Error al generar el contenido');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSave = async () => {
    if (!generatedPost) return;
    setIsSaving(true);
    setError('');

    try {
      const { success, post } = await saveBlogPost(generatedPost);
      if (success) {
        alert('¡Post publicado con éxito!');
        router.push(`/blog/${post.slug}`);
      }
    } catch (err: any) {
      setError(err.message || 'Error al guardar el post');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Input Panel */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-brand-purple/5 border border-slate-100">
              <h1 className="text-3xl font-black text-slate-900 tracking-tighter mb-6 flex items-center gap-3">
                <Sparkles className="text-brand-purple w-8 h-8" />
                AI Content
              </h1>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Tema Principal</label>
                  <input 
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Ej: Tendencias Shopify 2025"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 transition-all font-medium"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Keywords (separadas por coma)</label>
                  <textarea 
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    placeholder="Shopify Chile, SEO, diseño web"
                    rows={3}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-purple/20 transition-all font-medium"
                  />
                </div>

                <button 
                  onClick={handleGenerate}
                  disabled={isGenerating || !topic}
                  className="w-full bg-brand-purple text-white font-black rounded-2xl py-5 flex items-center justify-center gap-3 hover:bg-brand-purple/90 transition-all shadow-lg shadow-brand-purple/20 disabled:opacity-50"
                >
                  {isGenerating ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <Wand2 className="w-6 h-6" />
                  )}
                  Generar Artículo
                </button>
              </div>
              
              {error && (
                <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-xl text-xs font-bold border border-red-100">
                  {error}
                </div>
              )}
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:w-2/3">
            {generatedPost ? (
              <div className="bg-white rounded-[2.5rem] p-12 shadow-xl border border-slate-100 animate-in fade-in slide-in-from-bottom-5">
                <div className="flex items-center justify-between mb-10 pb-10 border-b border-slate-100">
                  <h2 className="text-sm font-black text-brand-purple uppercase tracking-widest">Vista Previa SEO</h2>
                  <div className="flex gap-4">
                    <button className="px-6 py-3 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-all flex items-center gap-2">
                       <Eye className="w-4 h-4" />
                       Editar
                    </button>
                    <button 
                      onClick={handleSave}
                      disabled={isSaving}
                      className="px-6 py-3 bg-brand-green text-white font-black rounded-xl hover:bg-brand-green/90 transition-all flex items-center gap-2 shadow-lg shadow-brand-green/20"
                    >
                       {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                       Guardar Post
                    </button>
                  </div>
                </div>

                <div className="space-y-10">
                  <div>
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3 text-center">Preview Google</h3>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 max-w-xl mx-auto font-sans">
                       <div className="text-blue-700 text-xl font-medium mb-1 line-clamp-1">{generatedPost.seo_title}</div>
                       <div className="text-slate-500 text-sm mb-1">webunica.cl › blog › {generatedPost.slug}</div>
                       <div className="text-slate-600 text-sm line-clamp-2">{generatedPost.seo_description}</div>
                    </div>
                  </div>

                  <div className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tighter">
                    <h1 className="text-5xl border-b border-slate-100 pb-8">{generatedPost.title}</h1>
                    <div className="italic text-slate-400 mb-10">{generatedPost.excerpt}</div>
                    <div dangerouslySetInnerHTML={{ __html: generatedPost.content }} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center p-20 text-center bg-slate-100/50 rounded-[3.5rem] border border-dashed border-slate-200">
                 <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-8">
                   <Search className="w-10 h-10 text-slate-300" />
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-2">Listo para crear magia</h3>
                 <p className="text-slate-500 max-w-xs">Ingresa un tema a la izquierda y deja que la IA redacte un artículo optimizado para Webunica.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
