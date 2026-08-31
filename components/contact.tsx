"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, ArrowUpRight, Send, Check, Sparkles } from "lucide-react"

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/vsdigital.in/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shah-vrushti-396169357/" },
]

const servicesList = [
  "Social Media Marketing (SMM)",
  "SEO & Search Optimization",
  "Web Design & Development",
]

export function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>(servicesList)
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    )
  }

  const mailSubject = encodeURIComponent(
    `Inquiry for ${selectedServices.length > 0 ? selectedServices.join(", ") : "Digital Marketing Services"}`
  )

  const mailBody = encodeURIComponent(
    `Hi Vrushti,\n\nName: ${name || "[Your Name]"}\n\nServices Required:\n${
      selectedServices.length > 0
        ? selectedServices.map((s) => `- ${s}`).join("\n")
        : "- All Services"
    }\n\nProject Details:\n${message || "[Type your project requirements here]"}\n\nBest regards,\n${name || ""}`
  )

  const mailToUrl = `mailto:shahvrushti426@gmail.com?subject=${mailSubject}&body=${mailBody}`

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/10 px-4 py-20 sm:px-6 sm:py-28">
      {/* Ambient Tide Light Sphere */}
      <div className="pointer-events-none absolute -bottom-20 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#46b7ff]/20 via-[#8bf3e6]/10 to-transparent blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#8bf3e6]">
          <Sparkles className="h-4 w-4" />
          <span>The Studio</span>
        </div>

        <h2 className="mt-4 max-w-4xl font-display text-4xl font-extrabold leading-[0.95] tracking-tight text-[#f4f5f6] sm:text-6xl">
          Want a site that moves like the tide? Let&apos;s build together.
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Left Column: Direct Email & Social Links */}
          <div className="flex flex-col gap-8">
            <p className="text-base leading-relaxed text-[#94a3b8]">
              Have a project in mind or need expert strategy in Social Media Marketing, SEO, or Web Design? 
              Select your required services and send a direct inquiry.
            </p>

            <motion.a
              whileHover={{ scale: 1.02 }}
              href={mailToUrl}
              className="group inline-flex items-center gap-3 w-fit rounded-full border border-[#46b7ff]/40 bg-[#46b7ff]/10 px-7 py-4 text-sm font-semibold text-[#8bf3e6] shadow-xl backdrop-blur transition-all hover:bg-[#46b7ff] hover:text-[#07080a]"
            >
              <Mail className="h-5 w-5" strokeWidth={2} />
              shahvrushti426@gmail.com
            </motion.a>

            <div className="flex flex-wrap gap-3 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold text-[#f4f5f6] transition-all hover:border-white/30 hover:bg-white hover:text-[#07080a]"
                >
                  {s.label}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: ScrollTide Studio Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              window.location.href = mailToUrl
            }}
            className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-[#0e1117] p-7 shadow-2xl backdrop-blur-xl md:p-9"
          >
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-[#8bf3e6]">
                Select Services Needed:
              </label>
              <div className="mt-3 flex flex-wrap gap-2">
                {servicesList.map((service) => {
                  const isSelected = selectedServices.includes(service)
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold transition-all ${
                        isSelected
                          ? "border-transparent bg-[#f4f5f6] text-[#07080a]"
                          : "border-white/10 bg-white/5 text-[#94a3b8] hover:border-white/30 hover:text-[#f4f5f6]"
                      }`}
                    >
                      {isSelected && <Check className="h-3.5 w-3.5 text-[#07080a]" />}
                      {service}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="user-name" className="text-xs font-mono uppercase tracking-wider text-[#94a3b8]">
                Your Name
              </label>
              <input
                id="user-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-xs font-semibold text-[#f4f5f6] placeholder-[#64748b] outline-none transition focus:border-[#46b7ff]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="user-message" className="text-xs font-mono uppercase tracking-wider text-[#94a3b8]">
                Project Message / Requirements
              </label>
              <textarea
                id="user-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your brand goals, target audience, or timeline..."
                className="resize-none rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-xs font-semibold text-[#f4f5f6] placeholder-[#64748b] outline-none transition focus:border-[#46b7ff]"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#f4f5f6] px-6 py-4 text-sm font-bold text-[#07080a] shadow-xl transition hover:bg-white"
            >
              <Send className="h-4 w-4" />
              Send Project Inquiry
            </motion.button>
          </form>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 text-xs font-semibold text-[#64748b] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-[9px] bg-black ring-1 ring-white/20">
              <img src="/logo-vs-full.png" alt="Vrushti Shah" className="h-full w-full object-cover p-1" />
            </span>
            <span className="text-sm font-bold text-[#f4f5f6]">vrushti.shah</span>
          </div>
          <p className="text-[#94a3b8]">Ahmedabad, Gujarat · © {new Date().getFullYear()} Vrushti Shah</p>
        </div>
      </div>
    </footer>
  )
}
