export type ProjectPhase = {
  id: string
  project_id: string
  phase_number: number
  title: string
  subtitle: string | null
  status: 'pendiente' | 'en_progreso' | 'completado'
  badge: string
  tasks?: ProjectTask[]
}

export type ProjectTask = {
  id: string
  phase_id: string
  title: string
  description: string | null
  status: 'pendiente' | 'en_progreso' | 'completado'
  sort_order: number
  assigned_to: 'cliente' | 'agencia'
  detailed_info: string | null
}

export type TaskTemplate = {
  title: string
  description: string
  assigned_to: 'cliente' | 'agencia'
  detailed_info: string
}

export type PhaseTemplate = {
  phase_number: number
  title: string
  subtitle: string
  badge: 'critico' | 'intenso' | 'go_live' | 'normal'
  tasks: TaskTemplate[]
}

export const PROJECT_TEMPLATES: Record<string, PhaseTemplate[]> = {
  shopify: [
    {
      phase_number: 1,
      title: 'Semana 1: Kick-off & Diseño UX/UI',
      subtitle: 'Entregables iniciales, wireframes y mockups visuales antes de desarrollar',
      badge: 'critico',
      tasks: [
        { 
          title: 'Pago Etapa 1 (25%)', 
          description: 'Pago inicial para comenzar el proyecto', 
          assigned_to: 'cliente', 
          detailed_info: 'Para dar inicio formal al proyecto y reservar las horas del equipo, se debe realizar el primer pago correspondiente al 25% del total del proyecto.' 
        },
        { 
          title: 'Logo en alta resolución', 
          description: 'Formato PNG transparente, SVG o PDF', 
          assigned_to: 'cliente', 
          detailed_info: 'Para asegurar la mejor calidad visual, necesitamos el logotipo en un formato sin fondo (PNG transparente) o en formato vectorial (SVG, Illustrator o PDF). Esto nos permitirá adaptarlo correctamente al encabezado, pie de página y favicón del sitio web.' 
        },
        { 
          title: 'Guía de marca o colores', 
          description: 'Paleta de colores, tipografías (opcional si hay logo)', 
          assigned_to: 'cliente', 
          detailed_info: 'Si cuentas con un manual de marca, por favor envíalo. Si no, indícanos cuáles son los colores principales y secundarios que te gustaría usar, junto con las tipografías preferidas. Esto guiará el diseño de la interfaz para mantener coherencia visual.' 
        },
        { 
          title: 'Fotos de productos', 
          description: 'Mínimo 3-5 fotos por producto, ideal fondo neutro', 
          assigned_to: 'cliente', 
          detailed_info: 'Sube las fotografías de tus productos a una carpeta de Google Drive o similar. Recomendamos que las imágenes principales tengan fondo blanco o neutro para mantener uniformidad, y añadir fotos de estilo de vida para enriquecer la ficha de producto.' 
        },
        { 
          title: 'Catálogo de productos', 
          description: 'Excel/CSV con nombre, precio, stock, descripción', 
          assigned_to: 'cliente', 
          detailed_info: 'Necesitamos una planilla (Excel o CSV) que liste todos los productos a cargar. Debe incluir: Nombre del producto, Precio normal, Precio de oferta (si aplica), SKU, Cantidad en stock, y una breve descripción comercial.' 
        },
        { 
          title: 'Textos "Nosotros"', 
          description: 'Historia de la marca, misión, equipo, fotos corporativas', 
          assigned_to: 'cliente', 
          detailed_info: 'Redacta un texto contando la historia de tu empresa, la misión, visión y quiénes conforman el equipo. Adjunta fotografías reales de la tienda física (si aplica) o del equipo trabajando. Esto genera confianza en los compradores.' 
        },
        { 
          title: 'Accesos de dominio', 
          description: 'Panel DNS (NIC Chile, Namecheap, GoDaddy, etc.)', 
          assigned_to: 'cliente', 
          detailed_info: 'Proporciona los accesos (usuario y contraseña) a la plataforma donde compraste tu dominio (.cl, .com, etc.) para poder conectarlo a la nueva tienda cuando estemos listos para el lanzamiento.' 
        },
        { 
          title: 'Cuenta de pagos (Mercado Pago, etc.)', 
          description: 'Credenciales o acceso de colaborador', 
          assigned_to: 'cliente', 
          detailed_info: 'Para recibir dinero, necesitamos que nos compartas las credenciales de prueba y producción de tu pasarela de pagos (Mercado Pago, Flow, Webpay, etc.), o que nos invites como colaboradores a tu cuenta.' 
        },
        { 
          title: 'Redes sociales', 
          description: 'Links a Instagram, Facebook, TikTok, etc.', 
          assigned_to: 'cliente', 
          detailed_info: 'Envía los enlaces exactos de tus perfiles de redes sociales para integrarlos en el pie de página de la tienda y configurar correctamente las etiquetas de metadatos para compartir.' 
        },
        { 
          title: 'Wireframes (bocetos)', 
          description: 'Estructura básica de la página principal (Homepage)', 
          assigned_to: 'agencia', 
          detailed_info: 'El equipo de diseño creará esquemas en blanco y negro (wireframes) para definir la jerarquía de la información, ubicación de los botones y secciones principales antes de aplicar color.' 
        },
        { 
          title: 'Moodboard + Dirección Visual', 
          description: 'Referencias visuales y estilo de diseño', 
          assigned_to: 'agencia', 
          detailed_info: 'Definiremos un panel de inspiración visual (moodboard) con la paleta de colores final, tipografías y estilos fotográficos que regirán todo el diseño del sitio.' 
        },
        { 
          title: 'Diseño Homepage', 
          description: 'Mockup completo de la página de inicio', 
          assigned_to: 'agencia', 
          detailed_info: 'Diseñaremos la versión visual final de la página de inicio (Homepage), integrando los colores, textos e imágenes de la marca en alta fidelidad.' 
        },
        { 
          title: 'Diseño Ficha de Producto', 
          description: 'Template de página de detalles del producto', 
          assigned_to: 'agencia', 
          detailed_info: 'Crearemos la maqueta visual de la ficha de producto, determinando cómo se verán las galerías de imágenes, selector de variantes, precio, descripción y botón de compra.' 
        },
        { 
          title: 'Diseño Header + Footer', 
          description: 'Navegación principal y pie de página', 
          assigned_to: 'agencia', 
          detailed_info: 'Estructuraremos la barra de navegación superior (logo, menú, carrito) y el pie de página (enlaces legales, newsletter, redes sociales) para todo el sitio.' 
        },
        { 
          title: 'Diseño Mobile', 
          description: 'Versión responsive de las pantallas clave', 
          assigned_to: 'agencia', 
          detailed_info: 'Adaptaremos todos los diseños previamente creados a su versión móvil (para celulares), asegurando que la experiencia táctil sea fluida y optimizada.' 
        },
        { 
          title: 'Revisión diseño con cliente', 
          description: 'Aprobación del diseño en Figma/Adobe XD', 
          assigned_to: 'cliente', 
          detailed_info: 'El cliente debe revisar el enlace de Figma o Adobe XD proporcionado y dejar comentarios sobre cualquier ajuste necesario antes de pasar a la etapa de programación.' 
        },
        { 
          title: 'Diseño aprobado → A Desarrollo', 
          description: 'Entrega final al desarrollador', 
          assigned_to: 'agencia', 
          detailed_info: 'Una vez que el cliente aprueba los diseños sin más cambios, congelamos las maquetas visuales y preparamos todos los archivos (assets) para que el equipo de programación comience a construir.' 
        },
      ],
    },
    {
      phase_number: 2,
      title: 'Semana 2: Desarrollo Base + Setup',
      subtitle: 'Cuenta Shopify, tema, configuraciones e inicio del desarrollo',
      badge: 'intenso',
      tasks: [
        { 
          title: 'Pago Etapa 2 (25%)', 
          description: 'Pago correspondiente al inicio del desarrollo', 
          assigned_to: 'cliente', 
          detailed_info: 'Al aprobar el diseño y comenzar la etapa de programación en la plataforma, se debe realizar el segundo pago del 25%.' 
        },
        { 
          title: 'Crear cuenta Shopify', 
          description: 'Setup inicial del plan elegido', 
          assigned_to: 'agencia', 
          detailed_info: 'Crearemos la instancia de la tienda en los servidores de Shopify, completaremos los datos fiscales de la empresa y seleccionaremos el plan base.' 
        },
        { 
          title: 'Instalar y configurar theme', 
          description: 'Activación del tema premium', 
          assigned_to: 'agencia', 
          detailed_info: 'Instalaremos el tema premium acordado (ej. Dawn, Impact, Prestige) que servirá como esqueleto para programar la interfaz que se diseñó en la fase anterior.' 
        },
        { 
          title: 'Configurar dominio', 
          description: 'Conectar dominio .cl o .com', 
          assigned_to: 'agencia', 
          detailed_info: 'Vincularemos el dominio proporcionado por el cliente con los servidores DNS de Shopify para que la tienda sea accesible públicamente o en modo de prueba segura.' 
        },
        { 
          title: 'Configurar moneda y región Chile', 
          description: 'CLP, zona horaria, idioma', 
          assigned_to: 'agencia', 
          detailed_info: 'Ajustaremos la tienda para que funcione 100% enfocada al mercado chileno: Pesos Chilenos (CLP) sin decimales, zona horaria correcta e idioma español en todos los botones y notificaciones del sistema.' 
        },
        { 
          title: 'Configurar URL staging', 
          description: 'URL de prueba para revisión', 
          assigned_to: 'agencia', 
          detailed_info: 'Crearemos un entorno de pruebas con una URL temporal protegida con contraseña, para que el cliente pueda ver los avances en tiempo real sin que el público general tenga acceso.' 
        },
        { 
          title: 'Colores y tipografías de marca', 
          description: 'Personalización visual base según diseño', 
          assigned_to: 'agencia', 
          detailed_info: 'Modificaremos el código CSS y la configuración del tema en Shopify para inyectar exactamente los colores y tipografías definidos y aprobados en el diseño (Figma).' 
        },
        { 
          title: 'Crear estructura de colecciones', 
          description: 'Categorías y menú de navegación', 
          assigned_to: 'agencia', 
          detailed_info: 'Configuraremos las reglas automáticas o manuales para agrupar los productos en Categorías (Colecciones), y construiremos el Menú Principal para facilitar la navegación.' 
        },
        { 
          title: 'Revisión con cliente — Semana 2', 
          description: 'Feedback y ajustes estructurales', 
          assigned_to: 'cliente', 
          detailed_info: 'El cliente debe entrar a la URL de prueba y revisar que la estructura base y la navegación tengan sentido. Se hace un check-in de avances.' 
        },
      ],
    },
    {
      phase_number: 3,
      title: 'Semana 3: Catálogo + Páginas',
      subtitle: 'Fichas de productos, páginas secundarias, desarrollo de interfaces',
      badge: 'intenso',
      tasks: [
        { 
          title: 'Pago Etapa 3 (25%)', 
          description: 'Pago correspondiente a la carga y desarrollo avanzado', 
          assigned_to: 'cliente', 
          detailed_info: 'Para proceder con la carga de productos, configuraciones avanzadas y construcción de páginas secundarias, se requiere el tercer pago del 25%.' 
        },
        { 
          title: 'Carga de productos (hasta 50 SKUs)', 
          description: 'Fotos, descripciones, precios, variantes', 
          assigned_to: 'agencia', 
          detailed_info: 'Importaremos de forma masiva o manual el archivo CSV/Excel proporcionado por el cliente. Nos aseguraremos de que las imágenes se vean correctamente, los precios cuadren y las variantes (tallas/colores) funcionen.' 
        },
        { 
          title: 'Desarrollo Homepage', 
          description: 'Implementación del diseño de inicio', 
          assigned_to: 'agencia', 
          detailed_info: 'Programaremos todas las secciones dinámicas de la página de inicio (Banners, Carruseles de productos, Testimonios) tal como se aprobó en Figma, asegurando que sea responsivo.' 
        },
        { 
          title: 'Desarrollo Fichas de producto', 
          description: 'Implementación del diseño de producto', 
          assigned_to: 'agencia', 
          detailed_info: 'Modificaremos la plantilla de producto (Product Page) para que incluya todos los bloques de confianza, acordeones de información (envíos/devoluciones) y un layout enfocado en la conversión.' 
        },
        { 
          title: 'Página Nosotros', 
          description: 'Historia y equipo de la marca', 
          assigned_to: 'agencia', 
          detailed_info: 'Crearemos una página estática (About Us) con el texto y las fotografías proporcionadas por el cliente en la Fase 0, maquetadas de forma atractiva.' 
        },
        { 
          title: 'Página Contacto', 
          description: 'Formulario + datos de contacto', 
          assigned_to: 'agencia', 
          detailed_info: 'Implementaremos un formulario de contacto seguro conectado al correo de la empresa, y un bloque con información adicional (WhatsApp, horarios, dirección física).' 
        },
        { 
          title: 'Políticas legales', 
          description: 'Términos, privacidad, devoluciones', 
          assigned_to: 'agencia', 
          detailed_info: 'Generaremos e integraremos las páginas legales obligatorias para e-commerce. (Nota: el cliente debe proveer el contenido exacto si hay requerimientos legales especiales; nosotros proveemos plantillas base).' 
        },
        { 
          title: 'Configurar filtros y búsqueda', 
          description: 'Por precio, colección, disponibilidad', 
          assigned_to: 'agencia', 
          detailed_info: 'Activaremos y configuraremos la barra de búsqueda inteligente y la barra lateral de filtros en las páginas de categorías, para que el usuario pueda filtrar por precio, stock o etiquetas.' 
        },
        { 
          title: 'Revisión con cliente — Semana 3', 
          description: 'Aprobación del catálogo y diseño', 
          assigned_to: 'cliente', 
          detailed_info: 'El cliente debe realizar una revisión exhaustiva de los productos cargados, verificar descripciones y precios, y validar que la Homepage luce como lo esperado.' 
        },
      ],
    },
    {
      phase_number: 4,
      title: 'Semana 4: Pagos + Testing + Lanzamiento',
      subtitle: 'Pasarelas, envíos, testing completo, go live',
      badge: 'go_live',
      tasks: [
        { 
          title: 'Pago Etapa 4 (25%)', 
          description: 'Pago final de lanzamiento', 
          assigned_to: 'cliente', 
          detailed_info: 'Pago final para habilitar las pasarelas de pago, realizar pruebas integrales y publicar el sitio en vivo.' 
        },
        { 
          title: 'Integrar Mercado Pago', 
          description: 'Tarjetas crédito/débito activas', 
          assigned_to: 'agencia', 
          detailed_info: 'Instalaremos la aplicación de Mercado Pago oficial, introduciremos las credenciales del cliente, y configuraremos las cuotas sin interés si aplica.' 
        },
        { 
          title: 'Integrar Flow o Transbank', 
          description: 'Método de pago alternativo', 
          assigned_to: 'agencia', 
          detailed_info: 'Instalaremos métodos de pago adicionales que el cliente haya solicitado (Webpay a través de Flow, etc.) y aseguraremos que los botones de pago rápido funcionen.' 
        },
        { 
          title: 'Configurar zonas de envío', 
          description: 'Tarifas por región, flat rate Chile', 
          assigned_to: 'agencia', 
          detailed_info: 'Estableceremos las tarifas de envío (despacho) dentro de Shopify. Configuraremos envíos gratis sobre cierto monto, tarifas fijas por región (ej. RM vs Regiones) o integraremos una app como Shipit o Envíame.' 
        },
        { 
          title: 'Emails transaccionales', 
          description: 'Confirmación, despacho, recuperación', 
          assigned_to: 'agencia', 
          detailed_info: 'Personalizaremos las plantillas de correo automático de Shopify (confirmación de pedido, pedido en camino, carrito abandonado) para que incluyan el logo y los colores de la marca.' 
        },
        { 
          title: 'Testing completo de checkout', 
          description: 'Pagos reales en modo prueba', 
          assigned_to: 'agencia', 
          detailed_info: 'Realizaremos pruebas de extremo a extremo: agregar al carrito, completar checkout, simular pago, y revisar correos. Garantizamos que no hay fricción en el proceso de compra.' 
        },
        { 
          title: 'Core Web Vitals + SEO Básico', 
          description: 'Optimización de velocidad y meta tags', 
          assigned_to: 'agencia', 
          detailed_info: 'Comprimiremos imágenes pesadas, minimizaremos el código sobrante y agregaremos meta descripciones base para mejorar la velocidad de carga y el SEO inicial.' 
        },
        { 
          title: 'Revisión final cliente', 
          description: 'Aprobación antes del lanzamiento', 
          assigned_to: 'cliente', 
          detailed_info: 'El cliente realiza la última revisión general (UAT). Una vez que da la aprobación, preparamos el entorno para desactivar el candado de contraseña.' 
        },
        { 
          title: '🎉 GO LIVE', 
          description: 'Cambiar DNS + anunciar lanzamiento', 
          assigned_to: 'agencia', 
          detailed_info: 'Removemos la contraseña de la tienda, forzamos la recarga del caché DNS, configuramos el certificado SSL definitivo y la tienda pasa a estar en producción y lista para vender.' 
        },
      ],
    },
  ],
  wordpress: [
    {
      phase_number: 1,
      title: 'Semana 1: Kick-off & Diseño UX/UI',
      subtitle: 'Entregables iniciales, wireframes y mockups visuales antes de desarrollar',
      badge: 'critico',
      tasks: [
        { 
          title: 'Pago Etapa 1 (25%)', 
          description: 'Pago inicial para comenzar el proyecto', 
          assigned_to: 'cliente', 
          detailed_info: 'Para dar inicio formal al proyecto y reservar las horas del equipo, se debe realizar el primer pago correspondiente al 25% del total del proyecto.' 
        },
        { 
          title: 'Logo en alta resolución', 
          description: 'Formato PNG transparente, SVG o PDF', 
          assigned_to: 'cliente', 
          detailed_info: 'Para asegurar la mejor calidad visual, necesitamos el logotipo en un formato sin fondo (PNG transparente) o en formato vectorial (SVG, Illustrator o PDF). Esto nos permitirá adaptarlo correctamente al encabezado, pie de página y favicón del sitio web.' 
        },
        { 
          title: 'Guía de marca o colores', 
          description: 'Paleta de colores, tipografías (opcional si hay logo)', 
          assigned_to: 'cliente', 
          detailed_info: 'Si cuentas con un manual de marca, por favor envíalo. Si no, indícanos cuáles son los colores principales y secundarios que te gustaría usar, junto con las tipografías preferidas. Esto guiará el diseño de la interfaz para mantener coherencia visual.' 
        },
        { 
          title: 'Fotos de productos', 
          description: 'Mínimo 3-5 fotos por producto, ideal fondo neutro', 
          assigned_to: 'cliente', 
          detailed_info: 'Sube las fotografías de tus productos a una carpeta de Google Drive o similar. Recomendamos que las imágenes principales tengan fondo blanco o neutro para mantener uniformidad, y añadir fotos de estilo de vida para enriquecer la ficha de producto.' 
        },
        { 
          title: 'Catálogo de productos', 
          description: 'Excel/CSV con nombre, precio, stock, descripción', 
          assigned_to: 'cliente', 
          detailed_info: 'Necesitamos una planilla (Excel o CSV) que liste todos los productos a cargar. Debe incluir: Nombre del producto, Precio normal, Precio de oferta (si aplica), SKU, Cantidad en stock, y una breve descripción comercial.' 
        },
        { 
          title: 'Textos "Nosotros"', 
          description: 'Historia de la marca, misión, equipo, fotos corporativas', 
          assigned_to: 'cliente', 
          detailed_info: 'Redacta un texto contando la historia de tu empresa, la misión, visión y quiénes conforman el equipo. Adjunta fotografías reales de la tienda física (si aplica) o del equipo trabajando. Esto genera confianza en los compradores.' 
        },
        { 
          title: 'Accesos de dominio', 
          description: 'Panel DNS (NIC Chile, Namecheap, GoDaddy, etc.)', 
          assigned_to: 'cliente', 
          detailed_info: 'Proporciona los accesos (usuario y contraseña) a la plataforma donde compraste tu dominio (.cl, .com, etc.) para poder conectarlo a la nueva tienda cuando estemos listos para el lanzamiento.' 
        },
        { 
          title: 'Cuenta de pagos (Mercado Pago, etc.)', 
          description: 'Credenciales o acceso de colaborador', 
          assigned_to: 'cliente', 
          detailed_info: 'Para recibir dinero, necesitamos que nos compartas las credenciales de prueba y producción de tu pasarela de pagos (Mercado Pago, Flow, Webpay, etc.), o que nos invites como colaboradores a tu cuenta.' 
        },
        { 
          title: 'Redes sociales', 
          description: 'Links a Instagram, Facebook, TikTok, etc.', 
          assigned_to: 'cliente', 
          detailed_info: 'Envía los enlaces exactos de tus perfiles de redes sociales para integrarlos en el pie de página de la tienda y configurar correctamente las etiquetas de metadatos para compartir.' 
        },
        { 
          title: 'Wireframes (bocetos)', 
          description: 'Estructura básica de la página principal (Homepage)', 
          assigned_to: 'agencia', 
          detailed_info: 'El equipo de diseño creará esquemas en blanco y negro (wireframes) para definir la jerarquía de la información, ubicación de los botones y secciones principales antes de aplicar color.' 
        },
        { 
          title: 'Moodboard + Dirección Visual', 
          description: 'Referencias visuales y estilo de diseño', 
          assigned_to: 'agencia', 
          detailed_info: 'Definiremos un panel de inspiración visual (moodboard) con la paleta de colores final, tipografías y estilos fotográficos que regirán todo el diseño del sitio.' 
        },
        { 
          title: 'Diseño Homepage', 
          description: 'Mockup completo de la página de inicio', 
          assigned_to: 'agencia', 
          detailed_info: 'Diseñaremos la versión visual final de la página de inicio (Homepage), integrando los colores, textos e imágenes de la marca en alta fidelidad.' 
        },
        { 
          title: 'Diseño Ficha de Producto', 
          description: 'Template de página de detalles del producto', 
          assigned_to: 'agencia', 
          detailed_info: 'Crearemos la maqueta visual de la ficha de producto, determinando cómo se verán las galerías de imágenes, selector de variantes, precio, descripción y botón de compra.' 
        },
        { 
          title: 'Diseño Header + Footer', 
          description: 'Navegación principal y pie de página', 
          assigned_to: 'agencia', 
          detailed_info: 'Estructuraremos la barra de navegación superior (logo, menú, carrito) y el pie de página (enlaces legales, newsletter, redes sociales) para todo el sitio.' 
        },
        { 
          title: 'Diseño Mobile', 
          description: 'Versión responsive de las pantallas clave', 
          assigned_to: 'agencia', 
          detailed_info: 'Adaptaremos todos los diseños previamente creados a su versión móvil (para celulares), asegurando que la experiencia táctil sea fluida y optimizada.' 
        },
        { 
          title: 'Revisión diseño con cliente', 
          description: 'Aprobación del diseño en Figma/Adobe XD', 
          assigned_to: 'cliente', 
          detailed_info: 'El cliente debe revisar el enlace de Figma o Adobe XD proporcionado y dejar comentarios sobre cualquier ajuste necesario antes de pasar a la etapa de programación.' 
        },
        { 
          title: 'Diseño aprobado → A Desarrollo', 
          description: 'Entrega final al desarrollador', 
          assigned_to: 'agencia', 
          detailed_info: 'Una vez que el cliente aprueba los diseños sin más cambios, congelamos las maquetas visuales y preparamos todos los archivos (assets) para que el equipo de programación comience a construir.' 
        },
      ],
    },
    {
      phase_number: 2,
      title: 'Semana 2: Desarrollo Base + Setup',
      subtitle: 'WordPress, WooCommerce, plugins core, theme base',
      badge: 'intenso',
      tasks: [
        { 
          title: 'Pago Etapa 2 (25%)', 
          description: 'Pago correspondiente al inicio del desarrollo', 
          assigned_to: 'cliente', 
          detailed_info: 'Al aprobar el diseño y comenzar la etapa de programación en la plataforma, se debe realizar el segundo pago del 25%.' 
        },
        { 
          title: 'WordPress + SSL', 
          description: 'Instalación limpia + HTTPS', 
          assigned_to: 'agencia', 
          detailed_info: 'Instalaremos WordPress desde cero en nuestro servidor de desarrollo y configuraremos el certificado SSL para garantizar conexiones seguras (candadito verde).' 
        },
        { 
          title: 'WooCommerce', 
          description: 'Instalar + asistente de configuración', 
          assigned_to: 'agencia', 
          detailed_info: 'Instalaremos el plugin WooCommerce, configuraremos las bases de datos de la tienda, los tipos de impuestos chilenos y la moneda base (CLP).' 
        },
        { 
          title: 'Theme Base', 
          description: 'Astra Pro o Flatsome', 
          assigned_to: 'agencia', 
          detailed_info: 'Activaremos un tema base optimizado (ej. Astra Pro o Flatsome) que servirá como lienzo para estructurar todo el sitio sin sobrecargar el código.' 
        },
        { 
          title: 'Elementor Pro', 
          description: 'Constructor visual instalado', 
          assigned_to: 'agencia', 
          detailed_info: 'Instalaremos Elementor Pro para poder maquetar la tienda exactamente como fue diseñada en Figma, permitiendo personalizaciones profundas.' 
        },
        { 
          title: 'Plugins esenciales', 
          description: 'Rank Math, Smush, LiteSpeed Cache', 
          assigned_to: 'agencia', 
          detailed_info: 'Instalaremos un ecosistema de plugins esenciales para asegurar el rendimiento, SEO y compresión de imágenes. Limitaremos el número de plugins para evitar lentitud.' 
        },
        { 
          title: 'Hosting + Staging', 
          description: 'URL staging para revisión cliente', 
          assigned_to: 'agencia', 
          detailed_info: 'Te proveeremos una URL temporal de pruebas (staging) donde podrás ir viendo el avance del proyecto día a día, sin afectar tu dominio actual.' 
        },
        { 
          title: 'Categorías WooCommerce', 
          description: 'Estructura de navegación inicial', 
          assigned_to: 'agencia', 
          detailed_info: 'Crearemos las categorías y subcategorías de WooCommerce en base al inventario provisto para organizar correctamente la tienda.' 
        },
        { 
          title: 'Revisión con cliente — Semana 2', 
          description: 'Aprobación del setup inicial', 
          assigned_to: 'cliente', 
          detailed_info: 'Revisión rápida por parte del cliente para asegurar que el entorno de desarrollo y la estructura base cumplen con las expectativas.' 
        },
      ],
    },
    {
      phase_number: 3,
      title: 'Semana 3: Catálogo + Páginas',
      subtitle: 'Desarrollo de diseño, fichas de productos, páginas secundarias',
      badge: 'intenso',
      tasks: [
        { 
          title: 'Pago Etapa 3 (25%)', 
          description: 'Pago correspondiente a la carga de contenido y páginas', 
          assigned_to: 'cliente', 
          detailed_info: 'Para proceder con la carga final de productos, configuraciones avanzadas y construcción, se requiere el tercer pago del 25%.' 
        },
        { 
          title: 'Desarrollo Homepage', 
          description: 'Implementación del diseño de inicio', 
          assigned_to: 'agencia', 
          detailed_info: 'Llevaremos el diseño de Figma a la vida real en WordPress usando Elementor, asegurando que todos los sliders, banners y grids funcionen perfectamente.' 
        },
        { 
          title: 'Desarrollo Ficha de Producto', 
          description: 'Implementación del diseño de producto', 
          assigned_to: 'agencia', 
          detailed_info: 'Crearemos una plantilla única en Elementor para la ficha de producto (Single Product), para que todos los productos heredados usen este mismo layout optimizado.' 
        },
        { 
          title: 'Carga de productos (10-20)', 
          description: 'Fotos, descripciones, variaciones, precio', 
          assigned_to: 'agencia', 
          detailed_info: 'Subiremos una muestra representativa de productos (o la totalidad si son menos de 20) con todas sus variaciones complejas de WooCommerce (tallas, colores, atributos).' 
        },
        { 
          title: 'Página de categoría', 
          description: 'Sidebar filtros + grid de productos', 
          assigned_to: 'agencia', 
          detailed_info: 'Maquetaremos la página de Catálogo / Categorías, incluyendo la barra lateral con filtros de WooCommerce.' 
        },
        { 
          title: 'Filtros activos', 
          description: 'Por precio, categoría, disponibilidad', 
          assigned_to: 'agencia', 
          detailed_info: 'Configuraremos filtros AJAX para que el usuario pueda buscar productos sin recargar la página entera (ej. deslizador de precios o atributos).' 
        },
        { 
          title: 'Página Nosotros', 
          description: 'Historia, equipo, misión', 
          assigned_to: 'agencia', 
          detailed_info: 'Construiremos la página estática "Acerca de Nosotros" integrando el copywriting y fotografías de la marca.' 
        },
        { 
          title: 'Página Contacto', 
          description: 'Formulario + mapa ubicación', 
          assigned_to: 'agencia', 
          detailed_info: 'Instalaremos y protegeremos (reCAPTCHA) un formulario de contacto y enlazaremos el mapa de Google si existe una tienda física.' 
        },
        { 
          title: 'Revisión con cliente — Semana 3', 
          description: 'Aprobación del catálogo y diseño', 
          assigned_to: 'cliente', 
          detailed_info: 'El cliente navega por el sitio de staging y prueba interactuar con la tienda tal cual lo haría un usuario final, anotando observaciones.' 
        },
      ],
    },
    {
      phase_number: 4,
      title: 'Semana 4: Pagos + Testing + Lanzamiento',
      subtitle: 'WebPay, envíos, políticas, testing, go live',
      badge: 'go_live',
      tasks: [
        { 
          title: 'Pago Etapa 4 (25%)', 
          description: 'Pago final de lanzamiento', 
          assigned_to: 'cliente', 
          detailed_info: 'Pago final para habilitar pasarelas de pago y realizar el lanzamiento público en el dominio definitivo.' 
        },
        { 
          title: 'WebPay Plus', 
          description: 'Tarjetas Crédito/Débito activas', 
          assigned_to: 'agencia', 
          detailed_info: 'Instalaremos el plugin oficial de Transbank, vincularemos las credenciales (API Key) en producción y aseguraremos que la tienda procese pagos de bancos chilenos.' 
        },
        { 
          title: 'Mercado Pago', 
          description: 'Método alternativo de pago', 
          assigned_to: 'agencia', 
          detailed_info: 'Integraremos Mercado Pago vía plugin de WooCommerce, permitiendo que los usuarios paguen con su cuenta de ML o utilicen cuotas.' 
        },
        { 
          title: 'Configuración de envíos', 
          description: 'Starken, Chilexpress, flat rate Chile', 
          assigned_to: 'agencia', 
          detailed_info: 'Configuraremos zonas de envío nativas de WooCommerce o instalaremos integraciones logísticas (Shipit, Envíame, o plugins de Starken/Chilexpress).' 
        },
        { 
          title: 'Políticas legales', 
          description: 'Términos, privacidad, devoluciones', 
          assigned_to: 'agencia', 
          detailed_info: 'Crearemos páginas para Términos de Servicio, Políticas de Devolución y Privacidad. (El cliente debe proveer el texto o usaremos plantillas estándar).' 
        },
        { 
          title: 'Emails transaccionales', 
          description: 'Confirmación, envío, recuperación', 
          assigned_to: 'agencia', 
          detailed_info: 'Instalaremos un plugin SMTP para asegurar que los correos no lleguen a SPAM y personalizaremos los correos de WooCommerce con los colores de la marca.' 
        },
        { 
          title: 'Testing completo + SEO', 
          description: 'Checkout, móvil, velocidad, Rank Math', 
          assigned_to: 'agencia', 
          detailed_info: 'Haremos una compra de prueba completa, validaremos la velocidad del sitio usando LiteSpeed Cache y revisaremos las meta-etiquetas de SEO Básico con Rank Math.' 
        },
        { 
          title: 'Revisión final cliente', 
          description: 'Aprobación final', 
          assigned_to: 'cliente', 
          detailed_info: 'Última verificación del cliente en Staging antes de realizar la migración al dominio oficial.' 
        },
        { 
          title: '🎉 GO LIVE', 
          description: 'Cambiar DNS + anunciar lanzamiento', 
          assigned_to: 'agencia', 
          detailed_info: 'Migramos el sitio de Staging al dominio definitivo (.cl o .com), actualizamos las DNS y forzamos el certificado SSL en producción. ¡El sitio está vivo!' 
        },
      ],
    },
  ],
  'shopify-full': [
    {
      phase_number: 1,
      title: 'Semana 1: Kick-off & Diseño UX/UI',
      subtitle: 'Entregables iniciales, arquitectura de información y mockups antes de desarrollar',
      badge: 'critico' as const,
      tasks: [
        { title: 'Pago Etapa 1 (50%)', description: 'Anticipo para inicio de diseño y desarrollo', assigned_to: 'cliente' as const, detailed_info: 'El proyecto inicia formalmente con el pago del 50% del total. Este pago reserva la programación del equipo y da inicio a todas las actividades de la Semana 1.' },
        { title: 'Logo en alta resolución', description: 'PNG transparente, SVG o PDF vectorial', assigned_to: 'cliente' as const, detailed_info: 'Necesitamos el logotipo en formato vectorial (SVG, AI, PDF) o PNG transparente de al menos 1000px de ancho. Esto se usará en header, footer, emails y favicón.' },
        { title: 'Manual de marca / Colores', description: 'Paleta de colores, tipografías y directrices visuales', assigned_to: 'cliente' as const, detailed_info: 'Envíanos tu manual de marca completo o, si no lo tienes, indica los colores HEX principales y secundarios y las fuentes que representan tu marca.' },
        { title: 'Catálogo de productos (Excel/CSV)', description: 'Nombre, precio, SKU, stock, descripción, variantes', assigned_to: 'cliente' as const, detailed_info: 'Planilla estructurada con todos los productos a cargar (hasta 1.000 SKUs incluidos). Debe incluir columnas de: nombre, descripción, precio neto, precio con IVA, SKU, stock, categoría, variantes y URL de imágenes si están disponibles.' },
        { title: 'Fotografías de productos', description: 'Mínimo 3-5 fotos por producto en fondo neutro', assigned_to: 'cliente' as const, detailed_info: 'Sube las fotos a Google Drive. Recomendamos fondo blanco para consistencia. El equipo de diseño puede hacer una selección y retoque básico.' },
        { title: 'Credenciales DNS y dominio', description: 'Panel DNS de NIC Chile, GoDaddy o similar', assigned_to: 'cliente' as const, detailed_info: 'Accesos al panel DNS del registrador donde está tu dominio (.cl, .com, etc.) para configurar los nameservers de Shopify cuando sea momento del lanzamiento.' },
        { title: 'Credenciales pasarela de pago', description: 'Mercado Pago, Flow, Transbank — API keys', assigned_to: 'cliente' as const, detailed_info: 'Comparte las API keys (pública y privada) de tu pasarela de pagos, o invítanos como colaboradores. Necesitamos tanto claves de prueba como de producción.' },
        { title: 'Accesos Wasabil (facturación)', description: 'Credenciales del sistema de DTE', assigned_to: 'cliente' as const, detailed_info: 'Usuario y contraseña de tu cuenta Wasabil o del sistema de facturación electrónica elegido. Necesario para configurar la emisión automática de boletas/facturas desde Shopify.' },
        { title: 'Wireframes y Arquitectura de Información', description: 'Estructura de navegación y flujos de usuario', assigned_to: 'agencia' as const, detailed_info: 'El equipo de UX diseñará los wireframes de baja fidelidad definiendo la jerarquía de contenidos, la navegación, los flujos de compra y las secciones principales.' },
        { title: 'Moodboard + Dirección Visual', description: 'Paleta, tipografías, referencias visuales finales', assigned_to: 'agencia' as const, detailed_info: 'Crearemos un panel de inspiración visual consolidado con la dirección de diseño definitiva para la tienda.' },
        { title: 'Diseño Homepage + Ficha de Producto', description: 'Mockups alta fidelidad en Figma', assigned_to: 'agencia' as const, detailed_info: 'Diseño completo de la página de inicio y la ficha de producto individual, incluyendo versión desktop y mobile.' },
        { title: 'Diseño Header, Footer y Colecciones', description: 'Navegación, pie de página y páginas de categoría', assigned_to: 'agencia' as const, detailed_info: 'Maquetas del menú principal, mega-menú si aplica, pie de página con newsletter, y la página de listado de categorías/colecciones.' },
        { title: 'Revisión de diseño con cliente', description: 'Aprobación de mockups antes de programar', assigned_to: 'cliente' as const, detailed_info: 'El cliente revisa los diseños en Figma y consolida todos los comentarios en una sola ronda de feedback antes de aprobar y pasar a desarrollo.' },
        { title: 'Diseño aprobado → Pasa a Desarrollo', description: 'Entrega de assets al equipo técnico', assigned_to: 'agencia' as const, detailed_info: 'Los archivos de diseño se exportan y entregan al equipo de desarrollo. Se congelan los mockups aprobados.' },
      ],
    },
    {
      phase_number: 2,
      title: 'Semana 2: Setup Shopify + Base Técnica',
      subtitle: 'Cuenta Shopify Partner, tema premium, configuraciones base y staging',
      badge: 'intenso' as const,
      tasks: [
        { title: 'Crear cuenta Shopify + Setup Partner', description: 'Tienda Shopify con plan elegido', assigned_to: 'agencia' as const, detailed_info: 'Creamos la tienda Shopify bajo nuestra cuenta Partner, configuramos el plan comercial, datos fiscales, moneda CLP y zona horaria Chile.' },
        { title: 'Instalar y configurar tema premium', description: 'Tema Shopify compatible con el diseño', assigned_to: 'agencia' as const, detailed_info: 'Instalamos el tema premium acordado (ej. Dawn, Impact, Impulse) que servirá de base para implementar el diseño de Figma.' },
        { title: 'Configurar dominio y staging URL', description: 'URL de desarrollo con contraseña', assigned_to: 'agencia' as const, detailed_info: 'Conectamos el dominio del cliente y habilitamos una URL de staging (protegida con clave) para que pueda revisar avances sin exposición pública.' },
        { title: 'CSS, tokens de diseño y tipografías', description: 'Implementar paleta, fuentes y variables', assigned_to: 'agencia' as const, detailed_info: 'Aplicamos los colores, tipografías y espaciados de la marca mediante CSS custom properties y la configuración del editor de temas.' },
        { title: 'Estructura de colecciones y menú', description: 'Categorías, submenús y navegación principal', assigned_to: 'agencia' as const, detailed_info: 'Creamos la estructura de colecciones automáticas/manuales y construimos el menú principal según la arquitectura de información aprobada.' },
        { title: 'Check-in cliente — Semana 2', description: 'Revisión de estructura y navegación base', assigned_to: 'cliente' as const, detailed_info: 'El cliente accede a la URL de staging y verifica que la estructura de navegación y las colecciones base están correctamente organizadas.' },
      ],
    },
    {
      phase_number: 3,
      title: 'Semana 3: Catálogo + Páginas Secundarias',
      subtitle: 'Importación de productos, páginas comerciales y maquetación avanzada',
      badge: 'intenso' as const,
      tasks: [
        { title: 'Importación de catálogo (hasta 1.000 SKUs)', description: 'Carga masiva CSV con validación', assigned_to: 'agencia' as const, detailed_info: 'Importamos el catálogo completo usando el importer de Shopify. Validamos precios, variantes, imágenes y colecciones. Se hace una ronda de correcciones de incidencias directas de la importación.' },
        { title: 'Desarrollo Homepage', description: 'Implementación del diseño de inicio', assigned_to: 'agencia' as const, detailed_info: 'Programamos todas las secciones del Homepage: hero, banners rotantes, colecciones destacadas, productos nuevos, testimonios y footer.' },
        { title: 'Desarrollo Ficha de Producto', description: 'Template de PDP optimizado para conversión', assigned_to: 'agencia' as const, detailed_info: 'Implementamos el template de producto con galería mejorada, selector de variantes, acordeones de info, íconos de confianza y CTA optimizado.' },
        { title: 'Páginas: Nosotros, Contacto y Legales', description: 'Contenido estático y formulario de contacto', assigned_to: 'agencia' as const, detailed_info: 'Construimos la página "Acerca de Nosotros" con el contenido del cliente, página de contacto con formulario seguro y las políticas legales obligatorias (devoluciones, privacidad, términos).' },
        { title: 'Configurar filtros y búsqueda', description: 'Faceted search por precio, categoría y variante', assigned_to: 'agencia' as const, detailed_info: 'Activamos y configuramos el sistema de búsqueda y los filtros en páginas de colección para facilitar la navegación del catálogo.' },
        { title: 'Validación catálogo por cliente', description: 'Revisar descripciones, precios y variantes', assigned_to: 'cliente' as const, detailed_info: 'El cliente debe revisar exhaustivamente al menos el 20% de los productos importados, verificando precios, stocks, variantes y descripciones. Notificar errores en una lista consolidada.' },
      ],
    },
    {
      phase_number: 4,
      title: 'Semana 4: Pagos + Facturación + Integraciones',
      subtitle: 'Pasarelas de pago, DTE Wasabil, envíos y emails transaccionales',
      badge: 'intenso' as const,
      tasks: [
        { title: 'Integrar Mercado Pago', description: 'Tarjetas, cuotas y métodos de pago', assigned_to: 'agencia' as const, detailed_info: 'Instalamos y configuramos Mercado Pago oficial con las API keys del cliente, habilitando cuotas sin interés si aplica.' },
        { title: 'Integrar Flow o Transbank Webpay', description: 'Método de pago alternativo bancario', assigned_to: 'agencia' as const, detailed_info: 'Instalamos el método de pago adicional acordado (Flow/Webpay Plus) usando las credenciales de producción del cliente.' },
        { title: 'Configurar Wasabil DTE', description: 'Emisión automática de boletas y facturas', assigned_to: 'agencia' as const, detailed_info: 'Conectamos Wasabil con Shopify para la emisión automática de documentos tributarios electrónicos (boletas de venta, facturas) en cada pedido completado.' },
        { title: 'Zonas de envío y despacho', description: 'Tarifas por región, flat rate y transportistas', assigned_to: 'agencia' as const, detailed_info: 'Configuramos las zonas de envío, tarifas fijas por región (RM / Regiones) y si aplica, integramos con Shipit, Envíame o Chilexpress para cotización en tiempo real.' },
        { title: 'Emails transaccionales de marca', description: 'Confirmación, despacho y recuperación de carrito', assigned_to: 'agencia' as const, detailed_info: 'Personalizamos las plantillas de email de Shopify (confirmación de pedido, pedido en camino, carrito abandonado) con el logo y colores de la marca.' },
        { title: 'Check-in cliente — Semana 4', description: 'Validar pagos, facturación y pedido de prueba', assigned_to: 'cliente' as const, detailed_info: 'El cliente realiza al menos un pedido de prueba completo (con tarjeta de test) y verifica que recibe los emails transaccionales y que la boleta se emite correctamente.' },
      ],
    },
    {
      phase_number: 5,
      title: 'Semana 5: SEO Técnico + Analítica',
      subtitle: 'SEO on-page, meta tags, GA4, GTM, Search Console y Merchant Center',
      badge: 'normal' as const,
      tasks: [
        { title: 'SEO técnico y meta tags', description: 'Title, description, Open Graph y estructura URL', assigned_to: 'agencia' as const, detailed_info: 'Configuramos los meta títulos y descripciones de todas las páginas clave, Open Graph para redes sociales, URLs amigables y redirecciones necesarias.' },
        { title: 'Configurar GA4 + Google Tag Manager', description: 'Tracking de eventos, conversiones y e-commerce', assigned_to: 'agencia' as const, detailed_info: 'Instalamos GA4 vía GTM con tracking de eventos de e-commerce: vistas de producto, agregar al carrito, inicio de checkout, compra completada y conversiones.' },
        { title: 'Google Search Console', description: 'Verificación, sitemap y cobertura de indexación', assigned_to: 'agencia' as const, detailed_info: 'Verificamos la propiedad, enviamos el sitemap XML y revisamos el informe de cobertura inicial para asegurar que Googlebot puede rastrear la tienda correctamente.' },
        { title: 'Google Merchant Center', description: 'Feed de productos para Shopping', assigned_to: 'agencia' as const, detailed_info: 'Configuramos la cuenta de Merchant Center y el feed de productos de Shopify para habilitar la option de campañas Shopping en el futuro.' },
        { title: 'Optimización de velocidad y Core Web Vitals', description: 'Compresión de imágenes, lazy load y scripts', assigned_to: 'agencia' as const, detailed_info: 'Comprimimos imágenes pendientes, eliminamos apps/scripts innecesarios y revisamos los Core Web Vitals (LCP, CLS, FID) con PageSpeed Insights.' },
        { title: 'QA visual completo y testing', description: 'Cross-browser, mobile y flujo de compra', assigned_to: 'agencia' as const, detailed_info: 'Pruebas en Chrome, Safari, Firefox, iOS y Android. Compra de prueba completa. Validación de todos los formularios, filtros y funciones del sitio.' },
      ],
    },
    {
      phase_number: 6,
      title: 'Semana 6: Go Live + Cierre',
      subtitle: 'Lanzamiento en producción, capacitación y recepción conforme',
      badge: 'go_live' as const,
      tasks: [
        { title: 'Pago Etapa 2 (50%)', description: 'Pago final antes del lanzamiento', assigned_to: 'cliente' as const, detailed_info: 'El pago final del 50% restante debe realizarse antes de proceder con el lanzamiento en producción y la transferencia de propiedad de la tienda.' },
        { title: 'Revisión final y aprobación UAT', description: 'Validación completa previa al Go Live', assigned_to: 'cliente' as const, detailed_info: 'El cliente realiza la revisión UAT (User Acceptance Testing) final en staging y da la aprobación formal por escrito para proceder con el lanzamiento.' },
        { title: 'Go Live — Cambio de DNS y SSL', description: 'Lanzamiento en dominio de producción', assigned_to: 'agencia' as const, detailed_info: 'Configuramos los DNS definitivos, removemos la contraseña de la tienda, activamos el SSL y configuramos las redirecciones necesarias desde la URL anterior.' },
        { title: 'Transferencia de propiedad Shopify', description: 'Traspaso de la cuenta al cliente', assigned_to: 'agencia' as const, detailed_info: 'Transferimos la propiedad de la tienda Shopify al email del cliente, asegurándonos de que tenga acceso completo de propietario.' },
        { title: 'Capacitación administración de tienda', description: 'Sesión de capacitación de 60 minutos', assigned_to: 'agencia' as const, detailed_info: 'Realizamos una sesión de capacitación remota (Zoom/Meet) cubriendo: gestión de pedidos, carga de productos, reportes, configuración de descuentos y uso del editor de temas.' },
        { title: 'Recepción conforme y cierre', description: 'Firma o confirmación de entrega', assigned_to: 'cliente' as const, detailed_info: 'El cliente confirma la recepción conforme del proyecto mediante email o firma del documento de cierre. Se activa la garantía de 60 días corridos.' },
      ],
    },
  ],
  'shopify-elite': [
    {
      phase_number: 1,
      title: 'Semana 1: Kick-off & Arquitectura de Información',
      subtitle: 'Levantamiento de marca, datos y estructura de la tienda',
      badge: 'critico' as const,
      tasks: [
        { title: 'Pago Etapa 1 (25%)', description: 'Anticipo para inicio formal del proyecto', assigned_to: 'cliente' as const, detailed_info: 'El 25% inicial asegura la reserva de las horas del equipo de diseño y desarrollo senior. Sin este pago el proyecto no puede iniciar.' },
        { title: 'Logo y manual de marca completo', description: 'Vectores, paleta, tipografías y directrices', assigned_to: 'cliente' as const, detailed_info: 'Manual de marca completo o guía visual con logotipo en SVG/AI, colores HEX/RGB, tipografías usadas (con licencias si son pagas) y cualquier restricción de uso de marca.' },
        { title: 'Catálogo de productos (Excel/CSV completo)', description: 'Hasta 1.000 SKUs con todas sus variantes', assigned_to: 'cliente' as const, detailed_info: 'Planilla con todos los campos: nombre, descripción larga, precio, precio tachado, SKU, código de barras, peso, variantes, stock por sucursal si aplica, URL de imágenes.' },
        { title: 'Fotos de productos en alta calidad', description: 'Fondo blanco, múltiples ángulos y lifestyle', assigned_to: 'cliente' as const, detailed_info: 'Al menos 3 fotos de fondo blanco + 1-2 fotos de lifestyle por producto estrella. Organizadas en carpetas por SKU en Google Drive.' },
        { title: 'Credenciales: DNS, Shopify, ERP Nebula', description: 'Accesos a todos los sistemas involucrados', assigned_to: 'cliente' as const, detailed_info: 'Proporcionar accesos al registrador de dominio, invitación de colaborador Shopify (si ya tiene cuenta), y accesos API/partner de ERP Nebula para la integración.' },
        { title: 'Credenciales: Wasabil, Pasarelas y Envíos', description: 'API keys de DTE, pagos y logística', assigned_to: 'cliente' as const, detailed_info: 'API keys de Wasabil (DTE), credenciales de producción de Mercado Pago/Flow/Transbank, y accesos de la cuenta de Shipit, Envíame u operador logístico.' },
        { title: 'Textos corporativos y legales', description: 'Nosotros, misión, políticas ya redactadas', assigned_to: 'cliente' as const, detailed_info: 'Texto de la página Nosotros, políticas de devolución personalizadas, términos y condiciones, política de privacidad. Si no los tienes, usaremos plantillas que debes validar.' },
        { title: 'Benchmark y Referentes Visuales', description: 'Tiendas o diseños de referencia del cliente', assigned_to: 'cliente' as const, detailed_info: 'El cliente envía 3-5 links de tiendas Shopify o sitios web que le gusten visualmente. Esto guía la dirección de diseño del equipo.' },
        { title: 'Kickoff Meeting y levantamiento de requerimientos', description: 'Sesión de 90 min con todo el equipo', assigned_to: 'agencia' as const, detailed_info: 'Reunión de inicio donde se revisan los entregables del cliente, se confirman los requerimientos técnicos específicos (custom apps, integraciones, funcionalidades especiales) y se valida el cronograma.' },
        { title: 'Arquitectura de Información y Mapa de Sitio', description: 'Estructura de navegación y páginas', assigned_to: 'agencia' as const, detailed_info: 'Definimos formalmente la estructura de URLs, colecciones, menús de navegación, jerarquía de páginas y flujos de usuario principales (compra, búsqueda, contacto).' },
      ],
    },
    {
      phase_number: 2,
      title: 'Semana 2: Diseño UX/UI Alta Fidelidad',
      subtitle: 'Mockups completos en Figma para todos los templates clave',
      badge: 'critico' as const,
      tasks: [
        { title: 'Moodboard y Sistema de Diseño', description: 'Paleta, tipografías, iconografía y componentes base', assigned_to: 'agencia' as const, detailed_info: 'Definimos el sistema de diseño completo: tokens de color, escala tipográfica, espaciados, sombras, bordes y biblioteca de componentes base (botones, inputs, tags, badges).' },
        { title: 'Diseño Homepage (Desktop + Mobile)', description: 'Página de inicio completa en ambas versiones', assigned_to: 'agencia' as const, detailed_info: 'Diseño de alta fidelidad de la página de inicio incluyendo hero, ofertas destacadas, banners secundarios, colecciones, testimonios, newsletter y footer completo.' },
        { title: 'Diseño PDP (Ficha de Producto)', description: 'Template de producto optimizado para conversión', assigned_to: 'agencia' as const, detailed_info: 'Diseño del template de producto con galería de imágenes con zoom, selector de variantes visual, accordion de info, íconos de garantías/envío y área de reviews.' },
        { title: 'Diseño PLP (Listado de Colección)', description: 'Página de categoría con filtros y grid', assigned_to: 'agencia' as const, detailed_info: 'Layout de la página de colección/categoría con barra de filtros lateral o superior, grid de productos configurable (2-4 columnas), ordenamiento y paginación/infinite scroll.' },
        { title: 'Diseño Checkout Personalizado', description: 'Pasos de checkout con branding completo', assigned_to: 'agencia' as const, detailed_info: 'Diseño de los pasos de checkout (carrito, datos del cliente, envío, pago, confirmación) con el branding de la marca aplicado mediante Shopify checkout customization.' },
        { title: 'Páginas secundarias: Nosotros, Blog, Contacto', description: 'Templates de páginas de contenido', assigned_to: 'agencia' as const, detailed_info: 'Diseño de las páginas secundarias principales incluyendo la estructura del blog con template de artículo individual.' },
        { title: 'Aprobación de diseños — Ronda 1', description: 'Feedback consolidado del cliente sobre mockups', assigned_to: 'cliente' as const, detailed_info: 'El cliente revisa todos los diseños en Figma y envía un único documento consolidado con todos sus comentarios y ajustes. Solo se hace una ronda de ajustes estructurales.' },
        { title: 'Ajustes de diseño y aprobación final', description: 'Correcciones y cierre de diseño', assigned_to: 'agencia' as const, detailed_info: 'Incorporamos los ajustes consolidados de la Ronda 1 y entregamos la versión final de todos los diseños. Una vez aprobados, se congelan y pasan a desarrollo.' },
      ],
    },
    {
      phase_number: 3,
      title: 'Semana 3: Setup Shopify + Desarrollo Base',
      subtitle: 'Configuración técnica, tema premium y tokens de diseño',
      badge: 'intenso' as const,
      tasks: [
        { title: 'Pago Etapa 2 (25%)', description: 'Segundo pago para inicio del desarrollo', assigned_to: 'cliente' as const, detailed_info: 'Con el diseño aprobado, se requiere el segundo pago del 25% para iniciar la etapa de programación y configuración técnica.' },
        { title: 'Setup Shopify Partner + Plan', description: 'Tienda configurada con plan y datos fiscales', assigned_to: 'agencia' as const, detailed_info: 'Creamos la tienda Shopify, configuramos el plan elegido, completamos los datos de la empresa, moneda CLP, zona horaria Chile e idioma.' },
        { title: 'Instalación de tema premium + Staging', description: 'Tema base + URL de revisión protegida', assigned_to: 'agencia' as const, detailed_info: 'Instalamos el tema premium acordado como base de desarrollo y habilitamos la URL de staging con contraseña para revisiones del cliente.' },
        { title: 'Implementación del Sistema de Diseño', description: 'Colores, tipografías, espaciados en código', assigned_to: 'agencia' as const, detailed_info: 'Trasladamos todos los tokens del sistema de diseño al código: variables CSS, configuración del editor de temas, fuentes de Google Fonts o tipografías locales.' },
        { title: 'Estructura de colecciones + Menú principal', description: 'Navegación y taxonomía del catálogo', assigned_to: 'agencia' as const, detailed_info: 'Creamos todas las colecciones (automáticas y manuales) según la arquitectura de información y construimos el mega-menú si aplica.' },
        { title: 'Importación inicial del catálogo', description: 'Primera carga del CSV con validación', assigned_to: 'agencia' as const, detailed_info: 'Importamos el catálogo completo y hacemos la validación técnica de productos, variantes e imágenes. Se identifican y registran incidencias para corrección.' },
      ],
    },
    {
      phase_number: 4,
      title: 'Semana 4: Desarrollo Avanzado + Custom Features',
      subtitle: 'Homepage, templates PDP/PLP, funcionalidades especiales',
      badge: 'intenso' as const,
      tasks: [
        { title: 'Desarrollo Homepage completo', description: 'Todas las secciones del diseño aprobado', assigned_to: 'agencia' as const, detailed_info: 'Programamos el Homepage completo: hero animado, colecciones dinámicas, banners por condición, carruseles de productos, sección de testimonios, newsletter y todas las secciones del diseño.' },
        { title: 'Desarrollo PDP optimizado', description: 'Ficha de producto con CRO y UX avanzado', assigned_to: 'agencia' as const, detailed_info: 'Implementamos el template de producto con galería con zoom, variantes visuales, sticky add-to-cart en mobile, acordeones de info, cross-sells y upsells.' },
        { title: 'Desarrollo PLP y sistema de filtros', description: 'Catálogo con filtros facetados', assigned_to: 'agencia' as const, detailed_info: 'Desarrollamos la página de colección con sistema de filtros AJAX por precio, etiquetas, disponibilidad y otras metafields definidas.' },
        { title: 'Páginas de contenido + Blog', description: 'Nosotros, Contacto, Políticas y Blog', assigned_to: 'agencia' as const, detailed_info: 'Construimos todas las páginas de contenido según el diseño aprobado, incluyendo el template del blog y artículo individual.' },
        { title: 'Checkout Personalizado', description: 'Branding completo en el checkout', assigned_to: 'agencia' as const, detailed_info: 'Aplicamos el branding completo al proceso de checkout usando Shopify checkout customization (checkout.liquid o Checkout Extensions según el plan).' },
        { title: 'Check-in cliente — Semana 4', description: 'Revisión de desarrollo base en staging', assigned_to: 'cliente' as const, detailed_info: 'El cliente revisa en staging el Homepage, la PDP, la PLP y el proceso de checkout. Feedback consolidado para ajustes menores.' },
      ],
    },
    {
      phase_number: 5,
      title: 'Semana 5: Integraciones ERP + DTE + Pagos + Envíos',
      subtitle: 'Nebula, Wasabil, pasarelas de pago y operadores logísticos',
      badge: 'intenso' as const,
      tasks: [
        { title: 'Integración ERP Nebula', description: 'Conexión técnica básica con conector estándar', assigned_to: 'agencia' as const, detailed_info: 'Configuramos la conexión de Shopify con ERP Nebula mediante el conector estándar disponible. Incluye sincronización de productos, precios, inventario y pedidos según las capacidades del conector.' },
        { title: 'Pruebas de sincronización ERP', description: 'Validar flujo de inventario y pedidos', assigned_to: 'cliente' as const, detailed_info: 'El cliente (o su equipo de Nebula) debe validar que los pedidos de prueba se sincronizan correctamente y que el inventario se actualiza en ambos sentidos.' },
        { title: 'Configurar Wasabil DTE', description: 'Emisión automática de boletas y facturas', assigned_to: 'agencia' as const, detailed_info: 'Conectamos Wasabil para la emisión automática de DTE. Configuramos las reglas de emisión (boleta siempre, factura cuando el cliente ingresa RUT empresa) y hacemos pruebas de documentos de prueba.' },
        { title: 'Integrar pasarelas de pago', description: 'Mercado Pago + Flow/Transbank en producción', assigned_to: 'agencia' as const, detailed_info: 'Instalamos y configuramos todas las pasarelas de pago acordadas con las credenciales de producción del cliente. Hacemos compras de prueba con tarjetas de test.' },
        { title: 'Configurar logística de envíos', description: 'Zonas, tarifas y operadores de despacho', assigned_to: 'agencia' as const, detailed_info: 'Configuramos las zonas de envío, tarifas y si aplica integramos con Shipit o Envíame para cotización en tiempo real en el checkout.' },
        { title: 'Emails transaccionales personalizados', description: 'Confirmación, despacho y carrito abandonado', assigned_to: 'agencia' as const, detailed_info: 'Personalizamos las plantillas de email de Shopify con el branding completo de la marca.' },
      ],
    },
    {
      phase_number: 6,
      title: 'Semana 6: SEO Avanzado + QA + Analítica',
      subtitle: 'SEO técnico, GA4, GTM, Merchant Center y testing completo',
      badge: 'normal' as const,
      tasks: [
        { title: 'SEO técnico avanzado', description: 'Schema JSON-LD, meta tags, sitemap, hreflang', assigned_to: 'agencia' as const, detailed_info: 'Implementamos marcado Schema.org (Product, BreadcrumbList, Organization, FAQPage) con JSON-LD, optimizamos todos los meta tags, generamos el sitemap XML y revisamos el robots.txt.' },
        { title: 'Configurar GA4 + GTM avanzado', description: 'E-commerce tracking completo con eventos', assigned_to: 'agencia' as const, detailed_info: 'GA4 vía GTM con todos los eventos de e-commerce (view_item, add_to_cart, begin_checkout, purchase) más eventos de scroll, clicks y formularios.' },
        { title: 'Google Search Console + Merchant Center', description: 'Verificación, sitemaps y feed de Shopping', assigned_to: 'agencia' as const, detailed_info: 'Verificamos la propiedad en Search Console, enviamos el sitemap, y configuramos Merchant Center con el feed de productos para Google Shopping.' },
        { title: 'Optimización Core Web Vitals', description: 'LCP < 2.5s, CLS < 0.1, FID < 100ms', assigned_to: 'agencia' as const, detailed_info: 'Comprimimos imágenes en formato WebP/AVIF, implementamos lazy loading, eliminamos render-blocking resources y validamos los Core Web Vitals con PageSpeed Insights.' },
        { title: 'QA Completo Cross-Browser y Mobile', description: 'Testing en iOS, Android, Chrome, Safari, Firefox', assigned_to: 'agencia' as const, detailed_info: 'Testing exhaustivo en múltiples dispositivos y navegadores, incluyendo compra de prueba completa, validación de todos los filtros, formularios, emails y funcionalidades del sitio.' },
        { title: 'Reporte de Calidad y Lista de Correcciones', description: 'Documento de issues detectados', assigned_to: 'agencia' as const, detailed_info: 'Documentamos todos los issues encontrados en el QA, los priorizamos por impacto y los corregimos antes del lanzamiento.' },
      ],
    },
    {
      phase_number: 7,
      title: 'Semana 7: Go Live + Lanzamiento Oficial',
      subtitle: 'Puesta en producción, DNS, transferencia y capacitación',
      badge: 'go_live' as const,
      tasks: [
        { title: 'Pago Etapa 3 (25%)', description: 'Tercer pago antes del lanzamiento', assigned_to: 'cliente' as const, detailed_info: 'El tercer pago del 25% habilita el proceso de lanzamiento en producción y la transferencia de propiedad de la tienda.' },
        { title: 'UAT Final — Aprobación del cliente', description: 'Revisión completa previa al Go Live', assigned_to: 'cliente' as const, detailed_info: 'El cliente realiza la revisión UAT final en staging, valida todos los flujos críticos y da la aprobación formal por escrito para el lanzamiento.' },
        { title: 'Go Live — DNS, SSL y remoción de contraseña', description: 'Tienda en producción con dominio oficial', assigned_to: 'agencia' as const, detailed_info: 'Configuramos los DNS definitivos apuntando a Shopify, esperamos la propagación, activamos el SSL de producción y removemos la contraseña de la tienda.' },
        { title: 'Transferencia de propiedad Shopify', description: 'Cuenta transferida al cliente', assigned_to: 'agencia' as const, detailed_info: 'Transferimos la propiedad completa de la tienda al email del cliente. El cliente debe aceptar la transferencia e ingresar su método de pago para el plan mensual de Shopify.' },
        { title: 'Capacitación completa (90 min)', description: 'Gestión de pedidos, productos, reportes y config', assigned_to: 'agencia' as const, detailed_info: 'Sesión de capacitación remota de 90 minutos cubriendo: gestión de pedidos, carga y edición de productos, informes de ventas, configuración de descuentos, blog y editor de temas.' },
        { title: 'Recepción conforme firmada', description: 'Documento de cierre del proyecto', assigned_to: 'cliente' as const, detailed_info: 'El cliente firma o confirma por email la recepción conforme del proyecto. Esto activa la garantía de 90 días corridos.' },
      ],
    },
    {
      phase_number: 8,
      title: 'Semana 8: Holgura Operacional y Cierre',
      subtitle: 'Corrección de incidencias menores, ajustes y cierre formal',
      badge: 'normal' as const,
      tasks: [
        { title: 'Pago Etapa 4 (25%)', description: 'Pago final de cierre del proyecto', assigned_to: 'cliente' as const, detailed_info: 'El cuarto y último pago del 25% se realiza al cumplirse la holgura operacional y el cierre formal del proyecto.' },
        { title: 'Corrección de incidencias menores post Go Live', description: 'Bugs menores detectados en primeros días', assigned_to: 'agencia' as const, detailed_info: 'Durante los primeros días de operación real pueden aparecer incidencias menores (bugs de visualización, ajustes de texto, configuraciones). Las atendemos dentro del período de holgura.' },
        { title: 'Ajustes de configuración ERP/DTE', description: 'Fine-tuning de la integración en producción', assigned_to: 'agencia' as const, detailed_info: 'Con los primeros pedidos reales, pueden requerirse ajustes en la configuración de la integración ERP o DTE. Los incorporamos durante la holgura.' },
        { title: 'Validación final de analítica', description: 'Verificar que GA4 y GTM están trackeando', assigned_to: 'agencia' as const, detailed_info: 'Validamos que GA4 está registrando pedidos reales correctamente y que todos los eventos de e-commerce se están disparando con los datos correctos.' },
        { title: 'Entrega de documentación técnica', description: 'Manual de administración y accesos', assigned_to: 'agencia' as const, detailed_info: 'Entregamos un documento resumen con todos los accesos del proyecto (Shopify, DNS, Wasabil, Nebula, GA4, GTM, Search Console, Merchant Center) y un manual básico de administración.' },
        { title: 'Cierre administrativo del proyecto', description: 'Factura final y archivo del proyecto', assigned_to: 'agencia' as const, detailed_info: 'Emitimos la factura final del proyecto y archivamos todos los archivos, diseños y documentos en la carpeta del cliente en nuestros sistemas internos.' },
      ],
    },
  ],
  'corporativo': [
    {
      phase_number: 1,
      title: 'Semana 1: Kick-off y Levantamiento',
      subtitle: 'Entregables del cliente, arquitectura de información y planificación',
      badge: 'critico' as const,
      tasks: [
        { title: 'Pago Etapa 1 (50%)', description: 'Anticipo para inicio de diseño y desarrollo', assigned_to: 'cliente' as const, detailed_info: 'El pago inicial del 50% inicia formalmente el proyecto y reserva las horas del equipo de diseño y desarrollo.' },
        { title: 'Logo en alta resolución', description: 'SVG, AI o PNG transparente', assigned_to: 'cliente' as const, detailed_info: 'Logo vectorial para uso en header, footer, favicón y Open Graph. Si no tienes logo, cuéntanos para coordinar.' },
        { title: 'Manual de marca o guía de estilo', description: 'Colores, tipografías y directrices visuales', assigned_to: 'cliente' as const, detailed_info: 'Manual de marca completo o descripción detallada de colores (HEX), tipografías y estilo visual de la empresa.' },
        { title: 'Textos y contenidos del sitio', description: 'Copys de todas las secciones y páginas', assigned_to: 'cliente' as const, detailed_info: 'Textos para la página de inicio (hero, propuesta de valor, servicios, CTA), página Nosotros, página de Servicios/Productos, y Contacto. Pueden ser borradores que el equipo edita.' },
        { title: 'Fotos y multimedia', description: 'Fotos del equipo, instalaciones o servicios', assigned_to: 'cliente' as const, detailed_info: 'Fotografías profesionales o de buen detalle del equipo, oficinas, servicios o productos. Adjuntar a una carpeta Google Drive.' },
        { title: 'Credenciales de dominio', description: 'Panel DNS del registrador', assigned_to: 'cliente' as const, detailed_info: 'Accesos al panel DNS de NIC Chile, GoDaddy, Namecheap u otro registrador para conectar el dominio cuando el sitio esté listo.' },
        { title: 'Referencias visuales y benchmark', description: '3-5 sitios web de referencia', assigned_to: 'cliente' as const, detailed_info: 'Links de sitios web (de la industria u otros) que el cliente admire visualmente. Esto orienta la dirección de diseño.' },
        { title: 'Kickoff y Arquitectura de Información', description: 'Definición de secciones, páginas y flujos', assigned_to: 'agencia' as const, detailed_info: 'Reunión de inicio y posterior entrega del mapa de sitio con todas las páginas, secciones y flujos de usuario del sitio web.' },
      ],
    },
    {
      phase_number: 2,
      title: 'Semana 2: Diseño UX/UI',
      subtitle: 'Mockups de alta fidelidad responsive para todas las páginas',
      badge: 'critico' as const,
      tasks: [
        { title: 'Sistema de Diseño y Moodboard', description: 'Tokens visuales, componentes base y referentes', assigned_to: 'agencia' as const, detailed_info: 'Definimos el sistema de diseño completo: paleta de colores, tipografía, espaciados, botones, formularios y componentes reutilizables.' },
        { title: 'Diseño Homepage (Desktop + Mobile)', description: 'Página de inicio con todas las secciones', assigned_to: 'agencia' as const, detailed_info: 'Mockup completo de la página de inicio incluyendo hero, sección de servicios, valor diferencial, CTA, testimonios, casos de éxito y footer.' },
        { title: 'Diseño páginas interiores', description: 'Nosotros, Servicios, Contacto y Blog', assigned_to: 'agencia' as const, detailed_info: 'Templates para las páginas secundarias principales con coherencia visual respecto al homepage.' },
        { title: 'Revisión de diseños — Feedback cliente', description: 'Comentarios consolidados en Figma', assigned_to: 'cliente' as const, detailed_info: 'El cliente revisa todos los diseños en Figma y envía comentarios consolidados en una sola ronda de feedback.' },
        { title: 'Ajustes finales y aprobación de diseño', description: 'Cierre del proceso de diseño', assigned_to: 'agencia' as const, detailed_info: 'Incorporamos los ajustes de la ronda de feedback y entregamos la versión final. Con la aprobación se congelan los diseños y pasan a desarrollo.' },
      ],
    },
    {
      phase_number: 3,
      title: 'Semana 3: Desarrollo Web + Contenido',
      subtitle: 'Implementación Next.js, secciones responsivas y carga de contenido',
      badge: 'intenso' as const,
      tasks: [
        { title: 'Setup Next.js + Hosting + Staging', description: 'Entorno de desarrollo y URL de revisión', assigned_to: 'agencia' as const, detailed_info: 'Configuramos el proyecto Next.js en el servidor de staging con HTTPS, CI/CD básico y URL de revisión para el cliente.' },
        { title: 'Implementación Homepage responsive', description: 'Todas las secciones en código', assigned_to: 'agencia' as const, detailed_info: 'Programamos el homepage completo con todas las secciones del diseño, animaciones de scroll y experiencia responsive en todos los dispositivos.' },
        { title: 'Páginas interiores y formulario de contacto', description: 'Nosotros, Servicios, Contacto', assigned_to: 'agencia' as const, detailed_info: 'Desarrollamos las páginas interiores y el formulario de contacto con validación, protección anti-spam y envío a email corporativo.' },
        { title: 'Integración WhatsApp y CTAs', description: 'Botón flotante WhatsApp y CTAs de conversión', assigned_to: 'agencia' as const, detailed_info: 'Implementamos el botón flotante de WhatsApp con mensaje predefinido y todos los CTAs del sitio con tracking de clics para analítica.' },
        { title: 'Carga y revisión de contenido', description: 'Textos, fotos y multimedia del cliente', assigned_to: 'agencia' as const, detailed_info: 'Cargamos todos los textos y fotografías del cliente en el sitio, hacemos ajustes de edición básica (recorte, optimización) y entregamos para revisión.' },
        { title: 'Check-in cliente — Semana 3', description: 'Revisión del sitio en staging', assigned_to: 'cliente' as const, detailed_info: 'El cliente revisa el sitio en staging e indica correcciones de contenido o ajustes menores en listas consolidadas.' },
      ],
    },
    {
      phase_number: 4,
      title: 'Semana 4: SEO Local + Schema + Analytics',
      subtitle: 'SEO técnico avanzado, Schema JSON-LD, GA4, GTM y Search Console',
      badge: 'intenso' as const,
      tasks: [
        { title: 'SEO Técnico: meta tags y sitemap', description: 'Title, description, Open Graph, sitemap XML', assigned_to: 'agencia' as const, detailed_info: 'Implementamos todos los meta tags optimizados, Open Graph para redes sociales, Twitter Cards, sitemap XML dinámico y robots.txt.' },
        { title: 'SEO Local: Google Business Profile', description: 'Optimización de ficha de Google Maps', assigned_to: 'agencia' as const, detailed_info: 'Revisamos y optimizamos la ficha de Google Business Profile con NAP consistente, fotos, horarios, categorías y publicaciones iniciales.' },
        { title: 'Schema JSON-LD', description: 'Organization, LocalBusiness, Service, BreadcrumbList', assigned_to: 'agencia' as const, detailed_info: 'Implementamos marcado Schema.org estructurado con JSON-LD para el tipo de negocio, servicios, ubicación, FAQ y breadcrumbs.' },
        { title: 'Configurar GA4 + GTM', description: 'Eventos de conversión y engagement', assigned_to: 'agencia' as const, detailed_info: 'Instalamos GA4 vía GTM con tracking de: clics en WhatsApp, envíos de formulario, clics en email/teléfono, scroll depth y tiempo en página.' },
        { title: 'Google Search Console', description: 'Verificación y envío de sitemap', assigned_to: 'agencia' as const, detailed_info: 'Verificamos la propiedad en Search Console y enviamos el sitemap XML para inicio del rastreo e indexación.' },
        { title: 'Core Web Vitals y Performance', description: 'LCP < 2.5s, CLS < 0.1, FCP < 1.8s', assigned_to: 'agencia' as const, detailed_info: 'Optimizamos imágenes en WebP, implementamos lazy loading, configuramos el caché estático y validamos los Core Web Vitals con PageSpeed Insights.' },
      ],
    },
    {
      phase_number: 5,
      title: 'Semana 5: QA + Testing + Ajustes Finales',
      subtitle: 'Pruebas cruzadas, correcciones y validación de experiencia completa',
      badge: 'normal' as const,
      tasks: [
        { title: 'QA Cross-Browser y Mobile', description: 'Chrome, Safari, Firefox, iOS, Android', assigned_to: 'agencia' as const, detailed_info: 'Testing exhaustivo en múltiples navegadores y dispositivos, validando que todas las secciones, formularios, animaciones y CTAs funcionan correctamente.' },
        { title: 'Validación de formularios y emails', description: 'Envío de contacto y autoresponders', assigned_to: 'agencia' as const, detailed_info: 'Probamos todos los formularios del sitio y verificamos que los emails de notificación llegan correctamente a la cuenta del cliente.' },
        { title: 'Revisión final de contenido con cliente', description: 'Última oportunidad de correcciones menores', assigned_to: 'cliente' as const, detailed_info: 'El cliente hace la revisión final de todo el contenido del sitio y reporta correcciones de texto, imágenes o ajustes menores en una lista consolidada.' },
        { title: 'Ajustes finales pre-lanzamiento', description: 'Incorporar correcciones del cliente', assigned_to: 'agencia' as const, detailed_info: 'Incorporamos todos los ajustes menores reportados por el cliente y hacemos una última ronda de QA interno para asegurar la calidad del lanzamiento.' },
        { title: 'Validación de analítica con datos reales', description: 'Verificar GA4 trackeando en staging', assigned_to: 'agencia' as const, detailed_info: 'Verificamos que GA4 y GTM registran correctamente los eventos en el entorno de staging antes del lanzamiento.' },
      ],
    },
    {
      phase_number: 6,
      title: 'Semana 6: Go Live + Cierre',
      subtitle: 'Lanzamiento en producción, DNS, capacitación y recepción conforme',
      badge: 'go_live' as const,
      tasks: [
        { title: 'Pago Etapa 2 (50%)', description: 'Pago final antes del Go Live', assigned_to: 'cliente' as const, detailed_info: 'El pago final del 50% restante se realiza antes del lanzamiento en producción.' },
        { title: 'UAT Final — Aprobación del cliente', description: 'Validación y visto bueno para publicar', assigned_to: 'cliente' as const, detailed_info: 'El cliente hace la revisión final y da la aprobación formal para proceder con el lanzamiento.' },
        { title: 'Go Live — DNS y certificado SSL', description: 'Sitio en producción con dominio oficial', assigned_to: 'agencia' as const, detailed_info: 'Publicamos el sitio en el dominio oficial, configuramos el SSL de producción y verificamos que todo funciona correctamente en el entorno live.' },
        { title: 'Capacitación de administración (60 min)', description: 'Gestión de contenido y configuración', assigned_to: 'agencia' as const, detailed_info: 'Sesión remota de capacitación para gestión de contenido, actualización de textos/imágenes, y uso del CMS o panel de administración.' },
        { title: 'Entrega de accesos y documentación', description: 'Todos los accesos del proyecto organizados', assigned_to: 'agencia' as const, detailed_info: 'Documento con todos los accesos: DNS, hosting, GA4, GTM, Search Console, correo corporativo y cualquier otro sistema involucrado.' },
        { title: 'Recepción conforme', description: 'Cierre formal del proyecto', assigned_to: 'cliente' as const, detailed_info: 'El cliente confirma la recepción conforme activando la garantía de 90 días corridos y el acompañamiento mensual de 6 meses.' },
      ],
    },
  ],
}
