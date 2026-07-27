"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function HeaderClient() {
  const { items } = useCart(); // antes: articulos
  const count = items.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0
  );

  return (
    <header className="border-b border-hola-blue/15 bg-white/90 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-hola-eventos.png"
            alt="Hola Eventos"
            width={130}
            height={94}
            priority
            className="h-11 w-auto"
          />
          <span className="hidden sm:inline text-xs font-medium text-hola-blue/70">
            Hola, ya estamos aquí
          </span>
        </Link>

        <Link
          href="/cart"
          className="relative inline-flex items-center gap-2 rounded-full border border-hola-blue px-3 py-1 text-sm font-medium text-hola-blue hover:bg-hola-blue hover:text-white transition-colors"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Carrito</span>
          <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-hola-yellow px-1 text-xs font-bold text-hola-navy">
            {count}
          </span>
        </Link>
      </div>
    </header>
  );
}

