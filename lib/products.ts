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
    name: "barra-retroiluminada",
    image: {
      src: "https://misquince.es/fotos/barra.png",
    },
    description:
      "Medidas: 181 x 110 x 80 cm Protección solar contra los rayos UVA/UVB 100% reciclable Resistencia a grandes impactos Mando + Cable LED RGB",
    // sin price / minPrice / maxPrice
  },
  {
    id: "botellero-grande",
    name: "botellero-grande",
    image: {
      src: "https://misquince.es/fotos/botellero.PNG",
    },
    description:
      "Botellero de acero inoxidable refrigerado de 2000 mm",
    // sin price / minPrice / maxPrice
  },
  {
    id: "carpa-plegable-3x3",
    name: "Carpa plegable 3x3 m",
    image: {
      src: "https://www.mundoflexible.es/wp-content/uploads/go-x/u/96883cec-71a6-4fc6-932d-07d2397ce2db/l0,t0,w1184,h864/image-768x560.jpg",
    },
    description:
      "Carpa plegable de 3x3 m (9 m²) que se monta en minutos. Estructura blanca resistente y techo a elegir en blanco, beige, verde oliva o crema. Perfecta para ferias, mercadillos, barras o para dar sombra en cualquier rincón de tu evento.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "carpa-plegable-45x3",
    name: "Carpa plegable 4,5x3 m",
    image: {
      src: "https://www.mundoflexible.es/wp-content/uploads/go-x/u/57ce780d-e7b0-42a7-8ce0-ea13de66d276/l0,t0,w1184,h864/image-768x560.jpg",
    },
    description:
      "Carpa plegable de 4,5x3 m (13,5 m²), un punto más de espacio para cubrir mesas, catering o zonas de invitados. Estructura blanca y techo en blanco o beige. Montaje rápido y sin complicaciones.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "carpa-plegable-6x3",
    name: "Carpa plegable 6x3 m",
    image: {
      src: "https://www.mundoflexible.es/wp-content/uploads/go-x/u/bcbfebed-3835-4502-80e9-c01154669960/l0,t0,w1184,h864/image-768x560.jpg",
    },
    description:
      "Carpa plegable de 6x3 m (18 m²), la más amplia de la gama. Estructura en blanco o negro y techo en blanco, beige o negro. Ideal para dar cobijo a grupos grandes con un montaje rapidísimo.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "poste-cinta-retractil-negra",
    name: "Poste separador con cinta retráctil negra",
    image: {
      src: "https://constansl.com/wp-content/uploads/2018/11/A060106_posteaceroycintaretractilnegra.jpg",
    },
    description:
      "Poste de acero con cinta retráctil negra extensible. Perfecto para organizar colas, delimitar zonas y dar un aire ordenado y profesional a accesos, ferias y congresos. Se coloca en segundos.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "poste-acero-catenaria",
    name: "Poste separador de acero (catenaria)",
    image: {
      src: "https://constansl.com/wp-content/uploads/2018/11/A060107_060108_04-400x400.jpg",
    },
    description:
      "Poste de acero tipo catenaria para usar con cordón. Estable y elegante, ideal para separar filas y crear recorridos en accesos VIP, photocall o entradas de eventos.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "mesa-dinner-180x80-blanca",
    name: "Mesa banquete Dinner 180 × 80 cm blanca",
    image: { src: "/productos/prod-dinner-blanca.png" },
    description:
      "Mesa rectangular plegable de 180 × 80 cm en blanco, línea Dinner. Amplia y elegante, con patas cromadas plegables. Da cabida cómoda a 8 comensales: perfecta para banquetes, bodas y cenas de gala.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "mesa-dinner-180x80-haya",
    name: "Mesa banquete Dinner 180 × 80 cm haya",
    image: { src: "/productos/prod-dinner-haya.png" },
    description:
      "Mesa rectangular plegable de 180 × 80 cm con acabado en madera de haya y patas cromadas. Cálida y resistente, ideal para bodas, eventos rústicos y celebraciones con encanto.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "mesa-outdoor-70x70",
    name: "Mesa de exterior 70 × 70 cm",
    image: { src: "/productos/prod-mesa-outdoor.png" },
    description:
      "Mesa cuadrada de exterior de 70 × 70 cm con tablero resistente y base de aluminio con pie central. Pensada para terrazas, cócteles y zonas al aire libre; aguanta bien la intemperie.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "mesa-alta-konic-60-cristal",
    name: "Mesa alta cóctel Konic 60 cristal",
    image: { src: "/productos/prod-konic-cristal.png" },
    description:
      "Mesa alta de cóctel modelo Konic con tablero de cristal de 60 cm y columna cromada. Elegante y luminosa, perfecta para recepciones de pie, aperitivos y zonas de networking.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "mesa-alta-konic-60-negra",
    name: "Mesa alta cóctel Konic 60 negra",
    image: { src: "/productos/prod-konic-negra.png" },
    description:
      "Mesa alta de cóctel modelo Konic con tablero negro de 60 cm y columna cromada. Sobria y versátil, ideal para cócteles, presentaciones y eventos de empresa.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "mesa-catering-redonda-150",
    name: "Mesa redonda banquete 150 cm",
    image: { src: "/productos/prod-catering-150.png" },
    description:
      "Mesa redonda plegable de 150 cm de diámetro con patas de acero. Un clásico del banquete: sienta cómodamente a 8-10 comensales. Ligera, resistente y fácil de montar y transportar.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "mesa-catering-redonda-180",
    name: "Mesa redonda banquete 180 cm",
    image: { src: "/productos/prod-catering-180.png" },
    description:
      "Mesa redonda plegable de 180 cm de diámetro con patas de acero. La grande del banquete: da cabida a 10-12 comensales. Perfecta para bodas y grandes celebraciones.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "mesa-alta-stand",
    name: "Mesa alta de stand",
    image: { src: "https://sillasdealquiler.es/wp-content/uploads/2019/06/mesa_alta_stand.jpg" },
    description:
      "Mesa alta tipo stand, de aproximadamente 110 cm de altura. Ideal para ferias, congresos y cócteles de pie, donde la gente se acerca a hablar, tomar algo y hacer negocio. Estable y de línea sobria. (Medidas orientativas.)",
    // sin price / minPrice / maxPrice
  },
  {
    id: "mesa-alta-coctel-blanca",
    name: "Mesa alta de cóctel tapa blanca",
    image: { src: "https://sillasdealquiler.es/wp-content/uploads/2019/11/MESA_ALTA_COCTEL_BLANCA.jpg" },
    description:
      "Mesa alta de cóctel con tapa blanca, de aproximadamente 110 cm de altura y tablero de unos 60-70 cm. El clásico para recepciones de pie, aperitivos y zonas de bar. Limpia y combinable con cualquier decoración. (Medidas orientativas.)",
    // sin price / minPrice / maxPrice
  },
  {
    id: "mesa-redonda-cristal-reunion",
    name: "Mesa redonda de cristal para reunión",
    image: { src: "https://sillasdealquiler.es/wp-content/uploads/2019/06/184395215_0.jpg.jpg" },
    description:
      "Mesa redonda con tablero de cristal y altura de reunión (unos 75 cm), de aproximadamente 90 cm de diámetro. Elegante y luminosa, perfecta para reuniones, mesas de firmas o rincones con estilo. (Medidas orientativas.)",
    // sin price / minPrice / maxPrice
  },
  {
    id: "mesa-baja-cuadrada-negra",
    name: "Mesa baja cuadrada negra (lounge)",
    image: { src: "https://sillasdealquiler.es/wp-content/uploads/2019/11/31CLfEJtHPL.jpg" },
    description:
      "Mesa baja cuadrada en negro, tipo lounge (unos 45 cm de alto y 55 cm de lado). Perfecta para zonas chill-out con sofás y puffs, para apoyar copas y crear ambiente. (Medidas orientativas.)",
    // sin price / minPrice / maxPrice
  },
  {
    id: "mesa-baja-cuadrada-blanca",
    name: "Mesa baja cuadrada blanca (lounge)",
    image: { src: "https://sillasdealquiler.es/wp-content/uploads/2019/11/31oRKNIxxL._SY355_.jpg" },
    description:
      "Mesa baja cuadrada en blanco, tipo lounge (unos 45 cm de alto y 55 cm de lado). Ideal para zonas lounge, candy bar o rincones de descanso en cualquier evento. (Medidas orientativas.)",
    // sin price / minPrice / maxPrice
  },
  {
    id: "silla-nordica-tulip",
    name: "Silla Nórdica Tulip",
    image: { src: "/productos/prod-silla-tulip.jpg" },
    description:
      "Silla de estilo nórdico con carcasa envolvente y asiento acolchado en polipiel, sobre patas de madera de haya maciza. Cómoda y elegante, viste cualquier mesa de boda, comunión o comida de empresa sin necesidad de funda. Medidas aprox. 49 × 54 × 83 cm y altura de asiento 43 cm.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "butaca-retro-reposabrazos",
    name: "Butaca Retro con Reposabrazos",
    image: { src: "/productos/prod-butaca-retro.jpg" },
    description:
      "Butaca de diseño retro con reposabrazos y patas de madera. El toque de color que da personalidad a un photocall, una zona chill-out o una mesa presidencial. Ligera, apilable y disponible en varios colores. Medidas aprox. 62 × 63 × 83 cm y altura de asiento 43 cm.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "butaca-aro",
    name: "Butaca de Diseño Aro",
    image: { src: "/productos/prod-butaca-aro.jpg" },
    description:
      "Butaca de una sola pieza en polipropileno, con respaldo abierto en forma de aro. Resistente al agua y al sol, va igual de bien en una terraza que en un salón moderno. Se apila para transportar y montar en un momento. Medidas aprox. 54 × 55 × 77 cm y altura de asiento 45 cm.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "silla-nido-celosia",
    name: "Silla Nido de Celosía",
    image: { src: "/productos/prod-silla-nido.jpg" },
    description:
      "Silla tipo nido con respaldo calado en celosía y asiento acolchado, sobre patas de madera. Diseño actual que llama la atención en cualquier montaje y resulta comodísima para eventos largos. Medidas aprox. 60 × 60 × 80 cm y altura de asiento 45 cm.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "taburete-nordico-tulip",
    name: "Taburete Nórdico Tulip",
    image: { src: "/productos/prod-taburete-tulip.png" },
    description:
      "La versión alta de nuestra silla nórdica: taburete con asiento acolchado y patas de haya. Ideal para barras, cócteles y mesas altas donde quieras mantener un estilo cuidado. Altura total aprox. 105 cm y altura de asiento 74 cm.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "taburete-regulable-curvo",
    name: "Taburete Regulable Curvo",
    image: { src: "/productos/prod-taburete-curvo.png" },
    description:
      "Taburete moderno de altura regulable con giro de 360°, respaldo envolvente y base cromada con reposapiés. Práctico para barras y zonas de bar: se adapta a la altura de cada mostrador. Altura de asiento regulable aprox. 60–82 cm y base de 40 cm de diámetro.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "taburete-industrial-metal",
    name: "Taburete Industrial de Metal",
    image: { src: "/productos/prod-taburete-industrial.png" },
    description:
      "Taburete alto de metal en acabado negro, estilo industrial. Robusto, apilable y con mucha personalidad para barras, food-trucks y ambientes urbanos. Aguanta el uso intensivo sin despeinarse. Altura de asiento aprox. 76 cm.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "carpa-beduina",
    name: "Carpa Beduina (elástica)",
    image: { src: "/productos/prod-carpa-beduina.jpg" },
    description:
      "Carpa elástica tensada que se adapta a la forma del espacio: cuadrada, rectangular o en L. Aporta un aire elegante y desenfadado a bodas y eventos al aire libre, y cubre desde un rincón íntimo hasta cientos de metros uniendo módulos. Sistema modular desde 4 × 4 m hasta grandes superficies.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "carpa-dos-aguas-transparente",
    name: "Carpa a Dos Aguas Transparente",
    image: { src: "/productos/prod-carpa-dosaguas.png" },
    description:
      "Carpa pabellón de estructura de aluminio y cubierta a dos aguas con techo y laterales transparentes. Da sensación de amplitud y conexión con el exterior, con lona de PVC ignífuga homologada. Se modula en tramos de 5 m para el largo que necesites, en anchos de 5 y 10 m.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "funda-silla",
    name: "Funda de Silla",
    image: { src: "/productos/prod-funda-silla.png" },
    description:
      "Funda de tela blanca que transforma una silla plegable o de banquete en una silla vestida de gala. Lavable y reutilizable, es la forma más económica de dar un salto de categoría al montaje. Universal para silla plegable o de banquete, disponible con lazo a juego.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "mampara-separadora",
    name: "Mampara Separadora",
    image: { src: "/productos/prod-mampara.png" },
    description:
      "Panel divisorio autoportante para crear ambientes, pasillos o zonas privadas en ferias, congresos y eventos. Montaje rápido y estable gracias a sus pies; se combinan varias para el largo que haga falta. Medidas aprox. 100–120 cm de ancho × 180 cm de alto.",
    // sin price / minPrice / maxPrice
  },
  {
    id: "suelo-modular-carpa",
    name: "Suelo Modular para Carpa",
    image: { src: "/productos/prod-suelo-modular.jpg" },
    description:
      "Suelo técnico desmontable que nivela el terreno y crea una superficie firme y antideslizante bajo la carpa o al aire libre. Protege a los invitados del barro y la hierba, y sirve de base para escenarios y pistas de baile. Sistema modular por placas para cubrir la superficie que necesites.",
    // sin price / minPrice / maxPrice
  },
];