import { randomUUID } from "node:crypto";
import { execute, query } from "@/lib/db";
import type {
  BlogPost,
  CreateBlogPostInput,
  UpdateBlogPostInput,
} from "@/types/blog";
import {
  computeReadingTime,
  generateSlug,
  generateSummary,
  mapRow,
} from "@/utils/blog";

export async function getAllPosts(): Promise<BlogPost[]> {
  const rows = await query<Record<string, unknown>>(
    "SELECT * FROM blog_posts WHERE published = 1 ORDER BY created_at DESC",
  );
  return rows.map(mapRow);
}

export async function getAllPostsAdmin(): Promise<BlogPost[]> {
  const rows = await query<Record<string, unknown>>(
    "SELECT * FROM blog_posts ORDER BY created_at DESC",
  );
  return rows.map(mapRow);
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  const rows = await query<Record<string, unknown>>(
    "SELECT * FROM blog_posts WHERE id = ? AND published = 1",
    [id],
  );
  return rows[0] ? mapRow(rows[0]) : null;
}

export async function getPostByIdAdmin(id: string): Promise<BlogPost | null> {
  const rows = await query<Record<string, unknown>>(
    "SELECT * FROM blog_posts WHERE id = ?",
    [id],
  );
  return rows[0] ? mapRow(rows[0]) : null;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const rows = await query<Record<string, unknown>>(
    "SELECT * FROM blog_posts WHERE slug = ? AND published = 1",
    [slug],
  );
  return rows[0] ? mapRow(rows[0]) : null;
}

export async function createPost(
  input: CreateBlogPostInput,
): Promise<BlogPost> {
  const id = randomUUID();
  const slug = generateSlug(input.title);
  const summary = generateSummary(input.content_md);
  const readTime = computeReadingTime(input.content_md);

  await execute(
    `INSERT INTO blog_posts (id, slug, title, content_md, summary, cover_image, read_time, author_name, author_role, author_photo, published)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      id,
      slug,
      input.title,
      input.content_md,
      summary,
      input.cover_image ?? null,
      readTime,
      input.author_name,
      input.author_role,
      input.author_photo ?? null,
      input.published ? 1 : 0,
    ],
  );

  return (await getPostByIdAdmin(id)) as BlogPost;
}

export async function updatePost(
  id: string,
  input: UpdateBlogPostInput,
): Promise<BlogPost | null> {
  const existing = await getPostByIdAdmin(id);
  if (!existing) return null;

  const slug =
    input.title && input.title !== existing.title
      ? generateSlug(input.title)
      : existing.slug;
  const _contentMd = input.content_md ?? existing.content_md;
  const summary = input.content_md
    ? generateSummary(input.content_md)
    : existing.summary;
  const readTime = input.content_md
    ? computeReadingTime(input.content_md)
    : existing.read_time;

  await execute(
    `UPDATE blog_posts
     SET slug = ?,
         title = COALESCE(?, title),
         content_md = COALESCE(?, content_md),
         summary = ?,
         cover_image = COALESCE(?, cover_image),
         read_time = ?,
         author_name = COALESCE(?, author_name),
         author_role = COALESCE(?, author_role),
         author_photo = COALESCE(?, author_photo),
         published = COALESCE(?, published),
         updated_at = datetime('now')
     WHERE id = ?`,
    [
      slug,
      input.title ?? null,
      input.content_md ?? null,
      summary,
      input.cover_image ?? null,
      readTime,
      input.author_name ?? null,
      input.author_role ?? null,
      input.author_photo ?? null,
      input.published !== undefined ? (input.published ? 1 : 0) : null,
      id,
    ],
  );

  return getPostByIdAdmin(id);
}

export async function deletePost(id: string): Promise<boolean> {
  const result = await execute("DELETE FROM blog_posts WHERE id = ?", [id]);
  return result.changes > 0;
}

export async function getAllSlugs(): Promise<
  Pick<BlogPost, "id" | "slug" | "updated_at">[]
> {
  return query<Pick<BlogPost, "id" | "slug" | "updated_at">>(
    "SELECT id, slug, updated_at FROM blog_posts WHERE published = 1",
  );
}
