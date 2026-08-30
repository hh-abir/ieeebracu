import ChapterContent from "@/components/Chaptercontent";
import type { ChapterData } from "@/components/Chaptercontent";
import Link from "next/link";

const chapters: ChapterData[] = [
  {
    slug: "pes", abbr: "PES", name: "Power & Energy Society",
    fullName: "IEEE Power & Energy Society BRAC University Student Branch Chapter",
    desc: [
      "The Power & Energy Society (PES) chapter focuses on the science and practice of electric power generation, transmission, distribution, and utilization. As one of the most active chapters in the branch, PES regularly organizes seminars, workshops, and industrial tours to bridge classroom theory with real-world power engineering.",
      "Members gain exposure to smart grid technologies, renewable energy integration, power electronics, and energy policy — preparing them for careers in one of the most critical sectors of modern infrastructure.",
    ],
    image: "https://ieeebracu.com/wp-content/uploads/2025/07/13.jpg",
    logo: "https://ieeebracu.com/wp-content/uploads/2020/04/pes.png",
    founded: "2018", focus: "Power Systems · Renewables · Smart Grids",
    counselor: { name: "A.K.M Abdul Malek Azad, Ph.D.", title: "Branch Counselor" },
    advisor: { name: "Shahidul Islam Khan, Ph.D.", title: "Chapter Advisor" },
    eb: [
      { name: "Bushra Anjum Priyota", role: "Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Bushra-Anjum-Priyota-BUSHRA-ANJUM-PRIYOTA-modified.png" },
      { name: "Maisha Mahjabin Nidhi", role: "Vice Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Formal-Image_-Maisha-Mahjabin-Nidhi-MAISHA-MAHJABIN-NIDHI-modified.png" },
      { name: "Shahriar Ahmed", role: "Secretary", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Shahriar-Ahmed-SHAHRIAR-AHMED-modified.png" },
      { name: "S M Sadab Sabah", role: "Treasurer", image: "https://ieeebracu.com/wp-content/uploads/2026/02/IMG_3795-S.M.-SADAB-SABAH-modified.png" },
    ],
    inaugReport: "https://ieeebracu.com/pes-inauguration-report.pdf",
    membersHref: "/chapters/pes/members",
    newsletters: [
      { year: "2026", href: "https://ieeebracu.com/pes-newsletter-2026.pdf" },
      { year: "2025", href: "https://ieeebracu.com/pes-newsletter-2025.pdf" },
      { year: "2024", href: "https://ieeebracu.com/pes-newsletter-2024.pdf" },
      { year: "2023", href: "https://ieeebracu.com/pes-newsletter-2023.pdf" },
      { year: "2022", href: "https://ieeebracu.com/pes-newsletter-2022.pdf" },
    ],
  },
  {
    slug: "cs", abbr: "CS", name: "Computer Society",
    fullName: "IEEE Computer Society BRAC University Student Branch Chapter",
    desc: [
      "The Computer Society (CS) chapter is the go-to community for students passionate about software engineering, artificial intelligence, competitive programming, and computing research.",
      "From introductory workshops on app development to advanced sessions on blockchain and machine learning, the chapter provides a structured pathway for students to grow their technical skills.",
    ],
    image: "https://ieeebracu.com/wp-content/uploads/2025/07/The-ML-Playbook-1-1-1.jpg",
    logo: "https://ieeebracu.com/wp-content/uploads/2020/04/cs.png",
    founded: "2019", focus: "Software · AI/ML · Competitive Programming",
    counselor: { name: "A.K.M Abdul Malek Azad, Ph.D.", title: "Branch Counselor" },
    advisor: { name: "Shahidul Islam Khan, Ph.D.", title: "Chapter Advisor" },
    eb: [
      { name: "Sakibul Ahsan Teham", role: "Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Sakib_Chair_CS_Photo-SAKIBUL-AHSAN-TEHAM-modified.png" },
      { name: "Khandoker Tanjim Rahman", role: "Vice Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Formal-KHANDOKER-TANJIM-RAHMAN1-modified.png" },
      { name: "Md. Ezhar Hossain", role: "Secretary", image: "https://ieeebracu.com/wp-content/uploads/2026/02/20260209153234592_save-MD.EZHAR-HOSSAIN-modified.png" },
      { name: "Sannidhya Roy Sadhya", role: "Treasurer", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Sannidhya_Treasurer_CS_Photo-SANNIDHYA-ROY-SADHYA-modified.png" },
    ],
    inaugReport: "https://ieeebracu.com/cs-inauguration-report.pdf",
    membersHref: "/chapters/cs/members",
    newsletters: [
      { year: "2026", href: "https://ieeebracu.com/cs-newsletter-2026.pdf" },
      { year: "2025", href: "https://ieeebracu.com/cs-newsletter-2025.pdf" },
      { year: "2024", href: "https://ieeebracu.com/cs-newsletter-2024.pdf" },
      { year: "2023", href: "https://ieeebracu.com/cs-newsletter-2023.pdf" },
    ],
  },
  {
    slug: "ras", abbr: "RAS", name: "Robotics & Automation Society",
    fullName: "IEEE Robotics & Automation Society BRAC University Student Branch Chapter",
    desc: [
      "The Robotics & Automation Society (RAS) chapter brings together students interested in autonomous systems, control engineering, mechatronics, and hands-on robotics.",
      "The chapter organizes workshops on embedded systems, sensor integration, and ROS, along with participation in national and international robotics competitions.",
    ],
    image: "https://ieeebracu.com/wp-content/uploads/2025/07/Industry-Visit.png",
    logo: "https://ieeebracu.com/wp-content/uploads/2020/04/ras.png",
    founded: "2020", focus: "Robotics · Control Systems · Mechatronics",
    counselor: { name: "A.K.M Abdul Malek Azad, Ph.D.", title: "Branch Counselor" },
    advisor: { name: "Shahidul Islam Khan, Ph.D.", title: "Chapter Advisor" },
    eb: [
      { name: "Risana Rehma Chowdhury", role: "Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/02/IMG_20251123_175622-RISANA-REHMA-CHOWDHURY-modified.png" },
      { name: "Saad Noman Adeeb", role: "Vice Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Vice-Chair-2026_RAS-SAAD-NOMAN-ADEEB-modified.png" },
      { name: "Anika Tabassum", role: "Secretary", image: "https://ieeebracu.com/wp-content/uploads/2026/02/1000025000-ANIKA-TABASSUM-modified.png" },
      { name: "Mohammed Naqibur Rahman", role: "Treasurer", image: "https://ieeebracu.com/wp-content/uploads/2026/02/MohammedNaqiburRahman_23201165-MOHAMMED-NAQIBUR-RAHMAN-modified.png" },
    ],
    inaugReport: "https://ieeebracu.com/ras-inauguration-report.pdf",
    membersHref: "/chapters/ras/members",
    newsletters: [
      { year: "2025", href: "https://ieeebracu.com/ras-newsletter-2025.pdf" },
      { year: "2024", href: "https://ieeebracu.com/ras-newsletter-2024.pdf" },
      { year: "2023", href: "https://ieeebracu.com/ras-newsletter-2023.pdf" },
    ],
  },
  {
    slug: "aess", abbr: "AESS", name: "Aerospace & Electronic Systems",
    fullName: "IEEE Aerospace & Electronic Systems Society BRAC University Student Branch Chapter",
    desc: [
      "The Aerospace & Electronic Systems Society (AESS) chapter focuses on the technologies behind flight, space, and defense electronics.",
      "The chapter organizes industry visits, observational cosmology workshops, and technical talks that expose members to career paths in aerospace, defense, and space technology.",
    ],
    image: "https://ieeebracu.com/wp-content/uploads/2020/04/web2.jpg",
    logo: "https://ieeebracu.com/wp-content/uploads/2020/04/aess.png",
    founded: "2019", focus: "Satellites · Avionics · Radar Systems",
    counselor: { name: "A.K.M Abdul Malek Azad, Ph.D.", title: "Branch Counselor" },
    advisor: { name: "Shahidul Islam Khan, Ph.D.", title: "Chapter Advisor" },
    eb: [
      { name: "Nusrat Jahan", role: "Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/02/20251214_124459-NUSRAT-JAHAN-modified-2.png" },
      { name: "Mashiat Lamisa Riddhi", role: "Vice Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Riddhi-_-Vice-Chair-_-AESS-MASHIAT-LAMISA-RIDDHI-modified.png" },
      { name: "Iftekhar Uddin Tuhin", role: "Secretary", image: "https://ieeebracu.com/wp-content/uploads/2026/02/this-one-2-resized-IFTEKHAR-UDDIN-TUHIN-modified.png" },
      { name: "Shahriar Alam Mugdho", role: "Treasurer", image: "https://ieeebracu.com/wp-content/uploads/2026/06/Mugdho-modified.png" },
    ],
    inaugReport: "https://ieeebracu.com/aess-inauguration-report.pdf",
    membersHref: "/chapters/aess/members",
    newsletters: [
      { year: "2025", href: "https://ieeebracu.com/aess-newsletter-2025.pdf" },
      { year: "2024", href: "https://ieeebracu.com/aess-newsletter-2024.pdf" },
      { year: "2023", href: "https://ieeebracu.com/aess-newsletter-2023.pdf" },
    ],
  },
  {
    slug: "comsoc", abbr: "ComSoc", name: "Communications Society",
    fullName: "IEEE Communications Society BRAC University Student Branch Chapter",
    desc: [
      "The Communications Society (ComSoc) chapter covers the technologies that connect the world — from 5G networks and optical fiber to signal processing and information theory.",
      "Recent events have explored neural networks in communication, network security, and the future of mobile connectivity.",
    ],
    image: "https://ieeebracu.com/wp-content/uploads/2025/08/MindTheNetwork-1-of-1-941.png",
    logo: "https://ieeebracu.com/wp-content/uploads/2020/04/comsoc.png",
    founded: "2020", focus: "Networks · Signal Processing · 5G",
    counselor: { name: "A.K.M Abdul Malek Azad, Ph.D.", title: "Branch Counselor" },
    advisor: { name: "Shahidul Islam Khan, Ph.D.", title: "Chapter Advisor" },
    eb: [
      { name: "Mehzabin Mahmud", role: "Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Mehzabin-Mahmud-MEHZABIN-MAHMUD-modified.png" },
      { name: "Ramisha Islam Rodela", role: "Vice Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Ramisha-Islam-Rodela_p-RAMISHA-ISLAM-RODELA-modified.png" },
      { name: "Nusrat Sultana", role: "Secretary", image: "https://ieeebracu.com/wp-content/uploads/2026/02/Nusrat-Sultana_Secretary_ComSoc-NUSRAT-SULTANA-modified.png" },
      { name: "Md. Riadul Hossain Khan", role: "Treasurer", image: "https://ieeebracu.com/wp-content/uploads/2026/02/ChatGPT-Image-Jan-9-2026-01_01_53-AM-Riadul-Hossain-Khan-modified.png" },
    ],
    inaugReport: "https://ieeebracu.com/comsoc-inauguration-report.pdf",
    membersHref: "/chapters/comsoc/members",
    newsletters: [
      { year: "2025", href: "https://ieeebracu.com/comsoc-newsletter-2025.pdf" },
      { year: "2024", href: "https://ieeebracu.com/comsoc-newsletter-2024.pdf" },
    ],
  },
  {
    slug: "eds", abbr: "EDS", name: "Electron Devices Society",
    fullName: "IEEE Electron Devices Society BRAC University Student Branch Chapter",
    desc: [
      "The Electron Devices Society (EDS) chapter dives into the physics and engineering of semiconductor devices, nanoelectronics, photovoltaics, and MEMS.",
      "The chapter runs workshops on circuit simulation, power electronics applications, and biomedical devices.",
    ],
    image: "https://ieeebracu.com/wp-content/uploads/2019/10/Industrial-Biomedical-Applications-of-Power-Electronics-1.jpg",
    logo: "https://ieeebracu.com/wp-content/uploads/2020/04/eds.png",
    founded: "2021", focus: "Semiconductors · Nanoelectronics · MEMS",
    counselor: { name: "A.K.M Abdul Malek Azad, Ph.D.", title: "Branch Counselor" },
    advisor: { name: "Shahidul Islam Khan, Ph.D.", title: "Chapter Advisor" },
    eb: [
      { name: "Kazi Abdur Rahim", role: "Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/06/Kazi-Abdur-Rahim-modified.png" },
      { name: "Fariba Mir", role: "Vice Chair", image: "https://ieeebracu.com/wp-content/uploads/2026/06/Fariba-mir-modified.png" },
      { name: "Oishi Moni", role: "Secretary", image: "https://ieeebracu.com/wp-content/uploads/2026/06/oishimoni.JPG-modified.png" },
      { name: "Shahriar Hossain", role: "Treasurer", image: "https://ieeebracu.com/wp-content/uploads/2026/06/Shahriar-modified.png" },
    ],
    inaugReport: "https://ieeebracu.com/eds-inauguration-report.pdf",
    membersHref: "/chapters/eds/members",
    newsletters: [
      { year: "2025", href: "https://ieeebracu.com/eds-newsletter-2025.pdf" },
      { year: "2024", href: "https://ieeebracu.com/eds-newsletter-2024.pdf" },
    ],
  },
];

function getChapter(slug: string) {
  return chapters.find((c) => c.slug === slug);
}

export function generateStaticParams() {
  return chapters.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ch = getChapter(slug);
  return {
    title: ch ? `${ch.name} — IEEE BRACU SB` : "Chapter — IEEE BRACU SB",
    description: ch?.desc[0],
  };
}

export default async function ChapterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ch = getChapter(slug);

  if (!ch) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center bg-[#F5F3EE] font-[family-name:var(--font-sans)]">
        <h1 className="mb-4 font-[family-name:var(--font-serif)] text-[32px] font-semibold text-[#191B1E]">Chapter not found</h1>
        <Link href="/" className="text-[14px] font-semibold text-[#00629B] hover:underline">← Back to home</Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F3EE] font-[family-name:var(--font-sans)]">
      <ChapterContent ch={ch} />
    </main>
  );
}