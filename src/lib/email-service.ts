import nodemailer from "nodemailer";
import type { ContactFormData } from "@/types/contact-form";

const CONTACT_RECIPIENT_EMAIL = "contato.syncforge@gmail.com";
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_SECURE = process.env.SMTP_SECURE;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SMTP_FROM_EMAIL = process.env.SMTP_FROM_EMAIL;

const getRequiredValue = (
  value: string | undefined,
  envName: string,
): string => {
  if (!value) {
    throw new Error(`Missing required environment variable: ${envName}`);
  }

  return value;
};

const parseSmtpPort = (value: string): number => {
  const port = Number.parseInt(value, 10);
  if (Number.isNaN(port)) {
    throw new Error("Invalid SMTP port. Expected a valid number.");
  }

  return port;
};

const parseSmtpSecure = (value: string): boolean => {
  return value.toLowerCase() === "true";
};

const createTransporter = () => {
  const host = getRequiredValue(SMTP_HOST, "SMTP_HOST");
  const port = parseSmtpPort(getRequiredValue(SMTP_PORT, "SMTP_PORT"));
  const secure = parseSmtpSecure(getRequiredValue(SMTP_SECURE, "SMTP_SECURE"));
  const user = getRequiredValue(SMTP_USER, "SMTP_USER");
  const pass = getRequiredValue(SMTP_PASS, "SMTP_PASS");

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
};

export const sendContactEmail = async (payload: ContactFormData) => {
  const transporter = createTransporter();
  const from = SMTP_FROM_EMAIL ?? getRequiredValue(SMTP_USER, "SMTP_USER");
  const escapedMessage = escapeHtml(payload.message).replace(/\n/g, "<br />");

  const info = await transporter.sendMail({
    from: `SyncForge Website <${from}>`,
    to: CONTACT_RECIPIENT_EMAIL,
    replyTo: payload.email,
    subject: `[Site] ${payload.subject}`,
    text: [
      "Nova mensagem recebida pelo formulário do site:",
      "",
      `Nome: ${payload.name}`,
      `Email: ${payload.email}`,
      `Assunto: ${payload.subject}`,
      "",
      "Mensagem:",
      payload.message,
    ].join("\n"),
    html: `<!DOCTYPE html>
<html lang="pt-BR">
  <body style="margin:0;padding:0;background:#000000;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#000000;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#00072d;border:1px solid #1b2c68;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="padding:24px 24px 16px 24px;background:linear-gradient(135deg,#051650 0%,#00072d 100%);border-bottom:1px solid #1b2c68;">
                <p style="margin:0;color:#b8c2e0;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;">SyncForge</p>
                <h1 style="margin:10px 0 0 0;font-size:22px;line-height:1.3;color:#ffffff;">Nova mensagem pelo formulario do site</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 24px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #1b2c68;color:#b8c2e0;font-size:13px;width:120px;">Nome</td>
                    <td style="padding:10px 0;border-bottom:1px solid #1b2c68;color:#ffffff;font-size:14px;">${escapeHtml(payload.name)}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #1b2c68;color:#b8c2e0;font-size:13px;">Email</td>
                    <td style="padding:10px 0;border-bottom:1px solid #1b2c68;color:#ffffff;font-size:14px;">${escapeHtml(payload.email)}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #1b2c68;color:#b8c2e0;font-size:13px;">Assunto</td>
                    <td style="padding:10px 0;border-bottom:1px solid #1b2c68;color:#ffffff;font-size:14px;">${escapeHtml(payload.subject)}</td>
                  </tr>
                </table>

                <div style="margin-top:20px;padding:16px;border:1px solid #1b2c68;background:#051650;border-radius:10px;">
                  <p style="margin:0 0 8px 0;color:#b8c2e0;font-size:13px;">Mensagem</p>
                  <p style="margin:0;color:#ffffff;font-size:14px;line-height:1.65;">${escapedMessage}</p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 24px;border-top:1px solid #1b2c68;background:#030b2b;">
                <p style="margin:0;color:#7d8fc4;font-size:12px;">Enviado automaticamente pelo formulario de contato da landing page.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`,
  });

  return info;
};

const escapeHtml = (value: string): string => {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
};
