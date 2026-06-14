"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          ml.blendz
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${
                pathname === l.href
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="rounded-full bg-gold px-5 py-2 text-sm font-bold text-black transition-colors hover:bg-gold-light"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-zinc-800 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-base ${
                  pathname === l.href ? "text-white" : "text-zinc-400"
                }`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-base font-bold text-black"
              onClick={() => setOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
