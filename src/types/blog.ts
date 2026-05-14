export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content_md: string;
  summary: string | null;
  cover_image: string | null;
  read_time: number;
  author_name: string;
  author_role: string;
  author_photo: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateBlogPostInput {
  title: string;
  content_md: string;
  cover_image?: string;
  author_name: string;
  author_role: string;
  author_photo?: string;
  published?: boolean;
}

export interface UpdateBlogPostInput extends Partial<CreateBlogPostInput> {
  slug?: string;
}
