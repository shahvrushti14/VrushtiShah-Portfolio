"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { useEffect, useState } from "react"

export function DayNightBackground() {
  const { scrollYProgress } = useScroll()
  const [stars, setStars] = useState<{ id: number; top: number; left: number; size: number; delay: number }[]>([])

  useEffect(() => {
    // Generate twinkling star dots
    const starList = Array.from({ length: 65 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 3,
    }))
    setStars(starList)
  }, [])

  // Scroll Ranges:
  // 0.00 - 0.25: Morning Sunshine Sky (Subah) ☀️
  // 0.25 - 0.60: Sunset Horizon (Sham) 🌇
  // 0.60 - 1.00: Cosmic Starry Night (Raat & Moon) 🌙

  // Sky Opacity Interpolations
  const morningSkyOpacity = useTransform(scrollYProgress, [0, 0.2, 0.35], [1, 0.9, 0])
  const sunsetSkyOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.55, 0.75], [0, 1, 1, 0])
  const nightSkyOpacity = useTransform(scrollYProgress, [0.5, 0.7, 1], [0, 1, 1])

  // Sun Motion (Sets as you scroll down)
  const sunY = useTransform(scrollYProgress, [0, 0.45], ["10%", "65%"])
  const sunX = useTransform(scrollYProgress, [0, 0.45], ["82%", "60%"])
  const sunOpacity = useTransform(scrollYProgress, [0, 0.35, 0.5], [1, 0.85, 0])
  const sunScale = useTransform(scrollYProgress, [0, 0.45], [1, 1.4])

  // Moon Motion (Rises as night falls)
  const moonY = useTransform(scrollYProgress, [0.45, 1], ["75%", "14%"])
  const moonX = useTransform(scrollYProgress, [0.45, 1], ["25%", "82%"])
  const moonOpacity = useTransform(scrollYProgress, [0.45, 0.65, 1], [0, 0.85, 1])

  // Starfield Opacity
  const starOpacity = useTransform(scrollYProgress, [0.45, 0.68, 1], [0, 0.9, 1])

  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden transition-all duration-700">
      {/* ☀️ 1. Morning Sunshine Sky (Subah) - Vibrant Azure, Gold & Sky Blue */}
      <motion.div
        style={{ opacity: morningSkyOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-sky-400 via-amber-200 to-indigo-900"
      />

      {/* 🌇 2. Sunset Sky (Sham) - Golden Orange, Rose & Purple Twilight */}
      <motion.div
        style={{ opacity: sunsetSkyOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-amber-600 via-rose-700 to-purple-950"
      />

      {/* 🌙 3. Cosmic Night Sky (Raat) - Midnight Indigo & Starry Deep Space */}
      <motion.div
        style={{ opacity: nightSkyOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950 to-black"
      />

      {/* ☀️ 3D Sun with Sunshine Flares & Rotating Rays (Subah) */}
      <motion.div
        style={{
          top: sunY,
          left: sunX,
          opacity: sunOpacity,
          scale: sunScale,
        }}
        className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative flex items-center justify-center">
          {/* Rotating Sunburst Rays */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute h-64 w-64 rounded-full bg-gradient-to-r from-amber-300/50 via-yellow-200/40 to-orange-400/30 blur-xl"
          />
          {/* Sunshine Halo Glow */}
          <div className="h-44 w-44 animate-pulse rounded-full bg-amber-300/60 blur-2xl" />
          <div className="absolute h-28 w-28 rounded-full bg-amber-200/70 blur-lg" />
          {/* 3D Sun Core */}
          <div className="absolute h-20 w-20 rounded-full bg-gradient-to-tr from-yellow-100 via-amber-300 to-orange-500 shadow-[0_0_60px_rgba(251,191,36,0.95)]" />
        </div>
      </motion.div>

      {/* 🌙 3D Moon with Craters & Moonlight Halo (Raat) */}
      <motion.div
        style={{
          top: moonY,
          left: moonX,
          opacity: moonOpacity,
        }}
        className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative flex items-center justify-center">
          {/* Moonlight Halo */}
          <div className="h-48 w-48 rounded-full bg-gradient-to-r from-cyan-300/35 via-emerald-400/30 to-indigo-500/25 blur-2xl animate-pulse" />
          <div className="absolute h-28 w-28 rounded-full bg-slate-200/40 blur-xl" />
          {/* 3D Moon Sphere */}
          <div className="absolute h-20 w-20 overflow-hidden rounded-full border-2 border-slate-200/70 bg-gradient-to-tr from-slate-400 via-slate-200 to-white shadow-[0_0_50px_rgba(226,232,240,0.9)]">
            <div className="absolute left-3 top-3 h-5 w-5 rounded-full bg-slate-400/50 blur-[1px]" />
            <div className="absolute left-9 top-8 h-7 w-7 rounded-full bg-slate-400/40 blur-[1px]" />
            <div className="absolute left-4 top-12 h-3.5 w-3.5 rounded-full bg-slate-400/40 blur-[1px]" />
          </div>
        </div>
      </motion.div>

      {/* ✨ Twinkling Stars (Raat) */}
      <motion.div style={{ opacity: starOpacity }} className="absolute inset-0 z-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 2 + star.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
            className="absolute rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1)]"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}
