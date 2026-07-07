import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import Counter from "@/components/Counter";
import PageHeader from "@/components/PageHeader";

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

const stats = [
  { end: 3, suffix: "", label: "years cutting" },
  { end: 500, suffix: "+", label: "haircuts" },
  { end: 5, suffix: "M+", label: "TikTok views" },
];

export default function About() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <PageHeader eyebrow="The Story" title="About">
          <p className="text-lg text-zinc-400">
            High schooler. Barber. 500+ cuts and counting.
          </p>
        </PageHeader>

        {/* Photo */}
        <AnimateIn className="mb-14 flex justify-center">
          <div className="group relative">
            <div className="absolute -inset-3 rounded-2xl border border-gold/25 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800">
              <Image
                src="/max-cutting.jpg"
                alt="Max cutting a client's hair in his garage barbershop"
                width={400}
                height={500}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
                In the chair
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Stats */}
        <div className="mb-16 grid grid-cols-3 gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-4 py-8 text-center">
          {stats.map((stat, i) => (
            <AnimateIn key={stat.label} delay={i * 0.1}>
              <p className="font-display text-4xl tracking-widest text-gold md:text-5xl">
                <Counter end={stat.end} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs text-zinc-400 md:text-sm">{stat.label}</p>
            </AnimateIn>
          ))}
        </div>

        {/* Intro */}
        <AnimateIn>
          <p className="mb-16 text-lg leading-relaxed text-zinc-300">
            I&apos;m Max, a high schooler based in Los Altos / Mountain View. Three
            years ago I picked up a pair of clippers to cut a friend&apos;s hair.
            Today it&apos;s a real business — hundreds of clients, a color service,
            and millions of people watching the work online.
          </p>
        </AnimateIn>

        {/* Timeline */}
        <div className="relative mb-16 space-y-12 pl-16">
          <div className="absolute bottom-2 left-5 top-2 w-px bg-gradient-to-b from-gold/60 via-zinc-800 to-transparent" />
          {timeline.map((step, i) => (
            <AnimateIn key={step.title} delay={i * 0.08} direction="left">
              <div className="relative">
                <span className="font-display absolute -left-16 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-zinc-950 text-sm tracking-widest text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display mb-2 text-2xl tracking-widest text-white">
                  {step.title}
                </h2>
                <p className="leading-relaxed text-zinc-400">{step.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* TODO(Max): add a second photo here — a good before/after or a shot
            of the setup. Drop it in /public and swap in an <Image> like above. */}

        {/* Socials */}
        <AnimateIn>
          <div className="relative mt-12 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,67,0.08),transparent_60%)]" />
            <h2 className="relative mb-6 text-lg font-semibold text-white">
              Follow the work
            </h2>
            <div className="relative flex flex-col gap-4 sm:flex-row">
              <a
                href="https://www.tiktok.com/@ml.blendz._"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-xl border border-zinc-700 px-6 py-4 text-center text-sm font-medium text-white transition-all hover:border-gold/50 hover:bg-white/5"
              >
                TikTok
                <br />
                <span className="text-zinc-400">@ml.blendz._</span>
              </a>
              <a
                href="https://www.instagram.com/ml.blendz._"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-xl border border-zinc-700 px-6 py-4 text-center text-sm font-medium text-white transition-all hover:border-gold/50 hover:bg-white/5"
              >
                Instagram
                <br />
                <span className="text-zinc-400">@ml.blendz._</span>
              </a>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn className="mt-12 text-center">
          <Link
            href="/book"
            className="glow-gold inline-block rounded-full bg-gold px-10 py-4 text-base font-bold text-black transition-all hover:bg-gold-light hover:scale-105 active:scale-95"
          >
            Book a Cut
          </Link>
        </AnimateIn>
      </div>
    </div>
  );
}
