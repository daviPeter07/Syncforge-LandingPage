"use client";

import { Mail, Phone, MapPin } from "lucide-react";

const items = [
  {
    icon: Mail,
    label: "Email",
    value: "contato@syncforge.com.br",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (92) 99258-4985",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Manaus, AM - Brasil",
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold text-foreground">
          Vamos conversar!
        </h3>
        <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
          Estamos sempre disponíveis para discutir novos projetos, oportunidades
          criativas ou parcerias estratégicas. Não hesite em entrar em contato.
        </p>
      </div>

      <ul className="space-y-5">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label} className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#4d8cff]/20 bg-[#4d8cff]/10">
                <Icon className="h-5 w-5 text-[#4d8cff]" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{item.label}</p>
                <p className="text-muted-foreground">{item.value}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
