'use client';

import React from "react";

export default function SillaPlegableAluminio() {
  const [cantidad, setCantidad] = React.useState(1);

  const cambiarCantidad = (cambio) => {
    setCantidad((prev) => Math.max(1, prev + cambio));
  };

  const añadirAlCarrito = () => {
    alert(`✅ ${cantidad} x Silla plegable de aluminio añadido a la solicitud`);
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="mb-4 text-center text-3xl font-extrabold text-blue-900">
          Silla Plegable de Aluminio
        </h1>
        <p className="mx-auto mb-10 max-w-3xl text-center text-sm text-gray-600">
          Silla plegable de aluminio ligera y resistente, perfecta para eventos
          donde se necesita montar y desmontar rápido sin renunciar a la comodidad.
        </p>

        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="flex justify-center">
            <img
              src="https://misquince.es/fotos//sillas plegables /sillaplegableguide.jpg"
              alt="Silla plegable de aluminio"
              className="max-h-[420px] w-auto object-contain"
            />
          </div>

          <div>
            <ul className="space-y-5 text-sm text-gray-700">
              <li>
                <p className="font-semibold text-blue-600">Material</p>
                <p>Estructura de aluminio con asiento y respaldo en tejido resistente.</p>
              </li>
              <li>
                <p className="font-semibold text-blue-600">Ventajas</p>
                <p>Muy ligera, fácil de transportar y almacenar, ideal para grandes montajes.</p>
              </li>
            </ul>

            <div className="mt-10 text-center">
              <p className="mb-3 text-sm text-gray-700">Escriba la cantidad</p>
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

