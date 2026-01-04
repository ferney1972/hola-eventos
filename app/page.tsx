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
      {/* HERO / BANNER - ADAPTADO A MÓVIL */}
      <section
        className="relative w-full h-[100dvh] min-h-[600px] sm:h-[80vh] flex items-center justify-center text-center text-white bg-cover bg-[center_top_40%] bg-no-repeat overflow-hidden sm:rounded-none"
        style={{
          backgroundImage: "url('https://misquince.es/fotos/cropped-banner-carlos.jpg')",
        }}
      >
        {/* Capa oscura para mejor contraste */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/50" />

        {/* Contenido */}
        <div className="relative z-10 w-full max-w-[90%] sm:max-w-3xl flex flex-col items-center justify-center px-4 py-10 sm:py-12">
          <h1 className="text-xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            Alquiler y organización de eventos en Madrid
          </h1>

          <p className="text-sm sm:text-xl font-semibold text-primary-light mb-3 sm:mb-4">
            ORGANIZACIÓN DE EVENTOS
          </p>

          <p className="text-xs sm:text-base text-gray-100 mb-2">
            Mobiliario, decoración y asesoramiento profesional para que tu evento salga perfecto
          </p>

          <p className="text-base sm:text-xl font-bold text-yellow-300 italic mb-1">
            "O LO TENGO, TE LO CONSIGO"
          </p>

          <p className="text-xs sm:text-sm text-gray-200 mb-6">
            No te preocupes si no lo tenemos, nosotros te lo conseguimos
          </p>

          {/* Botones centrados */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/34123456789?text=Hola!%20Me%20gustaría%20hablar%20sobre%20mi%20evento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold rounded-full px-6 py-3 sm:px-10 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Hablar por WhatsApp
            </a>

            <Link href="#products" className="w-full sm:w-auto">
              <button className="inline-flex items-center justify-center w-full sm:w-auto bg-primary hover:bg-primary/90 active:bg-primary/80 text-white font-medium rounded-full px-6 py-3 sm:px-10 sm:py-4 text-base sm:text-lg shadow-md transition">
                Ver material destacado
              </button>
            </Link>
          </div>
        </div>

        {/* Indicador scroll sólo móvil */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce sm:hidden">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* SEPARADOR VISUAL */}
      <div className="w-full h-1 bg-gradient-to-r from-primary via-yellow-500 to-primary" />

      {/* VIDEO SECTION */}
      <section id="video-gallery" className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Porque tus sueños son nuestra realidad
            </h2>
            <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base">
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
              />
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

      {/* COMO FUNCIONA */}
      <section id="how-it-works" className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">¿Cómo funciona?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            Organizar tu evento nunca fue tan fácil. Sigue estos simples pasos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { num: '1', title: 'Elige tu material', desc: 'Explora nuestro catálogo y añade lo que necesites.' },
              { num: '2', title: 'Pide tu presupuesto', desc: 'Te daremos una cotización sin compromiso.' },
              { num: '3', title: 'Asesoramiento directo', desc: 'Contactaremos contigo para afinar todos los detalles.' },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
                <div className="flex items-center justify-center mx-auto h-12 w-12 border-2 border-primary rounded-full text-primary font-bold mb-3">
                  {step.num}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section id="products" className="bg-gray-50 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <Link href={item.seeMoreLink || '#'}>
                  <div className="h-48 sm:h-56 w-full overflow-hidden">
                    <img
                      src={item.image.src}
                      alt={item.name}
                      loading="lazy"
                      className={`h-full w-full ${
                        item.id === 'estufa-gas' ? 'object-contain' : 'object-cover'
                      } group-hover:scale-105 transition-transform duration-300`}
                    />
                  </div>
                </Link>
                <div className="p-4 text-center">
                  <div className="text-xs sm:text-sm text-primary font-semibold flex justify-center items-center mb-2">
                    <MessageSquare className="w-4 h-4 mr-1" /> ¿Necesitas asesoramiento?
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold line-clamp-2 mb-3">{item.name}</h3>
                  <button
                    onClick={() => addItem(item)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-2 text-sm font-medium transition-colors"
                  >
                    Añadir al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/products">
              <button className="border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 rounded-md px-6 py-2.5 text-sm sm:text-base">
                Ver Catálogo Completo →
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}