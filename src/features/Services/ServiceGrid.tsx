import { ServiceItem } from "@/types/services";
import { ServiceCard } from "./ServiceCard";
import { cn } from "@/utils";

export function ServiceCardGrid({ services }: { services: ServiceItem[] }) {
  return (
    <div
      className={cn(
        "mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3",
        services.length === 1 && "xl:grid-cols-1",
      )}
    >
      {services.map((service) => (
        <ServiceCard key={service.category} service={service} />
      ))}
    </div>
  );
}
