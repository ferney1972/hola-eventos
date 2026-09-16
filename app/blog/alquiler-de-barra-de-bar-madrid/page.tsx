// app/blog/alquiler-de-barra-de-bar-madrid/page.tsx
// Página SEO dedicada: alquiler de barra de bar en Madrid.
// (Ruta estática que prevalece sobre la dinámica /blog/[slug])
import type { Metadata } from "next";
import Link from "next/link";
import { postBarra } from "@/lib/post-barra";

export const metadata: Metadata = {
  title: `${postBarra.title} — Hola Eventos`,
  description: postBarra.description,
  openGraph: {
    title: postBarra.title,
    description: postBarra.description,
    images: [postBarra.cover],
    type: "article",
  },
};

const WA =
  "https://wa.me/34640651851?text=Hola!%20Quiero%20informaci%C3%B3n%20sobre%20el%20alquiler%20de%20barra%20de%20bar%20en%20Madrid.";

export default function BlogArticleBarra() {
  const post = postBarra;

  return (
    <main className="bg-white">
      <section className="relative text-center text-white">
        <div className="relative h-[260px] w-full overflow-hidden bg-hola-navy sm:h-[340px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.cover}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-hola-navy/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <h1 className="max-w-3xl text-2xl sm:text-4xl font-extrabold leading-tight drop-shadow">
              {post.title}
            </h1>
            <p className="mt-3 text-sm text-white/80">
              Alquiler de barras y botelleros en Madrid y alrededores
            </p>
          </div>
        </div>
      </section>

      <article className="container mx-auto max-w-3xl px-4 py-12">
        {post.body.map((b, i) => {
          if (b.type === "h2")
            return (
              <h2
                key={i}
                className="mt-8 mb-3 text-xl sm:text-2xl font-bold text-hola-navy"
              >
                {b.text}
              </h2>
            );
          if (b.type === "ul")
            return (
              <ul key={i} className="my-4 list-disc space-y-2 pl-6 text-gray-700">
                {b.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            );
          return (
            <p key={i} className="my-4 leading-relaxed text-gray-700">
              {b.text}
            </p>
          );
        })}

        <div className="mt-10 rounded-2xl bg-gray-50 p-6 text-center">
          <p className="font-bold text-hola-navy">
            ¿Quieres alquilar una barra de bar para tu evento?
          </p>
          <p className="mt-1 text-sm text-gray-600">
            Asesoramiento gratis y presupuesto a medida en Madrid.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-green-500 px-6 text-sm font-semibold text-white hover:bg-green-600"
            >
              Escríbenos por WhatsApp
            </a>
            <Link
              href="/hola-15"
              className="inline-flex h-11 items-center justify-center rounded-full bg-hola-pink px-6 text-sm font-semibold text-white hover:brightness-95"
            >
              👑 Ver Hola 15
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/blog" className="text-sm font-semibold text-hola-blue">
            ← Volver al blog
          </Link>
        </div>
      </article>
    </main>
  );
}
