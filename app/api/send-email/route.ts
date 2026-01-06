"use client";

import React, { useState } from "react";

type CartItem = {
  id: string;
  name: string;
  quantity: number;
};

const initialCart: CartItem[] = [
  { id: "1", name: "Estufa de gas exterior", quantity: 1 },
  { id: "2", name: "Silla blanca de resina", quantity: 1 },
];

function CartPage() {
  const [cart, setCart] = useState<CartItem[]>(initialCart);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tipoEvento, setTipoEvento] = useState("");
  const [fechaEvento, setFechaEvento] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
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
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">
        Carrito y solicitud de presupuesto
      </h1>

      {/* Carrito */}
      <section className="mb-10 border rounded-lg p-4 bg-white">
        <h2 className="text-xl font-semibold mb-3">Tu selección</h2>
        {cart.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-4 border-b pb-2 last:border-b-0"
              >
                <span>{item.name}</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, -1)}
                    className="h-8 w-8 rounded-full border flex items-center justify-center"
                  >
                    −
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, 1)}
                    className="h-8 w-8 rounded-full border flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-4 font-semibold">Total de ítems: {totalItems}</p>
      </section>

      {/* Formulario */}
      <section className="border rounded-lg p-4 bg-white">
        <h2 className="text-xl font-semibold mb-3">Solicita tu presupuesto</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* campos del formulario */}
          {/* ...todo igual que arriba... */}
        </form>
      </section>
    </main>
  );
}

export default CartPage;
