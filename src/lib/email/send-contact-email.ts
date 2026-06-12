import { Resend } from "resend";

import { siteConfig } from "@/config/site";

type ContactEmailPayload = {
  name: string;
  email: string;
  message: string;
};

type SendContactEmailResult =
  | { ok: true }
  | { ok: false; reason: "missing_api_key" | "send_failed"; detail?: string };

export async function sendContactEmail(
  payload: ContactEmailPayload,
): Promise<SendContactEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { ok: false, reason: "missing_api_key" };
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.author.email;
  const from =
    process.env.RESEND_FROM ?? `Portfolio <onboarding@resend.dev>`;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: payload.email,
    subject: `Portfolio contact from ${payload.name}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      "",
      payload.message,
    ].join("\n"),
    html: `
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <hr />
      <p style="white-space: pre-wrap;">${escapeHtml(payload.message)}</p>
    `,
  });

  if (error) {
    console.error("[resend] send failed:", error);
    return { ok: false, reason: "send_failed", detail: error.message };
  }

  return { ok: true };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
