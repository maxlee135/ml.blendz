import AnimateIn from "@/components/AnimateIn";

// Shared header for inner pages: gold eyebrow label, big display title,
// subtitle, and a soft gold glow behind — same visual language as the hero.
export default function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative mb-16 text-center">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-64 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(212,168,67,0.10),transparent)]" />
      <AnimateIn>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
          {eyebrow}
        </p>
      </AnimateIn>
      <AnimateIn delay={0.1}>
        <h1 className="font-display mb-4 text-5xl tracking-widest text-white md:text-6xl">
          {title}
        </h1>
      </AnimateIn>
      {children && <AnimateIn delay={0.2}>{children}</AnimateIn>}
    </div>
  );
}
