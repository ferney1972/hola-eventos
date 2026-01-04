'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { articulos } = useCart();
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [formEnviado, setFormEnviado] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const total = articulos.reduce(
    (suma, item) => suma + (item.price || 0) * (item.quantity || 1),
    0
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lineasCarrito = articulos.map(
      item =>
        `• ${item.name} x ${item.quantity} (ref: ${item.id})`
    );

    const cuerpo = [
      `Nombre: ${formData.nombre}`,
      `Email: ${formData.email}`,
      `Teléfono: ${formData.telefono}`,
      '',
      'Mensaje adicional:',
      formData.mensaje,
      '',
      'Detalle de la solicitud:',
      ...lineasCarrito,
      '',
      `Total estimado: ${total} €`,
    ].join('\n');

    const mailto =
      'mailto:produccionsanchezparra@gmail.com' +
      `?subject=${encodeURIComponent('Solicitud de presupuesto desde la web')}` +
      `&body=${encodeURIComponent(cuerpo)}`;

    window.location.href = mailto;
    setFormEnviado(true);
  };

  const carritoVacio = articulos.length === 0;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">Tu Solicitud de Presupuesto</h1>

      {carritoVacio ? (
        <p>Tu carrito todavía está vacío.</p>
      ) : (
        <>
          <section className="mb-8 space-y-4">
            {articulos.map(item => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border bg-white px-4 py-3 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-lg border bg-gray-50">
                    <img
                      src={item.image?.src}
                      alt={item.name}
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <div className="font-semibold text-sm md:text-base">
                    {item.name} x {item.quantity}
                  </div>
                </div>
                <div className="text-sm font-semibold">
                  {(item.price || 0) * (item.quantity || 1)} €
                </div>
              </div>
            ))}

            <div className="mt-2 flex justify-end text-sm font-semibold">
              <span>Total estimado: {total} €</span>
            </div>
          </section>

          {!mostrarFormulario && !formEnviado && (
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setMostrarFormulario(true)}
                className="w-full max-w-sm rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-pink-700"
              >
                Completar datos y enviar solicitud
              </button>
            </div>
          )}

          {mostrarFormulario && !formEnviado && (
            <section className="mt-8 max-w-xl mx-auto">
              <h2 className="mb-4 text-lg font-semibold">
                Datos de contacto
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Nombre y apellidos
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border px-3 py-2 text-sm"
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
                    className="w-full rounded-lg border px-3 py-2 text-sm"
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
                    className="w-full rounded-lg border px-3 py-2 text-sm"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Mensaje adicional
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-lg border px-3 py-2 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-pink-700"
                >
                  Enviar solicitud por correo
                </button>
              </form>
            </section>
          )}

          {formEnviado && (
            <p className="mt-6 text-center text-sm">
              Tu cliente de correo debería haberse abierto con el mensaje
              preparado. Revisa y envíalo para completar la solicitud.
            </p>
          )}
        </>
      )}
    </main>
  );
}

