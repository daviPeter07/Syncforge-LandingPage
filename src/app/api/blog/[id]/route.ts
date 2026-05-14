import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import {
  deletePost,
  getPostById,
  getPostByIdAdmin,
  updatePost,
} from "@/lib/blog";
import type { UpdateBlogPostInput } from "@/types/blog";

export const runtime = "nodejs";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const isAdmin = searchParams.get("admin") === "true";

    if (isAdmin) {
      const authError = requireAdmin(request);
      if (authError) return authError;
    }

    const post = isAdmin ? getPostByIdAdmin(id) : getPostById(id);

    if (!post) {
      return NextResponse.json(
        { message: "Post não encontrado." },
        { status: 404 },
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Failed to fetch blog post", error);
    return NextResponse.json(
      { message: "Erro ao carregar post." },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const authError = requireAdmin(request);
    if (authError) return authError;

    const { id } = await params;
    const body = extractUpdateBody(await request.json());

    const post = updatePost(id, body);

    if (!post) {
      return NextResponse.json(
        { message: "Post não encontrado." },
        { status: 404 },
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Failed to update blog post", error);
    return NextResponse.json(
      { message: "Erro ao atualizar post." },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const authError = requireAdmin(request);
    if (authError) return authError;

    const { id } = await params;
    const deleted = deletePost(id);

    if (!deleted) {
      return NextResponse.json(
        { message: "Post não encontrado." },
        { status: 404 },
      );
    }

    return NextResponse.json({ message: "Post removido com sucesso." });
  } catch (error) {
    console.error("Failed to delete blog post", error);
    return NextResponse.json(
      { message: "Erro ao remover post." },
      { status: 500 },
    );
  }
}

type UpdateBody = Partial<UpdateBlogPostInput>;

function extractUpdateBody(value: unknown): UpdateBody {
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
    slug: typeof body.slug === "string" ? body.slug : undefined,
  };
}
