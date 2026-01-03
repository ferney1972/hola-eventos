'use client';

import React from 'react';
import { VideoThumbnail } from '@/components/video-thumbnail';
import { MessageSquare } from 'lucide-react';
import { products } from '@/lib/products';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Home() {
  const { addItem } = useCart();

  const featuredProductIds = ['estufa-gas', 'silla-blanca-resina', 'sillas-plegables', 'tarimas-escenario'];
  const featuredProducts = products
    .filter((p) => featuredProductIds.includes(p.id))
    .sort((a, b) => featuredProductIds.indexOf(a.id) - featuredProductIds.indexOf(b.id));

  return (
    <main className="flex-1">
      {/* Hero Section ajustado a móvil */}
      <section className="relative w-full h-[70vh] sm:h-[60vh] md:h-[65vh] text-center text-white">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <img
            src="https://misquince.es/fotos/cropped-banner-carlos.jpg"
            alt="Decoración de un elegante evento con mesas preparadas"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Contenido centrado dentro del banner */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
          <h1 className="max-w-3xl text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
            Alquiler y organización de eventos en Madrid
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base md:text-lg text-gray-100">
            Mobiliario, decoración y asesoramiento profesional para que tu evento sea un éxito.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="#products">
              <button className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary/90">
                Ver material destacado
              </button>
            </Link>
            <a
              href="https://wa.me/34123456789?text=Hola!%20Me%20gustaría%20pedir%20presupuesto%20para%20un%20evento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-md border border-gray-300 bg-white/95 px-6 text-sm font-medium text-gray-900 transition-colors hover:bg-white"
            >
              Pedir presupuesto por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-gallery" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Porque tus sueños son nuestra realidad</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">Asesoramiento personalizado</p>
          </div>

          {/* Vídeo principal */}
          <div className="mb-8 overflow-hidden rounded-lg border shadow-
