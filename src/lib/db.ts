import { join } from "node:path";
import Database from "better-sqlite3";

let db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (!db) {
    const dbPath =
      process.env.DB_PATH || join(process.cwd(), "data", "blog.db");

    db = new Database(dbPath);

    db.pragma("journal_mode = WAL");
    db.pragma("foreign_keys = ON");

    initSchema(db);
  }

  return db;
}

function initSchema(database: Database.Database): void {
  database.exec(`
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
    );

    CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
    CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
    CREATE INDEX IF NOT EXISTS idx_blog_posts_created_at ON blog_posts(created_at);
  `);
}

export function closeDb(): void {
  if (db) {
    db.close();
    db = null;
  }
}
