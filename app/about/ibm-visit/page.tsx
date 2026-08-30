import Image from "next/image";

export const metadata = { title: "IEEE Foundation President Visits BRACU — IEEE BRACU SB" };

export default function IBMVisitPage() {
  return (
    <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
      <article className="space-y-8 lg:col-span-8">
        <div>
          <div className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#00629B]">
            <span className="inline-block h-0.5 w-[26px] bg-[#00629B]" />Special Visit
          </div>
          <h2 className="m-0 mb-5 font-[family-name:var(--font-serif)] text-[clamp(24px,3vw,34px)] font-semibold tracking-[-0.02em] text-[#191B1E]">
            IEEE Foundation President &amp; IBM Research Director Visits BRACU
          </h2>
          <p className="m-0 mb-5 text-[16.5px] leading-[1.75] text-[#44474C]">
            The IEEE BRAC University Student Branch had the honor of hosting a visit from the IEEE Foundation President and IBM Research Director. This landmark event underscored the growing recognition of the branch&rsquo;s work in advancing technology education and community engagement in Bangladesh.
          </p>
          <p className="m-0 mb-5 text-[16.5px] leading-[1.75] text-[#44474C]">
            During the visit, the distinguished guests toured the university facilities, met with students and faculty, and delivered talks on the future of technology and the role of professional societies in shaping careers. The event was attended by branch members, university leadership, and guests from the broader IEEE Bangladesh Section.
          </p>
          <p className="m-0 mb-5 text-[16.5px] leading-[1.75] text-[#44474C]">
            The visit highlighted the branch&rsquo;s contributions to IEEE&rsquo;s global mission and reinforced the connection between local student activities and the worldwide IEEE community. It remains one of the most significant events in the branch&rsquo;s history.
          </p>
        </div>

        {/* photo gallery */}
        <div>
          <h3 className="m-0 mb-5 font-[family-name:var(--font-serif)] text-[20px] font-semibold text-[#191B1E]">Event Gallery</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              "https://ieeebracu.com/wp-content/uploads/2025/07/The-ML-Playbook-1-1-1.jpg",
              "https://ieeebracu.com/wp-content/uploads/2020/04/web2.jpg",
              "https://ieeebracu.com/wp-content/uploads/2025/07/Industry-Visit.png",
              "https://ieeebracu.com/wp-content/uploads/2025/07/13.jpg",
            ].map((src, i) => (
              <div key={i} className="relative h-[180px] overflow-hidden rounded-xl border border-[#E3DFD5]">
                <Image src={src} alt={`Visit photo ${i + 1}`} fill sizes="50vw" className="object-cover" />
              </div>
            ))}
          </div>
          <p className="m-0 mt-3 text-[12px] text-[#B0B4B9]">
            Photos from various branch events. Actual visit photos available in the full gallery.
          </p>
        </div>
      </article>

      <aside className="lg:col-span-4">
        <div className="sticky top-[140px]">
          <div className="rounded-2xl border border-[#E3DFD5] bg-white p-6">
            <h3 className="m-0 mb-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6E7178]">Event Details</h3>
            <div className="space-y-4">
              {[
                { label: "Event", value: "IEEE Foundation President & IBM Research Director Visit" },
                { label: "Host", value: "IEEE BRACU Student Branch" },
                { label: "Venue", value: "BRAC University, Dhaka" },
                { label: "Significance", value: "First visit by IEEE Foundation leadership to BRACU" },
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