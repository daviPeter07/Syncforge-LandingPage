"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import type { ContactFormData } from "@/types/contact-form";

export type ContactFormState = ContactFormData;

const INITIAL_STATE: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function useContactForm() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormState>({
    defaultValues: INITIAL_STATE,
    mode: "onTouched",
  });

  const onSubmit = async (form: ContactFormState) => {
    setStatus("submitting");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = (await response.json()) as { message?: string };
        throw new Error(data.message ?? "Falha ao enviar mensagem.");
      }

      setStatus("success");
      reset(INITIAL_STATE);
      setTimeout(() => setStatus("idle"), 3000);
    } catch (submitError) {
      setStatus("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Falha ao enviar mensagem.",
      );
    }
  };

  return {
    register,
    errors,
    status,
    error,
    submit: handleSubmit(onSubmit),
  };
}
