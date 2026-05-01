"use client";

import { 
  MessageSquare, 
  Users, 
  FileText, 
  ThumbsUp, 
  GitBranch, 
  CloudUpload, 
  Palette, 
  Search, 
  Puzzle, 
  Rocket 
} from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Descripción",
    desc: "El cliente describe su proyecto y necesidades específicas.",
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    num: "02",
    title: "Reunión",
    desc: "Se genera una reunión estratégica para definir objetivos.",
    icon: <Users className="w-6 h-6" />
  },
  {
    num: "03",
    title: "Cotización",
    desc: "Elaboramos y presentamos la propuesta técnica y comercial.",
    icon: <FileText className="w-6 h-6" />
  },
  {
    num: "04",
    title: "Aprobación",
    desc: "El cliente acepta la cotización y damos luz verde al inicio.",
    icon: <ThumbsUp className="w-6 h-6" />
  },
  {
    num: "05",
    title: "Flujo",
    desc: "Se presenta el flujo de desarrollo y arquitectura del proyecto.",
    icon: <GitBranch className="w-6 h-6" />
  },
  {
    num: "06",
    title: "Contenido",
    desc: "El cliente envía el contenido base (textos, imágenes y logos).",
    icon: <CloudUpload className="w-6 h-6" />
  },
  {
    num: "07",
    title: "Diseño",
    desc: "Se desarrolla el theme o se adapta el diseño a medida.",
    icon: <Palette className="w-6 h-6" />
  },
  {
    num: "08",
    title: "Revisión",
    desc: "Se revisan exhaustivamente las funciones y la experiencia UX.",
    icon: <Search className="w-6 h-6" />
  },
  {
    num: "09",
    title: "Componentes",
    desc: "Se agregan componentes avanzados y apps finales de conversión.",
    icon: <Puzzle className="w-6 h-6" />
  },
  {
    num: "10",
    title: "Finalización",
    desc: "Se entrega la tienda optimizada. (De 1 a 6 semanas en total).",
    icon: <Rocket className="w-6 h-6" />
  }
];

export default function WorkProcess() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-7xl font-black text-zinc-950 tracking-tighter uppercase leading-none mb-6">
            Proceso de <span className="text-violet-600">Trabajo</span>
          </h2>
          <p className="text-xl text-zinc-500 font-light uppercase tracking-widest text-sm">
            Paso a paso hacia el lanzamiento exitoso.
          </p>
        </div>

        {/* Steps Grid - Layout similar to the image */}
        <div className="relative">
          {/* Decorative line for desktop */}
          <div className="absolute top-[60px] left-0 right-0 h-px bg-zinc-100 hidden lg:block -z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-20 gap-x-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                {/* Icon Container */}
                <div className="w-24 h-24 rounded-full bg-white border border-zinc-100 shadow-xl flex items-center justify-center mb-8 relative transition-all duration-500 group-hover:border-violet-500 group-hover:scale-110">
                  <div className="text-violet-600 transition-colors duration-500">
                    {step.icon}
                  </div>
                  {/* Step indicator */}
                  <div className="absolute -top-2 -right-2 bg-zinc-950 text-white text-[10px] font-black px-2 py-1 rounded-md">
                    {step.num}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <span className="text-[10px] font-black text-violet-500 uppercase tracking-[0.2em]">Paso {step.num}</span>
                  <h3 className="text-lg font-black text-zinc-900 uppercase tracking-tight leading-none group-hover:text-violet-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-medium leading-relaxed max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                </div>

                {/* Connecting Line for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="w-px h-12 bg-zinc-100 my-4 lg:hidden"></div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
