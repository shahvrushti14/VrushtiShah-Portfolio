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
    <footer id="contact" className="relative overflow-hidden px-5 py-24 text-white md:px-8 md:py-32">
      {/* Dynamic Background Ambient Light Mesh */}
      <div className="pointer-events-none absolute -bottom-20 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-t from-emerald-500/20 via-purple-500/10 to-transparent blur-[140px]" />

      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-emerald-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          <Sparkles className="h-4 w-4" />
          <span>Let&apos;s Work Together</span>
        </div>

        <h2 className="mt-4 max-w-4xl font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] md:text-7xl">
          Ready to Scale Your Brand to New Heights?
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Left Column: Direct Email & Social Links */}
          <div className="flex flex-col gap-8">
            <p className="text-base font-semibold leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Have a project in mind or need expert strategy in Social Media Marketing, SEO, or Web Design? 
              Select your required services and send a direct email.
            </p>

            <motion.a
              whileHover={{ scale: 1.03 }}
              href={mailToUrl}
              className="group inline-flex items-center gap-3 w-fit rounded-2xl border border-emerald-400/50 bg-emerald-500/20 px-7 py-4 text-base font-extrabold text-emerald-300 shadow-2xl backdrop-blur-md transition-colors hover:bg-emerald-400 hover:text-slate-950"
            >
              <Mail className="h-5 w-5" strokeWidth={2.2} />
              shahvrushti426@gmail.com
            </motion.a>

            <div className="flex flex-wrap gap-3 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-950/85 px-5 py-3 text-xs font-extrabold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-slate-950"
                >
                  {s.label}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Interactive Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              window.location.href = mailToUrl
            }}
            className="flex flex-col gap-6 rounded-3xl border border-slate-700/90 bg-slate-950/85 p-7 shadow-2xl backdrop-blur-xl md:p-9"
          >
            <div>
              <label className="text-xs font-extrabold uppercase tracking-wider text-emerald-300">
                Select Services Needed:
              </label>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {servicesList.map((service) => {
                  const isSelected = selectedServices.includes(service)
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`inline-flex items-center gap-1.5 rounded-xl border px-4 py-2.5 text-xs font-extrabold transition-all duration-300 ${
                        isSelected
                          ? "border-emerald-400 bg-emerald-500/25 text-emerald-300 shadow-md scale-105"
                          : "border-slate-800 bg-slate-900/90 text-slate-200 hover:border-slate-700 hover:text-white"
                      }`}
                    >
                      {isSelected && <Check className="h-3.5 w-3.5 text-emerald-400" />}
                      {service}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="user-name" className="text-xs font-extrabold uppercase tracking-wider text-slate-200">
                Your Name
              </label>
              <input
                id="user-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 text-xs font-extrabold text-white placeholder-slate-400 outline-none transition-all focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="user-message" className="text-xs font-extrabold uppercase tracking-wider text-slate-200">
                Project Message / Requirements
              </label>
              <textarea
                id="user-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your brand goals, target audience, or timeline..."
                className="resize-none rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 text-xs font-extrabold text-white placeholder-slate-400 outline-none transition-all focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 px-6 py-4 text-sm font-extrabold text-slate-950 shadow-2xl transition-transform hover:shadow-emerald-400/30"
            >
              <Send className="h-4 w-4" />
              Send Direct Email Message
            </motion.button>
          </form>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-slate-800/90 pt-8 text-xs font-extrabold text-slate-200 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            {/* 3D Pop-Pop Footer Logo */}
            <motion.div
              whileHover={{ scale: 1.12, rotate: [0, -3, 3, 0] }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -3, 0] }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                scale: { type: "spring", stiffness: 400, damping: 15 },
              }}
              className="rounded-2xl border border-white/60 bg-white p-2.5 px-4 shadow-xl flex items-center justify-center cursor-pointer"
            >
              <img
                src="/logo-vs-full.png"
                alt="Vrushti Shah — Digital Marketing | Web Development"
                className="h-8 w-auto object-contain"
              />
            </motion.div>
          </div>
          <p className="text-slate-200 font-extrabold">Ahmedabad, Gujarat · © {new Date().getFullYear()} Vrushti Shah</p>
        </div>
      </div>
    </footer>
  )
}
