import { LayoutGrid } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CATEGORY_OPTIONS } from "@/constants/services";
import type { ServiceCategory } from "@/types/services";

interface SelectFilterProps {
  value: ServiceCategory | "all";
  onValueChange: (value: ServiceCategory | "all") => void;
}

export default function SelectFilter({
  value,
  onValueChange,
}: SelectFilterProps) {
  return (
    <div className="mx-auto mt-10 w-full max-w-xs sm:max-w-sm">
      <Select
        value={value}
        onValueChange={(nextValue) =>
          onValueChange(nextValue as ServiceCategory | "all")
        }
      >
        <SelectTrigger
          aria-label="Filtrar categorias de serviços"
          className="relative h-12 w-full rounded-xl border-border bg-background pr-4 pl-[2.75rem] text-left text-sm shadow-sm transition-colors hover:bg-accent/30 dark:border-white/10 dark:bg-input/30 dark:hover:bg-input/50 sm:h-13 sm:rounded-2xl sm:pl-12 sm:text-base"
        >
          <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-[#4d8cff] sm:left-3.5">
            <LayoutGrid className="size-4 sm:size-[18px]" />
          </span>
          <SelectValue placeholder="Todas as categorias" />
        </SelectTrigger>
        <SelectContent
          position="popper"
          className="w-[var(--radix-select-trigger-width)] rounded-xl border-border bg-popover text-popover-foreground shadow-md sm:rounded-2xl"
        >
          {CATEGORY_OPTIONS.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
