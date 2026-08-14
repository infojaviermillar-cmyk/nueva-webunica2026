export interface DetectedServiceInfo {
  serviceName: string;
  pageUrl: string;
  pagePath: string;
}

export function detectServiceFromUrl(customPath?: string): DetectedServiceInfo {
  if (typeof window === 'undefined') {
    return {
      serviceName: 'Diseño Web & E-commerce',
      pageUrl: 'https://webunica.cl',
      pagePath: '/'
    };
  }

  const pagePath = customPath || window.location.pathname;
  const pageUrl = window.location.href;

  const urlMap: Record<string, string> = {
    '/desarrollo-web-corporativo': 'Desarrollo Web Corporativo',
    '/rediseno-tienda-shopify': 'Rediseño Tienda Shopify',
    '/tienda-dropshipping-shopify-y-dropi': 'Dropshipping Shopify & Dropi',
    '/desarrollo-tiendas-shopify-en-chile': 'Desarrollo Tienda Shopify',
    '/desarrollo-tiendas-shopify-chile': 'Desarrollo Tienda Shopify',
    '/desarrollo-shopify-chile': 'Desarrollo Tienda Shopify',
    '/desarrollo-theme-shopify-chile': 'Desarrollo Theme Shopify',
    '/desarrollo-paginas-web-pymes-chile': 'Diseño Web Pymes Chile',
    '/desarrollo-web-nextjs-saas-custom': 'Next.js & SaaS Custom',
    '/servicios-seo-posicionamiento-google': 'Servicios SEO & Posicionamiento',
    '/desarrollo-tienda-en-linea-woocommerce': 'Desarrollo WooCommerce',
    '/desarrollo-pagina-web-funeraria': 'Diseño Web Funeraria',
    '/diseno-paginas-web-inmobiliaria': 'Diseño Web Inmobiliaria',
    '/diseno-paginas-web-odontologia': 'Diseño Web Odontología',
    '/desarrollo-diseno-elearning-tutor-lms': 'Plataforma E-learning Tutor LMS',
    '/desarrollo-elearning-tutor-lms-pro': 'Plataforma E-learning Tutor LMS',
    '/desarrollo-diseno-elearning-moodle': 'Plataforma E-learning Moodle',
    '/sistema-cotizaciones-intranet-wordpress': 'Sistema Cotizaciones & Intranet',
    '/boleta-electronica-facturacion-shopify-chile': 'Boleta Electrónica Shopify',
    '/integracion-fintoc-shopify': 'Integración Fintoc Shopify',
    '/integracion-erp-shopify-chile': 'Integración ERP Shopify',
    '/asesoria-gratuita-tienda-shopify': 'Asesoría Shopify Gratuita',
    '/agencia-de-embudos-de-venta-chile': 'Agencia Embudos de Venta',
    '/agencia-de-desarrollo-web-y-ecommerce-en-chile': 'Desarrollo Web & E-Commerce',
    '/contacto': 'Consulta General Webunica',
    '/portafolio': 'Consulta desde Portafolio',
  };

  if (urlMap[pagePath]) {
    return { serviceName: urlMap[pagePath], pageUrl, pagePath };
  }

  if (pagePath.startsWith('/diseno-paginas-web/')) {
    const city = pagePath.replace('/diseno-paginas-web/', '').replace(/-/g, ' ');
    const formattedCity = city.charAt(0).toUpperCase() + city.slice(1);
    return { serviceName: `Diseño Web en ${formattedCity}`, pageUrl, pagePath };
  }

  if (pagePath.startsWith('/blog/')) {
    return { serviceName: 'Consulta desde Blog', pageUrl, pagePath };
  }

  // Detect using document title if available
  if (typeof document !== 'undefined' && document.title) {
    const titleClean = document.title.split('|')[0].trim();
    if (titleClean.length > 3 && titleClean !== 'Webunica') {
      return { serviceName: titleClean, pageUrl, pagePath };
    }
  }

  return { serviceName: 'Diseño Web & E-commerce', pageUrl, pagePath };
}
