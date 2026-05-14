"use client";

import MDEditor from "@uiw/react-md-editor";
import { ImageIcon, Loader2, Save } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { BlogPost, CreateBlogPostInput } from "@/types/blog";

interface BlogEditorProps {
  post?: BlogPost;
}

function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("blog_token");
}

export function BlogEditor({ post }: BlogEditorProps) {
  const router = useRouter();
  const [title, setTitle] = useState(post?.title ?? "");
  const [contentMd, setContentMd] = useState(post?.content_md ?? "");
  const [coverImage, setCoverImage] = useState(post?.cover_image ?? "");
  const [published, setPublished] = useState(post?.published ?? false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadingBody, setUploadingBody] = useState(false);

  const handleImageUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setUploading(true);
      try {
        const token = getToken();
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/blog/upload", {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        });

        if (!res.ok) throw new Error();

        const { url } = await res.json();
        setCoverImage(url);
      } catch {
        alert("Erro ao fazer upload da imagem.");
      } finally {
        setUploading(false);
      }
    },
    [],
  );

  const handlePaste = useCallback(async (e: React.ClipboardEvent) => {
    const items = e.clipboardData?.items;
    if (!items) return;

    for (const item of Array.from(items)) {
      if (!item.type.startsWith("image/")) continue;

      e.preventDefault();
      const file = item.getAsFile();
      if (!file) continue;

      setUploadingBody(true);
      try {
        const token = getToken();
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/blog/upload", {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        });

        if (!res.ok) throw new Error();

        const { url } = await res.json();
        setContentMd((prev) => `${prev}\n\n![Imagem](${url})\n`);
      } catch {
        alert("Erro ao fazer upload da imagem.");
      } finally {
        setUploadingBody(false);
      }
    }
  }, []);

  const handleBodyImageUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setUploadingBody(true);
      try {
        const token = getToken();
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch("/api/blog/upload", {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        });

        if (!res.ok) throw new Error();

        const { url } = await res.json();
        setContentMd((prev) => `${prev}\n\n![Imagem](${url})\n`);
      } catch {
        alert("Erro ao fazer upload da imagem.");
      } finally {
        setUploadingBody(false);
      }
    },
    [],
  );

  async function handleSave() {
    if (!title.trim() || !contentMd.trim()) {
      alert("Título e conteúdo são obrigatórios.");
      return;
    }

    setSaving(true);
    try {
      const token = getToken();
      const body: CreateBlogPostInput = {
        title: title.trim(),
        content_md: contentMd,
        author_name: "Davi Peterson",
        author_role: "Fundador e Desenvolvedor",
        author_photo: "/team/davi-peterson.jpg",
        cover_image: coverImage.trim() || undefined,
        published,
      };

      const url = post ? `/api/blog/${post.id}` : "/api/blog";
      const method = post ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error();

      router.push("/admin/blog");
    } catch {
      alert("Erro ao salvar post.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6" data-color-mode="dark">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-foreground">
          {post ? "Editar post" : "Novo post"}
        </h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => router.push("/admin/blog")}>
            Cancelar
          </Button>
          <Button onClick={handleSave} disabled={saving} className="gap-2">
            {saving ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Save className="size-4" />
            )}
            {saving ? "Salvando..." : "Salvar"}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Título do post"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label>Conteúdo (Markdown)</Label>
              <Button
                variant="outline"
                size="sm"
                className="relative"
                disabled={uploadingBody}
              >
                {uploadingBody ? (
                  <Loader2 className="size-3.5 animate-spin" />
                ) : (
                  <ImageIcon className="size-3.5" />
                )}
                {uploadingBody ? "Enviando..." : "Inserir imagem"}
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 cursor-pointer opacity-0"
                  onChange={handleBodyImageUpload}
                />
              </Button>
            </div>
            <div onPaste={handlePaste}>
              <MDEditor
                value={contentMd}
                onChange={(val) => setContentMd(val ?? "")}
                preview="live"
                height={500}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-4">
            <h3 className="mb-3 text-sm font-medium text-foreground">
              Imagem de capa
            </h3>
            <div className="space-y-3">
              <Input
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                placeholder="URL da imagem"
              />
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="relative"
                  disabled={uploading}
                >
                  {uploading ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <ImageIcon className="size-4" />
                  )}
                  {uploading ? "Enviando..." : "Upload"}
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute inset-0 cursor-pointer opacity-0"
                    onChange={handleImageUpload}
                  />
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <h3 className="mb-3 text-sm font-medium text-foreground">Autor</h3>
            <div className="flex items-center gap-3">
              <div className="size-10 shrink-0 overflow-hidden rounded-full bg-muted ring-1 ring-foreground/10">
                <Image
                  src="/team/davi-peterson.jpg"
                  alt="Davi Peterson"
                  width={40}
                  height={40}
                  className="size-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  Davi Peterson
                </p>
                <p className="text-xs text-muted-foreground">
                  Fundador e Desenvolvedor
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center gap-2">
              <Checkbox
                id="published"
                checked={published}
                onCheckedChange={(val) => setPublished(val === true)}
              />
              <Label htmlFor="published" className="text-sm font-medium">
                Publicado
              </Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
