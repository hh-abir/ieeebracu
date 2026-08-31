import React from "react";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#F5F3EE] font-[family-name:var(--font-sans)]">
      <div className="mx-auto max-w-[1240px] px-4 py-8 sm:px-8 sm:py-12">
        {children}
      </div>
    </main>
  );
}