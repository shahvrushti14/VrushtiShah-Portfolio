"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "40+", label: "Projects Delivered", detail: "Web, SMM & SEO" },
  { value: "3.5x", label: "Avg. Engagement Lift", detail: "Across Social Channels" },
  { value: "90%", label: "Client Retention Rate", detail: "Long-term Partnerships" },
  { value: "4+", label: "Years Experience", detail: "Digital Marketing & Strategy" },
]

export function Stats() {
  return (
    <section className="relative overflow-hidden px-5 py-20 text-white md:px-8 md:py-24">
      {/* Background radial ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[130px]" />

      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative flex flex-col justify-between rounded-3xl border border-slate-700/80 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/50 hover:shadow-emerald-500/10"
          >
            <div>
              <span className="font-display text-5xl font-extrabold tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-400 md:text-6xl">
                {s.value}
              </span>
              <h3 className="mt-3 font-display text-sm font-bold tracking-wide text-slate-200">
                {s.label}
              </h3>
            </div>

            <p className="mt-4 border-t border-slate-800/80 pt-3 text-[11px] font-semibold text-slate-300">
              {s.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
