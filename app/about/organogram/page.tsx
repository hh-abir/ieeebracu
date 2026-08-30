export const metadata = { title: "Organogram — IEEE BRACU SB" };

export default function OrganogramPage() {
  return (
    <div className="text-center">
      <div className="mb-8">
        <div className="mb-5 flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#00629B]">
          <span className="inline-block h-0.5 w-[26px] bg-[#00629B]" />
          Structure
          <span className="inline-block h-0.5 w-[26px] bg-[#00629B]" />
        </div>
        <h2 className="m-0 font-[family-name:var(--font-serif)] text-[clamp(24px,3vw,34px)] font-semibold tracking-[-0.02em] text-[#191B1E]">
          Organogram
        </h2>
        <p className="mx-auto m-0 mt-3 max-w-[50ch] text-[15px] text-[#6E7178]">
          The organizational structure of the IEEE BRAC University Student Branch and its six technical chapters.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#E3DFD5] bg-white p-6 shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://ieeebracu.com/wp-content/uploads/2020/06/Organogram1.jpg"
          alt="IEEE BRACU Student Branch Organogram"
          className="mx-auto max-w-full rounded-lg"
        />
      </div>

      <p className="mx-auto mt-6 max-w-[50ch] text-[13px] text-[#B0B4B9]">
        Last updated: 2020. Contact the webmaster for the latest version.
      </p>
    </div>
  );
}