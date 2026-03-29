// lib/products.ts

export type Product = {
  id: string;
  name: string;
  image: { src: string };
  price?: number;
  description?: string;
  minPrice?: number; // Precio mínimo estimado
  maxPrice?: number; // Precio máximo estimado
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
    minPrice: 30,
    maxPrice: 80,
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
    minPrice: 5,
    maxPrice: 15,
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
    minPrice: 5,
    maxPrice: 15,
  },
  {
    id: "silla-plegabledemadera",
    name: "Silla plegable de madera",
    image: {
      src: "https://misquince.es/fotos/sillas plegables /sillaplegabledemadera.jpg",
    },
    price: 1.5,
    description: "Silla plegable de madera ideal eventos masivos",
    minPrice: 5,
    maxPrice: 15,
  },
  {
    id: "silla-blanca-acolchada",
    name: "Silla blanca acolchada",
    image: {
      src: "https://misquince.es/fotos/sillas plegables /sillablanca.jpg",
    },
    price: 1.5,
    description:
      "Silla plegable blanca acolchada ideal para bodas y eventos especiales",
    minPrice: 5,
    maxPrice: 15,
  },
  {
    id: "silla-bambú-acolchada",
    name: "Silla bambú acolchada",
    image: {
      src: "https://misquince.es/fotos/silla bambu.png",
    },
    price: 1.5,
    description: "Silla plegable bambú acolchada",
    minPrice: 5,
    maxPrice: 15,
  },
  {
    id: "silla-mono-casco",
    name: "Silla casco",
    image: {
      src: "https://misquince.es/fotos/silla casco .png",
    },
    price: 1.5,
    description: "Silla mono casco en blanco y negro",
    minPrice: 5,
    maxPrice: 15,
  },
  {
    id: "silla-tiffany-blanca",
    name: "Silla tiffany blanca",
    image: {
      src: "https://misquince.es/fotos/sillatifany.png",
    },
    price: 1.5,
    description: "Silla tiffany blanca y otros colores",
    minPrice: 5,
    maxPrice: 15,
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
    minPrice: 80,
    maxPrice: 250,
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
    minPrice: 100,
    maxPrice: 300,
  },
  {
    id: "mesa-180",
    name: "Mesa plegable 1,80 m",
    image: {
      src: "https://misquince.es/fotos/mesade1.80",
    },
    price: 8,
    description:
      "Mesa plegable de 1,80 m ideal para banquetes, buffets y eventos de empresa.",
    minPrice: 20,
    maxPrice: 50,
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
    minPrice: 20,
    maxPrice: 50,
  },
  {
    id: "mesa-baja",
    name: "Mesa baja  45×50 cm",
    image: {
      src: "https://misquince.es/fotos/mesabaja.jpeg",
    },
    price: 20,
    description:
      "Mesa baja blanca perfecta para crear zonas lounge, apoyar decoración o candy bar. Tablero fácil de limpiar y estructura resistente.",
    minPrice: 20,
    maxPrice: 50,
  },
  {
    id: "atril-metraquilato",
    name: "Atril alto 118",
    image: {
      src: "https://misquince.es/fotos/atril.PNG",
    },
    price: 20,
    description:
      "Conferencia estándar desarmable, con medidas de 500 x 400 x 1100 mm de alto. Cuenta con un espesor de 10 mm, una tapa superior de 500 x 400, un frontal de 350 x 600 mm (alto) para colocar el logotipo, y una base de 500 x 350. Los cantos están pulidos. La separación interna entre las patas es de 35 cm, mientras que la externa es de 37 cm.",
    minPrice: 30,
    maxPrice: 120,
  },
  {
    id: "Arcon-congelador",
    name: "Arcon",
    image: {
      src: "https://misquince.es/fotos/ARCON 302.PNG",
    },
    price: 20,
    description: "Arcon congelador para eventos,",
    minPrice: 40,
    maxPrice: 150,
  },
  {
    id: "sombrillas",
    name: "Sombrilla 2x3m",
    image: {
      src: "https://misquince.es/fotos/sombrillas.jpg",
    },
    price: 20,
    description:
      "Sombrilla de 3x3m mastil tubular de alumino blanco de una pieza y un sistema de doble polea,",
    minPrice: 30,
    maxPrice: 90,
  },
  {
    id: "Expositor",
    name: "Expositor A4",
    image: {
      src: "https://misquince.es/fotos/Expositor.jpg",
    },
    price: 20,
    description: "Expositor A4 con medidas 297x210mm",
    minPrice: 15,
    maxPrice: 60,
  },
  {
    id: "Sonido",
    name: "Alquilerdesonido",
    image: {
      src: "https://misquince.es/fotos/Alquiler de sonido.png",
    },
    price: 20,
    description: "Alquiler de sonido",
    minPrice: 80,
    maxPrice: 300,
  },
  {
    id: "Ventilador-nebulizador",
    name: "Ventilador",
    image: {
      src: "https://misquince.es/fotos/ventilador nebulizador.png",
    },
    price: 20,
    description:
      " Mide aproximadamente 20 cm de alto por 15 cm de ancho en la base. Cuenta con tanque de agua de 500 ml, tres velocidades de aire y nebulización continua o intermitente.",
    minPrice: 25,
    maxPrice: 80,
  },
  {
    id: "Catenaria-dorada",
    name: "Catenaria dorada",
    image: {
      src: "https://misquince.es/fotos/Catenaria.PNG",
    },
    price: 20,
    description: "Poste de acero dorado con medidas 1m Altura,30cm Ancho",
    minPrice: 20,
    maxPrice: 70,
  },
  {
    id: "Perchero-burrito",
    name: "Perchero burrito",
    image: {
      src: "https://misquince.es/fotos/perchero.jpg",
    },
    price: 20,
    description:
      "Soportes portátiles para colgar ropa, con barra ajustable en altura y ruedas de desplazamiento, más 50 perchas y 50 comprobantes de servicio de guardarropa.",
    minPrice: 30,
    maxPrice: 100,
  },
  {
    id: "Manteleria-vajilla",
    name: "Manteleria-vajilla",
    image: {
      src: "https://misquince.es/fotos/MANTELERIA.png",
    },
    price: 20,
    description:
      "Ofrecemos mantelería a medida, perfectamente adaptada a nuestras mesas. Como complemento, ponemos a tu disposición todo tipo de vajilla. Así garantizamos que cada detalle de tu evento sea todo un éxito.",
    minPrice: 30,
    maxPrice: 120,
  },
];