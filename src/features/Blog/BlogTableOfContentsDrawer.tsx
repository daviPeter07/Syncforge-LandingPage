"use client";

import { List } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import type { BlogPostHeading } from "@/types/blog";
import { cn } from "@/utils";

interface BlogTableOfContentsDrawerProps {
  items: BlogPostHeading[];
}

export function BlogTableOfContentsDrawer({
  items,
}: BlogTableOfContentsDrawerProps) {
  if (items.length === 0) return null;

  return (
    <Drawer direction="bottom">
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="fixed bottom-6 left-4 z-40 h-11 rounded-full border-border/60 bg-background/85 px-4 shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-md sm:bottom-8 sm:left-6 xl:hidden"
        >
          <span className="text-sm font-medium text-foreground">
            Neste artigo
          </span>
          <List className="size-4 text-muted-foreground" />
        </Button>
      </DrawerTrigger>

      <DrawerContent
        className="border-border/60 bg-background/95"
        onCloseAutoFocus={(event) => event.preventDefault()}
      >
        <DrawerHeader className="border-b border-border/60 text-left">
          <DrawerTitle>Neste artigo</DrawerTitle>
          <DrawerDescription>
            Toque em um topico para ir direto para a secao.
          </DrawerDescription>
        </DrawerHeader>

        <div className="max-h-[70vh] overflow-y-auto px-4 pb-6">
          <nav aria-label="Sumario do artigo mobile" className="pt-2">
            <ul className="space-y-1.5">
              {items.map((item) => (
                <li key={item.id}>
                  <DrawerClose asChild>
                    <a
                      href={`#${item.id}`}
                      className={cn(
                        "block rounded-xl px-3 py-3 text-sm leading-6 text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground",
                        item.level === 3 && "pl-7 text-[0.92rem]",
                      )}
                    >
                      {item.text}
                    </a>
                  </DrawerClose>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
