import { randomUUID } from "node:crypto";
import { join } from "node:path";
import Database from "better-sqlite3";

const dbPath = process.env.DB_PATH || join(process.cwd(), "data", "blog.db");
const db = new Database(dbPath);

function stripMarkdown(md: string): string {
  return md
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[([^\]]*)\]\(.*?\)/g, "$1")
    .replace(/[#*`~>\-_|[\]]/g, "")
    .replace(/\n{2,}/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function estimateReadTime(contentMd: string): number {
  const wordCount = contentMd.split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / 200));
}

function generateSummary(contentMd: string, maxLength = 280): string {
  const plain = stripMarkdown(contentMd);
  if (plain.length <= maxLength) return plain;
  return `${plain.slice(0, maxLength).trim()}...`;
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 200);
}

const posts = [
  {
    title: "O que é CRM e por que sua empresa precisa de um?",
    content_md: `## O que é CRM?

**CRM** (Customer Relationship Management) é um sistema que centraliza e organiza todas as interações da sua empresa com clientes e potenciais clientes.

### Benefícios de um CRM

- **Centralização de dados**: Todas as informações dos clientes em um só lugar
- **Automação de tarefas**: Reduza o trabalho manual repetitivo
- **Relatórios inteligentes**: Decisões baseadas em dados reais
- **Melhora no atendimento**: Histórico completo de cada cliente

> "Empresas que usam CRM aumentam as vendas em até 29%." — *Forbes*

### Por que um CRM sob medida?

Soluções genéricas nem sempre atendem às necessidades específicas do seu negócio. Um CRM personalizado se adapta aos seus processos, não o contrário.

Quer saber mais? [Entre em contato](https://syncforge-business.vercel.app/#contato).`,
    cover_image: null,
    author_name: "Davi Peterson",
    author_role: "Founder e Desenvolvedor",
    author_photo: "/team/davi-peterson.jpg",
    published: true,
  },
  {
    title: "IA Generativa no Desenvolvimento de Software",
    content_md: `## IA Generativa: O Novo Paradigma

A inteligência artificial generativa está transformando a forma como desenvolvemos software. Ferramentas como **GitHub Copilot**, **Claude** e **ChatGPT** já são parte do dia a dia de desenvolvedores.

### Como a IA acelera o desenvolvimento

1. **Geração de código**: Crie funções e componentes em segundos
2. **Revisão automatizada**: Identifique bugs antes da produção
3. **Documentação**: Gere docs técnicas automaticamente
4. **Testes**: Crie casos de teste a partir do código

### Limitações importantes

A IA é uma ferramenta poderosa, mas não substitui a expertise humana:

- **Contexto de negócio**: A IA não entende as nuances do seu negócio
- **Decisões arquiteturais**: Escolhas estruturais ainda exigem experiência
- **Segurança**: Código gerado por IA precisa ser revisado

### O futuro

Na SyncForge, combinamos o melhor da IA com a experiência humana para entregar software de qualidade superior.

\`\`\`typescript
function calculateDiscount(price: number, tier: string): number {
  const discounts = { basic: 0, pro: 0.1, enterprise: 0.25 };
  return price * (1 - (discounts[tier] ?? 0));
}
\`\`\``,
    cover_image: null,
    author_name: "Davi Peterson",
    author_role: "Founder e Desenvolvedor",
    author_photo: "/team/davi-peterson.jpg",
    published: true,
  },
  {
    title: "Landing Page vs Site Institucional: Qual escolher?",
    content_md: `## Landing Page vs Site Institucional

Essa é uma dúvida comum para quem está começando a presença digital. Vamos esclarecer as diferenças.

### Landing Page

Uma **landing page** é uma página focada em uma única ação (conversão).

**Quando usar:**
- Lançamento de produto
- Captura de leads
- Campanha sazonal
- Evento

### Site Institucional

Um **site institucional** apresenta sua empresa de forma completa.

**Quando usar:**
- Empresas estabelecidas
- Múltiplos serviços/produtos
- Portfólio e cases
- Blog e conteúdo

### E se eu precisar dos dois?

Na SyncForge, criamos soluções híbridas: um site institucional com landing pages embutidas para cada campanha.

| Característica | Landing Page | Site Institucional |
|---|---|---|
| Foco | Conversão | Informação |
| Páginas | 1 | 5+ |
| SEO | Moderado | Alto |
| Custo | Menor | Maior |

> Precisa de ajuda para decidir? [Fale conosco](https://syncforge-business.vercel.app/#contato)`,
    cover_image: null,
    author_name: "Davi Peterson",
    author_role: "Founder e Desenvolvedor",
    author_photo: "/team/davi-peterson.jpg",
    published: true,
  },
];

function seed() {
  db.exec(`
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

  console.log("🌱 Iniciando seed...");

  const insert = db.prepare(`
    INSERT INTO blog_posts (id, slug, title, content_md, summary, cover_image, read_time, author_name, author_role, author_photo, published)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const insertMany = db.transaction(() => {
    for (const post of posts) {
      const id = randomUUID();
      const slug = generateSlug(post.title);
      const summary = generateSummary(post.content_md);
      const readTime = estimateReadTime(post.content_md);

      try {
        insert.run(
          id,
          slug,
          post.title,
          post.content_md,
          summary,
          post.cover_image,
          readTime,
          post.author_name,
          post.author_role,
          post.author_photo,
          post.published ? 1 : 0,
        );
        console.log(`  ✅ ${post.title}`);
      } catch {
        console.log(`  ⏭️  ${post.title} (já existe)`);
      }
    }
  });

  insertMany();
  db.close();
  console.log("🌱 Seed concluído!");
}

seed();
