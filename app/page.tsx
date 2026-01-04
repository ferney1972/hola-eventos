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
      {/* Hero Section - Adaptable totalmente al móvil */}
      <section className="relative w-full h-[100dvh] sm:h-[75vh] flex items-center justify-center text-center text-white overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <img
            src="https://misquince.es/fotos/cropped-banner-carlos.jpg"
            alt="Decoración de un elegante evento con mesas preparadas"
            className="absolute inset-0 w-full h-full object-cover md:object-center object-[50%_40%]"
            loading="eager"
            decoding="async"
          />
          {/* Capa oscura para legibilidad */}
          <div className="absolute inset-0 bg-black/65 sm:bg-black/50" />
        </div>

        {/* Contenido central */}
        <div className="relative z-10 w-full max-w-5xl px-5 sm:px-8">
          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold leading-snug sm:leading-tight mb-4">
            Alquiler y organización de eventos en Madrid
          </h1>

          <p className="text-base xs:text-lg sm:text-2xl font-bold text-primary-light mb-3 sm:mb-6">
            ORGANIZACIÓN DE EVENTOS
          </p>

          <div className="max-w-xl mx-auto mb-6 sm:mb-8">
            <p className="text-sm xs:text-base sm:text-lg text-gray-100 mb-2">
              Mobiliario, decoración y asesoramiento profesional para que tu evento sea un éxito
            </p>
            <p className="text-lg xs:text-xl sm:text-2xl font-bold text-yellow-300 italic">
              "O LO TENGO, TE LO CONSIGO"
            </p>
            <p className="text-xs xs:text-sm sm:text-base text-gray-200 mt-2">
              No te preocupes si no lo tenemos, nosotros te lo conseguimos
            </p>
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 sm:mt-6">
            {/* Botón WhatsApp */}
            <a
              href="https://wa.me/34123456789?text=Hola!%20Me%20gustaría%20pedir%20presupuesto%20para%20un%20evento."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full px-6 py-3 sm:px-10 sm:py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03]"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.507 14.307l-.009.075c-2.199-1.096-2.429-1.242-2.713-.816-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.293-.506.32-.578.878-1.634.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.576-.05-.997-.05-1.368.344-1.614 1.774-1.207 3.604.174 5.55 2.714 3.552 4.16 4.206 6.8 5.114.714.227 1.365.195 1.88.121.574-.091 1.754-.721 2.004-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z" />
                <path d="M20.52 3.449C12.15-2 1.029-.828 1.029 10.445c0 1.958.581 4.146 1.688 6.348L1 23l6.592-1.756c1.955.79 3.72 1.175 5.408 1.175h.005c9.376 0 13.001-7.72 13.001-13.002 0-2.899-1.155-5.343-3.485-7.968zM12.005 21.38c-1.511 0-3.038-.375-4.842-1.156l-.346-.162-3.344.893.893-3.344-.168-.339c-1.477-2.435-1.622-4.537-1.622-6.289-.001-7.169 6.868-10.125 11.429-10.125 3.036 0 5.885 1.116 8.02 3.141 2.137 2.028 3.315 4.722 3.315 7.599-.001 7.148-5.555 10.122-11.439 10.122z" />
              </svg>
              WhatsApp
            </a>

            {/* Botón secundario */}
            <Link href="#products">
              <button className="w-full sm:w-auto h-12 sm:h-14 items-center justify-center rounded-full bg-primary px-8 sm:px-10 text-base sm:text-lg font-medium text-white transition-colors hover:bg-primary/90 active:bg-primary/80">
                Ver material destacado
              </button>
            </Link>
          </div>
        </div>

        {/* Indicador de scroll solo en móvil */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce md:hidden">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Separador visual */}
      <div className="w-full h-1 bg-gradient-to-r from-primary via-yellow-500 to-primary" />

      {/* Video Section */}
      <section id="video-gallery" className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-2">
              Porque tus sueños son nuestra realidad
            </h2>
            <p className="mt-3 sm:mt-4 mx-auto max-w-2xl text-gray-600 text-sm sm:text-base">
              Asesoramiento personalizado
            </p>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-2">
              ¿Cómo funciona?
            </h2>
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
                  <p className="mt-2 text-primary font-semibold text-sm sm:text-base">
                    ¿Necesitas asesoramiento?
                  </p>
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
                  <h3 className="text-base sm:text-lg font-semibold text-center line-clamp-2">
                    {item.name}
                  </h3>
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
