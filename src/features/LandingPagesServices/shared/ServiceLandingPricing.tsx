"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { buildWhatsAppHref } from "@/constants/contact";
import type {
  ServiceLandingPricingContent,
  ServiceLandingPricingMode,
  ServiceLandingPricingPlan,
} from "@/types/services";
import { cn } from "@/utils";

interface ServiceLandingPricingProps {
  serviceTitle: string;
  content: ServiceLandingPricingContent;
}

function ServiceLandingPricingCard({
  serviceTitle,
  plan,
  mode,
}: {
  serviceTitle: string;
  plan: ServiceLandingPricingPlan;
  mode: ServiceLandingPricingMode;
}) {
  const price = mode === "implementation" ? plan.implementation : plan.retainer;
  const message = buildWhatsAppHref(
    `Ola, vim pela pagina de ${serviceTitle} da SyncForge e quero falar sobre a opcao ${plan.name} (${price.amount} ${price.suffix}).`,
  );

  return (
    <Card
      className={cn(
        "h-full rounded-[2rem] border border-white/10 bg-card/45 py-0 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-md",
        plan.featured &&
          "border-[#4d8cff]/35 bg-[#07112a]/95 shadow-[0_28px_90px_rgba(4,16,52,0.44)]",
      )}
    >
      <CardHeader className="px-6 pt-6 pb-0 sm:px-7 sm:pt-7">
        <div className="flex min-h-6 items-center justify-between gap-3">
          <CardTitle
            className={cn(
              "text-lg font-semibold tracking-[-0.03em] sm:text-[1.15rem]",
              plan.featured ? "text-white" : "text-foreground",
            )}
          >
            {plan.name}
          </CardTitle>

          {plan.badge ? (
            <Badge
              variant="outline"
              className={cn(
                "rounded-full border-[#4d8cff]/25 bg-[#4d8cff]/10 px-2.5 py-1 text-[9px] tracking-[0.16em] uppercase",
                plan.featured ? "text-[#9ec0ff]" : "text-[#4d8cff]",
              )}
            >
              {plan.badge}
            </Badge>
          ) : null}
        </div>

        <CardDescription
          className={cn(
            "mt-2.5 min-h-12 text-[13px] leading-6 sm:text-sm",
            plan.featured ? "text-slate-300" : "text-muted-foreground",
          )}
        >
          {plan.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col px-6 pt-6 pb-0 sm:px-7">
        <div
          className={cn(
            "rounded-[1.5rem] border px-5 py-5",
            plan.featured
              ? "border-[#4d8cff]/20 bg-white/5"
              : "border-white/8 bg-background/25",
          )}
        >
          {price.prefix ? (
            <p className="text-[9px] font-medium tracking-[0.18em] text-[#4d8cff] uppercase">
              {price.prefix}
            </p>
          ) : null}

          <div
            className={cn(
              "mt-2.5 text-[2rem] font-semibold tracking-[-0.04em] sm:text-[2.35rem]",
              plan.featured ? "text-white" : "text-foreground",
            )}
          >
            {price.amount}
          </div>

          <p
            className={cn(
              "mt-1.5 text-[13px]",
              plan.featured ? "text-slate-300" : "text-muted-foreground",
            )}
          >
            {price.suffix}
          </p>

          {price.note ? (
            <p
              className={cn(
                "mt-2.5 text-[13px] leading-5.5",
                plan.featured ? "text-slate-400" : "text-muted-foreground",
              )}
            >
              {price.note}
            </p>
          ) : null}
        </div>

        <div className="mt-6 flex-1">
          <p
            className={cn(
              "text-[13px] font-semibold",
              plan.featured ? "text-white" : "text-foreground",
            )}
          >
            O que entra nessa faixa:
          </p>

          <ul className="mt-3.5 space-y-2.5">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span
                  className={cn(
                    "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
                    plan.featured
                      ? "border-[#4d8cff]/25 bg-[#4d8cff]/10 text-[#9ec0ff]"
                      : "border-white/10 bg-background/30 text-[#4d8cff]",
                  )}
                >
                  <Check className="size-3.5" />
                </span>

                <span
                  className={cn(
                    "text-[13px] leading-5.5",
                    plan.featured ? "text-slate-300" : "text-muted-foreground",
                  )}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="border-t-0 bg-transparent px-6 pt-6 pb-6 sm:px-7 sm:pb-7">
        <Button
          asChild
          variant={plan.featured ? "default" : "outline"}
          className={cn(
            "h-11 w-full rounded-full",
            !plan.featured &&
              "border-white/10 bg-background/20 hover:bg-[#4d8cff]/10 hover:text-foreground",
          )}
        >
          <a href={message} target="_blank" rel="noopener noreferrer">
            {plan.ctaLabel}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function ServiceLandingPricing({
  serviceTitle,
  content,
}: ServiceLandingPricingProps) {
  const renderGrid = (mode: ServiceLandingPricingMode) => (
    <div className="mt-10 grid gap-6 xl:grid-cols-3">
      {content.plans.map((plan, index) => (
        <Reveal key={`${mode}-${plan.name}`} delay={0.08 * (index + 1)}>
          <ServiceLandingPricingCard
            serviceTitle={serviceTitle}
            plan={plan}
            mode={mode}
          />
        </Reveal>
      ))}
    </div>
  );

  return (
    <section className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <Reveal delay={0.1}>
          <Tabs defaultValue="implementation" className="mt-14 items-center">
            <TabsList className="rounded-full border border-white/10 bg-card/50 p-1 backdrop-blur-sm">
              <TabsTrigger
                value="implementation"
                className="rounded-full px-4 text-[13px] data-active:bg-[#081a4f] data-active:text-white"
              >
                {content.implementationLabel}
              </TabsTrigger>
              <TabsTrigger
                value="retainer"
                className="rounded-full px-4 text-[13px] data-active:bg-[#081a4f] data-active:text-white"
              >
                {content.retainerLabel}
              </TabsTrigger>
            </TabsList>

            {content.disclaimer ? (
              <p className="mt-5 text-center text-sm leading-7 text-muted-foreground">
                {content.disclaimer}
              </p>
            ) : null}

            <TabsContent value="implementation" className="w-full">
              {renderGrid("implementation")}
            </TabsContent>

            <TabsContent value="retainer" className="w-full">
              {renderGrid("retainer")}
            </TabsContent>
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
