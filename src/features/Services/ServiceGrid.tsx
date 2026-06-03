import type { ServiceItem } from "@/types/services";
import { ServiceCard } from "./ServiceCard";

export function ServiceCardGrid({ services }: { services: ServiceItem[] }) {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.category} service={service} />
      ))}
    </div>
  );
}
