"use client";

import { motion } from "framer-motion";
import { 
  ShoppingBag, 
  Rocket, 
  ShieldCheck, 
  Zap, 
  CreditCard, 
  Truck, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const PLANS = [
  {
    name: "Tienda Shopify PRENDE",
    price: "$580.000",
    iva: "+ IVA",
    description: "Ideal para emprendedores que buscan su primera tienda profesional.",
    features: [
      "Configuración básica Shopify",
      "Hasta 70 productos",
      "Integración Transbank/Flow",
      "Diseño responsive premium",
      "Capacitación básica",
    ],
    highlight: false,
    cta: "Cotizar Prende"
  },
  {
    name: "Tienda Shopify FULL",
    price: "$780.000",
    iva: "+ IVA",
    description: "Enfocada en marketing y conversión para negocios en crecimiento.",
    features: [
      "Hasta 120 productos",
      "GA4 & Meta Pixel Setup",
      "Newsletter & Email Marketing",
      "Automatizaciones de carrito",
      "Capacitación avanzada",
    ],
    highlight: true,
    cta: "Cotizar Full"
  },
  {
    name: "Tienda Shopify PRO",
    price: "$1.200.000",
    iva: "+ IVA",
    description: "Solución de alto nivel con integraciones ERP y escalabilidad.",
    features: [
      "Hasta 300 productos",
      "Integración Bsale/ERP",
      "Optimización de velocidad PRO",
      "Klaviyo / Mailchimp Setup",
      "Soporte prioritario",
    ],
    highlight: false,
    cta: "Cotizar Pro"
  }
];

const INTEGRATIONS = [
  { name: "Transbank", icon: CreditCard, color: "text-red-600" },
  { name: "Mercado Pago", icon: CreditCard, color: "text-blue-500" },
  { name: "Flow", icon: CreditCard, color: "text-orange-500" },
  { name: "Bluexpress", icon: Truck, color: "text-blue-700" },
  { name: "Starken", icon: Truck, color: "text-red-700" },
  { name: "Shipit", icon: Truck, color: "text-purple-600" },
];

export default function ShopifyDesignPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-[120px] pb-20 overflow-hidden bg-brand-soft">
        <div className="container relative z-10 px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <Badge className="w-fit bg-brand-purple/10 text-brand-purple border-brand-purple/20 px-4 py-1">
                Shopify Partners Chile 🇨🇱
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9] text-brand-purple uppercase">
                Diseño Web <br />
                <span className="gradient-text">Shopify Chile</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Transformamos tu marca en una poderosa máquina de ventas. Diseño profesional, integración de pagos locales y logística automatizada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" className="h-16 px-8 rounded-full text-lg font-bold brand-gradient text-white border-0 shadow-xl hover:scale-105 transition-transform">
                  Ver Planes <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-8 rounded-full text-lg font-bold glass border-brand-purple/20 hover:bg-brand-purple/5">
                  Agendar Reunión
                </Button>
              </div>
              <div className="flex items-center gap-6 mt-8 overflow-x-auto pb-4 scrollbar-hide">
                {INTEGRATIONS.slice(0, 4).map((item) => (
                  <div key={item.name} className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className="font-bold text-sm uppercase tracking-widest">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white brand-glow">
                {/* Note: In a real project we would use the actual path. For now we use the generated image name. */}
                <img 
                  src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2089" 
                  alt="Shopify Design Chile" 
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-green/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-purple/10 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-brand-purple uppercase tracking-tight leading-none">
              ¿Por qué elegir <span className="gradient-text">Webunica</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              No solo hacemos webs, construimos negocios rentables con tecnología de punta y conocimiento local.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Velocidad de Carga", desc: "Tiendas optimizadas para pasar el Core Web Vitals y vender más." },
              { icon: ShieldCheck, title: "Pagos Seguros", desc: "Integración nativa con Transbank, Flow y Mercado Pago en Chile." },
              { icon: Rocket, title: "Escalabilidad", desc: "Tu tienda crece contigo, desde 10 hasta 10.000 pedidos al día." },
            ].map((f, i) => (
              <Card key={i} className="border-0 shadow-sm bg-brand-soft/50 rounded-3xl p-6 hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm">
                  <f.icon className="w-8 h-8 text-brand-purple" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-purple">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-brand-soft/30">
        <div className="container px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <Badge className="bg-brand-green/10 text-brand-green border-brand-green/20">Planes Shopify</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-brand-purple uppercase tracking-tight leading-none">
              Inversión para tu <span className="gradient-text">Éxito Digital</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLANS.map((plan, i) => (
              <Card key={i} className={`relative flex flex-col border-2 rounded-[2.5rem] p-4 transition-all ${plan.highlight ? 'border-brand-purple bg-white scale-105 shadow-2xl md:z-10' : 'border-transparent bg-white/50 shadow-lg'}`}>
                {plan.highlight && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-purple text-white px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest shadow-xl">
                    Más Popular
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl font-black text-brand-purple">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground mt-2">{plan.description}</CardDescription>
                  <div className="mt-8">
                    <span className="text-5xl font-black text-brand-purple italic tracking-tight">{plan.price}</span>
                    <span className="text-muted-foreground font-bold ml-2 italic">{plan.iva}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 mt-6">
                  <ul className="space-y-4">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-3 font-medium text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pb-8 pt-10">
                  <Button className={`w-full h-14 rounded-2xl font-black text-lg transition-all ${plan.highlight ? 'brand-gradient text-white shadow-lg' : 'bg-brand-purple/10 text-brand-purple hover:bg-brand-purple hover:text-white'}`}>
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container px-6 mx-auto">
          <div className="relative rounded-[3.5rem] overflow-hidden brand-gradient p-12 md:p-20 text-center text-white shadow-2xl">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <ShoppingBag className="w-64 h-64" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tight">
                ¿Listo para vender en grande hoy mismo?
              </h2>
              <p className="text-xl opacity-90 font-medium">
                Únete a las más de 100 empresas que confían en Webunica para su canal de ecommerce en Chile.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                <Button className="h-16 px-12 rounded-full bg-white text-brand-purple font-black text-xl hover:scale-105 transition-transform shadow-xl">
                   ¡Empezar Proyecto!
                </Button>
                <Button className="h-16 px-12 rounded-full bg-black/20 backdrop-blur-md text-white border-white/20 font-black text-xl hover:bg-black/30 transition-all">
                  <MessageSquare className="mr-2 w-6 h-6" /> WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
