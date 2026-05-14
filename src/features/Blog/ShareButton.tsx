"use client";

import { Check, Copy, Share2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface ShareButtonProps {
  postId: string;
}

export function ShareButton({ postId }: ShareButtonProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const url = `${globalThis.location?.origin ?? ""}/blog/${postId}`;

  useEffect(() => {
    if (!open) return;
    navigator.clipboard.writeText(url);
    setCopied(true);
    requestAnimationFrame(() => inputRef.current?.select());
  }, [open, url]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Share2 className="size-4" />
          Compartilhar
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg bg-card" aria-describedby="share-dialog-desc">
        <DialogHeader>
          <DialogTitle>Compartilhar link</DialogTitle>
          <p id="share-dialog-desc" className="text-sm text-muted-foreground">
            Copie o link ou compartilhe via WhatsApp
          </p>
        </DialogHeader>

        <div className="space-y-3">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              value={url}
              readOnly
              onClick={(e) => (e.target as HTMLInputElement).select()}
              className="flex-1"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                navigator.clipboard.writeText(url);
                setCopied(true);
                inputRef.current?.select();
              }}
            >
              <Copy className="size-4" />
            </Button>
          </div>

          {copied && (
            <div className="flex items-center gap-1.5 text-sm text-green-500">
              <Check className="size-4" />
              Link copiado!
            </div>
          )}

          <div className="flex justify-end gap-2">
            <DialogClose asChild>
              <Button variant="destructive">Cancelar</Button>
            </DialogClose>

            <Button
              variant="secondary"
              className="border border-border"
              onClick={() => {
                navigator.clipboard.writeText(url);
                setCopied(true);
                inputRef.current?.select();
              }}
            >
              <Copy className="size-4" />
              Compartilhar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
