// app/blog/alquiler-de-carpas-madrid/page.tsx
// Página SEO dedicada: alquiler de carpas en Madrid.
// (Ruta estática que prevalece sobre la dinámica /blog/[slug])
import type { Metadata } from "next";
import Link from "next/link";
import { postCarpa } from "@/lib/post-carpa";

export const metadata: Metadata = {
  title: `${postCarpa.title} — Hola Eventos`,
  description: postCarpa.description,
  openGraph: {
    title: postCarpa.title,
    description: postCarpa.description,
    images: [postCarpa.cover],
    type: "article",
  },
};

const TELEFONO = "640 65 18 51";
const TELEFONO_INTL = "+34640651851";
const WA =
  "https://wa.me/34640651851?text=Hola!%20Quiero%20informaci%C3%B3n%20sobre%20el%20alquiler%20de%20carpas%20en%20Madrid.";

// Preguntas frecuentes: texto claro en formato pregunta-respuesta,
// pensado para que buscadores y asistentes de IA puedan citarlo.
const FAQ: { q: string; a: string }[] = [
  {
    q: "¿Cuánto cuesta alquilar una carpa en Madrid?",
    a: "El precio depende del tipo de carpa, del tamaño, de la fecha y de los complementos (suelo, iluminación, decoración). Por eso trabajamos con presupuesto a medida: escríbenos por WhatsApp al 640 65 18 51 con la fecha, el lugar y cuántas personas sois, y te damos un precio cerrado y sin compromiso en menos de 24 horas.",
  },
  {
    q: "¿Qué carpa necesito para 60 personas?",
    a: "Como orientación: de pie y en formato cóctel se calcula alrededor de 1 m² por persona, así que para 60 personas necesitas unos 60 m² (por ejemplo una carpa de 6×10 metros). Sentados con mesas se calcula 1,5 m² por persona, unos 90-100 m² (por ejemplo una carpa de 10×10 metros). Te asesoramos gratis para elegir la medida exacta según tu celebración.",
  },
  {
    q: "¿Qué carpa hace falta para 100 personas?",
    a: "Para 100 personas: de pie, tipo cóctel, unos 100 m² (una carpa de 10×10 metros va justa y una de 10×12 va cómoda). Sentados con mesas redondas, unos 150 m² (por ejemplo una carpa de 10×15 metros). Si además quieres pista de baile o barra dentro, hay que sumar espacio.",
  },
  {
    q: "¿El precio incluye el montaje y el desmontaje?",
    a: "Sí. Nuestro servicio incluye la entrega en el lugar del evento, el montaje profesional y la recogida al terminar, en Madrid y alrededores. Tú solo te preocupas de disfrutar de tu celebración.",
  },
  {
    q: "¿Qué zonas de Madrid cubrís?",
    a: "Montamos carpas en Madrid capital y en toda la Comunidad de Madrid, y también en zonas cercanas de Toledo: Humanes de Madrid, Fuenlabrada, Móstoles, Getafe, Alcorcón, Leganés, Parla, Aranjuez, Illescas y alrededores. Si tu evento está más lejos, pregúntanos: seguro que nos ponemos de acuerdo.",
  },
  {
    q: "¿Tenéis carpas plegables y de qué medidas?",
    a: "Sí. Disponemos de carpas plegables de 2×2, 2×3, 2×4, 3×3, 3×4,5, 3×6, 4×4, 4×6 y 5×5 metros, con la opción de cerramiento cerrado, transparente o con ventana. Son rápidas de montar y perfectas para comuniones, ferias, stands y fiestas privadas.",
  },
  {
    q: "¿Hacéis carpas con lona transparente?",
    a: "Sí. Trabajamos con lonas transparentes, que mantienen la visibilidad y la luz natural sin renunciar a la protección, y con lonas opacas para máxima privacidad. Todas con tratamiento ignífugo, antimoho y antihumedad.",
  },
  {
    q: "¿Con cuánta antelación hay que reservar una carpa?",
    a: "Lo ideal es reservar con 2 o 3 semanas de antelación, sobre todo en temporada de bodas y comuniones (primavera y verano). Aun así, si tu evento es urgente, pregúntanos: si tenemos disponibilidad, lo montamos igualmente.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Hola Eventos",
  description:
    "Alquiler de carpas, mobiliario y material para eventos en Madrid y Toledo: carpas beduinas, estructurales y plegables, con entrega, montaje y recogida incluidos.",
  telephone: TELEFONO_INTL,
  url: "https://holaeventos.es",
  image: "https://holaeventos.es/productos/prod-carpa-beduina.jpg",
  priceRange: "€€",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Comunidad de Madrid" },
    { "@type": "AdministrativeArea", name: "Toledo" },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Comunidad de Madrid",
    addressCountry: "ES",
  },
  knowsAbout: [
    "alquiler de carpas en Madrid",
    "carpas plegables",
    "carpa beduina",
    "alquiler de mobiliario para eventos",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function BlogArticleCarpa() {
  const post = postCarpa;

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
              Alquiler de carpas para eventos en Madrid y alrededores
            </p>
            <p className="mt-2 text-sm font-semibold text-white">
              Teléfono y WhatsApp: {TELEFONO}
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

        {/* Preguntas frecuentes (formato pregunta-respuesta) */}
        <h2 className="mt-10 mb-3 text-xl sm:text-2xl font-bold text-hola-navy">
          Preguntas frecuentes sobre alquiler de carpas en Madrid
        </h2>
        <div className="mt-2 divide-y divide-gray-200">
          {FAQ.map((f, i) => (
            <div key={i} className="py-4">
              <h3 className="text-base font-semibold text-hola-navy">{f.q}</h3>
              <p className="mt-1 leading-relaxed text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-gray-50 p-6 text-center">
          <p className="font-bold text-hola-navy">
            ¿Quieres alquilar una carpa para tu evento?
          </p>
          <p className="mt-1 text-sm text-gray-600">
            Asesoramiento gratis y presupuesto a medida en Madrid. Llámanos o
            escríbenos por WhatsApp al{" "}
            <span className="font-semibold text-hola-navy">{TELEFONO}</span>.
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
            <a
              href={`tel:${TELEFONO_INTL}`}
              className="inline-flex h-11 items-center justify-center rounded-full bg-hola-navy px-6 text-sm font-semibold text-white hover:brightness-110"
            >
              📞 Llamar al {TELEFONO}
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
