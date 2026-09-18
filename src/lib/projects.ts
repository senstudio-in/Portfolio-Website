import { img } from "./site";

/** An image slot. `src: null` renders the striped "missing image" placeholder, like Framer. */
export type Slot = { src: string | null; w: number; h: number; fit?: "cover" | "contain" };

export type Project = {
  slug: string;
  title: string;
  thumbnail: string;
  tag: string;
  subtitle: string;
  meta: string;
  lead: Slot;
  intro: string;
  /** three 1080px-wide images under the intro */
  gallery: Slot[];
  /** four 1292px-wide banners; the "process" block sits between the 2nd and 3rd */
  banners: Slot[];
  process?: { heading: string; body: string };
  grid: string[];
  quote?: string;
  final: Slot;
};

const s = (file: string, w: number, h: number, fit: Slot["fit"] = "contain"): Slot => ({
  src: img(file),
  w,
  h,
  fit,
});
const empty = (w: number, h: number): Slot => ({ src: null, w, h });
const BANNER_EMPTY = empty(1292, 1615);

// Shared 12-image grid used on every case study in the Framer site.
const sharedGrid = [
  "vRS6tJFmhTm5JQABBJiee5LKP7w.jpg",
  "GEsiJPBRSV1acsFKpjDSJVFfqMQ.jpg",
  "PLc8WzzdlnO3etAQSIiwwiqd9uE.jpg",
  "SvKBaOnejhizqs3eiv2VaUJcUM.jpg",
  "8dUJFS2MUtIOeQeRxVjCMTMo.jpg",
  "iEna8z2ZtHFuH9Rrkv4pxMocOw.jpg",
  "j2uPoQCozkyDl6r8llhsriUvos.jpg",
  "usdOU0e5bcsUO7HuJC4JISTxxc.jpg",
  "modVb0ZNwserLUxIs3WTdpK1V4.jpg",
  "UiVuYwLdCCBFNEPvHj4YuIkt7ws.jpg",
  "B0EwrdzxcX1WLR8fMlFo8mDlfM.jpg",
  "jItLYJgHfkqLpknoCbmvWoKTvfo.jpg",
].map(img);

export const projects: Project[] = [
  {
    slug: "sevilla-fc",
    title: "Sevilla FC Creatives",
    thumbnail: img("IRPUiNlNkYZqtKsk5owrvupDgFQ.jpg"),
    tag: "Spanish Club",
    subtitle: "Global creatives & Indian virtual tour",
    meta: "Art Direction & Designing",
    lead: s("IRPUiNlNkYZqtKsk5owrvupDgFQ.jpg", 1080, 845),
    intro:
      "This project was created for Sevilla FC through Engage Digital Partner as a tribute to Jesús Navas on his retirement. I conceptualised and designed the piece from the ground up, working closely with the Sevilla FC team throughout the process. The aim was to create a meaningful visual that captured the significance of Navas’ legacy and farewell. The final outcome was very well received by the Sevilla FC team, who were extremely happy with the result.",
    gallery: [
      s("RVVteIAneRkbfIbWkR9GMi9bzj8.png", 1080, 1350),
      s("A9bYsrrs5GJOIHjgMEp8UcrEkBw.jpg", 1080, 215, "cover"),
      s("cqfRcxBNSaSKaEXoqsgMR3JAQ.png", 1080, 622),
    ],
    banners: [
      s("JSaCbx7P7UEjak3jLyXleDFvw.jpg", 1292, 1615),
      s("98HP4gK8InvV7hB8eH4gewZ75RA.png", 1292, 1615, "cover"),
      s("gF9NVW14feQPTngYryCEqCPI6Lk.png", 1292, 1615, "cover"),
      s("xHyhMHU8HLD9IUqphdXkNki7bxA.png", 1292, 1615, "cover"),
    ],
    process: {
      heading: "MATCHDAY CREaTIVES",
      body: "These creatives were developed for Sevilla FC’s matchday communications, spanning both global and India-focused campaigns. Some pieces were created for the club’s global channels, including UEFA Europa League matchdays, while others were developed as part of the India Virtual Tour initiative, specifically targeting Sevilla FC’s fanbase in India.",
    },
    grid: sharedGrid,
    final: empty(1292, 1292),
  },
  {
    slug: "tgif",
    title: "TGIF",
    thumbnail: img("2FK9vfHk2pgqFApqgDUI623uSLk.jpg"),
    tag: "Football Documentary",
    subtitle: "TRVAELLERS GUIDE TO INDIAN FOOTBALL",
    meta: "Art Direction, Branding & Designing",
    lead: s("2FK9vfHk2pgqFApqgDUI623uSLk.jpg", 1080, 776),
    intro: [
      "TGIF is a passion-driven project and the brainchild of Johnson Kanjirathingal, born out of a genuine love for Indian football. I came onto the project at a stage where there were a lot of ideas, but nothing really connecting the dots yet. I was brought in to art direct the project and take care of the overall design and animation direction.",
      "I worked closely with Parinith, who was the designer for the project. I started by creating the brand guidelines, which then became the foundation for developing all the visual assets with Parinith. I also created the intro for the series frame by frame. Wayne, our motion designer, worked on most of the animations and also helped bring parts of the intro to life.",
      "What made this project particularly special was how involved I was across the entire process, from defining the visual identity to designing and animating the final pieces. It was one of the most unique projects I’ve ever been a part of, and one that came from a genuine passion for Indian football.",
    ].join("\n\n"),
    gallery: [
      s("PlRpWhoNy9fJWBos2OLtzY3wB8.gif", 1080, 608),
      s("FZMkThVsaHF8e64J0LKVx1vhs.png", 1080, 608, "cover"),
      s("dyzUWhMNnxxly3lEn5pFRZ1jSN4.jpg", 1080, 622),
    ],
    banners: [
      s("xvZ1dyqKiHPo8ec5YtE9k6CwFP4.jpg", 1292, 727),
      s("lsAZmNnfG0nveW1lGwrVQXDdM.jpg", 1292, 727, "cover"),
      s("j9mlms1dxpFnITjGxAYP204Waw.jpg", 1292, 928, "cover"),
      s("UmCgoOg2O2YFxAGjBECEdsGinSc.jpg", 1292, 862, "cover"),
    ],
    process: {
      heading: "The Creative Proccess",
      body: [
        "At some point, all of us as kids had scrapbooks where we would cut out pictures of our favourite players and stick them into our diaries. It’s one of those small things that becomes a core memory.",
        "I came up with the idea of creating a set that would look like Pranaay’s studio. Pranaay was our host, travelling across different states and sharing the stories of Indian football, so I wanted the set to feel like he was reminiscing about the entire journey.",
        "The idea was to have him stitch, cut and collect pictures, notes and little pieces from his experiences along the way, slowly putting everything together in his scrapbook. As the episodes progress, the scrapbook would grow with his journey and eventually become the book — *Traveller’s Guide to Indian Football*.",
        "This scrapbook became a visual language that we carried throughout the episodes, bringing in a sense of nostalgia and making the whole journey feel personal and lived-in.",
      ].join("\n\n"),
    },
    grid: sharedGrid,
    quote:
      "\"Derek has this talent for making complicated projects feel simple and manageable. Our previous brand felt generic, but he helped us develop something that really stands out in our market. The collaboration was seamless - we worked mostly remotely and it felt effortless. His designs are not just visually strong but strategically sound too.\"",
    final: s("vX4LIoVPzGIwh949mjIOIsABC1g.jpg", 1292, 862, "cover"),
  },
  {
    slug: "real-madrid",
    title: "Real Madrid X India",
    thumbnail: img("JybGAIUzTxDz3eC17OeJzPC6vs.jpg"),
    tag: "Sports Social Media Design",
    subtitle: "Real Madrid CF Virtual India Tour",
    meta: "2022",
    lead: s("JybGAIUzTxDz3eC17OeJzPC6vs.jpg", 1080, 845),
    intro:
      "Created for Real Madrid CF through Engage Digital Partner, this project was developed for the club’s India Virtual Tour. I conceptualised and designed the experience from the ground up, working closely with the Real Madrid team throughout the process. The aim was to create an engaging digital experience that brought the world of Real Madrid closer to its Indian audience, while staying true to the club’s identity and heritage. The final outcome was very well received by the team.",
    gallery: [
      s("NHHYhQNdroK6PaLF3jNKHviNlHI.png", 1080, 1350),
      s("60YQc7Tr2Cwei2q3ouIeUrfj8Y.jpg", 1080, 215, "cover"),
      s("1JsgwRpgm0GRW7w7b237WFiLyvY.png", 1080, 622),
    ],
    banners: [s("CutactAudVEg2FmajzDPOceWuv8.png", 1292, 842), BANNER_EMPTY, BANNER_EMPTY, BANNER_EMPTY],
    grid: sharedGrid,
    quote:
      "\"Derek was a key contributor to our brand development. He understood our mission from day one and helped us communicate it authentically to our audience. What started as one project turned into a complete transformation that really resonates with our customers. His designs are beautiful but more importantly, they get results.\"",
    final: s("MH3trtWMkakMiH0uymzOa1UASqo.jpg", 1292, 1939, "cover"),
  },
  {
    slug: "sports-podcast",
    title: "Roots to Boots",
    thumbnail: img("amIthQxfFVvRUYnQfLs86vMBVSw.jpeg"),
    tag: "Cosmetic",
    subtitle: "Essence",
    meta: "2023",
    lead: s("amIthQxfFVvRUYnQfLs86vMBVSw.jpeg", 1080, 810),
    intro:
      "We developed NEO DECK's complete brand identity including logo design, visual systems, and custom website to establish their market position. Our strategic approach combined brand development with user-focused web design, resulting in enhanced recognition and improved conversion rates.",
    gallery: [
      s("8D94MHuuiwHnL0p2tZIAdIHkY9c.webp", 1080, 810),
      s("BlUn6SOciY64KbwmyHrARU5PHPU.webp", 1080, 810, "cover"),
      s("M5tPh6eA4vReOJEGZeiKaUNPvA.png", 1080, 622),
    ],
    banners: [s("CutactAudVEg2FmajzDPOceWuv8.png", 1292, 842), BANNER_EMPTY, BANNER_EMPTY, BANNER_EMPTY],
    grid: sharedGrid,
    quote:
      "\"I've worked with Derek on transforming our digital presence, and he was essential to our growth. He has this ability to understand business challenges, not just make things look pretty. Derek built custom solutions that streamlined our processes and made our team more efficient. Working with him was seamless and professional.\"",
    final: s("C60U5Yw6SgzyrLPCJHPVJPLRdk.jpg", 1292, 1939, "cover"),
  },
  {
    slug: "icc-cricket",
    title: "ICC Global creatives",
    thumbnail: img("MvL0JNaiIQjie9ELNkbagVSKjI.jpg"),
    tag: "Cricket World Cup",
    subtitle: "ICC",
    meta: "2023",
    lead: s("MvL0JNaiIQjie9ELNkbagVSKjI.jpg", 1080, 845),
    intro:
      "Created for the ICC through Engage Digital Partner during the World Cup, this series of cricket creatives was conceived and designed to build a visual narrative around the tournament. Rather than treating each creative as a standalone piece, I developed the work as a connected story, capturing the tension, anticipation, and momentum as the tournament progressed towards the final. I was closely involved in both the creative concept and visual execution, with the series designed to keep audiences engaged throughout the build-up to the biggest moment of the tournament.",
    gallery: [
      s("XufOUCqarr9lL4R8czNBw8pCQ3I.png", 1080, 608),
      s("2koeXCkxxIJJbY4I1a4YZqY0DiQ.jpg", 1080, 215, "cover"),
      s("15j9z3wmDRU0SGJgBkmg2qGAM.png", 1080, 622),
    ],
    banners: [s("5uoUbbLoCseQfhzkAdzsnl8qQ.png", 1292, 1615), BANNER_EMPTY, BANNER_EMPTY, BANNER_EMPTY],
    grid: sharedGrid,
    final: empty(1292, 1292),
  },
  {
    slug: "olive",
    title: "Olive",
    thumbnail: img("rCCfxewqvWAk4xj1f7rnD25GqmU.webp"),
    tag: "Fashion",
    subtitle: "Olive",
    meta: "2022",
    lead: s("rCCfxewqvWAk4xj1f7rnD25GqmU.webp", 1080, 810),
    intro:
      "A sustainability-focused branding and web design project for this eco-conscious furniture manufacturer. We developed a brand identity that communicates environmental responsibility without sacrificing contemporary appeal, supported by a transparent website showcasing their sustainable practices.",
    gallery: [
      s("LMvRBepXsws2lEUJwc1vbQlhgkc.jpg", 1080, 1620),
      s("hLRG3vjXEMeSvWqJhdM7oj8rBSQ.jpg", 1080, 1080, "cover"),
      s("J5OZ6hSGMeez2i38d3LQgdLgwxI.webp", 1080, 622),
    ],
    banners: [s("toNEJavNPqyZ1diiearSHIPtE.png", 1292, 841), BANNER_EMPTY, BANNER_EMPTY, BANNER_EMPTY],
    grid: sharedGrid,
    quote:
      "\"I've worked with Derek on transforming our digital presence, and he was essential to our growth. He has this ability to understand business challenges, not just make things look pretty. Derek built custom solutions that streamlined our processes and made our team more efficient. Working with him was seamless and professional.\"",
    final: s("ng7M61J11KnEmpb3HeecEYV4uQ.jpg", 1292, 2183, "cover"),
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
