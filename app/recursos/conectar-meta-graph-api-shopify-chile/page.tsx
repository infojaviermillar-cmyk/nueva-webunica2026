import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, AlertTriangle, Info, Terminal, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Guía: Integrar Meta Graph API (Facebook/Instagram) | Webunica',
  description: 'Guía paso a paso para configurar la API de Meta Graph para la autopublicación de contenidos en páginas de Facebook e Instagram en Chile.',
};

export default function MetaApiGuidePage() {
  const steps = [
    {
      num: "01",
      title: "Verificar Cuenta en Meta for Developers",
      desc: "Debes habilitar la cuenta de desarrollador vinculada a la marca.",
      details: [
        "Ingresa a developers.facebook.com con la cuenta administradora de la página.",
        "Verifica la identidad agregando un número móvil chileno (+56).",
        "Si el SMS no llega, valida el número en accountscenter.facebook.com (Sección: Seguridad -> Confirmar Teléfono) o asocia una tarjeta de crédito para verificación instantánea."
      ]
    },
    {
      num: "02",
      title: "Crear la Aplicación en Meta",
      desc: "Creación de la App para gestionar las integraciones de contenido.",
      details: [
        "En developers.facebook.com/apps haz clic en 'Crear aplicación'.",
        "Selecciona la categoría 'Administración de contenido' (que incluye Instagram Graph API y Facebook Pages Graph API).",
        "Nombra la aplicación (ej: 'Integrador Contenidos') y asóciala al Business Manager de la empresa.",
        "Anota el App ID generado en el panel principal."
      ]
    },
    {
      num: "03",
      title: "Activar Permisos en la App",
      desc: "Configura los permisos necesarios evitando dependencias obsoletas.",
      details: [
        "Para Facebook: Ve a Casos de uso -> 'Administra las páginas' -> Personalizar y añade: pages_manage_posts, pages_read_engagement y pages_show_list.",
        "Nota técnica: No utilices el permiso obsoleto 'manage_pages', utiliza 'pages_manage_posts' en su lugar.",
        "Para Instagram: Ve a Casos de uso -> 'Administrar contenido en Instagram' -> Personalizar y añade: instagram_basic e instagram_content_publish."
      ]
    },
    {
      num: "04",
      title: "Configurar el Business Manager",
      desc: "Crea el System User necesario para generar tokens de larga duración.",
      details: [
        "En business.facebook.com ve a Ajustes del negocio -> Usuarios -> Usuarios del sistema.",
        "Añade un System User (ej: 'admin_sistema') con rol de Administrador.",
        "Haz clic en 'Asignar activos' y asóciale la Página de Facebook y la Cuenta de Instagram con el toggle de 'Acceso Total' activado."
      ]
    },
    {
      num: "05",
      title: "Generar System User Token (No Expira)",
      desc: "Genera la clave de autenticación que mantendrá vivo el servicio.",
      details: [
        "Selecciona el System User creado y haz clic en 'Generar identificador' (Generate Token).",
        "Selecciona la App correspondiente y marca los permisos: pages_manage_posts, pages_read_engagement, pages_show_list, instagram_basic e instagram_content_publish.",
        "Copia inmediatamente el token generado. Este token no expira y no requiere renovación manual."
      ]
    },
    {
      num: "06",
      title: "Obtener IDs de la Página e Instagram",
      desc: "Consigue los identificadores únicos para configurar las peticiones API.",
      details: [
        "Para el Page ID de Facebook: Ejecuta la consulta '/me/accounts' en developers.facebook.com/tools/explorer usando el token del paso anterior, o búscalo en la sección 'Información de la página' en Facebook.",
        "Para el Instagram Business ID: Ejecuta la consulta '/{page-id}?fields=instagram_business_account' en el explorador para obtener el ID de Instagram asociado."
      ]
    },
    {
      num: "07",
      title: "Verificar Dominio en Meta",
      desc: "Requisito obligatorio de Meta para personalizar imágenes en publicaciones externas.",
      details: [
        "Ve a Ajustes del negocio -> Seguridad de la marca -> Dominios.",
        "Añade tu dominio (ej: tu-dominio.cl).",
        "Verifica agregando la meta etiqueta provista en el archivo layout.tsx de tu sitio o mediante un registro TXT en los servidores DNS."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 pt-[18vh] pb-32 font-sans selection:bg-violet-500/20 selection:text-violet-300">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Breadcrumbs */}
        <div className="mb-8 flex items-center gap-2 text-xs font-semibold text-zinc-500">
          <Link href="/recursos" className="hover:text-violet-400 transition-colors uppercase tracking-wider">Recursos</Link>
          <span>/</span>
          <span className="text-zinc-300 uppercase tracking-wider">Guía Meta Graph API</span>
        </div>

        {/* Hero / Header */}
        <div className="mb-16 border-b border-zinc-800 pb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-violet-500 mb-3 block">
            Guía de Integración Técnica
          </span>
          <h1 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase text-white mb-6 leading-none">
            Conectar Meta Graph API <br/>
            <span className="text-violet-400 italic font-serif lowercase font-light text-3xl lg:text-5xl">para Autopublicación</span>
          </h1>
          <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-2xl">
            Sigue este flujo paso a paso para conectar un e-commerce o blog a Facebook & Instagram Graph API de forma segura. Utiliza las variables y dominios de ejemplo como plantilla.
          </p>
        </div>

        {/* Advertencia Inicial */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-3xl p-6 mb-12 flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-amber-400 text-sm mb-1">Nota de Seguridad</h4>
            <p className="text-xs text-zinc-300 leading-relaxed font-light">
              Nunca guardes ni subas el token de acceso al repositorio de código (GitHub). Este token otorga privilegios de administración y debe guardarse en variables de entorno seguras (.env) o ingresarse a través del panel de administración del sitio.
            </p>
          </div>
        </div>

        {/* Steps loop */}
        <div className="space-y-8 mb-16">
          <h2 className="text-xl font-bold uppercase tracking-wider text-white mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-violet-400" /> Pasos de Implementación
          </h2>
          {steps.map((step, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden group hover:border-zinc-700 transition-colors">
              <span className="absolute top-4 right-6 text-[48px] font-black text-zinc-800 leading-none select-none">
                {step.num}
              </span>
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-widest text-violet-500 block mb-2">Paso {step.num}</span>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-400 font-light mb-6">{step.desc}</p>
                
                <ul className="space-y-3">
                  {step.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex gap-3 text-xs text-zinc-300 font-light leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Sandbox & Ejemplos */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 lg:p-12 mb-16">
          <h2 className="text-2xl font-black uppercase text-white tracking-tight mb-4 flex items-center gap-2">
            <Terminal className="w-6 h-6 text-violet-400" /> Ejemplos de Consultas & Configuración
          </h2>
          <p className="text-sm text-zinc-400 font-light mb-8">
            Usa el Explorador de Graph API (<span className="text-violet-400">developers.facebook.com/tools/explorer</span>) para realizar las pruebas iniciales con tu token.
          </p>

          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-2">Consulta A: Obtener Page ID de la Marca</span>
              <pre className="bg-black/50 border border-zinc-850 p-4 rounded-xl text-xs text-violet-300 overflow-x-auto">
                GET https://graph.facebook.com/v20.0/me/accounts?access_token=<span className="text-zinc-500">YOUR_SYSTEM_TOKEN</span>
              </pre>
            </div>

            <div>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-2">Consulta B: Obtener Instagram Business ID</span>
              <pre className="bg-black/50 border border-zinc-850 p-4 rounded-xl text-xs text-violet-300 overflow-x-auto">
                GET https://graph.facebook.com/v20.0/<span className="text-emerald-400">1234567890_PAGE_ID</span>?fields=instagram_business_account&access_token=<span className="text-zinc-500">YOUR_SYSTEM_TOKEN</span>
              </pre>
            </div>

            <div className="bg-zinc-800/40 border border-zinc-800 p-6 rounded-2xl">
              <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                <Info className="w-4 h-4 text-violet-400" /> Plantilla de Variables en el Panel
              </h4>
              <p className="text-xs text-zinc-400 font-light mb-4">
                Una vez completados los pasos anteriores, ingresa estos valores en la configuración de la plataforma:
              </p>
              
              <div className="overflow-x-auto text-xs">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-zinc-800 text-zinc-500">
                      <th className="pb-2 font-bold uppercase tracking-wider">Variable de Configuración</th>
                      <th className="pb-2 font-bold uppercase tracking-wider">Ejemplo / Formato</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-300 font-light divide-y divide-zinc-850">
                    <tr>
                      <td className="py-3 font-semibold text-white">ID Página Facebook</td>
                      <td className="py-3">123456789012345</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-white">ID Cuenta Instagram Business</td>
                      <td className="py-3">987654321098765 <span className="text-zinc-500">(Opcional)</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 font-semibold text-white">Token de Acceso Permanente</td>
                      <td className="py-3 text-zinc-500">EAAGbZCsOZC5e... (System User Token)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="text-center">
          <Link href="/recursos" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Volver a Recursos
          </Link>
        </div>

      </div>
    </div>
  );
}
