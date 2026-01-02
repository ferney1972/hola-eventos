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
      <section className="relative w-full h-[70vh] flex items-center justify-center text-center text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://misquince.es/fotos/cropped-banner-carlos.jpg"
            alt="Decoración de un elegante evento con mesas preparadas"
            className="h-full w-full object-cover object-center"
            data-ai-hint="elegant event decoration"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-4 mt-16" />
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

      {/* Experts Section */}
      <section id="experts" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Asesoramiento por Expertos</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              ¿Tienes dudas? Contacta directamente con nuestros especialistas.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Volume2, area: 'Sonido', contactText: 'Contactar con Sonido' },
              { icon: Palette, area: 'Decoración', contactText: 'Contactar con Decoración'
                , avatar: 'https://misquince.es/fotos/Cecilia.jpg' },
              { icon: VideoIcon, area: 'Vídeo', contactText: 'Contactar con Vídeo' },
              { icon: Sofa, area: 'Mobiliario', contactText: 'Contactar con Mobiliario' },
            ].map((expert) => (
              <div
                key={expert.area}
                className="group overflow-hidden rounded-lg border bg-card text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="p-6">
                  <expert.icon className="mx-auto h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                  <h3 className="mt-4 text-xl font-bold">{expert.area}</h3>
                  <p className="mt-1 text-muted-foreground">Expertos en {expert.area}</p>
                </div>
                <div className="bg-gray-50 px-6 py-4">
                  <a
                    href={`https://wa.me/34123456789?text=Hola!%20Tengo%20una%20duda%20sobre%20${expert.area}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary/90"
                  >
                    {expert.contactText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
          <div className="relative h-80 w-full rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=500&q=80"
              alt="Equipo de Hola Eventos trabajando"
              className="h-full w-full rounded-lg object-cover"
              data-ai-hint="team planning"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold">Pasión por crear momentos únicos</h2>
            <p className="mt-4 text-gray-600">
              Hola Eventos nació de la pasión por crear celebraciones que perduren en el
              recuerdo. Con años de experiencia en el sector en Madrid, nuestro equipo
              combina profesionalidad, cercanía y un cuidado exquisito por los detalles
              para garantizar el éxito de tu evento.
            </p>
            <p className="mt-4 text-gray-600">
              Creemos que cada celebración es especial y merece una atención personalizada.
              Tu tranquilidad es nuestra prioridad.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Nuestros clientes opinan</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                name: 'Laura y Javier',
                event: 'Boda en Finca, 2023',
                text: '¡El equipo de Hola Eventos es increíble! Hicieron que nuestra boda fuera de ensueño. El material era de primerísima calidad y la organización, impecable. ¡Gracias!',
              },
              {
                name: 'Marta G. - Empresa Tech',
                event: 'Evento Corporativo, 2024',
                text: 'Contratamos a Hola Eventos para nuestro aniversario de empresa y superaron todas las expectativas. Profesionales, creativos y resolutivos. Repetiremos sin duda.',
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-lg border bg-white p-6 text-gray-800 shadow-sm"
              >
                <div className="flex items-center text-primary">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <blockquote className="mt-4 border-l-2 border-primary pl-4 italic text-gray-500">
                  {testimonial.text}
                </blockquote>
                <p className="mt-4 text-right font-semibold">
                  - {testimonial.name}
                  <span className="block text-sm font-normal text-gray-500">
                    {testimonial.event}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Todo lo que necesitas para tu evento</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Ofrecemos soluciones integrales para que no tengas que preocuparte por nada.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg border bg-white p-6 text-center text-gray-800 shadow-sm">
              <h3 className="text-xl font-semibold">Alquiler de Material</h3>
              <p className="mt-2">
                Sillas, mesas, carpas, sonido, iluminación... Disponemos de un amplio
                catálogo de productos de alta calidad para todo tipo de eventos.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6 text-center text-gray-800 shadow-sm">
              <h3 className="text-xl font-semibold">Organización Integral</h3>
              <p className="mt-2">
                Desde la conceptualización hasta el último detalle el día del evento. Nos
                encargamos de la planificación, coordinación y ejecución completa.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6 text-center text-gray-800 shadow-sm">
              <h3 className="text-xl font-semibold">Diseño y Decoración</h3>
              <p className="mt-2">
                Creamos ambientes únicos y personalizados que reflejen el estilo de tu
                celebración y sorprendan a tus invitados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="mt-4 text-4xl font-bold">¿Listos para empezar a planificar?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            No esperes más. Contacta con nosotros y cuéntanos tu idea. Estaremos encantados
            de asesorarte y darte un presupuesto a medida sin ningún compromiso.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white transition-colors hover:bg-primary/90">
              Rellenar Formulario
            </button>
            <a
              href="https://wa.me/34123456789?text=Hola!%20Me%20gustaría%20pedir%20presupuesto%20para%20un%20evento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium transition-colors hover:bg-gray-100"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


