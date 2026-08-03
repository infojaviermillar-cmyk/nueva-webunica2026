import { MetadataRoute } from 'next';
import { getPublishedPosts } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://webunica.cl';

  // 1. Fetch dynamic blog posts
  const posts = await getPublishedPosts();
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated_at || post.created_at),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // 2. High-priority service routes (0.9)
  const highPriorityRoutes = [
    '',
    '/contacto',
    '/portafolio',
    '/sobre-nosotros',
    '/geo-ai-visibility',
    '/desarrollo-tiendas-shopify-chile',
    '/desarrollo-tiendas-shopify-en-chile',
    '/desarrollo-shopify-chile',
    '/diseno-web-shopify-chile',
    '/diseno-shopify-cl',
    '/planes-de-desarrollo-shopify-en-chile',
    '/planes-de-desarrollo-shopify-en-chile/plan-prende',
    '/planes-de-desarrollo-shopify-en-chile/plan-full',
    '/planes-de-desarrollo-shopify-en-chile/plan-conversion',
    '/planes-de-desarrollo-shopify-en-chile/plan-custom-elite',
    '/desarrollo-tienda-en-linea-woocommerce',
    '/desarrollo-paginas-web-pymes-chile',
    '/desarrollo-web-nextjs-saas-custom',
    '/servicios-seo-posicionamiento-google',
    '/agencia-de-desarrollo-web-y-ecommerce-en-chile',
    '/agencia-de-embudos-de-venta-chile',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.9,
  }));

  // 3. Secondary service routes (0.8)
  const secondaryRoutes = [
    '/blog',
    '/recursos',
    '/diseno-themes-shopify-personalizados-adobe-xd',
    '/diseno-paginas-web-inmobiliaria',
    '/diseno-paginas-web-odontologia',
    '/desarrollo-pagina-web-funeraria',
    '/desarrollo-paginas-web-pymes-chile',
    '/desarrollo-theme-shopify-chile',
    '/tienda-dropshipping-shopify-y-dropi',
    '/aplicaciones-para-tiendas-shopify',
    '/migrar-a-shopify',
    '/migrar-de-magento-a-shopify',
    '/migrar-de-jumpseller-a-shopify',
    '/migrar-de-woocommerce-a-shopify',
    '/shopify-inteligencia-artificial',
    '/medios-de-transporte-shopify',
    '/rediseno-tienda-shopify',
    '/rediseno/refresh',
    '/rediseno/transform',
    '/rediseno/elite',
    '/integracion-erp-shopify-chile',
    '/integracion-fintoc-shopify',
    '/integracion-de-metodos-de-envio-en-chile',
    '/boleta-electronica-facturacion-shopify-chile',
    '/empresas-de-transporte-y-envios-para-shopify-chile',
    '/implementacion-ia-conversacional',
    '/asesoria-gratuita-tienda-shopify',
    '/creacion-y-diseno-de-plantillas-web-para-shopify',
    '/crear-cuenta-shopify-chile',
    '/cursos-y-talleres-shopify',
    '/plantillas-temas-shopify',
    '/catalogo-web-de-diseno',
    '/programa-partners-agencias',
    '/software-de-pedidos-en-linea',
    '/sistema-cotizaciones-intranet-wordpress',
    '/sistema-rifas-sorteos-woocommerce',
    '/crea-tu-sistema-de-agenda-online',
    '/diseno-paginas-web',
    '/desarrollo-diseno-paginas-web',
    '/desarrollo-web-webunica-chile',
    '/pagina-web-landinpage-economica',
    '/pagina-web-para-profesionales',
    '/diseno-de-una-pagina-web',
    '/requisitos-para-crear-una-pagina-web',
    '/optimizar-pagina-web-carga-rapida',
    '/correo-electronico-email-corporativo-empresas',
    '/correo-electronico-profesional-temuco-y-la-araucania',
    '/hostinger-mejor-y-economico',
    '/plataforma-streaming-video-bunny-net',
    '/soporte-mensual-tienda-shopify',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 4. WordPress / Maintenance routes (0.7)
  const wordpressRoutes = [
    '/corregir-errores-pagina-web-wordpress',
    '/soporte-mensual-sitio-web-wordpress',
    '/servicio-modificacion-mantenimiento-wordpress',
    '/mantencion-optimizacion-sitio-web-wordpress-guia-paso-a-paso',
    '/plugin-cotizador-woocommerce-chile',
    '/actualizacion-paginas-web-wix',
    '/lms-tutor-pro-wordpress',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 5. E-learning routes (0.7)
  const elearningRoutes = [
    '/desarrollo-diseno-elearning-moodle',
    '/desarrollo-diseno-elearning-tutor-lms',
    '/desarrollo-elearning-tutor-lms-pro',
    '/plataforma-de-clases-en-linea-mas-popular-aprende-desde-cualquier-lugar',
    '/preguntas-sobre-tutor-lms-pro',
    '/complemento-sence-tutor-lms-pro',
    '/plantilla-adobe-xd',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 6. Resources & tools (0.7)
  const resourceRoutes = [
    '/calculadora-de-campana-meta-ads-facebook',
    '/costos-asociados-a-tienda-shopify-chile',
    '/comparacion-woocommerce-o-shopify-para-chile',
    '/como-instalar-mercado-pago-en-shopify-paso-a-paso-guia-2025',
    '/como-estructurar-ficha-de-producto-shopify',
    '/comisiones-plataformas-de-pago-para-shopify-chile',
    '/carta-gantt-proyecto-tienda-en-linea',
    '/check-list-posicionamiento-seo',
    '/listas-de-verificacion-shopify-cro-basica',
    '/listas-de-verificacion-shopify-cro-pro',
    '/listas-de-verificacion-shopify-geo',
    '/recursos/conectar-meta-graph-api-shopify-chile',
    '/wireframes-para-el-diseno-y-desarrollo-web',
    '/como-asignar-contacto-tecnico-en-nic-chile-cl',
    '/caracteristicas-tienda-en-linea-vs-marketplace',
    '/obtener-seo-pagina-web',
    '/3-maneras-de-mejorar-tu-visibilidad-y-posicionamiento',
    '/3-pasos-para-tener-tu-pagina-web',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 7. FAQ & informational routes (0.65)
  const faqRoutes = [
    '/preguntas-frecuentes-sobre-tiendas-shopify-en-chile',
    '/preguntas-frecuentes-sobre-shopify',
    '/preguntas-frecuentes-desarrollo-de-paginas-web',
    '/sobre-nosotros',
    '/politica-de-privacidad',
    '/politica-de-devoluciones',
    '/terminos-y-condiciones-de-servicios',
    '/trabaja-con-nosotros',
    '/trabaja-con-nosotros-freelancer-webunica',
    '/proyectos-paginas-y-sitios-web',
    '/contacto-desarrollo-diseno-web',
    '/cuentanos-sobre-tu-proyecto-web',
    '/programa-partners-agencias',
    '/licencia-productos',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }));

  // 8. City landing pages (0.6)
  const cities = [
    'santiago', 'concepcion', 'temuco', 'valdivia', 'puerto-montt',
    'antofagasta', 'iquique', 'la-serena', 'rancagua', 'osorno',
    'ancud', 'punta-arenas'
  ];
  const cityUrls = cities.map((city) => ({
    url: `${baseUrl}/diseno-paginas-web/${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...highPriorityRoutes,
    ...secondaryRoutes,
    ...wordpressRoutes,
    ...elearningRoutes,
    ...resourceRoutes,
    ...faqRoutes,
    ...blogUrls,
    ...cityUrls,
  ];
}
