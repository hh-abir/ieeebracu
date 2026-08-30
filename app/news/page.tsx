"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Post = {
  slug: string;
  image: string;
  tag: string;
  chapter: string;
  date: string;
  title: string;
  excerpt: string;
};

// Replace with CMS fetch after migration
const allPosts: Post[] = [
  {
    slug: "survive-or-thrive-how-bangladeshs-engineers-can-win-in-the-age-of-ai",
    image: "https://ieeebracu.com/wp-content/uploads/2026/06/678455570_1609210241206792_3124385584510281921_n.jpg",
    tag: "Webinar",
    chapter: "Student Branch",
    date: "Jun 15, 2026",
    title: "Survive or Thrive: How Bangladesh's Engineers Can Win in the Age of AI",
    excerpt: "IEEE BRACU SB, in collaboration with IEEE IUBAT SB, organized a webinar exploring how engineers in Bangladesh can adapt and lead in the AI era.",
  },
  {
    slug: "bridging-theory-and-practice-workshop-on-power-system-design-using-autocad",
    image: "https://ieeebracu.com/wp-content/uploads/2026/06/679799965_1377116257781428_6406804003297454992_n.jpg",
    tag: "Workshop",
    chapter: "PES",
    date: "Jun 10, 2026",
    title: "Bridging Theory and Practice: Workshop on Power System Design using AutoCAD",
    excerpt: "IEEE PES BRACU SBC organized a hands-on technical workshop on power system design, bringing CAD tools into the learning workflow.",
  },
  {
    slug: "shaping-tomorrows-grid-smart-grid-innovation-and-energy-transition",
    image: "https://ieeebracu.com/wp-content/uploads/2026/06/679092353_1376909337802120_195578129513660732_n.jpg",
    tag: "Seminar",
    chapter: "PES",
    date: "Jun 5, 2026",
    title: "Shaping Tomorrow's Grid: Smart Grid Innovation and Energy Transition",
    excerpt: "A seminar on the future of power grids, covering smart infrastructure, renewable integration, and the energy transition ahead.",
  },
  {
    slug: "the-ai-evolution-researching-smarter-presenting-better",
    image: "https://ieeebracu.com/wp-content/uploads/2025/07/The-ML-Playbook-1-1-1.jpg",
    tag: "Masterclass",
    chapter: "Student Branch",
    date: "Apr 19, 2026",
    title: "The AI Evolution: Researching Smarter, Presenting Better",
    excerpt: "IEEE BRACU SB organized the masterclass covering AI-driven research workflows and effective presentation techniques for student engineers.",
  },
  {
    slug: "mind-the-network-how-neurons-connect-the-world",
    image: "https://ieeebracu.com/wp-content/uploads/2025/08/MindTheNetwork-1-of-1-941.png",
    tag: "Seminar",
    chapter: "ComSoc",
    date: "Apr 15, 2025",
    title: "Mind The Network: How Neurons Connect the World",
    excerpt: "IEEE ComSoc BRACU SBC hosted a seminar exploring parallels between neural structures in the brain and artificial neural networks.",
  },
  {
    slug: "an-industry-visit-by-aess-bracu-sbc-2025",
    image: "https://ieeebracu.com/wp-content/uploads/2025/07/Industry-Visit.png",
    tag: "Industry Tour",
    chapter: "AESS",
    date: "Mar 20, 2025",
    title: "An Industry Visit by AESS BRACU SBC",
    excerpt: "Members stepped onto the factory floor to see aerospace and electronic systems engineering at work during an industrial visit.",
  },
  {
    slug: "an-industrial-tour-to-the-orion-power-plant",
    image: "https://ieeebracu.com/wp-content/uploads/2025/07/13.jpg",
    tag: "Industry Tour",
    chapter: "PES",
    date: "Feb 28, 2025",
    title: "Industrial Tour to the Orion Power Plant",
    excerpt: "IEEE PES BRACU SBC members visited the Orion power plant for a close look at large-scale power generation and grid operations.",
  },
  {
    slug: "4th-birds-international-workshop",
    image: "https://ieeebracu.com/wp-content/uploads/2020/04/web2.jpg",
    tag: "Workshop",
    chapter: "Student Branch",
    date: "Dec 15, 2024",
    title: "4th BIRDS International Workshop",
    excerpt: "Bringing together researchers and students around small-satellite systems and space technology at the 4th BIRDS workshop.",
  },
  {
    slug: "observational-cosmology-workshop",
    image: "https://ieeebracu.com/wp-content/uploads/2019/10/Industrial-Biomedical-Applications-of-Power-Electronics-1.jpg",
    tag: "Workshop",
    chapter: "AESS",
    date: "Nov 10, 2024",
    title: "Observational Cosmology Workshop",
    excerpt: "IEEE AESS BRACU SBC conducted a workshop on observational cosmology, diving into telescope systems and deep-sky observation techniques.",
  },
];

const tags = ["All", "Seminar", "Workshop", "Webinar", "Industry Tour", "Masterclass"];

export default function NewsPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = allPosts.filter((p) => {
    const matchesTag = activeTag === "All" || p.tag === activeTag;
    const matchesSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.chapter.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <main className="min-h-screen bg-[#F5F3EE] font-[family-name:var(--font-sans)]">
      {/* page header */}
      <div className="relative overflow-hidden bg-[#0A2540]">
        {/* decorative */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, #3E9BD6 0%, transparent 50%), radial-gradient(circle at 70% 60%, #00629B 0%, transparent 50%)",
          }}
        />
        <div className="absolute -left-16 bottom-0 h-32 w-32 rounded-full border border-white/[0.05]" />
        <div className="absolute -right-16 top-0 h-32 w-32 rounded-full border border-white/[0.05]" />

        <div className="relative mx-auto max-w-[1320px] px-8 pb-16 pt-20">
          <div className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#7FB4DA]">
            <span className="inline-block h-0.5 w-[26px] bg-[#7FB4DA]" />
            What&rsquo;s happening
          </div>
          <h1 className="m-0 font-[family-name:var(--font-serif)] text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
            News &amp; Events
          </h1>
          <p className="m-0 mt-4 max-w-[52ch] text-[16px] leading-[1.6] text-white/55">
            Seminars, workshops, industry tours, and everything else from the IEEE BRAC University Student Branch and its six technical chapters.
          </p>
        </div>
      </div>

      {/* filters bar */}
      <div className="border-b border-[#E3DFD5] bg-[#F5F3EE]">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-4 px-8 py-4 md:flex-row md:items-center md:justify-between">
          {/* tag pills */}
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-all ${
                  activeTag === t
                    ? "bg-[#0A2540] text-white shadow-sm"
                    : "border border-[#E3DFD5] bg-white text-[#6E7178] hover:border-[#00629B]/30 hover:text-[#191B1E]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* search */}
          <div className="relative w-full md:w-[280px]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#B0B4B9]">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-[#E3DFD5] bg-white py-2.5 pl-10 pr-4 text-[13.5px] text-[#191B1E] placeholder:text-[#B0B4B9] focus:border-[#00629B]/40 focus:outline-none focus:ring-2 focus:ring-[#00629B]/10"
            />
          </div>
        </div>
      </div>

      {/* content */}
      <div className="mx-auto max-w-[1320px] px-8 py-12">
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-[18px] font-medium text-[#6E7178]">
              No posts found for &ldquo;{searchQuery}&rdquo;{activeTag !== "All" ? ` in ${activeTag}` : ""}.
            </p>
            <button
              onClick={() => { setActiveTag("All"); setSearchQuery(""); }}
              className="mt-4 text-[14px] font-semibold text-[#00629B] hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            {/* featured top card */}
            {featured && (
              <Link
                href={`/news/${featured.slug}`}
                className="group mb-12 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#E3DFD5] bg-white transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(0,98,155,0.08)] lg:grid-cols-2"
              >
                <div className="relative h-[280px] overflow-hidden lg:h-auto lg:min-h-[380px]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 lg:hidden"
                    style={{ background: "linear-gradient(0deg, rgba(10,37,64,.3), transparent 50%)" }}
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-md bg-[#EAF1F6] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#00629B]">
                      {featured.tag}
                    </span>
                    <span className="rounded-md bg-[#F5F3EE] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#6E7178]">
                      {featured.chapter}
                    </span>
                    <span className="text-[12px] text-[#B0B4B9]">{featured.date}</span>
                  </div>
                  <h2 className="m-0 mb-4 font-[family-name:var(--font-serif)] text-[clamp(22px,2.5vw,30px)] font-semibold leading-[1.2] tracking-[-0.01em] text-[#191B1E]">
                    {featured.title}
                  </h2>
                  <p className="m-0 mb-6 text-[15px] leading-[1.65] text-[#6E7178]">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#0A2540] transition-colors group-hover:text-[#00629B]">
                    Read full article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            )}

            {/* grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <Link
                  key={p.slug}
                  href={`/news/${p.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#E3DFD5] bg-white transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(0,98,155,0.07)]"
                >
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(0deg, rgba(10,37,64,.3), transparent 50%)" }}
                    />
                    <span className="absolute left-4 top-4 rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#00629B] backdrop-blur">
                      {p.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2 flex items-center gap-2.5">
                      <span className="rounded bg-[#F5F3EE] px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.06em] text-[#6E7178]">
                        {p.chapter}
                      </span>
                      <span className="text-[11px] text-[#B0B4B9]">{p.date}</span>
                    </div>
                    <h3 className="m-0 mb-3 font-[family-name:var(--font-serif)] text-[17px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#191B1E]">
                      {p.title}
                    </h3>
                    <p className="m-0 text-[13.5px] leading-[1.6] text-[#6E7178]">
                      {p.excerpt.length > 120 ? p.excerpt.slice(0, 120) + "..." : p.excerpt}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-4 text-[12.5px] font-semibold text-[#0A2540] transition-colors group-hover:text-[#00629B]">
                      Read more
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* load more (placeholder — wire to CMS pagination) */}
            <div className="mt-14 text-center">
              <button className="rounded-xl border border-[#E3DFD5] bg-white px-8 py-3 text-[14px] font-semibold text-[#3C4046] transition-all hover:border-[#00629B]/30 hover:shadow-[0_8px_24px_rgba(0,98,155,0.06)]">
                Load more articles
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}