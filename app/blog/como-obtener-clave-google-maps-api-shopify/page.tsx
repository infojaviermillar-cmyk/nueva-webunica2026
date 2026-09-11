import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  Clock,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  Zap,
  ExternalLink,
  Key,
  Layers,
  Sparkles,
  ChevronRight,
  HelpCircle,
  Copy,
  Lock,
  Globe,
  ClipboardList,
  CreditCard,
  UserCheck,
  Store
} from 'lucide-react';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import { CopySnippetButton, ShareButtons } from './client-components';

export const metadata: Metadata = {
  title: 'Cómo Obtener y Configurar Google Maps API Key en Shopify | Webunica',
  description: 'Guía paso a paso para crear, habilitar y configurar la clave de Google Maps API en tu tienda Shopify con autocompletado, rutas y crédito gratuito.',
  keywords: [
    'Google Maps API Shopify',
    'obtener clave Google Maps Shopify',
    'configurar API key Google Maps Shopify',
    'mapa interactivo Shopify Chile',
    'localizador de tiendas Shopify',
    'Google Cloud Console API key Shopify',
    'Maps JavaScript API Shopify'
  ],
  openGraph: {
    title: 'Guía: Cómo Obtener y Configurar la Clave de Google Maps API para tu Tienda Shopify',
    description: 'Aprende a generar tu API Key en Google Cloud, aplicar restricciones de seguridad y activar el mapa de sucursales o distribuidores en Shopify.',
    url: 'https://webunica.cl/blog/como-obtener-clave-google-maps-api-shopify',
    type: 'article',
  },
  alternates: {
    canonical: 'https://webunica.cl/blog/como-obtener-clave-google-maps-api-shopify',
  },
};

export default function PostGoogleMapsApiShopify() {
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cómo obtener y configurar la clave de Google Maps API para tu tienda Shopify',
    description: 'Guía paso a paso para generar la API Key de Google Maps en Google Cloud Console, asegurar las credenciales y conectarla a tu tienda Shopify.',
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
    datePublished: '2026-09-11',
    dateModified: '2026-09-11',
  };

  const jsonLdHowTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Cómo obtener y configurar la clave de Google Maps API en Shopify',
    description: 'Tutorial técnico para integrar Google Maps API con autocompletado y cálculo de rutas en tiendas Shopify.',
    supply: [
      { '@type': 'HowToSupply', name: 'Cuenta Google corporativa' },
      { '@type': 'HowToSupply', name: 'Tarjeta de crédito o débito para facturación' },
      { '@type': 'HowToSupply', name: 'Dominio activo de la tienda Shopify' }
    ],
    tool: [
      { '@type': 'HowToTool', name: 'Google Cloud Console' },
      { '@type': 'HowToTool', name: 'Panel de Administración de Shopify' }
    ],
    step: [
      {
        '@type': 'HowToStep',
        name: 'Crear un proyecto en Google Cloud Console',
        text: 'Ingresa a Google Cloud Console con tu cuenta corporativa y crea un nuevo proyecto dedicado a tu tienda.'
      },
      {
        '@type': 'HowToStep',
        name: 'Vincular una cuenta de facturación',
        text: 'Asocia una tarjeta de crédito o débito para activar el crédito mensual gratuito de $200 USD de Google.'
      },
      {
        '@type': 'HowToStep',
        name: 'Habilitar las 4 APIs de Google Maps',
        text: 'Activa Maps JavaScript API, Places API, Geocoding API y Distance Matrix API desde la biblioteca.'
      },
      {
        '@type': 'HowToStep',
        name: 'Generar y restringir la clave de API',
        text: 'Crea la API Key y establece restricciones por referentes HTTP de tu dominio y por tipo de API para máxima seguridad.'
      },
      {
        '@type': 'HowToStep',
        name: 'Pegar la clave en la sección de Shopify',
        text: 'Abre el editor de temas de Shopify en la sección de mapa o localizador de distribuidores, selecciona Google Maps y guarda los cambios.'
      }
    ]
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Tiene costo usar Google Maps API en Shopify?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Google otorga mensualmente $200 USD de crédito gratuito a todas las cuentas de Google Cloud. Para la mayoría de las tiendas online, este crédito cubre ampliamente miles de visualizaciones de mapas y búsquedas sin generar cobros reales.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Por qué es obligatorio ingresar una tarjeta de crédito en Google Cloud?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Google Cloud exige una cuenta de facturación válida para verificar la identidad del usuario y prevenir el abuso del servicio, aunque no realizará cobros mientras el consumo esté cubierto por el crédito mensual de $200 USD.'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cuáles son las 4 APIs obligatorias para que el mapa funcione con rutas y búsqueda?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Debes habilitar Maps JavaScript API (renderizado visual), Places API (autocompletado de direcciones), Geocoding API (conversión de dirección a coordenadas) y Distance Matrix API (cálculo de distancias y tiempos de viaje).'
        }
      },
      {
        '@type': 'Question',
        name: '¿Cómo proteger la API Key para que no la usen en otros sitios web?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'En la sección de credenciales de Google Cloud, aplica Restricciones de Aplicación seleccionando Referentes HTTP y agregando tus dominios (ejemplo: https://tudominio.cl/* y https://*.myshopify.com/*).'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <article className="bg-white min-h-screen">
        {/* Article Header */}
        <header className="relative pt-32 pb-16 bg-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-brand-purple/20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

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
                  Shopify & Google Maps
                </span>
                <span className="text-slate-600">•</span>
                <div className="flex items-center gap-1.5 text-slate-400 text-sm font-medium">
                  <Clock className="w-4 h-4 text-brand-purple" />
                  <span>5 min lectura</span>
                </div>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                  Guía Paso a Paso 2026
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-8 leading-tight">
                🗺️ Guía: Cómo obtener y configurar la clave de Google Maps API para tu tienda Shopify
              </h1>

              <div className="flex items-center gap-6 pt-4 border-t border-slate-800 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-purple flex items-center justify-center text-white font-black text-lg">
                    W
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Equipo Técnico Webunica</div>
                    <div className="text-xs text-slate-400 font-medium">Desarrollo e Integraciones Shopify en Chile</div>
                  </div>
                </div>
                <div className="h-10 w-px bg-slate-800 hidden sm:block" />
                <div className="flex flex-col">
                  <span className="text-xs text-slate-500 font-medium uppercase tracking-widest">Publicado</span>
                  <span className="text-sm font-bold text-slate-300">11 de Septiembre, 2026</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Highlight Banner / Google Free Tier Box */}
        <section className="container mx-auto px-6 -mt-8 relative z-20">
          <div className="max-w-4xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-6 md:p-8 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>💡 Nota importante sobre costos de Google Maps</span>
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Google otorga mensualmente <strong>$200 USD de crédito gratuito</strong> a todas las cuentas de Google Cloud. Para la inmensa mayoría de tiendas online y sucursales en Chile, este saldo cubre con creces miles de visitas y búsquedas mensuales <strong>sin generar ningún cobro adicional</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Body Grid */}
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 py-16">
          {/* Left Social Links */}
          <aside className="lg:w-16 lg:sticky lg:top-32 h-fit">
            <ShareButtons 
              title="Cómo obtener y configurar la clave de Google Maps API para tu tienda Shopify" 
              url="https://webunica.cl/blog/como-obtener-clave-google-maps-api-shopify" 
            />
          </aside>

          {/* Center Article Content */}
          <div className="flex-1 max-w-4xl space-y-12">
            <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
              <p className="text-xl text-slate-800 font-medium leading-relaxed">
                Para habilitar la experiencia completa de <strong>Google Maps</strong> en tu tienda online —incluyendo mapa interactivo satelital o callejero, autocompletado predictivo de direcciones, buscador de sucursales y cálculo de rutas en tiempo real— es necesario generar una <strong>API Key</strong> en la consola oficial de Google Cloud.
              </p>
              <p>
                A continuación tienes la guía paso a paso detallada para crear tu proyecto, habilitar los servicios indispensables, proteger tu clave contra uso no autorizado e insertarla en tu plantilla de <Link href="/desarrollo-tiendas-shopify-en-chile" className="text-brand-purple font-semibold underline hover:text-purple-700">Shopify</Link>.
              </p>
            </div>

            {/* Requisitos Previos Section */}
            <section className="bg-gradient-to-br from-purple-950/20 via-slate-900 to-slate-900 border-2 border-brand-purple/40 rounded-3xl p-6 md:p-8 text-white shadow-xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-brand-purple flex items-center justify-center text-white shrink-0">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-black text-white tracking-tight">
                    📋 Requisitos previos antes de comenzar
                  </h2>
                  <p className="text-xs md:text-sm text-purple-200">
                    Asegúrate de contar con los siguientes elementos listos antes de iniciar el proceso:
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2.5 text-purple-300 font-bold text-sm">
                    <UserCheck className="w-4 h-4 text-emerald-400" />
                    <span>1. Cuenta Google Corporativa</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    Recomendamos usar un correo institucional o de la empresa (ej: <code className="bg-slate-900 px-1.5 py-0.5 rounded text-purple-200 text-[11px]">contacto@tuempresa.cl</code>) en lugar de una cuenta personal, para mantener la titularidad del proyecto centralizada.
                  </p>
                </div>

                <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2.5 text-purple-300 font-bold text-sm">
                    <CreditCard className="w-4 h-4 text-emerald-400" />
                    <span>2. Tarjeta de Crédito o Débito Activa</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    Requisito obligatorio de Google Cloud para validar la identidad y activar la facturación. Recuerda que con el cupo de <strong>$200 USD/mes gratis</strong> no habrá cobros para volúmenes estándar.
                  </p>
                </div>

                <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2.5 text-purple-300 font-bold text-sm">
                    <Store className="w-4 h-4 text-emerald-400" />
                    <span>3. Acceso Administrador a Shopify</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    Permisos de administrador en tu tienda Shopify para ingresar a <em>Tienda online &gt; Temas &gt; Personalizar</em> y acceder a las secciones del mapa o localizador.
                  </p>
                </div>

                <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-2">
                  <div className="flex items-center gap-2.5 text-purple-300 font-bold text-sm">
                    <Globe className="w-4 h-4 text-emerald-400" />
                    <span>4. Dominios de la Tienda Identificados</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    Tener claras las URLs de tu tienda (<code className="bg-slate-900 px-1.5 py-0.5 rounded text-purple-200 text-[11px]">tudominio.cl</code> y <code className="bg-slate-900 px-1.5 py-0.5 rounded text-purple-200 text-[11px]">*.myshopify.com</code>) para aplicar los candados de seguridad HTTP a la clave.
                  </p>
                </div>
              </div>
            </section>

            {/* Step 1 */}
            <section className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-brand-purple text-white font-black text-sm flex items-center justify-center">
                  01
                </span>
                <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Paso 1: Crear un proyecto en Google Cloud Console
                </h2>
              </div>

              <div className="space-y-3 text-slate-700 text-sm md:text-base leading-relaxed pl-2 md:pl-12">
                <ol className="list-decimal space-y-2.5 ml-4">
                  <li>
                    Ingresa a <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer" className="text-brand-purple font-bold underline inline-flex items-center gap-1">Google Cloud Console <ExternalLink className="w-3.5 h-3.5" /></a> con tu cuenta de Google o correo corporativo.
                  </li>
                  <li>
                    En la barra superior, haz clic en el selector de proyectos y luego presiona el botón <strong>&quot;Proyecto Nuevo&quot;</strong> (o <em>New Project</em>).
                  </li>
                  <li>
                    Asigna un nombre descriptivo para identificarlo fácilmente (ej: <code className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded font-mono text-xs">Tienda Shopify - Mapas</code>) y haz clic en <strong>&quot;Crear&quot;</strong>.
                  </li>
                  <li>
                    Verifica que el nuevo proyecto quede seleccionado en el menú desplegable de la barra superior.
                  </li>
                </ol>
              </div>
            </section>

            {/* Step 2 */}
            <section className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-brand-purple text-white font-black text-sm flex items-center justify-center">
                  02
                </span>
                <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Paso 2: Vincular una Cuenta de Facturación (Requisito de Google)
                </h2>
              </div>

              <div className="space-y-3 text-slate-700 text-sm md:text-base leading-relaxed pl-2 md:pl-12">
                <ol className="list-decimal space-y-2.5 ml-4">
                  <li>
                    Ve al menú lateral izquierdo (☰) y selecciona la opción <strong>&quot;Facturación&quot;</strong> (<em>Billing</em>).
                  </li>
                  <li>
                    Haz clic en <strong>&quot;Vincular una cuenta de facturación&quot;</strong> y añade los datos de la empresa junto a una tarjeta de crédito o débito.
                  </li>
                </ol>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-xs md:text-sm text-blue-900 flex items-start gap-3 mt-4">
                  <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Garantía de uso:</strong> Google solicita la tarjeta exclusivamente para verificar tu cuenta y activar la infraestructura de APIs. Mientras tu tráfico esté dentro del volumen mensual habitual, el saldo mensual gratuito de <strong>$200 USD</strong> absorberá la totalidad del consumo.
                  </div>
                </div>
              </div>
            </section>

            {/* Step 3 */}
            <section className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-brand-purple text-white font-black text-sm flex items-center justify-center">
                  03
                </span>
                <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Paso 3: Habilitar las APIs necesarias
                </h2>
              </div>

              <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed pl-2 md:pl-12">
                <p>
                  En el menú lateral (☰), dirígete a <strong>&quot;APIs y servicios&quot;</strong> &gt; <strong>&quot;Biblioteca&quot;</strong> (<em>Library</em>). Busca y haz clic en <strong>&quot;Habilitar&quot;</strong> (<em>Enable</em>) para cada una de las siguientes <strong>4 APIs</strong>:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white border border-slate-200 rounded-2xl p-4">
                    <div className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Maps JavaScript API
                    </div>
                    <p className="text-xs text-slate-500">Renderiza el mapa visual interactivo con controles de zoom y capas satelitales.</p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-4">
                    <div className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Places API
                    </div>
                    <p className="text-xs text-slate-500">Permite el autocompletado y búsqueda predictiva de comunas, ciudades y locales.</p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-4">
                    <div className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Geocoding API
                    </div>
                    <p className="text-xs text-slate-500">Convierte direcciones escritas en coordenadas exactas de latitud y longitud GPS.</p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-4">
                    <div className="font-bold text-slate-900 text-sm flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Distance Matrix API
                    </div>
                    <p className="text-xs text-slate-500">Calcula distancias reales en kilómetros por calle y tiempos estimados de llegada.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Step 4 */}
            <section className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-brand-purple text-white font-black text-sm flex items-center justify-center">
                  04
                </span>
                <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Paso 4: Generar y Proteger la API Key
                </h2>
              </div>

              <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed pl-2 md:pl-12">
                <ol className="list-decimal space-y-2.5 ml-4">
                  <li>
                    Ve a <strong>&quot;APIs y servicios&quot;</strong> &gt; <strong>&quot;Credenciales&quot;</strong> (<em>Credentials</em>).
                  </li>
                  <li>
                    Haz clic en el botón superior <strong>&quot;+ Crear credenciales&quot;</strong> &gt; <strong>&quot;Clave de API&quot;</strong> (<em>API Key</em>).
                  </li>
                  <li>
                    Se generará un código alfanumérico (ej: <code className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded font-mono text-xs">AIzaSyD...</code>). <strong>Cópialo en un lugar seguro</strong>.
                  </li>
                  <li>
                    Para evitar que terceros usen tu clave fuera de tu tienda, haz clic en <strong>&quot;Editar clave de API&quot;</strong> (icono de lápiz) y ajusta los siguientes candados de seguridad:
                  </li>
                </ol>

                <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-4 mt-2">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Lock className="w-4 h-4 text-brand-purple" />
                    A. Restricciones de Aplicación (Referentes HTTP)
                  </div>
                  <p className="text-xs text-slate-600">
                    Selecciona <strong>&quot;Referentes HTTP (sitios web)&quot;</strong> y agrega tus dominios con comodines para permitir subpáginas y el editor interno de Shopify:
                  </p>

                  <div className="space-y-2">
                    {[
                      'https://tudominio.cl/*',
                      'https://www.tudominio.cl/*',
                      'https://*.myshopify.com/*'
                    ].map((domain, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-slate-900 text-slate-100 px-3.5 py-2 rounded-xl font-mono text-xs">
                        <code>{domain}</code>
                        <CopySnippetButton textToCopy={domain} />
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-slate-200 pt-4">
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-2">
                      <Lock className="w-4 h-4 text-brand-purple" />
                      B. Restricciones de API
                    </div>
                    <p className="text-xs text-slate-600">
                      Selecciona <strong>&quot;Restringir clave&quot;</strong> y marca únicamente las 4 APIs habilitadas: <em>Maps JavaScript API, Places API, Geocoding API y Distance Matrix API</em>.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-500">
                  5. Haz clic en el botón <strong>&quot;Guardar&quot;</strong> al final de la página.
                </p>
              </div>
            </section>

            {/* Step 5 */}
            <section className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-brand-purple text-white font-black text-sm flex items-center justify-center">
                  05
                </span>
                <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Paso 5: Agregar la Clave en Shopify
                </h2>
              </div>

              <div className="space-y-3 text-slate-700 text-sm md:text-base leading-relaxed pl-2 md:pl-12">
                <ol className="list-decimal space-y-2.5 ml-4">
                  <li>
                    Entra al panel de administración de <strong>Shopify</strong> &gt; <strong>Tienda online</strong> &gt; <strong>Temas</strong>.
                  </li>
                  <li>
                    En tu tema activo, haz clic en <strong>&quot;Personalizar&quot;</strong> (<em>Customize</em>).
                  </li>
                  <li>
                    En el selector superior de plantillas, dirígete a la página donde está ubicado el <strong>&quot;Localizador de Distribuidores / Sucursales&quot;</strong> (o selecciona la sección <em>Distributor Locator</em> / <em>Store Locator</em>).
                  </li>
                  <li>
                    En el panel de configuración lateral de la sección:
                    <ul className="list-disc ml-5 mt-1.5 space-y-1 text-xs md:text-sm text-slate-600">
                      <li>En <strong>&quot;Proveedor de mapa&quot;</strong>, selecciona <strong>Google Maps</strong>.</li>
                      <li>En el campo <strong>&quot;Google Maps API Key&quot;</strong>, pega la clave generada en el Paso 4.</li>
                    </ul>
                  </li>
                  <li>
                    Haz clic en <strong>&quot;Guardar&quot;</strong> en la esquina superior derecha.
                  </li>
                </ol>

                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-xs md:text-sm text-emerald-900 flex items-center gap-3 mt-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>
                    <strong>¡Todo listo!</strong> El mapa, el autocompletado de direcciones y el calculador de distancias comenzarán a funcionar de inmediato con la infraestructura de Google Maps.
                  </span>
                </div>
              </div>
            </section>

            {/* Commercial CTA Webunica */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden border border-slate-700 shadow-2xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-purple/30 border border-purple-500/30 rounded-full text-purple-300 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" /> Soporte Shopify en Chile
              </div>

              <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight">
                ¿Necesitas ayuda para integrar mapas, sucursales o APIs en tu Shopify?
              </h2>

              <p className="text-slate-300 font-light text-sm md:text-base leading-relaxed max-w-3xl">
                En <strong>Webunica</strong> somos especialistas en desarrollo, personalización de themes, conexión de APIs de logística y pasarelas de pago para tiendas Shopify en Chile. Te ayudamos a implementar soluciones a medida que potencien tu experiencia de usuario y aumenten tus ventas.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <LeadButton 
                  service="Soporte Shopify Google Maps API"
                  className="px-6 py-3.5 bg-brand-purple hover:bg-purple-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-purple-900/30 cursor-pointer"
                >
                  Solicitar soporte Shopify
                </LeadButton>

                <Link
                  href="/desarrollo-tiendas-shopify-en-chile"
                  className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-bold text-xs uppercase tracking-wider rounded-xl transition-all inline-flex items-center gap-2"
                >
                  <span>Ver planes Shopify</span>
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                </Link>

                <WhatsAppButton className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-emerald-600/20 cursor-pointer">
                  Hablar con un especialista
                </WhatsAppButton>
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
