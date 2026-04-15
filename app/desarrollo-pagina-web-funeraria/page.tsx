import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/sections/faq-section';

export const metadata = {
  title: 'Diseño Web para Funerarias y Obituarios Digitales | Webunica',
  description: 'Creamos plataformas digitales para funerarias con sistemas de obituarios eternos, condolencias online y gestión de servicios con respeto y elegancia.',
  keywords: 'paginas web funerarias chile, obituarios digitales, diseño web funerario profesional, sistemas de condolencias online',
};

export default function FuneralPage() {
  const funeralFaqs = [
    {
      question: "¿Qué es exactamente un obituario digital?",
      answer: "Es un espacio de homenaje eterno en la web de la funeraria. Permite a los seres queridos compartir fotos, encender velas virtuales y dejar mensajes de condolencia que perduran en el tiempo, creando un legado digital respetuoso."
    },
    {
      question: "¿Cómo se gestionan las condolencias para evitar mensajes inapropiados?",
      answer: "Contamos con un sistema de moderación donde la funeraria o la familia pueden aprobar los mensajes antes de que se publiquen. Todo se maneja bajo estrictos criterios de respeto y privacidad."
    },
    {
      question: "¿Es el sitio fácil de usar para personas mayores?",
      answer: "Sí. Diseñamos con interfaces ultra-limpias, tipografías legibles y botones claros. El objetivo es que cualquier persona, sin importar su edad o habilidad técnica, pueda acceder y rendir homenaje sin complicaciones."
    },
    {
      question: "¿Se puede actualizar la información del velorio en tiempo real?",
      answer: "Totalmente. El sistema permite actualizar horarios, direcciones vinculadas a Google Maps y avisos de ceremonias al instante, manteniendo a la comunidad informada de forma oportuna."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Diseño Web Funerario y Obituarios Digitales",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Webunica"
    },
    "description": "Sitios web respetuosos y tecnológicos para el sector funerario, con servicios de memoria digital.",
    "areaServed": "CL"
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="pt-[20vh]">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 text-zinc-950">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-zinc-400 uppercase bg-zinc-50 rounded-full border border-zinc-100">
              Dignidad y Memoria Eterna
            </span>
            <h1 className="text-5xl lg:text-[5.5rem] font-bold tracking-tight text-zinc-900 leading-[1.0] mb-8">
              Innovación con <span className="text-zinc-400 font-serif italic">Respeto</span>
            </h1>
            <p className="text-xl text-zinc-600 leading-relaxed max-w-2xl text-pretty">
              Transformamos la presencia digital de las funerarias en refugios de memoria y consuelo, integrando tecnología de obituarios digitales de última generación.
            </p>
            <div className="mt-10">
               <a 
                href="https://calendly.com/javiermillar/reunion-webunica" 
                target="_blank"
                className="px-12 py-5 bg-zinc-900 text-white font-bold rounded-2xl hover:bg-zinc-800 transition-all shadow-xl"
               >
                Agendar Reunión de Asesoría
               </a>
            </div>
          </div>

          <div className="relative max-w-6xl mx-auto group">
            <div className="absolute -inset-4 bg-zinc-100 rounded-[4rem] -z-10 group-hover:bg-zinc-200/50 transition-colors" />
            <div className="rounded-[3rem] overflow-hidden border border-zinc-100 shadow-2xl">
              <Image 
                src="/funeraria_premium_obituary_1776265975527.png"
                alt="Digital Obituary Platform Showcase"
                width={1200}
                height={700}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Value Proposition: Obituaries */}
        <section className="bg-zinc-50 py-32 border-y border-zinc-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-zinc-950">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div>
                  <h2 className="text-4xl font-bold text-zinc-900 mb-8 leading-tight">Obituarios Digitales: <br/>Un Legado que no se Olvida</h2>
                  <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                    Nuestra solución exclusiva para funerarias permite crear un espacio de memoria único para cada familia, donde las flores físicas se transforman en mensajes eternos de amor y respeto.
                  </p>
                  <ul className="space-y-6">
                    {[
                      'Muros de condolencias moderados y privados.',
                      'Galerías fotográficas de homenaje perpetuo.',
                      'Sincronización con redes sociales para avisos de velorio.',
                      'Código QR en la lápida que lleva al obituario online.',
                      'Sistema de encendido de velas virtuales.'
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-4 items-start text-zinc-700">
                        <span className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center flex-shrink-0 mt-1 text-xs">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white p-10 rounded-3xl border border-zinc-200 shadow-sm h-fit">
                    <h3 className="text-xl font-bold mb-4">Atención 24/7</h3>
                    <p className="text-zinc-500 text-sm">Botones de contacto urgente siempre visibles y con ruteo directo a guardias de turno.</p>
                  </div>
                  <div className="bg-white p-10 rounded-3xl border border-zinc-200 shadow-sm translate-y-8 h-fit">
                    <h3 className="text-xl font-bold mb-4 text-black">Mapa de Velorios</h3>
                    <p className="text-zinc-500 text-sm">Integración con Google Maps para que familiares lleguen sin complicaciones a las capillas.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection 
          faqs={funeralFaqs}
          title="Preguntas sobre Sitios Funerarios"
          description="Acompañamos tu prestigio con tecnología que brinda paz y consuelo en momentos difíciles."
          ctaTitle="¿Desea modernizar su servicio funerario?"
          ctaDescription="Agenda una reunión respetuosa para conversar sobre cómo integrar el Obituario Digital en su oferta."
        />

        {/* CTA */}
        <section className="py-32">
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold text-zinc-900 mb-8">Modernice su funeraria con distinción</h2>
            <p className="text-xl text-zinc-600 mb-12 italic font-serif">Acompañamos su prestigio con la mejor tecnología de acompañamiento digital de Chile.</p>
            <a 
              href="https://calendly.com/javiermillar/reunion-webunica" 
              target="_blank"
              className="inline-block px-12 py-6 bg-zinc-900 text-white font-bold text-lg rounded-2xl hover:bg-zinc-800 transition-all shadow-2xl"
            >
              Consultar Proyecto Funerario
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
