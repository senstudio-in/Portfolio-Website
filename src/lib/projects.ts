import { img } from "./site";

/** An image slot. `src: null` renders the striped "missing image" placeholder, like Framer. */
export type Slot = {
  src: string | null;
  w: number;
  h: number;
  fit?: "cover" | "contain";
  animated?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  listed?: boolean;
  thumbnail: string;
  tag: string;
  subtitle: string;
  meta: string;
  partner?: string;
  lead: Slot;
  preIntro?: Slot;
  birthdayGallery?: Slot[];
  behindTheScenes?: Slot[];
  legends?: { heading: string; images: Slot[] };
  intro: string;
  /** three 1080px-wide images under the intro */
  gallery: Slot[];
  /** four 1292px-wide banners; the "process" block sits between the 2nd and 3rd */
  banners: Slot[];
  process?: { heading: string; body: string };
  episode3?: Slot;
  grid: string[];
  trophyTour?: string[];
  continuation?: {
    title: string;
    subtitle: string;
    credit?: string;
    description: string;
    featured: string[];
    gallery: string[];
  };
  testimonials?: { attribution: string; quote: string }[];
  quote?: string;
  final: Slot;
};

const s = (file: string, w: number, h: number, fit: Slot["fit"] = "contain", animated = false): Slot => ({
  src: img(file),
  w,
  h,
  fit,
  animated,
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
    tag: "Photo Manipulation (No AI Used)",
    subtitle: "Global creatives & Indian virtual tour",
    meta: "Art Direction & Designing",
    partner: "Via **Engage Digital Partners**",
    lead: s("IRPUiNlNkYZqtKsk5owrvupDgFQ.jpg", 1080, 845),
    intro:
      "This project was created for Sevilla FC through Engage Digital Partner as a tribute to Jesús Navas on his retirement. I conceptualised and designed the piece from the ground up, working closely with the Sevilla FC team throughout the process. The aim was to create a meaningful visual that captured the significance of Navas’ legacy and farewell. The final outcome was very well received by the Sevilla FC team, who were extremely happy with the result.",
    gallery: [
      s("RVVteIAneRkbfIbWkR9GMi9bzj8.png", 1080, 1350),
      s("cqfRcxBNSaSKaEXoqsgMR3JAQ.png", 1080, 622),
    ],
    legends: {
      heading: "Sevilla X Indian Legends",
      images: [
        s("sevilla-chhetri-navas.jpg", 1080, 1350, "cover"),
        s("sevilla-kanoute-vijayan.png", 1080, 1350, "cover"),
      ],
    },
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
    episode3: s("tgif-hyderabad-episode-3.jpg", 1920, 1080, "cover"),
    grid: sharedGrid,
    continuation: {
      title: "Sevilla FC Creatives",
      subtitle: "2024–2025",
      credit: "Via **Sportfolio Productions**",
      description:
        "I led the art direction for Sevilla FC’s Virtual Tour in India, creating a matchday campaign that placed the club and its players within the country’s varied locations, cultures and traditions. Each creative brought the Sevilla experience closer to Indian fans, imagining the players exploring, celebrating and enjoying the places they visited. I led the project from concept through execution, collaborating with Arka Das, Parinith Ramakrishnan, Atharva Deodhar, Zekki, Ronit and Kiran.",
      featured: [img("sevilla-2024-25/global-gfx-3.jpeg"), img("sevilla-2024-25/global-gfx-1.png")],
      gallery: [
        "md-01-athletic-club.png",
        "md-10-real-sociedad.jpeg",
        "md-08-barcelona.png",
        "md-04-elche.png",
        "md-12-osasuna.jpeg",
        "md-11-atletico-madrid.png",
        "md-22-rcd-mallorca.jpeg",
        "md-26-real-betis.png",
        "md-17-real-madrid.jpeg",
        "md-21-athletic-club.jpeg",
        "md-14-real-betis.jpeg",
        "md-15-valencia.jpeg",
        "onam.jpeg",
        "diwali.jpeg",
        "ganesh-chaturthi.jpeg",
        "raksha-bandhan.png",
      ].map((file) => img(`sevilla-2024-25/${file}`)),
    },
    testimonials: [
      {
        attribution: "Sevilla FC · Placeholder testimonial",
        quote:
          "Working on the Virtual Tour was a genuinely collaborative and exciting process. The campaign created a distinctive way to connect Sevilla FC with supporters across India.",
      },
      {
        attribution: "Johnson Kanjirathingal, Founder, Sportfolio Productions LLP",
        quote:
          "The Sevilla FC x India project brief wasn't new, however, with Arghya as our Art Director we developed a design language that connected with Indian audiences without losing the club's identity. He's a rare creative talent: he thinks about the story before the frame, and that foresight is what developed the Virtual Tour design project for Sevilla FC.",
      },
    ],
    final: empty(1292, 1292),
  },
  {
    slug: "tgif",
    title: "Travellers' Guide to India",
    thumbnail: img("2FK9vfHk2pgqFApqgDUI623uSLk.jpg"),
    tag: "Art Directing & Branding",
    subtitle: "TRVAELLERS GUIDE TO INDIAN FOOTBALL",
    meta: "Art Direction, Branding & Designing",
    lead: s("2FK9vfHk2pgqFApqgDUI623uSLk.jpg", 1080, 776),
    intro: [
      "TGIF is a passion-driven project and the brainchild of **Johnson Kanjirathingal**, born out of a genuine love for Indian football. I came onto the project at a stage where there were a lot of ideas, but nothing really connecting the dots yet. I was brought in to art direct the project and take care of the overall design and animation direction.",
      "I worked closely with **Parinith Ramakrishnan**, who was the designer for the project. I started by creating the brand guidelines, which then became the foundation for developing all the visual assets with **Parinith Ramakrishnan**. I also created the intro for the series frame by frame. **Wayne**, our motion designer, worked on most of the animations and also helped bring parts of the intro to life.",
      "What made this project particularly special was how involved I was across the entire process, from defining the visual identity to designing and animating the final pieces. It was one of the most unique projects I’ve ever been a part of, and one that came from a genuine passion for Indian football.",
    ].join("\n\n"),
    gallery: [
      s("tgif-animation.webp", 1080, 608, "contain", true),
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
      heading: "The Creative Process",
      body: [
        "At some point, all of us as kids had scrapbooks where we would cut out pictures of our favourite players and stick them into our diaries. It’s one of those small things that becomes a core memory.",
        "I came up with the idea of creating a set that would look like Pranaay’s studio. Pranaay was our host, travelling across different states and sharing the stories of Indian football, so I wanted the set to feel like he was reminiscing about the entire journey.",
        "The idea was to have him stitch, cut and collect pictures, notes and little pieces from his experiences along the way, slowly putting everything together in his scrapbook. As the episodes progress, the scrapbook would grow with his journey and eventually become the book — *Traveller’s Guide to Indian Football*.",
        "This scrapbook became a visual language that we carried throughout the episodes, bringing in a sense of nostalgia and making the whole journey feel personal and lived-in.",
      ].join("\n\n"),
    },
    grid: sharedGrid,
    testimonials: [
      {
        attribution: "Johnson Kanjirathingal, Founder, Sportfolio Productions LLP",
        quote:
          "When Arghya joined our documentary series project - Travellers Guide to Indian Football, we had a lot of ideas but no visual language tying them together. He built the brand guidelines that every visual asset has been developed from, and shaped the series intro frame by frame. He gave the project its look and its identity.",
      },
    ],
    final: s("vX4LIoVPzGIwh949mjIOIsABC1g.jpg", 1292, 862, "cover"),
  },
  {
    slug: "real-madrid",
    title: "Real Madrid X India",
    thumbnail: img("JybGAIUzTxDz3eC17OeJzPC6vs.jpg"),
    tag: "Photo Manipulation (No AI Used)",
    subtitle: "Real Madrid CF Virtual India Tour",
    meta: "2022",
    lead: s("JybGAIUzTxDz3eC17OeJzPC6vs.jpg", 1080, 845),
    intro:
      "Created for Real Madrid CF through Engage Digital Partner, this project was developed for the club’s India Virtual Tour. I conceptualised and designed the experience from the ground up, working closely with the Real Madrid team throughout the process. The aim was to create an engaging digital experience that brought the world of Real Madrid closer to its Indian audience, while staying true to the club’s identity and heritage. The final outcome was very well received by the team.",
    gallery: [
      s("NHHYhQNdroK6PaLF3jNKHviNlHI.png", 1080, 1350),
      s("real-madrid-holi-2024.jpg", 2000, 2500, "cover"),
    ],
    banners: [BANNER_EMPTY, BANNER_EMPTY, BANNER_EMPTY, BANNER_EMPTY],
    grid: sharedGrid,
    final: empty(1292, 1939),
  },
  {
    slug: "sports-podcast",
    title: "Roots to Boots",
    thumbnail: img("roots-to-boots-wordmark.png"),
    tag: "Branding",
    subtitle: "Branding project with **Parinith Ramakrishnan**\nPodcast Series for Sportfolio production",
    meta: "2026",
    lead: s("roots-to-boots-wordmark.png", 4152, 2224, "cover"),
    intro: "",
    behindTheScenes: [
      s("roots-to-boots-bts-wordmark.png", 1079, 855, "cover"),
      s("roots-to-boots-bts-intro.png", 1079, 855, "cover"),
    ],
    gallery: [
      s("rtb-intro.gif", 1292, 727, "contain", true),
      s("rtb-climax-lawrence-vertical.png", 1080, 1920, "cover"),
      s("rtb-halicharan-narzary-vertical.png", 1080, 1920, "cover"),
      s("rtb-halicharan-narzary.png", 1920, 1080, "cover"),
      s("rtb-climax-lawrence.png", 1920, 1080, "cover"),
    ],
    banners: [BANNER_EMPTY, BANNER_EMPTY, BANNER_EMPTY, BANNER_EMPTY],
    grid: [],
    final: empty(1292, 1939),
  },
  {
    slug: "icc-cricket",
    title: "ICC Global creatives",
    thumbnail: img("MvL0JNaiIQjie9ELNkbagVSKjI.jpg"),
    tag: "Social Media Design",
    subtitle: "ICC social media work done via EDP",
    meta: "",
    lead: s("MvL0JNaiIQjie9ELNkbagVSKjI.jpg", 1080, 845),
    intro:
      "Created for the ICC through Engage Digital Partner during the World Cup, this series of cricket creatives was conceived and designed to build a visual narrative around the tournament. Rather than treating each creative as a standalone piece, I developed the work as a connected story, capturing the tension, anticipation, and momentum as the tournament progressed towards the final. I was closely involved in both the creative concept and visual execution, with the series designed to keep audiences engaged throughout the build-up to the biggest moment of the tournament.",
    gallery: [
      s("XufOUCqarr9lL4R8czNBw8pCQ3I.png", 1080, 608),
      s("2koeXCkxxIJJbY4I1a4YZqY0DiQ.jpg", 1080, 215, "cover"),
      s("icc-virat-kohli-throne.png", 1292, 1615, "cover"),
      s("15j9z3wmDRU0SGJgBkmg2qGAM.png", 1400, 1750),
      s("icc-jofra-archer.png", 2000, 2500, "cover"),
      s("icc-wtc-captain-pat-cummins.png", 2000, 2500, "cover"),
      s("icc-wtc-captain-rohit-sharma.png", 2000, 2500, "cover"),
      s("icc-t20-semi-final-captains.png", 2000, 2500, "cover"),
      s("icc-captains-brighter.jpg", 2000, 2500, "cover"),
      s("icc-house-stark.jpeg", 1000, 1250, "cover"),
    ],
    banners: [BANNER_EMPTY, BANNER_EMPTY, BANNER_EMPTY, BANNER_EMPTY],
    grid: sharedGrid,
    trophyTour: [
      "icc-trophy-tour-south-africa.jpg",
      "icc-trophy-tour-scotland.jpg",
      "icc-trophy-tour-new-zealand.png",
      "icc-trophy-tour-pakistan.jpg",
      "icc-trophy-tour-tasmania.png",
      "icc-trophy-tour-new-south-wales.png",
      "icc-trophy-tour-western-australia.png",
      "icc-trophy-tour-indonesia.png",
      "icc-trophy-tour-germany.png",
      "icc-trophy-tour-finland.png",
    ].map(img),
    final: empty(1292, 1292),
  },
  {
    slug: "olive",
    title: "Chelsea FC X India",
    thumbnail: img("chelsea-social-media-regional-design.png"),
    tag: "Social Media Design",
    subtitle: "Global Creatives and Indian Virtual Tour",
    meta: "",
    partner: "Via **Engage Digital Partners**",
    lead: s("chelsea-social-media-regional-design.png", 1920, 1502),
    preIntro: s("chelsea-wsl-congratulations.png", 2000, 2500, "cover"),
    birthdayGallery: [
      s("chelsea-birthday-rudiger.jpg", 2000, 2000, "cover"),
      s("chelsea-birthday-ziyech.jpg", 2000, 2000, "cover"),
      s("chelsea-birthday-mendy.jpg", 2000, 2000, "cover"),
      s("chelsea-birthday-loftus-cheek.jpg", 2000, 2000, "cover"),
    ],
    intro:
      "I was the designer for this Chelsea FC project, creating social media work tailored to the club’s growing audience in India. Much of the campaign was rooted in Indian culture, celebrating local football figures such as Bhaichung Bhutia alongside key festivals and national moments. The work helped Chelsea FC make its social presence feel more relevant and connected for supporters across India, with a virtual tour continuing this approach further down the project.",
    gallery: [
      s("chelsea-bhaichung-bhutia.png", 2000, 2500, "cover"),
      s("chelsea-gandhi-jayanti.png", 2000, 2500, "cover"),
      s("chelsea-mary-kom-birthday.png", 2000, 2500, "cover"),
      s("chelsea-christmas-2022.png", 2000, 2500, "cover"),
      s("chelsea-chapchar-kut.png", 2000, 2500, "cover"),
      s("chelsea-matchday-thumbnail.png", 1920, 1502, "cover"),
      s("chelsea-virtual-tour-dortmund.png", 2000, 2500, "cover"),
      s("chelsea-virtual-tour-man-city.png", 2000, 2500, "cover"),
      s("chelsea-virtual-tour-arsenal.png", 2000, 2500, "cover"),
      s("chelsea-virtual-tour-brentford.jpg", 2000, 2500, "cover"),
      s("chelsea-virtual-tour-man-united.png", 2000, 2500, "cover"),
      s("chelsea-virtual-tour-plymouth.jpg", 2000, 2500, "cover"),
    ],
    banners: [BANNER_EMPTY, BANNER_EMPTY, BANNER_EMPTY, BANNER_EMPTY],
    grid: [],
    final: empty(1292, 2183),
  },
  {
    slug: "world-horse-racing",
    title: "World Horse Racing",
    thumbnail: img("world-horse-racing-cover.jpg"),
    tag: "Design",
    subtitle: "Work done for World Horse Racing via EDP",
    meta: "",
    lead: s("world-horse-racing-cover.jpg", 1292, 1010, "cover"),
    intro: "",
    gallery: [
      s("whr-imperatriz-world-map.png", 1292, 1615, "cover"),
      s("whr-cannonball.png", 1292, 1615, "cover"),
    ],
    banners: [BANNER_EMPTY, BANNER_EMPTY, BANNER_EMPTY, BANNER_EMPTY],
    grid: [],
    final: empty(1292, 1502),
  },
  {
    slug: "syria-a",
    title: "Serie A & Mumbai Indians",
    listed: false,
    thumbnail: img("r5-inter-milan-believe.jpg"),
    tag: "Sports Designs",
    subtitle: "",
    meta: "",
    partner: "All works shown here were completed via R5.",
    lead: s("r5-inter-milan-believe.jpg", 1500, 1875, "cover"),
    intro: "",
    gallery: [
      s("r5-ciro-immobile.jpg", 1500, 1875, "cover"),
      s("r5-leao-felix.png", 2000, 2500, "cover"),
      s("r5-skyline-mumbai-indians.png", 2000, 2500, "cover"),
    ],
    banners: [BANNER_EMPTY, BANNER_EMPTY, BANNER_EMPTY, BANNER_EMPTY],
    grid: [],
    final: empty(1292, 1502),
  },
  {
    slug: "mlb-india",
    title: "MLB India",
    thumbnail: img("mlb-india-cover.jpg"),
    tag: "Design",
    subtitle: "",
    meta: "",
    partner: "Via EDP",
    lead: s("mlb-india-players.jpg", 1080, 1080, "cover"),
    intro:
      "Created for MLB India’s Instagram audience, this Independence Day post celebrates the spirit of India through its culture, pride and shared love of sport. The creative was tailored for fans in India, bringing baseball’s global community into a distinctly Indian celebration.",
    gallery: [s("mlb-india-independence-day.jpg", 1080, 1080, "cover")],
    banners: [BANNER_EMPTY, BANNER_EMPTY, BANNER_EMPTY, BANNER_EMPTY],
    grid: [],
    final: empty(1292, 1502),
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
