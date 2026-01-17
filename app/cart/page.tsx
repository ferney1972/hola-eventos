"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";

type CartItem = {
  id: string;
  name: string;
  quantity: number;
};

function CartPage() {
  // Usa solo lo que exista en tu CartContext
  const { items, addItem, removeItem, clearCart } = useCart();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tipoEvento, setTipoEvento] = useState("");
  const [fechaEvento, setFechaEvento] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  const cart: CartItem[] = items.map((item) => ({
    id: item.id,
    name: item.name,
    quantity: item.quantity,
  }));

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const updateQuantity = (id: string, delta: number) => {
    const current = cart.find((i) => i.id === id);
    if (!current) return;

    const nextQty = current.quantity + delta;

    if (nextQty <= 0) {
      // quitar del carrito
      removeItem(id);
    } else {
      // volver a añadir con la nueva cantidad
      addItem({ ...current, quantity: nextQty });
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
                  <div className="flex items-ce
