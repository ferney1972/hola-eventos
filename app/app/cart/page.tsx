'use client';

import { Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, updateQuantity, removeItem } = useCart() as any;

  const isEmpty = items.length === 0;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">Tu Solicitud de Presupuesto</h1>

      {isEmpty ? (
        <p>Tu carrito todavía está vacío.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {items.map((item: any) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl border bg-white px-4 py-3 shadow-sm"
            >
              {/* Imagen + nombre */}
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-lg border bg-gray-50">
                  <img
                    src={item.image.src}
                    alt={item.name}
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <div className="font-semibold text-sm md:text-base">
                  {item.name}
                </div>
              </div>

              {/* Controles cantidad + papelera */}
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center rounded-full border bg-white px-3 py-1">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, -1)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border text-lg font-bold"
                  >
                    –
                  </button>
                  <span className="w-8 text-center text-sm font-medium">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, +1)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border text-lg font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}

          {/* Botón final */}
          <div className="mt-4 border-t pt-4 flex justify-center">
            <button className="w-full max-w-sm rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-pink-700">
              Revisar y Solicitar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
