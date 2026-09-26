"use server";

import { headers } from "next/headers";
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

/* ------------------------------------------------------------------
   Abuse protection for provider sends.
   In-memory sliding windows: per-IP and global. State lives per server
   instance, which on Vercel means per warm function; that is enough to
   stop a single client from draining the Resend quota without adding a
   paid store or secret. Swap `throttled` for a shared store (e.g. Upstash)
   if stronger guarantees are ever needed.
   ------------------------------------------------------------------ */
const IP_WINDOW_MS = 10 * 60 * 1000;
const IP_MAX = 3;
const GLOBAL_WINDOW_MS = 60 * 60 * 1000;
const GLOBAL_MAX = 60;

const perIp = new Map<string, number[]>();
let globalHits: number[] = [];

function throttled(ip: string): boolean {
  const now = Date.now();
  globalHits = globalHits.filter((t) => now - t < GLOBAL_WINDOW_MS);
  if (globalHits.length >= GLOBAL_MAX) return true;

  const hits = (perIp.get(ip) ?? []).filter((t) => now - t < IP_WINDOW_MS);
  if (hits.length >= IP_MAX) {
    perIp.set(ip, hits);
    return true;
  }
  hits.push(now);
  perIp.set(ip, hits);
  globalHits.push(now);

  // Keep the map bounded: drop entries whose window has fully expired.
  if (perIp.size > 2000) {
    for (const [key, times] of perIp) {
      if (times.every((t) => now - t >= IP_WINDOW_MS)) perIp.delete(key);
    }
  }
  return false;
}

async function clientIp(): Promise<string> {
  const h = await headers();
  return h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
}

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

  if (throttled(await clientIp())) {
    return {
      status: "error",
      message: "Too many messages from this network in a short time. Please try again later or email me directly.",
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
