"use client";

import React, { useState } from "react";
import { VideoThumbnail } from "@/components/video-thumbnail";
import { MessageSquare } from "lucide-react";
import { products, type Product } from "@/lib/products";
import { categories } from "@/lib/categories";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Home() {
  const { addItem } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [flash, setFlash] = useState("");
  const [lastAddedId, setLastAddedId] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [openQuickContact, setOpenQuickContact] = useState(false);

  const featuredProductIds = [
    "estufa-gas",
    "silla-blanca-resina",
    "sillas-plegables",
    "tarimas-escenario",
    "carpa-3x3m",
    "carpa-plegable-3x3",
    "carpa-plegable-45x3",
    "carpa-plegable-6x3",
    "poste-cinta-retractil-negra",
    "poste-acero-catenaria",
    "mesa-dinner-180x80-blanca",
    "mesa-dinner-180x80-haya",
    "mesa-outdoor-70x70",
    "mesa-alta-konic-60-cristal",
    "mesa-alta-konic-60-negra",
    "mesa-catering-redonda-150",
    "mesa-catering-redonda-180",
    "mesa-alta-stand",
    "mesa-alta-coctel-blanca",
    "mesa-redonda-cristal-reunion",
    "mesa-180",
    "mesa-alta-cocktail",
    "mesa-baja",
    "atril-metraquilato",
    "Arcon-congelador",
    "sombrillas",
    "Expositor",
    "Sonido",
    "Ventilador-nebulizador",
    "Catenaria-dorada",
    "Perchero-burrito",
    "Manteleria-vajilla",
    "barra-retroiluminada",
    "botellero-grande",
    "silla-nordica-tulip",
    "butaca-retro-reposabrazos",
    "butaca-aro",
    "silla-nido-celosia",
    "taburete-nordico-tulip",
    "taburete-regulable-curvo",
    "taburete-industrial-metal",
    "carpa-beduina",
    "carpa-dos-aguas-transparente",
    "funda-silla",
    "mampara-separadora",
    "suelo-modular-carpa",
    "sillon-auditorio",
    "silla-pala",
    "mesa-plegable-madera-110",
    "mesa-plegable-resina-120",
    "carpa-estructural-10x20",
    "silla-cruz",
    "silla-pantone-negra",
    "silla-goya-transparente",
    "silla-queen",
    "silla-box-negra",
    "silla-forja-vintage",
    "taburete-orlando",
    "taburete-rimini",
    "taburete-aran",
    "taburete-lennon",
    "taburete-martin",
    "taburete-san-juan",
  ];

  const featuredProducts = products
    .filter((p) => featuredProductIds.includes(p.id))
    .sort(
      (a, b) =>
        featuredProductIds.indexOf(a.id) - featuredProductIds.indexOf(b.id)
    );

  const categoryById: Record<string, string> = {
    // Sillas
    "silla-blanca-resina": "sillas",
    "sillas-plegables": "sillas",
    "silla-plegabledemadera": "sillas",
    "silla-blanca-acolchada": "sillas",
    "silla-bambú-acolchada": "sillas",
    "silla-mono-casco": "sillas",
    "silla-tiffany-blanca": "sillas",
    // Butacas y diseño
    "silla-nordica-tulip": "butacas",
    "butaca-retro-reposabrazos": "butacas",
    "butaca-aro": "butacas",
    "silla-nido-celosia": "butacas",
    // Taburetes
    "taburete-nordico-tulip": "taburetes",
    "taburete-regulable-curvo": "taburetes",
    "taburete-industrial-metal": "taburetes",
    // Mesas
    "mesa-180": "mesas",
    "mesa-baja": "mesas",
    "mesa-dinner-180x80-blanca": "mesas",
    "mesa-dinner-180x80-haya": "mesas",
    "mesa-outdoor-70x70": "mesas",
    "mesa-catering-redonda-150": "mesas",
    "mesa-catering-redonda-180": "mesas",
    "mesa-redonda-cristal-reunion": "mesas",
    // Mesas altas / cóctel
    "mesa-alta-cocktail": "altas",
    "mesa-alta-konic-60-cristal": "altas",
    "mesa-alta-konic-60-negra": "altas",
    "mesa-alta-stand": "altas",
    "mesa-alta-coctel-blanca": "altas",
    // Carpas
    "carpa-3x3m": "carpas",
    "carpa-plegable-3x3": "carpas",
    "carpa-plegable-45x3": "carpas",
    "carpa-plegable-6x3": "carpas",
    "carpa-beduina": "carpas",
    "carpa-dos-aguas-transparente": "carpas",
    // Barras y catering
    "barra-retroiluminada": "catering",
    "botellero-grande": "catering",
    "Arcon-congelador": "catering",
    "Manteleria-vajilla": "catering",
    // Complementos y mobiliario
    "estufa-gas": "complementos",
    "tarimas-escenario": "complementos",
    "atril-metraquilato": "complementos",
    sombrillas: "complementos",
    Expositor: "complementos",
    Sonido: "complementos",
    "Ventilador-nebulizador": "complementos",
    "Catenaria-dorada": "complementos",
    "Perchero-burrito": "complementos",
    "poste-cinta-retractil-negra": "complementos",
    "poste-acero-catenaria": "complementos",
    "funda-silla": "complementos",
    "mampara-separadora": "complementos",
    "suelo-modular-carpa": "complementos",
    "sillon-auditorio": "sillas",
    "silla-pala": "sillas",
    "mesa-plegable-madera-110": "mesas",
    "mesa-plegable-resina-120": "mesas",
    "carpa-estructural-10x20": "carpas",
    "silla-cruz": "sillas",
    "silla-pantone-negra": "sillas",
    "silla-goya-transparente": "sillas",
    "silla-queen": "sillas",
    "silla-box-negra": "sillas",
    "silla-forja-vintage": "sillas",
    "taburete-orlando": "taburetes",
    "taburete-rimini": "taburetes",
    "taburete-aran": "taburetes",
    "taburete-lennon": "taburetes",
    "taburete-martin": "taburetes",
    "taburete-san-juan": "taburetes",
  };

  const matchesCategory = (p: Product) => {
    if (activeCategory === "todos") return true;
    const c = categoryById[p.id];
    if (activeCategory === "sillas")
      return c === "sillas" || c === "butacas" || c === "taburetes";
    return c === activeCategory;
  };

  const q = query.trim().toLowerCase();
  const visibleProducts = products.filter((p) => {
    if (q !== "") {
      // Con búsqueda activa, buscamos en TODO el catálogo
      return (
        p.name.toLowerCase().includes(q) ||
        (p.description ?? "").toLowerCase().includes(q)
      );
    }
    if (activeCategory === null) return false;
    return matchesCategory(p);
  });

  const categorias: {
    key: string;
    label: string;
    icon: string;
  }[] = [
    { key: "mesas", label: "Mesas", icon: "🍽️" },
    { key: "altas", label: "Mesas altas y cóctel", icon: "🍸" },
    { key: "sillas", label: "Sillas", icon: "🪑" },
    { key: "butacas", label: "Butacas y diseño", icon: "💺" },
    { key: "taburetes", label: "Taburetes", icon: "🥂" },
    { key: "carpas", label: "Carpas", icon: "⛺" },
    { key: "catering", label: "Barras y catering", icon: "🍷" },
    { key: "complementos", label: "Complementos", icon: "✨" },
    { key: "todos", label: "Todo el material", icon: "📋" },
  ];

  return (
    <main className="flex-1 bg-black">
      {/* MENÚ DESPLEGABLE SUPERIOR */}
      <nav className="w-full bg-hola-navy border-b border-white/10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-white font-semibold text-sm sm:text-base">
            Hola Eventos
          </span>

          {/* Zona derecha: selector + llamada inmediata (y aquí también puedes tener carrito) */}
          <div className="flex items-center gap-6">
            {/* Selector de categoría */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenMenu((o) => !o)}
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                {activeCategory
                  ? categorias.find((c) => c.key === activeCategory)?.label ??
                    "Categorías"
                  : "Categorías"}
                <span className="ml-2 text-xs">{openMenu ? "▲" : "▼"}</span>
              </button>

              {openMenu && (
                <div className="absolute right-0 mt-2 w-40 rounded-md bg-white shadow-lg ring-1 ring-black/5 z-50">
                  <ul className="py-1 text-sm text-gray-800">
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveCategory("todos");
                          setOpenMenu(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Todo el material
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveCategory("sillas");
                          setOpenMenu(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Sillas
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveCategory("mesas");
                          setOpenMenu(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Mesas
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveCategory("carpas");
                          setOpenMenu(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Carpas
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Llamada inmediata (alineado a la altura del carrito) */}
            <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-wide text-white/70">
                Llamada inmediata
              </span>
              <a
                href="tel:+34640651851"
                className="mt-1 inline-flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-3 py-1.5"
              >
                📞 640 65 18 51
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[75vh] text-center text-white flex flex-col">
        <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] overflow-hidden bg-black">
          <img
            src="https://misquince.es/fotos/cropped-banner-carlos.jpg"
            alt="Banner Hola Eventos"
            className="w-full h-full object-cover object-[40%_50%]"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="bg-hola-navy px-4 pt-6">
          <h1 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Alquiler y organización de eventos en Madrid
          </h1>
        </div>

        <div className="bg-hola-navy px-4 pb-8 flex flex-col items-center">
          <p className="mt-3 max-w-xl text-sm sm:text-base text-gray-100">
            Material, decoración y asesoramiento profesional para que tu evento
            salga perfecto.
          </p>

          <p className="mt-4 max-w-xl text-base sm:text-lg font-semibold text-hola-yellow">
            Si no lo tengo, te lo consigo. Y si no lo consigo, te lo construyo.
          </p>

          <div className="mt-6 w-full max-w-md flex flex-col gap-3">
            <Link href="#products">
              <button className="inline-flex h-12 w-full items-center justify-center rounded-full bg-hola-yellow text-hola-navy text-sm font-bold hover:brightness-95 transition">
                Ver el material
              </button>
            </Link>

            <Link href="/hola-15">
              <button className="inline-flex h-12 w-full items-center justify-center rounded-full bg-hola-pink text-white text-sm font-bold hover:brightness-95 transition">
                👑 Fiestas de 15 años
              </button>
            </Link>

            {/* Botón de llamada solo en móvil */}
            <a
              href="tel:+34640651851"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-hola-blue hover:brightness-110 text-white text-sm font-semibold transition-colors sm:hidden"
            >
              Llamar ahora
            </a>

            <a
              href="https://wa.me/34640651851?text=Hola!%20Me%20gustaría%20pedir%20presupuesto%20para%20un%20evento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition-colors"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SEÑALES DE CONFIANZA */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="container mx-auto px-4 grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl">🚚</span>
            <p className="text-sm font-bold text-hola-navy">Envío y recogida</p>
            <p className="text-xs text-gray-500">Lo llevamos y lo recogemos por ti</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl">💬</span>
            <p className="text-sm font-bold text-hola-navy">Asesoramiento gratis</p>
            <p className="text-xs text-gray-500">Te ayudamos a elegir sin compromiso</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl">⚡</span>
            <p className="text-sm font-bold text-hola-navy">Respuesta inmediata</p>
            <p className="text-xs text-gray-500">Por WhatsApp o teléfono al momento</p>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl">🎉</span>
            <p className="text-sm font-bold text-hola-navy">Montamos tu evento</p>
            <p className="text-xs text-gray-500">Material, decoración y show completo</p>
          </div>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section id="products" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-hola-navy">
            {query
              ? `Resultados para “${query}”`
              : activeCategory === null
              ? "¿Qué material necesitas?"
              : activeCategory === "todos"
              ? "Nuestro material"
              : categorias.find((c) => c.key === activeCategory)?.label}
          </h2>

          {/* BUSCADOR + CATEGORÍAS */}
          <div className="mb-8">
            <div className="relative w-full sm:max-w-md">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Busca: mesa, silla, carpa, konic…"
                className="w-full rounded-full border border-gray-300 bg-white py-3 pl-11 pr-10 text-sm text-black focus:border-hola-blue focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Borrar búsqueda"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                >
                  ✕
                </button>
              )}
            </div>

            {!query && (
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {categorias.map((c) => (
                  <button
                    key={c.key}
                    type="button"
                    onClick={() => {
                      setActiveCategory(c.key);
                      setQuery("");
                    }}
                    className={`flex flex-col items-center justify-center gap-1 rounded-xl border px-3 py-4 text-center text-sm font-semibold transition-colors ${
                      activeCategory === c.key
                        ? "border-hola-blue bg-hola-blue text-white"
                        : "border-gray-200 bg-white text-hola-navy hover:border-hola-blue"
                    }`}
                  >
                    <span className="text-2xl">{c.icon}</span>
                    {c.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {activeCategory && !query && (
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className="mb-4 inline-flex items-center gap-1 text-sm font-semibold text-hola-blue hover:underline"
            >
              ‹ Ver todas las categorías
            </button>
          )}

          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {visibleProducts.map((item) => {
              const quantity = quantities[item.id] ?? 1;

              const increase = (e: React.MouseEvent) => {
                e.stopPropagation();
                setQuantities((prev) => ({
                  ...prev,
                  [item.id]: (prev[item.id] ?? 1) + 1,
                }));
              };

              const decrease = (e: React.MouseEvent) => {
                e.stopPropagation();
                setQuantities((prev) => {
                  const current = prev[item.id] ?? 1;
                  const next = current > 1 ? current - 1 : 1;
                  return { ...prev, [item.id]: next };
                });
              };

              const handleAddToCart = (e: React.MouseEvent) => {
                e.stopPropagation();
                addItem({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  image: { src: item.image.src },
                  quantity,
                });

                setLastAddedId(item.id);
                setFlash("Producto añadido a tu pedido");

                setTimeout(() => {
                  setFlash("");
                  setLastAddedId(null);
                }, 2000);
              };

              const isLastAdded = lastAddedId === item.id;

              return (
                <div
                  key={item.id}
                  className="group overflow-hidden rounded-lg border bg-white shadow-sm cursor-pointer"
                  onClick={() => setSelectedProduct(item)}
                >
                  <div className="relative aspect-square w-full flex items-center justify-center bg-white p-3 border-b border-gray-100">
                    <img
                      src={item.image.src}
                      alt={item.name}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <div className="mb-2 hidden sm:flex items-center justify-center text-sm text-black font-semibold">
                      <MessageSquare className="mr-2 h-4 w-4 text-black" />
                      ¿Necesitas asesoramiento?
                    </div>
                    <h3 className="text-sm sm:text-lg font-semibold text-center text-black">
                      {item.name}
                    </h3>

                    <div className="mt-3 flex items-center justify-center gap-3">
                      <button
                        onClick={decrease}
                        className="h-8 w-8 rounded-full border border-black flex items-center justify-center text-lg leading-none text-black"
                      >
                        −
                      </button>
                      <span className="min-w-[2rem] text-center text-sm font-medium text-black">
                        {quantity}
                      </span>
                      <button
                        onClick={increase}
                        className="h-8 w-8 rounded-full border border-black flex items-center justify-center text-lg leading-none text-black"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      className={`mt-4 w-full rounded-full px-4 py-2 text-sm font-medium text-white ${
                        isLastAdded
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-hola-blue hover:brightness-110"
                      }`}
                    >
                      {isLastAdded ? "Añadido al carrito" : "Añadir al carrito"}
                    </button>

                    <a
                      href={`https://wa.me/34640651851?text=Me%20interesa%20este%20material:%20${encodeURIComponent(
                        item.name
                      )}.%20%C2%BFCu%C3%A1l%20es%20el%20presupuesto?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex h-10 w-full items-center justify-center rounded-full bg-hola-blue hover:brightness-110 text-white text-xs font-semibold transition-colors"
                    >
                      Solicitar Presupuesto
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {query && visibleProducts.length === 0 && (
            <div className="py-12 text-center text-gray-500">
              <p className="text-lg font-semibold text-hola-navy">
                No encontramos “{query}”.
              </p>
              <p className="mt-1 text-sm">
                Prueba con otra palabra o escríbenos por WhatsApp: si no lo
                tenemos, te lo conseguimos.
              </p>
              <a
                href="https://wa.me/34640651851?text=Hola!%20Busco%20material%20para%20un%20evento%20y%20no%20lo%20encuentro%20en%20la%20web."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-11 items-center justify-center rounded-full bg-green-500 px-6 text-sm font-semibold text-white hover:bg-green-600"
              >
                Preguntar por WhatsApp
              </a>
            </div>
          )}

          {flash && (
            <p className="mt-4 text-center text-sm text-green-600">{flash}</p>
          )}

          <div className="mt-12 text-center">
            <button
              onClick={() => {
                setActiveCategory("todos");
                setQuery("");
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex h-11 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium transition-colors hover:bg-gray-100"
            >
              Ver Catálogo Completo {"->"}
            </button>
          </div>

          {/* ENLACES SEO POR CATEGORÍA */}
          <div className="mt-10 border-t border-gray-200 pt-8 text-center">
            <p className="text-sm font-semibold text-hola-navy">
              Alquiler por categoría en Madrid
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {categories.map((c) => (
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

      {/* TU EVENTO PERFECTO */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Tu evento perfecto, nuestro compromiso
            </h2>
            <p className="text-gray-600 text-lg">
              Cada detalle cuenta. Por eso nos comprometemos a hacer tu evento inolvidable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "✨",
                title: "Calidad Premium",
                description:
                  "Material de primera calidad, limpio y en perfecto estado para que tu evento brille.",
              },
              {
                icon: "⚡",
                title: "Entrega Puntual",
                description:
                  "Garantizamos la entrega a tiempo. Tu evento no espera, nosotros tampoco.",
              },
              {
                icon: "🤝",
                title: "Asesoramiento Experto",
                description:
                  "Nuestro equipo de especialistas te guía en cada paso para el mejor resultado.",
              },
              {
                icon: "💯",
                title: "Satisfacción Garantizada",
                description:
                  "Si algo no es perfecto, lo arreglamos. Tu satisfacción es nuestro éxito.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ NUESTROS PRECIOS */}
      <section className="bg-black py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">
            ¿Por qué nuestros precios?
          </h2>
          <p className="text-gray-400 text-center mb-12">
            Cada evento es único y merece atención personalizada
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: "📅",
                title: "Fecha del Evento",
                description:
                  "Los precios varían según disponibilidad y temporada. Fin de semana tiene diferentes tarifas.",
              },
              {
                icon: "📊",
                title: "Cantidad de Materiales",
                description:
                  "Ofrecemos descuentos por volumen. Cuantos más materiales, mejor precio por unidad.",
              },
              {
                icon: "🎨",
                title: "Customización",
                description:
                  "Servicios adicionales como instalación y decoración personalizada tienen costos específicos.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-900 rounded-lg p-6 border border-gray-700"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 rounded-lg p-8 border border-blue-600/30">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🎯</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Nuestra Estrategia: Contacto Directo
                </h3>
                <p className="text-gray-300 mb-2">
                  No mostramos precios exactos porque cada evento es diferente.
                  Nuestro equipo de especialistas contactará contigo para
                  entender exactamente qué necesitas, ofrecerte opciones
                  personalizadas y darte un presupuesto justo.
                </p>
                <p className="text-green-400 font-semibold">
                  ✓ Presupuestos sin compromiso • ✓ Asesoramiento profesional •
                  ✓ Flexibilidad total
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LO QUE DICEN NUESTROS CLIENTES */}
      <section className="bg-gray-900 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tu evento en buenas manos
            </h2>
            <p className="text-gray-400 text-lg">
              Material impecable, entrega puntual y trato cercano de principio a fin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="rounded-2xl bg-white/5 p-8 text-center">
              <div className="text-4xl">⭐</div>
              <p className="mt-3 font-bold text-white">Atención 100% personalizada</p>
              <p className="mt-1 text-sm text-gray-400">
                Te asesoramos y adaptamos cada detalle a tu evento.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-8 text-center">
              <div className="text-4xl">🚚</div>
              <p className="mt-3 font-bold text-white">Envío y recogida en Madrid</p>
              <p className="mt-1 text-sm text-gray-400">
                Lo llevamos, lo montamos y lo recogemos por ti.
              </p>
            </div>
            <div className="rounded-2xl bg-white/5 p-8 text-center">
              <div className="text-4xl">🎉</div>
              <p className="mt-3 font-bold text-white">15 años, bodas y empresa</p>
              <p className="mt-1 text-sm text-gray-400">
                Montamos todo tipo de celebraciones y eventos.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg mb-6">
              ¿Listo para tu evento perfecto?
            </p>
            <a
              href="https://wa.me/34640651851?text=Hola!%20Me%20gustaría%20pedir%20presupuesto%20para%20un%20evento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 px-8 items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors"
            >
              Hablar con nosotros
            </a>
          </div>
        </div>
      </section>

      {/* AGENTES ESPECIALIZADOS */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Habla con nuestros especialistas
          </h2>

          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center">
            {/* Agente Decoración */}
            <div className="flex h-64 w-64 flex-col items-center justify-center rounded-full bg-white/10 text-center shadow-lg">
              <div className="mb-3 h-20 w-20 overflow-hidden rounded-full border-2 border-white">
                <img
                  src="https://misquince.es/fotos/decoracion.png"
                  alt="Agente de decoración"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wide text-white">
                Decoración
              </p>
              <p className="mt-1 px-4 text-xs text-gray-200">
                Especialista en decoración y ambientación de eventos.
              </p>
              <a
                href="https://wa.me/34649330612?text=Hola,%20me%20gustaría%20hablar%20con%20decoración%20sobre%20mi%20evento."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center rounded-full border border-green-500 px-4 py-1.5 text-xs font-medium text-green-400 hover:bg-green-500 hover:text-white"
              >
                WhatsApp
              </a>
            </div>

            {/* Agente Sonido y Vídeo */}
            <div className="flex h-64 w-64 flex-col items-center justify-center rounded-full bg-white/10 text-center shadow-lg">
              <div className="mb-3 h-20 w-20 overflow-hidden rounded-full border-2 border-white">
                <img
                  src="https://misquince.es/fotos/sonido%20y%20video.jpg"
                  alt="Agente de sonido y vídeo"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wide text_white">
                Sonido y vídeo
              </p>
              <p className="mt-1 px-4 text-xs text-gray-200">
                Técnico en sonido, iluminación y proyección.
              </p>
              <a
                href="https://wa.me/34640658864?text=Hola,%20me%20gustaría%20hablar%20sobre%20sonido%20y%20vídeo%20para%20mi%20evento."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center rounded-full border border-green-500 px-4 py-1.5 text-xs font-medium text-green-400 hover:bg-green-500 hover:text-white"
              >
                WhatsApp
              </a>
            </div>

            {/* Agente Mobiliario */}
            <div className="flex h-64 w-64 flex-col items-center justify-center rounded-full bg-white/10 text-center shadow-lg">
              <div className="mb-3 h-20 w-20 overflow-hidden rounded-full border-2 border-white">
                <img
                  src="https://misquince.es/fotos/mobiliario.jpg"
                  alt="Agente de mobiliario"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wide text-white">
                Mobiliario
              </p>
              <p className="mt-1 px-4 text-xs text-gray-200">
                Especialista en sillas, mesas, tarimas y estructuras.
              </p>
              <a
                href="https://wa.me/34640651851?text=Hola,%20me%20gustaría%20hablar%20sobre%20mobiliario%20para%20mi%20evento."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center rounded-full border border-green-500 px-4 py-1.5 text-xs font-medium text-green-400 hover:bg-green-500 hover:text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ¿EN QUÉ TE PODEMOS AYUDAR? */}
      <section id="how-it-works" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-black">
              ¿En qué te podemos ayudar?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Organizar tu evento nunca fue tan fácil. Sigue estos simples pasos
              y cuéntanos qué necesitas.
            </p>
          </div>
          <div className="relative mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div
              className="absolute top-1/2 left-0 hidden h-px w-full -translate-y-1/2 bg-gray-300 md:block"
              aria-hidden="true"
            />
            {[
              {
                number: "1",
                title: "Elige tu material",
                desc: "Explora nuestro catálogo y añade todo lo que necesites a tu carrito de presupuesto.",
              },
              {
                number: "2",
                title: "Pide tu presupuesto",
                desc: "Envíanos tu selección y te prepararemos una propuesta a medida, sin compromiso.",
              },
              {
                number: "3",
                title: "Asesoramiento directo",
                desc: "Contactaremos contigo para afinar detalles de logística, decoración y técnica.",
              },
            ].map((step) => (
              <div key={step.title} className="relative z-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-hola-blue bg-white text-2xl font-bold text-hola-blue">
                  {step.number}
                </div>
                <h3 className="mt-6 text-xl font-bold text-black">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600">{step.desc}</p>
                {step.number === "3" && (
                  <p className="mt-2 font-semibold text-black">
                    ¿Necesitas asesoramiento ahora mismo?
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION – ÚLTIMA */}
      <section id="video-gallery" className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white">
              Porque tus sueños son nuestra realidad
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              asesoramiento personalizado
            </p>
          </div>

          <div className="mb-8 overflow-hidden rounded-lg border border-gray-800 shadow-lg">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <video
                src="/videos/Decoracion%20para%20empresas%20madrid.mp4"
                controls
                autoPlay
                muted
                loop
                className="absolute inset-0 h-full w-full object-cover"
              >
                Tu navegador no soporta la etiqueta de vídeo.
              </video>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              "/videos/Decoracion%20para%20empresas%20madrid.mp4",
              "/videos/Mis%20quince%20centro%20.mp4",
              "/videos/PRODUCCION%20.mp4",
            ].map((videoSrc, index) => (
              <div key={index} className="mx-auto" style={{ maxWidth: 220 }}>
                <VideoThumbnail src={videoSrc} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* MODAL DETALLE DE PRODUCTO */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              aria-label="Cerrar"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black"
            >
              ✕
            </button>

            <div className="flex aspect-square w-full items-center justify-center bg-white p-4">
              <img
                src={selectedProduct.image.src}
                alt={selectedProduct.name}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-hola-navy">
                {selectedProduct.name}
              </h3>

              {selectedProduct.description && (
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  {selectedProduct.description}
                </p>
              )}

              <div className="mt-6 flex flex-col gap-3">
                <button
                  onClick={() => {
                    addItem({
                      id: selectedProduct.id,
                      name: selectedProduct.name,
                      price: selectedProduct.price,
                      image: { src: selectedProduct.image.src },
                      quantity: quantities[selectedProduct.id] ?? 1,
                    });
                    setSelectedProduct(null);
                  }}
                  className="w-full rounded-full bg-hola-blue px-4 py-3 text-sm font-semibold text-white hover:brightness-110"
                >
                  Añadir al carrito
                </button>

                <a
                  href={`https://wa.me/34640651851?text=Me%20interesa%20este%20material:%20${encodeURIComponent(
                    selectedProduct.name
                  )}.%20%C2%BFCu%C3%A1l%20es%20el%20presupuesto?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full bg-green-500 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-green-600"
                >
                  Solicitar presupuesto por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}