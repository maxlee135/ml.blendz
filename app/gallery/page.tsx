import type { Metadata } from "next";
import LazyVideo from "@/components/LazyVideo";
import { haircutClips, dyeClips, type Clip } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery — ml.blendz",
  description:
    "Haircut and color work by ml.blendz in Los Altos / Mountain View.",
};

function ClipGrid({ clips }: { clips: Clip[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
      {clips.map((clip) => (
        <div key={clip.src}>
          <div className="aspect-[9/16] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
            <LazyVideo src={clip.src} poster={clip.poster} caption={clip.caption} unmutable />
          </div>
          {clip.tiktok && (
            <a
              href={clip.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-center text-xs font-medium text-gold transition-colors hover:text-gold-light"
            >
              Watch on TikTok &rarr;
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Gallery() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h1 className="font-display mb-4 text-5xl tracking-widest text-white md:text-6xl">
            Gallery
          </h1>
          <p className="mb-6 text-zinc-400">Real work. No filters. Tap a video for sound.</p>
          <a
            href="https://www.instagram.com/ml.blendz._"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gold transition-colors hover:text-gold-light"
          >
            See more on Instagram @ml.blendz._ &rarr;
          </a>
        </div>

        {/* Haircuts */}
        <section className="mb-16">
          <h2 className="font-display mb-6 text-3xl tracking-widest text-white">Haircuts</h2>
          <ClipGrid clips={haircutClips} />
        </section>

        {/* Dye / Color */}
        <section>
          <h2 className="font-display mb-6 text-3xl tracking-widest text-white">Highlights &amp; Dye</h2>
          <ClipGrid clips={dyeClips} />
        </section>
      </div>
    </div>
  );
}
