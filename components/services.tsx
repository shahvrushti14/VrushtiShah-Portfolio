"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Share2, Search, MonitorSmartphone, CheckCircle2, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    tag: "SMM & Meta Ads",
    desc: "Content that stops the scroll. I plan, create, and manage high-converting social campaigns that build active brand communities.",
    points: [
      "Viral content calendars & reels",
      "Instagram, LinkedIn & Meta Ads",
      "Community engagement & growth",
    ],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    glow: "rgba(16, 185, 129, 0.35)",
    borderGlow: "group-hover:border-emerald-400",
    badgeBg: "bg-emerald-500/25 text-emerald-300",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    tag: "SEO & Google #1",
    desc: "Get found by people searching for your services. On-page, technical, and content SEO that secures Page 1 Google rankings.",
    points: [
      "Keyword & competitor research",
      "On-page & technical SEO fixes",
      "High-converting search content",
    ],
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    glow: "rgba(168, 85, 247, 0.35)",
    borderGlow: "group-hover:border-purple-400",
    badgeBg: "bg-purple-500/25 text-purple-300",
  },
  {
    icon: MonitorSmartphone,
    title: "Web Design & UI/UX",
    tag: "Modern & Fast Sites",
    desc: "Fast, modern, conversion-focused websites. UI designs built to turn casual visitors into paying leads across all devices.",
    points: [
      "Landing pages & full site builds",
      "Responsive 60fps UI/UX",
      "SEO-optimized & lightning fast",
    ],
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    glow: "rgba(59, 130, 246, 0.35)",
    borderGlow: "group-hover:border-blue-400",
    badgeBg: "bg-blue-500/25 text-blue-300",
  },
]

function Service3DCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const Icon = service.icon

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 25 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 25 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative [perspective:1000px]"
    >
      <motion.article
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`relative flex h-full flex-col rounded-3xl border border-slate-700/90 bg-slate-950/85 p-7 shadow-2xl backdrop-blur-xl transition-all duration-300 ${service.borderGlow}`}
      >
        {/* Glow backdrop behind card */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${service.glow}, transparent 75%)`,
          }}
        />

        {/* Top Header inside card */}
        <div style={{ transform: "translateZ(30px)" }} className="flex items-center justify-between">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl ${service.badgeBg} border border-white/20 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
          >
            <Icon className="h-7 w-7" strokeWidth={2.2} />
          </div>
          <span className="rounded-full border border-slate-700 bg-slate-900/90 px-3.5 py-1 text-[11px] font-extrabold tracking-wider uppercase text-white shadow-sm">
            {service.tag}
          </span>
        </div>

        {/* Title & Description with 3D Depth */}
        <div style={{ transform: "translateZ(40px)" }} className="mt-6 flex-1">
          <h3 className="font-display text-2xl font-extrabold tracking-tight text-white drop-shadow-sm">
            {service.title}
          </h3>
          <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-200">
            {service.desc}
          </p>

          <ul className="mt-6 flex flex-col gap-2.5 border-t border-slate-800/90 pt-6">
            {service.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-xs font-bold text-slate-100">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <div style={{ transform: "translateZ(35px)" }} className="mt-8 pt-2">
          <a
            href="#contact"
            className="group/btn flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-xs font-extrabold text-white shadow-md transition-all duration-300 hover:bg-emerald-400 hover:text-slate-950"
          >
            <span>Discuss {service.title}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </div>
      </motion.article>
    </motion.div>
  )
}

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
              What I do
            </div>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] md:text-6xl">
              Services built for measurable growth
            </h2>
          </div>
          <p className="max-w-sm text-sm font-bold leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Three core digital capabilities working together to maximize reach, search authority, and sales conversions.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((s, i) => (
            <Service3DCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
