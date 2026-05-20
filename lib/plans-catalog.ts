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
    desc: 'Para marcas activas que necesitan mejorar su tasa de conversión y estética visual.',
    price: 320000,
    originalPrice: 337000,
    deliveryDays: '10 días hábiles',
    category: '🛍️ Shopify',
    url: '/planes-de-desarrollo-shopify-en-chile',
    features: [
      '🎁 Plantilla Premium de regalo',
      'Auditoría Visual y de UX',
      'Mejora de navegación y menú',
      'Optimización de Ficha de Producto',
      'Configuración de Apps esenciales',
      'Mejora de velocidad de carga',
      'Recuperación de carritos',
    ],
  },
  {
    id: 'sh-prende',
    name: 'Shopify PRENDE',
    highlight: 'Lanzamiento Profesional',
    desc: 'Perfecto para emprendimientos que inician con una base sólida y escalable.',
    price: 580000,
    originalPrice: 650000,
    deliveryDays: '4 semanas',
    category: '🛍️ Shopify',
    url: '/planes-de-desarrollo-shopify-en-chile',
    features: [
      'Setup completo de Shopify',
      'Diseño basado en Plantilla Premium',
      'Carga inicial de 70 productos',
      'Configuración Webpay/Flow',
      'Integración de Logística básica',
      'Diseño Mobile-First 100%',
      'Capacitación de uso inicial',
    ],
  },
  {
    id: 'sh-full',
    name: 'Shopify FULL',
    highlight: 'Automatización & Ventas',
    desc: 'La solución preferida para negocios que necesitan automatizar sus procesos.',
    price: 780000,
    originalPrice: 980000,
    recommended: true,
    deliveryDays: '6 semanas',
    category: '🛍️ Shopify',
    url: '/planes-de-desarrollo-shopify-en-chile',
    features: [
      'Todo lo del Plan Prende, más:',
      'Carga de hasta 120 productos',
      'SEO Técnico: Títulos y Metas',
      'Integración Google Analytics 4',
      'Diseño personalizado por secciones',
      'Sistema de Reviews de clientes',
      'Soporte prioritario 3 meses',
    ],
  },
  {
    id: 'sh-pro',
    name: 'Shopify PRO',
    highlight: 'Escalamiento Total',
    desc: 'Solución de alto nivel para marcas con integraciones complejas ERP/CRM.',
    price: 1200000,
    originalPrice: 1400000,
    category: '🛍️ Shopify',
    url: '/planes-de-desarrollo-shopify-en-chile',
    features: [
      'Todo lo del Plan FULL, más:',
      'Migración de hasta 300 productos',
      'Integración ERP (Bsale/Obuma/Rex)',
      'Email Marketing (Klaviyo)',
      'Páginas de aterrizaje a medida',
      'Optimización de velocidad avanzada',
      'Configuración Meta Pixel & API',
      'Consultoría estratégica 1 a 1',
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
    name: 'Inmo PRO (Next.js & React)',
    highlight: 'Máximo Rendimiento & SEO',
    desc: 'Un verdadero embudo de ventas inmobiliario. Velocidad de carga < 1s y arquitectura SEO superior.',
    price: 1200000,
    originalPrice: 1500000,
    recommended: true,
    category: '🏠 Inmobiliaria',
    url: '/diseno-paginas-web-inmobiliaria',
    features: [
      'Todo lo de Inmo BASE +',
      'Generación de descripciones con IA (OpenAI)',
      'Conexión automatizada con Facebook e Instagram',
      'Publicación automática de nuevas propiedades',
      'Velocidad de carga instantánea (SEO Edge)',
      'Embudos de captación de propiedades',
      'Integración con CRM (Hubspot/Salesforce)',
      'SEO técnico avanzado (Estructura Schema)',
      'Soporte Prioritario 6 meses',
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
// ⚙️ INTEGRACIONES Y ADD-ONS
// ════════════════════════════════════════════
export const ADDON_SERVICES: Plan[] = [
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
// CATÁLOGO COMPLETO (usado en el cotizador)
// ════════════════════════════════════════════
export const ALL_PLANS: Plan[] = [
  ...SHOPIFY_PLANS,
  ...SHOPIFY_THEME_PLANS,
  ...WOOCOMMERCE_PLANS,
  ...WEB_PYME_PLANS,
  ...DENTAL_PLANS,
  ...INMOBILIARIA_PLANS,
  ...ELEARNING_PLANS,
  ...SENCE_PLANS,
  ...NEXTJS_PLANS,
  ...ADDON_SERVICES,
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
