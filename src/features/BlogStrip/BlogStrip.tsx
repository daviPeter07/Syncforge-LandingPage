import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export function BlogStrip() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="border-t border-border/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-[10.5px] font-medium tracking-[0.22em] text-muted-foreground uppercase backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4d8cff]" />
            BLOG
          </span>

          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Últimos do blog
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Artigos sobre tecnologia, IA e desenvolvimento de software.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group/card flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transition-all duration-300 hover:ring-[#4d8cff]/30 hover:shadow-lg hover:shadow-[#4d8cff]/5"
            >
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="size-3" />
                  <span>
                    {new Date(post.created_at).toLocaleDateString("pt-BR")}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                  <Clock className="size-3" />
                  <span>{post.read_time} min</span>
                </div>

                <h3 className="text-base font-semibold leading-snug text-card-foreground transition-colors group-hover/card:text-[#4d8cff]">
                  {post.title}
                </h3>

                {post.summary && (
                  <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {post.summary}
                  </p>
                )}

                <div className="mt-auto flex items-center gap-1 pt-2 text-xs font-medium text-[#4d8cff]">
                  Ler mais
                  <ArrowRight className="size-3 transition-transform group-hover/card:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Ver todos os artigos
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
