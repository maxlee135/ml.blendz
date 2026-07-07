import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — ml.blendz",
  description:
    "Max is a high school barber in Los Altos / Mountain View who's been cutting hair for 3 years, with hundreds of clients and 5M+ views on TikTok.",
};

// TODO(Max): read this copy out loud and edit anything that doesn't sound
// like you. It's your story — it should be in your voice.
const timeline = [
  {
    title: "The first cuts",
    body: "It started with clippers and friends brave enough to let me practice. The early fades were rough. I watched, studied, and re-cut until they weren't.",
  },
  {
    title: "Friends became clients",
    body: "Word spread. Friends brought friends, then their parents, then people I'd never met. What started as favors turned into a real business with real standards — and 500+ haircuts.",
  },
  {
    title: "Adding color",
    body: "I taught myself bleaching, highlights, and full dye jobs, and added them as a service. Color is a different skill from cutting, and I treat it that way — every color job starts with a consult.",
  },
  {
    title: "Going viral",
    body: "I started filming my cuts and posting them. The videos took off — 5M+ views on TikTok and counting. Everything you see in the gallery is real client work.",
  },
  {
    title: "Building this site",
    body: "I built this website myself, learning web development the same way I learned to cut: by doing it. The code is public on GitHub.",
  },
];

export default function About() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h1 className="font-display mb-4 text-5xl tracking-widest text-white md:text-6xl">
            About
          </h1>
          <p className="text-lg text-zinc-400">
            High schooler. Barber. 500+ cuts and counting.
          </p>
        </div>

        {/* Photo */}
        <div className="mb-16 flex justify-center">
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

        {/* Intro */}
        <p className="mb-16 text-lg leading-relaxed text-zinc-300">
          I&apos;m Max, a high schooler based in Los Altos / Mountain View. Three
          years ago I picked up a pair of clippers to cut a friend&apos;s hair.
          Today it&apos;s a real business — hundreds of clients, a color service,
          and millions of people watching the work online.
        </p>

        {/* Timeline */}
        <div className="relative mb-16 space-y-10 border-l border-zinc-800 pl-8">
          {timeline.map((step) => (
            <div key={step.title} className="relative">
              <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-gold bg-zinc-950" />
              <h2 className="font-display mb-2 text-2xl tracking-widest text-white">
                {step.title}
              </h2>
              <p className="leading-relaxed text-zinc-400">{step.body}</p>
            </div>
          ))}
        </div>

        {/* TODO(Max): add a second photo here — a good before/after or a shot
            of the setup. Drop it in /public and swap in an <Image> like above. */}

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
