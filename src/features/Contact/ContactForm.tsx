"use client";

import { Send, Loader2, Check } from "lucide-react";
import { useContactForm } from "@/hooks/use-contact-form";

export function ContactForm() {
  const { form: values, status, update: handleChange, submit: handleSubmit } =
    useContactForm();
  const isLoading = status === "submitting";
  const isSuccess = status === "success";

  return (
    <div className="rounded-2xl border border-white/10 bg-[#000A3A]/60 p-6 backdrop-blur-sm sm:p-8">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">Envie uma mensagem</h3>
        <p className="mt-1 text-sm text-slate-400">
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
            className="block text-sm font-semibold text-white"
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
            className="w-full resize-y rounded-lg border border-white/10 bg-[#00072D]/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="group flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
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
      <label htmlFor={id} className="block text-sm font-semibold text-white">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full rounded-lg border border-white/10 bg-[#00072D]/80 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20"
      />
    </div>
  );
}
