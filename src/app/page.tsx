import nextDynamic from "next/dynamic";
import { BackToTop } from "@/components/BackToTop";
import { SiteBackground } from "@/components/SiteBackground";
import { Hero } from "@/features/Hero";
import { Navbar } from "@/features/Navbar";

export const dynamic = "force-dynamic";

const About = nextDynamic(
  () => import("@/features/About").then((mod) => mod.About),
  { ssr: true },
);
const Clients = nextDynamic(
  () => import("@/features/Clients").then((mod) => mod.Clients),
  { ssr: true },
);
const Process = nextDynamic(
  () => import("@/features/Process").then((mod) => mod.Process),
  { ssr: true },
);
const Team = nextDynamic(
  () => import("@/features/Team").then((mod) => mod.Team),
  {
    ssr: true,
  },
);
const BlogStrip = nextDynamic(
  () => import("@/features/BlogStrip").then((mod) => mod.BlogStrip),
  { ssr: true },
);
const Faq = nextDynamic(() => import("@/features/Faq").then((mod) => mod.Faq), {
  ssr: true,
});
const Contact = nextDynamic(
  () => import("@/features/Contact").then((mod) => mod.Contact),
  { ssr: true },
);
const Footer = nextDynamic(
  () => import("@/features/Footer").then((mod) => mod.Footer),
  { ssr: true },
);

export default function HomePage() {
  return (
    <>
      <SiteBackground />
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Process />
        <Team />
        <Clients />
        <BlogStrip />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
