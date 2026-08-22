"use client"

import { useState } from "react"
import { Mail, ArrowUpRight, Send, Check } from "lucide-react"

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/vrushtis14/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shah-vrushti-396169357/" },
]

const servicesList = [
  "Social Media Marketing (SMM)",
  "SEO & Search Optimization",
  "Web Design & Development",
]

export function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Social Media Marketing (SMM)",
  ])
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
    <footer id="contact" className="border-t border-border/80 bg-secondary/20 px-5 py-20 text-foreground md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Let&apos;s work together</p>

        <h2 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance text-foreground md:text-8xl">
          Ready to grow your brand?
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Left Column: Direct Email & Social Links */}
          <div className="flex flex-col gap-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              Have a project in mind or need expert help with Social Media Marketing, SEO, or Web Design? 
              Select your required services and send a direct email.
            </p>

            <a
              href={mailToUrl}
              className="group inline-flex items-center gap-3 w-fit rounded-full bg-foreground px-7 py-4 text-base font-bold text-background transition-transform hover:scale-[1.03]"
            >
              <Mail className="h-5 w-5" strokeWidth={2} />
              shahvrushti426@gmail.com
            </a>

            <div className="flex flex-wrap gap-x-4 gap-y-3 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded-full border border-foreground/20 bg-background px-5 py-2.5 text-sm font-bold text-foreground shadow-sm transition-all hover:bg-foreground hover:text-background"
                >
                  {s.label}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Direct Message Form with Pre-typed Services */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              window.location.href = mailToUrl
            }}
            className="flex flex-col gap-5 rounded-3xl border border-border/80 bg-background p-6 shadow-md md:p-8"
          >
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
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
                      className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-bold transition-all ${
                        isSelected
                          ? "border-foreground bg-foreground text-background"
                          : "border-border bg-secondary/30 text-foreground hover:border-foreground/50"
                      }`}
                    >
                      {isSelected && <Check className="h-3.5 w-3.5" />}
                      {service}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="user-name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Your Name
              </label>
              <input
                id="user-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground outline-none ring-foreground/20 focus:ring-2"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="user-message" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Project Message / Requirements
              </label>
              <textarea
                id="user-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your brand goals, target audience, or requirements..."
                className="resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground outline-none ring-foreground/20 focus:ring-2"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-sm font-bold text-background transition-transform hover:scale-[1.02]"
            >
              <Send className="h-4 w-4" />
              Send Direct Email Message
            </button>
          </form>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-foreground/15 pt-8 text-sm text-foreground md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-white p-2.5 px-4 shadow-sm border border-slate-200 flex items-center justify-center">
              <img
                src="/logo-vs-full.png"
                alt="Vrushti Shah — Digital Marketing | Web Development"
                className="h-9 md:h-10 w-auto object-contain"
              />
            </div>
          </div>
          <p className="font-semibold text-foreground">Ahmedabad, Gujarat · © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
