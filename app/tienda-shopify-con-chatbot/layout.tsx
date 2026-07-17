import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tienda Shopify con Chatbot | Automatiza tus Ventas 24/7",
  description: "Descubre cómo un chatbot de IA para tu tienda Shopify puede responder, resolver y convertir automáticamente. Aumenta tus ventas, mejora la atención al cliente y no pierdas más oportunidades.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
