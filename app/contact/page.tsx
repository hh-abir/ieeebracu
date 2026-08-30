"use client";

import Link from "next/link";
import { useState } from "react";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/ieeebracusb",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCQmAlgoB1G5wGPFb5-xOyeQ",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M23 9.71a8.5 8.5 0 00-.91-4.13 2.92 2.92 0 00-1.72-1A78.36 78.36 0 0012 4.27a78.45 78.45 0 00-8.34.3 2.87 2.87 0 00-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 000 6.48 9.55 9.55 0 00.3 2 3.14 3.14 0 00.71 1.36 2.86 2.86 0 001.49.78 45.18 45.18 0 006.5.33c3.5.05 6.57 0 10.2-.46a2.9 2.9 0 001.53-.78 2.49 2.49 0 00.61-1 10.58 10.58 0 00.52-3.4c.04-.56.04-3.94.04-4.54zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ieee-bracu-student-branch",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const contactInfo = [
  {
    label: "Visit Us",
    value: "IEEE Office, 4th Floor\nBRAC University, Kha 224\nBir Uttam Rafiqul Islam Ave\nDhaka 1212, Bangladesh",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Email Us",
    value: "chair@ieeebracu.com\nieeebracuds@gmail.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Office Hours",
    value: "Sunday – Thursday\n10:00 AM – 5:00 PM",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", chapter: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // Replace with your API route (e.g. /api/contact)
    try {
      await new Promise((r) => setTimeout(r, 1200));
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", chapter: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#F5F3EE] font-[family-name:var(--font-sans)]">
      {/* header */}
      <div className="relative overflow-hidden bg-[#0A2540]">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, #3E9BD6 0%, transparent 50%), radial-gradient(circle at 70% 60%, #00629B 0%, transparent 50%)" }} />
        <div className="absolute -left-16 bottom-0 h-32 w-32 rounded-full border border-white/[0.05]" />
        <div className="absolute -right-16 top-0 h-32 w-32 rounded-full border border-white/[0.05]" />

        <div className="relative mx-auto max-w-[1320px] px-8 pb-16 pt-20">
          <Link href="/" className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[13px] font-medium text-white backdrop-blur transition-colors hover:bg-white/20">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Home
          </Link>
          <div className="mt-4 mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#7FB4DA]">
            <span className="inline-block h-0.5 w-[26px] bg-[#7FB4DA]" />
            Get in touch
          </div>
          <h1 className="m-0 font-[family-name:var(--font-serif)] text-[clamp(32px,4.5vw,52px)] font-semibold leading-[1.1] tracking-[-0.02em] text-white">
            Contact Us
          </h1>
          <p className="m-0 mt-4 max-w-[50ch] text-[16px] leading-[1.6] text-white/55">
            Have a question, partnership proposal, or just want to say hello? We&rsquo;d love to hear from you.
          </p>
        </div>
      </div>

      {/* body */}
      <div className="mx-auto max-w-[1320px] px-8 py-16">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">

          {/* LEFT: contact info */}
          <div className="space-y-10 lg:col-span-5">
            {/* info cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-5 rounded-2xl border border-[#E3DFD5] bg-white p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#EAF1F6] to-[#D6E6F2] text-[#00629B]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="m-0 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#6E7178]">{item.label}</h3>
                    <p className="m-0 mt-2 whitespace-pre-line text-[15px] leading-[1.7] text-[#191B1E]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* social */}
            <div>
              <h3 className="m-0 mb-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6E7178]">Follow Us</h3>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E3DFD5] bg-white text-[#6E7178] transition-all hover:border-[#00629B]/30 hover:bg-[#00629B] hover:text-white hover:shadow-md"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* map embed */}
            <div className="overflow-hidden rounded-2xl border border-[#E3DFD5]">
              <iframe
                title="BRAC University Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.6034954830074!2d90.40122811543133!3d23.750078484588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bdb9e07b29%3A0x47a3f20e1d99de0c!2sBRAC%20University!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#E3DFD5] bg-white p-8 shadow-[0_16px_40px_rgba(20,22,24,0.05)] sm:p-10">
              <h2 className="m-0 mb-2 font-[family-name:var(--font-serif)] text-[24px] font-semibold tracking-[-0.01em] text-[#191B1E]">
                Send us a message
              </h2>
              <p className="m-0 mb-8 text-[14px] text-[#6E7178]">
                Fill in the form below and we&rsquo;ll get back to you as soon as possible.
              </p>

              <div onSubmit={handleSubmit} className="space-y-5">
                {/* name + email row */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.08em] text-[#6E7178]">
                      Full Name <span className="text-[#D9534F]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-[#E3DFD5] bg-[#FBFAF7] px-4 py-3 text-[14px] text-[#191B1E] placeholder:text-[#B0B4B9] transition-colors focus:border-[#00629B]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00629B]/10"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.08em] text-[#6E7178]">
                      Email <span className="text-[#D9534F]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#E3DFD5] bg-[#FBFAF7] px-4 py-3 text-[14px] text-[#191B1E] placeholder:text-[#B0B4B9] transition-colors focus:border-[#00629B]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00629B]/10"
                    />
                  </div>
                </div>

                {/* subject + chapter row */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.08em] text-[#6E7178]">
                      Subject <span className="text-[#D9534F]">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className="w-full rounded-xl border border-[#E3DFD5] bg-[#FBFAF7] px-4 py-3 text-[14px] text-[#191B1E] placeholder:text-[#B0B4B9] transition-colors focus:border-[#00629B]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00629B]/10"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.08em] text-[#6E7178]">
                      Related Chapter
                    </label>
                    <select
                      name="chapter"
                      value={form.chapter}
                      onChange={handleChange}
                      className="w-full appearance-none rounded-xl border border-[#E3DFD5] bg-[#FBFAF7] px-4 py-3 text-[14px] text-[#191B1E] transition-colors focus:border-[#00629B]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00629B]/10"
                    >
                      <option value="">General / Student Branch</option>
                      <option value="pes">Power & Energy Society</option>
                      <option value="cs">Computer Society</option>
                      <option value="ras">Robotics & Automation Society</option>
                      <option value="aess">Aerospace & Electronic Systems</option>
                      <option value="comsoc">Communications Society</option>
                      <option value="eds">Electron Devices Society</option>
                    </select>
                  </div>
                </div>

                {/* message */}
                <div>
                  <label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.08em] text-[#6E7178]">
                    Message <span className="text-[#D9534F]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full resize-none rounded-xl border border-[#E3DFD5] bg-[#FBFAF7] px-4 py-3 text-[14px] leading-[1.7] text-[#191B1E] placeholder:text-[#B0B4B9] transition-colors focus:border-[#00629B]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#00629B]/10"
                  />
                </div>

                {/* submit */}
                <div className="flex items-center justify-between pt-2">
                  <p className="m-0 text-[12px] text-[#B0B4B9]">
                    <span className="text-[#D9534F]">*</span> Required fields
                  </p>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={status === "sending"}
                    className="group inline-flex items-center gap-2.5 rounded-xl bg-[#00629B] px-7 py-3.5 text-[14px] font-semibold text-white transition-all hover:bg-[#004E7C] hover:shadow-lg disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                          <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
                          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>

                {/* status messages */}
                {status === "sent" && (
                  <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 4L12 14.01l-3-3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <div className="text-[14px] font-semibold text-emerald-800">Message sent!</div>
                      <div className="text-[13px] text-emerald-600">We&rsquo;ll get back to you as soon as possible.</div>
                    </div>
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-5 py-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M15 9l-6 6M9 9l6 6" strokeLinecap="round" />
                    </svg>
                    <div>
                      <div className="text-[14px] font-semibold text-red-800">Something went wrong</div>
                      <div className="text-[13px] text-red-600">Please try again or email us directly.</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* FAQ quick links */}
            <div className="mt-8 rounded-2xl border border-[#E3DFD5] bg-white p-8">
              <h3 className="m-0 mb-6 font-[family-name:var(--font-serif)] text-[18px] font-semibold text-[#191B1E]">
                Common Questions
              </h3>
              <div className="space-y-4">
                {[
                  { q: "How do I join IEEE?", a: "Visit our Join IEEE page to learn about membership benefits and the registration process.", href: "/join" },
                  { q: "Can non-members attend events?", a: "Most of our public seminars and workshops are open to all BRAC University students. Chapter-specific events may require membership." },
                  { q: "How can I collaborate with the branch?", a: "We welcome partnerships with student organizations, companies, and academic institutions. Reach out via the form above or email us directly." },
                ].map((faq, i) => (
                  <details key={i} className="group rounded-xl border border-[#E3DFD5] bg-[#FBFAF7] transition-colors open:bg-white">
                    <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-[15px] font-semibold text-[#191B1E] [&::-webkit-details-marker]:hidden">
                      {faq.q}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#B0B4B9] transition-transform group-open:rotate-180">
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-4 text-[14px] leading-[1.65] text-[#6E7178]">
                      {faq.a}{" "}
                      {faq.href && (
                        <Link href={faq.href} className="font-semibold text-[#00629B] hover:underline">
                          Learn more →
                        </Link>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Contact Directory ── */}
      <div className="border-t border-[#E3DFD5] bg-white">
        <div className="mx-auto max-w-[1320px] px-8 py-16">
          <div className="mb-12 text-center">
            <div className="mb-5 flex items-center justify-center gap-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#00629B]">
              <span className="inline-block h-0.5 w-[26px] bg-[#00629B]" />
              Directory
              <span className="inline-block h-0.5 w-[26px] bg-[#00629B]" />
            </div>
            <h2 className="m-0 font-[family-name:var(--font-serif)] text-[clamp(24px,3vw,34px)] font-semibold tracking-[-0.02em] text-[#191B1E]">
              Reach the right person directly
            </h2>
          </div>

          {/* Counselor */}
          <div className="mx-auto mb-12 max-w-[700px]">
            <div className="rounded-2xl border border-[#E3DFD5] bg-gradient-to-br from-[#F5F3EE] to-white p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#00629B] to-[#0A2540] text-white">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="m-0 font-[family-name:var(--font-serif)] text-[20px] font-semibold text-[#191B1E]">Prof. AKM Abdul Malek Azad, PhD</h3>
              <p className="m-0 mt-1 text-[13px] font-medium uppercase tracking-[0.08em] text-[#00629B]">Counselor · Founder, IEEE BRACU SB</p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <a href="mailto:a.azad@bracu.ac.bd" className="rounded-lg border border-[#E3DFD5] bg-white px-4 py-2 text-[13px] font-medium text-[#191B1E] transition-colors hover:border-[#00629B]/30 hover:text-[#00629B]">a.azad@bracu.ac.bd</a>
                <a href="mailto:a.azad@ieee.org" className="rounded-lg border border-[#E3DFD5] bg-white px-4 py-2 text-[13px] font-medium text-[#191B1E] transition-colors hover:border-[#00629B]/30 hover:text-[#00629B]">a.azad@ieee.org</a>
                <a href="https://engineering.bracu.ac.bd/profile/akm-abdul-malek-azad-phd" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#00629B] px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[#004E7C]">View Profile</a>
              </div>
            </div>
          </div>

          {/* Main EB */}
          <div className="mb-12">
            <h3 className="m-0 mb-6 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6E7178]">
              <span className="inline-block h-0.5 w-[20px] bg-[#E3DFD5]" />Main Executive Body
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { role: "Chair", name: "Rayadh Abrar", email: "rayadhabrar@bracu.ac.bd" },
                { role: "Vice Chair", name: "Muntaha Majed", email: "muntahamajed@gmail.com" },
                { role: "Secretary", name: "Labiba Tahia", email: "labiba.tahia@bracu.ac.bd" },
                { role: "Treasurer", name: "Sharaf Ahmed", email: "sharaf.ahmed@bracu.ac.bd" },
                { role: "Webmaster", name: "Hasib Hossain Abir", email: "abir4dev@gmail.com" },
                { role: "Publicity Coordinator", name: "Nishat Zahan Niha", email: "nishat.zahan.niha@bracu.ac.bd" },
                { role: "Editor", name: "Antara Raida Huq", email: "antara.raida.huq@bracu.ac.bd" },
                { role: "Designer", name: "Fabiha Fairuz", email: "fabiha.fairuz@bracu.ac.bd" },
              ].map((m) => (
                <div key={m.role} className="rounded-xl border border-[#E3DFD5] bg-[#FBFAF7] px-5 py-4 transition-colors hover:bg-white">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#00629B]">{m.role}</div>
                  <div className="mt-1 text-[15px] font-semibold text-[#191B1E]">{m.name}</div>
                  <a href={`mailto:${m.email}`} className="mt-1 block truncate text-[13px] text-[#6E7178] transition-colors hover:text-[#00629B]">{m.email}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Chapter EBs */}
          <div className="space-y-8">
            {[
              {
                chapter: "IEEE PES BRACU SBC",
                advisor: "Prof. Shahidul Islam Khan, EEE",
                members: [
                  { role: "Chair", name: "Bushra Anjum Priyota", email: "bushra.anjum.priyota@bracu.ac.bd" },
                  { role: "Vice Chair", name: "Maisha Mahjabin Nidhi", email: "maisha.mahjabin.nidhi@bracu.ac.bd" },
                  { role: "Secretary", name: "Shahriar Ahmed", email: "shahriar.ahmed1@bracu.ac.bd" },
                  { role: "Treasurer", name: "S M Sadab Sabah", email: "sm.sadab.sabah@bracu.ac.bd" },
                ],
              },
              {
                chapter: "IEEE CS BRACU SBC",
                advisor: "Mr. Annajiat Alim Rasel, CSE",
                members: [
                  { role: "Chair", name: "Sakibul Ahsan Teham", email: "sakibul.ahsan.teham@g.bracu.ac.bd" },
                  { role: "Vice Chair", name: "Khandoker Tanjim Rahman", email: "khandoker.tanjim.rahman@g.bracu.ac.bd" },
                  { role: "Secretary", name: "Md. Ezhar Hossain", email: "md.ezhar.hossain@g.bracu.ac.bd" },
                  { role: "Treasurer", name: "Sannidhya Roy Sadhya", email: "sannidhya.roy.sadhya@g.bracu.ac.bd" },
                ],
              },
              {
                chapter: "IEEE RAS BRACU SBC",
                advisor: "Prof. Md. Khalilur Rahman, CSE",
                members: [
                  { role: "Chair", name: "Risana Rehma Chowdhury", email: "risana.rehma.chowdhury@g.bracu.ac.bd" },
                  { role: "Vice Chair", name: "Saad Noman Adeeb", email: "saad.noman.adeeb@g.bracu.ac.bd" },
                  { role: "Secretary", name: "Anika Tabassum", email: "anika.tabassum19@g.bracu.ac.bd" },
                  { role: "Treasurer", name: "Mohammed Naqibur Rahman", email: "mohammed.naqibur.rahman@g.bracu.ac.bd" },
                ],
              },
              {
                chapter: "IEEE AESS BRACU SBC",
                advisor: "Mr. Atib Mohammad Oni, EEE",
                members: [
                  { role: "Chair", name: "Nusrat Jahan", email: "nusrat.jahan31@g.bracu.ac.bd" },
                  { role: "Vice Chair", name: "Mashiat Lamisa Riddhi", email: "mashiat.lamisa.riddhi@g.bracu.ac.bd" },
                  { role: "Secretary", name: "Iftekhar Uddin Tuhin", email: "iftekhar.uddin.tuhin@g.bracu.ac.bd" },
                  { role: "Treasurer", name: "Shahriar Alam Mugdho", email: "shahriar.alam.mugdho@g.bracu.ac.bd" },
                ],
              },
              {
                chapter: "IEEE ComSoc BRACU SBC",
                advisor: "Mr. Ihteyaz Aqaeed Avash, EEE",
                members: [
                  { role: "Chair", name: "Mehzabin Mahmud", email: "mehzabin.mahmud@g.bracu.ac.bd" },
                  { role: "Vice Chair", name: "Ramisha Islam Rodela", email: "ramisha.islam.rodela@g.bracu.ac.bd" },
                  { role: "Secretary", name: "Nusrat Sultana", email: "nusrat.sultana@g.bracu.ac.bd" },
                  { role: "Treasurer", name: "Md. Riadul Hossain Khan", email: "riadulhosssain@gmail.com" },
                ],
              },
            ].map((ch) => (
              <div key={ch.chapter}>
                <h3 className="m-0 mb-1 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6E7178]">
                  <span className="inline-block h-0.5 w-[20px] bg-[#E3DFD5]" />{ch.chapter}
                </h3>
                <p className="m-0 mb-4 pl-[28px] text-[13px] text-[#6E7178]">
                  Advisor: <span className="font-medium text-[#191B1E]">{ch.advisor}</span>
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {ch.members.map((m) => (
                    <div key={m.name} className="rounded-xl border border-[#E3DFD5] bg-[#FBFAF7] px-5 py-4 transition-colors hover:bg-white">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#00629B]">{m.role}</div>
                      <div className="mt-1 text-[15px] font-semibold text-[#191B1E]">{m.name}</div>
                      <a href={`mailto:${m.email}`} className="mt-1 block truncate text-[13px] text-[#6E7178] transition-colors hover:text-[#00629B]">{m.email}</a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}