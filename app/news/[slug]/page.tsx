import Link from "next/link";
import Image from "next/image";

// ─── Types ───
type Post = {
  slug: string;
  image: string;
  tag: string;
  chapter: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
};

type RelatedPost = {
  slug: string;
  image: string;
  tag: string;
  date: string;
  title: string;
};

// ─── Static data (replace with CMS fetch) ───
const posts: Post[] = [
  {
    slug: "survive-or-thrive-how-bangladeshs-engineers-can-win-in-the-age-of-ai",
    image: "https://ieeebracu.com/wp-content/uploads/2026/06/678455570_1609210241206792_3124385584510281921_n.jpg",
    tag: "Webinar", chapter: "Student Branch", date: "June 15, 2026",
    title: "Survive or Thrive: How Bangladesh's Engineers Can Win in the Age of AI",
    excerpt: "IEEE BRACU SB, in collaboration with IEEE IUBAT SB, organized a webinar exploring how engineers in Bangladesh can adapt and lead in the AI era.",
    body: [
      "IEEE BRAC University Student Branch, in collaboration with IEEE IUBAT Student Branch, organized a landmark webinar titled \"Survive or Thrive: How Bangladesh's Engineers Can Win in the Age of AI.\" The event brought together students, academics, and industry professionals to discuss the rapidly evolving landscape of artificial intelligence and its implications for engineering careers in Bangladesh.",
      "The session opened with a keynote that outlined the current state of AI adoption across industries in South Asia, highlighting both the opportunities and the displacement risks facing new graduates. Panelists emphasized that the engineers who thrive will be those who combine deep domain expertise with practical AI literacy — not necessarily becoming AI researchers, but learning to leverage AI tools within their existing disciplines.",
      "A significant portion of the discussion focused on upskilling pathways available to Bangladeshi students: open-source contributions, competitive programming, IEEE learning resources, and hands-on project work. The speakers stressed that theoretical knowledge alone is no longer sufficient — employers increasingly look for demonstrable project portfolios and cross-disciplinary teamwork.",
      "The webinar concluded with an interactive Q&A session where students raised questions about career pivots, graduate study abroad, and the role of professional societies like IEEE in building networks that outlast any single technology wave. Over 200 participants attended the live session, with recordings made available through the branch's official channels.",
    ],
  },
  {
    slug: "bridging-theory-and-practice-workshop-on-power-system-design-using-autocad",
    image: "https://ieeebracu.com/wp-content/uploads/2026/06/679799965_1377116257781428_6406804003297454992_n.jpg",
    tag: "Workshop", chapter: "PES", date: "June 10, 2026",
    title: "Bridging Theory and Practice: Workshop on Power System Design using AutoCAD",
    excerpt: "IEEE PES BRACU SBC organized a hands-on technical workshop on power system design, bringing CAD tools into the learning workflow.",
    body: [
      "The IEEE Power & Energy Society BRAC University Student Branch Chapter organized a hands-on workshop titled \"Bridging Theory and Practice: Power System Design using AutoCAD.\" The event was designed to close the gap between classroom power systems theory and the industry-standard CAD tools used by practicing engineers.",
      "Participants were guided through the fundamentals of electrical system layout, single-line diagram creation, and load flow visualization — all within the AutoCAD environment. The workshop emphasized practical shortcuts and workflow efficiencies that textbooks rarely cover, giving attendees skills they can immediately apply in coursework and internship projects.",
      "Instructors from the PES chapter demonstrated real-world design scenarios, including substation layout planning and distribution network routing. Each participant worked on their own design exercise, receiving one-on-one feedback from senior chapter members with industry experience.",
      "The session wrapped up with a certificate distribution ceremony and networking period. Several attendees noted that the workshop filled a critical gap in their curriculum, where power system software tools receive limited hands-on coverage.",
    ],
  },
  {
    slug: "shaping-tomorrows-grid-smart-grid-innovation-and-energy-transition",
    image: "https://ieeebracu.com/wp-content/uploads/2026/06/679092353_1376909337802120_195578129513660732_n.jpg",
    tag: "Seminar", chapter: "PES", date: "June 5, 2026",
    title: "Shaping Tomorrow's Grid: Smart Grid Innovation and Energy Transition",
    excerpt: "A seminar on the future of power grids, covering smart infrastructure, renewable integration, and the energy transition ahead.",
    body: [
      "IEEE PES BRACU SBC hosted a seminar titled \"Shaping Tomorrow's Grid: Smart Grid Innovation and Energy Transition,\" addressing the technical and policy dimensions of modernizing electrical grids for a sustainable future.",
      "The seminar featured expert speakers who outlined the key technologies enabling smart grid transformation: advanced metering infrastructure (AMI), demand response systems, distributed energy resource management, and grid-scale energy storage. Each technology was discussed both in global context and with specific reference to Bangladesh's grid modernization roadmap.",
      "A highlight of the event was a panel discussion on the energy transition, where speakers debated the pace of renewable integration in South Asia, the role of natural gas as a bridge fuel, and the regulatory frameworks needed to incentivize private investment in clean energy infrastructure.",
      "Students left with a clearer picture of how power engineering careers are evolving — from traditional generation and transmission roles toward data-driven grid optimization, cybersecurity, and renewable project development. The event underscored PES's mission to connect students with the frontiers of their field.",
    ],
  },
  {
    slug: "mind-the-network-how-neurons-connect-the-world",
    image: "https://ieeebracu.com/wp-content/uploads/2025/08/MindTheNetwork-1-of-1-941.png",
    tag: "Seminar", chapter: "ComSoc", date: "April 15, 2025",
    title: "Mind The Network: How Neurons Connect the World",
    excerpt: "IEEE ComSoc BRACU SBC hosted a seminar exploring parallels between neural structures in the brain and artificial neural networks.",
    body: [
      "On April 15, 2025, the IEEE Communications Society BRAC University Student Branch Chapter hosted a seminar titled \"Mind the Network: How Neurons Connect the World.\" The event drew a packed audience of students eager to explore the intersection of neuroscience and communications engineering.",
      "The seminar delved into the parallels between biological neural networks and the artificial neural networks that underpin modern communication systems. Speakers traced the evolution from simple perceptrons to today's transformer architectures, showing how each advance was inspired by a deeper understanding of how biological neurons process and transmit information.",
      "Attendees were introduced to IEEE Week 2025, with highlights on events organized by IEEE BRACU SBC and affiliated chapters. The inauguration ceremony of IEEE Week and the first-ever official merchandise launch of the IEEE BRAC University Student Branch also took place during the morning session.",
      "The seminar concluded with an engaging Q&A session and refreshments. Certificates of appreciation were presented to volunteers for their invaluable support throughout the event.",
    ],
  },
  {
    slug: "an-industry-visit-by-aess-bracu-sbc-2025",
    image: "https://ieeebracu.com/wp-content/uploads/2025/07/Industry-Visit.png",
    tag: "Industry Tour", chapter: "AESS", date: "March 20, 2025",
    title: "An Industry Visit by AESS BRACU SBC",
    excerpt: "Members stepped onto the factory floor to see aerospace and electronic systems engineering at work.",
    body: [
      "The IEEE Aerospace and Electronic Systems Society BRAC University Student Branch Chapter organized an industrial visit, giving members a firsthand look at how aerospace and electronic systems are designed, manufactured, and tested in a professional setting.",
      "Participants toured the facility's production lines, observing the assembly of electronic control units and avionic subsystems. Engineers on-site explained the quality assurance protocols, testing methodologies, and regulatory compliance standards that govern aerospace manufacturing — topics that rarely receive detailed coverage in the classroom.",
      "The visit also included a presentation by the facility's R&D team, who discussed emerging trends in satellite communication hardware, radar system miniaturization, and the growing role of software-defined systems in next-generation aerospace platforms.",
      "Students described the visit as one of the most impactful experiences of their undergraduate career, noting that seeing the scale and precision of real-world engineering operations gave new meaning to their coursework.",
    ],
  },
  {
    slug: "an-industrial-tour-to-the-orion-power-plant",
    image: "https://ieeebracu.com/wp-content/uploads/2025/07/13.jpg",
    tag: "Industry Tour", chapter: "PES", date: "February 28, 2025",
    title: "Industrial Tour to the Orion Power Plant",
    excerpt: "IEEE PES BRACU SBC members visited the Orion power plant for a close look at large-scale power generation.",
    body: [
      "IEEE PES BRACU SBC organized an industrial tour to the Orion Power Plant, one of Bangladesh's significant power generation facilities. The visit provided members with an immersive experience in large-scale electrical power generation and distribution.",
      "Students observed the full generation cycle — from fuel intake and combustion to turbine operation and grid synchronization. Plant engineers walked the group through the control room, explaining real-time monitoring systems, load dispatching procedures, and the safety protocols that keep a 24/7 operation running without interruption.",
      "The tour highlighted the engineering challenges of operating in Bangladesh's power sector: managing peak demand, integrating renewable sources alongside fossil fuel generation, and maintaining aging infrastructure while planning capacity expansion.",
      "Many participants noted that the tour brought textbook concepts to life — seeing a turbine hall in person, hearing the hum of a running generator, and understanding the human decisions behind automated systems gave them a new appreciation for the power engineering profession.",
    ],
  },
];

// ─── Helpers ───
function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

function getRelated(current: Post): RelatedPost[] {
  return posts
    .filter((p) => p.slug !== current.slug)
    .filter((p) => p.chapter === current.chapter || p.tag === current.tag)
    .slice(0, 3)
    .map(({ slug, image, tag, date, title }) => ({ slug, image, tag, date, title }));
}

// ─── Static params (SSG) ───
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

// ─── Metadata ───
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return {
    title: post ? `${post.title} — IEEE BRACU SB` : "News — IEEE BRACU SB",
    description: post?.excerpt,
  };
}

// ─── Page ───
export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center bg-[#F5F3EE] font-[family-name:var(--font-sans)]">
        <h1 className="mb-4 font-[family-name:var(--font-serif)] text-[32px] font-semibold text-[#191B1E]">
          Post not found
        </h1>
        <Link href="/news" className="text-[14px] font-semibold text-[#00629B] hover:underline">
          ← Back to all news
        </Link>
      </main>
    );
  }

  const related = getRelated(post);

  return (
    <main className="min-h-screen bg-[#F5F3EE] font-[family-name:var(--font-sans)]">
      {/* hero image */}
      <div className="relative h-[50vh] min-h-[380px] w-full overflow-hidden bg-[#0A2540]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(10,37,64,.85) 0%, rgba(10,37,64,.4) 40%, rgba(10,37,64,.15) 100%)",
          }}
        />

        {/* back link */}
        <div className="absolute left-0 right-0 top-0 z-10">
          <div className="mx-auto max-w-[1320px] px-8 pt-6">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[13px] font-medium text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All news
            </Link>
          </div>
        </div>

        {/* title overlay */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="mx-auto max-w-[1320px] px-8 pb-10">
            <div className="max-w-[780px]">
              <div className="mb-4 flex flex-wrap items-center gap-2.5">
                <span className="rounded-md bg-[#00629B] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
                  {post.tag}
                </span>
                <span className="rounded-md bg-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/80 backdrop-blur">
                  {post.chapter}
                </span>
                <span className="text-[13px] text-white/50">{post.date}</span>
              </div>
              <h1 className="m-0 font-[family-name:var(--font-serif)] text-[clamp(26px,4vw,44px)] font-semibold leading-[1.12] tracking-[-0.02em] text-white">
                {post.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* article body + sidebar */}
      <div className="mx-auto max-w-[1320px] px-8 py-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* article */}
          <article className="lg:col-span-8">
            {/* lead */}
            <p className="m-0 mb-8 font-[family-name:var(--font-serif)] text-[19px] font-medium leading-[1.7] text-[#191B1E]">
              {post.excerpt}
            </p>

            <div className="mb-10 h-px w-16 bg-[#E3DFD5]" />

            {/* body paragraphs */}
            {post.body.map((para, i) => (
              <p
                key={i}
                className="m-0 mb-6 text-[16.5px] leading-[1.8] text-[#44474C]"
              >
                {para}
              </p>
            ))}

            {/* share / tags strip */}
            <div className="mt-12 flex flex-col gap-5 border-t border-[#E3DFD5] pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#6E7178]">
                  Tags
                </span>
                <span className="rounded-full bg-[#EAF1F6] px-3 py-1 text-[12px] font-medium text-[#00629B]">
                  {post.tag}
                </span>
                <span className="rounded-full bg-[#F5F3EE] px-3 py-1 text-[12px] font-medium text-[#6E7178]">
                  {post.chapter}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#6E7178]">
                  Share
                </span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://ieeebracu.com/news/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E3DFD5] text-[#6E7178] transition-colors hover:border-[#00629B] hover:text-[#00629B]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=https://ieeebracu.com/news/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E3DFD5] text-[#6E7178] transition-colors hover:border-[#00629B] hover:text-[#00629B]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </article>

          {/* sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-[100px] space-y-8">
              {/* event meta card */}
              <div className="rounded-2xl border border-[#E3DFD5] bg-white p-6">
                <h4 className="m-0 mb-5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6E7178]">
                  Event Details
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 shrink-0 text-[#00629B]">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#B0B4B9]">Date</div>
                      <div className="text-[14px] font-medium text-[#191B1E]">{post.date}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 shrink-0 text-[#00629B]">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#B0B4B9]">Organized by</div>
                      <div className="text-[14px] font-medium text-[#191B1E]">IEEE {post.chapter} BRACU</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 shrink-0 text-[#00629B]">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#B0B4B9]">Category</div>
                      <div className="text-[14px] font-medium text-[#191B1E]">{post.tag}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA card */}
              <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#00629B] to-[#0A2540] p-6">
                <h4 className="m-0 mb-2 font-[family-name:var(--font-serif)] text-[18px] font-semibold text-white">
                  Join the community
                </h4>
                <p className="m-0 mb-5 text-[13.5px] leading-[1.6] text-white/60">
                  Become a member and get access to workshops, tours, and the global IEEE network.
                </p>
                <Link
                  href="/join"
                  className="inline-block rounded-lg bg-white px-5 py-2.5 text-[13.5px] font-semibold text-[#00629B] transition-colors hover:bg-white/90"
                >
                  Join IEEE
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* related posts */}
      {related.length > 0 && (
        <div className="border-t border-[#E3DFD5] bg-[#F5F3EE]">
          <div className="mx-auto max-w-[1320px] px-8 py-16">
            <h2 className="m-0 mb-10 font-[family-name:var(--font-serif)] text-[24px] font-semibold tracking-[-0.01em] text-[#191B1E]">
              Related articles
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/news/${r.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#E3DFD5] bg-white transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(0,98,155,0.07)]"
                >
                  <div className="relative h-[180px] overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#00629B] backdrop-blur">
                      {r.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="mb-2 text-[11px] font-medium uppercase tracking-[0.06em] text-[#B0B4B9]">
                      {r.date}
                    </span>
                    <h3 className="m-0 font-[family-name:var(--font-serif)] text-[16px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#191B1E]">
                      {r.title}
                    </h3>
                    <span className="mt-auto inline-flex items-center gap-1 pt-4 text-[12.5px] font-semibold text-[#0A2540] transition-colors group-hover:text-[#00629B]">
                      Read more
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}