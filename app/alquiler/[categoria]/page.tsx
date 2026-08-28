// app/alquiler/[categoria]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/lib/categories";
import { products } from "@/lib/products";

export function generateStaticParams() {
  return categories.map((c) => ({ categoria: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>;
}): Promise<Metadata> {
  const { categoria } = await params;
  const cat = getCategory(categoria);
  if (!cat) return { title: "Categoría no encontrada — Hola Eventos" };
  return {
    title: cat.title,
    description: cat.description,
    alternates: { canonical: `/alquiler/${cat.slug}` },
  };
}

function productsFor(keywords: string[]) {
  const kw = keywords.map((k) => k.toLowerCase());
  return products.filter((p) =>
    kw.some((k) => p.name.toLowerCase().includes(k))
  );
}

const WA = (name: string) =>
  `https://wa.me/34640651851?text=${encodeURIComponent(
    `Hola! Quiero alquilar: ${name}. ¿Cuál es el presupuesto?`
  )}`;

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const cat = getCategory(categoria);
  if (!cat) notFound();

  const list = productsFor(cat.keywords);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cat.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* CABECERA */}
      <section className="bg-hola-navy py-12 text-white">
        <div className="container mx-auto px-4">
          <p className="text-xs text-white/60">
            <Link href="/" className="hover:underline">
              Inicio
            </Link>{" "}
            / Alquiler / {cat.h1}
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold">{cat.h1}</h1>
        </div>
      </section>

      {/* INTRO SEO */}
      <section className="py-10">
        <div className="container mx-auto max-w-3xl px-4">
          {cat.intro.map((p, i) => (
            <p key={i} className="mb-4 leading-relaxed text-gray-700">
              {p}
            </p>
          ))}
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/34640651851?text=Hola!%20Quiero%20pedir%20presupuesto%20de%20alquiler%20para%20un%20evento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-full bg-green-500 px-6 text-sm font-semibold text-white hover:bg-green-600"
            >
              Pedir presupuesto por WhatsApp
            </a>
            <a
              href="tel:+34640651851"
              className="inline-flex h-11 items-center justify-center rounded-full bg-hola-yellow px-6 text-sm font-bold text-hola-navy hover:brightness-95"
            >
              📞 640 65 18 51
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      {list.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-2xl font-bold text-hola-navy">
              Nuestro material disponible
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {list.map((p) => (
                <a
                  key={p.id}
                  href={WA(p.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-hola-pink hover:shadow-md"
                >
                  <div className="aspect-square w-full overflow-hidden bg-white p-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image.src}
                      alt={p.name}
                      className="h-full w-full object-contain transition group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="text-sm font-semibold text-hola-navy">
                      {p.name}
                    </h3>
                    <span className="mt-1 inline-block text-xs font-semibold text-green-600">
                      Pedir presupuesto →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-12">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-hola-navy">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {cat.faqs.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-5"
              >
                <h3 className="font-bold text-hola-navy">{f.q}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="mb-4 text-xl font-bold text-hola-navy">
              Otras categorías
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories
                .filter((c) => c.slug !== cat.slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/alquiler/${c.slug}`}
                    className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-hola-blue hover:border-hola-blue"
                  >
                    {c.h1}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
