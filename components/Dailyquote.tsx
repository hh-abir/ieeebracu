"use client";

import { useState } from "react";

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

// Deterministic daily index based on current date
function getDailyQuoteIndex(): number {
  const now = new Date();
  const dayOfYear = Math.floor(
    (now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / 86400000
  );
  return dayOfYear % quotes.length;
}

export default function DailyQuote() {
  const [index, setIndex] = useState(getDailyQuoteIndex);
  const [isFading, setIsFading] = useState(false);

  const current = quotes[index];

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
      setIsFading(false);
    }, 140);
  };

  return (
    <section className="border-y border-[#E3DFD5] bg-white pt-8 pb-11 font-[family-name:var(--font-sans)] sm:pt-9 sm:pb-12">
      <div className="mx-auto max-w-[820px] px-6 text-center">
        {/* Subtle decorative quotation mark icon */}
        <div className="mb-3 text-[#00629B]/35">
          <svg className="mx-auto h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>
        </div>

        {/* Quote body */}
        <blockquote
          className={`m-0 transition-opacity duration-150 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <p className="m-0 font-[family-name:var(--font-serif)] text-[clamp(18px,2.2vw,24px)] font-medium leading-[1.4] tracking-[-0.01em] text-[#191B1E]">
            &ldquo;{current.text}&rdquo;
          </p>
        </blockquote>

        {/* Attribution & refresh control */}
        <div
          className={`mt-4 flex items-center justify-center gap-3 transition-opacity duration-150 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="text-[13.5px]">
            <span className="font-semibold text-[#191B1E]">{current.author}</span>
            <span className="mx-2 text-[#C0C4C9]">·</span>
            <span className="text-[13px] text-[#6E7178]">{current.title}</span>
          </div>

          <button
            onClick={handleNext}
            className="group flex h-6 w-6 items-center justify-center rounded-full border border-[#E3DFD5] bg-[#FBFAF7] text-[#9A9E9F] transition-all hover:border-[#00629B]/30 hover:bg-[#EAF1F6] hover:text-[#00629B] active:scale-90"
            title="Next quote"
            aria-label="Next quote"
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="transition-transform duration-300 group-hover:rotate-180"
            >
              <path
                d="M21.5 2v6h-6M21.34 15.57a10 10 0 11-.57-8.38l5.67-5.67"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}