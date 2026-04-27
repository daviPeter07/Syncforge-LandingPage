"use client";

import { useState } from "react";

export interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_STATE: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function useContactForm() {
  const [form, setForm] = useState<ContactFormState>(INITIAL_STATE);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const update = <K extends keyof ContactFormState>(
    key: K,
    value: ContactFormState[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Mock: integração real pode ser plugada aqui (API route, e-mail, etc.)
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    setForm(INITIAL_STATE);
    setTimeout(() => setStatus("idle"), 3000);
  };

  return { form, status, update, submit };
}
