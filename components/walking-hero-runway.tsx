"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Share2,
  Search,
  MonitorSmartphone,
  Target,
  BarChart3,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Footprints,
} from "lucide-react"

const skillsSequence = [
  {
    id: 1,
    title: "Social Media Marketing",
    tag: "Skill 01 • SMM & Reels",
    desc: "Scroll-stopping reel strategies, viral content calendars, and targeted Meta/IG ad campaigns.",
    icon: Share2,
    color: "from-emerald-400 to-teal-500",
    glowColor: "rgba(52, 211, 153, 0.4)",
    badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
  },
  {
    id: 2,
    title: "Search Engine Optimization",
    tag: "Skill 02 • SEO #1 Google",
    desc: "On-page optimization, technical fixes, and keyword strategies that climb Google Page 1 rankings.",
    icon: Search,
    color: "from-purple-400 to-violet-500",
    glowColor: "rgba(168, 85, 247, 0.4)",
    badgeBg: "bg-purple-500/20 text-purple-300 border-purple-500/40",
  },
  {
    id: 3,
    title: "Web Design & UI/UX",
    tag: "Skill 03 • Conversion Sites",
    desc: "Fast, modern 60fps websites and high-converting landing pages built for desktop and mobile.",
    icon: MonitorSmartphone,
    color: "from-blue-400 to-indigo-500",
    glowColor: "rgba(59, 130, 246, 0.4)",
    badgeBg: "bg-blue-500/20 text-blue-300 border-blue-500/40",
  },
  {
    id: 4,
    title: "Meta & Instagram Ads",
    tag: "Skill 04 • High ROI Campaigns",
    desc: "Data-backed paid ad targeting that drives leads, sales conversions, and retargeting reach.",
    icon: Target,
    color: "from-pink-400 to-rose-500",
    glowColor: "rgba(244, 63, 94, 0.4)",
    badgeBg: "bg-pink-500/20 text-pink-300 border-pink-500/40",
  },
  {
    id: 5,
    title: "Analytics & Growth",
    tag: "Skill 05 • Data Strategy",
    desc: "Full-funnel campaign tracking, competitor analysis, and transparent monthly performance insights.",
    icon: BarChart3,
    color: "from-amber-400 to-orange-500",
    glowColor: "rgba(245, 158, 11, 0.4)",
    badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/40",
  },
]

export function WalkingHeroRunway() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Sequential timer: advances skill 1-by-1 along her walking path
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % skillsSequence.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [isPaused])

  const activeSkill = skillsSequence[currentStep]
  const Icon = activeSkill.icon

  return (
    <div className="relative flex w-full max-w-lg flex-col items-center justify-center lg:max-w-xl">
      {/* 3D Runway Lighting Glow */}
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-tr from-emerald-500/20 via-purple-500/20 to-blue-500/20 opacity-60 blur-3xl" />

      {/* Main Glass Runway Stage */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative flex w-full flex-col items-center overflow-hidden rounded-3xl border border-slate-700/90 bg-slate-950/85 p-6 shadow-2xl backdrop-blur-xl md:p-8"
      >
        {/* Stage Header Controls */}
        <div className="flex w-full items-center justify-between border-b border-slate-800/90 pb-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-extrabold uppercase tracking-wider text-white">
              Walking Skills Runway
            </span>
          </div>

          {/* Sequential Step Counter */}
          <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-3 py-1 text-[11px] font-extrabold text-emerald-300">
            <Footprints className="h-3.5 w-3.5" />
            <span>Step {currentStep + 1} of {skillsSequence.length}</span>
          </div>
        </div>

        {/* 3D Walking Runway & Character Stage */}
        <div className="relative mt-6 flex h-[380px] w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-inner sm:h-[420px]">
          {/* Futuristic 3D Runway Grid Lines */}
          <div className="pointer-events-none absolute inset-0 opacity-25">
            <div className="h-full w-full bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem]" />
          </div>

          {/* Illuminated Runway Path Center */}
          <div className="pointer-events-none absolute bottom-0 h-44 w-64 rounded-full bg-gradient-to-t from-emerald-500/30 via-teal-500/15 to-transparent blur-xl" />

          {/* Animated Walking Character Cutout Container */}
          <motion.div
            animate={{
              y: [0, -12, 0, -12, 0],
              rotate: [-2, 2, -2, 2, -2],
              scale: [0.98, 1.02, 0.98, 1.02, 0.98],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-20 flex flex-col items-center justify-end"
          >
            {/* Character Photo Frame Cutout */}
            <div className="relative h-[290px] w-[210px] overflow-hidden rounded-2xl border-2 border-white/80 bg-slate-950 shadow-2xl sm:h-[320px] sm:w-[230px]">
              <img
                src="/vrushti-photo.jpg"
                alt="Vrushti Shah Walking"
                className="h-full w-full object-cover object-top filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-extrabold text-white">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Vrushti Shah
                </span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-300">
                  Walking
                </span>
              </div>
            </div>

            {/* Dynamic Ground Shadow under Walking Feet */}
            <motion.div
              animate={{
                scaleX: [0.85, 1.15, 0.85, 1.15, 0.85],
                opacity: [0.4, 0.8, 0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-2 h-4 w-44 rounded-full bg-black/80 blur-md"
            />
          </motion.div>

          {/* Sequential Skill Pop-up Card (Appears 1-by-1 along her path) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkill.id}
              initial={{ opacity: 0, scale: 0.7, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: -30 }}
              transition={{ duration: 0.45, ease: "backOut" }}
              className="absolute z-30 top-6 left-4 right-4 sm:left-6 sm:right-6 pointer-events-auto"
            >
              <div
                className="flex items-center gap-3.5 rounded-2xl border border-slate-700/90 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl"
                style={{
                  boxShadow: `0 12px 30px -5px ${activeSkill.glowColor}`,
                }}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr ${activeSkill.color} text-slate-950 shadow-md`}
                >
                  <Icon className="h-6 w-6" strokeWidth={2.5} />
                </div>

                <div className="flex-1 pr-1 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">
                      {activeSkill.tag}
                    </span>
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-extrabold text-emerald-300">
                      Sequential Skill
                    </span>
                  </div>
                  <h3 className="mt-0.5 text-base font-extrabold tracking-tight text-white">
                    {activeSkill.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold leading-relaxed text-slate-200">
                    {activeSkill.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Step Indicator Navigation Pills */}
        <div className="mt-6 flex w-full items-center justify-between gap-2">
          <button
            type="button"
            onClick={() =>
              setCurrentStep((prev) => (prev === 0 ? skillsSequence.length - 1 : prev - 1))
            }
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-white transition-all hover:bg-emerald-500 hover:text-slate-950"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Dots timeline */}
          <div className="flex items-center gap-2">
            {skillsSequence.map((skill, index) => (
              <button
                key={skill.id}
                type="button"
                onClick={() => setCurrentStep(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentStep === index
                    ? "w-8 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                    : "w-2.5 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setCurrentStep((prev) => (prev + 1) % skillsSequence.length)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-white transition-all hover:bg-emerald-500 hover:text-slate-950"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
