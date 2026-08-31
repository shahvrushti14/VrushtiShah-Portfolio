"use client"

import { WalkingHeroRunway } from "@/components/walking-hero-runway"
import { Sparkles, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pt-12 pb-16 md:px-8 md:pt-20 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center justify-between gap-4 sm:justify-start">
              <div className="flex flex-wrap items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                <span className="flex items-center gap-2 rounded-full border border-white/40 bg-slate-900/80 px-3.5 py-1.5 backdrop-blur-md shadow-lg">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-emerald-300">Available for projects</span>
                </span>
                <span aria-hidden className="text-white/60">/</span>
                <span className="text-white">Ahmedabad, Gujarat</span>
              </div>

              {/* 3D Pop-Pop Monogram Badge */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, -3, 0] }}
                transition={{
                  y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                  scale: { type: "spring", stiffness: 400, damping: 15 },
                }}
                className="hidden sm:flex items-center gap-2 rounded-full border border-white/40 bg-white px-3.5 py-1.5 shadow-xl shadow-slate-950/20 cursor-pointer"
              >
                <div className="flex items-center justify-center rounded-full bg-white p-0.5">
                  <img src="/logo-vs-icon.png" alt="VS Monogram" className="h-5 w-auto object-contain" />
                </div>
                <span className="text-[11px] font-extrabold tracking-wider text-slate-950 uppercase">Official Brand</span>
              </motion.div>
            </div>

            <h1 className="mt-6 font-display text-[14vw] font-extrabold leading-[0.86] tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] sm:text-[11vw] lg:text-[7.2rem]">
              Digital
              <br />
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-md">
                Marketing
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg font-bold leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] text-pretty">
              I&apos;m Vrushti Shah — a digital marketer helping brands grow with
              data-driven <span className="font-extrabold text-emerald-300 underline underline-offset-4 decoration-emerald-400">social media marketing</span>,{" "}
              <span className="font-extrabold text-emerald-300 underline underline-offset-4 decoration-emerald-400">SEO</span> that ranks, and{" "}
              <span className="font-extrabold text-emerald-300 underline underline-offset-4 decoration-emerald-400">web design</span> that converts.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 px-7 py-3.5 text-sm font-extrabold text-slate-950 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-emerald-400/40"
              >
                <Sparkles className="h-4 w-4" />
                <span>Start a project</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#work"
                className="rounded-full border border-white/40 bg-slate-900/80 px-6 py-3.5 text-sm font-extrabold text-white backdrop-blur-md shadow-lg transition-all duration-300 hover:border-white hover:bg-slate-800"
              >
                View selected work
              </a>
            </div>
          </div>

          {/* Right Column: 3D Walking Runway & Sequential Skill Showcase */}
          <div className="mt-6 flex justify-center lg:mt-0 lg:justify-end">
            <WalkingHeroRunway />
          </div>
        </div>
      </div>
    </section>
  )
}
