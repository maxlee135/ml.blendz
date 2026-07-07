import Link from "next/link";
import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Services & Pricing — ml.blendz",
  description:
    "Haircuts starting at $30. Highlights and dye jobs at $70. Book with ml.blendz in Los Altos / Mountain View.",
};

export default function Services() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <PageHeader eyebrow="Simple Pricing" title="Services & Pricing">
          <p className="text-zinc-400">Two services. No hidden fees.</p>
        </PageHeader>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Haircut */}
          <AnimateIn>
          <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-10 transition-all duration-300 hover:border-gold/40 hover:shadow-2xl hover:shadow-gold/10">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="mb-6">
              <p className="font-display text-5xl tracking-widest text-gold">$30</p>
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
          </AnimateIn>

          {/* Highlights / Dye */}
          <AnimateIn delay={0.12}>
          <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-10 transition-all duration-300 hover:border-gold/40 hover:shadow-2xl hover:shadow-gold/10">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="mb-6">
              <p className="font-display text-5xl tracking-widest text-gold">$70</p>
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
          </AnimateIn>
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
            <li>&bull; Available weekends and weekday evenings</li>
            <li>&bull; Appointments confirmed via text or email</li>
            <li>&bull; Cash preferred</li>
          </ul>
          <Link
            href="/book#faq"
            className="mt-4 inline-block text-sm font-medium text-gold transition-colors hover:text-gold-light"
          >
            More questions? Read the FAQ &rarr;
          </Link>
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
