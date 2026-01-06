import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      nombre,
      email,
      telefono,
      tipo_evento,
      fecha_evento,
      mensaje,
      carrito,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const textoCarrito =
      Array.isArray(carrito) && carrito.length > 0
        ? carrito
            .map(
              (item: any, i: number) =>
                `${i + 1}. ${item.name} x ${item.quantity || 1}`
            )
            .join("\n")
        : "Sin productos seleccionados";

    const textBody = `
Nueva solicitud desde el formulario de la web:

Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono || "(no indicado)"}
Tipo de evento: ${tipo_evento || "(no indicado)"}
Fecha del evento: ${fecha_evento || "(no indicada)"}

Carrito:
${textoCarrito}

Mensaje:
${mensaje || "(sin mensaje adicional)"}
`.trim();

    const info = await transporter.sendMail({
      from: `"Web Hola Eventos" <${process.env.SMTP_USER}>`,
      to: "produccionsanchezparra@gmail.com",
      subject: "Nueva solicitud desde el formulario de la web",
      text: textBody,
    });

    console.log("EMAIL_ENVIADO", info.messageId);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e: any) {
    console.error("ERROR_EMAIL", e);
    return NextResponse.json(
      { ok: false, error: e?.message || "Error enviando email" },
      { status: 500 }
    );
  }
}
