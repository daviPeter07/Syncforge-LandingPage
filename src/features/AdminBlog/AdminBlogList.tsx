"use client";

import {
  Edit,
  ExternalLink,
  Loader2,
  Plus,
  ToggleLeft,
  ToggleRight,
  Trash2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Suspense, use, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/types/blog";

function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("blog_token");
}

async function fetchPosts(): Promise<BlogPost[]> {
  const token = getToken();
  const res = await fetch("/api/blog?admin=true", {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Falha ao carregar posts");
  return res.json();
}

export function AdminBlogList() {
  const token = getToken();
  const postsPromise = useMemo(() => fetchPosts(), []);
  const router = useRouter();

  if (!token) {
    router.replace("/admin");
    return null;
  }

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center py-20">
          <Loader2 className="size-6 animate-spin text-muted-foreground" />
        </div>
      }
    >
      <ListContent postsPromise={postsPromise} />
    </Suspense>
  );
}

function ListContent({ postsPromise }: { postsPromise: Promise<BlogPost[]> }) {
  const posts = use(postsPromise);
  const router = useRouter();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">
          Todos os posts ({posts.length})
        </h2>
        <Button onClick={() => router.push("/admin/blog/novo")}>
          <Plus className="size-4" />
          Novo post
        </Button>
      </div>

      {posts.length === 0 ? (
        <div className="py-12 text-center text-sm text-muted-foreground">
          Nenhum post ainda. Crie o primeiro!
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <th className="px-4 py-3">Título</th>
                <th className="px-4 py-3">Autor</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Data</th>
                <th className="px-4 py-3 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {posts.map((post) => (
                <tr
                  key={post.id}
                  className="transition-colors hover:bg-muted/30"
                >
                  <td className="max-w-xs truncate px-4 py-3 font-medium text-foreground">
                    {post.title}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {post.author_name}
                  </td>
                  <td className="px-4 py-3">
                    <ToggleStatusButton
                      postId={post.id}
                      published={post.published}
                    />
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {new Date(post.created_at).toLocaleDateString("pt-BR")}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-1">
                      <a
                        href={`/blog/${post.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="ghost" size="icon-xs">
                          <ExternalLink className="size-3.5" />
                        </Button>
                      </a>
                      <Button
                        variant="ghost"
                        size="icon-xs"
                        onClick={() => router.push(`/admin/blog/${post.id}`)}
                      >
                        <Edit className="size-3.5" />
                      </Button>
                      <DeleteButton postId={post.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function DeleteButton({ postId }: { postId: string }) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!confirm("Tem certeza que deseja excluir este post?")) return;
    setLoading(true);
    try {
      const token = getToken();
      const res = await fetch(`/api/blog/${postId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error();
      window.location.reload();
    } catch {
      alert("Erro ao excluir post.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon-xs"
      onClick={handleDelete}
      disabled={loading}
    >
      <Trash2 className="size-3.5 text-destructive" />
    </Button>
  );
}

function ToggleStatusButton({
  postId,
  published,
}: {
  postId: string;
  published: boolean;
}) {
  const [loading, setLoading] = useState(false);

  async function handleToggle() {
    setLoading(true);
    try {
      const token = getToken();
      await fetch(`/api/blog/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ published: !published }),
      });
      window.location.reload();
    } catch {
      alert("Erro ao alterar status.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={loading}
      className={`inline-flex cursor-pointer items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium transition-colors disabled:opacity-50 ${
        published
          ? "bg-green-500/10 text-green-600 hover:bg-green-500/20 dark:text-green-400"
          : "bg-muted text-muted-foreground hover:bg-muted/80"
      }`}
    >
      {loading ? (
        <Loader2 className="size-3 animate-spin" />
      ) : published ? (
        <ToggleRight className="size-3" />
      ) : (
        <ToggleLeft className="size-3" />
      )}
      {published ? "Publicado" : "Rascunho"}
    </button>
  );
}
