import type { Client } from "@libsql/client";
import { createClient } from "@libsql/client";

let db: Client | null = null;
let initPromise: Promise<void> | null = null;

async function getDb(): Promise<Client> {
  if (!db) {
    db = createClient({
      url: process.env.TURSO_DATABASE_URL || "file:data/blog.db",
      authToken: process.env.TURSO_AUTH_TOKEN,
    });

    initPromise = initSchema();
    await initPromise;
  } else if (initPromise) {
    await initPromise;
  }

  return db;
}

async function initSchema(): Promise<void> {
  await db?.execute(`
    CREATE TABLE IF NOT EXISTS blog_posts (
      id TEXT PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      content_md TEXT NOT NULL,
      summary TEXT,
      cover_image TEXT,
      read_time INTEGER NOT NULL DEFAULT 1,
      author_name TEXT NOT NULL,
      author_role TEXT NOT NULL,
      author_photo TEXT,
      published INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `);

  await db?.execute(
    "CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug)",
  );
  await db?.execute(
    "CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published)",
  );
  await db?.execute(
    "CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at)",
  );
}

export async function query<T>(sql: string, params?: unknown[]): Promise<T[]> {
  const client = await getDb();
  const result = await client.execute({ sql, args: params as never[] });
  return result.rows.map((row) => {
    const obj: Record<string, unknown> = {};
    for (let i = 0; i < result.columns.length; i++) {
      obj[result.columns[i]] = row[i];
    }
    return obj as T;
  });
}

export async function execute(
  sql: string,
  params?: unknown[],
): Promise<{ changes: number }> {
  const client = await getDb();
  const result = await client.execute({ sql, args: params as never[] });
  return { changes: result.rowsAffected };
}
