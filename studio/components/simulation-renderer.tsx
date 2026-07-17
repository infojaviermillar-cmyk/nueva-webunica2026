import React from 'react';
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
  Heart
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
};

export function SimulationRenderer({
  wireframeId,
  colors,
  fonts,
  buttonRadius,
  shadow,
  cardStyle
}: SimulationRendererProps) {
  
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

  // Renderizador de Header Común
  const renderHeader = () => (
    <header className="border-b border-custom-border bg-custom-surface px-6 py-4 flex items-center justify-between sticky top-0 z-10 transition-all">
      <div className="flex items-center gap-3">
        <span className="font-primary font-black text-xl tracking-tight text-custom-primary uppercase">MAXXGO</span>
      </div>
      
      <div className="hidden md:flex items-center gap-6 font-secondary text-sm font-medium text-custom-text">
        <span className="cursor-pointer hover:text-custom-primary">Inicio</span>
        <span className="cursor-pointer hover:text-custom-primary">Tienda</span>
        <span className="cursor-pointer hover:text-custom-primary">Ofertas</span>
        <span className="cursor-pointer hover:text-custom-primary">Contacto</span>
      </div>

      <div className="flex items-center gap-4 text-custom-text">
        <Search className="w-5 h-5 cursor-pointer hover:text-custom-primary" />
        <User className="w-5 h-5 cursor-pointer hover:text-custom-primary" />
        <div className="relative cursor-pointer hover:text-custom-primary">
          <ShoppingCart className="w-5 h-5" />
          <span className="absolute -top-2 -right-2 bg-custom-primary text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            2
          </span>
        </div>
      </div>
    </header>
  );

  // Renderizador de Footer Común
  const renderFooter = () => (
    <footer className="border-t border-custom-border bg-custom-surface px-6 py-12 text-custom-text transition-all mt-auto">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-primary font-bold text-lg mb-4 text-custom-primary uppercase">MAXXGO</h4>
          <p className="font-secondary text-xs text-custom-muted leading-relaxed">
            Tecnología premium e innovación constante para tu setup de trabajo y gaming.
          </p>
        </div>
        <div>
          <h4 className="font-primary font-bold text-sm mb-4 uppercase">Explorar</h4>
          <ul className="font-secondary text-xs text-custom-muted space-y-2">
            <li className="hover:text-custom-primary cursor-pointer">Colección de Audio</li>
            <li className="hover:text-custom-primary cursor-pointer">Sillas Gaming</li>
            <li className="hover:text-custom-primary cursor-pointer">Monitores Pro</li>
          </ul>
        </div>
        <div>
          <h4 className="font-primary font-bold text-sm mb-4 uppercase">Contacto</h4>
          <p className="font-secondary text-xs text-custom-muted leading-relaxed">
            Soporte 24/7 en soporte@maxxgo.cl<br/>
            Santiago, Chile.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-custom-border mt-8 pt-6 text-center font-secondary text-[10px] text-custom-muted">
        © 2026 Maxxgo. Todos los derechos reservados. Diseñado para Pacific Color.
      </div>
    </footer>
  );

  // 1. HOME SIMPLE (Diseño Directo, Limpio, Pocas Secciones)
  const renderHomeSimple = () => (
    <div className="flex flex-col min-h-full">
      {renderHeader()}
      
      {/* Hero */}
      <section className="px-6 py-16 text-center max-w-4xl mx-auto">
        <h1 className="font-primary font-black text-4xl md:text-5xl uppercase tracking-tight text-custom-text mb-6">
          Tu Setup, <span className="text-custom-primary">Tu Rendimiento</span>
        </h1>
        <p className="font-secondary text-base text-custom-muted max-w-2xl mx-auto mb-8 font-light">
          Gadgets esenciales y accesorios de alta durabilidad optimizados para programadores y diseñadores exigentes.
        </p>
        <button className="btn-custom-radius bg-custom-primary text-white font-primary font-bold px-8 py-4 text-sm uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer">
          Comprar Gadgets
        </button>
      </section>

      {/* Grid de 3 Categorías */}
      <section className="px-6 py-12 max-w-6xl mx-auto w-full">
        <h2 className="font-primary font-bold text-xl mb-8 uppercase text-custom-text">Categorías Destacadas</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {['Audio Premium', 'Cargadores', 'Setup Escritorio'].map((cat, i) => (
            <div key={i} className={`p-8 ${cardStyle} bg-custom-surface transition-all flex flex-col justify-between h-48`}>
              <span className="font-primary font-bold text-lg text-custom-text">{cat}</span>
              <span className="text-xs text-custom-primary font-bold inline-flex items-center gap-1 cursor-pointer">
                Ver más <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Lista de 4 Productos */}
      <section className="px-6 py-12 max-w-6xl mx-auto w-full mb-16">
        <h2 className="font-primary font-bold text-xl mb-8 uppercase text-custom-text">Más Vendidos</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Audífonos Pro ANC', price: '$79.990' },
            { name: 'Cargador MagSafe 20W', price: '$19.990' },
            { name: 'Smartwatch S3 Active', price: '$129.990' },
            { name: 'Parlante Bluetooth Mini', price: '$49.990' }
          ].map((prod, i) => (
            <div key={i} className={`p-5 ${cardStyle} bg-custom-surface flex flex-col justify-between`}>
              <div>
                <div className="aspect-square bg-slate-200/50 rounded-xl mb-4 flex items-center justify-center text-xs text-slate-400">
                  📷 Imagen
                </div>
                <h3 className="font-primary font-bold text-sm text-custom-text mb-1">{prod.name}</h3>
                <p className="font-primary font-bold text-custom-primary text-base">{prod.price}</p>
              </div>
              <button className="btn-custom-radius bg-custom-secondary text-custom-text font-primary font-bold text-xs uppercase py-2.5 mt-4 hover:opacity-80 transition-opacity w-full cursor-pointer">
                Ver detalle
              </button>
            </div>
          ))}
        </div>
      </section>

      {renderFooter()}
    </div>
  );

  // 2. HOME ALTERNATIVO (Branding Alto, Gran Impacto Visual, Densidad Baja)
  const renderHomeAlternativo = () => (
    <div className="flex flex-col min-h-full">
      {renderHeader()}

      {/* Banner Héroe Gigante de Imagen */}
      <section className="relative bg-custom-secondary py-32 px-6 flex flex-col items-start justify-center overflow-hidden min-h-[500px]">
        <div className="absolute top-0 right-0 w-[400px] h-full bg-custom-accent/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-2xl relative z-10 text-left">
          <span className="font-secondary text-xs uppercase tracking-widest text-custom-accent font-bold mb-4 block">PACIFIC COLOR EDITION</span>
          <h1 className="font-primary font-black text-5xl md:text-6xl uppercase tracking-tighter text-custom-text mb-6 leading-none">
            TECNOLOGÍA QUE <br/>
            <span className="text-custom-primary">CONECTA TU MUNDO</span>
          </h1>
          <p className="font-secondary text-sm text-custom-muted mb-8 max-w-md font-light leading-relaxed">
            Unificando acabados industriales elegantes y el más alto estándar de conectividad inalámbrica para tu oficina moderna.
          </p>
          <button className="btn-custom-radius bg-custom-primary text-white font-primary font-bold px-8 py-4 text-xs uppercase tracking-widest hover:opacity-90 transition-opacity cursor-pointer">
            Explorar Colección
          </button>
        </div>
      </section>

      {/* Showcase Comercial Detallado */}
      <section className="px-6 py-20 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="font-primary text-xs font-bold text-custom-primary uppercase tracking-wider block mb-2">Características Clave</span>
          <h2 className="font-primary font-bold text-3xl text-custom-text mb-6 uppercase">Diseño de Aluminio Aeroespacial</h2>
          <p className="font-secondary text-sm text-custom-muted mb-6 leading-relaxed">
            Construido con materiales reciclados de alta resistencia, nuestros cargadores y adaptadores resisten golpes accidentales manteniendo una conductividad eléctrica estable.
          </p>
          <ul className="space-y-3 font-secondary text-xs text-custom-text font-medium">
            <li className="flex items-center gap-2">✓ Eficiencia energética de clase A</li>
            <li className="flex items-center gap-2">✓ Carga magnética ultra firme</li>
            <li className="flex items-center gap-2">✓ Garantía extendida de 2 años</li>
          </ul>
        </div>
        <div className="aspect-[4/3] bg-custom-surface border border-custom-border rounded-[2rem] flex items-center justify-center text-slate-400">
           📷 Detalle Técnico
        </div>
      </section>

      {/* Carrusel de Productos */}
      <section className="px-6 py-12 max-w-6xl mx-auto w-full mb-20">
        <h2 className="font-primary font-bold text-xl mb-8 uppercase text-custom-text">Lanzamientos Recientes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Auriculares Inalámbricos Over-Ear', price: '$189.990' },
            { name: 'MagSafe Duo Charger Stand', price: '$49.990' },
            { name: 'Teclado Mecánico de Aluminio', price: '$119.990' }
          ].map((prod, i) => (
            <div key={i} className={`p-6 ${cardStyle} bg-custom-surface hover:scale-[1.02] transition-transform`}>
              <div className="aspect-square bg-slate-200/50 rounded-2xl mb-5 flex items-center justify-center text-slate-400">
                📷 Producto
              </div>
              <h3 className="font-primary font-bold text-base text-custom-text mb-2">{prod.name}</h3>
              <p className="font-primary font-bold text-custom-primary text-lg">{prod.price}</p>
            </div>
          ))}
        </div>
      </section>

      {renderFooter()}
    </div>
  );

  // 3. HOME COMPLETO (Estrategia Comercial Completa, Alta Densidad)
  const renderHomeCompleto = () => (
    <div className="flex flex-col min-h-full">
      {/* Top Banner de Despacho */}
      <div className="bg-custom-primary text-white text-center py-2 px-6 font-primary text-[10px] uppercase tracking-widest font-black transition-all">
        🔥 Despacho gratis por compras sobre $50.000 en todo Chile
      </div>
      
      {renderHeader()}

      {/* Hero Banner Slider */}
      <section className="px-6 py-16 max-w-7xl mx-auto w-full">
        <div className="bg-custom-surface border border-custom-border rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="flex-1 text-left relative z-10">
            <h1 className="font-primary font-black text-4xl md:text-5xl uppercase tracking-tighter text-custom-text mb-4">
              EQUIPA TU SETUP <br/>CON LO MEJOR
            </h1>
            <p className="font-secondary text-sm text-custom-muted mb-8 max-w-md font-light leading-relaxed">
              Consigue el máximo rendimiento con nuestros teclados mecánicos, monitores y audífonos premium en oferta.
            </p>
            <button className="btn-custom-radius bg-custom-primary text-white font-primary font-bold px-8 py-4 text-xs uppercase tracking-widest hover:opacity-90 transition-opacity cursor-pointer">
              Ver Catálogo Completo
            </button>
          </div>
          <div className="flex-1 aspect-[4/3] bg-slate-200/50 rounded-[2rem] flex items-center justify-center text-slate-400 z-10">
             📷 Banner Banner Principal
          </div>
        </div>
      </section>

      {/* Brands Banner */}
      <section className="bg-custom-surface border-y border-custom-border py-6 px-6 text-center font-primary font-black text-sm text-custom-muted uppercase tracking-widest flex flex-wrap justify-center gap-12">
        <span>Brand 1</span>
        <span>Brand 2</span>
        <span>Brand 3</span>
        <span>Brand 4</span>
        <span>Brand 5</span>
      </section>

      {/* Grid de 4 Categorías */}
      <section className="px-6 py-16 max-w-6xl mx-auto w-full">
        <h2 className="font-primary font-bold text-xl mb-8 uppercase text-custom-text">Explora Categorías</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Audio', 'Monitores', 'Componentes', 'Accesorios'].map((cat, i) => (
            <div key={i} className={`p-6 ${cardStyle} bg-custom-surface flex flex-col justify-between aspect-video`}>
              <span className="font-primary font-bold text-sm text-custom-text">{cat}</span>
              <span className="text-[10px] text-custom-primary font-bold flex items-center cursor-pointer">
                Explorar <ArrowRight className="w-3 h-3 ml-1" />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Grid de Productos (8 items) */}
      <section className="px-6 py-12 max-w-6xl mx-auto w-full mb-16">
        <h2 className="font-primary font-bold text-xl mb-8 uppercase text-custom-text">Novedades Destacadas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Mouse Ergonómico USB-C', price: '$34.990' },
            { name: 'Teclado Slim de Oficina', price: '$29.990' },
            { name: 'Monitor 24" IPS Full HD', price: '$149.990' },
            { name: 'Silla Ergonómica Pro', price: '$199.990' },
            { name: 'Hub Multiport USB-C', price: '$24.990' },
            { name: 'Foco Inteligente Smart LED', price: '$9.990' },
            { name: 'Cámara Web Full HD 1080p', price: '$39.990' },
            { name: 'Disco Duro Externo 1TB', price: '$54.990' }
          ].map((prod, i) => (
            <div key={i} className={`p-4 ${cardStyle} bg-custom-surface flex flex-col justify-between`}>
              <div>
                <div className="aspect-square bg-slate-200/50 rounded-xl mb-3 flex items-center justify-center text-[10px] text-slate-400">
                  📷 Imagen
                </div>
                <h3 className="font-primary font-bold text-xs text-custom-text mb-1 line-clamp-1">{prod.name}</h3>
                <p className="font-primary font-bold text-custom-primary text-sm">{prod.price}</p>
              </div>
              <button className="btn-custom-radius bg-custom-primary text-white font-primary font-bold text-[10px] uppercase py-2.5 mt-3 hover:opacity-90 transition-opacity w-full cursor-pointer">
                Agregar
              </button>
            </div>
          ))}
        </div>
      </section>

      {renderFooter()}
    </div>
  );

  // 4. CATEGORIA (Catalogo + Barra Lateral de Filtros)
  const renderCategoria = () => (
    <div className="flex flex-col min-h-full">
      {renderHeader()}
      
      <main className="max-w-6xl mx-auto w-full px-6 py-12">
        <h1 className="font-primary font-bold text-3xl text-custom-text uppercase mb-2">Smartphones &amp; Accesorios</h1>
        <p className="font-secondary text-xs text-custom-muted mb-8">Mostrando 1-6 de 24 productos</p>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="space-y-6">
            <div className={`p-6 ${cardStyle} bg-custom-surface space-y-4`}>
              <h3 className="font-primary font-bold text-sm text-custom-text uppercase">Filtros</h3>
              <div className="border-t border-custom-border pt-4">
                <h4 className="font-primary font-bold text-xs text-custom-text uppercase mb-3">Precio</h4>
                <div className="h-1 bg-custom-border rounded-full relative">
                  <div className="absolute left-1/4 right-1/4 h-full bg-custom-primary" />
                  <div className="absolute left-1/4 -top-1.5 w-4 h-4 bg-custom-primary rounded-full" />
                  <div className="absolute right-1/4 -top-1.5 w-4 h-4 bg-custom-primary rounded-full" />
                </div>
              </div>

              <div className="border-t border-custom-border pt-4 space-y-2">
                <h4 className="font-primary font-bold text-xs text-custom-text uppercase mb-2">Marca</h4>
                {['Brand A', 'Brand B', 'Brand C'].map((brand, i) => (
                  <label key={i} className="flex items-center gap-2 font-secondary text-xs text-custom-muted cursor-pointer hover:text-custom-primary">
                    <input type="checkbox" className="rounded text-custom-primary focus:ring-custom-primary" />
                    {brand}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Grid Products */}
          <div className="md:col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Smartphone Max 1', price: '$299.990' },
              { name: 'Smartphone Max 2', price: '$349.990' },
              { name: 'Smartphone Lite', price: '$199.990' },
              { name: 'Audífonos In-Ear Air', price: '$49.990' },
              { name: 'Audífonos Over-Ear', price: '$89.990' },
              { name: 'Cable Cargador Rápido', price: '$9.990' }
            ].map((prod, i) => (
              <div key={i} className={`p-4 ${cardStyle} bg-custom-surface flex flex-col justify-between`}>
                <div>
                  <div className="aspect-square bg-slate-200/50 rounded-xl mb-3 flex items-center justify-center text-xs text-slate-400">
                    📷 Producto
                  </div>
                  <h3 className="font-primary font-bold text-xs text-custom-text mb-1">{prod.name}</h3>
                  <p className="font-primary font-bold text-custom-primary text-sm">{prod.price}</p>
                </div>
                <button className="btn-custom-radius bg-custom-secondary text-custom-text font-primary font-bold text-[10px] uppercase py-2 mt-3 hover:opacity-85 transition-opacity w-full cursor-pointer">
                  Ver opciones
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {renderFooter()}
    </div>
  );

  // 5. PRODUCTO (Ficha de Producto + Controles)
  const renderProducto = () => (
    <div className="flex flex-col min-h-full">
      {renderHeader()}

      <main className="max-w-6xl mx-auto w-full px-6 py-12 grid md:grid-cols-2 gap-12">
        {/* Left Side: Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-custom-surface border border-custom-border rounded-[2rem] flex items-center justify-center text-slate-400">
            📷 Imagen Principal
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-square bg-custom-surface border border-custom-border rounded-xl flex items-center justify-center text-slate-400 text-xs">Thumb 1</div>
            <div className="aspect-square bg-custom-surface border border-custom-border rounded-xl flex items-center justify-center text-slate-400 text-xs">Thumb 2</div>
            <div className="aspect-square bg-custom-surface border border-custom-border rounded-xl flex items-center justify-center text-slate-400 text-xs">Thumb 3</div>
          </div>
        </div>

        {/* Right Side: Configuration */}
        <div className="space-y-6">
          <div>
            <h1 className="font-primary font-bold text-3xl text-custom-text uppercase mb-2">Smartphone Max 1 Pro</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="font-secondary text-xs text-custom-muted">(12 valoraciones)</span>
            </div>
            <p className="font-primary font-bold text-2xl text-custom-primary">$349.990</p>
            <p className="font-secondary text-xs text-custom-muted line-through">$399.990</p>
          </div>

          <hr className="border-custom-border" />

          {/* Color Selector */}
          <div>
            <span className="font-primary text-[10px] font-black uppercase tracking-wider text-custom-text block mb-2">Color</span>
            <div className="flex gap-2">
              <span className="w-8 h-8 rounded-full bg-slate-800 border-2 border-custom-primary cursor-pointer" />
              <span className="w-8 h-8 rounded-full bg-indigo-800 cursor-pointer" />
              <span className="w-8 h-8 rounded-full bg-emerald-800 cursor-pointer" />
            </div>
          </div>

          {/* Storage selector */}
          <div>
            <span className="font-primary text-[10px] font-black uppercase tracking-wider text-custom-text block mb-2">Almacenamiento</span>
            <div className="flex gap-2">
              {['128 GB', '256 GB', '512 GB'].map((size, i) => (
                <button 
                  key={i} 
                  className={`btn-custom-radius border px-4 py-2 text-xs font-bold font-secondary cursor-pointer ${
                    i === 0 
                      ? 'border-custom-primary text-custom-primary bg-custom-surface' 
                      : 'border-custom-border text-custom-muted hover:border-custom-text'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-3 pt-4">
            <button className="btn-custom-radius bg-custom-primary text-white w-full py-4 font-primary font-bold text-xs uppercase tracking-widest hover:opacity-95 transition-opacity shadow-lg shadow-custom-primary/10 cursor-pointer">
              Agregar al Carro
            </button>
            <button className="btn-custom-radius bg-custom-secondary text-custom-text w-full py-4 font-primary font-bold text-xs uppercase tracking-widest hover:opacity-85 transition-opacity cursor-pointer">
              Comprar Ahora
            </button>
          </div>
        </div>
      </main>

      {renderFooter()}
    </div>
  );

  // 6. CARRITO (Resumen + Tabla items)
  const renderCarrito = () => (
    <div className="flex flex-col min-h-full">
      {renderHeader()}

      <main className="max-w-6xl mx-auto w-full px-6 py-12">
        <h1 className="font-primary font-bold text-3xl text-custom-text uppercase mb-8">Carro de Compras</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Table Items */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { name: 'Smartphone Max 1 Pro', details: 'Gris • 128 GB', price: '$349.990' },
              { name: 'Audífonos Pro Noise', details: 'Negro', price: '$79.990' }
            ].map((item, i) => (
              <div key={i} className={`p-6 ${cardStyle} bg-custom-surface flex items-center justify-between`}>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-slate-200/50 rounded-xl flex items-center justify-center text-[10px] text-slate-400">📷 Item</div>
                  <div>
                    <h4 className="font-primary font-bold text-sm text-custom-text">{item.name}</h4>
                    <p className="font-secondary text-xs text-custom-muted mt-0.5">{item.details}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="font-primary font-bold text-sm text-custom-text">{item.price}</span>
                  <button className="text-slate-400 hover:text-rose-500 font-secondary text-sm cursor-pointer">Eliminar</button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Panel */}
          <div className={`p-8 ${cardStyle} bg-custom-surface h-fit space-y-6`}>
            <h3 className="font-primary font-bold text-lg text-custom-text uppercase border-b border-custom-border pb-4">Resumen del Pedido</h3>
            
            <div className="space-y-3 font-secondary text-xs text-custom-muted">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-custom-text">$429.980</span>
              </div>
              <div className="flex justify-between">
                <span>Despacho</span>
                <span className="font-bold text-emerald-600">Gratis</span>
              </div>
            </div>

            <hr className="border-custom-border" />

            <div className="flex justify-between font-primary text-base font-bold text-custom-text">
              <span>Total</span>
              <span>$429.980</span>
            </div>

            <button className="btn-custom-radius bg-custom-primary text-white w-full py-4 font-primary font-bold text-xs uppercase tracking-widest hover:opacity-95 transition-opacity cursor-pointer">
              Proceder al Pago
            </button>
          </div>
        </div>
      </main>

      {renderFooter()}
    </div>
  );

  return (
    <div style={customVariables} className="theme-customizer w-full h-full min-h-screen flex flex-col transition-colors duration-200">
      {/* Carga dinámica de la fuente de Google Fonts */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link rel="stylesheet" href={fontUrl} />
      
      {wireframeId === 'home-simple' && renderHomeSimple()}
      {wireframeId === 'home-alternativo' && renderHomeAlternativo()}
      {wireframeId === 'home-completo' && renderHomeCompleto()}
      {wireframeId === 'categoria' && renderCategoria()}
      {wireframeId === 'producto' && renderProducto()}
      {wireframeId === 'carrito' && renderCarrito()}
    </div>
  );
}
