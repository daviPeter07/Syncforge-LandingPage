import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-none break-words [overflow-wrap:anywhere] sm:prose-base prose-headings:text-foreground prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-balance prose-p:my-5 prose-p:text-foreground prose-p:leading-8 prose-p:text-justify prose-p:[hyphens:auto] prose-a:text-[#4d8cff] prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:overflow-x-auto prose-img:my-8 prose-img:rounded-xl prose-img:ring-1 prose-img:ring-foreground/10 prose-img:mx-auto prose-img:max-h-[32rem] prose-img:h-auto prose-img:w-full prose-img:object-contain prose-blockquote:border-l-[#4d8cff] prose-blockquote:text-muted-foreground prose-li:text-foreground prose-li:text-justify prose-li:leading-8 prose-li:[hyphens:auto] prose-hr:border-border">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
      >
        {content}
      </Markdown>
    </div>
  );
}
