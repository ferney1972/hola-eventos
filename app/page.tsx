'use client';

import React from 'react';
import { VideoThumbnail } from '@/components/video-thumbnail';
import { MessageSquare, Sofa, Palette, Video as VideoIcon, Volume2 } from 'lucide-react';
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
      {/* Hero Section */}
     <section className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh] text-center text-white">
  {/* Imagen de fondo, arriba y centrada */}
  <div className="absolute inset-0">
    <img
      src="https://misquince.es/fotos/cropped-banner-carlos.jpg"
      alt="Decoración de un elegante evento con mesas preparadas"
      className="w-full h-full object-cover object-center"
      data-ai-hint="elegant event decoration"
    />
    <div className="absolute inset-0 bg-black/40" />
  </div>

  {/* Contenido encima del banner */}
  <div className="relative z-10 px-4 pt-4 max-w-2xl mx-auto">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
      Alquiler y organización de eventos en Madrid
    </h1>
    {/* Aquí puedes quitar el párrafo y el botón WhatsApp si no los quieres */}
  </div>
</section>
        {/* Content */}
        <div className="relative z-10 px-4 max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
            Alquiler y organización de eventos en Madrid
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-100">
            Material, decoración y asesoramiento profesional para que tu evento salga perfecto.
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
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-gallery" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">porque tus sueños son nuestra realidad</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">asesoramiento personalizado</p>
          </div>
          {/* Main Video */}
          <div className="mb-8 overflow-hidden rounded-lg border shadow-lg">
            <div className="aspect-w-16 aspect-h-9 bg-gray-900">
              <video
                src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4"
                controls
                autoPlay
                muted
                loop
                className="h-full w-full object-cover"
              >
                Tu navegador no soporta la etiqueta de vídeo.
              </video>
            </div>
          </div>

          {/* Video Thumbnails */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              'https://videos.pexels.com/video-files/5969502/5969502-sd_640_360_25fps.mp4',
              'https://videos.pexels.com/video-files/8098020/8098020-sd_640_360_25fps.mp4',
              'https://videos.pexels.com/video-files/5699313/5699313-sd_640_360_25fps.mp4',
            ].map((videoSrc, index) => (
              <VideoThumbnail key={index} src={videoSrc} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold">¿Cómo funciona?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Organizar tu evento nunca fue tan fácil. Sigue estos simples pasos.
            </p>
          </div>
          <div className="relative mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div
              className="absolute top-1/2 left-0 hidden h-px w-full -translate-y-1/2 bg-gray-300 md:block"
              aria-hidden="true"
            />
            {[
              {
                number: '1',
                title: 'Elige tu material',
                desc: 'Explora nuestro catálogo y añade todo lo que necesites a tu carrito de presupuesto.',
              },
              {
                number: '2',
                title: 'Pide tu presupuesto',
                desc: 'Envíanos tu selección y te daremos una cotización sin compromiso.',
              },
              {
                number: '3',
                title: 'Asesoramiento directo',
                desc: 'Contactaremos contigo para afinar los detalles y ofrecerte la mejor solución.',
              },
            ].map((step) => (
              <div key={step.title} className="relative z-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-white text-2xl font-bold text-primary">
                  {step.number}
                </div>
                <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.desc}</p>
                {step.number === '3' && (
                  <p className="mt-2 text-primary font-semibold">¿Necesitas asesoramiento?</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((item) => (
              <div
                key={item.name}
                className="group overflow-hidden rounded-lg border bg-white shadow-sm"
              >
                <Link href={item.seeMoreLink || '#'}>
                  <div className="relative h-64 w-full">
                    <img
                      src={item.image.src}
                      alt={item.name}
                      className={`h-full w-full ${
                        item.id === 'estufa-gas' ? 'object-contain' : 'object-cover'
                      } transition-transform duration-300 group-hover:scale-105`}
                      data-ai-hint={item.image.hint}
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <div className="mb-2 flex items-center justify-center text-sm text-primary font-semibold">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    ¿Necesitas asesoramiento?
                  </div>
                  <h3 className="text-lg font-semibold text-center">{item.name}</h3>

                  <button
                    onClick={() => addItem(item)}
                    className="mt-4 w-full rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    Añadir al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/products">
              <button className="inline-flex h-11 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium transition-colors hover:bg-gray-100">
                Ver Catálogo Completo {'->'}
              </button>
            </Link>
          </div>
        </div>
      </section>
  </main>
);
}