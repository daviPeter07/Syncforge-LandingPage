import { ArrowUpRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="group/card flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transition-all duration-300 hover:ring-[#4d8cff]/30 hover:shadow-lg hover:shadow-[#4d8cff]/5"
    >
      {/*se nao tiver imagem bota inicial da empresa*/}
      <div className="aspect-video w-full overflow-hidden bg-muted">
        {post.cover_image ? (
          <Image
            src={post.cover_image}
            alt={post.title}
            width={1200}
            height={675}
            className="size-full object-cover transition-transform duration-500 group-hover/card:scale-105"
          />
        ) : (
          <div className="flex size-full items-center justify-center">
            <span className="text-4xl font-bold text-muted-foreground/20">
              SF
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{post.author_name}</span>
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
          <ArrowUpRight className="size-3 transition-transform group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
