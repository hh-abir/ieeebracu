export const metadata = { title: "Organogram — IEEE BRACU SB" };

export default function OrganogramPage() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="border-b border-[#E3DFD5] pb-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#00629B]/20 bg-[#EAF1F6] px-3.5 py-1 text-[12px] font-semibold tracking-wider text-[#00629B] uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00629B]" />
          Governance &amp; Structure
        </div>
        <h1 className="m-0 font-[family-name:var(--font-serif)] text-[clamp(30px,4vw,46px)] font-bold tracking-tight text-[#0A2540]">
          Branch Organogram
        </h1>
        <p className="m-0 mt-3 max-w-[70ch] text-[16px] leading-relaxed text-[#4A4E54]">
          The organizational hierarchy and governing structure of IEEE BRAC University Student Branch and its technical affinity groups.
        </p>
      </div>

      {/* Structural Hierarchy Overview Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-[#E3DFD5] bg-white p-6 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF1F6] text-[#00629B] font-bold text-[14px]">
            01
          </div>
          <h3 className="m-0 text-[15px] font-bold text-[#0A2540]">Counselor &amp; Advisors</h3>
          <p className="m-0 mt-2 text-[13px] leading-relaxed text-[#6E7178]">
            Senior faculty leadership providing academic guidance, strategic oversight, and section liaison.
          </p>
        </div>

        <div className="rounded-2xl border border-[#E3DFD5] bg-white p-6 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#00629B] text-white font-bold text-[14px]">
            02
          </div>
          <h3 className="m-0 text-[15px] font-bold text-[#0A2540]">Main Executive Body</h3>
          <p className="m-0 mt-2 text-[13px] leading-relaxed text-[#6E7178]">
            Chair, Vice Chair, Secretary, Treasurer, Webmaster, Designers, Editors, and Coordinators.
          </p>
        </div>

        <div className="rounded-2xl border border-[#E3DFD5] bg-white p-6 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A2540] text-white font-bold text-[14px]">
            03
          </div>
          <h3 className="m-0 text-[15px] font-bold text-[#0A2540]">Chapter Executive Bodies</h3>
          <p className="m-0 mt-2 text-[13px] leading-relaxed text-[#6E7178]">
            Dedicated leadership teams steering the 6 technical society chapters (PES, CS, RAS, AESS, ComSoc, EDS).
          </p>
        </div>

        <div className="rounded-2xl border border-[#E3DFD5] bg-white p-6 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF1F6] text-[#00629B] font-bold text-[14px]">
            04
          </div>
          <h3 className="m-0 text-[15px] font-bold text-[#0A2540]">Members &amp; Volunteers</h3>
          <p className="m-0 mt-2 text-[13px] leading-relaxed text-[#6E7178]">
            Active student engineers and passionate volunteer taskforces powering flagship initiatives and events.
          </p>
        </div>
      </div>

      {/* Organogram Chart Viewer */}
      <div className="overflow-hidden rounded-2xl border border-[#E3DFD5] bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E3DFD5] bg-[#F5F3EE]/50 px-6 py-4">
          <div>
            <h3 className="m-0 font-[family-name:var(--font-serif)] text-[17px] font-bold text-[#0A2540]">
              Official Structure Chart
            </h3>
            <p className="m-0 text-[12.5px] text-[#6E7178]">
              High-resolution organizational tree diagram
            </p>
          </div>
          <a
            href="https://ieeebracu.com/wp-content/uploads/2020/06/Organogram1.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#E3DFD5] bg-white px-3.5 py-1.5 text-[12.5px] font-semibold text-[#00629B] shadow-sm transition-all hover:bg-[#EAF1F6] hover:border-[#00629B]/30"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Open Full Size
          </a>
        </div>

        <div className="p-6 sm:p-10 flex justify-center bg-[#FAF9F5]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ieeebracu.com/wp-content/uploads/2020/06/Organogram1.jpg"
            alt="IEEE BRACU Student Branch Organogram"
            className="max-w-full rounded-xl border border-[#E3DFD5] shadow-md object-contain"
          />
        </div>
      </div>
    </div>
  );
}