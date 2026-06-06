import type { BlogPostHeading } from "@/types/blog";
import { cn } from "@/utils";

interface BlogTableOfContentsProps {
  items: BlogPostHeading[];
}

export function BlogTableOfContents({ items }: BlogTableOfContentsProps) {
  if (items.length === 0) return null;

  return (
    <aside className="rounded-[1.75rem] border border-border/50 bg-background/70 p-5 backdrop-blur-sm">
      <div className="border-b border-border/60 pb-4">
        <h2 className="mt-2 text-base font-semibold tracking-[-0.02em] text-foreground">
          Neste artigo
        </h2>

        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          {items.length} topicos para navegar rapido por este post.
        </p>
      </div>

      <nav aria-label="Sumario do artigo" className="mt-4">
        <ul className="space-y-1.5 border-l border-border/60 pl-2">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "block rounded-lg px-3 py-2 text-[0.95rem] leading-6 text-muted-foreground transition-colors hover:bg-muted/40 hover:text-foreground",
                  item.level === 3 &&
                    "relative pl-7 text-[0.9rem] text-muted-foreground/90",
                )}
              >
                {item.level === 3 && (
                  <span className="absolute top-4.5 left-3 h-1 w-1 rounded-full bg-[#4d8cff]/70" />
                )}
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
