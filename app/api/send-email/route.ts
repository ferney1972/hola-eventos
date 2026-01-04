import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { nombre, email, telefono, mensaje, items } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const productosTexto =
      items && items.length
        ? items
            .map(
              (it: any) =>
                `- ${it.name} (cantidad: ${it.quantity || 1})`
            )
            .join("\n")
        : "Sin productos en el carrito";

    const textBody = `
Nuevo pedido de presupuesto desde la web:

Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono}

Mensaje:
${mensaje || "(sin mensaje adicional)"}

Productos seleccionados:
${productosTexto}
`.trim();

    await transporter.sendMail({
      from: `"Web Hola Eventos" <hola@holaeventos.es>`,
      to: "produccionsanchezparra@gmail.com",
      subject: "Nueva solicitud de presupuesto desde la web",
      text: textBody,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Error enviando email", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
