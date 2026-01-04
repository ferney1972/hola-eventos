"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { articulos, total } = useCart();
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [formEnviado, setFormEnviado] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    lugar: "",
    provincia: "",
    asistentes: "",
    observaciones: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const {
      nombre,
      apellido,
      telefono,
      email,
      lugar,
      provincia,
      asistentes,
      observaciones,
    } = formData;

    const bodyLines = [
      "Nueva solicitud de presupuesto desde el carrito:",
      "",
      `Nombre: ${nombre}`,
      `Apellido: ${apellido}`,
      `Teléfono: ${telefono}`,
      `Email: ${email}`,
      `Lugar del evento: ${lugar}`,
      `Provincia: ${provincia}`,
      `Cantidad de asistentes: ${asistentes}`,
      `Observaciones: ${observaciones}`,
      "",
      "Detalle de la solicitud:",
      ...articulos.map(
        (item) => `• ${item.name} x ${item.quantity} (ref: ${item.id})`
      ),
      "",
      `Total estimado: ${total} €`,
    ];

    const mailto =
      `mailto:produccionsanchezparra@gmail.com` +
      `?subject=${encodeURIComponent(
        "Solicitud de presupuesto desde la web"
      )}` +
      `&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setFormEnviado(true);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-black">
          Tu solicitud de presupuesto
        </h1>

        {/* LISTADO DEL CARRITO */}
        <div className="mb-8 space-y-2">
          {articulos.length === 0 && (
            <p className="text-gray-600 text-sm">
              No tienes productos en tu solicitud de presupuesto.
            </p>
          )}
          {articulos.map((item) => (
            <div
              key={item.id}
              className="flex justify-between border-b pb-2 text-sm"
            >
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>{item.price} €</span>
            </div>
          ))}
          {articulos.length > 0 && (
            <div className="mt-4 flex justify-between font-semibold text-black">
              <span>Total estimado</span>
              <span>{total} €</span>
            </div>
          )}
        </div>

        {/* BOTÓN REVISAR Y SOLICITAR */}
        {articulos.length > 0 && !mostrarFormulario && !formEnviado && (
          <button
            onClick={() => setMostrarFormulario(true)}
            className="inline-flex h-11 px-6 items-center justify-center rounded-md bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Revisar y solicitar
          </button>
        )}

        {/* FORMULARIO */}
        {mostrarFormulario && !formEnviado && (
          <div className="mt-8 max-w-2xl bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-black mb-4">
              Datos para tu presupuesto
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Teléfono de contacto *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Lugar del evento
                  </label>
                  <input
                    type="text"
                    name="lugar"
                    value={formData.lugar}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Provincia
                  </label>
                  <input
                    type="text"
                    name="provincia"
                    value={formData.provincia}
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Cantidad de asistentes
                </label>
                <input
                  type="number"
                  name="asistentes"
                  value={formData.asistentes}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Observaciones
                </label>
                <textarea
                  name="observaciones"
                  rows={4}
                  value={formData.observaciones}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-md bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Enviar solicitud
              </button>
            </form>
          </div>
        )}

        {/* MENSAJE DE GRACIAS */}
        {formEnviado && (
          <div className="mt-8 max-w-xl bg-white rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-bold text-black mb-2">
              Gracias por contactar con nosotros
            </h2>
            <p className="text-gray-600">
              Hemos recibido tu solicitud y nos pondremos en contacto contigo lo
              antes posible.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}



