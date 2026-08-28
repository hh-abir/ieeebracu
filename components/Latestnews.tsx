import Link from "next/link";
import Image from "next/image";

type Post = {
  slug: string;
  image: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
};

// Real posts from the current site. Replace with CMS data after migration.
const featured: Post = {
  slug: "survive-or-thrive-how-bangladeshs-engineers-can-win-in-the-age-of-ai",
  image: "https://ieeebracu.com/wp-content/uploads/2026/06/678455570_1609210241206792_3124385584510281921_n.jpg",
  tag: "Webinar",
  date: "Jun 2026",
  title: "Survive or Thrive: How Bangladesh's Engineers Can Win in the Age of AI",
  excerpt:
    "IEEE BRAC University Student Branch, in collaboration with IEEE IUBAT Student Branch, organized a webinar exploring how engineers in Bangladesh can adapt and lead in the rapidly evolving landscape of artificial intelligence.",
};

const posts: Post[] = [
  {
    slug: "bridging-theory-and-practice-ieee-pes-bracu-sbc-workshop-on-power-system-design-using-autocad",
    image: "https://ieeebracu.com/wp-content/uploads/2026/06/679799965_1377116257781428_6406804003297454992_n.jpg",
    tag: "Workshop",
    date: "Jun 2026",
    title: "Bridging Theory and Practice: Workshop on Power System Design using AutoCAD",
    excerpt:
      "IEEE PES BRACU SBC organized a hands-on technical workshop on power system design, bringing CAD tools into the learning workflow.",
  },
  {
    slug: "shaping-tomorrows-grid-ieee-pes-bracu-sbc-seminar-on-smart-grid-innovation-and-energy-transition",
    image: "https://ieeebracu.com/wp-content/uploads/2026/06/679092353_1376909337802120_195578129513660732_n.jpg",
    tag: "Seminar",
    date: "Jun 2026",
    title: "Shaping Tomorrow's Grid: Smart Grid Innovation and Energy Transition",
    excerpt:
      "A seminar on the future of power grids, covering smart infrastructure, renewable integration, and the energy transition ahead.",
  },
  {
    slug: "an-industrial-tour-to-the-orion-power-plant",
    image: "https://ieeebracu.com/wp-content/uploads/2025/07/13.jpg",
    tag: "Industry Tour",
    date: "Jul 2025",
    title: "Industrial Tour to the Orion Power Plant",
    excerpt:
      "IEEE PES BRACU SBC members visited the Orion power plant for a close look at large-scale power generation and grid operations.",
  },
];

export default function LatestNews() {
  return (
    <section className="bg-[#F5F3EE] py-24 font-[family-name:var(--font-sans)]">
      <div className="mx-auto max-w-[1320px] px-8">
        {/* section head */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-10">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#00629B]">
              <span className="inline-block h-0.5 w-[26px] bg-[#00629B]" />
              Latest from the branch
            </div>
            <h2 className="m-0 font-[family-name:var(--font-serif)] text-[clamp(26px,3vw,38px)] font-semibold tracking-[-0.02em] text-[#191B1E]">
              News &amp; Events
            </h2>
          </div>
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 text-[14px] font-semibold text-[#0A2540]"
          >
            View all news
            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* featured + side stack */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* featured large card — spans 3 cols */}
          <Link
            href={`/news/${featured.slug}`}
            className="group col-span-1 flex flex-col overflow-hidden rounded-2xl border border-[#E3DFD5] bg-white transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(0,98,155,0.08)] lg:col-span-3"
          >
            <div className="relative h-[320px] w-full overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(0deg, rgba(10,37,64,.4), transparent 50%)" }}
              />
              <span className="absolute left-5 top-5 rounded-md bg-white/95 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#00629B] backdrop-blur">
                {featured.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <span className="mb-2 text-[12px] font-medium uppercase tracking-[0.08em] text-[#6E7178]">
                {featured.date}
              </span>
              <h3 className="m-0 mb-3 font-[family-name:var(--font-serif)] text-[22px] font-semibold leading-[1.25] tracking-[-0.01em] text-[#191B1E]">
                {featured.title}
              </h3>
              <p className="m-0 text-[14.5px] leading-[1.65] text-[#6E7178]">
                {featured.excerpt}
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[13px] font-semibold text-[#0A2540] transition-colors group-hover:text-[#00629B]">
                Read more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </Link>

          {/* side stack — 3 smaller cards stacked, span 2 cols */}
          <div className="col-span-1 flex flex-col gap-6 lg:col-span-2">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/news/${p.slug}`}
                className="group flex gap-5 overflow-hidden rounded-2xl border border-[#E3DFD5] bg-white p-4 transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(0,98,155,0.07)]"
              >
                <div className="relative h-[120px] w-[140px] shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="140px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center py-1">
                  <div className="mb-2 flex items-center gap-2.5">
                    <span className="rounded bg-[#EAF1F6] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#00629B]">
                      {p.tag}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.06em] text-[#B0B4B9]">
                      {p.date}
                    </span>
                  </div>
                  <h3 className="m-0 font-[family-name:var(--font-serif)] text-[15.5px] font-semibold leading-[1.35] tracking-[-0.01em] text-[#191B1E]">
                    {p.title}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-[12px] font-semibold text-[#0A2540] transition-colors group-hover:text-[#00629B]">
                    Read more
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}