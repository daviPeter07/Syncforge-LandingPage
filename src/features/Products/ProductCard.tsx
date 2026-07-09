import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/utils";

interface ProductProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  href: string;
}

export function ProductCard({ product }: { product: ProductProps }) {
  return (
    <a
      href={product.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Acessar plataforma ${product.title}`}
      className="group block rounded-[1.7rem] border border-white/10 bg-card/55 p-3 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#4d8cff]/35 hover:bg-card/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d8cff]/60 flex flex-col h-full"
    >
      <article className="flex flex-col h-full">
        <div className="relative aspect-video w-full overflow-hidden rounded-[1.2rem] border border-white/10 bg-black/40">
          <Image
            src={product.imageSrc}
            alt={`Interface do produto ${product.title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col flex-1 px-1 pt-5 pb-2">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
            {product.title}
          </h2>
          <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-[0.96rem] flex-1">
            {product.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#4d8cff]/20 bg-[#4d8cff]/8 px-3 py-1 text-xs font-medium text-[#4d8cff]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/8 pt-4 mt-auto">
            <span className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
              Produto Syncforge
            </span>

            <span
              className={cn(
                buttonVariants({ size: "sm" }),
                "rounded-full px-4",
              )}
            >
              Acessar
            </span>
          </div>
        </div>
      </article>
    </a>
  );
}
