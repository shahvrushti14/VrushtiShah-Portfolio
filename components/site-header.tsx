"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, Menu, X, ArrowUpRight } from "lucide-react"

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-6xl px-4 transition-all duration-300">
      <div className="relative flex h-16 items-center justify-between rounded-full border border-white/40 bg-white/70 px-4 shadow-xl backdrop-blur-xl transition-all duration-300 dark:border-slate-800/60 dark:bg-slate-900/70 md:px-6">
        {/* Glow light effect behind header */}
        <div className="pointer-events-none absolute -inset-0.5 rounded-full bg-gradient-to-r from-emerald-500/20 via-purple-500/20 to-blue-500/20 opacity-40 blur-md" />

        {/* 3D Pop-Pop Original Logo Monogram */}
        <a href="#top" className="relative z-10 flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.12, rotate: [0, -3, 3, 0] }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -3, 0] }}
            transition={{
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              scale: { type: "spring", stiffness: 400, damping: 15 },
            }}
            className="flex items-center justify-center rounded-2xl border border-slate-200/80 bg-white p-2 px-3 shadow-lg shadow-emerald-500/10 backdrop-blur-md cursor-pointer"
          >
            <img
              src="/logo-vs-full.png"
              alt="Vrushti Shah — Digital Marketing | Web Development"
              className="h-8 w-auto object-contain md:h-9"
            />
          </motion.div>
        </a>

        {/* 3D Glass Navigation Pill */}
        <nav className="relative z-10 hidden items-center gap-1 rounded-full border border-slate-200/60 bg-white/50 p-1.5 shadow-inner backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-950/40 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative rounded-full px-4 py-1.5 text-xs font-bold text-slate-600 transition-all duration-300 hover:bg-white/80 hover:text-slate-900 hover:shadow-sm dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* 3D Action Button */}
        <div className="relative z-10 flex items-center gap-3">
          <a
            href="#contact"
            className="group relative hidden items-center gap-2 overflow-hidden rounded-full bg-slate-900 px-5 py-2 text-xs font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-emerald-600 dark:bg-white dark:text-slate-900 dark:hover:bg-emerald-400 md:inline-flex"
          >
            <Sparkles className="h-3.5 w-3.5 text-emerald-400 transition-transform group-hover:rotate-12 dark:text-emerald-700" />
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-800 shadow-sm backdrop-blur-md dark:border-slate-700 dark:bg-slate-800 dark:text-white md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mt-2 overflow-hidden rounded-3xl border border-white/40 bg-white/90 p-4 shadow-2xl backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/90 md:hidden"
        >
          <nav className="flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-center text-sm font-bold text-white shadow-md"
            >
              <Sparkles className="h-4 w-4" />
              <span>Let&apos;s talk</span>
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  )
}
