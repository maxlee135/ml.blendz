import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
        <video src="/gallery/haircuts/cut2.MOV" autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover object-top opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_60%,rgba(212,168,67,0.08),transparent)]" />
        <div className="relative z-10">
          <AnimateIn delay={0.1}><p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-gold">Los Altos · Mountain View, CA</p></AnimateIn>
          <AnimateIn delay={0.2}><h1 className="font-display mb-6 text-[clamp(2.5rem,10vw,10rem)] leading-none tracking-widest text-white">ML.BLENDZ</h1></AnimateIn>
          <AnimateIn delay={0.35}><p className="mb-10 text-lg text-zinc-300 md:text-xl">Precision cuts. Real results.</p></AnimateIn>
          <AnimateIn delay={0.45}>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/book" className="glow-gold rounded-full bg-gold px-10 py-4 text-base font-bold text-black transition-all hover:bg-gold-light hover:scale-105">Book a Cut</Link>
              <Link href="/services" className="rounded-full border border-zinc-600 px-10 py-4 text-base font-medium text-white transition-all hover:border-zinc-400 hover:bg-white/5">See Prices</Link>
            </div>
          </AnimateIn>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" /></svg>
        </div>
      </section>

      <section className="border-y border-zinc-800/50 bg-zinc-900/40 px-4 py-16">
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-8 text-center">
          {[{end:3,suffix:"",label:"years cutting"},{end:500,suffix:"+",label:"haircuts"},{end:30,prefix:"$",suffix:"",label:"starting price"}].map((stat,i)=>(
            <AnimateIn key={i} delay={i*0.1}>
              <p className="font-display text-5xl tracking-widest text-gold md:text-6xl"><Counter end={stat.end} prefix={stat.prefix} suffix={stat.suffix}/></p>
              <p className="mt-2 text-sm text-zinc-400">{stat.label}</p>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="py-20">
        <AnimateIn className="mb-8 flex items-center justify-between px-4 md:px-8">
          <h2 className="font-display text-4xl tracking-widest text-white md:text-5xl">The Work</h2>
          <Link href="/gallery" className="text-sm font-medium text-gold transition-colors hover:text-gold-light">See all &rarr;</Link>
        </AnimateIn>
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 md:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {["/gallery/haircuts/cut1.MOV","/gallery/haircuts/cut2.MOV","/gallery/haircuts/cut3.MOV","/gallery/haircuts/cut4.MOV","/gallery/haircuts/cut5.MOV","/gallery/haircuts/cut6.MOV","/gallery/dye/dye1.MOV","/gallery/dye/dye2.MOV","/gallery/dye/dye3.MOV","/gallery/dye/dye4.MOV"].map((src,i)=>(
            <div key={i} className="aspect-[9/16] w-48 shrink-0 snap-start overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-transform hover:scale-[1.03] md:w-56">
              <video src={src} autoPlay muted loop playsInline className="h-full w-full object-contain"/>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <AnimateIn className="mb-12 text-center"><h2 className="font-display text-4xl tracking-widest text-white md:text-5xl">What I Offer</h2></AnimateIn>
          <div className="grid gap-6 md:grid-cols-2">
            {[{price:"$30",title:"Haircut",desc:"Fade, taper, trim — clean finish every time."},{price:"$70",title:"Highlights / Dye",desc:"Full color, highlights, bleaching included. Color consult too."}].map((s,i)=>(
              <AnimateIn key={i} delay={i*0.12}>
                <div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:border-gold/40 hover:shadow-2xl hover:shadow-gold/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>
                  <div className="relative">
                    <p className="font-display mb-1 text-6xl tracking-widest text-gold">{s.price}</p>
                    <h3 className="mb-3 text-xl font-semibold text-white">{s.title}</h3>
                    <p className="text-zinc-400">{s.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn className="mt-8 text-center" delay={0.2}><Link href="/services" className="text-sm font-medium text-gold transition-colors hover:text-gold-light">View all services &rarr;</Link></AnimateIn>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-zinc-800 bg-zinc-900 px-4 py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.06),transparent_65%)]"/>
        <AnimateIn className="relative mx-auto max-w-2xl text-center">
          <p className="font-display mb-3 text-[clamp(4rem,18vw,9rem)] leading-none tracking-widest text-white">5M+</p>
          <p className="mb-10 text-xl text-zinc-400">views on TikTok.</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="https://www.tiktok.com/@ml.blendz._" target="_blank" rel="noopener noreferrer" className="rounded-full border border-zinc-700 px-7 py-3 text-sm font-medium text-white transition-all hover:border-zinc-400 hover:bg-white/5">TikTok @ml.blendz._</a>
            <a href="https://www.instagram.com/ml.blendz._" target="_blank" rel="noopener noreferrer" className="rounded-full border border-zinc-700 px-7 py-3 text-sm font-medium text-white transition-all hover:border-zinc-400 hover:bg-white/5">Instagram @ml.blendz._</a>
            </div>
        </AnimateIn>
      </section>

      <section className="px-4 py-32 text-center">
        <AnimateIn className="mx-auto max-w-xl">
          <h2 className="font-display mb-6 text-5xl tracking-widest text-white md:text-6xl">Ready to get a cut?</h2>
          <p className="mb-10 text-zinc-400">Send a booking request and I&apos;ll confirm via text or email.</p>
          <Link href="/book" className="glow-gold inline-block rounded-full bg-gold px-12 py-4 text-base font-bold text-black transition-all hover:bg-gold-light hover:scale-105">Book Now</Link>
        </AnimateIn>
      </section>
    </>
  );
}