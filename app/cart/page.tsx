"use client";

import React, { useState } from "react";
import { useCart } from "@/hooks/useCart"; // ajusta la ruta si tu hook está en otro sitio

export default function CartPage() {
  const { items, clearCart, removeItem } = useCart();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [formEnviado, setFormEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!items || items.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    setEnviando(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          mensaje: formData.mensaje,
          items,
        }),
      });

      if (!res.ok) {
        alert("Ha habido un problema al enviar el formulario. Inténtalo de nuevo.");
        setEnviando(false);
        return;
      }

      setFormEnviado(true);
      clearCart();
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        mensaje: "",
      });
    } catch (err) {
      console.error(err);
      alert("No se ha podido enviar el formulario. Revisa tu conexión.");
    } finally {
      setEnviando(false);
    }
  };

  const total = items?.reduce(
    (acc: number, item: any) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-white text-black px-4 py-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Columna izquierda: Carrito */}
        <div>
          <h1 className="text-3xl font-bold mb-6">Tu carrito</h1>

          {(!items || items.length === 0) && (
            <p className="text-gray-600">
              No tienes productos en el carrito.
            </p>
          )}

          {items && items.length > 0 && (
            <div className="space-y-4">
              {items.map((item: any) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-3"
                >
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    {item.quantity && (
                      <p className="text-sm text-gray-500">
                        Cantidad: {item.quantity}
                      </p>
                    )}
                    {item.price && (
                      <p className="text-sm text-gray-500">
                        Precio: {item.price} €
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Quitar
                  </button>
                </div>
              ))}

              <div className="mt-4 flex justify-between font-semibold">
                <span>Total estimado:</span>
                <span>{total?.toFixed(2)} €</span>
              </div>
            </div>
          )}
        </div>

        {/* Columna derecha: Formulario */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Solicitar presupuesto / reserva
          </h2>

          {formEnviado ? (
            <div className="p-4 border border-green-500 text-green-700 rounded">
              Gracias por tu solicitud. Te contactaremos en breve.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  placeholder="tucorreo@ejemplo.com"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="telefono"
                >
                  Teléfono
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  placeholder="+34 ..."
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="mensaje"
                >
                  Comentarios / Detalles del evento
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Cuéntanos fecha, tipo de evento, número de invitados, etc."
                />
              </div>

              <button
                type="submit"
                disabled={enviando || !items || items.length === 0}
                className="w-full bg-black text-white py-2 rounded disabled:bg-gray-400"
              >
                {enviando ? "Enviando..." : "Enviar solicitud"}
              </button>

              <p className="text-xs text-gray-500">
                Recibirás una copia de la solicitud en tu correo y nos llegará a
                hola@holaeventos.es.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
