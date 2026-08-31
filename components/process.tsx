"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Search, Compass, Palette, Rocket } from "lucide-react"

const steps = [
  {
    num: "01",
    title: "Audit & Strategy",
    desc: "We analyze your brand's current digital footprint, competitors, and target keywords to map out clear growth goals.",
    icon: Search,
  },
  {
    num: "02",
    title: "Campaign & UI Planning",
    desc: "Developing high-impact content themes, SEO keyword maps, and modern wireframes aligned with your target audience.",
    icon: Compass,
  },
  {
    num: "03",
    title: "Execution & Optimization",
    desc: "Launching SMM campaigns, publishing SEO content, and coding responsive high-converting website pages.",
    icon: Palette,
  },
  {
    num: "04",
    title: "Growth & Scaling",
    desc: "Tracking analytics, refining ad campaigns, and expanding keyword coverage to maximize long-term ROI.",
    icon: Rocket,
  },
]

export function Process() {
  return (
    <section id="process" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="flex flex-col gap-10">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-[#8bf3e6]">
            Step-by-Step Workflow
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#f4f5f6] sm:text-5xl">
            A 4-Step Process Built for High ROI
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
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
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                ref={cardRef}
                onMouseMove={handleMouseMove}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0e1117] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30 hover:shadow-[0_18px_60px_-18px_rgba(70,183,255,0.3)]"
              >
                {/* Mouse Spotlight Glow */}
                <div className="card-glow" />

                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-extrabold text-[#46b7ff]">
                      {s.num}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#8bf3e6]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-[#f4f5f6]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#94a3b8]">
                    {s.desc}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
