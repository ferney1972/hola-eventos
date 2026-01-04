// lib/products.ts

export type Product = {
  id: string;
  name: string;
  image: { src: string };
  price?: number; // precio opcional para que TypeScript no dé error
};

export const products: Product[] = [
  {
    id: "estufa-gas",
    name: "Estufa de gas exterior",
    image: {
      src: "https://misquince.es/fotos/estufa-gas.jpg",
    },
    price: 25,
  },
  {
    id: "silla-blanca-resina",
    name: "Silla blanca de resina",
    image: {
      src: "https://misquince.es/fotos/Silla blanca de resina.jpg",

    },
    price: 1.8,
  },
  {
    id: "sillas-plegables",
    name: "Silla plegable",
    image: {
      src: "https://misquince.es/fotos/sillas negras.PNG",
    },
    price: 1.5,
  },
  {
    id: "tarimas-escenario",
    name: "Tarimas para escenario",
    image: {
      src: "https://misquince.es/fotos/Alquiler de escenario.png"
    },
    price: 40,
  },
  // aquí puedes seguir añadiendo más productos con el mismo formato
];
