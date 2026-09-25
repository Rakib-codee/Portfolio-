"use server";

import { Resend } from "resend";
import { profile } from "@/content/profile";

export type ContactState = {
  status: "idle" | "success" | "error" | "fallback";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "subject" | "message", string>>;
  /** Prefilled mailto: link, returned when no email provider is configured. */
  mailto?: string;
};

// Note: a "use server" module may only export async functions, so the
// initial state object lives in the client form component instead.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(value: FormDataEntryValue | null, max: number): string {
  return String(value ?? "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .trim()
    .slice(0, max);
}

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real users never see or fill this field.
  if (clean(formData.get("company"), 200)) {
    return { status: "success", message: "Thanks, your message has been sent." };
  }

  const name = clean(formData.get("name"), 80);
  const email = clean(formData.get("email"), 120);
  const subject = clean(formData.get("subject"), 140);
  const message = clean(formData.get("message"), 5000);

  const errors: ContactState["errors"] = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (subject.length < 3) errors.subject = "Please add a short subject.";
  if (message.length < 10) errors.message = "Please write at least a sentence.";
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", errors };
  }

  const to = process.env.CONTACT_TO || profile.email;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    const params = new URLSearchParams({
      subject: `[Portfolio] ${subject}`,
      body: `${message}\n\n— ${name} <${email}>`,
    });
    return {
      status: "fallback",
      message: "Email sending is not configured on this deployment yet. Use the button below to send it from your mail app.",
      mailto: `mailto:${to}?${params.toString()}`,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const from = process.env.CONTACT_FROM || "Portfolio Contact <onboarding@resend.dev>";
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    if (error) {
      console.error("Resend error:", error);
      return { status: "error", message: "Sending failed on the server. Please email me directly instead." };
    }
    return { status: "success", message: "Thanks, your message has been sent. I will reply by email." };
  } catch (err) {
    console.error("Contact action failed:", err);
    return { status: "error", message: "Something went wrong. Please email me directly instead." };
  }
}
