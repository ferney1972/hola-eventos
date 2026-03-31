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
    minPrice: 90,
    maxPrice: 100,
  },
  {
    id: "silla-blanca-resina",
    name: "Silla blanca de resina",
    image: {
      // Mejor sin espacios en el nombre del archivo
      src: "https://misquince.es/fotos/Silla blanca de resina.jpg",
    },
    price: 1.4,
    description:
      "Silla de resina blanca apilable, apta para interior y exterior. Muy resistente y fácil de limpiar, perfecta para banquetes y celebraciones.",
    minPrice: 1.4,
    maxPrice: 1.5,
  },
  {
    id: "sillas-plegables",
    name: "Silla plegable",
    image: {
      src: "https://misquince.es/fotos/sillas negras.PNG",
    },
    price: 1.4,
    description:
      "Silla plegable ligera y robusta, ideal para eventos con gran aforo. Ocupa poco espacio y permite montajes rápidos.",
    minPrice: 1.4,
    maxPrice: 1.5,
  },
  {
    id: "silla-plegabledemadera",
    name: "Silla plegable de madera",
    image: {
      src: "https://misquince.es/fotos/sillas plegables /sillaplegabledemadera.jpg",
    },
    price: 1.3,
    description: "Silla plegable de madera ideal eventos masivos",
    minPrice: 1.3,
    maxPrice: 1.5,
  },
  {
    id: "silla-blanca-acolchada",
    name: "Silla blanca acolchada",
    image: {
      src: "https://misquince.es/fotos/sillas plegables /sillablanca.jpg",
    },
    price: 4,
    description:
      "Silla plegable blanca acolchada ideal para bodas y eventos especiales",
    minPrice: 4,
    maxPrice: 4,
  },
  {
    id: "silla-bambú-acolchada",
    name: "Silla bambú acolchada",
    image: {
      src: "https://misquince.es/fotos/silla bambu.png",
    },
    description: "Silla plegable bambú acolchada",
    // sin price / minPrice / maxPrice de momento
  },
  {
    id: "silla-mono-casco",
    name: "Silla casco",
    image: {
      src: "https://misquince.es/fotos/silla casco .png",
    },
    description: "Silla mono casco en blanco y negro",
    // sin price / minPrice / maxPrice
  },
  {
    id: "silla-tiffany-blanca",
    name: "Silla tiffany blanca",
    image: {
      src: "https://misquince.es/fotos/sillatifany.png",
    },
    description: "Silla tiffany blanca y otros colores",
    // sin price / minPrice / maxPrice
  },
  {
    id: "tarimas-escenario",
    name: "Tarimas para escenario",
    image: {
      src: "https://misquince.es/fotos/Alquiler de escenario.png",
    },
    price: 50,
    description:
      "Módulos de tarima para escenario configurables en distintas medidas y alturas. Superficie antideslizante, ideal para conciertos y presentaciones.",
    minPrice: 50,
    maxPrice: 50,
  },
  {
    id: "carpa-3x3m",
    name: "Carpa de 3x3m",
    image: {
      src: "https://misquince.es/fotos/alquiler carpa de 3x3m.jpg",
    },
    price: 180,
    description: "Alquiler de carpa de 3x3m con laterales y contrapesos.",
    minPrice: 180,
    maxPrice: 180,
  },
  {
    id: "mesa-180",
    name: "Mesa plegable 1,80 m",
    image: {
      src: "https://misquince.es/fotos/mesade1.80",
    },
    price: 9,
    description:
      "Mesa plegable de 1,80 m ideal para banquetes, buffets y eventos de empresa.",
    minPrice: 9,
    maxPrice: 9,
  },
  {
    id: "mesa-alta-cocktail",
    name: "Mesa alta para cocktail",
    image: {
      src: "https://misquince.es/fotos/mesaalta.jpeg",
    },
    description:
      "Mesa alta para cocktail y recepciones, perfecta para eventos de pie y zonas de bebida.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "mesa-baja",
    name: "Mesa baja  45×50 cm",
    image: {
      src: "https://misquince.es/fotos/mesabaja.jpeg",
    },
    description:
      "Mesa baja blanca perfecta para crear zonas lounge, apoyar decoración o candy bar. Tablero fácil de limpiar y estructura resistente.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "atril-metraquilato",
    name: "Atril alto 118",
    image: {
      src: "https://misquince.es/fotos/atril.PNG",
    },
    description:
      "Conferencia estándar desarmable, con medidas de 500 x 400 x 1100 mm de alto. Cuenta con un espesor de 10 mm, una tapa superior de 500 x 400, un frontal de 350 x 600 mm (alto) para colocar el logotipo, y una base de 500 x 350. Los cantos están pulidos. La separación interna entre las patas es de 35 cm, mientras que la externa es de 37 cm.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "Arcon-congelador",
    name: "Arcon",
    image: {
      src: "https://misquince.es/fotos/ARCON 302.PNG",
    },
    description: "Arcon congelador para eventos,",
    // sin price / minPrice / maxPrice
  },
  {
    id: "sombrillas",
    name: "Sombrilla 2x3m",
    image: {
      src: "https://misquince.es/fotos/sombrillas.jpg",
    },
    description:
      "Sombrilla de 3x3m mastil tubular de alumino blanco de una pieza y un sistema de doble polea,",
    // sin price / minPrice / maxPrice
  },
  {
    id: "Expositor",
    name: "Expositor A4",
    image: {
      src: "https://misquince.es/fotos/Expositor.jpg",
    },
    description: "Expositor A4 con medidas 297x210mm",
    // sin price / minPrice / maxPrice
  },
  {
    id: "Sonido",
    name: "Alquilerdesonido",
    image: {
      src: "https://misquince.es/fotos/Alquiler de sonido.png",
    },
    description: "Alquiler de sonido",
    // sin price / minPrice / maxPrice
  },
  {
    id: "Ventilador-nebulizador",
    name: "Ventilador",
    image: {
      src: "https://misquince.es/fotos/ventilador nebulizador.png",
    },
    description:
      " Mide aproximadamente 20 cm de alto por 15 cm de ancho en la base. Cuenta con tanque de agua de 500 ml, tres velocidades de aire y nebulización continua o intermitente.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "Catenaria-dorada",
    name: "Catenaria dorada",
    image: {
      src: "https://misquince.es/fotos/Catenaria.PNG",
    },
    description: "Poste de acero dorado con medidas 1m Altura,30cm Ancho",
    // sin price / minPrice / maxPrice
  },
  {
    id: "Perchero-burrito",
    name: "Perchero burrito",
    image: {
      src: "https://misquince.es/fotos/perchero.jpg",
    },
    description:
      "Soportes portátiles para colgar ropa, con barra ajustable en altura y ruedas de desplazamiento, más 50 perchas y 50 comprobantes de servicio de guardarropa.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "Manteleria-vajilla",
    name: "Manteleria-vajilla",
    image: {
      src: "https://misquince.es/fotos/MANTELERIA.png",
    },
    description:
      "Ofrecemos mantelería a medida, perfectamente adaptada a nuestras mesas. Como complemento, ponemos a tu disposición todo tipo de vajilla. Así garantizamos que cada detalle de tu evento sea todo un éxito.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "barra-retroiluminada",
    name: "Manteleria-vajilla",
    image: {
      src: "https://misquince.es/fotos/barra.png",
    },
    description:
      "Medidas: 181 x 110 x 80 cm Protección solar contra los rayos UVA/UVB 100% reciclable Resistencia a grandes impactos Mando + Cable LED RGB",
    // sin price / minPrice / maxPrice
  },
];