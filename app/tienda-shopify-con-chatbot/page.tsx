"use client";

import { motion } from "framer-motion";
import { MessageSquare, Clock, TrendingUp, Users, Zap, CheckCircle2, ArrowRight, Bot, BarChart3, ShieldCheck } from "lucide-react";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function TiendaShopifyChatbotPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-indigo-500/30 font-sans">
      
      {/* Navbar Minimalista */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight flex items-center gap-2">
            <Bot className="w-6 h-6 text-indigo-400" />
            <span>IA Commerce</span>
          </div>
          <Link 
            href="#agendar" 
            className="text-sm font-medium bg-white text-slate-950 px-5 py-2.5 rounded-full hover:bg-indigo-50 transition-colors"
          >
            Agendar Demo
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-12 pb-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="relative z-10 text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Solución para Tiendas Shopify
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
              Descubre cómo hablan <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">tus clientes.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto font-light">
              Responde, resuelve y convierte 24/7. Integra un chatbot inteligente en tu Tienda Shopify y transforma cada conversación en una venta.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="#agendar" 
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all"
              >
                Evaluar Implementación
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* The Problem Statement */}
        <section className="py-24 bg-slate-900 border-y border-white/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">El nuevo cuello de botella <br/> está en la conversación.</h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">¿Cuánto estás perdiendo por no responder a tiempo?</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-950/50 p-10 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-rose-500/30 transition-colors"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Clock className="w-32 h-32 text-rose-500" />
                </div>
                <div className="relative z-10">
                  <div className="text-7xl font-bold text-rose-500 mb-4">80<span className="text-5xl">%</span></div>
                  <h3 className="text-2xl font-semibold mb-2">Abandono Crítico</h3>
                  <p className="text-slate-400 text-lg">De los clientes abandonan si no reciben respuesta en menos de 2 minutos.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-950/50 p-10 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-orange-500/30 transition-colors"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <MessageSquare className="w-32 h-32 text-orange-500" />
                </div>
                <div className="relative z-10">
                  <div className="text-7xl font-bold text-orange-500 mb-4">70<span className="text-5xl">%</span></div>
                  <h3 className="text-2xl font-semibold mb-2">Chats Perdidos</h3>
                  <p className="text-slate-400 text-lg">De los chats quedan sin respuesta o se contestan fuera de tiempo, frustrando a tus clientes.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Tu negocio siempre On.<br/><span className="text-indigo-400">Multi Agente Resolutor.</span></h2>
            <p className="text-xl text-slate-400 max-w-2xl">Un solo chatbot en tu Tienda Shopify que acompaña a tus clientes en todo el proceso: preventa, venta y posventa.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Marketing", stat: "72%", desc: "Apertura en campañas outbound", icon: Zap, color: "text-yellow-400" },
              { title: "Soporte", stat: "80%", desc: "Dudas resueltas 24/7", icon: ShieldCheck, color: "text-emerald-400" },
              { title: "Ventas", stat: "↑", desc: "Aumenta tu tasa de conversión", icon: TrendingUp, color: "text-indigo-400" },
              { title: "Prospectos", stat: "68%", desc: "Leads perfilados y capturados", icon: Users, color: "text-cyan-400" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900 border border-white/5 p-8 rounded-3xl hover:bg-slate-800/50 transition-colors"
              >
                <item.icon className={`w-10 h-10 ${item.color} mb-6`} />
                <div className="text-4xl font-bold mb-2">{item.stat}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features / Differentiation */}
        <section className="py-24 bg-slate-900 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">¿Qué hace a nuestra IA diferente?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Responde como tu mejor vendedor", desc: "Es la conciencia de tu negocio. Entrenada con tus manuales y políticas." },
                { title: "Captura datos y perfila", desc: "Sin fricción y conversacional, para que el cliente no sienta que llena un formulario." },
                { title: "Identifica intención", desc: "Dirige el flujo exacto según lo que el cliente necesite: comprar, devolver, reclamar." },
                { title: "Impulsa métricas clave", desc: "Control total de KPIs de conversión y reportería en tiempo real." },
                { title: "IA + Humanos", desc: "Derivación inteligente a agentes vivos para que tu equipo se enfoque en lo esencial." },
                { title: "100% Adaptable", desc: "Lo integramos a tu Shopify y a tu ecosistema tecnológico actual." }
              ].map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-950 p-8 rounded-3xl border border-white/5"
                >
                  <CheckCircle2 className="w-8 h-8 text-indigo-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feat.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feat.desc}</p>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Implementación Ágil y Guiada</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">Trabajamos en conjunto para asegurar la usabilidad y calidad de tu asistente virtual.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {/* Connecting line hidden on mobile */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-800 -translate-y-1/2 z-0" />
            
            {[
              { day: "Día 1", title: "Kickoff", desc: "Alineamos expectativas, alcance y hoja de ruta." },
              { day: "Día 2-7", title: "Configuración", desc: "Plataforma activa, conexión a Shopify y reglas base." },
              { day: "Día 8-13", title: "Capacitación", desc: "Tu equipo aprende a gestionar la plataforma de forma autónoma." },
              { day: "Día 14", title: "Puesta en Marcha", desc: "Salida oficial a producción y seguimiento en tiempo real." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative z-10 bg-slate-900 border border-indigo-500/20 p-8 rounded-3xl flex flex-col h-full"
              >
                <div className="text-indigo-400 font-bold mb-2 tracking-wide uppercase text-sm">{step.day}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-400 text-sm flex-grow">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section id="agendar" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-indigo-600/10" />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-8"
            >
              La IA generativa no es promesa, es <span className="text-indigo-400">ventaja competitiva</span>.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto"
            >
              Deja de perder ventas por falta de respuesta. Automatiza hasta el 80% de tus consultas de tu Tienda Shopify.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a 
                href="mailto:contacto@webunica.cl?subject=Me%20interesa%20evaluar%20la%20implementaci%C3%B3n%20del%20Chatbot%20para%20Shopify" 
                className="inline-flex items-center justify-center gap-3 bg-white text-slate-950 hover:bg-slate-100 px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-white/10 hover:shadow-white/20"
              >
                Agendar Reunión de Evaluación
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-sm text-slate-500 mt-6 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Sin compromisos. Analizamos tu caso específico.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} IA Commerce para Shopify. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
