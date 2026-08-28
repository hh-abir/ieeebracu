import Link from "next/link";
import Image from "next/image";

type Shot = { src: string; cap: string; tall?: boolean };

// Full-resolution images from the current site (thumbnail suffix removed).
// Swap for local /public/gallery/* paths after migrating assets.
const gallery: Shot[] = [
  { src: "https://ieeebracu.com/wp-content/uploads/2025/07/The-ML-Playbook-1-1-1.jpg", cap: "The ML Playbook Seminar", tall: true },
  { src: "https://ieeebracu.com/wp-content/uploads/2025/07/Industry-Visit.png", cap: "AESS Industry Visit" },
  { src: "https://ieeebracu.com/wp-content/uploads/2025/07/13.jpg", cap: "Orion Power Plant Tour" },
  { src: "https://ieeebracu.com/wp-content/uploads/2020/04/web2.jpg", cap: "BIRDS International Workshop", tall: true },
  { src: "https://ieeebracu.com/wp-content/uploads/2026/01/MG_3132-1.jpg", cap: "General Body Meeting 2024" },
  { src: "https://ieeebracu.com/wp-content/uploads/2026/01/MG_3395.jpg", cap: "Crest Giving Ceremony" },
];

export default function Gallery() {
  return (
    <section className="bg-[#0A2540] py-24 font-[family-name:var(--font-sans)]">
      <div className="mx-auto max-w-[1200px] px-8">
        {/* section head */}
        <div className="mb-11 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-10">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#7FB4DA]">
              <span className="inline-block h-0.5 w-[26px] bg-[#7FB4DA]" />
              In focus
            </div>
            <h2 className="m-0 font-[family-name:var(--font-serif)] text-[clamp(26px,3vw,38px)] font-semibold tracking-[-0.02em] text-white">
              Moments from the branch
            </h2>
          </div>
          <Link href="/gallery" className="group inline-flex items-center gap-2 text-[14px] font-semibold text-white">
            View full gallery
            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* masonry (CSS columns) */}
        <div className="[column-gap:16px] sm:columns-2 lg:columns-3">
          {gallery.map((g, i) => (
            <figure
              key={i}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl"
            >
              <div className={`relative w-full ${g.tall ? "h-[340px]" : "h-[220px]"}`}>
                <Image
                  src={g.src}
                  alt={g.cap}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption
                className="absolute inset-x-0 bottom-0 px-4 pb-3.5 pt-4 text-[13px] font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "linear-gradient(0deg, rgba(6,20,36,.82), rgba(6,20,36,0))" }}
              >
                {g.cap}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}