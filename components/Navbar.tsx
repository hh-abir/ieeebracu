"use client";

import Link from "next/link";
import { useState } from "react";

const chapters = [
  { name: "Power & Energy Society", slug: "pes" },
  { name: "Computer Society", slug: "cs" },
  { name: "Robotics & Automation Society", slug: "ras" },
  { name: "Aerospace & Electronic Systems", slug: "aess" },
  { name: "Communications Society", slug: "comsoc" },
  { name: "Electron Devices Society", slug: "eds" },
];

const links = [
  { label: "Home", href: "/" },
  { label: "News", href: "/news" },
  { label: "Members", href: "/members" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [chaptersOpen, setChaptersOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="font-[family-name:var(--font-sans)]">
      {/* utility bar */}
      <div className="hidden bg-[#141618] text-[12px] text-[#B7BBC0] md:block">
        <div className="mx-auto flex h-9 max-w-[1200px] items-center justify-between px-8">
          <span>Dhaka, Bangladesh&nbsp;·&nbsp;ieeebracuds@gmail.com</span>
          <span className="flex gap-6">
            <a href="https://www.bracu.ac.bd/" className="hover:text-white">Brac University</a>
            <a href="https://www.ieee.org/" className="hover:text-white">IEEE.org</a>
            <Link href="/login" className="hover:text-white">Member Login</Link>
          </span>
        </div>
      </div>

      {/* main nav */}
      <header className="sticky top-0 z-50 border-b border-[#E3DFD5] bg-white/92 backdrop-blur-md">
        <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-8">
          {/* brand */}
          <Link href="/" className="flex items-center gap-3">
            <span className="rounded-[3px] border-[1.5px] border-[#0A2540] px-2 py-[3px] font-[family-name:var(--font-serif)] text-[20px] font-semibold tracking-[0.06em] text-[#0A2540]">
              IEEE
            </span>
            <span className="flex flex-col leading-[1.15]">
              <span className="text-[14px] font-semibold tracking-[-0.01em] text-[#191B1E]">
                BRAC University
              </span>
              <span className="text-[10.5px] uppercase tracking-[0.16em] text-[#6E7178]">
                Student Branch
              </span>
            </span>
          </Link>

          {/* desktop links */}
          <nav className="hidden items-center gap-1 md:flex">
            <Link href="/" className="rounded-md px-3.5 py-2 text-[13.5px] font-medium text-[#3C4046] transition-colors hover:bg-[#EEEAE0] hover:text-[#191B1E]">
              Home
            </Link>
            <Link href="/news" className="rounded-md px-3.5 py-2 text-[13.5px] font-medium text-[#3C4046] transition-colors hover:bg-[#EEEAE0] hover:text-[#191B1E]">
              News
            </Link>

            {/* chapters dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setChaptersOpen(true)}
              onMouseLeave={() => setChaptersOpen(false)}
            >
              <button className="flex items-center gap-1.5 rounded-md px-3.5 py-2 text-[13.5px] font-medium text-[#3C4046] transition-colors hover:bg-[#EEEAE0] hover:text-[#191B1E]">
                Chapters
                <svg
                  className={`h-2.5 w-2.5 text-[#9A9E9F] transition-transform ${chaptersOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.2 7.2a.75.75 0 011.06.02L10 11.17l3.72-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0L5.2 8.27a.75.75 0 01.02-1.06z" />
                </svg>
              </button>
              {chaptersOpen && (
                <div className="absolute left-1/2 top-full w-[278px] -translate-x-1/2 pt-2">
                  <div className="rounded-[10px] border border-[#E3DFD5] bg-white p-1.5 shadow-[0_12px_30px_rgba(20,22,24,0.10)]">
                    {chapters.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/chapters/${c.slug}`}
                        className="block rounded-md px-3 py-2 text-[13px] text-[#4A4E54] transition-colors hover:bg-[#F5F3EE] hover:text-[#00629B]"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/members" className="rounded-md px-3.5 py-2 text-[13.5px] font-medium text-[#3C4046] transition-colors hover:bg-[#EEEAE0] hover:text-[#191B1E]">
              Members
            </Link>
            <Link href="/about" className="rounded-md px-3.5 py-2 text-[13.5px] font-medium text-[#3C4046] transition-colors hover:bg-[#EEEAE0] hover:text-[#191B1E]">
              About
            </Link>
          </nav>

          {/* actions */}
          <div className="flex items-center gap-3.5">
            <Link href="/contact" className="hidden text-[13.5px] font-medium text-[#3C4046] hover:text-[#191B1E] md:block">
              Contact
            </Link>
            <Link href="/join" className="hidden rounded-[7px] bg-[#00629B] px-[18px] py-[9px] text-[13.5px] font-semibold text-white transition-colors hover:bg-[#004E7C] md:block">
              Join IEEE
            </Link>

            {/* mobile toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center rounded-md p-2 text-[#3C4046] hover:bg-[#EEEAE0] md:hidden"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {mobileOpen && (
          <div className="border-t border-[#E3DFD5] bg-white md:hidden">
            <nav className="mx-auto max-w-[1200px] px-8 py-3">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="block rounded-md px-3 py-2 text-sm text-[#3C4046] hover:bg-[#F5F3EE]">
                  {l.label}
                </Link>
              ))}
              <button
                onClick={() => setChaptersOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-[#3C4046] hover:bg-[#F5F3EE]"
              >
                Chapters <span>{chaptersOpen ? "\u2212" : "+"}</span>
              </button>
              {chaptersOpen &&
                chapters.map((c) => (
                  <Link key={c.slug} href={`/chapters/${c.slug}`} className="block rounded-md px-6 py-2 text-sm text-[#6E7178] hover:bg-[#F5F3EE]">
                    {c.name}
                  </Link>
                ))}
              <Link href="/join" className="mt-2 block rounded-[7px] bg-[#00629B] px-3 py-2 text-center text-sm font-semibold text-white">
                Join IEEE
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}