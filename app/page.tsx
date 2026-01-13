"use client";

import React, { useState } from "react";
import { VideoThumbnail } from "@/components/video-thumbnail";
import { MessageSquare } from "lucide-react";
import { products, type Product } from "@/lib/products";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Home() {
  const { addItem } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const featuredProductIds = [
    "estufa-gas",
    "silla-blanca-resina",
    "sillas-plegables",
    "tarimas-escenario",
  ];

  const featuredProducts = products
    .filter((p) => featuredProductIds.includes(p.id))
    .sort(
      (a, b) => featuredProductIds.indexOf(a.id) - featuredProductIds.indexOf(b.id)
    );

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

      {/* CÓMO FUNCIONA */}
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
                number: "1",
                title: "Elige tu material",
                desc: "Explora nuestro catálogo y añade todo lo que necesites a tu carrito de presupuesto.",
              },
              {
                number: "2",
                title: "Pide tu presupuesto",
                desc: "Envíanos tu selección y te daremos una cotización sin compromiso.",
              },
              {
                number: "3",
                title: "Asesoramiento directo",
                desc: "Contactaremos contigo para afinar los detalles y ofrecerte la mejor solución.",
              },
            ].map((step) => (
              <div key={step.title} className="relative z-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-blue-500 bg-white text-2xl font-bold text-blue-500">
                  {step.number}
                </div>
                <h3 className="mt-6 text-xl font-bold text-black">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600">{step.desc}</p>
                {step.number === "3" && (
                  <p className="mt-2 font-semibold text-black">
                    ¿Necesitas asesoramiento?
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section id="products" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((item) => {
              const [quantity, setQuantity] = React.useState(1);

              const increase = (e: React.MouseEvent) => {
                e.stopPropagation();
                setQuantity((q) => q + 1);
              };

              const decrease = (e: React.MouseEvent) => {
                e.stopPropagation();
                setQuantity((q) => (q > 1 ? q - 1 : 1));
              };

              const handleAddToCart = (e: React.MouseEvent) => {
                e.stopPropagation();
                addItem({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  image: { src: item.image.src },
                  quantity,
                });
              };

              return (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-lg border bg-white shadow-sm cursor-pointer"
                  onClick={() => setSelectedProduct(item)}
                >
                  <div className="relative h-64 w-full">
                    <img
                      src={item.image.src}
                      alt={item.name}
                      className={`h-full w-full ${
                        item.id === "estufa-gas"
                          ? "object-contain"
                          : "object-cover"
                      } transition-transform duration-300 group-hover:scale-105`}
                    />
                  </div>
                  <div className="p-4">
                    <div className="mb-2 flex items-center justify-center text-sm text-black font-semibold">
                      <MessageSquare className="mr-2 h-4 w-4 text-black" />
                      ¿Necesitas asesoramiento?
                    </div>
                    <h3 className="text-lg font-semibold text-center text-black">
                      {item.name}
                    </h3>

                    <div className="mt-3 flex items-center justify-center gap-3">
                      <button
                        onClick={decrease}
                        className="h-8 w-8 rounded-full border border-black flex items_center justify-center text-lg leading-none text-black"
                      >
                        −
                      </button>
                      <span className="min-w-[2rem] text-center text-sm font-medium text-black">
                        {quantity}
                      </span>
                      <button
                        onClick={increase}
                        className="h-8 w-8 rounded-full border border-black flex items-center justify-center text-lg leading-none text-black"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      className="mt-4 w-full rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    >
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/products">
              <button className="inline-flex h-11 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium transition-colors hover:bg-gray-100">
                Ver Catálogo Completo {"->"}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* AGENTES ESPECIALIZADOS */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Habla con nuestros especialistas
          </h2>

        {/* … aquí dejas igual todo tu bloque de agentes, sin cambios … */}
        {/* Para ahorrar espacio no lo repito, pero es exactamente el que ya tenías */}
        </div>
      </section>

      {/* VIDEO SECTION – ÚLTIMA */}
      <section id="video-gallery" className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">
              porque tus sueños son nuestra realidad
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              asesoramiento personalizado
            </p>
          </div>

          {/* VÍDEO PRINCIPAL 1 */}
          <div className="mb-8 overflow-hidden rounded-lg border border-gray-800 shadow-lg">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <video
                src="/videos/Decoracion%20para%20empresas%20madrid.mp4"
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

          {/* VÍDEO PRINCIPAL 2 – PRODUCCIÓN */}
          <div className="mb-8 overflow-hidden rounded-lg border border-gray-800 shadow-lg">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <video
                src="https://misquince.es/fotos/PRODUCCION.mp4"
                controls
                muted
                loop
                className="absolute inset-0 h-full w-full object-cover"
              >
                Tu navegador no soporta la etiqueta de vídeo.
              </video>
            </div>
          </div>

          {/* GALERÍA DE VÍDEOS – MINIATURAS */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              "/videos/Decoracion%20para%20empresas%20madrid.mp4",
              "https://misquince.es/fotos/PRODUCCION.mp4",
              "https://videos.pexels.com/video-files/8098020/8098020-sd_640_360_25fps.mp4",
              "https://videos.pexels.com/video-files/5699313/5699313-sd_640_360_25fps.mp4",
            ].map((videoSrc, index) => (
              <div
                key={index}
                className="mx-auto"
                style={{ maxWidth: 220 }}
              >
                <VideoThumbnail src={videoSrc} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL DETALLE PRODUCTO */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="max-w-md w-full rounded-lg bg-white p-6">
            <button
              onClick={() => setSelectedProduct(null)}
              className="ml-auto mb-2 block text-sm text-gray-500"
            >
              Cerrar ✕
            </button>

            <h2 className="text-xl font-bold mb-2 text-black">
              {selectedProduct.name}
            </h2>

            <img
              src={selectedProduct.image.src}
              alt={selectedProduct.name}
              className="w-full h-48 object-contain mb-3"
            />

            {selectedProduct.description && (
              <p className="text-sm text-gray-700 mb-3">
                {selectedProduct.description}
              </p>
            )}

            <button
              onClick={() => {
                addItem({
                  id: selectedProduct.id,
                  name: selectedProduct.name,
                  price: selectedProduct.price,
                  image: { src: selectedProduct.image.src },
                  quantity: 1,
                });
                setSelectedProduct(null);
              }}
              className="w-full rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

