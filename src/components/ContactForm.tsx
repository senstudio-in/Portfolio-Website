"use client";

import { useState, type FormEvent } from "react";
import SendButton from "./SendButton";

const budgets = ["< $1,000", "$1,000 - $5,000", "$5,000 - $10,000", "$10,000 - $20,000", "> $20,000"];

const label = "text-[20px] font-medium leading-6 text-white";
const field =
  "w-full border-b border-white/25 bg-transparent pb-1 font-poppins text-[16px] leading-6 text-white outline-none placeholder:text-white/40 focus:border-white transition-colors";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [budget, setBudget] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, budget }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      form.reset();
      setBudget("");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-10" noValidate={false}>
      <label className="flex flex-col gap-3">
        <span className={label}>Your E-mail</span>
        <input name="email" type="email" required placeholder="Enter the Email" autoComplete="email" className={field} />
      </label>

      <label className="flex flex-col gap-3">
        <span className={label}>Your Phone</span>
        <input name="phone" type="tel" placeholder="Enter Your Phone no" autoComplete="tel" className={field} />
      </label>

      <label className="flex flex-col gap-3">
        <span className={label}>Message</span>
        <textarea name="message" required rows={4} className={`${field} h-[100px] resize-y`} />
      </label>

      {/* honeypot — hidden from people, bots fill it */}
      <input name="website" type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <fieldset className="flex flex-col gap-[30px] pt-5">
        <legend className={`${label} mb-[30px]`}>Select your Budget</legend>
        <div className="flex flex-wrap gap-x-4 gap-y-4">
          {budgets.map((b) => {
            const active = budget === b;
            return (
              <button
                key={b}
                type="button"
                aria-pressed={active}
                onClick={() => setBudget(active ? "" : b)}
                className={`rounded-full px-6 py-[10px] font-poppins text-[16px] leading-6 transition-colors duration-300 ${
                  active
                    ? "bg-white text-black"
                    : "text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)]"
                }`}
              >
                {b}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="flex flex-col gap-4 pt-10">
        <SendButton label={status === "sending" ? "Sending…" : "Send Request"} disabled={status === "sending"} />
        <p aria-live="polite" className="min-h-6 font-poppins text-[15px] text-white/80">
          {status === "sent" && "Thanks! Your message is on its way — we'll get back to you soon."}
          {status === "error" && error}
        </p>
      </div>
    </form>
  );
}
