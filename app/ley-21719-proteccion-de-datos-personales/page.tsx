import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import FAQSection from '@/components/sections/faq-section';
import LeadButton from '@/components/ui/lead-button';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import BreadcrumbSchema from '@/components/ui/breadcrumb-schema';
import { 
  ShieldCheck, 
  Lock, 
  Scale, 
  AlertTriangle, 
  FileText, 
  CheckCircle2, 
  Cookie, 
  UserCheck, 
  KeyRound, 
  Database, 
  ArrowRight, 
  Clock, 
  Building2, 
  Sparkles,
  HelpCircle,
  Award
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cumplimiento Ley 21.719 Protección de Datos Personales Chile | Webunica',
  description: 'Adapta tu página web o e-commerce a la nueva Ley 21.719 de Protección de Datos Personales en Chile. Consentimientos ARCOP, banner de cookies, políticas de privacidad y ciberseguridad web para evitar multas de hasta 20.000 UTM.',
  keywords: [
    'ley 21719 chile',
    'ley 21.719 proteccion de datos personales',
    'cumplimiento ley 21719 sitio web',
    'adaptacion sitio web proteccion de datos chile',
    'derechos ARCOP chile',
    'consentimiento expreso formularios web',
    'banner de cookies consent mode v2',
    'politicas de privacidad ley 21719',
    'agencia proteccion de datos chile',
    'multas ley 21719 utm',
    'seguridad web proteccion de datos'
  ].join(', '),
  alternates: {
    canonical: 'https://webunica.cl/ley-21719-proteccion-de-datos-personales',
  },
  openGraph: {
    title: 'Cumplimiento Ley 21.719 Protección de Datos Personales en Chile | Webunica',
    description: 'Solución integral de desarrollo web y adecuación técnica a la Ley 21.719 de Protección de Datos Personales en Chile. Evita sanciones de la Agencia de Protección de Datos.',
    url: 'https://webunica.cl/ley-21719-proteccion-de-datos-personales',
    siteName: 'Webunica',
    locale: 'es_CL',
    type: 'website',
    images: [
      {
        url: 'https://webunica.cl/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Solución de Cumplimiento Ley 21.719 Protección de Datos Personales Chile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cumplimiento Ley 21.719 Protección de Datos Personales Chile | Webunica',
    description: 'Adapta tu sitio web o tienda online a la Ley 21.719. Consentimientos ARCOP, cookies y ciberseguridad.',
    images: ['https://webunica.cl/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Ley21719Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Adaptación y Cumplimiento Web Ley 21.719 Chile",
    "serviceType": "Desarrollo Web & Compliance de Protección de Datos",
    "description": "Implementación técnica de consentimientos informados, derechos ARCOP, banner de cookies Consent Mode v2, políticas de privacidad y ciberseguridad web bajo la Ley N° 21.719 de Chile.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Webunica",
      "url": "https://webunica.cl",
      "image": "https://webunica.cl/logo-webunica.png.webp",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Santiago",
        "addressCountry": "CL"
      }
    },
    "areaServed": "CL",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "CLP",
      "lowPrice": "290000",
      "highPrice": "890000",
      "offerCount": "3",
      "priceValidUntil": "2027-12-31"
    }
  };

  const faqs = [
    {
      question: "¿Qué es la nueva Ley 21.719 de Protección de Datos Personales en Chile?",
      answer: "La Ley N° 21.719 (publicada en diciembre de 2024 y con vigencia plena exigible hacia diciembre de 2026) es la reforma más profunda a la privacidad en Chile. Crea la Agencia de Protección de Datos Personales, consagra los derechos ARCOP y exige responsabilidad proactiva en la captación y almacenamiento de información personal."
    },
    {
      question: "¿A qué empresas y sitios web aplica la Ley 21.719?",
      answer: "Aplica a todas las empresas, personas naturales, tiendas online (Shopify, WooCommerce), sitios corporativos y plataformas digitales que traten datos de personas en Chile (nombres, rut, correos, teléfonos, direcciones, tarjetas o datos de navegación)."
    },
    {
      question: "¿Cuáles son las sanciones por no cumplir con la Ley 21.719 en un sitio web?",
      answer: "La ley establece sanciones clasificadas como leves, graves y gravísimas, con multas que pueden alcanzar hasta las 20.000 UTM o un porcentaje significativo de la facturación anual de la empresa, además del riesgo de suspensión de tratamiento de datos."
    },
    {
      question: "¿En qué consisten los Derechos ARCOP que exige la ley?",
      answer: "ARCOP es el acrónimo para los derechos de Acceso, Rectificación, Cancelación (Supresión), Oposición, Portabilidad y Bloqueo. Tu sitio web debe ofrecer un mecanismo formal y accesible para que cualquier usuario pueda solicitar el ejercicio de estos derechos."
    },
    {
      question: "¿Cómo ayuda Webunica a adaptar mi sitio web a la Ley 21.719?",
      answer: "Nos encargamos del desarrollo e integración técnica completa: formularios con consentimiento explícito, banner de gestión de cookies (Consent Mode v2), política de privacidad legal-tech, panel de solicitudes ARCOP, cifrado SSL estricto y registro de actividades de tratamiento."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      <BreadcrumbSchema items={[
        { name: 'Inicio', url: 'https://webunica.cl' },
        { name: 'Cumplimiento Ley 21.719', url: 'https://webunica.cl/ley-21719-proteccion-de-datos-personales' },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main Container */}
      <div className="pt-[14vh] pb-24">

        {/* BREADCRUMB */}
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <Link href="/" className="hover:text-slate-900 transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-blue-600 font-bold">Ley 21.719 Protección de Datos</span>
          </nav>
        </div>

        {/* HERO SECTION (Estilo Claro & Corporativo) */}
        <section className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-14 lg:p-16 border border-slate-200/80 shadow-xl shadow-slate-200/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/80 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-50 border border-blue-200/80 rounded-full text-blue-800 text-xs font-black uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Normativa Oficial Chile 2026</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-slate-950 font-heading leading-[1.05] mb-6">
                Cumplimiento Web <br />
                <span className="text-blue-600">Ley 21.719</span> Protección de Datos
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8">
                Adapta tu página web, tienda online o plataforma SaaS a la nueva legislación chilena de datos personales. <strong className="text-slate-900 font-semibold">Evita multas de hasta 20.000 UTM</strong> implementando consentimientos expresos, derechos ARCOP y seguridad digital.
              </p>

              {/* Stat Callouts */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 mb-8 text-xs font-medium">
                <div>
                  <span className="block font-black text-slate-900 text-lg sm:text-xl font-mono text-blue-600">20.000 UTM</span>
                  <span className="text-slate-500">Tope de multas por infracción</span>
                </div>
                <div>
                  <span className="block font-black text-slate-900 text-lg sm:text-xl font-mono text-blue-600">Dic 2026</span>
                  <span className="text-slate-500">Vigencia y fiscalización plena</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="block font-black text-slate-900 text-lg sm:text-xl font-mono text-blue-600">ARCOP</span>
                  <span className="text-slate-500">Derechos del usuario obligatorios</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <LeadButton service="Cumplimiento Ley 21.719" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black uppercase tracking-wider text-xs shadow-lg shadow-blue-600/20 text-center cursor-pointer">
                  Cotizar Adaptación Ley 21.719
                </LeadButton>
                <WhatsAppButton className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-black uppercase tracking-wider text-xs text-center">
                  Hablar con un Especialista
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN: ¿POR QUÉ ES CRÍTICA LA LEY 21.719 PARA TU SITIO WEB? */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-blue-100">
              Transformación Normativa en Chile
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-slate-950 tracking-tight font-heading">
              ¿Por qué debes preparar tu web antes de 2026?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light mt-3">
              La Ley N° 21.719 sustituye la antigua Ley 19.628, introduciendo un modelo fiscalizador idéntico al estándar europeo GDPR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-5">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Multas Severas y Sanciones</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Infracciones por captura indebida de formularios o falta de consentimiento conllevan sanciones de hasta 20.000 UTM o porcentaje de facturación.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Nueva Agencia Sancionatoria</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Se crea la Agencia de Protección de Datos Personales, entidad pública con facultad de fiscalizar y auditar sitios web de forma proactiva.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Derechos ARCOP del Usuario</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Tus clientes tienen derecho a solicitar la eliminación, rectificación, portabilidad y oposición del uso de sus datos en tu sitio en cualquier momento.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Ciberseguridad Obligatoria</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                La ley exige medidas de seguridad proactivas: cifrado, protección de base de datos y reporte obligatorio de brechas de seguridad.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN: MÓDULOS DE ADAPTACIÓN TÉCNICA WEBUNICA */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-14 border border-slate-200/80 shadow-lg">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Implementación Técnica Llave en Mano
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-slate-950 tracking-tight font-heading mt-3 mb-4">
                ¿Qué incluye nuestro Servicio de Adecuación Ley 21.719?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-light">
                Combinamos ingeniería de software, arquitectura web y asesoría legal-tech para adaptar tu plataforma sin interrumpir tus ventas ni la experiencia de usuario.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Módulo 1 */}
              <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-4">
                  1
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Consentimiento Expreso en Formularios</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Integración de casillas de verificación (checkboxes) desmarcadas por defecto, leyendas legales informadas y registro auditable de consentimiento en formularios de contacto y checkout.
                </p>
              </div>

              {/* Módulo 2 */}
              <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-4">
                  2
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Banner de Cookies Consent Mode v2</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Configuración de banner de cookies avanzado con bloqueo previo de scripts (GA4, Meta Pixel, Hotjar) hasta que el usuario otorgue consentimiento explícito.
                </p>
              </div>

              {/* Módulo 3 */}
              <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-4">
                  3
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Políticas de Privacidad Legal-Tech</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Redacción y maquetación de la Política de Privacidad, Términos y Condiciones y Política de Cookies adaptadas expresamente a las exigencias de la Ley 21.719.
                </p>
              </div>

              {/* Módulo 4 */}
              <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-4">
                  4
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Portal de Solicitudes ARCOP</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Implementación de un formulario dedicado para que usuarios o clientes puedan ejercer sus derechos de Acceso, Rectificación, Supresión (Cancelación), Oposición y Portabilidad.
                </p>
              </div>

              {/* Módulo 5 */}
              <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-4">
                  5
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Hardening & Cifrado SSL/TLS</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Auditoría de seguridad web, cabeceras HTTP de seguridad (HSTS, CSP), HTTPS estricto y recomendación de cifrado para almacenamiento de datos personales.
                </p>
              </div>

              {/* Módulo 6 */}
              <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm mb-4">
                  6
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Registro de Tratamiento (RAT)</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Entrega del inventario de datos personales y plantilla del Registro de Actividades de Tratamiento obligatoria para presentar ante eventuales fiscalizaciones.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN DE PLANES DE ADAPTACIÓN LEY 21.719 */}
        <section className="max-w-7xl mx-auto px-6 py-12" id="planes-ley-21719">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-blue-100">
              Planes de Inversión Transparente
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-slate-950 tracking-tight font-heading">
              Planes de Adecuación Ley 21.719
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light mt-3">
              Selecciona el plan que se adapte al tamaño de tu empresa o sitio web. Todos incluyen garantía de cumplimiento normativo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* PLAN 1: BÁSICO COMPLIANCE */}
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  Sitios PyME / Landing Pages
                </span>
                <h3 className="text-2xl font-black uppercase text-slate-900 mt-4 mb-2 font-heading">Plan Básico Compliance</h3>
                <p className="text-xs text-slate-500 mb-6">Para sitios informativos, blogs o páginas profesionales con formularios simples.</p>
                
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <span className="text-4xl font-black text-slate-900 font-mono">$290.000</span>
                  <span className="text-xs font-bold text-slate-400 uppercase ml-2">+ IVA</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Consentimiento expreso en formularios de contacto",
                    "Banner de Cookies estándar con aviso legal",
                    "Política de Privacidad redactada según Ley 21.719",
                    "Términos y Condiciones del sitio web",
                    "Formulario simple para ejercicio de derechos ARCOP",
                    "Revisión de certificado SSL y protocolo HTTPS",
                    "Entrega en 5 días hábiles"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <LeadButton service="Plan Básico Compliance Ley 21.719" className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-widest rounded-2xl text-center cursor-pointer transition-all shadow-md">
                Solicitar Plan Básico
              </LeadButton>
            </div>

            {/* PLAN 2: FULL COMPLIANCE LEY 21.719 (DESTACADO) */}
            <div className="bg-gradient-to-b from-blue-900 via-blue-950 to-slate-950 text-white border-2 border-blue-500 rounded-[2.5rem] p-8 shadow-2xl relative flex flex-col justify-between">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-mono font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                Recomendado E-Commerce
              </span>

              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-300 bg-white/10 px-3 py-1 rounded-full">
                  Shopify / WooCommerce / E-Commerce
                </span>
                <h3 className="text-2xl font-black uppercase text-white mt-4 mb-2 font-heading">Plan Full Compliance</h3>
                <p className="text-xs text-blue-200/80 mb-6">Adecuación completa para tiendas online que procesan pagos y datos masivos.</p>
                
                <div className="mb-6 pb-6 border-b border-white/15">
                  <span className="text-4xl font-black text-white font-mono">$490.000</span>
                  <span className="text-xs font-bold text-blue-300 uppercase ml-2">+ IVA</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Todo lo del Plan Básico Compliance",
                    "Banner de Cookies Consent Mode v2 con bloqueo previo de scripts",
                    "Adecuación de Checkout Shopify / WooCommerce a Ley 21.719",
                    "Integración de checkboxes en suscripciones newsletter",
                    "Portal dedicado de Solicitud de Derechos ARCOP",
                    "Registro de Actividades de Tratamiento (RAT) entregado",
                    "Hardening de seguridad web & cifrado recomendado",
                    "Carta Gantt en línea & seguimiento por hitos",
                    "Entrega en 10 días hábiles"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-blue-100 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <LeadButton service="Plan Full Compliance Ley 21.719" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-widest rounded-2xl text-center cursor-pointer transition-all shadow-xl shadow-blue-600/30">
                Solicitar Plan Full Compliance
              </LeadButton>
            </div>

            {/* PLAN 3: CUSTOM ENTERPRISE */}
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  Plataformas SaaS & Grandes Empresas
                </span>
                <h3 className="text-2xl font-black uppercase text-slate-900 mt-4 mb-2 font-heading">Plan Custom Enterprise</h3>
                <p className="text-xs text-slate-500 mb-6">Para desarrollos web a medida, integraciones de sistemas ERP e intranets.</p>
                
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <span className="text-4xl font-black text-slate-900 font-mono">Cotizar</span>
                  <span className="text-xs font-bold text-slate-400 uppercase block mt-1">Propuesta a medida</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "Auditoría técnica integral de bases de datos y flujos de información",
                    "Arquitectura Privacy-by-Design & Security-by-Design",
                    "Integración API de derechos ARCOP a base de datos corporativa",
                    "Gestión y protocolos de respuesta ante brechas de seguridad",
                    "Asesoría para designación de Delegado de Protección de Datos (DPD)",
                    "Soporte y acompañamiento continuo post-lanzamiento"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <LeadButton service="Plan Custom Enterprise Ley 21.719" className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-widest rounded-2xl text-center cursor-pointer transition-all shadow-md">
                Cotizar Proyecto Enterprise
              </LeadButton>
            </div>
          </div>
        </section>

        {/* PREGUNTAS FRECUENTES FAQ */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="bg-white rounded-[3rem] p-8 md:p-14 border border-slate-200/80 shadow-md">
            <FAQSection 
              faqs={faqs} 
              title="Preguntas Frecuentes sobre la Ley 21.719 en Chile" 
              description="Resolvemos las principales dudas sobre la adaptación legal y técnica de sitios web en Chile." 
            />
          </div>
        </section>

        {/* CALL TO ACTION FINAL */}
        <section className="max-w-5xl mx-auto px-6 py-12">
          <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 bg-white/10 px-4 py-1.5 rounded-full inline-block mb-6">
                🔒 Garantiza la Seguridad Legal de tu Marca
              </span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-6 font-heading leading-tight">
                No esperes a las multas de la Ley 21.719
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                Protege la reputación de tu empresa, genera confianza en tus compradores y cumple 100% con la normativa chilena de datos personales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LeadButton service="Ley 21.719 - CTA Final" className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all shadow-xl shadow-blue-600/30 text-center cursor-pointer">
                  Agendar Auditoría Ley 21.719
                </LeadButton>
                <WhatsAppButton className="px-10 py-5 bg-white text-slate-900 hover:bg-slate-100 font-black text-xs uppercase tracking-widest rounded-2xl transition-all text-center">
                  Hablar por WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
