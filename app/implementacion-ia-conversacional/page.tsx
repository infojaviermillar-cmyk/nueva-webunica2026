"use client";

import { motion } from "framer-motion";
import { MessageSquare, Clock, TrendingUp, Users, Zap, CheckCircle2, ArrowRight, Bot, ShieldCheck } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function ImplementacionIAPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-500/30 font-sans overflow-hidden">
      
      {/* Navbar Minimalista (Claro) */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight flex items-center gap-2">
            <Bot className="w-6 h-6 text-indigo-600" />
            <span>IA Commerce</span>
          </div>
          <Link 
            href="#agendar" 
            className="text-sm font-medium bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors"
          >
            Agendar Demo
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 relative">
        
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-40 left-0 -ml-20 w-72 h-72 rounded-full bg-indigo-100/60 blur-3xl -z-10 pointer-events-none" />

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 relative">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="relative z-10 text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              Tu Tienda Shopify con Chatbot de IA
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight text-slate-900">
              Descubre cómo hablan <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">tus clientes.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl mx-auto font-light">
              Responde, resuelve y convierte 24/7. Integra inteligencia artificial conversacional en tu Tienda Shopify y transforma cada interacción en una venta.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="#agendar" 
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg shadow-indigo-600/20"
              >
                Evaluar Implementación
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* The Problem Statement */}
        <section className="py-24 bg-white border-y border-slate-200 relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">El nuevo cuello de botella <br/> está en la conversación.</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">¿Cuánto estás perdiendo en tu e-commerce por no responder a tiempo?</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-10 rounded-3xl border border-slate-200 relative overflow-hidden group hover:border-rose-300 transition-colors shadow-sm"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Clock className="w-32 h-32 text-rose-600" />
                </div>
                <div className="relative z-10">
                  <div className="text-7xl font-bold text-rose-600 mb-4">80<span className="text-5xl">%</span></div>
                  <h3 className="text-2xl font-semibold mb-2 text-slate-800">Abandono Crítico</h3>
                  <p className="text-slate-600 text-lg">De los clientes abandonan la tienda si no reciben respuesta en menos de 2 minutos.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-10 rounded-3xl border border-slate-200 relative overflow-hidden group hover:border-orange-300 transition-colors shadow-sm"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <MessageSquare className="w-32 h-32 text-orange-600" />
                </div>
                <div className="relative z-10">
                  <div className="text-7xl font-bold text-orange-500 mb-4">70<span className="text-5xl">%</span></div>
                  <h3 className="text-2xl font-semibold mb-2 text-slate-800">Chats Perdidos</h3>
                  <p className="text-slate-600 text-lg">De los chats quedan sin respuesta o se contestan fuera de tiempo, frustrando a tus compradores.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="py-24 max-w-7xl mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Tu negocio siempre On.<br/><span className="text-indigo-600">Multi Agente Resolutor.</span></h2>
            <p className="text-xl text-slate-600 max-w-2xl">Un solo chatbot impulsado por IA en tu Tienda Shopify que acompaña a tus clientes en todo el proceso de preventa, venta y posventa.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Marketing", stat: "72%", desc: "Apertura en campañas outbound", icon: Zap, color: "text-amber-500", bg: "bg-amber-50" },
              { title: "Soporte", stat: "80%", desc: "Dudas resueltas automáticamente 24/7", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-50" },
              { title: "Ventas", stat: "↑", desc: "Aumenta tu tasa de conversión global", icon: TrendingUp, color: "text-indigo-600", bg: "bg-indigo-50" },
              { title: "Prospectos", stat: "68%", desc: "Leads perfilados y capturados con éxito", icon: Users, color: "text-cyan-500", bg: "bg-cyan-50" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-200 p-8 rounded-3xl hover:shadow-lg hover:shadow-slate-200/50 transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}>
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <div className="text-4xl font-bold mb-2 text-slate-800">{item.stat}</div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features / Differentiation */}
        <section className="py-24 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">¿Qué hace a nuestra IA diferente?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Responde como tu mejor vendedor", desc: "Es la conciencia de tu negocio. La IA se entrena con los manuales, productos y políticas de tu marca." },
                { title: "Captura datos y perfila", desc: "Sin fricción y de forma conversacional, para que el cliente entregue sus datos sin sentir que llena un formulario." },
                { title: "Identifica intención", desc: "Dirige el flujo exacto según lo que el cliente necesite: estado de envío, comprar, devolver o reclamar." },
                { title: "Impulsa métricas clave", desc: "Control total de KPIs de conversión en e-commerce y reportería en tiempo real para la toma de decisiones." },
                { title: "IA + Humanos", desc: "Derivación inteligente a agentes vivos (Livechat) para que tu equipo se enfoque solo en casos complejos." },
                { title: "100% Adaptable", desc: "Lo integramos perfectamente a tu Shopify y a tu ecosistema tecnológico actual de forma transparente." }
              ].map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:bg-slate-100 transition-colors"
                >
                  <CheckCircle2 className="w-8 h-8 text-indigo-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">{feat.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-24 max-w-7xl mx-auto px-6">
           <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Implementación Ágil y Guiada</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Trabajamos en conjunto para asegurar la máxima calidad y usabilidad de tu asistente virtual.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line hidden on mobile */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-indigo-100 -translate-y-1/2 z-0" />
            
            {[
              { day: "Día 1", title: "Kickoff", desc: "Alineamos expectativas, alcance del chatbot y hoja de ruta." },
              { day: "Día 2-7", title: "Configuración", desc: "Plataforma activa, conexión a tu Shopify y reglas base de IA." },
              { day: "Día 8-13", title: "Capacitación", desc: "Tu equipo aprende a gestionar y supervisar la plataforma." },
              { day: "Día 14", title: "Puesta en Marcha", desc: "Salida oficial a producción en tu web y seguimiento continuo." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative z-10 bg-white border border-indigo-100 shadow-sm p-8 rounded-3xl flex flex-col h-full hover:-translate-y-1 transition-transform"
              >
                <div className="text-indigo-600 font-bold mb-3 tracking-wide uppercase text-sm">{step.day}</div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{step.title}</h3>
                <p className="text-slate-600 text-sm flex-grow">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section id="agendar" className="py-24 relative overflow-hidden mt-12 rounded-3xl mx-6 bg-indigo-600 text-white shadow-2xl">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-2xl" />
          
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            >
              La IA generativa no es promesa, <br/>es <span className="text-indigo-200">ventaja competitiva</span>.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-indigo-100 mb-10 font-light max-w-2xl mx-auto"
            >
              Deja de perder ventas por falta de respuesta. Automatiza el 80% de las consultas en tu Tienda Shopify.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a 
                href="mailto:contacto@webunica.cl?subject=Me%20interesa%20evaluar%20la%20implementaci%C3%B3n%20del%20Chatbot%20para%20Shopify" 
                className="inline-flex items-center justify-center gap-3 bg-white text-indigo-700 hover:bg-slate-50 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl hover:scale-105"
              >
                Agendar Reunión de Evaluación
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-sm text-indigo-200 mt-6 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Sin compromisos. Analizamos tu caso específico.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

    </div>
  );
}
