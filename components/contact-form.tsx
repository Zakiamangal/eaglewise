"use client";

import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { companyInfo } from "@/lib/site";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

type ContactFormProps = {
  formType: "professional" | "trading";
};

type Web3FormsJson = {
  success?: boolean;
  message?: string;
  body?: { message?: string };
};

function web3ErrorMessage(data: Web3FormsJson) {
  return data.message || data.body?.message || "Could not send your message.";
}

export function ContactForm({ formType }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorDetail, setErrorDetail] = useState("");

  const ringClass = formType === "trading" ? "ring-[#EB8B2E]" : "ring-primary";

  /** Free Web3Forms tier is meant for browser submits only (server-side needs paid + IP allowlist). */
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!accessKey?.trim()) {
      setStatus("error");
      setErrorDetail(
        "Form key missing. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local (same value as your Web3Forms access key) and restart the dev server.",
      );
      return;
    }

    setStatus("sending");
    setErrorDetail("");
    const formLabel = formType === "trading" ? "Trading & Partnership" : "Professional Services";
    const subject = `[Eaglewise · ${formLabel}] ${name.trim()}`;

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey.trim(),
          subject,
          name: name.trim(),
          email: email.trim().toLowerCase(),
          /** Replaces Web3Forms’ default “Notifications”; shows visitor + Eaglewise context. */
          from_name: `${name.trim()} · Eaglewise inquiry`,
          message: `Form: ${formLabel}\nFrom: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as Web3FormsJson;

      if (!res.ok || data.success !== true) {
        setStatus("error");
        setErrorDetail(web3ErrorMessage(data) || "Please try email or phone.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorDetail("Network error. Please try again or email us directly.");
    }
  }

  return (
    <form className="mt-5 space-y-4" onSubmit={onSubmit} noValidate>
      <div>
        <label htmlFor={`cf-name-${formType}`} className="mb-2 block text-sm font-medium">
          Full Name
        </label>
        <input
          id={`cf-name-${formType}`}
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
          className={`w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 ${ringClass}`}
        />
      </div>
      <div>
        <label htmlFor={`cf-email-${formType}`} className="mb-2 block text-sm font-medium">
          Email
        </label>
        <input
          id={`cf-email-${formType}`}
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className={`w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 ${ringClass}`}
        />
      </div>
      <div>
        <label htmlFor={`cf-message-${formType}`} className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id={`cf-message-${formType}`}
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={
            formType === "trading"
              ? "Describe your partnership, sourcing, or distribution requirement"
              : "Describe your consultancy or advisory requirement"
          }
          className={`w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:ring-2 ${ringClass}`}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#EB8B2E] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d97a22] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          "Submit inquiry"
        )}
      </button>

      {status === "success" ? (
        <p className="text-sm font-medium text-emerald-700" role="status">
          Thank you — your message was sent. We will reply soon.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-red-600" role="alert">
          {errorDetail}
        </p>
      ) : null}
      <p className="text-xs text-muted-foreground">
        Submissions are delivered by email. You can also write directly to{" "}
        <a
          href={`mailto:${companyInfo.email}`}
          className="font-medium text-[#EB8B2E] underline-offset-2 hover:underline"
        >
          {companyInfo.email}
        </a>
        .
      </p>
    </form>
  );
}
