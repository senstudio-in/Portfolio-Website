import localFont from "next/font/local";
import { Bebas_Neue, Inter, Poppins } from "next/font/google";

export const bbhBogle = localFont({
  src: "../fonts/bbh-bogle-400.woff2",
  weight: "400",
  variable: "--font-bbh-bogle",
  display: "swap",
});

export const googleSansFlex = localFont({
  src: [
    { path: "../fonts/google-sans-flex-400.woff2", weight: "400" },
    { path: "../fonts/google-sans-flex-500.woff2", weight: "500" },
    { path: "../fonts/google-sans-flex-600.woff2", weight: "600" },
    { path: "../fonts/google-sans-flex-700.woff2", weight: "700" },
  ],
  variable: "--font-google-sans-flex",
  display: "swap",
});

export const interDisplay = localFont({
  src: [
    { path: "../fonts/inter-display-400.woff2", weight: "400" },
    { path: "../fonts/inter-display-500.woff2", weight: "500" },
    { path: "../fonts/inter-display-700.woff2", weight: "700" },
  ],
  variable: "--font-inter-display",
  display: "swap",
});

export const robotoCondensed = localFont({
  src: "../fonts/roboto-condensed-500.woff2",
  weight: "500",
  variable: "--font-roboto-condensed",
  display: "swap",
});

export const spaceMono = localFont({
  src: "../fonts/space-mono-400.woff2",
  weight: "400",
  variable: "--font-space-mono",
  display: "swap",
});

export const dmMono = localFont({
  src: "../fonts/dm-mono-500.woff2",
  weight: "500",
  variable: "--font-dm-mono",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

export const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const fontVariables = [
  bbhBogle,
  googleSansFlex,
  interDisplay,
  robotoCondensed,
  spaceMono,
  dmMono,
  inter,
  bebasNeue,
  poppins,
]
  .map((f) => f.variable)
  .join(" ");
