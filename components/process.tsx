"use client"

import { motion } from "framer-motion"
import { Compass, Target, Rocket, TrendingUp } from "lucide-react"

const steps = [
  {
    n: "01",
    title: "Discover & Audit",
    desc: "We analyze your brand goals, target demographics, and competitor positioning to unveil growth opportunities.",
    icon: Compass,
    color: "from-emerald-500/20 to-teal-500/5",
    accent: "text-emerald-300",
  },
  {
    n: "02",
    title: "Tailored Strategy",
    desc: "A custom roadmap across SMM, SEO, and web architecture built with clear KPIs and conversion targets.",
    icon: Target,
    color: "from-purple-500/20 to-violet-500/5",
    accent: "text-purple-300",
  },
  {
    n: "03",
    title: "Execute & Optimize",
    desc: "High-performing content goes live, technical SEO fixes deploy, and conversion UI/UX launches.",
    icon: Rocket,
    color: "from-blue-500/20 to-indigo-500/5",
    accent: "text-blue-300",
  },
  {
    n: "04",
    title: "Scale & Report",
    desc: "Continuous data tracking and iterative optimization with transparent monthly performance insights.",
    icon: TrendingUp,
    color: "from-amber-500/20 to-orange-500/5",
    accent: "text-amber-300",
  },
]

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            Methodology
          </div>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] md:text-6xl">
            A 4-Step Process for Predictable Growth
          </h2>
        </div>

        <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col rounded-3xl border border-slate-700/90 bg-slate-950/85 p-7 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-slate-500 hover:shadow-emerald-500/20"
              >
                {/* Top Number floating badge */}
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-extrabold text-emerald-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    {s.n}
                  </span>
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 ${s.accent} border border-slate-700 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={2.2} />
                  </div>
                </div>

                <h3 className="mt-8 font-display text-xl font-extrabold tracking-tight text-white drop-shadow-sm">
                  {s.title}
                </h3>
                <p className="mt-3 text-xs font-semibold leading-relaxed text-slate-200">
                  {s.desc}
                </p>

                {/* Subtle bottom accent glow bar */}
                <div
                  className={`mt-6 h-1 w-full rounded-full bg-gradient-to-r ${s.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
