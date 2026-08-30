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

export default function Navbar() {
  const [chaptersOpen, setChaptersOpen] = useState(false);
  const [membersOpen, setMembersOpen] = useState(false);
  const [membershipSubOpen, setMembershipSubOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMembersOpen, setMobileMembersOpen] = useState(false);
  const [mobileMembershipOpen, setMobileMembershipOpen] = useState(false);

  return (
    <div className="font-[family-name:var(--font-sans)]">
      {/* utility bar */}
      <div className="hidden bg-[#141618] text-[12px] text-[#B7BBC0] md:block">
        <div className="mx-auto flex h-9 max-w-[1200px] items-center justify-between px-8">
          <span>Dhaka, Bangladesh&nbsp;·&nbsp;ieeebracuds@gmail.com</span>
          <span className="flex gap-6">
            <a href="https://www.bracu.ac.bd/" target="_blank" rel="noopener noreferrer" className="hover:text-white">Brac University</a>
            <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white">IEEE.org</a>
            <Link href="/members" className="hover:text-white">Members</Link>
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

            {/* members multi-level dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMembersOpen(true)}
              onMouseLeave={() => {
                setMembersOpen(false);
                setMembershipSubOpen(false);
              }}
            >
              <button className="flex items-center gap-1.5 rounded-md px-3.5 py-2 text-[13.5px] font-medium text-[#3C4046] transition-colors hover:bg-[#EEEAE0] hover:text-[#191B1E]">
                Members
                <svg
                  className={`h-2.5 w-2.5 text-[#9A9E9F] transition-transform ${membersOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.2 7.2a.75.75 0 011.06.02L10 11.17l3.72-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0L5.2 8.27a.75.75 0 01.02-1.06z" />
                </svg>
              </button>

              {membersOpen && (
                <div className="absolute left-0 top-full w-[240px] pt-2">
                  <div className="rounded-[10px] border border-[#E3DFD5] bg-white p-1.5 shadow-[0_12px_30px_rgba(20,22,24,0.10)]">
                    {/* Membership sub-item with flyout */}
                    <div
                      className="relative"
                      onMouseEnter={() => setMembershipSubOpen(true)}
                      onMouseLeave={() => setMembershipSubOpen(false)}
                    >
                      <div className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-[13px] text-[#4A4E54] transition-colors hover:bg-[#F5F3EE] hover:text-[#00629B]">
                        <span>Membership</span>
                        <svg className="h-3 w-3 text-[#9A9E9F]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                      </div>

                      {/* Nested Flyout Menu */}
                      {membershipSubOpen && (
                        <div className="absolute left-full top-0 w-[270px] pl-1.5">
                          <div className="rounded-[10px] border border-[#E3DFD5] bg-white p-1.5 shadow-[0_12px_30px_rgba(20,22,24,0.12)]">
                            <Link
                              href="/members/why-how-do-you-join-ieee"
                              className="block rounded-md px-3 py-2 text-[13px] text-[#4A4E54] transition-colors hover:bg-[#F5F3EE] hover:text-[#00629B]"
                            >
                              Why &amp; How Do You Join IEEE?
                            </Link>
                            <Link
                              href="/members/membership-benefits"
                              className="block rounded-md px-3 py-2 text-[13px] text-[#4A4E54] transition-colors hover:bg-[#F5F3EE] hover:text-[#00629B]"
                            >
                              Membership Benefits
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Memberlist by Year */}
                    <Link
                      href="/members"
                      className="block rounded-md px-3 py-2 text-[13px] text-[#4A4E54] transition-colors hover:bg-[#F5F3EE] hover:text-[#00629B]"
                    >
                      Memberlist by Year
                    </Link>
                  </div>
                </div>
              )}
            </div>

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
              <Link href="/" className="block rounded-md px-3 py-2 text-sm text-[#3C4046] hover:bg-[#F5F3EE]">
                Home
              </Link>
              <Link href="/news" className="block rounded-md px-3 py-2 text-sm text-[#3C4046] hover:bg-[#F5F3EE]">
                News
              </Link>

              {/* Chapters accordion */}
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

              {/* Members accordion */}
              <button
                onClick={() => setMobileMembersOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-[#3C4046] hover:bg-[#F5F3EE]"
              >
                Members <span>{mobileMembersOpen ? "\u2212" : "+"}</span>
              </button>
              {mobileMembersOpen && (
                <div className="pl-4">
                  {/* Membership sub-accordion */}
                  <button
                    onClick={() => setMobileMembershipOpen((v) => !v)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-[#4A4E54] hover:bg-[#F5F3EE]"
                  >
                    Membership <span>{mobileMembershipOpen ? "\u2212" : "+"}</span>
                  </button>
                  {mobileMembershipOpen && (
                    <div className="pl-4">
                      <Link
                        href="/members/why-how-do-you-join-ieee"
                        className="block rounded-md px-3 py-1.5 text-xs text-[#6E7178] hover:bg-[#F5F3EE]"
                      >
                        Why &amp; How Do You Join IEEE?
                      </Link>
                      <Link
                        href="/members/membership-benefits"
                        className="block rounded-md px-3 py-1.5 text-xs text-[#6E7178] hover:bg-[#F5F3EE]"
                      >
                        Membership Benefits
                      </Link>
                    </div>
                  )}

                  <Link
                    href="/members"
                    className="block rounded-md px-3 py-2 text-sm text-[#4A4E54] hover:bg-[#F5F3EE]"
                  >
                    Memberlist by Year
                  </Link>
                </div>
              )}

              <Link href="/about" className="block rounded-md px-3 py-2 text-sm text-[#3C4046] hover:bg-[#F5F3EE]">
                About
              </Link>
              <Link href="/contact" className="block rounded-md px-3 py-2 text-sm text-[#3C4046] hover:bg-[#F5F3EE]">
                Contact
              </Link>
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