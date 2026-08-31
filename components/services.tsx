"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Share2, Search, MonitorSmartphone, CheckCircle2, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    tag: "SMM & Meta Ads",
    desc: "Content that stops the scroll. I plan, create, and manage high-converting social campaigns that build active brand communities.",
    points: [
      "Viral content calendars & reels",
      "Instagram, LinkedIn & Meta Ads",
      "Community engagement & growth",
    ],
    glow: "rgba(139, 243, 230, 0.3)",
    badgeBg: "bg-[#8bf3e6]/15 text-[#8bf3e6] border-[#8bf3e6]/30",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    tag: "SEO & Google #1",
    desc: "Get found by people searching for your services. On-page, technical, and content SEO that secures Page 1 Google rankings.",
    points: [
      "Keyword & competitor research",
      "On-page & technical SEO fixes",
      "High-converting search content",
    ],
    glow: "rgba(70, 183, 255, 0.3)",
    badgeBg: "bg-[#46b7ff]/15 text-[#46b7ff] border-[#46b7ff]/30",
  },
  {
    icon: MonitorSmartphone,
    title: "Web Design & UI/UX",
    tag: "Modern & 3D Web",
    desc: "Fast, modern, conversion-focused websites. UI designs built to turn casual visitors into paying leads across all devices.",
    points: [
      "Landing pages & full site builds",
      "Responsive 60fps UI/UX",
      "SEO-optimized & lightning fast",
    ],
    glow: "rgba(124, 147, 255, 0.3)",
    badgeBg: "bg-[#7c93ff]/15 text-[#7c93ff] border-[#7c93ff]/30",
  },
]

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#8bf3e6]">
              Core Capabilities
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#f4f5f6] sm:text-5xl">
              Services built for measurable growth
            </h2>
          </div>
          <p className="max-w-sm text-sm text-[#94a3b8]">
            Three core digital disciplines working together to maximize reach, search authority, and sales conversions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => {
            const cardRef = useRef<HTMLDivElement>(null)
            const Icon = s.icon

            const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
              if (!cardRef.current) return
              const rect = cardRef.current.getBoundingClientRect()
              const x = e.clientX - rect.left
              const y = e.clientY - rect.top
              cardRef.current.style.setProperty("--mouse-x", `${x}px`)
              cardRef.current.style.setProperty("--mouse-y", `${y}px`)
            }

            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                ref={cardRef}
                onMouseMove={handleMouseMove}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0e1117] p-7 shadow-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30 hover:shadow-[0_18px_60px_-18px_rgba(70,183,255,0.3)]"
              >
                {/* Mouse Spotlight Glow */}
                <div className="card-glow" />

                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#46b7ff] shadow-md transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </div>
                    <span className={`rounded-full border px-3 py-1 text-[11px] font-mono uppercase ${s.badgeBg}`}>
                      {s.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-[#f4f5f6]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#94a3b8]">
                    {s.desc}
                  </p>

                  <ul className="mt-6 flex flex-col gap-2.5 border-t border-white/10 pt-6">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-xs font-semibold text-[#f4f5f6]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8bf3e6]" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="mt-8 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold text-[#f4f5f6] transition-all hover:bg-[#f4f5f6] hover:text-[#07080a]"
                >
                  <span>Discuss {s.title}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
