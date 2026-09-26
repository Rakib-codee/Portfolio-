"use client";

import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/actions/contact";
import { Button } from "@/components/ui/Button";
import { Alert, Check, Mail, Send } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const initialContactState: ContactState = { status: "idle" };

const field =
  "w-full rounded-xl border border-border bg-bg/60 px-4 py-3 text-sm text-fg placeholder:text-muted-2 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 aria-[invalid=true]:border-danger";

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initialContactState);
  const errors = state.errors ?? {};

  if (state.status === "success") {
    return (
      <div role="status" className="flex flex-col items-start gap-3 rounded-2xl border border-success/30 bg-success/10 p-6 text-sm">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-success/20 text-success">
          <Check size={20} />
        </span>
        <p className="text-fg">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-4" noValidate>
      {/* Honeypot: hidden from users, filled by bots. */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted">
            Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={field} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name && <p id="name-error" className="mt-1 text-xs text-danger">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@university.edu" className={field} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
          {errors.email && <p id="email-error" className="mt-1 text-xs text-danger">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-muted">
          Subject
        </label>
        <input id="subject" name="subject" type="text" required placeholder="Research collaboration, internship, question…" className={field} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? "subject-error" : undefined} />
        {errors.subject && <p id="subject-error" className="mt-1 text-xs text-danger">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted">
          Message
        </label>
        <textarea id="message" name="message" required rows={5} placeholder="A few sentences is plenty." className={cn(field, "resize-y")} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />
        {errors.message && <p id="message-error" className="mt-1 text-xs text-danger">{errors.message}</p>}
      </div>

      {state.status === "error" && (
        <p role="alert" className="flex items-center gap-2 rounded-xl border border-danger/30 bg-danger/10 px-3 py-2 text-sm text-fg">
          <Alert size={16} className="text-danger" /> {state.message}
        </p>
      )}

      {state.status === "fallback" && state.mailto ? (
        <div role="status" className="space-y-3 rounded-xl border border-accent/30 bg-accent/10 p-4 text-sm text-fg">
          <p>{state.message}</p>
          <Button href={state.mailto} variant="primary" size="md">
            <Mail size={16} /> Open in mail app
          </Button>
        </div>
      ) : (
        <Button type="submit" disabled={pending} size="lg" className="w-full sm:w-auto">
          {pending ? "Sending…" : "Send message"} <Send size={16} />
        </Button>
      )}
    </form>
  );
}
