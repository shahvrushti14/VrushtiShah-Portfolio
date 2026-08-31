"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import {
  Share2,
  Search,
  MonitorSmartphone,
  Target,
  BarChart3,
  Sparkles,
  CheckCircle2,
} from "lucide-react"

const skills = [
  {
    title: "Social Media Marketing",
    tag: "SMM & Meta Ads",
    icon: Share2,
    color: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderColor: "group-hover:border-emerald-500/80",
    glowColor: "rgba(16, 185, 129, 0.35)",
    iconBg: "bg-emerald-500/20 text-emerald-400",
    pos: "top-[-18px] left-[-20px] md:top-[-25px] md:left-[-40px]",
    floatDelay: 0,
    depth: 45,
  },
  {
    title: "Search Engine Optimization",
    tag: "SEO & Rankings",
    icon: Search,
    color: "from-purple-500/20 via-violet-500/10 to-transparent",
    borderColor: "group-hover:border-purple-500/80",
    glowColor: "rgba(168, 85, 247, 0.35)",
    iconBg: "bg-purple-500/20 text-purple-400",
    pos: "top-[15%] right-[-25px] md:top-[12%] md:right-[-45px]",
    floatDelay: 1.2,
    depth: 55,
  },
  {
    title: "Web Design & UI",
    tag: "High Converting Sites",
    icon: MonitorSmartphone,
    color: "from-blue-500/20 via-indigo-500/10 to-transparent",
    borderColor: "group-hover:border-blue-500/80",
    glowColor: "rgba(59, 130, 246, 0.35)",
    iconBg: "bg-blue-500/20 text-blue-400",
    pos: "bottom-[28%] left-[-25px] md:bottom-[25%] md:left-[-45px]",
    floatDelay: 2.1,
    depth: 50,
  },
  {
    title: "Meta & IG Ads",
    tag: "Paid Campaigns & ROI",
    icon: Target,
    color: "from-pink-500/20 via-rose-500/10 to-transparent",
    borderColor: "group-hover:border-pink-500/80",
    glowColor: "rgba(236, 72, 153, 0.35)",
    iconBg: "bg-pink-500/20 text-pink-400",
    pos: "bottom-[-20px] right-[-15px] md:bottom-[-25px] md:right-[-35px]",
    floatDelay: 0.7,
    depth: 60,
  },
  {
    title: "Analytics & Growth",
    tag: "Data Driven Strategy",
    icon: BarChart3,
    color: "from-amber-500/20 via-orange-500/10 to-transparent",
    borderColor: "group-hover:border-amber-500/80",
    glowColor: "rgba(245, 158, 11, 0.35)",
    iconBg: "bg-amber-500/20 text-amber-400",
    pos: "bottom-[-35px] left-[15%] md:bottom-[-40px] md:left-[20%]",
    floatDelay: 1.8,
    depth: 40,
  },
]

export function Interactive3DSkills() {
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 150,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 150,
    damping: 20,
  })

  const spotX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), {
    stiffness: 200,
    damping: 25,
  })
  const spotY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), {
    stiffness: 200,
    damping: 25,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const normX = (e.clientX - rect.left) / rect.width - 0.5
    const normY = (e.clientY - rect.top) / rect.height - 0.5

    mouseX.set(normX)
    mouseY.set(normY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex w-full max-w-md items-center justify-center p-4 md:max-w-xl [perspective:1000px]"
    >
      {/* Dynamic Background Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-10 rounded-full opacity-40 blur-3xl transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${spotX.get()}% ${spotY.get()}%, rgba(168, 85, 247, 0.3), rgba(16, 185, 129, 0.2) 50%, transparent 80%)`,
        }}
      />

      {/* Main 3D Card Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative flex w-full flex-col items-center rounded-3xl border border-slate-700/80 bg-slate-900/80 p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 md:p-7"
      >
        {/* Animated Card Border Lighting */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-500/15 via-purple-500/15 to-blue-500/15 opacity-80" />

        {/* Top Status Header inside 3D Card */}
        <div
          style={{ transform: "translateZ(30px)" }}
          className="z-10 flex w-full items-center justify-between border-b border-slate-800/80 pb-3"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-bold tracking-wide text-slate-200">
              3D Interactive Profile
            </span>
          </div>

          <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-3 py-1 text-[11px] font-extrabold text-emerald-400">
            <Sparkles className="h-3 w-3" />
            <span>Digital Strategist</span>
          </div>
        </div>

        {/* Central Portrait Photo Frame with 3D Depth */}
        <motion.div
          style={{ transform: "translateZ(60px)" }}
          className="group relative mt-4 overflow-hidden rounded-2xl border-2 border-slate-700/80 bg-slate-950 shadow-xl transition-all duration-300"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-85" />

          <img
            src="/vrushti-photo.jpg"
            alt="Vrushti Shah"
            className="h-[340px] w-full max-w-[280px] object-cover object-top transition-transform duration-500 group-hover:scale-105 sm:h-[380px] sm:max-w-[310px]"
          />

          {/* Name & Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
            <div className="flex items-center gap-1.5 text-xs font-extrabold text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>Verified Marketer</span>
            </div>
            <h3 className="text-xl font-extrabold tracking-tight text-white">Vrushti Shah</h3>
            <p className="text-xs font-semibold text-slate-200">
              SEO • Social Media Marketing • Web Design
            </p>
          </div>
        </motion.div>

        {/* Orbiting 3D Floating Skill Cards */}
        {skills.map((skill) => {
          const Icon = skill.icon
          return (
            <motion.div
              key={skill.title}
              initial={{ y: 0 }}
              animate={{
                y: [-6, 6, -6],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: skill.floatDelay,
              }}
              style={{
                transform: `translateZ(${skill.depth}px)`,
              }}
              className={`group absolute z-30 ${skill.pos} pointer-events-auto`}
            >
              <div
                className={`flex items-center gap-3 rounded-2xl border border-slate-700/90 bg-slate-900/95 p-2.5 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 ${skill.borderColor}`}
                style={{
                  boxShadow: `0 10px 25px -5px ${skill.glowColor}`,
                }}
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${skill.iconBg} border border-white/10 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}
                >
                  <Icon className="h-4 w-4" strokeWidth={2.2} />
                </div>
                <div className="pr-1 text-left">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                    {skill.tag}
                  </div>
                  <div className="text-xs font-bold tracking-tight text-white">
                    {skill.title}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
