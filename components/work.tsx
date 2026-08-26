"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ExternalLink, CheckCircle2, TrendingUp } from "lucide-react"

const projects = [
  {
    title: "Dream Power Realty",
    category: "Web Development",
    result: "Live Site ↗",
    image: "/work-dreampower-realty.jpg",
    desc: "High-converting real estate platform for GUJRERA plots & luxury apartments in Science City.",
    url: "https://www.dreampowerrealty.com",
    badgeBg: "bg-emerald-500/25 text-emerald-300 border-emerald-400/40",
  },
  {
    title: "Vandit Gandhi Physio",
    category: "Web UI/UX",
    result: "Live Site ↗",
    image: "/work-vandit-physio.jpg",
    desc: "Healthcare & sports rehab platform featuring online session bookings & patient care UI.",
    url: "https://vandit-gandhi-physiotherapy.vercel.app/",
    badgeBg: "bg-purple-500/25 text-purple-300 border-purple-400/40",
  },
  {
    title: "SMM Brand Campaign",
    category: "Social Media (SMM)",
    result: "+184% Reach",
    image: "/work-social-campaign.png",
    desc: "Targeted SMM content strategy, viral reels, and paid campaigns tripling audience reach.",
    url: "",
    badgeBg: "bg-blue-500/25 text-blue-300 border-blue-400/40",
  },
  {
    title: "Local SEO & Ranking",
    category: "SEO Strategy",
    result: "#1 Google Rank",
    image: "/work-seo-dashboard.png",
    desc: "Technical SEO overhaul and keyword optimization bringing core terms to Google Page 1.",
    url: "",
    badgeBg: "bg-amber-500/25 text-amber-300 border-amber-400/40",
  },
]

function Project3DCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 25 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 25 })

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
      transition={{ duration: 0.5, delay: index * 0.12 }}
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
        className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-700/90 bg-slate-950/85 p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-slate-500"
      >
        {/* Project Image Frame with 3D Pop Out */}
        <div
          style={{ transform: "translateZ(30px)" }}
          className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-md"
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-108"
          />

          {/* Category Tag */}
          <span className="absolute left-3 top-3 rounded-full border border-slate-700 bg-slate-950/90 px-3 py-1 text-[10px] font-extrabold text-white shadow-md backdrop-blur-md">
            {project.category}
          </span>

          {/* Result Tag */}
          {project.result && (
            <span
              className={`absolute bottom-3 right-3 flex items-center gap-1 rounded-full border px-3 py-1 text-[10px] font-extrabold shadow-md backdrop-blur-md ${project.badgeBg}`}
            >
              <TrendingUp className="h-3 w-3" />
              <span>{project.result}</span>
            </span>
          )}
        </div>

        {/* Content Details */}
        <div style={{ transform: "translateZ(40px)" }} className="mt-5 flex flex-1 flex-col justify-between gap-3 p-1">
          <div>
            <h3 className="font-display text-lg font-extrabold tracking-tight text-white drop-shadow-sm">
              {project.title}
            </h3>
            <p className="mt-2 text-xs font-semibold leading-relaxed text-slate-200">
              {project.desc}
            </p>
          </div>

          {/* Action Link */}
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-between rounded-xl border border-slate-700 bg-white px-4 py-2.5 text-xs font-extrabold text-slate-950 shadow-md transition-transform duration-300 hover:scale-[1.02] hover:bg-emerald-400 hover:text-slate-950"
            >
              <span>Visit Live Project</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : (
            <div className="mt-2 inline-flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-2.5 text-xs font-bold text-slate-200">
              <span>Client Growth Campaign</span>
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            </div>
          )}
        </div>
      </motion.article>
    </motion.div>
  )
}

export function Work() {
  return (
    <section id="work" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
              Selected Work
            </div>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] md:text-5xl">
              Proven Results & Client Showcase
            </h2>
          </div>
          <p className="max-w-sm text-sm font-bold leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Real client success stories delivered across Web Development, SMM, and Search Engine Optimization.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => (
            <Project3DCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
