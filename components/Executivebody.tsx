"use client";

import Image from "next/image";
import { useState } from "react";

type Member = { name: string; role: string; image: string };

type Chapter = {
  abbr: string;
  name: string;
  desc: string;
  members: Member[];
};

// ─── Main Student Branch EB ───
const mainEB: Member[] = [
  { name: "Rayadh Abrar", role: "Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Rayadh_Abrar_Chair_2026.png" },
  { name: "Muntaha Majed", role: "Vice Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Muntaha_Vice-Chairperson-Muntaha-Majed-Chowdhury-modified-2.png" },
  { name: "Labiba Tahia", role: "Secretary", image: "https://ieeebracu.com/wp-content/uploads/2026/02/LABIBA-TAHIA_MB_Secretary-modified.png" },
  { name: "Sharaf Ahmed", role: "Treasurer", image: "https://ieeebracu.com/wp-content/uploads/2026/02/SharafAhmed_Treasurer_Main_Picture-SHARAF-AHMED-modified.png" },
  { name: "Hasib Hossain Abir", role: "Webmaster", image: "https://ieeebracu.com/wp-content/uploads/2026/02/abir_s-HASIB-HOSSAIN-ABIR-modified.png" },
  { name: "Nishat Zahan Niha", role: "Publicity Coordinator", image: "https://ieeebracu.com/wp-content/uploads/2026/02/IMG_0119-NISHAT-ZAHAN-NIHA-modified.png" },
  { name: "Fabiha Fairuz", role: "Designer", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Fabiha-Fairuz-Fabiha-Fairuz-modified.png" },
  { name: "Antara Raida Huq", role: "Editor", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Antara-Raida-Huq-ANTARA-RAIDA-HUQ-modified.png" },
];

// ─── Chapter EBs ───
const chapters: Chapter[] = [
  {
    abbr: "PES", name: "Power & Energy Society",
    desc: "Smart grids, renewables, and power systems",
    members: [
      { name: "Bushra Anjum Priyota", role: "Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Bushra-Anjum-Priyota-BUSHRA-ANJUM-PRIYOTA-modified.png" },
      { name: "Maisha Mahjabin Nidhi", role: "Vice Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Formal-Image_-Maisha-Mahjabin-Nidhi-MAISHA-MAHJABIN-NIDHI-modified.png" },
      { name: "Shahriar Ahmed", role: "Secretary", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Shahriar-Ahmed-SHAHRIAR-AHMED-modified.png" },
      { name: "S M Sadab Sabah", role: "Treasurer", image: "https://ieeebracu.com/wp-content/uploads/2026/02/IMG_3795-S.M.-SADAB-SABAH-modified.png" },
    ],
  },
  {
    abbr: "CS", name: "Computer Society",
    desc: "Software, AI, and competitive programming",
    members: [
      { name: "Sakibul Ahsan Teham", role: "Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Sakib_Chair_CS_Photo-SAKIBUL-AHSAN-TEHAM-modified.png" },
      { name: "Khandoker Tanjim Rahman", role: "Vice Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Formal-KHANDOKER-TANJIM-RAHMAN1-modified.png" },
      { name: "Md. Ezhar Hossain", role: "Secretary", image: "https://ieeebracu.com/wp-content/uploads/2026/02/20260209153234592_save-MD.EZHAR-HOSSAIN-modified.png" },
      { name: "Sannidhya Roy Sadhya", role: "Treasurer", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Sannidhya_Treasurer_CS_Photo-SANNIDHYA-ROY-SADHYA-modified.png" },
    ],
  },
  {
    abbr: "RAS", name: "Robotics & Automation Society",
    desc: "Autonomous systems and control engineering",
    members: [
      { name: "Risana Rehma Chowdhury", role: "Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/02/IMG_20251123_175622-RISANA-REHMA-CHOWDHURY-modified.png" },
      { name: "Saad Noman Adeeb", role: "Vice Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Vice-Chair-2026_RAS-SAAD-NOMAN-ADEEB-modified.png" },
      { name: "Anika Tabassum", role: "Secretary", image: "https://ieeebracu.com/wp-content/uploads/2026/02/1000025000-ANIKA-TABASSUM-modified.png" },
      { name: "Mohammed Naqibur Rahman", role: "Treasurer", image: "https://ieeebracu.com/wp-content/uploads/2026/02/MohammedNaqiburRahman_23201165-MOHAMMED-NAQIBUR-RAHMAN-modified.png" },
    ],
  },
  {
    abbr: "AESS", name: "Aerospace & Electronic Systems",
    desc: "Satellites, radar systems, and space technology",
    members: [
      { name: "Nusrat Jahan", role: "Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/02/20251214_124459-NUSRAT-JAHAN-modified-2.png" },
      { name: "Mashiat Lamisa Riddhi", role: "Vice Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Riddhi-_-Vice-Chair-_-AESS-MASHIAT-LAMISA-RIDDHI-modified.png" },
      { name: "Iftekhar Uddin Tuhin", role: "Secretary", image: "https://ieeebracu.com/wp-content/uploads/2026/02/this-one-2-resized-IFTEKHAR-UDDIN-TUHIN-modified.png" },
      { name: "Shahriar Alam Mugdho", role: "Treasurer", image: "https://ieeebracu.com/wp-content/uploads/2026/06/Mugdho-modified.png" },
    ],
  },
  {
    abbr: "ComSoc", name: "Communications Society",
    desc: "Networks, 5G, and information theory",
    members: [
      { name: "Mehzabin Mahmud", role: "Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Mehzabin-Mahmud-MEHZABIN-MAHMUD-modified.png" },
      { name: "Ramisha Islam Rodela", role: "Vice Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Ramisha-Islam-Rodela_p-RAMISHA-ISLAM-RODELA-modified.png" },
      { name: "Nusrat Sultana", role: "Secretary", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Nusrat-Sultana_Secretary_ComSoc-NUSRAT-SULTANA-modified.png" },
      { name: "Md. Riadul Hossain Khan", role: "Treasurer", image: "https://ieeebracu.com/wp-content/uploads/2026/02/ChatGPT-Image-Jan-9-2026-01_01_53-AM-Riadul-Hossain-Khan-modified.png" },
    ],
  },
  {
    abbr: "EDS", name: "Electron Devices Society",
    desc: "Semiconductors and nanoelectronics",
    members: [
      { name: "Kazi Abdur Rahim", role: "Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/06/Kazi-Abdur-Rahim-modified.png" },
      { name: "Fariba Mir", role: "Vice Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/06/Fariba-mir-modified.png" },
      { name: "Oishi Moni", role: "Secretary", image: "https://ieeebracu.com/wp-content/uploads/2026/06/oishimoni.JPG-modified.png" },
      { name: "Shahriar Hossain", role: "Treasurer", image: "https://ieeebracu.com/wp-content/uploads/2026/06/Shahriar-modified.png" },
    ],
  },
];

function PersonCard({ member }: { member: Member }) {
  return (
    <div className="group flex flex-col items-center text-center">
      <div className="relative mb-3.5 flex h-32 w-32 min-[400px]:h-36 min-[400px]:w-36 items-center justify-center rounded-full border-2 border-[#E3DFD5] bg-white p-1.5 shadow-[0_4px_18px_rgba(20,22,24,0.06)] transition-all duration-300 group-hover:border-[#00629B] group-hover:shadow-[0_12px_32px_rgba(0,98,155,0.18)] sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-56 lg:w-56">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-[#F5F3EE]">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 400px) 128px, (max-width: 640px) 144px, (max-width: 768px) 176px, (max-width: 1024px) 192px, 224px"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      <h3 className="m-0 text-[14.5px] font-semibold tracking-[-0.01em] text-[#191B1E] sm:text-[16.5px]">
        {member.name}
      </h3>
      <span className="mt-1 text-[11.5px] font-medium uppercase tracking-[0.08em] text-[#00629B] sm:text-[13px]">
        {member.role}
      </span>
    </div>
  );
}

export default function ExecutiveBody() {
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null);

  return (
    <section className="bg-[#F5F3EE] py-24 font-[family-name:var(--font-sans)]">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-8">
        {/* section head */}
        <div className="mb-14 text-center">
          <div className="mb-5 flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#00629B]">
            <span className="inline-block h-0.5 w-[26px] bg-[#00629B]" />
            Leadership
            <span className="inline-block h-0.5 w-[26px] bg-[#00629B]" />
          </div>
          <h2 className="m-0 font-[family-name:var(--font-serif)] text-[clamp(26px,3vw,38px)] font-semibold tracking-[-0.02em] text-[#191B1E]">
            Executive Body 2026
          </h2>
          <p className="mx-auto mt-4 max-w-[48ch] text-[15px] leading-[1.6] text-[#6E7178]">
            The people who run the IEEE BRAC University Student Branch and its six technical chapters.
          </p>
        </div>

        {/* ── Main SB members ── */}
        <div className="mb-6 text-center">
          <span className="inline-block rounded-md bg-[#0A2540] px-3.5 py-1.5 font-[family-name:var(--font-serif)] text-[13px] font-semibold tracking-[0.04em] text-white">
            Student Branch
          </span>
        </div>
        <div className="mx-auto mb-20 max-w-[1100px] grid grid-cols-2 justify-items-center gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6 md:gap-y-10">
          {mainEB.map((m) => (
            <PersonCard key={m.name} member={m} />
          ))}
        </div>

        {/* ── Chapter cards (3 per row, clickable → modal) ── */}
        <div className="mb-8 text-center">
          <div className="mb-5 flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#00629B]">
            <span className="inline-block h-0.5 w-[26px] bg-[#00629B]" />
            Chapter Teams
            <span className="inline-block h-0.5 w-[26px] bg-[#00629B]" />
          </div>
          <p className="mx-auto max-w-[44ch] text-[14px] leading-[1.6] text-[#6E7178]">
            Click a chapter to meet the people behind it.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((c) => (
            <button
              key={c.abbr}
              onClick={() => setActiveChapter(c)}
              className="group relative overflow-hidden rounded-2xl border border-[#E3DFD5] bg-white p-7 text-left transition-all duration-300 hover:border-[#00629B]/25 hover:shadow-[0_16px_40px_rgba(0,98,155,0.08)]"
            >
              {/* decorative gradient corner */}
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#00629B]/[0.04] transition-all duration-500 group-hover:h-44 group-hover:w-44 group-hover:bg-[#00629B]/[0.07]" />

              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-lg bg-gradient-to-br from-[#00629B] to-[#0A2540] px-3.5 py-1.5 font-[family-name:var(--font-serif)] text-[16px] font-bold tracking-[0.04em] text-white shadow-sm">
                    {c.abbr}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E3DFD5] bg-[#F5F3EE] text-[#B9BDC0] transition-all duration-300 group-hover:border-[#00629B]/30 group-hover:bg-[#00629B] group-hover:text-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <h3 className="m-0 mb-1.5 font-[family-name:var(--font-serif)] text-[19px] font-semibold leading-tight tracking-[-0.01em] text-[#191B1E]">
                  {c.name}
                </h3>
                <p className="m-0 mb-5 text-[13.5px] leading-[1.5] text-[#6E7178]">
                  {c.desc}
                </p>

                {/* small member avatar row as preview */}
                <div className="flex items-center gap-1">
                  {c.members.map((m, i) => (
                    <div
                      key={m.name}
                      className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-sm"
                      style={{ marginLeft: i > 0 ? "-6px" : 0, zIndex: c.members.length - i }}
                    >
                      <Image
                        src={m.image}
                        alt={m.name}
                        fill
                        sizes="36px"
                        className="object-cover object-center"
                      />
                    </div>
                  ))}
                  <span className="ml-2 text-[12px] font-medium text-[#6E7178]">
                    {c.members.length} members
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Modal ── */}
      {activeChapter && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setActiveChapter(null)}
        >
          <div
            className="relative w-full max-w-[960px] animate-[modalUp_.35s_ease] overflow-hidden rounded-2xl border border-[#E3DFD5] bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* modal header */}
            <div className="relative overflow-hidden border-b border-[#E3DFD5] bg-[#F5F3EE] px-8 py-7 sm:px-10 sm:py-8">
              {/* decorative circles */}
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#00629B]/[0.05]" />
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#00629B]/[0.05]" />

              <div className="relative flex items-start justify-between">
                <div>
                  <span className="mb-3 inline-block rounded-lg bg-gradient-to-br from-[#00629B] to-[#0A2540] px-3.5 py-1.5 font-[family-name:var(--font-serif)] text-[16px] font-bold tracking-[0.04em] text-white shadow-sm">
                    {activeChapter.abbr}
                  </span>
                  <h3 className="m-0 mt-2 font-[family-name:var(--font-serif)] text-[24px] font-semibold tracking-[-0.01em] text-[#191B1E] sm:text-[26px]">
                    {activeChapter.name}
                  </h3>
                  <p className="m-0 mt-1 text-[14px] text-[#6E7178]">
                    Executive Body · 2026
                  </p>
                </div>
                <button
                  onClick={() => setActiveChapter(null)}
                  aria-label="Close"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E3DFD5] bg-white text-[#6E7178] transition-colors hover:bg-[#E3DFD5] hover:text-[#191B1E]"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* modal body — member grid */}
            <div className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-8 px-4 py-6 sm:grid-cols-4 sm:gap-x-6 sm:px-10 sm:py-10">
              {activeChapter.members.map((m) => (
                <div key={m.name} className="group flex flex-col items-center text-center">
                  <div className="relative mb-3.5 flex h-28 w-28 min-[400px]:h-32 min-[400px]:w-32 items-center justify-center rounded-full border-2 border-[#E3DFD5] bg-white p-1.5 shadow-sm transition-all duration-300 group-hover:border-[#00629B] group-hover:shadow-[0_8px_24px_rgba(0,98,155,0.14)] sm:h-40 sm:w-40 md:h-44 md:w-44">
                    <div className="relative h-full w-full overflow-hidden rounded-full bg-[#F5F3EE]">
                      <Image
                        src={m.image}
                        alt={m.name}
                        fill
                        sizes="(max-width: 400px) 112px, (max-width: 640px) 128px, (max-width: 768px) 160px, 176px"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <h4 className="m-0 text-[13.5px] font-semibold text-[#191B1E] sm:text-[15.5px]">
                    {m.name}
                  </h4>
                  <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[#00629B] sm:text-[12px]">
                    {m.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes modalUp {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </section>
  );
}
