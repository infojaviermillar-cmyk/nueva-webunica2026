import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata = {
  title: 'Diseño de Páginas Web para Pymes en Chile | Webunica',
  description: 'Creamos sitios web profesionales para pequeñas y medianas empresas. Diseño moderno, optimizado para celulares y enfocado en generar leads certificados.',
  keywords: 'paginas web pymes, diseño web empresas chile, sitio web corporativo profesional, desarrollo web pyme',
};

export default function PymesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Diseño Web Profesional para Pymes",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Webunica",
      "image": "https://webunica.cl/wp-content/uploads/2024/01/logo-webunica.png.webp"
    },
    "description": "Sitios web corporativos de alto impacto para empresas que buscan profesionalizar su imagen digital.",
    "areaServed": "CL"
  };

  return (
    <div className="min-h-screen bg-zinc-50/50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      <main className="pt-[25vh]">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-emerald-600 uppercase bg-emerald-50 rounded-full">
                Efectividad y Profesionalismo
              </span>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-zinc-900 leading-[1.1] mb-8">
                Toda Empresa <span className="text-emerald-600 block">Merece un Gran Sitio</span>
              </h1>
              <p className="text-xl text-zinc-600 leading-relaxed mb-10 max-w-xl">
                No arriesgues la primera impresión de tu negocio. Diseñamos sitios web que no solo se ven increíbles, sino que están construidos para generar confianza y atraer clientes calificados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/cotizador-en-linea-desarrollo-web"
                  className="px-8 py-4 bg-zinc-900 text-white rounded-2xl font-bold text-center hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200"
                >
                  Empezar Ahora
                </Link>
                <div className="flex items-center gap-4 px-4 text-zinc-500 font-medium">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    ✓
                  </div>
                  Listo en 10-15 días
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                <Image 
                  src="/portfolio_pymes_premium_1776264418419.png"
                  alt="Pymes Web Design Showcase"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-32 border-y border-zinc-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { title: 'Google Friendly', desc: 'Optimizado estructuralmente para aparecer en los resultados locales.' },
                { title: 'Ultra Rápido', desc: 'Velocidad de carga optimizada para no perder ni un solo cliente.' },
                { title: 'Multi-dispositivo', desc: 'Se ve perfecto en iPhone, Android, Tablet y Computador.' },
                { title: 'Fácil de Editar', desc: 'Panel autogestionable para que actualices contenido sin depender de nadie.' }
              ].map((feature, i) => (
                <div key={i} className="flex flex-col">
                  <div className="h-1 w-12 bg-emerald-500 mb-6" />
                  <h3 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
                  <p className="text-zinc-600 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study / Social Proof */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-zinc-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <blockquote className="text-2xl lg:text-3xl font-medium text-zinc-100 italic leading-snug mb-8">
                  "Webunica transformó nuestra presencia digital. Pasamos de ser una empresa local a tener clientes en todo el país gracias a nuestro nuevo sitio."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-white">
                    JP
                  </div>
                  <div>
                    <p className="text-white font-bold">Juan Pérez</p>
                    <p className="text-zinc-400 text-sm">Director en Inversiones Araucanía</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center lg:text-right">
                <Link
                  href="/cotizador-en-linea-desarrollo-web"
                  className="inline-block px-10 py-5 bg-emerald-500 text-white rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-colors shadow-xl shadow-emerald-500/20"
                >
                  Hacer lo mismo por mi Pyme
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
