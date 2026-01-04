"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { items, clearCart, removeItem } = useCart();
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [formEnviado, setFormEnviado] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const total = items.reduce((acc, item) => {
    const price = item.price ?? 0;
    return acc + price * (item.quantity || 0);
  }, 0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // aquí puedes montar el texto del pedido para email/WhatsApp, etc.
    // de momento solo marcamos como enviado
    setFormEnviado(true);
    clearCart();
  };

  if (formEnviado) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-2xl font-bold mb-4">
            ¡Gracias por tu solicitud!
          </h1>
          <p className="mb-4">
            Hemos recibido tu petición de presupuesto. Nos pondremos en contacto contigo lo antes posible.
          </p>
          <Link href="/" className="text-blue-600 hover:underline">
            Volver al inicio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Tu carrito</h1>

        {items.length === 0 && !mostrarFormulario && (
          <p className="mb-4">
            No hay productos en el carrito.{" "}
            <Link href="/" className="text-blue-600 hover:underline">
              Volver a la página principal
            </Link>
          </p>
        )}

        {items.length > 0 && !mostrarFormulario && (
          <>
            <ul className="mb-6 space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between rounded-lg border bg-white p-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image.src}
                      alt={item.name}
                      className="h-16 w-16 object-contain"
                    />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      {item.price !== undefined && (
                        <p className="text-sm text-gray-600">
                          {item.price.toFixed(2)} € x {item.quantity}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {item.price !== undefined && (
                      <span className="font-semibold">
                        {(item.price * (item.quantity || 0)).toFixed(2)} €
                      </span>
                    )}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-sm text-red-600 hover:underline"
                    >
                      Quitar
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mb-6 flex items-center justify-between">
              <span className="text-lg font-semibold">Total estimado:</span>
              <span className="text-xl font-bold">{total.toFixed(2)} €</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setMostrarFormulario(true)}
                className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Solicitar presupuesto
              </button>
              <button
                onClick={clearCart}
                className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Vaciar carrito
              </button>
            </div>
          </>
        )}

        {mostrarFormulario && (
          <div className="mt-8 max-w-xl rounded-lg border bg-white p-6">
            <h2 className="mb-4 text-xl font-semibold">
              Datos para el presupuesto
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Comentarios adicionales
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-md border px-3 py-2 text-sm"
                  placeholder="Cuéntanos fecha, lugar, tipo de evento..."
                />
              </div>

              <div className="mt-4 flex gap-3">
                <button
                  type="submit"
                  className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Enviar solicitud
                </button>
                <button
                  type="button"
                  onClick={() => setMostrarFormulario(false)}
                  className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  Volver al carrito
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
