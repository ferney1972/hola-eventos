'use client';

import React from "react";

export default function TarimasEscenario() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="mb-4 text-center text-3xl font-extrabold text-blue-900">
          Tarimas para Escenario
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-center text-sm text-gray-600">
          Tarimas modulares para crear escenarios a medida: conferencias, conciertos,
          pasarelas y todo tipo de eventos.
        </p>

                <ul className="space-y-5 text-sm text-gray-700">
          <li>
            <p className="font-semibold text-blue-600">Medidas de los módulos</p>
            <p>Tarimas de 2x1 m y 1x1 m que permiten montar cualquier tamaño de escenario.</p>
          </li>
          <li>
            <p className="font-semibold text-blue-600">Capacidad de carga</p>
            <p>Homologadas hasta 750–1000 kg/m² según configuración, ideales para eventos profesionales.</p>
          </li>
          <li>
            <p className="font-semibold text-blue-600">Alturas disponibles</p>
            <p>Alturas habituales de 20, 40 y 60 cm (otras bajo consulta) con superficie antideslizante.</p>
          </li>
        </ul>

        {/* Imagen de las tarimas */}
        <div className="mt-8 flex justify-center">
          <img
            src="https://misquince.es/fotos/Alquiler de tarimas para eventos.jpg"
            alt="Tarimas para escenario"
            className="max-h-72 w-auto rounded-lg object-contain"
          />
        </div>

        <div className="mt-10 text-center">
          <p className="mb-3 text-sm text-gray-700">
            Indica cuántos metros de tarima necesitas y te preparamos el mejor montaje.
          </p>
          <button className="inline-flex h-11 items-center justify-center rounded-full bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700">
            Pedir asesoramiento para tarimas
          </button>
        </div>

      </section>
    </main>
  );
}

