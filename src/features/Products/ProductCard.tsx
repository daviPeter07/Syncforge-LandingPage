import { ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { PRODUCT_STATUS_LABELS } from "@/constants/products";
import type { ProductItem } from "@/types/products";
import { cn } from "@/utils";

export function ProductCard({ product }: { product: ProductItem }) {
  const isAvailable = product.status === "available";

  return (
    <a
      href={product.cta.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${product.cta.label}: ${product.name}`}
      className="group flex h-full flex-col rounded-[1.7rem] border border-border/70 bg-card/80 p-3 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#4d8cff]/45 hover:shadow-[0_24px_60px_rgba(36,89,245,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d8cff]/60 dark:border-white/10 dark:bg-card/55 dark:shadow-[0_20px_70px_rgba(0,0,0,0.35)] dark:hover:bg-card/70"
    >
      <article className="flex h-full flex-col">
        <div className="relative overflow-hidden rounded-[1.2rem]">
          {product.image ? (
            <div className="relative aspect-video w-full overflow-hidden rounded-[1.2rem] border border-border/60 bg-black/40 dark:border-white/10">
              <Image
                src={product.image.src}
                alt={product.image.alt}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ) : (
            <ImagePlaceholder
              icon={product.icon}
              className="aspect-video w-full transition-transform duration-500 group-hover:scale-105"
            />
          )}

          <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
            <span className="relative flex size-2">
              {isAvailable ? null : (
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-amber-400 opacity-75" />
              )}
              <span
                className={cn(
                  "relative inline-flex size-2 rounded-full",
                  isAvailable ? "bg-emerald-400" : "bg-amber-400",
                )}
              />
            </span>
            {PRODUCT_STATUS_LABELS[product.status]}
          </span>
        </div>

        <div className="flex flex-1 flex-col px-2 pt-5 pb-2">
          <p className="text-[11px] font-semibold tracking-[0.16em] text-[#2459f5] uppercase dark:text-[#4d8cff]">
            {product.category}
          </p>
          <h3 className="mt-1.5 text-2xl font-semibold tracking-[-0.03em] text-foreground">
            {product.name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
            {product.summary}
          </p>

          <ul className="mt-5 mb-6 space-y-2">
            {product.tags.map((tag) => (
              <li
                key={tag}
                className="flex items-center gap-2.5 text-sm font-medium text-foreground"
              >
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#4d8cff]/12 text-[#2459f5] dark:text-[#4d8cff]">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {tag}
              </li>
            ))}
          </ul>

          <span className="mt-auto inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#2459f5] text-sm font-semibold text-white transition-colors group-hover:bg-[#1d4bd6]">
            {product.cta.label}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </article>
    </a>
  );
}
