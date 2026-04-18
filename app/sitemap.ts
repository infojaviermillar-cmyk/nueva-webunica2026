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

  // 2. Main static routes
  const mainRoutes = [
    '',
    '/blog',
    '/contacto',
    '/portafolio',
    '/recursos',
    '/desarrollo-web-nextjs-saas-custom',
    '/desarrollo-tiendas-shopify-chile',
    '/servicios-seo-posicionamiento-google',
    '/desarrollo-tienda-en-linea-woocommerce',
    '/desarrollo-paginas-web-pymes-chile',
    '/diseno-themes-shopify-personalizados-adobe-xd',
    '/diseno-paginas-web-inmobiliaria',
    '/desarrollo-pagina-web-funeraria',
    '/tienda-dropshipping-shopify-dropi',
    '/cotizador-en-linea-desarrollo-web',
    '/calculadora-de-campana-meta-ads-facebook',
    '/costos-asociados-a-tienda-shopify-chile',
    '/preguntas-frecuentes-sobre-tiendas-shopify-en-chile',
    '/comparacion-woocommerce-o-shopify-para-chile',
    '/como-instalar-mercado-pago-en-shopify-paso-a-paso-guia-2025',
    '/comisiones-plataformas-de-pago-para-shopify-chile',
    '/desarrollo-tiendas-shopify-en-chile',
    '/desarrollo-theme-shopify-chile',
    '/tienda-dropshipping-shopify-y-dropi',
    '/aplicaciones-para-tiendas-shopify',
    '/medios-de-transporte-shopify',
    '/corregir-errores-pagina-web-wordpress',
    '/soporte-mensual-sitio-web-wordpress',
    '/servicio-modificacion-mantenimiento-wordpress',
    '/mantencion-optimizacion-sitio-web-wordpress-guia-paso-a-paso',
    '/plugin-cotizador-woocommerce-chile',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 3. City landing pages
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

  return [...mainRoutes, ...blogUrls, ...cityUrls];
}
