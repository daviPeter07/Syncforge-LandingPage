"use client";

import MDEditor from "@uiw/react-md-editor";
import { ImageIcon, Loader2, Save } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
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
  const editorContainerRef = useRef<HTMLDivElement | null>(null);
  const [title, setTitle] = useState(post?.title ?? "");
  const [contentMd, setContentMd] = useState(post?.content_md ?? "");
  const [coverImage, setCoverImage] = useState(post?.cover_image ?? "");
  const [bodyImageAlt, setBodyImageAlt] = useState("");
  const [published, setPublished] = useState(post?.published ?? false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadingBody, setUploadingBody] = useState(false);
  const [draggingBodyImage, setDraggingBodyImage] = useState(false);

  const insertBodyImageMarkdown = useCallback(
    (url: string, altText?: string) => {
      const safeAlt = altText?.trim() || "Imagem";
      const markdown = `\n\n![${safeAlt}](${url})\n`;
      const textarea = editorContainerRef.current?.querySelector("textarea");

      if (
        textarea instanceof HTMLTextAreaElement &&
        Number.isInteger(textarea.selectionStart) &&
        Number.isInteger(textarea.selectionEnd)
      ) {
        const selectionStart = textarea.selectionStart;
        const selectionEnd = textarea.selectionEnd;

        setContentMd((prev) => {
          const next =
            prev.slice(0, selectionStart) + markdown + prev.slice(selectionEnd);

          requestAnimationFrame(() => {
            const nextTextarea =
              editorContainerRef.current?.querySelector("textarea");

            if (!(nextTextarea instanceof HTMLTextAreaElement)) return;

            const nextCursor = selectionStart + markdown.length;
            nextTextarea.focus();
            nextTextarea.setSelectionRange(nextCursor, nextCursor);
          });

          return next;
        });

        return;
      }

      setContentMd((prev) => `${prev}${markdown}`);
    },
    [],
  );

  const getFirstImageFile = useCallback(
    (items?: DataTransferItemList | null, files?: FileList | null) => {
      if (items) {
        for (const item of Array.from(items)) {
          if (!item.type.startsWith("image/")) continue;

          const file = item.getAsFile();
          if (file) return file;
        }
      }

      if (files) {
        for (const file of Array.from(files)) {
          if (file.type.startsWith("image/")) return file;
        }
      }

      return null;
    },
    [],
  );

  const uploadImage = useCallback(async (file: File) => {
    const token = getToken();
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/blog/upload", {
      method: "POST",
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      body: formData,
    });

    const data = (await res.json().catch(() => null)) as {
      message?: string;
      url?: string;
    } | null;

    if (!res.ok || !data?.url) {
      throw new Error(data?.message ?? "Erro ao fazer upload da imagem.");
    }

    return data.url;
  }, []);

  const uploadBodyImageFile = useCallback(
    async (file: File) => {
      setUploadingBody(true);
      try {
        const url = await uploadImage(file);
        insertBodyImageMarkdown(url, bodyImageAlt);
      } catch (error) {
        alert(
          error instanceof Error
            ? error.message
            : "Erro ao fazer upload da imagem.",
        );
      } finally {
        setUploadingBody(false);
        setDraggingBodyImage(false);
      }
    },
    [bodyImageAlt, insertBodyImageMarkdown, uploadImage],
  );

  const handleImageUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setUploading(true);
      try {
        const url = await uploadImage(file);
        setCoverImage(url);
      } catch (error) {
        alert(
          error instanceof Error
            ? error.message
            : "Erro ao fazer upload da imagem.",
        );
      } finally {
        setUploading(false);
      }
    },
    [uploadImage],
  );

  const handlePaste = useCallback(
    async (e: React.ClipboardEvent) => {
      const file = getFirstImageFile(e.clipboardData?.items);
      if (!file) return;

      e.preventDefault();
      await uploadBodyImageFile(file);
    },
    [getFirstImageFile, uploadBodyImageFile],
  );

  const handleBodyImageUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      await uploadBodyImageFile(file);
      e.target.value = "";
    },
    [uploadBodyImageFile],
  );

  const handleBodyDragOver = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      const hasImage = Array.from(e.dataTransfer.items ?? []).some((item) =>
        item.type.startsWith("image/"),
      );

      if (!hasImage) return;

      e.preventDefault();
      e.dataTransfer.dropEffect = "copy";
      setDraggingBodyImage(true);
    },
    [],
  );

  const handleBodyDragLeave = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      if (e.currentTarget.contains(e.relatedTarget as Node | null)) return;
      setDraggingBodyImage(false);
    },
    [],
  );

  const handleBodyDrop = useCallback(
    async (e: React.DragEvent<HTMLDivElement>) => {
      const file = getFirstImageFile(
        e.dataTransfer.items,
        e.dataTransfer.files,
      );
      setDraggingBodyImage(false);
      if (!file) return;

      e.preventDefault();
      await uploadBodyImageFile(file);
    },
    [getFirstImageFile, uploadBodyImageFile],
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
              <div className="flex items-center gap-2">
                <Input
                  value={bodyImageAlt}
                  onChange={(e) => setBodyImageAlt(e.target.value)}
                  placeholder="Alt da imagem"
                  className="h-8 w-40"
                />
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
            </div>
            <p className="text-xs text-muted-foreground">
              Dica: use Markdown como <code># Título</code>,{" "}
              <code>## Subtítulo</code>,<code> **negrito**</code> e{" "}
              <code>- lista</code>.
            </p>
            <p className="text-xs text-muted-foreground">
              Voce tambem pode colar ou arrastar uma imagem para dentro do
              editor.
            </p>
            <section
              ref={editorContainerRef}
              aria-label="Editor de conteudo com suporte a imagem"
              onPaste={handlePaste}
              onDragOver={handleBodyDragOver}
              onDragLeave={handleBodyDragLeave}
              onDrop={handleBodyDrop}
              className={
                uploadingBody || draggingBodyImage ? "relative" : undefined
              }
            >
              <MDEditor
                value={contentMd}
                onChange={(val) => setContentMd(val ?? "")}
                preview="edit"
                height={500}
              />

              {draggingBodyImage && (
                <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-lg border-2 border-dashed border-[#4d8cff]/60 bg-background/85 text-sm font-medium text-foreground backdrop-blur-sm">
                  Solte a imagem para enviar ao post
                </div>
              )}
            </section>

            <div className="rounded-xl border border-border bg-card p-4">
              <h3 className="mb-4 text-sm font-medium text-foreground">
                Preview real (layout do blog)
              </h3>

              <div className="mx-auto w-full max-w-[70ch]">
                <div className="prose dark:prose-invert max-w-none break-words [overflow-wrap:anywhere] prose-headings:text-foreground prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-balance prose-h1:mt-10 prose-h1:mb-6 prose-h1:text-4xl prose-h1:leading-tight prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-3xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-2xl prose-p:my-6 prose-p:text-foreground prose-p:leading-8 prose-p:text-justify prose-p:[hyphens:auto] prose-a:text-[#4d8cff] prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:overflow-x-auto prose-img:my-8 prose-img:rounded-xl prose-img:ring-1 prose-img:ring-foreground/10 prose-img:mx-auto prose-img:max-h-[32rem] prose-img:h-auto prose-img:w-full prose-img:object-contain prose-blockquote:border-l-[#4d8cff] prose-blockquote:text-muted-foreground prose-blockquote:my-6 prose-li:text-foreground prose-li:text-justify prose-li:leading-8 prose-li:[hyphens:auto] prose-hr:my-10 prose-hr:border-border">
                  <Markdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw, rehypeHighlight]}
                  >
                    {contentMd || "_Comece a escrever para ver a prévia..._"}
                  </Markdown>
                </div>
              </div>
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

              {coverImage.trim() ? (
                <div className="overflow-hidden rounded-xl border border-border bg-muted/20">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={coverImage}
                      alt={title.trim() || "Preview da imagem de capa"}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ) : null}
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
