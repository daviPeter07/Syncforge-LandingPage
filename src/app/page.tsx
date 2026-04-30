import dynamic from "next/dynamic";
import { BackToTop } from "@/components/BackToTop";
import { SiteBackground } from "@/components/SiteBackground";
import { Hero } from "@/features/Hero";
import { Navbar } from "@/features/Navbar";

// Lazy loading de componentes "abaixo da dobra" (below the fold)
const About = dynamic(
  () => import("@/features/About").then((mod) => mod.About),
  { ssr: true },
);
const Services = dynamic(
  () => import("@/features/Services").then((mod) => mod.Services),
  { ssr: true },
);
const Clients = dynamic(
  () => import("@/features/Clients").then((mod) => mod.Clients),
  { ssr: true },
);
const Process = dynamic(
  () => import("@/features/Process").then((mod) => mod.Process),
  { ssr: true },
);
const Team = dynamic(() => import("@/features/Team").then((mod) => mod.Team), {
  ssr: true,
});
const Results = dynamic(
  () => import("@/features/Results").then((mod) => mod.Results),
  { ssr: true },
);
const Faq = dynamic(() => import("@/features/Faq").then((mod) => mod.Faq), {
  ssr: true,
});
const Contact = dynamic(
  () => import("@/features/Contact").then((mod) => mod.Contact),
  { ssr: true },
);
const Footer = dynamic(
  () => import("@/features/Footer").then((mod) => mod.Footer),
  { ssr: true },
);

export default function HomePage() {
  return (
    <>
      <SiteBackground />
      <Navbar />

      <main className="relative">
        {/* Renderiza apenas a Hero no load inicial mais pesado */}
        <Hero />

        {/* Blocos lazy loaded sobem a prioridade de load de fundo garantindo o scroll mais leve */}
        <About />
        <Services />
        {/*<Clients />*/}
        <Process />
        <Team />
        <Results />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
