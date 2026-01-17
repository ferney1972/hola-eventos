"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

type CartItem = {
  id: string;
  name: string;
  quantity: number;
  image?: { src: string }; // opcional aquí, por si tu contexto lo tiene
};

function CartPage() {
  const { items, addItem, removeItem, clearCart } = useCart();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tipoEvento, setTipoEvento] = useState("");
  const [fechaEvento, setFechaEvento] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  // Adaptamos lo que viene del contexto al tipo CartItem local
  const cart: CartItem[] = items.map((item: any) => ({
    id: item.id,
    name: item.name,
    quantity: item.quantity,
    image: item.image,
  }));

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const updateQuantity = (id: string, delta: number) => {
    const current = items.find((i: any) => i.id === id);
    if (!current) return;

    const nextQty = current.quantity + delta;

    if (nextQty <= 0) {
      removeItem(id);
    } else {
      addItem({
        ...current,
        quantity: nextQty,
      });
    }
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !email) {
      alert("Por favor, rellena al menos nombre y email.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          email,
          telefono,
          tipo_evento: tipoEvento,
          fecha_evento: fechaEvento,
          mensaje,
          carrito: cart,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        console.error("Error enviando formulario", data);
        alert("Hubo un problema al enviar el formulario. Intenta de nuevo.");
        return;
      }

      alert("Formulario enviado correctamente. Te escribiremos en breve.");
      setMensaje("");
    } catch (error) {
      console.error("Error de red al enviar formulario", error);
      alert("Error de red al enviar el formulario.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl text-black">
      <h1 className="text-3xl font-bold mb-6 text-black">
        Carrito y solicitud de presupuesto
      </h1>

      {/* Carrito */}
      <section className="mb-10 border rounded-lg p-4 bg-white">
        <h2 className="text-xl font-semibold mb-3 text-black">
          Tu selección
        </h2>

        {cart.length === 0 ? (
          <p className="text-black">No hay productos en el carrito.</p>
        ) : (
          <>
            <ul className="space-y-2">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-4 border-b pb-2 last:border-b-0 text-black"
                >
                  <span>{item.name}</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, -1)}
                      className="h-8 w-8 rounded-full border flex items-center justify-center text-black"
                    >
                      −
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, 1)}
                      className="h-8 w-8 rounded-full border flex items-center justify-center text-black"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <p className="font-semibold text-black">
                Total de ítems: {totalItems}
              </p>
              <button
                type="button"
                onClick={handleClearCart}
                className="rounded-full border border-red-500 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-500 hover:text-white"
              >
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </section>

      {/* Formulario */}
      <section className="border rounded-lg p-4 bg-white">
        <h2 className="text-xl font-semibold mb-3 text-black">
          Solicita tu presupuesto
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-black">
              Nombre completo *
            </label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 text-black"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">
              Email *
            </label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2 text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">
              Teléfono
            </label>
            <input
              type="tel"
              className="w-full border rounded px-3 py-2 text-black"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-black">
                Tipo de evento
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 text-black"
                value={tipoEvento}
                onChange={(e) => setTipoEvento(e.target.value)}
                placeholder="Boda, cumpleaños, empresa..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-black">
                Fecha del evento
              </label>
              <input
                type="date"
                className="w-full border rounded px-3 py-2 text-black"
                value={fechaEvento}
                onChange={(e) => setFechaEvento(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-black">
              Cuéntanos tu idea
            </label>
            <textarea
              className="w-full border rounded px-3 py-2 min-h-[120px] text-black"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Número aproximado de personas, lugar, horarios, etc."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2 text-white font-semibold disabled:opacity-60"
          >
            {loading ? "Enviando..." : "Enviar solicitud"}
          </button>
        </form>
      </section>
    </main>
  );
}

export default CartPage;
