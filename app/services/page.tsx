import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing — ml.blendz",
  description:
    "Haircuts starting at $30. Highlights and dye jobs at $70. Book with ml.blendz in Los Altos / Mountain View.",
};

export default function Services() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Services & Pricing
          </h1>
          <p className="text-zinc-400">
            Straightforward pricing. No hidden fees, no upsells.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Haircut */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-10">
            <div className="mb-6">
              <p className="text-5xl font-bold text-gold">$30</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Haircut
              </h2>
            </div>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-center gap-3">
                <span className="text-gold">&#10003;</span> Fade or taper
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold">&#10003;</span> Trim and shape-up
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold">&#10003;</span> Clean finish
              </li>
            </ul>
          </div>

          {/* Highlights / Dye */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-10">
            <div className="mb-6">
              <p className="text-5xl font-bold text-gold">$70</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Highlights / Dye
              </h2>
            </div>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-center gap-3">
                <span className="text-gold">&#10003;</span> Full color or
                highlights
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold">&#10003;</span> Bleaching included
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold">&#10003;</span> Color consultation
              </li>
            </ul>
          </div>
        </div>

        {/* Notes */}
        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Good to know
          </h3>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li>
              &bull; Located in Los Altos / Mountain View &mdash; exact address
              shared after you book
            </li>
            <li>&bull; Appointments confirmed via text or email</li>
            <li>&bull; Cash preferred</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/book"
            className="inline-block rounded-full bg-gold px-10 py-4 text-base font-bold text-black transition-colors hover:bg-gold-light"
          >
            Book a Cut
          </Link>
        </div>
      </div>
    </div>
  );
}
