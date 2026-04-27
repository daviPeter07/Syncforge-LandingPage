const FALLBACK_SITE_URL = "https://syncforge-business.vercel.app/";

export const getSiteUrl = (): string => {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!rawUrl) {
    return FALLBACK_SITE_URL;
  }

  return rawUrl.endsWith("/") ? rawUrl.slice(0, -1) : rawUrl;
};
