import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";

export const runtime = "nodejs";

const validTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const maxFileSize = 5 * 1024 * 1024;

function sanitizeFileBaseName(fileName: string): string {
  const nameWithoutExtension = fileName.replace(/\.[^/.]+$/, "");

  return (
    nameWithoutExtension
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9_-]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80) || "imagem"
  );
}

export async function POST(request: Request) {
  try {
    const authError = requireAdmin(request);
    if (authError) return authError;

    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { message: "Arquivo não enviado." },
        { status: 400 },
      );
    }

    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { message: "Formato de imagem inválido. Use JPEG, PNG, WebP ou GIF." },
        { status: 400 },
      );
    }

    if (file.size > maxFileSize) {
      return NextResponse.json(
        { message: "Imagem muito grande. Máximo 5MB." },
        { status: 400 },
      );
    }

    const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
    const blobStoreId = process.env.BLOB_STORE_ID;
    const oidcToken = process.env.VERCEL_OIDC_TOKEN;

    if (!blobToken && !oidcToken) {
      return NextResponse.json(
        {
          message:
            "Configure BLOB_READ_WRITE_TOKEN localmente ou conecte o Blob Store ao projeto na Vercel.",
        },
        { status: 500 },
      );
    }

    const inferredExtension =
      file.name.split(".").pop() || file.type.split("/")[1] || "png";
    const pathname = `blog/${Date.now()}-${sanitizeFileBaseName(file.name)}.${inferredExtension}`;

    const blob = await put(pathname, file, {
      access: "public",
      addRandomSuffix: true,
      contentType: file.type,
      ...(blobToken ? { token: blobToken } : {}),
      ...(!blobToken && blobStoreId ? { storeId: blobStoreId } : {}),
    });

    return NextResponse.json({ url: blob.url }, { status: 201 });
  } catch (error) {
    console.error("Failed to upload image", error);
    return NextResponse.json(
      { message: "Erro ao fazer upload da imagem." },
      { status: 500 },
    );
  }
}
