import Image from "next/image";

export const metadata = { title: "Resources — IEEE BRACU SB" };

const brandColors = [
  { name: "IEEE Navy", hex: "#0A2540", text: "Primary dark header, text & card elements" },
  { name: "IEEE Blue", hex: "#00629B", text: "Core brand color, accents & primary actions" },
  { name: "Light Blue", hex: "#7FB4DA", text: "Subtle highlights, pill tags & secondary borders" },
  { name: "Off-White", hex: "#F5F3EE", text: "Clean background canvas & muted surfaces" },
];

const logos = [
  { name: "IEEE BRACU Student Branch", type: "Main Branch", src: "https://ieeebracu.com/wp-content/uploads/2022/01/Artboard-1-1.png" },
  { name: "Power & Energy Society", type: "Technical Chapter", src: "https://ieeebracu.com/wp-content/uploads/2020/04/pes.png" },
  { name: "Computer Society", type: "Technical Chapter", src: "https://ieeebracu.com/wp-content/uploads/2020/04/cs.png" },
  { name: "Robotics & Automation Society", type: "Technical Chapter", src: "https://ieeebracu.com/wp-content/uploads/2020/04/ras.png" },
  { name: "Aerospace & Electronic Systems", type: "Technical Chapter", src: "https://ieeebracu.com/wp-content/uploads/2020/04/aess.png" },
  { name: "Communications Society", type: "Technical Chapter", src: "https://ieeebracu.com/wp-content/uploads/2020/04/comsoc.png" },
  { name: "Electron Devices Society", type: "Technical Chapter", src: "https://ieeebracu.com/wp-content/uploads/2020/04/eds.png" },
];

export default function ResourcesPage() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="border-b border-[#E3DFD5] pb-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#00629B]/20 bg-[#EAF1F6] px-3.5 py-1 text-[12px] font-semibold tracking-wider text-[#00629B] uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00629B]" />
          Brand &amp; Media Resources
        </div>
        <h1 className="m-0 font-[family-name:var(--font-serif)] text-[clamp(30px,4vw,46px)] font-bold tracking-tight text-[#0A2540]">
          Resources &amp; Brand Assets
        </h1>
        <p className="m-0 mt-3 max-w-[70ch] text-[16px] leading-relaxed text-[#4A4E54]">
          Official visual assets, society emblems, and color standards for IEEE BRAC University Student Branch and its technical chapters.
        </p>
      </div>

      {/* Brand Color Guide */}
      <section className="space-y-5">
        <div className="flex items-center justify-between border-b border-[#E3DFD5] pb-3">
          <h2 className="m-0 font-[family-name:var(--font-serif)] text-[22px] font-bold text-[#0A2540]">
            Brand Color Palette
          </h2>
          <span className="text-[12.5px] font-semibold text-[#6E7178]">
            Color Specifications
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {brandColors.map((color) => (
            <div
              key={color.name}
              className="overflow-hidden rounded-2xl border border-[#E3DFD5] bg-white p-4 shadow-sm"
            >
              <div
                className="h-16 w-full rounded-xl shadow-inner border border-black/5"
                style={{ backgroundColor: color.hex }}
              />
              <div className="mt-3.5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[14px] text-[#191B1E]">{color.name}</span>
                  <code className="rounded bg-[#F5F3EE] px-2 py-0.5 text-[11px] font-mono font-bold text-[#00629B]">
                    {color.hex}
                  </code>
                </div>
                <p className="m-0 mt-1.5 text-[12px] text-[#6E7178]">
                  {color.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Logo Grid */}
      <section className="space-y-5">
        <div className="flex items-center justify-between border-b border-[#E3DFD5] pb-3">
          <h2 className="m-0 font-[family-name:var(--font-serif)] text-[22px] font-bold text-[#0A2540]">
            Official Chapter Logos
          </h2>
          <span className="text-[12.5px] font-semibold text-[#00629B]">
            PNG Transparent
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E3DFD5] bg-white p-6 shadow-sm transition-all hover:border-[#00629B]/40 hover:shadow-md"
            >
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-[#EAF1F6] px-2.5 py-0.5 text-[11px] font-semibold text-[#00629B]">
                    {logo.type}
                  </span>
                </div>

                <div className="relative mb-6 flex h-[120px] w-full items-center justify-center rounded-xl bg-[#FAF9F5] p-4">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <h3 className="m-0 text-[15px] font-bold text-[#0A2540]">
                  {logo.name}
                </h3>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-[#F0ECE1] pt-4">
                <a
                  href={logo.src}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#00629B] px-3.5 py-2 text-[12.5px] font-semibold text-white transition-colors hover:bg-[#004E7C]"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Download PNG
                </a>
                <a
                  href={logo.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-[#E3DFD5] bg-white p-2 text-[#6E7178] hover:bg-[#F5F3EE] hover:text-[#00629B] transition-colors"
                  title="View Image"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
