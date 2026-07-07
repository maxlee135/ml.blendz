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

function OptionRow<T extends string>({
  options,
  value,
  onChange,
}: {
  options: readonly T[];
  value: T | null;
  onChange: (v: T) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
            value === option
              ? "border-gold bg-gold/10 text-gold"
              : "border-zinc-700 bg-zinc-900 text-zinc-300 hover:border-zinc-500"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default function HairGuide() {
  const [hairType, setHairType] = useState<HairType | null>(null);
  const [goal, setGoal] = useState<Goal | null>(null);

  const result = hairType && goal ? recommendations[hairType][goal] : null;

  return (
    <div className="space-y-10">
      <div>
        <h2 className="mb-4 text-lg font-semibold text-white">
          1. What&apos;s your hair type?
        </h2>
        <OptionRow options={hairTypes} value={hairType} onChange={setHairType} />
      </div>

      <div>
        <h2 className="mb-4 text-lg font-semibold text-white">
          2. What do you want out of it?
        </h2>
        <OptionRow options={goals} value={goal} onChange={setGoal} />
      </div>

      {result && (
        <div className="rounded-2xl border border-gold/30 bg-zinc-900 p-8">
          <h3 className="font-display mb-2 text-2xl tracking-widest text-gold">
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
                className="block rounded-xl border border-zinc-700 p-5 transition-colors hover:border-gold/50"
              >
                <p className="mb-1 font-semibold text-white">
                  {p.name} <span className="text-gold">&rarr;</span>
                </p>
                <p className="text-sm text-zinc-400">{p.why}</p>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
