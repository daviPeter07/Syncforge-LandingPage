import { notFound } from "next/navigation";
import { BlogEditor } from "@/features/AdminBlog";
import { getPostByIdAdmin } from "@/lib/blog";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = getPostByIdAdmin(id);

  if (!post) notFound();

  return <BlogEditor post={post} />;
}
