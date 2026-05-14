"use client";

import { ArrowLeft, LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function AdminHeader() {
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("blog_token");
    document.cookie = "blog_auth=; path=/; max-age=0";
    router.push("/admin");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/admin/blog"
          className="text-sm font-semibold text-foreground"
        >
          SyncForge — Admin
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-3" />
            Ver site
          </Link>

          <Button variant="ghost" size="xs" onClick={handleLogout}>
            <LogOut className="size-3.5" />
            Sair
          </Button>
        </div>
      </div>
    </header>
  );
}
