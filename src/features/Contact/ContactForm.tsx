"use client";

import { Send, Loader2, Check } from "lucide-react";
import { useContactForm } from "@/hooks/use-contact-form";

export function ContactForm() {
  const { form: values, status, update: handleChange, submit: handleSubmit } =
    useContactForm();
  const isLoading = status === "submitting";
  const isSuccess = status === "success";

  return (
    <div className="rounded-2xl border border-border/40 bg-card/60 p-6 backdrop-blur-sm sm:p-8">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground">Envie uma mensagem</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Preencha o formulário abaixo e entraremos em contato o mais breve
          possível.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Field
            id="name"
            label="Nome"
            placeholder="Seu nome completo"
            value={values.name}
            onChange={(v) => handleChange("name", v)}
            required
          />
          <Field
            id="email"
            label="Email"
            type="email"
            placeholder="seu@email.com"
            value={values.email}
            onChange={(v) => handleChange("email", v)}
            required
          />
        </div>

        <Field
          id="subject"
          label="Assunto"
          placeholder="Assunto da mensagem"
          value={values.subject}
          onChange={(v) => handleChange("subject", v)}
          required
        />

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-foreground"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Descreva seu projeto ou dúvida..."
            value={values.message}
            onChange={(e) => handleChange("message", e.target.value)}
            required
            className="w-full resize-y rounded-lg border border-border/60 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-[#4d8cff]/60 focus:ring-2 focus:ring-[#4d8cff]/20"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#4d8cff] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#4d8cff]/20 transition hover:bg-[#3d7aee] disabled:cursor-not-allowed disabled:opacity-70 dark:text-[#00072d]"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : isSuccess ? (
            <Check className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Send
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          )}
          {isSuccess ? "Mensagem enviada" : "Enviar Mensagem"}
        </button>
      </form>
    </div>
  );
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}

function Field({
  id,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required,
}: FieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-semibold text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full rounded-lg border border-border/60 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-[#4d8cff]/60 focus:ring-2 focus:ring-[#4d8cff]/20"
      />
    </div>
  );
}
