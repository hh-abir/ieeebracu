"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  year: string;
  aspect?: "tall" | "wide" | "square";
}

const photos: GalleryPhoto[] = [
  {
    id: "1",
    src: "https://ieeebracu.com/wp-content/uploads/2025/07/The-ML-Playbook-1-1-1.jpg",
    title: "Seminar on ML Playbook: Foundations & Applications",
    year: "2025",
    aspect: "wide",
  },
  {
    id: "2",
    src: "https://ieeebracu.com/wp-content/uploads/2025/07/Industry-Visit.png",
    title: "Industry Visit organized by IEEE AESS BRACU SBC",
    year: "2025",
    aspect: "wide",
  },
  {
    id: "3",
    src: "https://ieeebracu.com/wp-content/uploads/2025/07/13.jpg",
    title: "Industrial Tour to Orion Power Plant by IEEE PES BRACU SBC",
    year: "2025",
    aspect: "wide",
  },
  {
    id: "4",
    src: "https://ieeebracu.com/wp-content/uploads/2020/04/web2.jpg",
    title: "4th BIRDS International Workshop",
    year: "2020",
    aspect: "tall",
  },
  {
    id: "5",
    src: "https://ieeebracu.com/wp-content/uploads/2026/01/MG_3196.jpg",
    title: "Certificate & Crest Giving Ceremony for Former EBs",
    year: "2025",
    aspect: "wide",
  },
  {
    id: "6",
    src: "https://ieeebracu.com/wp-content/uploads/2026/01/MG_3395.jpg",
    title: "Honoring Outstanding Leadership & Contributions",
    year: "2025",
    aspect: "tall",
  },
  {
    id: "7",
    src: "https://ieeebracu.com/wp-content/uploads/2025/08/MindTheNetwork-1-of-1-941.png",
    title: "Mind The Network Seminar by IEEE ComSoc",
    year: "2025",
    aspect: "square",
  },
  {
    id: "8",
    src: "https://ieeebracu.com/wp-content/uploads/2026/01/MG_3139-1.jpg",
    title: "General Body Meeting 2024 - Branch Assembly",
    year: "2024",
    aspect: "wide",
  },
  {
    id: "9",
    src: "https://ieeebracu.com/wp-content/uploads/2025/08/The-ML-Playbook2.jpg",
    title: "Hands-on Technical Session on Machine Learning",
    year: "2025",
    aspect: "square",
  },
  {
    id: "10",
    src: "https://ieeebracu.com/wp-content/uploads/2019/12/International-Workshop-On-Satellites-organized-by-IEEE-Brac-University-Student-Branch-23.jpg",
    title: "International Workshop on Small Satellites",
    year: "2019",
    aspect: "wide",
  },
  {
    id: "11",
    src: "https://ieeebracu.com/wp-content/uploads/2019/12/Satellite-Mission-Idea-Contest-2019-4.jpg",
    title: "Satellite Mission Idea Contest 2019",
    year: "2019",
    aspect: "wide",
  },
  {
    id: "12",
    src: "https://ieeebracu.com/wp-content/uploads/2026/01/MG_3394.jpg",
    title: "Executive Recognition & Crest Presentation",
    year: "2025",
    aspect: "wide",
  },
  {
    id: "13",
    src: "https://ieeebracu.com/wp-content/uploads/2025/08/The-ML-Playbook5.jpg",
    title: "Interactive AI Q&A with Industry Mentors",
    year: "2025",
    aspect: "square",
  },
  {
    id: "14",
    src: "https://ieeebracu.com/wp-content/uploads/2025/07/image13.jpg",
    title: "Field Visit & Technical Engineering Inspection",
    year: "2025",
    aspect: "wide",
  },
  {
    id: "15",
    src: "https://ieeebracu.com/wp-content/uploads/2026/01/MG_3132-1.jpg",
    title: "General Body Meeting Keynote Address",
    year: "2024",
    aspect: "wide",
  },
  {
    id: "16",
    src: "https://ieeebracu.com/wp-content/uploads/2026/01/MG_3452.jpg",
    title: "Executive Body 2024-2025 Crest Distribution",
    year: "2025",
    aspect: "wide",
  },
  {
    id: "17",
    src: "https://ieeebracu.com/wp-content/uploads/2025/08/MindTheNetwork-1-of-1-104.jpg",
    title: "Networking Session on Next-Gen Telecommunication",
    year: "2025",
    aspect: "tall",
  },
  {
    id: "18",
    src: "https://ieeebracu.com/wp-content/uploads/2026/01/MG_3251.jpg",
    title: "Student Branch Leadership Celebration",
    year: "2025",
    aspect: "wide",
  },
];

export default function GalleryPage() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! > 0 ? prev! - 1 : photos.length - 1));
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! < photos.length - 1 ? prev! + 1 : 0));
  };

  return (
    <div className="min-h-screen bg-[#F5F3EE] py-12 font-[family-name:var(--font-sans)] md:py-16">
      <div className="mx-auto max-w-[1320px] px-8">
        {/* Clean, Modern Header */}
        <div className="mb-10 text-center">
          <div className="mb-2 flex items-center justify-center gap-2.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#00629B]">
            <span className="inline-block h-0.5 w-[22px] bg-[#00629B]" />
            Archive
            <span className="inline-block h-0.5 w-[22px] bg-[#00629B]" />
          </div>
          <h1 className="m-0 font-[family-name:var(--font-serif)] text-[clamp(28px,3.5vw,42px)] font-bold tracking-[-0.02em] text-[#191B1E]">
            Photo Gallery
          </h1>
          <p className="mx-auto mt-2 max-w-[48ch] text-[15px] text-[#6E7178]">
            Moments, workshops, ceremonies, and industrial tours across IEEE BRAC University Student Branch.
          </p>
        </div>

        {/* Photos Masonry Grid */}
        <div className="[column-gap:18px] sm:columns-2 lg:columns-3 xl:columns-4">
          {photos.map((p, idx) => (
            <div
              key={p.id}
              onClick={() => openLightbox(idx)}
              className="group relative mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-2xl border border-[#E3DFD5] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00629B]/40 hover:shadow-[0_14px_30px_rgba(20,22,24,0.09)]"
            >
              <div
                className={`relative w-full ${
                  p.aspect === "tall"
                    ? "h-[360px]"
                    : p.aspect === "square"
                    ? "h-[270px]"
                    : "h-[210px]"
                }`}
              >
                <Image
                  src={p.src}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/85 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Top Year Badge */}
                <div className="absolute left-3 top-3 rounded-md bg-black/60 px-2 py-0.5 text-[11px] font-semibold text-white backdrop-blur">
                  {p.year}
                </div>

                {/* Hover Caption */}
                <div className="absolute inset-x-0 bottom-0 p-3.5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="m-0 font-[family-name:var(--font-serif)] text-[14px] font-medium leading-snug text-white">
                    {p.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && photos[selectedPhotoIndex] && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-[150] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[95vh] max-w-[95vw] flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-11 right-0 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/40"
              aria-label="Close lightbox"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Prev Button */}
            <button
              onClick={showPrev}
              className="absolute -left-12 top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-[24px] text-white transition-colors hover:bg-white/40"
              aria-label="Previous photo"
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              onClick={showNext}
              className="absolute -right-12 top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-[24px] text-white transition-colors hover:bg-white/40"
              aria-label="Next photo"
            >
              ›
            </button>

            {/* Image Container */}
            <div className="relative h-[74vh] w-[90vw] max-w-[1200px] overflow-hidden rounded-2xl bg-black">
              <Image
                src={photos[selectedPhotoIndex].src}
                alt={photos[selectedPhotoIndex].title}
                fill
                sizes="95vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Caption & Counter Footer */}
            <div className="mt-3 flex w-full max-w-[1200px] items-center justify-between px-2 text-white">
              <div className="font-[family-name:var(--font-serif)] text-[15px] font-medium">
                {photos[selectedPhotoIndex].title} · <span className="text-[#7FB4DA]">{photos[selectedPhotoIndex].year}</span>
              </div>
              <div className="text-[13px] font-medium text-white/60">
                {selectedPhotoIndex + 1} / {photos.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
