"use client";

import React, { useState } from "react";

export default function Cart() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipo_evento: "",
    fecha_evento: "",
    mensaje: "",
  });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setEnviado(false);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        alert(
          "Ha habido un problema al enviar el formulario. Inténtalo de nuevo."
        );
        setEnviando(false);
        return;
      }

      setEnviado(true);
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        tipo_evento: "",
        fecha_evento: "",
        mensaje: "",
      });
    } catch (err) {
      console.error(err);
      alert("No se ha podido enviar el formulario. Revisa tu conexión.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Solicitar presupuesto / reserva
        </h1>

        {enviado && (
          <div className="mb-4 p-4 border border-green-500 text-green-700 rounded">
            Gracias por tu solicitud. Te contactaremos en breve.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="nombre">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              className="w-full border rounded px-3 py-2"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border rounded px-3 py-2"
              placeholder="tucorreo@ejemplo.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="telefono"
            >
              Teléfono
            </label>
            <input
              id="telefono"
              name="telefono"
              type="tel"
              required
              className="w-full border rounded px-3 py-2"
              placeholder="+34 ..."
              value={formData.telefono}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="tipoEvento"
            >
              Tipo de evento
            </label>
            <input
              id="tipoEvento"
              name="tipo_evento"
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="Boda, cumpleaños, corporativo..."
              value={formData.tipo_evento}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="fecha">
              Fecha del evento (aproximada)
            </label>
            <input
              id="fecha"
              name="fecha_evento"
              type="date"
              className="w-full border rounded px-3 py-2"
              value={formData.fecha_evento}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="mensaje"
            >
              Comentarios / Detalles del evento
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              className="w-full border rounded px-3 py-2"
              placeholder="Cuéntanos número de invitados, ubicación, estilo de decoración, etc."
              value={formData.mensaje}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={enviando}
            className="w-full bg-black text-white py-2 rounded disabled:bg-gray-400"
          >
            {enviando ? "Enviando..." : "Enviar solicitud"}
          </button>
        </form>
      </div>
    </div>
  );
}
