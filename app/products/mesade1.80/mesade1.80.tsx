"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export default function Mesa180() {
  const [cantidad, setCantidad] = React.useState(1);
  const { addItem } = useCart();

  const cambiarCantidad = (cambio: number) => {
    setCantidad((prev) => Math.max(1, prev + cambio));
  };

  const añadirAlCarrito = () => {
    addItem({
      id: "mesa180", // nuevo id para la mesa
      name: "Mesa rectangular 1,80 m",
      price: 12, // pon aquí el precio que quieras
      image: {
        src: "https://misquince.es/fotos/mesa-180", // cambia a la URL real de la mesa
      },
      quantity: cantidad,
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="mb-4 text-center text-3xl font-extrabold text-blue-900">
          Mesa rectangular 1,80 m
        </h1>
        <p className="mx-auto mb-10 max-w-3xl text-center text-sm text-gray-600">
          Mesa plegable de 1,80 m ideal para catering, banquetes y eventos de empresa.
          Estructura robusta y superficie fácil de limpiar.
        </p>

        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* Imagen izquierda */}
          <div className="flex justify-center">
            <img
              src="https://misquince.es/fotos/mesa180"
              alt="Mesa rectangular 1,80 m"
              className="max-h-[420px] w-auto object-contain"
            />
          </div>

          {/* Texto + contador derecha */}
          <div>
            <ul className="space-y-5 text-sm text-gray-700">
              <li>
                <p className="font-semibold text-blue-600">Medidas</p>
                <p>1,80 m de largo x 0,75 m de ancho aproximadamente.</p>
              </li>
              <li>
                <p className="font-semibold text-blue-600">Uso recomendado</p>
                <p>
                  Perfecta para comidas de empresa, buffets y zonas de servicio
                  de catering.
                </p>
              </li>
              <li>
                <p className="font-semibold text-blue-600">Características</p>
                <p>Plegable, fácil de transportar y guardar.</p>
              </li>
            </ul>

            {/* Contador cantidad */}
            <div className="mt-10 text-center">
              <p className="mb-3 text-sm text-gray-700">Escribe la cantidad</p>
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
                  min={1}
                  className="mx-4 w-10 border-none bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none"
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
                Añadir a la solicitud
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
