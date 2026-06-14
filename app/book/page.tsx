import type { Metadata } from "next";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book a Cut — ml.blendz",
  description:
    "Request a haircut or color appointment with ml.blendz in Los Altos / Mountain View. Haircuts from $30.",
};

export default function Book() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto max-w-lg">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Book a Cut
          </h1>
          <p className="text-zinc-400">
            Fill this out and I&apos;ll confirm your appointment via text or email.
          </p>
        </div>

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
      </div>
    </div>
  );
}
