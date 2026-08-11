import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar, User, Globe, Share2, Link as LinkIcon, CheckCircle2, AlertTriangle, ShieldCheck, TrendingUp, Target, Zap, HelpCircle } from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';

export const metadata: Metadata = {
  title: 'Shopify y Dropi Chile: Por qué Tu Tienda No Vende y Cómo Solucionarlo',
  description: '¿Tienes una tienda Shopify con Dropi en Chile y no vendes? Descubre la estrategia real de marketing, CRO y productos para crear un ecommerce rentable.',
  openGraph: {
    title: 'Por qué Shopify + Dropi no Garantizan Ventas: La Guía Estratégica para Crear un Ecommerce Rentable en Chile',
    description: 'Descubre por qué la tecnología es solo infraestructura y aprende la ecuación estratégica real para validar y escalar un ecommerce exitoso en Chile.',
    url: 'https://webunica.cl/blog/shopify-dropi-chile-estrategia-ecommerce-rentable',
    type: 'article',
  },
  alternates: {
    canonical: 'https://webunica.cl/blog/shopify-dropi-chile-estrategia-ecommerce-rentable',
  },
};

export default function PostShopifyDropiChile() {
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Por qué Shopify + Dropi no Garantizan Ventas: La Guía Estratégica para Crear un Ecommerce Rentable en Chile',
    description: '¿Tienes una tienda Shopify con Dropi en Chile y no vendes? Descubre la estrategia real de marketing, CRO y productos para crear un ecommerce rentable.',
    author: {
      '@type': 'Organization',
      name: 'Equipo Webunica',
      url: 'https://webunica.cl',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Webunica',
      logo: {
        '@type': 'ImageObject',
        url: 'https://webunica.cl/icon.png',
      },
    },
    datePublished: '2026-08-11',
    dateModified: '2026-08-11',
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Es rentable hacer dropshipping con Shopify y Dropi en Chile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, el dropshipping en Chile puede ser rentable, pero su éxito depende de la estrategia comercial. La rentabilidad se logra seleccionando productos con buen margen, creando ofertas atractivas, produciendo creatividades publicitarias efectivas (UGC) y manteniendo un costo de adquisición (CAC) inferior al margen bruto.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Por qué mi tienda Shopify conectada a Dropi no genera ventas si tiene visitas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Si tu tienda recibe visitas pero no convierte, el problema suele ser la falta de confianza (ausencia de pasarelas locales como Webpay o Mercado Pago, opiniones reales o datos de contacto), precios desalineados con el mercado chileno, costos de envío ocultos al final del flujo o una landing page que no cumple la promesa del anuncio.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué pasarelas de pago son indispensables para un ecommerce en Chile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'En Chile es fundamental ofrecer pasarelas de pago locales reconocidas como Webpay Plus (Transbank), Mercado Pago y alternativas con tarjeta de débito o CuentaRUT. Las pasarelas locales transmiten seguridad y reducen la fricción durante el checkout.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuántos productos debo publicar para empezar a vender con dropshipping?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Es recomendable comenzar enfocado en 1 solo producto con alto potencial y una landing page optimizada para conversión. Publicar catálogos masivos de 50 o 100 productos dispersa el presupuesto de marketing, empeora la experiencia de usuario y dificulta la producción de contenido publicitario de calidad.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuál es la diferencia entre crear una tienda dropshipping y construir un negocio ecommerce?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Crear una tienda dropshipping consiste en importar un catálogo e instalar una plataforma de ventas. Construir un negocio ecommerce implica diseñar una estrategia integral de validación de mercado, posicionamiento de marca, ofertas persuasivas, optimización continua de la conversión (CRO) y pauta publicitaria analítica.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <article className="bg-white min-h-screen">
        {/* Article Header */}
        <header className="relative pt-32 pb-16 bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-brand-purple/20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-6 relative z-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-bold text-sm mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Volver al blog
            </Link>

            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="px-3.5 py-1 bg-brand-purple/30 text-purple-300 border border-purple-500/30 text-xs font-extrabold rounded-full uppercase tracking-wider">
                  Shopify Chile & CRO
                </span>
                <span className="text-slate-600">•</span>
                <div className="flex items-center gap-1.5 text-slate-400 text-sm font-medium">
                  <Clock className="w-4 h-4 text-brand-purple" />
                  <span>10 min lectura</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-8 leading-tight">
                Por qué Shopify + Dropi no Garantizan Ventas: La Guía Estratégica para Crear un Ecommerce Rentable en Chile
              </h1>

              <div className="flex items-center gap-6 pt-4 border-t border-slate-800 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-purple flex items-center justify-center text-white font-black text-lg">
                    W
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Equipo Estratégico Webunica</div>
                    <div className="text-xs text-slate-400 font-medium">Especialistas en Ecommerce & CRO Chile</div>
                  </div>
                </div>
                <div className="h-10 w-px bg-slate-800 hidden sm:block" />
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-widest">Publicado</span>
                  <span className="text-sm font-bold text-slate-300">11 de Agosto, 2026</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Highlight Banner / Formula Box */}
        <section className="container mx-auto px-6 -mt-8 relative z-20">
          <div className="max-w-4xl bg-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center text-brand-purple shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">La Ecuación Real del Éxito Ecommerce</h3>
                <div className="my-3 p-4 bg-slate-900 rounded-xl border border-slate-700 text-center font-mono font-bold text-purple-300 text-sm md:text-base overflow-x-auto">
                  Éxito Comercial = Producto × Oferta × Creatividad × Tráfico × CRO × Operación
                </div>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                  Si cualquiera de estas variables es igual a cero, el resultado final de ventas será cero, independientemente de la calidad de la plataforma tecnológica instalada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Body Grid */}
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 py-16">
          {/* Left Social Links */}
          <aside className="lg:w-16 lg:sticky lg:top-32 h-fit flex lg:flex-col gap-3">
            <button aria-label="Compartir en web" className="w-11 h-11 rounded-2xl bg-slate-50 text-slate-500 hover:bg-brand-purple hover:text-white transition-all flex items-center justify-center border border-slate-200 shadow-sm">
              <Globe className="w-5 h-5" />
            </button>
            <button aria-label="Compartir enlace" className="w-11 h-11 rounded-2xl bg-slate-50 text-slate-500 hover:bg-brand-purple hover:text-white transition-all flex items-center justify-center border border-slate-200 shadow-sm">
              <Share2 className="w-5 h-5" />
            </button>
            <button aria-label="Copiar link" className="w-11 h-11 rounded-2xl bg-slate-50 text-slate-500 hover:bg-brand-purple hover:text-white transition-all flex items-center justify-center border border-slate-200 shadow-sm">
              <LinkIcon className="w-5 h-5" />
            </button>
          </aside>

          {/* Center Article Content */}
          <div className="flex-1 max-w-4xl space-y-12">
            <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
              <p className="text-xl text-slate-700 font-medium leading-relaxed">
                El comercio electrónico en Chile vive una etapa de aceleración. La democratización de herramientas como <strong>Shopify</strong> y <strong>Dropi Chile</strong> permite a cualquier empresa o emprendedor lanzar una tienda online en pocas horas.
              </p>
              <p>
                Sin embargo, en <strong>Webunica</strong> observamos un patrón recurrente: proyectos técnicamente impecables —con catálogo sincronizado, pasarelas de pago locales y dominio activo— que <strong>no consiguen generar ventas</strong>.
              </p>
              <p>
                La razón es directa: <strong>la tecnología es infraestructura; no es el negocio.</strong> Pensar que implementar Shopify y conectar Dropi equivale a tener un negocio rentable es una trampa común. En esta guía abordamos el <strong>Shopify dropshipping Chile</strong> desde una perspectiva profesional, estratégica y realista.
              </p>
            </div>

            {/* Section 1 */}
            <section id="error-tienda-negocio" className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight pt-6 border-t border-slate-200">
                1. El error de pensar que la tienda es el negocio
              </h2>
              <p className="text-slate-600 leading-relaxed">
                El lanzamiento de una tienda online suele generar una falsa sensación de logro. Al configurar el theme en Shopify, integrar Dropi, activar Webpay o Mercado Pago y vincular el dominio <code className="bg-slate-100 px-2 py-0.5 rounded text-brand-purple font-mono font-semibold">.cl</code>, se asume erróneamente que la etapa compleja ha terminado.
              </p>
              <p className="text-slate-600 leading-relaxed font-semibold text-slate-900">
                En realidad, en ese instante el negocio apenas comienza.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Shopify, Dropi, pasarelas de pago y dominio son <strong>infraestructura</strong>. Equivalen a alquilar un local comercial, pintar las paredes y poner un letrero en una calle desierta. Una tienda técnicamente perfecta puede recibir cientos de visitas y mantener su conversión en <span className="font-bold text-red-600">0%</span>.
              </p>
              <div className="bg-slate-50 border-l-4 border-brand-purple p-6 rounded-r-2xl my-6">
                <h4 className="font-bold text-slate-900 mb-2">Las 3 Preguntas Comerciales Críticas:</h4>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple mt-0.5 shrink-0" />
                    <span>¿Qué problema concreto resolvemos y a qué segmento específico en Chile?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple mt-0.5 shrink-0" />
                    <span>¿Por qué nuestra propuesta es superior a las alternativas existentes en el mercado?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-purple mt-0.5 shrink-0" />
                    <span>¿Cuánto cuesta atraer a ese cliente y convencerlo de comprar?</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 2 */}
            <section id="seleccion-validacion-producto" className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight pt-6 border-t border-slate-200">
                2. Selección y validación del producto: El filtro de competitividad
              </h2>
              <p className="text-slate-600 leading-relaxed">
                El catálogo de Dropi ofrece miles de productos listos para importar. Sin embargo, cuando cualquiera puede importar el mismo producto en segundos, <strong>la disponibilidad inmediata deja de ser una ventaja competitiva</strong>.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 text-brand-purple">Filtros de Análisis:</h4>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                    <li><strong>Demanda real:</strong> Búsquedas e interés activo.</li>
                    <li><strong>Competencia:</strong> Anunciantes pautando por el mismo ítem.</li>
                    <li><strong>Margen & Unit Economics:</strong> Margen para absorber publicidad (CAC).</li>
                    <li><strong>Costo de pauta:</strong> Ticket apropiado para Meta Ads o TikTok.</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 text-brand-purple">Viabilidad Operativa:</h4>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4">
                    <li><strong>Diferenciación:</strong> Factor innovador vs retail local.</li>
                    <li><strong>Despacho:</strong> Tiempos competitivos en Santiago y regiones.</li>
                    <li><strong>Potencial en video:</strong> Demostrable en menos de 3 segundos.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 my-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-amber-900 text-sm mb-1">La pregunta estratégica para el mercado chileno</h4>
                    <p className="text-xs md:text-sm text-amber-800 leading-relaxed italic">
                      "¿Por qué un consumidor en Chile compraría este producto en mi tienda Shopify y esperaría por el envío, en lugar de adquirirlo en Mercado Libre (con entrega Full en 24h), Temu, AliExpress o un retail local?"
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="construccion-de-oferta" className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight pt-6 border-t border-slate-200">
                3. Construcción de una oferta (No vendas solo un producto)
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Vender un producto consiste en publicar la foto y descripción técnica por defecto de Dropi. Construir una oferta significa diseñar una propuesta de valor que justifique la compra inmediata.
              </p>
              <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200 text-center font-semibold text-brand-purple my-4">
                Oferta = Problema + Solución + Beneficios + Demostración + Prueba Social + Garantía + Precio Anclado + CTA
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="p-6 bg-red-50/50 border border-red-200 rounded-2xl">
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-2">Enfoque Tradicional / Bajo Impacto</span>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">Vender un producto:</h4>
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    "Mini Aspiradora Portátil Inalámbrica. Batería de 2000mAh. Incluye 2 boquillas. Precio: $19.990."
                  </p>
                </div>
                <div className="p-6 bg-emerald-50/50 border border-emerald-200 rounded-2xl">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-2">Enfoque CRO & Direct Response</span>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">Construir una Oferta:</h4>
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    "Kit Limpieza Pro-Drive: Elimina migas y polvo de tu auto en 2 minutos sin cables. Incluye Mini Aspiradora Ultra-Succión + 3 Cabezales + Cepillo Microfibra de Regalo. Garantía de 30 días y Envío Exprés a todo Chile. Hoy 35% OFF: $24.990 (Antes $38.490)."
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="diseno-confianza-chile" className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight pt-6 border-t border-slate-200">
                4. Diseño, confianza y contexto local en Chile
              </h2>
              <p className="text-slate-600 leading-relaxed">
                El consumidor chileno es cauto e informado. Ha desarrollado prevención ante fraudes en internet. Una tienda con un theme genérico o textos mal traducidos destruye la tasa de conversión.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Para generar confianza en el <strong>ecommerce Chile</strong>, tu sitio debe incorporar diseño <em>mobile-first</em> (más del 85% del tráfico proviene de smartphones) y validación local:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-slate-700 my-6">
                <li className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Webpay & Mercado Pago:</strong> Redcompra, Débito, CuentaRUT.</span>
                </li>
                <li className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Despachos Claros:</strong> Blue Express, Starken, Chilexpress.</span>
                </li>
                <li className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Políticas SERNAC:</strong> Cambios y garantías transparentes.</span>
                </li>
                <li className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Atención Local:</strong> Razón Social y WhatsApp visible.</span>
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="creatividades-publicitarias" className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight pt-6 border-t border-slate-200">
                5. El papel fundamental de las creatividades publicitarias
              </h2>
              <p className="text-slate-600 leading-relaxed">
                En el <strong>marketing dropshipping</strong>, la portada de tu negocio no es la home de la tienda, sino el anuncio en redes sociales. Si el contenido no capta la atención en los primeros 2 segundos de scroll en Instagram o TikTok, la tienda jamás recibirá la visita.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Usar los videos genéricos de Dropi es un error grave. Al ser compartidos por cientos de anunciantes, generan fatiga publicitaria inmediata.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="font-bold text-slate-900 text-sm block mb-1 text-brand-purple">Videos UGC (9:16)</span>
                  <p className="text-xs text-slate-600">Grabaciones auténticas de personas reales en smartphone probando el producto en situaciones reales.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="font-bold text-slate-900 text-sm block mb-1 text-brand-purple">Demostración Problema/Solución</span>
                  <p className="text-xs text-slate-600">Primeros 3 segundos mostrando el problema frustrante e introduciendo el remedio inmediato.</p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="marketing-embudo-ventas" className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight pt-6 border-t border-slate-200">
                6. Marketing y adquisición de clientes: El embudo de ventas
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Lanzar anuncios en Meta Ads o TikTok Ads sin comprender el embudo publicitario deriva en pérdidas de presupuesto. El marketing de rendimiento exige interpretar cada métrica para diagnosticar la salud del negocio.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 my-6">
                <table className="w-full text-left text-xs md:text-sm text-slate-700">
                  <thead className="bg-slate-100 font-bold text-slate-900">
                    <tr>
                      <th className="p-3">Métrica</th>
                      <th className="p-3">Definición</th>
                      <th className="p-3">Diagnóstico de Falla</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-3 font-semibold">Impresiones</td>
                      <td className="p-3">Exposición del anuncio</td>
                      <td className="p-3 text-slate-500">Presupuesto bajo o audiencia acotada</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-brand-purple">CTR</td>
                      <td className="p-3">Porcentaje de clics sobre impresiones</td>
                      <td className="p-3 text-red-600 font-medium">Si es &lt; 1,5%, el anuncio o gancho son débiles</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">CPC</td>
                      <td className="p-3">Costo unitario por visitante</td>
                      <td className="p-3 text-slate-500">Refleja la relevancia ante la audiencia</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-brand-purple">Add to Cart</td>
                      <td className="p-3">Intención de compra en tienda</td>
                      <td className="p-3 text-red-600 font-medium">Si es &lt; 3%, el producto, precio u oferta fallan</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Initiate Checkout</td>
                      <td className="p-3">Inicio del proceso de pago</td>
                      <td className="p-3 text-slate-500">Caídas indican dudas con envíos o desconfianza</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-emerald-700">CAC & ROAS</td>
                      <td className="p-3">Costo de adquisición e Inversión</td>
                      <td className="p-3 text-slate-500">Miden la rentabilidad directa del negocio</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7 */}
            <section id="cro-diagnostico-tecnico" className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight pt-6 border-t border-slate-200">
                7. CRO y análisis de comportamiento: Diagnóstico técnico
              </h2>
              <p className="text-slate-600 leading-relaxed">
                El <strong>CRO (Conversion Rate Optimization)</strong> analiza datos de navegación para eliminar barreras de compra. Evaluamos tres escenarios comunes en tiendas <strong>Shopify y Dropi</strong>:
              </p>
              <div className="space-y-4 my-6">
                <div className="p-4 bg-slate-50 border-l-4 border-amber-500 rounded-r-2xl">
                  <h4 className="font-bold text-slate-900 text-sm">Escenario 1: Tráfico constante pero nadie agrega al carrito</h4>
                  <p className="text-xs text-slate-600 mt-1">Desconexión entre anuncio y tienda, precio fuera de mercado o falta de beneficios claros. Solución: reestructurar la landing centrándola en la oferta.</p>
                </div>
                <div className="p-4 bg-slate-50 border-l-4 border-amber-500 rounded-r-2xl">
                  <h4 className="font-bold text-slate-900 text-sm">Escenario 2: Muchos agregan al carrito pero abandonan antes del checkout</h4>
                  <p className="text-xs text-slate-600 mt-1">Sorpresas negativas con los costos de envío al final del flujo. Solución: transparentar costos desde el inicio o fijar umbrales de envío gratis.</p>
                </div>
                <div className="p-4 bg-slate-50 border-l-4 border-amber-500 rounded-r-2xl">
                  <h4 className="font-bold text-slate-900 text-sm">Escenario 3: Muchos inician checkout pero no concretan el pago</h4>
                  <p className="text-xs text-slate-600 mt-1">Falta de pasarelas chilenas locales (Webpay, Mercado Pago), formularios extensos o desconfianza. Solución: integrar medios de pago reconocidos.</p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="estrategia-mono-producto" className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight pt-6 border-t border-slate-200">
                8. Por qué comenzar con pocos productos
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Importar 50 o 100 productos a un sitio antes de validar la demanda es ineficiente. Las tiendas multicategoría sin concepto definido dispersan la atención del visitante y dificultan la producción de contenido de calidad.
              </p>
              <div className="p-6 bg-slate-900 text-white rounded-3xl my-6">
                <h4 className="text-lg font-bold text-brand-purple mb-2">La Estrategia de Validación Enfocada:</h4>
                <div className="text-center font-mono font-bold text-emerald-400 my-4 text-sm md:text-base">
                  1 Producto Candidato + 1 Landing Page Optimizada + Variaciones de Oferta + 10+ Creatividades + Pauta Controlada
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Centrar los esfuerzos en un solo producto permite destinar el presupuesto a validar la tracción comercial real. Si responde positivamente, se escala; de lo contrario, se pivota rápidamente minimizando pérdidas.
                </p>
              </div>
            </section>

            {/* Section 9 */}
            <section id="metodo-validacion-6-fases" className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight pt-6 border-t border-slate-200">
                9. Un método de validación en 6 fases
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Para guiar la creación de un ecommerce sobre bases sólidas, en <strong>Webunica</strong> aplicamos un modelo de trabajo estructurado en 6 fases:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-xs font-black text-brand-purple uppercase">Fase 1</span>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Validación de Mercado</h4>
                  <p className="text-xs text-slate-500">Investigación de competencia local, demanda, márgenes y proveedor en Dropi Chile.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-xs font-black text-brand-purple uppercase">Fase 2</span>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Construcción de Marca</h4>
                  <p className="text-xs text-slate-500">Naming, dominio .cl, línea gráfica y posicionamiento en el mercado.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-xs font-black text-brand-purple uppercase">Fase 3</span>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Tienda Orientada a CRO</h4>
                  <p className="text-xs text-slate-500">Shopify + Dropi con velocidad optimizada, pasarelas locales y métricas (Pixel, GA4).</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-xs font-black text-brand-purple uppercase">Fase 4</span>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Producción de Contenido</h4>
                  <p className="text-xs text-slate-500">Guionización y edición de videos UGC y piezas adaptadas a redes sociales.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-xs font-black text-brand-purple uppercase">Fase 5</span>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Validación Publicitaria</h4>
                  <p className="text-xs text-slate-500">Campañas de prueba con presupuesto acotado para medir CTR, CPC, Add to Cart y CAC.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-xs font-black text-brand-purple uppercase">Fase 6</span>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Optimización & Escalado</h4>
                  <p className="text-xs text-slate-500">Análisis de datos para tomar decisiones informadas: Escalar, Modificar o Abandonar.</p>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section id="conclusion" className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight pt-6 border-t border-slate-200">
                10. Conclusión: Construye un negocio ecommerce rentable
              </h2>
              <p className="text-slate-600 leading-relaxed">
                El dropshipping con <strong>Shopify y Dropi</strong> es un modelo logístico funcional que permite operar sin almacenar inventarios iniciales. No obstante, <strong>Shopify y Dropi solucionan únicamente la infraestructura</strong>.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Ninguna herramienta resolverá por sí sola qué productos seleccionar, cómo estructurar una oferta inigualable, cómo captar la atención mediante creatividades o cómo gestionar los costos de adquisición para asegurar rentabilidad.
              </p>
              <div className="bg-slate-900 text-white p-8 rounded-3xl text-center shadow-xl my-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/20 rounded-full blur-2xl pointer-events-none" />
                <p className="text-lg md:text-xl font-bold italic text-purple-200 relative z-10">
                  "El objetivo no debería ser crear una tienda dropshipping. El objetivo debería ser construir y validar un negocio ecommerce rentable."
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq-seo" className="space-y-6 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-3 mb-2">
                <HelpCircle className="w-6 h-6 text-brand-purple" />
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Preguntas Frecuentes (FAQs SEO)</h3>
              </div>

              <div className="space-y-4">
                <details className="group bg-slate-50 p-5 rounded-2xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                  <summary className="font-bold text-slate-900 text-sm md:text-base flex items-center justify-between">
                    <span>1. ¿Es rentable hacer dropshipping con Shopify y Dropi en Chile?</span>
                    <span className="text-brand-purple font-black text-lg group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                    Sí, el dropshipping en Chile puede ser rentable, pero su éxito depende de la estrategia comercial. La rentabilidad se logra seleccionando productos con buen margen, creando ofertas atractivas, produciendo creatividades publicitarias efectivas (UGC) y manteniendo un costo de adquisición (CAC) inferior al margen bruto.
                  </p>
                </details>

                <details className="group bg-slate-50 p-5 rounded-2xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                  <summary className="font-bold text-slate-900 text-sm md:text-base flex items-center justify-between">
                    <span>2. ¿Por qué mi tienda Shopify conectada a Dropi no genera ventas si tiene visitas?</span>
                    <span className="text-brand-purple font-black text-lg group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                    Si tu tienda recibe visitas pero no convierte, el problema suele ser la falta de confianza (ausencia de pasarelas locales como Webpay o Mercado Pago, opiniones reales o datos de contacto), precios desalineados con el mercado chileno, costos de envío ocultos al final del flujo o una landing page que no cumple la promesa del anuncio.
                  </p>
                </details>

                <details className="group bg-slate-50 p-5 rounded-2xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                  <summary className="font-bold text-slate-900 text-sm md:text-base flex items-center justify-between">
                    <span>3. ¿Qué pasarelas de pago son indispensables para un ecommerce en Chile?</span>
                    <span className="text-brand-purple font-black text-lg group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                    En Chile es fundamental ofrecer pasarelas de pago locales reconocidas como Webpay Plus (Transbank), Mercado Pago y alternativas con tarjeta de débito o CuentaRUT. Las pasarelas locales transmiten seguridad y reducen la fricción durante el checkout.
                  </p>
                </details>

                <details className="group bg-slate-50 p-5 rounded-2xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                  <summary className="font-bold text-slate-900 text-sm md:text-base flex items-center justify-between">
                    <span>4. ¿Cuántos productos debo publicar para empezar a vender con dropshipping?</span>
                    <span className="text-brand-purple font-black text-lg group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                    Es recomendable comenzar enfocado en 1 solo producto con alto potencial y una landing page optimizada para conversión. Publicar catálogos masivos de 50 o 100 productos dispersa el presupuesto de marketing, empeora la experiencia de usuario y dificulta la producción de contenido publicitario de calidad.
                  </p>
                </details>

                <details className="group bg-slate-50 p-5 rounded-2xl border border-slate-200 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                  <summary className="font-bold text-slate-900 text-sm md:text-base flex items-center justify-between">
                    <span>5. ¿Cuál es la diferencia entre crear una tienda dropshipping y construir un negocio ecommerce?</span>
                    <span className="text-brand-purple font-black text-lg group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-xs md:text-sm text-slate-600 leading-relaxed">
                    Crear una tienda dropshipping consiste en importar un catálogo e instalar una plataforma de ventas. Construir un negocio ecommerce implica diseñar una estrategia integral de validación de mercado, posicionamiento de marca, ofertas persuasivas, optimización continua de la conversión (CRO) y pauta publicitaria analítica.
                  </p>
                </details>
              </div>
            </section>
          </div>

          {/* Right Sidebar Lead CTA */}
          <aside className="lg:w-80 lg:sticky lg:top-32 h-fit space-y-8">
            <div className="bg-brand-purple rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-brand-purple/20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none" />
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black tracking-tight mb-3 relative z-10">¿Necesitas más que una tienda online?</h3>
              <p className="text-white/80 text-xs md:text-sm font-medium leading-relaxed mb-6 relative z-10">
                En Webunica acompañamos a emprendedores y empresas en Chile a diseñar, validar y optimizar ecommerce rentables en Shopify.
              </p>
              <LeadButton className="w-full bg-white text-brand-purple font-black rounded-2xl py-4 transition-all hover:scale-105 active:scale-95 shadow-lg relative z-10 uppercase tracking-widest text-xs">
                Cotizar Mi Proyecto
              </LeadButton>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
