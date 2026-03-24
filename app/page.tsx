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
  const [flash, setFlash] = useState("");
  const [lastAddedId, setLastAddedId] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState<
    "todos" | "sillas" | "mesas" | "carpas"
  >("todos");
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const featuredProductIds = [
    "estufa-gas",
    "silla-blanca-resina",
    "sillas-plegables",
    "tarimas-escenario",
    "carpa-3x3m",
    "mesa-180",
    "mesa-alta-cocktail",
    "mesa-baja",
    "atril-metraquilato",
    "Arcon-congelador",
    "sombrillas",
    "Expositor",
    "Sonido",
    "Ventilador-nebulizador",
  ];

  const featuredProducts = products
    .filter((p) => featuredProductIds.includes(p.id))
    .sort(
      (a, b) => featuredProductIds.indexOf(a.id) - featuredProductIds.indexOf(b.id)
    );

  const visibleProducts = products.filter((p) => {
    if (activeCategory === "todos") {
      return featuredProductIds.includes(p.id);
    }
    if (activeCategory === "sillas") {
      return p.id.includes("silla");
    }
    if (activeCategory === "mesas") {
      return p.id.includes("mesa");
    }
    if (activeCategory === "carpas") {
      return p.id.includes("carpa");
    }
    return true;
  });

  return (
    <main className="flex-1 bg-black">
      {/* MENÚ DESPLEGABLE SUPERIOR */}
      <nav className="w-full bg-black border-b border-white/10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-white font-semibold text-sm sm:text-base">
            Hola Eventos
          </span>

          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenMenu((o) => !o)}
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-4 py-2 text-sm text-white hover:bg-white/10"
            >
              {activeCategory === "todos" && "Material"}
              {activeCategory === "sillas" && "Sillas"}
              {activeCategory === "mesas" && "Mesas"}
              {activeCategory === "carpas" && "Carpas"}
              <span className="ml-2 text-xs">{openMenu ? "▲" : "▼"}</span>
            </button>

            {openMenu && (
              <div className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black/5 z-50">
                <ul className="py-1 text-sm text-gray-800">
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveCategory("todos");
                        setOpenMenu(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Todo el material
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveCategory("sillas");
                        setOpenMenu(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Sillas
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveCategory("mesas");
                        setOpenMenu(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Mesas
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveCategory("carpas");
                        setOpenMenu(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Carpas
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[75vh] text-center text-white flex flex-col">
        <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden bg-black">
          <img
            src="https://misquince.es/fotos/cropped-banner-carlos.jpg"
            alt="Banner Hola Eventos"
            className="w-full h-full object-cover object-[40%_50%]"
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Teléfono siempre visible en el banner */}
          <div className="absolute right-4 top-4 flex flex-col items-end space-y-1">
            <span className="text-xs sm:text-sm font-semibold">Teléfono:</span>
            <a
              href="tel:+34640651851"
              className="rounded-full bg-black/70 px-3 py-1 text-sm sm:text-base font-bold border border-white"
            >
              640 65 18 51
            </a>
          </div>
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

            {/* Botón de llamada solo en móvil */}
            <a
              href="tel:+34640651851"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors sm:hidden"
            >
              Llamar ahora
            </a>

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

      {/* PRODUCTOS DESTACADOS */}
      <section id="products" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-black">
            {activeCategory === "todos" && "Material destacado"}
            {activeCategory === "sillas" && "Sillas"}
            {activeCategory === "mesas" && "Mesas"}
            {activeCategory === "carpas" && "Carpas"}
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visibleProducts.map((item) => {
              const quantity = quantities[item.id] ?? 1;

              const increase = (e: React.MouseEvent) => {
                e.stopPropagation();
                setQuantities((prev) => ({
                  ...prev,
                  [item.id]: (prev[item.id] ?? 1) + 1,
                }));
              };

              const decrease = (e: React.MouseEvent) => {
                e.stopPropagation();
                setQuantities((prev) => {
                  const current = prev[item.id] ?? 1;
                  const next = current > 1 ? current - 1 : 1;
                  return { ...prev, [item.id]: next };
                });
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
                        className="h-8 w-8 rounded-full border border-black flex items-center justify-center text-lg leading-none text-black"
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
                      className={`mt-4 w-full rounded-full px-4 py-2 text-sm font-medium text-white ${
                        isLastAdded
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

      {/* AGENTES ESPECIALIZADOS */}
      {/* ... resto de tu código igual que lo tenías ... */}
      {/* (no se toca nada más) */}
      {/* AGENTES, VIDEO, HOW-IT-WORKS, MODAL, etc. */}
      {/* Copia aquí el resto sin modificar */}
    </main>
  );
}
