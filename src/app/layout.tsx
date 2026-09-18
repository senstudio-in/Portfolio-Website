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
    default: "Sen Studio — Design that makes Sen(se)",
    template: "%s - Sen Studio",
  },
  description:
    "Sen Studio is an art studio in Bengaluru led by Arghya Sen — art direction, visual design, pre & post production and UI/UX.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="flex min-h-screen flex-col items-center overflow-x-clip">
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
