import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import LazyVideo from "@/components/LazyVideo";
import PageHeader from "@/components/PageHeader";
import { haircutClips, dyeClips, type Clip } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery — ml.blendz",
  description:
    "Haircut and color work by ml.blendz in Los Altos / Mountain View.",
};

// The first clip in each section renders larger (a "featured" slot) so the
// grid has some rhythm instead of uniform tiles.
function ClipGrid({ clips }: { clips: Clip[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
      {clips.map((clip, i) => (
        <AnimateIn
          key={clip.src}
          delay={(i % 4) * 0.07}
          className={i === 0 ? "col-span-2 row-span-2" : ""}
        >
          <div className="group">
            <div className="aspect-[9/16] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all duration-300 group-hover:scale-[1.02] group-hover:border-gold/30">
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
        </AnimateIn>
      ))}
    </div>
  );
}

function SectionHeading({ title, count }: { title: string; count: number }) {
  return (
    <AnimateIn className="mb-6 flex items-baseline gap-3">
      <h2 className="font-display text-3xl tracking-widest text-white">{title}</h2>
      <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs font-medium text-zinc-500">
        {count} clips
      </span>
    </AnimateIn>
  );
}

export default function Gallery() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <PageHeader eyebrow="Real Work · No Filters" title="Gallery">
          <div>
            <p className="mb-6 text-zinc-400">Tap a video for sound.</p>
            <a
              href="https://www.instagram.com/ml.blendz._"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gold transition-colors hover:text-gold-light"
            >
              See more on Instagram @ml.blendz._ &rarr;
            </a>
          </div>
        </PageHeader>

        {/* Haircuts */}
        <section className="mb-20">
          <SectionHeading title="Haircuts" count={haircutClips.length} />
          <ClipGrid clips={haircutClips} />
        </section>

        {/* Dye / Color */}
        <section>
          <SectionHeading title="Highlights & Dye" count={dyeClips.length} />
          <ClipGrid clips={dyeClips} />
        </section>
      </div>
    </div>
  );
}
