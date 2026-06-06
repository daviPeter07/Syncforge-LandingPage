import { isValidElement, type ReactNode } from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { cn, extractTableOfContents, slugifyHeading } from "@/utils";

interface BlogContentProps {
  content: string;
}

function getTextFromChildren(children: ReactNode): string {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }

  if (Array.isArray(children)) {
    return children.map(getTextFromChildren).join("");
  }

  if (isValidElement<{ children?: ReactNode }>(children)) {
    return getTextFromChildren(children.props.children);
  }

  return "";
}

export function BlogContent({ content }: BlogContentProps) {
  const headings = extractTableOfContents(content);
  const fallbackSlugCounts = new Map<string, number>();
  let headingIndex = 0;

  const getHeadingId = (level: 2 | 3, children: ReactNode) => {
    const nextHeading = headings[headingIndex];

    if (nextHeading && nextHeading.level === level) {
      headingIndex += 1;
      return nextHeading.id;
    }

    const fallbackText = getTextFromChildren(children);
    const baseId = slugifyHeading(fallbackText) || `secao-${headingIndex + 1}`;
    const occurrences = fallbackSlugCounts.get(baseId) ?? 0;
    fallbackSlugCounts.set(baseId, occurrences + 1);

    return occurrences === 0 ? baseId : `${baseId}-${occurrences + 1}`;
  };

  return (
    <div className="prose prose-sm dark:prose-invert max-w-none break-words [overflow-wrap:anywhere] sm:prose-base prose-headings:text-foreground prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-balance prose-h1:mt-10 prose-h1:mb-6 prose-h1:text-4xl prose-h1:leading-tight prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-3xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-2xl prose-p:my-6 prose-p:text-foreground prose-p:leading-8 prose-p:text-justify prose-p:[hyphens:auto] prose-a:text-[#4d8cff] prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:overflow-x-auto prose-img:my-8 prose-img:rounded-xl prose-img:ring-1 prose-img:ring-foreground/10 prose-img:mx-auto prose-img:max-h-[32rem] prose-img:h-auto prose-img:w-full prose-img:object-contain prose-blockquote:border-l-[#4d8cff] prose-blockquote:text-muted-foreground prose-blockquote:my-6 prose-li:text-foreground prose-li:text-justify prose-li:leading-8 prose-li:[hyphens:auto] prose-hr:my-10 prose-hr:border-border">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={{
          h2: ({ children, className, ...props }) => (
            <h2
              {...props}
              id={getHeadingId(2, children)}
              className={cn("scroll-mt-28", className)}
            >
              {children}
            </h2>
          ),
          h3: ({ children, className, ...props }) => (
            <h3
              {...props}
              id={getHeadingId(3, children)}
              className={cn("scroll-mt-28", className)}
            >
              {children}
            </h3>
          ),
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
