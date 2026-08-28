import Link from "next/link";

const chapters = [
  { name: "Power & Energy Society", slug: "pes" },
  { name: "Computer Society", slug: "cs" },
  { name: "Robotics & Automation", slug: "ras" },
  { name: "Aerospace & Electronic Systems", slug: "aess" },
  { name: "Communications Society", slug: "comsoc" },
  { name: "Electron Devices Society", slug: "eds" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "News & Events", href: "/news" },
  { label: "Members", href: "/members" },
  { label: "About IEEE", href: "/about" },
  { label: "About the Branch", href: "/about#branch" },
  { label: "Organogram", href: "/about/organogram" },
  { label: "Logos & Resources", href: "/about/logos" },
  { label: "Join IEEE", href: "/join" },
];

const newsletters = [
  { year: "2024", href: "https://ieeebracu.com/Newsletter-2024.pdf" },
  { year: "2023", href: "https://ieeebracu.com/Newsletter-2023.pdf" },
  { year: "2022", href: "https://ieeebracu.com/Newsletter-2022.pdf" },
  { year: "2021", href: "https://ieeebracu.com/Newsletter-2021.pdf" },
  { year: "2020", href: "https://ieeebracu.com/Newsletter-2020.pdf" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/ieeebracusb",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
        <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCQmAlgoB1G5wGPFb5-xOyeQ",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
        <path d="M23 9.71a8.5 8.5 0 00-.91-4.13 2.92 2.92 0 00-1.72-1A78.36 78.36 0 0012 4.27a78.45 78.45 0 00-8.34.3 2.87 2.87 0 00-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 000 6.48 9.55 9.55 0 00.3 2 3.14 3.14 0 00.71 1.36 2.86 2.86 0 001.49.78 45.18 45.18 0 006.5.33c3.5.05 6.57 0 10.2-.46a2.9 2.9 0 001.53-.78 2.49 2.49 0 00.61-1 10.58 10.58 0 00.52-3.4c.04-.56.04-3.94.04-4.54zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ieee-bracu-student-branch",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="font-[family-name:var(--font-sans)]">
      {/* CTA strip */}
      <div className="bg-[#00629B]">
        <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-5 px-8 py-10 md:flex-row">
          <div>
            <h3 className="m-0 font-[family-name:var(--font-serif)] text-[22px] font-semibold text-white">
              Ready to join the community?
            </h3>
            <p className="m-0 mt-1 text-[14px] text-white/70">
              Become a member of IEEE BRACU Student Branch and unlock a world of opportunity.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/join"
              className="rounded-lg bg-white px-6 py-3 text-[14px] font-semibold text-[#00629B] transition-colors hover:bg-white/90"
            >
              Join IEEE
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/40 px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {/* main footer */}
      <div className="bg-[#0A2540]">
        <div className="mx-auto max-w-[1320px] px-8 pb-8 pt-16">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12">
            {/* brand column */}
            <div className="lg:col-span-4">
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-[3px] border-[1.5px] border-white/40 px-2 py-[3px] font-[family-name:var(--font-serif)] text-[18px] font-semibold tracking-[0.06em] text-white">
                  IEEE
                </span>
                <span className="flex flex-col leading-[1.15]">
                  <span className="text-[14px] font-semibold text-white">BRAC University</span>
                  <span className="text-[10.5px] uppercase tracking-[0.16em] text-white/40">
                    Student Branch
                  </span>
                </span>
              </div>
              <p className="m-0 mb-6 max-w-[34ch] text-[14px] leading-[1.65] text-white/50">
                Advancing technology for humanity at BRAC University since 2008. One of the most
                active IEEE student branches in Bangladesh.
              </p>

              {/* social icons */}
              <div className="flex gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-[#00629B] hover:bg-[#00629B] hover:text-white"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* quick links */}
            <div className="lg:col-span-2">
              <h4 className="m-0 mb-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/30">
                Quick Links
              </h4>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[13.5px] text-white/50 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* chapters */}
            <div className="lg:col-span-3">
              <h4 className="m-0 mb-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/30">
                Chapters
              </h4>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {chapters.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/chapters/${c.slug}`} className="text-[13.5px] text-white/50 transition-colors hover:text-white">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* contact + newsletters */}
            <div className="lg:col-span-3">
              <h4 className="m-0 mb-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/30">
                Contact
              </h4>
              <div className="mb-6 flex flex-col gap-3 text-[13.5px] text-white/50">
                <div className="flex items-start gap-2.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 shrink-0 text-white/30">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>IEEE Office, 4th Floor<br />BRAC University, Kha 224<br />Bir Uttam Rafiqul Islam Ave<br />Dhaka 1212, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="shrink-0 text-white/30">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>chair@ieeebracu.com</span>
                </div>
              </div>

              <h4 className="m-0 mb-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/30">
                Newsletters
              </h4>
              <div className="flex flex-wrap gap-2">
                {newsletters.map((n) => (
                  <a
                    key={n.year}
                    href={n.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12px] font-semibold text-white/50 transition-all hover:border-[#00629B]/50 hover:bg-[#00629B]/10 hover:text-white"
                  >
                    {n.year}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* bottom bar */}
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row">
            <p className="m-0 text-[12.5px] text-white/30">
              © {new Date().getFullYear()} IEEE BRAC University Student Branch. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://www.bracu.ac.bd/" target="_blank" rel="noopener noreferrer" className="text-[12.5px] text-white/30 transition-colors hover:text-white/60">
                Brac University
              </a>
              <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="text-[12.5px] text-white/30 transition-colors hover:text-white/60">
                IEEE.org
              </a>
              <Link href="/contact" className="text-[12.5px] text-white/30 transition-colors hover:text-white/60">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}