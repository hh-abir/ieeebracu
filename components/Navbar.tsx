"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const chapters = [
  { name: "Power & Energy Society", slug: "pes" },
  { name: "Computer Society", slug: "cs" },
  { name: "Robotics & Automation Society", slug: "ras" },
  { name: "Aerospace & Electronic Systems", slug: "aess" },
  { name: "Communications Society", slug: "comsoc" },
  { name: "Electron Devices Society", slug: "eds" },
];

const newsletterYears = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2010, 2009, 2008];

const routeLabels: Record<string, string> = {
  news: "News & Events",
  members: "Members",
  "membership-benefits": "Membership Benefits",
  "why-how-do-you-join-ieee": "Why & How to Join",
  chapters: "Chapters",
  pes: "Power & Energy Society (PES)",
  cs: "Computer Society (CS)",
  ras: "Robotics & Automation Society (RAS)",
  aess: "Aerospace & Electronic Systems (AESS)",
  comsoc: "Communications Society (ComSoc)",
  eds: "Electron Devices Society (EDS)",
  about: "About",
  branch: "About the Branch",
  ieee: "About IEEE",
  organogram: "Organogram",
  logos: "Logos & Resources",
  "ibm-visit": "IBM Visit",
  contact: "Contact",
  join: "Join IEEE",
  "join-ieee-bracu-sb": "Join IEEE BRACU SB",
  gallery: "Gallery",
};

function generateBreadcrumbs(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  let currentPath = "";

  return segments.map((seg, idx) => {
    currentPath += `/${seg}`;
    const cleanSeg = decodeURIComponent(seg).toLowerCase();
    const label =
      routeLabels[cleanSeg] ||
      cleanSeg
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

    return {
      label,
      href: currentPath,
      isLast: idx === segments.length - 1,
    };
  });
}

export default function Navbar() {
  const pathname = usePathname() || "/";
  const breadcrumbs = generateBreadcrumbs(pathname);

  const [chaptersOpen, setChaptersOpen] = useState(false);
  const [membersOpen, setMembersOpen] = useState(false);
  const [membershipSubOpen, setMembershipSubOpen] = useState(false);
  const [carcOpen, setCarcOpen] = useState(false);
  const [newsletterModalOpen, setNewsletterModalOpen] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMembersOpen, setMobileMembersOpen] = useState(false);
  const [mobileMembershipOpen, setMobileMembershipOpen] = useState(false);
  const [mobileCarcOpen, setMobileCarcOpen] = useState(false);

  // Close modal or mobile drawer on Escape key press & lock scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setNewsletterModalOpen(false);
        setMobileOpen(false);
      }
    };
    if (newsletterModalOpen || mobileOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [newsletterModalOpen, mobileOpen]);

  return (
    <div className="font-[family-name:var(--font-sans)]">
      {/* top utility bar */}
      <div className="hidden bg-[#22262B] text-[12px] text-[#C2C7CE] md:block border-b border-[#2E343C]">
        <div className="mx-auto flex h-9 max-w-[1200px] items-center justify-between px-8">
          {/* Left contact info */}
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#3E9BD6]">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Dhaka, Bangladesh
            </span>

            <a
              href="tel:+8801819525640"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#3E9BD6]">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +88 01819525640
            </a>

            <a
              href="mailto:ieeebracuds@gmail.com"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#3E9BD6]">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              ieeebracuds@gmail.com
            </a>
          </div>

          {/* Right socials & links icons */}
          <div className="flex items-center gap-4">
            {/* BRACU Link */}
            <a
              href="https://www.bracu.ac.bd/"
              target="_blank"
              rel="noopener noreferrer"
              title="BRAC University Official Website"
              className="flex items-center gap-1 text-[11.5px] hover:text-white transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/70">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              <span>bracu.ac.bd</span>
            </a>

            <span className="h-3 w-px bg-white/20" />

            {/* IEEE.org Link */}
            <a
              href="https://www.ieee.org/"
              target="_blank"
              rel="noopener noreferrer"
              title="IEEE Global Website"
              className="flex items-center gap-1 text-[11.5px] hover:text-white transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/70">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>ieee.org</span>
            </a>

            <span className="h-3 w-px bg-white/20" />

            {/* Facebook */}
            <a
              href="https://www.facebook.com/ieeebracusb"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook Page"
              className="text-white/70 hover:text-[#1877F2] transition-colors p-1"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/ieee-bracu-sb/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Page"
              className="text-white/70 hover:text-[#0A66C2] transition-colors p-1"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/ieeebracusb/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="text-white/70 hover:text-[#E4405F] transition-colors p-1"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@ieeebracustudentbranch"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube Channel"
              className="text-white/70 hover:text-[#FF0000] transition-colors p-1"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* main nav */}
      <header className="sticky top-0 z-50 border-b border-[#E3DFD5] bg-white/92 backdrop-blur-md">
        <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-8">
          {/* brand logo */}
          <Link href="/" className="flex items-center py-1">
            <Image
              src="https://ieeebracu.com/wp-content/uploads/2022/01/Artboard-1-1.png"
              alt="IEEE BRAC University Student Branch"
              width={220}
              height={50}
              className="h-10 w-auto object-contain transition-opacity hover:opacity-90 sm:h-11"
              priority
            />
          </Link>

          {/* desktop links */}
          <nav className="hidden items-center gap-1 md:flex">
            {/* 1. Home */}
            <Link
              href="/"
              className={`relative rounded-md px-3.5 py-2 text-[13.5px] font-medium transition-colors ${
                pathname === "/"
                  ? "bg-[#EAF1F6] text-[#00629B] font-semibold"
                  : "text-[#3C4046] hover:bg-[#EEEAE0] hover:text-[#191B1E]"
              }`}
            >
              Home
              {pathname === "/" && (
                <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-[#00629B]" />
              )}
            </Link>

            {/* 2. News */}
            <Link
              href="/news"
              className={`relative rounded-md px-3.5 py-2 text-[13.5px] font-medium transition-colors ${
                pathname.startsWith("/news")
                  ? "bg-[#EAF1F6] text-[#00629B] font-semibold"
                  : "text-[#3C4046] hover:bg-[#EEEAE0] hover:text-[#191B1E]"
              }`}
            >
              News
              {pathname.startsWith("/news") && (
                <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-[#00629B]" />
              )}
            </Link>

            {/* 3. Members multi-level dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMembersOpen(true)}
              onMouseLeave={() => {
                setMembersOpen(false);
                setMembershipSubOpen(false);
              }}
            >
              <button
                className={`relative flex items-center gap-1.5 rounded-md px-3.5 py-2 text-[13.5px] font-medium transition-colors ${
                  pathname.startsWith("/members")
                    ? "bg-[#EAF1F6] text-[#00629B] font-semibold"
                    : "text-[#3C4046] hover:bg-[#EEEAE0] hover:text-[#191B1E]"
                }`}
              >
                Members
                <svg
                  className={`h-2.5 w-2.5 text-[#9A9E9F] transition-transform ${membersOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.2 7.2a.75.75 0 011.06.02L10 11.17l3.72-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0L5.2 8.27a.75.75 0 01.02-1.06z" />
                </svg>
                {pathname.startsWith("/members") && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-[#00629B]" />
                )}
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
                      <div
                        className={`flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-[13px] transition-colors ${
                          pathname === "/members/why-how-do-you-join-ieee" ||
                          pathname === "/members/membership-benefits"
                            ? "bg-[#EAF1F6] text-[#00629B] font-semibold"
                            : "text-[#4A4E54] hover:bg-[#F5F3EE] hover:text-[#00629B]"
                        }`}
                      >
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
                              className={`block rounded-md px-3 py-2 text-[13px] transition-colors ${
                                pathname === "/members/why-how-do-you-join-ieee"
                                  ? "bg-[#EAF1F6] text-[#00629B] font-semibold"
                                  : "text-[#4A4E54] hover:bg-[#F5F3EE] hover:text-[#00629B]"
                              }`}
                            >
                              Why &amp; How Do You Join IEEE?
                            </Link>
                            <Link
                              href="/members/membership-benefits"
                              className={`block rounded-md px-3 py-2 text-[13px] transition-colors ${
                                pathname === "/members/membership-benefits"
                                  ? "bg-[#EAF1F6] text-[#00629B] font-semibold"
                                  : "text-[#4A4E54] hover:bg-[#F5F3EE] hover:text-[#00629B]"
                              }`}
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
                      className={`block rounded-md px-3 py-2 text-[13px] transition-colors ${
                        pathname === "/members"
                          ? "bg-[#EAF1F6] text-[#00629B] font-semibold"
                          : "text-[#4A4E54] hover:bg-[#F5F3EE] hover:text-[#00629B]"
                      }`}
                    >
                      Memberlist by Year
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Newsletters Button */}
            <button
              onClick={() => setNewsletterModalOpen(true)}
              className="rounded-md px-3.5 py-2 text-[13.5px] font-medium text-[#3C4046] transition-colors hover:bg-[#EEEAE0] hover:text-[#00629B]"
            >
              Newsletters
            </button>

            {/* 5. Chapters dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setChaptersOpen(true)}
              onMouseLeave={() => setChaptersOpen(false)}
            >
              <button
                className={`relative flex items-center gap-1.5 rounded-md px-3.5 py-2 text-[13.5px] font-medium transition-colors ${
                  pathname.startsWith("/chapters")
                    ? "bg-[#EAF1F6] text-[#00629B] font-semibold"
                    : "text-[#3C4046] hover:bg-[#EEEAE0] hover:text-[#191B1E]"
                }`}
              >
                Chapters
                <svg
                  className={`h-2.5 w-2.5 text-[#9A9E9F] transition-transform ${chaptersOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.2 7.2a.75.75 0 011.06.02L10 11.17l3.72-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0L5.2 8.27a.75.75 0 01.02-1.06z" />
                </svg>
                {pathname.startsWith("/chapters") && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-[#00629B]" />
                )}
              </button>
              {chaptersOpen && (
                <div className="absolute left-1/2 top-full w-[278px] -translate-x-1/2 pt-2">
                  <div className="rounded-[10px] border border-[#E3DFD5] bg-white p-1.5 shadow-[0_12px_30px_rgba(20,22,24,0.10)]">
                    {chapters.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/chapters/${c.slug}`}
                        className={`block rounded-md px-3 py-2 text-[13px] transition-colors ${
                          pathname === `/chapters/${c.slug}`
                            ? "bg-[#EAF1F6] text-[#00629B] font-semibold"
                            : "text-[#4A4E54] hover:bg-[#F5F3EE] hover:text-[#00629B]"
                        }`}
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 6. About */}
            <Link
              href="/about"
              className={`relative rounded-md px-3.5 py-2 text-[13.5px] font-medium transition-colors ${
                pathname.startsWith("/about")
                  ? "bg-[#EAF1F6] text-[#00629B] font-semibold"
                  : "text-[#3C4046] hover:bg-[#EEEAE0] hover:text-[#191B1E]"
              }`}
            >
              About
              {pathname.startsWith("/about") && (
                <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-[#00629B]" />
              )}
            </Link>

            {/* 7. CARC SIGHT dropdown */}
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
                <div className="absolute right-0 top-full w-[310px] pt-2">
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
          </nav>

          {/* actions */}
          <div className="flex items-center gap-3.5">
            <Link
              href="/contact"
              className={`hidden text-[13.5px] font-medium transition-colors md:block ${
                pathname.startsWith("/contact")
                  ? "text-[#00629B] font-semibold"
                  : "text-[#3C4046] hover:text-[#191B1E]"
              }`}
            >
              Contact
            </Link>
            <Link
              href="/join"
              className={`hidden rounded-[7px] px-[18px] py-[9px] text-[13.5px] font-semibold text-white transition-all md:block ${
                pathname.startsWith("/join")
                  ? "bg-[#0A2540] shadow-md ring-2 ring-[#00629B]"
                  : "bg-[#00629B] hover:bg-[#004E7C]"
              }`}
            >
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

        {/* ── Dynamic Breadcrumbs Strip (shown on all subpages) ── */}
        {pathname !== "/" && (
          <div className="border-t border-[#E3DFD5] bg-[#F5F3EE]/90">
            <div className="mx-auto flex h-9 max-w-[1200px] items-center px-4 sm:px-8 text-[12px] text-[#6E7178]">
              <nav aria-label="Breadcrumb" className="flex items-center space-x-1.5 overflow-x-auto whitespace-nowrap scrollbar-none py-1">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1 font-medium text-[#4A4E54] hover:text-[#00629B] transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  <span>Home</span>
                </Link>
                {breadcrumbs.map((crumb) => (
                  <div key={crumb.href} className="flex items-center space-x-1.5">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#A9ACB2]">
                      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {crumb.isLast ? (
                      <span className="font-semibold text-[#00629B] truncate max-w-[180px] sm:max-w-[320px]">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="font-medium text-[#4A4E54] hover:text-[#00629B] transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* ── Right-Side Slide-Over Mobile Menu Dialog ── */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-[100] md:hidden overflow-hidden"
        >
          {/* Backdrop overlay */}
          <div
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-[#0A2540]/60 backdrop-blur-sm transition-opacity animate-[drawerFadeIn_.25s_ease-out]"
            aria-hidden="true"
          />

          {/* Slide-over panel */}
          <div className="fixed inset-y-0 right-0 flex max-w-full pl-8 pointer-events-none">
            <div
              className="relative pointer-events-auto flex h-full w-screen max-w-[320px] sm:max-w-[360px] flex-col bg-white shadow-2xl animate-[drawerSlideIn_.3s_cubic-bezier(0.16,1,0.3,1)]"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-[#E3DFD5] bg-[#F5F3EE] px-5 py-4">
                <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center">
                  <Image
                    src="https://ieeebracu.com/wp-content/uploads/2022/01/Artboard-1-1.png"
                    alt="IEEE BRAC University Student Branch"
                    width={150}
                    height={34}
                    className="h-7 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E3DFD5] bg-white text-[#6E7178] transition-colors hover:bg-[#E3DFD5] hover:text-[#191B1E]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              {/* Drawer Body — scrollable navigation items */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1.5 font-[family-name:var(--font-sans)]">
                {/* 1. Home */}
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center rounded-lg px-3.5 py-2.5 text-[14.5px] transition-colors ${
                    pathname === "/"
                      ? "bg-[#EAF1F6] text-[#00629B] font-semibold border-l-4 border-[#00629B]"
                      : "font-medium text-[#191B1E] hover:bg-[#F5F3EE] hover:text-[#00629B]"
                  }`}
                >
                  Home
                </Link>

                {/* 2. News */}
                <Link
                  href="/news"
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center rounded-lg px-3.5 py-2.5 text-[14.5px] transition-colors ${
                    pathname.startsWith("/news")
                      ? "bg-[#EAF1F6] text-[#00629B] font-semibold border-l-4 border-[#00629B]"
                      : "font-medium text-[#191B1E] hover:bg-[#F5F3EE] hover:text-[#00629B]"
                  }`}
                >
                  News
                </Link>

                {/* 3. Members Accordion */}
                <div className="rounded-lg">
                  <button
                    onClick={() => setMobileMembersOpen((v) => !v)}
                    className={`flex w-full items-center justify-between rounded-lg px-3.5 py-2.5 text-[14.5px] transition-colors ${
                      pathname.startsWith("/members")
                        ? "bg-[#EAF1F6] text-[#00629B] font-semibold"
                        : "font-medium text-[#191B1E] hover:bg-[#F5F3EE] hover:text-[#00629B]"
                    }`}
                  >
                    <span>Members</span>
                    <svg
                      className={`h-4 w-4 text-[#9A9E9F] transition-transform duration-200 ${mobileMembersOpen ? "rotate-180 text-[#00629B]" : ""}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {mobileMembersOpen && (
                    <div className="my-1 space-y-1 rounded-xl bg-[#F5F3EE]/80 p-2 pl-3">
                      {/* Membership sub-accordion */}
                      <button
                        onClick={() => setMobileMembershipOpen((v) => !v)}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-[13.5px] font-medium text-[#4A4E54] hover:bg-[#E3DFD5]/50 hover:text-[#00629B]"
                      >
                        <span>Membership</span>
                        <svg
                          className={`h-3.5 w-3.5 text-[#9A9E9F] transition-transform duration-200 ${mobileMembershipOpen ? "rotate-180 text-[#00629B]" : ""}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      </button>
                      {mobileMembershipOpen && (
                        <div className="space-y-1 pl-3">
                          <Link
                            href="/members/why-how-do-you-join-ieee"
                            onClick={() => setMobileOpen(false)}
                            className={`block rounded-md px-3 py-1.5 text-[12.5px] transition-colors ${
                              pathname === "/members/why-how-do-you-join-ieee"
                                ? "font-semibold text-[#00629B]"
                                : "text-[#6E7178] hover:text-[#00629B]"
                            }`}
                          >
                            Why &amp; How Do You Join IEEE?
                          </Link>
                          <Link
                            href="/members/membership-benefits"
                            onClick={() => setMobileOpen(false)}
                            className={`block rounded-md px-3 py-1.5 text-[12.5px] transition-colors ${
                              pathname === "/members/membership-benefits"
                                ? "font-semibold text-[#00629B]"
                                : "text-[#6E7178] hover:text-[#00629B]"
                            }`}
                          >
                            Membership Benefits
                          </Link>
                        </div>
                      )}
                      <Link
                        href="/members"
                        onClick={() => setMobileOpen(false)}
                        className={`block rounded-lg px-3 py-2 text-[13.5px] transition-colors ${
                          pathname === "/members"
                            ? "bg-[#E3DFD5]/70 text-[#00629B] font-semibold"
                            : "font-medium text-[#4A4E54] hover:bg-[#E3DFD5]/50 hover:text-[#00629B]"
                        }`}
                      >
                        Memberlist by Year
                      </Link>
                    </div>
                  )}
                </div>

                {/* 4. Newsletters Button (Opens drawer) */}
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setNewsletterModalOpen(true);
                  }}
                  className="flex w-full items-center justify-between rounded-lg px-3.5 py-2.5 text-[14.5px] font-medium text-[#191B1E] transition-colors hover:bg-[#F5F3EE] hover:text-[#00629B]"
                >
                  <span>Newsletters</span>
                  <span className="rounded bg-[#EAF1F6] px-2 py-0.5 text-[11px] font-semibold text-[#00629B]">
                    By Year
                  </span>
                </button>

                {/* 5. Chapters Accordion */}
                <div className="rounded-lg">
                  <button
                    onClick={() => setChaptersOpen((v) => !v)}
                    className={`flex w-full items-center justify-between rounded-lg px-3.5 py-2.5 text-[14.5px] transition-colors ${
                      pathname.startsWith("/chapters")
                        ? "bg-[#EAF1F6] text-[#00629B] font-semibold"
                        : "font-medium text-[#191B1E] hover:bg-[#F5F3EE] hover:text-[#00629B]"
                    }`}
                  >
                    <span>Chapters</span>
                    <svg
                      className={`h-4 w-4 text-[#9A9E9F] transition-transform duration-200 ${chaptersOpen ? "rotate-180 text-[#00629B]" : ""}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {chaptersOpen && (
                    <div className="my-1 space-y-1 rounded-xl bg-[#F5F3EE]/80 p-2 pl-3">
                      {chapters.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/chapters/${c.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className={`block rounded-lg px-3 py-1.5 text-[13px] transition-colors ${
                            pathname === `/chapters/${c.slug}`
                              ? "bg-[#E3DFD5]/70 text-[#00629B] font-semibold"
                              : "text-[#4A4E54] hover:text-[#00629B]"
                          }`}
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* 6. About */}
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center rounded-lg px-3.5 py-2.5 text-[14.5px] transition-colors ${
                    pathname.startsWith("/about")
                      ? "bg-[#EAF1F6] text-[#00629B] font-semibold border-l-4 border-[#00629B]"
                      : "font-medium text-[#191B1E] hover:bg-[#F5F3EE] hover:text-[#00629B]"
                  }`}
                >
                  About
                </Link>

                {/* 7. CARC SIGHT Accordion */}
                <div className="rounded-lg">
                  <button
                    onClick={() => setMobileCarcOpen((v) => !v)}
                    className="flex w-full items-center justify-between rounded-lg px-3.5 py-2.5 text-[14.5px] font-medium text-[#191B1E] transition-colors hover:bg-[#F5F3EE] hover:text-[#00629B]"
                  >
                    <span>CARC SIGHT</span>
                    <svg
                      className={`h-4 w-4 text-[#9A9E9F] transition-transform duration-200 ${mobileCarcOpen ? "rotate-180 text-[#00629B]" : ""}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {mobileCarcOpen && (
                    <div className="my-1 space-y-1 rounded-xl bg-[#F5F3EE]/80 p-2 pl-3">
                      <a
                        href="https://ieeebracu.com/carg-sight/carc/carc.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg px-3 py-1.5 text-[12.5px] text-[#4A4E54] hover:text-[#00629B]"
                      >
                        Control and Applications Research Center
                      </a>
                      <a
                        href="https://sight.ieee.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg px-3 py-1.5 text-[12.5px] text-[#4A4E54] hover:text-[#00629B]"
                      >
                        IEEE CARC SIGHT Bangladesh
                      </a>
                    </div>
                  )}
                </div>

                {/* 8. Contact */}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center rounded-lg px-3.5 py-2.5 text-[14.5px] transition-colors ${
                    pathname.startsWith("/contact")
                      ? "bg-[#EAF1F6] text-[#00629B] font-semibold border-l-4 border-[#00629B]"
                      : "font-medium text-[#191B1E] hover:bg-[#F5F3EE] hover:text-[#00629B]"
                  }`}
                >
                  Contact
                </Link>
              </div>

              {/* Drawer Footer Actions */}
              <div className="border-t border-[#E3DFD5] bg-[#F5F3EE] p-5 space-y-3">
                <Link
                  href="/join"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full rounded-lg bg-[#00629B] py-2.5 text-center text-[14px] font-semibold text-white transition-colors hover:bg-[#004E7C]"
                >
                  Join IEEE
                </Link>
                <div className="flex items-center justify-center gap-4 pt-1 text-[#6E7178]">
                  <a href="https://www.facebook.com/ieeebracusb" target="_blank" rel="noopener noreferrer" title="Facebook" className="hover:text-[#1877F2] transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/ieee-bracu-sb/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="hover:text-[#0A66C2] transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/ieeebracusb/" target="_blank" rel="noopener noreferrer" title="Instagram" className="hover:text-[#E4405F] transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@ieeebracustudentbranch" target="_blank" rel="noopener noreferrer" title="YouTube" className="hover:text-[#FF0000] transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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

      <style jsx>{`
        @keyframes drawerSlideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes drawerFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}