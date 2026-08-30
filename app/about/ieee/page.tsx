import Image from "next/image";

export const metadata = { title: "About IEEE — IEEE BRACU SB" };

export default function AboutIEEEPage() {
  return (
    <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
      <article className="space-y-10 lg:col-span-8">
        <div className="overflow-hidden rounded-2xl border border-[#E3DFD5] bg-white">
          <div className="relative h-[200px] w-full">
            <Image
              src="https://ieeebracu.com/wp-content/uploads/2015/09/IEEE125_desc.png"
              alt="IEEE 125th Anniversary"
              fill
              sizes="100%"
              className="object-contain bg-white p-4"
            />
          </div>
        </div>

        <div>
          <div className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#00629B]">
            <span className="inline-block h-0.5 w-[26px] bg-[#00629B]" />What is IEEE?
          </div>
          <p className="m-0 mb-5 text-[16.5px] leading-[1.75] text-[#44474C]">
            A non-profit organization, IEEE is the world&rsquo;s leading professional association for the advancement of technology. The IEEE name was originally an acronym for the Institute of Electrical and Electronics Engineers, Inc. Today, the organization&rsquo;s scope of interest has expanded into so many related fields, that it is simply referred to by the letters I-E-E-E (pronounced Eye-triple-E).
          </p>
        </div>

        <div>
          <h2 className="m-0 mb-4 font-[family-name:var(--font-serif)] text-[22px] font-semibold text-[#191B1E]">Who IEEE Serves</h2>
          <p className="m-0 mb-5 text-[16.5px] leading-[1.75] text-[#44474C]">
            Through its global membership, IEEE is a leading authority on areas ranging from aerospace systems, computers and telecommunications to biomedical engineering, electric power and consumer electronics among others. Members rely on IEEE as a source of technical and professional information, resources and services. To foster an interest in the engineering profession, IEEE also serves student members in colleges and universities around the world.
          </p>
        </div>

        <div>
          <h2 className="m-0 mb-4 font-[family-name:var(--font-serif)] text-[22px] font-semibold text-[#191B1E]">Mission &amp; Vision</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-[#E3DFD5] bg-white p-6">
              <h3 className="m-0 mb-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#00629B]">Mission</h3>
              <p className="m-0 text-[15px] leading-[1.7] text-[#44474C]">
                IEEE&rsquo;s core purpose is to foster technological innovation and excellence for the benefit of humanity.
              </p>
            </div>
            <div className="rounded-xl border border-[#E3DFD5] bg-white p-6">
              <h3 className="m-0 mb-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#00629B]">Vision</h3>
              <p className="m-0 text-[15px] leading-[1.7] text-[#44474C]">
                IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* sidebar: quick facts */}
      <aside className="lg:col-span-4">
        <div className="sticky top-[140px] space-y-6">
          <div className="rounded-2xl border border-[#E3DFD5] bg-white p-6">
            <h3 className="m-0 mb-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6E7178]">IEEE Quick Facts</h3>
            <div className="space-y-4">
              {[
                { n: "375,000+", l: "Members worldwide" },
                { n: "160+", l: "Countries" },
                { n: "80,000+", l: "Student members" },
                { n: "329", l: "Sections globally" },
                { n: "1,860", l: "Technical chapters" },
                { n: "1,789", l: "Student branches" },
                { n: "45", l: "Societies & councils" },
                { n: "900+", l: "Conferences per year" },
                { n: "144", l: "Journals & magazines" },
              ].map((s) => (
                <div key={s.l} className="flex items-baseline justify-between border-b border-[#E3DFD5] pb-3 last:border-0 last:pb-0">
                  <span className="font-[family-name:var(--font-serif)] text-[20px] font-semibold text-[#0A2540]">{s.n}</span>
                  <span className="text-[12px] text-[#6E7178]">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
          <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-2 rounded-xl bg-[#00629B] px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#004E7C]">
            Visit IEEE.org
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5"><path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>
      </aside>
    </div>
  );
}