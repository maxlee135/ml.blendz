import type { Metadata } from "next";
import Link from "next/link";
import HairGuide from "@/components/HairGuide";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Hair Guide — ml.blendz",
  description:
    "Find the right hair products for your hair type. Recommendations from a barber with 500+ cuts.",
};

export default function HairGuidePage() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto max-w-2xl">
        <PageHeader eyebrow="Products" title="Hair Guide">
          <p className="text-zinc-400">
            Two questions, and I&apos;ll tell you what to put in your hair — the
            same products I recommend to clients in the chair.
          </p>
        </PageHeader>

        <HairGuide />

        <p className="mt-12 text-center text-xs text-zinc-600">
          Recommendations from the BASED lineup. Not sponsored — just what I use
          and recommend.
        </p>

        <div className="mt-14 rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center">
          <p className="mb-4 text-zinc-300">
            Products only take you so far — the cut does the rest.
          </p>
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
