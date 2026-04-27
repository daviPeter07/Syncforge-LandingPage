import { BackToTop } from "@/components/BackToTop";
import { SiteBackground } from "@/components/SiteBackground";
import { About } from "@/features/About";
import { Clients } from "@/features/Clients";
import { Contact } from "@/features/Contact";
import { Faq } from "@/features/Faq";
import { Footer } from "@/features/Footer";
import { Hero } from "@/features/Hero";
import { Navbar } from "@/features/Navbar";
import { Process } from "@/features/Process";
import { Results } from "@/features/Results";
import { Services } from "@/features/Services";
import { Team } from "@/features/Team";
import { Technologies } from "@/features/Technologies";

export default function HomePage() {
  return (
    <>
      <SiteBackground />
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Services />
        <Clients />
        <Process />
        <Team />
        <Technologies />
        <Results />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
