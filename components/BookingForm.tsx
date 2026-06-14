"use client";
import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

// To activate the booking form:
// 1. Go to https://formspree.io and create a free account with mrhenrylee@gmail.com
// 2. Create a new form — Formspree will give you an endpoint like https://formspree.io/f/abcdefgh
// 3. Replace the FORMSPREE_ENDPOINT value below with your actual endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvznddnw";

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-20 text-center">
        <div className="max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-12">
          <p className="mb-4 text-4xl">&#9986;</p>
          <h2 className="mb-4 text-2xl font-bold text-white">Request Sent!</h2>
          <p className="text-zinc-400">
            I&apos;ll text or email you to confirm your appointment. Talk soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-zinc-300"
        >
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="First name or nickname"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-600 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>

      {/* Contact */}
      <div>
        <label
          htmlFor="contact"
          className="mb-2 block text-sm font-medium text-zinc-300"
        >
          Phone or email
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          placeholder="How should I reach you?"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-600 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>

      {/* Service */}
      <div>
        <label
          htmlFor="service"
          className="mb-2 block text-sm font-medium text-zinc-300"
        >
          Service
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        >
          <option value="">Select a service</option>
          <option value="Haircut ($30)">Haircut — $30</option>
          <option value="Highlights / Dye ($70)">
            Highlights / Dye — $70
          </option>
        </select>
      </div>

      {/* Preferred time */}
      <div>
        <label
          htmlFor="time"
          className="mb-2 block text-sm font-medium text-zinc-300"
        >
          Preferred day / time
        </label>
        <input
          id="time"
          name="time"
          type="text"
          required
          placeholder="e.g. Sat afternoon, weekdays after 4pm"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-600 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>

      {/* Notes */}
      <div>
        <label
          htmlFor="notes"
          className="mb-2 block text-sm font-medium text-zinc-300"
        >
          Anything else? (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="Style reference, questions, etc."
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-600 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Try again or DM me on Instagram.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-gold py-4 text-base font-bold text-black transition-colors hover:bg-gold-light disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Booking Request"}
      </button>
    </form>
  );
}
