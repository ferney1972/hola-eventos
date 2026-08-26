// app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Consejos para tu evento en Madrid — Hola Eventos",
  description:
    "Guías y consejos para organizar fiestas de 15 años, bodas y eventos en Madrid: material, decoración, efectos y trucos de alquiler. Blog de Hola Eventos.",
};

export default function BlogIndex() {
  const ordered = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-hola-navy py-14 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold">Blog de Hola Eventos</h1>
          <p className="mt-3 max-w-xl mx-auto text-white/80">
            Consejos e ideas para que tu fiesta de 15 años, boda o evento en
            Madrid salga perfecta.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ordered.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-hola-pink hover:shadow-md"
            >
              <div className="aspect-video w-full overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.cover}
                  alt={p.title}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wide text-hola-pink">
                  {p.readingMin} min de lectura
                </span>
                <h2 className="mt-2 font-bold text-hola-navy leading-snug">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm text-gray-500 line-clamp-3">
                  {p.description}
                </p>
                <span className="mt-3 inline-block text-sm font-semibold text-hola-blue">
                  Leer más →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
