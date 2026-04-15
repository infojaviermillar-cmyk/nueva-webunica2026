import Link from 'next/link';

export const metadata = {
  title: 'Desarrollo de Academias E-Learning con Tutor LMS en Chile',
  description: 'Creamos plataformas educativas seguras, automatizadas y enfocadas en la experiencia del alumno usando Tutor LMS. Monetiza tus conocimientos.',
};

export default function DesarrolloLMSPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Spacer para el Header Transparente */}
      <div className="h-24 bg-[#FDFDFD]"></div>

      {/* Hero Section: E-Learning Series (Orange/Warm Theme) */}
      <section className="relative w-full pt-16 pb-32 overflow-hidden bg-gradient-to-b from-orange-50 to-white rounded-b-[4rem] md:rounded-b-[6rem]">
        {/* Decoraciones Circulares */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-yellow-300/30 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Texto Principal */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 border border-orange-200 rounded-full text-orange-700 font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                Educación Digital
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[70px] text-zinc-900 font-extrabold leading-[1.1] mb-6 text-balance">
                Desarrollo de <span className="text-orange-500">Academias Online</span> y Tutor LMS
              </h1>
              <p className="text-xl text-zinc-600 mb-10 leading-relaxed text-pretty">
                Monetiza tu conocimiento de manera profesional. Diseñamos ecosistemas E-Learning completamente automatizados, con protección de video, pasarelas de pago y aulas interactivas que retienen a tus alumnos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/cotizador-en-linea-desarrollo-web" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all transform hover:-translate-y-1 shadow-xl shadow-orange-500/30 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  Cotizar mi Academia
                </Link>
              </div>
            </div>

            {/* Ilustración Abstracta Video Player / LMS */}
            <div className="relative hidden lg:block h-[500px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[340px] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Pantalla del Reproductor Simulada */}
                <div className="relative flex-grow bg-zinc-950 flex justify-center items-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent"></div>
                  {/* Botón de Play Abstracto */}
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                     <svg className="w-8 h-8 text-orange-500 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                  {/* Barra de progreso de video iterativa */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                    <div className="text-xs text-white/50 font-mono">12:34</div>
                    <div className="flex-grow h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-[45%] h-full bg-orange-500"></div>
                    </div>
                    <div className="text-xs text-white/50 font-mono">28:10</div>
                  </div>
                </div>
                {/* Lista lateral de módulos iterativa simulando LMS */}
                <div className="h-[90px] bg-zinc-900 border-t border-zinc-800 flex items-center justify-center gap-4 px-6 overflow-hidden">
                   <div className="flex-1 h-12 bg-zinc-800 rounded-lg border border-orange-500/50 flex flex-col justify-center px-3 relative">
                     <div className="absolute left-0 top-0 h-full w-1 bg-orange-500 rounded-l-lg"></div>
                     <div className="w-3/4 h-2 bg-white/20 rounded mb-1"></div>
                     <div className="w-1/2 h-2 bg-orange-500/50 rounded"></div>
                   </div>
                   <div className="flex-1 h-12 bg-zinc-800 rounded-lg flex flex-col justify-center px-3 opacity-50">
                     <div className="w-3/4 h-2 bg-white/20 rounded mb-1"></div>
                     <div className="w-1/2 h-2 bg-white/10 rounded"></div>
                   </div>
                </div>
              </div>
              
              {/* Badge Flotante de Estudiantes */}
              <div className="absolute bottom-[5%] left-[-5%] bg-white rounded-2xl shadow-xl shadow-orange-900/10 p-4 flex items-center gap-3 border border-zinc-50 transform -rotate-3 hover:scale-105 transition-transform duration-500 font-sans">
                 <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
                 </div>
                 <div className="flex flex-col">
                   <span className="text-zinc-900 font-bold text-sm tracking-tight">+5,000 Alumnos</span>
                   <span className="text-zinc-500 text-xs text-balance">Soporta alto tráfico</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features y Estructura */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-zinc-900 mb-6 text-balance">
                Implementación Experta de E-Learning
              </h2>
              <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                A diferencia de alquilar plataformas costosas mensualmente (como Teachable o Kajabi), al contratar el desarrollo de tu Academia Online tú posees el 100% de la propiedad y el control de tus usuarios. Construimos estructuras sólidas sobre WordPress utilizando Tutor LMS Pro.
              </p>
              <ul className="space-y-4">
                {[
                  'Cuestionarios avanzados, tareas y exámenes calificados', 
                  'Pagos integrados locales (Webpay) o internacionales (PayPal / Stripe)', 
                  'Generación automática de Certificados PDF personalizados', 
                  'Dashboards independientes para instructores y alumnos'
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-zinc-700">
                    <svg className="w-5 h-5 text-orange-500 mr-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    <span className="font-medium text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-zinc-50 border border-zinc-100 rounded-[2.5rem] p-10 shadow-lg shadow-zinc-200/50">
               <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-zinc-900">
                    Protección de Contenido
                  </h3>
               </div>
               
               <p className="text-zinc-600 leading-relaxed mb-6">
                 Tu activo intelectual es lo más importante. Evita que usuarios sin autorización descarguen o compartan rus cursos configurando medidas extremas de seguridad digital.
               </p>
               
               <div className="space-y-4">
                  <div className="bg-white p-4 rounded-2xl border border-zinc-100 flex items-center gap-4 shadow-sm">
                     <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-xs font-bold font-mono tracking-widest">DRM</span>
                     <span className="text-sm font-semibold text-zinc-800">Protección de Descargas de Video</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-zinc-100 flex items-center gap-4 shadow-sm">
                     <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-xs font-bold font-mono tracking-widest">SUB</span>
                     <span className="text-sm font-semibold text-zinc-800">Contención de Múltiples Logins IP</span>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-zinc-950 rounded-[3rem] overflow-hidden shadow-2xl relative">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-orange-600 skew-x-12 transform translate-x-40 blur-3xl opacity-20 pointer-events-none"></div>
            <div className="relative z-10 p-12 md:p-20 text-center flex flex-col items-center">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl text-balance">
                ¿Listo para convertir a tus seguidores en alumnos matriculados?
              </h2>
              <p className="text-xl text-zinc-400 mb-10 max-w-2xl text-pretty">
                Despídete del estrés de perder dinero comisiones mensuales. Vende tus cursos bajo tu propia marca y reglas.
              </p>
              <Link href="/cotizador-en-linea-desarrollo-web" className="group flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-extrabold px-10 py-5 rounded-2xl text-lg transition-all shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 transform hover:-translate-y-1">
                Construir mi Plataforma LMS
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}