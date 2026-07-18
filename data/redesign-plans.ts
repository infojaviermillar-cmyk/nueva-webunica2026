export type RedesignFeature = {
  name: string;
  refresh: boolean | string;
  transform: boolean | string;
  elite: boolean | string;
};

export type RedesignPlan = {
  id: string;
  name: string;
  price: string;
  bonus: string;
  desc: string;
  shortDesc: string;
  iconName: 'Sparkles' | 'Layers' | 'Crown';
  recommended: boolean;
  color: string;
  deliveryTime: string;
};

export const redesignPlans: RedesignPlan[] = [
  {
    id: 'refresh',
    name: 'REFRESH',
    price: '$290.000',
    bonus: 'Revisión Core Web Vitals',
    desc: 'Para tiendas con buen catálogo pero diseño desactualizado.',
    shortDesc: 'Nuevo look, misma tienda.',
    iconName: 'Sparkles',
    recommended: false,
    color: 'blue',
    deliveryTime: '5-7 días hábiles',
  },
  {
    id: 'transform',
    name: 'TRANSFORM',
    price: '$590.000',
    bonus: 'Setup GA4 + Meta Pixel incluido',
    desc: 'Rediseño completo de la estructura visual y UX de tu tienda.',
    shortDesc: 'Diseño nuevo, conversión mejor.',
    iconName: 'Layers',
    recommended: true,
    color: 'violet',
    deliveryTime: '10-14 días hábiles',
  },
  {
    id: 'elite',
    name: 'ELITE',
    price: '$990.000',
    bonus: 'Sesión estratégica de conversión',
    desc: 'Rediseño integral con desarrollo Liquid a medida y estrategia CRO.',
    shortDesc: 'Tu tienda, reinventada para vender.',
    iconName: 'Crown',
    recommended: false,
    color: 'amber',
    deliveryTime: '3-4 semanas',
  },
];

export const redesignFeatures: RedesignFeature[] = [
  {
    name: 'Auditoría visual de la tienda actual',
    refresh: 'Básica',
    transform: 'Completa',
    elite: 'Completa + Informe UX',
  },
  {
    name: 'Tema premium instalado y configurado',
    refresh: true,
    transform: true,
    elite: true,
  },
  {
    name: 'Adaptación de marca (colores, tipografía, logo)',
    refresh: true,
    transform: true,
    elite: true,
  },
  {
    name: 'Rediseño de secciones del home',
    refresh: 'Secciones principales',
    transform: 'Completo',
    elite: 'Completo + desarrollo Liquid',
  },
  {
    name: 'Rediseño de fichas de producto',
    refresh: false,
    transform: true,
    elite: true,
  },
  {
    name: 'Rediseño de colecciones y filtros',
    refresh: false,
    transform: true,
    elite: true,
  },
  {
    name: 'Optimización de imágenes y assets',
    refresh: true,
    transform: true,
    elite: true,
  },
  {
    name: 'Megamenú y navegación mejorada',
    refresh: false,
    transform: true,
    elite: true,
  },
  {
    name: 'Optimización SEO on-page post-rediseño',
    refresh: false,
    transform: true,
    elite: true,
  },
  {
    name: 'Estrategia CRO (jerarquía visual y CTAs)',
    refresh: false,
    transform: false,
    elite: true,
  },
  {
    name: 'Secciones personalizadas en Liquid',
    refresh: false,
    transform: false,
    elite: true,
  },
  {
    name: 'Integración GA4 + Meta Pixel',
    refresh: false,
    transform: true,
    elite: true,
  },
  {
    name: 'Revisión Core Web Vitals',
    refresh: true,
    transform: true,
    elite: true,
  },
  {
    name: 'Capacitación post-rediseño',
    refresh: false,
    transform: '1 videollamada',
    elite: '2 videollamadas',
  },
  {
    name: 'Soporte post-entrega',
    refresh: '7 días',
    transform: '30 días',
    elite: '60 días preferente',
  },
];
