// Types and templates (no 'use server' — pure data)

export type ProjectPhase = {
  id: string
  project_id: string
  phase_number: number
  title: string
  subtitle: string | null
  status: 'pendiente' | 'en_progreso' | 'completado'
  badge: string
  created_at: string
  tasks?: ProjectTask[]
}

export type ProjectTask = {
  id: string
  phase_id: string
  title: string
  description: string | null
  status: 'pendiente' | 'en_progreso' | 'completado'
  sort_order: number
  created_at: string
}

type PhaseTemplate = {
  phase_number: number
  title: string
  subtitle: string
  badge: string
  tasks: Array<{ title: string; description: string }>
}

export const PROJECT_TEMPLATES: Record<string, PhaseTemplate[]> = {
  shopify: [
    {
      phase_number: 1,
      title: 'Semana 1: Configuración + Theme',
      subtitle: 'Cuenta Shopify, tema base, configuraciones iniciales',
      badge: 'critico',
      tasks: [
        { title: 'Crear cuenta Shopify', description: 'Setup inicial del plan elegido' },
        { title: 'Instalar y configurar theme', description: 'Activación del tema premium' },
        { title: 'Configurar dominio', description: 'Conectar dominio .cl o .com' },
        { title: 'Recibir logo + assets del cliente', description: 'PNG, SVG de alta resolución' },
        { title: 'Configurar moneda y región Chile', description: 'CLP, zona horaria, idioma' },
        { title: 'Configurar URL staging', description: 'URL de prueba para revisión' },
        { title: 'Colores y tipografías de marca', description: 'Personalización visual base' },
        { title: 'Crear estructura de colecciones', description: 'Categorías y menú de navegación' },
      ],
    },
    {
      phase_number: 2,
      title: 'Semana 2: Diseño + Homepage',
      subtitle: 'Header, hero, secciones clave, footer — según brief',
      badge: 'critico',
      tasks: [
        { title: 'Header personalizado', description: 'Logo, navegación, carrito' },
        { title: 'Sección Hero', description: 'Banner principal con CTA' },
        { title: 'Sección de beneficios', description: 'Propuestas de valor de la marca' },
        { title: 'Grid de colecciones', description: 'Cards de categorías con imagen' },
        { title: 'Productos destacados', description: 'Grid con tags, precio y botón' },
        { title: 'Footer completo', description: 'Links, contacto, redes sociales' },
        { title: 'Responsive móvil', description: 'Revisar todos los breakpoints' },
        { title: 'Revisión con cliente — Semana 2', description: 'Feedback y ajustes del diseño' },
      ],
    },
    {
      phase_number: 3,
      title: 'Semana 3: Catálogo + Páginas',
      subtitle: 'Fichas de productos, páginas secundarias',
      badge: 'intenso',
      tasks: [
        { title: 'Carga de productos (hasta 50 SKUs)', description: 'Fotos, descripciones, precios, variantes' },
        { title: 'Fichas de producto optimizadas', description: 'Diseño de página de producto' },
        { title: 'Configurar filtros y búsqueda', description: 'Por precio, colección, disponibilidad' },
        { title: 'Página Nosotros', description: 'Historia y equipo de la marca' },
        { title: 'Página Contacto', description: 'Formulario + datos de contacto' },
        { title: 'Políticas legales', description: 'Términos, privacidad, devoluciones' },
        { title: 'SEO básico', description: 'Meta títulos y descripciones de productos' },
        { title: 'Revisión con cliente — Semana 3', description: 'Aprobación del catálogo' },
      ],
    },
    {
      phase_number: 4,
      title: 'Semana 4: Pagos + Testing + Lanzamiento',
      subtitle: 'Pasarelas, envíos, testing completo, go live',
      badge: 'go_live',
      tasks: [
        { title: 'Integrar Mercado Pago', description: 'Tarjetas crédito/débito activas' },
        { title: 'Integrar Flow o Transbank', description: 'Método de pago alternativo' },
        { title: 'Configurar zonas de envío', description: 'Tarifas por región, flat rate Chile' },
        { title: 'Emails transaccionales', description: 'Confirmación, despacho, recuperación' },
        { title: 'Testing completo de checkout', description: 'Pagos reales en modo prueba' },
        { title: 'Core Web Vitals', description: 'Velocidad > 90 en GTmetrix' },
        { title: 'Revisión final cliente', description: 'Aprobación antes del lanzamiento' },
        { title: '🎉 GO LIVE', description: 'Cambiar DNS + anunciar lanzamiento' },
      ],
    },
  ],
  wordpress: [
    {
      phase_number: 1,
      title: 'Semana 1: Infraestructura + Base',
      subtitle: 'WordPress, WooCommerce, plugins core, theme base',
      badge: 'critico',
      tasks: [
        { title: 'WordPress + SSL', description: 'Instalación limpia + HTTPS' },
        { title: 'WooCommerce', description: 'Instalar + asistente de configuración' },
        { title: 'Theme Base', description: 'Astra Pro o Flatsome' },
        { title: 'Elementor Pro', description: 'Constructor visual instalado' },
        { title: 'Plugins esenciales', description: 'Rank Math, Smush, LiteSpeed Cache' },
        { title: 'Recibir logo + assets del cliente', description: 'PNG, SVG, PDF alta resolución' },
        { title: 'Hosting + Staging', description: 'URL staging para revisión cliente' },
        { title: 'Categorías WooCommerce', description: 'Estructura de navegación inicial' },
      ],
    },
    {
      phase_number: 2,
      title: 'Semana 2: Diseño + Homepage',
      subtitle: 'Header, hero, categorías, footer — según wireframe',
      badge: 'critico',
      tasks: [
        { title: 'Header personalizado', description: 'Logo, nav, búsqueda, usuario, carrito' },
        { title: 'Sección Hero', description: 'Headline + CTAs principales' },
        { title: 'Grid de beneficios', description: '4 columnas con propuestas de valor' },
        { title: 'Sección categorías', description: '4 cards con imagen + "Ver productos"' },
        { title: 'Productos destacados', description: 'Grid con tags, rating, CTA' },
        { title: 'Sección Nosotros', description: 'Misión y valores de la marca' },
        { title: 'Footer completo', description: '5 columnas: productos, info, ayuda, contacto' },
        { title: 'Mobile Responsive', description: 'Revisar todos los breakpoints' },
      ],
    },
    {
      phase_number: 3,
      title: 'Semana 3: Catálogo + Páginas',
      subtitle: 'Fichas de productos, páginas secundarias',
      badge: 'intenso',
      tasks: [
        { title: 'Página de categoría', description: 'Sidebar filtros + grid de productos' },
        { title: 'Fichas de producto (10-20)', description: 'Fotos, descripciones, variaciones, precio' },
        { title: 'Filtros activos', description: 'Por precio, categoría, disponibilidad' },
        { title: 'Página Nosotros', description: 'Historia, equipo, misión' },
        { title: 'Página Contacto', description: 'Formulario + mapa ubicación' },
        { title: 'Blog + Artículos (3-5)', description: 'SEO + contenido base' },
        { title: 'SEO On-Page', description: 'Meta títulos, descripciones, Rank Math' },
        { title: 'Revisión con cliente — Semana 3', description: 'Aprobación del catálogo' },
      ],
    },
    {
      phase_number: 4,
      title: 'Semana 4: Pagos + Testing + Lanzamiento',
      subtitle: 'WebPay, envíos, políticas, testing, go live',
      badge: 'go_live',
      tasks: [
        { title: 'WebPay Plus', description: 'Tarjetas Crédito/Débito activas' },
        { title: 'Mercado Pago', description: 'Método alternativo de pago' },
        { title: 'Configuración de envíos', description: 'Starken, Chilexpress, flat rate Chile' },
        { title: 'Políticas legales', description: 'Términos, privacidad, devoluciones' },
        { title: 'Emails transaccionales', description: 'Confirmación, envío, recuperación' },
        { title: 'Testing completo', description: 'Checkout, pagos, móvil, velocidad' },
        { title: 'Core Web Vitals', description: 'GTmetrix > 90, Mobile > 80' },
        { title: '🎉 GO LIVE', description: 'Cambiar DNS + anunciar lanzamiento' },
      ],
    },
  ],
}

// WooCommerce uses the WordPress template
PROJECT_TEMPLATES['woocommerce'] = PROJECT_TEMPLATES['wordpress']
