import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-5 text-center">
          <Link href="/" className="text-xl font-bold text-white">
            ml.blendz
          </Link>
          <p className="text-sm text-zinc-500">
            Los Altos / Mountain View, CA &middot; Exact address shared after booking
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.tiktok.com/@ml.blendz._"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 transition-colors hover:text-gold"
            >
              TikTok
            </a>
            <a
              href="https://www.instagram.com/ml.blendz._"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-400 transition-colors hover:text-gold"
            >
              Instagram
            </a>
          </div>
          <p className="text-xs text-zinc-700">
            &copy; {new Date().getFullYear()} ml.blendz
          </p>
        </div>
      </div>
    </footer>
  );
}
