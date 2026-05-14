import { randomUUID } from "node:crypto";
import { getDb } from "@/lib/db";
import type {
  BlogPost,
  CreateBlogPostInput,
  UpdateBlogPostInput,
} from "@/types/blog";
import {
  estimateReadTime,
  generateSlug,
  generateSummary,
  mapRow,
} from "@/utils/blog";

export function getAllPosts(): BlogPost[] {
  const db = getDb();
  const rows = db
    .prepare(
      "SELECT * FROM blog_posts WHERE published = 1 ORDER BY created_at DESC",
    )
    .all() as Record<string, unknown>[];
  return rows.map(mapRow);
}

export function getAllPostsAdmin(): BlogPost[] {
  const db = getDb();
  const rows = db
    .prepare("SELECT * FROM blog_posts ORDER BY created_at DESC")
    .all() as Record<string, unknown>[];
  return rows.map(mapRow);
}

export function getPostById(id: string): BlogPost | null {
  const db = getDb();
  const row = db
    .prepare("SELECT * FROM blog_posts WHERE id = ? AND published = 1")
    .get(id) as Record<string, unknown> | undefined;
  return row ? mapRow(row) : null;
}

export function getPostByIdAdmin(id: string): BlogPost | null {
  const db = getDb();
  const row = db.prepare("SELECT * FROM blog_posts WHERE id = ?").get(id) as
    | Record<string, unknown>
    | undefined;
  return row ? mapRow(row) : null;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const db = getDb();
  const row = db
    .prepare("SELECT * FROM blog_posts WHERE slug = ? AND published = 1")
    .get(slug) as Record<string, unknown> | undefined;
  return row ? mapRow(row) : null;
}

export function createPost(input: CreateBlogPostInput): BlogPost {
  const db = getDb();
  const id = randomUUID();
  const slug = generateSlug(input.title);
  const summary = generateSummary(input.content_md);
  const readTime = estimateReadTime(input.content_md);

  db.prepare(
    `INSERT INTO blog_posts (id, slug, title, content_md, summary, cover_image, read_time, author_name, author_role, author_photo, published)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  ).run(
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
  );

  return getPostByIdAdmin(id) as BlogPost;
}

export function updatePost(
  id: string,
  input: UpdateBlogPostInput,
): BlogPost | null {
  const db = getDb();
  const existing = db
    .prepare("SELECT * FROM blog_posts WHERE id = ?")
    .get(id) as Record<string, unknown> | undefined;

  if (!existing) return null;

  const slug =
    input.title && input.title !== (existing.title as string)
      ? generateSlug(input.title)
      : (existing.slug as string);
  const summary = input.content_md
    ? generateSummary(input.content_md)
    : (existing.summary as string);
  const readTime = input.content_md
    ? estimateReadTime(input.content_md)
    : (existing.read_time as number);

  db.prepare(
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
  ).run(
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
  );

  return getPostByIdAdmin(id);
}

export function deletePost(id: string): boolean {
  const db = getDb();
  const result = db.prepare("DELETE FROM blog_posts WHERE id = ?").run(id);
  return result.changes > 0;
}

export function getAllSlugs(): Pick<BlogPost, "id" | "slug" | "updated_at">[] {
  const db = getDb();
  return db
    .prepare("SELECT id, slug, updated_at FROM blog_posts WHERE published = 1")
    .all() as Pick<BlogPost, "id" | "slug" | "updated_at">[];
}
