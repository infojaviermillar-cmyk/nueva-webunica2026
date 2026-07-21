'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Save, Loader2, Wand2, Search, ArrowLeft, CheckCircle2,
  ImageIcon, Upload, RefreshCw, Pencil, Check, X
} from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { saveBlogPost, uploadCoverImage, getBlogPostBySlug } from '@/lib/blog-actions';
import Link from 'next/link';
import Image from 'next/image';

export function GeneratorForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [sources, setSources] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [generatedPost, setGeneratedPost] = useState<any>(null);
  const [error, setError] = useState('');
  const [saved, setSaved] = useState(false);

  // Modo edición
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoadingPost, setIsLoadingPost] = useState(false);

  // Opción para generar portada con IA
  const [generateImageWithAI, setGenerateImageWithAI] = useState(false);

  // Edición inline del post
  const [editingTitle, setEditingTitle] = useState(false);
  const [editingExcerpt, setEditingExcerpt] = useState(false);
  const [editingContent, setEditingContent] = useState(false);
  const [rawHtml, setRawHtml] = useState('');

  // Estado de imagen
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [isRegeneratingImage, setIsRegeneratingImage] = useState(false);
  const [imageError, setImageError] = useState('');

  // Cargar categorías al montar
  useEffect(() => {
    import('@/lib/blog-actions').then(m => {
      m.getCategoriesAction().then(cats => {
        setCategories(cats);
        if (cats.length > 0) setCategoryId(cats[0].id);
      }).catch(console.error);
    });
  }, []);

  // Cargar post para edición si vienen los parámetros edit y slug en la URL
  useEffect(() => {
    const editParam = searchParams.get('edit');
    const slugParam = searchParams.get('slug');
    if (editParam === 'true' && slugParam) {
      setIsEditMode(true);
      setIsLoadingPost(true);
      getBlogPostBySlug(slugParam).then(result => {
        if (result.success && result.post) {
          const post = result.post;
          setTopic(post.title);
          setKeywords(post.keywords ? post.keywords.join(', ') : '');
          setCategoryId(post.category_id || '');
          setGeneratedPost(post);
          setRawHtml(post.content || '');
        } else {
          setError(result.error || 'No se pudo cargar el artículo para editar.');
        }
        setIsLoadingPost(false);
      }).catch(err => {
        setError(err.message || 'Error de red al obtener el post.');
        setIsLoadingPost(false);
      });
    } else {
      // Pre-rellenar parámetros de tema nuevo si vienen
      const topicParam = searchParams.get('topic');
      const keywordsParam = searchParams.get('keywords');
      if (topicParam) setTopic(topicParam);
      if (keywordsParam) setKeywords(keywordsParam);
    }
  }, [searchParams]);

  // Auto-generación inicial si viene de la lista de temas y no es modo edición
  useEffect(() => {
    const topicParam = searchParams.get('topic');
    const editParam = searchParams.get('edit');
    if (topicParam && !generatedPost && editParam !== 'true') {
      const timer = setTimeout(() => {
        handleGenerate(topicParam, searchParams.get('keywords') || '');
      }, 600);
      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGenerate = async (t?: string, k?: string) => {
    const useTopic = t || topic;
    const useKeywords = k || keywords;
    if (!useTopic) return;

    setIsGenerating(true);
    setError('');
    setGeneratedPost(null);
    setEditingContent(false);
    setEditingTitle(false);
    setEditingExcerpt(false);

    try {
      const res = await fetch('/api/blog/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: useTopic,
          keywords: useKeywords.split(',').map((kw: string) => kw.trim()).filter(Boolean),
          sources: sources,
          mode: searchParams.get('mode') || 'basic',
          skipImage: !generateImageWithAI
        }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);
      
      setGeneratedPost((prev: any) => ({
        ...data,
        id: isEditMode ? prev?.id : undefined,
        slug: isEditMode ? prev?.slug : data.slug
      }));
      setRawHtml(data.content || '');
      
      if (data.keywords && data.keywords.length > 0) {
        setKeywords(data.keywords.join(', '));
      }
    } catch (err: any) {
      setError(err.message || 'Error al generar el contenido. Verifica tu OPENAI_API_KEY.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSave = async () => {
    if (!generatedPost) {
      alert('Error: No hay artículo generado/cargado en el estado.');
      return;
    }
    setIsSaving(true);
    setError('');

    try {
      const payload = { 
        ...generatedPost, 
        id: isEditMode ? generatedPost.id : undefined,
        category_id: categoryId || null
      };
      
      const response = await saveBlogPost(payload);
      
      if (response && response.success) {
        setSaved(true);
        setTimeout(() => router.push(`/blog/${response.post.slug}`), 1500);
      } else {
        const msg = response?.error || 'Error desconocido al guardar.';
        setError(msg);
        alert('Error al guardar: ' + msg);
      }
    } catch (err: any) {
      const msg = err.message || 'Error de conexión. Verifica las variables de entorno de Supabase.';
      setError(msg);
      alert('Excepción capturada al guardar: ' + msg);
    } finally {
      setIsSaving(false);
    }
  };

  // Subir imagen
  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !generatedPost) return;

    setIsUploadingImage(true);
    setImageError('');

    try {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('slug', generatedPost.slug || 'post');

      const result = await uploadCoverImage(fd);
      if (result.success && result.url) {
        setGeneratedPost((prev: any) => ({ ...prev, cover_image: result.url }));
      } else {
        setImageError(result.error || 'Error al subir la imagen.');
      }
    } catch (err: any) {
      setImageError(err.message || 'Error inesperado.');
    } finally {
      setIsUploadingImage(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  // Generar imagen con DALL-E 3
  const handleRegenerateImage = async () => {
    if (!generatedPost) return;
    setIsRegeneratingImage(true);
    setImageError('');

    try {
      const res = await fetch('/api/blog/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: generatedPost.cover_image_prompt || `Professional B2B illustration about "${topic || generatedPost.title}", violet and emerald accents, clean light background, no text`,
          slug: generatedPost.slug,
        }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setGeneratedPost((prev: any) => ({ ...prev, cover_image: data.cover_image }));
    } catch (err: any) {
      setImageError(err.message || 'Error al regenerar imagen con DALL-E 3.');
    } finally {
      setIsRegeneratingImage(false);
    }
  };

  const commitContent = () => {
    setGeneratedPost((prev: any) => ({ ...prev, content: rawHtml }));
    setEditingContent(false);
  };

  if (isLoadingPost) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-20">
        <Loader2 className="w-10 h-10 text-violet-600 animate-spin mb-4" />
        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Cargando artículo...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Top Nav */}
        <div className="flex items-center justify-between mb-10">
          <Link href="/admin/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-violet-600 font-bold text-sm transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver a la lista de posts
          </Link>
          {generatedPost && !saved && (
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-black rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 disabled:opacity-70"
            >
              {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              {isEditMode ? 'Guardar Cambios' : 'Publicar Ahora'}
            </button>
          )}
          {saved && (
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-black rounded-xl">
              <CheckCircle2 className="w-4 h-4" />
              {isEditMode ? '¡Cambios Guardados! Redirigiendo...' : '¡Publicado! Redirigiendo...'}
            </div>
          )}
        </div>

        <div className="flex flex-col xl:flex-row gap-8">

          {/* Left: Controls */}
          <div className="xl:w-[380px] shrink-0 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <h1 className="text-lg font-black text-slate-900">
                    {isEditMode ? 'Editar Artículo' : 'Generador de Post'}
                  </h1>
                  <p className="text-xs text-slate-400 font-medium">
                    {isEditMode ? 'Edita directamente el contenido' : 'Powered by GPT-4o + DALL-E 3'}
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-widest mb-2">Tema / Título del Artículo</label>
                  <textarea
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Ej: Cómo integrar Webpay en Shopify Chile"
                    rows={3}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-300 transition-all font-medium text-sm resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-widest mb-2">Keywords SEO (separadas por coma)</label>
                  <textarea
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    placeholder="webpay shopify, shopify chile, pago shopify"
                    rows={2}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-300 transition-all font-medium text-sm resize-none"
                  />
                  <p className="mt-1 text-[10px] text-slate-400 font-medium italic">* La IA autogenerará keywords si se dejan en blanco o para mejorarlas.</p>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-widest mb-2">Fuentes de Consulta (URLs o Texto)</label>
                  <textarea
                    value={sources}
                    onChange={(e) => setSources(e.target.value)}
                    placeholder="Pega links o información relevante aquí para que la IA la use de referencia..."
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-300 transition-all font-medium text-sm resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-700 uppercase tracking-widest mb-2">Categoría del Blog</label>
                  <select
                    value={categoryId}
                    onChange={(e) => setCategoryId(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-300 transition-all font-medium text-sm appearance-none"
                  >
                    {categories.length === 0 ? (
                      <option disabled>Cargando categorías...</option>
                    ) : (
                      categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))
                    )}
                  </select>
                </div>

                <div className="flex items-center gap-3 py-1.5 px-1 bg-slate-50 border border-slate-100 rounded-2xl">
                  <input
                    type="checkbox"
                    id="generateImageWithAI"
                    checked={generateImageWithAI}
                    onChange={(e) => setGenerateImageWithAI(e.target.checked)}
                    className="w-4 h-4 text-violet-600 border-slate-300 rounded focus:ring-violet-500 cursor-pointer ml-3"
                  />
                  <label htmlFor="generateImageWithAI" className="text-xs font-black text-slate-700 cursor-pointer select-none py-2 pr-3">
                    Generar portada con IA (DALL-E 3)
                  </label>
                </div>

                {!isEditMode ? (
                  <button
                    onClick={() => handleGenerate()}
                    disabled={isGenerating || !topic}
                    className="w-full bg-violet-600 text-white font-black rounded-2xl py-4 flex items-center justify-center gap-3 hover:bg-violet-700 transition-all shadow-lg shadow-violet-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Generando con IA…
                      </>
                    ) : (
                      <>
                        <Wand2 className="w-5 h-5" />
                        {generatedPost ? 'Regenerar Artículo' : 'Generar Artículo'}
                      </>
                    )}
                  </button>
                ) : (
                  <div className="space-y-3">
                    <button
                      onClick={handleSave}
                      disabled={isSaving || isGenerating}
                      className="w-full bg-emerald-600 text-white font-black rounded-2xl py-4 flex items-center justify-center gap-3 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 disabled:opacity-50"
                    >
                      {isSaving ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Guardando cambios…
                        </>
                      ) : (
                        <>
                          <Save className="w-5 h-5" />
                          Guardar Cambios
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleGenerate()}
                      disabled={isGenerating || isSaving || !topic}
                      className="w-full bg-violet-50 text-violet-700 border border-violet-200 font-bold rounded-2xl py-3 flex items-center justify-center gap-2 hover:bg-violet-100 transition-all disabled:opacity-50"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Regenerando texto…
                        </>
                      ) : (
                        <>
                          <Wand2 className="w-4 h-4" />
                          Regenerar texto con IA
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Generating progress */}
            {isGenerating && (
              <div className="bg-white rounded-3xl p-6 border border-slate-100 space-y-4">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Procesando…</p>
                <div className="flex items-center gap-3">
                  <Loader2 className="w-4 h-4 text-violet-500 animate-spin" />
                  <span className="text-sm font-medium text-slate-600">Escribiendo artículo SEO...</span>
                </div>
                {generateImageWithAI && (
                  <div className="flex items-center gap-3">
                    <Loader2 className="w-4 h-4 text-violet-500 animate-spin" />
                    <span className="text-sm font-medium text-slate-600">Generando imagen DALL-E 3...</span>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <Loader2 className="w-4 h-4 text-violet-500 animate-spin" />
                  <span className="text-sm font-medium text-slate-600">Optimizando metadatos...</span>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-5 text-red-700 text-sm font-bold">
                ⚠️ {error}
              </div>
            )}

            {imageError && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-5 text-red-700 text-sm font-bold">
                🖼️ {imageError}
              </div>
            )}

            {/* SEO Meta preview panel */}
            {generatedPost && (
              <div className="bg-white rounded-3xl p-6 border border-slate-100 space-y-4">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Preview en Google</p>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 font-sans">
                  <div className="text-blue-700 text-base font-medium mb-1 line-clamp-1">{generatedPost.seo_title}</div>
                  <div className="text-emerald-700 text-xs mb-1 font-medium">webunica.cl › blog › {generatedPost.slug}</div>
                  <div className="text-slate-600 text-xs line-clamp-2 leading-relaxed">{generatedPost.seo_description}</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-50 rounded-xl p-3">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Título SEO</p>
                    <p className="text-xs font-bold text-slate-700">{generatedPost.seo_title?.length} / 60 chars</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Meta Desc.</p>
                    <p className="text-xs font-bold text-slate-700">{generatedPost.seo_description?.length} / 160 chars</p>
                  </div>
                </div>

                {generatedPost.keywords && generatedPost.keywords.length > 0 && (
                  <div className="bg-slate-50 rounded-xl p-3">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Keywords</p>
                    <div className="flex flex-wrap gap-1">
                      {Array.isArray(generatedPost.keywords) 
                        ? generatedPost.keywords.map((kw: string, i: number) => (
                            <span key={i} className="text-[10px] bg-white border border-slate-100 px-2 py-0.5 rounded-full text-slate-600 font-bold">
                              {kw}
                            </span>
                          ))
                        : String(generatedPost.keywords).split(',').map((kw: string, i: number) => (
                            <span key={i} className="text-[10px] bg-white border border-slate-100 px-2 py-0.5 rounded-full text-slate-600 font-bold">
                              {kw.trim()}
                            </span>
                          ))
                      }
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right: Preview + Editor */}
          <div className="flex-1 min-w-0">
            {generatedPost ? (
              <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">

                {/* ── Cover Image Zone ── */}
                <div className="relative h-72 w-full bg-slate-100 group">
                  {generatedPost.cover_image ? (
                    <Image
                      src={generatedPost.cover_image}
                      alt={generatedPost.cover_image_alt || generatedPost.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-slate-300" />
                    </div>
                  )}

                  {/* Overlay con acciones de imagen */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 text-center">
                    {/* Subir imagen propia */}
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      disabled={isUploadingImage || isRegeneratingImage}
                      className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-800 font-black text-sm rounded-xl hover:bg-slate-50 transition-all disabled:opacity-60 shadow-lg"
                    >
                      {isUploadingImage ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Upload className="w-4 h-4" />
                      )}
                      {isUploadingImage ? 'Subiendo…' : 'Subir imagen'}
                    </button>

                    {/* Generar/Regenerar con DALL-E */}
                    <button
                      onClick={handleRegenerateImage}
                      disabled={isUploadingImage || isRegeneratingImage}
                      className="flex items-center gap-2 px-5 py-2.5 bg-violet-600 text-white font-black text-sm rounded-xl hover:bg-violet-700 transition-all disabled:opacity-60 shadow-lg"
                    >
                      {isRegeneratingImage ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <RefreshCw className="w-4 h-4" />
                      )}
                      {isRegeneratingImage ? 'Generando…' : 'Generar con IA'}
                    </button>
                  </div>

                  {/* Badge */}
                  {!isUploadingImage && !isRegeneratingImage && generatedPost.cover_image && (
                    <div className="absolute bottom-4 left-6">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur text-violet-700 text-xs font-black rounded-full">
                        🖼️ Imagen de portada
                      </span>
                    </div>
                  )}

                  {/* Spinner central */}
                  {(isUploadingImage || isRegeneratingImage) && (
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-3">
                      <Loader2 className="w-10 h-10 text-white animate-spin" />
                      <p className="text-white font-bold text-sm">
                        {isUploadingImage ? 'Subiendo imagen…' : 'DALL-E 3 generando imagen…'}
                      </p>
                    </div>
                  )}

                  {/* Input oculto */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    className="hidden"
                    onChange={handleFileSelect}
                  />
                </div>

                <div className="px-10 py-2 bg-slate-50 border-b border-slate-100 flex items-center gap-2">
                  <ImageIcon className="w-3.5 h-3.5 text-slate-400" />
                  <p className="text-[11px] text-slate-400 font-medium">
                    Pasa el cursor sobre la portada para cargar tu imagen o generarla con IA (DALL-E 3)
                  </p>
                </div>

                {/* ── Content Editor ── */}
                <div className="p-10 space-y-6">

                  {/* Título editable */}
                  <div className="group/title relative">
                    {editingTitle ? (
                      <div className="space-y-2">
                        <textarea
                          autoFocus
                          value={generatedPost.title}
                          onChange={(e) => setGeneratedPost((p: any) => ({ ...p, title: e.target.value }))}
                          rows={2}
                          className="w-full text-3xl font-black text-slate-900 tracking-tighter leading-tight bg-violet-50 border-2 border-violet-300 rounded-xl px-4 py-3 resize-none focus:outline-none"
                        />
                        <div className="flex gap-2">
                          <button onClick={() => setEditingTitle(false)} className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 text-white text-xs font-black rounded-lg">
                            <Check className="w-3 h-3" /> Guardar
                          </button>
                          <button onClick={() => setEditingTitle(false)} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-200 text-slate-600 text-xs font-black rounded-lg">
                            <X className="w-3 h-3" /> Cancelar
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start gap-3">
                        <h2 className="flex-1 text-4xl font-black text-slate-900 tracking-tighter leading-tight">
                          {generatedPost.title}
                        </h2>
                        <button
                          onClick={() => setEditingTitle(true)}
                          className="shrink-0 opacity-0 group-hover/title:opacity-100 mt-1 p-2 bg-slate-100 hover:bg-violet-100 hover:text-violet-600 rounded-lg transition-all"
                          title="Editar título"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Extracto editable */}
                  <div className="group/excerpt relative">
                    {editingExcerpt ? (
                      <div className="space-y-2">
                        <textarea
                          autoFocus
                          value={generatedPost.excerpt}
                          onChange={(e) => setGeneratedPost((p: any) => ({ ...p, excerpt: e.target.value }))}
                          rows={3}
                          className="w-full text-lg italic bg-violet-50 border-2 border-violet-300 rounded-xl px-4 py-3 resize-none focus:outline-none text-slate-600"
                        />
                        <div className="flex gap-2">
                          <button onClick={() => setEditingExcerpt(false)} className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 text-white text-xs font-black rounded-lg">
                            <Check className="w-3 h-3" /> Guardar
                          </button>
                          <button onClick={() => setEditingExcerpt(false)} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-200 text-slate-600 text-xs font-black rounded-lg">
                            <X className="w-3 h-3" /> Cancelar
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-start gap-3">
                        <p className="flex-1 text-slate-500 text-lg italic border-l-4 border-violet-200 pl-4">
                          {generatedPost.excerpt}
                        </p>
                        <button
                          onClick={() => setEditingExcerpt(true)}
                          className="shrink-0 opacity-0 group-hover/excerpt:opacity-100 p-2 bg-slate-100 hover:bg-violet-100 hover:text-violet-600 rounded-lg transition-all"
                          title="Editar extracto"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Contenido editable */}
                  <div className="border-t border-slate-100 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Contenido del Artículo</p>
                      <button
                        onClick={() => {
                          if (editingContent) {
                            commitContent();
                          } else {
                            setRawHtml(generatedPost.content || '');
                            setEditingContent(true);
                          }
                        }}
                        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-black rounded-lg transition-all ${
                          editingContent
                            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                            : 'bg-slate-100 text-slate-600 hover:bg-violet-100 hover:text-violet-600'
                        }`}
                      >
                        {editingContent ? (
                          <><Check className="w-3 h-3" /> Confirmar cambios</>
                        ) : (
                          <><Pencil className="w-3 h-3" /> Editar contenido</>
                        )}
                      </button>
                    </div>

                    {editingContent ? (
                      <div className="space-y-3">
                        <p className="text-[11px] text-slate-400 font-medium">Edita el HTML directamente. Los cambios se reflejarán en el preview al confirmar.</p>
                        <textarea
                          value={rawHtml}
                          onChange={(e) => setRawHtml(e.target.value)}
                          rows={20}
                          className="w-full bg-slate-900 text-emerald-300 font-mono text-xs rounded-2xl px-5 py-4 resize-y focus:outline-none focus:ring-2 focus:ring-violet-500/20 leading-relaxed"
                          spellCheck={false}
                        />
                        <div className="flex gap-2">
                          <button onClick={commitContent} className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 text-white text-xs font-black rounded-xl">
                            <Check className="w-3 h-3" /> Confirmar cambios
                          </button>
                          <button onClick={() => setEditingContent(false)} className="flex items-center gap-1.5 px-4 py-2 bg-slate-200 text-slate-600 text-xs font-black rounded-xl">
                            <X className="w-3 h-3" /> Cancelar
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-h2:text-2xl prose-h3:text-xl prose-a:text-violet-600"
                        dangerouslySetInnerHTML={{ __html: generatedPost.content }}
                      />
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center bg-white rounded-3xl border border-dashed border-slate-200">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto">
                    <Search className="w-8 h-8 text-slate-300" />
                  </div>
                  <p className="text-lg font-black text-slate-900">Escoge un tema o edita uno existente</p>
                  <p className="text-slate-400 text-sm max-w-xs">Selecciona un tema de la lista, escribe uno personalizado o vuelve al admin para editar.</p>
                  <Link href="/admin/blog" className="inline-flex items-center gap-2 text-violet-600 font-bold text-sm hover:underline">
                    ← Ver lista de posts
                  </Link>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
