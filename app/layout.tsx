// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { HeaderClient } from "./HeaderClient";
import { AstronautWhatsApp } from "@/components/AstronautWhatsApp";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hola Eventos | Alquiler de sillas,mesas y carpas para eventos en Madrid",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>
          <HeaderClient />
          <main>{children}</main>

          {/* Botón flotante del carrito */}
          <Link
            href="/cart"
            className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700"
          >
            <span className="text-xl">🛒</span>
          </Link>
        </CartProvider>

        {/* Astronauta flotando con WhatsApp */}
        <AstronautWhatsApp phone="34640658864" />
      </body>
    </html>
  );
}
