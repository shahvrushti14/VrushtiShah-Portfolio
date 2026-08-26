"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, HelpCircle } from "lucide-react"

const faqs = [
  {
    q: "What services do you offer?",
    a: "I offer Social Media Marketing (SMM), Search Engine Optimization (SEO), and Web Design/Development. I often combine all three so your brand gains visibility, ranks high on Google, and converts visitors into paying customers.",
  },
  {
    q: "How do you price your projects?",
    a: "Pricing depends on project scope. I offer transparent monthly retainers for ongoing SMM & SEO growth campaigns, and fixed-price packages for website design and landing pages. You receive a clear, tailored quote with zero hidden fees.",
  },
  {
    q: "How soon will I see results?",
    a: "Social media and paid ad campaigns start generating engagement and traffic within weeks. SEO is a strategic investment—meaningful organic ranking growth typically accelerates within 3 to 6 months.",
  },
  {
    q: "Do you work with clients outside Ahmedabad?",
    a: "Yes! While I am based in Ahmedabad, Gujarat, I work with clients remotely across India and internationally. Strategy sessions, updates, and asset sharing are managed over calls and shared channels.",
  },
  {
    q: "Can you handle both web design and marketing?",
    a: "Absolutely—that's the key advantage of working with me! Having a single strategist build your site, write conversion copy, and run your SEO/SMM ensures total brand alignment.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            <HelpCircle className="h-4 w-4" />
            <span>FAQ</span>
          </div>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm font-semibold leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Have questions about how we can collaborate to grow your brand? Here are direct answers to common inquiries.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
                  isOpen
                    ? "border-emerald-400 bg-slate-950/90 shadow-2xl"
                    : "border-slate-700/90 bg-slate-950/85 hover:border-slate-500"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-display text-base font-extrabold text-white md:p-6"
                >
                  <span className="text-white drop-shadow-sm">{f.q}</span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                      isOpen
                        ? "rotate-45 bg-emerald-400 text-slate-950 font-bold"
                        : "bg-slate-800 text-slate-200"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="border-t border-slate-800/90 p-5 pt-0 md:p-6 md:pt-0">
                        <p className="mt-2 text-xs font-semibold leading-relaxed text-slate-200">
                          {f.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
