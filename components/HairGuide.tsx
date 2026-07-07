"use client";
import { useState } from "react";

// Product recommendations based on BASED (basedbodyworks.com) — the lineup
// Max actually uses and recommends. Not sponsored.
type Product = {
  name: string;
  url: string;
  why: string;
};

const products = {
  seaSalt: {
    name: "Sea Salt Spray",
    url: "https://based.com/products/sea-salt-spray",
    why: "Lightweight texture and volume with a natural matte finish — the everyday starting point.",
  },
  texturePowder: {
    name: "Texture Powder",
    url: "https://based.com/products/texturizing-powder",
    why: "Instant volume and grip for fine or shorter hair. A little goes a long way.",
  },
  clay: {
    name: "Hair Clay",
    url: "https://based.com/products/hair-clay",
    why: "Medium-strong hold with a matte finish — my go-to for keeping a style locked in without looking greasy.",
  },
  pomade: {
    name: "Pomade",
    url: "https://based.com/products/pomade",
    why: "Cleaner, slightly shinier hold for sharper styles like slick backs and comb overs.",
  },
  leaveIn: {
    name: "Leave-In Conditioner",
    url: "https://based.com/products/leave-in-conditioner",
    why: "Keeps hair soft, hydrated, and healthy — especially important if you bleach or dye.",
  },
  curlCream: {
    name: "Curl Cream",
    url: "https://based.com/products/curl-cream",
    why: "Defines curls and cuts frizz without crunch.",
  },
  curlMousse: {
    name: "Curl Mousse",
    url: "https://based.com/products/curl-mousse",
    why: "Lifts curls at the root for volume that lasts all day.",
  },
  curlGel: {
    name: "Curl Gel",
    url: "https://based.com/products/curl-gel",
    why: "Stronger hold that locks curl definition in place.",
  },
  curlRefresh: {
    name: "Curl Refresh Spray",
    url: "https://based.com/products/curl-refresh-spray",
    why: "Revives day-two curls without a full re-wash.",
  },
} satisfies Record<string, Product>;

const hairTypes = ["Straight", "Wavy", "Curly", "Coily"] as const;
const goals = [
  "Volume & texture",
  "Hold & style",
  "Definition & frizz control",
  "Moisture & health",
] as const;

type HairType = (typeof hairTypes)[number];
type Goal = (typeof goals)[number];

const recommendations: Record<HairType, Record<Goal, { picks: Product[]; note: string }>> = {
  Straight: {
    "Volume & texture": {
      picks: [products.seaSalt, products.texturePowder],
      note: "Straight hair falls flat fast. Sea salt spray on damp hair, then texture powder at the roots once it's dry.",
    },
    "Hold & style": {
      picks: [products.clay, products.pomade],
      note: "Clay for a matte, natural look. Pomade if you want something sharper with a bit of shine.",
    },
    "Definition & frizz control": {
      picks: [products.seaSalt],
      note: "Sea salt spray adds bend and separation — the closest straight hair gets to a lived-in wave.",
    },
    "Moisture & health": {
      picks: [products.leaveIn],
      note: "A leave-in keeps straight hair soft and healthy, especially after color or bleach.",
    },
  },
  Wavy: {
    "Volume & texture": {
      picks: [products.seaSalt, products.texturePowder],
      note: "Sea salt spray is made for wavy hair — it brings the wave out. Add powder if your hair is fine.",
    },
    "Hold & style": {
      picks: [products.clay],
      note: "Clay gives waves shape and hold without flattening them or going shiny.",
    },
    "Definition & frizz control": {
      picks: [products.curlCream],
      note: "A small amount of curl cream on damp hair defines the wave pattern and kills frizz.",
    },
    "Moisture & health": {
      picks: [products.leaveIn],
      note: "Waves frizz when they're dry. A leave-in keeps them hydrated and smooth.",
    },
  },
  Curly: {
    "Volume & texture": {
      picks: [products.curlMousse],
      note: "Mousse lifts curls from the root — volume without weighing them down.",
    },
    "Hold & style": {
      picks: [products.curlGel],
      note: "Gel locks your curl pattern in so it survives the whole day.",
    },
    "Definition & frizz control": {
      picks: [products.curlCream, products.curlGel],
      note: "Curl cream first for definition, then gel over it to seal. Apply on damp hair, scrunch, don't touch while it dries.",
    },
    "Moisture & health": {
      picks: [products.leaveIn, products.curlRefresh],
      note: "Leave-in after washing, refresh spray on day two or three. Curls need moisture more than anything.",
    },
  },
  Coily: {
    "Volume & texture": {
      picks: [products.curlMousse],
      note: "Mousse gives coils lift and shape without the crunch of a hard gel.",
    },
    "Hold & style": {
      picks: [products.curlGel],
      note: "A strong-hold gel keeps coils defined and in place all day.",
    },
    "Definition & frizz control": {
      picks: [products.curlCream, products.curlGel],
      note: "Layer curl cream, then gel — on soaking-wet hair for coils, worked through in sections.",
    },
    "Moisture & health": {
      picks: [products.leaveIn, products.curlRefresh],
      note: "Coily hair is the driest hair type. Leave-in conditioner is non-negotiable; refresh spray between wash days.",
    },
  },
};

// Small line drawings of each hair pattern, drawn as inline SVG paths.
const hairTypeIcons: Record<HairType, React.ReactNode> = {
  Straight: (
    <svg viewBox="0 0 40 24" className="h-6 w-10" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <path d="M8 2v20M16 2v20M24 2v20M32 2v20" />
    </svg>
  ),
  Wavy: (
    <svg viewBox="0 0 40 24" className="h-6 w-10" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <path d="M2 8c4-6 8-6 12 0s8 6 12 0 8-6 12 0" />
      <path d="M2 16c4-6 8-6 12 0s8 6 12 0 8-6 12 0" />
    </svg>
  ),
  Curly: (
    <svg viewBox="0 0 40 24" className="h-6 w-10" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <path d="M2 12c0-5 6-5 6 0s6 5 6 0 6-5 6 0 6 5 6 0 6-5 6 0" />
      <path d="M2 12c0 5 6 5 6 0" opacity={0.4} />
    </svg>
  ),
  Coily: (
    <svg viewBox="0 0 40 24" className="h-6 w-10" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <path d="M4 12a4 4 0 108 0 4 4 0 10-8 0M16 12a4 4 0 108 0 4 4 0 10-8 0M28 12a4 4 0 108 0 4 4 0 10-8 0" />
    </svg>
  ),
};

function OptionRow<T extends string>({
  options,
  value,
  onChange,
  icons,
}: {
  options: readonly T[];
  value: T | null;
  onChange: (v: T) => void;
  icons?: Record<T, React.ReactNode>;
}) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`flex flex-col items-center gap-2 rounded-xl border px-4 py-4 text-sm font-medium transition-all active:scale-95 ${
            value === option
              ? "glow-gold border-gold bg-gold/10 text-gold"
              : "border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-zinc-500 hover:bg-zinc-800/50"
          }`}
        >
          {icons && icons[option]}
          {option}
        </button>
      ))}
    </div>
  );
}

function StepLabel({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <h2 className="mb-4 flex items-center gap-3 text-lg font-semibold text-white">
      <span className="font-display flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/40 text-sm tracking-widest text-gold">
        {n}
      </span>
      {children}
    </h2>
  );
}

export default function HairGuide() {
  const [hairType, setHairType] = useState<HairType | null>(null);
  const [goal, setGoal] = useState<Goal | null>(null);

  const result = hairType && goal ? recommendations[hairType][goal] : null;

  return (
    <div className="space-y-10">
      <div>
        <StepLabel n={1}>What&apos;s your hair type?</StepLabel>
        <OptionRow options={hairTypes} value={hairType} onChange={setHairType} icons={hairTypeIcons} />
      </div>

      <div>
        <StepLabel n={2}>What do you want out of it?</StepLabel>
        <OptionRow options={goals} value={goal} onChange={setGoal} />
      </div>

      {result && (
        <div
          key={`${hairType}-${goal}`}
          className="animate-fade-up relative overflow-hidden rounded-2xl border border-gold/30 bg-zinc-900 p-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,168,67,0.10),transparent_60%)]" />
          <div className="relative">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
              {hairType} · {goal}
            </p>
            <h3 className="font-display mb-3 text-3xl tracking-widest text-gold">
              My Pick{result.picks.length > 1 ? "s" : ""} For You
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-zinc-400">{result.note}</p>
            <div className="space-y-4">
              {result.picks.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-zinc-700 bg-zinc-950/50 p-5 transition-all hover:border-gold/50 hover:bg-zinc-950"
                >
                  <p className="mb-1 font-semibold text-white">
                    {p.name}{" "}
                    <span className="inline-block text-gold transition-transform group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </p>
                  <p className="text-sm text-zinc-400">{p.why}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
