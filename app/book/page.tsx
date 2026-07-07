import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";
import PageHeader from "@/components/PageHeader";

const faqs = [
  {
    q: "When are you available?",
    a: "Weekends (morning through evening) and weekday evenings. Pick a window in the form and I'll confirm an exact time with you.",
  },
  {
    q: "Where are you located?",
    a: "Los Altos / Mountain View, CA. I share the exact address once your appointment is confirmed.",
  },
  {
    q: "How long does it take?",
    a: "A haircut usually takes 30–45 minutes. Highlights or dye jobs take longer — plan for 2–3 hours depending on your hair.",
  },
  {
    q: "How do I pay?",
    a: "Cash preferred. Haircuts are $30, highlights/dye is $70.",
  },
  {
    q: "What should I expect?",
    a: "A real barber setup in a garage studio — professional clippers, proper lighting, and the same care you've seen in the videos. Come with clean, dry hair if you can.",
  },
];

export const metadata: Metadata = {
  title: "Book a Cut — ml.blendz",
  description:
    "Request a haircut or color appointment with ml.blendz in Los Altos / Mountain View. Haircuts from $30.",
};

export default function Book() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto max-w-lg">
        <PageHeader eyebrow="Weekends & Weekday Evenings" title="Book a Cut">
          <p className="text-zinc-400">
            Fill this out and I&apos;ll confirm your appointment via text or email.
          </p>
        </PageHeader>

        <BookingForm />

        <p className="mt-8 text-center text-sm text-zinc-600">
          Rather DM?{" "}
          <a
            href="https://www.instagram.com/ml.blendz._"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold transition-colors hover:text-gold-light"
          >
            @ml.blendz._ on Instagram
          </a>
        </p>

        {/* FAQ */}
        <section id="faq" className="mt-20">
          <h2 className="font-display mb-8 text-center text-3xl tracking-widest text-white">
            FAQ
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-zinc-800 bg-zinc-900 px-6 py-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-white [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="ml-4 text-gold transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
