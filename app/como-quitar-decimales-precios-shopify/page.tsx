import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Store,
  Layers,
  Sparkles,
  ChevronRight,
  RefreshCw,
  ShoppingBag,
  ExternalLink,
  Code2,
  Search,
  Check,
  Eye
} from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import { FormatCodeTable, FaqSection, CopyButton } from './client-components';

export const metadata: Metadata = {
  title: 'Cómo quitar decimales en Shopify y usar formato chileno | Webunica',
  description: 'Aprende a configurar los precios de Shopify sin decimales, con punto de miles y en pesos chilenos. Guía paso a paso para tiendas Shopify en Chile.',
  alternates: {
    canonical: 'https://webunica.cl/como-quitar-decimales-precios-shopify',
  },
  keywords: [
    'quitar decimales en Shopify',
    'formato moneda Shopify Chile',
    'precios Shopify sin decimales',
    'configurar CLP en Shopify',
    'cambiar formato de moneda Shopify',
    'como mostrar $25.000 en Shopify',
    'Shopify CLP sin decimales',
    'punto separador de miles Shopify',
    'configuracion moneda Shopify Chile',
    'soporte Shopify Chile'
  ],
  openGraph: {
    title: 'Cómo quitar decimales en Shopify y usar formato chileno | Webunica',
    description: 'Guía práctica para configurar precios en Shopify con formato de peso chileno: sin decimales, con punto de miles y optimizado para el mercado local.',
    url: 'https://webunica.cl/como-quitar-decimales-precios-shopify',
    siteName: 'Webunica',
    locale: 'es_CL',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cómo quitar decimales en Shopify y usar formato chileno',
    description: 'Aprende a configurar precios en Shopify sin decimales y con punto de miles para Chile.',
  },
};

export default function ComoQuitarDecimalesShopifyPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cómo quitar los decimales en Shopify y mostrar los precios en formato chileno",
    "description": "Guía técnica para configurar precios en Shopify con formato de peso chileno: sin decimales, con punto de miles y adaptado a tiendas online en Chile.",
    "inLanguage": "es-CL",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://webunica.cl/como-quitar-decimales-precios-shopify"
    },
    "author": {
      "@type": "Organization",
      "name": "Webunica",
      "url": "https://webunica.cl"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Webunica",
      "url": "https://webunica.cl",
      "logo": {
        "@type": "ImageObject",
        "url": "https://webunica.cl/logo-webunica.png.webp"
      }
    },
    "datePublished": "2026-03-01T08:00:00-03:00",
    "dateModified": "2026-03-01T08:00:00-03:00"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cómo eliminar los decimales de los precios en Shopify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ingresa a Configuración > Detalles de la tienda > Moneda de la tienda, presiona Cambiar formato y reemplaza los códigos estándar por ${{amount_no_decimals_with_comma_separator}}."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo colocar un punto como separador de miles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El código ${{amount_no_decimals_with_comma_separator}} en tiendas configuradas en CLP asigna automáticamente el punto como separador de miles y descarta los decimales."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo mostrar los precios en pesos chilenos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Configura la moneda de la tienda en CLP - Peso chileno y aplica las variables de formato monetario sin decimales en los cuatro campos de HTML y notificaciones por correo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Es mejor mostrar $25.000 o $25.000 CLP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Si tu tienda vende únicamente en Chile, el formato $25.000 es más limpio y familiar. Si recibes tráfico internacional o usas Shopify Markets, mostrar $25.000 CLP evita confusiones con otras divisas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Este cambio modifica el precio de los productos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Solo modifica la representación visual en la tienda. Los precios reales en la base de datos, los cobros y los impuestos no sufren ninguna alteración."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué el cambio no aparece en toda la tienda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Puede deberse a funciones JavaScript del tema, fragmentos Liquid con formato fijo o aplicaciones de divisas y descuentos que sobreescriben la configuración global."
        }
      },
      {
        "@type": "Question",
        "name": "¿Puede una aplicación modificar nuevamente el formato?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Las aplicaciones de conversión de moneda o descuentos automáticos pueden requerir configuración manual interna para respetar el formato chileno."
        }
      },
      {
        "@type": "Question",
        "name": "¿Debo revisar también los correos y el checkout?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Es necesario actualizar los campos de correo y realizar una compra de prueba para confirmar la consistencia en todas las etapas del proceso."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://webunica.cl"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Recursos",
        "item": "https://webunica.cl/recursos"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Cómo quitar decimales en Shopify",
        "item": "https://webunica.cl/como-quitar-decimales-precios-shopify"
      }
    ]
  };

  const faqItems = [
    {
      question: "¿Cómo eliminar los decimales de los precios en Shopify?",
      answer: "Ingresa a Configuración > Detalles de la tienda > Moneda de la tienda, haz clic en Cambiar formato y reemplaza el código por ${{amount_no_decimals_with_comma_separator}} en los cuatro campos disponibles."
    },
    {
      question: "¿Cómo colocar un punto como separador de miles?",
      answer: "En tiendas con moneda CLP, el filtro Liquid ${{amount_no_decimals_with_comma_separator}} asigna automáticamente el punto (.) como separador de miles e inhabilita los centavos decimales."
    },
    {
      question: "¿Cómo mostrar los precios en pesos chilenos?",
      answer: "Verifica que la divisa principal de la tienda sea CLP (Peso chileno) en Configuración > Detalles de la tienda y aplica las etiquetas de formato sin decimales tanto para HTML como para correos electrónicos."
    },
    {
      question: "¿Es mejor mostrar $25.000 o $25.000 CLP?",
      answer: "Para tiendas enfocadas 100% en clientes chilenos, '$25.000' es más limpio y natural. Si vendes internacionalmente o usas Shopify Markets, '$25.000 CLP' ayuda a que visitantes extranjeros no confundan el precio con dólares."
    },
    {
      question: "¿Este cambio modifica el precio de los productos?",
      answer: "No. Solo cambia la presentación gráfica en pantalla. Los precios reales en la base de datos, los cobros de pasarelas de pago y los cálculos tributarios (IVA) se mantienen exactamente iguales."
    },
    {
      question: "¿Por qué el cambio no aparece en toda la tienda?",
      answer: "Si algunas partes siguen con decimales, suele deberse a la caché del navegador, fragmentos Liquid del tema con formato rígido (| money) o scripts de aplicaciones de ventas cruzadas o divisas."
    },
    {
      question: "¿Puede una aplicación modificar nuevamente el formato?",
      answer: "Sí. Ciertas aplicaciones de bundles, volumen de compra o conversión de divisas inyectan su propio código JavaScript y deben ajustarse desde la configuración propia de la app."
    },
    {
      question: "¿Debo revisar también los correos y el checkout?",
      answer: "Sí. Es indispensable actualizar las casillas de correo con y sin moneda, y realizar una compra de prueba para constatar que las notificaciones al comprador muestren el formato correcto."
    }
  ];

  const stepsList = [
    {
      num: "01",
      title: "Ingresar al panel de Shopify",
      desc: "Accede con tu usuario de administrador a tu tienda Shopify desde tu navegador habitual."
    },
    {
      num: "02",
      title: "Ir a Configuración",
      desc: "Haz clic en el icono de engranaje 'Configuración' (Settings), ubicado en la esquina inferior izquierda."
    },
    {
      num: "03",
      title: "Entrar en 'Detalles de la tienda'",
      desc: "En el menú lateral de configuración, selecciona la pestaña 'Detalles de la tienda' (Store details)."
    },
    {
      num: "04",
      title: "Localizar la sección de moneda",
      desc: "Desplázate hacia abajo hasta ubicar la sección 'Moneda de la tienda' (Store currency)."
    },
    {
      num: "05",
      title: "Presionar 'Cambiar formato'",
      desc: "Haz clic en el enlace 'Cambiar formato' (Change formatting) situado junto a la divisa configurada."
    },
    {
      num: "06",
      title: "Reemplazar los formatos existentes",
      desc: "Pega en cada casilla los códigos oficiales para Chile indicados en la tabla de abajo."
    },
    {
      num: "07",
      title: "Guardar los cambios",
      desc: "Haz clic en el botón 'Guardar' (Save) en la barra superior para aplicar la nueva configuración."
    },
    {
      num: "08",
      title: "Revisar en vivo tienda y carrito",
      desc: "Abre una ventana de incógnito y navega por el catálogo, ficha de producto, carrito y buscador."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans pt-[18vh] lg:pt-36 pb-24 overflow-hidden selection:bg-blue-600 selection:text-white">
      {/* Schema JSON-LD Injections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-5xl mx-auto px-6">
        {/* Breadcrumb visual navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
            <li>
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Inicio
              </Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5 text-zinc-600" /></li>
            <li>
              <Link href="/recursos" className="hover:text-blue-400 transition-colors">
                Recursos
              </Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5 text-zinc-600" /></li>
            <li className="text-zinc-300 font-semibold truncate">
              Quitar decimales Shopify Chile
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3.5 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Guía Shopify Chile
            </span>
            <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-medium rounded-full">
              Actualizado 2026
            </span>
            <span className="text-xs text-zinc-400">
              Lectura: 6 min
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-6">
            Cómo quitar los decimales en Shopify y mostrar los precios en formato chileno
          </h1>

          <p className="text-lg lg:text-xl text-zinc-300 font-light leading-relaxed mb-8">
            Al crear o administrar una tienda Shopify en Chile, es muy común que los precios aparezcan con comas estilo anglosajón o con dos ceros decimales que no corresponden a nuestra moneda. Aprende a corregir este detalle en pocos minutos para transmitir seriedad, evitar confusiones y mejorar la tasa de conversión de tu ecommerce.
          </p>

          {/* Visual comparison box */}
          <div className="bg-zinc-900/90 border border-zinc-800/90 rounded-3xl p-6 lg:p-8 shadow-2xl backdrop-blur-sm">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
              <Eye className="w-4 h-4 text-blue-400" /> Comparativa de Formato de Precios
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-rose-950/20 border border-rose-500/20 rounded-2xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-bold mb-2">
                    <XCircle className="w-4 h-4" /> Formato incorrecto
                  </div>
                  <div className="text-2xl font-black text-rose-200 tracking-tight font-mono">$25,000</div>
                </div>
                <p className="text-[11px] text-zinc-400 mt-2">Usa coma anglosajona como separador de miles.</p>
              </div>

              <div className="bg-rose-950/20 border border-rose-500/20 rounded-2xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-bold mb-2">
                    <XCircle className="w-4 h-4" /> Formato incorrecto
                  </div>
                  <div className="text-2xl font-black text-rose-200 tracking-tight font-mono">$25.000,00</div>
                </div>
                <p className="text-[11px] text-zinc-400 mt-2">Muestra centavos innecesarios para el peso chileno.</p>
              </div>

              <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-2xl p-4 flex flex-col justify-between shadow-lg shadow-emerald-500/5">
                <div>
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-2">
                    <CheckCircle2 className="w-4 h-4" /> Formato correcto Chile
                  </div>
                  <div className="text-2xl font-black text-emerald-300 tracking-tight font-mono">$25.000</div>
                </div>
                <p className="text-[11px] text-zinc-300 mt-2">Punto de miles y sin decimales. Limpio para ventas locales.</p>
              </div>

              <div className="bg-blue-950/30 border border-blue-500/30 rounded-2xl p-4 flex flex-col justify-between shadow-lg shadow-blue-500/5">
                <div>
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-bold mb-2">
                    <CheckCircle2 className="w-4 h-4" /> Con moneda (CLP)
                  </div>
                  <div className="text-2xl font-black text-blue-300 tracking-tight font-mono">$25.000 CLP</div>
                </div>
                <p className="text-[11px] text-zinc-300 mt-2">Ideal para tiendas con tráfico internacional o Shopify Markets.</p>
              </div>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="space-y-16">
          {/* Section 1 */}
          <section className="space-y-6">
            <div className="border-l-2 border-blue-500 pl-4">
              <h2 className="text-2xl lg:text-3xl font-black text-white tracking-tight">
                ¿Por qué Shopify muestra precios con comas o decimales?
              </h2>
            </div>
            
            <p className="text-zinc-300 leading-relaxed font-light">
              Shopify es una plataforma de alcance mundial. Por defecto, cuando seleccionas una moneda internacional o cuando instalas ciertos temas creados por desarrolladores anglosajones, la configuración aplica las reglas numéricas de Estados Unidos (donde la coma separa miles y el punto separa centavos: <code className="text-blue-300 bg-zinc-900 px-1.5 py-0.5 rounded">$25,000.00</code>).
            </p>

            <p className="text-zinc-300 leading-relaxed font-light">
              En el día a día de una tienda online, la visualización de los precios depende de los siguientes factores:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">01</div>
                  <h4 className="text-white font-bold text-sm">Configuración de moneda de la tienda</h4>
                </div>
                <p className="text-zinc-400 text-xs font-light">La divisa seleccionada en el panel (CLP - Peso chileno).</p>
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">02</div>
                  <h4 className="text-white font-bold text-sm">El formato monetario configurado</h4>
                </div>
                <p className="text-zinc-400 text-xs font-light">Las variables y filtros Liquid asignados a HTML y notificaciones por correo.</p>
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">03</div>
                  <h4 className="text-white font-bold text-sm">La plantilla o tema instalado</h4>
                </div>
                <p className="text-zinc-400 text-xs font-light">Temas con scripts propios de formateo que pueden alterar el comportamiento nativo.</p>
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">04</div>
                  <h4 className="text-white font-bold text-sm">Aplicaciones que modifican los precios</h4>
                </div>
                <p className="text-zinc-400 text-xs font-light">Apps de bundles, descuentos por volumen o multimoneda con renderizado propio.</p>
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">05</div>
                  <h4 className="text-white font-bold text-sm">Código Liquid personalizado</h4>
                </div>
                <p className="text-zinc-400 text-xs font-light">Modificaciones directas en archivos como <code>price.liquid</code> o <code>main-product.liquid</code>.</p>
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xs">06</div>
                  <h4 className="text-white font-bold text-sm">Configuración de Shopify Markets</h4>
                </div>
                <p className="text-zinc-400 text-xs font-light">Reglas regionales de redondeo de precios aplicadas por mercado geográfico.</p>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-zinc-300 font-light leading-relaxed">
                <strong className="text-white font-semibold block mb-1">Tranquilidad para tu contabilidad:</strong>
                Cambiar el formato visual de la moneda <strong>no modifica el precio real</strong> registrado en tus productos, no afecta los impuestos ni cambia el monto que procesan tus <Link href="/comisiones-plataformas-de-pago-para-shopify-chile" className="text-blue-400 underline hover:text-blue-300">pasarelas de pago chilenas</Link>. Es exclusivamente una regla estética de visualización para el cliente.
              </div>
            </div>
          </section>

          {/* Section 2: Step-by-step Guide */}
          <section className="space-y-8">
            <div className="border-l-2 border-blue-500 pl-4">
              <h2 className="text-2xl lg:text-3xl font-black text-white tracking-tight">
                Cómo configurar los precios de Shopify sin decimales
              </h2>
              <p className="text-sm text-zinc-400 mt-1">Guía paso a paso para aplicar el cambio en menos de 2 minutos.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stepsList.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-5 transition-all flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-black text-sm flex-shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-1 tracking-tight">{step.title}</h3>
                    <p className="text-zinc-400 text-xs font-light leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 text-xs text-amber-300 font-light flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 text-amber-400" />
              <span>
                <strong>Nota de interfaz:</strong> Los nombres y la ubicación de las opciones pueden variar ligeramente con el tiempo según las actualizaciones del panel de administración de Shopify o el idioma de tu cuenta.
              </span>
            </div>
          </section>

          {/* Section 3: Codes Table */}
          <section className="space-y-6">
            <div className="border-l-2 border-blue-500 pl-4">
              <h2 className="text-2xl lg:text-3xl font-black text-white tracking-tight">
                Códigos para usar el formato chileno
              </h2>
              <p className="text-sm text-zinc-400 mt-1">
                Haz clic en el botón <strong>&quot;Copiar&quot;</strong> en cada tarjeta y pégalo en el campo correspondiente en Shopify.
              </p>
            </div>

            <FormatCodeTable />

            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-white font-bold text-base flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-400" />
                ¿Por qué se usa el filtro &quot;with_comma_separator&quot;?
              </h3>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                Aunque la palabra en inglés mencione <em>comma separator</em>, en los estándares de localización de Shopify para monedas internacionales como el peso chileno (CLP), este filtro le indica al sistema que elimine los decimales y use el separador invertido oficial: <strong>el punto (.) para los miles</strong>.
              </p>

              <div className="bg-black/50 border border-zinc-800/80 rounded-xl p-4 space-y-2 text-xs font-mono">
                <div className="text-zinc-400">Ejemplo para un producto de veinticinco mil pesos:</div>
                <div className="text-emerald-400 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Sin moneda: <strong>$25.000</strong></span>
                </div>
                <div className="text-blue-400 flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-400" />
                  <span>Con moneda: <strong>$25.000 CLP</strong></span>
                </div>
              </div>

              <div className="text-xs text-zinc-400 italic">
                * Importante: No agregues llaves adicionales, espacios ni caracteres diferentes a los códigos indicados en la tabla para evitar errores de sintaxis en tu tema.
              </div>
            </div>
          </section>

          {/* Section 4: Is CLP necessary? */}
          <section className="space-y-6">
            <div className="border-l-2 border-blue-500 pl-4">
              <h2 className="text-2xl lg:text-3xl font-black text-white tracking-tight">
                ¿Conviene mostrar CLP después del precio?
              </h2>
            </div>

            <p className="text-zinc-300 leading-relaxed font-light">
              Ambas opciones son completamente válidas según el perfil de compradores de tu tienda:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
                <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold rounded-lg">
                  Opción 1: $25.000 (Sin CLP)
                </div>
                <h3 className="text-white font-bold text-lg">Más limpio y habitual en Chile</h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Es la alternativa preferida para comercios que venden <strong>únicamente en Chile</strong>. En dominios <code>.cl</code> o sitios donde toda la comunicación y medios de despacho son locales, el consumidor sabe de inmediato que se trata de pesos chilenos y el diseño luce más limpio.
                </p>
              </div>

              <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-3">
                <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold rounded-lg">
                  Opción 2: $25.000 CLP (Con CLP)
                </div>
                <h3 className="text-white font-bold text-lg">Recomendable para tráfico internacional</h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Si tu tienda recibe visitas desde otros países de la región o si utilizas <strong>Shopify Markets</strong> para exportar, añadir &quot;CLP&quot; disipa cualquier duda sobre si el precio está expresado en dólares estadounidenses u otra moneda.
                </p>
              </div>
            </div>

            <p className="text-xs text-zinc-400">
              * Recuerda: No es necesario forzar la palabra &quot;CLP&quot; en cada botón o banner si toda tu página deja en claro que los precios y despachos corresponden a Chile.
            </p>
          </section>

          {/* Section 5: Troubleshooting */}
          <section className="space-y-6">
            <div className="border-l-2 border-blue-500 pl-4">
              <h2 className="text-2xl lg:text-3xl font-black text-white tracking-tight">
                ¿Qué hacer si los precios siguen mostrando comas o decimales?
              </h2>
              <p className="text-sm text-zinc-400 mt-1">Lista de comprobaciones si el cambio no surtió efecto en toda la tienda.</p>
            </div>

            <p className="text-zinc-300 leading-relaxed font-light">
              Si ya guardaste los códigos pero continúas viendo formatos extraños, revisa los siguientes puntos de diagnóstico:
            </p>

            <div className="space-y-3">
              {[
                { title: "Limpiar la caché del navegador", desc: "Los estilos y scripts antiguos de la tienda pueden permanecer guardados en tu navegador." },
                { title: "Abrir la tienda en una ventana de incógnito", desc: "Permite ver la versión en vivo que experimenta un cliente nuevo sin cookies previas." },
                { title: "Revisar la configuración de Shopify Markets", desc: "Verifica que el mercado 'Chile' no tenga una regla de redondeo automático o conversión activa en Configuración > Mercados." },
                { title: "Verificar si existe un selector de monedas", desc: "Comprueba si un widget de divisas en el footer o header está forzando un formato de visualización ajeno." },
                { title: "Comprobar aplicaciones de precios y descuentos", desc: "Apps de volumen (Volume Discounts), Bundles o Upselling suelen inyectar su propio formato de precio vía JavaScript." },
                { title: "Revisar los archivos Liquid del tema", desc: "Inspecciona fragmentos como snippets/price.liquid para confirmar que no tengan filtros rígidos como | money en lugar del formato global." },
                { title: "Verificar el formato en tarjetas, carrito y buscador", desc: "Comprueba si el error ocurre solo en el carrito lateral (drawer cart), en el buscador predictivo o en las fichas." },
                { title: "Confirmar scripts de formateo en JavaScript", desc: "Verifica si archivos como theme.js o global.js contienen funciones tipo Shopify.formatMoney() con configuraciones fijas." },
              ].map((item, idx) => (
                <div key={idx} className="bg-zinc-900/50 border border-zinc-800/80 rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm font-semibold block">{item.title}</strong>
                    <span className="text-zinc-400 text-xs font-light">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-zinc-900 border-l-4 border-blue-500 p-4 rounded-r-xl text-xs text-zinc-300 font-light leading-relaxed">
              <strong>Diagnóstico clave:</strong> Si el cambio aparece correctamente en la ficha de producto pero no en el carrito o en las notificaciones, significa que el tema o una aplicación instalada está utilizando un formato propio que ignora la configuración general.
            </div>
          </section>

          {/* Section 6: Common Mistakes */}
          <section className="space-y-6">
            <div className="border-l-2 border-blue-500 pl-4">
              <h2 className="text-2xl lg:text-3xl font-black text-white tracking-tight">
                Errores frecuentes al cambiar el formato de moneda
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Eliminar accidentalmente el símbolo $",
                  desc: "Al pegar el código nuevo, olvidar el signo '$' hace que los precios se muestren como cifras desnudas (ejemplo: 25.000 en vez de $25.000)."
                },
                {
                  title: "Mostrar CLP dos veces",
                  desc: "Si tu tema ya añade la sigla de la moneda mediante código, colocar 'CLP' en la configuración generará textos redundantes como '$25.000 CLP CLP'."
                },
                {
                  title: "Cambiar el formato únicamente en la ficha de producto",
                  desc: "Modificar solo un archivo Liquid específico genera inconsistencias con el carrito, el buscador y las colecciones."
                },
                {
                  title: "Confundir el separador de miles con el decimal",
                  desc: "Usar filtros incorrectos que vuelven a mostrar comas o decimales ($25,000 o $25.000,00)."
                },
                {
                  title: "Modificar el precio real del producto",
                  desc: "Alterar el valor en el inventario para intentar compensar un problema puramente visual de la plantilla."
                },
                {
                  title: "No revisar correos, carrito, checkout y descuentos",
                  desc: "Dejar las notificaciones transaccionales automáticas con el formato por defecto en dólares o decimales."
                },
                {
                  title: "Editar código Liquid sin crear una copia de seguridad",
                  desc: "Modificar archivos del tema directamente sin haber duplicado previamente la plantilla desde el panel de Temas."
                }
              ].map((err, idx) => (
                <div key={idx} className="bg-rose-950/10 border border-rose-500/20 rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-1.5">
                    <XCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{err.title}</span>
                  </div>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed">{err.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: Checkout & Payments Impact */}
          <section className="space-y-6">
            <div className="border-l-2 border-blue-500 pl-4">
              <h2 className="text-2xl lg:text-3xl font-black text-white tracking-tight">
                ¿El cambio afecta el checkout o los pagos?
              </h2>
            </div>

            <p className="text-zinc-300 leading-relaxed font-light">
              El ajuste de formato modifica <strong>la presentación visual</strong> de los precios en tu storefront. No altera el valor numérico transferido a las pasarelas de pago ni altera la base imponible del IVA. Sin embargo, antes de dar por finalizada la configuración, es una excelente práctica realizar un control de calidad completo verificando los siguientes puntos:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                "Ficha de producto",
                "Variantes (talla/color)",
                "Carrito de compras",
                "Cupones de descuento",
                "Correos automáticos",
                "Pantalla de Checkout",
                "Pasarela de pago",
                "Pedidos de prueba"
              ].map((item, idx) => (
                <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center text-xs font-medium text-zinc-300 flex items-center justify-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-zinc-400 font-light">
              <em>* Nota sobre Checkout:</em> La pantalla de pago de Shopify opera bajo estrictos protocolos de seguridad internacional y su personalización avanzada está sujeta a los planes de la plataforma y a la compatibilidad de cada pasarela de pago.
            </p>
          </section>

          {/* Section 8: FAQ */}
          <section className="space-y-6">
            <div className="border-l-2 border-blue-500 pl-4">
              <h2 className="text-2xl lg:text-3xl font-black text-white tracking-tight">
                Preguntas frecuentes sobre formato de precios en Shopify
              </h2>
              <p className="text-sm text-zinc-400 mt-1">Respuestas directas a las dudas técnicas más comunes de administradores en Chile.</p>
            </div>

            <FaqSection items={faqItems} />
          </section>

          {/* Section 9: Commercial CTA */}
          <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-950 via-zinc-900 to-zinc-950 border border-blue-500/30 p-8 lg:p-12 shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-bold uppercase tracking-wider">
                <Store className="w-3.5 h-3.5" /> Soporte Shopify en Chile
              </div>

              <h2 className="text-2xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                ¿Tu tienda sigue mostrando precios incorrectos o necesitas adaptar Shopify para vender en Chile?
              </h2>

              <p className="text-zinc-300 font-light leading-relaxed text-base lg:text-lg max-w-3xl">
                En <strong>Webunica</strong> configuramos, desarrollamos y optimizamos tiendas Shopify para empresas y emprendedores chilenos, incluyendo formatos de moneda, integración de <Link href="/comisiones-plataformas-de-pago-para-shopify-chile" className="text-blue-400 underline hover:text-blue-300">medios de pago locales</Link>, cálculo de envíos, diseño a medida, rendimiento de velocidad, <Link href="/servicios-seo-posicionamiento-google" className="text-blue-400 underline hover:text-blue-300">posicionamiento SEO</Link> y optimización de la experiencia de compra.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <LeadButton 
                  service="Soporte Shopify Chile"
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-blue-600/30 cursor-pointer"
                >
                  Solicitar soporte Shopify
                </LeadButton>

                <Link
                  href="/desarrollo-tiendas-shopify-en-chile"
                  className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 font-bold text-xs uppercase tracking-wider rounded-xl transition-all inline-flex items-center gap-2"
                >
                  <span>Cotizar una tienda Shopify</span>
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                </Link>

                <WhatsAppButton className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-emerald-600/20 cursor-pointer">
                  Hablar con un especialista
                </WhatsAppButton>
              </div>

              <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Desarrollo y soporte Shopify oficial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Integraciones Webpay, Mercado Pago y Flow</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Soporte técnico directo en Chile</span>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
