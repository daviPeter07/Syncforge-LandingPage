"use client";

import { ArrowRight, KeyRound, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AdminLogin() {
  const [token, setToken] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = token.trim();
    if (!trimmed) return;

    setLoading(true);
    setError(false);

    try {
      const res = await fetch("/api/blog?admin=true", {
        headers: { Authorization: `Bearer ${trimmed}` },
      });

      if (!res.ok) {
        setError(true);
        return;
      }

      localStorage.setItem("blog_token", trimmed);
      document.cookie = "blog_auth=true; path=/; max-age=86400";
      router.push("/admin/blog");
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-svh items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Acesso Admin
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Insira o token de acesso para gerenciar o blog
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Token de acesso"
              value={token}
              onChange={(e) => {
                setToken(e.target.value);
                setError(false);
              }}
              className="text-center"
              autoFocus
            />
            {error && (
              <p className="text-xs text-destructive">
                Token inválido. Tente novamente.
              </p>
            )}
          </div>

          <Button type="submit" className="w-full gap-2" disabled={loading}>
            {loading ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <KeyRound className="size-4" />
            )}
            {loading ? "Validando..." : "Entrar"}
            <ArrowRight className="size-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
