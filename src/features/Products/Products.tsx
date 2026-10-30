"use client";

import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PRODUCTS } from "@/constants/products";
import { ProductCard } from "./ProductCard";

export function Products() {
  return (
    <section id="produtos" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Produtos"
          title={
            <>
              Sistemas prontos para{" "}
              <span className="text-[#4d8cff]">facilitar o seu dia a dia</span>
            </>
          }
          description="Além dos projetos sob medida, criamos nossos próprios produtos para resolver problemas comuns de empresas e pessoas."
        />

        {/* Flex centralizado em vez de grid: com poucos produtos não sobra coluna vazia. */}
        <div className="mt-14 flex flex-wrap justify-center gap-5">
          {PRODUCTS.map((product, i) => (
            <Reveal
              key={product.id}
              delay={i * 0.08}
              className="w-full md:w-[calc(50%-0.625rem)] xl:w-[calc((100%-2.5rem)/3)]"
            >
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
