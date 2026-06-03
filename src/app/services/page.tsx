import { SiteBackground } from "@/components/SiteBackground";
import { Navbar } from "@/features/Navbar";

export default function ServicesPage() {
  return (
    <>
      <SiteBackground />
      <Navbar />

      <main className="relative min-h-svh">
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 sm:pt-36 lg:pt-40">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[10.5px] font-medium tracking-[0.22em] text-muted-foreground uppercase backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4d8cff]" />
              SERVIÇOS
            </span>

            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
              Seu negócio com mais presença, gestão e{" "}
              <span className="text-[#4d8cff]">resultado digital</span>
            </h1>

            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Criamos soluções sob medida para negócios que querem organizar
              processos, vender melhor e fortalecer sua presença digital.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
