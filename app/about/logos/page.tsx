import Image from "next/image";

export const metadata = { title: "Logos & Resources — IEEE BRACU SB" };

const logos = [
  { name: "IEEE BRACU Student Branch", src: "https://ieeebracu.com/wp-content/uploads/2022/01/Artboard-1-1.png" },
  { name: "Power & Energy Society", src: "https://ieeebracu.com/wp-content/uploads/2020/04/pes.png" },
  { name: "Computer Society", src: "https://ieeebracu.com/wp-content/uploads/2020/04/cs.png" },
  { name: "Robotics & Automation Society", src: "https://ieeebracu.com/wp-content/uploads/2020/04/ras.png" },
  { name: "Aerospace & Electronic Systems", src: "https://ieeebracu.com/wp-content/uploads/2020/04/aess.png" },
  { name: "Communications Society", src: "https://ieeebracu.com/wp-content/uploads/2020/04/comsoc.png" },
  { name: "Electron Devices Society", src: "https://ieeebracu.com/wp-content/uploads/2020/04/eds.png" },
];

export default function LogosPage() {
  return (
    <div>
      <div className="mb-10">
        <div className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#00629B]">
          <span className="inline-block h-0.5 w-[26px] bg-[#00629B]" />Resources
        </div>
        <h2 className="m-0 font-[family-name:var(--font-serif)] text-[clamp(24px,3vw,34px)] font-semibold tracking-[-0.02em] text-[#191B1E]">
          Logos &amp; Branding
        </h2>
        <p className="m-0 mt-3 max-w-[55ch] text-[15px] text-[#6E7178]">
          Official logos of the IEEE BRAC University Student Branch and all six technical chapters. Right-click to save, or contact the webmaster for vector (SVG/AI) versions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="group flex flex-col items-center overflow-hidden rounded-2xl border border-[#E3DFD5] bg-white p-8 transition-shadow hover:shadow-[0_12px_32px_rgba(0,98,155,0.06)]"
          >
            <div className="relative mb-6 h-[100px] w-full">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                sizes="300px"
                className="object-contain"
              />
            </div>
            <h3 className="m-0 text-center text-[14px] font-semibold text-[#191B1E]">{logo.name}</h3>
            <a
              href={logo.src}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-[#E3DFD5] px-4 py-2 text-[12px] font-semibold text-[#6E7178] transition-all hover:border-[#00629B]/30 hover:text-[#00629B]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}