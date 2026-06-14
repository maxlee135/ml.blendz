import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery — ml.blendz",
  description:
    "Haircut and color work by ml.blendz in Los Altos / Mountain View.",
};

const haircutVideos = [
  "/gallery/haircuts/cut1.MOV",
  "/gallery/haircuts/cut2.MOV",
  "/gallery/haircuts/cut3.MOV",
  "/gallery/haircuts/cut4.MOV",
  "/gallery/haircuts/cut5.MOV",
  "/gallery/haircuts/cut6.MOV",
];

const dyeVideos = [
  "/gallery/dye/dye1.MOV",
  "/gallery/dye/dye2.MOV",
  "/gallery/dye/dye3.MOV",
];

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

        {/* Haircuts */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Haircuts</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {haircutVideos.map((src, i) => (
              <div key={i} className="aspect-[9/16] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Dye / Color */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-white">Highlights & Dye</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {dyeVideos.map((src, i) => (
              <div key={i} className="aspect-[9/16] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
