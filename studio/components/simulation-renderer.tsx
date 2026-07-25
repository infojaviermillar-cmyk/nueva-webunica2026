import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  ChevronRight, 
  Star, 
  ArrowRight,
  ShieldCheck,
  RotateCcw,
  Truck,
  Heart,
  HelpCircle,
  Laptop,
  Headphones,
  Home,
  BadgeAlert,
  Lightbulb,
  Dumbbell,
  Mail,
  Plus,
  Minus,
  Trash2,
  Lock,
  Compass,
  FileText
} from 'lucide-react';

type SimulationRendererProps = {
  wireframeId: string; // 'home-simple' | 'home-alternativo' | 'home-completo' | 'categoria' | 'producto' | 'carrito'
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textMuted: string;
    border: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  buttonRadius: string;
  shadow: string;
  cardStyle: string;
  heroBgImage?: string | null;
  heroProductImage?: string | null;
  productImages?: (string | null)[];
};

export function SimulationRenderer({
  wireframeId,
  colors,
  fonts,
  buttonRadius,
  shadow,
  cardStyle,
  heroBgImage,
  heroProductImage,
  productImages = [null, null, null, null, null],
}: SimulationRendererProps) {
  const params = useParams();
  const projectId = params?.projectId as string || '';
  
  // Estilo inline para inyectar variables CSS en el contenedor de simulación
  const customVariables = {
    '--color-primary': colors.primary,
    '--color-secondary': colors.secondary,
    '--color-accent': colors.accent,
    '--color-background': colors.background,
    '--color-surface': colors.surface,
    '--color-text': colors.text,
    '--color-text-muted': colors.textMuted,
    '--color-border': colors.border,
    '--radius-button': buttonRadius,
    '--font-primary': fonts.primary,
    '--font-secondary': fonts.secondary,
  } as React.CSSProperties;

  // Carga dinámica de fuentes de Google Fonts
  const fontUrl = `https://fonts.googleapis.com/css2?family=${fonts.primary.replace(' ', '+')}&family=${fonts.secondary.replace(' ', '+')}&display=swap`;

  // Helper para renderizar placeholder de imagen (Caja con X)
  const ImagePlaceholder = ({ className = "w-full h-full" }) => (
    <div className={`bg-slate-200/60 border border-slate-300 relative flex items-center justify-center overflow-hidden ${className}`}>
      {/* Líneas cruzadas tipo wireframe */}
      <svg className="absolute inset-0 w-full h-full text-slate-300/80" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
      </svg>
      <span className="relative z-10 text-[10px] uppercase font-bold tracking-wider text-slate-400">Imagen</span>
    </div>
  );

  // Renderizador de Estrellas
  const renderStars = (rating: number = 5, count: number = 12) => (
    <div className="flex items-center gap-1">
      <div className="flex text-amber-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-3.5 h-3.5 ${i < rating ? 'fill-current' : 'text-slate-300'}`} />
        ))}
      </div>
      <span className="font-secondary text-[11px] text-custom-muted">({count})</span>
    </div>
  );

  // Renderizador de pre-header común
  const renderPreHeader = (theme: 'light' | 'dark' | 'cream') => {
    const bgClass = theme === 'dark' 
      ? 'bg-slate-950 text-white border-b border-slate-900' 
      : theme === 'cream'
      ? 'bg-[#ebdcb9] text-[#5c4a24] border-b border-[#ebdcb9]'
      : 'bg-slate-100 text-slate-600 border-b border-slate-200';

    return (
      <div className={`${bgClass} px-6 py-2 flex flex-wrap justify-center md:justify-between items-center text-xs font-secondary transition-colors duration-200 gap-4`}>
        <div className="flex items-center gap-2">
          <Truck className="w-3.5 h-3.5" />
          <span>Envíos a todo Chile</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Pago seguro y protegido</span>
        </div>
        <div className="flex items-center gap-2">
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Garantía Maxxgo</span>
        </div>
      </div>
    );
  };

  // Header Común (Simple / Categoría / Producto / Carrito)
  const renderMainHeader = (hasFavoritos = false, hasBigLabels = false) => (
    <header className="border-b border-custom-border bg-custom-surface px-6 py-4 flex items-center justify-between sticky top-0 z-25 transition-all">
      <div className="flex items-center gap-3">
        <span className="font-primary font-black text-2xl tracking-tight text-custom-primary uppercase">
          MAXXGO
          <span className="block text-[8px] font-bold text-custom-text tracking-widest mt-[-2px]">BY PACIFIC COLOR</span>
        </span>
      </div>
      
      <div className="flex-1 max-w-md mx-8 hidden md:block">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Buscar productos..."
            className="w-full bg-slate-50 border border-custom-border rounded-xl px-4 py-2.5 text-xs font-secondary focus:outline-none focus:border-custom-primary focus:bg-white text-custom-text"
          />
          <Search className="w-4 h-4 text-custom-muted absolute right-4 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="flex items-center gap-6 text-custom-text">
        {hasBigLabels ? (
          <>
            <div className="flex flex-col items-center cursor-pointer hover:text-custom-primary">
              <User className="w-5 h-5" />
              <span className="text-[9px] font-bold font-secondary uppercase mt-1">Mi cuenta</span>
            </div>
            {hasFavoritos && (
              <div className="flex flex-col items-center cursor-pointer hover:text-custom-primary">
                <Heart className="w-5 h-5" />
                <span className="text-[9px] font-bold font-secondary uppercase mt-1">Favoritos</span>
              </div>
            )}
            <div className="flex flex-col items-center cursor-pointer hover:text-custom-primary relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-[9px] font-bold font-secondary uppercase mt-1">Carrito</span>
              <span className="absolute -top-1 right-2 bg-custom-primary text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-2 cursor-pointer hover:text-custom-primary">
              <User className="w-5 h-5" />
              <span className="text-xs font-medium font-secondary hidden lg:inline">Mi cuenta</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-custom-primary relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-xs font-medium font-secondary hidden lg:inline">Carro</span>
              <span className="absolute -top-1.5 -right-2 bg-custom-primary text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                3
              </span>
            </div>
          </>
        )}
        <Menu className="w-5 h-5 md:hidden cursor-pointer hover:text-custom-primary" />
      </div>
    </header>
  );

  // Sub-header / Navigation Links
  const renderNavLinks = (activeLink = '') => (
    <nav className="bg-custom-surface border-b border-custom-border py-3 px-6 hidden md:block">
      <div className="max-w-6xl mx-auto flex justify-center gap-12 font-secondary text-xs font-bold uppercase tracking-wider text-custom-text">
        {['Tecnología', 'Audio', 'Computación', 'Hogar', 'Ofertas'].map((link) => (
          <span 
            key={link} 
            className={`cursor-pointer hover:text-custom-primary transition-colors pb-1 ${
              activeLink === link ? 'border-b-2 border-custom-primary text-custom-primary' : ''
            }`}
          >
            {link}
          </span>
        ))}
      </div>
    </nav>
  );

  // Newsletter Section (Simple & Alternativo)
  const renderNewsletter = () => (
    <section className="bg-slate-100 border-t border-custom-border py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-left space-y-4">
          <div className="flex items-center gap-3 text-custom-primary">
            <Mail className="w-8 h-8" />
            <h3 className="font-primary font-bold text-2xl uppercase text-custom-text">Suscríbete a Maxxgo</h3>
          </div>
          <p className="font-secondary text-sm text-custom-muted">
            Recibe ofertas exclusivas, novedades y promociones directamente en tu correo.
          </p>
          <div className="flex gap-2 max-w-md pt-2">
            <input 
              type="email" 
              placeholder="Ingresa tu email"
              className="flex-1 bg-white border border-custom-border rounded-xl px-4 py-3 text-xs font-secondary text-custom-text focus:outline-none"
            />
            <button className="btn-custom-radius bg-custom-primary text-white font-primary font-bold px-6 py-3 text-xs uppercase tracking-wider hover:opacity-95 transition-opacity cursor-pointer">
              Suscribirme
            </button>
          </div>
        </div>
        <div className="hidden md:block h-36">
          <ImagePlaceholder className="rounded-2xl" />
        </div>
      </div>
    </section>
  );

  // Footer Común (5 columnas + copyright + gateway logos)
  const renderFooterDetailed = (columnsCount = 3) => (
    <footer className="border-t border-custom-border bg-slate-950 text-white px-6 py-16 transition-all mt-auto font-secondary">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        <div className="col-span-2 md:col-span-2 space-y-4">
          <h4 className="font-primary font-black text-2xl text-custom-primary uppercase">MAXXGO</h4>
          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            Calidad, innovación y rendimiento en productos tecnológicos diseñados para potenciar tu vida.
          </p>
          {/* Redes sociales */}
          <div className="flex gap-4 text-slate-400">
            <span className="hover:text-custom-primary cursor-pointer text-xs font-bold">FB</span>
            <span className="hover:text-custom-primary cursor-pointer text-xs font-bold">IG</span>
            <span className="hover:text-custom-primary cursor-pointer text-xs font-bold">YT</span>
            <span className="hover:text-custom-primary cursor-pointer text-xs font-bold">LI</span>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-xs uppercase text-slate-300 mb-4 tracking-wider">Categorías</h4>
          <ul className="text-xs text-slate-400 space-y-2.5">
            <li className="hover:text-custom-primary cursor-pointer">Tecnología</li>
            <li className="hover:text-custom-primary cursor-pointer">Audio</li>
            <li className="hover:text-custom-primary cursor-pointer">Computación</li>
            <li className="hover:text-custom-primary cursor-pointer">Hogar</li>
            <li className="hover:text-custom-primary cursor-pointer">Ofertas</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xs uppercase text-slate-300 mb-4 tracking-wider">Información</h4>
          <ul className="text-xs text-slate-400 space-y-2.5">
            <li className="hover:text-custom-primary cursor-pointer">Quiénes somos</li>
            <li className="hover:text-custom-primary cursor-pointer">Despachos</li>
            <li className="hover:text-custom-primary cursor-pointer">Cambios y Devoluciones</li>
            <li className="hover:text-custom-primary cursor-pointer">Términos y condiciones</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xs uppercase text-slate-300 mb-4 tracking-wider">Contacto</h4>
          <ul className="text-xs text-slate-400 space-y-2.5">
            <li>+56 2 3206 0700</li>
            <li>hola@maxxgo.cl</li>
            <li className="text-[10px] text-slate-500">Lunes a Viernes 9:00 a 18:00 hrs</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-slate-500">
        <span>© 2026 Maxxgo | Pacific Color. Todos los derechos reservados.</span>
        <div className="flex gap-3 items-center opacity-70">
          <span className="font-bold uppercase border border-slate-800 px-2 py-0.5 rounded">webpay</span>
          <span className="font-bold uppercase border border-slate-800 px-2 py-0.5 rounded">mercado pago</span>
          <span className="font-bold uppercase border border-slate-800 px-2 py-0.5 rounded">visa</span>
          <span className="font-bold uppercase border border-slate-800 px-2 py-0.5 rounded">mastercard</span>
        </div>
      </div>
    </footer>
  );

  // 1. HOME SIMPLE (Mismos textos y secciones de la imagen "home-simple.png")
  const renderHomeSimple = () => (
    <div className="flex flex-col min-h-full bg-white">
      {renderPreHeader('cream')}
      {renderMainHeader(false, false)}
      {renderNavLinks()}

      {/* Hero */}
      <section className="max-w-6xl mx-auto w-full px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left space-y-6">
          <span className="text-xs font-bold text-custom-primary tracking-widest uppercase">LO QUE NECESITAS, EN UN SOLO LUGAR</span>
          <h1 className="font-primary font-black text-4xl md:text-5xl uppercase tracking-tight text-custom-text leading-tight">
            Tecnología y calidad para hacer tu vida más fácil
          </h1>
          <p className="font-secondary text-sm text-custom-muted font-light max-w-md">
            Descubre nuestra cuidada selección de audífonos, computadoras y accesorios de alta durabilidad.
          </p>
          <button className="btn-custom-radius bg-custom-primary text-white font-primary font-bold px-8 py-3.5 text-xs uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer">
            Ver Productos
          </button>
          {/* Slider Dots */}
          <div className="flex gap-2 pt-4">
            <span className="w-2.5 h-2.5 bg-custom-primary rounded-full" />
            <span className="w-2.5 h-2.5 bg-slate-300 rounded-full" />
            <span className="w-2.5 h-2.5 bg-slate-300 rounded-full" />
          </div>
        </div>
        <div className="aspect-[4/3] w-full">
          {heroProductImage ? (
            <img src={heroProductImage} alt="Producto" className="w-full h-full object-contain rounded-3xl" />
          ) : (
            <ImagePlaceholder className="rounded-3xl" />
          )}
        </div>
      </section>

      {/* Categorías (5 Columnas) */}
      <section className="max-w-6xl mx-auto w-full px-6 py-12">
        <h2 className="font-primary font-bold text-xl uppercase text-custom-text mb-8 tracking-wider">Categorías</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {[
            { label: 'Tecnología', icon: Laptop },
            { label: 'Audio', icon: Headphones },
            { label: 'Computación', icon: Laptop },
            { label: 'Hogar', icon: Home },
            { label: 'Ofertas', icon: BadgeAlert }
          ].map((cat, i) => (
            <div key={i} className={`p-6 ${cardStyle} bg-custom-surface flex flex-col items-center justify-center h-32 gap-3 hover:border-custom-primary hover:scale-103 transition-all cursor-pointer`}>
              <cat.icon className="w-7 h-7 text-custom-primary" />
              <span className="font-secondary text-xs font-bold text-custom-text">{cat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Productos Destacados (4 Columnas) */}
      <section className="max-w-6xl mx-auto w-full px-6 py-12 mb-16">
        <h2 className="font-primary font-bold text-xl uppercase text-custom-text mb-8 tracking-wider">Productos Destacados</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`p-4 ${cardStyle} bg-custom-surface flex flex-col justify-between hover:shadow-lg transition-shadow`}>
              <div>
                <div className="aspect-square w-full mb-4">
                  {productImages[i] ? (
                    <img src={productImages[i]!} alt={`Producto ${i + 1}`} className="w-full h-full object-contain rounded-2xl" />
                  ) : (
                    <ImagePlaceholder className="rounded-2xl" />
                  )}
                </div>
                <h3 className="font-primary font-bold text-xs text-custom-text mb-1">Nombre del Producto</h3>
                <p className="font-primary font-black text-custom-primary text-sm mb-2">$00.000</p>
                {renderStars(5, 0)}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center pt-8">
          <button className="btn-custom-radius border border-custom-primary text-custom-primary font-primary font-bold px-8 py-3 text-xs uppercase tracking-wider hover:bg-custom-primary hover:text-white transition-all cursor-pointer">
            Ver todos →
          </button>
        </div>
      </section>

      {/* Trust proposition banner (4 items) */}
      <section className="border-y border-custom-border bg-custom-surface py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {[
            { title: 'Despacho rápido', desc: 'a todo Chile', icon: Truck },
            { title: 'Pago seguro', desc: 'y protegido', icon: Lock },
            { title: 'Garantía en todos', desc: 'nuestros productos', icon: RotateCcw },
            { title: 'Atención y soporte', desc: 'especializado', icon: HelpCircle }
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-center">
              <item.icon className="w-8 h-8 text-custom-primary shrink-0" />
              <div>
                <h4 className="font-primary font-bold text-xs uppercase text-custom-text leading-tight">{item.title}</h4>
                <p className="font-secondary text-[11px] text-custom-muted leading-tight mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {renderNewsletter()}
      {renderFooterDetailed(3)}
    </div>
  );

  // 2. HOME ALTERNATIVO (Mismo diseño de la imagen "home-alternativo.png")
  const renderHomeAlternativo = () => (
    <div className="flex flex-col min-h-full bg-white">
      {renderPreHeader('dark')}
      {/* Header alternativo con navegación metida */}
      <header className="border-b border-custom-border bg-custom-surface px-6 py-4 flex items-center justify-between sticky top-0 z-25 transition-all">
        <div className="flex items-center gap-3">
          <span className="font-primary font-black text-2xl tracking-tight text-custom-primary uppercase">MAXXGO</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-6 font-secondary text-xs font-bold uppercase tracking-wider text-custom-text">
          <span className="cursor-pointer hover:text-custom-primary">Categorías</span>
          <span className="cursor-pointer hover:text-custom-primary">Ofertas</span>
          <span className="cursor-pointer hover:text-custom-primary">Novedades</span>
          <span className="cursor-pointer hover:text-custom-primary">Marcas</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative max-w-[200px] hidden sm:block">
            <input type="text" placeholder="Buscar..." className="w-full bg-slate-50 border border-custom-border rounded-xl px-4 py-1.5 text-xs font-secondary focus:outline-none focus:bg-white text-custom-text" />
            <Search className="w-3.5 h-3.5 text-custom-muted absolute right-3 top-1/2 -translate-y-1/2" />
          </div>
          <User className="w-5 h-5 text-custom-text cursor-pointer hover:text-custom-primary" />
          <div className="relative text-custom-text cursor-pointer hover:text-custom-primary">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-2 bg-custom-primary text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </header>

      {/* Hero Emocional */}
      <section 
        className="relative text-white min-h-[480px] flex items-center py-20 px-6 overflow-hidden"
        style={heroBgImage ? {
          backgroundImage: `url(${heroBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'transparent',
        } : { backgroundColor: '#020617' }}
      >
        {/* Overlay oscuro siempre presente para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        {!heroBgImage && <div className="absolute top-0 right-0 w-[450px] h-full bg-custom-primary/10 blur-[120px] rounded-full pointer-events-none" />}
        
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="text-left space-y-6">
            <h1 className="font-primary font-black text-5xl uppercase tracking-tighter leading-none text-white">
              TECNOLOGÍA <br/>QUE TE MUEVE
            </h1>
            <p className="font-secondary text-sm text-slate-300 font-light max-w-sm">
              Los mejores productos para potenciar tu mundo. Gadgets premium listos para el trabajo pesado.
            </p>
            <button className="btn-custom-radius bg-custom-primary text-white font-primary font-bold px-8 py-3.5 text-xs uppercase tracking-widest hover:opacity-95 transition-all cursor-pointer shadow-lg shadow-custom-primary/20">
              Comprar Ahora
            </button>
            {/* Dots */}
            <div className="flex gap-2 pt-4 justify-start">
              <span className="w-2.5 h-2.5 bg-custom-primary rounded-full" />
              <span className="w-2.5 h-2.5 bg-slate-600 rounded-full" />
              <span className="w-2.5 h-2.5 bg-slate-600 rounded-full" />
            </div>
          </div>
          <div className="aspect-[4/3] w-full hidden md:block">
            {heroProductImage ? (
              <img src={heroProductImage} alt="Producto" className="w-full h-full object-contain rounded-3xl" />
            ) : (
              <ImagePlaceholder className="rounded-3xl border border-slate-800" />
            )}
          </div>
        </div>
      </section>

      {/* Banner 4 items */}
      <section className="bg-custom-surface border-b border-custom-border py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {[
            { title: 'Despacho rápido', desc: 'a todo Chile', icon: Truck },
            { title: 'Pago seguro', desc: 'y hasta 12 cuotas', icon: Lock },
            { title: 'Calidad garantizada', desc: 'en todos los productos', icon: ShieldCheck },
            { title: 'Soporte experto', desc: 'antes y después de tu compra', icon: HelpCircle }
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-center">
              <item.icon className="w-8 h-8 text-custom-primary shrink-0" />
              <div>
                <h4 className="font-primary font-bold text-xs uppercase text-custom-text leading-tight">{item.title}</h4>
                <p className="font-secondary text-[11px] text-custom-muted leading-tight mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categorías Destacadas (6 Columnas) */}
      <section className="max-w-6xl mx-auto w-full px-6 py-12">
        <h2 className="font-primary font-bold text-xl uppercase text-custom-text mb-8 tracking-wider text-center md:text-left">Categorías Destacadas</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {[
            { label: 'Tecnología', icon: Laptop },
            { label: 'Audio', icon: Headphones },
            { label: 'Computación', icon: Laptop },
            { label: 'Hogar', icon: Home },
            { label: 'Iluminación', icon: Lightbulb },
            { label: 'Fitness', icon: Dumbbell }
          ].map((cat, i) => (
            <div key={i} className={`p-5 ${cardStyle} bg-custom-surface flex flex-col items-center justify-center h-36 gap-3 hover:border-custom-primary transition-all cursor-pointer`}>
              <div className="w-12 h-12 bg-slate-100 flex items-center justify-center rounded-xl">
                <cat.icon className="w-6 h-6 text-custom-primary" />
              </div>
              <span className="font-secondary text-xs font-bold text-custom-text text-center">{cat.label}</span>
            </div>
          ))}
        </div>
        <div className="text-center pt-8">
          <button className="btn-custom-radius border border-custom-primary text-custom-primary font-primary font-bold px-8 py-3 text-xs uppercase tracking-wider hover:bg-custom-primary hover:text-white transition-all cursor-pointer">
            Ver todas →
          </button>
        </div>
      </section>

      {/* Productos (5 Columnas) */}
      <section className="max-w-6xl mx-auto w-full px-6 py-12 mb-16">
        <h2 className="font-primary font-bold text-xl uppercase text-custom-text mb-8 tracking-wider">Productos Destacados</h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={`p-4 ${cardStyle} bg-custom-surface flex flex-col justify-between hover:shadow-md transition-shadow`}>
              <div>
                <div className="aspect-square w-full mb-4">
                  {productImages[i] ? (
                    <img src={productImages[i]!} alt={`Producto ${i + 1}`} className="w-full h-full object-contain rounded-xl" />
                  ) : (
                    <ImagePlaceholder className="rounded-xl" />
                  )}
                </div>
                <h3 className="font-primary font-bold text-xs text-custom-text mb-1 line-clamp-1">Nombre del Producto</h3>
                <p className="font-primary font-black text-custom-primary text-sm mb-2">$00.000</p>
                {renderStars(5, 0)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner Promo */}
      <section className="max-w-6xl mx-auto w-full px-6 py-12 mb-16">
        <div className="bg-slate-950 border-2 border-custom-border rounded-[2rem] overflow-hidden grid md:grid-cols-2 items-center">
          <div className="p-12 space-y-4 text-left">
            <h3 className="font-primary font-black text-3xl text-white uppercase tracking-wider leading-tight">
              Ofertas <br/>que no puedes <br/>dejar pasar
            </h3>
            <p className="font-secondary text-sm text-slate-300">Hasta 40% dcto. en productos seleccionados</p>
            <button className="btn-custom-radius bg-custom-primary text-white font-primary font-bold px-8 py-3.5 text-xs uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer">
              Ver Ofertas
            </button>
          </div>
          <div className="h-64 md:h-full">
            <ImagePlaceholder />
          </div>
        </div>
      </section>

      {/* Marcas */}
      <section className="max-w-6xl mx-auto w-full px-6 py-12 mb-16 text-center">
        <h2 className="font-primary font-bold text-xs uppercase tracking-widest text-custom-muted mb-8">Marcas Líderes</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
          {['SAMSUNG', 'JBL', 'logitech', 'xiaomi', 'PHILIPS', 'hp'].map((brand, i) => (
            <span key={i} className="font-primary font-black text-lg text-custom-text uppercase tracking-widest">{brand}</span>
          ))}
        </div>
      </section>

      {/* Value prop footer list */}
      <section className="bg-slate-900 border-t border-slate-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {[
            { title: 'Compra segura', desc: 'Tus datos siempre protegidos', icon: ShieldCheck },
            { title: 'Garantía Maxxgo', desc: 'Respaldo y calidad asegurada', icon: RotateCcw },
            { title: 'Despachos a todo Chile', desc: 'Rápido y confiable', icon: Truck },
            { title: 'Atención personalizada', desc: 'Estamos para ayudarte', icon: HelpCircle }
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-center">
              <item.icon className="w-8 h-8 text-custom-primary shrink-0" />
              <div>
                <h4 className="font-primary font-bold text-xs uppercase text-slate-100 leading-tight">{item.title}</h4>
                <p className="font-secondary text-[11px] text-slate-400 leading-tight mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {renderFooterDetailed(4)}
    </div>
  );

  // 3. HOME COMPLETO (Mismos textos y secciones de la imagen "home-completo.png")
  const renderHomeCompleto = () => (
    <div className="flex flex-col min-h-full bg-white">
      {/* Preheader */}
      <div className="bg-[#ebdcb9] text-[#5c4a24] px-6 py-2 flex flex-wrap justify-between items-center text-xs font-secondary gap-4">
        <span>Despacho a todo Chile</span>
        <span>Pago seguro Webpay / Mercado Pago</span>
        <span>Facturación para Empresas</span>
      </div>

      {renderMainHeader(true, true)}

      {/* Nav de categorias completo */}
      <nav className="bg-slate-950 text-white py-3 px-6 hidden md:block sticky top-[72px] z-20">
        <div className="max-w-6xl mx-auto flex items-center justify-between font-secondary text-xs uppercase font-bold tracking-wider">
          <div className="flex items-center gap-2 cursor-pointer hover:text-custom-primary bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
            <Menu className="w-4 h-4" />
            <span>Todas las Categorías</span>
          </div>
          <div className="flex gap-8 text-slate-300">
            {['Tecnología', 'Audio', 'Computación', 'Hogar', 'Iluminación', 'Fitness', 'Ofertas'].map((link) => (
              <span key={link} className="cursor-pointer hover:text-custom-primary transition-colors">{link}</span>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Completo */}
      <section className="max-w-6xl mx-auto w-full px-6 py-12">
        <div className="border border-custom-border rounded-[2.5rem] p-10 md:p-16 grid md:grid-cols-2 gap-8 items-center bg-custom-surface">
          <div className="text-left space-y-6">
            <span className="text-xs font-bold text-custom-primary tracking-widest uppercase">TECNOLOGÍA QUE IMPULSA TU DÍA A DÍA</span>
            <h1 className="font-primary font-black text-4xl md:text-5xl uppercase tracking-tighter text-custom-text leading-none">
              Calidad, innovación y rendimiento en cada producto
            </h1>
            <p className="font-secondary text-sm text-custom-muted max-w-sm leading-relaxed font-light">
              Descubre lo mejor en tecnología, audio, hogar, fitness y más. En Maxxgo tenemos lo que necesitas, al mejor precio.
            </p>
            <button className="btn-custom-radius bg-custom-primary text-white font-primary font-bold px-8 py-3.5 text-xs uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer">
              Ver Productos
            </button>
            {/* Dots */}
            <div className="flex gap-2 pt-2 justify-start">
              <span className="w-2.5 h-2.5 bg-custom-primary rounded-full" />
              <span className="w-2.5 h-2.5 bg-slate-300 rounded-full" />
              <span className="w-2.5 h-2.5 bg-slate-300 rounded-full" />
            </div>
          </div>
          <div className="aspect-[4/3] w-full">
            {heroProductImage ? (
              <img src={heroProductImage} alt="Producto" className="w-full h-full object-contain rounded-[2rem]" />
            ) : (
              <ImagePlaceholder className="rounded-[2rem]" />
            )}
          </div>
        </div>
      </section>

      {/* 5 items propositions */}
      <section className="max-w-6xl mx-auto w-full px-6 py-6">
        <div className={`p-8 ${cardStyle} bg-custom-surface grid grid-cols-2 lg:grid-cols-5 gap-6 text-left`}>
          {[
            { title: 'Despacho rápido', desc: 'a todo Chile', icon: Truck },
            { title: 'Pago seguro', desc: 'y protegido', icon: Lock },
            { title: 'Garantía de', desc: 'todos los productos', icon: RotateCcw },
            { title: 'Atención y soporte', desc: 'especializado', icon: HelpCircle },
            { title: 'Facturación', desc: 'para empresas', icon: FileText }
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-center">
              <item.icon className="w-8 h-8 text-custom-primary shrink-0" />
              <div>
                <h4 className="font-primary font-bold text-xs uppercase text-custom-text leading-tight">{item.title}</h4>
                <p className="font-secondary text-[10px] text-custom-muted leading-tight mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categorías Principales (6 Columnas) */}
      <section className="max-w-6xl mx-auto w-full px-6 py-12">
        <div className="flex justify-between items-center mb-8 border-b border-custom-border pb-4">
          <h2 className="font-primary font-bold text-xl uppercase text-custom-text tracking-wider">Categorías Principales</h2>
          <span className="text-xs text-custom-primary font-bold hover:underline cursor-pointer flex items-center gap-1">Ver todas <ChevronRight className="w-4 h-4" /></span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {[
            { label: 'Tecnología', icon: Laptop },
            { label: 'Audio', icon: Headphones },
            { label: 'Computación', icon: Laptop },
            { label: 'Hogar', icon: Home },
            { label: 'Iluminación', icon: Lightbulb },
            { label: 'Fitness', icon: Dumbbell }
          ].map((cat, i) => (
            <div key={i} className={`p-6 ${cardStyle} bg-custom-surface flex flex-col items-center justify-center h-32 gap-3 hover:border-custom-primary transition-all cursor-pointer`}>
              <cat.icon className="w-6 h-6 text-custom-primary" />
              <span className="font-secondary text-xs font-bold text-custom-text text-center">{cat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Productos Destacados (5 Columnas) */}
      <section className="max-w-6xl mx-auto w-full px-6 py-12">
        <div className="flex justify-between items-center mb-8 border-b border-custom-border pb-4">
          <h2 className="font-primary font-bold text-xl uppercase text-custom-text tracking-wider">Productos Destacados</h2>
          <span className="text-xs text-custom-primary font-bold hover:underline cursor-pointer flex items-center gap-1">Ver todos <ChevronRight className="w-4 h-4" /></span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={`p-4 ${cardStyle} bg-custom-surface flex flex-col justify-between hover:shadow-md transition-shadow`}>
              <div>
                <div className="aspect-square w-full mb-4">
                  {productImages[i] ? (
                    <img src={productImages[i]!} alt={`Producto ${i + 1}`} className="w-full h-full object-contain rounded-xl" />
                  ) : (
                    <ImagePlaceholder className="rounded-xl" />
                  )}
                </div>
                <h3 className="font-primary font-bold text-xs text-custom-text mb-1">Nombre del Producto</h3>
                <p className="font-primary font-black text-custom-primary text-sm mb-2">$00.000</p>
                {renderStars(5, 0)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Doble Promo Banners */}
      <section className="max-w-6xl mx-auto w-full px-6 py-12 grid md:grid-cols-2 gap-8 mb-16">
        {/* Banner 1 */}
        <div className={`p-8 ${cardStyle} bg-[#f5efe4] border border-[#e5dcd0] flex items-center justify-between`}>
          <div className="space-y-3 text-left max-w-[200px]">
            <span className="text-[10px] font-bold text-amber-800 tracking-wider uppercase">Ofertas Exclusivas</span>
            <h3 className="font-primary font-bold text-lg text-[#403628] uppercase leading-tight">Hasta 40% dcto. en productos seleccionados</h3>
            <button className="btn-custom-radius bg-[#a68c68] text-white font-primary font-bold px-4 py-2.5 text-[10px] uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer">
              Ver Código
            </button>
          </div>
          <div className="w-36 h-36">
            <ImagePlaceholder className="rounded-xl" />
          </div>
        </div>

        {/* Banner 2 */}
        <div className={`p-8 ${cardStyle} bg-custom-surface flex items-center justify-between`}>
          <div className="space-y-3 text-left max-w-[200px]">
            <span className="text-[10px] font-bold text-custom-primary tracking-wider uppercase">Novedades</span>
            <h3 className="font-primary font-bold text-lg text-custom-text uppercase leading-tight">Los últimos lanzamientos que Maxxgo trae para ti</h3>
            <button className="btn-custom-radius bg-custom-primary text-white font-primary font-bold px-4 py-2.5 text-[10px] uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer">
              Ver Novedades
            </button>
          </div>
          <div className="w-36 h-36">
            <ImagePlaceholder className="rounded-xl" />
          </div>
        </div>
      </section>

      {/* Marcas */}
      <section className="max-w-6xl mx-auto w-full px-6 py-12 mb-16 text-center border-t border-custom-border">
        <h2 className="font-primary font-bold text-xs uppercase tracking-widest text-custom-muted mb-8">Marcas que trabajamos</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
          {['SAMSUNG', 'JBL', 'logitech', 'xiaomi', 'PHILIPS', 'hp'].map((brand, i) => (
            <span key={i} className="font-primary font-black text-lg text-custom-text uppercase tracking-widest">{brand}</span>
          ))}
        </div>
      </section>

      {/* Newsletter simple inline */}
      <section className="bg-slate-100 border-t border-custom-border py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="font-primary font-bold text-lg uppercase text-custom-text">Suscríbete y recibe ofertas exclusivas</h3>
            <p className="font-secondary text-xs text-custom-muted">Se el primero en enterarte de novedades y promociones.</p>
          </div>
          <div className="flex gap-2 w-full md:max-w-md">
            <input type="email" placeholder="Ingresa tu email" className="flex-1 bg-white border border-custom-border rounded-xl px-4 py-2.5 text-xs font-secondary focus:outline-none" />
            <button className="btn-custom-radius bg-custom-primary text-white font-primary font-bold px-6 py-2.5 text-xs uppercase tracking-wider hover:opacity-95 cursor-pointer">Suscribirme</button>
          </div>
        </div>
      </section>

      {renderFooterDetailed(5)}
    </div>
  );

  // 4. CATEGORIA (Diseño idéntico a "categorias.png")
  const renderCategoria = () => (
    <div className="flex flex-col min-h-full bg-white">
      {renderPreHeader('light')}
      {renderMainHeader(false, false)}
      {renderNavLinks('Computación')}

      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 font-secondary text-[11px] text-custom-muted">
        <div className="max-w-6xl mx-auto">
          <span>Inicio</span>
          <span className="mx-2">&gt;</span>
          <span className="text-custom-text font-semibold">Computación</span>
        </div>
      </div>

      {/* Category Hero Banner */}
      <section className="max-w-6xl mx-auto w-full px-6 py-12">
        <div className="border border-custom-border rounded-[2.5rem] p-10 grid md:grid-cols-2 gap-8 items-center bg-custom-surface">
          <div className="text-left space-y-4">
            <span className="text-xs font-bold text-custom-primary tracking-wider uppercase">Computación</span>
            <h1 className="font-primary font-black text-3xl md:text-4xl uppercase text-custom-text leading-tight">
              Todo para tu rendimiento
            </h1>
            <p className="font-secondary text-xs text-custom-muted leading-relaxed max-w-sm">
              Encuentra notebooks, componentes, periféricos y más para trabajar, estudiar y crear sin límites.
            </p>
          </div>
          <div className="aspect-[4/1.8] w-full">
            <ImagePlaceholder className="rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Subcategories */}
      <section className="max-w-6xl mx-auto w-full px-6 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {[
            { label: 'Notebooks', active: true },
            { label: 'Componentes' },
            { label: 'Periféricos' },
            { label: 'Almacenamiento' },
            { label: 'Monitores' },
            { label: 'Accesorios' }
          ].map((sub, i) => (
            <div 
              key={i} 
              className={`p-4 rounded-2xl border flex flex-col items-center justify-center gap-2 cursor-pointer transition-all ${
                sub.active 
                  ? 'border-custom-primary bg-custom-surface shadow-sm ring-2 ring-custom-primary/5' 
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                <Laptop className="w-4 h-4 text-custom-primary" />
              </div>
              <span className="font-secondary text-[11px] font-bold text-custom-text">{sub.label}</span>
              <span className="font-secondary text-[9px] text-custom-muted">Ver todo</span>
            </div>
          ))}
        </div>
      </section>

      {/* Content Split: Filter + Grid */}
      <section className="max-w-6xl mx-auto w-full px-6 py-6 grid md:grid-cols-4 gap-8 mb-16">
        {/* Sidebar Filters */}
        <aside className="space-y-6">
          <div className={`p-6 ${cardStyle} bg-custom-surface space-y-6 text-left`}>
            <h3 className="font-primary font-bold text-sm text-custom-text uppercase border-b border-custom-border pb-3">Filtrar por</h3>
            
            {/* Price */}
            <div>
              <h4 className="font-primary font-bold text-xs text-custom-text uppercase mb-4">Precio</h4>
              <div className="h-1.5 bg-custom-border rounded-full relative mb-3">
                <div className="absolute left-[5%] right-[25%] h-full bg-custom-primary" />
                <div className="absolute left-[5%] -top-1.5 w-4.5 h-4.5 bg-custom-primary border-2 border-white rounded-full shadow cursor-pointer" />
                <div className="absolute right-[25%] -top-1.5 w-4.5 h-4.5 bg-custom-primary border-2 border-white rounded-full shadow cursor-pointer" />
              </div>
              <div className="flex justify-between font-mono text-[10px] text-custom-muted font-bold">
                <span>$0</span>
                <span>$1.500.000+</span>
              </div>
            </div>

            {/* Brand */}
            <div className="border-t border-custom-border pt-4">
              <h4 className="font-primary font-bold text-xs text-custom-text uppercase mb-3">Marca</h4>
              <div className="space-y-2.5">
                {[
                  { label: 'HP', count: 24 },
                  { label: 'Lenovo', count: 22 },
                  { label: 'ASUS', count: 20 },
                  { label: 'Acer', count: 16 },
                  { label: 'Logitech', count: 14 }
                ].map((brand) => (
                  <label key={brand.label} className="flex items-center justify-between font-secondary text-xs text-custom-muted cursor-pointer hover:text-custom-primary">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-custom-primary focus:ring-custom-primary" />
                      <span>{brand.label}</span>
                    </div>
                    <span className="text-[10px] text-slate-400">({brand.count})</span>
                  </label>
                ))}
              </div>
              <span className="text-[10px] text-custom-primary font-bold mt-2.5 block hover:underline cursor-pointer">Ver más v</span>
            </div>

            {/* Availability */}
            <div className="border-t border-custom-border pt-4">
              <h4 className="font-primary font-bold text-xs text-custom-text uppercase mb-3">Disponibilidad</h4>
              <div className="space-y-2.5">
                {[
                  { label: 'En stock', count: 98 },
                  { label: 'Stock bajo', count: 30 }
                ].map((item) => (
                  <label key={item.label} className="flex items-center gap-2 font-secondary text-xs text-custom-muted cursor-pointer hover:text-custom-primary">
                    <input type="checkbox" className="rounded text-custom-primary focus:ring-custom-primary" />
                    <span>{item.label} ({item.count})</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div className="border-t border-custom-border pt-4">
              <h4 className="font-primary font-bold text-xs text-custom-text uppercase mb-3">Calificación</h4>
              <div className="space-y-2">
                {[5, 4, 3, 2].map((stars) => (
                  <label key={stars} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-custom-primary focus:ring-custom-primary" />
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < stars ? 'fill-current' : 'text-slate-200'}`} />
                      ))}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full py-3 border border-custom-border hover:border-custom-primary hover:text-custom-primary rounded-xl font-primary font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer text-center text-custom-text">
              Limpiar filtros
            </button>
          </div>
        </aside>

        {/* Product Grid (4 Columnas) */}
        <div className="md:col-span-3 space-y-6">
          {/* Header grid filters */}
          <div className="flex justify-between items-center font-secondary text-xs text-custom-muted">
            <span>Mostrando 1-12 de 128 productos</span>
            <div className="flex items-center gap-2">
              <span>Ordenar por:</span>
              <select className="bg-white border border-custom-border rounded-lg px-3 py-1.5 font-bold text-custom-text">
                <option>Más vendidos</option>
                <option>Precio menor a mayor</option>
                <option>Precio mayor a menor</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Notebook Lenovo IdeaPad 3 15.6"', price: '$549.990', rating: 5, count: 128 },
              { name: 'Mouse Logitech M185 Inalámbrico', price: '$14.990', rating: 5, count: 96 },
              { name: 'SSD Kingston NV2 1TB M.2 NVMe', price: '$89.990', rating: 4, count: 74 },
              { name: 'Teclado Logitech K120 USB', price: '$12.990', rating: 4, count: 54 },
              { name: 'Monitor LG 24" 24MP400-B FHD IPS', price: '$129.990', rating: 5, count: 86 },
              { name: 'Memoria RAM Corsair Vengeance 16GB', price: '$49.990', rating: 4, count: 71 },
              { name: 'Disco Duro Seagate 2TB 3.5"', price: '$69.990', rating: 4, count: 63 },
              { name: 'Auriculares Logitech H390 USB', price: '$24.990', rating: 4, count: 41 },
              { name: 'Notebook HP 15s i5 8GB 512GB', price: '$599.990', rating: 5, count: 52 },
              { name: 'Tarjeta de Video ASUS RTX 4060', price: '$329.990', rating: 5, count: 33 },
              { name: 'Fuente de Poder Corsair CV650', price: '$59.990', rating: 4, count: 28 },
              { name: 'Impresora HP DeskJet 2775 WiFi', price: '$64.990', rating: 3, count: 19 }
            ].map((prod, i) => (
              <div key={i} className={`p-4.5 ${cardStyle} bg-custom-surface flex flex-col justify-between hover:shadow-md transition-shadow`}>
                <div className="space-y-3">
                  <div className="aspect-square w-full">
                    <ImagePlaceholder className="rounded-xl" />
                  </div>
                  <h3 className="font-primary font-bold text-xs text-custom-text line-clamp-2 min-h-[32px]">{prod.name}</h3>
                  <p className="font-primary font-black text-custom-primary text-sm">{prod.price}</p>
                  {renderStars(prod.rating, prod.count)}
                </div>
                <button className="btn-custom-radius bg-custom-secondary text-custom-text font-primary font-bold text-[10px] uppercase py-2.5 mt-4 hover:opacity-85 transition-opacity w-full cursor-pointer border border-custom-border">
                  Agregar al carrito
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust propositions */}
      <section className="border-t border-custom-border bg-custom-surface py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {[
            { title: 'Despacho rápido', desc: 'a todo Chile', icon: Truck },
            { title: 'Pago seguro', desc: 'y protegido', icon: Lock },
            { title: 'Garantía en todos', desc: 'nuestros productos', icon: RotateCcw },
            { title: 'Atención y soporte', desc: 'especializado', icon: HelpCircle }
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-center">
              <item.icon className="w-8 h-8 text-custom-primary shrink-0" />
              <div>
                <h4 className="font-primary font-bold text-xs uppercase text-custom-text leading-tight">{item.title}</h4>
                <p className="font-secondary text-[11px] text-custom-muted leading-tight mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {renderNewsletter()}
      {renderFooterDetailed(5)}
    </div>
  );

  // 5. PRODUCTO (Diseño idéntico a "producto.png")
  const renderProducto = () => (
    <div className="flex flex-col min-h-full bg-white">
      {renderPreHeader('light')}
      {renderMainHeader(false, false)}
      
      {/* Navigation sub-header */}
      <nav className="bg-custom-surface border-b border-custom-border py-3.5 px-6 hidden md:block">
        <div className="max-w-6xl mx-auto flex justify-center gap-12 font-secondary text-xs font-bold uppercase tracking-wider text-custom-text items-center">
          <span className="cursor-pointer hover:text-custom-primary flex items-center gap-1"><Laptop className="w-4 h-4" /> Tecnología</span>
          <span className="cursor-pointer hover:text-custom-primary flex items-center gap-1"><Headphones className="w-4 h-4" /> Audio</span>
          <span className="cursor-pointer hover:text-custom-primary flex items-center gap-1"><Laptop className="w-4 h-4" /> Computación</span>
          <span className="cursor-pointer hover:text-custom-primary flex items-center gap-1"><Home className="w-4 h-4" /> Hogar</span>
          <span className="cursor-pointer hover:text-custom-primary flex items-center gap-1"><BadgeAlert className="w-4 h-4" /> Ofertas</span>
        </div>
      </nav>

      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 font-secondary text-[11px] text-custom-muted">
        <div className="max-w-6xl mx-auto">
          <span>Inicio</span>
          <span className="mx-2">&gt;</span>
          <span>Tecnología</span>
          <span className="mx-2">&gt;</span>
          <span>Smartphones</span>
          <span className="mx-2">&gt;</span>
          <span className="text-custom-text font-semibold">Samsung Galaxy S24 Ultra 256GB Negro</span>
        </div>
      </div>

      {/* Product Detail columns */}
      <main className="max-w-6xl mx-auto w-full px-6 py-12 grid md:grid-cols-2 gap-12">
        {/* Left column: Image & Carousel */}
        <div className="space-y-6">
          <div className="aspect-square bg-slate-50 border border-custom-border rounded-[2.5rem] relative overflow-hidden flex items-center justify-center">
            {/* Badge discount */}
            <span className="absolute top-6 left-6 bg-[#d97706] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              -10%
            </span>
            <button className="absolute top-6 right-6 p-2.5 bg-white rounded-full border border-custom-border text-slate-400 hover:text-rose-500 shadow-sm transition-colors cursor-pointer">
              <Heart className="w-4 h-4" />
            </button>
            <ImagePlaceholder />
          </div>
          {/* Thumbnails list */}
          <div className="flex items-center gap-4">
            <span className="text-slate-400 cursor-pointer font-bold text-lg hover:text-custom-primary">&lt;</span>
            <div className="flex-1 grid grid-cols-4 gap-3">
              <div className="aspect-square bg-slate-50 border-2 border-custom-primary rounded-xl overflow-hidden p-1"><ImagePlaceholder /></div>
              <div className="aspect-square bg-slate-50 border border-custom-border rounded-xl overflow-hidden p-1"><ImagePlaceholder /></div>
              <div className="aspect-square bg-slate-50 border border-custom-border rounded-xl overflow-hidden p-1"><ImagePlaceholder /></div>
              <div className="aspect-square bg-slate-50 border border-custom-border rounded-xl overflow-hidden p-1"><ImagePlaceholder /></div>
            </div>
            <span className="text-slate-400 cursor-pointer font-bold text-lg hover:text-custom-primary">&gt;</span>
          </div>
        </div>

        {/* Right column: Information & configuration */}
        <div className="text-left space-y-6">
          <div className="space-y-2">
            <h1 className="font-primary font-black text-3xl text-custom-text leading-tight uppercase">
              Samsung Galaxy S24 Ultra 256GB Negro
            </h1>
            <p className="font-secondary text-xs text-custom-muted leading-relaxed">
              El smartphone más avanzado de Samsung con cámara profesional y rendimiento de última generación.
            </p>
            {renderStars(5, 128)}
            <span className="text-[10px] text-slate-400 font-bold block pt-1">SKU: SM-S928BZKGLTA</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline gap-3">
              <span className="font-primary font-black text-3xl text-custom-primary">$1.249.990</span>
              <span className="font-secondary text-sm text-custom-muted line-through">$1.389.990</span>
              <span className="bg-[#fcfaf7] text-custom-primary border border-custom-border text-[10px] font-bold px-2 py-1 rounded">
                Ahorra $140.000
              </span>
            </div>
            <p className="font-secondary text-[11px] text-custom-muted">
              Hasta 12 cuotas sin interés de $104.166 | <span className="text-custom-primary font-bold hover:underline cursor-pointer">Ver medios de pago</span>
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="text-emerald-600 flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" /> En stock
            </span>
            <span className="text-slate-200">|</span>
            <span className="text-custom-muted">Despacho inmediato</span>
          </div>

          {/* Bullets with icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium text-custom-text border-y border-custom-border py-4">
            <div className="flex items-center gap-2.5">
              <Laptop className="w-4.5 h-4.5 text-custom-primary shrink-0" />
              <span>Cámara de 200MP con IA</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Laptop className="w-4.5 h-4.5 text-custom-primary shrink-0" />
              <span>Pantalla Dynamic AMOLED 2X 6.8"</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Laptop className="w-4.5 h-4.5 text-custom-primary shrink-0" />
              <span>Procesador Snapdragon 8 Gen 3</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Laptop className="w-4.5 h-4.5 text-custom-primary shrink-0" />
              <span>Batería 5000 mAh + 45W carga</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Laptop className="w-4.5 h-4.5 text-custom-primary shrink-0" />
              <span>Resistencia al agua IP68</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Laptop className="w-4.5 h-4.5 text-custom-primary shrink-0" />
              <span>Incluye S Pen inteligente</span>
            </div>
          </div>

          {/* Qty Selector */}
          <div className="flex items-center gap-4">
            <span className="font-primary text-[10px] font-black uppercase tracking-wider text-custom-text">Cantidad</span>
            <div className="flex items-center bg-slate-50 border border-custom-border rounded-xl px-4 py-2 font-bold font-secondary">
              <button className="text-custom-muted hover:text-custom-primary px-2"><Minus className="w-3.5 h-3.5" /></button>
              <span className="px-4 text-xs text-custom-text">1</span>
              <button className="text-custom-muted hover:text-custom-primary px-2"><Plus className="w-3.5 h-3.5" /></button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-3">
            <button className="btn-custom-radius bg-custom-primary text-white w-full py-4 font-primary font-bold text-xs uppercase tracking-widest hover:opacity-95 transition-opacity shadow-lg shadow-custom-primary/10 cursor-pointer flex items-center justify-center gap-2">
              <ShoppingCart className="w-4 h-4" /> Agregar al carro
            </button>
            <button className="btn-custom-radius bg-custom-secondary text-custom-text w-full py-4 font-primary font-bold text-xs uppercase tracking-widest hover:opacity-85 transition-opacity cursor-pointer border border-custom-border">
              Comprar ahora
            </button>
          </div>

          {/* 3 items trust banner */}
          <div className="grid grid-cols-3 gap-2 text-center bg-slate-50 border border-custom-border rounded-2xl p-4 font-secondary text-[9px] text-custom-muted leading-tight">
            <div>
              <Truck className="w-5 h-5 mx-auto text-custom-primary mb-1.5" />
              <span className="font-bold block text-custom-text">Despacho a todo Chile</span>
              <span>Recibe entre 1 y 3 días hábiles en RM</span>
            </div>
            <div>
              <ShieldCheck className="w-5 h-5 mx-auto text-custom-primary mb-1.5" />
              <span className="font-bold block text-custom-text">Garantía de fábrica</span>
              <span>12 meses de garantía oficial</span>
            </div>
            <div>
              <RotateCcw className="w-5 h-5 mx-auto text-custom-primary mb-1.5" />
              <span className="font-bold block text-custom-text">Devolución fácil</span>
              <span>30 días para cambios</span>
            </div>
          </div>

        </div>
      </main>

      {/* Product Tabs */}
      <section className="max-w-6xl mx-auto w-full px-6 py-6 mb-16">
        <div className="border-b border-custom-border flex gap-8 font-secondary text-xs uppercase font-bold text-custom-text pb-px">
          <span className="border-b-2 border-custom-primary pb-3 text-custom-primary cursor-pointer">Descripción</span>
          <span className="text-custom-muted hover:text-custom-text pb-3 cursor-pointer">Especificaciones técnicas</span>
          <span className="text-custom-muted hover:text-custom-text pb-3 cursor-pointer">Envíos</span>
          <span className="text-custom-muted hover:text-custom-text pb-3 cursor-pointer">Reseñas (128)</span>
        </div>
        <div className="p-8 bg-slate-50 border border-t-0 border-custom-border rounded-b-[2rem] text-left text-xs font-secondary text-custom-muted leading-relaxed">
          El Samsung Galaxy S24 Ultra combina potencia, diseño y tecnología de vanguardia para llevar tu experiencia móvil al siguiente nivel. Su cámara de 200MP con IA, pantalla AMOLED 2X de 120Hz y el procesador más potente de Samsung te entregan rendimiento excepcional en todo momento.
        </div>
      </section>

      {/* Cross Selling */}
      <section className="max-w-6xl mx-auto w-full px-6 py-12 mb-16">
        <div className="flex justify-between items-center mb-8 border-b border-custom-border pb-4">
          <h2 className="font-primary font-bold text-xl uppercase text-custom-text tracking-wider">También podría interesarte</h2>
          <span className="text-xs text-custom-primary font-bold hover:underline cursor-pointer flex items-center gap-1">Ver más productos <ChevronRight className="w-4 h-4" /></span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Apple iPhone 15 Pro Max 256GB Titanio Natural', price: '$1.399.990', rating: 5, count: 96 },
            { name: 'Xiaomi 14 Ultra 512GB Negro', price: '$1.099.990', rating: 5, count: 64 },
            { name: 'Samsung Galaxy S24+ 256GB Gris', price: '$999.990', rating: 5, count: 88 },
            { name: 'Google Pixel 8 Pro 256GB Negro', price: '$899.990', rating: 4, count: 72 }
          ].map((prod, i) => (
            <div key={i} className={`p-4.5 ${cardStyle} bg-custom-surface flex flex-col justify-between hover:shadow-md transition-shadow`}>
              <div>
                <div className="aspect-square w-full mb-4">
                  <ImagePlaceholder className="rounded-xl" />
                </div>
                <h3 className="font-primary font-bold text-xs text-custom-text line-clamp-2 min-h-[32px]">{prod.name}</h3>
                <p className="font-primary font-black text-custom-primary text-sm mb-2">{prod.price}</p>
                {renderStars(prod.rating, prod.count)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {renderNewsletter()}
      {renderFooterDetailed(5)}
    </div>
  );

  // 6. CARRITO (Diseño idéntico a "carrito.png")
  const renderCarrito = () => (
    <div className="flex flex-col min-h-full bg-white">
      {renderPreHeader('light')}
      {renderMainHeader(false, false)}
      
      {/* Checkout progress steps */}
      <div className="bg-slate-50 border-b border-slate-200 py-6 px-6 shrink-0">
        <div className="max-w-md mx-auto flex items-center justify-between font-secondary text-[11px] font-bold text-custom-text">
          <div className="flex flex-col items-center gap-1.5">
            <span className="w-7 h-7 rounded-full bg-custom-primary text-white flex items-center justify-center">1</span>
            <span className="text-custom-primary">Carro</span>
          </div>
          <div className="flex-1 h-0.5 bg-slate-200 mx-4 relative top-[-10px]" />
          <div className="flex flex-col items-center gap-1.5 opacity-40">
            <span className="w-7 h-7 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center">2</span>
            <span>Datos</span>
          </div>
          <div className="flex-1 h-0.5 bg-slate-200 mx-4 relative top-[-10px]" />
          <div className="flex flex-col items-center gap-1.5 opacity-40">
            <span className="w-7 h-7 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center">3</span>
            <span>Pago</span>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto w-full px-6 py-12 text-left">
        <h1 className="font-primary font-black text-3xl text-custom-text uppercase mb-2">Carro de compra</h1>
        <p className="font-secondary text-xs text-custom-muted mb-8">Revisa los productos que agregaste a tu carrito.</p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Cart Items List */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* Header labels */}
            <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-2 border-b border-custom-border font-secondary text-[10px] font-bold text-slate-400 uppercase">
              <span className="col-span-6">Producto</span>
              <span className="col-span-2 text-center">Precio Unitario</span>
              <span className="col-span-2 text-center">Cantidad</span>
              <span className="col-span-2 text-right">Subtotal</span>
            </div>

            {[
              { name: 'Audífonos Inalámbricos MAXXGO SoundPro', details: 'Inalámbricos Bluetooth 5.3 Negro', price: '$59.990' },
              { name: 'Parlante Portátil MAXXGO Beat', details: 'Bluetooth 5.0 / Resistente al agua IPX7', price: '$39.990' },
              { name: 'Cable USB-C a USB-C MAXXGO 1.5m', details: 'Carga rápida 60W / Nylon trenzado', price: '$8.990' }
            ].map((item, i) => (
              <div key={i} className={`p-6 ${cardStyle} bg-custom-surface flex flex-col sm:grid sm:grid-cols-12 gap-4 items-center`}>
                <div className="col-span-6 flex items-center gap-4 w-full text-left">
                  <div className="w-16 h-16 shrink-0">
                    <ImagePlaceholder className="rounded-xl" />
                  </div>
                  <div>
                    <h4 className="font-primary font-bold text-sm text-custom-text">{item.name}</h4>
                    <p className="font-secondary text-[11px] text-custom-muted mt-0.5">{item.details}</p>
                  </div>
                </div>
                
                <div className="col-span-2 text-center font-primary font-bold text-xs text-custom-text">
                  {item.price}
                </div>

                <div className="col-span-2 flex justify-center">
                  <div className="flex items-center bg-slate-50 border border-custom-border rounded-lg px-2 py-1 font-bold font-secondary">
                    <button className="text-custom-muted hover:text-custom-primary px-1.5"><Minus className="w-3 h-3" /></button>
                    <span className="px-2 text-xs text-custom-text">1</span>
                    <button className="text-custom-muted hover:text-custom-primary px-1.5"><Plus className="w-3 h-3" /></button>
                  </div>
                </div>

                <div className="col-span-2 w-full flex items-center justify-end gap-4">
                  <span className="font-primary font-bold text-xs text-custom-text">{item.price}</span>
                  <button className="text-slate-300 hover:text-rose-500 p-1.5 cursor-pointer">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

            <div className="pt-4 text-left">
              <Link 
                href={`/proyectos/${projectId}/wireframes`}
                className="font-secondary text-xs font-bold text-custom-primary hover:underline flex items-center gap-1.5"
              >
                ← Seguir comprando
              </Link>
            </div>
          </div>

          {/* Right: Summary panel */}
          <div className="space-y-6">
            <div className={`p-8 ${cardStyle} bg-custom-surface space-y-6`}>
              <h3 className="font-primary font-bold text-base text-custom-text uppercase border-b border-custom-border pb-4">Resumen del pedido</h3>
              
              <div className="space-y-3 font-secondary text-xs text-custom-muted">
                <div className="flex justify-between">
                  <span>Subtotal (3 productos)</span>
                  <span className="font-bold text-custom-text">$108.970</span>
                </div>
                <div className="flex justify-between">
                  <span className="flex items-center gap-1">Despacho estimado <HelpCircle className="w-3.5 h-3.5 text-slate-300" /></span>
                  <span className="font-bold text-custom-text">$2.990</span>
                </div>
              </div>

              {/* Discount Code */}
              <div className="space-y-2 pt-2">
                <span className="font-primary text-[10px] font-black uppercase tracking-wider text-custom-text block">Código de descuento</span>
                <div className="flex gap-2">
                  <input type="text" placeholder="Ingresa tu código" className="flex-1 bg-white border border-custom-border rounded-xl px-3 py-2 text-xs font-secondary focus:outline-none" />
                  <button className="border border-custom-primary hover:bg-custom-primary hover:text-white text-custom-primary font-primary font-bold px-4 py-2 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer">Aplicar</button>
                </div>
              </div>

              <hr className="border-custom-border" />

              <div className="space-y-1">
                <div className="flex justify-between font-primary text-xl font-black text-custom-text uppercase">
                  <span>Total</span>
                  <span className="text-custom-primary">$111.960</span>
                </div>
                <span className="font-secondary text-[10px] text-custom-muted block text-right leading-none">Hasta 6 cuotas sin interés</span>
              </div>

              <button className="btn-custom-radius bg-custom-primary text-white w-full py-4 font-primary font-bold text-xs uppercase tracking-widest hover:opacity-95 transition-opacity shadow-lg shadow-custom-primary/10 cursor-pointer">
                Ir a pagar
              </button>

              <div className="text-center font-secondary text-[10px] text-custom-muted flex items-center justify-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-emerald-600" /> Pago 100% seguro
              </div>
            </div>

            {/* Small value props box */}
            <div className={`p-6 ${cardStyle} bg-custom-surface space-y-4 font-secondary text-xs text-custom-text`}>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-custom-primary shrink-0" />
                <div>
                  <h4 className="font-bold">Pago seguro</h4>
                  <p className="text-[10px] text-custom-muted mt-0.5">Tus datos protegidos</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-6 h-6 text-custom-primary shrink-0" />
                <div>
                  <h4 className="font-bold">Despacho rápido</h4>
                  <p className="text-[10px] text-custom-muted mt-0.5">A todo Chile</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-6 h-6 text-custom-primary shrink-0" />
                <div>
                  <h4 className="font-bold">Garantía Maxxgo</h4>
                  <p className="text-[10px] text-custom-muted mt-0.5">Respaldo oficial</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {renderFooterDetailed(5)}
    </div>
  );

  // ── 1. HOME V1 CLÁSICO (Referencia) ──
  const renderHomeV1Actual = () => (
    <div className="flex flex-col min-h-full bg-white">
      <div className="bg-[#ebdcb9] text-[#5c4a24] px-6 py-2 flex flex-wrap justify-between items-center text-xs font-secondary gap-4">
        <span>Despacho a todo Chile</span>
        <span>Pago seguro Webpay / Mercado Pago</span>
        <span>Facturación para Empresas</span>
      </div>
      {renderMainHeader(true, true)}
      <nav className="bg-slate-950 text-white py-3 px-6 hidden md:block sticky top-[72px] z-20">
        <div className="max-w-6xl mx-auto flex items-center justify-between font-secondary text-xs uppercase font-bold tracking-wider">
          <div className="flex items-center gap-2 cursor-pointer hover:text-custom-primary bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
            <Menu className="w-4 h-4" />
            <span>Todas las Categorías</span>
          </div>
          <div className="flex gap-8 text-slate-300">
            {['Tecnología', 'Audio', 'Computación', 'Hogar', 'Iluminación', 'Fitness', 'Ofertas'].map((link) => (
              <span key={link} className="cursor-pointer hover:text-custom-primary transition-colors">{link}</span>
            ))}
          </div>
        </div>
      </nav>
      <section className="max-w-6xl mx-auto w-full px-6 py-12">
        <div className="border border-custom-border rounded-[2.5rem] p-10 md:p-16 grid md:grid-cols-2 gap-8 items-center bg-custom-surface">
          <div className="text-left space-y-6">
            <span className="text-xs font-bold text-custom-primary tracking-widest uppercase">TECNOLOGÍA QUE MUEVE TU MUNDO</span>
            <h1 className="font-primary font-black text-4xl md:text-5xl uppercase tracking-tighter text-custom-text leading-none">
              Calidad, innovación y rendimiento en cada producto
            </h1>
            <p className="font-secondary text-sm text-custom-muted max-w-sm leading-relaxed font-light">
              Descubre lo mejor en tecnología, audio, hogar, fitness y más. En Maxxgo tenemos lo que necesitas, al mejor precio.
            </p>
            <button className="btn-custom-radius bg-custom-primary text-white font-primary font-bold px-8 py-3.5 text-xs uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer">
              Ver Productos
            </button>
            <div className="flex gap-2 pt-2 justify-start">
              <span className="w-2.5 h-2.5 bg-custom-primary rounded-full" />
              <span className="w-2.5 h-2.5 bg-slate-300 rounded-full" />
              <span className="w-2.5 h-2.5 bg-slate-300 rounded-full" />
            </div>
          </div>
          <div className="aspect-[4/3] w-full">
            {heroProductImage ? (
              <img src={heroProductImage} alt="Producto" className="w-full h-full object-contain rounded-[2rem]" />
            ) : (
              <ImagePlaceholder className="rounded-[2rem]" />
            )}
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto w-full px-6 py-8">
        <h2 className="font-primary font-bold text-xl uppercase text-custom-text mb-6 tracking-wider">Categorías Principales</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            { label: 'Computación', icon: Laptop },
            { label: 'Audio', icon: Headphones },
            { label: 'Hogar', icon: Home },
            { label: 'Móvil', icon: Laptop },
            { label: 'Iluminación', icon: Lightbulb },
            { label: 'Oficina', icon: FileText }
          ].map((cat, i) => (
            <div key={i} className={`p-5 ${cardStyle} bg-custom-surface flex flex-col items-center justify-center h-28 gap-2 hover:border-custom-primary cursor-pointer`}>
              <cat.icon className="w-6 h-6 text-custom-primary" />
              <span className="font-secondary text-xs font-bold text-custom-text">{cat.label}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto w-full px-6 py-12">
        <h2 className="font-primary font-bold text-xl uppercase text-custom-text mb-6 tracking-wider">Ofertas Destacadas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`p-4 ${cardStyle} bg-custom-surface flex flex-col justify-between`}>
              <div className="aspect-square w-full mb-3">
                {productImages[i] ? <img src={productImages[i]!} alt={`Prod ${i}`} className="w-full h-full object-contain rounded-xl" /> : <ImagePlaceholder className="rounded-xl" />}
              </div>
              <h3 className="font-primary font-bold text-xs text-custom-text mb-1">Producto Maxxgo #{i + 1}</h3>
              <p className="font-primary font-black text-custom-primary text-sm">$49.990</p>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto w-full px-6 py-6">
        <div className="bg-slate-950 text-white rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-custom-primary uppercase tracking-widest">EDICIÓN ESPECIAL GAMING</span>
            <h3 className="font-primary font-black text-3xl uppercase tracking-tight mt-1">LO MEJOR EN GAMING ESTÁ EN MAXXGO</h3>
            <p className="font-secondary text-xs text-slate-400 mt-2 max-w-lg">Monitores, teclados mecánicos, audífonos 7.1 y sillas ergonómicas con garantía oficial.</p>
          </div>
          <button className="btn-custom-radius bg-custom-primary text-white font-primary font-bold px-8 py-3.5 text-xs uppercase tracking-wider whitespace-nowrap cursor-pointer">
            Explorar Setup Gamer
          </button>
        </div>
      </section>
      {renderNewsletter()}
      {renderFooterDetailed(5)}
    </div>
  );

  // ── 2. HOME V2 COMPACTO PRO (4 Promo Blocks + Testimonios + 10 Categorías) ──
  const renderHomeV2Compacto = () => (
    <div className="flex flex-col min-h-full bg-white">
      <div className="bg-slate-950 text-white px-6 py-2 flex flex-wrap justify-between items-center text-xs font-secondary gap-4">
        <span>Envíos a todo Chile</span>
        <span>Ofertas exclusivas online</span>
        <span>Compra segura SSL</span>
        <span>Centro de Ayuda</span>
      </div>
      {renderMainHeader(true, true)}
      <section className="max-w-6xl mx-auto w-full px-6 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 border border-custom-border rounded-[2rem] p-8 md:p-12 bg-custom-surface flex flex-col justify-center">
            <span className="text-xs font-bold text-custom-primary tracking-widest uppercase">TECNOLOGÍA PARA CADA PASIÓN</span>
            <h1 className="font-primary font-black text-3xl md:text-4xl uppercase tracking-tight text-custom-text mt-2 mb-4">
              Encuentra tu equipo ideal en catálogo reducido
            </h1>
            <p className="font-secondary text-xs text-custom-muted mb-6 max-w-md">
              Selección optimizada de productos de alto rendimiento con garantía directa.
            </p>
            <div>
              <button className="btn-custom-radius bg-custom-primary text-white font-primary font-bold px-6 py-3 text-xs uppercase tracking-wider cursor-pointer">
                Comprar Ahora →
              </button>
            </div>
          </div>
          <div className={`p-6 ${cardStyle} bg-custom-surface flex flex-col justify-between border-2 border-custom-primary`}>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider bg-custom-primary text-white px-2.5 py-1 rounded-full">
                OFERTA DESTACADA
              </span>
              <h3 className="font-primary font-bold text-lg text-custom-text mt-4 mb-1">Pack Gamer Pro MAX</h3>
              <p className="font-secondary text-xs text-custom-muted mb-4">Teclado + Mouse + Mousepad XL</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-primary font-black text-2xl text-custom-primary">$69.990</span>
                <span className="font-secondary text-xs text-custom-muted line-through">$99.990</span>
              </div>
            </div>
            <button className="btn-custom-radius bg-slate-900 text-white font-primary font-bold py-3 text-xs uppercase tracking-wider w-full cursor-pointer">
              Agregar al Carrito
            </button>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto w-full px-6 py-6">
        <h2 className="font-primary font-bold text-lg uppercase text-custom-text mb-4 tracking-wider">Promociones Imperdibles</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Ofertas del Día', sub: 'Hasta 40% OFF', icon: RotateCcw, bg: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
            { title: 'Cyber Ofertas', sub: 'Descuentos Flash', icon: BadgeAlert, bg: 'bg-rose-50 text-rose-700 border-rose-200' },
            { title: 'Hasta 12 Cuotas', sub: 'Sin interés con Webpay', icon: Lock, bg: 'bg-amber-50 text-amber-700 border-amber-200' },
            { title: 'Envíos Gratis', sub: 'En compras sobre $30.000', icon: Truck, bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' }
          ].map((promo, i) => (
            <div key={i} className={`p-5 rounded-2xl border ${promo.bg} flex items-center gap-3 cursor-pointer hover:scale-102 transition-transform`}>
              <promo.icon className="w-6 h-6 shrink-0" />
              <div>
                <h4 className="font-primary font-bold text-xs uppercase">{promo.title}</h4>
                <p className="font-secondary text-[11px] opacity-80">{promo.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto w-full px-6 py-8">
        <h2 className="font-primary font-bold text-lg uppercase text-custom-text mb-4 tracking-wider">Categorías Destacadas (10)</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {['Computación', 'Audio', 'Hogar', 'Móvil', 'Iluminación', 'Oficina', 'Gaming', 'Fitness', 'Cámaras', 'Accesorios'].map((cat, i) => (
            <div key={i} className={`p-4 ${cardStyle} bg-custom-surface text-center hover:border-custom-primary cursor-pointer`}>
              <span className="font-secondary text-xs font-bold text-custom-text block">{cat}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto w-full px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-primary font-bold text-lg uppercase text-custom-text tracking-wider">Productos Trending</h2>
          <div className="flex gap-2">
            <span className="text-xs font-bold px-3 py-1 bg-custom-primary text-white rounded-full cursor-pointer">Todo</span>
            <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-full cursor-pointer hover:bg-slate-200">Gaming</span>
            <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-full cursor-pointer hover:bg-slate-200">Audio</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`p-4 ${cardStyle} bg-custom-surface`}>
              <div className="aspect-square w-full mb-3"><ImagePlaceholder className="rounded-xl" /></div>
              <h3 className="font-primary font-bold text-xs text-custom-text mb-1">Producto Trending #{i + 1}</h3>
              <p className="font-primary font-black text-custom-primary text-sm">$39.990</p>
              {renderStars(5, 18)}
            </div>
          ))}
        </div>
      </section>
      <section className="bg-slate-50 py-12 px-6 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-primary font-bold text-center text-lg uppercase text-custom-text mb-8 tracking-wider">Lo que dicen nuestros clientes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Matías R.', comment: 'Excelente atención y los audífonos llegaron en 24 horas a Santiago.', rating: 5 },
              { name: 'Camila S.', comment: 'Compré la silla gamer y es súper cómoda. La garantía respondió de inmediato.', rating: 5 },
              { name: 'Gonzalo V.', comment: 'Muy buena experiencia de compra. Todo bien empaquetado y boleta rápida.', rating: 5 }
            ].map((test, i) => (
              <div key={i} className={`p-6 ${cardStyle} bg-white space-y-3`}>
                {renderStars(test.rating, 1)}
                <p className="font-secondary text-xs text-slate-600 italic">"{test.comment}"</p>
                <span className="font-primary font-bold text-xs text-custom-text block">— {test.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {renderFooterDetailed(4)}
    </div>
  );

  // ── 3. HOME V3 FLASH SALE (Countdown + Comparador 3 Columnas) ──
  const renderHomeV3Flash = () => (
    <div className="flex flex-col min-h-full bg-white">
      <div className="bg-rose-950 text-rose-200 px-6 py-2 flex justify-between items-center text-xs font-secondary">
        <span className="flex items-center gap-1.5 font-bold"><BadgeAlert className="w-4 h-4 text-rose-400" /> EVENTO FLASH SALE ONLINE</span>
        <span className="font-mono">TERMINA EN: 00:14:23:47</span>
        <span className="hidden sm:inline">Despachos Express 24h</span>
      </div>
      {renderMainHeader(true, true)}
      <section className="max-w-6xl mx-auto w-full px-6 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 border border-custom-border rounded-[2rem] p-8 md:p-12 bg-custom-surface relative overflow-hidden">
            <span className="text-xs font-bold text-rose-600 tracking-widest uppercase">CADA SEGUNDO CUENTA</span>
            <h1 className="font-primary font-black text-3xl md:text-4xl uppercase tracking-tight text-custom-text mt-2 mb-4">
              Tecnología con hasta 50% de descuento flash
            </h1>
            <p className="font-secondary text-xs text-custom-muted mb-6 max-w-md">
              Unidades limitadas por tiempo determinado. Revisa las ofertas del día.
            </p>
            <button className="btn-custom-radius bg-rose-600 text-white font-primary font-bold px-8 py-3.5 text-xs uppercase tracking-wider cursor-pointer shadow-lg shadow-rose-600/20">
              ⚡ Ver Ofertas Flash
            </button>
          </div>
          <div className={`p-6 ${cardStyle} bg-rose-50/50 border-2 border-rose-500 rounded-[2rem] flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider bg-rose-600 text-white px-2.5 py-1 rounded-full flex items-center gap-1">
                  ⚡ OFERTA DEL DÍA
                </span>
                <span className="font-mono text-xs font-bold text-rose-700">00:14:23</span>
              </div>
              <h3 className="font-primary font-bold text-base text-custom-text mt-4 mb-1">Audífonos Gamer Wireless Pro</h3>
              <p className="font-secondary text-xs text-custom-muted mb-3">Audio 7.1 Surround + Micrófono Noise Cancelling</p>
              <div className="w-full bg-slate-200 h-2 rounded-full mb-2 overflow-hidden">
                <div className="bg-rose-500 h-full w-[70%]" />
              </div>
              <p className="text-[10px] font-bold text-rose-700 mb-4">🔥 70% Vendido (Quedan 6 unidades)</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-primary font-black text-2xl text-rose-600">$34.990</span>
                <span className="font-secondary text-xs text-custom-muted line-through">$69.990</span>
              </div>
            </div>
            <button className="btn-custom-radius bg-rose-600 text-white font-primary font-bold py-3 text-xs uppercase tracking-wider w-full cursor-pointer">
              ¡Comprar Oferta Flash!
            </button>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto w-full px-6 py-8">
        <div className="bg-rose-600 text-white p-6 rounded-[2rem] mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <BadgeAlert className="w-8 h-8 shrink-0" />
            <div>
              <h2 className="font-primary font-black text-xl uppercase">OFERTAS FLASH EN VIVO</h2>
              <p className="font-secondary text-xs text-rose-100">Descuentos por tiempo limitado hasta agotar stock.</p>
            </div>
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-xl font-mono text-sm font-bold">
            TIEMPO RESTANTE: 00:14:23:47
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: 'Monitor Curved 24" 144Hz', price: '$129.990', old: '$189.990', disc: '-31%' },
            { name: 'Teclado Mecánico RGB', price: '$29.990', old: '$49.990', disc: '-40%' },
            { name: 'Silla Gamer Ergonómica', price: '$99.990', old: '$159.990', disc: '-37%' },
            { name: 'Mouse Gamer 16.000 DPI', price: '$19.990', old: '$34.990', disc: '-42%' },
            { name: 'Micrófono Condensador USB', price: '$24.990', old: '$39.990', disc: '-37%' },
            { name: 'Barra de Luz Monitor LED', price: '$17.990', old: '$29.990', disc: '-40%' }
          ].map((item, i) => (
            <div key={i} className={`p-5 ${cardStyle} bg-custom-surface relative group`}>
              <span className="absolute top-3 right-3 bg-rose-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full z-10">
                {item.disc}
              </span>
              <div className="aspect-square w-full mb-3"><ImagePlaceholder className="rounded-xl" /></div>
              <h3 className="font-primary font-bold text-xs text-custom-text mb-1">{item.name}</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-primary font-black text-rose-600 text-base">{item.price}</span>
                <span className="font-secondary text-xs text-custom-muted line-through">{item.old}</span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-rose-500 h-full w-[65%]" />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto w-full px-6 py-12">
        <h2 className="font-primary font-black text-2xl uppercase text-custom-text mb-2 text-center">DESTACADOS MAXXGO</h2>
        <p className="font-secondary text-xs text-custom-muted text-center mb-8">Elige el equipo ideal según tus prioridades</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className={`p-8 ${cardStyle} bg-custom-surface border-2 border-amber-400 flex flex-col justify-between relative`}>
            <span className="bg-amber-400 text-slate-900 font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-full absolute -top-3 left-6">
              🌟 MEJOR RENDIMIENTO
            </span>
            <div>
              <h3 className="font-primary font-black text-xl text-custom-text mt-2 mb-2">PC Master Gamer Extreme</h3>
              <p className="font-secondary text-xs text-custom-muted mb-4">RTX 4070 + Ryzen 7 + 32GB RAM</p>
              <div className="aspect-video w-full mb-4"><ImagePlaceholder className="rounded-xl" /></div>
              <ul className="font-secondary text-xs space-y-2 text-custom-text mb-6">
                <li>✓ Máxima tasa de FPS en 4K</li>
                <li>✓ Refracción líquida RGB</li>
                <li>✓ 3 años de garantía oficial</li>
              </ul>
            </div>
            <div>
              <p className="font-primary font-black text-2xl text-custom-primary mb-3">$1.299.990</p>
              <button className="btn-custom-radius bg-custom-primary text-white font-primary font-bold py-3 text-xs uppercase w-full cursor-pointer">Comprar Rendimiento Top</button>
            </div>
          </div>
          <div className={`p-8 ${cardStyle} bg-custom-surface border-2 border-indigo-600 flex flex-col justify-between relative shadow-xl`}>
            <span className="bg-indigo-600 text-white font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-full absolute -top-3 left-6">
              ⚖️ MEJOR EQUILIBRIO (RECOMENDADO)
            </span>
            <div>
              <h3 className="font-primary font-black text-xl text-custom-text mt-2 mb-2">Setup Gamer Pro Balance</h3>
              <p className="font-secondary text-xs text-custom-muted mb-4">RTX 4060 + i5 13th + 16GB RAM</p>
              <div className="aspect-video w-full mb-4"><ImagePlaceholder className="rounded-xl" /></div>
              <ul className="font-secondary text-xs space-y-2 text-custom-text mb-6">
                <li>✓ Rendimiento óptimo en 1080p y 1440p</li>
                <li>✓ Consumo energético eficiente</li>
                <li>✓ Relación precio/calidad #1</li>
              </ul>
            </div>
            <div>
              <p className="font-primary font-black text-2xl text-indigo-600 mb-3">$749.990</p>
              <button className="btn-custom-radius bg-indigo-600 text-white font-primary font-bold py-3 text-xs uppercase w-full cursor-pointer">Comprar Recomendado</button>
            </div>
          </div>
          <div className={`p-8 ${cardStyle} bg-custom-surface border-2 border-emerald-500 flex flex-col justify-between relative`}>
            <span className="bg-emerald-500 text-white font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-full absolute -top-3 left-6">
              🏷️ MEJOR PRECIO
            </span>
            <div>
              <h3 className="font-primary font-black text-xl text-custom-text mt-2 mb-2">Notebook Gamer Entry</h3>
              <p className="font-secondary text-xs text-custom-muted mb-4">GTX 1650 + i5 + 8GB RAM</p>
              <div className="aspect-video w-full mb-4"><ImagePlaceholder className="rounded-xl" /></div>
              <ul className="font-secondary text-xs space-y-2 text-custom-text mb-6">
                <li>✓ Para iniciarse en el gaming</li>
                <li>✓ Portátil y liviano</li>
                <li>✓ Cuotas accesibles</li>
              </ul>
            </div>
            <div>
              <p className="font-primary font-black text-2xl text-emerald-600 mb-3">$499.990</p>
              <button className="btn-custom-radius bg-emerald-600 text-white font-primary font-bold py-3 text-xs uppercase w-full cursor-pointer">Comprar Mejor Precio</button>
            </div>
          </div>
        </div>
      </section>
      {renderFooterDetailed(4)}
    </div>
  );

  // ── 4. HOME V4 SIDEBAR NAV (Amazon style sidebar + 3 columnas + Banners por necesidad + Ranking) ──
  const renderHomeV4Sidebar = () => (
    <div className="flex flex-col min-h-full bg-slate-50">
      <div className="bg-slate-900 text-slate-300 px-6 py-2 flex justify-between items-center text-xs font-secondary">
        <span>Envíos a todo Chile</span>
        <span>Marketplace Oficial MAXXGO</span>
        <span>Atención 24/7</span>
      </div>
      {renderMainHeader(true, true)}
      <section className="max-w-7xl mx-auto w-full px-6 py-6">
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          <div className={`lg:col-span-3 ${cardStyle} bg-white p-4 shadow-sm space-y-1`}>
            <div className="flex items-center gap-2 px-3 py-2 text-xs font-black uppercase text-custom-primary border-b border-slate-100 mb-2">
              <Menu className="w-4 h-4" /> Categorías
            </div>
            {[
              '💻 Computación',
              '🎧 Audio',
              '🏠 Hogar',
              '📱 Móvil y Accesorios',
              '🎮 Gaming',
              '💡 Iluminación',
              '💼 Oficina',
              '⚡ Ofertas Flash',
              '➕ Ver todas'
            ].map((cat, i) => (
              <div key={i} className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-secondary font-bold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer transition-colors">
                <span>{cat}</span>
                <ChevronRight className="w-3.5 h-3.5 opacity-40" />
              </div>
            ))}
          </div>
          <div className="lg:col-span-6 border border-custom-border rounded-[2rem] p-8 md:p-12 bg-white min-h-[380px] flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-xs font-bold text-custom-primary tracking-widest uppercase">MARKETPLACE TECH</span>
              <h1 className="font-primary font-black text-3xl md:text-4xl uppercase tracking-tight text-slate-900 mt-2 mb-3">
                Tecnología que impulsa tu día
              </h1>
              <p className="font-secondary text-xs text-slate-500 max-w-md">
                Navega por categorías o encuentra las ofertas destacadas de la semana.
              </p>
            </div>
            <div className="pt-6">
              <button className="btn-custom-radius bg-slate-900 text-white font-primary font-bold px-8 py-3 text-xs uppercase tracking-wider cursor-pointer">
                Explorar Catálogo →
              </button>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-4">
            <div className={`p-4 ${cardStyle} bg-white border-l-4 border-l-amber-500`}>
              <span className="text-[10px] font-bold text-amber-600 uppercase">⚡ Oferta del Día</span>
              <h4 className="font-primary font-bold text-xs text-slate-800 mt-1">Audífonos BT Noise Cancel</h4>
              <p className="font-primary font-black text-indigo-600 text-sm mt-1">$29.990</p>
            </div>
            <div className={`p-4 ${cardStyle} bg-white border-l-4 border-l-indigo-600`}>
              <span className="text-[10px] font-bold text-indigo-600 uppercase">🆕 Novedad de la Semana</span>
              <h4 className="font-primary font-bold text-xs text-slate-800 mt-1">Teclado 60% RGB Hotswap</h4>
              <p className="font-primary font-black text-indigo-600 text-sm mt-1">$39.990</p>
            </div>
            <div className={`p-4 ${cardStyle} bg-white border-l-4 border-l-emerald-500`}>
              <span className="text-[10px] font-bold text-emerald-600 uppercase">💳 Cuotas Sin Interés</span>
              <h4 className="font-primary font-bold text-xs text-slate-800 mt-1">Hasta 12 cuotas tasa 0%</h4>
              <p className="font-secondary text-[11px] text-slate-500 mt-0.5">Con tarjetas Webpay</p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto w-full px-6 py-4">
        <div className={`p-4 ${cardStyle} bg-white flex items-center justify-between gap-4 overflow-x-auto`}>
          {[
            { name: 'Notebooks', icon: Laptop },
            { name: 'Auriculares', icon: Headphones },
            { name: 'Smartphones', icon: Laptop },
            { name: 'Monitores', icon: Laptop },
            { name: 'Teclados', icon: FileText },
            { name: 'Parlantes', icon: Headphones },
            { name: 'Sillas Gamer', icon: Home },
            { name: 'Impresoras', icon: FileText }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5 shrink-0 px-4 py-2 hover:bg-slate-50 rounded-xl cursor-pointer">
              <item.icon className="w-5 h-5 text-indigo-600" />
              <span className="font-secondary text-[11px] font-bold text-slate-700">{item.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto w-full px-6 py-8">
        <h2 className="font-primary font-bold text-lg uppercase text-slate-900 mb-6 tracking-wider">Banners por Necesidad</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-[2rem] p-8 flex flex-col justify-between min-h-[200px]">
            <div>
              <span className="text-[10px] font-bold text-blue-300 uppercase tracking-widest">HOME OFFICE</span>
              <h3 className="font-primary font-bold text-xl uppercase mt-1">Setup Oficina en Casa</h3>
            </div>
            <button className="btn-custom-radius bg-white text-blue-900 font-bold px-4 py-2 text-xs uppercase w-fit cursor-pointer">Ver Equipos</button>
          </div>
          <div className="bg-slate-950 text-white rounded-[2rem] p-8 flex flex-col justify-between min-h-[200px] border border-purple-500/30">
            <div>
              <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">GAMING CORNER</span>
              <h3 className="font-primary font-bold text-xl uppercase mt-1">Luces RGB & Periféricos</h3>
            </div>
            <button className="btn-custom-radius bg-purple-600 text-white font-bold px-4 py-2 text-xs uppercase w-fit cursor-pointer">Ver Setup</button>
          </div>
          <div className="bg-gradient-to-br from-emerald-800 to-teal-900 text-white rounded-[2rem] p-8 flex flex-col justify-between min-h-[200px]">
            <div>
              <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest">EN MOVIMIENTO</span>
              <h3 className="font-primary font-bold text-xl uppercase mt-1">Móvil, Baterías & Cables</h3>
            </div>
            <button className="btn-custom-radius bg-white text-emerald-900 font-bold px-4 py-2 text-xs uppercase w-fit cursor-pointer">Ver Accesorios</button>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto w-full px-6 py-8">
        <h2 className="font-primary font-bold text-lg uppercase text-slate-900 mb-6 tracking-wider">Ranking Más Vendidos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { rank: '#1 MÁS VENDIDO', name: 'Audífonos Inalámbricos Bluetooth', price: '$24.990', badgeBg: 'bg-amber-400 text-slate-900' },
            { rank: '#2 POPULAR', name: 'Mouse Inalámbrico Silencioso', price: '$14.990', badgeBg: 'bg-slate-300 text-slate-900' },
            { rank: '#3 TENDENCIA', name: 'Soporte de Laptop Aluminio', price: '$19.990', badgeBg: 'bg-amber-700 text-white' }
          ].map((item, i) => (
            <div key={i} className={`p-6 ${cardStyle} bg-white flex gap-4 items-center relative`}>
              <span className={`absolute top-3 right-3 text-[9px] font-black uppercase px-2 py-0.5 rounded-full ${item.badgeBg}`}>
                {item.rank}
              </span>
              <div className="w-20 h-20 shrink-0"><ImagePlaceholder className="rounded-xl" /></div>
              <div>
                <h4 className="font-primary font-bold text-xs text-slate-800">{item.name}</h4>
                <p className="font-primary font-black text-indigo-600 text-sm mt-1">{item.price}</p>
                {renderStars(5, 40 - i * 10)}
              </div>
            </div>
          ))}
        </div>
      </section>
      {renderFooterDetailed(5)}
    </div>
  );

  return (
    <div style={customVariables} className="theme-customizer w-full h-full min-h-screen flex flex-col transition-colors duration-200">
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="stylesheet" href={fontUrl} />
      
      {wireframeId === 'home-v1-actual' && renderHomeV1Actual()}
      {wireframeId === 'home-v2-compacto' && renderHomeV2Compacto()}
      {wireframeId === 'home-v3-flash' && renderHomeV3Flash()}
      {wireframeId === 'home-v4-sidebar' && renderHomeV4Sidebar()}
      {wireframeId === 'home-completo' && renderHomeV1Actual()}
      {wireframeId === 'home-simple' && renderHomeV2Compacto()}
      {wireframeId === 'home-alternativo' && renderHomeV3Flash()}
      {wireframeId === 'categoria' && renderCategoria()}
      {wireframeId === 'producto' && renderProducto()}
      {wireframeId === 'carrito' && renderCarrito()}
      {!['home-v1-actual', 'home-v2-compacto', 'home-v3-flash', 'home-v4-sidebar', 'home-simple', 'home-alternativo', 'home-completo', 'categoria', 'producto', 'carrito'].includes(wireframeId) && renderHomeV1Actual()}
    </div>
  );
}
