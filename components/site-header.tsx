"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* 1. ScrollTide Top Notification Banner */}
      <div className="relative z-50 w-full bg-[#46b7ff] text-[#04121f]">
        <div className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center text-[12px] font-medium sm:text-[13px]">
          <span className="hidden sm:inline-flex h-1.5 w-1.5 rounded-full bg-[#04121f] animate-pulse" />
          <span className="font-mono uppercase tracking-wide">DIGITAL MARKETING & WEB GROWTH</span>
          <span className="font-semibold">— Available for New Projects</span>
          <a
            href="#contact"
            className="ml-1 rounded-full bg-[#04121f] px-3 py-0.5 text-xs font-semibold text-[#8bf3e6] transition hover:bg-[#04121f]/85"
          >
            Start a Project →
          </a>
        </div>
      </div>

      {/* 2. ScrollTide Sticky Glass Header */}
      <header className="sticky top-0 z-40 w-full">
        <div className="border-b border-white/10 bg-[#07080a]/60 backdrop-blur-md transition-colors duration-300">
          <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
            {/* Logo Monogram */}
            <a href="#top" className="group flex items-center gap-2.5">
              <motion.span
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-[9px] bg-black ring-1 ring-white/20 shadow-md"
              >
                <img
                  src="/logo-vs-full.png"
                  alt="Vrushti Shah"
                  className="h-full w-full object-cover p-1"
                />
              </motion.span>
              <span className="text-[17px] font-bold tracking-tight text-[#f4f5f6]">
                vrushti<span className="text-tide">.shah</span>
              </span>
            </a>

            {/* Nav Pill Links */}
            <div className="hidden items-center gap-1 md:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-full px-3.5 py-1.5 text-sm font-medium text-[#94a3b8] transition-colors hover:text-[#f4f5f6]"
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Action CTA Button */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden rounded-full bg-[#f4f5f6] px-4.5 py-2 text-sm font-semibold text-[#07080a] transition hover:bg-white sm:inline-flex"
              >
                Start a Project →
              </a>

              <button
                type="button"
                aria-label="Toggle Menu"
                onClick={() => setOpen((v) => !v)}
                className="flex h-9 w-9 items-center justify-center rounded-full text-[#f4f5f6] md:hidden"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation Drawer */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border-b border-white/10 bg-[#07080a]/95 p-4 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-base font-semibold text-[#f4f5f6] hover:text-[#46b7ff]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#f4f5f6] px-5 py-3 text-center text-sm font-semibold text-[#07080a]"
              >
                Start a Project →
              </a>
            </nav>
          </motion.div>
        )}
      </header>
    </>
  )
}
