"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, CheckCircle2, ArrowRight } from "lucide-react"

const categories = ["All", "Web Development", "Social Media (SMM)", "SEO Strategy"]

const projects = [
  {
    title: "Dream Power Realty",
    category: "Web Development",
    result: "Live Site ↗",
    image: "/work-dreampower-realty.jpg",
    desc: "High-converting real estate platform for GUJRERA plots & luxury apartments in Science City.",
    url: "https://www.dreampowerrealty.com",
    badge: "Premium Build",
  },
  {
    title: "Vandit Gandhi Physio",
    category: "Web Development",
    result: "Live Site ↗",
    image: "/work-vandit-physio.jpg",
    desc: "Healthcare & sports rehab platform featuring online session bookings & patient care UI.",
    url: "https://vandit-gandhi-physiotherapy.vercel.app/",
    badge: "Featured UI",
  },
  {
    title: "SMM Brand Campaign",
    category: "Social Media (SMM)",
    result: "+184% Reach",
    image: "/work-social-campaign.png",
    desc: "Targeted SMM content strategy, viral reels, and paid campaigns tripling audience reach.",
    url: "",
    badge: "Viral Campaign",
  },
  {
    title: "Local SEO & Ranking",
    category: "SEO Strategy",
    result: "#1 Google Rank",
    image: "/work-seo-dashboard.png",
    desc: "Technical SEO overhaul and keyword optimization bringing core terms to Google Page 1.",
    url: "",
    badge: "Page 1 Dominance",
  },
]

export function Work() {
  const [activeTab, setActiveTab] = useState("All")

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab)

  return (
    <section id="work" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#8bf3e6]">
              {projects.length} Featured Case Studies & Builds
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#f4f5f6] sm:text-5xl">
              Proven Results & Client Showcase
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 sm:justify-end">
            {categories.map((cat) => {
              const isActive = activeTab === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                    isActive
                      ? "border-transparent bg-[#f4f5f6] text-[#07080a] shadow-md"
                      : "border-white/10 bg-white/5 text-[#94a3b8] hover:border-white/30 hover:text-[#f4f5f6]"
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* ScrollTide Article Grid */}
        <div className="grid grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProjects.map((project, i) => {
            const cardRef = useRef<HTMLDivElement>(null)

            const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
              if (!cardRef.current) return
              const rect = cardRef.current.getBoundingClientRect()
              const x = e.clientX - rect.left
              const y = e.clientY - rect.top
              cardRef.current.style.setProperty("--mouse-x", `${x}px`)
              cardRef.current.style.setProperty("--mouse-y", `${y}px`)
            }

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                ref={cardRef}
                onMouseMove={handleMouseMove}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0e1117] p-3.5 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30 hover:shadow-[0_18px_60px_-18px_rgba(70,183,255,0.35)]"
              >
                {/* Mouse Spotlight Glow */}
                <div className="card-glow" />

                {/* Media Image Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-black">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Result Badge Overlay */}
                  <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between p-3">
                    <span className="rounded-full border border-[#46b7ff]/40 bg-[#07080a]/80 px-3 py-1 text-[11px] font-semibold text-[#8bf3e6] backdrop-blur">
                      {project.result}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="mt-4 flex flex-1 flex-col justify-between gap-3 px-1">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-[16px] font-bold tracking-tight text-[#f4f5f6]">
                        {project.title}
                      </h3>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-mono uppercase text-[#64748b]">
                        {project.badge}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-[#94a3b8]">
                      {project.desc}
                    </p>
                  </div>

                  {/* Action Link */}
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center justify-between rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-[#f4f5f6] transition hover:bg-[#f4f5f6] hover:text-[#07080a]"
                    >
                      <span>Visit Live Project</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <div className="mt-2 inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-[#64748b]">
                      <span>Client Growth Campaign</span>
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#8bf3e6]" />
                    </div>
                  )}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
