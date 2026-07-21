/**
 * CATÁLOGO CENTRAL DE PLANES Y SERVICIOS — WEBUNICA CHILE EIRL
 * ─────────────────────────────────────────────────────────────
 * Este archivo es la ÚNICA fuente de verdad para los planes y servicios.
 * Los valores aquí son EXACTAMENTE los mismos que aparecen en el sitio web.
 *
 * Para editar precios o descripción de un plan, cámbialo aquí y se
 * actualizará en toda la plataforma automáticamente.
 */

export interface Plan {
  id: string;
  name: string;
  highlight: string;
  desc: string;
  price: number;            // precio neto en CLP (sin IVA)
  originalPrice?: number;   // precio original tachado (sin IVA)
  recommended?: boolean;
  deliveryDays?: string;
  features: string[];
  category: string;
  url?: string;             // URL pública del plan en el sitio
}

// ════════════════════════════════════════════
// 🛍️ SHOPIFY — Planes de Desarrollo
// Fuente: /planes-de-desarrollo-shopify-en-chile
// ════════════════════════════════════════════
export const SHOPIFY_PLANS: Plan[] = [
  {
    id: 'sh-ajuste',
    name: 'Shopify AJUSTE',
    highlight: 'Optimización de Tiendas',
    desc: 'Para marcas activas que necesitan mejorar su tasa de conversión, velocidad de carga y estética visual.',
    price: 320000,
    originalPrice: 337000,
    deliveryDays: '10 días hábiles',
    category: '🛍️ Shopify',
    url: '/planes-de-desarrollo-shopify-en-chile',
    features: [
      '🎁 Plantilla Premium de regalo',
      'Auditoría Visual y de Experiencia de Usuario (UX/UI)',
      'Optimización de Ficha de Producto móvil',
      'Configuración de pasarelas de pago (Webpay, Flow, MercadoPago)',
      'Mejora avanzada de velocidad de carga (LCP < 2.0s)',
      'Configuración de flujos automatizados de Carrito Abandonado',
      'Integración directa de chat widget por WhatsApp',
      'Auditoría de SEO técnico inicial',
    ],
  },
  {
    id: 'sh-prende',
    name: 'Shopify PRENDE',
    highlight: 'Lanzamiento Profesional',
    desc: 'Perfecto para emprendimientos y negocios que inician con una base sólida, autogestionable y escalable.',
    price: 580000,
    originalPrice: 650000,
    deliveryDays: '4 semanas',
    category: '🛍️ Shopify',
    url: '/planes-de-desarrollo-shopify-en-chile',
    features: [
      'Setup completo de Shopify (Dominio, SSL, Impuestos, checkout)',
      'Diseño basado en Plantilla Premium con personalización visual',
      'Carga o migración inicial de hasta 70 productos',
      'Integración de pasarelas Webpay, Flow o MercadoPago',
      'Configuración de tarifas y reglas de logística básica',
      'Diseño Mobile-First 100% optimizado',
      'SEO Básico en colecciones y fichas de producto',
      'Capacitación grabada en video de administración de la tienda',
      '1 mes de soporte técnico prioritario post-lanzamiento',
    ],
  },
  {
    id: 'sh-full',
    name: 'Shopify FULL',
    highlight: 'Automatización & Ventas',
    desc: 'La solución preferida para marcas comerciales que necesitan automatizar procesos e impulsar ventas de forma orgánica.',
    price: 780000,
    originalPrice: 980000,
    recommended: true,
    deliveryDays: '6 semanas',
    category: '🛍️ Shopify',
    url: '/planes-de-desarrollo-shopify-en-chile',
    features: [
      'Todo lo del Plan PRENDE, más:',
      'Carga de hasta 120 productos con variaciones complejas',
      'Desarrollo de secciones personalizadas con Liquid a medida',
      'Estrategia de SEO Técnico: Redacción de Títulos y Metas SEO',
      'Optimización de conversión (Review de clientes, insignias de confianza, acordeones de FAQ)',
      'Formularios dinámicos para captar correos de clientes (popups)',
      'Integración avanzada con Google Analytics 4 y Meta Pixel',
      'Configuración de flujos de automatización de Email Marketing',
      '3 meses de soporte prioritario y mantención incluidos',
    ],
  },
  {
    id: 'sh-pro',
    name: 'Shopify PRO',
    highlight: 'Escalamiento Total',
    desc: 'Diseño boutique premium para marcas con catálogo extenso, integraciones ERP/CRM y requerimientos de alta velocidad.',
    price: 1200000,
    originalPrice: 1400000,
    deliveryDays: '8 semanas',
    category: '🛍️ Shopify',
    url: '/planes-de-desarrollo-shopify-en-chile',
    features: [
      'Todo lo del Plan FULL, más:',
      'Migración completa de hasta 300 productos',
      'Sincronización bidireccional ERP (Bsale, Obuma, LibreDTE o similar)',
      'Automatización avanzada con Klaviyo CRM (Carrito, Bienvenida, post-compra)',
      'Configuración multimoneda con conversión en tiempo real',
      'Integración API de Conversiones de Meta (CAPI) y Google Merchant',
      'Optimización de performance extrema (LCP < 1.2 segundos)',
      'Diseño UX/UI Premium de Landing Pages de aterrizaje personalizadas',
      'Consultoría estratégica individual de arquitectura de ecommerce',
      '6 meses de soporte técnico y mantención VIP preferencial',
    ],
  },
  {
    id: 'sh-migracion',
    name: 'Shopify MIGRACIÓN',
    highlight: 'Cambio a Shopify',
    desc: 'Migración profesional y segura de tu tienda online actual (WooCommerce, Jumpseller, Wix, Magento) a Shopify sin pérdida de datos ni autoridad SEO.',
    price: 450000,
    originalPrice: 550000,
    deliveryDays: '3 semanas',
    category: '🛍️ Shopify',
    url: '/planes-de-desarrollo-shopify-en-chile',
    features: [
      'Migración de productos (títulos, descripciones, SKU, stock, precios, fotos, variantes)',
      'Migración del historial de clientes y cuentas de usuario',
      'Mapeo y redirecciones 301 para conservar todo tu posicionamiento orgánico en Google',
      'Instalación y adaptación de plantilla sobre tu nuevo Shopify',
      'Configuración de pasarelas de pago y despacho equivalentes',
      'Revisión completa de checkout y pruebas de flujos de transacciones',
    ],
  },
  {
    id: 'sh-onepage',
    name: 'Shopify ONE-PAGE FUNNEL',
    highlight: 'Ideal para Meta Ads',
    desc: 'Tienda de aterrizaje ultra rápida optimizada para la venta directa e impulso de 1 solo producto clave, ideal para campañas publicitarias masivas.',
    price: 390000,
    originalPrice: 480000,
    deliveryDays: '10 días',
    category: '🛍️ Shopify',
    url: '/planes-de-desarrollo-shopify-en-chile',
    features: [
      'Estructura de embudo de venta rápida (Landing Page dentro de Shopify)',
      'Carga instantánea de página (menor a 1 segundo)',
      'Copywriting y diseño enfocado en la conversión instantánea',
      'Integración de reseñas de clientes, pruebas sociales y videos demostrativos',
      'Configuración de ofertas por volumen (bundles) y orden bumps',
      'Checkout de 1 solo click para evitar deserciones',
      'Instalación precisa de Pixel de Meta Ads, TikTok Ads y Google Analytics 4',
    ],
  },
  {
    id: 'sh-b2b',
    name: 'Shopify B2B / MAYORISTA',
    highlight: 'Venta Mayorista',
    desc: 'Infraestructura robusta para la comercialización a distribuidores con listas de precios exclusivas, mínimos de compra e inicio de sesión restringido.',
    price: 950000,
    originalPrice: 1100000,
    deliveryDays: '6 semanas',
    category: '🛍️ Shopify',
    url: '/planes-de-desarrollo-shopify-en-chile',
    features: [
      'Acceso restringido con login para distribuidores o clientes mayoristas autorizados',
      'Listas de precios personalizadas según el grupo de clientes (Wholesale)',
      'Configuración de mínimos de compra (por monto total de pedido o unidades por ítem)',
      'Medios de pago exclusivos configurables (ej: Transferencia, Pago contra factura 30 días)',
      'Formulario de pedido rápido en cuadrícula para compras masivas ágiles',
      'Configuración y exención de impuestos personalizada por perfil comercial',
    ],
  },
  {
    id: 'sh-custom-elite',
    name: 'Shopify CUSTOM ELITE',
    highlight: 'Desarrollo a Medida Full',
    desc: 'La solución más completa con diseño desde cero, migración avanzada e integraciones ERP y georreferenciación.',
    price: 1420002,
    deliveryDays: 'A convenir',
    category: '🛍️ Shopify',
    url: '/planes-de-desarrollo-shopify-en-chile',
    features: [
      'Setup inicial y configuración completa de Shopify (Dominio, SSL, Impuestos, Checkout).',
      'Diseño UX/UI a medida desde cero en Figma (sin uso de plantillas).',
      'Migración o carga inicial de productos, clientes y contenido de la empresa.',
      'Diseño profesional orientado a maximizar la conversión (CRO).',
      'Diseño responsive para dispositivos móviles.',
      'Plataforma autoadministrable.',
      'Configuración de categorías, colecciones y fichas de productos.',
      'Configuración de medios de pago y despacho.',
      'Integración con ERP u otros sistemas, en caso de ser necesario.',
      'Configuración de Google Analytics 4.',
      'Configuración de Google Tag Manager.',
      'Configuración de Meta Pixel y Conversion API.',
      'Configuración de Google Merchant Center.',
      'Medición de eventos y conversiones para campañas publicitarias.',
      'Optimización SEO técnica del sitio.',
      'SEO On-Page de categorías y productos.',
      'Estructura optimizada para posicionamiento orgánico.',
      'Propuesta de servicio SEO mensual para crecimiento sostenido del tráfico orgánico.',
      'Garantía de 3 meses en su funcionamiento y soporte prioritario.',
    ],
  },
];

// ════════════════════════════════════════════
// 🎨 SHOPIFY — Diseño de Themes Personalizados
// Fuente: /diseno-themes-shopify-personalizados-adobe-xd
// ════════════════════════════════════════════
export const SHOPIFY_THEME_PLANS: Plan[] = [
  {
    id: 'theme-diseno-pro',
    name: 'Theme Shopify DISEÑO PRO',
    highlight: 'Diseño UX/UI en Adobe XD',
    desc: 'Ideal para marcas que ya tienen desarrollador pero necesitan un diseño de clase mundial.',
    price: 380000,
    originalPrice: 450000,
    category: '🎨 Shopify Themes',
    url: '/diseno-themes-shopify-personalizados-adobe-xd',
    features: [
      'Diseño de Home Page en Adobe XD',
      'Diseño de Ficha de Producto optimizada',
      'Diseño de Carrito y Checkout (visual)',
      'Prototipo navegable para pruebas',
      'Guía de estilos (Colores y Tipografía)',
      '3 rondas de correcciones',
      'Entrega de archivos fuente editables',
    ],
  },
  {
    id: 'theme-liquid-dev',
    name: 'Theme Shopify LIQUID DEV',
    highlight: 'Programación Liquid a Medida',
    desc: 'Transformamos tu diseño (XD/Figma) en un theme real y ultra rápido.',
    price: 650000,
    originalPrice: 780000,
    recommended: true,
    deliveryDays: '4 semanas',
    category: '🎨 Shopify Themes',
    url: '/diseno-themes-shopify-personalizados-adobe-xd',
    features: [
      'Programación Liquid desde cero',
      'Adaptación de diseño Pixel-Perfect',
      'Configuración de secciones dinámicas',
      'Optimización de velocidad (LCP < 1.5s)',
      'Instalación de apps críticas',
      'Soporte técnico por 3 meses',
    ],
  },
  {
    id: 'theme-full-boutique',
    name: 'Theme Shopify FULL BOUTIQUE',
    highlight: 'Diseño + Desarrollo + SEO',
    desc: 'La solución definitiva. Nos encargamos de todo, desde la idea hasta el lanzamiento.',
    price: 950000,
    originalPrice: 1200000,
    category: '🎨 Shopify Themes',
    url: '/diseno-themes-shopify-personalizados-adobe-xd',
    features: [
      'Todo lo del Plan Liquid Dev, más:',
      'Diseño completo en Adobe XD',
      'Optimización SEO On-Page completa',
      'Configuración de Google Analytics 4',
      'Marketing automatizado (Klaviyo)',
      'Carga de hasta 50 productos',
      'Capacitación personalizada',
    ],
  },
];

// ════════════════════════════════════════════
// 🛒 WOOCOMMERCE — Tiendas Online
// Fuente: /desarrollo-tienda-en-linea-woocommerce
// ════════════════════════════════════════════
export const WOOCOMMERCE_PLANS: Plan[] = [
  {
    id: 'woo-inicio',
    name: 'WooCommerce INICIO',
    highlight: 'Ideal para catálogos pequeños',
    desc: 'Tienda WooCommerce completa para emprendedores que inician sus ventas online.',
    price: 480000,
    deliveryDays: '3 semanas',
    category: '🛒 WooCommerce',
    url: '/desarrollo-tienda-en-linea-woocommerce',
    features: [
      'Configuración completa de WordPress + WooCommerce',
      'Conexión de dominio + SSL',
      'Plantilla optimizada para conversión',
      'Carga de hasta 50 productos',
      'Integración con Mercado Pago o Flow',
      'Cierre de ventas por WhatsApp',
      'Diseño 100% responsivo',
      'Capacitación básica de gestión',
      'Soporte técnico 2 meses',
    ],
  },
  {
    id: 'woo-empresa',
    name: 'WooCommerce EMPRESA',
    highlight: 'Potencia el crecimiento de tu marca',
    desc: 'Tienda WooCommerce completa con diseño personalizado e integraciones avanzadas.',
    price: 680000,
    recommended: true,
    deliveryDays: '5 semanas',
    category: '🛒 WooCommerce',
    url: '/desarrollo-tienda-en-linea-woocommerce',
    features: [
      'Todo lo del Plan Inicio, más:',
      'Carga de hasta 150 productos',
      'Diseño personalizado por secciones',
      'Integración multicourier (Shipit/Chilexpress)',
      'Cupones de descuento y gestión de stock',
      'Optimización de velocidad (WPRocket)',
      'SEO On-Page básico',
      'Integración Pixel FB y G-Analytics',
      'Soporte técnico 4 meses',
    ],
  },
  {
    id: 'woo-advanced',
    name: 'WooCommerce ADVANCED',
    highlight: 'Libertad total y alto volumen',
    desc: 'Solución avanzada para negocios con alto volumen de productos e integraciones ERP.',
    price: 980000,
    deliveryDays: '8 semanas',
    category: '🛒 WooCommerce',
    url: '/desarrollo-tienda-en-linea-woocommerce',
    features: [
      'Todo lo del Plan Empresa, más:',
      'Carga o migración hasta 500 productos',
      'Diseño boutique a medida en Adobe XD',
      'Filtros de búsqueda avanzada (FacetWP)',
      'Integración con ERP (sujeto a viabilidad)',
      'Checkout de una sola página (Fast Checkout)',
      'Sistemas de membresía o suscripciones',
      'Automatización de correos transaccionales',
      'Seguridad enterprise ante ataques',
    ],
  },
];

// ════════════════════════════════════════════
// 🌐 PÁGINAS WEB PYMES
// Fuente: /desarrollo-paginas-web-pymes-chile
// ════════════════════════════════════════════
export const WEB_PYME_PLANS: Plan[] = [
  {
    id: 'web-landing-express',
    name: 'Landing Express SEO',
    highlight: 'Conversión Rápida y Visibilidad',
    desc: 'Ideal para campañas específicas o servicios únicos que necesitan conversión rápida.',
    price: 340000,
    deliveryDays: '5 días',
    category: '🌐 Páginas Web Pyme',
    url: '/desarrollo-paginas-web-pymes-chile',
    features: [
      'Diseño de una sola sección (One Page)',
      'Optimización SEO avanzada con Keywords',
      'Configuración Google Analytics 4 & Meta Pixel',
      'Análisis SEO de palabras claves inicial',
      'Contenido optimizado con IA (hasta 2.500 palabras)',
      '4 Imágenes Full HD generadas con IA',
      'Botón de WhatsApp directo y Formulario',
      'Pago en 6 cuotas sin interés',
    ],
  },
  {
    id: 'web-corporativa-seo',
    name: 'Web Corporativa SEO',
    highlight: 'Imagen Profesional Completa',
    desc: 'La mejor opción para PYMES que buscan profesionalizar su imagen con SEO técnico.',
    price: 360000,
    recommended: true,
    deliveryDays: '10-15 días',
    category: '🌐 Páginas Web Pyme',
    url: '/desarrollo-paginas-web-pymes-chile',
    features: [
      'Hasta 5 secciones internas',
      'Diseño de sitio web a medida',
      'Google Analytics 4 & Meta Pixel PRO',
      'Optimización SEO por página avanzada',
      'Análisis SEO y contenido optimizado con IA',
      '8 Imágenes Full HD generadas con IA',
      'Correos corporativos',
      'Pago en 6 cuotas sin interés',
    ],
  },
  {
    id: 'web-pyme-wordpress-pro',
    name: 'Pyme WordPress Pro SEO',
    highlight: 'Estrategia SEO Full',
    desc: 'Sitio web avanzado con gestión de contenido y estrategia SEO Full de dominio orgánico.',
    price: 580000,
    category: '🌐 Páginas Web Pyme',
    url: '/desarrollo-paginas-web-pymes-chile',
    features: [
      'Página WordPress autogestionable',
      'Estrategia SEO Full (Arquitectura & Contenido)',
      'Configuración GA4, Meta Pixel & API Conversiones',
      'Contenido optimizado con IA (Blog inicial)',
      '15 Imágenes Full HD generadas con IA',
      'Capacitación de uso avanzada',
      'Soporte prioritario',
    ],
  },
];

// ════════════════════════════════════════════
// 🦷 PÁGINAS WEB ODONTOLOGÍA
// Fuente: /diseno-paginas-web-odontologia
// ════════════════════════════════════════════
export const DENTAL_PLANS: Plan[] = [
  {
    id: 'dental-lite',
    name: 'Web Dental LITE',
    highlight: 'Tu Clínica en Google',
    desc: 'Presencia profesional diseñada para mostrar tus servicios y facilitar el contacto.',
    price: 580000,
    originalPrice: 650000,
    category: '🦷 Odontología',
    url: '/diseno-paginas-web-odontologia',
    features: [
      'Diseño Web Moderno & Clínico',
      'Sección de Servicios (Limpieza, Caries, etc.)',
      'Botón de WhatsApp y Llamada Directa',
      'Formulario de Contacto optimizado',
      'SEO Local Básico (Google Maps)',
      'Hosting y Dominio .cl (1 año)',
      'Certificado SSL de Seguridad',
      'Soporte 3 meses',
    ],
  },
  {
    id: 'dental-pro',
    name: 'Web Dental PRO',
    highlight: 'Captación de Pacientes',
    desc: 'Estructura avanzada con enfoque en especialidades y autoridad de marca.',
    price: 780000,
    originalPrice: 880000,
    recommended: true,
    category: '🦷 Odontología',
    url: '/diseno-paginas-web-odontologia',
    features: [
      'Todo lo del Plan Lite +',
      'Páginas de Especialidades Detalladas',
      'Blog de Salud Dental (Estrategia SEO)',
      'Integración de Reseñas de Pacientes',
      'Galería de Casos Clínicos (Antes/Después)',
      'SEO Técnico y Palabras Clave Avanzado',
      'Velocidad de Carga Ultra-Rápida',
      'Capacitación para Gestión de Leads',
    ],
  },
  {
    id: 'dental-elite',
    name: 'Web Dental ELITE / Funnel',
    highlight: 'Máximo Retorno 2026',
    desc: 'El sistema definitivo para dominar el mercado local y automatizar la entrada de pacientes.',
    price: 980000,
    originalPrice: 1200000,
    category: '🦷 Odontología',
    url: '/diseno-paginas-web-odontologia',
    features: [
      'Todo lo del Plan Pro +',
      'Embudo de Venta por Especialidad',
      'Landing Pages de Alta Conversión',
      'Integración con Software de Reserva',
      'Automatización de Emails de Seguimiento',
      'Dashboard de Analítica de Pacientes',
      'SEO Local Premium (Geofencing)',
      'Soporte Prioritario 6 meses',
    ],
  },
];

// ════════════════════════════════════════════
// ⚱️ PÁGINAS WEB FUNERARIA
// Fuente: /desarrollo-pagina-web-funeraria
// ════════════════════════════════════════════
export const FUNERAL_PLANS: Plan[] = [
  {
    id: 'funeral-esencial',
    name: 'Plan Funerario Esencial',
    highlight: 'Presencia con Respeto',
    desc: 'Ideal para funerarias locales que buscan una presencia e imagen digital sumamente solemne, profesional y digna.',
    price: 580000,
    originalPrice: 650000,
    deliveryDays: '15 días hábiles',
    category: '⚱️ Funeraria',
    url: '/desarrollo-pagina-web-funeraria',
    features: [
      'Diseño Web Profesional, Elegante y Respetuoso',
      'Sección de presentación corporativa, Servicios y Previsión familiar',
      'Obituario Digital Básico (Homenajes sin comentarios)',
      'Botón de WhatsApp de urgencia 24/7 de alta visibilidad',
      'Maquetación responsiva 100% Mobile-first',
      'SEO Local Inicial e Integración con Google Maps para capillas',
      'Hosting y Dominio .cl incluidos por 1 año',
      'Soporte técnico por 3 meses post-lanzamiento',
    ],
  },
  {
    id: 'funeral-profesional',
    name: 'Plan Funerario Profesional',
    highlight: 'Mayor Alcance Digital',
    desc: 'Estructura web avanzada con obituario digital interactivo y sección de condolencias para acompañar a las familias.',
    price: 780000,
    originalPrice: 880000,
    recommended: true,
    deliveryDays: '4 semanas',
    category: '⚱️ Funeraria',
    url: '/desarrollo-pagina-web-funeraria',
    features: [
      'Todo lo del Plan Esencial, más:',
      'Sistema de Condolencias en línea interactivo con moderación',
      'Galería de Homenaje y Memorial (Carga de Fotos y Videos)',
      'Sección de Blog informativo de Apoyo y Acompañamiento al Duelo',
      'Estrategia de Palabras Clave y SEO local avanzado por zonas',
      'Integración automatizada con redes sociales de la funeraria',
      'Optimización técnica de velocidad de carga extrema',
      'Capacitación completa de administración de obituarios y contenido',
    ],
  },
  {
    id: 'funeral-elite',
    name: 'Plan Funerario Elite / Funnel',
    highlight: 'Motor Comercial & SEO Local',
    desc: 'Una potente herramienta de atracción digital diseñada para captar clientes en momentos críticos, posicionar tu marca y abrir una nueva fuente de ingresos para el negocio.',
    price: 1600000,
    originalPrice: 1850000,
    deliveryDays: '6 semanas',
    category: '⚱️ Funeraria',
    url: '/desarrollo-pagina-web-funeraria',
    features: [
      'Estructura optimizada con textos profesionales y keywords estratégicas',
      'SEO Local y posicionamiento en San Miguel, La Cisterna, San Joaquín, Pedro Aguirre Cerda, El Bosque y Santiago Sur',
      'Apoyo de herramientas de Inteligencia Artificial para optimización semántica de contenidos y posicionamiento',
      'Sistema de Cotización en Línea dinámico y consultas rápidas por WhatsApp',
      'Motor comercial digital listo para campañas Google Ads y SEO local de alta conversión',
      'Obituario digital interactivo de alta gama con sistema de condolencias moderado',
      'Soporte técnico VIP, copias de seguridad semanales y mantención garantizada por 6 meses',
    ],
  },
];

// ════════════════════════════════════════════
// 🏠 PÁGINAS WEB INMOBILIARIA
// Fuente: /diseno-paginas-web-inmobiliaria
// ════════════════════════════════════════════
export const INMOBILIARIA_PLANS: Plan[] = [
  {
    id: 'inmo-base',
    name: 'Inmo BASE (WordPress)',
    highlight: 'Ideal para Corredores',
    desc: 'Plataforma robusta autogestionable con todas las herramientas para mostrar tu catálogo.',
    price: 580000,
    originalPrice: 650000,
    category: '🏠 Inmobiliaria',
    url: '/diseno-paginas-web-inmobiliaria',
    features: [
      'Desarrollo en WordPress',
      'Plugin Inmobiliario Premium incluido',
      'Filtros de búsqueda avanzada (Zona, Precio, Tipo)',
      'Carga ilimitada de propiedades',
      'Galería de fotos y videos',
      'Formulario de contacto por propiedad',
      'Botón de WhatsApp directo',
      'SEO local básico configurado',
      'Soporte 3 meses',
    ],
  },
  {
    id: 'inmo-pro',
    name: 'Inmo PRO (Next.js & Supabase)',
    highlight: 'CRM & Marca Blanca Total',
    desc: 'Un verdadero sistema independiente y automatizado sin comisiones ni mensualidades. Next.js, Supabase & CRM Pro.',
    price: 1200000,
    originalPrice: 1500000,
    recommended: true,
    category: '🏠 Inmobiliaria',
    url: '/diseno-paginas-web-inmobiliaria',
    features: [
      'Todo lo de Inmo BASE +',
      'CRM Ligero de Leads integrado (/admin/leads)',
      'Marca Blanca 100% (Nombre, colores, logo y dominio)',
      'Conector Meta Graph API (Publicación en 1 click a FB/IG)',
      'Buscador dinámico en UF & Pesos CLP en tiempo real',
      'Calculadora de Rentabilidad Cap Rate para Inversores',
      'Mapshowcase interactivo (Leaflet / OpenStreetMap)',
      'Embudo de captación "Vender mi Propiedad"',
      'Módulo de simulación de Créditos Hipotecarios',
      'Gestión de Roles (Admin General y Agentes)',
      'Envío de correos automáticos con API de Resend',
      'Soporte prioritario y garantía 6 meses',
    ],
  },
];

// ════════════════════════════════════════════
// 🎓 E-LEARNING — Tutor LMS
// Fuente: /desarrollo-diseno-elearning-tutor-lms
// ════════════════════════════════════════════
export const ELEARNING_PLANS: Plan[] = [
  {
    id: 'lms-academia-inicio',
    name: 'LMS ACADEMIA INICIO',
    highlight: 'Para marcas personales',
    desc: 'La base perfecta para lanzar tu primer curso online con pasarelas de pago locales.',
    price: 580000,
    originalPrice: 680000,
    category: '🎓 E-learning Tutor LMS',
    url: '/desarrollo-diseno-elearning-tutor-lms',
    features: [
      'Instalación de WordPress + Tutor LMS Pro',
      'Diseño Kit de Elementor pro Envato',
      'Landing Page de Venta SEO',
      'Google Analytics 4 & Meta Pixel',
      'Integración Webpay, Mercado Pago o Flow + Fintoc',
      'Configuración Bunny.net (Básico)',
      'Optimización de velocidad',
      'Creación de curso hasta 5 lecciones',
      'Soporte por 3 meses',
    ],
  },
  {
    id: 'lms-business-pro',
    name: 'LMS BUSINESS PRO',
    highlight: 'El Plan más Solicitado',
    desc: 'La solución definitiva para academias que buscan dominar su nicho con automatización.',
    price: 780000,
    originalPrice: 980000,
    recommended: true,
    category: '🎓 E-learning Tutor LMS',
    url: '/desarrollo-diseno-elearning-tutor-lms',
    features: [
      'Instalación WordPress + Tutor LMS Pro',
      'Diseño Kit Elementor Pro Envato',
      'Landing Page de Venta SEO',
      'Carro de compra e inicio automatizado',
      'Configuración de Correo SMTP',
      'Webpay, Mercado Pago o Flow',
      'Configuración Bunny.net (Seguro)',
      'Certificados automáticos',
      'Email Marketing automatizado',
      'Configuración de 1 curso completo',
      'Capacitación administración total',
    ],
  },
  {
    id: 'lms-enterprise-seo',
    name: 'LMS ENTERPRISE SEO',
    highlight: 'Corporativo y Escalable',
    desc: 'Ecosistema e-learning robusto con multi-instructores, infraestructura de alto tráfico.',
    price: 1100000,
    originalPrice: 1450000,
    category: '🎓 E-learning Tutor LMS',
    url: '/desarrollo-diseno-elearning-tutor-lms',
    features: [
      'Todo lo del Plan Business, más:',
      'Infraestructura Digital Ocean o AWS',
      'Sistema Multi-instructor (Marketplace)',
      'Pago Multimoneda',
      'Plugin Asistencia SENCE',
      'Estrategia SEO Full (Silos de Contenido)',
      'Google Meet / Zoom integrado',
      'Calendario de Eventos',
      'Soporte 24/7 y Mantenimiento',
    ],
  },
];

// ════════════════════════════════════════════
// 📋 COMPLEMENTO SENCE
// Fuente: /complemento-sence-tutor-lms-pro
// ════════════════════════════════════════════
export const SENCE_PLANS: Plan[] = [
  {
    id: 'sence-lite',
    name: 'Sence LITE (Licencia)',
    highlight: 'Ideal para 1 Academia',
    desc: 'Funciones esenciales para cumplir con la normativa básica Sence en un solo dominio.',
    price: 180000,
    originalPrice: 240000,
    category: '📋 Complemento Sence',
    url: '/complemento-sence-tutor-lms-pro',
    features: [
      'Módulo de Declaración Jurada',
      'Registro de Asistencia (Log)',
      'Encuesta de Satisfacción Sence',
      'Reportes PDF Básicos',
      'Actualizaciones por 1 año',
      'Soporte vía Ticket',
    ],
  },
  {
    id: 'sence-pro',
    name: 'Sence PRO (Licencia)',
    highlight: 'Reportes Avanzados LCE',
    desc: 'La solución definitiva para OTECs que necesitan automatización total y reportes LCE.',
    price: 340000,
    originalPrice: 450000,
    recommended: true,
    category: '📋 Complemento Sence',
    url: '/complemento-sence-tutor-lms-pro',
    features: [
      'Todo lo del Plan Lite, más:',
      'Generador de Reportes LCE Excel/CSV',
      'Control de Tiempo por Lección',
      'Firma Digital Avanzada (Check)',
      'Instalación y Configuración inicial',
      'Soporte prioritario 1 a 1',
    ],
  },
  {
    id: 'sence-multi-otec',
    name: 'Sence MULTI-LICENCIA OTEC',
    highlight: 'Para Agencias y OTECs',
    desc: 'Licencia para múltiples dominios con desarrollo de funciones a medida.',
    price: 680000,
    category: '📋 Complemento Sence',
    url: '/complemento-sence-tutor-lms-pro',
    features: [
      'Hasta 5 dominios simultáneos',
      'Integración con API Sence (Opcional)',
      'Diseño de Reportes Personalizados',
      'Capacitación para equipo OTEC',
      'Soporte 24/7 Crítico',
      'Mantenimiento anual incluido',
    ],
  },
];

// ════════════════════════════════════════════
// 💻 NEXT.JS / SaaS A MEDIDA
// Fuente: /desarrollo-web-nextjs-saas-custom
// ════════════════════════════════════════════
export const NEXTJS_PLANS: Plan[] = [
  {
    id: 'saas-mvp',
    name: 'MVP SaaS NEXT.JS',
    highlight: 'Lanza tu producto rápido',
    desc: 'Arquitectura moderna Next.js 16, Supabase, autenticación, pagos y despliegue en Vercel.',
    price: 2400000,
    deliveryDays: '4 a 6 semanas',
    category: '💻 Next.js / SaaS',
    url: '/desarrollo-web-nextjs-saas-custom',
    features: [
      'Arquitectura Next.js 16 + App Router',
      'Base de Datos Supabase (PostgreSQL)',
      'Autenticación (Email, Google, Github)',
      'Panel de Usuario y Dashboard básico',
      'Integración de Pagos (Stripe o Webpay)',
      'Despliegue automático en Vercel',
      'SEO Técnico Optimizado',
      'Soporte post-lanzamiento 1 mes',
    ],
  },
  {
    id: 'saas-custom-suite',
    name: 'CUSTOM SaaS SUITE',
    highlight: 'Escalabilidad y Lógica Compleja',
    desc: 'Roles avanzados, multitenancy, analítica personalizada, webhooks y diseño UX/UI Boutique.',
    price: 4800000,
    recommended: true,
    deliveryDays: '8 a 12 semanas',
    category: '💻 Next.js / SaaS',
    url: '/desarrollo-web-nextjs-saas-custom',
    features: [
      'Todo lo del Plan MVP, más:',
      'Roles de Usuario avanzados (Admin, Editor)',
      'Multitenancy (Múltiples organizaciones)',
      'Panel de Analítica personalizado con gráficos',
      'Integraciones API vía Webhooks (Zapier, CRM)',
      'Automatización de Emails transaccionales',
      'Optimización de Performance Extrema',
      'Diseño UX/UI Boutique a medida',
      'Soporte prioritario 3 meses',
    ],
  },
];

// ════════════════════════════════════════════
// 📦 DROPSHIPPING — Shopify + Dropi
// Fuente: /tienda-dropshipping-shopify-y-dropi
// ════════════════════════════════════════════
export const DROPSHIPPING_PLANS: Plan[] = [
  {
    id: 'drop-basico',
    name: 'Dropshipping BÁSICO',
    highlight: 'Ideal para Iniciar sin Stock',
    desc: 'Desarrollo de tienda Shopify automatizada con Dropi Chile y pago contra entrega (COD). Todo listo para vender.',
    price: 580000,
    deliveryDays: '4 semanas',
    category: '📦 Dropshipping Shopify + Dropi',
    url: '/tienda-dropshipping-shopify-y-dropi',
    features: [
      'Desarrollo Tienda Dropshipping Dropi',
      'Configuración completa Shopify (Dominio + SSL)',
      'Plantilla Premium optimizada para conversión',
      'Creación de 5 colecciones inteligentes',
      'Sincronización automática de inventario y pedidos',
      'Configuración de Pago Contra Entrega (COD) local',
      'Métodos de transporte y envíos incluidos vía Dropi Chile',
      'Personalización de 1 producto estrella con 5 fotos IA únicas y 3 videos generados con IA',
      '1 tipo de formas de pago (Webpay/Flow/Mercado Pago) + Fintoc',
      'Video Explicativo cómo crear imágenes IA para productos dropshipping',
      'Categorías, Colecciones and Menús dinámicos',
      'Integración con WhatsApp y Redes Sociales',
      'Soporte técnico por 3 meses (3 cambios incluidos)',
    ],
  },
  {
    id: 'drop-avanzado',
    name: 'Dropshipping AVANZADO',
    highlight: 'Para Escalar Volumen de Ventas',
    desc: 'La solución definitiva para escalamiento y optimización. Incluye analítica, banners profesionales y más productos.',
    price: 850000,
    recommended: true,
    deliveryDays: '5 semanas',
    category: '📦 Dropshipping Shopify + Dropi',
    url: '/tienda-dropshipping-shopify-y-dropi',
    features: [
      'Todo lo del Plan Básico, más:',
      'Creación de hasta 15 colecciones inteligentes',
      'Personalización de 3 productos ganadores con 5 fotos cada uno y 3 videos IA',
      'Todos los medios de pago que escojan (Webpay, Flow, Mercado Pago, Fintoc, etc.)',
      'Video Explicativo cómo crear imágenes IA para productos dropshipping + cómo crear Videos para productos dropshipping',
      'Optimización de Conversión avanzada (CRO)',
      'Configuración precisa de Meta Pixel, TikTok Pixel y Google Analytics 4',
      'Diseño de Banners y recursos gráficos personalizados',
      'Estrategia avanzada de SEO en colecciones y categorías',
      'Soporte prioritario y consultoría de escalamiento',
    ],
  },
];

// ════════════════════════════════════════════
// ⚙️ INTEGRACIONES Y ADD-ONS
// ════════════════════════════════════════════
export const ADDON_SERVICES: Plan[] = [
  {
    id: 'mkt-paid-media',
    name: 'Paid Media',
    highlight: 'SERVICIO PERSONALIZADO',
    desc: 'Administración de campañas en Meta Ads y Google Ads. Estrategia de captación de tráfico calificado. Optimización permanente de campañas enfocada en maximizar ROAS. Gestión de audiencias, remarketing y escalamiento de campañas.',
    price: 550000,
    category: '📈 Marketing & SEO',
    features: [
      'Desarrollo a medida',
      'Garantía técnica de código',
      'Configuración profesional'
    ],
  },
  {
    id: 'mkt-seo-crecimiento',
    name: 'Servicio SEO mensual para crecimiento sostenido del tráfico orgánico',
    highlight: 'SERVICIO PERSONALIZADO',
    desc: 'Auditoría SEO, Optimización SEO On-Page de páginas y contenidos, Optimización de títulos, meta descripciones y estructura de encabezados, Corrección de errores de indexación y rastreo. Implementación y optimización de datos estructurados (Schema). etc.',
    price: 250000,
    category: '📈 Marketing & SEO',
    features: [
      'Desarrollo a medida',
      'Garantía técnica de código',
      'Configuración profesional'
    ],
  },

  {
    id: 'add-klaviyo',
    name: 'Configuración Avanzada de Klaviyo',
    highlight: 'Email Marketing CRM',
    desc: 'Integración y diseño de los flujos de correo automatizados de mayor conversión en el ecommerce.',
    price: 180000,
    originalPrice: 220000,
    category: '⚙️ Integraciones',
    features: [
      'Integración técnica de Klaviyo con Shopify',
      'Creación de flujo de Carrito Abandonado de alta conversión (3 correos escalonados)',
      'Creación de flujo de Bienvenida para nuevos suscriptores con incentivos',
      'Creación de flujo de Agradecimiento Post-compra y fidelización',
      'Diseño de plantillas personalizadas (Layouts) alineados a la marca',
      'Segmentación inicial de listas de contactos',
    ],
  },
  {
    id: 'add-intl',
    name: 'Shopify Internacional (Multi-mercado)',
    highlight: 'Expansión Global',
    desc: 'Configuración de Shopify Markets para vender en múltiples países con monedas, idiomas y redirecciones automáticas.',
    price: 220000,
    originalPrice: 300000,
    category: '⚙️ Integraciones',
    features: [
      'Habilitación y configuración de Shopify Markets',
      'Configuración del switch automático de idioma y moneda local según IP del cliente',
      'Configuración de redondeo de precios en monedas locales para un look profesional',
      'Integración de pasarelas internacionales de pago (ej: PayPal, Stripe, Shopify Payments)',
      'Configuración de subdominios regionales y mapeo SEO correspondiente',
      'Establecimiento de zonas y tarifas específicas de envíos internacionales',
    ],
  },
  {
    id: 'add-merchant',
    name: 'Sincronización de Google Merchant & Shopping',
    highlight: 'Publicidad en Google',
    desc: 'Configuración técnica y vinculación de catálogo para poder publicar tus productos directamente en Google Shopping.',
    price: 150000,
    originalPrice: 190000,
    category: '⚙️ Integraciones',
    features: [
      'Creación y verificación de cuenta en Google Merchant Center',
      'Generación y automatización del feed de datos de catálogo desde Shopify',
      'Resolución de advertencias o errores comunes del catálogo exigidos por Google',
      'Vinculación de Merchant Center con Google Ads',
      'Configuración del seguimiento de conversiones de Google Ads en el checkout de Shopify',
    ],
  },
  {
    id: 'int-fintoc',
    name: 'Integración Fintoc',
    highlight: 'Transferencias Bancarias',
    desc: 'Configuración de Fintoc para aceptar transferencias confirmadas automáticamente en checkout de Shopify.',
    price: 150000,
    category: '⚙️ Integraciones',
    url: '/integracion-fintoc-shopify',
    features: [
      'Configuración del plugin Fintoc',
      'Pruebas de flujo completo en sandbox',
      'Validación en ambiente de producción',
      'Confirmación automática de pagos',
    ],
  },
  {
    id: 'int-webpay',
    name: 'Integración Webpay Plus',
    highlight: 'Tarjetas Crédito / Débito',
    desc: 'Configuración y certificación de Transbank Webpay Plus. Incluye pruebas en ambiente de integración.',
    price: 180000,
    category: '⚙️ Integraciones',
    features: [
      'Configuración en ambiente Transbank',
      'Pruebas de integración certificadas',
      'Validación en producción',
      'Compatible con Visa, Mastercard, Redcompra',
    ],
  },
  {
    id: 'int-bsale',
    name: 'Integración ERP Bsale',
    highlight: 'ERP + Facturación DTE',
    desc: 'Sincronización bidireccional Shopify-Bsale: productos, stock, pedidos y emisión automática de DTE.',
    price: 450000,
    category: '⚙️ Integraciones',
    url: '/boleta-electronica-facturacion-shopify-chile',
    features: [
      'Sincronización de productos y stock',
      'Emisión automática de DTE (boleta/factura)',
      'Integración de pedidos Shopify → Bsale',
      'Requiere cuenta Bsale activa',
    ],
  },
  {
    id: 'int-envios',
    name: 'Integración de Envíos',
    highlight: 'Shipit / Starken / Chilexpress',
    desc: 'Integración con operador logístico para etiquetas automáticas y cálculo de tarifa en el checkout.',
    price: 200000,
    category: '⚙️ Integraciones',
    url: '/integracion-de-metodos-de-envio-en-chile',
    features: [
      'Configuración del operador logístico elegido',
      'Cálculo automático de tarifas en checkout',
      'Generación de etiquetas desde el panel',
      'Seguimiento de envíos para el cliente',
    ],
  },
  {
    id: 'seo-audit',
    name: 'Auditoría SEO Técnico',
    highlight: 'Posicionamiento Google',
    desc: 'Revisión completa de Core Web Vitals, rastreo, indexación, metadatos, estructura y velocidad.',
    price: 350000,
    category: '📈 Marketing & SEO',
    url: '/servicios-seo-posicionamiento-google',
    features: [
      'Análisis de Core Web Vitals',
      'Revisión de rastreo e indexación',
      'Auditoría de metadatos y estructura',
      'Informe técnico detallado',
      'Roadmap de mejoras priorizadas',
    ],
  },
  {
    id: 'seo-mensual',
    name: 'Campaña SEO Mensual',
    highlight: 'Posicionamiento Continuo',
    desc: 'Gestión mensual: keyword research, producción de contenido, link building y reporte mensual.',
    price: 400000,
    category: '📈 Marketing & SEO',
    url: '/servicios-seo-posicionamiento-google',
    features: [
      'Investigación de palabras clave',
      'Producción de contenido SEO (2 artículos/mes)',
      'Link building básico',
      'Reporte mensual de posiciones',
      'Soporte técnico continuo',
    ],
  },
  {
    id: 'mant-shopify',
    name: 'Soporte Mensual Shopify',
    highlight: 'Mantención',
    desc: 'Soporte mensual: actualizaciones, corrección de errores, cambios de contenido y revisión de velocidad.',
    price: 250000,
    category: '🔧 Soporte & Mantención',
    url: '/soporte-mensual-tienda-shopify',
    features: [
      'Hasta 5 horas de trabajo mensual',
      'Corrección de errores y bugs',
      'Actualización de contenido y productos',
      'Revisión de velocidad mensual',
      'Canal de comunicación prioritario',
    ],
  },
  {
    id: 'mant-wordpress',
    name: 'Mantención Mensual WordPress',
    highlight: 'Mantención',
    desc: 'Actualizaciones de plugins y core, backup semanal, monitoreo de seguridad y ajustes de contenido.',
    price: 200000,
    category: '🔧 Soporte & Mantención',
    features: [
      'Actualizaciones de plugins y core WordPress',
      'Backup semanal automatizado',
      'Monitoreo de seguridad',
      'Hasta 5 horas de ajustes de contenido',
      'Reporte mensual del estado del sitio',
    ],
  },
];


// ════════════════════════════════════════════
// 🤖 INTELIGENCIA ARTIFICIAL
// Fuente: /implementacion-ia-conversacional
// ════════════════════════════════════════════
export const IA_PLANS: Plan[] = [{
    id: 'ia-conversacional-databot',
    name: 'Implementación IA Conversacional',
    highlight: 'Chatbot con IA',
    desc: 'Implementación única de un asistente virtual inteligente basado en Databot, entrenado con la información de tu negocio.',
    price: 590000,
    category: '🤖 Inteligencia Artificial',
    url: '/implementacion-ia-conversacional',
    features: [
      'Diagnóstico del negocio y Configuración completa',
      'Entrenamiento de la IA con info de la empresa',
      'Diseño de flujos conversacionales',
      'Integración con sitio web',
      'Capacitación del equipo',
    ],
  },
  {
    id: 'ia-soporte-mensual',
    name: 'Soporte Webunica (Opcional)',
    highlight: 'Mantención IA',
    desc: 'Asegura el máximo rendimiento de tu IA. Optimización continua, ajustes de respuestas e incorporación de nueva información.',
    price: 120000,
    category: '🤖 Inteligencia Artificial',
    url: '/implementacion-ia-conversacional',
    features: [
      'Optimización continua de la IA',
      'Ajustes de respuestas e info',
      'Revisión de conversaciones mensual',
      'Soporte prioritario',
    ],
  }
,
  {
    id: 'ia-consultoria-starter',
    name: 'AI Starter (Consultoría AI)',
    highlight: 'Para ecommerce en crecimiento',
    desc: 'Retainer mensual diseñado para escalar la autoridad digital de tu empresa en el largo plazo (hasta 500 productos).',
    price: 300000,
    category: '🤖 Inteligencia Artificial',
    url: '/geo-ai-visibility',
    features: [
      '20 Páginas optimizadas al mes',
      '2 Artículos/Clústeres Semánticos',
      'Schema.org Dinámico Básico',
      'Auditoría de Share of Voice (Trimestral)',
      '1 Reunión de Estrategia mensual',
    ],
  },
  {
    id: 'ia-consultoria-pro',
    name: 'AI Professional (Consultoría AI)',
    highlight: 'MÁS SOLICITADO',
    desc: 'Para empresas B2B y tiendas medianas (hasta 2.500 productos).',
    price: 600000,
    recommended: true,
    category: '🤖 Inteligencia Artificial',
    url: '/geo-ai-visibility',
    features: [
      '50 Páginas optimizadas al mes',
      '4 Artículos/Clústeres Semánticos',
      'Schema.org Avanzado (FAQ, Breadcrumbs)',
      'Auditoría de Share of Voice (Mensual)',
      '1 Mención Digital PR (Señales EEAT)',
      '2 Reuniones Estratégicas mensuales',
    ],
  },
  {
    id: 'ia-consultoria-enterprise',
    name: 'AI Enterprise (Consultoría AI)',
    highlight: 'A Medida',
    desc: 'Solución a escala para marcas líderes y catálogos masivos.',
    price: 1200000,
    category: '🤖 Inteligencia Artificial',
    url: '/geo-ai-visibility',
    features: [
      '+150 Páginas optimizadas al mes',
      '+8 Artículos/Clústeres Semánticos',
      'Schema.org Personalizado Custom',
      'Auditoría de Share of Voice (Quincenal)',
      '3 Menciones Digital PR (Alto EEAT)',
      'Canal de Slack Compartido',
    ],
  }
];


// ════════════════════════════════════════════
// CATÁLOGO COMPLETO (usado en el cotizador)
// ════════════════════════════════════════════
export const ALL_PLANS: Plan[] = [
  ...SHOPIFY_PLANS,
  ...SHOPIFY_THEME_PLANS,
  ...WOOCOMMERCE_PLANS,
  ...WEB_PYME_PLANS,
  ...DENTAL_PLANS,
  ...FUNERAL_PLANS,
  ...INMOBILIARIA_PLANS,
  ...ELEARNING_PLANS,
  ...SENCE_PLANS,
  ...NEXTJS_PLANS,
  ...ADDON_SERVICES,
  ...DROPSHIPPING_PLANS,
  ...IA_PLANS,
];

// Agrupado por categoría para el <select> del cotizador
export const PLANS_BY_CATEGORY = ALL_PLANS.reduce(
  (acc, plan) => {
    if (!acc[plan.category]) acc[plan.category] = [];
    acc[plan.category].push(plan);
    return acc;
  },
  {} as Record<string, Plan[]>
);

// Helper para formatear precios en CLP
export const formatCLP = (amount: number) =>
  new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(amount);
