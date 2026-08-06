"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    q: "What services do you offer?",
    a: "Social Media Marketing (SMM), Search Engine Optimization (SEO), and Web Design. I often combine all three so your brand gets seen, ranks well, and converts visitors into customers.",
  },
  {
    q: "How do you price your projects?",
    a: "It depends on scope. I offer monthly retainers for ongoing social and SEO work, and fixed-price packages for website design. After a quick call I'll send a clear, tailored quote — no surprises.",
  },
  {
    q: "How soon will I see results?",
    a: "Social and paid campaigns can show movement within weeks. SEO is a longer game — meaningful ranking growth typically shows within 3 to 6 months. I set realistic expectations up front.",
  },
  {
    q: "Do you work with clients outside Ahmedabad?",
    a: "Yes. I'm based in Ahmedabad but work with clients remotely across India and beyond. Everything is handled over calls, email, and shared docs.",
  },
  {
    q: "Can you handle both design and marketing?",
    a: "Absolutely — that's the advantage of working with me. Your website, SEO, and social all stay consistent because one person is steering the whole strategy.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
            Questions, answered
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Still unsure about something? Reach out and I&apos;ll get back to you.
          </p>
        </div>

        <div className="flex flex-col">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-lg font-semibold tracking-tight">{f.q}</span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
