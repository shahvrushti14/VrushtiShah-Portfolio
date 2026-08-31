"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import {
  Share2,
  Search,
  MonitorSmartphone,
  Target,
  BarChart3,
  Sparkles,
  CheckCircle2,
  Play,
  Pause,
  RotateCcw,
  Footprints,
} from "lucide-react"

const skillsSequence = [
  {
    id: "smm",
    step: "01",
    title: "Social Media Marketing",
    subtitle: "Viral Reels, Content & Meta Ads",
    metric: "+184% Reach",
    icon: Share2,
    color: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderColor: "border-emerald-400",
    glowColor: "rgba(52, 211, 153, 0.4)",
    badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-400/40",
    iconBg: "bg-emerald-500/20 text-emerald-400",
    position: "top-4 left-[-15px] sm:left-[-35px]",
    depth: 55,
  },
  {
    id: "seo",
    step: "02",
    title: "Search Engine Optimization",
    subtitle: "Google Page 1 Rankings & Keywords",
    metric: "#1 Rank",
    icon: Search,
    color: "from-purple-500/20 via-violet-500/10 to-transparent",
    borderColor: "border-purple-400",
    glowColor: "rgba(192, 132, 252, 0.4)",
    badgeBg: "bg-purple-500/20 text-purple-300 border-purple-400/40",
    iconBg: "bg-purple-500/20 text-purple-400",
    position: "top-[25%] right-[-15px] sm:right-[-40px]",
    depth: 65,
  },
  {
    id: "web",
    step: "03",
    title: "Web Design & UI/UX",
    subtitle: "Conversion-Focused 60fps Sites",
    metric: "High ROI UI",
    icon: MonitorSmartphone,
    color: "from-blue-500/20 via-indigo-500/10 to-transparent",
    borderColor: "border-blue-400",
    glowColor: "rgba(96, 165, 250, 0.4)",
    badgeBg: "bg-blue-500/20 text-blue-300 border-blue-400/40",
    iconBg: "bg-blue-500/20 text-blue-400",
    position: "top-[50%] left-[-15px] sm:left-[-40px]",
    depth: 60,
  },
  {
    id: "ads",
    step: "04",
    title: "Meta & Instagram Ads",
    subtitle: "Targeted Paid Campaigns & Leads",
    metric: "3.5x Lift",
    icon: Target,
    color: "from-pink-500/20 via-rose-500/10 to-transparent",
    borderColor: "border-pink-400",
    glowColor: "rgba(244, 114, 182, 0.4)",
    badgeBg: "bg-pink-500/20 text-pink-300 border-pink-400/40",
    iconBg: "bg-pink-500/20 text-pink-400",
    position: "bottom-[22%] right-[-15px] sm:right-[-35px]",
    depth: 70,
  },
  {
    id: "analytics",
    step: "05",
    title: "Growth Analytics",
    subtitle: "Data-Driven Performance Scaling",
    metric: "90% Retain",
    icon: BarChart3,
    color: "from-amber-500/20 via-orange-500/10 to-transparent",
    borderColor: "border-amber-400",
    glowColor: "rgba(251, 191, 36, 0.4)",
    badgeBg: "bg-amber-500/20 text-amber-300 border-amber-400/40",
    iconBg: "bg-amber-500/20 text-amber-400",
    position: "bottom-[-10px] left-[10%] sm:left-[15%]",
    depth: 50,
  },
]

export function Walking3DSkills() {
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  // Auto-advance walking sequence
  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % skillsSequence.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [isPlaying])

  // Mouse tilt tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 20 })

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

  const currentSkill = skillsSequence[activeStep]

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex w-full max-w-md flex-col items-center justify-center p-2 sm:p-4 md:max-w-xl [perspective:1000px]"
    >
      {/* Top 3D Walk Controls & Sequence Progress Header */}
      <div className="z-40 mb-3 flex w-full items-center justify-between rounded-2xl border border-slate-700/80 bg-slate-900/90 p-3 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
            <Footprints className="h-4 w-4 animate-bounce" />
          </span>
          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400">
              3D Walk Mode • Step {currentSkill.step} of 05
            </div>
            <div className="text-xs font-extrabold text-white">
              {currentSkill.title}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setIsPlaying((v) => !v)}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-slate-200 transition-transform hover:scale-105 hover:bg-slate-700"
            title={isPlaying ? "Pause 3D Walk" : "Play 3D Walk"}
          >
            {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          </button>
          <button
            type="button"
            onClick={() => setActiveStep(0)}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-slate-200 transition-transform hover:scale-105 hover:bg-slate-700"
            title="Restart Walk Sequence"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* Main 3D Stage Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative flex w-full flex-col items-center rounded-3xl border border-slate-700/90 bg-slate-950/90 p-5 shadow-2xl backdrop-blur-2xl transition-all duration-300 md:p-7"
      >
        {/* Animated Moving 3D Floor Grid Lines (Simulates Forward Walking) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] [transform:rotateX(60deg)_translateY(-50%)] animate-[pulse_4s_ease-in-out_infinite]" />
        </div>

        {/* Dynamic Halo Spotlight */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-60 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 40%, ${currentSkill.glowColor}, transparent 75%)`,
          }}
        />

        {/* 3D Walking Persona (Vrushti Cutout Image with Stride Motion Physics) */}
        <motion.div
          style={{ transform: "translateZ(70px)" }}
          className="group relative z-20 mt-2 flex flex-col items-center"
        >
          {/* Stride Motion Keyframes (Vertical bobbing & walking stride sway) */}
          <motion.div
            animate={{
              y: isPlaying ? [0, -8, 0, -8, 0] : 0,
              rotate: isPlaying ? [-1.5, 1.5, -1.5] : 0,
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative overflow-hidden rounded-2xl border-2 border-slate-600 bg-slate-950 shadow-2xl transition-all duration-300"
          >
            {/* Shimmer Ambient Gradient */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-80" />

            <img
              src="/vrushti-photo.jpg"
              alt="Vrushti Shah — 3D Persona"
              className="h-[350px] w-full max-w-[280px] object-cover object-top sm:h-[390px] sm:max-w-[310px]"
            />

            {/* Live Name Overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
              <div className="flex items-center gap-1.5 text-xs font-extrabold text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>3D Walking Persona</span>
              </div>
              <h3 className="text-xl font-extrabold tracking-tight text-white">Vrushti Shah</h3>
              <p className="text-xs font-semibold text-slate-200">
                SEO • Social Media Marketing • Web Design
              </p>
            </div>
          </motion.div>

          {/* Dynamic Walking Stride Shadow under Feet */}
          <motion.div
            animate={{
              scaleX: isPlaying ? [1, 0.85, 1, 0.85, 1] : 1,
              opacity: isPlaying ? [0.6, 0.8, 0.6, 0.8, 0.6] : 0.7,
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-2 h-3 w-44 rounded-full bg-slate-950/90 blur-md shadow-[0_0_20px_rgba(0,0,0,0.9)]"
          />
        </motion.div>

        {/* Sequential 3D Skill Pop-up Badges ("Ek Ek Karke Skills") */}
        {skillsSequence.map((skill, index) => {
          const Icon = skill.icon
          const isActive = activeStep === index

          return (
            <motion.div
              key={skill.id}
              initial={{ scale: 0.8, opacity: 0.4 }}
              animate={{
                scale: isActive ? 1.08 : 0.9,
                opacity: isActive ? 1 : 0.45,
                y: isActive ? [0, -5, 0] : 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              style={{
                transform: `translateZ(${isActive ? skill.depth + 20 : skill.depth}px)`,
              }}
              onClick={() => setActiveStep(index)}
              className={`group absolute z-30 ${skill.position} cursor-pointer pointer-events-auto`}
            >
              <div
                className={`flex items-center gap-3 rounded-2xl border ${
                  isActive ? `${skill.borderColor} bg-slate-900/95 shadow-2xl` : "border-slate-800 bg-slate-950/80 shadow-md opacity-60"
                } p-2.5 backdrop-blur-xl transition-all duration-300`}
                style={{
                  boxShadow: isActive ? `0 12px 30px -5px ${skill.glowColor}` : "none",
                }}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${skill.iconBg} border border-white/10 transition-transform duration-300 ${
                    isActive ? "scale-110 rotate-6" : ""
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <div className="pr-1 text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                      Step {skill.step}
                    </span>
                    <span className={`rounded-full border px-2 py-0.5 text-[9px] font-extrabold ${skill.badgeBg}`}>
                      {skill.metric}
                    </span>
                  </div>
                  <div className={`text-xs font-extrabold tracking-tight ${isActive ? "text-white" : "text-slate-300"}`}>
                    {skill.title}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}

        {/* Bottom Interactive Step Switcher Pills */}
        <div
          style={{ transform: "translateZ(40px)" }}
          className="z-30 mt-6 flex flex-wrap items-center justify-center gap-2 border-t border-slate-800/80 pt-4"
        >
          {skillsSequence.map((skill, index) => {
            const isActive = activeStep === index
            return (
              <button
                key={skill.id}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-[11px] font-extrabold transition-all duration-300 ${
                  isActive
                    ? "border-emerald-400 bg-emerald-500/20 text-emerald-300 shadow-md scale-105"
                    : "border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                <span>{skill.step}.</span>
                <span>{skill.title.split(" ")[0]}</span>
              </button>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
