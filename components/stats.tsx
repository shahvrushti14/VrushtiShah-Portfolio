"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

const stats = [
  { value: "40+", label: "Brands Transformed", sub: "Across SMM, SEO & Web Design" },
  { value: "3.5x", label: "Average Reach Lift", sub: "Organic & Paid Social Growth" },
  { value: "#1", label: "Google Rankings Achieved", sub: "High-Intent Keyword Dominance" },
  { value: "100%", label: "Client Satisfaction", sub: "Transparent & Results-Focused" },
]

export function Stats() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => {
          const cardRef = useRef<HTMLDivElement>(null)

          const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            if (!cardRef.current) return
            const rect = cardRef.current.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            cardRef.current.style.setProperty("--mouse-x", `${x}px`)
            cardRef.current.style.setProperty("--mouse-y", `${y}px`)
          }

          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              ref={cardRef}
              onMouseMove={handleMouseMove}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0e1117] p-6 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_18px_60px_-18px_rgba(70,183,255,0.3)]"
            >
              {/* Mouse Spotlight Glow */}
              <div className="card-glow" />

              <div>
                <span className="font-display text-4xl font-extrabold tracking-tight text-tide sm:text-5xl">
                  {s.value}
                </span>
                <h3 className="mt-3 text-base font-bold tracking-tight text-[#f4f5f6]">
                  {s.label}
                </h3>
                <p className="mt-1 text-xs text-[#94a3b8]">{s.sub}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
