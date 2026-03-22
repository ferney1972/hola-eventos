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
      // Mejor sin espacios en el nombre del archivo
      src: "https://misquince.es/fotos/Silla blanca de resina.jpg",
    },
    price: 1.8,
    description:
      "Silla de resina blanca apilable, apta para interior y exterior. Muy resistente y fácil de limpiar, perfecta para banquetes y celebraciones.",
  },
  {
    id: "sillas-plegables",
    name: "Silla plegable",
    image: {
      src: "https://misquince.es/fotos/sillas negras.PNG",
    },
    price: 1.5,
    description:
      "Silla plegable ligera y robusta, ideal para eventos con gran aforo. Ocupa poco espacio y permite montajes rápidos.",
  },
  {
    id: "tarimas-escenario",
    name: "Tarimas para escenario",
    image: {
      src: "https://misquince.es/fotos/Alquiler de escenario.png",
    },
    price: 40,
    description:
      "Módulos de tarima para escenario configurables en distintas medidas y alturas. Superficie antideslizante, ideal para conciertos y presentaciones.",
  },
  {
    id: "carpa-3x3m",
    name: "Carpa de 3x3m",
    image: {
      src: "https://misquince.es/fotos/alquiler carpa de 3x3m.jpg",
    },
    price: 40,
    description:
      "Alquiler de carpa de 3x3m con laterales y contrapesos.",
  },
  {
    id: "mesa-180",
    name: "Mesa plegable 1,80 m",
    image: {
      src: "https://misquince.es/fotos/mesa-180.jpg",
    },
    price: 8,
    description:
      "Mesa plegable de 1,80 m ideal para banquetes, buffets y eventos de empresa.",
  },
  {
    id: "mesa-alta-cocktail",
    name: "Mesa alta para cocktail",
    image: {
      src: "https://misquince.es/fotos/mesaalta.jpeg",
    },
    price: 10, // cambia al precio real
    description:
      "Mesa alta para cocktail y recepciones, perfecta para eventos de pie y zonas de bebida.",
  },
  // 🔹 Nuevo producto: mesa baja
  {
    id: "mesa-baja",
    name: "Mesa baja  45×50 cm",
    image: {
      src: "https://misquince.es/fotos/mesabaja.jpeg", // pon aquí la URL real que vayas a usar
    },
    price: 20, // ajusta al precio real de alquiler
    description:
      "Mesa baja blanca perfecta para crear zonas lounge, apoyar decoración o candy bar. Tablero fácil de limpiar y estructura resistente.",
  },

  {
    id: "atril-metraquilato",
    name: "Atril alto 118",
    image: {
      src: "https://misquince.es/fotos/atril.PNG", // pon aquí la URL real que vayas a usar
    },
    price: 20, // ajusta al precio real de alquiler
    description:
      "Conferencia estándar desarmable, con medidas de 500 x 400 x 1100 mm de alto. Cuenta con un espesor de 10 mm, una tapa superior de 500 x 400, un frontal de 350 x 600 mm (alto) para colocar el logotipo, y una base de 500 x 350. Los cantos están pulidos. La separación interna entre las patas es de 35 cm, mientras que la externa es de 37 cm.",
  },

  {
    id: "Arcon-congelador",
    name: "Arcon",
    image: {
      src: "https://misquince.es/fotos/ARCON 302.PNG", // pon aquí la URL real que vayas a usar
    },
    price: 20, // ajusta al precio real de alquiler
    description:
      "Arcon congelador para eventos,",
  },

{
    id: "sombrillas",
    name: "Sombrilla 2x3m",
    image: {
      src: "https://misquince.es/fotos/sombrillas.jpg", // pon aquí la URL real que vayas a usar
    },
    price: 20, // ajusta al precio real de alquiler
    description:
      "Sombrilla de 3x3m mastil tubular de alumino blanco de una pieza y un sistema de doble polea,",
  },
{
    id: "Expositor",
    name: "Expositor A4",
    image: {
      src: "https://misquince.es/fotos/Expositor.jpg", // pon aquí la URL real que vayas a usar
    },
    price: 20, // ajusta al precio real de alquiler
    description:
      "Expositor A4 con medidas 297x210mm",
  },
{
    id: "Sonido"
    name: "Alquilerdesonido",
    image: {
      src: "https://misquince.es/fotos/Alquiler de sonido.png", // pon aquí la URL real que vayas a usar
    },
    price: 20, // ajusta al precio real de alquiler
    description:
      "Alquiler de sonido",
  },
];





