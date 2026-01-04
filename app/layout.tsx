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
  title: "Hola Eventos",
  description: "Alquiler y decoración para eventos",
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
        <AstronautWhatsApp phone="34TU_NUMERO_AQUI" />
      </body>
    </html>
  );
}
