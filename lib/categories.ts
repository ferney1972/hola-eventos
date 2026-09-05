// lib/categories.ts
// Categorías SEO para páginas de aterrizaje "alquiler de X en Madrid".

export type Faq = { q: string; a: string };

export type Category = {
  slug: string;
  h1: string;
  title: string; // <title> SEO
  description: string; // meta description
  intro: string[]; // párrafos de texto SEO
  keywords: string[]; // para filtrar productos por nombre
  faqs: Faq[];
};

export const categories: Category[] = [
  {
    slug: "alquiler-sillas-madrid",
    h1: "Alquiler de sillas en Madrid",
    title: "Alquiler de Sillas para Eventos en Madrid | Hola Eventos",
    description:
      "Alquiler de sillas para bodas, comuniones y eventos en Madrid. Sillas Tiffany, plegables, bambú y vestidas. Entrega, montaje y recogida a domicilio.",
    intro: [
      "En Hola Eventos alquilamos sillas para todo tipo de eventos en Madrid: bodas, fiestas de 15 años, comuniones, eventos de empresa y celebraciones privadas. Disponemos de un amplio stock de modelos para que elijas el estilo que mejor encaje con tu evento, desde la práctica silla plegable hasta la elegante silla tiffany, cruz o los sillones de diseño.",
      "Nos encargamos del envío, el montaje y la recogida en Madrid y alrededores, para que tú solo tengas que disfrutar. Si necesitas muchas unidades para un banquete o un congreso, consúltanos: trabajamos con grandes cantidades y te ofrecemos el mejor precio por volumen.",
    ],
    keywords: ["silla", "sillón", "butaca"],
    faqs: [
      {
        q: "¿Cuántas sillas necesito para mi evento?",
        a: "La regla general es una silla por invitado confirmado, más un 5% extra por imprevistos. Si nos dices cuántos seréis, te lo calculamos gratis.",
      },
      {
        q: "¿Entregáis y recogéis las sillas?",
        a: "Sí. Llevamos las sillas a tu evento en Madrid y alrededores, y las recogemos cuando termina. También ofrecemos montaje si lo necesitas.",
      },
      {
        q: "¿Puedo alquilar fundas y lazos para las sillas?",
        a: "Por supuesto. Tenemos fundas y lazos en varios colores para vestir las sillas a juego con la decoración de tu evento.",
      },
    ],
  },
  {
    slug: "alquiler-mesas-madrid",
    h1: "Alquiler de mesas en Madrid",
    title: "Alquiler de Mesas para Eventos y Bodas en Madrid | Hola Eventos",
    description:
      "Alquila mesas redondas, rectangulares y de cóctel para eventos en Madrid. Amplio catálogo con servicio de transporte y montaje. Pide presupuesto.",
    intro: [
      "Alquilamos mesas para eventos en Madrid en todos los formatos que puedas necesitar: mesas redondas de banquete para bodas y celebraciones, mesas rectangulares plegables, mesas altas de cóctel para el recibimiento y mesas de catering. Todo el material se entrega limpio y en perfecto estado.",
      "Elige el tamaño según tu número de invitados y nosotros te asesoramos para que no te sobre ni te falte nada. Nos ocupamos del transporte, el montaje y la recogida en Madrid y su comunidad.",
    ],
    keywords: ["mesa"],
    faqs: [
      {
        q: "¿Cuántos comensales caben en una mesa redonda?",
        a: "Una mesa redonda de 1,50 m es cómoda para 8 comensales (10 ajustados) y una de 1,80 m para 10 (12 ajustados).",
      },
      {
        q: "¿Tenéis mesas altas de cóctel?",
        a: "Sí, disponemos de mesas altas tipo cóctel, ideales para la zona de recibimiento y aperitivo de pie.",
      },
      {
        q: "¿Las mesas incluyen mantelería?",
        a: "La mantelería se alquila aparte, así puedes elegir el color que combine con tu evento. Te preparamos el conjunto completo si lo deseas.",
      },
    ],
  },
  {
    slug: "alquiler-carpas-madrid",
    h1: "Alquiler de carpas en Madrid",
    title: "Alquiler de Carpas en Madrid para Eventos y Jardines | Hola Eventos",
    description:
      "Alquiler e instalación de carpas impermeables para bodas y fiestas en Madrid. Varias medidas y acabados. Protección total para tu evento exterior.",
    intro: [
      "Alquilamos carpas para eventos en Madrid de todos los tipos: carpas plegables para montajes rápidos, carpas beduinas elásticas de diseño, carpas estructurales tipo pabellón para grandes eventos y carpas transparentes para no perder las vistas. La carpa es la mejor inversión para no depender del tiempo.",
      "Nos encargamos del transporte, el montaje profesional y la recogida. Dinos el tamaño del espacio y el número de invitados y te recomendamos la carpa ideal, con su suelo y accesorios si los necesitas.",
    ],
    keywords: ["carpa"],
    faqs: [
      {
        q: "¿Qué tamaño de carpa necesito?",
        a: "Para un banquete sentado calcula unos 1,5 m² por invitado. Para 100 personas sentadas, una carpa de unos 150 m². Te lo calculamos según tu evento.",
      },
      {
        q: "¿Montáis la carpa vosotros?",
        a: "Sí, el montaje y desmontaje de la carpa lo realiza nuestro equipo. Tú no tienes que preocuparte de nada.",
      },
      {
        q: "¿Tenéis carpas transparentes?",
        a: "Sí, disponemos de carpas transparentes y beduinas, perfectas para eventos donde quieres un ambiente abierto y con estilo.",
      },
    ],
  },
  {
    slug: "alquiler-barras-catering-madrid",
    h1: "Alquiler de barras y material de catering en Madrid",
    title: "Alquiler de Barras de Bar y Material de Catering en Madrid",
    description:
      "Alquiler de barras de bar iluminadas y mobiliario de catering para fiestas y eventos en Madrid. Soluciones profesionales a medida. ¡Consulta precios!",
    intro: [
      "Montamos la barra y el servicio de tu evento en Madrid con todo lo necesario: barras de bar retroiluminadas, botelleros, arcones, mantelería y vajilla completa. Ideal para bodas, fiestas de 15 años, eventos de empresa y celebraciones donde quieres que la zona de bebida y el banquete luzcan impecables.",
      "Te preparamos el conjunto completo y nos encargamos del envío y la recogida en Madrid y alrededores. Cuéntanos cuántos invitados sois y qué tipo de servicio quieres, y te asesoramos sin compromiso.",
    ],
    keywords: ["barra", "botellero", "mantelería", "vajilla", "arcón"],
    faqs: [
      {
        q: "¿Alquiláis la vajilla y la cristalería?",
        a: "Sí, disponemos de mantelería, vajilla, cristalería y cubertería para servir tu banquete con elegancia.",
      },
      {
        q: "¿Tenéis barras retroiluminadas?",
        a: "Sí, contamos con barras de bar retroiluminadas que dan un toque espectacular a la zona de bebidas de tu evento.",
      },
      {
        q: "¿Podéis montar la barra en cualquier local?",
        a: "Sí, llevamos y montamos la barra y el material de catering en tu local o espacio en Madrid y su comunidad.",
      },
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
