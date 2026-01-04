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
      {/* HERO / BANNER */}
      <section
        className="relative w-full h-[90vh] sm:h-[75vh] flex items-center justify-center text-center text-white bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('https://misquince.es/fotos/cropped-banner-carlos.jpg')",
        }}
      >
        {/* Capa oscura flotante */}
        <div className="absolute inset-0 bg-black/55 sm:bg-black/45"></div>

        {/* Contenido central */}
        <div className="relative z-10 max-w-5xl px-5 sm:px-8 py-8 sm:py-14">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-snug sm:leading-tight mb-4">
            Alquiler y organización de eventos en Madrid
          </h1>

          <p className="text-base sm:text-xl font-bold text-primary-light mb-3">
            ORGANIZACIÓN DE EVENTOS
          </p>

          <p className="text-sm sm:text-lg text-gray-100 mb-2">
            Mobiliario, decoración y asesoramiento profesional para que tu evento salga perfecto.
          </p>

          <p className="text-lg sm:text-2xl font-bold text-yellow-300 italic mb-2">
            "O LO TENGO, TE LO CONSIGO"
          </p>

          <p className="text-xs sm:text-base text-gray-200 mb-6">
            No te preocupes si no lo tenemos, nosotros te lo conseguimos.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/34123456789?text=Hola!%20Me%20gustaría%20trabajar%20con%20vosotros%20para%20mi%20evento."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03]"
            >
              Hablar por WhatsApp
            </a>

            <Link href="#products">
              <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-medium text-white transition-colors hover:bg-primary/90 active:bg-primary/80 shadow-md">
                Ver material destacado
              </button>
            </Link>
          </div>
        </div>

        {/* Indicador scroll móvil */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce md:hidden">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* SEPARADOR */}
      <div className="w-full h-1 bg-gradient-to-r from-primary via-yellow-500 to-primary" />

      {/* VIDEO SECTION */}
      <section id="video-gallery" className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Porque tus sueños son nuestra realidad
            </h2>
            <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base">
              Asesoramiento personalizado
            </p>
          </div>

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
        <div className="container mx-auto px-5 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Organizar tu evento nunca fue tan fácil. Sigue estos simples pasos.
          </p>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div
              className="absolute top-1/2 left-0 hidden h-px w-full -translate-y-1/2 bg-gray-300 md:block"
              aria-hidden="true"
            ></div>

            {[
              { number: '1', title: 'Elige tu material', desc: 'Explora nuestro catálogo y añade lo que necesites.' },
              { number: '2', title: 'Pide tu presupuesto', desc: 'Te daremos una cotización sin compromiso.' },
              { number: '3', title: 'Asesoramiento directo', desc: 'Contactaremos contigo para ofrecerte la mejor solución.' },
            ].map((step) => (
              <div key={step.number} className="relative z-10">
                <div className="mx-auto flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full border-2 border-primary text-lg sm:text-xl font-bold text-primary bg-white">
                  {step.number}
                </div>
                <h3 className="mt-4 text-lg sm:text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section id="products" className="bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
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
                      className={`h-full w-full ${item.id === 'estufa-gas' ? 'object-contain' : 'object-cover'} transition-transform duration-300 group-hover:scale-105`}
                      loading="lazy"
                    />
                  </div>
                </Link>
                <div className="p-4 text-center">
                  <div className="flex items-center justify-center text-xs sm:text-sm text-primary font-semibold mb-2">
                    <MessageSquare className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    ¿Necesitas asesoramiento?
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold line-clamp-2">
                    {item.name}
                  </h3>
                  <button
                    onClick={() => addItem(item)}
                    className="mt-4 w-full rounded-full bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
                  >
                    Añadir al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:mt-12 text-center">
            <Link href="/products">
              <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 sm:px-8 py-3 text-sm sm:text-base font-medium hover:bg-gray-100 transition">
                Ver Catálogo Completo →
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}