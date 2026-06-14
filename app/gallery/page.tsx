import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — ml.blendz",
  description:
    "Before and after photos from ml.blendz. Clean fades and color work in Los Altos / Mountain View.",
};

const placeholders = Array.from({ length: 9 }, (_, i) => i + 1);

export default function Gallery() {
  return (
    <div className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Gallery
          </h1>
          <p className="mb-6 text-zinc-400">Real work. No filters.</p>
          <a
            href="https://www.instagram.com/ml.blendz._"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gold transition-colors hover:text-gold-light"
          >
            See more on Instagram @ml.blendz._ &rarr;
          </a>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {placeholders.map((n) => (
            <div
              key={n}
              className="flex aspect-square items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900"
            >
              <p className="px-4 text-center text-xs text-zinc-600">
                Photo {n} — add your best work here
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-zinc-600">
          More on{" "}
          <a
            href="https://www.instagram.com/ml.blendz._"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold transition-colors hover:text-gold-light"
          >
            @ml.blendz._
          </a>
        </p>
      </div>
    </div>
  );
}
