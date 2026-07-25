'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { 
  Bot, 
  ArrowLeft, 
  Check, 
  ZoomIn, 
  X,
  FileText,
  LayoutGrid,
  ShoppingBag,
  ShoppingCart,
  Zap,
  LayoutTemplate,
  Rows3,
  Layers
} from 'lucide-react';
import Link from 'next/link';

type FeatureTag = {
  label: string;
  color: string;
};

type HomeOption = {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  badge?: string;
  badgeColor?: string;
  features: FeatureTag[];
  type: 'home';
};

type InternalPage = {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  type: 'internal';
};

export default function WireframesPage() {
  const router = useRouter();
  const params = useParams();
  const projectId = params?.projectId as string;
  
  const [user, setUser] = useState<{ email: string; role: string } | null>(null);
  const [selectedHome, setSelectedHome] = useState<string | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const homeOptions: HomeOption[] = [
    {
      id: 'home-v1-actual',
      name: 'Home Clásico',
      description: 'Layout tradicional de marketplace con buscador prominente, hero dividido con product cards, grilla 2×3 de categorías, carrusel de ofertas destacadas y banner gaming. Alta densidad comercial con estructura probada.',
      imagePath: '/wireframes/maxxgo/home-v1-actual.jpg',
      badge: 'Referencia',
      badgeColor: 'bg-slate-200 text-slate-700',
      features: [
        { label: '🛍 Carrusel Ofertas', color: 'bg-blue-50 text-blue-700' },
        { label: '🎮 Banner Gaming', color: 'bg-purple-50 text-purple-700' },
        { label: '📦 6 Categorías', color: 'bg-slate-50 text-slate-600' },
      ],
      type: 'home'
    },
    {
      id: 'home-v2-compacto',
      name: 'Home Compacto Pro',
      description: 'Hero compacto con oferta destacada lateral. Incluye 10 categorías en grid, 4 bloques de promociones imperdibles (Ofertas del día, Cyber, Cuotas, Envíos gratis), productos trending con tabs y sección de testimonios.',
      imagePath: '/wireframes/maxxgo/home-v2-compacto.jpg',
      badge: 'Más completo',
      badgeColor: 'bg-indigo-100 text-indigo-700',
      features: [
        { label: '🎯 4 Bloques Promo', color: 'bg-indigo-50 text-indigo-700' },
        { label: '⭐ Testimonios', color: 'bg-amber-50 text-amber-700' },
        { label: '📱 10 Categorías', color: 'bg-slate-50 text-slate-600' },
      ],
      type: 'home'
    },
    {
      id: 'home-v3-flash',
      name: 'Home Flash Sale',
      description: 'Hero carrusel con sidebar de Oferta del Día y countdown. Sección de Ofertas Flash cronometradas con 6 productos. Destacados MAXXGO con comparación visual (Mejor Rendimiento / Equilibrio / Precio). Ideal para campañas de alta conversión.',
      imagePath: '/wireframes/maxxgo/home-v3-flash.jpg',
      badge: 'Alta conversión',
      badgeColor: 'bg-red-100 text-red-700',
      features: [
        { label: '⚡ Flash Sale Timer', color: 'bg-red-50 text-red-700' },
        { label: '🏆 Top 3 Productos', color: 'bg-orange-50 text-orange-700' },
        { label: '⏱ Countdown Hero', color: 'bg-slate-50 text-slate-600' },
      ],
      type: 'home'
    },
    {
      id: 'home-v4-sidebar',
      name: 'Home Sidebar Nav',
      description: 'Inspirado en grandes marketplaces (Amazon / Mercado Libre). Nav lateral de categorías con hero de 3 columnas y paneles derechos (Ofertas, Novedades, Cuotas). Acceso rápido horizontal, banners por necesidad (Oficina / Gamer / Móvil) y Más Vendidos rankeados.',
      imagePath: '/wireframes/maxxgo/home-v4-sidebar.jpg',
      badge: 'Marketplace style',
      badgeColor: 'bg-emerald-100 text-emerald-700',
      features: [
        { label: '🗂 Nav Sidebar', color: 'bg-emerald-50 text-emerald-700' },
        { label: '🏅 Más Vendidos', color: 'bg-amber-50 text-amber-700' },
        { label: '🖥 Hero 3 Columnas', color: 'bg-slate-50 text-slate-600' },
      ],
      type: 'home'
    },
  ];

  const internalPages: InternalPage[] = [
    { id: 'categoria', name: 'Página de Categoría', description: 'Vista de catálogo con barra lateral de filtros avanzados y ordenamiento.', imagePath: '/wireframes/maxxgo/categoria.png', type: 'internal' },
    { id: 'producto', name: 'Ficha de Producto', description: 'Detalle técnico, selector de atributos (color, tamaño), cantidad y botones de compra.', imagePath: '/wireframes/maxxgo/producto.png', type: 'internal' },
    { id: 'carrito', name: 'Carro de Compras', description: 'Resumen del pedido, tabla de ítems y desglose de totales.', imagePath: '/wireframes/maxxgo/carrito.png', type: 'internal' }
  ];

  useEffect(() => {
    const storedUser = localStorage.getItem('studio_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push('/login');
    }

    const savedConfig = localStorage.getItem(`project_config_${projectId}`);
    if (savedConfig) {
      const config = JSON.parse(savedConfig);
      if (config.selectedWireframe) {
        setSelectedHome(config.selectedWireframe);
      }
    }
  }, [router, projectId]);

  const handleSelectProposal = (id: string) => {
    setSelectedHome(id);
    
    const savedConfig = localStorage.getItem(`project_config_${projectId}`);
    const existing = savedConfig ? JSON.parse(savedConfig) : {
      projectId,
      selectedStyle: 'ecommerce',
      colors: {
        primary: '#4f46e5',
        secondary: '#0f172a',
        accent: '#06b6d4',
        background: '#ffffff',
        surface: '#f8fafc',
        text: '#0f172a',
        textMuted: '#64748b',
        border: '#cbd5e1'
      },
      fonts: {
        primary: 'Inter',
        secondary: 'Inter'
      }
    };
    
    existing.selectedWireframe = id;
    localStorage.setItem(`project_config_${projectId}`, JSON.stringify(existing));
    router.push(`/proyectos/${projectId}/personalizar`);
  };

  const wireframeIcons: Record<string, React.ReactNode> = {
    'home-v1-actual': <LayoutTemplate className="w-4 h-4" />,
    'home-v2-compacto': <Rows3 className="w-4 h-4" />,
    'home-v3-flash': <Zap className="w-4 h-4" />,
    'home-v4-sidebar': <Layers className="w-4 h-4" />,
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-24">
      {/* Header bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              href="/dashboard"
              className="text-slate-500 hover:text-slate-950 p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <span className="h-6 w-[1px] bg-slate-200" />
            <div className="flex items-center gap-3">
              <Bot className="w-5 h-5 text-indigo-600" />
              <span className="font-bold text-lg">Commerce Studio</span>
              <span className="text-xs text-slate-400 font-medium">/ Proyecto: {projectId.toUpperCase()}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {selectedHome && (
              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Check className="w-3 h-3" />
                {homeOptions.find(o => o.id === selectedHome)?.name}
              </span>
            )}
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase">
              Paso 1: Estructura
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 mt-12">
        {/* Intro */}
        <div className="mb-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-800">Selecciona el Wireframe Base</h1>
          <p className="text-slate-500 mt-2 max-w-3xl">
            Revisa los 4 modelos estructurales del proyecto MAXXGO antes de aplicar tipografías y colores. Selecciona la propuesta de portada que mejor se ajuste a la estrategia comercial del cliente.
          </p>
        </div>

        {/* Home Wireframes Grid — 2×2 */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-indigo-600" />
            Propuestas de Portada (Home)
            <span className="ml-auto text-xs font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">4 variantes</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {homeOptions.map((opt) => (
              <div 
                key={opt.id}
                className={`bg-white border-2 rounded-[2rem] overflow-hidden transition-all flex flex-col justify-between ${
                  selectedHome === opt.id 
                    ? 'border-indigo-600 ring-4 ring-indigo-50' 
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50'
                }`}
              >
                {/* Image */}
                <div className="aspect-[16/10] bg-slate-100 relative group overflow-hidden border-b border-slate-100">
                  <img 
                    src={opt.imagePath} 
                    alt={opt.name}
                    className="w-full h-full object-cover object-top select-none transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Badge top-left */}
                  {opt.badge && (
                    <span className={`absolute top-4 left-4 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${opt.badgeColor}`}>
                      {opt.badge}
                    </span>
                  )}

                  {/* Zoom overlay */}
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <button 
                      onClick={() => setZoomedImage(opt.imagePath)}
                      className="bg-white/90 hover:bg-white text-slate-800 p-3.5 rounded-full shadow-lg transition-transform hover:scale-110 cursor-pointer"
                      title="Ampliar Wireframe"
                    >
                      <ZoomIn className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Selected check */}
                  {selectedHome === opt.id && (
                    <div className="absolute top-4 right-4 bg-indigo-600 text-white p-1.5 rounded-full shadow-lg">
                      <Check className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                      <span className={`p-1.5 rounded-xl ${selectedHome === opt.id ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500'}`}>
                        {wireframeIcons[opt.id]}
                      </span>
                      {opt.name}
                    </h3>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{opt.description}</p>

                  {/* Feature chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {opt.features.map((f, i) => (
                      <span key={i} className={`text-xs font-semibold px-3 py-1 rounded-full ${f.color}`}>
                        {f.label}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => handleSelectProposal(opt.id)}
                    className={`mt-auto w-full py-4 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      selectedHome === opt.id 
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/15' 
                        : 'bg-slate-900 text-white hover:bg-slate-700'
                    }`}
                  >
                    {selectedHome === opt.id ? '✓ Propuesta Seleccionada' : 'Seleccionar esta propuesta'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Complementary Pages Section */}
        <div>
          <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600" /> Páginas Complementarias
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {internalPages.map((opt) => (
              <div 
                key={opt.id}
                className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden flex flex-col justify-between hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/40 transition-all"
              >
                <div>
                  <div className="aspect-[4/3] bg-slate-100 relative group overflow-hidden border-b border-slate-100">
                    <img 
                      src={opt.imagePath} 
                      alt={opt.name}
                      className="w-full h-full object-cover object-top select-none"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button 
                        onClick={() => setZoomedImage(opt.imagePath)}
                        className="bg-white/90 hover:bg-white text-slate-800 p-3 rounded-full shadow-lg cursor-pointer"
                      >
                        <ZoomIn className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                      {opt.id === 'categoria' && <LayoutGrid className="w-4 h-4 text-indigo-500" />}
                      {opt.id === 'producto' && <ShoppingBag className="w-4 h-4 text-indigo-500" />}
                      {opt.id === 'carrito' && <ShoppingCart className="w-4 h-4 text-indigo-500" />}
                      {opt.name}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{opt.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox / Zoom Modal */}
      {zoomedImage && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <button 
            onClick={() => setZoomedImage(null)}
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="w-full max-w-5xl max-h-[90vh] bg-white rounded-[2rem] overflow-auto p-4 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <img 
              src={zoomedImage} 
              alt="Ampliado"
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
