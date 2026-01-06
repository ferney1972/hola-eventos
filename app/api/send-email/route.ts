import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // 1) Leer datos del formulario
    const body = await req.json();

    const {
      nombre,
      email,
      telefono,
      fechaEvento,
      tipoEvento,
      mensaje,
      carrito, // opcional: array con los productos
    } = body;

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // 2) Configurar el transporte SMTP (NUNCA localhost)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,             // ej: "smtp.gmail.com"
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465, // true solo si usas 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 3) Construir el contenido del email
    const textoCarrito =
      Array.isArray(carrito) && carrito.length > 0
        ? carrito
            .map(
              (item: any, i: number) =>
                `${i + 1}. ${item.name} x ${item.quantity || 1}`
            )
            .join("\n")
        : "Sin productos seleccionados";

    const htmlCarrito =
      Array.isArray(carrito) && carrito.length > 0
        ? `<ul>${carrito
            .map(
              (item: any) =>
                `<li><strong>${item.name}</strong> x ${item.quantity || 1}</li>`
            )
            .join("")}</ul>`
        : "<p>Sin productos seleccionados</p>";

    const asunto = `Nueva solicitud de presupuesto - ${nombre}`;

    const textoPlano = `
Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono || "No indicado"}
Fecha evento: ${fechaEvento || "No indicada"}
Tipo de evento: ${tipoEvento || "No indicado"}

Mensaje:
${mensaje}

Carrito:
${textoCarrito}
    `.trim();

    const html = `
      <h2>Nueva solicitud de presupuesto</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${telefono || "No indicado"}</p>
      <p><strong>Fecha evento:</strong> ${fechaEvento || "No indicada"}</p>
      <p><strong>Tipo de evento:</strong> ${tipoEvento || "No indicado"}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje.replace(/\n/g, "<br/>")}</p>
      <hr/>
      <h3>Carrito seleccionado</h3>
      ${htmlCarrito}
    `;

    // 4) Enviar email
    const info = await transporter.sendMail({
      from: `"Hola Eventos" <${process.env.SMTP_USER}>`,
      to: process.env.EMAIL_TO || process.env.SMTP_USER, // destinatario
      subject: asunto,
      text: textoPlano,
      html,
    });

    console.log("EMAIL_ENVIADO", info.messageId);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error: any) {
    console.error("ERROR_EMAIL", error);
    return NextResponse.json(
      {
        ok: false,
        error: "No se pudo enviar el email",
        detalle: error?.message || "Error desconocido",
      },
      { status: 500 }
    );
  }
}
