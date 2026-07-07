import AnimateIn from "@/components/AnimateIn";

// TODO(Max): text each of these guys and ask for one honest sentence about
// their cut, then paste it into `quote`. A card only shows once its quote is
// filled in — empty quotes stay hidden, so nothing fake ever goes live.
const testimonials: { name: string; quote: string }[] = [
  { name: "Tristan", quote: "" },
  { name: "Justin", quote: "" },
  { name: "Zach", quote: "" },
  { name: "Chris", quote: "" },
];

export default function Testimonials() {
  const live = testimonials.filter((t) => t.quote.trim() !== "");
  if (live.length === 0) return null;

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <AnimateIn className="mb-12 text-center">
          <h2 className="font-display text-4xl tracking-widest text-white md:text-5xl">
            What Clients Say
          </h2>
        </AnimateIn>
        <div className="grid gap-6 sm:grid-cols-2">
          {live.map((t, i) => (
            <AnimateIn key={t.name} delay={i * 0.1}>
              <figure className="h-full rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
                <blockquote className="mb-4 text-lg leading-relaxed text-zinc-300">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="text-sm font-semibold text-gold">
                  — {t.name}
                </figcaption>
              </figure>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
