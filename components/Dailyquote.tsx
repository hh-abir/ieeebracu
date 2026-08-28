import Link from "next/link";

type Quote = {
  text: string;
  author: string;
  title: string;
};

const quotes: Quote[] = [
  {
    text: "If your hate could be turned into electricity, it would light up the whole world.",
    author: "Nikola Tesla",
    title: "Inventor & Electrical Engineer",
  },
  {
    text: "The scientist discovers a new type of material or energy and the engineer discovers a new use for it.",
    author: "Gordon Lindsay Glegg",
    title: "Engineer & Author",
  },
  {
    text: "Science can amuse and fascinate us all, but it is engineering that changes the world.",
    author: "Isaac Asimov",
    title: "Author & Biochemist",
  },
  {
    text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
    author: "Albert Einstein",
    title: "Theoretical Physicist",
  },
  {
    text: "Engineering is the closest thing to magic that exists in the world.",
    author: "Elon Musk",
    title: "Engineer & Entrepreneur",
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    title: "Computer Scientist",
  },
  {
    text: "Technology is nothing. What's important is that you have faith in people, that they're basically good and smart.",
    author: "Steve Jobs",
    title: "Co-founder, Apple Inc.",
  },
  {
    text: "The advance of technology is based on making it fit in so that you don't really even notice it.",
    author: "Bill Gates",
    title: "Co-founder, Microsoft",
  },
  {
    text: "Any sufficiently advanced technology is indistinguishable from magic.",
    author: "Arthur C. Clarke",
    title: "Author & Futurist",
  },
  {
    text: "Engineers like to solve problems. If there are no problems handily available, they will create their own.",
    author: "Scott Adams",
    title: "Creator of Dilbert",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
    title: "Software Engineer",
  },
  {
    text: "What we usually consider as impossible are simply engineering problems — there's no law of physics preventing them.",
    author: "Michio Kaku",
    title: "Theoretical Physicist",
  },
  {
    text: "Strive for perfection in everything you do. Take the best that exists and make it better.",
    author: "Henry Royce",
    title: "Engineer & Co-founder, Rolls-Royce",
  },
  {
    text: "The human foot is a masterpiece of engineering and a work of art.",
    author: "Leonardo da Vinci",
    title: "Polymath & Engineer",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    title: "Co-founder, Apple Inc.",
  },
  {
    text: "We cannot solve our problems with the same thinking we used when we created them.",
    author: "Albert Einstein",
    title: "Theoretical Physicist",
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
    title: "Inventor & Businessman",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    title: "Co-founder, Apple Inc.",
  },
  {
    text: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupéry",
    title: "Writer & Aviator",
  },
  {
    text: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
    author: "Albert Einstein",
    title: "Theoretical Physicist",
  },
  {
    text: "The true sign of intelligence is not knowledge but imagination.",
    author: "Albert Einstein",
    title: "Theoretical Physicist",
  },
  {
    text: "One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man.",
    author: "Elbert Hubbard",
    title: "Writer & Philosopher",
  },
  {
    text: "The world is one big data problem.",
    author: "Andrew McAfee",
    title: "MIT Research Scientist",
  },
  {
    text: "To invent, you need a good imagination and a pile of junk.",
    author: "Thomas Edison",
    title: "Inventor & Businessman",
  },
  {
    text: "Computers are incredibly fast, accurate, and stupid. Humans are incredibly slow, inaccurate, and brilliant.",
    author: "Albert Einstein",
    title: "Theoretical Physicist",
  },
  {
    text: "The goal of engineering is not merely to know things, but to make things happen.",
    author: "Henry Petroski",
    title: "Civil Engineer & Author",
  },
  {
    text: "The electric light did not come from the continuous improvement of candles.",
    author: "Oren Harari",
    title: "Author & Professor",
  },
  {
    text: "A good scientist is a person with original ideas. A good engineer is a person who makes a design that works.",
    author: "Freeman Dyson",
    title: "Theoretical Physicist",
  },
  {
    text: "Logic will get you from A to B. Imagination will take you everywhere.",
    author: "Albert Einstein",
    title: "Theoretical Physicist",
  },
  {
    text: "The real problem is not whether machines think but whether men do.",
    author: "B.F. Skinner",
    title: "Psychologist & Inventor",
  },
];

// Deterministic daily pick based on the date (changes at midnight)
function getDailyQuote(): Quote {
  const now = new Date();
  const dayOfYear = Math.floor(
    (now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000
  );
  return quotes[dayOfYear % quotes.length];
}

export default function DailyQuote() {
  const q = getDailyQuote();

  return (
    <section className="relative overflow-hidden bg-[#0A2540] py-28 font-[family-name:var(--font-sans)]">
      {/* decorative elements */}
      <div className="absolute left-0 top-0 h-full w-full opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #3E9BD6 0%, transparent 50%), radial-gradient(circle at 80% 50%, #00629B 0%, transparent 50%)",
        }}
      />
      <div className="absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-white/[0.06]" />
      <div className="absolute -left-10 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full border border-white/[0.04]" />
      <div className="absolute -right-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-white/[0.06]" />
      <div className="absolute -right-10 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full border border-white/[0.04]" />

      <div className="relative mx-auto max-w-[900px] px-8 text-center">
        {/* opening quote mark */}
        <div className="mb-8 font-[family-name:var(--font-serif)] text-[80px] font-bold leading-none text-[#00629B]/40">
          &ldquo;
        </div>

        <blockquote className="m-0">
          <p className="m-0 font-[family-name:var(--font-serif)] text-[clamp(22px,3vw,34px)] font-medium leading-[1.4] tracking-[-0.01em] text-white/90">
            {q.text}
          </p>
        </blockquote>

        {/* divider */}
        <div className="mx-auto my-8 h-px w-16 bg-[#00629B]/60" />

        {/* attribution */}
        <div>
          <div className="text-[16px] font-semibold tracking-[-0.01em] text-white">
            {q.author}
          </div>
          <div className="mt-1 text-[13px] font-medium uppercase tracking-[0.1em] text-white/40">
            {q.title}
          </div>
        </div>

        {/* daily badge */}
        <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#3E9BD6]">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/50">
            Quote of the day
          </span>
        </div>
      </div>
    </section>
  );
}