/**
 * Dados estruturados (schema.org) para o Google.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON gerado no servidor a partir de dados próprios
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
