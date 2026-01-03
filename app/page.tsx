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
      {/* Hero Section - Optimizada para móviles */}
      <section className="relative w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh] text-center text-white flex items-center">
        {/* Imagen de fondo con optimización móvil */}
        <div className="absolute inset-0">
          <img
            src="https://misquince.es/fotos/cropped-banner-carlos.jpg"
            alt="Decoración de un elegante evento con mesas preparadas"
            className="w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
          {/* Capa oscura con mejor contraste para móvil */}
          <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
        </div>

        {/* Contenido optimizado para móviles */}
        <div className="relative z-10 flex w-full flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12 md:py-16">
          <div className="w-full max-w-6xl mx-auto">
            <h1 className="text-2xl xs:text-2.5xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug sm:leading-tight px-2">
              Alquiler y organización de eventos en Madrid
            </h1>
            <p className="mt-3 sm:mt-4 max-w-xl mx-auto text-sm xs:text-base sm:text-lg md:text-xl text-gray-100 px-4">
              Mobiliario, decoración y asesoramiento profesional para que tu evento sea un éxito.
            </p>

            {/* Botones optimizados para touch en móvil */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center w-full px-2">
              <Link 
                href="#products" 
                className="w-full sm:w-auto block sm:inline-block"
              >
                <button className="w-full sm:w-auto min-h-[44px] px-6 py-3 sm:py-2.5 rounded-md bg-primary text-white font-medium text-sm sm:text-base transition-colors hover:bg-primary/90 active:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/50">
                  Ver material destacado
                </button>
              </Link>

              <a
                href="https://wa.me/34123456789?text=Hola!%20Me%20gustaría%20pedir%20presupuesto%20para%20un%20evento."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto block sm:inline-block"
              >
                <button className="w-full sm:w-auto min-h-[44px] px-6 py-3 sm:py-2.5 rounded-md border border-gray-300 bg-white/95 text-gray-900 font-medium text-sm sm:text-base transition-colors hover:bg-white active:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300">
                  <span className="hidden sm:inline">Pedir presupuesto por </span>WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-gallery" className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-2">Porque tus sueños son nuestra realidad</h2>
            <p className="mt-3 sm:mt-4 mx-auto max-w-2xl text-gray-600 text-sm sm:text-base">Asesoramiento personalizado</p>
          </div>

          {/* Vídeo principal */}
          <div className="mb-6 sm:mb-8 overflow-hidden rounded-lg border shadow-lg">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <video
                src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4"
                controls
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              >
                Tu navegador no soporta la etiqueta de vídeo.
              </video>
            </div>
          </div>

          {/* Miniaturas de vídeo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
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

      {/* Cómo funciona */}
      <section id="how-it-works" className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-2">¿Cómo funciona?</h2>
            <p className="mt-3 sm:mt-4 mx-auto max-w-2xl text-gray-600 text-sm sm:text-base">
              Organizar tu evento nunca fue tan fácil. Sigue estos simples pasos.
            </p>
          </div>
          <div className="relative mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
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
              <div key={step.title} className="relative z-10 text-center px-4">
                <div className="mx-auto flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full border-2 border-primary bg-white text-lg sm:text-xl md:text-2xl font-bold text-primary">
                  {step.number}
                </div>
                <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">{step.desc}</p>
                {step.number === '3' && (
                  <p className="mt-2 text-primary font-semibold text-sm sm:text-base">¿Necesitas asesoramiento?</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos destacados */}
      <section id="products" className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-lg border bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <Link href={item.seeMoreLink || '#'}>
                  <div className="relative h-48 sm:h-56 md:h-64 w-full">
                    <img
                      src={item.image.src}
                      alt={item.name}
                      className={`h-full w-full ${
                        item.id === 'estufa-gas' ? 'object-contain' : 'object-cover'
                      } transition-transform duration-300 group-hover:scale-105`}
                      loading="lazy"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <div className="mb-2 flex items-center justify-center text-xs sm:text-sm text-primary font-semibold">
                    <MessageSquare className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    ¿Necesitas asesoramiento?
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-center line-clamp-2">{item.name}</h3>

                  <button
                    onClick={() => addItem(item)}
                    className="mt-4 w-full min-h-[44px] rounded-full bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 active:bg-blue-800 transition-colors"
                  >
                    Añadir al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:mt-12 text-center">
            <Link href="/products">
              <button className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-gray-300 bg-white px-6 sm:px-8 text-sm sm:text-base font-medium transition-colors hover:bg-gray-100 active:bg-gray-200">
                Ver Catálogo Completo {'->'}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}