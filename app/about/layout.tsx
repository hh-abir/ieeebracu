"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const subPages = [
  { label: "About IEEE", href: "/about/ieee" },
  { label: "Student Branch", href: "/about/branch" },
  { label: "Organogram", href: "/about/organogram" },
  { label: "Logos & Resources", href: "/about/logos" },
  { label: "IBM Director Visit", href: "/about/ibm-visit" },
];

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-[#F5F3EE] font-[family-name:var(--font-sans)]">
      {/* header */}
      <div className="relative overflow-hidden bg-[#0A2540]">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, #3E9BD6 0%, transparent 50%), radial-gradient(circle at 70% 60%, #00629B 0%, transparent 50%)" }} />
        <div className="relative mx-auto max-w-[1320px] px-8 pb-6 pt-20">
          <Link href="/" className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[13px] font-medium text-white backdrop-blur transition-colors hover:bg-white/20">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Home
          </Link>
          <div className="mt-4 mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#7FB4DA]">
            <span className="inline-block h-0.5 w-[26px] bg-[#7FB4DA]" />About
          </div>
          <h1 className="m-0 font-[family-name:var(--font-serif)] text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
            About Us
          </h1>
          <p className="m-0 mt-4 max-w-[50ch] text-[16px] leading-[1.6] text-white/55">
            Learn about IEEE, the BRAC University Student Branch, our structure, and our story.
          </p>
        </div>
      </div>

      {/* sub-nav */}
      <div className="border-b border-[#E3DFD5] bg-[#F5F3EE]">
        <div className="mx-auto max-w-[1320px] px-8">
          <nav className="-mb-px flex gap-1 overflow-x-auto py-2">
            {subPages.map((p) => {
              const active = pathname === p.href;
              return (
                <Link
                  key={p.href}
                  href={p.href}
                  className={`shrink-0 rounded-lg px-4 py-2.5 text-[13.5px] font-medium transition-all ${
                    active
                      ? "bg-[#0A2540] text-white shadow-sm"
                      : "text-[#6E7178] hover:bg-white hover:text-[#191B1E]"
                  }`}
                >
                  {p.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* page content */}
      <div className="mx-auto max-w-[1320px] px-8 py-14">
        {children}
      </div>
    </main>
  );
}