"use client";

import { ArrowLeft, Check, ShieldCheck, Sparkles } from "lucide-react";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { WhatsappIcon } from "@/components/icons/WhatsappIcon";
import { buildWhatsAppHref } from "@/constants/contact";
import {
  getRecommendedServices,
  SERVICE_CONSULTATION_QUESTIONS,
} from "@/constants/service-consultation";
import type {
  ConsultationAnswers,
  ConsultationOption,
} from "@/types/service-consultation";
import { cn } from "@/utils";

const STEP_LABELS = [
  "Problema",
  "Momento",
  "Orçamento",
  "Recomendação",
  "Contato",
];

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length === 0) {
    return "";
  }

  if (digits.length <= 2) {
    return `(${digits}`;
  }

  const areaCode = digits.slice(0, 2);
  const number = digits.slice(2);

  if (number.length <= 4) {
    return `(${areaCode}) ${number}`;
  }

  if (number.length <= 8) {
    return `(${areaCode}) ${number.slice(0, 4)}-${number.slice(4)}`;
  }

  return `(${areaCode}) ${number.slice(0, 5)}-${number.slice(5)}`;
}

interface ConsultationOptionButtonProps {
  option: ConsultationOption;
  selected: boolean;
  onSelect: () => void;
}

function ConsultationOptionButton({
  option,
  selected,
  onSelect,
}: ConsultationOptionButtonProps) {
  const Icon = option.icon;

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={cn(
        "group flex min-h-16 w-full items-center gap-3 rounded-xl border p-3 text-left outline-none transition-colors sm:min-h-18 sm:gap-4 sm:rounded-2xl sm:p-4",
        "hover:border-[#4d8cff]/50 hover:bg-[#4d8cff]/8 focus-visible:ring-2 focus-visible:ring-[#4d8cff]/70",
        selected
          ? "border-[#4d8cff]/60 bg-[#4d8cff]/12"
          : "border-border/60 bg-background/35",
      )}
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#4d8cff]/20 bg-[#4d8cff]/10 text-[#4d8cff] sm:size-11">
        <Icon className="size-5" />
      </span>

      <span className="min-w-0 flex-1">
        <strong className="block text-sm font-semibold text-foreground sm:text-[0.95rem]">
          {option.label}
        </strong>
      </span>

      <span
        aria-hidden
        className={cn(
          "flex size-6 shrink-0 items-center justify-center rounded-full border",
          selected
            ? "border-[#4d8cff] bg-[#4d8cff] text-white"
            : "border-border/70 text-transparent",
        )}
      >
        <Check className="size-3.5" />
      </span>
    </button>
  );
}

export function ServiceConsultation() {
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  const hasStarted = useRef(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<ConsultationAnswers>({});
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [segment, setSegment] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const recommendationStep = SERVICE_CONSULTATION_QUESTIONS.length;
  const contactStep = recommendationStep + 1;
  const totalSteps = SERVICE_CONSULTATION_QUESTIONS.length + 2;
  const isRecommendationStep = step === recommendationStep;
  const isContactStep = step === contactStep;
  const currentQuestion = SERVICE_CONSULTATION_QUESTIONS[step];
  const recommendedServices = getRecommendedServices(answers);
  const selectedServices = recommendedServices.filter((service) =>
    selectedServiceIds.includes(service.value),
  );

  useEffect(() => {
    if (step === 0 && !hasStarted.current) {
      hasStarted.current = true;
      return;
    }

    stepHeadingRef.current?.focus({ preventScroll: true });
  }, [step]);

  const selectedOptions = SERVICE_CONSULTATION_QUESTIONS.map((question) => ({
    question,
    option: question.options.find(
      (option) => option.value === answers[question.id],
    ),
  })).filter((selection) => selection.option);

  const selectOption = (option: ConsultationOption) => {
    if (!currentQuestion) {
      return;
    }

    const nextAnswers = {
      ...answers,
      [currentQuestion.id]: option.value,
    };

    setAnswers(nextAnswers);

    if (currentQuestion.id === "budget") {
      setSelectedServiceIds(
        getRecommendedServices(nextAnswers).map((service) => service.value),
      );
    }

    setStep((current) => current + 1);
  };

  const toggleService = (serviceId: string) => {
    setSelectedServiceIds((current) =>
      current.includes(serviceId)
        ? current.filter((id) => id !== serviceId)
        : [...current, serviceId],
    );
  };

  const goBack = () => {
    setError("");
    setStep((current) => Math.max(0, current - 1));
  };

  const goToPreviousStep = (targetStep: number) => {
    if (targetStep >= step) {
      return;
    }

    setError("");
    setStep(targetStep);
  };

  const continueToContact = () => {
    if (selectedServiceIds.length > 0) {
      setStep(contactStep);
    }
  };

  const submitConsultation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name.trim() || !company.trim()) {
      setError("Informe seu nome e o nome da empresa para continuar.");
      return;
    }

    if (phone.replace(/\D/g, "").length < 10) {
      setError("Informe um WhatsApp válido com DDD.");
      return;
    }

    setError("");

    const answerLines = selectedOptions.map(
      ({ question, option }) => `${question.title}\n${option?.label}`,
    );
    const serviceLines = selectedServices.map(
      (service) => `- ${service.label}`,
    );
    const message = [
      "Olá, vim pelo atendimento guiado da SyncForge.",
      "",
      `Nome: ${name.trim()}`,
      `Empresa: ${company.trim()}`,
      ...(segment.trim() ? [`Segmento: ${segment.trim()}`] : []),
      `WhatsApp: ${phone.trim()}`,
      "",
      ...answerLines,
      "",
      "Soluções escolhidas:",
      ...serviceLines,
      "",
      "Gostaria de conversar sobre a melhor solução para o meu projeto.",
    ].join("\n");

    const newWindow = window.open(
      buildWhatsAppHref(message),
      "_blank",
      "noopener,noreferrer",
    );

    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <section
      id="atendimento"
      className="relative px-3 pt-4 pb-20 sm:px-6 sm:pt-8 sm:pb-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl rounded-2xl border border-border/60 bg-card sm:rounded-[2rem]">
          <nav
            aria-label="Etapas do atendimento"
            className="sticky top-20 z-20 rounded-t-2xl border-b border-border/50 bg-card px-3 py-4 sm:static sm:rounded-t-[2rem] sm:px-8 sm:py-5"
          >
            <ol className="mx-auto flex max-w-3xl items-start">
              {STEP_LABELS.map((label, index) => (
                <li
                  key={label}
                  className={cn(
                    "flex items-start",
                    index < STEP_LABELS.length - 1 && "flex-1",
                  )}
                >
                  <div className="flex flex-col items-center gap-2">
                    <button
                      type="button"
                      disabled={index >= step}
                      onClick={() => goToPreviousStep(index)}
                      aria-label={
                        index < step
                          ? `Voltar para a etapa ${index + 1}: ${label}`
                          : `Etapa ${index + 1}: ${label}`
                      }
                      aria-current={index === step ? "step" : undefined}
                      className={cn(
                        "flex size-11 items-center justify-center rounded-full border text-xs font-semibold outline-none sm:size-9",
                        index === step &&
                          "border-[#4d8cff] bg-[#4d8cff] text-white",
                        index < step &&
                          "cursor-pointer border-[#4d8cff]/60 bg-[#4d8cff]/10 text-[#4d8cff] hover:bg-[#4d8cff]/20 focus-visible:ring-2 focus-visible:ring-[#4d8cff]/60",
                        index > step &&
                          "border-border/70 bg-background text-muted-foreground",
                      )}
                    >
                      {index < step ? <Check className="size-4" /> : index + 1}
                    </button>
                    <span
                      className={cn(
                        "hidden text-[10px] font-medium sm:block",
                        index <= step
                          ? "text-foreground"
                          : "text-muted-foreground",
                      )}
                    >
                      {label}
                    </span>
                  </div>

                  {index < STEP_LABELS.length - 1 ? (
                    <span
                      aria-hidden
                      className={cn(
                        "mt-[1.375rem] h-px flex-1 bg-border sm:mt-4",
                        index < step && "bg-[#4d8cff]/50",
                      )}
                    />
                  ) : null}
                </li>
              ))}
            </ol>
            <p className="sr-only" aria-live="polite">
              Etapa {step + 1} de {totalSteps}: {STEP_LABELS[step]}
            </p>
            <p className="mt-3 text-center text-[10px] font-semibold tracking-[0.12em] text-muted-foreground uppercase sm:hidden">
              {step + 1} de {totalSteps} · {STEP_LABELS[step]}
            </p>
          </nav>

          <div className="p-5 sm:p-8 lg:p-10">
            <div key={step} className="animate-in fade-in duration-150">
              {isRecommendationStep ? (
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-[#4d8cff] uppercase">
                    Passo 4 de 5
                  </span>
                  <h3
                    ref={stepHeadingRef}
                    tabIndex={-1}
                    className="mt-2 scroll-mt-44 text-balance text-2xl font-semibold tracking-[-0.03em] outline-none sm:scroll-mt-28 sm:text-3xl"
                  >
                    Escolha as soluções que deseja levar para o atendimento
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                    Recomendamos duas opções para o seu momento. Você pode
                    selecionar as duas ou seguir com apenas uma.
                  </p>

                  <div className="mt-7 grid gap-3">
                    {recommendedServices.map((service, index) => {
                      const Icon = service.icon;
                      const selected = selectedServiceIds.includes(
                        service.value,
                      );

                      return (
                        <label
                          key={service.value}
                          className={cn(
                            "flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition-colors sm:p-5",
                            selected
                              ? "border-[#4d8cff]/55 bg-[#4d8cff]/10"
                              : "border-border/60 bg-background/35 hover:border-[#4d8cff]/35",
                          )}
                        >
                          <input
                            type="checkbox"
                            checked={selected}
                            onChange={() => toggleService(service.value)}
                            className="peer sr-only"
                          />

                          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[#4d8cff]/25 bg-[#4d8cff]/12 text-[#4d8cff]">
                            <Icon className="size-5" />
                          </span>

                          <span className="min-w-0 flex-1">
                            <span className="flex flex-wrap items-center gap-2">
                              <strong className="text-sm font-semibold text-foreground sm:text-base">
                                {service.label}
                              </strong>
                              <span className="rounded-full border border-[#4d8cff]/25 bg-background/50 px-2.5 py-1 text-[9px] font-semibold tracking-[0.1em] text-[#4d8cff] uppercase">
                                  {index === 0
                                    ? "Mais indicada"
                                    : "Também indicada"}
                              </span>
                            </span>
                          </span>

                          <span
                            aria-hidden
                            className={cn(
                              "flex size-6 shrink-0 items-center justify-center rounded-md border peer-focus-visible:ring-2 peer-focus-visible:ring-[#4d8cff]/60",
                              selected
                                ? "border-[#4d8cff] bg-[#4d8cff] text-white"
                                : "border-border bg-background text-transparent",
                            )}
                          >
                            <Check className="size-4" />
                          </span>
                        </label>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={continueToContact}
                    disabled={selectedServiceIds.length === 0}
                    className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#4d8cff] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#3f7fe9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d8cff] focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-45 sm:w-auto"
                  >
                    Continuar com {selectedServiceIds.length}{" "}
                    {selectedServiceIds.length === 1 ? "solução" : "soluções"}
                    <WhatsappIcon className="size-4" />
                  </button>

                  <p className="mt-4 text-xs leading-5 text-muted-foreground">
                    {selectedServiceIds.length === 0
                      ? "Selecione pelo menos uma solução para continuar."
                      : "Você pode seguir com uma ou com as duas soluções recomendadas."}
                  </p>
                </div>
              ) : isContactStep ? (
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-[#4d8cff] uppercase">
                    Passo 5 de 5
                  </span>
                  <h3
                    ref={stepHeadingRef}
                    tabIndex={-1}
                    className="mt-2 scroll-mt-44 text-balance text-2xl font-semibold tracking-[-0.03em] outline-none sm:scroll-mt-28 sm:text-3xl"
                  >
                    Como podemos falar com você?
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
                    Informe seus dados para iniciar a conversa com o contexto do
                    projeto já organizado.
                  </p>

                  <div className="mt-6 rounded-2xl border border-dashed border-[#4d8cff]/35 bg-[#4d8cff]/6 p-4 sm:p-5">
                    <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.1em] text-[#4d8cff] uppercase">
                      <Sparkles className="size-4" />
                      Diagnóstico inicial
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedOptions.map(({ question, option }) => (
                        <span
                          key={question.id}
                          className="rounded-full border border-border/70 bg-background/55 px-3 py-1.5 text-xs font-medium text-foreground"
                        >
                          {option?.label}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 border-t border-border/50 pt-4">
                      <p className="text-[10px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                        Soluções escolhidas
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {selectedServices.map((service) => (
                          <span
                            key={service.value}
                            className="rounded-full border border-[#4d8cff]/30 bg-[#4d8cff]/10 px-3 py-1.5 text-xs font-medium text-[#4d8cff]"
                          >
                            {service.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <form
                    onSubmit={submitConsultation}
                    className="mt-7 grid gap-5"
                  >
                    <label className="grid gap-2 text-sm font-medium">
                      Seu nome
                      <input
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Ex: João Silva"
                        autoComplete="name"
                        className="h-12 rounded-xl border border-border/70 bg-background/55 px-4 text-sm outline-none focus:border-[#4d8cff]/70 focus:ring-2 focus:ring-[#4d8cff]/20"
                      />
                    </label>

                    <label className="grid gap-2 text-sm font-medium">
                      Empresa
                      <input
                        required
                        value={company}
                        onChange={(event) => setCompany(event.target.value)}
                        placeholder="Ex: Empresa"
                        autoComplete="organization"
                        className="h-12 rounded-xl border border-border/70 bg-background/55 px-4 text-sm outline-none focus:border-[#4d8cff]/70 focus:ring-2 focus:ring-[#4d8cff]/20"
                      />
                    </label>

                    <label className="grid gap-2 text-sm font-medium">
                      <span>
                        Segmento da empresa{" "}
                        <span className="text-xs font-normal text-muted-foreground">
                          (opcional)
                        </span>
                      </span>
                      <input
                        value={segment}
                        onChange={(event) => setSegment(event.target.value)}
                        placeholder="Ex: Loja de informática"
                        className="h-12 rounded-xl border border-border/70 bg-background/55 px-4 text-sm outline-none focus:border-[#4d8cff]/70 focus:ring-2 focus:ring-[#4d8cff]/20"
                      />
                    </label>

                    <label className="grid gap-2 text-sm font-medium">
                      WhatsApp com DDD
                      <input
                        required
                        type="tel"
                        inputMode="tel"
                        value={phone}
                        onChange={(event) =>
                          setPhone(formatPhone(event.target.value))
                        }
                        placeholder="Ex: (92) 99999-9999"
                        autoComplete="tel"
                        maxLength={15}
                        className="h-12 rounded-xl border border-border/70 bg-background/55 px-4 text-sm outline-none focus:border-[#4d8cff]/70 focus:ring-2 focus:ring-[#4d8cff]/20"
                      />
                    </label>

                    {error ? (
                      <p role="alert" className="text-sm text-red-500">
                        {error}
                      </p>
                    ) : null}

                    <button
                      type="submit"
                      className="mt-1 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#4d8cff] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#3f7fe9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4d8cff] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      Conversar no WhatsApp
                      <WhatsappIcon className="size-4" />
                    </button>

                    <p className="flex items-center justify-center gap-2 text-center text-[11px] text-muted-foreground">
                      <ShieldCheck className="size-3.5 text-[#4d8cff]" />
                      Seus dados serão usados somente para este atendimento.
                    </p>
                  </form>
                </div>
              ) : currentQuestion ? (
                <div>
                  <span className="text-[10px] font-semibold tracking-[0.18em] text-[#4d8cff] uppercase">
                    Passo {step + 1} de {totalSteps}
                  </span>
                  <h3
                    id={`consultation-question-${step}`}
                    ref={stepHeadingRef}
                    tabIndex={-1}
                    className="mt-2 scroll-mt-44 text-balance text-2xl font-semibold tracking-[-0.03em] outline-none sm:scroll-mt-28 sm:text-3xl"
                  >
                    {currentQuestion.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
                    {currentQuestion.description}
                  </p>

                  <fieldset
                    aria-labelledby={`consultation-question-${step}`}
                    className="mt-7 grid min-w-0 gap-3 border-0 p-0 sm:grid-cols-2"
                  >
                    {currentQuestion.options.map((option) => (
                      <ConsultationOptionButton
                        key={option.value}
                        option={option}
                        selected={answers[currentQuestion.id] === option.value}
                        onSelect={() => selectOption(option)}
                      />
                    ))}
                  </fieldset>
                </div>
              ) : null}
            </div>

            {step > 0 ? (
              <button
                type="button"
                onClick={goBack}
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:underline"
              >
                <ArrowLeft className="size-4" />
                Voltar etapa
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
