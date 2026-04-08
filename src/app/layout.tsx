import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceSans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const spaceHeading = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://webunica.cl'),
  title: {
    default: "Webunica | Diseño Web Shopify Chile & Desarrollo Ecommerce",
    template: "%s | Webunica Chile"
  },
  description: "Diseño Web Shopify Chile, desarrollo web Shopify en Chile, formas de pago Transbank, Mercado Pago, Flow, paypal, metodos envios bluexpress.",
  keywords: [
    "diseño web shopify chile",
    "desarrollo web Shopify en Chile",
    "shopify chile",
    "ecommerce chile",
    "transbank shopify",
    "mercado pago shopify",
    "bluexpress shopify",
    "desarrollo web profesional",
    "webunica",
  ],
  authors: [{ name: "Webunica", url: "https://webunica.cl" }],
  creator: "Webunica",
  publisher: "Webunica",
  category: "Technology",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://webunica.cl",
    siteName: "Webunica",
    title: "Webunica | Diseño Web Shopify Chile",
    description: "Expertos en diseño y desarrollo de tiendas Shopify en Chile. Integración con Transbank, Flow y servicios de logística local.",
    images: [{
      url: "/og-image-webunica.jpg",
      width: 1200,
      height: 630,
      alt: "Webunica: Diseño Web Shopify Chile"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@webunicacl",
    creator: "@webunicacl",
    title: "Webunica | Diseño Web Shopify Chile",
    description: "Potenciamos tu negocio con tiendas Shopify de alto impacto en Chile.",
    images: ["/twitter-image-webunica.jpg"]
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://webunica.cl",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppWidget } from "@/components/common/whatsapp-widget";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { AuthErrorHandler } from "@/components/common/auth-error-handler";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${spaceSans.variable} ${spaceHeading.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AnnouncementBar />
          <AuthErrorHandler />
          {children}
          <WhatsAppWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
