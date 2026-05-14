import { NextResponse } from "next/server";

export function requireAdmin(request: Request): NextResponse | null {
  const token = process.env.BLOG_API_TOKEN;

  if (!token) {
    return NextResponse.json(
      { message: "Token de admin não configurado no servidor." },
      { status: 500 },
    );
  }

  const authHeader = request.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json(
      { message: "Token de acesso não fornecido." },
      { status: 401 },
    );
  }

  const providedToken = authHeader.slice("Bearer ".length);

  if (providedToken !== token) {
    return NextResponse.json(
      { message: "Token de acesso inválido." },
      { status: 401 },
    );
  }

  return null;
}
