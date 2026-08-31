import Link from "next/link";

export const metadata = { title: "BRAC University Student Branch — IEEE BRACU SB" };

const chaptersList = [
  { name: "Power & Energy Society", slug: "pes", code: "PES" },
  { name: "Computer Society", slug: "cs", code: "CS" },
  { name: "Robotics & Automation Society", slug: "ras", code: "RAS" },
  { name: "Aerospace & Electronic Systems", slug: "aess", code: "AESS" },
  { name: "Communications Society", slug: "comsoc", code: "ComSoc" },
  { name: "Electron Devices Society", slug: "eds", code: "EDS" },
];

export default function AboutBranchPage() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="border-b border-[#E3DFD5] pb-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#00629B]/20 bg-[#EAF1F6] px-3.5 py-1 text-[12px] font-semibold tracking-wider text-[#00629B] uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00629B]" />
          Established 2008
        </div>
        <h1 className="m-0 font-[family-name:var(--font-serif)] text-[clamp(30px,4vw,46px)] font-bold tracking-tight text-[#0A2540]">
          IEEE BRAC University Student Branch
        </h1>
        <p className="m-0 mt-3 max-w-[70ch] text-[16px] leading-relaxed text-[#4A4E54]">
          Inspiring technological excellence and leadership at BRAC University since July 6, 2008.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Main Article Content */}
        <article className="space-y-10 lg:col-span-8">
          {/* Award Callout Box */}
          <div className="relative overflow-hidden rounded-2xl border border-[#00629B]/25 bg-gradient-to-br from-[#EAF1F6] to-white p-7 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00629B] text-white shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
              </div>
              <div>
                <div className="text-[12px] font-bold uppercase tracking-wider text-[#00629B]">
                  Global Recognition
                </div>
                <h3 className="m-0 mt-1 font-[family-name:var(--font-serif)] text-[19px] font-bold text-[#0A2540]">
                  IEEE Regional Exemplary Student Branch Award
                </h3>
                <p className="m-0 mt-2 text-[14.5px] leading-relaxed text-[#4A4E54]">
                  Recognized by IEEE Region 10 (Asia-Pacific) for exceptional member engagement, technical initiatives, and community impact.
                </p>
              </div>
            </div>
          </div>

          {/* Our Story */}
          <section className="space-y-4">
            <div className="flex items-center gap-2.5 text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#00629B]">
              <span className="h-0.5 w-5 bg-[#00629B]" />
              Our Story
            </div>
            <h2 className="m-0 font-[family-name:var(--font-serif)] text-[24px] font-bold text-[#0A2540]">
              From Humble Beginnings to Premier Student Branch
            </h2>
            <p className="m-0 text-[16px] leading-[1.8] text-[#3C4046]">
              The IEEE Student Branch at BRAC University was officially inaugurated on <strong>July 6, 2008</strong>. The historic inaugural session was held in the Indoor Games Room of BRAC University, bringing together passionate student leaders and faculty mentors.
            </p>
            <p className="m-0 text-[16px] leading-[1.8] text-[#3C4046]">
              The founding Executive Body was led by <strong>Prof. Dr. AKM Abdul Malek Azad</strong> as Branch Counselor, with Mahdin Mahboob as President, Sunjib Kumar Singha as Vice-President, Annajiat Alim Rasel as Treasurer, and Nabila Naushin as Secretary.
            </p>
            <p className="m-0 text-[16px] leading-[1.8] text-[#3C4046]">
              Over the last decade and a half, the branch has grown into one of the most vibrant student branches in the IEEE Bangladesh Section and Region 10, empowering thousands of students through technical workshops, conferences, industrial visits, hackathons, and community outreach.
            </p>
          </section>

          {/* Technical Chapters Showcase */}
          <section className="space-y-5">
            <div className="flex items-center justify-between border-b border-[#E3DFD5] pb-3">
              <h2 className="m-0 font-[family-name:var(--font-serif)] text-[22px] font-bold text-[#0A2540]">
                Our Technical Chapters
              </h2>
              <span className="text-[13px] font-semibold text-[#00629B]">
                6 Chapters
              </span>
            </div>
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {chaptersList.map((c) => (
                <Link
                  key={c.slug}
                  href={`/chapters/${c.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-[#E3DFD5] bg-white p-4 shadow-sm transition-all hover:border-[#00629B]/40 hover:bg-[#EAF1F6]/40 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0A2540] text-[12px] font-bold text-white group-hover:bg-[#00629B] transition-colors">
                      {c.code}
                    </span>
                    <span className="text-[14px] font-semibold text-[#191B1E] group-hover:text-[#00629B] transition-colors">
                      {c.name}
                    </span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#9A9E9F] transition-transform group-hover:translate-x-1 group-hover:text-[#00629B]">
                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </div>
          </section>

          {/* Milestones Timeline */}
          <section className="space-y-6">
            <h2 className="m-0 font-[family-name:var(--font-serif)] text-[22px] font-bold text-[#0A2540]">
              Key Milestones
            </h2>
            <div className="space-y-3">
              {[
                { year: "2008", event: "Branch inaugurated at BRAC University with founding EB" },
                { year: "2018", event: "Power & Energy Society (PES) Chapter established — first technical chapter" },
                { year: "2019", event: "Computer Society (CS) and Aerospace & Electronic Systems (AESS) Chapters founded" },
                { year: "2020", event: "Robotics & Automation Society (RAS) and Communications Society (ComSoc) Chapters launched" },
                { year: "2021", event: "Electron Devices Society (EDS) Chapter established — sixth technical chapter" },
                { year: "2022", event: "Honored with the IEEE Regional Exemplary Student Branch Award" },
                { year: "2025", event: "Flagship IEEE Week with campus-wide tech exhibition and merchandise launch" },
                { year: "2026", event: "Next-generation digital portal launch & expanded inter-university research summits" },
              ].map((m) => (
                <div
                  key={m.year}
                  className="flex items-start gap-4 rounded-xl border border-[#E3DFD5] bg-white p-4 shadow-sm transition-all hover:border-[#00629B]/30"
                >
                  <span className="shrink-0 rounded-lg bg-[#EAF1F6] px-3 py-1 font-[family-name:var(--font-serif)] text-[15px] font-bold text-[#00629B]">
                    {m.year}
                  </span>
                  <p className="m-0 text-[14.5px] leading-relaxed text-[#3C4046]">
                    {m.event}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-6">
            {/* Branch Counselor Card */}
            <div className="rounded-2xl border border-[#E3DFD5] bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#00629B] to-[#0A2540] text-white shadow-sm">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="m-0 font-[family-name:var(--font-serif)] text-[17px] font-bold text-[#0A2540]">
                Prof. AKM Abdul Malek Azad, PhD
              </h3>
              <p className="m-0 mt-1 text-[12px] font-bold uppercase tracking-wider text-[#00629B]">
                Branch Counselor &amp; Founder
              </p>
              <div className="mt-4 border-t border-[#E3DFD5] pt-3">
                <a
                  href="mailto:a.azad@bracu.ac.bd"
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#6E7178] hover:text-[#00629B] transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  a.azad@bracu.ac.bd
                </a>
              </div>
            </div>

            {/* At a Glance Metadata Card */}
            <div className="rounded-2xl border border-[#E3DFD5] bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between border-b border-[#E3DFD5] pb-4">
                <h3 className="m-0 font-[family-name:var(--font-serif)] text-[18px] font-bold text-[#0A2540]">
                  At a Glance
                </h3>
                <span className="rounded-full bg-[#EAF1F6] px-2.5 py-0.5 text-[11px] font-semibold text-[#00629B]">
                  Profile
                </span>
              </div>
              <div className="space-y-3.5">
                {[
                  { label: "Established", value: "July 6, 2008" },
                  { label: "Host Institution", value: "BRAC University, Dhaka" },
                  { label: "Active Chapters", value: "6 Technical Chapters" },
                  { label: "Affiliation", value: "IEEE Region 10 (Asia-Pacific)" },
                  { label: "Local Section", value: "IEEE Bangladesh Section" },
                  { label: "Location", value: "Merul Badda, Dhaka 1212" },
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