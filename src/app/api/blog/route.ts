import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { createPost, getAllPosts, getAllPostsAdmin } from "@/lib/blog";
import type { CreateBlogPostInput } from "@/types/blog";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const isAdmin = searchParams.get("admin") === "true";

    if (isAdmin) {
      const authError = requireAdmin(request);
      if (authError) return authError;
    }

    const posts = isAdmin ? getAllPostsAdmin() : getAllPosts();

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Failed to fetch blog posts", error);
    return NextResponse.json(
      { message: "Erro ao carregar posts." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const authError = requireAdmin(request);
    if (authError) return authError;

    const body = extractCreateBody(await request.json());
    const validation = validateCreateBody(body);

    if (!validation.ok) {
      return NextResponse.json(
        { message: validation.message },
        { status: 400 },
      );
    }

    const post = createPost(validation.payload);

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Failed to create blog post", error);
    return NextResponse.json(
      { message: "Erro ao criar post." },
      { status: 500 },
    );
  }
}

type CreateBody = Partial<CreateBlogPostInput>;

function extractCreateBody(value: unknown): CreateBody {
  if (!value || typeof value !== "object") return {};

  const body = value as Record<string, unknown>;

  return {
    title: typeof body.title === "string" ? body.title : undefined,
    content_md:
      typeof body.content_md === "string" ? body.content_md : undefined,
    cover_image:
      typeof body.cover_image === "string" ? body.cover_image : undefined,
    author_name:
      typeof body.author_name === "string" ? body.author_name : undefined,
    author_role:
      typeof body.author_role === "string" ? body.author_role : undefined,
    author_photo:
      typeof body.author_photo === "string" ? body.author_photo : undefined,
    published: typeof body.published === "boolean" ? body.published : undefined,
  };
}

function validateCreateBody(body: CreateBody) {
  const title = body.title?.trim();
  const contentMd = body.content_md?.trim();
  const authorName = body.author_name?.trim();
  const authorRole = body.author_role?.trim();

  if (!title) {
    return { ok: false as const, message: "Título é obrigatório." };
  }

  if (!contentMd) {
    return { ok: false as const, message: "Conteúdo é obrigatório." };
  }

  if (!authorName) {
    return { ok: false as const, message: "Nome do autor é obrigatório." };
  }

  if (!authorRole) {
    return { ok: false as const, message: "Cargo do autor é obrigatório." };
  }

  return {
    ok: true as const,
    payload: {
      title,
      content_md: contentMd,
      cover_image: body.cover_image?.trim() || undefined,
      author_name: authorName,
      author_role: authorRole,
      author_photo: body.author_photo?.trim() || undefined,
      published: body.published ?? false,
    } satisfies CreateBlogPostInput,
  };
}
