// app/productos/mesa-baja-blanca/page.tsx
"use client";

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

export const metadata = {
  title: "Mesa baja blanca para eventos | Hola Eventos",
  description:
    "Alquiler de mesa baja blanca 45×50 cm ideal para zonas lounge, candy bar y rincones decorativos en eventos en Madrid.",
};

export default function MesaBajaPage() {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      quantity: 1,
      image: { src: product.image.src },
    });
  };

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl text-black">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative w-full h-64 md:h-80">
          <Image
            src={product.image.src}
            alt={product.image.alt}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
          <p className="text-lg font-semibold mb-2">
            Desde {product.price} € / día
          </p>
          <p className="mb-4 text-gray-700">{product.description}</p>

          <button
            onClick={handleAddToCart}
            className="rounded-full bg-blue-600 px-6 py-2 text-white font-semibold hover:bg-blue-700"
          >
            Añadir al carrito
          </button>

          <p className="mt-3 text-sm text-gray-600">
            Indica la cantidad y fechas en el formulario del carrito para
            recibir tu presupuesto personalizado.
          </p>

          <Link
            href="/"
            className="mt-6 inline-block text-sm text-blue-600 hover:underline"
          >
            ← Volver al catálogo
          </Link>
        </div>
      </div>
    </main>
  );
}
