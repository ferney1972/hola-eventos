// app/hola-15/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Hola 15 | Fiestas de 15 años y quinceañeras en Madrid — Hola Eventos",
  description:
    "Organización y alquiler de material para fiestas de 15 años en Madrid: trono, pista de baile LED, pantallas LED, humo bajo, chispas frías, sonido, mariachis, hora loca, decoración y mucho más. Pide tu presupuesto sin compromiso.",
};

// Material propio de Hola Eventos (con foto real)
const material: { img: string; title: string; desc: string }[] = [
  { img: "/productos/prod-butaca-retro.jpg", title: "Trono de honor", desc: "El sillón estrella para la quinceañera. La foto del año." },
  { img: "/productos/prod-silla-blanca-acolchada.jpg", title: "Sillas", desc: "Cómodas y elegantes para todos tus invitados." },
  { img: "/productos/prod-funda-silla.png", title: "Fundas y lazos", desc: "Visten las sillas al color de tu fiesta." },
  { img: "/productos/prod-mesa-180.jpg", title: "Mesas", desc: "Para banquete y cóctel, del tamaño que necesites." },
  { img: "/productos/prod-manteleria.jpg", title: "Kit de vajillas", desc: "Mantelería, vajilla, cristalería y cubertería." },
  { img: "/productos/prod-carpa-beduina.jpg", title: "Carpas", desc: "Cubre tu evento llueva o haga sol." },
  { img: "/productos/prod-tarima.png", title: "Escenario y tarima", desc: "Para el vals, el show y la banda." },
  { img: "/productos/prod-mesa-alta-cocktail.jpg", title: "Mesas de cóctel", desc: "Zona de recibimiento y aperitivo con estilo." },
];

// Efectos, show y servicios
const show: { icon: string; title: string; desc: string }[] = [
  { icon: "🕺", title: "Pista de baile LED", desc: "Suelo iluminado que enciende la fiesta." },
  { icon: "🌫️", title: "Máquina de humo bajo", desc: "El vals soñado bailando sobre una nube." },
  { icon: "🎆", title: "Máquina de chispas", desc: "Chispas frías para las entradas más espectaculares." },
  { icon: "🌈", title: "Humo de colores", desc: "Efectos de color para las fotos más virales." },
  { icon: "📺", title: "Pantallas LED", desc: "Vídeos, fotos y el nombre de la quinceañera en grande." },
  { icon: "✨", title: "Decoración", desc: "Ambientación completa a tu gusto y temática." },
  { icon: "🔊", title: "Sonido e iluminación", desc: "Equipo profesional de sonido y luces." },
  { icon: "🎺", title: "Mariachis", desc: "La sorpresa musical que emociona a toda la familia." },
  { icon: "🎉", title: "Hora loca", desc: "Animación, atrezzo y energía para reventar la pista." },
];

// Packs orientativos
const packs: { name: string; tag: string; includes: string[]; highlight?: boolean }[] = [
  {
    name: "Pack Esencial",
    tag: "El mobiliario listo",
    includes: [
      "Mesas y sillas para tus invitados",
      "Fundas y lazos a tu color",
      "Kit de vajilla y mantelería",
      "Trono de honor para las fotos",
    ],
  },
  {
    name: "Pack Fiesta",
    tag: "El más pedido",
    highlight: true,
    includes: [
      "Todo lo del Pack Esencial",
      "Pista de baile LED",
      "Sonido e iluminación",
      "Máquina de humo bajo para el vals",
    ],
  },
  {
    name: "Pack Todo Incluido",
    tag: "La fiesta completa",
    includes: [
      "Todo lo del Pack Fiesta",
      "Pantallas LED + chispas frías",
      "Decoración y ambientación",
      "Mariachis y hora loca",
    ],
  },
];

const WA =
  "https://wa.me/34640651851?text=Hola!%20Quiero%20informaci%C3%B3n%20para%20una%20fiesta%20de%2015%20a%C3%B1os.";

export default function Hola15() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-hola-pink to-hola-navy text-center text-white">
        <div className="container mx-auto px-4 py-16 sm:py-24 flex flex-col items-center">
          <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest">
            Fiestas de 15 años · Madrid
          </span>
          <h1 className="mx-auto max-w-3xl text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Hola <span className="text-hola-yellow">15</span>
          </h1>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-white/90">
            Convertimos los 15 años en la fiesta que siempre soñó. Material,
            efectos y show: lo montamos todo por ti.
          </p>
          <p className="mt-4 max-w-xl text-lg font-semibold text-hola-yellow">
            Si no lo tengo, te lo consigo. Y si no lo consigo, te lo construyo.
          </p>

          <div className="mt-8 w-full max-w-md flex flex-col gap-3">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition-colors"
            >
              Pedir presupuesto por WhatsApp
            </a>
            <a
              href="tel:+34640651851"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-hola-yellow text-hola-navy text-sm font-bold hover:brightness-95 transition"
            >
              📞 Llamar ahora — 640 65 18 51
            </a>
          </div>
        </div>
      </section>

      {/* EL MATERIAL */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-hola-navy">
            El material
          </h2>
          <p className="mt-2 max-w-2xl text-gray-600">
            Todo el mobiliario y menaje para que tu celebración luzca perfecta.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {material.map((m) => (
              <div
                key={m.title}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-hola-pink hover:shadow-md"
              >
                <div className="aspect-square w-full overflow-hidden bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.img}
                    alt={m.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-hola-navy">{m.title}</h3>
                  <p className="mt-1 text-xs text-gray-500">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EL SHOW */}
      <section className="bg-white py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-hola-navy">
            Los efectos y el show
          </h2>
          <p className="mt-2 max-w-2xl text-gray-600">
            La parte que se hace viral: luces, humo, chispas y animación.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {show.map((s) => (
              <div
                key={s.title}
                className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:border-hola-pink hover:bg-white hover:shadow-md"
              >
                <div className="text-3xl">{s.icon}</div>
                <div>
                  <h3 className="font-bold text-hola-navy">{s.title}</h3>
                  <p className="mt-1 text-xs text-gray-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKS */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-hola-navy">
            Elige tu pack
          </h2>
          <p className="mt-2 max-w-2xl text-gray-600">
            Tres formas de montar tu fiesta. Los adaptamos a tu presupuesto y a
            tu número de invitados.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {packs.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col rounded-2xl border-2 bg-white p-6 shadow-sm ${
                  p.highlight
                    ? "border-hola-pink shadow-md"
                    : "border-gray-200"
                }`}
              >
                {p.highlight && (
                  <span className="mb-3 self-start rounded-full bg-hola-pink px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    ⭐ {p.tag}
                  </span>
                )}
                {!p.highlight && (
                  <span className="mb-3 self-start rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {p.tag}
                  </span>
                )}
                <h3 className="text-xl font-extrabold text-hola-navy">
                  {p.name}
                </h3>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-gray-600">
                  {p.includes.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-hola-pink">✓</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex h-11 w-full items-center justify-center rounded-full text-sm font-bold transition ${
                    p.highlight
                      ? "bg-hola-pink text-white hover:brightness-95"
                      : "bg-hola-navy text-white hover:brightness-110"
                  }`}
                >
                  Pedir este pack
                </a>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-gray-400">
            * Packs orientativos. El presupuesto final se ajusta a tu evento.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-hola-navy py-16 text-center text-white">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h2 className="max-w-2xl text-2xl sm:text-3xl font-bold">
            ¿Lista para tu fiesta de 15?
          </h2>
          <p className="mt-3 max-w-xl text-white/80">
            Cuéntanos tu idea y te preparamos un presupuesto a medida, sin
            compromiso. Nos encargamos de todo para que solo tengas que disfrutar.
          </p>
          <div className="mt-8 w-full max-w-md flex flex-col gap-3">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition-colors"
            >
              Hablar por WhatsApp
            </a>
            <Link
              href="/"
              className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/40 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Ver todo el material
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
