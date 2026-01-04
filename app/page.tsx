'use client';

import React, { useState } from 'react';
import { VideoThumbnail } from '@/components/video-thumbnail';
import { MessageSquare } from 'lucide-react';
import { products } from '@/lib/products';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Home() {
  const { addItem } = useCart();

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    lugar: '',
    provincia: '',
    asistentes: '',
    observaciones: '',
  });
  const [formEnviado, setFormEnviado] = useState(false);

  const featuredProductIds = ['estufa-gas', 'silla-blanca-resina', 'sillas-plegables', 'tarimas-escenario'];
  const featuredProducts = products
    .filter((p) => featuredProductIds.includes(p.id))
    .sort((a, b) => featuredProductIds.indexOf(a.id) - featuredProductIds.indexOf(b.id));

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { nombre, apellido, telefono, email, lugar, provincia, asistentes, observaciones } = formData;

    const bodyLines = [
      `Nombre: ${nombre}`,
      `Apellido: ${apellido}`,
      `Teléfono: ${telefono}`,
      `Email: ${email}`,
      `Lugar del evento: ${lugar}`,
      `Provincia: ${provincia}`,
      `Cantidad de asistentes: ${asistentes}`,
      `Observaciones: ${observaciones}`,
    ];

    const mailto = `mailto:produccionsanchezparra@gmail.com?subject=Solicitud%20de%20presupuesto&body=${encodeURIComponent(
      bodyLines.join('\n')
    )}`;

    window.location.href = mailto;
    setFormEnviado(true);
  };

  return (
    <main className="flex-1 bg-black">
      {/* HERO */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[75vh] text-center text-white flex flex-col">
        <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden bg-black">
          <img
            src="https://misquince.es/fotos/cropped-banner-carlos.jpg"
            alt="Banner Hola Eventos"
            className="w-full h-full object-cover object-[40%_50%]"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="bg-black px-4 pt-6">
          <h1 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Alquiler y organización de eventos en Madrid
          </h1>
        </div>

        <div className="bg-black px-4 pb-8 flex flex-col items-center">
          <p className="mt-3 max-w-xl text-sm sm:text-base text-gray-100">
            Material, decoración y asesoramiento profesional para que tu evento salga perfecto.
          </p>

          <div className="mt-6 w-full max-w-md flex flex-col gap-3">
            <Link href="#products">
              <button className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white text-black text-sm font-semibold">
                Ver material destacado
              </button>
            </Link>

            <a
              href="https://wa.me/34640651851?text=Hola!%20Me%20gustaría%20pedir%20presupuesto%20para%20un%20evento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition-colors"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section id="video-gallery" className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">porque tus sueños son nuestra realidad</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">asesoramiento personalizado</p>
          </div>

          <div className="mb-8 overflow-hidden rounded-lg border border-gray-800 shadow-lg">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <video
                src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4"
                controls
                autoPlay
                muted
                loop
                className="absolute inset-0 h-full w-full object-cover"
              >
                Tu navegador no soporta la etiqueta de vídeo.
              </video>
            </div>
          </div>

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

      {/* CÓMO FUNCIONA + FORMULARIO */}
      <section id="how-it-works" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-black">¿Cómo funciona?</h2>
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
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-500 bg-white text-2xl font-bold text-blue-500">
                  {step.number}
                </div>
                <h3 className="mt-6 text-xl font-bold text-black">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.desc}</p>
                {step.number === '3' && (
                  <p className="mt-2 font-semibold text-black">¿Necesitas asesoramiento?</p>
                )}
              </div>
            ))}
          </div>

          {/* Formulario Revisar y Solicitar */}
          <div className="mt-16 max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
            {!formEnviado ? (
              <>
                <h3 className="text-2xl font-bold text-black mb-4">
                  Revisar y solicitar presupuesto
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        required
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">
                        Apellido
                      </label>
                      <input
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">
                        Teléfono de contacto *
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        required
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">
                        Lugar del evento
                      </label>
                      <input
                        type="text"
                        name="lugar"
                        value={formData.lugar}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-1">
                        Provincia
                      </label>
                      <input
                        type="text"
                        name="provincia"
                        value={formData.provincia}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      Cantidad de asistentes
                    </label>
                    <input
                      type="number"
                      name="asistentes"
                      value={formData.asistentes}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      Observaciones
                    </label>
                    <textarea
                      name="observaciones"
                      rows={4}
                      value={formData.observaciones}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-md bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                  >
                    Revisar y solicitar
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold text-black mb-2">
                  Gracias por contactar con nosotros
                </h3>
                <p className="text-gray-600">
                  Hemos recibido tu solicitud y nos pondremos en contacto contigo lo antes posible.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section id="products" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((item) => (
              <div
                key={item.id}
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
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <div className="mb-2 flex items-center justify-center text-sm text-primary font-semibold">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    ¿Necesitas asesoramiento?
                  </div>
                  <h3 className="text-lg font-semibold text-center text-black">{item.name}</h3>

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

