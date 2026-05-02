import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: Faltan variables de entorno de Supabase.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function createPosts() {
  // 1. Obtener el ID de la categoría 'Shopify Chile'
  const { data: categories, error: catError } = await supabase
    .from('webunica_blog_categories')
    .select('id')
    .eq('slug', 'shopify-chile')
    .single();

  if (catError || !categories) {
    console.error('Error al obtener categoría:', catError);
    process.exit(1);
  }

  const categoryId = categories.id;

  const posts = [
    {
      title: '¿Cómo elegir el mejor ERP para conectar con Shopify en Chile?',
      slug: 'como-elegir-el-mejor-erp-para-conectar-con-shopify',
      excerpt: 'Descubre las claves para integrar tu inventario, boletas y facturación de Shopify con un ERP robusto en Chile (Bsale, Defontana, etc.).',
      content: `<p>Gestionar una tienda Shopify en crecimiento requiere más que solo un buen diseño; requiere una operación fluida detrás de escena. En Chile, esto significa integrar un <strong>ERP (Enterprise Resource Planning)</strong> que maneje boletas, facturas, inventario multicanal y contabilidad.</p>

<h2>¿Por qué conectar tu Shopify con un ERP?</h2>
<p>La integración automatiza procesos que, de otro modo, quitarían horas de trabajo manual cada semana:</p>
<ul>
  <li><strong>Sincronización de Stock:</strong> Evita vender productos agotados al sincronizar el inventario físico con la tienda online en tiempo real.</li>
  <li><strong>Facturación Automática:</strong> Emisión de boletas y facturas electrónicas (SII) directamente desde el pedido de Shopify.</li>
  <li><strong>Gestión de Despachos:</strong> Muchos ERPs se conectan con couriers como Starken, Blue Express y ChilePost.</li>
</ul>

<h2>Principales ERPs recomendados para Shopify Chile</h2>
<p>En Webunica hemos trabajado con diversas integraciones y estas son las opciones más sólidas para el mercado local:</p>

<h3>1. Bsale</h3>
<p>Probablemente la opción más popular en Chile. Su integración con Shopify es nativa y muy robusta para la emisión de boletas y sincronización de inventario.</p>

<h3>2. Defontana</h3>
<p>Ideal para empresas más grandes que necesitan una contabilidad compleja y gestión de múltiples bodegas.</p>

<h3>3. Integraciones Vía API (Webunica Custom)</h3>
<p>Si tu ERP no tiene una integración nativa, en Webunica desarrollamos conectores a medida usando Next.js para asegurar que tus datos fluyan sin errores.</p>

<h2>Conclusión</h2>
<p>Elegir el ERP correcto depende de tu volumen de ventas y necesidades contables. Si estás listo para escalar tu tienda Shopify Chile, una integración profesional es el primer paso.</p>`,
      category_id: categoryId,
      status: 'published',
      published_at: new Date().toISOString(),
      seo_title: 'Cómo elegir el mejor ERP para Shopify Chile | Webunica',
      seo_description: 'Guía completa para integrar ERPs como Bsale y Defontana con Shopify en Chile. Optimiza tu facturación e inventario.',
      cover_image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426'
    },
    {
      title: 'Guía Definitiva de SEO Técnico para Tiendas Online en 2025',
      slug: 'guia-definitiva-de-seo-tecnico-para-tiendas-online-en-2025',
      excerpt: 'Domina el posicionamiento orgánico en Google Chile optimizando la infraestructura técnica de tu ecommerce: Core Web Vitals, JSON-LD y Next.js.',
      content: `<p>En 2025, el contenido ya no es el único rey. La <strong>infraestructura técnica</strong> de tu tienda online es lo que determina si Google te dará los primeros puestos o si te enterrará en la página dos.</p>

<h2>Los 3 Pilares del SEO Técnico en 2025</h2>

<h3>1. Core Web Vitals y Rendimiento Crítico</h3>
<p>Google prioriza los sitios que cargan en milisegundos. Con el uso de <strong>Next.js</strong> en Webunica, logramos que nuestras tiendas superen el 90/100 en PageSpeed Insights, lo que impacta directamente en el ranking orgánico.</p>

<h3>2. Marcado de Datos Estructurados (JSON-LD)</h3>
<p>Ayuda a Google a entender qué vendes, a qué precio y qué opinan tus clientes. Un buen esquema de <code>Product</code>, <code>Review</code> y <code>FAQPage</code> permite que tu sitio aparezca con "estrellitas" y precios en los resultados de búsqueda.</p>

<h3>3. Arquitectura de Navegación y Crawl Budget</h3>
<p>Optimiza la forma en que el robot de Google recorre tu tienda. Evita el contenido duplicado y asegúrate de que las páginas de colecciones estén perfectamente indexadas.</p>

<h2>¿Por qué el SEO es clave para Shopify Chile?</h2>
<p>En un mercado cada vez más competitivo, el tráfico orgánico es el que tiene mayor ROI (Retorno de Inversión). Mientras que los anuncios en Meta o Google Ads suben de precio, el SEO construye un activo a largo plazo para tu marca.</p>

<p>Si quieres una auditoría SEO técnica gratuita para tu tienda Shopify, <a href="/contacto">contáctanos hoy mismo</a>.</p>`,
      category_id: categoryId,
      status: 'published',
      published_at: new Date().toISOString(),
      seo_title: 'SEO Técnico Ecommerce 2025: Guía para Chile | Webunica',
      seo_description: 'Aprende a optimizar el SEO técnico de tu tienda online. Core Web Vitals, datos estructurados y más para posicionar en Google Chile.',
      cover_image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=2348'
    }
  ];

  for (const post of posts) {
    const { error } = await supabase
      .from('webunica_blog_posts')
      .upsert(post, { onConflict: 'slug' });

    if (error) {
      console.error(`Error al crear post ${post.slug}:`, error);
    } else {
      console.log(`Post creado/actualizado: ${post.slug}`);
    }
  }
}

createPosts();
