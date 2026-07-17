'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { 
  Bot, 
  ArrowLeft, 
  Eye, 
  Check, 
  ZoomIn, 
  X,
  FileText,
  LayoutGrid,
  ShoppingBag,
  ShoppingCart
} from 'lucide-react';
import Link from 'next/link';

type WireframeOption = {
  id: string;
  name: string;
  description: string;
  svgPath: string;
  type: 'home' | 'internal';
};

export default function WireframesPage() {
  const router = useRouter();
  const params = useParams();
  const projectId = params?.projectId as string;
  
  const [user, setUser] = useState<{ email: string; role: string } | null>(null);
  const [selectedHome, setSelectedHome] = useState<string | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  const homeOptions: WireframeOption[] = [
    {
      id: 'home-completo',
      name: 'Home Completo',
      description: 'Mayor densidad de secciones comerciales: categorías destacadas, múltiples grillas de productos, ofertas por tiempo limitado, carrusel de marcas y sección de testimonios. Ideal para tiendas con catálogos amplios y alto enfoque promocional.',
      svgPath: '/wireframes/maxxgo/home-completo.svg',
      type: 'home'
    },
    {
      id: 'home-alternativo',
      name: 'Home Alternativo',
      description: 'Diseño enfocado en branding e impacto visual. Destaca por un banner de héroe de pantalla completa, menor densidad de elementos, y un equilibrio óptimo entre la narrativa de la marca y la conversión.',
      svgPath: '/wireframes/maxxgo/home-alternativo.svg',
      type: 'home'
    },
    {
      id: 'home-simple',
      name: 'Home Simple',
      description: 'Aproximadamente 50% menos secciones que el modelo completo. Navegación extremadamente directa, libre de ruido visual, centrándose exclusivamente en el catálogo de productos esenciales y buscador destacado.',
      svgPath: '/wireframes/maxxgo/home-simple.svg',
      type: 'home'
    }
  ];

  const internalPages: WireframeOption[] = [
    { id: 'categoria', name: 'Página de Categoría', description: 'Vista de catálogo con barra lateral de filtros avanzados y ordenamiento.', svgPath: '/wireframes/maxxgo/categoria.svg', type: 'internal' },
    { id: 'producto', name: 'Ficha de Producto', description: 'Detalle técnico, selector de atributos (color, tamaño), cantidad y botones de compra.', svgPath: '/wireframes/maxxgo/producto.svg', type: 'internal' },
    { id: 'carrito', name: 'Carro de Compras', description: 'Resumen del pedido, tabla de ítems y desglose de totales.', svgPath: '/wireframes/maxxgo/carrito.svg', type: 'internal' }
  ];

  useEffect(() => {
    const storedUser = localStorage.getItem('studio_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      router.push('/login');
    }

    // Cargar si ya había una propuesta seleccionada
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
    
    // Guardar selección preliminar en local
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

    // Redirigir al personalizador
    router.push(`/proyectos/${projectId}/personalizar`);
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
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase">
            Paso 1: Estructura
          </span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 mt-12">
        {/* Intro */}
        <div className="mb-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-800">Selecciona el Wireframe Base</h1>
          <p className="text-slate-500 mt-2 max-w-3xl">
            Revisa los modelos estructurales originales antes de aplicar tipografías y colores. Selecciona la propuesta de portada que mejor se ajuste a la estrategia comercial del cliente.
          </p>
        </div>

        {/* Home Wireframes Section */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-indigo-600" /> Propuestas de Portada (Home)
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {homeOptions.map((opt) => (
              <div 
                key={opt.id}
                className={`bg-white border-2 rounded-[2rem] overflow-hidden transition-all flex flex-col justify-between ${
                  selectedHome === opt.id 
                    ? "border-indigo-600 ring-4 ring-indigo-50" 
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div>
                  {/* Image container */}
                  <div className="aspect-[4/5] bg-slate-100 relative group overflow-hidden border-b border-slate-100">
                    {/* SVG container */}
                    <iframe 
                      src={opt.svgPath} 
                      className="w-full h-full pointer-events-none select-none"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button 
                        onClick={() => setZoomedImage(opt.svgPath)}
                        className="bg-white/90 hover:bg-white text-slate-800 p-3.5 rounded-full shadow-lg transition-transform hover:scale-115 cursor-pointer"
                        title="Ampliar Wireframe"
                      >
                        <ZoomIn className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
                      {opt.name}
                      {selectedHome === opt.id && (
                        <span className="p-1 bg-indigo-100 text-indigo-700 rounded-full">
                          <Check className="w-4 h-4" />
                        </span>
                      )}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{opt.description}</p>
                  </div>
                </div>

                <div className="px-8 pb-8">
                  <button 
                    onClick={() => handleSelectProposal(opt.id)}
                    className={`w-full py-4 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      selectedHome === opt.id 
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/15" 
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    {selectedHome === opt.id ? "Propuesta Seleccionada" : "Seleccionar esta propuesta"}
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
                className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="aspect-[4/3] bg-slate-100 relative group overflow-hidden border-b border-slate-100">
                    <iframe 
                      src={opt.svgPath} 
                      className="w-full h-full pointer-events-none select-none"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button 
                        onClick={() => setZoomedImage(opt.svgPath)}
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
          <div className="w-full max-w-4xl max-h-[85vh] bg-white rounded-[2rem] overflow-hidden p-3 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <iframe 
              src={zoomedImage} 
              className="w-full h-[80vh] border-0"
            />
          </div>
        </div>
      )}
    </div>
  );
}
