"use client";

import React, { useState } from "react";

export default function CartPage() {
  const [enviado, setEnviado] = useState(false);

  // Si quieres, aquí podrías seguir leyendo productos del carrito
  // desde localStorage o desde tu contexto, pero para simplificar
  // este ejemplo se centra solo en el formulario.

  return (
    <div className="min-h-screen bg-white text-black px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Solicitar presupuesto / reserva</h1>

        {enviado ? (
          <div className="p-4 border border-green-500 text-green-700 rounded">
            Gracias por tu solicitud. Te contactaremos en breve.
          </div>
        ) : (
          <form
            action="https://formsubmit.co/produccionsanchezparra@gmail.com"
            method="POST"
            className="space-y-4"
            onSubmit={() => setEnviado(true)}
          >
            {/* Opciones de FormSubmit */}
            {/* Desactivar captcha de FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            {/* Página de gracias opcional: cambia la URL por la tuya si quieres */}
            {/* <input type="hidden" name="_next" value="https://tudominio.com/gracias" /> */}

            {/* Nombre */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="nombre">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                className="w-full border rounded px-3 py-2"
                placeholder="Tu nombre"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border rounded px-3 py-2"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="telefono">
                Teléfono
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                required
                className="w-full border rounded px-3 py-2"
                placeholder="+34 ..."
              />
            </div>

            {/* Tipo de evento (opcional) */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="tipoEvento">
                Tipo de evento
              </label>
              <input
                id="tipoEvento"
                name="tipo_evento"
                type="text"
                className="w-full border rounded px-3 py-2"
                placeholder="Boda, cumpleaños, corporativo..."
              />
            </div>

            {/* Fecha aproximada */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="fecha">
                Fecha del evento (aproximada)
              </label>
              <input
                id="fecha"
                name="fecha_evento"
                type="date"
                className="w-full border rounded px-3 py-2"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="mensaje">
                Comentarios / Detalles del evento
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                className="w-full border rounded px-3 py-2"
                placeholder="Cuéntanos número de invitados, ubicación, estilo de decoración, etc."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded"
            >
              Enviar solicitud
            </button>

            <p className="text-xs text-gray-500">
              La primera vez recibirás un correo de confirmación de FormSubmit.
              Solo tendrás que confirmarlo una vez y después te llegarán todas
              las solicitudes directamente a tu Gmail.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
