'use client';

import React from "react";

export default function Estufas() {
  const [cantidad, setCantidad] = React.useState(1);

  const cambiarCantidad = (cambio) => {
    setCantidad((prev) => Math.max(1, prev + cambio));
  };

  const añadirAlCarrito = () => {
    alert(`✅ ${cantidad} x Estufa de gas tipo seta añadido a la solicitud`);
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="mb-4 text-center text-3xl font-extrabold text-blue-900">
          Estufa de Gas tipo Seta
        </h1>
        <p className="mx-auto mb-10 max-w-3xl text-center text-sm text-gray-600">
          Nuestra estufa de gas para exteriores es la solución perfecta para mantener un ambiente
          cálido y confortable en terrazas, jardines o cualquier espacio al aire libre. Su diseño
          elegante y funcional se integra a la perfección en cualquier decoración.
        </p>

        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* Imagen izquierda */}
          <div className="flex justify-center">
            <img
              src="https://misquince.es/fotos/estufa-seta-de-gas-exterior-inox.jpg"
              alt="Estufa de gas tipo seta"
              className="max-h-[420px] w-auto object-contain"
            />
          </div>

          {/* Texto + contador derecha */}
          <div>
            <ul className="space-y-5 text-sm text-gray-700">
              <li>
                <p className="font-semibold text-blue-600">Medidas</p>
                <p>Altura: 2,25 m. Diámetro base: 46 cm. Diámetro reflector: 81 cm.</p>
              </li>
              <li>
                <p className="font-semibold text-blue-600">Botellas de Gas</p>
                <p>Compatibles con botellas de butano o propano de 11 kg o 13 kg.</p>
              </li>
              <li>
                <p className="font-semibold text-blue-600">Capacidad de Calentamiento</p>
                <p>Abarca un área de aproximadamente 20‑25 m².</p>
              </li>
            </ul>

            {/* Contador cantidad */}
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
                Añadir a la solicitud
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
