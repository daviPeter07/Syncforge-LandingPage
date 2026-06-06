import type { BlogPostHeading } from "@/types/blog";
import { cn } from "@/utils";

interface BlogTableOfContentsProps {
  items: BlogPostHeading[];
}

export function BlogTableOfContents({ items }: BlogTableOfContentsProps) {
  if (items.length === 0) return null;

  return (
    <aside className="rounded-2xl border border-border/60 bg-background/70 p-5 backdrop-blur-sm">
      <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
        Neste artigo
      </p>

      <nav aria-label="Sumario do artigo" className="mt-4">
        <ul className="space-y-1.5">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "block rounded-md px-2 py-1.5 text-sm leading-6 text-muted-foreground transition-colors hover:text-foreground",
                  item.level === 3 && "pl-5 text-[0.92rem]",
                )}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
