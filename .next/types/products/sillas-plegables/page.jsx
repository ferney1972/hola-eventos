'use client';

import React from "react";
import Link from "next/link";

const modelos = [

  {
    id: "negra",
    name: "Silla plegable negra",
    image: "https://misquince.es/fotos/sillas%20negras.PNG",
    link: "/products/sillas-plegables/negra",
  },
  {
    id: "blanca",
    name: "Silla plegable blanca",
    image: "https://misquince.es/fotos//sillas plegables /sillablanca.jpg",
    link: "/products/sillas-plegables/blanca",
  },
  {
    id: "madera",
    name: "Silla plegable de madera",
    image:
      "https://misquince.es/fotos//sillas plegables /sillaplegabledemadera.jpg",
    link: "/products/sillas-plegables/silla-plegable-madera",
  },
  {
    id: "aluminio",
    name: "Silla plegable de aluminio",
    image:
      "https://misquince.es/fotos//sillas plegables /sillaplegableguide.jpg",
    link: "/products/sillas-plegables/silla-plegable-aluminio",
  },
];


export default function SillasPlegables() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="mb-4 text-center text-3xl font-extrabold text-blue-900">
          Sillas Plegables
        </h1>
        <p className="mx-auto mb-10 max-w-3xl text-center text-sm text-gray-600">
          Diferentes modelos de sillas plegables para adaptarse al estilo de tu evento.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modelos.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-lg border bg-white shadow-sm"
            >
              <Link href={item.link}>
                <div className="relative h-56 w-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-4">
                <h3 className="text-center text-lg font-semibold">
                  {item.name}
                </h3>
                <Link href={item.link}>
                  <button className="mt-4 w-full rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                    Ver ficha
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

