"use client"

import { Interactive3DSkills } from "@/components/interactive-3d-skills"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-12 pb-16 sm:pt-20 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          {/* Left Column: ScrollTide Headline & CTAs */}
          <div className="flex flex-col items-start">
            {/* Top Pill Badge */}
            <motion.a
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-[#94a3b8] backdrop-blur transition hover:border-white/20 hover:text-[#f4f5f6]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#8bf3e6] animate-pulse" />
              <span className="font-mono uppercase tracking-wider text-[11px]">✦ Digital Growth & 3D Web Studio</span>
              <span className="text-[#64748b] transition group-hover:translate-x-0.5 group-hover:text-[#f4f5f6]">→</span>
            </motion.a>

            {/* ScrollTide Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-display text-[clamp(2.5rem,7vw,5.2rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-[#f4f5f6]"
            >
              Ship brands that
              <br />
              move like the <span className="text-tide">tide.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-xl text-balance text-base leading-relaxed text-[#94a3b8] sm:text-lg"
            >
              I&apos;m Vrushti Shah — a digital marketer helping brands scale with data-driven{" "}
              <span className="font-semibold text-[#f4f5f6]">Social Media Marketing</span>,{" "}
              <span className="font-semibold text-[#f4f5f6]">Page 1 SEO</span>, and{" "}
              <span className="font-semibold text-tide">3D Web Design</span> that converts.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#f4f5f6] px-6.5 py-3.5 text-sm font-semibold text-[#07080a] transition hover:bg-white"
              >
                <span className="relative">Start a Project</span>
                <span className="relative transition group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-[#f4f5f6] transition hover:bg-white/5 hover:border-white/40"
              >
                Browse Selected Work
              </a>
            </motion.div>

            {/* ScrollTide Social Proof Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-9 flex items-center gap-3 text-sm text-[#94a3b8]"
            >
              <div className="flex -space-x-2">
                <span className="h-7 w-7 rounded-full border-2 border-[#07080a]" style={{ background: "radial-gradient(circle at 30% 30%, #2e7dff, #0b0d10)" }} />
                <span className="h-7 w-7 rounded-full border-2 border-[#07080a]" style={{ background: "radial-gradient(circle at 30% 30%, #8bf3e6, #0b0d10)" }} />
                <span className="h-7 w-7 rounded-full border-2 border-[#07080a]" style={{ background: "radial-gradient(circle at 30% 30%, #46b7ff, #0b0d10)" }} />
                <span className="h-7 w-7 rounded-full border-2 border-[#07080a]" style={{ background: "radial-gradient(circle at 30% 30%, #7c93ff, #0b0d10)" }} />
              </div>
              <span>
                <span className="font-bold text-[#f4f5f6]">40+ Brands Transformed</span> · 3.5x Avg. Lift
              </span>
            </motion.div>
          </div>

          {/* Right Column: Interactive 3D Photo & Skill Orbits */}
          <div className="mt-8 flex justify-center lg:mt-0 lg:justify-end">
            <Interactive3DSkills />
          </div>
        </div>
      </div>
    </section>
  )
}
