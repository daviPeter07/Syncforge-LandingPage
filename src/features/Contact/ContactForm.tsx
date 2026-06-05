"use client";

import { Check, Loader2, Send } from "lucide-react";
import { useContactForm } from "@/hooks/use-contact-form";

export function ContactForm() {
  const {
    register,
    errors,
    status,
    error,
    submit: handleSubmit,
  } = useContactForm();
  const isLoading = status === "submitting";
  const isSuccess = status === "success";

  return (
    <div className="rounded-2xl border border-border/40 bg-card/60 p-6 backdrop-blur-sm sm:p-8">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground">
          Envie uma mensagem
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Preencha o formulário abaixo e retornaremos com um caminho claro para
          começar.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-foreground"
            >
              Nome
            </label>
            <input
              id="name"
              type="text"
              placeholder="Seu nome completo"
              {...register("name", { required: "Nome e obrigatorio." })}
              className="w-full rounded-lg border border-border/60 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-[#4d8cff]/60 focus:ring-2 focus:ring-[#4d8cff]/20"
            />
            {errors.name ? (
              <p className="text-sm font-medium text-red-500" role="alert">
                {errors.name.message}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-foreground"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              {...register("email", {
                required: "Email e obrigatorio.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email invalido.",
                },
              })}
              className="w-full rounded-lg border border-border/60 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-[#4d8cff]/60 focus:ring-2 focus:ring-[#4d8cff]/20"
            />
            {errors.email ? (
              <p className="text-sm font-medium text-red-500" role="alert">
                {errors.email.message}
              </p>
            ) : null}
          </div>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="subject"
            className="block text-sm font-semibold text-foreground"
          >
            Assunto
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Assunto da mensagem"
            {...register("subject", {
              required: "Assunto e obrigatorio.",
            })}
            className="w-full rounded-lg border border-border/60 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-[#4d8cff]/60 focus:ring-2 focus:ring-[#4d8cff]/20"
          />
          {errors.subject ? (
            <p className="text-sm font-medium text-red-500" role="alert">
              {errors.subject.message}
            </p>
          ) : null}
        </div>

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
            placeholder="Descreva seu projeto ou duvida..."
            {...register("message", {
              required: "Mensagem e obrigatoria.",
              minLength: {
                value: 10,
                message: "Mensagem deve ter pelo menos 10 caracteres.",
              },
            })}
            className="w-full resize-y rounded-lg border border-border/60 bg-background/80 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-[#4d8cff]/60 focus:ring-2 focus:ring-[#4d8cff]/20"
          />
          {errors.message ? (
            <p className="text-sm font-medium text-red-500" role="alert">
              {errors.message.message}
            </p>
          ) : null}
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

        {error ? (
          <p className="text-sm font-medium text-red-500" role="alert">
            {error}
          </p>
        ) : null}
      </form>
    </div>
  );
}
