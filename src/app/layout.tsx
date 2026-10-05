import type { Metadata } from "next";
import "./globals.css";
import { fontVariables } from "./fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arghya Sen | Bangalore Art Director & Designer — Sen Studio",
    template: "%s - Sen Studio",
  },
  description:
    "Sen Studio is a Bangalore creative studio led by Arghya Sen, specialising in art direction, visual design, photography, videography, editing and digital experiences.",
  keywords: [
    "Sen Studio",
    "Bangalore designer",
    "Bengaluru designer",
    "art director Bangalore",
    "art direction Bengaluru",
    "visual designer Bangalore",
    "Arghya Sen",
    "creative studio Bangalore",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Arghya Sen | Bangalore Art Director & Designer — Sen Studio",
    description: "Art direction, visual design and digital experiences by Arghya Sen in Bangalore.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Sen Studio — Design that makes Sen(se)" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arghya Sen | Bangalore Art Director & Designer — Sen Studio",
    description: "Art direction, visual design and digital experiences by Arghya Sen in Bangalore.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#sen-studio`,
        name: "Sen Studio",
        url: SITE_URL,
        logo: `${SITE_URL}/images/BFnLC4mlhagUStgR5XGhUrfLv0.png`,
        image: `${SITE_URL}/opengraph-image`,
        description:
          "Bangalore creative studio led by Arghya Sen, specialising in art direction, visual design, photography, videography, editing and digital experiences.",
        founder: { "@id": `${SITE_URL}/#arghya-sen` },
        email: "senstudio.in@gmail.com",
        telephone: "+91-8928768546",
        address: {
          "@type": "PostalAddress",
          streetAddress: "12th Cross Rd, GM Palya, CV Raman Nagar",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560093",
          addressCountry: "IN",
        },
        areaServed: { "@type": "City", name: "Bengaluru" },
        knowsAbout: ["Art Direction", "Visual Design", "Photography", "Videography", "Editing", "UI/UX Design"],
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#arghya-sen`,
        name: "Arghya Sen",
        url: SITE_URL,
        jobTitle: "Art Director and Designer",
        worksFor: { "@id": `${SITE_URL}/#sen-studio` },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          addressCountry: "IN",
        },
        knowsAbout: ["Art Direction", "Visual Design", "Photography", "Videography", "Editing", "UI/UX Design"],
      },
    ],
  };

  return (
    <html lang="en" className={fontVariables}>
      <body className="flex min-h-screen flex-col items-center overflow-x-clip">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
