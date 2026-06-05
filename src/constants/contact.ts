export const CONTACT_EMAIL = "contato.syncforge@gmail.com";

export const CONTACT_EMAIL_HREF =
  "mailto:contato.syncforge@gmail.com?subject=Contato%20pelo%20site%20SyncForge&body=Ola%2C%20vim%20pelo%20site%20da%20SyncForge%20e%20quero%20falar%20sobre%20um%20projeto.";

export const CONTACT_WHATSAPP_HREF =
  "https://wa.me/5592992584985?text=Ola%2C%20vim%20pelo%20site%20da%20SyncForge%20e%20quero%20falar%20sobre%20um%20projeto.";

export function buildWhatsAppHref(message: string) {
  return `https://wa.me/5592992584985?text=${encodeURIComponent(message)}`;
}
