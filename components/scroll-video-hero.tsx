"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion"
import {
  Play,
  Pause,
  Share2,
  Search,
  MonitorSmartphone,
  Target,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Film,
} from "lucide-react"

const skillMilestones = [
  {
    id: 1,
    title: "Social Media Marketing",
    tag: "SMM & Viral Reels",
    desc: "Scroll-stopping content strategy & community building that converts followers into clients.",
    icon: Share2,
    metric: "+184% Audience Reach",
    range: [0.08, 0.32],
    glow: "rgba(16, 185, 129, 0.4)",
    borderColor: "border-emerald-400",
    badgeBg: "bg-emerald-500/20 text-emerald-300",
    pos: "top-[10%] left-[2%] md:top-[12%] md:left-[5%]",
  },
  {
    id: 2,
    title: "Search Engine Optimization",
    tag: "SEO & Google #1",
    desc: "Technical SEO overhaul & targeted keyword strategy driving rank #1 organic search traffic.",
    icon: Search,
    metric: "#1 Page 1 Google Rank",
    range: [0.30, 0.58],
    glow: "rgba(168, 85, 247, 0.4)",
    borderColor: "border-purple-400",
    badgeBg: "bg-purple-500/20 text-purple-300",
    pos: "top-[25%] right-[2%] md:top-[22%] md:right-[5%]",
  },
  {
    id: 3,
    title: "Web Design & UI/UX",
    tag: "Modern 60fps Sites",
    desc: "Lightning fast, conversion-focused websites designed to capture and close incoming leads.",
    icon: MonitorSmartphone,
    metric: "High Converting UI",
    range: [0.55, 0.80],
    glow: "rgba(59, 130, 246, 0.4)",
    borderColor: "border-blue-400",
    badgeBg: "bg-blue-500/20 text-blue-300",
    pos: "bottom-[25%] left-[2%] md:bottom-[22%] md:left-[5%]",
  },
  {
    id: 4,
    title: "Meta & IG Paid Campaigns",
    tag: "Targeted Ads & ROI",
    desc: "Data-driven ad creatives, retargeting funnels, and measurable campaign ROI.",
    icon: Target,
    metric: "3.5x Ad Return",
    range: [0.75, 0.98],
    glow: "rgba(236, 72, 153, 0.4)",
    borderColor: "border-pink-400",
    badgeBg: "bg-pink-500/20 text-pink-300",
    pos: "bottom-[12%] right-[2%] md:bottom-[10%] md:right-[5%]",
  },
]

export function ScrollVideoHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoProgress, setVideoProgress] = useState(0)

  // Track scroll progress inside this 250vh section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
  })

  // Scrub video frames on scroll
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    setVideoProgress(latest)
    if (videoRef.current && videoRef.current.duration) {
      // Scrub video to match scroll percentage
      const targetTime = latest * videoRef.current.duration
      if (!isNaN(targetTime) && isFinite(targetTime)) {
        videoRef.current.currentTime = targetTime
      }
    }
  })

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <section ref={containerRef} className="relative h-[250vh] w-full">
      {/* Sticky Viewport Container */}
      <div className="sticky top-16 flex h-[88vh] w-full items-center justify-center overflow-hidden px-4 md:px-8">
        <div className="relative flex w-full max-w-6xl items-center justify-center">
          
          {/* Section Header overlay */}
          <div className="absolute top-2 z-20 flex items-center gap-2 rounded-full border border-white/30 bg-slate-900/80 px-4 py-1.5 backdrop-blur-md shadow-xl">
            <Film className="h-4 w-4 text-emerald-400 animate-pulse" />
            <span className="text-xs font-extrabold tracking-wider uppercase text-white">
              3D Scroll Video & Skill Timeline
            </span>
            <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-extrabold text-emerald-300">
              {Math.round(videoProgress * 100)}%
            </span>
          </div>

          {/* Central 3D Video Glass Container */}
          <motion.div
            style={{
              transformStyle: "preserve-3d",
            }}
            className="group relative mt-10 flex aspect-[9/16] w-full max-w-[320px] flex-col items-center justify-center overflow-hidden rounded-3xl border-2 border-white/40 bg-slate-950 p-2 shadow-2xl backdrop-blur-xl sm:max-w-[380px] md:max-w-[420px]"
          >
            {/* Glowing Border aura */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-purple-500/20 to-blue-500/20 opacity-70" />

            {/* Video Element */}
            <video
              ref={videoRef}
              src="/portfolio-video.mp4"
              poster="/vrushti-photo.jpg"
              playsInline
              muted
              className="h-full w-full rounded-2xl object-cover"
            />

            {/* Video Overlay Info */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-5 text-left">
              <div className="flex items-center gap-1.5 text-xs font-extrabold text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                <span>Vrushti Shah Reel Showcase</span>
              </div>
              <h3 className="text-xl font-extrabold tracking-tight text-white">
                Scroll to Play 3D Timeline
              </h3>
              <p className="mt-1 text-xs font-semibold text-slate-300">
                Scroll down to scrub video & reveal skills
              </p>

              {/* Progress Bar */}
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 transition-all duration-150"
                  style={{ width: `${videoProgress * 100}%` }}
                />
              </div>
            </div>

            {/* Manual Play/Pause Control Button */}
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="absolute z-30 flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-slate-900/80 text-white shadow-2xl backdrop-blur-md transition-transform duration-300 hover:scale-110 hover:bg-emerald-500 hover:text-slate-950"
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-0.5" />}
            </button>
          </motion.div>

          {/* Synchronized 3D Skill Milestone Pop-up Cards */}
          {skillMilestones.map((skill) => {
            const Icon = skill.icon
            // Check if current scroll progress is inside this skill's active window
            const isActive =
              videoProgress >= skill.range[0] && videoProgress <= skill.range[1]

            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={
                  isActive
                    ? { opacity: 1, scale: 1, y: 0 }
                    : { opacity: 0, scale: 0.85, y: 15 }
                }
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`absolute z-30 ${skill.pos} pointer-events-none transition-all duration-300`}
              >
                <div
                  className={`pointer-events-auto flex max-w-[260px] flex-col rounded-2xl border-2 ${skill.borderColor} bg-slate-950/90 p-4 shadow-2xl backdrop-blur-xl md:max-w-[300px]`}
                  style={{
                    boxShadow: `0 12px 35px -5px ${skill.glow}`,
                  }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 ${skill.badgeBg} border border-white/10`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </div>
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${skill.badgeBg}`}>
                      {skill.tag}
                    </span>
                  </div>

                  <h4 className="mt-3 font-display text-sm font-extrabold tracking-tight text-white">
                    {skill.title}
                  </h4>
                  <p className="mt-1 text-[11px] font-semibold leading-relaxed text-slate-200">
                    {skill.desc}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 border-t border-slate-800 pt-2.5 text-[11px] font-extrabold text-emerald-400">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>{skill.metric}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
