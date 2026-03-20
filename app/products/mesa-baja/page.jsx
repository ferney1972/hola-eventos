// app/products/mesa-baja/page.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const product = {
  id: "mesa-baja-blanca",
  name: "Mesa baja blanca plegable 80×80 cm",
  price: 20,
  description:
    "Mesa baja perfecta para crear zonas lounge, apoyar decoración o candy bar. Tablero blanco fácil de limpiar y estructura metálica resistente.",
  image: {
    src: "/images/mesa-baja-blanca.jpg",
    alt: "Mesa baja blanca plegable para eventos",
  },
};

export default function MesaBajaPage() {
  const { addItem } = useCart();
  const [cantidad, setCantidad] = React.useState(1);

  const cambiarCantidad = (cambio: number) => {
    setCantidad((prev) => Math.max(1, prev + cambio));
  };

  const añadirAlCarrito = () => {
    addItem({
      id: product.id,
      name: product.name,
      quantity: cantidad,
      image: { src: product.image.src },
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="mb-4 text-center text-3xl font-extrabold text-blue-900">
          {product.name}
        </h1>
        <p className="mx-auto mb-2 max-w-3xl text-center text-sm text-gray-600">
          Desde {product.price} € / día
        </p>
        <p className="mx-auto mb-10 max-w-3xl text-center text-sm text-gray-600">
          {product.description}
        </p>

        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* Imagen izquierda */}
          <div className="flex justify-center">
            <div className="relative h-[320px] w-full max-w-md">
              <Image
                src={product.image.src}
                alt={product.image.alt}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Texto + contador derecha */}
          <div>
            <ul className="space-y-5 text-sm text-gray-700">
              <li>
                <p className="font-semibold text-blue-600">Uso recomendado</p>
                <p>
                  Ideal para zonas lounge, rincones decorativos y apoyo de
                  centros de mesa, bandejas y decoración.
                </p>
              </li>
              <li>
                <p className="font-semibold text-blue-600">Materiales</p>
                <p>Tablero blanco fácil de limpiar y estructura resistente.</p>
              </li>
            </ul>

            {/* Contador cantidad */}
            <div className="mt-10 text-center">
              <p className="mb-3 text-sm text-gray-700">
                Elige cuántas mesas bajas necesitas
              </p>
              <div className="inline-flex items-center rounded-full border bg-white px-4 py-2">
                <button
                  type="button"
                  onClick={() => cambiarCantidad(-1)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border text-lg font-bold text-blue-700"
                >
                  −
                </button>
                <input
                  type="number"
                  value={cantidad}
                  readOnly
                  className="mx-4 w-10 border-none bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none"
                  min={1}
                />
                <button
                  type="button"
                  onClick={() => cambiarCantidad(1)}
                  className="flex h-8 w-8 items-center justify-center rounded-full border text-lg font-bold text-blue-700"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={añadirAlCarrito}
                className="mt-6 inline-flex w-full max-w-xs items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700"
              >
                Añadir al carrito
              </button>

              <p className="mt-3 text-xs text-gray-600">
                Después podrás indicar fechas y detalles en el formulario del
                carrito para recibir tu presupuesto.
              </p>

              <Link
                href="/"
                className="mt-6 inline-block text-xs text-blue-600 hover:underline"
              >
                ← Volver al catálogo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

