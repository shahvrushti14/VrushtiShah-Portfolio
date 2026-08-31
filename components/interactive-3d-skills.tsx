"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import {
  Share2,
  Search,
  MonitorSmartphone,
  Target,
  BarChart3,
  Sparkles,
  CheckCircle2,
  Footprints,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react"

const skills = [
  {
    title: "Social Media Marketing",
    tag: "SMM & Meta Ads",
    icon: Share2,
    color: "from-emerald-500/30 via-teal-500/20 to-transparent",
    borderColor: "border-emerald-400",
    glowColor: "rgba(16, 185, 129, 0.5)",
    iconBg: "bg-emerald-500/30 text-emerald-300",
    pos: "top-[-22px] left-[-15px] sm:top-[-28px] sm:left-[-35px]",
    depth: 70,
    highlights: ["Viral Reel Creatives", "Community Growth", "Meta Ad Campaigns"],
  },
  {
    title: "Search Engine Optimization",
    tag: "SEO & Google #1",
    icon: Search,
    color: "from-purple-500/30 via-violet-500/20 to-transparent",
    borderColor: "border-purple-400",
    glowColor: "rgba(168, 85, 247, 0.5)",
    iconBg: "bg-purple-500/30 text-purple-300",
    pos: "top-[15%] right-[-20px] sm:top-[12%] sm:right-[-40px]",
    depth: 75,
    highlights: ["Keyword Strategy", "On-Page & Technical", "Page 1 Rankings"],
  },
  {
    title: "Web Design & UI/UX",
    tag: "High Converting Sites",
    icon: MonitorSmartphone,
    color: "from-blue-500/30 via-indigo-500/20 to-transparent",
    borderColor: "border-blue-400",
    glowColor: "rgba(59, 130, 246, 0.5)",
    iconBg: "bg-blue-500/30 text-blue-300",
    pos: "bottom-[30%] left-[-20px] sm:bottom-[26%] sm:left-[-40px]",
    depth: 70,
    highlights: ["Responsive 60fps UI", "Landing Pages", "SEO-Ready Architecture"],
  },
  {
    title: "Meta & IG Ads",
    tag: "Paid Campaigns & ROI",
    icon: Target,
    color: "from-pink-500/30 via-rose-500/20 to-transparent",
    borderColor: "border-pink-400",
    glowColor: "rgba(236, 72, 153, 0.5)",
    iconBg: "bg-pink-500/30 text-pink-300",
    pos: "bottom-[-20px] right-[-15px] sm:bottom-[-25px] sm:right-[-30px]",
    depth: 80,
    highlights: ["Target Audience Ads", "Conversion Funnels", "High ROAS Return"],
  },
  {
    title: "Analytics & Growth",
    tag: "Data Driven Strategy",
    icon: BarChart3,
    color: "from-amber-500/30 via-orange-500/20 to-transparent",
    borderColor: "border-amber-400",
    glowColor: "rgba(245, 158, 11, 0.5)",
    iconBg: "bg-amber-500/30 text-amber-300",
    pos: "bottom-[-35px] left-[15%] sm:bottom-[-40px] sm:left-[22%]",
    depth: 65,
    highlights: ["Performance Tracking", "Conversion Optimization", "Monthly Insights"],
  },
]

export function Interactive3DSkills() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Sequential Skill State & Autoplay
  const [activeSkillIndex, setActiveSkillIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveSkillIndex((prev) => (prev + 1) % skills.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Mouse 3D Tilt Physics
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

  const activeSkill = skills[activeSkillIndex]

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex w-full max-w-md flex-col items-center justify-center p-4 md:max-w-xl [perspective:1000px]"
    >
      {/* Dynamic Background Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-10 rounded-full opacity-40 blur-3xl transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${spotX.get()}% ${spotY.get()}%, ${activeSkill.glowColor}, rgba(16, 185, 129, 0.2) 50%, transparent 80%)`,
        }}
      />

      {/* Main 3D Card Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative flex w-full flex-col items-center rounded-3xl border border-slate-700/90 bg-slate-950/85 p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 md:p-7"
      >
        {/* Animated Card Border Lighting */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-purple-500/20 to-blue-500/20 opacity-80" />

        {/* Top Status Header inside 3D Card */}
        <div
          style={{ transform: "translateZ(30px)" }}
          className="z-10 flex w-full items-center justify-between border-b border-slate-800/90 pb-3"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-bold tracking-wide text-white">
              3D Interactive Profile
            </span>
          </div>

          {/* Live Walking Motion Indicator */}
          <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/20 px-3 py-1 text-[11px] font-extrabold text-emerald-300 shadow-md">
            <Footprints className="h-3.5 w-3.5 animate-bounce text-emerald-400" />
            <span>Walking Motion Active</span>
          </div>
        </div>

        {/* Central Portrait Photo Frame with ANIMATED WALKING STRIDE MOTION */}
        <motion.div
          style={{ transform: "translateZ(60px)" }}
          className="group relative mt-4 overflow-hidden rounded-2xl border-2 border-slate-700/90 bg-slate-950 shadow-2xl transition-all duration-300"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-85" />

          {/* WALKING MOTION LOOP */}
          <motion.div
            animate={{
              y: [0, -10, 0, -8, 0],
              x: [-2, 2, -2, 2, -2],
              rotate: [0, -1.2, 1.2, 0],
              scale: [1, 1.025, 1, 1.025, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="relative flex items-center justify-center"
          >
            <img
              src="/vrushti-photo.jpg"
              alt="Vrushti Shah — Walking Motion"
              className="h-[340px] w-full max-w-[280px] object-cover object-top sm:h-[380px] sm:max-w-[310px]"
            />

            {/* Ground Stride Shadow Pulse */}
            <motion.div
              animate={{
                scaleX: [0.7, 1.1, 0.75, 1.1, 0.7],
                opacity: [0.4, 0.8, 0.45, 0.8, 0.4],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-2 left-1/2 h-5 w-3/4 -translate-x-1/2 rounded-full bg-slate-950/90 blur-md"
            />
          </motion.div>

          {/* Name & Active Skill Overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
            <div className="flex items-center gap-1.5 text-xs font-extrabold text-emerald-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>Verified Marketer</span>
            </div>
            <h3 className="text-xl font-extrabold tracking-tight text-white drop-shadow-md">Vrushti Shah</h3>
            <div className="mt-1 flex items-center gap-1.5">
              <span className="text-xs font-bold text-slate-200">Active Focus:</span>
              <span className="rounded-full bg-emerald-500/25 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-300 border border-emerald-400/40">
                {activeSkill.title}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Orbiting 3D Skill Cards — SEQUENTIAL 1-BY-1 REVEAL & SPOTLIGHT */}
        {skills.map((skill, index) => {
          const Icon = skill.icon
          const isActive = index === activeSkillIndex

          return (
            <motion.div
              key={skill.title}
              onClick={() => {
                setActiveSkillIndex(index)
                setIsAutoPlaying(false)
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isActive ? 1 : 0.45,
                scale: isActive ? 1.15 : 0.92,
                y: isActive ? [-8, 4, -8] : [-4, 4, -4],
                rotate: isActive ? [-1, 1, -1] : 0,
              }}
              transition={{
                duration: 0.5,
                y: {
                  duration: isActive ? 3 : 5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
              }}
              style={{
                transform: `translateZ(${isActive ? skill.depth + 30 : skill.depth}px)`,
              }}
              className={`group absolute z-30 ${skill.pos} pointer-events-auto cursor-pointer`}
            >
              <div
                className={`flex items-center gap-3 rounded-2xl border p-2.5 shadow-2xl backdrop-blur-xl transition-all duration-300 ${
                  isActive
                    ? `${skill.borderColor} bg-slate-900 shadow-[0_0_30px_rgba(52,211,153,0.6)] ring-2 ring-emerald-400/50`
                    : "border-slate-800 bg-slate-950/80 hover:border-slate-600 hover:opacity-80"
                }`}
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                    isActive ? "bg-emerald-400 text-slate-950 font-bold" : skill.iconBg
                  } border border-white/20 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-4 w-4" strokeWidth={2.5} />
                </div>
                <div className="pr-1 text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-300">
                      {skill.tag}
                    </span>
                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,1)]" />
                    )}
                  </div>
                  <div className={`text-xs font-extrabold tracking-tight ${isActive ? "text-white" : "text-slate-300"}`}>
                    {skill.title}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}

        {/* Skill Spotlight 1-by-1 Navigation Bar at Bottom of 3D Card */}
        <div
          style={{ transform: "translateZ(40px)" }}
          className="z-20 mt-6 flex w-full items-center justify-between border-t border-slate-800/90 pt-3"
        >
          <div className="flex items-center gap-1.5">
            {skills.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setActiveSkillIndex(i)
                  setIsAutoPlaying(false)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeSkillIndex
                    ? "w-6 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                    : "w-2 bg-slate-700 hover:bg-slate-500"
                }`}
                aria-label={`Focus Skill ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
            <span>Skill {activeSkillIndex + 1} of {skills.length}</span>
            <button
              type="button"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-emerald-400 hover:border-emerald-400"
              title={isAutoPlaying ? "Pause 1-by-1 Autoplay" : "Play 1-by-1 Autoplay"}
            >
              {isAutoPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveSkillIndex((prev) => (prev - 1 + skills.length) % skills.length)
                setIsAutoPlaying(false)
              }}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-white hover:border-slate-500"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveSkillIndex((prev) => (prev + 1) % skills.length)
                setIsAutoPlaying(false)
              }}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-white hover:border-slate-500"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
