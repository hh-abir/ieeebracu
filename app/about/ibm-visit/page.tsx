import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "IEEE Foundation President & IBM Director Visit — IEEE BRACU SB" };

export default function IBMVisitPage() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="border-b border-[#E3DFD5] pb-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#00629B]/20 bg-[#EAF1F6] px-3.5 py-1 text-[12px] font-semibold tracking-wider text-[#00629B] uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00629B]" />
          Historic Milestone
        </div>
        <h1 className="m-0 font-[family-name:var(--font-serif)] text-[clamp(28px,3.8vw,44px)] font-bold tracking-tight text-[#0A2540]">
          IEEE Foundation President &amp; IBM Research Director Visits BRACU
        </h1>
        <p className="m-0 mt-3 max-w-[70ch] text-[16px] leading-relaxed text-[#4A4E54]">
          A historic occasion celebrating global technological collaboration, student innovation, and future research opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Main Content */}
        <article className="space-y-10 lg:col-span-8">
          {/* Highlight Quote Box */}
          <div className="relative overflow-hidden rounded-2xl border-l-4 border-l-[#00629B] border border-[#E3DFD5] bg-white p-7 shadow-sm">
            <p className="m-0 font-[family-name:var(--font-serif)] text-[17px] italic leading-relaxed text-[#0A2540]">
              &ldquo;Connecting passionate student researchers in Bangladesh with global technology pioneers creates the foundation for breakthroughs that benefit all of humanity.&rdquo;
            </p>
          </div>

          {/* Article Sections */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5 text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#00629B]">
              <span className="h-0.5 w-5 bg-[#00629B]" />
              Event Overview
            </div>
            <h2 className="m-0 font-[family-name:var(--font-serif)] text-[24px] font-bold text-[#0A2540]">
              A Landmark Engagement for BRAC University
            </h2>
            <p className="m-0 text-[16px] leading-[1.8] text-[#3C4046]">
              The IEEE BRAC University Student Branch had the distinct privilege of hosting a historic visit from the <strong>IEEE Foundation President and IBM Research Director</strong>. This landmark event underscored the international recognition of the branch&rsquo;s sustained excellence in advancing technology education, engineering leadership, and humanitarian technology initiatives.
            </p>
            <p className="m-0 text-[16px] leading-[1.8] text-[#3C4046]">
              During the visit, the distinguished international delegation toured BRAC University&rsquo;s research facilities, interacted closely with student project teams, and engaged in deep discussions with university leadership and faculty mentors regarding future joint research initiatives.
            </p>
            <p className="m-0 text-[16px] leading-[1.8] text-[#3C4046]">
              Keynote sessions explored the future of quantum computing, AI in emerging economies, and the role of student branches in bridging academic exploration with industrial breakthroughs.
            </p>
          </section>

          {/* Photo Gallery Grid */}
          <section className="space-y-5">
            <div className="flex items-center justify-between border-b border-[#E3DFD5] pb-3">
              <h2 className="m-0 font-[family-name:var(--font-serif)] text-[22px] font-bold text-[#0A2540]">
                Event Highlights &amp; Gallery
              </h2>
              <Link
                href="/gallery"
                className="text-[13px] font-semibold text-[#00629B] hover:underline"
              >
                View Full Gallery &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { src: "https://ieeebracu.com/wp-content/uploads/2025/07/The-ML-Playbook-1-1-1.jpg", caption: "Keynote presentation and plenary discussion" },
                { src: "https://ieeebracu.com/wp-content/uploads/2020/04/web2.jpg", caption: "Delegation meeting with student researchers" },
                { src: "https://ieeebracu.com/wp-content/uploads/2025/07/Industry-Visit.png", caption: "Research laboratory demonstration & tour" },
                { src: "https://ieeebracu.com/wp-content/uploads/2025/07/13.jpg", caption: "Interactive Q&A session with student body" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group overflow-hidden rounded-2xl border border-[#E3DFD5] bg-white shadow-sm transition-all hover:shadow-md"
                >
                  <div className="relative h-[200px] w-full overflow-hidden bg-[#FAF9F5]">
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3.5">
                    <p className="m-0 text-[13px] text-[#6E7178]">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-6">
            <div className="rounded-2xl border border-[#E3DFD5] bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between border-b border-[#E3DFD5] pb-4">
                <h3 className="m-0 font-[family-name:var(--font-serif)] text-[18px] font-bold text-[#0A2540]">
                  Event Snapshot
                </h3>
                <span className="rounded-full bg-[#EAF1F6] px-2.5 py-0.5 text-[11px] font-semibold text-[#00629B]">
                  Historical
                </span>
              </div>
              <div className="space-y-3.5">
                {[
                  { label: "Visiting Delegation", value: "IEEE Foundation President & IBM Research Director" },
                  { label: "Host", value: "IEEE BRACU Student Branch" },
                  { label: "Venue", value: "BRAC University, Dhaka" },
                  { label: "Participants", value: "Faculty, Researchers & IEEE Members" },
                  { label: "Key Focus", value: "Frontier Computing, AI & Global Student Networks" },
                ].map((item) => (
                  <div key={item.label} className="border-b border-[#F0ECE1] pb-3 last:border-0 last:pb-0">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#9A9E9F]">
                      {item.label}
                    </div>
                    <div className="mt-0.5 text-[14px] font-semibold text-[#191B1E]">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}