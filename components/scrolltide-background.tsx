"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function ScrolltideBackground() {
  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(30)

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const xPercent = (e.clientX / window.innerWidth) * 100
      const yPercent = (e.clientY / window.innerHeight) * 100
      mouseX.set(xPercent)
      mouseY.set(yPercent)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-[#07080a]">
      {/* 1. Ambient Tide Glow Spheres */}
      <div className="tide-glow absolute inset-0 opacity-80" />

      {/* 2. Interactive Mouse Spotlight Glow */}
      <motion.div
        className="absolute -inset-40 opacity-40 blur-3xl"
        style={{
          background: `radial-gradient(circle at ${springX.get()}% ${springY.get()}%, rgba(70, 183, 255, 0.25), rgba(139, 243, 230, 0.15) 35%, transparent 70%)`,
        }}
      />

      {/* 3. Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_42%_at_50%_46%,rgba(7,8,10,0.55),transparent_74%)]" />

      {/* 4. Bottom Ambient Fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#07080a]" />
    </div>
  )
}
