// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Artículo no encontrado — Hola Eventos" };
  return {
    title: `${post.title} — Hola Eventos`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.cover],
      type: "article",
    },
  };
}

const WA =
  "https://wa.me/34640651851?text=Hola!%20He%20le%C3%ADdo%20vuestro%20blog%20y%20quiero%20informaci%C3%B3n.";

export default async function BlogArticle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const fecha = new Date(post.date).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

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
              {fecha} · {post.readingMin} min de lectura
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
            ¿Quieres organizar tu evento con nosotros?
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
