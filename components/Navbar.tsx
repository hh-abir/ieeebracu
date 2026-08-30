"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const chapters = [
  { name: "Power & Energy Society", slug: "pes" },
  { name: "Computer Society", slug: "cs" },
  { name: "Robotics & Automation Society", slug: "ras" },
  { name: "Aerospace & Electronic Systems", slug: "aess" },
  { name: "Communications Society", slug: "comsoc" },
  { name: "Electron Devices Society", slug: "eds" },
];

const newsletterYears = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2010, 2009, 2008];

export default function Navbar() {
  const [chaptersOpen, setChaptersOpen] = useState(false);
  const [membersOpen, setMembersOpen] = useState(false);
  const [membershipSubOpen, setMembershipSubOpen] = useState(false);
  const [carcOpen, setCarcOpen] = useState(false);
  const [newsletterModalOpen, setNewsletterModalOpen] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMembersOpen, setMobileMembersOpen] = useState(false);
  const [mobileMembershipOpen, setMobileMembershipOpen] = useState(false);
  const [mobileCarcOpen, setMobileCarcOpen] = useState(false);

  // Close modal on Escape key press & lock scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setNewsletterModalOpen(false);
      }
    };
    if (newsletterModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [newsletterModalOpen]);

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

            {/* CARC SIGHT dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCarcOpen(true)}
              onMouseLeave={() => setCarcOpen(false)}
            >
              <button className="flex items-center gap-1.5 rounded-md px-3.5 py-2 text-[13.5px] font-medium text-[#3C4046] transition-colors hover:bg-[#EEEAE0] hover:text-[#191B1E]">
                CARC SIGHT
                <svg
                  className={`h-2.5 w-2.5 text-[#9A9E9F] transition-transform ${carcOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.2 7.2a.75.75 0 011.06.02L10 11.17l3.72-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0L5.2 8.27a.75.75 0 01.02-1.06z" />
                </svg>
              </button>
              {carcOpen && (
                <div className="absolute left-1/2 top-full w-[310px] -translate-x-1/2 pt-2">
                  <div className="rounded-[10px] border border-[#E3DFD5] bg-white p-1.5 shadow-[0_12px_30px_rgba(20,22,24,0.10)]">
                    <a
                      href="https://ieeebracu.com/carg-sight/carc/carc.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-md px-3 py-2 text-[13px] text-[#4A4E54] transition-colors hover:bg-[#F5F3EE] hover:text-[#00629B]"
                    >
                      Control and Applications Research Center
                    </a>
                    <a
                      href="https://sight.ieee.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-md px-3 py-2 text-[13px] text-[#4A4E54] transition-colors hover:bg-[#F5F3EE] hover:text-[#00629B]"
                    >
                      IEEE CARC SIGHT Bangladesh
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Newsletter Button */}
            <button
              onClick={() => setNewsletterModalOpen(true)}
              className="flex items-center gap-1.5 rounded-md px-3.5 py-2 text-[13.5px] font-medium text-[#3C4046] transition-colors hover:bg-[#EEEAE0] hover:text-[#00629B]"
            >
              <span>Newsletter</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </button>

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

              {/* CARC SIGHT accordion */}
              <button
                onClick={() => setMobileCarcOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-[#3C4046] hover:bg-[#F5F3EE]"
              >
                CARC SIGHT <span>{mobileCarcOpen ? "\u2212" : "+"}</span>
              </button>
              {mobileCarcOpen && (
                <div className="pl-4">
                  <a
                    href="https://ieeebracu.com/carg-sight/carc/carc.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md px-3 py-1.5 text-xs text-[#6E7178] hover:bg-[#F5F3EE]"
                  >
                    Control and Applications Research Center
                  </a>
                  <a
                    href="https://sight.ieee.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-md px-3 py-1.5 text-xs text-[#6E7178] hover:bg-[#F5F3EE]"
                  >
                    IEEE CARC SIGHT Bangladesh
                  </a>
                </div>
              )}

              {/* Mobile Newsletter button */}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setNewsletterModalOpen(true);
                }}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-[#3C4046] hover:bg-[#F5F3EE]"
              >
                <span>Newsletter</span>
                <span className="rounded bg-[#EAF1F6] px-2 py-0.5 text-[11px] font-semibold text-[#00629B]">
                  By Year
                </span>
              </button>

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

      {/* ── Right-Side Slide-Over Newsletter Modal (List of Years Only) ── */}
      {newsletterModalOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop overlay */}
          <div
            onClick={() => setNewsletterModalOpen(false)}
            className="fixed inset-0 bg-[#0A2540]/60 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="relative w-screen max-w-[420px] bg-white shadow-2xl flex flex-col">
              {/* Drawer Header */}
              <div className="border-b border-[#E3DFD5] bg-[#0A2540] p-6 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[#7FB4DA]">
                      <span className="inline-block h-0.5 w-[20px] bg-[#7FB4DA]" />
                      Publications
                    </div>
                    <h2 className="m-0 mt-1 font-[family-name:var(--font-serif)] text-[24px] font-semibold text-white">
                      Newsletter
                    </h2>
                    <p className="m-0 mt-1 text-[13px] text-white/65">
                      Select a year to browse newsletters and publications archive.
                    </p>
                  </div>

                  <button
                    onClick={() => setNewsletterModalOpen(false)}
                    className="rounded-full bg-white/10 p-2 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                    aria-label="Close panel"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Drawer Body: Clean List of Years */}
              <div className="flex-1 overflow-y-auto bg-[#FBFAF7] p-5 space-y-2.5">
                {newsletterYears.map((year) => (
                  <a
                    key={year}
                    href={`https://ieeebracu.com/${year}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-[#E3DFD5] bg-white p-4 transition-all duration-200 hover:border-[#00629B]/40 hover:bg-[#F5F3EE] hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EAF1F6] text-[#00629B] font-[family-name:var(--font-serif)] font-bold text-[15px] group-hover:bg-[#00629B] group-hover:text-white transition-colors">
                        {year.toString().slice(-2)}
                      </div>
                      <div>
                        <span className="font-[family-name:var(--font-serif)] text-[17px] font-semibold text-[#191B1E] group-hover:text-[#00629B] transition-colors">
                          Newsletter {year}
                        </span>
                        <p className="m-0 text-[12px] text-[#6E7178]">
                          {year} Publications Archive
                        </p>
                      </div>
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FBFAF7] text-[#9A9E9F] transition-all group-hover:translate-x-1 group-hover:bg-[#00629B] group-hover:text-white">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="border-t border-[#E3DFD5] bg-white p-4 text-center">
                <p className="m-0 text-[12px] text-[#6E7178]">
                  IEEE BRAC University Student Branch &copy; {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}