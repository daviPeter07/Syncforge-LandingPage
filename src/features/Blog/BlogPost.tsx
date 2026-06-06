import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost as BlogPostType } from "@/types/blog";
import { cn, extractTableOfContents } from "@/utils";
import { BlogContent } from "./BlogContent";
import { BlogTableOfContents } from "./BlogTableOfContents";
import { ShareButton } from "./ShareButton";

interface BlogPostProps {
  post: BlogPostType;
}

export function BlogPost({ post }: BlogPostProps) {
  const tableOfContents = extractTableOfContents(post.content_md);
  const hasTableOfContents = tableOfContents.length > 0;

  return (
    <article className="mx-auto w-full max-w-7xl px-6 py-12 sm:py-16 lg:py-20">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Voltar para o blog
      </Link>

      <header className="mx-auto mb-10 max-w-3xl">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="size-3.5" />
            {new Date(post.created_at).toLocaleDateString("pt-BR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" />
            {post.read_time} min de leitura
          </span>
        </div>

        <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
          {post.title}
        </h1>

        <div className="mt-6 flex items-center gap-3">
          <div className="size-10 overflow-hidden rounded-full bg-muted ring-1 ring-foreground/10">
            {post.author_photo ? (
              <Image
                src={post.author_photo}
                alt={post.author_name}
                width={40}
                height={40}
                className="size-full object-cover"
              />
            ) : (
              <div className="flex size-full items-center justify-center text-sm font-medium text-muted-foreground">
                {post.author_name.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">
              {post.author_name}
            </p>
            <p className="text-xs text-muted-foreground">{post.author_role}</p>
          </div>
        </div>
      </header>

      {post.cover_image && (
        <div className="mx-auto mb-10 max-w-3xl overflow-hidden rounded-xl ring-1 ring-foreground/10">
          <Image
            src={post.cover_image}
            alt={post.title}
            width={1200}
            height={675}
            className="w-full object-cover"
          />
        </div>
      )}

      <div
        className={cn(
          "mx-auto",
          hasTableOfContents
            ? "grid gap-12 xl:grid-cols-[15rem_minmax(0,70ch)_15rem] xl:justify-center 2xl:grid-cols-[17rem_minmax(0,70ch)_17rem]"
            : "max-w-[70ch]",
        )}
      >
        {hasTableOfContents && (
          <div className="hidden xl:block">
            <div className="sticky top-28">
              <BlogTableOfContents items={tableOfContents} />
            </div>
          </div>
        )}

        <div className="min-w-0">
          <div className="mx-auto w-full max-w-[70ch]">
            <BlogContent content={post.content_md} />
          </div>
        </div>
      </div>

      <footer className="mx-auto mt-12 flex max-w-3xl items-center justify-between border-t border-border pt-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Voltar
        </Link>

        <ShareButton postId={post.id} />
      </footer>
    </article>
  );
}
