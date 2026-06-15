import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — ml.blendz",
  description:
    "Max is a high school barber in Los Altos / Mountain View who's been cutting hair for 3 years with hundreds of clients and a 1M-view TikTok.",
};

export default function About() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            About
          </h1>
        </div>

        {/* Photo */}
        <div className="mb-12 flex justify-center">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/max-cutting.jpg"
              alt="Max cutting a client's hair in his garage barbershop"
              width={400}
              height={500}
              className="object-cover"
            />
          </div>
        </div>

        {/* Story */}
        <div className="space-y-6 text-lg leading-relaxed text-zinc-300">
          <p>
            I&apos;m Max, a high schooler based in Los Altos / Mountain View who
            started cutting hair 3 years ago. What started as cutting for
            friends and family turned into hundreds of clients and a real
            business.
          </p>
          <p>
            I take barbering seriously. I&apos;ve spent 3 years refining my
            technique — fades, tapers, color.
          </p>
        </div>

        {/* Socials */}
        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
          <h2 className="mb-6 text-lg font-semibold text-white">
            Follow the work
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://www.tiktok.com/@ml.blendz._"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-xl border border-zinc-700 px-6 py-4 text-center text-sm font-medium text-white transition-colors hover:border-zinc-500"
            >
              TikTok
              <br />
              <span className="text-zinc-400">@ml.blendz._</span>
            </a>
            <a
              href="https://www.instagram.com/ml.blendz._"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-xl border border-zinc-700 px-6 py-4 text-center text-sm font-medium text-white transition-colors hover:border-zinc-500"
            >
              Instagram
              <br />
              <span className="text-zinc-400">@ml.blendz._</span>
            </a>
          </div>
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
