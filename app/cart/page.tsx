'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { items } = useCart() as any;

  const total = items.reduce(
    (sum: number, item: any) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  const handleSend = () => {
    const bodyLines = [
      'Nueva solicitud de presupuesto desde el carrito:',
      '',
      'Detalle de la solicitud:',
      ...items.map(
        (item: any) => `• ${item.name} x ${item.quantity} (ref: ${item.id})`
      ),
      '',
      `Total estimado: ${total} €`,
    ];

    const mailto =
      `mailto:produccionsanchezparra@gmail.com` +
      `?subject=${encodeURIComponent('Solicitud de presupuesto desde la web')}` +
      `&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    window.location.href = mailto;
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-black">
          Tu solicitud de presupuesto
        </h1>

        <div className="mb-8 space-y-2">
          {items.length === 0 && (
            <p className="text-gray-600 text-sm">
              No tienes productos en tu solicitud de presupuesto.
            </p>
          )}

          {items.map((item: any) => (
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

          {items.length > 0 && (
            <div className="mt-4 flex justify-between font-semibold text-black">
              <span>Total estimado</span>
              <span>{total} €</span>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <button
            onClick={handleSend}
            className="inline-flex h-11 px-6 items-center justify-center rounded-md bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Enviar solicitud por correo
          </button>
        )}
      </section>
    </main>
  );
}

