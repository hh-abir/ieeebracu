"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Member = { name: string; role: string; image: string };
type Newsletter = { year: string; href: string };

export type ChapterData = {
  slug: string;
  abbr: string;
  name: string;
  fullName: string;
  desc: string[];
  image: string;
  logo: string;
  founded: string;
  focus: string;
  counselor: { name: string; title: string };
  advisor: { name: string; title: string };
  eb: Member[];
  inaugReport: string;
  membersHref: string;
  newsletters: Newsletter[];
};

export default function ChapterContent({ ch }: { ch: ChapterData }) {
  const [nlOpen, setNlOpen] = useState(false);

  return (
    <>
      {/* hero */}
      <div
        className="relative h-[42vh] min-h-[320px] w-full overflow-hidden bg-[#0A2540] bg-cover bg-center"
        style={{ backgroundImage: `url(${ch.image})` }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(10,37,64,.92) 0%, rgba(10,37,64,.55) 50%, rgba(10,37,64,.25) 100%)" }} />
        <div className="absolute left-0 right-0 top-0 z-10">
          <div className="mx-auto max-w-[1320px] px-8 pt-6">
            <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[13px] font-medium text-white backdrop-blur transition-colors hover:bg-white/20">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Home
            </Link>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="mx-auto max-w-[1320px] px-8 pb-10">
            <span className="mb-4 inline-block rounded-lg bg-gradient-to-br from-[#00629B] to-[#0A2540] px-4 py-2 font-[family-name:var(--font-serif)] text-[18px] font-bold tracking-[0.04em] text-white shadow-sm">{ch.abbr}</span>
            <h1 className="m-0 font-[family-name:var(--font-serif)] text-[clamp(28px,4vw,46px)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">{ch.name}</h1>
            <p className="m-0 mt-2 text-[14px] text-white/50">{ch.fullName}</p>
          </div>
        </div>
      </div>

      {/* body */}
      <div className="mx-auto max-w-[1320px] px-8 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

          {/* LEFT */}
          <div className="space-y-14 lg:col-span-8">
            {/* logo + about */}
            <div>
              <div className="mb-8 flex items-center gap-5">
                <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl border border-[#E3DFD5] bg-white p-2">
                  <Image src={ch.logo} alt={`${ch.abbr} logo`} fill sizes="72px" className="object-contain" />
                </div>
                <div>
                  <h2 className="m-0 font-[family-name:var(--font-serif)] text-[24px] font-semibold tracking-[-0.01em] text-[#191B1E]">{ch.name}</h2>
                  <p className="m-0 mt-1 text-[13px] text-[#6E7178]">Founded {ch.founded} · {ch.focus}</p>
                </div>
              </div>
              <div className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#00629B]">
                <span className="inline-block h-0.5 w-[26px] bg-[#00629B]" />About the chapter
              </div>
              {ch.desc.map((p, i) => (
                <p key={i} className="m-0 mb-5 text-[16.5px] leading-[1.75] text-[#44474C]">{p}</p>
              ))}
            </div>

            {/* advisors */}
            <div>
              <div className="mb-6 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#00629B]">
                <span className="inline-block h-0.5 w-[26px] bg-[#00629B]" />Faculty Advisors
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[ch.counselor, ch.advisor].map((person) => (
                  <div key={person.title} className="flex items-center gap-4 rounded-xl border border-[#E3DFD5] bg-white px-5 py-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#EAF1F6] to-[#D6E6F2]">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00629B" strokeWidth="1.5">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[15px] font-semibold text-[#191B1E]">{person.name}</div>
                      <div className="mt-0.5 text-[12px] font-medium uppercase tracking-[0.08em] text-[#00629B]">{person.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* current EB */}
            <div>
              <div className="mb-6 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#00629B]">
                <span className="inline-block h-0.5 w-[26px] bg-[#00629B]" />Current Executive Body · 2026
              </div>
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
                {ch.eb.map((m) => (
                  <div key={m.name} className="group flex flex-col items-center text-center">
                    <div className="relative mb-3 h-[150px] w-[130px] overflow-hidden rounded-xl border border-[#E3DFD5] bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-[0_8px_24px_rgba(20,22,24,0.10)]">
                      <Image src={m.image} alt={m.name} fill sizes="130px" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]" />
                    </div>
                    <h4 className="m-0 text-[13.5px] font-semibold text-[#191B1E]">{m.name}</h4>
                    <span className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.08em] text-[#00629B]">{m.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <aside className="lg:col-span-4">
            <div className="sticky top-[100px] space-y-4">
              {/* Inauguration Report */}
              <a href={ch.inaugReport} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 rounded-2xl border border-[#E3DFD5] bg-white p-6 transition-all duration-300 hover:border-[#00629B]/25 hover:shadow-[0_12px_32px_rgba(0,98,155,0.08)]">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#EAF1F6] to-[#D6E6F2] text-[#00629B] transition-all duration-300 group-hover:from-[#00629B] group-hover:to-[#0A2540] group-hover:text-white group-hover:shadow-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round" /><polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" /><line x1="16" y1="13" x2="8" y2="13" strokeLinecap="round" /><line x1="16" y1="17" x2="8" y2="17" strokeLinecap="round" /></svg>
                </div>
                <div className="flex-1">
                  <h3 className="m-0 text-[16px] font-semibold text-[#191B1E]">Inauguration Report</h3>
                  <p className="m-0 mt-1 text-[13px] text-[#6E7178]">Read the founding story and milestones</p>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#B9BDC0] transition-all group-hover:translate-x-1 group-hover:text-[#00629B]"><path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>

              {/* Members */}
              <Link href={ch.membersHref} className="group flex items-center gap-5 rounded-2xl border border-[#E3DFD5] bg-white p-6 transition-all duration-300 hover:border-[#00629B]/25 hover:shadow-[0_12px_32px_rgba(0,98,155,0.08)]">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#EAF1F6] to-[#D6E6F2] text-[#00629B] transition-all duration-300 group-hover:from-[#00629B] group-hover:to-[#0A2540] group-hover:text-white group-hover:shadow-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div className="flex-1">
                  <h3 className="m-0 text-[16px] font-semibold text-[#191B1E]">Members</h3>
                  <p className="m-0 mt-1 text-[13px] text-[#6E7178]">View executive body across all tenures</p>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#B9BDC0] transition-all group-hover:translate-x-1 group-hover:text-[#00629B]"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>

              {/* Newsletter */}
              <button onClick={() => setNlOpen(true)} className="group flex w-full items-center gap-5 rounded-2xl border border-[#E3DFD5] bg-white p-6 text-left transition-all duration-300 hover:border-[#00629B]/25 hover:shadow-[0_12px_32px_rgba(0,98,155,0.08)]">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#EAF1F6] to-[#D6E6F2] text-[#00629B] transition-all duration-300 group-hover:from-[#00629B] group-hover:to-[#0A2540] group-hover:text-white group-hover:shadow-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" /><polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div className="flex-1">
                  <h3 className="m-0 text-[16px] font-semibold text-[#191B1E]">Newsletter</h3>
                  <p className="m-0 mt-1 text-[13px] text-[#6E7178]">Annual publications and highlights</p>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#B9BDC0] transition-all group-hover:translate-x-1 group-hover:text-[#00629B]"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>

              {/* at a glance */}
              <div className="rounded-2xl border border-[#E3DFD5] bg-white p-6">
                <h4 className="m-0 mb-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6E7178]">At a Glance</h4>
                <div className="space-y-4">
                  {[
                    { label: "Founded", value: ch.founded },
                    { label: "Focus Areas", value: ch.focus },
                    { label: "Parent Branch", value: "IEEE BRACU SB" },
                    { label: "Region", value: "IEEE Region 10 (Asia-Pacific)" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#B0B4B9]">{item.label}</div>
                      <div className="mt-0.5 text-[14px] font-medium text-[#191B1E]">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Newsletter slide-over */}
      {nlOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end" onClick={() => setNlOpen(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div className="relative w-full max-w-[440px] animate-[slideIn_.3s_ease] overflow-y-auto bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 z-10 border-b border-[#E3DFD5] bg-[#F5F3EE] px-8 py-6">
              <div className="flex items-start justify-between">
                <div>
                  <span className="mb-1 inline-block rounded-md bg-gradient-to-br from-[#00629B] to-[#0A2540] px-2.5 py-1 font-[family-name:var(--font-serif)] text-[13px] font-bold tracking-[0.04em] text-white">{ch.abbr}</span>
                  <h3 className="m-0 mt-2 font-[family-name:var(--font-serif)] text-[22px] font-semibold tracking-[-0.01em] text-[#191B1E]">Newsletters</h3>
                  <p className="m-0 mt-1 text-[13px] text-[#6E7178]">Download annual publications</p>
                </div>
                <button onClick={() => setNlOpen(false)} aria-label="Close" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E3DFD5] bg-white text-[#6E7178] transition-colors hover:bg-[#E3DFD5] hover:text-[#191B1E]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
            </div>
            <div className="space-y-3 px-8 py-6">
              {ch.newsletters.map((nl) => (
                <a key={nl.year} href={nl.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-xl border border-[#E3DFD5] bg-[#FBFAF7] px-5 py-4 transition-all duration-200 hover:border-[#00629B]/30 hover:bg-white hover:shadow-[0_8px_24px_rgba(0,98,155,0.06)]">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#EAF1F6] to-[#D6E6F2] font-[family-name:var(--font-serif)] text-[18px] font-bold text-[#00629B] transition-all duration-300 group-hover:from-[#00629B] group-hover:to-[#0A2540] group-hover:text-white">{nl.year.slice(-2)}</div>
                    <div>
                      <div className="text-[15px] font-semibold text-[#191B1E]">Newsletter {nl.year}</div>
                      <div className="mt-0.5 text-[12px] text-[#6E7178]">Annual publication · PDF</div>
                    </div>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E3DFD5] text-[#B9BDC0] transition-all group-hover:border-[#00629B]/30 group-hover:bg-[#00629B] group-hover:text-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}