import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Webunica Commerce Studio",
  description: "Simulador visual e interactivo de tiendas online",
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
