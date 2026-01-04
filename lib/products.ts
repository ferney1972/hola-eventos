// lib/products.ts

export type Product = {
  id: string;
  name: string;
  image: { src: string };
  price?: number;
  description?: string;
};

export const products: Product[] = [
  {
    id: "estufa-gas",
    name: "Estufa de gas exterior",
    image: {
      src: "https://misquince.es/fotos/estufa-gas.jpg",
    },
    price: 25,
    description:
      "Estufa exterior de gas ideal para terrazas y jardines. Con regulador de potencia, encendido piezoeléctrico y sistema de seguridad antivuelco.",
  },
  {
    id: "silla-blanca-resina",
    name: "Silla blanca de resina",
    image: {
      src: "https://misquince.es/fotos/silla-blanca-resina.jpg",
    },
    price: 1.8,
    description:
      "Silla de resina blanca apilable, apta para interior y exterior. Muy resistente y fácil de limpiar, perfecta para banquetes y celebraciones.",
  },
  {
    id: "sillas-plegables",
    name: "Silla plegable",
    image: {
      src: "https://misquince.es/fotos/silla-plegable.jpg",
    },
    price: 1.5,
    description:
      "Silla plegable ligera y robusta, ideal para eventos con gran aforo. Ocupa poco espacio y permite montajes rápidos.",
  },
  {
    id: "tarimas-escenario",
    name: "Tarimas para escenario",
    image: {
      src: "https://misquince.es/fotos/tarimas-escenario.jpg",
    },
    price: 40,
    description:
      "Módulos de tarima para escenario configurables en distintas medidas y alturas. Superficie antideslizante, ideal para conciertos y presentaciones.",
  },
];
