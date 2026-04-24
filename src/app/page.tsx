"use client";
import { Hammer } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import Particles from "@/components/Particles";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="fixed inset-0 -z-10">
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={["#0118f5"]}
          moveParticlesOnHover={false}
          particleHoverFactor={1}
          alphaParticles={false}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
        />
      </div>
      <main className="flex min-h-svh items-center justify-center px-6 py-16 text-white pt-24">
        <section id="inicio" className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/4 px-4 py-3 backdrop-blur-sm">
            <span className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/6">
              <Hammer className="size-4" />
            </span>
            <span className="text-xs font-medium tracking-[0.26em] text-white/70 uppercase">
              Syncforge em construção
            </span>
          </div>

          <p className="mt-10 text-xs font-medium tracking-[0.22em] text-white/42 uppercase sm:text-sm">
            SyncForge
          </p>

          <h1 className="mt-4 max-w-3xl text-3xl leading-[1.05] font-semibold tracking-tighter sm:text-5xl lg:text-[4rem]">
            Nosso site está em construção.
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/68 sm:text-base">
            A SyncForge oferece serviços digitais para empresas e pessoas
            físicas, com soluções desenvolvidas de acordo com cada necessidade.
          </p>

          <div className="mt-12 h-px w-full max-w-3xl bg-white/10" />

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm text-white/78 sm:text-base">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Desenvolvimento de software
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Design
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Edição de vídeo
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Marketing
            </span>
          </div>
        </section>
      </main>
    </>
  );
}
