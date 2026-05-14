import type { ReactNode } from "react";
import { AdminHeader } from "@/features/AdminBlog/AdminHeader";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-svh bg-background">
      <AdminHeader />
      <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
    </div>
  );
}
