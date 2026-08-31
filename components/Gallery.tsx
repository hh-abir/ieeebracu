"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

type ExhibitionPhoto = {
  src: string;
  title: string;
  category: string;
  year: string;
  desc: string;
};

const row1Photos: ExhibitionPhoto[] = [
  {
    src: "https://ieeebracu.com/wp-content/uploads/2025/07/The-ML-Playbook-1-1-1.jpg",
    title: "The Machine Learning Playbook Seminar",
    category: "Technical Seminar",
    year: "2025",
    desc: "Hands-on foundation and real-world AI applications workshop featuring industry leaders.",
  },
  {
    src: "https://ieeebracu.com/wp-content/uploads/2025/07/13.jpg",
    title: "Orion Power Plant Industrial Tour",
    category: "Industrial Tour",
    year: "2025",
    desc: "Field study and technical exploration of heavy power generation systems organized by PES.",
  },
  {
    src: "https://ieeebracu.com/wp-content/uploads/2025/07/Industry-Visit.png",
    title: "AESS Aerospace Industry & Field Visit",
    category: "Field Visit",
    year: "2025",
    desc: "Student members gaining firsthand exposure to modern aerospace and electronic instrumentation.",
  },
  {
    src: "https://ieeebracu.com/wp-content/uploads/2020/04/web2.jpg",
    title: "4th BIRDS International Workshop",
    category: "Global Workshop",
    year: "2020",
    desc: "Collaborative satellite research and space systems engineering symposium hosted at BRACU.",
  },
  {
    src: "https://ieeebracu.com/wp-content/uploads/2025/08/MindTheNetwork-1-of-1-941.png",
    title: "Mind The Network Seminar",
    category: "ComSoc Seminar",
    year: "2025",
    desc: "Frontier discussions on 5G networks, cloud architecture, and modern telecommunications.",
  },
  {
    src: "https://ieeebracu.com/wp-content/uploads/2019/12/International-Workshop-On-Satellites-organized-by-IEEE-Brac-University-Student-Branch-23.jpg",
    title: "International Workshop on Small Satellites",
    category: "Satellite Symposium",
    year: "2019",
    desc: "Keynote sessions with international space science researchers and student project leads.",
  },
];

const row2Photos: ExhibitionPhoto[] = [
  {
    src: "https://ieeebracu.com/wp-content/uploads/2026/01/MG_3196.jpg",
    title: "Leadership Recognition & Crest Ceremony",
    category: "Ceremony & Awards",
    year: "2025",
    desc: "Honoring the visionary leadership and service of executive body leaders and standout volunteers.",
  },
  {
    src: "https://ieeebracu.com/wp-content/uploads/2026/01/MG_3132-1.jpg",
    title: "Annual General Body Meeting",
    category: "Branch Community",
    year: "2024",
    desc: "Welcoming new student members and laying the roadmap for upcoming flagship technical summits.",
  },
  {
    src: "https://ieeebracu.com/wp-content/uploads/2026/01/MG_3395.jpg",
    title: "Executive Recognition Presentation",
    category: "Awards & Honors",
    year: "2025",
    desc: "Recognizing outstanding contributions, dedicated mentor guidance, and chapter leadership.",
  },
  {
    src: "https://ieeebracu.com/wp-content/uploads/2025/08/The-ML-Playbook2.jpg",
    title: "Interactive AI Technical Workshop",
    category: "Workshop",
    year: "2025",
    desc: "Deep-dive interactive technical tutorials on neural networks and scalable ML pipelines.",
  },
  {
    src: "https://ieeebracu.com/wp-content/uploads/2019/12/Satellite-Mission-Idea-Contest-2019-4.jpg",
    title: "Satellite Mission Idea Contest",
    category: "Competition",
    year: "2019",
    desc: "Showcase of student-designed nano-satellite architectures and scientific payloads.",
  },
  {
    src: "https://ieeebracu.com/wp-content/uploads/2025/07/image13.jpg",
    title: "Engineering Technical Field Inspection",
    category: "Technical Inspection",
    year: "2025",
    desc: "On-site industrial inspection and practical learning with senior engineering mentors.",
  },
];

const allPhotos = [...row1Photos, ...row2Photos];

export default function Gallery() {
  const [activePhoto, setActivePhoto] = useState<ExhibitionPhoto | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState<"normal" | "slow">("normal");

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activePhoto) return;
      if (e.key === "Escape") setActivePhoto(null);

      const currentIndex = allPhotos.findIndex((p) => p.src === activePhoto.src);
      if (e.key === "ArrowRight") {
        const next = allPhotos[(currentIndex + 1) % allPhotos.length];
        setActivePhoto(next);
      }
      if (e.key === "ArrowLeft") {
        const prev = allPhotos[(currentIndex - 1 + allPhotos.length) % allPhotos.length];
        setActivePhoto(prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhoto]);

  return (
    <section className="relative overflow-hidden bg-[#0A2540] py-10 sm:py-14 font-[family-name:var(--font-sans)] text-white">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 25%, #00629B 0%, transparent 45%), radial-gradient(circle at 85% 75%, #004E7C 0%, transparent 50%)",
        }}
      />

      {/* Header Container */}
      <div className="relative mx-auto mb-5 sm:mb-6 max-w-[1320px] px-4 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="mb-1.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#7FB4DA]">
              <span className="inline-block h-0.5 w-5 bg-[#7FB4DA]" />
              In Focus
            </div>
            <h2 className="m-0 font-[family-name:var(--font-serif)] text-[clamp(22px,2.8vw,32px)] font-bold tracking-tight text-white">
              Moments from the Branch
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {/* Play/Pause Button (Icon only) */}
            <button
              onClick={() => setIsPaused((v) => !v)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 backdrop-blur transition-all hover:bg-white/20 hover:text-white"
              title={isPaused ? "Resume Motion" : "Pause Motion"}
              aria-label={isPaused ? "Resume Motion" : "Pause Motion"}
            >
              {isPaused ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              )}
            </button>

            {/* Speed Toggle Button (Icon only) */}
            <button
              onClick={() => setSpeed((v) => (v === "normal" ? "slow" : "normal"))}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[11px] font-bold text-white/80 backdrop-blur transition-all hover:bg-white/20 hover:text-white"
              title={speed === "normal" ? "Normal Speed (1.0x)" : "Slow Speed (0.5x)"}
              aria-label="Toggle speed"
            >
              {speed === "normal" ? "1x" : ".5x"}
            </button>

            {/* Gallery Link Button */}
            <Link
              href="/gallery"
              className="group inline-flex h-8 items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 text-[12.5px] font-semibold text-white backdrop-blur transition-all hover:bg-[#00629B] hover:border-[#00629B]"
            >
              <span>Gallery</span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                className="transition-transform group-hover:translate-x-0.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Infinite Exhibition Rails */}
      <div className="relative space-y-4 sm:space-y-5 overflow-hidden">
        {/* Left & Right Edge Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 sm:w-28 bg-gradient-to-r from-[#0A2540] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 sm:w-28 bg-gradient-to-l from-[#0A2540] to-transparent" />

        {/* Row 1: Left to Right Marquee */}
        <div
          className={`flex w-max gap-4 sm:gap-5 ${
            isPaused ? "animate-none" : "animate-exhibit-left"
          } hover:[animation-play-state:paused]`}
          style={{
            animationDuration: speed === "normal" ? "42s" : "75s",
          }}
        >
          {/* Double array for infinite seamless looping */}
          {[...row1Photos, ...row1Photos].map((item, index) => (
            <div
              key={`row1-${index}`}
              onClick={() => setActivePhoto(item)}
              className="group relative h-[220px] w-[310px] sm:h-[260px] sm:w-[380px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#061424] shadow-xl transition-all duration-300 hover:scale-[1.03] hover:border-[#7FB4DA] hover:shadow-[0_12px_36px_rgba(0,98,155,0.35)]"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 310px, 380px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              {/* Dark Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Bottom Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#00629B] px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-white">
                    {item.category}
                  </span>
                  <span className="text-[11px] font-medium text-white/70">
                    {item.year}
                  </span>
                </div>
                <h3 className="m-0 mt-1.5 font-[family-name:var(--font-serif)] text-[15.5px] sm:text-[17px] font-bold leading-snug text-white line-clamp-1 group-hover:text-[#7FB4DA] transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Zoom Action Icon */}
              <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white/80 opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 hover:bg-[#00629B] hover:scale-110">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Right to Left Marquee */}
        <div
          className={`flex w-max gap-4 sm:gap-5 ${
            isPaused ? "animate-none" : "animate-exhibit-right"
          } hover:[animation-play-state:paused]`}
          style={{
            animationDuration: speed === "normal" ? "46s" : "80s",
          }}
        >
          {/* Double array for infinite seamless looping */}
          {[...row2Photos, ...row2Photos].map((item, index) => (
            <div
              key={`row2-${index}`}
              onClick={() => setActivePhoto(item)}
              className="group relative h-[220px] w-[310px] sm:h-[260px] sm:w-[380px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-[#061424] shadow-xl transition-all duration-300 hover:scale-[1.03] hover:border-[#7FB4DA] hover:shadow-[0_12px_36px_rgba(0,98,155,0.35)]"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 310px, 380px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />
              {/* Dark Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

              {/* Bottom Caption Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#0A2540] border border-white/20 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-[#7FB4DA]">
                    {item.category}
                  </span>
                  <span className="text-[11px] font-medium text-white/70">
                    {item.year}
                  </span>
                </div>
                <h3 className="m-0 mt-1.5 font-[family-name:var(--font-serif)] text-[15.5px] sm:text-[17px] font-bold leading-snug text-white line-clamp-1 group-hover:text-[#7FB4DA] transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Zoom Action Icon */}
              <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white/80 opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 hover:bg-[#00629B] hover:scale-110">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md">
          {/* Close button */}
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-white/20"
            aria-label="Close Lightbox"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Prev button */}
          <button
            onClick={() => {
              const currentIndex = allPhotos.findIndex((p) => p.src === activePhoto.src);
              const prev = allPhotos[(currentIndex - 1 + allPhotos.length) % allPhotos.length];
              setActivePhoto(prev);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-[#00629B]"
            aria-label="Previous image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={() => {
              const currentIndex = allPhotos.findIndex((p) => p.src === activePhoto.src);
              const next = allPhotos[(currentIndex + 1) % allPhotos.length];
              setActivePhoto(next);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:bg-[#00629B]"
            aria-label="Next image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Lightbox Content */}
          <div className="flex max-h-[85vh] max-w-5xl flex-col items-center">
            <div className="relative h-[55vh] w-[85vw] max-w-5xl sm:h-[70vh]">
              <Image
                src={activePhoto.src}
                alt={activePhoto.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <div className="inline-block rounded-full bg-[#00629B] px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                {activePhoto.category} • {activePhoto.year}
              </div>
              <h3 className="m-0 mt-2 font-[family-name:var(--font-serif)] text-[18px] sm:text-[22px] font-bold text-white">
                {activePhoto.title}
              </h3>
              <p className="m-0 mt-1 max-w-2xl text-[13px] text-white/70">
                {activePhoto.desc}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Embedded Keyframe Animations for Exhibition Rails */}
      <style jsx global>{`
        @keyframes exhibitLeft {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        @keyframes exhibitRight {
          0% {
            transform: translate3d(-50%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-exhibit-left {
          animation: exhibitLeft linear infinite;
          will-change: transform;
        }
        .animate-exhibit-right {
          animation: exhibitRight linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}