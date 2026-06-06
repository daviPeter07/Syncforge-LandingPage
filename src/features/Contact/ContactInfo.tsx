"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CONTACT_WHATSAPP_HREF,
} from "@/constants/contact";

const items = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: CONTACT_EMAIL_HREF,
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (92) 99258-4985",
    href: CONTACT_WHATSAPP_HREF,
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
          Fale com a SyncForge para explicar sua necessidade, solicitar um
          orçamento ou entender qual solução digital faz mais sentido para o seu
          negócio.
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
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.label === "Telefone" ? "_blank" : undefined}
                    rel={
                      item.label === "Telefone"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{item.value}</p>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
