
'use client';

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, updateQuantity, removeItem } = useCart() as any;

  const isEmpty = items.length === 0;

  // Total estimado (si tus items tienen price)
  const total = items.reduce(
    (sum: number, item: any) => sum + (item.price || 0) * item.quantity,
    0
  );

  // Estado para formulario
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [formEnviado, setFormEnviado] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    lugar: "",
    provincia: "",
    asistentes: "",
    observaciones: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const {
      nombre,
      apellido,
      telefono,
      email,
      lugar,
      provincia,
      asistentes,
      observaciones,
    } = formData;

    const bodyLines = [
      "Nueva solicitud de presupuesto desde el carrito:",
      "",
      `Nombre: ${nombre}`,
      `Apellido: ${apellido}`,
      `Teléfono: ${telefono}`,
      `Email: ${email}`,
      `Lugar del evento: ${lugar}`,
      `Provincia: ${provincia}`,
      `Cantidad de asistentes: ${asistentes}`,
      `Observaciones: ${observaciones}`,
      "",
      "Detalle de la solicitud:",
      ...items.map(
        (item: any) =>
          `• ${item.name} x ${item.quantity} (ref: ${item.id})`
      ),
      "",
      `Total estimado: ${total} €`,
    ];

    const mailto =
      "mailto:produccionsanchezparra@gmail.com" +
      `?subject=${encodeURIComponent(
        "Solicitud de presupuesto desde la web"
      )}` +
      `&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setFormEnviado(true);
  };

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

          {/* Total estimado */}
          <div className="mt-2 flex justify-end text-sm font-semibold">
            <span>Total estimado: {total} €</span>
          </div>

          {/* Botón final */}
          {!mostrarFormulario && !formEnviado && (
            <div className="mt-4 border-t pt-4 flex justify-center">
              <button
                type="button"
                onClick={() => setMostrarFormulario(true)}
                className="w-full max-w-sm rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-pink-700"
              >
                Revisar y Solicitar
              </button>
            </div>
          )}

          {/* Formulario */}
          {mostrarFormulario && !formEnviado && (
            <div className="mt-6 max-w-xl mx-auto rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-bold">
                Datos para tu presupuesto
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full rounded-md border px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Apellido
                    </label>
                    <input
                      type="text"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleChange}
                      className="w-full rounded-md border px-3 py-2 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full rounded-md border px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-md border px-3 py-2 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Lugar del evento
                    </label>
                    <input
                      type="text"
                      name="lugar"
                      value={formData.lugar}
                      onChange={handleChange}
                      className="w-full rounded-md border px-3 py-2 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Provincia
                    </label>
                    <input
                      type="text"
                      name="provincia"
                      value={formData.provincia}
                      onChange={handleChange}
                      className="w-full rounded-md border px-3 py-2 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Cantidad de asistentes
                  </label>
                  <input
                    type="number"
                    name="asistentes"
                    value={formData.asistentes}
                    onChange={handleChange}
                    className="w-full rounded-md border px-3 py-2 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Observaciones
                  </label>
                  <textarea
                    name="observaciones"
                    rows={4}
                    value={formData.observaciones}
                    onChange={handleChange}
                    className="w-full rounded-md border px-3 py-2 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-pink-700"
                >
                  Enviar solicitud
                </button>
              </form>
            </div>
          )}

          {/* Mensaje de gracias */}
          {formEnviado && (
            <div className="mt-6 max-w-xl mx-auto rounded-xl border bg-white p-6 text-center shadow-sm">
              <h2 className="mb-2 text-xl font-bold">
                Gracias por contactar con nosotros
              </h2>
              <p className="text-sm text-gray-600">
                Se ha abierto tu cliente de correo con el resumen del pedido.
                Envíalo y te responderemos lo antes posible.
              </p>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
