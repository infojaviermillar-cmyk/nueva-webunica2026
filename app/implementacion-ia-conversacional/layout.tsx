import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tienda Shopify con Chatbot: Implementación de IA Conversacional | WebUnica",
  description: "Automatiza tus ventas y soporte 24/7. Descubre cómo implementar una Tienda Shopify con Chatbot de inteligencia artificial para responder, resolver y convertir automáticamente.",
  keywords: ["Tienda Shopify con Chatbot", "IA conversacional", "Chatbot Shopify Chile", "Automatización e-commerce", "Agencia Shopify", "Ventas 24/7", "Asistente Virtual Shopify"],
  openGraph: {
    title: "Tienda Shopify con Chatbot: IA Conversacional | WebUnica",
    description: "Automatiza tus ventas y servicio al cliente 24/7 en tu tienda Shopify con un Multi Agente Resolutor de IA.",
    url: "https://webunica.cl/implementacion-ia-conversacional",
    type: "website",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Implementación de Tienda Shopify con Chatbot",
  "provider": {
    "@type": "LocalBusiness",
    "name": "WebUnica",
    "url": "https://webunica.cl"
  },
  "description": "Servicio de implementación de chatbots e inteligencia artificial conversacional para tiendas Shopify. Aumenta tu tasa de conversión y resuelve dudas de clientes 24/7 de forma automática.",
  "category": "E-commerce Development",
  "serviceType": "E-commerce Automation",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock"
  }
};

export default function ImplementacionIALayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
