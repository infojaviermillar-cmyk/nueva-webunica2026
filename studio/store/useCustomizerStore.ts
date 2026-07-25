import { create } from 'zustand';

export type ColorPalette = {
  id: string;
  name: string;
  styleId: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textMuted: string;
  border: string;
};

export type DesignStyle = {
  id: string;
  name: string;
  description: string;
  buttonRadius: string;
  shadow: string;
  cardStyle: string;
  fontPrimary: string;
  fontSecondary: string;
  palettes: ColorPalette[];
};

export type CustomizerState = {
  selectedWireframe: string; // 'home-v1-actual' | 'home-v2-compacto' | 'home-v3-flash' | 'home-v4-sidebar' | 'categoria' | 'producto' | 'carrito'
  selectedStyleId: string;
  selectedPaletteId: string;
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
  heroBgImage: string | null;
  heroProductImage: string | null;
  productImages: (string | null)[];
  
  // Actions
  setWireframe: (id: string) => void;
  setStyle: (styleId: string) => void;
  setPalette: (paletteId: string) => void;
  setColor: (key: keyof CustomizerState['colors'], val: string) => void;
  setFont: (key: 'primary' | 'secondary', fontName: string) => void;
  setButtonRadius: (radius: string) => void;
  setHeroBgImage: (url: string | null) => void;
  setHeroProductImage: (url: string | null) => void;
  setProductImage: (index: number, url: string | null) => void;
  loadConfig: (config: any) => void;
};

// Catálogo de Estilos y sus Paletas de Colores
export const DESIGN_STYLES: DesignStyle[] = [
  {
    id: 'minimalista',
    name: 'Minimalista',
    description: 'Espacios limpios, contrastes sutiles y enfoque tipográfico puro.',
    buttonRadius: '0px',
    shadow: 'shadow-none',
    cardStyle: 'border border-slate-100',
    fontPrimary: 'Space Grotesk',
    fontSecondary: 'Inter',
    palettes: [
      { id: 'min-classic', name: 'Monocromo Puro', styleId: 'minimalista', primary: '#000000', secondary: '#111111', accent: '#666666', background: '#ffffff', surface: '#fafafa', text: '#000000', textMuted: '#666666', border: '#e5e7eb' },
      { id: 'min-sand', name: 'Arena Suave', styleId: 'minimalista', primary: '#2d2d2a', secondary: '#474744', accent: '#a49982', background: '#faf6f0', surface: '#f4ece1', text: '#1c1c1a', textMuted: '#7c766b', border: '#e4dacf' },
      { id: 'min-charcoal', name: 'Grafito Fino', styleId: 'minimalista', primary: '#18181b', secondary: '#27272a', accent: '#71717a', background: '#f4f4f5', surface: '#ffffff', text: '#09090b', textMuted: '#71717a', border: '#e4e4e7' }
    ]
  },
  {
    id: 'moderno',
    name: 'Moderno',
    description: 'Estética contemporánea con bordes redondeados y colores vivos.',
    buttonRadius: '12px',
    shadow: 'shadow-md shadow-slate-200/50',
    cardStyle: 'bg-white rounded-2xl shadow-sm border border-slate-100',
    fontPrimary: 'Poppins',
    fontSecondary: 'Inter',
    palettes: [
      { id: 'mod-tech', name: 'Azul Neo Tech', styleId: 'moderno', primary: '#3b82f6', secondary: '#1e3a8a', accent: '#06b6d4', background: '#f8fafc', surface: '#ffffff', text: '#0f172a', textMuted: '#64748b', border: '#e2e8f0' },
      { id: 'mod-emerald', name: 'Esmeralda Vital', styleId: 'moderno', primary: '#10b981', secondary: '#064e3b', accent: '#f59e0b', background: '#f0fdf4', surface: '#ffffff', text: '#14532d', textMuted: '#4f7a55', border: '#dcfce7' },
      { id: 'mod-coral', name: 'Atardecer Coral', styleId: 'moderno', primary: '#f97316', secondary: '#7c2d12', accent: '#8b5cf6', background: '#fff7ed', surface: '#ffffff', text: '#431407', textMuted: '#9a3412', border: '#ffedd5' }
    ]
  },
  {
    id: 'luxury',
    name: 'Premium / Luxury',
    description: 'Materiales nobles, dorados mate y fondos oscuros o cremas sofisticados.',
    buttonRadius: '6px',
    shadow: 'shadow-lg shadow-black/5',
    cardStyle: 'bg-white/80 backdrop-blur border border-amber-100/50',
    fontPrimary: 'Playfair Display',
    fontSecondary: 'Montserrat',
    palettes: [
      { id: 'lux-gold', name: 'Oro & Onyx', styleId: 'luxury', primary: '#d4af37', secondary: '#111111', accent: '#c5a059', background: '#0a0a0a', surface: '#161616', text: '#ffffff', textMuted: '#a1a1aa', border: '#27272a' },
      { id: 'lux-champagne', name: 'Champaña Cream', styleId: 'luxury', primary: '#8c6239', secondary: '#231f20', accent: '#bca17f', background: '#fcfaf7', surface: '#f4ede4', text: '#231f20', textMuted: '#7c6d5c', border: '#e7dcd0' },
      { id: 'lux-ruby', name: 'Borgoña Real', styleId: 'luxury', primary: '#5c0612', secondary: '#1a0205', accent: '#d4af37', background: '#faf9f6', surface: '#ffffff', text: '#1a0205', textMuted: '#705c5e', border: '#ebd8d9' }
    ]
  },
  {
    id: 'corporativo',
    name: 'Corporativo',
    description: 'Seguridad, institucionalidad y legibilidad óptima.',
    buttonRadius: '8px',
    shadow: 'shadow-sm',
    cardStyle: 'bg-white rounded-lg border border-slate-200',
    fontPrimary: 'Montserrat',
    fontSecondary: 'Open Sans',
    palettes: [
      { id: 'corp-blue', name: 'Azul Ejecutivo', styleId: 'corporativo', primary: '#1e3a8a', secondary: '#0f172a', accent: '#f59e0b', background: '#ffffff', surface: '#f8fafc', text: '#0f172a', textMuted: '#475569', border: '#cbd5e1' },
      { id: 'corp-teal', name: 'Verde Institucional', styleId: 'corporativo', primary: '#0f766e', secondary: '#115e59', accent: '#06b6d4', background: '#ffffff', surface: '#f0fdfa', text: '#115e59', textMuted: '#52525b', border: '#ccfbf1' },
      { id: 'corp-gray', name: 'Gris Ejecutivo', styleId: 'corporativo', primary: '#3f3f46', secondary: '#18181b', accent: '#e11d48', background: '#fafafa', surface: '#ffffff', text: '#18181b', textMuted: '#52525b', border: '#e4e4e7' }
    ]
  },
  {
    id: 'editorial',
    name: 'Editorial',
    description: 'Estilo inspirado en revistas físicas, con contrastes tipográficos y líneas gruesas.',
    buttonRadius: '4px',
    shadow: 'shadow-none',
    cardStyle: 'bg-white border-b-2 border-slate-900',
    fontPrimary: 'Cormorant Garamond',
    fontSecondary: 'Lato',
    palettes: [
      { id: 'edit-news', name: 'Periódico Clásico', styleId: 'editorial', primary: '#111111', secondary: '#000000', accent: '#7f1d1d', background: '#fbfbf8', surface: '#f4f4f0', text: '#111111', textMuted: '#555555', border: '#d1d1ca' },
      { id: 'edit-forest', name: 'Bosque Editorial', styleId: 'editorial', primary: '#1b4332', secondary: '#081c15', accent: '#d4af37', background: '#fafaf9', surface: '#f2f2ef', text: '#081c15', textMuted: '#596a60', border: '#d8d8d3' },
      { id: 'edit-wine', name: 'Vino & Letras', styleId: 'editorial', primary: '#4c0519', secondary: '#1c0007', accent: '#9a3412', background: '#fdfbfa', surface: '#f7f1ec', text: '#1c0007', textMuted: '#6e5e5f', border: '#e8dbd0' }
    ]
  },
  {
    id: 'brutalista',
    name: 'Brutalista',
    description: 'Bordes negros gruesos, colores saturados de alto contraste y sombras planas sin blur.',
    buttonRadius: '0px',
    shadow: 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    cardStyle: 'bg-white border-4 border-black',
    fontPrimary: 'Space Grotesk',
    fontSecondary: 'Space Grotesk',
    palettes: [
      { id: 'brut-neo', name: 'Neón Brutal', styleId: 'brutalista', primary: '#a3e635', secondary: '#000000', accent: '#f43f5e', background: '#ffffff', surface: '#facc15', text: '#000000', textMuted: '#000000', border: '#000000' },
      { id: 'brut-cmyk', name: 'CMYK Core', styleId: 'brutalista', primary: '#06b6d4', secondary: '#000000', accent: '#ec4899', background: '#ffffff', surface: '#e11d48', text: '#000000', textMuted: '#000000', border: '#000000' },
      { id: 'brut-toxic', name: 'Verde Ácido', styleId: 'brutalista', primary: '#22c55e', secondary: '#000000', accent: '#a855f7', background: '#000000', surface: '#1e1b4b', text: '#ffffff', textMuted: '#a7f3d0', border: '#22c55e' }
    ]
  },
  {
    id: 'futurista',
    name: 'Tech / Futurista',
    description: 'Estilo ciberpunk con colores de neón brillantes y detalles de alta tecnología.',
    buttonRadius: '16px',
    shadow: 'shadow-lg shadow-cyan-500/10',
    cardStyle: 'bg-slate-900/50 backdrop-blur border border-slate-800',
    fontPrimary: 'Archivo',
    fontSecondary: 'Space Grotesk',
    palettes: [
      { id: 'fut-cyber', name: 'Cyber Neon', styleId: 'futurista', primary: '#d946ef', secondary: '#0f172a', accent: '#06b6d4', background: '#020617', surface: '#0f172a', text: '#f8fafc', textMuted: '#94a3b8', border: '#1e293b' },
      { id: 'fut-matrix', name: 'Matrix Green', styleId: 'futurista', primary: '#22c55e', secondary: '#052e16', accent: '#f59e0b', background: '#020617', surface: '#052e16', text: '#4ade80', textMuted: '#22c55e', border: '#166534' },
      { id: 'fut-quantum', name: 'Quantum Purple', styleId: 'futurista', primary: '#8b5cf6', secondary: '#2e1065', accent: '#f43f5e', background: '#090514', surface: '#120b24', text: '#faf5ff', textMuted: '#c084fc', border: '#3b0764' }
    ]
  },
  {
    id: 'ecommerce',
    name: 'Conversión Ecommerce',
    description: 'Optimizado para la venta con botones de llamada a la acción muy llamativos.',
    buttonRadius: '9999px',
    shadow: 'shadow-lg shadow-slate-200/50',
    cardStyle: 'bg-white rounded-3xl border border-slate-100 shadow-sm',
    fontPrimary: 'Inter',
    fontSecondary: 'Inter',
    palettes: [
      { id: 'ecom-amazon', name: 'Naranja Conversión', styleId: 'ecommerce', primary: '#ff9900', secondary: '#146eb4', accent: '#232f3e', background: '#f7f9fa', surface: '#ffffff', text: '#0f1111', textMuted: '#565959', border: '#e7e9ec' },
      { id: 'ecom-shopify', name: 'Verde Shopify', styleId: 'ecommerce', primary: '#95bf47', secondary: '#2c6ecb', accent: '#1c2237', background: '#fafafa', surface: '#ffffff', text: '#1c2237', textMuted: '#687c94', border: '#e2e8f0' },
      { id: 'ecom-stripe', name: 'Stripe Indigo', styleId: 'ecommerce', primary: '#635bff', secondary: '#0a2540', accent: '#00d4b2', background: '#f8f9fa', surface: '#ffffff', text: '#0a2540', textMuted: '#697386', border: '#e3e8ee' }
    ]
  }
];

export const useCustomizerStore = create<CustomizerState>((set, get) => ({
  selectedWireframe: 'home-v1-actual',
  selectedStyleId: 'ecommerce',
  selectedPaletteId: 'ecom-stripe',
  colors: {
    primary: '#635bff',
    secondary: '#0a2540',
    accent: '#00d4b2',
    background: '#f8f9fa',
    surface: '#ffffff',
    text: '#0a2540',
    textMuted: '#697386',
    border: '#e3e8ee'
  },
  fonts: {
    primary: 'Inter',
    secondary: 'Inter'
  },
  buttonRadius: '9999px',
  shadow: 'shadow-lg shadow-slate-200/50',
  heroBgImage: null,
  heroProductImage: null,
  productImages: [null, null, null, null, null],

  setWireframe: (id) => set({ selectedWireframe: id }),

  setStyle: (styleId) => {
    const style = DESIGN_STYLES.find(s => s.id === styleId);
    if (!style) return;

    // Cargar la primera paleta por defecto para este estilo
    const palette = style.palettes[0];
    
    set({
      selectedStyleId: styleId,
      selectedPaletteId: palette.id,
      colors: {
        primary: palette.primary,
        secondary: palette.secondary,
        accent: palette.accent,
        background: palette.background,
        surface: palette.surface,
        text: palette.text,
        textMuted: palette.textMuted,
        border: palette.border
      },
      fonts: {
        primary: style.fontPrimary,
        secondary: style.fontSecondary
      },
      buttonRadius: style.buttonRadius,
      shadow: style.shadow
    });
  },

  setPalette: (paletteId) => {
    const style = DESIGN_STYLES.find(s => s.id === get().selectedStyleId);
    if (!style) return;
    const palette = style.palettes.find(p => p.id === paletteId);
    if (!palette) return;

    set({
      selectedPaletteId: paletteId,
      colors: {
        primary: palette.primary,
        secondary: palette.secondary,
        accent: palette.accent,
        background: palette.background,
        surface: palette.surface,
        text: palette.text,
        textMuted: palette.textMuted,
        border: palette.border
      }
    });
  },

  setColor: (key, val) => set((state) => ({
    colors: {
      ...state.colors,
      [key]: val
    }
  })),

  setFont: (key, fontName) => set((state) => ({
    fonts: {
      ...state.fonts,
      [key]: fontName
    }
  })),

  setButtonRadius: (radius) => set({ buttonRadius: radius }),

  setHeroBgImage: (url) => set({ heroBgImage: url }),

  setHeroProductImage: (url) => set({ heroProductImage: url }),

  setProductImage: (index, url) => set((state) => {
    const updated = [...state.productImages];
    updated[index] = url;
    return { productImages: updated };
  }),

  loadConfig: (config) => {
    if (!config) return;
    set({
      selectedWireframe: config.selectedWireframe || 'home-v1-actual',
      selectedStyleId: config.selectedStyle || 'ecommerce',
      selectedPaletteId: config.selectedPalette || 'ecom-stripe',
      colors: config.colors ? { ...config.colors } : get().colors,
      fonts: config.fonts ? { ...config.fonts } : get().fonts,
      buttonRadius: config.buttonRadius || get().buttonRadius,
      shadow: config.shadow || get().shadow,
      heroBgImage: config.heroBgImage ?? null,
      heroProductImage: config.heroProductImage ?? null,
      productImages: Array.isArray(config.productImages) ? config.productImages : [null, null, null, null, null],
    });
  }
}));
