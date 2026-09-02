// lib/blog.ts
// Blog de Hola Eventos — contenido SEO enfocado a Madrid (15 años, bodas, alquiler).

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  cover: string;
  readingMin: number;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "fiesta-15-anos-madrid-guia",
    title: "Fiesta de 15 años en Madrid: guía completa para organizarla",
    description:
      "Todo lo que necesitas para montar unos 15 años inolvidables en Madrid: presupuesto, material, decoración, trono, pista de baile LED y efectos. Guía práctica de Hola Eventos.",
    date: "2026-08-24",
    cover: "/productos/hola15-hero.jpg",
    readingMin: 6,
    body: [
      {
        type: "p",
        text: "Organizar una fiesta de 15 años en Madrid es uno de los momentos más especiales para cualquier familia. Es una celebración cargada de ilusión, tradición y detalles que se recuerdan toda la vida. En esta guía te contamos, paso a paso, todo lo que necesitas para que la fiesta de tu hija salga perfecta, sin agobios y sin que se escape ningún detalle.",
      },
      { type: "h2", text: "1. Fija la fecha y el número de invitados" },
      {
        type: "p",
        text: "Lo primero es decidir la fecha y hacer una lista realista de invitados. Este número marca todo lo demás: el tamaño del salón, cuántas mesas y sillas necesitarás y el catering. Como referencia rápida, para 100 invitados suelen hacer falta unas 10 mesas redondas de 10 comensales y sus 100 sillas correspondientes, más una mesa de honor para la quinceañera.",
      },
      { type: "h2", text: "2. Elige el espacio" },
      {
        type: "p",
        text: "El salón condiciona el ambiente. Si es un espacio diáfano podrás montar la decoración a tu gusto; si es al aire libre, valora una carpa para cubrir el evento por si el tiempo no acompaña. En Madrid el clima cambia rápido, así que una carpa siempre es una inversión segura para no depender del cielo.",
      },
      { type: "h2", text: "3. El material imprescindible" },
      {
        type: "p",
        text: "Estos son los elementos que no pueden faltar en unos buenos 15 años:",
      },
      {
        type: "ul",
        items: [
          "Mesas y sillas para todos los invitados, vestidas con fundas y lazos del color de la fiesta.",
          "Vajilla, cristalería y centros de mesa para una mesa elegante.",
          "Un trono o sillón de honor para la quinceañera: es la foto estrella de la noche.",
          "Escenario o tarima para el vals y el show.",
        ],
      },
      { type: "h2", text: "4. Los efectos que hacen mágica la noche" },
      {
        type: "p",
        text: "Aquí es donde una fiesta pasa de bonita a inolvidable. El humo bajo hace que la quinceañera baile su vals sobre una nube; las chispas frías (fuego frío) crean entradas espectaculares totalmente seguras; la pista de baile LED enciende el ambiente; y las pantallas LED permiten proyectar fotos y el nombre de la protagonista. Si quieres darlo todo, los mariachis y la hora loca ponen el broche final.",
      },
      { type: "h2", text: "5. Decoración y detalles" },
      {
        type: "p",
        text: "Elige una paleta de colores y mantenla en todo: globos, backdrop con el nombre, letras gigantes iluminadas y flores. La coherencia visual es lo que hace que una fiesta parezca profesional en las fotos y en los vídeos.",
      },
      { type: "h2", text: "¿Por dónde empezar?" },
      {
        type: "p",
        text: "En Hola Eventos montamos la fiesta entera por ti: material, decoración y efectos. Te asesoramos gratis y te preparamos un presupuesto a medida según tu número de invitados y tu presupuesto. Escríbenos por WhatsApp y empezamos a diseñar los 15 años que siempre soñó.",
      },
    ],
  },
  {
    slug: "cuantas-sillas-mesas-por-invitado",
    title: "¿Cuántas sillas y mesas necesito por invitado? Guía rápida",
    description:
      "Calcula fácil cuántas mesas, sillas y metros de carpa necesitas según el número de invitados. Tabla práctica de alquiler para eventos en Madrid.",
    date: "2026-08-24",
    cover: "/productos/prod-mesa-180.jpg",
    readingMin: 4,
    body: [
      {
        type: "p",
        text: "Una de las dudas más habituales al organizar un evento es cuánto material hace falta. Calcular mal deja invitados de pie o el salón medio vacío. Aquí tienes una guía rápida y fiable para acertar a la primera.",
      },
      { type: "h2", text: "Sillas: una por invitado (y algunas de más)" },
      {
        type: "p",
        text: "La regla es sencilla: una silla por persona confirmada. Nuestro consejo es sumar un 5% extra por imprevistos y acompañantes de última hora. Para 100 invitados, calcula 105 sillas.",
      },
      { type: "h2", text: "Mesas: depende del tipo" },
      {
        type: "ul",
        items: [
          "Mesa redonda de 1,50 m: 8 comensales cómodos, 10 ajustados.",
          "Mesa redonda de 1,80 m: 10 comensales cómodos, 12 ajustados.",
          "Mesa rectangular de 1,80 m: 6 a 8 comensales.",
          "Mesa de cóctel alta: para 3 o 4 personas de pie, ideal para el recibimiento.",
        ],
      },
      { type: "h2", text: "Metros de carpa" },
      {
        type: "p",
        text: "Para un evento con banquete sentado calcula aproximadamente 1,5 m² por invitado (incluye mesas, paso y zona de baile). Para un cóctel de pie, con 1 m² por persona es suficiente. Así, para 100 invitados sentados necesitarás una carpa de unos 150 m².",
      },
      { type: "h2", text: "Lo mejor: que te lo calculemos nosotros" },
      {
        type: "p",
        text: "Cada evento es distinto. Dinos cuántos invitados sois y qué tipo de celebración quieres, y en Hola Eventos te decimos exactamente qué necesitas, sin que te sobre ni te falte nada. Asesoramiento gratis por WhatsApp.",
      },
    ],
  },
  {
    slug: "ideas-decorar-15-anos-trono-humo-pista-led",
    title: "Ideas para decorar unos 15 años: trono, humo bajo y pista LED",
    description:
      "Las mejores ideas de decoración y efectos para una fiesta de 15 años: trono de honor, humo bajo para el vals, chispas frías, pista de baile LED y photocall.",
    date: "2026-08-24",
    cover: "/productos/hola15-trono.jpg",
    readingMin: 5,
    body: [
      {
        type: "p",
        text: "La decoración es lo que convierte una fiesta de 15 años en un recuerdo de película. No hace falta gastar una fortuna: con los elementos adecuados y una buena idea, el resultado es espectacular. Estas son las ideas que más triunfan.",
      },
      { type: "h2", text: "El trono de honor" },
      {
        type: "p",
        text: "Es la pieza estrella. Un sillón grande y elegante, colocado sobre un fondo decorado con globos y flores, se convierte en el escenario de las mejores fotos de la noche. Todas las invitadas querrán hacerse una foto ahí.",
      },
      { type: "h2", text: "Humo bajo para el vals" },
      {
        type: "p",
        text: "El efecto de humo bajo crea una nube densa a ras de suelo que hace que la quinceañera parezca flotar mientras baila su vals. Es uno de los momentos más emotivos y de las imágenes más compartidas en redes.",
      },
      { type: "h2", text: "Chispas frías (fuego frío)" },
      {
        type: "p",
        text: "Las máquinas de chispas frías lanzan surtidores de luz sin calor ni peligro, perfectas para la entrada de la quinceañera o el momento de la tarta. Impacto asegurado y totalmente seguras en interior.",
      },
      { type: "h2", text: "Pista de baile LED y pantallas" },
      {
        type: "p",
        text: "Una pista de baile LED iluminada cambia por completo el ambiente cuando arranca la música. Combínala con pantallas LED donde proyectar el nombre de la quinceañera, un vídeo de recuerdos o las fotos de la fiesta en directo.",
      },
      { type: "h2", text: "El photocall y los detalles" },
      {
        type: "p",
        text: "Un backdrop con el nombre en luces de neón, letras gigantes iluminadas con el 15 y una mesa de dulces coordinada rematan la decoración. Recuerda mantener siempre la misma paleta de colores para que todo combine.",
      },
      { type: "h2", text: "Lo montamos por ti" },
      {
        type: "p",
        text: "En Hola Eventos tenemos todo esto y lo instalamos en tu salón: trono, humo bajo, chispas, pista LED, pantallas y decoración completa. Cuéntanos tu idea por WhatsApp y la hacemos realidad.",
      },
    ],
  },
  {
    slug: "guia-comunion-aire-libre-madrid",
    title: "Guía definitiva para organizar una comunión al aire libre en Madrid",
    description:
      "¿Planeas una comunión al aire libre en Madrid? Descarga nuestra checklist, evita errores con el clima y descubre el mobiliario perfecto para que salga todo bien.",
    date: "2026-09-02",
    cover: "/productos/prod-carpa-beduina.jpg",
    readingMin: 6,
    body: [
      {
        type: "p",
        text: "Celebrar una comunión en un jardín o una finca de la Sierra de Madrid o alrededores es una tendencia en auge: espacio, luz natural y un ambiente relajado que encanta a mayores y pequeños. Pero la naturaleza es impredecible. Aquí te contamos, paso a paso, cómo blindar tu evento para que salga perfecto pase lo que pase.",
      },
      { type: "h2", text: "1. El clima no es tu enemigo si te anticipas" },
      {
        type: "p",
        text: "La regla número uno de cualquier evento al aire libre es tener siempre un Plan B. En Madrid el tiempo cambia rápido: una mañana soleada de mayo puede acabar con una tormenta a mediodía. La solución no es cruzar los dedos, es anticiparse.",
      },
      {
        type: "p",
        text: "Una carpa lo resuelve todo sin renunciar a la estética. Las carpas transparentes o semirrígidas protegen del sol y de la lluvia dejando pasar la luz, así que sigues teniendo esa sensación de estar al aire libre pero con la tranquilidad de estar cubierto. ¿No sabes qué tamaño de carpa necesitas para 50 invitados? Nosotros te lo calculamos y te la montamos.",
      },
      { type: "h2", text: "2. El mobiliario marca la diferencia (y la comodidad)" },
      {
        type: "p",
        text: "Olvídate de las sillas de plástico básicas: el mobiliario es lo que separa una comunión bonita de una inolvidable. La tendencia son las sillas tipo Tiffany, las mesas redondas vestidas con mantelería de lino y una zona de chill-out donde los abuelos y los invitados puedan descansar entre plato y plato.",
      },
      {
        type: "p",
        text: "Un montaje tipo para una comunión suele incluir:",
      },
      {
        type: "ul",
        items: [
          "Sillas para todos los invitados (una por persona, más un 5% extra).",
          "Mesas redondas de banquete con su mantelería.",
          "Una barra de catering para bebidas y aperitivo.",
          "Una zona de juegos o chill-out para los niños y para descansar.",
        ],
      },
      { type: "h2", text: "3. Checklist rápida para no olvidar nada" },
      {
        type: "ul",
        items: [
          "Reserva del espacio con 6-8 meses de antelación.",
          "Presupuesto de alquiler de mobiliario y carpa (pídenos el nuestro sin compromiso).",
          "Proveedor de catering y barra de bebidas.",
          "Iluminación ambiental para cuando caiga el sol.",
        ],
      },
      { type: "h2", text: "4. La promesa Hola Eventos" },
      {
        type: "p",
        text: "Sabemos que cada familia es un mundo. Si tienes una idea loca para la decoración o necesitas un elemento especial que no ves en nuestro catálogo, recuerda nuestra regla de oro: si no lo tengo, te lo consigo; y si no lo consigo, te lo construyo.",
      },
      {
        type: "p",
        text: "¿Quieres un presupuesto a medida para la comunión de este año? Descarga nuestro catálogo de mobiliario o escríbenos por WhatsApp y te asesoramos gratis en menos de 15 minutos.",
      },
    ],
  },
  {
    slug: "organizar-evento-empresa-100-personas-madrid",
    title: "Cómo organizar un evento de empresa para 100 personas en Madrid",
    description:
      "Organizar un evento corporativo en Madrid no tiene por qué ser un dolor de cabeza. Te revelamos las 4 claves del éxito, qué mobiliario necesitas y cómo optimizar tu presupuesto.",
    date: "2026-09-02",
    cover: "/productos/prod-mesa-alta-cocktail.jpg",
    readingMin: 6,
    body: [
      {
        type: "p",
        text: "Ya sea una presentación de producto, un team building o una cena de Navidad, un evento de 100 personas requiere precisión militar. Cada detalle cuenta y no hay margen para improvisar. Te damos la hoja de ruta para que salga impecable y proyecte la imagen que tu marca merece.",
      },
      { type: "h2", text: "1. Define el objetivo antes de alquilar una sola silla" },
      {
        type: "p",
        text: "El tipo de evento determina todo el montaje. No es lo mismo un cóctel de networking que una jornada formativa:",
      },
      {
        type: "ul",
        items: [
          "¿Es networking? Necesitas mesas altas de cóctel y zonas de pie que inviten a moverse y conversar.",
          "¿Es formativo? Necesitas butacas cómodas, mesas de trabajo y un buen equipo de sonido y proyección.",
        ],
      },
      { type: "h2", text: "2. El mobiliario que proyecta la imagen de tu marca" },
      {
        type: "p",
        text: "No es lo mismo una reunión en una sala de juntas que el lanzamiento de un producto. El mobiliario habla de tu empresa antes de que empiece el evento. Apuesta por la versatilidad: mobiliario de diseño, zonas chill-out corporativas, barras de catering elegantes y detalles que refuercen tu identidad.",
      },
      {
        type: "p",
        text: "¿Tu empresa tiene colores corporativos específicos? Personalizamos la decoración (mantelería, iluminación, detalles) para que todo respire vuestra identidad de marca.",
      },
      { type: "h2", text: "3. Desglose orientativo de necesidades para 100 personas" },
      {
        type: "ul",
        items: [
          "Zona de registro: 1 mesa larga + 2 taburetes altos.",
          "Zona principal: 10 mesas redondas (10 pax) o 15 mesas de cóctel.",
          "100-120 sillas (ten siempre un 10-20% de margen).",
          "1 barra de bebidas y 1 zona de coffee break.",
        ],
      },
      { type: "h2", text: "4. Por qué las empresas en Madrid confían en Hola Eventos" },
      {
        type: "p",
        text: "Porque eliminamos la logística de tu lista de preocupaciones. Nosotros llevamos, montamos, decoramos y recogemos. Tú solo te ocupas de tus invitados. Un único proveedor para todo, sin coordinar a diez empresas distintas.",
      },
      {
        type: "p",
        text: "No pierdas tiempo comparando proveedores fragmentados. Solicita tu presupuesto integral hoy mismo: respuesta inmediata por WhatsApp o teléfono.",
      },
    ],
  },
  {
    slug: "errores-alquilar-mobiliario-eventos-madrid",
    title: "5 errores al alquilar mobiliario para eventos en Madrid (y cómo evitarlos)",
    description:
      "Evita los fallos más comunes al organizar tu evento en Madrid. Descubre por qué elegir un proveedor integral te ahorra dinero, tiempo y disgustos el día D.",
    date: "2026-09-02",
    cover: "/productos/prod-silla-tulip.jpg",
    readingMin: 5,
    body: [
      {
        type: "p",
        text: "Has visto eventos que parecen sacados de una revista y otros que son un caos logístico. La diferencia no siempre es el presupuesto: es la planificación y el proveedor. Estos son los 5 errores que más se repiten al alquilar mobiliario en Madrid, y cómo evitarlos.",
      },
      { type: "h2", text: "Error 1: Calcular mal el espacio y el aforo" },
      {
        type: "p",
        text: "Meter 100 sillas en un espacio pensado para 80 genera incomodidad y hasta riesgo. Y al revés, un salón medio vacío resta ambiente. Solución: un buen proveedor visita el lugar o te pide un plano y te hace un croquis de distribución gratuito para que todo encaje.",
      },
      { type: "h2", text: "Error 2: Contratar proveedores separados para cada cosa" },
      {
        type: "p",
        text: "Uno para las sillas, otro para la carpa, otro para el sonido. Resultado: tres facturas, tres horarios de entrega y tres personas a las que culpar si algo falla. Solución: busca un servicio integral. En Hola Eventos centralizamos todo — un solo interlocutor, una sola factura, cero dolores de cabeza.",
      },
      { type: "h2", text: "Error 3: No tener un plan para la meteorología" },
      {
        type: "p",
        text: "El sol de Madrid en junio o una lluvia inesperada en octubre pueden arruinar un evento en el jardín. Solución: incluye siempre en tu presupuesto una carpa o toldo, aunque creas que no la vas a necesitar. Más vale tenerla y que sobre.",
      },
      { type: "h2", text: "Error 4: Elegir solo por el precio más bajo" },
      {
        type: "p",
        text: "Mobiliario sucio, desparejo o con piezas rotas arruina la foto y la experiencia del invitado. Solución: exige ver fotos reales del material o pide un catálogo actualizado. Nosotros garantizamos material premium, limpio y en perfecto estado.",
      },
      { type: "h2", text: "Error 5: Pensar que \"todo está disponible\" a última hora" },
      {
        type: "p",
        text: "Las buenas fechas (sábados de mayo, junio y diciembre) se agotan con meses de antelación. Solución: reserva tu fecha cuanto antes. Y si tienes una emergencia de última hora, recuerda nuestro lema: si no lo tengo, te lo consigo; y si no lo consigo, te lo construyo.",
      },
      {
        type: "p",
        text: "¿Quieres asegurar el éxito de tu próximo evento sin estrés? Habla con un especialista de Hola Eventos ahora. Te ayudamos a elegir sin compromiso y con respuesta inmediata por WhatsApp o teléfono.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
