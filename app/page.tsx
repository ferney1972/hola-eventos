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
  const [quantity, setQuantity] = useState(1);

  // NUEVO: estado para mensaje y último producto añadido
  const [flash, setFlash] = useState("");
  const [lastAddedId, setLastAddedId] = useState<string | null>(null);

  const videoSources = [
    "https://misquince.es/fotos/Decoracionparaempresasmadrid.mp4",
    "https://misquince.es/fotos/PRODUCCION.mp4",
    "https://misquince.es/fotos/Misquincecentro.mp4",
  ];

  const [activeVideo, setActiveVideo] = useState<string>(videoSources[0]);

  const featuredProductIds = [
    "estufa-gas",
    "silla-blanca-resina",
    "sillas-plegables",
    "tarimas-escenario",
    "carpa-3x3m",
    "mesade1.80",
    "mesa-alta-cocktail",
    "mesa-baja",
    "atril-metraquilato",
    "Arcon-congelador",
    "sombrillas",
    "Expositor",
    "Sonido",
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
        {/* ... todo igual ... */}
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section id="products" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((item) => {
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

                setLastAddedId(item.id);
                setFlash("Producto añadido a tu pedido");

                setTimeout(() => {
                  setFlash("");
                  setLastAddedId(null);
                }, 2000);
              };

              const isLastAdded = lastAddedId === item.id;

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
                      className={`mt-4 w-full rounded-full px-4 py-2 text-sm font-medium text-white
                        ${isLastAdded
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-blue-600 hover:bg-blue-700"
                        }`}
                    >
                      {isLastAdded ? "Añadido al carrito" : "Añadir al carrito"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mensaje general debajo del grid */}
          {flash && (
            <p className="mt-4 text-center text-sm text-green-600">
              {flash}
            </p>
          )}

          <div className="mt-12 text-center">
            <Link href="/products">
              <button className="inline-flex h-11 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium transition-colors hover:bg-gray-100">
                Ver Catálogo Completo {"->"}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* resto de secciones igual que ya tienes (agentes, vídeos, modal, etc.) */}
      {/* ... */}
    </main>
  );
}
