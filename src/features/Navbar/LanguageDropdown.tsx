"use client";

import { Check, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DISABLED_LANGUAGES } from "@/constants/navbar";
import { cn } from "@/lib/utils";

function LanguageBadge({ code }: { code: string }) {
  return (
    <Badge
      variant="outline"
      className="h-5 rounded-md border-0 bg-[#0a3499] px-1.5 font-mono text-[10px] font-bold tracking-[0.08em] text-white"
    >
      {code}
    </Badge>
  );
}

export function LanguageDropdown({ className }: { className?: string }) {
  return (
    <TooltipProvider delayDuration={150}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            className={cn(
              "h-9 gap-2 rounded-lg bg-card/60 px-2.5 text-foreground shadow-none hover:bg-[#0a3499]/20 hover:text-foreground data-[state=open]:bg-[#0a3499]/20",
              className,
            )}
          >
            <span className="flex items-center gap-2">
              <LanguageBadge code="PT" />
              <span className="font-semibold tracking-[-0.01em]">
                Português
              </span>
            </span>
            <ChevronDown className="size-3.5 opacity-70" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="min-w-[160px] rounded-xl border border-border/60 bg-card/95 p-1.5 text-foreground shadow-[0_18px_50px_rgba(0,7,45,0.4)] backdrop-blur-xl"
        >
          <DropdownMenuItem
            className="h-10 rounded-lg px-2 font-semibold text-foreground focus:bg-[#0a3499]/20 focus:text-foreground"
            onSelect={(event) => event.preventDefault()}
          >
            <LanguageBadge code="PT" />
            <span>Português</span>
            <Check className="ml-auto size-4 text-[#4d8cff]" />
          </DropdownMenuItem>
          {DISABLED_LANGUAGES.map((language) => (
            <Tooltip key={language.code}>
              <TooltipTrigger asChild>
                <DropdownMenuItem
                  aria-disabled="true"
                  className="h-10 cursor-not-allowed rounded-lg px-2 font-semibold text-muted-foreground focus:bg-[#0a3499]/10 focus:text-muted-foreground"
                  onSelect={(event) => event.preventDefault()}
                >
                  <LanguageBadge code={language.code} />
                  <span>{language.label}</span>
                </DropdownMenuItem>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                sideOffset={10}
                hideArrow
                className="border-0 bg-[#0a3499] text-white shadow-xl"
              >
                {language.message}
              </TooltipContent>
            </Tooltip>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </TooltipProvider>
  );
}
