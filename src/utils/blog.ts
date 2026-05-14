import type { BlogPost } from "@/types/blog";

export const stripMarkdown = (md: string): string => {
  return md
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[([^\]]*)\]\(.*?\)/g, "$1")
    .replace(/[#*`~>\-_|[\]]/g, "")
    .replace(/\n{2,}/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

export function computeReadingTime(content: string): number {
  if (!content || typeof content !== "string") return 1;
  const chars = content.trim().length;
  const minutes = Math.ceil(chars / 1000);
  return Math.max(1, minutes);
}

export const generateSummary = (contentMd: string, maxLength = 280): string => {
  const plain = stripMarkdown(contentMd);
  if (plain.length <= maxLength) return plain;
  return `${plain.slice(0, maxLength).trim()}...`;
};

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 200);
};

export const mapRow = (row: Record<string, unknown>): BlogPost => {
  return {
    id: row.id as string,
    slug: row.slug as string,
    title: row.title as string,
    content_md: row.content_md as string,
    summary: (row.summary as string) || null,
    cover_image: (row.cover_image as string) || null,
    read_time: row.read_time as number,
    author_name: row.author_name as string,
    author_role: row.author_role as string,
    author_photo: (row.author_photo as string) || null,
    published: Boolean(row.published),
    created_at: row.created_at as string,
    updated_at: row.updated_at as string,
  };
};
