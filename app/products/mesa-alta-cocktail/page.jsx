"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export default function MesaAltaCocktail() {
  const { addItem } = useCart();
  const [cantidad, setCantidad] = React.useState(1);

  const cambiarCantidad = (cambio: number) => {
    setCantidad((prev) => {
      const nueva = prev + cambio;
      return nueva < 1 ? 1 : nueva;
    });
  };

  const añadirAlCarrito = () => {
    addItem({
      id: "mesa-alta-cocktail",
      name: "Mesa alta para cocktail",
      price: 10, // cambia al precio real
      image: {
        src: "https://misquince.es/fotos/mesa-alta-cocktail.jpg",
      },
      quantity: cantidad,
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="mb-4 text-center text-3xl font-extrabold text-blue-900">
          Mesa alta para cocktail
        </h1>
        <p className="mx-auto mb-10 max-w-3xl text-center text-sm text-gray-600">
          Mesa alta ideal para cócteles, recepciones y eventos de empresa.
          Perfecta para usar de pie con taburetes altos o como punto de apoyo
          para bebidas y aperitivos.
        </p>

        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* Imagen izquierda */}
          <div className="flex justify-center">
            <img
              src="https://misquince.es/fotos/mesa-alta-cocktail.jpg"
              alt="Mesa alta para cocktail"
              className="max-h-[420px] w-auto object-contain rounded-lg shadow-md"
            />
          </div>

          {/* Texto + contador derecha */}
          <div>
            <ul className="space-y-5 text-sm text-gray-700">
              <li>
                <p className="font-semibold text-blue-600">Medidas</p>
                <p>Altura aproximada 110 cm. Diámetro de sobre 60–80 cm, según modelo.</p>
              </li>
              <li>
                <p className="font-semibold text-blue-600">Uso recomendado</p>
                <p>
                  Cócteles, recepciones, coffee breaks, corners de bebida y eventos
                  donde los invitados estén de pie.
                </p>
              </li>
              <li>
                <p className="font-semibold text-blue-600">Características</p>
                <p>
                  Estructura estable, fácil de montar y transportar. Posibilidad
                  de vestir con fundas o mantelería.
                </p>
              </li>
            </ul>

            {/* Contador cantidad */}
            <div className="mt-10 text-center">
              <p className="mb-3 text-sm text-gray-700">Cantidad de mesas</p>
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
