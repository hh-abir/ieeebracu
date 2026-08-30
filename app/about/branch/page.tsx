import Image from "next/image";

export const metadata = { title: "BRAC University Student Branch — IEEE BRACU SB" };

export default function AboutBranchPage() {
  return (
    <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
      <article className="space-y-10 lg:col-span-8">
        <div>
          <div className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#00629B]">
            <span className="inline-block h-0.5 w-[26px] bg-[#00629B]" />Our story
          </div>
          <h2 className="m-0 mb-5 font-[family-name:var(--font-serif)] text-[clamp(24px,3vw,34px)] font-semibold tracking-[-0.02em] text-[#191B1E]">
            IEEE BRAC University Student Branch
          </h2>
          <p className="m-0 mb-5 text-[16.5px] leading-[1.75] text-[#44474C]">
            The IEEE Student Branch at BRAC University was inaugurated on July 6, 2008. The inaugural session was held at the Indoor Games room of BRAC University, turning out to be more interesting and informative than expected. Members and non-members alike found the event educational and enjoyable.
          </p>
          <p className="m-0 mb-5 text-[16.5px] leading-[1.75] text-[#44474C]">
            The current founding Executive Body consisted of Dr. Azad AKM as Faculty Advisor, Mahdin Mahboob as President, Sunjib Kumar Singha as Vice-President, Annajiat Alim Rasel as Treasurer, and Nabila Naushin as Secretary. Together with volunteers, they worked day and night to make the inaugural event a total success.
          </p>
          <p className="m-0 mb-5 text-[16.5px] leading-[1.75] text-[#44474C]">
            Since then, the branch has grown into one of the most active IEEE student communities in Bangladesh, operating six technical chapters — PES, CS, RAS, AESS, ComSoc, and EDS — and running seminars, workshops, industry tours, and competitions that connect students to the global IEEE network of over 400,000 technologists.
          </p>
          <p className="m-0 mb-5 text-[16.5px] leading-[1.75] text-[#44474C]">
            The IEEE BRAC University Student Branch was recognized with the prestigious IEEE Regional Exemplary Student Branch Award 2022 for their outstanding contributions.
          </p>
        </div>

        {/* milestones */}
        <div>
          <h2 className="m-0 mb-6 font-[family-name:var(--font-serif)] text-[22px] font-semibold text-[#191B1E]">Key Milestones</h2>
          <div className="space-y-4">
            {[
              { year: "2008", event: "Branch inaugurated at BRAC University" },
              { year: "2018", event: "PES Chapter established — first technical chapter" },
              { year: "2019", event: "CS and AESS Chapters founded" },
              { year: "2020", event: "RAS and ComSoc Chapters launched" },
              { year: "2021", event: "EDS Chapter established — sixth chapter" },
              { year: "2022", event: "IEEE Regional Exemplary Student Branch Award" },
              { year: "2025", event: "IEEE Week inaugurated with first merchandise launch" },
            ].map((m) => (
              <div key={m.year} className="flex gap-5 rounded-xl border border-[#E3DFD5] bg-white px-5 py-4">
                <span className="shrink-0 font-[family-name:var(--font-serif)] text-[20px] font-semibold text-[#00629B]">{m.year}</span>
                <span className="text-[15px] leading-[1.6] text-[#44474C]">{m.event}</span>
              </div>
            ))}
          </div>
        </div>
      </article>

      <aside className="lg:col-span-4">
        <div className="sticky top-[140px] space-y-6">
          {/* counselor */}
          <div className="rounded-2xl border border-[#E3DFD5] bg-white p-6 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#00629B] to-[#0A2540] text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h3 className="m-0 text-[16px] font-semibold text-[#191B1E]">Prof. AKM Abdul Malek Azad, PhD</h3>
            <p className="m-0 mt-1 text-[12px] font-medium uppercase tracking-[0.08em] text-[#00629B]">Branch Counselor &amp; Founder</p>
            <a href="mailto:a.azad@bracu.ac.bd" className="mt-3 inline-block text-[13px] text-[#6E7178] hover:text-[#00629B]">a.azad@bracu.ac.bd</a>
          </div>

          {/* at a glance */}
          <div className="rounded-2xl border border-[#E3DFD5] bg-white p-6">
            <h3 className="m-0 mb-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6E7178]">At a Glance</h3>
            <div className="space-y-4">
              {[
                { label: "Founded", value: "July 6, 2008" },
                { label: "University", value: "BRAC University, Dhaka" },
                { label: "Technical Chapters", value: "6 (PES, CS, RAS, AESS, ComSoc, EDS)" },
                { label: "Region", value: "IEEE Region 10 (Asia-Pacific)" },
                { label: "Section", value: "IEEE Bangladesh Section" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#B0B4B9]">{item.label}</div>
                  <div className="mt-0.5 text-[14px] font-medium text-[#191B1E]">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}