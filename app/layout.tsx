// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { HeaderClient } from "./HeaderClient";
import { AstronautWhatsApp } from "@/components/AstronautWhatsApp";

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
        </CartProvider>
        {/* Astronauta flotando con WhatsApp */}
        <AstronautWhatsApp phone="34640658864" />
      </body>
    </html>
  );
}
