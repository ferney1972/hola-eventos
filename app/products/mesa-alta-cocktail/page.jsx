"use client";

import React from "react";
import { useCart } from "@/context/CartContext";

export default function MesaAltaCocktail() {
  const { addItem } = useCart();
  const [cantidad, setCantidad] = React.useState(1);

  // ⬇⬇ SIN ": number"
  const cambiarCantidad = (cambio) => {
    setCantidad((prev) => {
      const nueva = prev + cambio;
      return nueva < 1 ? 1 : nueva;
    });
  };

  const añadirAlCarrito = () => {
    addItem({
      id: "mesa-alta-cocktail",
      name: "Mesa alta para cocktail",
      price: 10, // cambia al precio real
      image: {
        src: "https://misquince.es/fotos/mesa-alta-cocktail.jpg",
      },
      quantity: cantidad,
    });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* ...resto del código igual que lo tienes... */}
    </main>
  );
}

