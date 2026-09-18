import Hero from "@/components/home/Hero";
import ClientLogos from "@/components/home/ClientLogos";
import WorksGrid from "@/components/home/WorksGrid";
import AboutBlurb from "@/components/home/AboutBlurb";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className="relative flex w-full flex-col items-center gap-[35px] overflow-clip bg-page pb-[97px]">
      <Hero />
      <ClientLogos />
      <WorksGrid />
      <AboutBlurb />
      <Services />
      <Testimonials />
    </main>
  );
}
