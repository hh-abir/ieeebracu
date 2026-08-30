"use client";

import Image from "next/image";
import { useState } from "react";

export default function Achievements() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section className="bg-[#F5F3EE] py-14 font-[family-name:var(--font-sans)] border-t border-[#E3DFD5]">
      <div className="mx-auto max-w-[1200px] px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="mb-3 flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#00629B]">
            <span className="inline-block h-0.5 w-[26px] bg-[#00629B]" />
            Recognition
            <span className="inline-block h-0.5 w-[26px] bg-[#00629B]" />
          </div>
          <h2 className="m-0 font-[family-name:var(--font-serif)] text-[clamp(26px,3vw,36px)] font-semibold tracking-[-0.02em] text-[#191B1E]">
            Our Achievements
          </h2>
        </div>

        {/* Image Container - Natural Height */}
        <div
          onClick={() => setLightboxOpen(true)}
          className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#E3DFD5] bg-white p-2 shadow-sm transition-all duration-300 hover:border-[#00629B]/30 hover:shadow-md"
        >
          <div className="relative w-full overflow-hidden rounded-xl bg-white">
            <Image
              src="https://ieeebracu.com/wp-content/uploads/2020/05/rsz_achievements_for_website-01.jpg"
              alt="Our Achievements - IEEE BRAC University Student Branch"
              width={1200}
              height={560}
              className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              priority
            />
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-[95vw] overflow-hidden rounded-2xl bg-white p-2 shadow-2xl"
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black"
              aria-label="Close image"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="relative h-[80vh] w-[88vw] max-w-[1200px]">
              <Image
                src="https://ieeebracu.com/wp-content/uploads/2020/05/rsz_achievements_for_website-01.jpg"
                alt="Our Achievements - Full View"
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
