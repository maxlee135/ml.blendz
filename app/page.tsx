import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="flex min-h-[88vh] flex-col items-center justify-center px-4 py-20 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
          Los Altos / Mountain View, CA
        </p>
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
          Clean fades.<br />Real results.
        </h1>
        <p className="mb-10 max-w-md text-lg text-zinc-400">
          Precision cuts from a barber who&apos;s done it hundreds of times.
</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/book"
            className="rounded-full bg-gold px-8 py-4 text-base font-bold text-black transition-colors hover:bg-gold-light"
          >
            Book a Cut
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-zinc-700 px-8 py-4 text-base font-medium text-white transition-colors hover:border-zinc-500"
          >
            See Prices
          </Link>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-zinc-800 bg-zinc-900 px-4 py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-gold">2</p>
            <p className="mt-1 text-sm text-zinc-400">years cutting</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gold">100s</p>
            <p className="mt-1 text-sm text-zinc-400">of clients</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gold">$30</p>
            <p className="mt-1 text-sm text-zinc-400">starting price</p>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            What I Offer
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
              <p className="mb-2 text-3xl font-bold text-gold">$30</p>
              <h3 className="mb-3 text-xl font-semibold text-white">Haircut</h3>
              <p className="text-zinc-400">
                Clean fade, taper, or trim — whatever you need to walk out
                looking fresh.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
              <p className="mb-2 text-3xl font-bold text-gold">$70</p>
              <h3 className="mb-3 text-xl font-semibold text-white">
                Highlights / Dye
              </h3>
              <p className="text-zinc-400">
                Color services including highlights and full dye jobs —
                bleaching included.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="text-sm font-medium text-gold transition-colors hover:text-gold-light"
            >
              View all services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-t border-zinc-800 bg-zinc-900 px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-5xl font-bold text-white">1M+</p>
          <p className="mb-8 text-lg text-zinc-400">
            views on TikTok. Real work, real results — not a filter in sight.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://www.tiktok.com/@ml.blendz._"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-zinc-500"
            >
              TikTok @ml.blendz._
            </a>
            <a
              href="https://www.instagram.com/ml.blendz._"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-zinc-500"
            >
              Instagram @ml.blendz._
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-24 text-center">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-6 text-3xl font-bold text-white">
            Ready to get a cut?
          </h2>
          <p className="mb-8 text-zinc-400">
            Send a booking request and I&apos;ll confirm your appointment via text
            or email.
          </p>
          <Link
            href="/book"
            className="inline-block rounded-full bg-gold px-10 py-4 text-base font-bold text-black transition-colors hover:bg-gold-light"
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
