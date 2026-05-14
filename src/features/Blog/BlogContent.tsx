import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none sm:prose-base prose-headings:text-foreground prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-foreground prose-p:leading-relaxed prose-a:text-[#4d8cff] prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-img:rounded-xl prose-img:ring-1 prose-img:ring-foreground/10 prose-blockquote:border-l-[#4d8cff] prose-blockquote:text-muted-foreground prose-li:text-foreground prose-hr:border-border">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
      >
        {content}
      </Markdown>
    </div>
  );
}
