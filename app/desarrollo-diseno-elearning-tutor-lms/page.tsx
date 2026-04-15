import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';

export const metadata = {
  title: 'Diseño y Desarrollo de Plataformas E-learning con Tutor LMS | Webunica',
  description: 'Creamos academias online profesionales para expertos y empresas. Gestión de cursos, cuestionarios, certificados y venta automatizada con Tutor LMS y WordPress.',
  keywords: 'crear academia online chile, desarrollo elearning tutor lms, plataforma venta cursos online, diseño web academias digitales',
};

export default function ElearningPage() {
  const elearningFaqs = [
    {
      question: "¿Qué funciones incluye el sistema de E-learning?",
      answer: "Nuestras academias incluyen gestión completa de cursos, lecciones en video o texto, sistemas de cuestionarios (quizzes), entrega de certificados automáticos al terminar el curso y un panel de control para el profesor y el alumno."
    },
    {
      question: "¿Puedo vender mis cursos de forma 100% automática?",
      answer: "Sí. Integramos pasarelas de pago locales para que el alumno compre el curso y reciba sus accesos de forma instantánea, sin que tú tengas que intervenir manualmente en el proceso."
    },
    {
      question: "¿Cuántos alumnos puede soportar la plataforma?",
      answer: "Utilizamos arquitecturas optimizadas y servidores de alto rendimiento que permiten escalar desde unos pocos alumnos hasta miles de usuarios simultáneos sin pérdida de velocidad."
    },
    {
      question: "¿Es compatible la academia con dispositivos móviles?",
      answer: "Absolutamente. Los alumnos pueden estudiar desde su celular, tablet o computador con una interfaz adaptada (Responsive Design) que facilita el aprendizaje en cualquier lugar."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Desarrollo de Plataformas E-learning Tutor LMS",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Webunica"
    },
    "description": "Creación de academias digitales personalizadas para la venta y gestión de formación online.",
    "areaServed": "CL"
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="pt-32 pb-20">
        {/* Creative Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-indigo-500 uppercase bg-indigo-50 rounded-full border border-indigo-100">
                Lidera el Conocimiento Digital
              </span>
              <h1 className="text-6xl lg:text-[6rem] font-black tracking-tighter leading-[0.9] mb-10 text-zinc-900 uppercase">
                TU ACADEMIA <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">SIN LÍMITES</span>
              </h1>
              <p className="text-xl text-zinc-500 mb-12 max-w-xl leading-relaxed font-light">
                Diseñamos ecosistemas de aprendizaje de alta gama con **Tutor LMS**. Escala tu conocimiento y automatiza tus ingresos con una plataforma que ama a tus alumnos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <a 
                  href="https://calendly.com/javiermillar/reunion-webunica" 
                  target="_blank"
                  className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-center hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200"
                 >
                    Consultoría de Lanzamiento
                 </a>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-10 bg-indigo-50 rounded-full blur-[100px] -z-10" />
              <div className="rounded-[3rem] overflow-hidden border border-zinc-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] bg-white p-4">
                <Image 
                  src="/portfolio_elearning_premium_1776264477769.png"
                  alt="E-learning Platform Dashboard Showcase"
                  width={800}
                  height={800}
                  className="w-full h-auto rounded-[2rem] transform group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="bg-zinc-50 py-32 border-y border-zinc-100 px-6">
           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { t: 'Video Streaming Pro', d: 'Integración con Vimeo o YouTube para una reproducción fluida sin distracciones.' },
                { t: 'Certificados PRO', d: 'Generación automática de diplomas personalizados en PDF al finalizar los cursos.' },
                { t: 'Múltiples Instructores', d: 'Permite que otros expertos suban sus cursos y compartan ingresos automáticamente.' },
                { t: 'App Desktop & Mobile', d: 'Tus cursos disponibles en todos los dispositivos con una experiencia de app nativa.' }
              ].map((f, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-zinc-200 hover:border-indigo-300 transition-all group">
                   <h3 className="text-lg font-bold mb-3 text-zinc-900">{f.t}</h3>
                   <p className="text-zinc-500 text-sm leading-relaxed">{f.d}</p>
                </div>
              ))}
           </div>
        </section>

        {/* FAQ Section */}
        <div className="mt-20">
          <FAQSection 
            faqs={elearningFaqs}
            title="Dudas sobre Academias Online"
            description="Todo lo que necesitas saber antes de digitalizar tu conocimiento."
            ctaTitle="¿Convertimos tu pasión en un negocio escalable?"
            ctaDescription="Agenda una reunión para planificar la estructura de tu academia y el flujo de ventas automatizado."
            ctaLabel="Agendar Consultoría E-learning"
          />
        </div>

        {/* CTA Case Study */}
        <section className="py-32">
           <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-extrabold mb-10 text-zinc-900 tracking-tight">Tu conocimiento merece una <br/>Plataforma de Élite</h2>
              <p className="text-xl text-zinc-500 mb-12 italic font-serif">No te conformes con soluciones de suscripción lentas. Construye tu propio activo comercial.</p>
              <a 
                href="https://calendly.com/javiermillar/reunion-webunica" 
                target="_blank"
                className="inline-block px-12 py-6 bg-indigo-600 text-white font-bold text-lg rounded-2xl hover:bg-indigo-700 transition-all shadow-2xl"
              >
                Solicitar Estructura de Academia
              </a>
           </div>
        </section>
      </main>
    </div>
  );
}
