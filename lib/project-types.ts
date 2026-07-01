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
}
