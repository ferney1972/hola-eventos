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
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
