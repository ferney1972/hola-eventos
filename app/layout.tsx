// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { HeaderClient } from "./HeaderClient";
import { AstronautWhatsApp } from "@/components/AstronautWhatsApp";
import Link from "next/link";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Hola Eventos | Alquiler de sillas,mesas y carpas para eventos en Madrid",
  description:
    "Especialistas en alquiler de sillas, mesas, carpas y material para eventos en Madrid. Asesoramiento profesional para que tu celebración sea perfecta. ¡Pide presupuesto!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8PJEWQC26B');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>
          <HeaderClient />
          <main>{children}</main>

          {/* Bloque flotante: Llamada inmediata */}
          <div className="fixed bottom-80 right-4 z-50 flex flex-col items-center gap-1">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-white bg-black/70 px-2 py-1 rounded-full">
              Llamada inmediata
            </span>

            {/* Botón que realiza llamada telefónica */}
            <a
              href="tel:+34640651851"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600"
            >
              <span className="text-2xl">📞</span>
            </a>
          </div>
        </CartProvider>

        {/* Astronauta flotando con WhatsApp */}
        <AstronautWhatsApp phone="34640658864" />
      </body>
    </html>
  );
}