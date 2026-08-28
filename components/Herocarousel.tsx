"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

type Slide = {
  image: string;
  eyebrow: string;
  title: string;
  desc: string;
  cta: { label: string; href: string };
};

// Live images from the current site so it renders immediately.
// After migrating assets, swap these for local /public/slides/* paths.
const slides: Slide[] = [
  {
    image: "https://ieeebracu.com/wp-content/uploads/2025/07/The-ML-Playbook-1-1-1.jpg",
    eyebrow: "IEEE ComSoc BRACU SBC",
    title: "The ML Playbook: Foundations & Applications",
    desc: "A hands-on seminar unpacking the machine-learning workflow, from data to deployment.",
    cta: { label: "Read more", href: "/news" },
  },
  {
    image: "https://ieeebracu.com/wp-content/uploads/2020/04/web2.jpg",
    eyebrow: "IEEE BRACU Student Branch",
    title: "4th BIRDS International Workshop",
    desc: "Bringing together researchers and students around small-satellite systems and space technology.",
    cta: { label: "News & events", href: "/news" },
  },
  {
    image: "https://ieeebracu.com/wp-content/uploads/2025/07/Industry-Visit.png",
    eyebrow: "AESS BRACU SBC · 2025",
    title: "An Industry Visit by AESS",
    desc: "Members step onto the factory floor to see aerospace and electronic systems at work.",
    cta: { label: "About us", href: "/about" },
  },
  {
    image: "https://ieeebracu.com/wp-content/uploads/2025/07/13.jpg",
    eyebrow: "IEEE PES BRACU SBC · 2025",
    title: "Industrial Tour to the Orion Power Plant",
    desc: "A close look at large-scale power generation and the engineering that keeps the grid running.",
    cta: { label: "Read more", href: "/news/orion-power-plant" },
  },
];

const stats = [
  { n: "2008", l: "Established" },
  { n: "6", l: "Technical Chapters" },
  { n: "1500+", l: "Members to date" },
  { n: "50+", l: "Events / year" },
];

const AUTOPLAY = 5500;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir: number) => setCurrent((c) => (c + dir + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), AUTOPLAY);
    return () => clearInterval(t);
  }, [paused, go, current]);

  const s = slides[current];

  return (
    <section className="bg-[#F5F3EE] font-[family-name:var(--font-sans)]">
      {/* full-bleed hero */}
      <div
        className="relative h-[72vh] min-h-[520px] overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-roledescription="carousel"
      >
        {slides.map((sl, i) => (
          <Image
            key={i}
            src={sl.image}
            alt={sl.title}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* navy scrim: left-weighted + bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(6,20,36,.86) 0%, rgba(6,20,36,.62) 42%, rgba(6,20,36,.18) 100%), linear-gradient(0deg, rgba(6,20,36,.55) 0%, rgba(6,20,36,0) 45%)",
          }}
        />

        <div className="relative mx-auto flex h-full max-w-[1200px] flex-col justify-center px-8">
          <div key={current} className="max-w-[640px] animate-[ibUp_.7s_ease]">
            <div className="mb-5 flex items-center gap-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#CFE0EC]">
              <span className="inline-block h-0.5 w-[38px] bg-[#3E9BD6]" />
              {s.eyebrow}
            </div>
            <h1 className="mb-[18px] font-[family-name:var(--font-serif)] text-[clamp(30px,4.4vw,54px)] font-semibold leading-[1.08] tracking-[-0.015em] text-white">
              {s.title}
            </h1>
            <p className="mb-[30px] max-w-[52ch] text-[16px] leading-[1.6] text-white/80">
              {s.desc}
            </p>
            <div className="flex gap-3">
              <Link
                href={s.cta.href}
                className="rounded-[7px] bg-[#00629B] px-[18px] py-[9px] text-[13.5px] font-semibold text-white transition-colors hover:bg-[#004E7C]"
              >
                {s.cta.label}
              </Link>
              <Link
                href="/news"
                className="rounded-[7px] border border-white/55 px-[18px] py-[9px] text-[13.5px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                All events
              </Link>
            </div>
          </div>

          {/* structured controls */}
          <div className="absolute inset-x-8 bottom-10 flex items-center gap-5">
            <div className="flex items-baseline gap-1.5 font-[family-name:var(--font-serif)] text-white">
              <span className="text-[24px] font-semibold">0{current + 1}</span>
              <span className="text-[13px] text-white/60">/ 0{slides.length}</span>
            </div>
            <div className="h-0.5 max-w-[220px] flex-1 overflow-hidden bg-white/25">
              <span
                key={current}
                className="block h-full w-0 bg-white"
                style={{ animation: `ibFill ${AUTOPLAY}ms linear` }}
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="Previous slide"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/40 bg-white/[0.06] text-[20px] leading-none text-white transition-colors hover:bg-white hover:text-[#0A2540]"
              >
                ‹
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next slide"
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/40 bg-white/[0.06] text-[20px] leading-none text-white transition-colors hover:bg-white hover:text-[#0A2540]"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* overlapping stats strip */}
      <div className="mx-auto max-w-[1200px] px-8">
        <div className="relative z-[5] -mt-11 grid grid-cols-2 overflow-hidden rounded-xl border border-[#E3DFD5] bg-white shadow-[0_16px_40px_rgba(20,22,24,0.08)] md:grid-cols-4">
          {stats.map((st, i) => (
            <div
              key={st.l}
              className={`px-[30px] py-[26px] ${
                i % 2 !== 0 ? "border-l border-[#E3DFD5]" : ""
              } ${i >= 2 ? "border-t border-[#E3DFD5] md:border-t-0" : ""} ${
                i !== 0 ? "md:border-l md:border-[#E3DFD5]" : ""
              }`}
            >
              <div className="font-[family-name:var(--font-serif)] text-[34px] font-semibold leading-none text-[#0A2540]">
                {st.n}
              </div>
              <div className="mt-2 text-[12px] uppercase tracking-[0.1em] text-[#6E7178]">
                {st.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes ibFill {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes ibUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}