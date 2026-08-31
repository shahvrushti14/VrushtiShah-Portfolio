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
    borderColor: "group-hover:border-[#8bf3e6]",
    glowColor: "rgba(139, 243, 230, 0.35)",
    iconBg: "bg-[#8bf3e6]/15 text-[#8bf3e6]",
    pos: "top-[-18px] left-[-20px] md:top-[-25px] md:left-[-40px]",
    floatDelay: 0,
    depth: 45,
  },
  {
    title: "Search Engine Optimization",
    tag: "SEO & Rankings",
    icon: Search,
    borderColor: "group-hover:border-[#46b7ff]",
    glowColor: "rgba(70, 183, 255, 0.35)",
    iconBg: "bg-[#46b7ff]/15 text-[#46b7ff]",
    pos: "top-[15%] right-[-25px] md:top-[12%] md:right-[-45px]",
    floatDelay: 1.2,
    depth: 55,
  },
  {
    title: "Web Design & UI",
    tag: "High Converting Sites",
    icon: MonitorSmartphone,
    borderColor: "group-hover:border-[#7c93ff]",
    glowColor: "rgba(124, 147, 255, 0.35)",
    iconBg: "bg-[#7c93ff]/15 text-[#7c93ff]",
    pos: "bottom-[28%] left-[-25px] md:bottom-[25%] md:left-[-45px]",
    floatDelay: 2.1,
    depth: 50,
  },
  {
    title: "Meta & IG Ads",
    tag: "Paid Campaigns & ROI",
    icon: Target,
    borderColor: "group-hover:border-[#46b7ff]",
    glowColor: "rgba(70, 183, 255, 0.35)",
    iconBg: "bg-[#46b7ff]/15 text-[#46b7ff]",
    pos: "bottom-[-20px] right-[-15px] md:bottom-[-25px] md:right-[-35px]",
    floatDelay: 0.7,
    depth: 60,
  },
  {
    title: "Analytics & Growth",
    tag: "Data Driven Strategy",
    icon: BarChart3,
    borderColor: "group-hover:border-[#8bf3e6]",
    glowColor: "rgba(139, 243, 230, 0.35)",
    iconBg: "bg-[#8bf3e6]/15 text-[#8bf3e6]",
    pos: "bottom-[-35px] left-[15%] md:bottom-[-40px] md:left-[20%]",
    floatDelay: 1.8,
    depth: 40,
  },
]

export function Interactive3DSkills() {
  const containerRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 })

  const spotX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), { stiffness: 200, damping: 25 })
  const spotY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), { stiffness: 200, damping: 25 })

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
      {/* Dynamic Ambient Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-10 rounded-full opacity-40 blur-3xl transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${spotX.get()}% ${spotY.get()}%, rgba(70, 183, 255, 0.35), rgba(139, 243, 230, 0.2) 50%, transparent 80%)`,
        }}
      />

      {/* Main 3D Card Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative flex w-full flex-col items-center rounded-3xl border border-white/10 bg-[#0e1117]/90 p-5 shadow-[0_18px_60px_-18px_rgba(70,183,255,0.3)] backdrop-blur-xl transition-all duration-300 md:p-7"
      >
        {/* Top Status Header */}
        <div
          style={{ transform: "translateZ(30px)" }}
          className="z-10 flex w-full items-center justify-between border-b border-white/10 pb-3"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8bf3e6] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#8bf3e6]" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#94a3b8]">
              3D Interactive Profile
            </span>
          </div>

          <div className="flex items-center gap-1.5 rounded-full border border-[#46b7ff]/30 bg-[#46b7ff]/10 px-3 py-1 text-[11px] font-semibold text-[#8bf3e6]">
            <Sparkles className="h-3 w-3" />
            <span>Digital Strategist</span>
          </div>
        </div>

        {/* Central Portrait Photo Frame */}
        <motion.div
          style={{ transform: "translateZ(60px)" }}
          className="group relative mt-4 overflow-hidden rounded-2xl border border-white/20 bg-black shadow-2xl transition-all duration-300"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#07080a] via-transparent to-transparent opacity-85" />

          <img
            src="/vrushti-photo.jpg"
            alt="Vrushti Shah"
            className="h-[340px] w-full max-w-[280px] object-cover object-top transition-transform duration-500 group-hover:scale-105 sm:h-[380px] sm:max-w-[310px]"
          />

          {/* Name & Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8bf3e6]">
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>Verified Marketer</span>
            </div>
            <h3 className="text-xl font-extrabold tracking-tight text-[#f4f5f6]">Vrushti Shah</h3>
            <p className="text-xs font-medium text-[#94a3b8]">
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
                className={`flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0e1117]/95 p-2.5 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 ${skill.borderColor}`}
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
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#64748b]">
                    {skill.tag}
                  </div>
                  <div className="text-xs font-bold tracking-tight text-[#f4f5f6]">
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
