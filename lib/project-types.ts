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
      phase_number: 0,
      title: 'Fase 0: Kick-off & Entregables',
      subtitle: 'Lo que el cliente debe enviar para iniciar el proyecto',
      badge: 'critico',
      tasks: [
        { title: 'Logo en alta resolución', description: 'Formato PNG transparente, SVG o PDF' },
        { title: 'Guía de marca o colores', description: 'Paleta de colores, tipografías (opcional si hay logo)' },
        { title: 'Fotos de productos', description: 'Mínimo 3-5 fotos por producto, ideal fondo neutro' },
        { title: 'Catálogo de productos', description: 'Excel/CSV con nombre, precio, stock, descripción' },
        { title: 'Textos "Nosotros"', description: 'Historia de la marca, misión, equipo, fotos corporativas' },
        { title: 'Accesos de dominio', description: 'Panel DNS (NIC Chile, Namecheap, GoDaddy, etc.)' },
        { title: 'Cuenta de pagos (Mercado Pago, etc.)', description: 'Credenciales o acceso de colaborador' },
        { title: 'Redes sociales', description: 'Links a Instagram, Facebook, TikTok, etc.' },
      ],
    },
    {
      phase_number: 1,
      title: 'Semana 1: Diseño UX/UI (Figma/Adobe XD)',
      subtitle: 'Wireframes y mockups visuales antes de desarrollar',
      badge: 'critico',
      tasks: [
        { title: 'Wireframes (bocetos)', description: 'Estructura básica de la página principal (Homepage)' },
        { title: 'Moodboard + Dirección Visual', description: 'Referencias visuales y estilo de diseño' },
        { title: 'Diseño Homepage', description: 'Mockup completo de la página de inicio' },
        { title: 'Diseño Ficha de Producto', description: 'Template de página de detalles del producto' },
        { title: 'Diseño Header + Footer', description: 'Navegación principal y pie de página' },
        { title: 'Diseño Mobile', description: 'Versión responsive de las pantallas clave' },
        { title: 'Revisión diseño con cliente', description: 'Aprobación del diseño en Figma/Adobe XD' },
        { title: 'Diseño aprobado → A Desarrollo', description: 'Entrega final al desarrollador' },
      ],
    },
    {
      phase_number: 2,
      title: 'Semana 2: Desarrollo Base + Setup',
      subtitle: 'Cuenta Shopify, tema, configuraciones e inicio del desarrollo',
      badge: 'intenso',
      tasks: [
        { title: 'Crear cuenta Shopify', description: 'Setup inicial del plan elegido' },
        { title: 'Instalar y configurar theme', description: 'Activación del tema premium' },
        { title: 'Configurar dominio', description: 'Conectar dominio .cl o .com' },
        { title: 'Configurar moneda y región Chile', description: 'CLP, zona horaria, idioma' },
        { title: 'Configurar URL staging', description: 'URL de prueba para revisión' },
        { title: 'Colores y tipografías de marca', description: 'Personalización visual base según diseño' },
        { title: 'Crear estructura de colecciones', description: 'Categorías y menú de navegación' },
        { title: 'Revisión con cliente — Semana 2', description: 'Feedback y ajustes estructurales' },
      ],
    },
    {
      phase_number: 3,
      title: 'Semana 3: Catálogo + Páginas',
      subtitle: 'Fichas de productos, páginas secundarias, desarrollo de interfaces',
      badge: 'intenso',
      tasks: [
        { title: 'Carga de productos (hasta 50 SKUs)', description: 'Fotos, descripciones, precios, variantes' },
        { title: 'Desarrollo Homepage', description: 'Implementación del diseño de inicio' },
        { title: 'Desarrollo Fichas de producto', description: 'Implementación del diseño de producto' },
        { title: 'Página Nosotros', description: 'Historia y equipo de la marca' },
        { title: 'Página Contacto', description: 'Formulario + datos de contacto' },
        { title: 'Políticas legales', description: 'Términos, privacidad, devoluciones' },
        { title: 'Configurar filtros y búsqueda', description: 'Por precio, colección, disponibilidad' },
        { title: 'Revisión con cliente — Semana 3', description: 'Aprobación del catálogo y diseño' },
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
        { title: 'Core Web Vitals + SEO Básico', description: 'Optimización de velocidad y meta tags' },
        { title: 'Revisión final cliente', description: 'Aprobación antes del lanzamiento' },
        { title: '🎉 GO LIVE', description: 'Cambiar DNS + anunciar lanzamiento' },
      ],
    },
  ],
  wordpress: [
    {
      phase_number: 0,
      title: 'Fase 0: Kick-off & Entregables',
      subtitle: 'Lo que el cliente debe enviar para iniciar el proyecto',
      badge: 'critico',
      tasks: [
        { title: 'Logo en alta resolución', description: 'Formato PNG transparente, SVG o PDF' },
        { title: 'Guía de marca o colores', description: 'Paleta de colores, tipografías (opcional si hay logo)' },
        { title: 'Fotos de productos', description: 'Mínimo 3-5 fotos por producto, ideal fondo neutro' },
        { title: 'Catálogo de productos', description: 'Excel/CSV con nombre, precio, stock, descripción' },
        { title: 'Textos "Nosotros"', description: 'Historia de la marca, misión, equipo, fotos corporativas' },
        { title: 'Accesos de dominio', description: 'Panel DNS (NIC Chile, Namecheap, GoDaddy, etc.)' },
        { title: 'Cuenta de pagos (Mercado Pago, etc.)', description: 'Credenciales o acceso de colaborador' },
        { title: 'Redes sociales', description: 'Links a Instagram, Facebook, TikTok, etc.' },
      ],
    },
    {
      phase_number: 1,
      title: 'Semana 1: Diseño UX/UI (Figma/Adobe XD)',
      subtitle: 'Wireframes y mockups visuales antes de desarrollar',
      badge: 'critico',
      tasks: [
        { title: 'Wireframes (bocetos)', description: 'Estructura básica de la página principal (Homepage)' },
        { title: 'Moodboard + Dirección Visual', description: 'Referencias visuales y estilo de diseño' },
        { title: 'Diseño Homepage', description: 'Mockup completo de la página de inicio' },
        { title: 'Diseño Ficha de Producto', description: 'Template de página de detalles del producto' },
        { title: 'Diseño Header + Footer', description: 'Navegación principal y pie de página' },
        { title: 'Diseño Mobile', description: 'Versión responsive de las pantallas clave' },
        { title: 'Revisión diseño con cliente', description: 'Aprobación del diseño en Figma/Adobe XD' },
        { title: 'Diseño aprobado → A Desarrollo', description: 'Entrega final al desarrollador' },
      ],
    },
    {
      phase_number: 2,
      title: 'Semana 2: Desarrollo Base + Setup',
      subtitle: 'WordPress, WooCommerce, plugins core, theme base',
      badge: 'intenso',
      tasks: [
        { title: 'WordPress + SSL', description: 'Instalación limpia + HTTPS' },
        { title: 'WooCommerce', description: 'Instalar + asistente de configuración' },
        { title: 'Theme Base', description: 'Astra Pro o Flatsome' },
        { title: 'Elementor Pro', description: 'Constructor visual instalado' },
        { title: 'Plugins esenciales', description: 'Rank Math, Smush, LiteSpeed Cache' },
        { title: 'Hosting + Staging', description: 'URL staging para revisión cliente' },
        { title: 'Categorías WooCommerce', description: 'Estructura de navegación inicial' },
        { title: 'Revisión con cliente — Semana 2', description: 'Aprobación del setup inicial' },
      ],
    },
    {
      phase_number: 3,
      title: 'Semana 3: Catálogo + Páginas',
      subtitle: 'Desarrollo de diseño, fichas de productos, páginas secundarias',
      badge: 'intenso',
      tasks: [
        { title: 'Desarrollo Homepage', description: 'Implementación del diseño de inicio' },
        { title: 'Desarrollo Ficha de Producto', description: 'Implementación del diseño de producto' },
        { title: 'Carga de productos (10-20)', description: 'Fotos, descripciones, variaciones, precio' },
        { title: 'Página de categoría', description: 'Sidebar filtros + grid de productos' },
        { title: 'Filtros activos', description: 'Por precio, categoría, disponibilidad' },
        { title: 'Página Nosotros', description: 'Historia, equipo, misión' },
        { title: 'Página Contacto', description: 'Formulario + mapa ubicación' },
        { title: 'Revisión con cliente — Semana 3', description: 'Aprobación del catálogo y diseño' },
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
        { title: 'Testing completo + SEO', description: 'Checkout, móvil, velocidad, Rank Math' },
        { title: 'Revisión final cliente', description: 'Aprobación final' },
        { title: '🎉 GO LIVE', description: 'Cambiar DNS + anunciar lanzamiento' },
      ],
    },
  ],
}

// WooCommerce uses the WordPress template
PROJECT_TEMPLATES['woocommerce'] = PROJECT_TEMPLATES['wordpress']
