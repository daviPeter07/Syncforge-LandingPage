import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email-service";
import type { ContactFormData } from "@/types/contact-form";

export const runtime = "nodejs";

type ContactRequestBody = Partial<ContactFormData>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = extractContactBody(await request.json());
    const validation = validateAndNormalize(body);

    if (!validation.ok) {
      return NextResponse.json(
        { message: validation.message },
        { status: 400 },
      );
    }

    await sendContactEmail(validation.payload);

    return NextResponse.json({ message: "Mensagem enviada com sucesso." });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json(
      { message: "Nao foi possivel enviar sua mensagem agora." },
      { status: 500 },
    );
  }
}

const extractContactBody = (value: unknown): ContactRequestBody => {
  if (!value || typeof value !== "object") {
    return {};
  }

  const body = value as Record<string, unknown>;

  return {
    name: typeof body.name === "string" ? body.name : undefined,
    email: typeof body.email === "string" ? body.email : undefined,
    subject: typeof body.subject === "string" ? body.subject : undefined,
    message: typeof body.message === "string" ? body.message : undefined,
  };
};

const validateAndNormalize = (body: ContactRequestBody) => {
  const name = body.name?.trim();
  const email = body.email?.trim();
  const subject = body.subject?.trim();
  const message = body.message?.trim();

  if (!name) {
    return { ok: false as const, message: "Nome e obrigatorio." };
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    return { ok: false as const, message: "Email invalido." };
  }

  if (!subject) {
    return { ok: false as const, message: "Assunto e obrigatorio." };
  }

  if (!message) {
    return { ok: false as const, message: "Mensagem e obrigatoria." };
  }

  return {
    ok: true as const,
    payload: {
      name,
      email,
      subject,
      message,
    } satisfies ContactFormData,
  };
};
