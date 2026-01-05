import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { nombre, email, telefono, tipo_evento, fecha_evento, mensaje } =
      await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const textBody = `
Nueva solicitud desde el formulario de la web:

Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono}
Tipo de evento: ${tipo_evento || "(no indicado)"}
Fecha del evento: ${fecha_evento || "(no indicada)"}

Mensaje:
${mensaje || "(sin mensaje adicional)"}
`.trim();

    const info = await transporter.sendMail({
      from: `"Web Hola Eventos" <hola@holaeventos.es>`,
      to: "produccionsanchezparra@gmail.com",
      subject: "Nueva solicitud desde el formulario de la web",
      text: textBody,
    });

    console.log("EMAIL_ENVIADO", info.messageId);

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("ERROR_EMAIL", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
