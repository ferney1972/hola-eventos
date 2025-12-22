'use client';

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function HeaderClient() {
  const { items } = useCart();
  const count = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="border-b bg-white/80 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-xl">
          Hola Eventos
        </Link>

        <Link
          href="/cart"
          className="relative inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium hover:bg-gray-50"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Carrito</span>
          <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs text-white">
            {count}
          </span>
        </Link>
      </div>
    </header>
  );
}
