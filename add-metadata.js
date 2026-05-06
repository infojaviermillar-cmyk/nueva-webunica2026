const fs = require('fs');
const path = require('path');

const publicPages = [
  "3-maneras-de-mejorar-tu-visibilidad-y-posicionamiento",
  "3-pasos-para-tener-tu-pagina-web",
  "actualizacion-paginas-web-wix",
  "asesoria-gratuita-tienda-shopify",
  "caracteristicas-tienda-en-linea-vs-marketplace",
  "carrito",
  "catalogo-web-de-diseno",
  "como-asignar-contacto-tecnico-en-nic-chile-cl",
  "contacto",
  "contacto-desarrollo-diseno-web",
  "correo-electronico-email-corporativo-empresas",
  "correo-electronico-profesional-temuco-y-la-araucania",
  "crea-tu-sistema-de-agenda-online",
  "creacion-y-diseno-de-plantillas-web-para-shopify",
  "crear-cuenta-shopify-chile",
  "cuentanos-sobre-tu-proyecto-web",
  "desarrollo-diseno-paginas-web",
  "desarrollo-web-webunica-chile",
  "diseno-de-una-pagina-web",
  "diseno-slider",
  "finalizar-compra",
  "hostinger-mejor-y-economico",
  "integracion-de-metodos-de-envio-en-chile",
  "obtener-seo-pagina-web",
  "pagina-web-landinpage-economica",
  "pagina-web-para-profesionales",
  "plantilla-adobe-xd",
  "plantillas-temas-shopify",
  "plataforma-streaming-video-bunny-net",
  "portafolio",
  "preguntas-frecuentes-desarrollo-de-paginas-web",
  "preguntas-frecuentes-sobre-shopify",
  "proyectos-paginas-y-sitios-web",
  "requisitos-para-crear-una-pagina-web",
  "sistema-rifas-sorteos-woocommerce",
  "sobre-nosotros",
  "software-de-pedidos-en-linea",
  "soporte-mensual-tienda-shopify",
  "tienda",
  "trabaja-con-nosotros-freelancer-webunica",
  "wireframes-para-el-diseno-y-desarrollo-web"
];

function generateTitle(folderName) {
  return folderName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

for (const folder of publicPages) {
  const dirPath = path.join(process.cwd(), 'app', folder);
  const pagePath = path.join(dirPath, 'page.tsx');
  
  if (!fs.existsSync(pagePath)) continue;

  const title = `${generateTitle(folder)} | Webunica`;
  const url = `https://webunica.cl/${folder}`;
  
  const metadataStr = `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${title}',
  description: 'Descubre todo sobre ${generateTitle(folder)} con Webunica. Soluciones web avanzadas y diseño de alto rendimiento para el mercado chileno.',
  openGraph: {
    title: '${title}',
    description: 'Soluciones web y e-commerce de alto rendimiento con Webunica.',
    url: '${url}',
    type: 'website',
  },
  alternates: {
    canonical: '${url}',
  }
};
`;

  const layoutStr = `${metadataStr}
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
`;

  let content = fs.readFileSync(pagePath, 'utf8');
  const isClient = content.includes("'use client'") || content.includes('"use client"');

  if (isClient) {
    // Need a layout.tsx
    const layoutPath = path.join(dirPath, 'layout.tsx');
    if (!fs.existsSync(layoutPath)) {
      fs.writeFileSync(layoutPath, layoutStr, 'utf8');
      console.log(`Created layout.tsx for ${folder}`);
    }
  } else {
    // Can inject into page.tsx
    // Add import { Metadata } if not there
    let newContent = content;
    if (!newContent.includes('import { Metadata }')) {
       // Just prepend the whole metadata block
       newContent = metadataStr + '\n' + newContent.replace(/import \{ Metadata \} from 'next';\n/, '');
    } else {
       newContent = metadataStr.replace(/import \{ Metadata \} from 'next';\n/, '') + '\n' + newContent;
    }
    fs.writeFileSync(pagePath, newContent, 'utf8');
    console.log(`Injected metadata into page.tsx for ${folder}`);
  }
}
